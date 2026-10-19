// Шаблоны для России — портированы из исходных сидов (этап MVP).
// Все шаблоны основаны на реальных нормах законодательства РФ (ТЗ: не выдумывать).
import type { TplDef } from '../types';

export const TEMPLATES_RU: TplDef[] = [
  {
    "slug": "ru-work-annual-vacation",
    "kind": "STANDARD",
    "categorySlug": "work-vacations",
    "titleRu": "Заявление на ежегодный оплачиваемый отпуск",
    "titleEn": "Annual paid leave application",
    "descRu": "Заявление работодателю о предоставлении ежегодного основного оплачиваемого отпуска. Подаётся заблаговременно — график отпусков утверждается за две недели до календарного года.",
    "descEn": "Application to the employer for annual paid leave. Standard HR document under the Russian Labour Code.",
    "refRu": "ст. 122, 123 Трудового кодекса РФ",
    "refEn": "Articles 122, 123 of the Russian Labour Code",
    "fields": [
      {
        "id": "head_position",
        "labelRu": "Должность руководителя",
        "labelEn": "Head position",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Генеральному директору",
        "hintRu": "в дательном падеже"
      },
      {
        "id": "org_name",
        "labelRu": "Наименование организации",
        "labelEn": "Organization name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "ООО «Ромашка»"
      },
      {
        "id": "head_name",
        "labelRu": "ФИО руководителя",
        "labelEn": "Head full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Иванову И.И.",
        "hintRu": "в дательном падеже"
      },
      {
        "id": "applicant_position",
        "labelRu": "Ваша должность",
        "labelEn": "Your position",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "менеджера отдела продаж",
        "hintRu": "в родительном падеже"
      },
      {
        "id": "applicant_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Петровой Анны Сергеевны",
        "hintRu": "в родительном падеже"
      },
      {
        "id": "days",
        "labelRu": "Количество календарных дней",
        "labelEn": "Days count",
        type: 'number',
        required: true,
        half: true,
        "placeholderRu": "28"
      },
      {
        "id": "date_from",
        "labelRu": "Дата начала отпуска",
        "labelEn": "Leave start date",
        type: 'date',
        required: true,
        half: true
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "{{head_position}}",
          "{{org_name}}",
          "{{head_name}}",
          "",
          "от {{applicant_position}}",
          "{{applicant_name}}"
        ]
      },
      {
        type: 'title',
        "text": "ЗАЯВЛЕНИЕ"
      },
      {
        type: 'paragraph',
        "text": "Прошу предоставить мне ежегодный оплачиваемый отпуск продолжительностью {{days}} календарных дней с {{date_from}}.",
        justify: true
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{applicant_name}} /"
      }
    ]
  },
  {
    "slug": "ru-work-unpaid-vacation",
    "kind": "STANDARD",
    "categorySlug": "work-vacations",
    "titleRu": "Заявление на отпуск без сохранения зарплаты",
    "titleEn": "Unpaid leave application",
    "descRu": "Заявление об отпуске без сохранения заработной платы («за свой счёт»). По уважительным причинам — по соглашению сторон; отдельным категориям работников работодатель обязан предоставить по закону.",
    "descEn": "Unpaid leave application (at own expense). Standard HR document under the Russian Labour Code.",
    "refRu": "ст. 128 Трудового кодекса РФ",
    "refEn": "Article 128 of the Russian Labour Code",
    "fields": [
      {
        "id": "head_position",
        "labelRu": "Должность руководителя",
        "labelEn": "Head position",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Генеральному директору",
        "hintRu": "в дательном падеже"
      },
      {
        "id": "org_name",
        "labelRu": "Наименование организации",
        "labelEn": "Organization name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "ООО «Ромашка»"
      },
      {
        "id": "head_name",
        "labelRu": "ФИО руководителя",
        "labelEn": "Head full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Иванову И.И.",
        "hintRu": "в дательном падеже"
      },
      {
        "id": "applicant_position",
        "labelRu": "Ваша должность",
        "labelEn": "Your position",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "менеджера отдела продаж",
        "hintRu": "в родительном падеже"
      },
      {
        "id": "applicant_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Петровой Анны Сергеевны",
        "hintRu": "в родительном падеже"
      },
      {
        "id": "days",
        "labelRu": "Количество календарных дней",
        "labelEn": "Days count",
        type: 'number',
        required: true,
        half: true,
        "placeholderRu": "3"
      },
      {
        "id": "date_from",
        "labelRu": "Дата начала",
        "labelEn": "Start date",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "date_to",
        "labelRu": "Дата окончания",
        "labelEn": "End date",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "reason",
        "labelRu": "Причина",
        "labelEn": "Reason",
        type: 'textarea',
        required: true,
        "placeholderRu": "по семейным обстоятельствам"
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "{{head_position}}",
          "{{org_name}}",
          "{{head_name}}",
          "",
          "от {{applicant_position}}",
          "{{applicant_name}}"
        ]
      },
      {
        type: 'title',
        "text": "ЗАЯВЛЕНИЕ"
      },
      {
        type: 'paragraph',
        "text": "Прошу предоставить мне отпуск без сохранения заработной платы продолжительностью {{days}} календарных дней с {{date_from}} по {{date_to}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Причина: {{reason}}.",
        justify: true
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{applicant_name}} /"
      }
    ]
  },
  {
    "slug": "ru-work-dismissal",
    "kind": "STANDARD",
    "categorySlug": "work-dismissal",
    "titleRu": "Заявление об увольнении по собственному желанию",
    "titleEn": "Voluntary resignation application",
    "descRu": "Базовое заявление о расторжении трудового договора по инициативе работника. Предупредить работодателя нужно не позднее чем за две недели; срок начинает течь со следующего дня после подачи.",
    "descEn": "Basic resignation notice under the Russian Labour Code. Two weeks notice period applies.",
    "refRu": "ст. 80 Трудового кодекса РФ",
    "refEn": "Article 80 of the Russian Labour Code",
    "fields": [
      {
        "id": "head_position",
        "labelRu": "Должность руководителя",
        "labelEn": "Head position",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Генеральному директору",
        "hintRu": "в дательном падеже"
      },
      {
        "id": "org_name",
        "labelRu": "Наименование организации",
        "labelEn": "Organization name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "ООО «Ромашка»"
      },
      {
        "id": "head_name",
        "labelRu": "ФИО руководителя",
        "labelEn": "Head full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Иванову И.И.",
        "hintRu": "в дательном падеже"
      },
      {
        "id": "applicant_position",
        "labelRu": "Ваша должность",
        "labelEn": "Your position",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "менеджера отдела продаж",
        "hintRu": "в родительном падеже"
      },
      {
        "id": "applicant_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Петровой Анны Сергеевны",
        "hintRu": "в родительном падеже"
      },
      {
        "id": "date_to",
        "labelRu": "Дата увольнения",
        "labelEn": "Resignation date",
        type: 'date',
        required: true,
        half: true,
        "hintRu": "не ранее чем через 2 недели после подачи"
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "{{head_position}}",
          "{{org_name}}",
          "{{head_name}}",
          "",
          "от {{applicant_position}}",
          "{{applicant_name}}"
        ]
      },
      {
        type: 'title',
        "text": "ЗАЯВЛЕНИЕ"
      },
      {
        type: 'paragraph',
        "text": "Прошу уволить меня по собственному желанию {{date_to}} на основании пункта 3 части первой статьи 77 Трудового кодекса Российской Федерации.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Трудовую книжку и окончательный расчёт прошу выдать мне в день увольнения.",
        justify: true
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{applicant_name}} /"
      }
    ]
  },
  {
    "slug": "ru-work-docs-62",
    "kind": "STANDARD",
    "categorySlug": "work-docs",
    "titleRu": "Заявление о выдаче документов, связанных с работой",
    "titleEn": "Workplace documents request",
    "descRu": "Заявление о выдаче копий документов, связанных с работой: справки о зарплате (2-НДФЛ, для банка/визы), копии трудовой книжки, приказа о приёме. Работодатель обязан выдать не позднее трёх рабочих дней.",
    "descEn": "Request for work-related documents (salary certificates, employment record copy). Employer must provide within 3 working days.",
    "refRu": "ст. 62 Трудового кодекса РФ",
    "refEn": "Article 62 of the Russian Labour Code",
    "fields": [
      {
        "id": "head_position",
        "labelRu": "Должность руководителя",
        "labelEn": "Head position",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Генеральному директору",
        "hintRu": "в дательном падеже"
      },
      {
        "id": "org_name",
        "labelRu": "Наименование организации",
        "labelEn": "Organization name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "ООО «Ромашка»"
      },
      {
        "id": "head_name",
        "labelRu": "ФИО руководителя",
        "labelEn": "Head full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Иванову И.И.",
        "hintRu": "в дательном падеже"
      },
      {
        "id": "applicant_position",
        "labelRu": "Ваша должность",
        "labelEn": "Your position",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "менеджера отдела продаж",
        "hintRu": "в родительном падеже"
      },
      {
        "id": "applicant_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Петровой Анны Сергеевны",
        "hintRu": "в родительном падеже"
      },
      {
        "id": "documents",
        "labelRu": "Какие документы нужны",
        "labelEn": "Documents needed",
        type: 'textarea',
        required: true,
        "placeholderRu": "справку о заработной плате за 2025 год, копию трудовой книжки, копию приказа о приёме на работу"
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "{{head_position}}",
          "{{org_name}}",
          "{{head_name}}",
          "",
          "от {{applicant_position}}",
          "{{applicant_name}}"
        ]
      },
      {
        type: 'title',
        "text": "ЗАЯВЛЕНИЕ"
      },
      {
        type: 'paragraph',
        "text": "Прошу выдать мне заверенные надлежащим образом копии документов, связанных с работой: {{documents}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "На основании статьи 62 Трудового кодекса РФ документы должны быть выданы не позднее трёх рабочих дней со дня подачи настоящего заявления.",
        justify: true
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{applicant_name}} /"
      }
    ]
  },
  {
    "slug": "ru-court-goods-return",
    "kind": "STANDARD",
    "categorySlug": "court-claims",
    "titleRu": "Претензия продавцу о возврате товара",
    "titleEn": "Claim to seller: defective goods",
    "descRu": "Досудебная претензия продавцу при обнаружении недостатка товара. Сначала претензия — затем суд; без неё суд может оставить иск без движения. Срок предъявления — в пределах гарантийного срока или 2 лет.",
    "descEn": "Pre-court claim to a seller over defective goods. Required step before a consumer lawsuit.",
    "refRu": "ст. 18, 19 Закона РФ «О защите прав потребителей» № 2300-1",
    "refEn": "Articles 18, 19 of the Russian Consumer Protection Law No. 2300-1",
    "fields": [
      {
        "id": "seller_name",
        "labelRu": "Наименование продавца",
        "labelEn": "Seller name",
        type: 'text',
        required: true,
        "placeholderRu": "ООО «Магазин», ИП Иванов И.И."
      },
      {
        "id": "seller_address",
        "labelRu": "Адрес продавца",
        "labelEn": "Seller address",
        type: 'text',
        required: true,
        "placeholderRu": "г. Москва, ул. Ленина, д. 1"
      },
      {
        "id": "applicant_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Смирнова Ольга Викторовна"
      },
      {
        "id": "applicant_phone",
        "labelRu": "Телефон для ответа",
        "labelEn": "Contact phone",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "+7 900 000-00-00"
      },
      {
        "id": "applicant_address",
        "labelRu": "Адрес для ответа",
        "labelEn": "Mailing address",
        type: 'text',
        required: true,
        "placeholderRu": "г. Москва, ул. Пушкина, д. 2, кв. 3"
      },
      {
        "id": "product_name",
        "labelRu": "Товар",
        "labelEn": "Product",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "смартфон Samsung Galaxy A54"
      },
      {
        "id": "price",
        "labelRu": "Стоимость, руб.",
        "labelEn": "Price, RUB",
        type: 'number',
        required: true,
        half: true,
        "placeholderRu": "29990"
      },
      {
        "id": "date_buy",
        "labelRu": "Дата покупки",
        "labelEn": "Purchase date",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "proof",
        "labelRu": "Подтверждение покупки",
        "labelEn": "Proof of purchase",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "кассовый чек № 123 от 01.10.2026"
      },
      {
        "id": "defect",
        "labelRu": "Обнаруженный недостаток",
        "labelEn": "Defect found",
        type: 'textarea',
        required: true,
        "placeholderRu": "через две недели использования перестал работать динамик, звук отсутствует"
      },
      {
        "id": "demand",
        "labelRu": "Ваше требование",
        "labelEn": "Your demand",
        type: 'select',
        required: true,
        "options": [
          "вернуть уплаченную за товар сумму",
          "заменить товар на аналогичный",
          "провести гарантийный ремонт",
          "соразмерно уменьшить цену товара"
        ]
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "{{seller_name}}",
          "{{seller_address}}",
          "",
          "от {{applicant_name}}",
          "{{applicant_address}}",
          "тел.: {{applicant_phone}}"
        ]
      },
      {
        type: 'title',
        "text": "ПРЕТЕНЗИЯ"
      },
      {
        type: 'subtitle',
        "text": "о возврате товара ненадлежащего качества"
      },
      {
        type: 'paragraph',
        "text": "{{date_buy}} я приобрел(а) в вашей организации товар «{{product_name}}» стоимостью {{price}} рублей. Факт покупки подтверждается: {{proof}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "В процессе эксплуатации в товаре обнаружился недостаток: {{defect}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "В соответствии со статьями 18, 19 Закона РФ от 07.02.1992 № 2300-1 «О защите прав потребителей» требую {{demand}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "В случае отказа в добровольном удовлетворении претензии буду вынужден(а) обратиться в суд. В этом случае с вас дополнительно будут взысканы неустойка, компенсация морального вреда и штраф в размере пятидесяти процентов присуждённой суммы (п. 6 ст. 13, ст. 23 Закона «О защите прав потребителей»).",
        justify: true
      },
      {
        type: 'attachment',
        "items": [
          "Копия документа, подтверждающего покупку."
        ]
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{applicant_name}} /"
      }
    ]
  },
  {
    "slug": "ru-court-services-claim",
    "kind": "STANDARD",
    "categorySlug": "court-claims",
    "titleRu": "Претензия по договору оказания услуг",
    "titleEn": "Claim for poor services",
    "descRu": "Досудебная претензия исполнителю услуг (ремонт, туристические, юридические и т.п.) при обнаружении недостатков или нарушении сроков. Подаётся до иска о защите прав потребителя.",
    "descEn": "Pre-court claim to a service provider over defects or missed deadlines.",
    "refRu": "ст. 28, 29 Закона РФ «О защите прав потребителей»; ст. 782 ГК РФ",
    "refEn": "Articles 28, 29 of the Consumer Protection Law; Art. 782 of the Civil Code",
    "fields": [
      {
        "id": "executor_name",
        "labelRu": "Наименование исполнителя",
        "labelEn": "Provider name",
        type: 'text',
        required: true,
        "placeholderRu": "ООО «Сервис+»"
      },
      {
        "id": "executor_address",
        "labelRu": "Адрес исполнителя",
        "labelEn": "Provider address",
        type: 'text',
        required: true,
        "placeholderRu": "г. Москва, ул. Ленина, д. 1"
      },
      {
        "id": "applicant_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Смирнова Ольга Викторовна"
      },
      {
        "id": "applicant_phone",
        "labelRu": "Телефон для ответа",
        "labelEn": "Contact phone",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "+7 900 000-00-00"
      },
      {
        "id": "service_desc",
        "labelRu": "Какие услуги заказывали",
        "labelEn": "Services ordered",
        type: 'textarea',
        required: true,
        "placeholderRu": "ремонт мобильного телефона, замена экрана"
      },
      {
        "id": "contract_date",
        "labelRu": "Дата договора/заказа",
        "labelEn": "Contract date",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "amount_paid",
        "labelRu": "Оплачено, руб.",
        "labelEn": "Amount paid, RUB",
        type: 'number',
        required: true,
        half: true,
        "placeholderRu": "8500"
      },
      {
        "id": "defects",
        "labelRu": "Недостатки / нарушения",
        "labelEn": "Defects / violations",
        type: 'textarea',
        required: true,
        "placeholderRu": "экран заменён некачественно, через неделю появились пятна; срок ремонта в 10 дней нарушен"
      },
      {
        "id": "demand",
        "labelRu": "Ваше требование",
        "labelEn": "Your demand",
        type: 'select',
        required: true,
        "options": [
          "безвозмездно устранить недостатки",
          "уменьшить цену услуги",
          "возместить расходы на устранение недостатков своими силами",
          "отказаться от договора и вернуть уплаченные деньги"
        ]
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "{{executor_name}}",
          "{{executor_address}}",
          "",
          "от {{applicant_name}}",
          "тел.: {{applicant_phone}}"
        ]
      },
      {
        type: 'title',
        "text": "ПРЕТЕНЗИЯ"
      },
      {
        type: 'subtitle',
        "text": "о недостатках оказанной услуги"
      },
      {
        type: 'paragraph',
        "text": "{{contract_date}} я заключил(а) с вами договор на оказание услуг: {{service_desc}}. Стоимость услуги составила {{amount_paid}} рублей.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Обнаружены следующие недостатки и нарушения: {{defects}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "В соответствии со статьями 28, 29 Закона РФ «О защите прав потребителей» и статьёй 782 ГК РФ требую {{demand}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "При отказе в добровольном удовлетворении претензии обращусь в суд с иском о защите прав потребителя с взысканием неустойки, морального вреда и штрафа (п. 6 ст. 13 Закона).",
        justify: true
      },
      {
        type: 'attachment',
        "items": [
          "Копия договора (квитанции, заказа);",
          "Копия документа об оплате."
        ]
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{applicant_name}} /"
      }
    ]
  },
  {
    "slug": "ru-court-debt-lawsuit",
    "kind": "STANDARD",
    "categorySlug": "court-lawsuits",
    "titleRu": "Исковое заявление о взыскании долга по расписке",
    "titleEn": "Lawsuit: debt recovery by IOU",
    "descRu": "Базовая форма иска о взыскании долга по договору займа, подтверждённого распиской. Подаётся в суд по месту жительства ответчика; госпошлина рассчитывается от цены иска.",
    "descEn": "Basic claim form for debt recovery under an IOU (loan note). Standard procedural requirements apply.",
    "refRu": "ст. 131–132 ГПК РФ; ст. 808, 810 ГК РФ",
    "refEn": "Articles 131-132 of the Civil Procedure Code; Art. 808, 810 of the Civil Code",
    "fields": [
      {
        "id": "court_name",
        "labelRu": "Наименование суда",
        "labelEn": "Court name",
        type: 'text',
        required: true,
        "placeholderRu": "Ленинский районный суд города Москвы",
        "hintRu": "по месту жительства ответчика (ст. 28 ГПК РФ)"
      },
      {
        "id": "plaintiff_name",
        "labelRu": "Истец — ваши ФИО",
        "labelEn": "Plaintiff full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Смирнова Ольга Викторовна"
      },
      {
        "id": "plaintiff_phone",
        "labelRu": "Телефон истца",
        "labelEn": "Plaintiff phone",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "+7 900 000-00-00"
      },
      {
        "id": "plaintiff_address",
        "labelRu": "Адрес истца",
        "labelEn": "Plaintiff address",
        type: 'text',
        required: true,
        "placeholderRu": "г. Москва, ул. Пушкина, д. 2, кв. 3"
      },
      {
        "id": "defendant_name",
        "labelRu": "Ответчик — ФИО должника",
        "labelEn": "Defendant full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Иванов Иван Иванович"
      },
      {
        "id": "defendant_address",
        "labelRu": "Адрес ответчика",
        "labelEn": "Defendant address",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "г. Москва, ул. Гагарина, д. 5, кв. 12",
        "hintRu": "насколько известно — ст. 131 ГПК РФ"
      },
      {
        "id": "amount",
        "labelRu": "Сумма долга, руб.",
        "labelEn": "Debt amount, RUB",
        type: 'number',
        required: true,
        half: true,
        "placeholderRu": "150000"
      },
      {
        "id": "date_loan",
        "labelRu": "Дата передачи денег",
        "labelEn": "Loan date",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "date_due",
        "labelRu": "Срок возврата по расписке",
        "labelEn": "Due date per IOU",
        type: 'date',
        required: true,
        half: true
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "В {{court_name}}",
          "",
          "Истец: {{plaintiff_name}}",
          "Адрес: {{plaintiff_address}}",
          "Тел.: {{plaintiff_phone}}",
          "",
          "Ответчик: {{defendant_name}}",
          "Адрес: {{defendant_address}}"
        ]
      },
      {
        type: 'title',
        "text": "ИСКОВОЕ ЗАЯВЛЕНИЕ"
      },
      {
        type: 'subtitle',
        "text": "о взыскании долга по договору займа"
      },
      {
        type: 'paragraph',
        "text": "{{date_loan}} ответчик {{defendant_name}} получил от меня денежные средства в размере {{amount}} рублей, что подтверждается распиской, составленной в простой письменной форме в соответствии со статьёй 808 Гражданского кодекса РФ.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "В установленный распиской срок — {{date_due}} — сумма займа мне не возвращена. В соответствии со статьёй 810 ГК РФ заемщик обязан возвратить займодавцу полученную сумму займа в срок и в порядке, предусмотренные договором займа.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "В соответствии со статьями 131–132 Гражданского процессуального кодекса Российской Федерации прошу:",
        justify: true
      },
      {
        type: 'list',
        numbered: true,
        "items": [
          "Взыскать с ответчика {{defendant_name}} в мою пользу долг по договору займа в размере {{amount}} рублей.",
          "Взыскать с ответчика проценты за пользование чужими денежными средствами по статье 395 ГК РФ со дня, следующего за днём возврата, установленным распиской, по день фактической уплаты долга.",
          "Взыскать с ответчика расходы по уплате государственной пошлины."
        ]
      },
      {
        type: 'attachment',
        "items": [
          "Копия расписки о получении денежных средств;",
          "Копии искового заявления по числу лиц, участвующих в деле;",
          "Документ об уплате государственной пошлины."
        ]
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{plaintiff_name}} /"
      }
    ]
  },
  {
    "slug": "ru-court-consumer-lawsuit",
    "kind": "STANDARD",
    "categorySlug": "court-lawsuits",
    "titleRu": "Исковое заявление о защите прав потребителя",
    "titleEn": "Consumer protection lawsuit",
    "descRu": "Базовая форма иска, если продавец/исполнитель проигнорировал досудебную претензию. Иск о защите прав потребителя можно подать по месту жительства истца (ст. 17 ЗоЗПП).",
    "descEn": "Basic consumer protection lawsuit when the pre-court claim was ignored.",
    "refRu": "ст. 17 Закона РФ «О защите прав потребителей»; ст. 131–132 ГПК РФ",
    "refEn": "Article 17 of the Consumer Protection Law; Art. 131-132 of the Civil Procedure Code",
    "fields": [
      {
        "id": "court_name",
        "labelRu": "Наименование суда",
        "labelEn": "Court name",
        type: 'text',
        required: true,
        "placeholderRu": "Ленинский районный суд города Москвы",
        "hintRu": "можно по месту жительства истца (ст. 17 ЗоЗПП)"
      },
      {
        "id": "plaintiff_name",
        "labelRu": "Истец — ваши ФИО",
        "labelEn": "Plaintiff full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Смирнова Ольга Викторовна"
      },
      {
        "id": "plaintiff_phone",
        "labelRu": "Телефон истца",
        "labelEn": "Plaintiff phone",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "+7 900 000-00-00"
      },
      {
        "id": "plaintiff_address",
        "labelRu": "Адрес истца",
        "labelEn": "Plaintiff address",
        type: 'text',
        required: true,
        "placeholderRu": "г. Москва, ул. Пушкина, д. 2, кв. 3"
      },
      {
        "id": "defendant_name",
        "labelRu": "Ответчик — наименование организации",
        "labelEn": "Defendant name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "ООО «Магазин»"
      },
      {
        "id": "defendant_address",
        "labelRu": "Адрес ответчика",
        "labelEn": "Defendant address",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "г. Москва, ул. Ленина, д. 1"
      },
      {
        "id": "product_name",
        "labelRu": "Товар / услуга",
        "labelEn": "Product / service",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "смартфон Samsung Galaxy A54"
      },
      {
        "id": "amount",
        "labelRu": "Стоимость, руб.",
        "labelEn": "Price, RUB",
        type: 'number',
        required: true,
        half: true,
        "placeholderRu": "29990"
      },
      {
        "id": "claim_date",
        "labelRu": "Дата подачи претензии",
        "labelEn": "Claim date",
        type: 'date',
        required: true,
        half: true,
        "hintRu": "досудебная претензия обязательна"
      },
      {
        "id": "claim_result",
        "labelRu": "Результат претензии",
        "labelEn": "Claim outcome",
        type: 'select',
        required: true,
        half: true,
        "options": [
          "ответ не получен",
          "получен отказ в удовлетворении",
          "требования удовлетворены частично"
        ]
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "В {{court_name}}",
          "",
          "Истец: {{plaintiff_name}}",
          "Адрес: {{plaintiff_address}}",
          "Тел.: {{plaintiff_phone}}",
          "",
          "Ответчик: {{defendant_name}}",
          "Адрес: {{defendant_address}}"
        ]
      },
      {
        type: 'title',
        "text": "ИСКОВОЕ ЗАЯВЛЕНИЕ"
      },
      {
        type: 'subtitle',
        "text": "о защите прав потребителя"
      },
      {
        type: 'paragraph',
        "text": "Я приобрел(а) у ответчика товар (услугу) «{{product_name}}» стоимостью {{amount}} рублей. В товаре (услуге) обнаружились недостатки, которые ответчик отказался устранить добровольно.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "{{claim_date}} я направил(а) ответчику письменную претензию. {{claim_result}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "В соответствии со статьями 17, 18, 28, 29 Закона РФ «О защите прав потребителей» и статьями 131–132 ГПК РФ прошу:",
        justify: true
      },
      {
        type: 'list',
        numbered: true,
        "items": [
          "Вернуть уплаченную за товар (услугу) сумму {{amount}} рублей.",
          "Взыскать неустойку за нарушение сроков удовлетворения требований потребителя (ст. 23 Закона «О защите прав потребителей»).",
          "Взыскать компенсацию морального вреда (ст. 15 Закона).",
          "Взыскать штраф за несоблюдение добровольного порядка удовлетворения требований (п. 6 ст. 13 Закона)."
        ]
      },
      {
        type: 'attachment',
        "items": [
          "Копия документа о покупке (заказе);",
          "Копия досудебной претензии;",
          "Копии искового заявления по числу лиц, участвующих в деле;",
          "Документ об уплате государственной пошлины (при её исчислении)."
        ]
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{plaintiff_name}} /"
      }
    ]
  },
  {
    "slug": "ru-med-head-doctor",
    "kind": "STANDARD",
    "categorySlug": "med-appeals",
    "titleRu": "Жалоба главному врачу на медицинскую помощь",
    "titleEn": "Complaint to chief physician",
    "descRu": "Первый этап обжалования качества медицинской помощи — жалоба руководителю медицинской организации. Обязательно до обращения в Росздравнадзор и Минздрав. Письменная жалоба регистрируется, ответ — в течение 30 дней (ФЗ № 59-ФЗ).",
    "descEn": "Complaint about medical care quality addressed to the head of the medical organization.",
    "refRu": "ФЗ от 21.11.2011 № 323-ФЗ; ФЗ от 02.05.2006 № 59-ФЗ «О порядке рассмотрения обращений граждан»",
    "refEn": "Federal Law No. 323-FZ; Federal Law No. 59-FZ on citizens appeals",
    "fields": [
      {
        "id": "clinic_name",
        "labelRu": "Наименование медорганизации",
        "labelEn": "Medical organization",
        type: 'text',
        required: true,
        "placeholderRu": "ГБУЗ «Городская поликлиника № 3»"
      },
      {
        "id": "head_name",
        "labelRu": "ФИО главного врача",
        "labelEn": "Chief physician",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Петрову Петра Петровича",
        "hintRu": "в дательном падеже; если известно"
      },
      {
        "id": "patient_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Смирнова Ольга Викторовна"
      },
      {
        "id": "patient_phone",
        "labelRu": "Телефон",
        "labelEn": "Phone",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "+7 900 000-00-00"
      },
      {
        "id": "patient_address",
        "labelRu": "Адрес для ответа",
        "labelEn": "Mailing address",
        type: 'text',
        required: true,
        "placeholderRu": "г. Москва, ул. Пушкина, д. 2, кв. 3"
      },
      {
        "id": "date_visit",
        "labelRu": "Дата обращения за помощью",
        "labelEn": "Date of visit",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "doctor_name",
        "labelRu": "ФИО врача",
        "labelEn": "Doctor name",
        type: 'text',
        "required": false,
        half: true,
        "placeholderRu": "врач-терапевт Кузнецов А.А.",
        "hintRu": "если известно"
      },
      {
        "id": "complaint",
        "labelRu": "Суть жалобы",
        "labelEn": "Complaint details",
        type: 'textarea',
        required: true,
        "placeholderRu": "в приёме было отказано без уважительной причины, записи к специалисту нет более месяца"
      },
      {
        "id": "demand",
        "labelRu": "Что просите",
        "labelEn": "Your demand",
        type: 'textarea',
        required: true,
        "placeholderRu": "провести проверку, организовать запись к специалисту, сообщить о принятых мерах"
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "{{head_name}}",
          "{{clinic_name}}",
          "",
          "от {{patient_name}}",
          "{{patient_address}}",
          "тел.: {{patient_phone}}"
        ]
      },
      {
        type: 'title',
        "text": "ЖАЛОБА"
      },
      {
        type: 'paragraph',
        "text": "{{date_visit}} я обратился(ась) в {{clinic_name}} {{doctor_name}} за медицинской помощью.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Суть жалобы: {{complaint}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Прошу: {{demand}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "В случае оставления жалобы без рассмотрения буду вынужден(а) обратиться в страховую медицинскую организацию, Росздравнадзор и Минздрав России.",
        justify: true
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{patient_name}} /"
      }
    ]
  },
  {
    "slug": "ru-med-oms-insurer",
    "kind": "STANDARD",
    "categorySlug": "med-appeals",
    "titleRu": "Жалоба в страховую медицинскую организацию (ОМС)",
    "titleEn": "Complaint to OMS insurance company",
    "descRu": "Страховая медицинская организация обязана защищать права застрахованных: проводить экспертизы качества помощи и помогать с жалобами. Услуга бесплатна — это часть системы ОМС.",
    "descEn": "Complaint to the compulsory health insurance company — it must protect insured rights for free.",
    "refRu": "ст. 16 ФЗ от 29.11.2010 № 326-ФЗ «Об обязательном медицинском страховании»",
    "refEn": "Article 16 of Federal Law No. 326-FZ on compulsory medical insurance",
    "fields": [
      {
        "id": "insurer_name",
        "labelRu": "Наименование страховой компании",
        "labelEn": "Insurance company",
        type: 'text',
        required: true,
        "placeholderRu": "АО «МАКС-М»",
        "hintRu": "название указано на полисе ОМС"
      },
      {
        "id": "policy_no",
        "labelRu": "Номер полиса ОМС",
        "labelEn": "OMS policy number",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "0000 0000 0000 0000"
      },
      {
        "id": "patient_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Смирнова Ольга Викторовна"
      },
      {
        "id": "patient_address",
        "labelRu": "Адрес для ответа",
        "labelEn": "Mailing address",
        type: 'text',
        required: true,
        "placeholderRu": "г. Москва, ул. Пушкина, д. 2, кв. 3"
      },
      {
        "id": "clinic_name",
        "labelRu": "Медорганизация",
        "labelEn": "Medical organization",
        type: 'text',
        required: true,
        "placeholderRu": "ГБУЗ «Городская поликлиника № 3»"
      },
      {
        "id": "complaint",
        "labelRu": "Суть жалобы",
        "labelEn": "Complaint details",
        type: 'textarea',
        required: true,
        "placeholderRu": "требовали оплатить услугу, входящую в программу ОМС; отказали в выдаче направления"
      },
      {
        "id": "demand",
        "labelRu": "Что просите",
        "labelEn": "Your demand",
        type: 'textarea',
        required: true,
        "placeholderRu": "провести медико-экономическую экспертизу, защитить мои права застрахованного"
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "В {{insurer_name}}",
          "",
          "Застрахованный(ая): {{patient_name}}",
          "Полис ОМС № {{policy_no}}",
          "{{patient_address}}"
        ]
      },
      {
        type: 'title',
        "text": "ЖАЛОБА"
      },
      {
        type: 'paragraph',
        "text": "Я застрахован(а) по полису ОМС № {{policy_no}}. При получении медицинской помощи в {{clinic_name}} нарушались мои права застрахованного.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Суть жалобы: {{complaint}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "На основании статьи 16 Федерального закона от 29.11.2010 № 326-ФЗ «Об обязательном медицинском страховании» прошу: {{demand}}.",
        justify: true
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{patient_name}} /"
      }
    ]
  },
  {
    "slug": "ru-med-doctor-booking",
    "kind": "GOV_PORTAL_ONLY",
    "categorySlug": "med-online",
    "titleRu": "Запись к врачу в государственную поликлинику",
    "titleEn": "Doctor appointment at state clinic",
    "descRu": "В России запись к врачу в государственную поликлинику решается онлайн: через портал Госуслуг, региональные медицинские сервисы или телефон поликлиники. Отдельное бумажное заявление для записи не предусмотрено — поэтому шаблон не нужен.",
    "descEn": "In Russia, clinic appointments are made online via Gosuslugi or regional medical services — no paper application exists.",
    "portalUrl": "https://www.gosuslugi.ru/10573",
    "portalName": "Госуслуги — запись к врачу",
    "portalDescRu": "Что подготовить: полис ОМС, СНИЛС, паспорт. Запись доступна авторизованным пользователям; для детей записывает законный представитель.",
    "portalDescEn": "You will need: OMS policy, SNILS, passport. Available for authorized users.",
    "fields": [],
    "body": []
  },
  {
    "slug": "ru-edu-school-absence",
    "kind": "STANDARD",
    "categorySlug": "edu-docs",
    "titleRu": "Заявление в школу о пропуске занятий",
    "titleEn": "School absence note",
    "descRu": "Заявление директору школы от родителя о разрешении отсутствия ребёнка на занятиях. Форма законом не установлена — используется общепринятый стандарт делопроизводства; ответственность за ребёнка берёт родитель.",
    "descEn": "Parent note to the school principal authorizing a child absence from classes.",
    "refRu": "ФЗ от 29.12.2012 № 273-ФЗ «Об образовании в РФ»; устав школы",
    "refEn": "Federal Law No. 273-FZ on Education; school charter",
    "fields": [
      {
        "id": "school_name",
        "labelRu": "Наименование школы",
        "labelEn": "School name",
        type: 'text',
        required: true,
        "placeholderRu": "МБОУ «СОШ № 1»"
      },
      {
        "id": "director_name",
        "labelRu": "ФИО директора",
        "labelEn": "Principal name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Иванову Ивана Ивановича",
        "hintRu": "в дательном падеже"
      },
      {
        "id": "parent_name",
        "labelRu": "Ваши ФИО (родителя)",
        "labelEn": "Parent full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Смирновой Ольги Викторовны",
        "hintRu": "в родительном падеже"
      },
      {
        "id": "child_name",
        "labelRu": "ФИО ребёнка",
        "labelEn": "Child full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Смирнова Дмитрия Олеговича"
      },
      {
        "id": "class_no",
        "labelRu": "Класс",
        "labelEn": "Class",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "5 «Б»"
      },
      {
        "id": "date_from",
        "labelRu": "Отсутствие с",
        "labelEn": "Absent from",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "date_to",
        "labelRu": "Отсутствие по",
        "labelEn": "Absent until",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "reason",
        "labelRu": "Причина",
        "labelEn": "Reason",
        type: 'select',
        required: true,
        half: true,
        "options": [
          "по семейным обстоятельствам",
          "по медицинским показаниям",
          "по иным уважительным причинам"
        ]
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "Директору {{school_name}}",
          "{{director_name}}",
          "",
          "от {{parent_name}}",
          "родителя(льницы) ученика {{class_no}} класса"
        ]
      },
      {
        type: 'title',
        "text": "ЗАЯВЛЕНИЕ"
      },
      {
        type: 'paragraph',
        "text": "Прошу разрешить моему ребёнку {{child_name}}, обучающемуся в {{class_no}} классе, отсутствовать на занятиях с {{date_from}} по {{date_to}} {{reason}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Ответственность за жизнь и здоровье ребёнка в указанный период возлагаю на себя. Обязуюсь обеспечить прохождение учебной программы за пропущенные занятия.",
        justify: true
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{parent_name}} /"
      }
    ]
  },
  {
    "slug": "ru-edu-academic-leave",
    "kind": "STANDARD",
    "categorySlug": "edu-docs",
    "titleRu": "Заявление на академический отпуск",
    "titleEn": "Academic leave application",
    "descRu": "Заявление ректору о предоставлении академического отпуска. Академотпуск предоставляется по медицинским показаниям, призыву, семейным и иным обстоятельствам на срок до двух лет; нужно подтверждающее основание.",
    "descEn": "Application to the university rector for academic leave (up to 2 years).",
    "refRu": "Приказ Минобрнауки России от 13.06.2013 № 455",
    "refEn": "Order of the Ministry of Education No. 455 (13.06.2013)",
    "fields": [
      {
        "id": "university_name",
        "labelRu": "Наименование вуза",
        "labelEn": "University",
        type: 'text',
        required: true,
        "placeholderRu": "ФГБОУ ВО «МГТУ им. Баумана»"
      },
      {
        "id": "rector_name",
        "labelRu": "ФИО ректора",
        "labelEn": "Rector name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Иванову И.И.",
        "hintRu": "в дательном падеже"
      },
      {
        "id": "student_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Петрова Анны Сергеевны",
        "hintRu": "в родительном падеже"
      },
      {
        "id": "faculty",
        "labelRu": "Факультет",
        "labelEn": "Faculty",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "факультет информатики"
      },
      {
        "id": "course",
        "labelRu": "Курс",
        "labelEn": "Course year",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "3"
      },
      {
        "id": "group",
        "labelRu": "Группа",
        "labelEn": "Group",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "ИУ5-31"
      },
      {
        "id": "date_from",
        "labelRu": "Отпуск с",
        "labelEn": "Leave from",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "date_to",
        "labelRu": "Отпуск по",
        "labelEn": "Leave until",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "reason",
        "labelRu": "Основание",
        "labelEn": "Grounds",
        type: 'select',
        required: true,
        half: true,
        "options": [
          "по медицинским показаниям",
          "по призыву на военную службу",
          "по семейным и иным обстоятельствам"
        ]
      },
      {
        "id": "basis_docs",
        "labelRu": "Подтверждающий документ",
        "labelEn": "Supporting document",
        type: 'text',
        required: true,
        "placeholderRu": "заключение врачебной комиссии № 123 от 01.10.2026",
        "hintRu": "заключение ВКК / повестка военкомата / иные документы"
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "Ректору {{university_name}}",
          "{{rector_name}}",
          "",
          "студента(ки) {{faculty}}",
          "{{course}} курса, группы {{group}}",
          "{{student_name}}"
        ]
      },
      {
        type: 'title',
        "text": "ЗАЯВЛЕНИЕ"
      },
      {
        type: 'paragraph',
        "text": "Прошу предоставить мне академический отпуск с {{date_from}} по {{date_to}} {{reason}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Основание: {{basis_docs}}. Документ прилагается.",
        justify: true
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{student_name}} /"
      }
    ]
  },
  {
    "slug": "ru-edu-first-grade",
    "kind": "GOV_PORTAL_ONLY",
    "categorySlug": "edu-online",
    "titleRu": "Запись ребёнка в 1 класс",
    "titleEn": "First grade enrollment",
    "descRu": "В России заявление о приёме в 1 класс подаётся дистанционно через Госуслуги (для закреплённой территории) либо лично в школе. Бумажный шаблон для типовой записи не требуется — вот ссылка на официальный сервис.",
    "descEn": "In Russia, first-grade applications are filed online via Gosuslugi — no paper template needed.",
    "portalUrl": "https://www.gosuslugi.ru/10873",
    "portalName": "Госуслуги — запись в 1 класс",
    "portalDescRu": "Что подготовить: свидетельство о рождении ребёнка, СНИЛС, документ о регистрации, документ о преимущественном праве (если есть). Дети с преимущественным правом — с 1 апреля, по закреплению — с 1 апреля по 30 июня, свободные места — с 6 июля.",
    "portalDescEn": "You will need: birth certificate, SNILS, registration document.",
    "fields": [],
    "body": []
  },
  {
    "slug": "ru-post-loss-claim",
    "kind": "STANDARD",
    "categorySlug": "post-claims",
    "titleRu": "Претензия об утрате почтового отправления",
    "titleEn": "Claim for lost mail item",
    "descRu": "Претензия в отделение связи (или в филиал Почты России) об утрате или повреждении отправления. Претензия предъявляется в течение 6 месяцев; сначала стоит проверить трек-номер и подать розыск онлайн.",
    "descEn": "Claim to the post office for lost or damaged mail item. Filed within 6 months.",
    "refRu": "ст. 34, 37 ФЗ от 17.07.1999 № 176-ФЗ «О почтовой связи»; Правила оказания услуг почтовой связи",
    "refEn": "Articles 34, 37 of Federal Law No. 176-FZ on Postal Service",
    "fields": [
      {
        "id": "post_office",
        "labelRu": "Куда направляется претензия",
        "labelEn": "Claim addressee",
        type: 'text',
        required: true,
        "placeholderRu": "В филиал АО «Почта России» / ОПС № 101000"
      },
      {
        "id": "post_address",
        "labelRu": "Адрес организации",
        "labelEn": "Organization address",
        type: 'text',
        required: true,
        "placeholderRu": "г. Москва, ул. Ленина, д. 1"
      },
      {
        "id": "applicant_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Смирнова Ольга Викторовна"
      },
      {
        "id": "applicant_phone",
        "labelRu": "Телефон",
        "labelEn": "Phone",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "+7 900 000-00-00"
      },
      {
        "id": "applicant_address",
        "labelRu": "Адрес для ответа",
        "labelEn": "Mailing address",
        type: 'text',
        required: true,
        "placeholderRu": "г. Москва, ул. Пушкина, д. 2, кв. 3"
      },
      {
        "id": "item_type",
        "labelRu": "Тип отправления",
        "labelEn": "Item type",
        type: 'select',
        required: true,
        half: true,
        "options": [
          "посылка",
          "письмо с объявленной ценностью",
          "бандероль",
          "EMS-отправление"
        ]
      },
      {
        "id": "track_no",
        "labelRu": "Трек-номер",
        "labelEn": "Tracking number",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "RA123456789RU"
      },
      {
        "id": "date_send",
        "labelRu": "Дата отправки",
        "labelEn": "Send date",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "situation",
        "labelRu": "Что произошло",
        "labelEn": "What happened",
        type: 'select',
        required: true,
        half: true,
        "options": [
          "отправление утрачено",
          "вручено с повреждённой упаковкой и недостачей",
          "не вручено в установленный срок"
        ]
      },
      {
        "id": "amount",
        "labelRu": "Объявленная ценность, руб.",
        "labelEn": "Declared value, RUB",
        type: 'number',
        required: true,
        half: true,
        "placeholderRu": "10000"
      },
      {
        "id": "postage",
        "labelRu": "Плата за пересылку, руб.",
        "labelEn": "Postage paid, RUB",
        type: 'number',
        required: true,
        half: true,
        "placeholderRu": "850"
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "{{post_office}}",
          "{{post_address}}",
          "",
          "от {{applicant_name}}",
          "{{applicant_address}}",
          "тел.: {{applicant_phone}}"
        ]
      },
      {
        type: 'title',
        "text": "ПРЕТЕНЗИЯ"
      },
      {
        type: 'paragraph',
        "text": "{{date_send}} я отправил(а) почтовое отправление ({{item_type}}) с трек-номером {{track_no}}. {{situation}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "В соответствии со статьёй 34 Федерального закона «О почтовой связи» оператор несёт ответственность за утрату и повреждение почтового отправления. Требую:",
        justify: true
      },
      {
        type: 'list',
        numbered: true,
        "items": [
          "возместить ущерб в размере объявленной ценности отправления — {{amount}} рублей;",
          "возместить плату за пересылку — {{postage}} рублей;",
          "сообщить мне о результатах рассмотрения претензии письменно по указанному адресу."
        ]
      },
      {
        type: 'paragraph',
        "text": "Претензия подаётся в пределах шести месяцев со дня отправления (ст. 37 ФЗ «О почтовой связи»).",
        noIndent: true
      },
      {
        type: 'attachment',
        "items": [
          "Копия квитанции (чека) об отправке;",
          "Акт о повреждении отправления (если составлялся)."
        ]
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{applicant_name}} /"
      }
    ]
  },
  {
    "slug": "ru-post-money-transfer-112ep",
    "kind": "HANDWRITTEN_REQUIRED",
    "categorySlug": "post-forms",
    "titleRu": "Почтовый денежный перевод (бланк ф. 112ЭП)",
    "titleEn": "Postal money transfer (form 112EP)",
    "descRu": "Бланк почтового перевода денег (форма 112ЭП) — бланк строгой отчётности оператора связи. Он выдаётся в отделении и заполняется ТОЛЬКО ручкой от руки при операционисте. Заранее распечатать и принести свой бланк нельзя.",
    "descEn": "The postal money transfer form (112EP) is a strict-reporting form filled in by hand at the post office only.",
    "refRu": "Правила оказания услуг почтовой связи (ФЗ № 176-ФЗ «О почтовой связи»)",
    "refEn": "Postal service rules (Federal Law No. 176-FZ)",
    "warningRu": "Внимание: данный документ по закону заполняется только от руки",
    "warningEn": "Attention: by law this document must be filled in by hand only",
    "portalDescRu": "Что подготовить к визиту в отделение: паспорт отправителя; точные ФИО и адрес получателя; сумму перевода; номер телефона получателя (для SMS-уведомления). Бланк 112ЭП выдаст оператор.",
    "portalDescEn": "Prepare: sender passport, recipient details, amount. The operator provides the form.",
    "fields": [],
    "body": []
  },
  {
    "slug": "ru-post-parcel-search",
    "kind": "GOV_PORTAL_ONLY",
    "categorySlug": "post-online",
    "titleRu": "Розыск почтового отправления",
    "titleEn": "Mail item search",
    "descRu": "Заявление на розыск почтового отправления в России подаётся онлайн на официальном сайте или в приложении АО «Почта России» (вход через Госуслуги). Ответ приходит в личный кабинет; срок розыска — до 30 дней. Бумажный шаблон для этого не нужен.",
    "descEn": "In Russia, mail search requests are filed online at pochta.ru — no paper template needed.",
    "portalUrl": "https://www.pochta.ru/support/search-shipments",
    "portalName": "Почта России — розыск отправлений",
    "portalDescRu": "Что подготовить: трек-номер отправления, квитанцию (чек) об отправке, паспорт. Заявление онлайн может подать отправитель или получатель.",
    "portalDescEn": "You will need: tracking number, receipt, passport.",
    "fields": [],
    "body": []
  },
  {
    "slug": "ru-util-flood-act",
    "kind": "STANDARD",
    "categorySlug": "util-management",
    "titleRu": "Заявление о заливе квартиры (требование акта)",
    "titleEn": "Apartment flood report request",
    "descRu": "Заявление в управляющую организацию с требованием зафиксировать залив актом. Акт — главное доказательство для возмещения ущерба: без него суд откажет. Вызывайте УК в день обнаружения залива.",
    "descEn": "Request to the management company to record an apartment flood with an official act.",
    "refRu": "Постановление Правительства РФ от 13.08.2006 № 491; Правила № 170 (Госстрой)",
    "refEn": "Government Decree No. 491; State Construction Rules No. 170",
    "fields": [
      {
        "id": "org_name",
        "labelRu": "Наименование УК / ТСЖ",
        "labelEn": "Management company",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "ООО «УК Центральная»"
      },
      {
        "id": "org_address",
        "labelRu": "Адрес УК",
        "labelEn": "Company address",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "г. Москва, ул. Ленина, д. 1"
      },
      {
        "id": "applicant_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Смирнова Ольга Викторовна"
      },
      {
        "id": "applicant_phone",
        "labelRu": "Телефон",
        "labelEn": "Phone",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "+7 900 000-00-00"
      },
      {
        "id": "applicant_address",
        "labelRu": "Адрес затопленной квартиры",
        "labelEn": "Flooded apartment address",
        type: 'text',
        required: true,
        "placeholderRu": "г. Москва, ул. Пушкина, д. 2, кв. 3"
      },
      {
        "id": "date_flood",
        "labelRu": "Дата и время залива",
        "labelEn": "Flood date and time",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "cause",
        "labelRu": "Причина залива",
        "labelEn": "Flood cause",
        type: 'select',
        required: true,
        half: true,
        "options": [
          "прорыв (течь) общего стояка",
          "залив от соседей сверху",
          "неисправность кровли",
          "неисправность общедомового оборудования"
        ]
      },
      {
        "id": "damage",
        "labelRu": "Описание повреждений",
        "labelEn": "Damage description",
        type: 'textarea',
        required: true,
        "placeholderRu": "затоплены потолок, стены, пол в двух комнатах; повреждены натяжной потолок, обои, мебель"
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "В {{org_name}}",
          "{{org_address}}",
          "",
          "от {{applicant_name}}",
          "собственника квартиры:",
          "{{applicant_address}}",
          "тел.: {{applicant_phone}}"
        ]
      },
      {
        type: 'title',
        "text": "ЗАЯВЛЕНИЕ"
      },
      {
        type: 'paragraph',
        "text": "{{date_flood}} в квартире по адресу {{applicant_address}} произошёл залив. Причина: {{cause}}. В результате залиты: {{damage}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "На основании Правил содержания общего имущества в многоквартирном доме (Постановление Правительства РФ от 13.08.2006 № 491) прошу:",
        justify: true
      },
      {
        type: 'list',
        numbered: true,
        "items": [
          "прибыть в течение установленного срока для обследования квартиры;",
          "составить акт о заливе с описанием причины и объёма повреждений;",
          "указать в акте лицо, ответственное за устранение причины залива;",
          "выдать мне один экземпляр акта на руки."
        ]
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{applicant_name}} /"
      }
    ]
  },
  {
    "slug": "ru-util-recalc-absence",
    "kind": "STANDARD",
    "categorySlug": "util-management",
    "titleRu": "Заявление о перерасчёте при временном отсутствии",
    "titleEn": "Recalculation for temporary absence",
    "descRu": "Перерасчёт платы за коммунальные услуги при временном отсутствии более 5 дней (для услуг по нормативам и приборам учёта). Заявление подаётся до отъезда или не позднее 30 дней после возвращения с подтверждающими документами.",
    "descEn": "Recalculation of utility payments for temporary absence over 5 days.",
    "refRu": "раздел VIII Правил № 354 (Постановление Правительства РФ от 06.05.2011)",
    "refEn": "Section VIII of Rules No. 354 (Government Decree 06.05.2011)",
    "fields": [
      {
        "id": "org_name",
        "labelRu": "Наименование УК / ТСЖ",
        "labelEn": "Management company",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "ООО «УК Центральная»"
      },
      {
        "id": "org_address",
        "labelRu": "Адрес УК",
        "labelEn": "Company address",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "г. Москва, ул. Ленина, д. 1"
      },
      {
        "id": "applicant_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Смирнова Ольга Викторовна"
      },
      {
        "id": "applicant_address",
        "labelRu": "Адрес помещения",
        "labelEn": "Premises address",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "г. Москва, ул. Пушкина, д. 2, кв. 3"
      },
      {
        "id": "date_from",
        "labelRu": "Период отсутствия с",
        "labelEn": "Absent from",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "date_to",
        "labelRu": "Период отсутствия по",
        "labelEn": "Absent until",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "who_absent",
        "labelRu": "Кто отсутствовал",
        "labelEn": "Who was absent",
        type: 'text',
        required: true,
        "placeholderRu": "я и члены моей семьи: Смирнов О.В., Смирнова О.В."
      },
      {
        "id": "confirm_docs",
        "labelRu": "Подтверждающие документы",
        "labelEn": "Supporting documents",
        type: 'text',
        required: true,
        "placeholderRu": "проездные билеты, справка с места работы о командировке, счёт из гостиницы"
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "В {{org_name}}",
          "{{org_address}}",
          "",
          "от {{applicant_name}}",
          "собственника квартиры:",
          "{{applicant_address}}"
        ]
      },
      {
        type: 'title',
        "text": "ЗАЯВЛЕНИЕ"
      },
      {
        type: 'paragraph',
        "text": "Прошу произвести перерасчёт платы за коммунальные услуги за период моего временного отсутствия с {{date_from}} по {{date_to}}. В указанный период отсутствовали: {{who_absent}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Перерасчёт прошу произвести в отношении услуг, рассчитанных по нормативам потребления и показаниям приборов учёта при отсутствии проживающих (кроме отопления и услуг на общедомовые нужды).",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Подтверждающие документы: {{confirm_docs}}. Копии прилагаются.",
        justify: true
      },
      {
        type: 'attachment',
        "items": [
          "Копии подтверждающих документов о временном отсутствии."
        ]
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{applicant_name}} /"
      }
    ]
  },
  {
    "slug": "ru-util-poor-quality",
    "kind": "STANDARD",
    "categorySlug": "util-management",
    "titleRu": "Претензия о некачественных коммунальных услугах",
    "titleEn": "Poor utility quality claim",
    "descRu": "Претензия в управляющую организацию при предоставлении коммунальных услуг с нарушениями (перебои, низкая температура воды и воздуха). Основание для акта проверки и перерасчёта платы.",
    "descEn": "Claim to the management company over poor-quality utility services.",
    "refRu": "разделы II, X Правил № 354; Закон РФ «О защите прав потребителей»",
    "refEn": "Sections II, X of Rules No. 354; Consumer Protection Law",
    "fields": [
      {
        "id": "org_name",
        "labelRu": "Наименование УК / ТСЖ",
        "labelEn": "Management company",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "ООО «УК Центральная»"
      },
      {
        "id": "org_address",
        "labelRu": "Адрес УК",
        "labelEn": "Company address",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "г. Москва, ул. Ленина, д. 1"
      },
      {
        "id": "applicant_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Смирнова Ольга Викторовна"
      },
      {
        "id": "applicant_phone",
        "labelRu": "Телефон",
        "labelEn": "Phone",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "+7 900 000-00-00"
      },
      {
        "id": "applicant_address",
        "labelRu": "Адрес помещения",
        "labelEn": "Premises address",
        type: 'text',
        required: true,
        "placeholderRu": "г. Москва, ул. Пушкина, д. 2, кв. 3"
      },
      {
        "id": "period_from",
        "labelRu": "Нарушения с",
        "labelEn": "Violations from",
        type: 'date',
        required: true,
        half: true
      },
      {
        "id": "violation",
        "labelRu": "Описание нарушений",
        "labelEn": "Violation description",
        type: 'textarea',
        required: true,
        "placeholderRu": "температура горячей воды ниже 60°C, перебои в подаче отопления, температура в квартире не превышает 16°C"
      }
    ],
    "body": [
      {
        type: 'lines',
        "align": "right",
        "items": [
          "В {{org_name}}",
          "{{org_address}}",
          "",
          "от {{applicant_name}}",
          "собственника квартиры:",
          "{{applicant_address}}",
          "тел.: {{applicant_phone}}"
        ]
      },
      {
        type: 'title',
        "text": "ПРЕТЕНЗИЯ"
      },
      {
        type: 'paragraph',
        "text": "С {{period_from}} в моей квартире по адресу {{applicant_address}} коммунальные услуги предоставляются с нарушениями: {{violation}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "В соответствии с Правилами предоставления коммунальных услуг (Постановление Правительства РФ от 06.05.2011 № 354) прошу:",
        justify: true
      },
      {
        type: 'list',
        numbered: true,
        "items": [
          "зафиксировать факт предоставления коммунальных услуг ненадлежащего качества актом проверки;",
          "произвести перерасчёт платы за коммунальные услуги за весь период нарушения;",
          "устранить причины нарушения в сроки, установленные Правилами № 354."
        ]
      },
      {
        type: 'paragraph',
        "text": "В случае бездействия обращусь в жилищную инспекцию, Роспотребнадзор и суд.",
        noIndent: true
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{applicant_name}} /"
      }
    ]
  },
  {
    "slug": "ru-util-meter-readings",
    "kind": "GOV_PORTAL_ONLY",
    "categorySlug": "util-online",
    "titleRu": "Передача показаний счётчиков",
    "titleEn": "Submitting meter readings",
    "descRu": "Показания счётчиков воды, электричества и газа в России передаются онлайн: через Госуслуги, ГИС ЖКХ или личные кабинеты поставщиков. Бумажное заявление для этого не требуется — шаблон не нужен.",
    "descEn": "In Russia, meter readings are submitted online via Gosuslugi or GIS ZhKKH — no paper template needed.",
    "portalUrl": "https://dom.gosuslugi.ru",
    "portalName": "ГИС ЖКХ / Госуслуги",
    "portalDescRu": "Что подготовить: номер лицевого счёта, текущие показания счётчиков. Сроки передачи устанавливает поставщик (обычно с 23 по 26 число).",
    "portalDescEn": "You will need: account number, current meter readings.",
    "fields": [],
    "body": []
  },
  {
    "slug": "ru-uni-money-receipt",
    "kind": "HANDWRITTEN_REQUIRED",
    "categorySlug": "uni-money",
    "titleRu": "Расписка о получении денежных средств",
    "titleEn": "Money receipt (IOU)",
    "descRu": "Расписка подтверждает передачу денег (договор займа между гражданами). Печатная форма юридически допустима, но судебная практика настоятельно рекомендует писать от руки: рукописная расписка упрощает почерковедческую экспертизу в споре.",
    "descEn": "IOU receipt confirming money transfer. Handwritten form is strongly recommended by court practice.",
    "refRu": "ст. 808, 810 ГК РФ",
    "refEn": "Articles 808, 810 of the Civil Code",
    "warningRu": "Внимание: расписку настоятельно рекомендуется заполнять от руки — рукописная форма упрощает почерковедческую экспертизу в суде",
    "warningEn": "Attention: fill in the receipt by hand — handwritten form simplifies handwriting examination in court",
    "fields": [
      {
        "id": "lender_name",
        "labelRu": "Кто дал деньги (ФИО)",
        "labelEn": "Lender full name",
        type: 'text',
        required: true,
        "placeholderRu": "Смирнову Ольгу Викторовну",
        "hintRu": "в винительном падеже (получил от кого)"
      },
      {
        "id": "borrower_name",
        "labelRu": "Кто получил деньги (ФИО)",
        "labelEn": "Borrower full name",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "Иванов Иван Иванович"
      },
      {
        "id": "borrower_passport",
        "labelRu": "Паспорт получателя",
        "labelEn": "Borrower passport",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "45 10 № 123456, выдан ОВД района Ленинский г. Москвы 12.01.2015"
      },
      {
        "id": "amount",
        "labelRu": "Сумма, руб.",
        "labelEn": "Amount, RUB",
        type: 'number',
        required: true,
        half: true,
        "placeholderRu": "150000"
      },
      {
        "id": "date_due",
        "labelRu": "Срок возврата",
        "labelEn": "Due date",
        type: 'date',
        required: true,
        half: true
      }
    ],
    "body": [
      {
        type: 'title',
        "text": "РАСПИСКА"
      },
      {
        type: 'paragraph',
        "text": "Я, {{borrower_name}} (паспорт {{borrower_passport}}), получил от {{lender_name}} денежные средства в размере {{amount}} рублей в качестве займа.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Обязуюсь вернуть указанную сумму в срок до {{date_due}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Расписка составлена мной собственноручно.",
        justify: true
      },
      {
        type: 'signature',
        "rightText": "Подпись заёмщика: _____________ / {{borrower_name}} /"
      }
    ]
  },
  {
    "slug": "ru-uni-power-of-attorney",
    "kind": "STANDARD",
    "categorySlug": "uni-common",
    "titleRu": "Доверенность (простая письменная форма)",
    "titleEn": "Power of attorney (simple written form)",
    "descRu": "Доверенность на получение документов, почты и другие действия, не требующие нотариальной формы. Для сделок, требующих нотариального удостоверения, оформляется у нотариуса (ст. 185.1 ГК РФ).",
    "descEn": "Power of attorney in simple written form for documents and mail collection.",
    "refRu": "ст. 185, 185.1 ГК РФ",
    "refEn": "Articles 185, 185.1 of the Civil Code",
    "fields": [
      {
        "id": "principal_name",
        "labelRu": "Кто выдаёт (ФИО)",
        "labelEn": "Principal full name",
        type: 'text',
        required: true,
        "placeholderRu": "Смирнова Ольга Викторовна"
      },
      {
        "id": "principal_passport",
        "labelRu": "Паспорт доверителя",
        "labelEn": "Principal passport",
        type: 'text',
        required: true,
        "placeholderRu": "45 10 № 123456, выдан ОВД района Ленинский г. Москвы 12.01.2015, зарегистрирована: г. Москва, ул. Пушкина, д. 2, кв. 3"
      },
      {
        "id": "agent_name",
        "labelRu": "Кому выдаётся (ФИО)",
        "labelEn": "Agent full name",
        type: 'text',
        required: true,
        "placeholderRu": "Иванов Иван Иванович"
      },
      {
        "id": "agent_passport",
        "labelRu": "Паспорт представителя",
        "labelEn": "Agent passport",
        type: 'text',
        required: true,
        "placeholderRu": "45 10 № 654321, выдан ОВД района Гагаринский г. Москвы 05.03.2018"
      },
      {
        "id": "powers",
        "labelRu": "Что разрешено делать",
        "labelEn": "Granted powers",
        type: 'textarea',
        required: true,
        "placeholderRu": "получить в отделении почтовой связи № 101000 посылку на моё имя и расписаться за меня в необходимых документах"
      },
      {
        "id": "date_valid",
        "labelRu": "Действительна до",
        "labelEn": "Valid until",
        type: 'date',
        required: true,
        half: true
      }
    ],
    "body": [
      {
        type: 'title',
        "text": "ДОВЕРЕННОСТЬ"
      },
      {
        type: 'paragraph',
        "text": "Я, {{principal_name}} (паспорт {{principal_passport}}), настоящей доверенностью уполномочиваю {{agent_name}} (паспорт {{agent_passport}}) {{powers}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Доверенность действительна до {{date_valid}}.",
        noIndent: true
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{principal_name}} /"
      }
    ]
  },
  {
    "slug": "ru-uni-personal-data",
    "kind": "STANDARD",
    "categorySlug": "uni-common",
    "titleRu": "Согласие на обработку персональных данных",
    "titleEn": "Personal data processing consent",
    "descRu": "Письменное согласие субъекта персональных данных на обработку его данных организацией. Требуется по закону при передаче данных третьим лицам и в ряде других случаев.",
    "descEn": "Written consent for personal data processing under personal data legislation.",
    "refRu": "ФЗ от 27.07.2006 № 152-ФЗ «О персональных данных»",
    "refEn": "Federal Law No. 152-FZ on Personal Data",
    "fields": [
      {
        "id": "subject_name",
        "labelRu": "Ваши ФИО",
        "labelEn": "Your full name",
        type: 'text',
        required: true,
        "placeholderRu": "Смирнова Ольга Викторовна"
      },
      {
        "id": "subject_passport",
        "labelRu": "Ваш паспорт",
        "labelEn": "Your passport",
        type: 'text',
        required: true,
        "placeholderRu": "45 10 № 123456, выдан ОВД района Ленинский г. Москвы 12.01.2015"
      },
      {
        "id": "operator_name",
        "labelRu": "Кому даёте согласие",
        "labelEn": "Data operator",
        type: 'text',
        required: true,
        "placeholderRu": "ООО «Компания»"
      },
      {
        "id": "purposes",
        "labelRu": "Цели обработки",
        "labelEn": "Processing purposes",
        type: 'textarea',
        required: true,
        "placeholderRu": "заключение и исполнение договора, оформление документов"
      },
      {
        "id": "term",
        "labelRu": "Срок действия согласия",
        "labelEn": "Consent term",
        type: 'text',
        required: true,
        half: true,
        "placeholderRu": "3 года с даты подписания"
      }
    ],
    "body": [
      {
        type: 'title',
        "text": "СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ"
      },
      {
        type: 'paragraph',
        "text": "Я, {{subject_name}} (паспорт {{subject_passport}}), свободно, своей волей и в своём интересе даю согласие {{operator_name}} на обработку моих персональных данных.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Цели обработки: {{purposes}}.",
        justify: true
      },
      {
        type: 'paragraph',
        "text": "Перечень данных: фамилия, имя, отчество, паспортные данные, контактные данные. Согласие действует {{term}} и может быть отозвано мной в любой момент путём подачи письменного заявления.",
        justify: true
      },
      {
        type: 'signature',
        "rightText": "_______________ / {{subject_name}} /"
      }
    ]
  }
];
