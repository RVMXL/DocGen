#!/usr/bin/env python3
"""
Сборка подмножеств CJK-шрифтов для PDF-генератора DocGen.

Выход: public/fonts/DocGen{Zh,Ja,Ko}-{Regular,Bold}.ttf
Стратегия: pyftsubset поверх Noto Serif SC/JP/KR. Набор символов =
  - все символы шаблонов соответствующего языка (src/data/templates/*.ts)
  - плюс стандартный «общий» набор:
      zh — 3500 常用汉字 (现代汉语常用字表)
      ja — 常用漢字 (2136) + хирагана/катакана
      ko — 2350 слогов KS X 1001
  - плюс латиница, цифры, пунктуация, CJK-пунктуация.
Это ограничение задокументировано: PDF использует подмножество; DOCX
не встраивает шрифты и отображается системным шрифтом целиком.
"""
import os
import re
import subprocess
import sys
import urllib.request

ROOT = '/home/z/my-project'
FONT_OUT = os.path.join(ROOT, 'public', 'fonts')
TMP = '/tmp/docgen-fonts'

SC_DIR = '/usr/share/fonts/truetype/noto-serif-sc'
URLS = {
    'Ja-Regular': 'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Serif/SubsetOTF/JP/NotoSerifJP-Regular.otf',
    'Ja-Bold': 'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Serif/SubsetOTF/JP/NotoSerifJP-Bold.otf',
    'Ko-Regular': 'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Serif/SubsetOTF/KR/NotoSerifKR-Regular.otf',
    'Ko-Bold': 'https://raw.githubusercontent.com/notofonts/noto-cjk/main/Serif/SubsetOTF/KR/NotoSerifKR-Bold.otf',
}
CHARSET_URLS = {
    'zh3500': 'https://raw.githubusercontent.com/elephantnose/characters/master/3500%E5%B8%B8%E7%94%A8%E6%B1%89%E5%AD%97.txt',
    'joyo': 'https://raw.githubusercontent.com/hiroshi-manabe/Joyo-Kanji-List/master/joyo.tsv',
}


def fetch(url, dst):
    if os.path.exists(dst) and os.path.getsize(dst) > 1000:
        return dst
    print('↓', url)
    urllib.request.urlretrieve(url, dst)
    return dst


def template_chars(file_prefixes: list[str]) -> tuple[set[int], set[int]]:
    """Символы шаблонов указанных стран + интерполятора дат.
    Возвращает (charset, check): check — только текст шаблонов страны
    (без комментариев/кода и общих файлов)."""
    tdir = os.path.join(ROOT, 'src', 'data', 'templates')
    files = [f'{p}.ts' for p in file_prefixes] + ['../../lib/docgen/interpolate.ts']
    codes: set[int] = set()
    for fn in files:
        path = os.path.join(tdir, fn)
        text = open(path, encoding='utf-8').read()
        for ch in text:
            codes.add(ord(ch))
    # для проверки: только содержимое кавычек файла страны (текст шаблона и образцы)
    check: set[int] = set()
    ctext = open(os.path.join(tdir, f'{file_prefixes[0]}.ts'), encoding='utf-8').read()
    for m in re.finditer(r"'([^']*)'|\"([^\"]*)\"", ctext):
        for ch in (m.group(1) or m.group(2) or ''):
            check.add(ord(ch))
    return codes, check


def base_charset() -> set[int]:
    """Латиница, цифры, пунктуация, типографика, CJK-пунктуация."""
    codes = set()
    for a, b in [
        (0x0020, 0x007E),      # Basic Latin
        (0x00A0, 0x00FF),      # Latin-1
        (0x2010, 0x2027),      # dashes, quotes
        (0x2030, 0x203A),
        (0x20A9, 0x20A9),      # won
        (0x20AC, 0x20AC),      # euro
        (0x2116, 0x2116),      # numero
        (0x2212, 0x2212),
        (0x3000, 0x303F),      # CJK punctuation
        (0x30FB, 0x30FB),
        (0xFF01, 0xFF65),      # fullwidth forms
        (0x00B7, 0x00B7),
    ]:
        codes.update(range(a, b + 1))
    return codes


