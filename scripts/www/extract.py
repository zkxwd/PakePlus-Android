# -*- coding: utf-8 -*-
"""Extract the C objective question bank from the PDF-derived .docx (v5).

Two independent answer signals are cross-checked:
  * the scanned form's radio glyphs:  ◎ = chosen,  ○ / O / ● = not chosen
  * the "答案 X" tables / paragraphs in the exam report

Questions whose option set cannot be fully recovered (options rendered as
images by the PDF->DOCX converter leave empty paragraphs) are dropped from the
dataset and recorded in blocked.json with the reason.
"""
import re
import sys
import json
import collections
from pathlib import Path

from docx import Document
from docx.table import Table
from docx.text.paragraph import Paragraph

SRC = r"D:\下载\学习资料（课内）\c语言\客观题库--测试.docx"
OUT_DIR = Path(r"C:\Users\MECHREVO\Documents\deepseek-harness\default-workspace\c-quiz")
LETTERS = "ABCDEFGH"

QS_RE = re.compile(r"^\s*(\d+)\s*[-\u2013]\s*(\d+)\s*")
MARK_RE = re.compile(r"(?<![A-Za-z0-9_\u4e00-\u9fff])?([A-H])\s*[.．、]\s*")
PTS_RE = re.compile(r"\s*(\d+(?:\.\d+)?)\s*分\s*$")
ANS_LABEL_RE = re.compile(r"^\s*\|?\s*参考答案\s*$")
ANS_VALUE_RE = re.compile(r"答案\s*[:：]?\s*([A-Ha-h]|T|F|[对错√×])")
TF_RE = re.compile(r"([○◎◯●Oo])\s*([TF])")
RADIOS = "○◎◯●Oo"

# The scanned radio bubble and the report's 答案 table disagree on these five;
# resolved by hand against C semantics (see blocked.json / README of the build).
MANUAL_ANSWER = {
    "1-33": "F",    # 三种循环可以互相嵌套
    "1-46": "T",    # while 的一般形式描述正确
    "1-68": "F",    # unsigned long 自增到回绕前相当于无休止循环
    "1-100": "T",   # 函数指针可以指向函数并经其调用
    "2-118": "C",   # fgetc 需要可读的打开方式
}


def looks_like_code(t):
    if re.search(r"[;{}]", t):
        return True
    if re.search(r"#\s*(include|define)", t):
        return True
    if re.search(r"^\s*(printf|scanf|fopen|for|while|if|else|return|int|char|double|float|void|struct)\b", t) and "(" in t:
        return True
    return False


def load_blocks(path):
    doc = Document(path)
    out = []
    for ch in doc.element.body.iterchildren():
        tag = ch.tag.split("}")[-1]
        if tag == "p":
            out.extend(split_at_heads("p", Paragraph(ch, doc).text))
        elif tag == "tbl":
            tb = Table(ch, doc)
            cells = [c.text for r in tb.rows for c in r.cells]
            ded = []
            for c in cells:
                if not ded or ded[-1] != c:
                    ded.append(c)
            joined = " || ".join(ded)
            if QS_RE.match(joined) or SPLIT_HEAD.search(joined):
                # 有些题号落在表格里（题干被并成一张表），拆开后按单元格各自成块
                for part in [p for p in joined.split(" || ") if p.strip()]:
                    kind = "p" if QS_RE.match(part) else "tbl"
                    out.extend(split_at_heads(kind, part))
            else:
                out.extend(split_at_heads("tbl", joined))
    # 题号独占一个块时（表格拆开后的 "1-47"），把它和下一块合并成真正的题干
    merged = []
    for kind, text in out:
        if merged and HEAD_ONLY.match(merged[-1][1]):
            merged[-1] = (merged[-1][0], merged[-1][1].strip() + " " + text)
        else:
            merged.append((kind, text))
    return merged


HEAD_ONLY = re.compile(r"^\s*\d+\s*[-\u2013]\s*\d+\s*$")



# 题干有时被并进了上一题的代码段里（"… | 1-48若变量已正确定义…"），
# 这里在段落内部把下一题的题号切开，恢复成独立的块。
SPLIT_HEAD = re.compile(r"(?<![0-9A-Za-z])(\d{1,2})\s*[-\u2013]\s*(\d{1,3})(?=\s*[\u4e00-\u9fff])")


