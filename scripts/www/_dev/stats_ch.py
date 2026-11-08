# -*- coding: utf-8 -*-
"""按章节统计 data.js 里的题目数与题型分布。"""
import json, os, re, sys
from collections import Counter

sys.stdout.reconfigure(encoding="utf-8")
ROOT = r"C:\Users\MECHREVO\Documents\deepseek-harness\default-workspace\c-quiz"
raw = open(os.path.join(ROOT, "data.js"), encoding="utf-8").read()
raw = raw[raw.index("{"): raw.rindex(";")].strip()
data = json.loads(raw)
names = {1: "基础知识", 2: "顺序结构", 3: "选择结构", 4: "循环结构", 5: "函数",
         6: "存储类型和预编译", 7: "数组", 8: "指针", 9: "结构体", 10: "文件", 0: "其他"}
tot = Counter()
for q in data["questions"]:
    tot[(q["ch"], q["type"])] += 1
print("| 章节 | 合计 | 判断 | 选择 |")
print("| --- | --: | --: | --: |")
for k in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]:
    j, c = tot[(k, "judge")], tot[(k, "choice")]
    if j + c == 0:
        continue
    print(f"| {k} {names[k]} | {j + c} | {j} | {c} |")
print("total", len(data["questions"]), "judge", sum(v for (k, t), v in tot.items() if t == "judge"),
      "choice", sum(v for (k, t), v in tot.items() if t == "choice"))
print("blocked", len(data["blocked"]))
# 抽样：每章 4 条，供最终答复里的复核清单
for k in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
    ids = [q for q in data["questions"] if q["ch"] == k]
    picks = [ids[i] for i in (0, len(ids)//3, 2*len(ids)//3, len(ids)-1)]
    print(f"\n[{k}] {names[k]}")
    for q in dict.fromkeys([p["id"] for p in picks]):
        qq = next(x for x in ids if x["id"] == q)
        print(f"  {qq['id']:<7} {qq['type']:<6} {qq['stem'][:34]}")
