// Универсальные шаблоны для стран СНГ + инфо-карточки гос-порталов.
// ТЗ: не выдумывать форму — используется общепринятый стандарт делопроизводства,
// ссылки только на проверенные официальные порталы (октябрь 2026).
//
// ВАЖНО (исправление): страна определяет ЯЗЫК ДОКУМЕНТА — государственный язык
// страны (docLang). Язык интерфейса (ru/en) влияет только на каталог/формы.
import { TplDef } from './seed-ru-a';
import { LANG_PACK, CisDocLang } from './seed-translations';

interface CisInfo {
  code: string;
  nameRu: string; nameEn: string;
  docLang: CisDocLang; // государственный язык → язык тела документов
  genitiveRu: string; // «Республики Казахстан» — только для интерфейсных строк (desc/ref на ru)
  currencyRu: string;
  portalUrl: string; portalNameRu: string; portalNameEn: string;
  portalDescRu: string; portalDescEn: string;
}

// Все ссылки — официальные порталы государственных услуг (проверено WebSearch, октябрь 2026)
export const CIS: CisInfo[] = [
  { code: 'KZ', nameRu: 'Казахстан', nameEn: 'Kazakhstan', docLang: 'kk', genitiveRu: 'Республики Казахстан', currencyRu: 'тенге',
    portalUrl: 'https://egov.kz', portalNameRu: 'eGov — портал «Электронное правительство»', portalNameEn: 'eGov — e-government portal',
    portalDescRu: 'Большинство типовых заявлений в Казахстане подаётся через eGov (сайт или приложение eGov Mobile): отпуска оформляет работодатель, обращения граждан — через раздел «Обращения».',
    portalDescEn: 'Most standard applications in Kazakhstan are filed via eGov (website or eGov Mobile app).' },
  { code: 'BY', nameRu: 'Беларусь', nameEn: 'Belarus', docLang: 'be', genitiveRu: 'Республики Беларусь', currencyRu: 'белорусских рублях',
    portalUrl: 'https://e-pasluga.by', portalNameRu: '«Е-Паслуга» — единый портал электронных услуг', portalNameEn: 'E-Pasluga — unified e-services portal',
    portalDescRu: 'В Беларуси государственные услуги предоставляются через единый портал «Е-Паслуга» и его мобильное приложение. Обращения граждан также принимаются онлайн.',
    portalDescEn: 'Government e-services in Belarus are provided via the unified E-Pasluga portal.' },
  { code: 'UA', nameRu: 'Украина', nameEn: 'Ukraine', docLang: 'uk', genitiveRu: 'Украины', currencyRu: 'гривнах',
    portalUrl: 'https://diia.gov.ua', portalNameRu: 'Дія — портал державних послуг', portalNameEn: 'Diia — state services portal',
    portalDescRu: 'В Украине государственные услуги предоставляются через портал и приложение «Дія». Заявления работодателю и претензии подаются в общем порядке делопроизводства.',
    portalDescEn: 'Government e-services in Ukraine are provided via the Diia portal and app.' },
  { code: 'UZ', nameRu: 'Узбекистан', nameEn: 'Uzbekistan', docLang: 'uz', genitiveRu: 'Республики Узбекистан', currencyRu: 'сумах',
    portalUrl: 'https://my.gov.uz/ru', portalNameRu: 'my.gov.uz — единый портал интерактивных государственных услуг', portalNameEn: 'my.gov.uz — unified e-services portal',
    portalDescRu: 'В Узбекистане государственные услуги предоставляются через единый портал my.gov.uz. Типовые заявления работодателю оформляются в порядке делопроизводства.',
    portalDescEn: 'Government e-services in Uzbekistan are provided via the my.gov.uz unified portal.' },
  { code: 'KG', nameRu: 'Кыргызстан', nameEn: 'Kyrgyzstan', docLang: 'kg', genitiveRu: 'Кыргызской Республики', currencyRu: 'сомах',
    portalUrl: 'https://portal.tunduk.kg', portalNameRu: '«Түндүк» — государственный портал электронных услуг', portalNameEn: 'Tunduk — state e-services portal',
    portalDescRu: 'В Кыргызстане государственные услуги предоставляются через портал «Түндүк». Типовые заявления работодателю оформляются в общем порядке делопроизводства.',
    portalDescEn: 'Government e-services in Kyrgyzstan are provided via the Tunduk portal.' },
  { code: 'TJ', nameRu: 'Таджикистан', nameEn: 'Tajikistan', docLang: 'tg', genitiveRu: 'Республики Таджикистан', currencyRu: 'сомони',
    portalUrl: 'https://gov.tj', portalNameRu: 'gov.tj — официальный портал государственных органов', portalNameEn: 'gov.tj — official government portal',
    portalDescRu: 'Официальная информация о государственных органах и услугах Таджикистана размещается на gov.tj. Типовые заявления оформляются в общем порядке делопроизводства.',
    portalDescEn: 'Official information on Tajikistan government bodies is provided at gov.tj.' },
  { code: 'AM', nameRu: 'Армения', nameEn: 'Armenia', docLang: 'hy', genitiveRu: 'Республики Армения', currencyRu: 'драмах',
    portalUrl: 'https://www.e-gov.am', portalNameRu: 'e-gov.am — электронное правительство Армении', portalNameEn: 'e-gov.am — Armenian e-government',
    portalDescRu: 'В Армении государственные услуги предоставляются через портал электронного правительства e-gov.am. Обращения граждан принимаются онлайн.',
    portalDescEn: 'Government e-services in Armenia are provided via the e-gov.am portal.' },
  { code: 'AZ', nameRu: 'Азербайджан', nameEn: 'Azerbaijan', docLang: 'az', genitiveRu: 'Азербайджанской Республики', currencyRu: 'манатах',
    portalUrl: 'https://mygov.az', portalNameRu: 'mygov.az — официальный государственный портал', portalNameEn: 'mygov.az — official state platform',
    portalDescRu: 'В Азербайджане государственные услуги предоставляются через официальный портал mygov.az (электронное правительство).',
    portalDescEn: 'Government e-services in Azerbaijan are provided via the official mygov.az portal.' },
  { code: 'MD', nameRu: 'Молдова', nameEn: 'Moldova', docLang: 'ro', genitiveRu: 'Республики Молдова', currencyRu: 'леях',
    portalUrl: 'https://servicii.gov.md', portalNameRu: 'servicii.gov.md — единая платформа государственных услуг', portalNameEn: 'servicii.gov.md — unified state services platform',
    portalDescRu: 'В Молдове государственные услуги описаны и частично предоставляются на единой платформе servicii.gov.md.',
    portalDescEn: 'State services in Moldova are described and partly provided at servicii.gov.md.' },
];

