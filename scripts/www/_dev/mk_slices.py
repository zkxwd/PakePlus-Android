# -*- coding: utf-8 -*-
"""把 questions.json 切成 4 份纯文本，供分批分类使用。"""
import json, os, sys, math

sys.stdout.reconfigure(encoding="utf-8")
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

qs = json.load(open(os.path.join(ROOT, "questions.json"), encoding="utf-8"))
N = 4
size = math.ceil(len(qs) / N)

for part in range(N):
    chunk = qs[part * size:(part + 1) * size]
    if not chunk:
        continue
    lines = []
    for q in chunk:
        lines.append("=" * 8)
        lines.append(f"id: {q['id']}   type: {q['type']}   answer: {q['answer']}")
        lines.append("stem: " + (q.get("stem") or "").replace("\n", " "))
        code = q.get("code") or []
        if code:
            lines.append("code:")
            for ln in code:
                lines.append("  " + ln)
        for o in q.get("options") or []:
            lines.append(f"  {o['key']}. {o['text']}")
    text = "\n".join(lines) + "\n"
    path = os.path.join(HERE, f"slice{part + 1}.txt")
    open(path, "w", encoding="utf-8").write(text)
    print(path, len(chunk), "items", len(text), "chars", chunk[0]["id"], "→", chunk[-1]["id"])
