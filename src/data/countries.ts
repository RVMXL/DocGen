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

  // ── Волна 5: страны развитой бюрократии (Европа) ──────────────────────────
  {
    code: 'GB', nameRu: 'Великобритания', nameEn: 'United Kingdom', flag: '🇬🇧', region: 'europe', docLang: 'en',
    currencyRu: 'фунт стерлингов', currencyIn: 'фунтах стерлингов', currencyEn: 'pound sterling',
    portals: [
      { nameRu: 'GOV.UK — официальный портал правительства', nameEn: 'GOV.UK — official government portal', url: 'https://www.gov.uk',
        descRu: 'Единый портал: налоги (HMRC), пенсии, DVLA, суды и трибуналы, жалобы. Большинство обращений в ведомства подаётся онлайн или письменно по правилам GOV.UK.',
        descEn: 'The unified portal: taxes (HMRC), pensions, DVLA, courts and tribunals, complaints.' },
    ],
  },
  {
    code: 'IT', nameRu: 'Италия', nameEn: 'Italy', flag: '🇮🇹', region: 'europe', docLang: 'it',
    currencyRu: 'евро', currencyIn: 'евро', currencyEn: 'euro',
    portals: [
      { nameRu: 'italia.gov.it — национальный портал гражданина', nameEn: 'italia.gov.it — national citizen portal', url: 'https://italia.gov.it',
        descRu: 'Национальный портал услуг: анаграфика, здравоохранение (SSN), налоги (Agenzia delle Entrate), коммунальные вопросы через Comune.',
        descEn: 'The national services portal: civil registry, healthcare (SSN), taxes, municipal services.' },
      { nameRu: 'SPID — цифровая идентификация', nameEn: 'SPID — digital identity', url: 'https://www.spid.gov.it',
        descRu: 'Цифровая идентификация SPID (или CIE): вход на все государственные порталы Италии — ANPR, INPS, Agenzia delle Entrate.',
        descEn: 'SPID (or CIE) digital identity: single sign-on for all Italian government portals.' },
    ],
  },
  {
    code: 'ES', nameRu: 'Испания', nameEn: 'Spain', flag: '🇪🇸', region: 'europe', docLang: 'es',
    currencyRu: 'евро', currencyIn: 'евро', currencyEn: 'euro',
    portals: [
      { nameRu: 'administracion.gob.es — точка общего доступа', nameEn: 'administracion.gob.es — general access point', url: 'https://www.administracion.gob.es',
        descRu: 'PAGe — единая точка доступа к электронной администрации: registro electrónico, cita previa, recursos (обжалования).',
        descEn: 'PAGe — the single access point to e-government: electronic registry, appointments, appeals.' },
      { nameRu: 'Sede electrónica — электронная канцелярия', nameEn: 'Sede electrónica — e-office', url: 'https://sede.administracionespublicas.gob.es',
        descRu: 'Электронная канцелярия: подача заявлений с DNI electrónico/Cl@ve, запись, уведомления.',
        descEn: 'The e-office: filings with DNI electrónico/Cl@ve, appointments, notifications.' },
    ],
  },
  {
    code: 'CH', nameRu: 'Швейцария', nameEn: 'Switzerland', flag: '🇨🇭', region: 'europe', docLang: 'de',
    currencyRu: 'швейцарский франк', currencyIn: 'швейцарских франках', currencyEn: 'Swiss franc',
    portals: [
      { nameRu: 'ch.ch — портал государства для граждан', nameEn: 'ch.ch — public administration portal', url: 'https://www.ch.ch',
        descRu: 'Официальный портал Конфедерации, кантонов и общин: цифровые услуги, заявления, записи (в немецкой части — по практике DIN 5008).',
        descEn: 'The official portal of the Confederation, cantons and communes: e-services, applications.' },
    ],
  },
  {
    code: 'AT', nameRu: 'Австрия', nameEn: 'Austria', flag: '🇦🇹', region: 'europe', docLang: 'de',
    currencyRu: 'евро', currencyIn: 'евро', currencyEn: 'euro',
    portals: [
      { nameRu: 'oesterreich.gv.at — портал госуслуг Австрии', nameEn: 'oesterreich.gv.at — Austrian services portal', url: 'https://www.oesterreich.gv.at',
        descRu: 'Единый портал: Anmeldung, налоги (FinanzOnline), пенсии (PVA), обращения в ведомства — онлайн через ID Austria.',
        descEn: 'The unified portal: registration, taxes (FinanzOnline), pensions, filings via ID Austria.' },
    ],
  },
  {
    code: 'NL', nameRu: 'Нидерланды', nameEn: 'Netherlands', flag: '🇳🇱', region: 'europe', docLang: 'nl',
    currencyRu: 'евро', currencyIn: 'евро', currencyEn: 'euro',
    portals: [
      { nameRu: 'Rijksoverheid — портал правительства Нидерландов', nameEn: 'Rijksoverheid — Dutch government portal', url: 'https://www.rijksoverheid.nl',
        descRu: 'Официальный портал правительства: правила по работе, отпуску, увольнению, налогам (Belastingdienst), DigiD для входа в госуслуги.',
        descEn: 'The official government portal: employment, leave, dismissal, taxes (Belastingdienst), DigiD for government sign-in.' },
      { nameRu: 'MijnOverheid — личный кабинет гражданина', nameEn: 'MijnOverheid — personal government mailbox', url: 'https://mijnoverheid.nl',
        descRu: 'Личный кабинет: сообщения ведомств, налоговые решения, пенсии, DigiD-вход. Часть обращений по закону подаётся только онлайн.',
        descEn: 'Personal government mailbox: agency messages, tax decisions, pensions; some filings are mandatory online.' },
    ],
  },
  {
    code: 'BE', nameRu: 'Бельгия', nameEn: 'Belgium', flag: '🇧🇪', region: 'europe', docLang: 'fr',
    currencyRu: 'евро', currencyIn: 'евро', currencyEn: 'euro',
    portals: [
      { nameRu: 'belgium.be — официальный федеральный портал', nameEn: 'belgium.be — official federal portal', url: 'https://www.belgium.be',
        descRu: 'Федеральный портал услуг: коммунальные вопросы (commune/gemeente), регистрация, документы. Шаблоны страны — на французском (один из трёх официальных языков); во Фландрии документы часто требуют нидерландский.',
        descEn: 'The federal services portal: commune services, registration, documents. The country’s templates are in French (one of three official languages); in Flanders documents often require Dutch.' },
      { nameRu: 'SocialSecurity — портал соцзащиты Бельгии', nameEn: 'SocialSecurity — Belgian social security portal', url: 'https://www.socialsecurity.belgium.be',
        descRu: 'Портал бельгийской соцзащиты: отпуска, пособия (FPS), пенсионные взносы — вход через itsme.',
        descEn: 'The Belgian social security portal: leave, benefits, pension contributions — sign-in via itsme.' },
    ],
  },
  {
    code: 'PT', nameRu: 'Португалия', nameEn: 'Portugal', flag: '🇵🇹', region: 'europe', docLang: 'pt',
    currencyRu: 'евро', currencyIn: 'евро', currencyEn: 'euro',
    portals: [
      { nameRu: 'gov.pt — официальный портал правительства', nameEn: 'gov.pt — official government portal', url: 'https://www.gov.pt',
        descRu: 'Единый портал: госуслуги, налоги (Autoridade Tributária), Segurança Social, IRN (гражданские записи).',
        descEn: 'The unified portal: state services, taxes (Autoridade Tributária), social security, civil registry (IRN).' },
      { nameRu: 'ePortugal — портал госуслуг', nameEn: 'ePortugal — e-services portal', url: 'https://eportugal.gov.pt',
        descRu: 'Портал электронных услуг: заявления, справки, записи — вход через Chave Móvel Digital.',
        descEn: 'The e-services portal: applications, certificates, appointments — sign-in via Chave Móvel Digital.' },
    ],
  },
  {
    code: 'SE', nameRu: 'Швеция', nameEn: 'Sweden', flag: '🇸🇪', region: 'europe', docLang: 'sv',
    currencyRu: 'шведская крона', currencyIn: 'шведских кронах', currencyEn: 'Swedish krona',
    portals: [
      { nameRu: 'Skatteverket — налоговое агентство', nameEn: 'Skatteverket — Swedish Tax Agency', url: 'https://www.skatteverket.se',
        descRu: 'Налоги, персональный номер, смена адреса, декларации — большинство услуг онлайн через BankID.',
        descEn: 'Taxes, personal identity number, address changes, declarations — most services online via BankID.' },
      { nameRu: 'Försäkringskassan — агентство соцстрахования', nameEn: 'Försäkringskassan — social insurance agency', url: 'https://www.forsakringskassan.se',
        descRu: 'Пособия, декретные (föräldrapenning), больничные (sjukpenning), жилищные надбавки — заявки онлайн через BankID.',
        descEn: 'Benefits, parental benefit, sickness benefit, housing allowance — applications online via BankID.' },
    ],
  },
  {
    code: 'NO', nameRu: 'Норвегия', nameEn: 'Norway', flag: '🇳🇴', region: 'europe', docLang: 'no',
    currencyRu: 'норвежская крона', currencyIn: 'норвежских кронах', currencyEn: 'Norwegian krone',
    portals: [
      { nameRu: 'Altinn — национальный портал госуслуг', nameEn: 'Altinn — national e-services portal', url: 'https://altinn.no',
        descRu: 'Единый портал для обращений в ведомства: налоги, NAV, Statistisk sentralbyrå — вход через BankID / MinID.',
        descEn: 'The unified portal for filings to agencies: taxes, NAV, Statistics Norway — sign-in via BankID / MinID.' },
      { nameRu: 'NAV — управление труда и соцзащиты', nameEn: 'NAV — Labour and Welfare Administration', url: 'https://www.nav.no',
        descRu: 'Пособия, больничные, декретные (foreldrepenger), пенсии, регистрация безработицы (meldekort).',
        descEn: 'Benefits, sick pay, parental benefit, pensions, unemployment registration (meldekort).' },
    ],
  },
  {
    code: 'DK', nameRu: 'Дания', nameEn: 'Denmark', flag: '🇩🇰', region: 'europe', docLang: 'da',
    currencyRu: 'датская крона', currencyIn: 'датских кронах', currencyEn: 'Danish krone',
    portals: [
      { nameRu: 'borger.dk — портал для граждан', nameEn: 'borger.dk — citizen portal', url: 'https://www.borger.dk',
        descRu: 'Госуслуги для граждан: документы, адрес, пособия, пенсии — вход через MitID, часть сообщений ведомств — только в Digital Post.',
        descEn: 'Citizen services: documents, address, benefits, pensions — sign-in via MitID; official mail is delivered in Digital Post.' },
      { nameRu: 'skat.dk — налоговое управление', nameEn: 'skat.dk — Danish tax authority', url: 'https://skat.dk',
        descRu: 'Налоги (Skattestyrelsen): годовой отчёт, предварительная оценка, вычеты — онлайн через MitID.',
        descEn: 'Taxes (Skattestyrelsen): annual statement, preliminary assessment, deductions — online via MitID.' },
    ],
  },
  {
    code: 'FI', nameRu: 'Финляндия', nameEn: 'Finland', flag: '🇫🇮', region: 'europe', docLang: 'fi',
    currencyRu: 'евро', currencyIn: 'евро', currencyEn: 'euro',
    portals: [
      { nameRu: 'Suomi.fi — национальный портал услуг', nameEn: 'Suomi.fi — national services portal', url: 'https://suomi.fi',
        descRu: 'Единый портал: госуслуги всех ведомств, электронные сообщения (Suomi.fi Viestit), полномочия (valtuudet) — вход через онлайн-банкинг.',
        descEn: 'The unified portal: services of all agencies, official messages, mandates — sign-in via online banking.' },
      { nameRu: 'Kela — управление соцстрахования', nameEn: 'Kela — Social Insurance Institution', url: 'https://kela.fi',
        descRu: 'Пособия, декретные (äitiysraha), жилищная надбавка, карта Kela — заявки через Oma Kela.',
        descEn: 'Benefits, maternity allowance, housing allowance, Kela card — applications via Oma Kela.' },
    ],
  },
  {
    code: 'GR', nameRu: 'Греция', nameEn: 'Greece', flag: '🇬🇷', region: 'europe', docLang: 'el',
    currencyRu: 'евро', currencyIn: 'евро', currencyEn: 'euro',
    portals: [
      { nameRu: 'gov.gr — единый портал госуслуг', nameEn: 'gov.gr — unified e-services portal', url: 'https://www.gov.gr',
        descRu: 'Единый портал всех госуслуг: налоги (AADE), EFKA, документы, записи — вход через Taxisnet.',
        descEn: 'The unified portal of state services: taxes (AADE), social security (EFKA), documents, appointments — sign-in via Taxisnet.' },
      { nameRu: 'AADE — независимое управление по налогам', nameEn: 'AADE — Independent Authority for Public Revenue', url: 'https://www.aade.gr',
        descRu: 'Налоги, декларации (myAADE), обжалование налоговых актов — онлайн через Taxisnet.',
        descEn: 'Taxes, declarations (myAADE), appeals against tax acts — online via Taxisnet.' },
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
  {
    code: 'IN', nameRu: 'Индия', nameEn: 'India', flag: '🇮🇳', region: 'asia', docLang: 'en',
    currencyRu: 'рупия', currencyIn: 'рупиях', currencyEn: 'Indian rupee',
    portals: [
      { nameRu: 'india.gov.in — национальный портал Индии', nameEn: 'india.gov.in — National Portal of India', url: 'https://www.india.gov.in',
        descRu: 'Национальный портал: услуги Союза и штатов, Aadhaar, PAN, налоги, суды. Деловая переписка — по Manual of Office Procedure (DoPT), язык — английский.',
        descEn: 'The National Portal: Union and state services, Aadhaar, PAN, taxes, courts. Correspondence follows the Manual of Office Procedure (DoPT), in English.' },
      { nameRu: 'myGov.in — платформа гражданского участия', nameEn: 'myGov.in — citizen participation platform', url: 'https://www.mygov.in',
        descRu: 'Правительственная платформа: обращения, консультации, кампании; интегрирована с UMANG (мобильные госуслуги).',
        descEn: 'The government platform: appeals, consultations, campaigns; integrated with UMANG.' },
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
  {
    code: 'CA', nameRu: 'Канада', nameEn: 'Canada', flag: '🇨🇦', region: 'americas', docLang: 'en',
    currencyRu: 'канадский доллар', currencyIn: 'канадских долларах', currencyEn: 'Canadian dollar',
    portals: [
      { nameRu: 'canada.ca — портал правительства Канады', nameEn: 'canada.ca — Government of Canada portal', url: 'https://www.canada.ca',
        descRu: 'Единый портал: CRA (налоги), Service Canada (EI, паспорт, OAS), иммиграция (IRCC), потребительские жалобы. Документы — по The Canadian Style (Translation Bureau).',
        descEn: 'The unified portal: CRA (taxes), Service Canada (EI, passport, OAS), immigration, consumer complaints.' },
    ],
  },
  {
    code: 'MX', nameRu: 'Мексика', nameEn: 'Mexico', flag: '🇲🇽', region: 'americas', docLang: 'es',
    currencyRu: 'мексиканское песо', currencyIn: 'мексиканских песо', currencyEn: 'Mexican peso',
    portals: [
      { nameRu: 'gob.mx — портал правительства Мексики', nameEn: 'gob.mx — Government of Mexico portal', url: 'https://www.gob.mx',
        descRu: 'Единый портал: SAT (налоги), IMSS/ISSSTE (соцстрах), PROFECO (защита потребителей), заявления в ведомства.',
        descEn: 'The unified portal: SAT (taxes), IMSS/ISSSTE (social security), PROFECO (consumer protection).' },
      { nameRu: 'PROFECO — Procuraduría Federal del Consumidor', nameEn: 'PROFECO — Federal Consumer Protection Agency', url: 'https://www.profeco.gob.mx',
        descRu: 'Федеральная прокуратура потребителей: conciliación, жалобы на продавцов, телефоны доверия.',
        descEn: 'The federal consumer agency: conciliation, complaints against sellers.' },
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
