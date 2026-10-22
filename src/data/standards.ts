// Национальные стандарты оформления документов — по одному на страну каталога.
//
// Зачем: «правильный документ» — это не только текст по закону, но и оформление
// по нормам страны: поля страницы, кегль, красная строка. В России это
// ГОСТ Р 7.0.97-2016, в Германии — DIN 5008, в Китае — GB/T 9704-2012,
// в Бразилии — Manual de Redação da Presidência и т.д. Генераторы docx/pdf
// берут отсюда поля и базовый кегль; интерфейс показывает, по какому стандарту
// оформлен документ.
//
// Источники значений (проверено 2026-10):
//  - ГОСТ Р 7.0.97-2016 (РФ): поля 20/10/20/20 (левое 30 для документов
//    длительного хранения), кегль 12-14;
//  - ДСТУ 4163:2020 (Украина): правило «3-2-2-1» — левое 30, верх/низ 20,
//    правое 10, Times New Roman 12-14;
//  - Инструкция по делопроизводству в РБ (пост. Минюста РБ № 2, 19.01.2009):
//    левое 30, правое 10, верх/низ 20, Times New Roman 13-14;
//  - DIN 5008:2020 (Германия), Form A: верх 16,9, левое 24,9, правое 20,
//    нижнее 16,9; кегль 8-12 (деловое письмо — 12);
//  - GB/T 9704-2012 (КНР): 天头 37, 订口 (левое) 28, 版心 156×225 →
//    правое 26, нижнее 35; 仿宋 3号 = 16 pt;
//  - 공문서 작성 및 관리규정 (Республика Корея): верх 30, низ 15, левое 20,
//    правое 15; 바탕 11 pt;
//  - Manual de Redação da Presidência da República (Бразилия): левое ≥30,
//    правое 15, верх/низ 20; Times New Roman/Arial 12; отступ абзаца 2,5 см;
//  - США: деловое письмо block format — поля 1 дюйм (25,4 мм), кегль 12,
//    без красной строки; юридическое цитирование — The Bluebook;
//  - Австралия: Australian Government Style Manual (stylemanual.gov.au) —
//    жёстких полей не задаёт, принята практика 1 дюйм/12 pt без отступа;
//  - Турция: Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında
//    Yönetmelik (2018) — состав реквизитов; поля по общепринятой практике;
//  - Япония: конвенция 社外文書 (деловое письмо), JIS Z 8301 — справочный
//    стандарт; поля по типовым шаблонам, кегль 11;
//  - Франция/Польша/Аргентина/Израиль: обязательного национального стандарта
//    деловой переписки нет — принята конвенция (25 мм/12 pt, блок-стиль);
//  - Казахстан и остальные страны СНГ: национальные правила делопроизводства
//    на постсоветской традиции ГОСТ 6.10.1 (поля 30/10/20/20, кегль 14).
//
// Красная строка: у стран с блок-стилем (США, Германия, Франция, Польша,
// Австралия, Израиль, Турция, Корея, Япония) отступ первой строки = 0 —
// абзацы разделяются пустой строкой, как принято в их деловой переписке.

export interface DocStandard {
  /** Короткое обозначение стандарта (для карточки и тестов) */
  code: string;
  nameRu: string;
  nameEn: string;
  /** Что стандарт требует — показывается пользователю */
  descRu: string;
  descEn: string;
  /** Поля страницы А4, мм */
  marginsMm: { top: number; bottom: number; left: number; right: number };
  /** Базовый кегль документа, pt */
  fontPt: number;
  /** Отступ первой строки абзаца, мм (0 — блок-стиль без красной строки) */
  indentFirstLineMm: number;
  /** Официальный источник (проверяется tools/check-links.ts) */
  refUrl?: string;
}

const GOST_TRADITION_DESC_RU =
  'Поля: левое 30 мм, правое 10 мм, верхнее и нижнее 20 мм; Times New Roman 14 pt, красная строка 1,25 см — постсоветская традиция делопроизводства (ГОСТ 6.10.1 / ГОСТ Р 7.0.97)';
