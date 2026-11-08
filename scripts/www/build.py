# -*- coding: utf-8 -*-
"""把 questions.json + expl/p*.json + blocked.json 合成前端数据 data.js"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.stdout.reconfigure(encoding="utf-8")

qs = json.load(open(os.path.join(HERE, "questions.json"), encoding="utf-8"))
blocked = json.load(open(os.path.join(HERE, "blocked.json"), encoding="utf-8"))
blocked = [b for b in blocked if b["id"] != "2-11940"]

expl = {}
for name in sorted(os.listdir(os.path.join(HERE, "expl"))):
    if name.endswith(".json"):
        expl.update(json.load(open(os.path.join(HERE, "expl", name), encoding="utf-8")))

chmap = {}
chap_dir = os.path.join(HERE, "chap")
if os.path.isdir(chap_dir):
    for name in sorted(os.listdir(chap_dir)):
        if not name.endswith(".json") or ".why." in name or name.startswith("why"):
            continue
        if name.startswith("tmp-"):  # 临时规则文件，不参与构建
            continue
        part = json.load(open(os.path.join(chap_dir, name), encoding="utf-8"))
        if isinstance(part, dict) and "ch" in part and isinstance(part["ch"], dict):
            part = part["ch"]
        chmap.update(part)
chmap = {k: int(v) for k, v in chmap.items() if isinstance(v, (int, str)) and str(v).lstrip("-").isdigit()}

# 人工复核后的覆盖（overrides.json 最后生效）
ov_path = os.path.join(chap_dir, "overrides.json")
if os.path.isfile(ov_path):
    ov = json.load(open(ov_path, encoding="utf-8"))
    if isinstance(ov, dict) and "ch" in ov and isinstance(ov["ch"], dict):
        ov = ov["ch"]
    ov = {k: int(v) for k, v in ov.items() if isinstance(v, (int, str)) and str(v).isdigit()}
    chmap.update(ov)
    print("overrides:", len(ov), "题")

missing_ch = [q["id"] for q in qs if q["id"] not in chmap]
if missing_ch:
    print("WARN 没有章节的题:", len(missing_ch), missing_ch[:20])
else:
    print("chapters: 全部", len(qs), "题已归类")

ids = {q["id"] for q in qs}
extra = [k for k in expl if k not in ids]
for k in extra:  # 已被 DROP 掉的题，解析留着无妨，构建时忽略
    expl.pop(k)
missing = [q["id"] for q in qs if q["id"] not in expl]
print("questions:", len(qs), "explanations:", len(expl), "missing:", missing, "dropped-expl:", extra)
assert not missing

from collections import Counter

dist = Counter(chmap.get(q["id"], 0) for q in qs)
print("章节分布:", " ".join(f"{k}:{dist[k]}" for k in sorted(dist)))

out = []
for q in qs:
    item = {
        "id": q["id"],
        "section": q["section"],
        "number": q["number"],
        "type": q["type"],
        "stem": q["stem"],
        "code": q.get("code") or [],
        "options": q.get("options") or [],
        "answer": q["answer"],
        "points": q.get("points"),
        "ch": chmap.get(q["id"], 0),
        "expl": expl[q["id"]],
    }
    out.append(item)

payload = {
    "meta": {
        "title": "客观题库 · C语言",
        "total": len(out),
        "judge": sum(1 for q in out if q["type"] == "judge"),
        "choice": sum(1 for q in out if q["type"] == "choice"),
        "source": "客观题库--测试 (judge 333分 + choice 302分, 总分635)",
    },
    "questions": out,
    "blocked": blocked,
}

js = "/* 由 build.py 生成，请勿手改 */\nwindow.QUIZ_DATA = " + json.dumps(payload, ensure_ascii=False, indent=1) + ";\n"
path = os.path.join(HERE, "data.js")
open(path, "w", encoding="utf-8").write(js)
print("wrote", path, os.path.getsize(path), "bytes")
print("judge:", payload["meta"]["judge"], "choice:", payload["meta"]["choice"])
