"""生成 PWA 图标：纸白底 + 墨色等宽 C + 答题卡气泡行。

用法：python _dev/make_icons.py
输出到上一级目录：icon-192.png / icon-512.png / icon-maskable-512.png / apple-touch-icon.png
"""
import os
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.dirname(HERE)

PAPER = (242, 243, 240)
INK = (20, 23, 26)

FONT_CANDIDATES = [
    r"C:\Windows\Fonts\consolab.ttf",
    r"C:\Windows\Fonts\consola.ttf",
    r"C:\Windows\Fonts\arialbd.ttf",
]


def font(size):
    for p in FONT_CANDIDATES:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


def draw_icon(size, maskable=False):
    img = Image.new("RGB", (size, size), PAPER)
    d = ImageDraw.Draw(img)
    s = size / 512.0

    # 内框：答题卡的细边（maskable 时也留在安全区内）
    inset = 26 * s
    d.rectangle([inset, inset, size - inset, size - inset], outline=INK, width=max(1, round(4 * s)))

    # 大号等宽 C
    f = font(round(300 * s))
    d.text((size / 2, 246 * s), "C", font=f, fill=INK, anchor="mm")

    # 三个气泡，中间那个被填涂
    cy = 392 * s
    r = 24 * s
    for i, cx in enumerate((194 * s, 256 * s, 318 * s)):
        if i == 1:
            d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=INK)
        else:
            d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=INK, width=max(1, round(6 * s)))
    return img


def main():
    big = draw_icon(512)
    big.save(os.path.join(OUT, "icon-512.png"), optimize=True)
    big.resize((192, 192), Image.LANCZOS).save(os.path.join(OUT, "icon-192.png"), optimize=True)
    big.save(os.path.join(OUT, "icon-maskable-512.png"), optimize=True)
    big.resize((180, 180), Image.LANCZOS).save(os.path.join(OUT, "apple-touch-icon.png"), optimize=True)
    print("icons written to", OUT)


if __name__ == "__main__":
    main()
