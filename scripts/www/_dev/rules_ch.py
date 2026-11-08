# -*- coding: utf-8 -*-
"""粗规则分类，只用于和人工/子代理标注交叉比对，不作为最终结果。"""
import json, os, re, sys

sys.stdout.reconfigure(encoding="utf-8")
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

qs = json.load(open(os.path.join(ROOT, "questions.json"), encoding="utf-8"))

RULES = [
    (10, r"fopen|fclose|FILE\s*\*|fgetc|fputc|fgets|fputs|fread|fwrite|fprintf|fscanf|文件指针|文件操作|打开文件"),
    (9, r"\bstruct\b|\bunion\b|\benum\b|->|结构体|共用体|枚举|typedef|位域"),
    (8, r"指针|\*\s*[A-Za-z_]\w*\s*[=;,)]|&\s*[A-Za-z_]\w*\s*[;,)]|malloc|NULL"),
    (7, r"数组|\[\s*\d*\s*\]|strlen|strcpy|strcmp|strcat|字符数组|二维"),
    (6, r"\bstatic\b|\bextern\b|\bregister\b|#define|#include|#ifdef|#ifndef|宏|预编译|存储类型"),
    (5, r"递归|形参|实参|返回值|函数首部|函数调用|函数定义|函数声明|函数名"),
    (4, r"\bfor\s*\(|\bwhile\s*\(|\bdo\b|循环|continue|\bbreak\b"),
    (3, r"\bif\s*\(|\belse\b|\bswitch\s*\(|\bcase\b|\?:|条件运算符"),
    (2, r"printf|scanf|赋值|逗号表达式|自增|自减|\+\+|--"),
]


def guess(q):
    text = " ".join([q.get("stem") or ""] + (q.get("code") or [])
                    + [o.get("text", "") for o in (q.get("options") or [])])
    for ch, pat in RULES:
        if re.search(pat, text):
            return ch
    return 1


out = {q["id"]: guess(q) for q in qs}
path = os.path.join(HERE, "rules_ch.json")
json.dump(out, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=0)

from collections import Counter
c = Counter(out.values())
print("rules distribution:", dict(sorted(c.items())))
