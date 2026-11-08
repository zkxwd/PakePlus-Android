# -*- coding: utf-8 -*-
"""打印指定章节的全部题目（id + 题干前 46 字 + 代码首行），供人工复核。"""
import json, os, glob, sys
sys.stdout.reconfigure(encoding="utf-8")
ROOT = r"C:\Users\MECHREVO\Documents\deepseek-harness\default-workspace\c-quiz"
want = [int(x) for x in sys.argv[1:]] or [1, 2, 0]
qs = {q["id"]: q for q in json.load(open(os.path.join(ROOT, "questions.json"), encoding="utf-8"))}
lab = {}
for p in glob.glob(os.path.join(ROOT, "chap", "p[0-9].json")):
    lab.update(json.load(open(p, encoding="utf-8")))
for k in want:
    ids = [i for i, v in lab.items() if v == k]
    print(f"\n===== ch{k} ({len(ids)}) =====")
    for i in ids:
        q = qs[i]
        stem = (q.get("stem") or "").replace("\n", " ")
        code = " / ".join((q.get("code") or [])[:2])[:56]
        print(f"{i:<7} {q['type']:<6} {stem[:46]:<48} {code}")
