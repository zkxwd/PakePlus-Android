# -*- coding: utf-8 -*-
"""统计需要 polish 的文本特征"""
import json, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
qs = json.load(open(os.path.join(HERE, "questions.json"), encoding="utf-8"))

curly = [q["id"] for q in qs if re.search(r"[“”‘’]", q["stem"] + "".join(o["text"] for o in q["options"]) + " ".join(q.get("code") or []))]
leadnum = [(q["id"], q["stem"][:20]) for q in qs if re.match(r"^\s*\d+\.", q["stem"])]
spacechar = [(q["id"], q["stem"]) for q in qs if re.search(r"' [A-Za-z0-9]'", q["stem"])]
print("curly:", len(curly), curly[:20])
print("leading number:", len(leadnum), leadnum)
print("char-literal with space:", len(spacechar))
for i, s in spacechar[:10]:
    print(" ", i, s[:90])
