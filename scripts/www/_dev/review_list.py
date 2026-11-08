# -*- coding: utf-8 -*-
"""导出章节复核清单素材：每章 5 条代表题（id / 题型 / 题干 / 是否带代码）。"""
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
ROOT = r"C:\Users\MECHREVO\Documents\deepseek-harness\default-workspace\c-quiz"
raw = open(os.path.join(ROOT, "data.js"), encoding="utf-8").read()
data = json.loads(raw[raw.index("{"): raw.rindex(";")].strip())
NAMES = {1: "基础知识", 2: "顺序结构", 3: "选择结构", 4: "循环结构", 5: "函数",
         6: "存储类型和预编译", 7: "数组", 8: "指针", 9: "结构体", 10: "文件"}
for k, name in NAMES.items():
    qs = [q for q in data["questions"] if q["ch"] == k]
    idx = [0, len(qs) // 4, len(qs) // 2, (3 * len(qs)) // 4, len(qs) - 1]
    print(f"\n### {k} {name}（{len(qs)} 题）")
    for i in dict.fromkeys(idx):
        q = qs[i]
        code = " [代码]" if q.get("code") else ""
        opts = "".join(o["key"] + o["text"][:12] + " " for o in (q.get("options") or []))[:70]
        print(f"- {q['id']} {q['type']}{code} {q['stem'][:50]}{(' ' + opts) if opts else ''}")