def split_at_heads(kind, text):
    cuts = [m.start() for m in SPLIT_HEAD.finditer(text) if m.start() > 0]
    if not cuts:
        return [(kind, text)]
    out, prev = [], 0
    for i in cuts:
        if i > prev:
            out.append((kind, text[prev:i]))
        prev = i
    out.append((kind, text[prev:]))
    return out


def norm(s):
    s = s.replace("\u00a0", " ").replace("\u3000", " ")
    return re.sub(r"[ \t]{2,}", " ", s).strip()


def squeeze_cjk(s):
    return re.sub(r"(?<=[\u4e00-\u9fff]) (?=[\u4e00-\u9fff])", "", s)


def strip_label(text):
    return re.sub(r"\s*\|?\s*参考答案.*$", "", text)


ANS_FRAG_RE = re.compile(r"\s*答案\s*[:：]?\s*([A-Ha-h](?![A-Za-z])|T(?![A-Za-z])|F(?![A-Za-z]))")


def clean_text(s, code=False):
    s = ANS_FRAG_RE.sub(" ", s)
    s = re.sub(r"\s*[|｜]\s*", " ", s)
    if code:
        s = (s.replace("；", ";").replace("，", ",")
               .replace("“", '"').replace("”", '"')
               .replace("（", "(").replace("）", ")")
               .replace("日", "0").replace("Ｏ", "0"))
    s = re.sub(r"[○◎◯●]", " ", s)
    s = re.sub(r"(?<![A-Za-z])O(?![A-Za-z0-9])", " ", s)
    if not code:
        s = re.sub(r"(?:^|\s)[TF](?=\s|$)", " ", s)
        s = re.sub(r"\(\s*。", "()。", s)
    return re.sub(r"\s{2,}", " ", s).strip()


def scan_marks(text):
    """Split one paragraph into option chunks: [(radio, key, body)]."""
    hits = list(MARK_RE.finditer(text))
    if not hits:
        return [], text
    kept, next_idx = [], 0
    for m in hits:
        idx = LETTERS.find(m.group(1))
        if idx == 0 and len(kept) >= 2:
            break                      # a second option run: ignore the rest
        if idx < next_idx:
            continue
        kept.append(m)
        next_idx = idx + 1
    if not kept:
        return [], text
    chunks = []
    for i, m in enumerate(kept):
        end = kept[i + 1].start() if i + 1 < len(kept) else len(text)
        pre = text[max(0, m.start() - 2):m.start()]
        radio = pre.strip()[-1] if pre.strip() and pre.strip()[-1] in RADIOS else None
        chunks.append((radio, m.group(1), text[m.end():end]))
    return chunks, text[:kept[0].start()]


