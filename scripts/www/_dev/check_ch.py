# -*- coding: utf-8 -*-
"""检查章节标注：覆盖率、分布、与粗规则的冲突、每章抽样。"""
import json, os, sys, glob
from collections import Counter, defaultdict

sys.stdout.reconfigure(encoding="utf-8")
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

qs = {q["id"]: q for q in json.load(open(os.path.join(ROOT, "questions.json"), encoding="utf-8"))}
labels, why = {}, {}
for p in sorted(glob.glob(os.path.join(ROOT, "chap", "p[0-9].json"))):
    labels.update(json.load(open(p, encoding="utf-8")))
for p in sorted(glob.glob(os.path.join(ROOT, "chap", "p[0-9].why.json"))):
    why.update(json.load(open(p, encoding="utf-8")))
rules = json.load(open(os.path.join(HERE, "rules_ch.json"), encoding="utf-8"))
ov = json.load(open(os.path.join(ROOT, "chap", "overrides.json"), encoding="utf-8"))
labels.update({k: int(v) for k, v in ov.items()})
print("overrides applied:", len(ov))

missing = [i for i in qs if i not in labels]
extra = [i for i in labels if i not in qs]
print("labels:", len(labels), "questions:", len(qs), "missing:", missing, "extra:", extra)

names = {1: "基础知识", 2: "顺序结构", 3: "选择结构", 4: "循环结构", 5: "函数",
         6: "存储类型和预编译", 7: "数组", 8: "指针", 9: "结构体", 10: "文件", 0: "其他"}
cnt = Counter(labels.values())
print("\n分布:")
for k in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]:
    sub = Counter(qs[i]["type"] for i in labels if labels[i] == k)
    print(f"  {k:>2} {names[k]:<10} {cnt.get(k,0):>3} 题   判断 {sub.get('judge',0):>3}  选择 {sub.get('choice',0):>3}")

dis = [i for i in labels if rules.get(i) != labels[i]]
print(f"\n与粗规则冲突: {len(dis)} 条")
for i in dis[:25]:
    q = qs[i]
    print(f"  {i:<7} 标{labels[i]}({names[labels[i]]}) 规则{rules[i]}({names[rules[i]]})  {q['type']}  {(q.get('stem') or '')[:34]}")

print("\n每章抽样（4 条，供人工核对）:")
by = defaultdict(list)
for i, k in labels.items():
    by[k].append(i)
for k in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]:
    ids = by.get(k, [])
    picks = [ids[j] for j in (0, len(ids) // 3, 2 * len(ids) // 3, len(ids) - 1)] if ids else []
    print(f"\n[{k}] {names[k]} ({len(ids)})")
    for i in dict.fromkeys(picks):
        q = qs[i]
        print(f"  {i:<7} {q['type']:<6} {(q.get('stem') or '')[:52]}")
        if q.get("code"):
            print(f"          code: {q['code'][0][:52]}")

print(f"\nwhy 条目: {len(why)}")
for i, t in list(why.items())[:6]:
    print(f"  {i}: {t}")
