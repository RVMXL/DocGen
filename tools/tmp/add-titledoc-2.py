#!/usr/bin/env python3
# titleDoc пакет 2: by, ua, az, kg, tj
import io, re, sys

def insert_titles(path: str, slugs: dict) -> int:
    s = io.open(path, encoding='utf-8').read()
    done = 0
    for slug, title in slugs.items():
        pat = re.compile(r"(slug:\s*'" + re.escape(slug) + r"'[\s\S]{0,400}?titleRu:\s*'[^']*',)", re.M)
        m = pat.search(s)
        if not m:
            print(f"  ! {path}: {slug} не найден", file=sys.stderr); continue
        if re.search(r"titleDoc", s[m.end():m.end()+60]):
            continue  # уже есть
        s = s[:m.end()] + f"\n    titleDoc: '{title}'," + s[m.end():]
        done += 1
    io.open(path, 'w', encoding='utf-8').write(s)
    return done

BY = {
 'by-work-vacation': 'Заява пра штогадовы аплачваны адпуск',
 'by-work-unpaid': 'Заява пра адпуск без захавання заробітнай платы',
 'by-work-dismissal': 'Заява пра звальненне па ўласным жаданні',
 'by-work-docs': 'Заява пра выданне дакументаў, звязаных з працай',
 'by-claim-goods': 'Прэтэнзія прадаўцу пра вяртанне тавару належнай якасці',
 'by-lawsuit-debt': 'Пазоўная заява аб спаганні доўгу па распісцы',
 'by-uni-receipt': 'Распіска пра атрыманне грашовых сродкаў у пазыку',
 'by-uni-power': 'Даверанасць',
 'by-edu-absence': 'Заява ў школу пра прапуск заняткаў',
 'by-med-complaint': 'Скарга на якасць медыцынскай дапамогі',
}
UA = {
 'ua-work-vacation': 'Заява про надання щорічної оплачуваної відпустки',
 'ua-work-unpaid': 'Заява про відпустку без збереження заробітної плати',
 'ua-work-dismissal': 'Заява про звільнення за власним бажанням',
 'ua-work-docs': 'Заява про видачу документів, пов’язаних з роботою',
 'ua-claim-goods': 'Претензія продавцю про повернення товару неналежної якості',
 'ua-lawsuit-debt': 'Позовна заява про стягнення боргу за розпискою',
 'ua-uni-receipt': 'Розписка про отримання грошових коштів у позику',
 'ua-uni-power': 'Довіреність',
 'ua-edu-absence': 'Заява до школи про відсутність дитини на заняттях',
 'ua-med-complaint': 'Скарга на якість медичної допомоги',
}
AZ = {
 'az-work-vacation': 'İllik ödənişli əmək məzuniyyəti üçün ərizə',
 'az-work-unpaid': 'Ödənişsiz məzuniyyət üçün ərizə',
 'az-work-dismissal': 'Öz təşəbbüsü ilə işdən çıxma ərizəsi',
 'az-work-docs': 'İşlə bağlı sənədlərin verilməsi haqqında ərizə',
 'az-claim-goods': 'Satıcıya malın qaytarılması ilə bağlı iddia',
 'az-lawsuit-debt': 'Borcun ödənilməsi haqqında iddia ərizəsi',
 'az-uni-receipt': 'Pul borcunun qəbzi (borc sənədi)',
 'az-uni-power': 'Vəkilnamə',
 'az-edu-absence': 'Məktəbə uşağın dərsə gəlməməsi barədə ərizə',
 'az-med-complaint': 'Tibbi xidmətin keyfiyyətinə şikayət',
}
KG = {
 'kg-work-vacation': 'Жылдык акы төлөнүүчү эмгек демалысына арыз',
 'kg-work-unpaid': 'Эмгек акы сакталбаган демалыска арыз',
 'kg-work-dismissal': 'Өз каалоосу менен иштен бошотулуу тууралуу арыз',
 'kg-work-docs': 'Ишке байланышкан документтерди берүүнү сураны арыз',
 'kg-claim-goods': 'Сатуучуга товарды кайтаруу боюнча доо кат',
 'kg-lawsuit-debt': 'Карызды өндүрүп алуу тууралуу доо арызы',
 'kg-uni-receipt': 'Акча карыз алуу боюнча кол кагаз (карызнома)',
 'kg-uni-power': 'Ишеним кат',
 'kg-edu-absence': 'Мектепке бала сабакка катышпаганы тууралуу арыз',
 'kg-med-complaint': 'Медициналык жардамдын сапаты боюнча даттануу',
}
TJ = {
 'tj-work-vacation': 'Аризаи татули солонаи пардохтшаванда',
 'tj-work-unpaid': 'Аризаи татул бе нигоҳдории маош',
 'tj-work-dismissal': 'Аризаи аз кор баромадан бо хоҳиши шахсӣ',
 'tj-work-docs': 'Аризаи додани ҳуҷҷатҳои марбут ба кор',
 'tj-claim-goods': 'Претензия ба фурӯшанда дар бораи баргардонидани мол',
 'tj-lawsuit-debt': 'Давонома дар бораи ҷамъоварии қарз мувофиқи қарзнома',
 'tj-uni-receipt': 'Қарзномаи гирифтани маблағ дар қарз',
 'tj-uni-power': 'Ваколатнома',
 'tj-edu-absence': 'Аризаи мактаб дар бораи ғойибии кӯдак',
 'tj-med-complaint': 'Шикоят ба сифати ёрии тиббӣ',
}

for name, mp in [('src/data/templates/by.ts', BY), ('src/data/templates/ua.ts', UA),
                 ('src/data/templates/az.ts', AZ), ('src/data/templates/kg.ts', KG),
                 ('src/data/templates/tj.ts', TJ)]:
    print(name, insert_titles(name, mp))