def parse(path):
    blocks = load_blocks(path)
    qstarts = [i for i, (k, t) in enumerate(blocks) if k == "p" and QS_RE.match(t)]
    spans = []
    for j, s in enumerate(qstarts):
        e = qstarts[j + 1] if j + 1 < len(qstarts) else len(blocks)
        m = QS_RE.match(blocks[s][1])
        spans.append((s, e, f"{m.group(1)}-{m.group(2)}", int(m.group(1)), int(m.group(2))))

    table_ans = {}
    for bi, (k, t) in enumerate(blocks):
        am = ANS_VALUE_RE.search(t)
        if not am:
            continue
        val = am.group(1).upper()
        val = {"对": "T", "√": "T", "错": "F", "×": "F"}.get(val, val)
        best, best_d = None, 10 ** 9
        for s, e, qid, _, _ in spans:
            d = 0 if s <= bi < e else (s - bi if bi < s else bi - e + 1)
            if d < best_d:
                best, best_d = qid, d
        if best and best_d <= 4:
            table_ans.setdefault(best, val)

    items = []
    for (s, e, qid, section, number) in spans:
        head = blocks[s][1]
        pm = PTS_RE.search(head)
        points = float(pm.group(1)) if pm else None
        stem_parts = [PTS_RE.sub("", QS_RE.sub("", head, count=1)).strip()]
        code, options = [], []
        radio_answer = radio_tf = None

        for bi in range(s + 1, e):
            k, t = blocks[bi]
            text = norm(strip_label(t))
            if not text or ANS_LABEL_RE.match(t.strip()) or re.fullmatch(r"[\d.]+\s*分", text):
                continue
            if k == "tbl":
                if "答案" in text:
                    continue
                if options:
                    options[-1]["text"] = (options[-1]["text"] + " " + text).strip()
                elif looks_like_code(text):
                    code.append(text)
                continue

            tf = TF_RE.findall(text)
            if tf and len(text) < 40 and not options:
                for glyph, letter in tf:
                    if glyph == "◎":
                        radio_tf = letter
                continue

            chunks, prefix = scan_marks(text)
            if chunks:
                if prefix.strip():
                    stem_parts.append(prefix.strip())
                for radio, key, body in chunks:
                    if any(o["key"] == key for o in options):   # repeated run: stop
                        break
                    body = norm(body)
                    if radio == "◎":
                        radio_answer = key
                    options.append({"key": key, "text": body})
                continue

            if k == "tbl" and options:
                options[-1]["text"] = (options[-1]["text"] + " " + text).strip()
                continue
            if looks_like_code(text):
                code.append(text)
            elif options:
                options[-1]["text"] = (options[-1]["text"] + " " + text).strip()
            else:
                stem_parts.append(text)

        answer = radio_tf if section == 1 else radio_answer
        if answer is None:
            answer, source = table_ans.get(qid), "table"
        elif qid in table_ans and table_ans[qid] != answer:
            source = f"radio!=table({table_ans[qid]})"
        else:
            source = "radio"

        items.append({
            "id": qid,
            "section": section,
            "number": number,
            "type": "judge" if section == 1 else "choice",
            "stem": clean_text(squeeze_cjk(" ".join(p for p in stem_parts if p))),
            "code": [clean_text(squeeze_cjk(c), code=True) for c in code],
            "options": [{"key": o["key"], "text": clean_text(squeeze_cjk(o["text"]))}
                        for o in options],
            "answer": answer,
            "answer_source": source,
            "points": points,
        })
    return items


def validate(items):
    """Return (kept, blocked). A choice item needs A..D, all with text."""
    kept, blocked = [], []
    for it in items:
        if it["number"] > 300:                     # junk span from a date string
            blocked.append((it["id"], "编号异常"))
            continue
        if it["type"] == "choice":
            # options that were rendered as standalone tables lost their A./B. labels
            if not it["options"] and len(it["code"]) == 4:
                it["options"] = [{"key": k, "text": c} for k, c in zip("ABCD", it["code"][:4])]
                it["code"] = []
            keys = "".join(o["key"] for o in it["options"])
            if sorted(keys) == list("ABCD"):       # scrambled order: sort by key
                it["options"].sort(key=lambda o: o["key"])
                keys = "".join(o["key"] for o in it["options"])
            texts = [o["text"] for o in it["options"]]
            if keys != "ABCD":
                blocked.append((it["id"], f"选项字母缺失({keys or '无'})"))
                continue
            if any(not t for t in texts):
                blocked.append((it["id"], "选项内容缺失(图片未转换)"))
                continue
        if not it["answer"]:
            blocked.append((it["id"], "无答案"))
            continue
        if it["id"] in MANUAL_ANSWER:              # radio and answer-table disagree
            it["answer"] = MANUAL_ANSWER[it["id"]]
            it["answer_source"] = "adjudicated"
            it["stem"] = clean_text(it["stem"])
        if len(it["stem"]) < 6:
            blocked.append((it["id"], "题干缺失"))
            continue
        kept.append(it)
    return kept, blocked


if __name__ == "__main__":
    items = parse(SRC)
    kept, blocked = validate(items)
    (OUT_DIR / "questions.json").write_text(
        json.dumps(kept, ensure_ascii=False, indent=1), encoding="utf-8")
    (OUT_DIR / "blocked.json").write_text(
        json.dumps([{"id": i, "reason": r} for i, r in blocked], ensure_ascii=False, indent=1),
        encoding="utf-8")
    print("parsed", len(items), "kept", len(kept), "blocked", len(blocked))
    print("kept types:", dict(collections.Counter(i["type"] for i in kept)))
    print("blocked types:", dict(collections.Counter(
        "judge" if i.split("-")[0] == "1" else "choice" for i, _ in blocked)))
    print("blocked:", blocked)
    print("conflicts:", [(i["id"], i["answer"], i["answer_source"])
                         for i in kept if i["answer_source"].startswith("radio!=")])
    print("source mix:", dict(collections.Counter(i["answer_source"] for i in kept)))
