# -*- coding: utf-8 -*-
"""残留脏数据扫描"""
import json, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
HERE = os.path.dirname(os.path.abspath(__file__))
qs = json.load(open(os.path.join(HERE, "questions.json"), encoding="utf-8"))


def flag(q):
    s = q["stem"]
    out = []
    if "答案" in s:
        out.append("stem-答案")
    if "参考答案" in s:
        out.append("stem-参考")
    if re.search(r"[（(]\s*[)）]\s*$", s):
        out.append("tail-empty-paren")
    if s.endswith("。。"):
        out.append("dot-dot")
    if re.search(r"\s[TF]\s*$", s):
        out.append("tail-TF")
    if len(s) < 8:
        out.append("short:%r" % s)
    c = " ".join(q.get("code") or [])
    if "答案" in c:
        out.append("code-答案")
    for o in q.get("options") or []:
        t = o["text"]
        if "答案" in t:
            out.append("opt-答案:%s" % o["key"])
        if re.search(r"\s[TF]$", t):
            out.append("opt-TF:%s" % o["key"])
        if len(t.strip()) < 1:
            out.append("opt-empty:%s" % o["key"])
    if q["type"] == "choice" and len(q["options"]) != 4:
        out.append("opt-count:%d" % len(q["options"]))
    return out


n = 0
for q in qs:
    f = flag(q)
    if f:
        n += 1
        if n <= 60:
            print(q["id"], q["type"], f, "|", q["stem"][:80].replace("\n", " "))
print("total flagged", n, "of", len(qs))
