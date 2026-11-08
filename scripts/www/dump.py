# -*- coding: utf-8 -*-
"""Dump raw blocks inside given question spans, for manual repair."""
import sys, re
from docx import Document
from docx.table import Table
from docx.text.paragraph import Paragraph

SRC = r"D:\下载\学习资料（课内）\c语言\客观题库--测试.docx"
QS_RE = re.compile(r"^\s*(\d+)\s*[-\u2013]\s*(\d+)\s*")


def blocks():
    doc = Document(SRC)
    out = []
    for ch in doc.element.body.iterchildren():
        tag = ch.tag.split("}")[-1]
        if tag == "p":
            out.append(("p", Paragraph(ch, doc).text))
        elif tag == "tbl":
            tb = Table(ch, doc)
            cells = [c.text for r in tb.rows for c in r.cells]
            ded = []
            for c in cells:
                if not ded or ded[-1] != c:
                    ded.append(c)
            out.append(("tbl", " || ".join(ded)))
    return out


def main():
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    want = sys.argv[1:]
    bs = blocks()
    starts = [i for i, (k, t) in enumerate(bs) if k == "p" and QS_RE.match(t)]
    span = {}
    for j, s in enumerate(starts):
        e = starts[j + 1] if j + 1 < len(starts) else len(bs)
        m = QS_RE.match(bs[s][1])
        span[f"{m.group(1)}-{m.group(2)}"] = (s, e)
    for qid in want:
        if qid not in span:
            print("!! no span", qid)
            continue
        s, e = span[qid]
        print(f"\n===== {qid}  blocks {s}..{e}")
        for bi in range(s, min(e, s + 40)):
            k, t = bs[bi]
            print(f"  [{bi}:{k}] {t[:260]!r}")


main()