// Универсальные шаблоны: тело документа и образцы значений — на государственном языке страны
export function universalTemplates(c: CisInfo): TplDef[] {
  const p = LANG_PACK[c.docLang];
  const doc = c.docLang;
  const fromLine = (ph: string): string => (p.fromPrefix ? `${p.fromPrefix} ${ph}` : ph);

  // Шапка заявлений работодателю (адресат справа, стандарт делопроизводства)
  const workHeader = (): TplDef['body'][number] => ({
    type: 'lines',
    align: 'right',
    items: ['{{head_position}}', '{{org_name}}', '{{head_name}}', '', fromLine('{{applicant_position}}'), '{{applicant_name}}'],
  });

  return [
    {
      slug: `${c.code.toLowerCase()}-work-annual-vacation`, kind: 'STANDARD', categorySlug: 'work-vacations', lang: doc,
      titleRu: 'Заявление на ежегодный оплачиваемый отпуск', titleEn: 'Annual paid leave application',
      descRu: `Универсальное заявление работодателю о предоставлении ежегодного оплачиваемого отпуска по общепринятому стандарту делопроизводства ${c.nameRu === 'Украина' ? 'Украины' : c.nameRu}. Документ формируется на государственном языке страны; продолжительность отпуска уточните по трудовому кодексу.`,
      descEn: 'Universal annual paid leave application following common document-management standards. Generated in the official language of the country.',
      refRu: `трудовое законодательство ${c.genitiveRu}`,
      refEn: `labour legislation of ${c.nameEn}`,
      fields: [
        { id: 'head_position', labelRu: 'Должность руководителя', labelEn: 'Head position', type: 'text', required: true, half: true, placeholderDoc: p.headPosition },
        { id: 'org_name', labelRu: 'Наименование организации', labelEn: 'Organization name', type: 'text', required: true, half: true, placeholderDoc: p.org },
        { id: 'head_name', labelRu: 'ФИО руководителя', labelEn: 'Head full name', type: 'text', required: true, half: true, placeholderDoc: p.headName },
        { id: 'applicant_position', labelRu: 'Ваша должность', labelEn: 'Your position', type: 'text', required: true, half: true, placeholderDoc: p.applicantPosition },
        { id: 'applicant_name', labelRu: 'Ваши ФИО', labelEn: 'Your full name', type: 'text', required: true, half: true, placeholderDoc: p.applicantName },
        { id: 'days', labelRu: 'Количество календарных дней', labelEn: 'Days count', type: 'number', required: true, half: true, placeholderRu: '24' },
        { id: 'date_from', labelRu: 'Дата начала отпуска', labelEn: 'Leave start date', type: 'date', required: true, half: true },
      ],
      body: [
        workHeader(),
        { type: 'title', text: p.appTitle },
        { type: 'paragraph', text: p.vacationP, justify: true },
        { type: 'signature', rightText: '_______________ / {{applicant_name}} /' },
      ],
    },
    {
      slug: `${c.code.toLowerCase()}-work-dismissal`, kind: 'STANDARD', categorySlug: 'work-dismissal', lang: doc,
      titleRu: 'Заявление об увольнении по собственному желанию', titleEn: 'Voluntary resignation application',
      descRu: `Заявление о расторжении трудового договора по инициативе работника. Срок предупреждения работодателя зависит от трудового кодекса ${c.nameRu === 'Украина' ? 'Украины' : c.nameRu} — уточните его перед подачей. Документ формируется на государственном языке страны.`,
      descEn: 'Voluntary resignation application. Check the notice period under your national Labour Code. Generated in the official language of the country.',
      refRu: `трудовое законодательство ${c.genitiveRu}`,
      refEn: `labour legislation of ${c.nameEn}`,
      fields: [
        { id: 'head_position', labelRu: 'Должность руководителя', labelEn: 'Head position', type: 'text', required: true, half: true, placeholderDoc: p.headPosition },
        { id: 'org_name', labelRu: 'Наименование организации', labelEn: 'Organization name', type: 'text', required: true, half: true, placeholderDoc: p.org },
        { id: 'head_name', labelRu: 'ФИО руководителя', labelEn: 'Head full name', type: 'text', required: true, half: true, placeholderDoc: p.headName },
        { id: 'applicant_position', labelRu: 'Ваша должность', labelEn: 'Your position', type: 'text', required: true, half: true, placeholderDoc: p.applicantPosition },
        { id: 'applicant_name', labelRu: 'Ваши ФИО', labelEn: 'Your full name', type: 'text', required: true, half: true, placeholderDoc: p.applicantName },
        { id: 'date_to', labelRu: 'Дата увольнения', labelEn: 'Resignation date', type: 'date', required: true, half: true, hintRu: 'с учётом срока предупреждения по ТК вашей страны', hintEn: 'consider the notice period of your national Labour Code' },
      ],
      body: [
        workHeader(),
        { type: 'title', text: p.appTitle },
        { type: 'paragraph', text: p.dismissalP1, justify: true },
        { type: 'paragraph', text: p.dismissalP2, justify: true },
        { type: 'signature', rightText: '_______________ / {{applicant_name}} /' },
      ],
    },
    {
      slug: `${c.code.toLowerCase()}-work-reference`, kind: 'STANDARD', categorySlug: 'work-docs', lang: doc,
      titleRu: 'Заявление о выдаче справки с места работы', titleEn: 'Workplace reference request',
      descRu: 'Заявление работодателю о выдаче справки с места работы (о работе, должности, заработной плате) или копий документов, связанных с работой. Документ формируется на государственном языке страны.',
      descEn: 'Request for a workplace reference certificate or copies of work-related documents. Generated in the official language of the country.',
      refRu: `трудовое законодательство ${c.genitiveRu}`,
      refEn: `labour legislation of ${c.nameEn}`,
      fields: [
        { id: 'head_position', labelRu: 'Должность руководителя', labelEn: 'Head position', type: 'text', required: true, half: true, placeholderDoc: p.headPosition },
        { id: 'org_name', labelRu: 'Наименование организации', labelEn: 'Organization name', type: 'text', required: true, half: true, placeholderDoc: p.org },
        { id: 'head_name', labelRu: 'ФИО руководителя', labelEn: 'Head full name', type: 'text', required: true, half: true, placeholderDoc: p.headName },
        { id: 'applicant_position', labelRu: 'Ваша должность', labelEn: 'Your position', type: 'text', required: true, half: true, placeholderDoc: p.applicantPosition },
        { id: 'applicant_name', labelRu: 'Ваши ФИО', labelEn: 'Your full name', type: 'text', required: true, half: true, placeholderDoc: p.applicantName },
        { id: 'documents', labelRu: 'Какие документы нужны', labelEn: 'Documents needed', type: 'textarea', required: true, placeholderDoc: p.documents },
      ],
      body: [
        workHeader(),
        { type: 'title', text: p.appTitle },
        { type: 'paragraph', text: p.refP, justify: true },
        { type: 'signature', rightText: '_______________ / {{applicant_name}} /' },
      ],
    },
    {
      slug: `${c.code.toLowerCase()}-court-goods-claim`, kind: 'STANDARD', categorySlug: 'court-claims', lang: doc,
      titleRu: 'Претензия продавцу о возврате товара', titleEn: 'Claim to seller: defective goods',
      descRu: `Досудебная претензия продавцу при обнаружении недостатка товара по общепринятым стандартам защиты прав потребителей (закон действует во всех странах СНГ). Суммы указываются в ${c.currencyRu}. Документ формируется на государственном языке страны.`,
      descEn: 'Pre-court claim to a seller over defective goods, following consumer protection standards. Generated in the official language of the country.',
      refRu: `законодательство ${c.genitiveRu} о защите прав потребителей`,
      refEn: `consumer protection legislation of ${c.nameEn}`,
      fields: [
        { id: 'seller_name', labelRu: 'Наименование продавца', labelEn: 'Seller name', type: 'text', required: true, placeholderDoc: p.sellerName },
        { id: 'seller_address', labelRu: 'Адрес продавца', labelEn: 'Seller address', type: 'text', required: true, placeholderDoc: p.sellerAddress },
        { id: 'applicant_name', labelRu: 'Ваши ФИО', labelEn: 'Your full name', type: 'text', required: true, half: true, placeholderDoc: p.applicantName },
        { id: 'applicant_phone', labelRu: 'Телефон для ответа', labelEn: 'Contact phone', type: 'text', required: true, half: true, placeholderDoc: p.phone },
        { id: 'applicant_address', labelRu: 'Адрес для ответа', labelEn: 'Mailing address', type: 'text', required: true, placeholderDoc: p.applicantAddress },
        { id: 'product_name', labelRu: 'Товар', labelEn: 'Product', type: 'text', required: true, half: true, placeholderDoc: p.product },
        { id: 'price', labelRu: `Стоимость (${c.currencyRu})`, labelEn: 'Price', type: 'number', required: true, half: true, placeholderRu: '150000' },
        { id: 'date_buy', labelRu: 'Дата покупки', labelEn: 'Purchase date', type: 'date', required: true, half: true },
        { id: 'proof', labelRu: 'Подтверждение покупки', labelEn: 'Proof of purchase', type: 'text', required: true, half: true, placeholderDoc: p.proof },
        { id: 'defect', labelRu: 'Обнаруженный недостаток', labelEn: 'Defect found', type: 'textarea', required: true, placeholderDoc: p.defect },
        { id: 'demand', labelRu: 'Ваше требование', labelEn: 'Your demand', type: 'select', required: true, options: p.claimOptions },
      ],
      body: [
        {
          type: 'lines',
          align: 'right',
          items: ['{{seller_name}}', '{{seller_address}}', '', fromLine('{{applicant_name}}'), '{{applicant_address}}', `${p.telLabel}: {{applicant_phone}}`],
        },
        { type: 'title', text: p.claimTitle },
        { type: 'paragraph', text: p.claimP1, justify: true },
        { type: 'paragraph', text: p.claimP2, justify: true },
        { type: 'paragraph', text: p.claimP3, justify: true },
        { type: 'paragraph', text: p.claimP4, justify: true },
        { type: 'attachment', items: [p.attachItem], label: p.attachLabel },
        { type: 'signature', rightText: '_______________ / {{applicant_name}} /' },
      ],
    },
    {
      slug: `${c.code.toLowerCase()}-gov-portal-card`, kind: 'GOV_PORTAL_ONLY', categorySlug: 'post-online', lang: doc,
      titleRu: `Государственные услуги онлайн — ${c.nameRu}`, titleEn: `Government e-services — ${c.nameEn}`,
      descRu: `В ${c.nameRu === 'Украина' ? 'Украине' : c.nameRu} многие типовые заявления и обращения подаются дистанционно через официальный портал государственных услуг. Проверьте, решается ли ваш вопрос онлайн, — тогда бумажный шаблон не потребуется.`,
      descEn: `Many standard applications in ${c.nameEn} are filed online via the official e-services portal.`,
      portalUrl: c.portalUrl,
      portalName: c.portalNameRu,
      portalDescRu: c.portalDescRu,
      portalDescEn: c.portalDescEn,
      fields: [],
      body: [],
    },
  ];
}
