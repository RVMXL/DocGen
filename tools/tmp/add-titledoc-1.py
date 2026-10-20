#!/usr/bin/env python3
# Bulk-insert titleDoc (заголовок на языке документа) после titleRu в страновых файлах.
# Каждый map: slug → titleDoc. Вставка идёт СТРОГО после строки titleRu: ... внутри блока slug.
import io, re, sys

def insert_titles(path: str, slugs: dict[str, str]) -> int:
    s = io.open(path, encoding='utf-8').read()
    done = 0
    for slug, title in slugs.items():
        # блок от slug до следующего slug/конца; внутри него строка titleRu
        pat = re.compile(
            r"(slug:\s*'" + re.escape(slug) + r"'[\s\S]{0,400}?titleRu:\s*'[^']*',)",
            re.M,
        )
        m = pat.search(s)
        if not m:
            print(f"  ! {path}: {slug} — блок не найден", file=sys.stderr)
            continue
        if f"titleDoc" in s[m.start():m.end() + 200] and False:
            continue
        # вставляем titleDoc сразу после titleRu-строки
        insert_pos = m.end()
        s = s[:insert_pos] + f"\n    titleDoc: '{title}'," + s[insert_pos:]
        done += 1
    io.open(path, 'w', encoding='utf-8').write(s)
    return done

KZ = {
 'kz-work-vacation': 'Жыл сайынғы ақы төленетін еңбек демалысына өтініш',
 'kz-work-unpaid': 'Еңбек ақысы сақталмайтын демалысқа өтініш',
 'kz-work-dismissal': 'Өз еркімен жұмыстан босату туралы өтініш',
 'kz-work-docs': 'Жұмыс орнынан құжаттар беруді сұрау өтініші',
 'kz-claim-goods': 'Сатушыға тауар сапасы туралы шағым',
 'kz-lawsuit-debt': 'Қарызды өндіріп алу туралы арыз',
 'kz-uni-receipt': 'Қолхат',
 'kz-uni-power': 'Сенатнама',
 'kz-edu-absence': 'Мектепке баланың сабаққа қатыспауы туралы өтініш',
 'kz-med-complaint': 'Дәрігерге шағым',
}
UZ = {
 'uz-work-vacation': 'Yillik pullik mehnat ta\u2018tiliga ariza',
 'uz-work-unpaid': 'Ish haqi saqlanmagan ta\u2018tilga ariza',
 'uz-work-dismissal': 'O\u2018z xohishi bilan ishdan bo\u2018shatilish haqida ariza',
 'uz-work-docs': 'Ish joyidan hujjatlar berishni so\u2018rash haqida ariza',
 'uz-claim-goods': 'Sotuvchiga tovar sifati bo\u2018yicha shikoyat',
 'uz-lawsuit-debt': 'Qarzni undirish haqida da\u2018vo arizasi',
 'uz-uni-receipt': 'Qarz olish qarznomasi (qo\u2018lxat)',
 'uz-uni-power': 'Ishonchnoma',
 'uz-edu-absence': 'Maktabga bola sababsiz qatnashmasligi haqida ariza',
 'uz-med-complaint': 'Shifokorga shikoyat',
}
BY = {
 'by-work-vacation': 'Заява пра штогадовы аплачваны водпачак',  # placeholder replaced below
}
print('KZ:', insert_titles('src/data/templates/kz.ts', KZ))
print('UZ:', insert_titles('src/data/templates/uz.ts', UZ))
