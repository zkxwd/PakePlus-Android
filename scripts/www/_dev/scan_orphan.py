# -*- coding: utf-8 -*-
"""扫描题干里孤立的题号前缀（如「…之和。 1- 不同类型…」这种下一题残留）。"""
import json, os, re, sys
sys.stdout.reconfigure(encoding="utf-8")
ROOT = r"C:\Users\MECHREVO\Documents\deepseek-harness\default-workspace\c-quiz"
qs = json.load(open(os.path.join(ROOT, "questions.json"), encoding="utf-8"))
ORPHAN = re.compile(r"(?<![0-9A-Za-z])(\d{1,2})\s*[-\u2013]\s*(?![0-9])")
n = 0
for q in qs:
    stem = q.get("stem") or ""
    for m in ORPHAN.finditer(stem):
        if m.start() < 6:
            continue
        n += 1
        print(f"{q['id']:<7} @{m.start():<3} …{stem[max(0, m.start()-26):m.start()+26]}…")
print("orphan-head hits", n)
