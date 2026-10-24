#!/usr/bin/env python3
# Переименование name-таблиц подмножеств CJK-шрифтов (LEG-1, аудит 2026-10-24).
#
# Подмножества DocGen{Zh,Ja,Ko}-*.ttf — Modified Version по SIL OFL 1.1
# (изменение через удаление компонентов при сабсеттинге). §3 OFL запрещает
# Modified Version использовать Reserved Font Name «Noto» — иначе лицензия
# ничтожна (§TERMINATION). Скрипт переименовывает nameID 1/3/4/6/16/17 в
# «DocGen Serif <Zh|Ja|Ko> …», сохраняя авторские nameID 0/13/14 (атрибуция
# по §2/§4 OFL остаётся внутри файла).
#
# Режимы:
#   --apply  FILE...  — переименовать (перезаписывает файл на месте)
#   --check  FILE...  — CI-гейт: exit 1, если в nameID 1/4/6 встречается «Noto»
#
# Запуск: python3 tools/rename-font-names.py --apply public/fonts/DocGen*.ttf
import sys
from pathlib import Path

from fontTools.ttLib import TTFont

NEW_FAMILY = {'Zh': 'DocGen Serif Zh', 'Ja': 'DocGen Serif Ja', 'Ko': 'DocGen Serif Ko'}
RFN = 'Noto'
# nameID: 1 family, 2 subfamily, 3 unique, 4 full, 6 postscript, 16 typo family, 17 typo subfamily
RENAME_IDS = {1, 3, 4, 6, 16, 17}


def sfx_of(path: Path) -> str:
    stem = path.stem  # DocGenZh-Regular
    for s in ('Zh', 'Ja', 'Ko'):
        if stem.startswith(f'DocGen{s}'):
            return s
    raise SystemExit(f'✗ {path}: имя не DocGen{{Zh,Ja,Ko}}-*')


def style_of(path: Path) -> str:
    return 'Bold' if 'Bold' in path.stem else 'Regular'


def new_names(path: Path) -> dict[int, str]:
    sfx, style = sfx_of(path), style_of(path)
    fam = NEW_FAMILY[sfx]
    ps = fam.replace(' ', '') + ('-Bold' if style == 'Bold' else '-Regular')
    return {
        1: fam,
        2: style,
        3: f'{ps}: DocGen subset ({sfx})',
        4: f'{fam} {style}',
        6: ps,
        16: fam,
        17: style,
    }


def main() -> int:
    if len(sys.argv) < 3 or sys.argv[1] not in ('--apply', '--check'):
        print(__doc__)
        return 2
    mode, files = sys.argv[1], [Path(p) for p in sys.argv[2:]]
    bad = []
    for p in files:
        # lazy=False: с lazy=True fontTools запрещает перезапись файла на месте
        font = TTFont(str(p))
        name_table = font['name']
        names = {r.nameID: r.toUnicode() for r in name_table.names if r.nameID in {1, 4, 6}}
        if mode == '--apply':
            repl = new_names(p)
            for rec in name_table.names:
                if rec.nameID in RENAME_IDS and rec.nameID in repl:
                    # платформа 3/1 (Windows/Unicode) и 1/0 (Mac/Roman) — обе записи
                    rec.string = repl[rec.nameID].encode(rec.getEncoding())
            font.save(str(p))
            print(f'✓ {p.name}: nameID 1/3/4/6/16/17 → «{repl[4]}»')
        else:
            hits = {k: v for k, v in names.items() if RFN in v}
            if hits:
                bad.append((p, hits))
        font.close()
    if mode == '--check':
        if bad:
            for p, hits in bad:
                print(f'✗ {p}: RFN «{RFN}» в nameID {sorted(hits)} — {hits}', file=sys.stderr)
            print(f'\n✗ LEG-1: RFN «{RFN}» обнаружен в {len(bad)} файлах '
                  f'(нарушение SIL OFL 1.1 §3) — запустите tools/rename-font-names.py --apply',
                  file=sys.stderr)
            return 1
        print(f'✓ RFN «{RFN}» не встречается в nameID 1/4/6 ({len(files)} файлов)')
    return 0


if __name__ == '__main__':
    sys.exit(main())
