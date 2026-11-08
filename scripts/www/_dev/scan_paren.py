# -*- coding: utf-8 -*-
"""判断题题干尾部残留的（）、() 统计"""
import json, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
qs = json.load(open(os.path.join(HERE, "questions.json"), encoding="utf-8"))
pat = re.compile(r"[（(]\s*[)）]\s*[。.]?\s*$")
hit = [q for q in qs if pat.search(q["stem"])]
print("judge:", sum(1 for q in hit if q["type"] == "judge"), "choice:", sum(1 for q in hit if q["type"] == "choice"))
for q in hit[:60]:
    print(q["id"], q["type"], "|", q["stem"][-50:].replace("\n", " "))
