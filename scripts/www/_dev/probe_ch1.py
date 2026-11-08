# -*- coding: utf-8 -*-
import json, os, glob, sys
sys.stdout.reconfigure(encoding="utf-8")
ROOT = r"C:\Users\MECHREVO\Documents\deepseek-harness\default-workspace\c-quiz"
qs = {q["id"]: q for q in json.load(open(os.path.join(ROOT, "questions.json"), encoding="utf-8"))}
lab = {}
for p in glob.glob(os.path.join(ROOT, "chap", "p[0-9].json")):
    lab.update(json.load(open(p, encoding="utf-8")))

one = [i for i, k in lab.items() if k == 1]
withcode = [i for i in one if qs[i].get("code")]
print("ch1 total", len(one), "with code", len(withcode))
for i in withcode:
    q = qs[i]
    print("-", i, q["type"], "|", (q.get("stem") or "")[:44], "|", (q["code"][0] if q.get("code") else "")[:44])

two = [i for i, k in lab.items() if k == 2]
print("\nch2 items:", two)