def main():
    os.makedirs(TMP, exist_ok=True)
    os.makedirs(FONT_OUT, exist_ok=True)

    # ── наборы символов ────────────────────────────────────────────────────
    zh = fetch(CHARSET_URLS['zh3500'], f'{TMP}/zh3500.txt')
    zh_chars = set()
    for line in open(zh, encoding='utf-8'):
        zh_chars.update(ord(c) for c in line.strip() if c.strip())

    joyo = fetch(CHARSET_URLS['joyo'], f'{TMP}/joyo.tsv')
    ja_chars = set()
    for line in open(joyo, encoding='utf-8'):
        if line.strip() and not line.startswith('#'):
            ja_chars.add(ord(line[0]))
    ja_chars.update(range(0x3041, 0x30FF + 1))  # kana

    ko_chars = set()
    for line in open(f'{TMP}/ksx1001.txt', encoding='utf-8', errors='ignore'):
        m = re.match(r'^0x[0-9A-F]+\s+0x([0-9A-F]+)', line.strip())
        if m:
            cp = int(m.group(1), 16)
            if 0xAC00 <= cp <= 0xD7A3:
                ko_chars.add(cp)
    print(f'наборы: zh={len(zh_chars)}, ja={len(ja_chars)}, ko={len(ko_chars)}')

    tpl_zh, chk_zh = template_chars(['cn'])
    tpl_ja, chk_ja = template_chars(['jp'])
    tpl_ko, chk_ko = template_chars(['kr'])
    common = base_charset()

    jobs = [
        ('DocGenZh', f'{SC_DIR}/NotoSerifSC-Regular.ttf', f'{SC_DIR}/NotoSerifSC-Bold.ttf', zh_chars, tpl_zh),
        ('DocGenJa', None, None, ja_chars, tpl_ja),
        ('DocGenKo', None, None, ko_chars, tpl_ko),
    ]
    for name, src_reg, src_bold, langset, tpl in jobs:
        charset = langset | tpl | common
        text = ''.join(chr(c) for c in sorted(charset))
        text_file = f'{TMP}/{name}-charset.txt'
        open(text_file, 'w', encoding='utf-8').write(text)
        for weight, src in (('Regular', src_reg), ('Bold', src_bold)):
            if src is None:  # JP/KR — скачать
                key = name.replace('DocGen', '')
                src = fetch(URLS[f'{key}-{weight}'], f"{TMP}/src-{key}-{weight}.otf")
            out = os.path.join(FONT_OUT, f'{name}-{weight}.ttf')
            subprocess.run([
                'pyftsubset', src,
                f'--text-file={text_file}',
                f'--output-file={out}',
                '--layout-features=*',
                '--drop-tables+=DSIG',
                '--name-IDs=*',
            ], check=True)
            size = os.path.getsize(out) // 1024
            print(f'✓ {name}-{weight}.ttf — {size} КБ')

    # ── проверка покрытия шаблонных символов ──────────────────────────────
    from fontTools.ttLib import TTFont
    tpls = {'DocGenZh': chk_zh, 'DocGenJa': chk_ja, 'DocGenKo': chk_ko}
    missing_total = 0
    for name, tpl in tpls.items():
        cmap = TTFont(os.path.join(FONT_OUT, f'{name}-Regular.ttf')).getBestCmap()
        miss = [c for c in tpl if c not in cmap and chr(c).strip()]
        if miss:
            missing_total += len(miss)
            print(f'✗ {name}: отсутствуют {len(miss)}: {"".join(chr(c) for c in miss[:20])!r}')
        else:
            print(f'✓ {name}: покрытие шаблонов полное')
    if missing_total:
        sys.exit(1)


if __name__ == '__main__':
    main()
