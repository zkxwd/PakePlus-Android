# -*- coding: utf-8 -*-
"""打印指定 id 的完整题目（题干/代码/选项/答案），供人工复核。"""
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
ROOT = r"C:\Users\MECHREVO\Documents\deepseek-harness\default-workspace\c-quiz"
ids = sys.argv[1:]
qs = {q["id"]: q for q in json.load(open(os.path.join(ROOT, "questions.json"), encoding="utf-8"))}
for i in ids:
    q = qs.get(i)
    if not q:
        print("MISSING", i)
        continue
    print(f"\n--- {i} [{q['type']}] answer={q['answer']} ch=? ---")
    print("stem:", q.get("stem"))
    for ln in q.get("code") or []:
        print("   |", ln)
    opts = q.get("options") or []
    if isinstance(opts, dict):
        opts = [{"key": k, "text": v} for k, v in opts.items()]
    for o in opts:
        print(f"  {o.get('key')}. {o.get('text')}")
    print("  ch:", (q.get("ch") if "ch" in q else "-"))
