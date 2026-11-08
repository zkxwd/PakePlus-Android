# -*- coding: utf-8 -*-
"""对 questions.json 做最后一遍定点修补（只改确知的 OCR 损伤）"""
import json, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
HERE = os.path.dirname(os.path.abspath(__file__))
PATH = os.path.join(HERE, "questions.json")
qs = json.load(open(PATH, encoding="utf-8"))

# 定点修补：id -> [(字段, 原串, 新串)]
REPAIRS = {
    "1-51": [
        ("stem", "结束。 若变量已正确定义，执行以下程序段，输入0或者负数时，循环结束。", "结束。"),
        ("code", None, ["total =0;", "scanf(\"%d\",&score); while(score >=0){",
                        "total =total+score;", "scanf(\"%d\",&score);", "}"]),
    ],
    "2-74": [
        ("code", None, ["int main(void)", "{", "int m,n;", "printf(\"Enter m,n;\");",
                        "scanf(\"%d%d\",&m,&n);", "while(m !=n)", "{ while(m >n) m =m-n;",
                        "while(n>m) n =n -m;", "}", "printf(\"m=%d\\n\",m);",
                        "return 0; }"]),
        ("optD", "m=0 下列程序段的输出结果是()。 return日；", "m=0"),
        ("stem", "输入6514<回车>", "输入 65 14<回车>"),
    ],
    "2-59": [("stem", " c = 日 ；", "")],
    "2-73": [("code", None, ["x = -1;", "do {", "x = x * x;", "} while (x == 0);"])],
    "2-81": [("stem", " return日；", "")],
    "1-60": [("stem", "m%i==日满足", "m%i==0满足")],
    "2-135": [("stem", "定义chars[6]*ps=s", "定义char s[6],*ps=s")],
    "2-150": [("stem", "字符数组chara[50],b[50]", "字符数组char a[50],b[50]")],
    "2-156": [
        ("stem", "7.已知 charx[]=“hello”, y[]={‘h',' e’,'a’,' b','e’};",
         "已知 char x[]=\"hello\", y[]={'h','e','a','b','e'};"),
    ],
    "2-79": [("code", "X=x*x;", "x=x*x;")],
    # 2-33 题干只剩「表达式」前缀 + 代码里赋值给了大写的 C（printf 用的是小写 c，否则编译不过），
    # 答案 A = -5 / -3 = 1 只有在 c = a/b 时才成立，故按此修
    "2-33": [
        ("stem", "表达式下面的程序段将输出.", "下面程序段的输出结果是"),
        ("code", None, ["int a=-5,b=-3,c;", "c = a/b;", "printf(\"%d\\n\",c);"]),
        ("optD", "- 2", "-2"),
    ],
    # 1-147 题干后半句是相邻题的残留（该题的代码块已丢失），截掉
    "1-147": [("stem", " 下面这段代码，用%d格式打印输出double型变量，将会进行取整，输出为了。", "")],
    # 1-257 后面粘着下一题（题号在 OCR 里丢了），只保留本题
    "1-257": [("stem", " 1- 不同类型的结构变量之间也可以直接赋值。 1分", "")],
    # 同上：1-247 的题干尾部粘着下一题「字符串常量实质上是…」
    "1-247": [("stem", " 1- 字符串常量实质上是一个指向该字符串首字符的指针常量。 1分", "")],
}


def apply_repairs():
    log = []
    for q in qs:
        for field, old, new in REPAIRS.get(q["id"], []):
            if field.startswith("opt"):
                key = field[3:]
                for o in q["options"]:
                    if o["key"] == key and old in o["text"]:
                        o["text"] = o["text"].replace(old, new)
                        log.append((q["id"], field, old, new))
                continue
            if field == "code":
                if old is None:  # 整段替换
                    q["code"] = list(new)
                    log.append((q["id"], "code", "<replace>", new))
                    continue
                joined = "\n".join(q.get("code") or [])
                if old in joined:
                    q["code"] = [c.replace(old, new) for c in q.get("code") or []]
                    log.append((q["id"], "code", old, new))
                continue
            if old in q[field]:
                q[field] = q[field].replace(old, new)
                log.append((q["id"], field, old, new))
    return log


# 被下一题题干"黏"进来的内容：遇到 "2-74 运行…" 这样的下一题题号就截断
HEAD = re.compile(r"(?<!\S)(\d{1,2})-(\d{1,3})(?=\s*[\u4e00-\u9fff])")


def truncate_q(q):
    changed = False
    m = HEAD.search(q["stem"])
    if m:
        q["stem"] = q["stem"][:m.start()].rstrip(" |，,;；")
        changed = True

    code = q.get("code") or []
    keep = []
    for line in code:
        mm = HEAD.search(line)
        if mm:
            head = line[:mm.start()].rstrip(" |，,;；")
            if head.strip():
                keep.append(head)
            changed = True
            break
        keep.append(line)
    if changed:
        q["code"] = keep

    for o in q["options"]:
        mm = HEAD.search(o["text"])
        if mm:
            o["text"] = o["text"][:mm.start()].rstrip(" |，,;；")
            changed = True
    return changed


log = apply_repairs()
for row in log:
    print("repair", row)

cut = [q["id"] for q in qs if truncate_q(q)]
print("truncated at next-question head:", cut)

# 去掉题号前缀（"7.已知…"）
n = 0
for q in qs:
    m = re.match(r"^\s*\d+\.\s*", q["stem"])
    if m:
        q["stem"] = q["stem"][m.end():]
        n += 1
print("strip leading number:", n)

# 判断题没有填空，题干尾部残留的 "（）" 去掉
m = 0
for q in qs:
    if q["type"] != "judge":
        continue
    new = re.sub(r"\s*[（(]\s*[)）]\s*[。.]?\s*$", "", q["stem"])
    if new != q["stem"]:
        q["stem"] = new
        m += 1
print("strip judge blank paren:", m)

# 代码里的连写修补（return0 → return 0;）
n = 0
for q in qs:
    code = q.get("code") or []
    for i, line in enumerate(code):
        new = re.sub(r"\breturn\s*(?=\d)", "return ", line.replace("return0", "return 0"))
        if new != line:
            code[i] = new
            n += 1
    q["code"] = code
print("code tidy:", n)

# 题干整段以图片形式丢失、只剩代码的题，答不出来，收进 blocked
DROP = {
    "1-148": "题干以图片形式丢失，无法作答",
    "2-146": "题干只剩「*字符数组(1-3)」，代码与考点均丢失，无法作答",
}
BPATH = os.path.join(HERE, "blocked.json")
blocked = json.load(open(BPATH, encoding="utf-8"))
have = {b["id"] for b in blocked}
for qid, reason in DROP.items():
    qs = [q for q in qs if q["id"] != qid]
    if qid not in have:
        blocked.append({"id": qid, "reason": reason})
        print("drop -> blocked", qid, reason)
json.dump(blocked, open(BPATH, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

json.dump(qs, open(PATH, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("saved", PATH)