const GOST_TRADITION_DESC_EN =
  'Margins: left 30 mm, right 10 mm, top/bottom 20 mm; Times New Roman 14 pt, 1.25 cm first-line indent — the post-Soviet document-management tradition (GOST 6.10.1 / GOST R 7.0.97)';

export const STANDARDS: Record<string, DocStandard> = {
  RU: {
    code: 'ГОСТ Р 7.0.97-2016',
    nameRu: 'ГОСТ Р 7.0.97-2016',
    nameEn: 'GOST R 7.0.97-2016',
    descRu: 'Поля: левое 30 мм (под подшивку), правое 10 мм, верхнее и нижнее 20 мм; Times New Roman 12–14 pt, полуторный интервал, красная строка 1,25 см',
    descEn: 'Margins: left 30 mm (for filing), right 10 mm, top/bottom 20 mm; Times New Roman 12–14 pt, 1.5 line spacing, 1.25 cm first-line indent',
    marginsMm: { top: 20, bottom: 20, left: 30, right: 10 },
    fontPt: 14,
    indentFirstLineMm: 12.5,
    // refUrl намеренно нет: агрегаторы текста ГОСТ (docs.cntd.ru, protect.gost.ru)
    // блокируют автоматические запросы и живость ссылки нельзя гарантировать.
  },
  UA: {
    code: 'ДСТУ 4163:2020',
    nameRu: 'ДСТУ 4163:2020',
    nameEn: 'DSTU 4163:2020',
    descRu: 'Правило «3-2-2-1»: левое поле 30 мм, верхнее и нижнее 20 мм, правое 10 мм; Times New Roman 12–14 pt',
    descEn: 'The "3-2-2-1" rule: left margin 30 mm, top/bottom 20 mm, right 10 mm; Times New Roman 12–14 pt',
    marginsMm: { top: 20, bottom: 20, left: 30, right: 10 },
    fontPt: 14,
    indentFirstLineMm: 12.5,
  },
  BY: {
    code: 'Инструкция по делопроизводству (РБ)',
    nameRu: 'Инструкция по делопроизводству в Республике Беларусь',
    nameEn: 'Belarusian Records Management Instruction',
    descRu: 'Поля: левое 30 мм, правое 10 мм, верхнее и нижнее 20 мм; Times New Roman 13–14 pt (постановление Минюста РБ от 19.01.2009 № 2)',
    descEn: 'Margins: left 30 mm, right 10 mm, top/bottom 20 mm; Times New Roman 13–14 pt (Ministry of Justice resolution No. 2, 19 Jan 2009)',
    marginsMm: { top: 20, bottom: 20, left: 30, right: 10 },
    fontPt: 14,
    indentFirstLineMm: 12.5,
  },
  KZ: {
    code: 'Records management rules (GOST tradition)',
    nameRu: 'Правила делопроизводства (традиция ГОСТ)',
    nameEn: 'Records management rules (GOST tradition)',
    descRu: GOST_TRADITION_DESC_RU,
    descEn: GOST_TRADITION_DESC_EN,
    marginsMm: { top: 20, bottom: 20, left: 30, right: 10 },
    fontPt: 14,
    indentFirstLineMm: 12.5,
  },
  UZ: {
    code: 'Records management rules (GOST tradition)',
    nameRu: 'Правила делопроизводства (традиция ГОСТ)',
    nameEn: 'Records management rules (GOST tradition)',
    descRu: GOST_TRADITION_DESC_RU,
    descEn: GOST_TRADITION_DESC_EN,
    marginsMm: { top: 20, bottom: 20, left: 30, right: 10 },
    fontPt: 14,
    indentFirstLineMm: 12.5,
  },
  KG: {
    code: 'Records management rules (GOST tradition)',
    nameRu: 'Правила делопроизводства (традиция ГОСТ)',
    nameEn: 'Records management rules (GOST tradition)',
    descRu: GOST_TRADITION_DESC_RU,
    descEn: GOST_TRADITION_DESC_EN,
    marginsMm: { top: 20, bottom: 20, left: 30, right: 10 },
    fontPt: 14,
    indentFirstLineMm: 12.5,
  },
  TJ: {
    code: 'Records management rules (GOST tradition)',
    nameRu: 'Правила делопроизводства (традиция ГОСТ)',
    nameEn: 'Records management rules (GOST tradition)',
    descRu: GOST_TRADITION_DESC_RU,
    descEn: GOST_TRADITION_DESC_EN,
    marginsMm: { top: 20, bottom: 20, left: 30, right: 10 },
    fontPt: 14,
    indentFirstLineMm: 12.5,
  },
  AM: {
    code: 'Records management rules (GOST tradition)',
    nameRu: 'Правила делопроизводства (традиция ГОСТ)',
    nameEn: 'Records management rules (GOST tradition)',
    descRu: GOST_TRADITION_DESC_RU,
    descEn: GOST_TRADITION_DESC_EN,
    marginsMm: { top: 20, bottom: 20, left: 30, right: 10 },
    fontPt: 14,
    indentFirstLineMm: 12.5,
  },
  AZ: {
    code: 'Records management rules (GOST tradition)',
    nameRu: 'Правила делопроизводства (традиция ГОСТ)',
    nameEn: 'Records management rules (GOST tradition)',
    descRu: GOST_TRADITION_DESC_RU,
    descEn: GOST_TRADITION_DESC_EN,
    marginsMm: { top: 20, bottom: 20, left: 30, right: 10 },
    fontPt: 14,
    indentFirstLineMm: 12.5,
  },
  MD: {
    code: 'Records management rules (GOST tradition)',
    nameRu: 'Правила делопроизводства (традиция ГОСТ)',
    nameEn: 'Records management rules (GOST tradition)',
    descRu: GOST_TRADITION_DESC_RU,
    descEn: GOST_TRADITION_DESC_EN,
    marginsMm: { top: 20, bottom: 20, left: 30, right: 10 },
    fontPt: 14,
    indentFirstLineMm: 12.5,
  },
  US: {
    code: 'US business letter / Bluebook',
    nameRu: 'Деловое письмо США (block format); цитирование — The Bluebook',
    nameEn: 'US business letter (block format); citations — The Bluebook',
    descRu: 'Поля 1 дюйм (25,4 мм) со всех сторон, Times New Roman 12 pt, блок-стиль без красной строки; ссылки на прецеденты — по The Bluebook',
    descEn: '1-inch (25.4 mm) margins, Times New Roman 12 pt, block style without first-line indent; case citations follow The Bluebook',
    marginsMm: { top: 25.4, bottom: 25.4, left: 25.4, right: 25.4 },
    fontPt: 12,
    indentFirstLineMm: 0,
    refUrl: 'https://www.legalbluebook.com/',
  },
  AU: {
    code: 'Australian Government Style Manual',
    nameRu: 'Australian Government Style Manual',
    nameEn: 'Australian Government Style Manual',
    descRu: 'Обязательных полей стандарт не задаёт; практика — 1 дюйм (25,4 мм), Times New Roman 12 pt, блок-стиль',
    descEn: 'No mandatory margins; common practice — 1 inch (25.4 mm), Times New Roman 12 pt, block style',
    marginsMm: { top: 25.4, bottom: 25.4, left: 25.4, right: 25.4 },
    fontPt: 12,
    indentFirstLineMm: 0,
    refUrl: 'https://stylemanual.gov.au/',
  },
  DE: {
    code: 'DIN 5008',
    nameRu: 'DIN 5008 (Form A)',
    nameEn: 'DIN 5008 (Form A)',
    descRu: 'Поля: верхнее 16,9 мм, нижнее 16,9 мм, левое 24,9 мм, правое 20 мм; кегль 12 pt, блок-стиль без красной строки',
    descEn: 'Margins: top 16.9 mm, bottom 16.9 mm, left 24.9 mm, right 20 mm; 12 pt, block style without first-line indent',
    marginsMm: { top: 16.9, bottom: 16.9, left: 24.9, right: 20 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  FR: {
    code: 'Conventions (modèle de lettre)',
    nameRu: 'Конвенция деловой переписки (модель официального письма)',
    nameEn: 'Business letter conventions (modèle de lettre)',
    descRu: 'Обязательного стандарта нет: поля 25 мм со всех сторон, кегль 12 pt, блок-стиль без красной строки',
    descEn: 'No mandatory standard: 25 mm margins, 12 pt, block style without first-line indent',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 25 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  PL: {
    code: 'Konwencja pisma urzędowego',
    nameRu: 'Конвенция официального письма',
    nameEn: 'Official letter conventions',
    descRu: 'Обязательного стандарта нет: поля 25 мм со всех сторон, кегль 12 pt, блок-стиль без красной строки',
    descEn: 'No mandatory standard: 25 mm margins, 12 pt, block style without first-line indent',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 25 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  CN: {
    code: 'GB/T 9704-2012',
    nameRu: 'GB/T 9704-2012 «Формат официальных документов»',
    nameEn: 'GB/T 9704-2012 (official document layout)',
    descRu: 'Поля: верхнее 37 мм, нижнее 35 мм, левое 28 мм, правое 26 мм; 仿宋 (FangSong) 3-го размера = 16 pt',
    descEn: 'Margins: top 37 mm, bottom 35 mm, left 28 mm, right 26 mm; FangSong size 3 = 16 pt',
    marginsMm: { top: 37, bottom: 35, left: 28, right: 26 },
    fontPt: 16,
    indentFirstLineMm: 11.3,
  },
  JP: {
    code: '社外文書 (JIS Z 8301 — справочно)',
    nameRu: 'Конвенция делового письма (社外文書); JIS Z 8301 — справочно',
    nameEn: 'Business letter conventions (社外文書); JIS Z 8301 as reference',
    descRu: 'Обязательных полей нет; типовой шаблон: верхнее 35 мм, нижнее 30 мм, левое 30 мм, правое 15 мм; ＭＳ 明朝 11 pt, абзацы без отступа',
    descEn: 'No mandatory margins; typical template: top 35 mm, bottom 30 mm, left 30 mm, right 15 mm; MS Mincho 11 pt, paragraphs without indent',
    marginsMm: { top: 35, bottom: 30, left: 30, right: 15 },
    fontPt: 11,
    indentFirstLineMm: 0,
  },
  KR: {
    code: '공문서 작성 및 관리규정',
    nameRu: '공문서 작성 및 관리규정 (правила служебных документов)',
    nameEn: 'Official document management rules (공문서 작성 및 관리규정)',
    descRu: 'Поля: верхнее 30 мм, нижнее 15 мм, левое 20 мм, правое 15 мм; 바탕 (Batang) 11 pt, абзацы без отступа',
    descEn: 'Margins: top 30 mm, bottom 15 mm, left 20 mm, right 15 mm; Batang 11 pt, paragraphs without indent',
    marginsMm: { top: 30, bottom: 15, left: 20, right: 15 },
    fontPt: 11,
    indentFirstLineMm: 0,
  },
  TR: {
    code: 'Resmî Yazışma Yönetmeliği (2018)',
    nameRu: 'Resmî Yazışmalarda Uygulanacak Usul ve Esaslar Hakkında Yönetmelik (2018)',
    nameEn: 'Regulation on Official Correspondence Procedures (2018)',
    descRu: 'Регламент задаёт состав реквизитов; поля по общепринятой практике: 25 мм слева/сверху/снизу и 20 мм справа; Times New Roman 12 pt',
    descEn: 'The regulation defines document elements; margins by common practice: 25 mm left/top/bottom and 20 mm right; Times New Roman 12 pt',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 20 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  IL: {
    code: 'Israeli business conventions',
    nameRu: 'Конвенция деловой переписки (шрифт David, письмо справа налево)',
    nameEn: 'Business letter conventions (David font, right-to-left)',
    descRu: 'Обязательного стандарта нет: поля 25,4 мм, шрифт David 12 pt, направление текста — справа налево',
    descEn: 'No mandatory standard: 25.4 mm margins, David 12 pt, right-to-left text direction',
    marginsMm: { top: 25.4, bottom: 25.4, left: 25.4, right: 25.4 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  BR: {
    code: 'Manual de Redação da Presidência',
    nameRu: 'Manual de Redação da Presidência da República',
    nameEn: 'Manual de Redação da Presidência da República',
    descRu: 'Поля: левое 30 мм, правое 15 мм, верхнее и нижнее 20 мм; Times New Roman 12 pt, отступ первой строки 2,5 см',
    descEn: 'Margins: left 30 mm, right 15 mm, top/bottom 20 mm; Times New Roman 12 pt, 2.5 cm first-line indent',
    marginsMm: { top: 20, bottom: 20, left: 30, right: 15 },
    fontPt: 12,
    indentFirstLineMm: 25,
    refUrl: 'https://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica/manual-de-redacao.pdf',
  },
  AR: {
    code: 'Conveniencia de correspondencia',
    nameRu: 'Конвенция деловой переписки',
    nameEn: 'Business letter conventions',
    descRu: 'Обязательного стандарта нет: поля 25,4 мм со всех сторон, кегль 12 pt, красная строка 1,25 см',
    descEn: 'No mandatory standard: 25.4 mm margins, 12 pt, 1.25 cm first-line indent',
    marginsMm: { top: 25.4, bottom: 25.4, left: 25.4, right: 25.4 },
    fontPt: 12,
    indentFirstLineMm: 12.5,
  },
  GB: {
    code: 'UK business conventions (GOV.UK style)',
    nameRu: 'Конвенция делового письма (стиль GOV.UK)',
    nameEn: 'Business letter conventions (GOV.UK style)',
    descRu: 'Обязательного стандарта нет: поля 1 дюйм (25,4 мм), Times New Roman 12 pt, блок-стиль без красной строки; gov-контент — по GOV.UK Style Guide',
    descEn: 'No mandatory standard: 1-inch (25.4 mm) margins, 12 pt, block style; government content follows the GOV.UK Style Guide',
    marginsMm: { top: 25.4, bottom: 25.4, left: 25.4, right: 25.4 },
    fontPt: 12,
    indentFirstLineMm: 0,
    refUrl: 'https://www.gov.uk/guidance/style-guide',
  },
  IT: {
    code: 'Convenzione della lettera commerciale',
    nameRu: 'Конвенция делового письма (lettera commerciale)',
    nameEn: 'Business letter conventions (lettera commerciale)',
    descRu: 'Обязательного стандарта нет: поля 25 мм со всех сторон, кегль 12 pt, блок-стиль без красной строки',
    descEn: 'No mandatory standard: 25 mm margins, 12 pt, block style without first-line indent',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 25 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  ES: {
    code: 'Convenios de correspondencia (AGE)',
    nameRu: 'Конвенция деловой переписки (практика AGE)',
    nameEn: 'Business letter conventions (AGE practice)',
    descRu: 'Обязательного стандарта нет: поля 25 мм со всех сторон, кегль 12 pt, блок-стиль без красной строки; подача в AGE — по Ley 39/2015',
    descEn: 'No mandatory standard: 25 mm margins, 12 pt, block style; filings to the AGE follow Ley 39/2015',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 25 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  CH: {
    code: 'DIN 5008 (Schweizer Praxis)',
    nameRu: 'DIN 5008 (швейцарская практика деловой переписки)',
    nameEn: 'DIN 5008 (Swiss business practice)',
    descRu: 'Обязательного федерального стандарта нет; в немецкоязычной практике применяется DIN 5008 (Form A): верх/низ 16,9 мм, левое 24,9 мм, правое 20 мм, 12 pt',
    descEn: 'No federal mandatory standard; German-language practice follows DIN 5008 (Form A): top/bottom 16.9 mm, left 24.9 mm, right 20 mm, 12 pt',
    marginsMm: { top: 16.9, bottom: 16.9, left: 24.9, right: 20 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  AT: {
    code: 'DIN 5008 (Österreich Praxis)',
    nameRu: 'DIN 5008 (австрийская практика деловой переписки)',
    nameEn: 'DIN 5008 (Austrian business practice)',
    descRu: 'Обязательного стандарта нет; общепринята практика DIN 5008 (Form A): верх/низ 16,9 мм, левое 24,9 мм, правое 20 мм, 12 pt',
    descEn: 'No mandatory standard; DIN 5008 (Form A) practice is common: top/bottom 16.9 mm, left 24.9 mm, right 20 mm, 12 pt',
    marginsMm: { top: 16.9, bottom: 16.9, left: 24.9, right: 20 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  CA: {
    code: 'The Canadian Style (Translation Bureau)',
    nameRu: 'The Canadian Style (Бюро переводов Канады)',
    nameEn: 'The Canadian Style (Translation Bureau)',
    descRu: 'Обязательных полей стандарт не задаёт; практика — 1 дюйм (25,4 мм), 12 pt, блок-стиль; стиль писем — по The Canadian Style (TERMIUM+)',
    descEn: 'No mandatory margins; common practice — 1 inch (25.4 mm), 12 pt, block style; letter style follows The Canadian Style (TERMIUM+)',
    marginsMm: { top: 25.4, bottom: 25.4, left: 25.4, right: 25.4 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  MX: {
    code: 'Convenios de correspondencia (MX)',
    nameRu: 'Конвенция деловой переписки (сангрия)',
    nameEn: 'Business letter conventions (indented style)',
    descRu: 'Обязательного стандарта нет: поля 25,4 мм со всех сторон, кегль 12 pt, красная строка 1,25 см (стиль с sangría); жалобы потребителей — по LFPC',
    descEn: 'No mandatory standard: 25.4 mm margins, 12 pt, 1.25 cm first-line indent; consumer complaints follow the LFPC',
    marginsMm: { top: 25.4, bottom: 25.4, left: 25.4, right: 25.4 },
    fontPt: 12,
    indentFirstLineMm: 12.5,
  },
  IN: {
    code: 'Manual of Office Procedure (DoPT)',
    nameRu: 'Manual of Office Procedure (Мин-во персонала, DoPT)',
    nameEn: 'Manual of Office Procedure (Ministry of Personnel, DoPT)',
    descRu: 'Служебная переписка правительства Индии — по Manual of Office Procedure; практика: поля левое 30 мм, правое 15 мм, верх/низ 20 мм, 12 pt, блок-стиль; язык — английский',
    descEn: 'Government correspondence follows the Manual of Office Procedure; practice: left 30 mm, right 15 mm, top/bottom 20 mm, 12 pt, block style; language — English',
    marginsMm: { top: 20, bottom: 20, left: 30, right: 15 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  NL: {
    code: 'Conventies bedrijfsbrieven (NEN 4005)',
    nameRu: 'Конвенция делового письма (практика NEN 4005)',
    nameEn: 'Business letter conventions (NEN 4005 practice)',
    descRu: 'Обязательного стандарта нет; исторически широко применяется макет NEN 4005: поля ~25 мм, кегль 12 pt, блок-стиль без красной строки, строка «onderwerp» после адресата',
    descEn: 'No mandatory standard; the NEN 4005 layout is the widely known convention: ~25 mm margins, 12 pt, block style without first-line indent, a "onderwerp" (subject) line after the addressee',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 25 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  BE: {
    code: 'Conventions de correspondance (BE)',
    nameRu: 'Конвенция деловой переписки (трёхъязычная страна)',
    nameEn: 'Business letter conventions (trilingual country)',
    descRu: 'Обязательного федерального стандарта нет: поля 25 мм со всех сторон, кегль 12 pt, блок-стиль без красной строки; язык документа зависит от языкового региона',
    descEn: 'No federal mandatory standard: 25 mm margins, 12 pt, block style without first-line indent; the document language depends on the language region',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 25 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  PT: {
    code: 'Convenções de correspondência (PT)',
    nameRu: 'Конвенция деловой переписки (prática administrativa)',
    nameEn: 'Business letter conventions (administrative practice)',
    descRu: 'Обязательного стандарта нет: поля 25 мм со всех сторон, кегль 12 pt, блок-стиль без красной строки; обращения в госорганы — по Código do Procedimento Administrativo',
    descEn: 'No mandatory standard: 25 mm margins, 12 pt, block style; filings to public bodies follow the Código do Procedimento Administrativo',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 25 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
  SE: {
    code: 'Myndigheternas skrivregler (Språkrådet)',
    nameRu: 'Skrivregler (Совет по шведскому языку, Språkrådet)',
    nameEn: 'Writing rules (Swedish Language Council, Språkrådet)',
    descRu: 'Обязательных полей нет; официальные письма — по Myndigheternas skrivregler: поля 25 мм, кегль 12 pt, блок-стиль без красной строки',
    descEn: 'No mandatory margins; official letters follow Myndigheternas skrivregler: 25 mm margins, 12 pt, block style without first-line indent',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 25 },
    fontPt: 12,
    indentFirstLineMm: 0,
    refUrl: 'https://www.sprakradet.se',
  },
  NO: {
    code: 'Skrivereglar (Språkrådet)',
    nameRu: 'Конвенция делового письма (рекомендации Språkrådet)',
    nameEn: 'Business letter conventions (Språkrådet recommendations)',
    descRu: 'Обязательного стандарта нет: поля 25 мм со всех сторон, кегль 12 pt, блок-стиль без красной строки; рекомендации по официальному стилю — Språkrådet',
    descEn: 'No mandatory standard: 25 mm margins, 12 pt, block style without first-line indent; official style recommendations by Språkrådet',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 25 },
    fontPt: 12,
    indentFirstLineMm: 0,
    refUrl: 'https://www.sprakradet.no',
  },
  DK: {
    code: 'Konventioner (Dansk Sprognævn)',
    nameRu: 'Конвенция делового письма (рекомендации Dansk Sprognævn)',
    nameEn: 'Business letter conventions (Dansk Sprognævn recommendations)',
    descRu: 'Обязательного стандарта нет: поля 25 мм со всех сторон, кегль 12 pt, блок-стиль без красной строки; службы госуслуг — через borger.dk и Digital Post',
    descEn: 'No mandatory standard: 25 mm margins, 12 pt, block style without first-line indent; public services run via borger.dk and Digital Post',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 25 },
    fontPt: 12,
    indentFirstLineMm: 0,
    refUrl: 'https://dsn.dk',
  },
  FI: {
    code: 'Kirjesuositukset (Kotimaisten kielten keskus)',
    nameRu: 'Конвенция делового письма (рекомендации Института языков Финляндии)',
    nameEn: 'Business letter conventions (Institute for the Languages of Finland)',
    descRu: 'Обязательного стандарта нет: поля 25 мм со всех сторон, кегль 12 pt, блок-стиль без красной строки; госуслуги — через Suomi.fi',
    descEn: 'No mandatory standard: 25 mm margins, 12 pt, block style without first-line indent; public services run via Suomi.fi',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 25 },
    fontPt: 12,
    indentFirstLineMm: 0,
    refUrl: 'https://www.kotus.fi',
  },
  GR: {
    code: 'Συμβάσεις αλληλογραφίας (GR)',
    nameRu: 'Конвенция делового письма (практика госорганов)',
    nameEn: 'Business letter conventions (public administration practice)',
    descRu: 'Обязательного стандарта нет: поля 25 мм со всех сторон, кегль 12 pt, блок-стиль без красной строки; обращения в госорганы — через gov.gr (Кодекс административной процедуры, н. 2690/1999)',
    descEn: 'No mandatory standard: 25 mm margins, 12 pt, block style; filings to public bodies via gov.gr (Administrative Procedure Code, law 2690/1999)',
    marginsMm: { top: 25, bottom: 25, left: 25, right: 25 },
    fontPt: 12,
    indentFirstLineMm: 0,
  },
};

/** Стандарт для страны: все страны каталога покрыты; для неизвестного кода —
 *  нейтральная конвенция (A4, 25 мм, 12 pt), чтобы генерация не падала. */
export function standardOf(countryCode: string): DocStandard {
  return (
    STANDARDS[countryCode.toUpperCase()] ?? {
      code: 'Деловая конвенция',
      nameRu: 'Конвенция деловой переписки',
      nameEn: 'Business letter conventions',
      descRu: 'Обязательного стандарта нет: поля 25,4 мм со всех сторон, кегль 12 pt',
      descEn: 'No mandatory standard: 25.4 mm margins, 12 pt',
      marginsMm: { top: 25.4, bottom: 25.4, left: 25.4, right: 25.4 },
      fontPt: 12,
      indentFirstLineMm: 12.5,
    }
  );
}
