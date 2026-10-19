// Справочник стран. docLang — государственный язык страны:
// он определяет, на каком языке создаются шаблоны и документы.
// Язык интерфейса выбирается отдельно в онбординге и на документы не влияет.
//
// ТЗ, приоритет MVP: Россия и СНГ. Бэклог (теперь реализован): США, Европа
// (Германия, Франция, Польша — по странам, а не группой), Китай, Япония, Ю. Корея,
// Австралия, Турция, Израиль, Бразилия, Аргентина.
//
// Ссылки на порталы — официальные ресурсы государственных услуг (проверены, октябрь 2026).
import type { CountryDef } from './types';

export const COUNTRIES: CountryDef[] = [
  // ── Россия и СНГ (приоритет первого этапа по ТЗ) ──────────────────────────
  {
    code: 'RU', nameRu: 'Россия', nameEn: 'Russia', flag: '🇷🇺', region: 'cis', docLang: 'ru',
    currencyRu: 'рубль', currencyIn: 'рублях', currencyEn: 'ruble',
    portals: [
      { nameRu: 'Госуслуги — портал государственных услуг', nameEn: 'Gosuslugi — state services portal', url: 'https://www.gosuslugi.ru',
        descRu: 'Большинство обращений в госорганы (жалобы, заявления, записи) подаются через Госуслуги. Заявления работодателю подаются в общем порядке делопроизводства.',
        descEn: 'Most applications to government bodies are filed via Gosuslugi. Applications to the employer follow standard document-management practice.' },
    ],
  },
  {
    code: 'KZ', nameRu: 'Казахстан', nameEn: 'Kazakhstan', flag: '🇰🇿', region: 'cis', docLang: 'kk',
    currencyRu: 'тенге', currencyIn: 'тенге', currencyEn: 'tenge',
    portals: [
      { nameRu: 'eGov — портал «Электронное правительство»', nameEn: 'eGov — e-government portal', url: 'https://egov.kz',
        descRu: 'Типовые услуги (справки, обращения, выплаты) оформляются через eGov или приложение eGov Mobile. Заявления работодателю подаются в общем порядке делопроизводства.',
        descEn: 'Most standard services are filed via eGov or the eGov Mobile app. Applications to the employer follow standard document-management practice.' },
    ],
  },
  {
    code: 'BY', nameRu: 'Беларусь', nameEn: 'Belarus', flag: '🇧🇾', region: 'cis', docLang: 'be',
    currencyRu: 'белорусский рубль', currencyIn: 'белорусских рублях', currencyEn: 'Belarusian ruble',
    portals: [
      { nameRu: '«Е-Паслуга» — единый портал электронных услуг', nameEn: 'E-Pasluga — unified e-services portal', url: 'https://e-pasluga.by',
        descRu: 'Государственные услуги предоставляются через единый портал «Е-Паслуга» и его мобильное приложение. Обращения граждан также принимаются онлайн.',
        descEn: 'Government e-services are provided via the unified E-Pasluga portal and its mobile app. Citizens’ appeals are also accepted online.' },
    ],
  },
  {
    code: 'UA', nameRu: 'Украина', nameEn: 'Ukraine', flag: '🇺🇦', region: 'cis', docLang: 'uk',
    currencyRu: 'гривна', currencyIn: 'гривнах', currencyEn: 'hryvnia',
    portals: [
      { nameRu: 'Дія — портал державних послуг', nameEn: 'Diia — state services portal', url: 'https://diia.gov.ua',
        descRu: 'Державні послуги надаються через портал і застосунок «Дія». Заяви роботодавцю та претензії подаються у загальному порядку діловодства.',
        descEn: 'State e-services are provided via the Diia portal and app. Applications to the employer follow standard document-management practice.' },
    ],
  },
  {
    code: 'UZ', nameRu: 'Узбекистан', nameEn: 'Uzbekistan', flag: '🇺🇿', region: 'cis', docLang: 'uz',
    currencyRu: 'сум', currencyIn: 'сумах', currencyEn: 'sum',
    portals: [
      { nameRu: 'my.gov.uz — единый портал интерактивных государственных услуг', nameEn: 'my.gov.uz — unified e-services portal', url: 'https://my.gov.uz/ru',
        descRu: 'Государственные услуги предоставляются через единый портал my.gov.uz. Типовые заявления работодателю оформляются в порядке делопроизводства.',
        descEn: 'Government e-services are provided via the my.gov.uz unified portal. Applications to the employer follow standard practice.' },
    ],
  },
  {
    code: 'KG', nameRu: 'Кыргызстан', nameEn: 'Kyrgyzstan', flag: '🇰🇬', region: 'cis', docLang: 'kg',
    currencyRu: 'сом', currencyIn: 'сомах', currencyEn: 'som',
    portals: [
      { nameRu: '«Түндүк» — государственный портал электронных услуг', nameEn: 'Tunduk — state e-services portal', url: 'https://portal.tunduk.kg',
        descRu: 'Государственные услуги предоставляются через портал «Түндүк». Типовые заявления работодателю оформляются в общем порядке делопроизводства.',
        descEn: 'Government e-services are provided via the Tunduk portal. Applications to the employer follow standard practice.' },
    ],
  },
  {
    code: 'TJ', nameRu: 'Таджикистан', nameEn: 'Tajikistan', flag: '🇹🇯', region: 'cis', docLang: 'tg',
    currencyRu: 'сомони', currencyIn: 'сомони', currencyEn: 'somoni',
    portals: [
      { nameRu: 'gov.tj — официальный портал государственных органов', nameEn: 'gov.tj — official government portal', url: 'https://gov.tj',
        descRu: 'Официальная информация о государственных органах и услугах Таджикистана размещается на gov.tj. Типовые заявления оформляются в общем порядке делопроизводства.',
        descEn: 'Official information on government bodies and services is provided at gov.tj. Applications follow standard practice.' },
    ],
  },
  {
    code: 'AM', nameRu: 'Армения', nameEn: 'Armenia', flag: '🇦🇲', region: 'cis', docLang: 'hy',
    currencyRu: 'драм', currencyIn: 'драмах', currencyEn: 'dram',
    portals: [
      { nameRu: 'e-gov.am — электронное правительство Армении', nameEn: 'e-gov.am — Armenian e-government', url: 'https://www.e-gov.am',
        descRu: 'Государственные услуги предоставляются через портал электронного правительства e-gov.am. Обращения граждан принимаются онлайн.',
        descEn: 'Government e-services are provided via the e-gov.am portal. Citizens’ appeals are accepted online.' },
    ],
  },
  {
    code: 'AZ', nameRu: 'Азербайджан', nameEn: 'Azerbaijan', flag: '🇦🇿', region: 'cis', docLang: 'az',
    currencyRu: 'манат', currencyIn: 'манатах', currencyEn: 'manat',
    portals: [
      { nameRu: 'mygov.az — официальный государственный портал', nameEn: 'mygov.az — official state platform', url: 'https://mygov.az',
        descRu: 'Государственные услуги предоставляются через официальный портал mygov.az (электронное правительство Азербайджана).',
        descEn: 'Government e-services are provided via the official mygov.az portal (Azerbaijani e-government).' },
    ],
  },
  {
    code: 'MD', nameRu: 'Молдова', nameEn: 'Moldova', flag: '🇲🇩', region: 'cis', docLang: 'ro',
    currencyRu: 'лей', currencyIn: 'леях', currencyEn: 'leu',
    portals: [
      { nameRu: 'servicii.gov.md — единая платформа государственных услуг', nameEn: 'servicii.gov.md — unified state services platform', url: 'https://servicii.gov.md',
        descRu: 'Государственные услуги описаны и частично предоставляются на единой платформе servicii.gov.md.',
        descEn: 'State services are described and partly provided at servicii.gov.md.' },
    ],
  },

  // ── Бэклог ТЗ: Европа (по отдельным странам) ───────────────────────────────
  {
    code: 'DE', nameRu: 'Германия', nameEn: 'Germany', flag: '🇩🇪', region: 'europe', docLang: 'de',
    currencyRu: 'евро', currencyIn: 'евро', currencyEn: 'euro',
    portals: [
      { nameRu: 'bund.de — федеральный административный портал', nameEn: 'bund.de — federal administration portal', url: 'https://www.bund.de',
        descRu: 'Центральный доступ к онлайн-услугам федеральных ведомств Германии. Многие заявления (Elterngeld, BAföG, регистрационные дела) подаются в ведомства письменно или онлайн через их порталы.',
        descEn: 'Central access to online services of German federal authorities.' },
      { nameRu: 'Your Europe — официальные услуги ЕС для граждан', nameEn: 'Your Europe — official EU citizen services', url: 'https://europa.eu/youreurope/citizens/index_de.htm',
        descRu: 'Права граждан ЕС и порядок действий в каждой стране ЕС: потребительские права, работа, здравоохранение.',
        descEn: 'EU citizens’ rights and step-by-step guidance in every EU country: consumer rights, work, healthcare.' },
    ],
  },
  {
    code: 'FR', nameRu: 'Франция', nameEn: 'France', flag: '🇫🇷', region: 'europe', docLang: 'fr',
    currencyRu: 'евро', currencyIn: 'евро', currencyEn: 'euro',
    portals: [
      { nameRu: 'service-public.fr — портал государственных услуг', nameEn: 'service-public.fr — public services portal', url: 'https://www.service-public.fr',
        descRu: 'Единый портал французских госуслуг: процедуры, бланки (Cerfa), онлайн-подача. Многие вопросы (суды, соцвыплаты, заявления) решаются через личный кабинет France Connect.',
        descEn: 'The unified French public services portal: procedures, Cerfa forms, online filing.' },
    ],
  },
  {
    code: 'PL', nameRu: 'Польша', nameEn: 'Poland', flag: '🇵🇱', region: 'europe', docLang: 'pl',
    currencyRu: 'злотый', currencyIn: 'злотых', currencyEn: 'zloty',
    portals: [
      { nameRu: 'obywatel.gov.pl — услуги для гражданина', nameEn: 'obywatel.gov.pl — citizen services', url: 'https://www.gov.pl/web/obywatel',
        descRu: 'Государственные услуги Польши: заявления, справки, электронная подача через profil zaufany. Часть вопросов решается только онлайн.',
        descEn: 'Polish government services: applications, certificates, e-filing via trusted profile.' },
    ],
  },

  // ── Бэклог ТЗ: Азия ────────────────────────────────────────────────────────
  {
    code: 'CN', nameRu: 'Китай', nameEn: 'China', flag: '🇨🇳', region: 'asia', docLang: 'zh',
    currencyRu: 'юань', currencyIn: 'юанях', currencyEn: 'yuan',
    portals: [
      { nameRu: '国家政务服务平台 — национальная платформа госуслуг', nameEn: 'National e-services platform', url: 'https://gjzwfw.www.gov.cn',
        descRu: 'Государственные сервисы КНР: заявления, справки, запись в ведомства. Многие обращения подаются онлайн через провинциальные платформы.',
        descEn: 'China’s national e-government platform: applications, certificates, agency appointments.' },
      { nameRu: '12315 — платформа защиты прав потребителей', nameEn: '12315 — consumer protection platform', url: 'https://www.12315.cn',
        descRu: 'Официальная платформа Государственного управления по регулированию рынка (SAMR) для жалоб потребителей на товары и услуги.',
        descEn: 'Official SAMR platform for consumer complaints about goods and services.' },
    ],
  },
  {
    code: 'JP', nameRu: 'Япония', nameEn: 'Japan', flag: '🇯🇵', region: 'asia', docLang: 'ja',
    currencyRu: 'иена', currencyIn: 'иенах', currencyEn: 'yen',
    portals: [
      { nameRu: 'マイナポータル — государственный портал', nameEn: 'Myna Portal — government services portal', url: 'https://myna.go.jp',
        descRu: 'Портал правительства Японии: онлайн-заявления, справки, запись в учреждения через My Number Card.',
        descEn: 'The Japanese government portal: online applications, certificates, appointments via My Number Card.' },
      { nameRu: '国民生活センター — центр защиты прав потребителей', nameEn: 'National Consumer Affairs Center', url: 'https://www.kokusen.go.jp',
        descRu: 'Государственный центр консультаций потребителей: стандарты разрешения споров и информация о недобросовестных практиках.',
        descEn: 'The national consumer affairs center: dispute-resolution standards and unfair-practice information.' },
    ],
  },
  {
    code: 'KR', nameRu: 'Южная Корея', nameEn: 'South Korea', flag: '🇰🇷', region: 'asia', docLang: 'ko',
    currencyRu: 'вона', currencyIn: 'вонах', currencyEn: 'won',
    portals: [
      { nameRu: '정부24 — портал государственных услуг', nameEn: 'Gov.kr — government services portal', url: 'https://www.gov.kr',
        descRu: 'Единый портал государственных услуг Кореи: справки, заявления, обращения подаются онлайн.',
        descEn: 'The unified Korean e-government portal: certificates, applications and appeals filed online.' },
      { nameRu: '한국소비자원 — корейское агентство защиты потребителей', nameEn: 'Korea Consumer Agency', url: 'https://www.kca.go.kr',
        descRu: 'Государственное агентство: жалобы потребителей, стандарты урегулирования споров (소비자분쟁해결기준).',
        descEn: 'The state consumer agency: complaints and dispute-resolution standards.' },
    ],
  },
  {
    code: 'TR', nameRu: 'Турция', nameEn: 'Turkey', flag: '🇹🇷', region: 'asia', docLang: 'tr',
    currencyRu: 'лира', currencyIn: 'лирах', currencyEn: 'lira',
    portals: [
      { nameRu: 'e-Devlet — портал государственных услуг', nameEn: 'e-Devlet — e-government portal', url: 'https://www.turkiye.gov.tr',
        descRu: 'Единый портал e-Devlet: справки, заявления, записи и обращения в большинство госорганов Турции подаются онлайн.',
        descEn: 'The unified e-Devlet portal: certificates, applications and appeals to most Turkish agencies are filed online.' },
      { nameRu: 'Ticaret Bakanlığı — защита потребителей', nameEn: 'Ministry of Trade — consumer protection', url: 'https://www.ticaret.gov.tr/tuketicinin-korunmasi',
        descRu: 'Министерство торговли: потребительские споры, арбитраж комитетов (Tüketici Hakem Heyeti), реестр жалоб.',
        descEn: 'Ministry of Trade: consumer disputes, arbitration committees (Tüketici Hakem Heyeti), complaint registry.' },
    ],
  },
  {
    code: 'IL', nameRu: 'Израиль', nameEn: 'Israel', flag: '🇮🇱', region: 'asia', docLang: 'he',
    currencyRu: 'шекель', currencyIn: 'шекелях', currencyEn: 'shekel',
    portals: [
      { nameRu: 'gov.il — правительственный портал услуг', nameEn: 'gov.il — government services portal', url: 'https://www.gov.il/he/departments',
        descRu: 'Единый портал правительства Израиля: заявления, обращения, запись в ведомства — онлайн.',
        descEn: 'The unified Israeli government portal: applications, appeals and appointments online.' },
      { nameRu: 'משרד הבריאות — נציבות קבילות הציבור', nameEn: 'Ministry of Health — Public Complaints Commissioner', url: 'https://www.health.gov.il',
        descRu: 'Министерство здравоохранения: жалобы на медицинские организации через отделение жалоб населения.',
        descEn: 'Ministry of Health: complaints about medical organizations via the public complaints department.' },
    ],
  },

  // ── Бэклог ТЗ: Америка ─────────────────────────────────────────────────────
  {
    code: 'US', nameRu: 'США', nameEn: 'United States', flag: '🇺🇸', region: 'americas', docLang: 'en',
    currencyRu: 'доллар США', currencyIn: 'долларах США', currencyEn: 'US dollar',
    portals: [
      { nameRu: 'USA.gov — портал федерального правительства', nameEn: 'USA.gov — federal portal', url: 'https://www.usa.gov',
        descRu: 'Официальный портал США: как подать жалобу потребителя, обратиться в агентства, найти формы судов штатов (small claims).',
        descEn: 'The official US portal: how to file consumer complaints, contact agencies, find state small-claims court forms.' },
      { nameRu: 'ReportFraud.ftc.gov / FTC', nameEn: 'ReportFraud.ftc.gov / FTC', url: 'https://reportfraud.ftc.gov',
        descRu: 'Федеральная торговая комиссия: жалобы на недобросовестных продавцов и мошенничество.',
        descEn: 'Federal Trade Commission: complaints against unfair sellers and fraud.' },
    ],
  },
  {
    code: 'BR', nameRu: 'Бразилия', nameEn: 'Brazil', flag: '🇧🇷', region: 'americas', docLang: 'pt',
    currencyRu: 'реал', currencyIn: 'реалах', currencyEn: 'real',
    portals: [
      { nameRu: 'gov.br — портал правительства', nameEn: 'gov.br — government portal', url: 'https://www.gov.br/pt-br',
        descRu: 'Единый портал правительства Бразилии: услуги, заявления, обращения в органы.',
        descEn: 'The unified Brazilian government portal: services, applications, appeals.' },
      { nameRu: 'consumidor.gov.br — платформа защиты потребителей', nameEn: 'consumidor.gov.br — consumer platform', url: 'https://www.consumidor.gov.br',
        descRu: 'Официальная платформа: жалоба компании обязана ответить за 10 дней; ответ используется как доказательство в суде.',
        descEn: 'The official platform: the company must respond within 10 days; the answer is evidence in court.' },
    ],
  },
  {
    code: 'AR', nameRu: 'Аргентина', nameEn: 'Argentina', flag: '🇦🇷', region: 'americas', docLang: 'es',
    currencyRu: 'песо', currencyIn: 'песо', currencyEn: 'peso',
    portals: [
      { nameRu: 'Argentina.gob.ar — портал правительства', nameEn: 'Argentina.gob.ar — government portal', url: 'https://www.argentina.gob.ar',
        descRu: 'Единый портал: госуслуги, записи, обращения в органы.',
        descEn: 'The unified portal: public services, appointments, appeals.' },
      { nameRu: 'Defensa de las y los Consumidores', nameEn: 'Consumer Defense', url: 'https://www.argentina.gob.ar/economia/comercio/defensadelconsumidor',
        descRu: 'Официальный раздел защиты потребителей: жалобы, порядок досудебного урегулирования (Reclamo ante Defensa del Consumidor).',
        descEn: 'The official consumer-defense section: complaints and pre-court settlement procedure.' },
    ],
  },

  // ── Бэклог ТЗ: Океания ─────────────────────────────────────────────────────
  {
    code: 'AU', nameRu: 'Австралия', nameEn: 'Australia', flag: '🇦🇺', region: 'oceania', docLang: 'en',
    currencyRu: 'австралийский доллар', currencyIn: 'австралийских долларах', currencyEn: 'Australian dollar',
    portals: [
      { nameRu: 'myGov — правительственный портал', nameEn: 'myGov — government portal', url: 'https://my.gov.au',
        descRu: 'Личный кабинет госуслуг Австралии: Medicare, Centrelink, ATO и другие сервисы.',
        descEn: 'The Australian government account: Medicare, Centrelink, ATO and other services.' },
      { nameRu: 'ACCC — Австралийская комиссия по конкуренции и потребителям', nameEn: 'ACCC — Australian Competition & Consumer Commission', url: 'https://www.accc.gov.au',
        descRu: 'Жалобы на нарушение прав потребителей (Australian Consumer Law) и недобросовестные практики.',
        descEn: 'Complaints about Australian Consumer Law breaches and unfair practices.' },
    ],
  },
];

export function getCountry(code: string): CountryDef | undefined {
  return COUNTRIES.find((c) => c.code === code);
}
