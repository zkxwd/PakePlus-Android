# -*- coding: utf-8 -*-
"""扫描题干里粘进下一题题号（如「…之和。 1- 不同类型…」）的情况。"""
import json, os, re, sys
sys.stdout.reconfigure(encoding="utf-8")
ROOT = r"C:\Users\MECHREVO\Documents\deepseek-harness\default-workspace\c-quiz"
qs = json.load(open(os.path.join(ROOT, "questions.json"), encoding="utf-8"))
MID = re.compile(r"(?<![0-9A-Za-z])\d{1,2}\s*[-\u2013]\s*\d{1,3}\s*[^\d\s]")
hits = 0
for q in qs:
    stem = q.get("stem") or ""
    for m in MID.finditer(stem):
        if m.start() < 4:
            continue
        hits += 1
        print(f"{q['id']:<7} @{m.start():<3} …{stem[max(0, m.start()-24):m.start()+24]}…")
print("hits", hits)
