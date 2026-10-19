// Шаблоны для России — часть 1: Работа, Суды
// Все шаблоны основаны на реальных нормах законодательства РФ (ТЗ: не выдумывать).
import type { FieldDef, DocBlock } from '../src/lib/types';

export interface TplDef {
  slug: string;
  kind: 'STANDARD' | 'HANDWRITTEN_REQUIRED' | 'GOV_PORTAL_ONLY';
  categorySlug: string;
  /** язык тела документа (гос. язык страны); по умолчанию ru */
  lang?: string;
  titleRu: string; titleEn: string;
  descRu: string; descEn: string;
  refRu?: string; refEn?: string;
  warningRu?: string; warningEn?: string;
  portalUrl?: string; portalName?: string;
  portalDescRu?: string; portalDescEn?: string;
  fields: FieldDef[];
  body: DocBlock[];
}

// Стандартная шапка «кому/от кого» (правый верхний угол, ГОСТ Р 7.0.97-2016)
const hdr = (to: string[], from: string[]): DocBlock => ({
  type: 'lines', align: 'right', items: [...to, '', ...from],
});
const F = (f: FieldDef): FieldDef => f;
const stdSign = (namePh: string): DocBlock => ({
  type: 'signature', rightText: `_______________ / ${namePh} /`,
});

