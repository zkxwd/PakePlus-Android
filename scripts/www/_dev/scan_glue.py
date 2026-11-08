# -*- coding: utf-8 -*-
"""鎵惧嚭浠ｇ爜閲岃鍚炴帀绌烘牸鐨勫叧閿瓧"""
import json, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
qs = json.load(open(os.path.join(HERE, "questions.json"), encoding="utf-8"))

KW = r"(char|int|float|double|long|short|void|struct|unsigned|signed|FILE|for|while|switch|case|return|sizeof|typedef|const|static|printf|scanf|main)"
pat = re.compile(r"(?<![A-Za-z_])" + KW + r"(?=[A-Za-z_])([A-Za-z_]\w*)")

hits = []
for q in qs:
    for where in ("stem",):
        s = q[where]
        for m in pat.finditer(s):
            hits.append((q["id"], where, m.group(0), s[max(0, m.start() - 20):m.end() + 20].replace("\n", " ")))
for h in hits[:80]:
    print(h)
print("total", len(hits))