export const TEMPLATES_RU_A: TplDef[] = [
  // ================= РАБОТА =================
  {
    slug: 'ru-work-annual-vacation', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление на ежегодный оплачиваемый отпуск', titleEn: 'Annual paid leave application',
    descRu: 'Заявление работодателю о предоставлении ежегодного основного оплачиваемого отпуска. Подаётся заблаговременно — график отпусков утверждается за две недели до календарного года.',
    descEn: 'Application to the employer for annual paid leave. Standard HR document under the Russian Labour Code.',
    refRu: 'ст. 122, 123 Трудового кодекса РФ',
    refEn: 'Articles 122, 123 of the Russian Labour Code',
    fields: [
      F({ id: 'head_position', labelRu: 'Должность руководителя', labelEn: 'Head position', type: 'text', required: true, half: true, placeholderRu: 'Генеральному директору', hintRu: 'в дательном падеже' }),
      F({ id: 'org_name', labelRu: 'Наименование организации', labelEn: 'Organization name', type: 'text', required: true, half: true, placeholderRu: 'ООО «Ромашка»' }),
      F({ id: 'head_name', labelRu: 'ФИО руководителя', labelEn: 'Head full name', type: 'text', required: true, half: true, placeholderRu: 'Иванову И.И.', hintRu: 'в дательном падеже' }),
      F({ id: 'applicant_position', labelRu: 'Ваша должность', labelEn: 'Your position', type: 'text', required: true, half: true, placeholderRu: 'менеджера отдела продаж', hintRu: 'в родительном падеже' }),
      F({ id: 'applicant_name', labelRu: 'Ваши ФИО', labelEn: 'Your full name', type: 'text', required: true, half: true, placeholderRu: 'Петровой Анны Сергеевны', hintRu: 'в родительном падеже' }),
      F({ id: 'days', labelRu: 'Количество календарных дней', labelEn: 'Days count', type: 'number', required: true, half: true, placeholderRu: '28' }),
      F({ id: 'date_from', labelRu: 'Дата начала отпуска', labelEn: 'Leave start date', type: 'date', required: true, half: true }),
    ],
    body: [
      hdr(['{{head_position}}', '{{org_name}}', '{{head_name}}'], ['от {{applicant_position}}', '{{applicant_name}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'paragraph', text: 'Прошу предоставить мне ежегодный оплачиваемый отпуск продолжительностью {{days}} календарных дней с {{date_from}}.', justify: true },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-work-unpaid-vacation', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление на отпуск без сохранения зарплаты', titleEn: 'Unpaid leave application',
    descRu: 'Заявление об отпуске без сохранения заработной платы («за свой счёт»). По уважительным причинам — по соглашению сторон; отдельным категориям работников работодатель обязан предоставить по закону.',
    descEn: 'Unpaid leave application (at own expense). Standard HR document under the Russian Labour Code.',
    refRu: 'ст. 128 Трудового кодекса РФ',
    refEn: 'Article 128 of the Russian Labour Code',
    fields: [
      F({ id: 'head_position', labelRu: 'Должность руководителя', labelEn: 'Head position', type: 'text', required: true, half: true, placeholderRu: 'Генеральному директору', hintRu: 'в дательном падеже' }),
      F({ id: 'org_name', labelRu: 'Наименование организации', labelEn: 'Organization name', type: 'text', required: true, half: true, placeholderRu: 'ООО «Ромашка»' }),
      F({ id: 'head_name', labelRu: 'ФИО руководителя', labelEn: 'Head full name', type: 'text', required: true, half: true, placeholderRu: 'Иванову И.И.', hintRu: 'в дательном падеже' }),
      F({ id: 'applicant_position', labelRu: 'Ваша должность', labelEn: 'Your position', type: 'text', required: true, half: true, placeholderRu: 'менеджера отдела продаж', hintRu: 'в родительном падеже' }),
      F({ id: 'applicant_name', labelRu: 'Ваши ФИО', labelEn: 'Your full name', type: 'text', required: true, half: true, placeholderRu: 'Петровой Анны Сергеевны', hintRu: 'в родительном падеже' }),
      F({ id: 'days', labelRu: 'Количество календарных дней', labelEn: 'Days count', type: 'number', required: true, half: true, placeholderRu: '3' }),
      F({ id: 'date_from', labelRu: 'Дата начала', labelEn: 'Start date', type: 'date', required: true, half: true }),
      F({ id: 'date_to', labelRu: 'Дата окончания', labelEn: 'End date', type: 'date', required: true, half: true }),
      F({ id: 'reason', labelRu: 'Причина', labelEn: 'Reason', type: 'textarea', required: true, placeholderRu: 'по семейным обстоятельствам' }),
    ],
    body: [
      hdr(['{{head_position}}', '{{org_name}}', '{{head_name}}'], ['от {{applicant_position}}', '{{applicant_name}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'paragraph', text: 'Прошу предоставить мне отпуск без сохранения заработной платы продолжительностью {{days}} календарных дней с {{date_from}} по {{date_to}}.', justify: true },
      { type: 'paragraph', text: 'Причина: {{reason}}.', justify: true },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-work-dismissal', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Заявление об увольнении по собственному желанию', titleEn: 'Voluntary resignation application',
    descRu: 'Базовое заявление о расторжении трудового договора по инициативе работника. Предупредить работодателя нужно не позднее чем за две недели; срок начинает течь со следующего дня после подачи.',
    descEn: 'Basic resignation notice under the Russian Labour Code. Two weeks notice period applies.',
    refRu: 'ст. 80 Трудового кодекса РФ',
    refEn: 'Article 80 of the Russian Labour Code',
    fields: [
      F({ id: 'head_position', labelRu: 'Должность руководителя', labelEn: 'Head position', type: 'text', required: true, half: true, placeholderRu: 'Генеральному директору', hintRu: 'в дательном падеже' }),
      F({ id: 'org_name', labelRu: 'Наименование организации', labelEn: 'Organization name', type: 'text', required: true, half: true, placeholderRu: 'ООО «Ромашка»' }),
      F({ id: 'head_name', labelRu: 'ФИО руководителя', labelEn: 'Head full name', type: 'text', required: true, half: true, placeholderRu: 'Иванову И.И.', hintRu: 'в дательном падеже' }),
      F({ id: 'applicant_position', labelRu: 'Ваша должность', labelEn: 'Your position', type: 'text', required: true, half: true, placeholderRu: 'менеджера отдела продаж', hintRu: 'в родительном падеже' }),
      F({ id: 'applicant_name', labelRu: 'Ваши ФИО', labelEn: 'Your full name', type: 'text', required: true, half: true, placeholderRu: 'Петровой Анны Сергеевны', hintRu: 'в родительном падеже' }),
      F({ id: 'date_to', labelRu: 'Дата увольнения', labelEn: 'Resignation date', type: 'date', required: true, half: true, hintRu: 'не ранее чем через 2 недели после подачи' }),
    ],
    body: [
      hdr(['{{head_position}}', '{{org_name}}', '{{head_name}}'], ['от {{applicant_position}}', '{{applicant_name}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'paragraph', text: 'Прошу уволить меня по собственному желанию {{date_to}} на основании пункта 3 части первой статьи 77 Трудового кодекса Российской Федерации.', justify: true },
      { type: 'paragraph', text: 'Трудовую книжку и окончательный расчёт прошу выдать мне в день увольнения.', justify: true },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-work-docs-62', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Заявление о выдаче документов, связанных с работой', titleEn: 'Workplace documents request',
    descRu: 'Заявление о выдаче копий документов, связанных с работой: справки о зарплате (2-НДФЛ, для банка/визы), копии трудовой книжки, приказа о приёме. Работодатель обязан выдать не позднее трёх рабочих дней.',
    descEn: 'Request for work-related documents (salary certificates, employment record copy). Employer must provide within 3 working days.',
    refRu: 'ст. 62 Трудового кодекса РФ',
    refEn: 'Article 62 of the Russian Labour Code',
    fields: [
      F({ id: 'head_position', labelRu: 'Должность руководителя', labelEn: 'Head position', type: 'text', required: true, half: true, placeholderRu: 'Генеральному директору', hintRu: 'в дательном падеже' }),
      F({ id: 'org_name', labelRu: 'Наименование организации', labelEn: 'Organization name', type: 'text', required: true, half: true, placeholderRu: 'ООО «Ромашка»' }),
      F({ id: 'head_name', labelRu: 'ФИО руководителя', labelEn: 'Head full name', type: 'text', required: true, half: true, placeholderRu: 'Иванову И.И.', hintRu: 'в дательном падеже' }),
      F({ id: 'applicant_position', labelRu: 'Ваша должность', labelEn: 'Your position', type: 'text', required: true, half: true, placeholderRu: 'менеджера отдела продаж', hintRu: 'в родительном падеже' }),
      F({ id: 'applicant_name', labelRu: 'Ваши ФИО', labelEn: 'Your full name', type: 'text', required: true, half: true, placeholderRu: 'Петровой Анны Сергеевны', hintRu: 'в родительном падеже' }),
      F({ id: 'documents', labelRu: 'Какие документы нужны', labelEn: 'Documents needed', type: 'textarea', required: true, placeholderRu: 'справку о заработной плате за 2025 год, копию трудовой книжки, копию приказа о приёме на работу' }),
    ],
    body: [
      hdr(['{{head_position}}', '{{org_name}}', '{{head_name}}'], ['от {{applicant_position}}', '{{applicant_name}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'paragraph', text: 'Прошу выдать мне заверенные надлежащим образом копии документов, связанных с работой: {{documents}}.', justify: true },
      { type: 'paragraph', text: 'На основании статьи 62 Трудового кодекса РФ документы должны быть выданы не позднее трёх рабочих дней со дня подачи настоящего заявления.', justify: true },
      stdSign('{{applicant_name}}'),
    ],
  },

  // ================= СУДЫ =================
  {
    slug: 'ru-court-goods-return', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Претензия продавцу о возврате товара', titleEn: 'Claim to seller: defective goods',
    descRu: 'Досудебная претензия продавцу при обнаружении недостатка товара. Сначала претензия — затем суд; без неё суд может оставить иск без движения. Срок предъявления — в пределах гарантийного срока или 2 лет.',
    descEn: 'Pre-court claim to a seller over defective goods. Required step before a consumer lawsuit.',
    refRu: 'ст. 18, 19 Закона РФ «О защите прав потребителей» № 2300-1',
    refEn: 'Articles 18, 19 of the Russian Consumer Protection Law No. 2300-1',
    fields: [
      F({ id: 'seller_name', labelRu: 'Наименование продавца', labelEn: 'Seller name', type: 'text', required: true, placeholderRu: 'ООО «Магазин», ИП Иванов И.И.' }),
      F({ id: 'seller_address', labelRu: 'Адрес продавца', labelEn: 'Seller address', type: 'text', required: true, placeholderRu: 'г. Москва, ул. Ленина, д. 1' }),
      F({ id: 'applicant_name', labelRu: 'Ваши ФИО', labelEn: 'Your full name', type: 'text', required: true, half: true, placeholderRu: 'Смирнова Ольга Викторовна' }),
      F({ id: 'applicant_phone', labelRu: 'Телефон для ответа', labelEn: 'Contact phone', type: 'text', required: true, half: true, placeholderRu: '+7 900 000-00-00' }),
      F({ id: 'applicant_address', labelRu: 'Адрес для ответа', labelEn: 'Mailing address', type: 'text', required: true, placeholderRu: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F({ id: 'product_name', labelRu: 'Товар', labelEn: 'Product', type: 'text', required: true, half: true, placeholderRu: 'смартфон Samsung Galaxy A54' }),
      F({ id: 'price', labelRu: 'Стоимость, руб.', labelEn: 'Price, RUB', type: 'number', required: true, half: true, placeholderRu: '29990' }),
      F({ id: 'date_buy', labelRu: 'Дата покупки', labelEn: 'Purchase date', type: 'date', required: true, half: true }),
      F({ id: 'proof', labelRu: 'Подтверждение покупки', labelEn: 'Proof of purchase', type: 'text', required: true, half: true, placeholderRu: 'кассовый чек № 123 от 01.10.2026' }),
      F({ id: 'defect', labelRu: 'Обнаруженный недостаток', labelEn: 'Defect found', type: 'textarea', required: true, placeholderRu: 'через две недели использования перестал работать динамик, звук отсутствует' }),
      F({ id: 'demand', labelRu: 'Ваше требование', labelEn: 'Your demand', type: 'select', required: true, options: ['вернуть уплаченную за товар сумму', 'заменить товар на аналогичный', 'провести гарантийный ремонт', 'соразмерно уменьшить цену товара'] }),
    ],
    body: [
      hdr(['{{seller_name}}', '{{seller_address}}'], ['от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ПРЕТЕНЗИЯ' },
      { type: 'subtitle', text: 'о возврате товара ненадлежащего качества' },
      { type: 'paragraph', text: '{{date_buy}} я приобрел(а) в вашей организации товар «{{product_name}}» стоимостью {{price}} рублей. Факт покупки подтверждается: {{proof}}.', justify: true },
      { type: 'paragraph', text: 'В процессе эксплуатации в товаре обнаружился недостаток: {{defect}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 18, 19 Закона РФ от 07.02.1992 № 2300-1 «О защите прав потребителей» требую {{demand}}.', justify: true },
      { type: 'paragraph', text: 'В случае отказа в добровольном удовлетворении претензии буду вынужден(а) обратиться в суд. В этом случае с вас дополнительно будут взысканы неустойка, компенсация морального вреда и штраф в размере пятидесяти процентов присуждённой суммы (п. 6 ст. 13, ст. 23 Закона «О защите прав потребителей»).', justify: true },
      { type: 'attachment', items: ['Копия документа, подтверждающего покупку.'] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-court-services-claim', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Претензия по договору оказания услуг', titleEn: 'Claim for poor services',
    descRu: 'Досудебная претензия исполнителю услуг (ремонт, туристические, юридические и т.п.) при обнаружении недостатков или нарушении сроков. Подаётся до иска о защите прав потребителя.',
    descEn: 'Pre-court claim to a service provider over defects or missed deadlines.',
    refRu: 'ст. 28, 29 Закона РФ «О защите прав потребителей»; ст. 782 ГК РФ',
    refEn: 'Articles 28, 29 of the Consumer Protection Law; Art. 782 of the Civil Code',
    fields: [
      F({ id: 'executor_name', labelRu: 'Наименование исполнителя', labelEn: 'Provider name', type: 'text', required: true, placeholderRu: 'ООО «Сервис+»' }),
      F({ id: 'executor_address', labelRu: 'Адрес исполнителя', labelEn: 'Provider address', type: 'text', required: true, placeholderRu: 'г. Москва, ул. Ленина, д. 1' }),
      F({ id: 'applicant_name', labelRu: 'Ваши ФИО', labelEn: 'Your full name', type: 'text', required: true, half: true, placeholderRu: 'Смирнова Ольга Викторовна' }),
      F({ id: 'applicant_phone', labelRu: 'Телефон для ответа', labelEn: 'Contact phone', type: 'text', required: true, half: true, placeholderRu: '+7 900 000-00-00' }),
      F({ id: 'service_desc', labelRu: 'Какие услуги заказывали', labelEn: 'Services ordered', type: 'textarea', required: true, placeholderRu: 'ремонт мобильного телефона, замена экрана' }),
      F({ id: 'contract_date', labelRu: 'Дата договора/заказа', labelEn: 'Contract date', type: 'date', required: true, half: true }),
      F({ id: 'amount_paid', labelRu: 'Оплачено, руб.', labelEn: 'Amount paid, RUB', type: 'number', required: true, half: true, placeholderRu: '8500' }),
      F({ id: 'defects', labelRu: 'Недостатки / нарушения', labelEn: 'Defects / violations', type: 'textarea', required: true, placeholderRu: 'экран заменён некачественно, через неделю появились пятна; срок ремонта в 10 дней нарушен' }),
      F({ id: 'demand', labelRu: 'Ваше требование', labelEn: 'Your demand', type: 'select', required: true, options: ['безвозмездно устранить недостатки', 'уменьшить цену услуги', 'возместить расходы на устранение недостатков своими силами', 'отказаться от договора и вернуть уплаченные деньги'] }),
    ],
    body: [
      hdr(['{{executor_name}}', '{{executor_address}}'], ['от {{applicant_name}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ПРЕТЕНЗИЯ' },
      { type: 'subtitle', text: 'о недостатках оказанной услуги' },
      { type: 'paragraph', text: '{{contract_date}} я заключил(а) с вами договор на оказание услуг: {{service_desc}}. Стоимость услуги составила {{amount_paid}} рублей.', justify: true },
      { type: 'paragraph', text: 'Обнаружены следующие недостатки и нарушения: {{defects}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 28, 29 Закона РФ «О защите прав потребителей» и статьёй 782 ГК РФ требую {{demand}}.', justify: true },
      { type: 'paragraph', text: 'При отказе в добровольном удовлетворении претензии обращусь в суд с иском о защите прав потребителя с взысканием неустойки, морального вреда и штрафа (п. 6 ст. 13 Закона).', justify: true },
      { type: 'attachment', items: ['Копия договора (квитанции, заказа);', 'Копия документа об оплате.'] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-court-debt-lawsuit', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление о взыскании долга по расписке', titleEn: 'Lawsuit: debt recovery by IOU',
    descRu: 'Базовая форма иска о взыскании долга по договору займа, подтверждённого распиской. Подаётся в суд по месту жительства ответчика; госпошлина рассчитывается от цены иска.',
    descEn: 'Basic claim form for debt recovery under an IOU (loan note). Standard procedural requirements apply.',
    refRu: 'ст. 131–132 ГПК РФ; ст. 808, 810 ГК РФ',
    refEn: 'Articles 131-132 of the Civil Procedure Code; Art. 808, 810 of the Civil Code',
    fields: [
      F({ id: 'court_name', labelRu: 'Наименование суда', labelEn: 'Court name', type: 'text', required: true, placeholderRu: 'Ленинский районный суд города Москвы', hintRu: 'по месту жительства ответчика (ст. 28 ГПК РФ)' }),
      F({ id: 'plaintiff_name', labelRu: 'Истец — ваши ФИО', labelEn: 'Plaintiff full name', type: 'text', required: true, half: true, placeholderRu: 'Смирнова Ольга Викторовна' }),
      F({ id: 'plaintiff_phone', labelRu: 'Телефон истца', labelEn: 'Plaintiff phone', type: 'text', required: true, half: true, placeholderRu: '+7 900 000-00-00' }),
      F({ id: 'plaintiff_address', labelRu: 'Адрес истца', labelEn: 'Plaintiff address', type: 'text', required: true, placeholderRu: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F({ id: 'defendant_name', labelRu: 'Ответчик — ФИО должника', labelEn: 'Defendant full name', type: 'text', required: true, half: true, placeholderRu: 'Иванов Иван Иванович' }),
      F({ id: 'defendant_address', labelRu: 'Адрес ответчика', labelEn: 'Defendant address', type: 'text', required: true, half: true, placeholderRu: 'г. Москва, ул. Гагарина, д. 5, кв. 12', hintRu: 'насколько известно — ст. 131 ГПК РФ' }),
      F({ id: 'amount', labelRu: 'Сумма долга, руб.', labelEn: 'Debt amount, RUB', type: 'number', required: true, half: true, placeholderRu: '150000' }),
      F({ id: 'date_loan', labelRu: 'Дата передачи денег', labelEn: 'Loan date', type: 'date', required: true, half: true }),
      F({ id: 'date_due', labelRu: 'Срок возврата по расписке', labelEn: 'Due date per IOU', type: 'date', required: true, half: true }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Истец: {{plaintiff_name}}', 'Адрес: {{plaintiff_address}}', 'Тел.: {{plaintiff_phone}}', '', 'Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}'] },
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о взыскании долга по договору займа' },
      { type: 'paragraph', text: '{{date_loan}} ответчик {{defendant_name}} получил от меня денежные средства в размере {{amount}} рублей, что подтверждается распиской, составленной в простой письменной форме в соответствии со статьёй 808 Гражданского кодекса РФ.', justify: true },
      { type: 'paragraph', text: 'В установленный распиской срок — {{date_due}} — сумма займа мне не возвращена. В соответствии со статьёй 810 ГК РФ заемщик обязан возвратить займодавцу полученную сумму займа в срок и в порядке, предусмотренные договором займа.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 131–132 Гражданского процессуального кодекса Российской Федерации прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Взыскать с ответчика {{defendant_name}} в мою пользу долг по договору займа в размере {{amount}} рублей.',
        'Взыскать с ответчика проценты за пользование чужими денежными средствами по статье 395 ГК РФ со дня, следующего за днём возврата, установленным распиской, по день фактической уплаты долга.',
        'Взыскать с ответчика расходы по уплате государственной пошлины.',
      ] },
      { type: 'attachment', items: ['Копия расписки о получении денежных средств;', 'Копии искового заявления по числу лиц, участвующих в деле;', 'Документ об уплате государственной пошлины.'] },
      stdSign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'ru-court-consumer-lawsuit', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление о защите прав потребителя', titleEn: 'Consumer protection lawsuit',
    descRu: 'Базовая форма иска, если продавец/исполнитель проигнорировал досудебную претензию. Иск о защите прав потребителя можно подать по месту жительства истца (ст. 17 ЗоЗПП).',
    descEn: 'Basic consumer protection lawsuit when the pre-court claim was ignored.',
    refRu: 'ст. 17 Закона РФ «О защите прав потребителей»; ст. 131–132 ГПК РФ',
    refEn: 'Article 17 of the Consumer Protection Law; Art. 131-132 of the Civil Procedure Code',
    fields: [
      F({ id: 'court_name', labelRu: 'Наименование суда', labelEn: 'Court name', type: 'text', required: true, placeholderRu: 'Ленинский районный суд города Москвы', hintRu: 'можно по месту жительства истца (ст. 17 ЗоЗПП)' }),
      F({ id: 'plaintiff_name', labelRu: 'Истец — ваши ФИО', labelEn: 'Plaintiff full name', type: 'text', required: true, half: true, placeholderRu: 'Смирнова Ольга Викторовна' }),
      F({ id: 'plaintiff_phone', labelRu: 'Телефон истца', labelEn: 'Plaintiff phone', type: 'text', required: true, half: true, placeholderRu: '+7 900 000-00-00' }),
      F({ id: 'plaintiff_address', labelRu: 'Адрес истца', labelEn: 'Plaintiff address', type: 'text', required: true, placeholderRu: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F({ id: 'defendant_name', labelRu: 'Ответчик — наименование организации', labelEn: 'Defendant name', type: 'text', required: true, half: true, placeholderRu: 'ООО «Магазин»' }),
      F({ id: 'defendant_address', labelRu: 'Адрес ответчика', labelEn: 'Defendant address', type: 'text', required: true, half: true, placeholderRu: 'г. Москва, ул. Ленина, д. 1' }),
      F({ id: 'product_name', labelRu: 'Товар / услуга', labelEn: 'Product / service', type: 'text', required: true, half: true, placeholderRu: 'смартфон Samsung Galaxy A54' }),
      F({ id: 'amount', labelRu: 'Стоимость, руб.', labelEn: 'Price, RUB', type: 'number', required: true, half: true, placeholderRu: '29990' }),
      F({ id: 'claim_date', labelRu: 'Дата подачи претензии', labelEn: 'Claim date', type: 'date', required: true, half: true, hintRu: 'досудебная претензия обязательна' }),
      F({ id: 'claim_result', labelRu: 'Результат претензии', labelEn: 'Claim outcome', type: 'select', required: true, half: true, options: ['ответ не получен', 'получен отказ в удовлетворении', 'требования удовлетворены частично'] }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Истец: {{plaintiff_name}}', 'Адрес: {{plaintiff_address}}', 'Тел.: {{plaintiff_phone}}', '', 'Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}'] },
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о защите прав потребителя' },
      { type: 'paragraph', text: 'Я приобрел(а) у ответчика товар (услугу) «{{product_name}}» стоимостью {{amount}} рублей. В товаре (услуге) обнаружились недостатки, которые ответчик отказался устранить добровольно.', justify: true },
      { type: 'paragraph', text: '{{claim_date}} я направил(а) ответчику письменную претензию. {{claim_result}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 17, 18, 28, 29 Закона РФ «О защите прав потребителей» и статьями 131–132 ГПК РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Вернуть уплаченную за товар (услугу) сумму {{amount}} рублей.',
        'Взыскать неустойку за нарушение сроков удовлетворения требований потребителя (ст. 23 Закона «О защите прав потребителей»).',
        'Взыскать компенсацию морального вреда (ст. 15 Закона).',
        'Взыскать штраф за несоблюдение добровольного порядка удовлетворения требований (п. 6 ст. 13 Закона).',
      ] },
      { type: 'attachment', items: ['Копия документа о покупке (заказе);', 'Копия досудебной претензии;', 'Копии искового заявления по числу лиц, участвующих в деле;', 'Документ об уплате государственной пошлины (при её исчислении).'] },
      stdSign('{{plaintiff_name}}'),
    ],
  },
];
