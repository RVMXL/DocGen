// Шаблоны для России — портированы из исходных сидов (этап MVP).
// Все шаблоны основаны на реальных нормах законодательства РФ (ТЗ: не выдумывать).
import type { TplDef } from '../types';
import { F, courtHdr, hdr, stdSign } from './helpers';

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
    "portalUrl": "https://www.pochta.ru/tracking",
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
  },

  // ── Семейные споры ─────────────────────────────────────────────────────────
  {
    slug: 'ru-family-alimony', kind: 'STANDARD', categorySlug: 'court-family',
    titleRu: 'Исковое заявление о взыскании алиментов на ребёнка',
    titleEn: 'Lawsuit: child support (alimony)',
    descRu: 'Иск к родителю, который не участвует в содержании общего несовершеннолетнего ребёнка. Подаётся мировому судье по месту жительства истца или ответчика. Истцы по искам о взыскании алиментов освобождены от уплаты госпошлины.',
    descEn: 'Lawsuit against a parent who does not support a common minor child. Filed with a justice of the peace; the plaintiff is exempt from the court fee.',
    refRu: 'ст. 80, 81 СК РФ; ст. 23, 29 ГПК РФ; пп. 2 п. 1 ст. 333.36 НК РФ',
    refEn: 'Art. 80, 81 of the Family Code; Art. 23, 29 of the Civil Procedure Code; subp. 2 p. 1 Art. 333.36 of the Tax Code of the Russian Federation',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'судебный участок № 5 Ленинского судебного района г. Москвы', hintRu: 'мировому судье; по месту жительства истца или ответчика (ст. 23, 29 ГПК РФ)' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('plaintiff_phone', 'Телефон истца', 'Plaintiff phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик — ФИО второго родителя', 'Defendant full name', 'text', { half: true, placeholderDoc: 'Смирнов Иван Петрович' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Гагарина, д. 5, кв. 12', hintRu: 'насколько известно (ст. 131 ГПК РФ)' }),
      F('marriage_status', 'Брачные отношения', 'Marriage status', 'select', { options: ['Брак с ответчиком не расторгнут', 'Брак с ответчиком расторгнут', 'Брак с ответчиком не заключался'] }),
      F('child_info', 'Ребёнок — ФИО и дата рождения', 'Child name and birth date', 'text', { placeholderDoc: 'Смирнов Дмитрий Иванович, 15.03.2018 года рождения', hintRu: 'если детей несколько — перечислите всех' }),
      F('alimony_share', 'Размер алиментов', 'Alimony amount', 'select', { options: ['в размере одной четвёртой части всех видов заработка и иного дохода ежемесячно', 'в размере одной трети части всех видов заработка и иного дохода ежемесячно', 'в размере одной второй части всех видов заработка и иного дохода ежемесячно'], hintRu: 'ст. 81 СК РФ: 1/4 — на одного ребёнка, 1/3 — на двоих, 1/2 — на троих и более' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Истец: {{plaintiff_name}}', 'Адрес: {{plaintiff_address}}', 'Тел.: {{plaintiff_phone}}', '', 'Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}'] },
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о взыскании алиментов на несовершеннолетнего ребёнка' },
      { type: 'paragraph', text: '{{marriage_status}}. Наш общий несовершеннолетний ребёнок — {{child_info}} — проживает со мной, я осуществляю за ним уход и обеспечиваю его содержание.', justify: true },
      { type: 'paragraph', text: 'Ответчик участия в содержании ребёнка не принимает, денежные средства на его обеспечение не предоставляет. Соглашение об уплате алиментов между сторонами не заключалось.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 80, 81 Семейного кодекса РФ, статьями 23, 29 Гражданского процессуального кодекса РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Взыскать с ответчика {{defendant_name}} в мою пользу алименты на содержание ребёнка {{child_info}} {{alimony_share}} — до совершеннолетия ребёнка.',
        'Взыскать с ответчика расходы по уплате государственной пошлины.',
      ] },
      { type: 'paragraph', text: 'Госпошлина при подаче настоящего иска не уплачивается — подпункт 2 пункта 1 статьи 333.36 Налогового кодекса РФ.', noIndent: true },
      { type: 'attachment', items: [
        'Копия свидетельства о рождении ребёнка;',
        'Копия свидетельства о заключении брака (о расторжении брака) — при наличии;',
        'Справка о составе семьи;',
        'Копии искового заявления по числу лиц, участвующих в деле.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'ru-family-divorce', kind: 'STANDARD', categorySlug: 'court-family',
    titleRu: 'Исковое заявление о расторжении брака (есть дети)',
    titleEn: 'Lawsuit: divorce with minor children',
    descRu: 'Развод при наличии общих несовершеннолетних детей оформляет только суд. При отсутствии спора о детях иск рассматривает мировой судья; если ребёнок живёт с вами — иск можно подать по своему месту жительства (ч. 4 ст. 29 ГПК РФ).',
    descEn: 'A divorce with common minor children is granted by a court only. With no dispute over children, a justice of the peace hears the case.',
    refRu: 'ст. 16, 21, 23 СК РФ; ст. 23, 29 ГПК РФ; пп. 5 п. 1 ст. 333.19 НК РФ',
    refEn: 'Art. 16, 21, 23 of the Family Code; Art. 23, 29 of the Civil Procedure Code; subp. 5 p. 1 Art. 333.19 of the Tax Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'судебный участок № 5 Ленинского судебного района г. Москвы', hintRu: 'мировому судье — при отсутствии спора о детях (ст. 23 ГПК РФ)' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('plaintiff_phone', 'Телефон истца', 'Plaintiff phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик — ФИО супруга', 'Defendant full name', 'text', { half: true, placeholderDoc: 'Смирнов Иван Петрович' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Гагарина, д. 5, кв. 12' }),
      F('marriage_date', 'Дата регистрации брака', 'Marriage date', 'date', { half: true }),
      F('marriage_place', 'Место регистрации брака', 'Marriage registration place', 'text', { half: true, placeholderDoc: 'ЗАГС Ленинского района г. Москвы, актовая запись № 456 от 20.06.2015' }),
      F('child_info', 'Общие несовершеннолетние дети', 'Common minor children', 'text', { placeholderDoc: 'Смирнов Дмитрий Иванович, 15.03.2018 года рождения', hintRu: 'укажите всех общих детей до 18 лет' }),
      F('reason', 'Причина развода', 'Reason', 'textarea', { placeholderDoc: 'взаимное охлаждение, раздельное проживание с 2025 года; семейные отношения фактически прекращены' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Истец: {{plaintiff_name}}', 'Адрес: {{plaintiff_address}}', 'Тел.: {{plaintiff_phone}}', '', 'Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}'] },
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о расторжении брака' },
      { type: 'paragraph', text: '{{marriage_date}} я вступил(а) в брак с ответчиком {{defendant_name}}. Место государственной регистрации брака: {{marriage_place}}.', justify: true },
      { type: 'paragraph', text: 'От брака имеем общего несовершеннолетнего ребёнка: {{child_info}}. Спор о детях (о месте жительства и порядке воспитания ребёнка) между нами отсутствует, спор о разделе совместно нажитого имущества отсутствует.', justify: true },
      { type: 'paragraph', text: 'Дальнейшая совместная жизнь и сохранение семьи невозможны: {{reason}}. Примирение между сторонами не представляется возможным.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 16, 21, 23 Семейного кодекса РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Расторгнуть брак между мной — {{plaintiff_name}} — и ответчиком {{defendant_name}}, зарегистрированный {{marriage_date}} ({{marriage_place}}).',
      ] },
      { type: 'attachment', items: [
        'Копия свидетельства о заключении брака;',
        'Копии свидетельств о рождении детей;',
        'Документ об уплате государственной пошлины;',
        'Копии искового заявления по числу лиц, участвующих в деле.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },

  // ── Имущественные иски ─────────────────────────────────────────────────────
  {
    slug: 'ru-lawsuit-flood', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление о возмещении ущерба от залива квартиры',
    titleEn: 'Lawsuit: apartment flood damages',
    descRu: 'Иск к соседям или управляющей организации о возмещении ущерба после залива. Главные доказательства — акт о заливе и отчёт независимой оценки. Акт сначала затребуйте у УК (см. шаблон «Заявление о заливе квартиры»).',
    descEn: 'Lawsuit against neighbours or the management company for flood damage. Key evidence: the flood act and an independent appraisal report.',
    refRu: 'ст. 15, 1064 ГК РФ; ст. 131–132 ГПК РФ',
    refEn: 'Art. 15, 1064 of the Civil Code; Art. 131-132 of the Civil Procedure Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'Ленинский районный суд города Москвы', hintRu: 'районный суд по месту жительства (нахождения) ответчика; при цене иска до 50 000 ₽ — мировой судья (ст. 23 ГПК РФ)' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('plaintiff_phone', 'Телефон истца', 'Plaintiff phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('flat_address', 'Адрес затопленной квартиры', 'Flooded apartment address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик', 'Defendant', 'text', { half: true, placeholderDoc: 'Смирнов Иван Петрович / ООО «УК Центральная»' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Гагарина, д. 5, кв. 12' }),
      F('flood_date', 'Дата залива', 'Flood date', 'date', { half: true }),
      F('flood_cause', 'Причина залива', 'Flood cause', 'textarea', { placeholderDoc: 'нарушение герметичности стояка горячей воды по вине управляющей организации' }),
      F('act_info', 'Документ, фиксирующий залив', 'Flood record', 'text', { placeholderDoc: 'акт о заливе от 12.10.2026 № 7, составлен ООО «УК Центральная»' }),
      F('amount', 'Сумма ущерба, руб.', 'Damage amount, RUB', 'number', { half: true, placeholderDoc: '185000' }),
      F('assessment_cost', 'Расходы на оценку, руб.', 'Appraisal costs, RUB', 'number', { half: true, placeholderDoc: '8000' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Истец: {{plaintiff_name}}', 'Адрес: {{plaintiff_address}}', 'Тел.: {{plaintiff_phone}}', '', 'Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}'] },
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о возмещении ущерба, причинённого заливом квартиры' },
      { type: 'paragraph', text: 'Я являюсь собственником квартиры по адресу {{flat_address}}. {{flood_date}} квартира была затоплена в результате: {{flood_cause}}.', justify: true },
      { type: 'paragraph', text: 'Факт залива зафиксирован: {{act_info}}. В результате залива повреждены отделка, мебель и имущество, что подтверждается актом и фотографиями.', justify: true },
      { type: 'paragraph', text: 'Размер причинённого ущерба определён отчётом независимой оценки и составляет {{amount}} рублей. Затраты на проведение оценки — {{assessment_cost}} рублей. Ответчику предложено возместить ущерб добровольно; в добровольном порядке вред не возмещён.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 15, 1064 Гражданского кодекса РФ вред, причинённый имуществу гражданина, подлежит возмещению в полном объёме лицом, причинившим вред. На основании статей 131–132 ГПК РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Взыскать с ответчика {{defendant_name}} в мою пользу ущерб, причинённый заливом, в размере {{amount}} рублей.',
        'Взыскать с ответчика расходы на проведение независимой оценки в размере {{assessment_cost}} рублей.',
        'Взыскать с ответчика расходы по уплате государственной пошлины.',
      ] },
      { type: 'attachment', items: [
        'Акт о заливе квартиры;',
        'Отчёт об оценке ущерба;',
        'Фотографии повреждений;',
        'Выписка из ЕГРН о праве собственности;',
        'Копии искового заявления по числу лиц, участвующих в деле;',
        'Документ об уплате государственной пошлины.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'ru-lawsuit-developer', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление о взыскании неустойки с застройщика',
    titleEn: 'Lawsuit: developer penalty (share construction)',
    descRu: 'Иск к застройщику за просрочку передачи квартиры по договору участия в долевом строительстве (214-ФЗ). Неустойка — 1/300 ставки рефинансирования ЦБ РФ от цены договора за каждый день просрочки, для граждан — в двойном размере; дополнительно взыскиваются моральный вред и штраф 50%.',
    descEn: 'Lawsuit against a developer for late handover under the share construction law (No. 214-FZ), with penalty, moral damages and a 50% consumer fine.',
    refRu: 'ч. 2 ст. 6 ФЗ от 30.12.2004 № 214-ФЗ; ст. 15, п. 6 ст. 13, ст. 17 Закона РФ «О защите прав потребителей»',
    refEn: 'Part 2 Art. 6 of Federal Law No. 214-FZ; Art. 15, p. 6 Art. 13, Art. 17 of the Consumer Protection Law',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'Ленинский районный суд города Москвы', hintRu: 'по выбору истца (ст. 17 ЗоЗПП); при цене иска до 100 000 ₽ — мировой судья' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('plaintiff_phone', 'Телефон истца', 'Plaintiff phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик — застройщик', 'Defendant (developer)', 'text', { half: true, placeholderDoc: 'ООО «Застройщик-Строй»' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Строителей, д. 1' }),
      F('contract_date', 'Дата договора ДДУ', 'Contract date', 'date', { half: true }),
      F('contract_no', 'Номер договора', 'Contract number', 'text', { half: true, placeholderDoc: '№ ДУ-123/2025' }),
      F('object_info', 'Объект долевого строительства', 'Property object', 'textarea', { placeholderDoc: 'однокомнатная квартира № 45 в корпусе 3 жилого комплекса по адресу: г. Москва, ул. Строителей, д. 7' }),
      F('contract_price', 'Цена договора, руб.', 'Contract price, RUB', 'number', { half: true, placeholderDoc: '8900000' }),
      F('deadline_date', 'Срок передачи объекта по договору', 'Handover deadline', 'date', { half: true }),
      F('delay_days', 'Просрочка, дней', 'Delay, days', 'number', { half: true, placeholderDoc: '120' }),
      F('claim_date', 'Дата досудебной претензии', 'Pre-court claim date', 'date', { half: true }),
      F('claim_result', 'Результат претензии', 'Claim outcome', 'select', { half: true, options: ['Ответ не получен', 'Получен отказ', 'Требования удовлетворены частично'] }),
      F('penalty_amount', 'Расчётная неустойка, руб.', 'Calculated penalty, RUB', 'number', { placeholderDoc: '356000' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Истец: {{plaintiff_name}}', 'Адрес: {{plaintiff_address}}', 'Тел.: {{plaintiff_phone}}', '', 'Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}'] },
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о взыскании неустойки за нарушение срока передачи объекта долевого строительства' },
      { type: 'paragraph', text: '{{contract_date}} я заключил(а) с ответчиком договор участия в долевом строительстве {{contract_no}}: {{object_info}}. Цена договора — {{contract_price}} рублей, оплачена в полном объёме.', justify: true },
      { type: 'paragraph', text: 'Договором установлен срок передачи объекта — не позднее {{deadline_date}}. В установленный срок объект не передан; просрочка по состоянию на дату подачи иска составляет {{delay_days}} дней.', justify: true },
      { type: 'paragraph', text: '{{claim_date}} я направил(а) ответчику письменную претензию с требованием уплатить неустойку. {{claim_result}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии с частью 2 статьи 6 Федерального закона от 30.12.2004 № 214-ФЗ в случае нарушения срока передачи объекта долевого строительства застройщик уплачивает неустойку в размере одной трёхсотой ставки рефинансирования Центрального банка РФ, действующей на день исполнения обязательства, от цены договора за каждый день просрочки; в отношении граждан неустойка уплачивается в двойном размере. Расчётная сумма неустойки — {{penalty_amount}} рублей.', justify: true },
      { type: 'paragraph', text: 'На основании статей 15, пункта 6 статьи 13 Закона РФ «О защите прав потребителей» и статей 131–132 ГПК РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Взыскать с ответчика неустойку в размере {{penalty_amount}} рублей.',
        'Взыскать компенсацию морального вреда.',
        'Взыскать штраф за несоблюдение в добровольном порядке удовлетворения требований потребителя в размере пятидесяти процентов присуждённой суммы.',
        'Взыскать расходы по уплате государственной пошлины.',
      ] },
      { type: 'attachment', items: [
        'Копия договора участия в долевом строительстве;',
        'Копии платёжных документов;',
        'Расчёт неустойки;',
        'Копия досудебной претензии и доказательства её направления;',
        'Копии искового заявления по числу лиц, участвующих в деле;',
        'Документ об уплате государственной пошлины.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'ru-lawsuit-dtp-injury', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление о возмещении вреда здоровью при ДТП',
    titleEn: 'Lawsuit: traffic accident personal injury',
    descRu: 'Иск к страховой компании виновника (по полису ОСАГО) о возмещении вреда здоровью: утраченный заработок, расходы на лечение и реабилитацию, моральный вред. Истцы по искам о возмещении вреда здоровью госпошлину не уплачивают.',
    descEn: 'Lawsuit against the at-fault driver’s insurer (OSAGO) for personal injury: lost income, treatment costs and moral damages. Plaintiffs in personal injury claims are exempt from the court fee.',
    refRu: 'ст. 1064, 1079, 1085 ГК РФ; ст. 7, 12 ФЗ от 25.04.2002 № 40-ФЗ «Об ОСАГО»; пп. 3 п. 1 ст. 333.36 НК РФ',
    refEn: 'Art. 1064, 1079, 1085 of the Civil Code; Art. 7, 12 of Federal Law No. 40-FZ (OSAGO); subp. 3 p. 1 Art. 333.36 of the Tax Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'Ленинский районный суд города Москвы', hintRu: 'по месту нахождения страховой компании; по потребительским спорам возможна подача по месту жительства истца (ст. 17 ЗоЗПП)' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('plaintiff_phone', 'Телефон истца', 'Plaintiff phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик — страховая компания', 'Defendant (insurer)', 'text', { half: true, placeholderDoc: 'ООО «Аккорд-Страхование»' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('accident_date', 'Дата ДТП', 'Accident date', 'date', { half: true }),
      F('accident_info', 'Обстоятельства ДТП', 'Accident details', 'textarea', { placeholderDoc: 'ДТП произошло на пересечении ул. Ленина и пр. Мира г. Москвы; виновник — водитель автомобиля Lada XRay, гос. номер А123ВС77' }),
      F('policy_no', 'Полис ОСАГО виновника', 'At-fault driver policy number', 'text', { half: true, placeholderDoc: 'ХХХ 0345678901' }),
      F('injury_info', 'Причинённый вред здоровью', 'Injury description', 'textarea', { placeholderDoc: 'сотрясение головного мозга, ушиб грудной клетки; стационарное лечение — 12 дней, амбулаторное — 30 дней' }),
      F('lost_income', 'Утраченный заработок, руб.', 'Lost income, RUB', 'number', { half: true, placeholderDoc: '65000' }),
      F('treatment_costs', 'Расходы на лечение, руб.', 'Treatment costs, RUB', 'number', { half: true, placeholderDoc: '98000' }),
      F('moral_amount', 'Моральный вред, руб.', 'Moral damages, RUB', 'number', { placeholderDoc: '150000' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Истец: {{plaintiff_name}}', 'Адрес: {{plaintiff_address}}', 'Тел.: {{plaintiff_phone}}', '', 'Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}'] },
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о возмещении вреда здоровью, причинённого в результате ДТП' },
      { type: 'paragraph', text: '{{accident_date}} произошло дорожно-транспортное происшествие: {{accident_info}}.', justify: true },
      { type: 'paragraph', text: 'Гражданская ответственность виновника ДТП застрахована в {{defendant_name}} (полис ОСАГО {{policy_no}}).', justify: true },
      { type: 'paragraph', text: 'В результате ДТП мне причинён вред здоровью: {{injury_info}}. Утраченный заработок за период нетрудоспособности составил {{lost_income}} рублей, расходы на лечение, лекарственные препараты и реабилитацию — {{treatment_costs}} рублей, что подтверждается медицинскими документами и документами об оплате.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 1064, 1079, 1085 Гражданского кодекса РФ и статьёй 12 Федерального закона от 25.04.2002 № 40-ФЗ «Об обязательном страховании гражданской ответственности владельцев транспортных средств» прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Взыскать с ответчика в мою пользу утраченный заработок в размере {{lost_income}} рублей.',
        'Взыскать с ответчика дополнительные расходы на лечение и реабилитацию в размере {{treatment_costs}} рублей.',
        'Взыскать с ответчика компенсацию морального вреда в размере {{moral_amount}} рублей.',
      ] },
      { type: 'paragraph', text: 'Госпошлина при подаче настоящего иска не уплачивается — подпункт 3 пункта 1 статьи 333.36 Налогового кодекса РФ.', noIndent: true },
      { type: 'attachment', items: [
        'Справка о ДТП и материалы ГИБДД (копии);',
        'Медицинские документы: выписной эпикриз, справки, заключение;',
        'Документы о расходах на лечение и реабилитацию;',
        'Расчёт утраченного заработка;',
        'Копии искового заявления по числу лиц, участвующих в деле.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'ru-lawsuit-reinstatement', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление о восстановлении на работе',
    titleEn: 'Lawsuit: reinstatement at work',
    descRu: 'Иск работника о признании увольнения незаконным, восстановлении на работе и взыскании среднего заработка за время вынужденного прогула. Срок обращения — один месяц со дня вручения копии приказа об увольнении; работники госпошлину не платят.',
    descEn: 'Employee lawsuit to declare dismissal unlawful, be reinstated and recover average earnings. One-month filing period applies; employees are exempt from the court fee.',
    refRu: 'ст. 391–394 ТК РФ; ст. 24 ГПК РФ',
    refEn: 'Art. 391-394 of the Labour Code; Art. 24 of the Civil Procedure Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'Ленинский районный суд города Москвы', hintRu: 'районный суд (ст. 24 ГПК РФ); иски о восстановлении на работе мировому судье не подсудны' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('plaintiff_phone', 'Телефон истца', 'Plaintiff phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик — работодатель', 'Defendant (employer)', 'text', { half: true, placeholderDoc: 'ООО «Ромашка»' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('position', 'Ваша должность', 'Your position', 'text', { half: true, placeholderDoc: 'инженера отдела продаж', hintRu: 'в родительном падеже — «в должности кого»' }),
      F('dismissal_date', 'Дата увольнения', 'Dismissal date', 'date', { half: true }),
      F('dismissal_order', 'Приказ об увольнении', 'Dismissal order', 'text', { half: true, placeholderDoc: '№ 45-К от 12.05.2026' }),
      F('dismissal_basis', 'Основание увольнения', 'Dismissal grounds', 'text', { half: true, placeholderDoc: 'пункт 2 части первой статьи 81 ТК РФ (сокращение численности или штата)' }),
      F('violation_info', 'В чём выразилось нарушение', 'Violation description', 'textarea', { placeholderDoc: 'сокращение проведено без письменного предупреждения за два месяца и без предложения вакантных должностей; преимущественное право на оставление на работе не учтено' }),
      F('salary_amount', 'Средний заработок за прогул, руб.', 'Average earnings, RUB', 'number', { half: true, placeholderDoc: '185000' }),
      F('moral_amount', 'Моральный вред, руб.', 'Moral damages, RUB', 'number', { half: true, placeholderDoc: '50000' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Истец: {{plaintiff_name}}', 'Адрес: {{plaintiff_address}}', 'Тел.: {{plaintiff_phone}}', '', 'Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}'] },
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о восстановлении на работе' },
      { type: 'paragraph', text: 'Я работал(а) у ответчика в должности {{position}}. {{dismissal_date}} ответчик уволил(а) меня {{dismissal_basis}} на основании приказа {{dismissal_order}}.', justify: true },
      { type: 'paragraph', text: 'Считаю увольнение незаконным: {{violation_info}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 391–394 Трудового кодекса РФ и статьёй 24 ГПК РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Признать увольнение незаконным и восстановить меня на работе в должности {{position}}.',
        'Взыскать с ответчика средний заработок за время вынужденного прогула в размере {{salary_amount}} рублей.',
        'Взыскать с ответчика компенсацию морального вреда в размере {{moral_amount}} рублей.',
      ] },
      { type: 'paragraph', text: 'Работники освобождаются от оплаты пошлин и судебных расходов по искам, вытекающим из трудовых отношений (ст. 393 ТК РФ). Срок обращения в суд по делам о восстановлении на работе — один месяц со дня вручения копии приказа об увольнении (ст. 392 ТК РФ).', noIndent: true },
      { type: 'attachment', items: [
        'Копия приказа об увольнении;',
        'Копия трудовой книжки;',
        'Расчёт среднего заработка за время вынужденного прогула;',
        'Копии искового заявления по числу лиц, участвующих в деле.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'ru-order-salary', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Заявление о судебном приказе о взыскании зарплаты',
    titleEn: 'Court order application: unpaid salary',
    descRu: 'Судебный приказ — упрощённое производство без судебного заседания: мировой судья выносит приказ по бесспорному требованию о взыскании начисленной, но не выплаченной заработной платы. Госпошлина — 50% от обычной ставки; должник вправе отменить приказ возражениями в течение 10 дней.',
    descEn: 'A court order (simplified proceedings) for undisputed recovery of accrued but unpaid wages. Fee is 50% of the standard rate; the debtor may object within 10 days.',
    refRu: 'ст. 121–124 ГПК РФ; пп. 2 п. 1 ст. 333.19 НК РФ',
    refEn: 'Art. 121-124 of the Civil Procedure Code; subp. 2 p. 1 Art. 333.19 of the Tax Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'судебный участок № 5 Ленинского судебного района г. Москвы', hintRu: 'мировому судье по месту нахождения работодателя (должника)' }),
      F('creditor_name', 'Взыскатель — ваши ФИО', 'Creditor full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('creditor_phone', 'Телефон взыскателя', 'Creditor phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('creditor_address', 'Адрес взыскателя', 'Creditor address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('debtor_name', 'Должник — работодатель', 'Debtor (employer)', 'text', { half: true, placeholderDoc: 'ООО «Ромашка»' }),
      F('debtor_address', 'Адрес должника', 'Debtor address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('position', 'Ваша должность', 'Your position', 'text', { half: true, placeholderDoc: 'менеджера отдела продаж', hintRu: 'в родительном падеже' }),
      F('salary_period', 'Период задолженности', 'Debt period', 'text', { half: true, placeholderDoc: 'с 01.01.2026 по 31.03.2026' }),
      F('salary_amount', 'Сумма задолженности, руб.', 'Debt amount, RUB', 'number', { placeholderDoc: '120000' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Взыскатель: {{creditor_name}}', 'Адрес: {{creditor_address}}', 'Тел.: {{creditor_phone}}', '', 'Должник: {{debtor_name}}', 'Адрес: {{debtor_address}}'] },
      { type: 'title', text: 'ЗАЯВЛЕНИЕ О ВЫНЕСЕНИИ СУДЕБНОГО ПРИКАЗА' },
      { type: 'subtitle', text: 'о взыскании начисленной, но не выплаченной заработной платы' },
      { type: 'paragraph', text: 'Я работаю в {{debtor_name}} в должности {{position}}. За период {{salary_period}} мне начислена, но не выплачена заработная плата в размере {{salary_amount}} рублей, что подтверждается справкой работодателя и расчётными листками.', justify: true },
      { type: 'paragraph', text: 'Требование носит бесспорный характер и подтверждено документами. В соответствии со статьями 121–124 Гражданского процессуального кодекса РФ прошу вынести судебный приказ о взыскании с должника {{debtor_name}} в мою пользу заработной платы в размере {{salary_amount}} рублей, а также расходов по уплате государственной пошлины.', justify: true },
      { type: 'attachment', items: [
        'Справка работодателя о начисленной, но не выплаченной заработной плате;',
        'Расчётные листки;',
        'Документ об уплате государственной пошлины.',
      ] },
      stdSign('{{creditor_name}}'),
    ],
  },

  // ── Жалобы в госорганы и полиция ───────────────────────────────────────────
  {
    slug: 'ru-gov-prosecutor', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в прокуратуру',
    titleEn: 'Complaint to the prosecutor’s office',
    descRu: 'Обращение в прокуратуру о нарушении закона: невыплата зарплаты, бездействие должностных лиц, произвол организаций. Прокуратура проводит проверку и принимает меры реагирования; ответ — в течение 30 дней (15 — если проверка не требуется).',
    descEn: 'Complaint to the prosecutor’s office about a law violation; response within 30 days (15 if no verification needed).',
    refRu: 'ст. 10 ФЗ от 17.01.1992 № 2202-1 «О прокуратуре РФ»; ст. 12 ФЗ от 02.05.2006 № 59-ФЗ',
    refEn: 'Art. 10 of Federal Law No. 2202-1 (Prosecution Service); Art. 12 of Federal Law No. 59-FZ',
    fields: [
      F('office_name', 'Наименование прокуратуры', 'Prosecutor’s office', 'text', { placeholderDoc: 'Прокуратура Ленинского района г. Москвы', hintRu: 'по месту нахождения нарушителя (или вышестоящая)' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('subject_name', 'Кто нарушает закон', 'Violator', 'text', { placeholderDoc: 'ООО «Ромашка» / УМВД России по г. Москве' }),
      F('violation', 'Описание нарушения', 'Violation description', 'textarea', { placeholderDoc: 'с 01.02.2026 работодатель не выплачивает заработную плату; письменные обращения к руководству оставлены без ответа' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{office_name}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЖАЛОБА' },
      { type: 'subtitle', text: 'о нарушении законодательства' },
      { type: 'paragraph', text: 'Сообщаю о нарушении законодательства со стороны {{subject_name}}: {{violation}}.', justify: true },
      { type: 'paragraph', text: 'На основании статьи 10 Федерального закона «О прокуратуре Российской Федерации» прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Провести проверку изложенных фактов.',
        'Принять меры прокурорского реагирования к восстановлению нарушенных прав.',
        'Привлечь виновных лиц к установленной законом ответственности.',
        'Сообщить мне письменно о результатах рассмотрения жалобы и принятых мерах.',
      ] },
      { type: 'paragraph', text: 'Обращение подлежит рассмотрению в течение тридцати дней, а не требующее проверки — в течение пятнадцати дней (ст. 12 Федерального закона от 02.05.2006 № 59-ФЗ).', noIndent: true },
      { type: 'attachment', items: [
        'Копии документов, подтверждающих изложенные факты (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-gov-police-inaction', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба на бездействие полиции',
    titleEn: 'Complaint against police inaction',
    descRu: 'Жалоба на бездействие сотрудников полиции по вашему заявлению о преступлении — руководителю следственного органа или прокурору в порядке статьи 124 УПК РФ. Рассматривается в срок до 3 суток (с продлением до 10 суток).',
    descEn: 'Complaint against police inaction on your crime report, filed under Art. 124 of the Criminal Procedure Code; decided within 3 (up to 10) days.',
    refRu: 'ст. 124, 144–145 УПК РФ; ФЗ от 02.05.2006 № 59-ФЗ',
    refEn: 'Art. 124, 144-145 of the Criminal Procedure Code; Federal Law No. 59-FZ',
    fields: [
      F('addressee_name', 'Кому направляется жалоба', 'Addressee', 'text', { placeholderDoc: 'Руководителю следственного отдела СУ УМВД России по г. Москве', hintRu: 'руководитель следственного органа или прокурор (ст. 124 УПК РФ)' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('application_date', 'Дата подачи заявления о преступлении', 'Crime report date', 'date', { half: true }),
      F('complaint', 'В чём выразилось бездействие', 'Inaction description', 'textarea', { placeholderDoc: 'заявление о краже подано 01.10.2026 в отдел полиции № 5; уведомление о принятом решении не направлено, проверка не проводится, сотрудники не дают ответов на обращения' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{addressee_name}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЖАЛОБА' },
      { type: 'subtitle', text: 'на бездействие сотрудников полиции' },
      { type: 'paragraph', text: '{{application_date}} я подал(а) заявление о преступлении в органы внутренних дел. До настоящего времени уведомление о принятом процессуальном решении не получено: {{complaint}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьёй 124 Уголовно-процессуального кодекса РФ жалобы на действия (бездействие) и решения дознавателя, органа дознания, следователя подаются руководителю следственного органа или прокурору. Прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Признать бездействие сотрудников полиции незаконным (необоснованным).',
        'Обязать устранить нарушения и провести проверку по моему заявлению в порядке статей 144–145 УПК РФ.',
        'Уведомить меня о принятом решении в установленный законом срок.',
      ] },
      { type: 'paragraph', text: 'Жалоба подлежит рассмотрению в течение трёх суток со дня её получения; в исключительных случаях срок может быть продлён до десяти суток (ст. 124 УПК РФ).', noIndent: true },
      { type: 'attachment', items: [
        'Копия заявления о преступлении и талон-уведомление (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-gov-crime-report', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Заявление о преступлении (кража, мошенничество)',
    titleEn: 'Crime report to the police',
    descRu: 'Письменное заявление о преступлении в органы внутренних дел (ст. 141 УПК РФ). Полиция обязана провести проверку — срок 3 суток, с продлением до 10 или 30 суток (ст. 144 УПК РФ) — и вынести постановление о возбуждении уголовного дела либо об отказе.',
    descEn: 'Written crime report to the police (Art. 141 of the Criminal Procedure Code); verification within 3 (up to 30) days.',
    refRu: 'ст. 141, 144, 145 УПК РФ; ст. 306 УК РФ',
    refEn: 'Art. 141, 144, 145 of the Criminal Procedure Code; Art. 306 of the Criminal Code',
    fields: [
      F('police_office', 'Наименование органа полиции', 'Police department', 'text', { placeholderDoc: 'Отдел полиции № 5 УМВД России по г. Москве' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('crime_desc', 'Описание преступления', 'Crime description', 'textarea', { placeholderDoc: '15.10.2026 около 14:30 неизвестное лицо похитило у меня телефон iPhone 15 стоимостью 79 900 рублей из сумки на остановке по адресу: г. Москва, ул. Пушкина, д. 2' }),
      F('evidence', 'Доказательства и свидетели', 'Evidence and witnesses', 'textarea', { placeholderDoc: 'видеозапись камеры наблюдения магазина «Продукты»; свидетель — Кузнецова Анна Сергеевна (тел. +7 900 111-22-33)' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{police_office}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о преступлении' },
      { type: 'paragraph', text: 'Сообщаю о совершённом в отношении меня преступлении: {{crime_desc}}.', justify: true },
      { type: 'paragraph', text: 'Обстоятельства могут быть подтверждены: {{evidence}}.', justify: true },
      { type: 'paragraph', text: 'На основании статьи 141 Уголовно-процессуального кодекса РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Зарегистрировать настоящее заявление и выдать мне талон-уведомление о его принятии.',
        'Провести проверку в порядке статей 144–145 УПК РФ.',
        'При наличии оснований — возбудить уголовное дело и привлечь виновных к ответственности.',
        'Уведомить меня о принятом процессуальном решении в установленный законом срок.',
      ] },
      { type: 'paragraph', text: 'Об уголовной ответственности за заведомо ложный донос, предусмотренной статьёй 306 Уголовного кодекса РФ, предупреждён(а).', noIndent: true },
      { type: 'attachment', items: [
        'Копии документов, подтверждающих ущерб (чек, гарантийный талон и т.п.);',
        'Фотоматериалы, скриншоты переписки (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-gov-rospotrebnadzor', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в Роспотребнадзор',
    titleEn: 'Complaint to Rospotrebnadzor',
    descRu: 'Жалоба в Роспотребнадзор на нарушение прав потребителя продавцом, исполнителем, магазином, рестораном, банком. Сначала направьте продавцу досудебную претензию; Роспотребнадзор проведёт проверку и может привлечь нарушителя к административной ответственности.',
    descEn: 'Complaint to Rospotrebnadzor about a consumer rights violation; the agency inspects and may fine the violator.',
    refRu: 'ст. 40 Закона РФ «О защите прав потребителей»; ФЗ от 02.05.2006 № 59-ФЗ',
    refEn: 'Art. 40 of the Consumer Protection Law; Federal Law No. 59-FZ',
    fields: [
      F('office_name', 'Наименование управления Роспотребнадзора', 'Rospotrebnadzor office', 'text', { placeholderDoc: 'Управление Роспотребнадзора по г. Москве' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('seller_name', 'Продавец / исполнитель', 'Seller / provider', 'text', { half: true, placeholderDoc: 'ООО «Магазин»' }),
      F('purchase_desc', 'Что куплено / какая услуга оказана', 'Purchase / service', 'textarea', { placeholderDoc: '15.09.2026 приобретён смартфон Samsung Galaxy A54 за 29 990 рублей, кассовый чек № 123' }),
      F('violation', 'Нарушение прав потребителя', 'Violation', 'textarea', { placeholderDoc: 'продавец отказался принять товар с недостатком и вернуть деньги; ответ на претензию не направлен' }),
      F('claim_date', 'Дата претензии продавцу', 'Pre-court claim date', 'date', { half: true }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{office_name}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЖАЛОБА' },
      { type: 'subtitle', text: 'на нарушение прав потребителя' },
      { type: 'paragraph', text: 'Я приобрел(а) у {{seller_name}}: {{purchase_desc}}.', justify: true },
      { type: 'paragraph', text: 'В отношении меня допущено нарушение прав потребителя: {{violation}}. {{claim_date}} продавцу направлена письменная претензия; в добровольном порядке требования не удовлетворены (ответ не получен).', justify: true },
      { type: 'paragraph', text: 'На основании статьи 40 Закона РФ «О защите прав потребителей» прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Провести проверку деятельности {{seller_name}}.',
        'В случае подтверждения нарушений — выдать предписание об их устранении и привлечь виновных лиц к административной ответственности.',
        'Сообщить мне письменно о результатах рассмотрения жалобы.',
      ] },
      { type: 'attachment', items: [
        'Копия досудебной претензии и доказательства её направления;',
        'Копии документов о покупке (заказе) и оплате.',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-gov-labor-inspection', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в трудовую инспекцию',
    titleEn: 'Complaint to the labour inspectorate',
    descRu: 'Жалоба в государственную инспекцию труда на нарушение трудовых прав: невыплата зарплаты, неоформление трудового договора, незаконное увольнение. Инспекция проводит проверку и выдаёт работодателю предписание; источник жалобы остаётся конфиденциальным (ст. 358 ТК РФ).',
    descEn: 'Complaint to the state labour inspectorate about labour rights violations; the source of the complaint is kept confidential.',
    refRu: 'ст. 356–358 ТК РФ; ФЗ от 02.05.2006 № 59-ФЗ',
    refEn: 'Art. 356-358 of the Labour Code; Federal Law No. 59-FZ',
    fields: [
      F('inspectorate_name', 'Наименование инспекции', 'Inspectorate name', 'text', { placeholderDoc: 'Государственная инспекция труда в г. Москве' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('employer_name', 'Работодатель', 'Employer', 'text', { half: true, placeholderDoc: 'ООО «Ромашка»' }),
      F('position', 'Ваша должность', 'Your position', 'text', { half: true, placeholderDoc: 'менеджер отдела продаж' }),
      F('violation', 'Нарушение трудовых прав', 'Violation', 'textarea', { placeholderDoc: 'заработная плата за сентябрь–октябрь 2026 года не выплачена; трудовой договор при приёме на работу не оформлялся' }),
      F('confidential', 'Конфиденциальность', 'Confidentiality', 'select', { half: true, options: ['Прошу сохранить конфиденциальность источника жалобы (ст. 358 ТК РФ)', 'Конфиденциальность источника жалобы не требуется'] }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{inspectorate_name}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЖАЛОБА' },
      { type: 'subtitle', text: 'на нарушение трудового законодательства' },
      { type: 'paragraph', text: 'Я работаю у {{employer_name}} в должности {{position}}. Работодателем допущены нарушения: {{violation}}.', justify: true },
      { type: 'paragraph', text: 'На основании статей 356, 357 Трудового кодекса РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Провести проверку по изложенным фактам.',
        'Выдать работодателю обязательное для исполнения предписание об устранении нарушений.',
        'Привлечь виновных лиц к административной ответственности.',
        'Сообщить мне письменно о результатах рассмотрения жалобы.',
      ] },
      { type: 'paragraph', text: '{{confidential}}.', noIndent: true },
      { type: 'attachment', items: [
        'Копии документов, подтверждающих трудовые отношения (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-gov-housing-inspection', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в жилищную инспекцию на управляющую организацию',
    titleEn: 'Complaint to the housing inspection',
    descRu: 'Жалоба в Государственную жилищную инспекцию на бездействие УК/ТСЖ: некачественное содержание общего имущества, отсутствие ответов на обращения, невыполнение обязанностей. Инспекция проводит проверку и выдаёт предписание.',
    descEn: 'Complaint to the state housing inspection about management company inaction; the inspection issues binding orders.',
    refRu: 'ст. 20 ЖК РФ; ФЗ от 02.05.2006 № 59-ФЗ',
    refEn: 'Art. 20 of the Housing Code; Federal Law No. 59-FZ',
    fields: [
      F('inspection_name', 'Наименование жилищной инспекции', 'Housing inspection name', 'text', { placeholderDoc: 'Государственная жилищная инспекция г. Москвы' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес помещения', 'Premises address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('org_name', 'Управляющая организация', 'Management company', 'text', { half: true, placeholderDoc: 'ООО «УК Центральная»' }),
      F('org_address', 'Адрес организации', 'Company address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('appeal_date', 'Дата вашего обращения в УК', 'Prior appeal date', 'date', { half: true }),
      F('violation', 'Нарушения УК', 'Violations', 'textarea', { placeholderDoc: 'крыша над подъездом № 2 протекает с 01.10.2026; обращение от 05.10.2026 оставлено без ответа, ремонтные работы не проводятся' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{inspection_name}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЖАЛОБА' },
      { type: 'subtitle', text: 'на бездействие управляющей организации' },
      { type: 'paragraph', text: 'Я являюсь собственником помещения по адресу {{applicant_address}}. Управление домом осуществляет {{org_name}} ({{org_address}}).', justify: true },
      { type: 'paragraph', text: 'Управляющей организацией допущены нарушения: {{violation}}. Моё обращение от {{appeal_date}} оставлено без удовлетворения.', justify: true },
      { type: 'paragraph', text: 'На основании статьи 20 Жилищного кодекса РФ (государственный жилищный надзор) прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Провести проверку изложенных фактов.',
        'Выдать {{org_name}} предписание об устранении нарушений.',
        'Привлечь виновных лиц к административной ответственности.',
        'Сообщить мне письменно о результатах рассмотрения жалобы.',
      ] },
      { type: 'attachment', items: [
        'Копия обращения в управляющую организацию (при наличии);',
        'Фотоматериалы (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-gov-traffic-appeal', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба на постановление ГИБДД (штраф)',
    titleEn: 'Appeal against a traffic police ruling',
    descRu: 'Жалоба на постановление по делу об административном правонарушении (штраф с камеры, протокол ГИБДД). Срок обжалования — 10 суток со дня вручения или получения копии постановления (ст. 30.3 КоАП РФ).',
    descEn: 'Appeal against an administrative offence ruling (traffic fine); 10-day filing period under Art. 30.3 of the Administrative Offenses Code.',
    refRu: 'ст. 30.1–30.3, 30.7 КоАП РФ',
    refEn: 'Art. 30.1-30.3, 30.7 of the Code of Administrative Offenses of the Russian Federation',
    fields: [
      F('addressee_name', 'Куда подаётся жалоба', 'Addressee', 'text', { placeholderDoc: 'Начальнику ЦАФАП ГИБДД ГУ МВД России по г. Москве', hintRu: 'вышестоящему должностному лицу или в районный суд (ст. 30.1 КоАП РФ)' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнов Дмитрий Олегович' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('ruling_no', 'Номер постановления', 'Ruling number', 'text', { half: true, placeholderDoc: '18810138261012345678' }),
      F('ruling_date', 'Дата постановления', 'Ruling date', 'date', { half: true }),
      F('offense_desc', 'Что вменяется', 'Charged offence', 'textarea', { placeholderDoc: 'правонарушение, предусмотренное ч. 2 ст. 12.9 КоАП РФ (превышение скорости), по адресу: г. Москва, МКАД, 51 км, внешняя сторона' }),
      F('appeal_grounds', 'Основания для отмены', 'Grounds for reversal', 'textarea', { placeholderDoc: 'знак ограничения скорости на участке отсутствует, дорожная разметка не читается; данные собственника автомобиля указаны ошибочно' }),
      F('demand', 'Просите', 'Demand', 'select', { options: ['Отменить постановление и прекратить производство по делу', 'Изменить постановление, снизив наказание в пределах санкции статьи'] }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{addressee_name}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЖАЛОБА' },
      { type: 'subtitle', text: 'на постановление по делу об административном правонарушении' },
      { type: 'paragraph', text: '{{ruling_date}} в отношении меня вынесено постановление № {{ruling_no}} по делу об административном правонарушении: {{offense_desc}}.', justify: true },
      { type: 'paragraph', text: 'Считаю постановление незаконным и необоснованным: {{appeal_grounds}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 30.1–30.7 Кодекса РФ об административных правонарушениях прошу {{demand}}.', justify: true },
      { type: 'paragraph', text: 'Жалоба может быть подана в течение десяти суток со дня вручения или получения копии постановления (ст. 30.3 КоАП РФ).', noIndent: true },
      { type: 'attachment', items: [
        'Копия обжалуемого постановления;',
        'Схема, фотоматериалы и иные письменные доказательства (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },

  // ── T1 (RU-2026): семейные иски ────────────────────────────────────────────
  {
    slug: 'ru-family-alimony-order', kind: 'STANDARD', categorySlug: 'court-family',
    titleRu: 'Заявление о вынесении судебного приказа о взыскании алиментов',
    titleEn: 'Application for a court order on child support',
    descRu: 'Упрощённый порядок взыскания алиментов: мировой судья выносит судебный приказ без судебного заседания в течение 5 дней (ст. 121–122 ГПК РФ). Подходит, когда отцовство установлено и спора о детях нет; алименты взыскиваются только в долевом отношении к заработку. Должник вправе в течение 10 дней подать возражения — тогда приказ отменяется.',
    descEn: 'Simplified procedure: a justice of the peace issues a court order without a hearing within 5 days. Applies when paternity is established and there is no dispute over children.',
    refRu: 'ст. 121–124, 127 ГПК РФ; ст. 81 СК РФ; пп. 2 п. 1 ст. 333.36 НК РФ',
    refEn: 'Art. 121-124, 127 of the Civil Procedure Code; Art. 81 of the Family Code; subp. 2 p. 1 Art. 333.36 of the Tax Code',
    fields: [
      F('court_name', 'Судебный участок мирового судьи', 'Justice of the peace district', 'text', { placeholderDoc: '№ 5 Ленинского судебного района г. Москвы', hintRu: 'мировому судье по месту жительства истца или ответчика (ст. 23, 29 ГПК РФ)' }),
      F('applicant_name', 'Взыскатель — ваши ФИО', 'Claimant full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон взыскателя', 'Claimant phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес взыскателя', 'Claimant address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('debtor_name', 'Должник — ФИО второго родителя', 'Debtor full name', 'text', { half: true, placeholderDoc: 'Смирнов Иван Петрович' }),
      F('debtor_address', 'Адрес должника', 'Debtor address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Гагарина, д. 5, кв. 12' }),
      F('debtor_birth', 'Дата и место рождения должника', 'Debtor birth date and place', 'text', { half: true, placeholderDoc: '15.04.1987, г. Казань', hintRu: 'обязательный реквизит судебного приказа — ст. 127 ГПК РФ' }),
      F('debtor_id', 'Идентификатор должника (если известен)', 'Debtor identifier (if known)', 'text', { half: true, placeholderDoc: 'СНИЛС 112-233-445 95', hintRu: 'СНИЛС, ИНН или паспорт — один из них, если известен (ст. 127 ГПК РФ)' }),
      F('debtor_work', 'Место работы должника (если известно)', 'Debtor workplace (if known)', 'text', { placeholderDoc: 'ООО «Ромашка», г. Москва' }),
      F('child_info', 'Ребёнок — ФИО и дата рождения', 'Child name and birth date', 'text', { placeholderDoc: 'Смирнов Дмитрий Иванович, 15.03.2018 года рождения', hintRu: 'если детей несколько — перечислите всех' }),
      F('alimony_share', 'Размер алиментов', 'Alimony amount', 'select', { options: ['в размере одной четвёртой части всех видов заработка и иного дохода ежемесячно', 'в размере одной трети части всех видов заработка и иного дохода ежемесячно', 'в размере одной второй части всех видов заработка и иного дохода ежемесячно'], hintRu: 'ст. 81 СК РФ: 1/4 — на одного ребёнка, 1/3 — на двоих, 1/2 — на троих и более' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Мировому судье судебного участка {{court_name}}', '', 'Взыскатель: {{applicant_name}}', 'Адрес: {{applicant_address}}', 'Тел.: {{applicant_phone}}', '', 'Должник: {{debtor_name}}', 'Адрес: {{debtor_address}}'] },
      { type: 'title', text: 'ЗАЯВЛЕНИЕ О ВЫНЕСЕНИИ СУДЕБНОГО ПРИКАЗА' },
      { type: 'subtitle', text: 'о взыскании алиментов на несовершеннолетнего ребёнка' },
      { type: 'paragraph', text: 'Наш общий несовершеннолетний ребёнок — {{child_info}} — проживает со мной, находится на моём полном материальном обеспечении. Второй родитель — {{debtor_name}} — денежные средства на содержание ребёнка не предоставляет, соглашение об уплате алиментов не заключалось.', justify: true },
      { type: 'paragraph', text: 'Сведения о должнике: дата и место рождения — {{debtor_birth}}; {{debtor_id}}; место работы — {{debtor_work}}. Спора о праве на алименты (об отцовстве, материнстве, размере) не имеется.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 81 Семейного кодекса РФ, статьями 121–124 Гражданского процессуального кодекса РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Вынести судебный приказ о взыскании с должника {{debtor_name}} в пользу взыскателя {{applicant_name}} алиментов на содержание ребёнка {{child_info}} {{alimony_share}} — до совершеннолетия ребёнка.',
      ] },
      { type: 'paragraph', text: 'Госпошлина при подаче заявления не уплачивается — пп. 2 п. 1 ст. 333.36 Налогового кодекса РФ. Судебный приказ выносится в течение пяти дней без вызова сторон; должник вправе в течение десяти дней подать возражения, при их поступлении приказ подлежит отмене с разъяснением права обратиться с иском.', noIndent: true },
      { type: 'attachment', items: [
        'Копия свидетельства о рождении ребёнка;',
        'Копия свидетельства о заключении брака (о расторжении брака) — при наличии;',
        'Справка о составе семьи;',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-family-partition', kind: 'STANDARD', categorySlug: 'court-family',
    titleRu: 'Исковое заявление о разделе совместно нажитого имущества супругов',
    titleEn: 'Lawsuit: division of marital property',
    descRu: 'Иск о разделе общего имущества — в браке, при разводе или после него (срок исковой давности — три года со дня, когда узнали о нарушении права, п. 7 ст. 38 СК РФ). При цене иска до 50 000 ₽ — мировому судье, свыше — в районный суд.',
    descEn: 'Lawsuit on division of joint marital property; three-year limitation period. Filed with a justice of the peace (claims up to RUB 50,000) or a district court.',
    refRu: 'ст. 38, 39 СК РФ; п. 3 ч. 1 ст. 23, ст. 131–132 ГПК РФ; ст. 333.19 НК РФ',
    refEn: 'Art. 38, 39 of the Family Code; p. 3 subp. 1 Art. 23, Art. 131-132 of the Civil Procedure Code; Art. 333.19 of the Tax Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'Ленинский районный суд города Москвы', hintRu: 'мировому судье — при цене иска до 50 000 ₽ (п. 3 ч. 1 ст. 23 ГПК РФ)' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('plaintiff_phone', 'Телефон истца', 'Plaintiff phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик — ФИО супруга', 'Defendant full name', 'text', { half: true, placeholderDoc: 'Смирнов Иван Петрович' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Гагарина, д. 5, кв. 12' }),
      F('marriage_period', 'Брак (даты заключения и расторжения)', 'Marriage (dates)', 'text', { half: true, placeholderDoc: 'брак заключён 20.06.2015, расторгнут 12.03.2026' }),
      F('price', 'Цена иска, руб.', 'Claim value, RUB', 'number', { half: true, placeholderDoc: '1250000' }),
      F('property_desc', 'Подлежащее разделу имущество', 'Property to be divided', 'textarea', { placeholderDoc: 'квартира по адресу: г. Москва, ул. Пушкина, д. 2, кв. 3 (приобретена в 2018 г. по договору купли-продажи); автомобиль Toyota Camry 2022 г. в.; вклад в банке' }),
      F('property_share', 'Предлагаемый порядок раздела', 'Proposed division', 'select', { options: ['поровну — по одной второй доле каждому (ст. 39 СК РФ)', 'с учётом интересов несовершеннолетних детей — увеличить мою долю (п. 2 ст. 39 СК РФ)'] }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Истец: {{plaintiff_name}}', 'Адрес: {{plaintiff_address}}', 'Тел.: {{plaintiff_phone}}', '', 'Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}'] },
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о разделе совместно нажитого имущества супругов' },
      { type: 'paragraph', text: '{{marriage_period}}. В период брака приобретено общее совместное имущество: {{property_desc}}. Брачный договор не заключался, соглашение о разделе имущества между сторонами не достигнуто.', justify: true },
      { type: 'paragraph', text: 'Цена иска — {{price}} рублей. Согласовать добровольный раздел имущества стороны не смогли.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 38, 39 Семейного кодекса РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Произвести раздел совместно нажитого имущества супругов — {{property_desc}} — {{property_share}}.',
        'Признать за каждым из супругов право собственности на соответствующие доли имущества.',
        'Взыскать с ответчика расходы по уплате государственной пошлины.',
      ] },
      { type: 'paragraph', text: 'Госпошлина уплачивается по цене иска (пп. 1 п. 1 ст. 333.19 Налогового кодекса РФ); при разделе имущества, приобретённого в браке, пошлина исчисляется с цены иска.', noIndent: true },
      { type: 'attachment', items: [
        'Копии документов на имущество (договоры, свидетельства о регистрации, ПТС, выписки со счетов);',
        'Копия свидетельства о заключении (расторжении) брака;',
        'Копии свидетельств о рождении детей — при увеличении доли в их интересах;',
        'Отчёт независимой оценки имущества (при наличии);',
        'Квитанция об уплате государственной пошлины;',
        'Копии искового заявления по числу лиц, участвующих в деле.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'ru-family-visitation', kind: 'STANDARD', categorySlug: 'court-family',
    titleRu: 'Исковое заявление об определении порядка общения с ребёнком',
    titleEn: 'Lawsuit: establishing visitation schedule',
    descRu: 'Иск родителя, проживающего отдельно, об определении порядка общения с ребёнком и участия в его воспитании. Споры о детях рассматривает районный суд с участием органа опеки и попечительства (ст. 24 ГПК РФ).',
    descEn: 'Lawsuit by the non-residential parent to establish a visitation schedule. Child disputes are heard by a district court with the guardianship authority involved.',
    refRu: 'ст. 65, 66 СК РФ; ст. 24 ГПК РФ; ст. 333.19 НК РФ',
    refEn: 'Art. 65, 66 of the Family Code; Art. 24 of the Civil Procedure Code; Art. 333.19 of the Tax Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'Ленинский районный суд города Москвы', hintRu: 'районный суд — споры о детях (ст. 24 ГПК РФ)' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнов Иван Петрович' }),
      F('plaintiff_phone', 'Телефон истца', 'Plaintiff phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Гагарина, д. 5, кв. 12' }),
      F('defendant_name', 'Ответчик — ФИО родителя, с которым живёт ребёнок', 'Defendant full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('child_info', 'Ребёнок — ФИО и дата рождения', 'Child name and birth date', 'text', { placeholderDoc: 'Смирнов Дмитрий Иванович, 15.03.2018 года рождения' }),
      F('communication_terms', 'Предлагаемый порядок общения', 'Proposed visitation schedule', 'textarea', { placeholderDoc: 'каждые выходные — с 10:00 субботы до 20:00 воскресенья; в период школьных каникул — до половины срока; общение по телефону — без ограничений' }),
      F('obstacles', 'В чём выражаются препятствия', 'Obstacles described', 'textarea', { placeholderDoc: 'ответчик отказывает во встречах без объяснения причин, не отвечает на телефонные звонки и сообщения' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Истец: {{plaintiff_name}}', 'Адрес: {{plaintiff_address}}', 'Тел.: {{plaintiff_phone}}', '', 'Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}'] },
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'об определении порядка общения с несовершеннолетним ребёнком' },
      { type: 'paragraph', text: 'Наш общий ребёнок — {{child_info}} — проживает с ответчиком. После прекращения семейных отношений я продолжаю принимать участие в воспитании ребёнка, однако ответчик препятствует общению: {{obstacles}}.', justify: true },
      { type: 'paragraph', text: 'Предлагаемый мною порядок общения с ребёнком: {{communication_terms}}. Такой порядок не нарушает режим дня и интересы развития ребёнка; у меня имеются надлежащие жилищные и бытовые условия.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 65, 66 Семейного кодекса РФ родитель, проживающий отдельно от ребёнка, имеет право на общение с ним, и родитель, с которым ребёнок проживает, не должен препятствовать этому общению. Прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Определить порядок общения истца {{plaintiff_name}} с ребёнком {{child_info}}: {{communication_terms}} — без присутствия ответчика и без предварительного согласования им каждой встречи.',
        'Взыскать с ответчика расходы по уплате государственной пошлины.',
      ] },
      { type: 'paragraph', text: 'Дело рассматривается с обязательным участием органа опеки и попечительства (ст. 78 ГПК РФ, ст. 66 СК РФ).', noIndent: true },
      { type: 'attachment', items: [
        'Копия свидетельства о рождении ребёнка;',
        'Копия свидетельства о заключении (расторжении) брака;',
        'Копии искового заявления по числу лиц, участвующих в деле;',
        'Квитанция об уплате государственной пошлины.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'ru-family-alimony-spouse', kind: 'STANDARD', categorySlug: 'court-family',
    titleRu: 'Исковое заявление о взыскании алиментов на содержание супруги',
    titleEn: 'Lawsuit: spousal support (alimony for spouse)',
    descRu: 'Иск о взыскании средств на содержание супруги (в том числе бывшей) в период беременности и до достижения общим ребёнком возраста трёх лет. Истцы по искам о взыскании алиментов освобождены от госпошлины.',
    descEn: 'Lawsuit for spousal maintenance during pregnancy and until the common child turns three. The plaintiff is exempt from the court fee.',
    refRu: 'ст. 89, 90 СК РФ; ст. 23, 29 ГПК РФ; пп. 2 п. 1 ст. 333.36 НК РФ',
    refEn: 'Art. 89, 90 of the Family Code; Art. 23, 29 of the Civil Procedure Code; subp. 2 p. 1 Art. 333.36 of the Tax Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'судебный участок № 5 Ленинского судебного района г. Москвы', hintRu: 'мировому судье по месту жительства истца или ответчика (ст. 23, 29 ГПК РФ)' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('plaintiff_phone', 'Телефон истца', 'Plaintiff phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик — ФИО супруга', 'Defendant full name', 'text', { half: true, placeholderDoc: 'Смирнов Иван Петрович' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Гагарина, д. 5, кв. 12' }),
      F('marriage_status', 'Брачные отношения', 'Marriage status', 'select', { options: ['Брак с ответчиком не расторгнут', 'Брак с ответчиком расторгнут'] }),
      F('child_info', 'Общий ребёнок — ФИО и дата рождения', 'Common child name and birth date', 'text', { placeholderDoc: 'Смирнов Дмитрий Иванович, 15.03.2026 года рождения', hintRu: 'ребёнок моложе трёх лет' }),
      F('income_desc', 'Ваше материальное положение', 'Your financial situation', 'textarea', { placeholderDoc: 'нахожусь в отпуске по уходу за ребёнком, самостоятельного дохода не имею; пособие и алименты на ребёнка не покрывают мои потребности' }),
      F('support_amount', 'Требуемая сумма на содержание, руб./мес.', 'Monthly support amount, RUB', 'number', { half: true, placeholderDoc: '15000' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Истец: {{plaintiff_name}}', 'Адрес: {{plaintiff_address}}', 'Тел.: {{plaintiff_phone}}', '', 'Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}'] },
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о взыскании алиментов на содержание супруги' },
      { type: 'paragraph', text: '{{marriage_status}}. От брака имеем общего ребёнка — {{child_info}}. Я нахожусь в отпуске по уходу за ребёнком до достижения им возраста трёх лет. Моё материальное положение: {{income_desc}}.', justify: true },
      { type: 'paragraph', text: 'Ответчик обязательств по материальной поддержке не исполняет, денежные средства на моё содержание не предоставляет. Иных источников к существованию я не имею.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 89, 90 Семейного кодекса РФ супруга в период беременности и в течение трёх лет со дня рождения общего ребёнка вправе требовать предоставления содержания от обладающего необходимыми средствами супруга. Прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Взыскать с ответчика {{defendant_name}} в мою пользу алименты на моё содержание в твёрдой денежной сумме {{support_amount}} рублей ежемесячно — до достижения общим ребёнком возраста трёх лет.',
      ] },
      { type: 'paragraph', text: 'Истцы по искам о взыскании алиментов освобождены от уплаты госпошлины — пп. 2 п. 1 ст. 333.36 Налогового кодекса РФ.', noIndent: true },
      { type: 'attachment', items: [
        'Копия свидетельства о рождении ребёнка;',
        'Копия свидетельства о заключении (расторжении) брака;',
        'Справка о размере пособий (выплат), копия приказа о предоставлении отпуска по уходу за ребёнком;',
        'Копии искового заявления по числу лиц, участвующих в деле.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },

  // ── T1 (RU-2026): процессуальные и имущественные иски ─────────────────────
  {
    slug: 'ru-lawsuit-appeal', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Апелляционная жалоба на решение суда',
    titleEn: 'Appellate brief against a first-instance decision',
    descRu: 'Жалоба на не вступившее в законную силу решение суда первой инстанции. Подаётся через суд, принявший решение, в течение одного месяца со дня принятия решения в окончательной форме (ст. 321 ГПК РФ).',
    descEn: 'Appeal against a first-instance decision that has not entered into force. Filed through the deciding court within one month (Art. 321 of the Civil Procedure Code).',
    refRu: 'ст. 320–322 ГПК РФ; ст. 333.19 НК РФ',
    refEn: 'Art. 320-322 of the Civil Procedure Code; Art. 333.19 of the Tax Code',
    fields: [
      F('appeal_court', 'Апелляционная инстанция', 'Appellate court', 'text', { placeholderDoc: 'Судебная коллегия по гражданским делам Московского городского суда', hintRu: 'жалоба подаётся через суд первой инстанции (ст. 321 ГПК РФ)' }),
      F('court_name', 'Суд первой инстанции', 'First-instance court', 'text', { placeholderDoc: 'Ленинский районный суд города Москвы' }),
      F('appellant_name', 'Заявитель жалобы — ваши ФИО', 'Appellant full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('appellant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('appellant_address', 'Адрес заявителя', 'Appellant address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('case_no', 'Номер дела', 'Case number', 'text', { half: true, placeholderDoc: '№ 2-1234/2026' }),
      F('ruling_date', 'Дата решения', 'Decision date', 'date', { half: true }),
      F('ruling_brief', 'Существо решения', 'Decision summary', 'textarea', { placeholderDoc: 'решением суда отказано в удовлетворении иска о возмещении ущерба от залива квартиры' }),
      F('appeal_grounds', 'Основания незаконности решения', 'Grounds for reversal', 'textarea', { placeholderDoc: 'суд не дал оценки акту о заливе и отчёту об оценке; выводы суда не соответствуют обстоятельствам дела (ч. 1 ст. 330 ГПК РФ)' }),
      F('demand', 'Требуете', 'Demand', 'select', { options: ['Отменить решение полностью и принять новое решение, удовлетворив исковые требования', 'Отменить решение полностью и прекратить производство по делу', 'Отменить решение в части и изменить его'] }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{appeal_court}}', 'через {{court_name}}', '', 'Заявитель жалобы: {{appellant_name}}', 'Адрес: {{appellant_address}}', 'Тел.: {{appellant_phone}}'] },
      { type: 'title', text: 'АПЕЛЛЯЦИОННАЯ ЖАЛОБА' },
      { type: 'subtitle', text: 'на решение суда по гражданскому делу' },
      { type: 'paragraph', text: '{{ruling_date}} {{court_name}} вынесено решение по делу № {{case_no}}: {{ruling_brief}}. Решение в законную силу не вступило.', justify: true },
      { type: 'paragraph', text: 'Считаю решение незаконным и необоснованным: {{appeal_grounds}}.', justify: true },
      { type: 'paragraph', text: 'На основании статей 320–322 Гражданского процессуального кодекса РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        '{{demand}} по делу № {{case_no}}.',
      ] },
      { type: 'paragraph', text: 'Жалоба подаётся через суд, принявший решение, в течение одного месяца со дня принятия решения в окончательной форме (ст. 321 ГПК РФ). Госпошлина — ст. 333.19 Налогового кодекса РФ; истцы по искам о защите прав потребителей освобождены от её уплаты (ст. 333.36 НК РФ).', noIndent: true },
      { type: 'attachment', items: [
        'Документ об уплате государственной пошлины;',
        'Доказательства в обоснование доводов жалобы (при наличии);',
        'Копии жалобы по числу лиц, участвующих в деле.',
      ] },
      stdSign('{{appellant_name}}'),
    ],
  },
  {
    slug: 'ru-lawsuit-admin-challenge', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Административное исковое заявление об оспаривании решения госоргана',
    titleEn: 'Administrative claim challenging a public authority decision',
    descRu: 'Оспаривание решений, действий (бездействия) государственных органов — например, отказа СФР в назначении пенсии или пособия, отказа в согласовании. Срок обращения — три месяца (ст. 219 КАС РФ).',
    descEn: 'Challenging decisions, acts or omissions of public authorities (e.g., a pension office refusal). Three-month filing period (Art. 219 of the Administrative Procedure Code).',
    refRu: 'ст. 218–219, 219.1 КАС РФ; ст. 333.21 НК РФ',
    refEn: 'Art. 218-219, 219.1 of the Code of Administrative Procedure; Art. 333.21 of the Tax Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'Ленинский районный суд города Москвы', hintRu: 'по месту жительства административного истца или по месту нахождения органа (ч. 3 ст. 24 КАС РФ)' }),
      F('admin_plaintiff_name', 'Административный истец — ваши ФИО', 'Administrative plaintiff', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('admin_plaintiff_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('admin_plaintiff_address', 'Адрес административного истца', 'Address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('respondent_name', 'Административный ответчик (орган)', 'Respondent authority', 'text', { half: true, placeholderDoc: 'Отделение Фонда пенсионного и социального страхования РФ по г. Москве' }),
      F('respondent_address', 'Адрес органа', 'Authority address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Станиславского, д. 10' }),
      F('decision_brief', 'Обжалуемое решение (что оспариваете)', 'Challenged decision', 'textarea', { placeholderDoc: 'решение об отказе в назначении страховой пенсии по старости № 1234-П от 05.11.2026' }),
      F('decision_date', 'Дата решения (уведомления)', 'Decision date', 'date', { half: true }),
      F('grounds', 'Основания незаконности', 'Grounds of unlawfulness', 'textarea', { placeholderDoc: 'страховой стаж подтверждён трудовой книжкой и справками работодателя; выводы органа о недостоверности сведений противоречат материалам дела' }),
      F('demand', 'Требуете', 'Demand', 'select', { options: ['Признать решение незаконным и возложить обязанность устранить нарушение путём принятия нового решения по существу', 'Признать бездействие незаконным и возложить обязанность принять решение по существу'] }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Административный истец: {{admin_plaintiff_name}}', 'Адрес: {{admin_plaintiff_address}}', 'Тел.: {{admin_plaintiff_phone}}', '', 'Административный ответчик: {{respondent_name}}', 'Адрес: {{respondent_address}}'] },
      { type: 'title', text: 'АДМИНИСТРАТИВНОЕ ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'об оспаривании решения государственного органа' },
      { type: 'paragraph', text: 'Мной обжалуется решение административного ответчика: {{decision_brief}} ({{decision_date}}).', justify: true },
      { type: 'paragraph', text: 'Считаю решение незаконным и нарушающим мои права и законные интересы: {{grounds}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 218–219 Кодекса административного судопроизводства РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Признать незаконным решение административного ответчика от {{decision_date}} ({{decision_brief}}).',
        '{{demand}}.',
      ] },
      { type: 'paragraph', text: 'Срок обращения в суд — три месяца со дня, когда административному истцу стало известно о нарушении его прав (ст. 219 КАС РФ). Госпошлина — ст. 333.21 Налогового кодекса РФ.', noIndent: true },
      { type: 'attachment', items: [
        'Копия обжалуемого решения (уведомления об отказе);',
        'Документы, подтверждающие обстоятельства (трудовая книжка, справки, выписки и др.);',
        'Документ об уплате государственной пошлины;',
        'Копии заявления по числу заинтересованных лиц.',
      ] },
      stdSign('{{admin_plaintiff_name}}'),
    ],
  },
  {
    slug: 'ru-lawsuit-dtp-excess', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление о возмещении ущерба с виновника ДТП сверх страховой выплаты',
    titleEn: 'Lawsuit: excess damages from a road accident at-fault driver',
    descRu: 'Иск к виновнику ДТП, когда страховая выплата по ОСАГО (лимит — 400 000 ₽ за имущество) не покрывает реальный ущерб. Приложите отчёт независимой оценки и документы о выплаченном страховом возмещении.',
    descEn: 'Lawsuit against the at-fault driver when the OSAGO payout (up to RUB 400,000 for property) does not cover the actual damage.',
    refRu: 'ст. 15, 1064, 1072 ГК РФ; ст. 7 ФЗ от 25.04.2002 № 40-ФЗ «Об ОСАГО»; ст. 131–132 ГПК РФ',
    refEn: 'Art. 15, 1064, 1072 of the Civil Code; Art. 7 of Federal Law No. 40-FZ on Compulsory Motor Insurance; Art. 131-132 of the Civil Procedure Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'Ленинский районный суд города Москвы', hintRu: 'мировому судье — при цене иска до 50 000 ₽ (ст. 23 ГПК РФ)' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнов Дмитрий Олегович' }),
      F('plaintiff_phone', 'Телефон истца', 'Plaintiff phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик — виновник ДТП', 'Defendant (at-fault driver)', 'text', { half: true, placeholderDoc: 'Смирнов Иван Петрович' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Гагарина, д. 5, кв. 12' }),
      F('insurer_name', 'Страховщик ответчика', "Defendant's insurer", 'text', { half: true, placeholderDoc: 'ООО «Страховая компания „Гарант“»' }),
      F('dtp_date', 'Дата ДТП', 'Accident date', 'date', { half: true }),
      F('dtp_brief', 'Обстоятельства ДТП', 'Accident circumstances', 'textarea', { placeholderDoc: 'столкновение автомобилей на перекрёстке ул. Пушкина и ул. Гагарина; вина ответчика подтверждена постановлением ГИБДД' }),
      F('damage_amount', 'Размер ущерба, руб.', 'Damage amount, RUB', 'number', { half: true, placeholderDoc: '412000' }),
      F('payout_amount', 'Страховая выплата, руб.', 'Insurance payout, RUB', 'number', { half: true, placeholderDoc: '235000' }),
      F('excess_amount', 'Сумма сверх выплаты, руб.', 'Excess amount, RUB', 'number', { half: true, placeholderDoc: '177000' }),
      F('assessment_cost', 'Расходы на оценку, руб.', 'Appraisal costs, RUB', 'number', { half: true, placeholderDoc: '8000' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{court_name}}', '', 'Истец: {{plaintiff_name}}', 'Адрес: {{plaintiff_address}}', 'Тел.: {{plaintiff_phone}}', '', 'Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}'] },
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о возмещении ущерба, причинённого в результате ДТП, сверх страховой выплаты' },
      { type: 'paragraph', text: '{{dtp_date}} произошло дорожно-транспортное происшествие: {{dtp_brief}}. Гражданская ответственность ответчика была застрахована в {{insurer_name}}.', justify: true },
      { type: 'paragraph', text: 'Размер ущерба, причинённого принадлежащему мне транспортному средству, определён отчётом независимой оценки и составляет {{damage_amount}} рублей. Страховая выплата по ОСАГО составила {{payout_amount}} рублей; страховое покрытие не возместило причинённый ущерб в полном объёме.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 15, 1064, 1072 Гражданского кодекса РФ вред, причинённый имуществу, подлежит возмещению в полном объёме лицом, причинившим вред, в части, превышающей страховое возмещение. На основании статей 131–132 ГПК РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Взыскать с ответчика {{defendant_name}} в мою пользу возмещение ущерба сверх страховой выплаты в размере {{excess_amount}} рублей.',
        'Взыскать с ответчика расходы на независимую оценку в размере {{assessment_cost}} рублей.',
        'Взыскать с ответчика расходы по уплате государственной пошлины.',
      ] },
      { type: 'attachment', items: [
        'Копия протокола (постановления) ГИБДД, схема ДТП;',
        'Отчёт независимой оценки;',
        'Документы о страховой выплате (согласие страховщика, платёжные документы, экспертиза страховщика);',
        'Квитанция об уплате государственной пошлины;',
        'Копии искового заявления по числу лиц, участвующих в деле.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },

  // ── T1 (RU-2026): досудебные претензии ─────────────────────────────────────
  {
    slug: 'ru-claims-tourist', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Претензия туроператору о возврате денег за тур',
    titleEn: 'Pre-court claim to a tour operator for refund',
    descRu: 'Досудебная претензия туроператору о возврате стоимости турпродукта при его ненадлежащем исполнении (перенос рейса, замена отеля, непредоставление оплаченных услуг). Претензия предъявляется в течение 20 дней со дня окончания действия договора (ч. 7 ст. 10 ФЗ-132).',
    descEn: 'Pre-court claim to a tour operator for a refund of a poorly delivered tour package. Must be filed within 20 days after the contract ends (Art. 10 of Federal Law No. 132-FZ).',
    refRu: 'ст. 6, 10 ФЗ от 24.11.1996 № 132-ФЗ «Об основах туристской деятельности»; Закон РФ «О защите прав потребителей» (ст. 10, 28, 29)',
    refEn: 'Art. 6, 10 of Federal Law No. 132-FZ on Tourism; Russian Consumer Protection Law (Art. 10, 28, 29)',
    fields: [
      F('org_name', 'Наименование туроператора', 'Tour operator name', 'text', { half: true, placeholderDoc: 'ООО «Туроператор „Горизонт“»' }),
      F('org_address', 'Адрес туроператора', 'Operator address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Тверская, д. 15' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('contract_no', 'Номер договора', 'Contract number', 'text', { half: true, placeholderDoc: 'Т-1234' }),
      F('contract_date', 'Дата договора', 'Contract date', 'date', { half: true }),
      F('tour_desc', 'Купленный тур', 'Purchased tour', 'textarea', { placeholderDoc: 'тур в Турцию (Анталья) на 2 человек с вылетом 05.06.2026, отель 5*, всё включено, 10 ночей' }),
      F('paid_amount', 'Оплачено, руб.', 'Amount paid, RUB', 'number', { half: true, placeholderDoc: '265000' }),
      F('refund_amount', 'Требуемая сумма возврата, руб.', 'Refund amount, RUB', 'number', { half: true, placeholderDoc: '128000' }),
      F('problem_desc', 'Недостатки услуг', 'Service defects', 'textarea', { placeholderDoc: 'вылет задержан более чем на сутки; гостиница заменена на отель 3* в другом районе без согласования с туристом; не предоставлены оплаченные экскурсии' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{org_name}}', '{{org_address}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ПРЕТЕНЗИЯ' },
      { type: 'subtitle', text: 'о возврате уплаченных по договору денежных средств' },
      { type: 'paragraph', text: '{{contract_date}} между мной и вашей организацией заключён договор о реализации турпродукта № {{contract_no}}: {{tour_desc}}. Стоимость тура оплачена полностью — {{paid_amount}} рублей.', justify: true },
      { type: 'paragraph', text: 'Услуги оказаны с существенными недостатками: {{problem_desc}}. Вины туриста в произошедшем не имеется.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 6, 10 Федерального закона «Об основах туристской деятельности» и Законом РФ «О защите прав потребителей» требую:', justify: true },
      { type: 'list', numbered: true, items: [
        'Вернуть уплаченные по договору денежные средства в размере {{refund_amount}} рублей в течение 10 календарных дней с момента получения претензии (ст. 31 Закона «О защите прав потребителей»);',
        'При неудовлетворении претензии добровольно — уплатить неустойку (3% цены услуг за каждый день просрочки — ст. 28, 30 Закона «О защите прав потребителей»), компенсировать моральный вред и судебные расходы.',
      ] },
      { type: 'paragraph', text: 'Претензия предъявляется в течение 20 дней со дня окончания действия договора о реализации туристского продукта (ч. 7 ст. 10 ФЗ № 132-ФЗ).', noIndent: true },
      { type: 'attachment', items: [
        'Копия договора о реализации турпродукта;',
        'Копия платёжного документа (квитанция, чек);',
        'Документы, подтверждающие недостатки (уведомления перевозчика, фотоматериалы, переписка).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-claims-landlord-deposit', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Претензия арендодателю о возврате залога за квартиру',
    titleEn: 'Claim to a landlord for the return of the rental deposit',
    descRu: 'Претензия о возврате обеспечительного платежа (залога) по договору найма квартиры после выезда и передачи помещения. Является также первым шагом к иску мировому судье (ст. 23 ГПК РФ).',
    descEn: 'Claim for the return of the rental security deposit after moving out; also the first step towards a small-claims court case.',
    refRu: 'ст. 381.1, 622, 671 ГК РФ',
    refEn: 'Art. 381.1, 622, 671 of the Civil Code of the Russian Federation',
    fields: [
      F('landlord_name', 'ФИО арендодателя', 'Landlord full name', 'text', { half: true, placeholderDoc: 'Смирнов Иван Петрович' }),
      F('landlord_address', 'Адрес арендодателя', 'Landlord address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Гагарина, д. 5, кв. 12' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('contract_no', 'Номер договора найма', 'Tenancy contract number', 'text', { half: true, placeholderDoc: 'Н-567' }),
      F('contract_date', 'Дата договора', 'Contract date', 'date', { half: true }),
      F('flat_address', 'Адрес квартиры', 'Apartment address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('deposit_amount', 'Сумма залога, руб.', 'Deposit amount, RUB', 'number', { half: true, placeholderDoc: '60000' }),
      F('leave_date', 'Дата выезда и передачи ключей', 'Move-out date', 'date', { half: true }),
      F('deduction_desc', 'Причина удержания залога арендодателем', 'Reason for retention', 'textarea', { placeholderDoc: 'арендодатель удерживает залог, ссылаясь на «обычный износ» мебели; акт приёма-передачи уклоняется составлять' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{landlord_name}}', '{{landlord_address}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ПРЕТЕНЗИЯ' },
      { type: 'subtitle', text: 'о возврате обеспечительного платежа по договору найма' },
      { type: 'paragraph', text: '{{contract_date}} между мной и вами заключён договор найма жилого помещения № {{contract_no}} (квартира по адресу {{flat_address}}). При заключении договора мной внесён обеспечительный платёж (залог) в размере {{deposit_amount}} рублей.', justify: true },
      { type: 'paragraph', text: '{{leave_date}} я выехал(а) из квартиры и передал(а) ключи. Помещение передано в надлежащем состоянии; акт приёма-передачи по вашей инициативе не составлен. Залог в добровольном порядке не возвращён: {{deduction_desc}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 381.1, 622 Гражданского кодекса РФ обеспечительный платёж подлежит возврату при прекращении обязательства, а имущество должно быть возвращено в том состоянии, в котором получено, с учётом нормального износа. Требую:', justify: true },
      { type: 'list', numbered: true, items: [
        'Вернуть обеспечительный платёж в размере {{deposit_amount}} рублей в течение 10 дней с момента получения претензии;',
        'Составить и подписать акт приёма-передачи жилого помещения.',
      ] },
      { type: 'paragraph', text: 'В случае отказа претензия будет принята к рассмотрению судом, и с вас дополнительно будут взысканы проценты за пользование чужими денежными средствами (ст. 395 ГК РФ) и судебные расходы.', noIndent: true },
      { type: 'attachment', items: [
        'Копия договора найма;',
        'Копия платёжного документа о внесении залога;',
        'Фотоматериалы состояния квартиры на дату выезда (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },

  // ── T1 (RU-2026): жалобы в госорганы ───────────────────────────────────────
  {
    slug: 'ru-gov-roskomnadzor-pd', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в Роскомнадзор на нарушение прав при обработке персональных данных',
    titleEn: 'Complaint to Roskomnadzor over personal data violations',
    descRu: 'Жалоба на оператора персональных данных (сайт, магазин, банк): данные не удаляют по запросу, рассылают спам, произошла утечка. Роскомнадзор — уполномоченный орган контроля за обработкой персональных данных (ст. 22 ФЗ-152).',
    descEn: 'Complaint against a data operator (website, shop, bank): refusal to delete data, spam, data leak. Roskomnadzor is the supervising authority (Art. 22 of Federal Law No. 152-FZ).',
    refRu: 'ст. 17, 22 ФЗ от 27.07.2006 № 152-ФЗ «О персональных данных»; ФЗ от 02.05.2006 № 59-ФЗ',
    refEn: 'Art. 17, 22 of Federal Law No. 152-FZ on Personal Data; Federal Law No. 59-FZ on Citizens’ Appeals',
    fields: [
      F('rkn_office', 'Куда подаётся жалоба', 'Addressee', 'text', { placeholderDoc: 'Управление Роскомнадзора по г. Москве' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('operator_name', 'Оператор персональных данных', 'Data operator', 'text', { half: true, placeholderDoc: 'ООО «Онлайн-сервис „Комета“»' }),
      F('operator_desc', 'Как связан оператор (сайт, адрес, контакты)', 'Operator contacts', 'text', { placeholderDoc: 'сайт comet.example, поддержка support@comet.example' }),
      F('violation_desc', 'В чём нарушение', 'Violation described', 'textarea', { placeholderDoc: 'моя просьба удалить аккаунт и персональные данные (обращение от 01.10.2026) оставлена без ответа; данные используются для рассылки рекламы без согласия' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{rkn_office}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЖАЛОБА' },
      { type: 'subtitle', text: 'на нарушение прав субъекта персональных данных' },
      { type: 'paragraph', text: 'Я являюсь субъектом персональных данных, обрабатываемых оператором {{operator_name}} ({{operator_desc}}).', justify: true },
      { type: 'paragraph', text: 'Оператором допущено нарушение моих прав: {{violation_desc}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 17, 22 Федерального закона «О персональных данных» и Федеральным законом «О порядке рассмотрения обращений граждан» прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Провести контрольное (надзорное) мероприятие в отношении {{operator_name}};',
        'Выдать оператору предписание об устранении нарушений (в том числе об удалении персональных данных);',
        'Рассмотреть вопрос о привлечении виновных лиц к административной ответственности (ст. 13.11 КоАП РФ);',
        'Сообщить мне о результатах рассмотрения жалобы в установленный срок.',
      ] },
      { type: 'attachment', items: [
        'Копия обращения оператору и ответ на него (при наличии);',
        'Скриншоты и иные материалы, подтверждающие нарушение (переписка, рассылки).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-gov-bailiff', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба старшему судебному приставу на бездействие пристава-исполнителя',
    titleEn: 'Complaint to a senior bailiff about an enforcement officer’s inaction',
    descRu: 'Жалоба в порядке подчинённости на бездействие судебного пристава-исполнителя по исполнительному производству (запросы не делаются, взыскание не производится). Срок подачи — 10 дней со дня установления бездействия (ст. 122 ФЗ-229); жалоба рассматривается в течение 10 дней (ст. 126).',
    descEn: 'Subordination complaint against an enforcement officer’s inaction. Ten-day filing period (Art. 122 of Federal Law No. 229-FZ).',
    refRu: 'ст. 64.1, 121–123, 126, 127 ФЗ от 02.10.2007 № 229-ФЗ «Об исполнительном производстве»',
    refEn: 'Art. 64.1, 121-123, 126, 127 of Federal Law No. 229-FZ on Enforcement Proceedings',
    fields: [
      F('department_name', 'Отдел судебных приставов', 'Bailiff office', 'text', { placeholderDoc: 'ОСП Ленинского района г. Москвы' }),
      F('applicant_name', 'Взыскатель — ваши ФИО', 'Claimant full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('enforcement_no', 'Номер исполнительного производства', 'Enforcement case number', 'text', { half: true, placeholderDoc: '№ 12345/26/77/ИП от 15.09.2026' }),
      F('bailiff_name', 'ФИО пристава-исполнителя', 'Officer name', 'text', { half: true, placeholderDoc: 'Петрова Анна Алексеевна' }),
      F('inaction_desc', 'В чём выражается бездействие', 'Inaction described', 'textarea', { placeholderDoc: 'с даты возбуждения производства не направлены запросы в банки и Росреестр, меры принудительного взыскания не принимаются, на приём не записывают' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Старшему судебному приставу {{department_name}}', '', 'взыскателя {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЖАЛОБА' },
      { type: 'subtitle', text: 'на бездействие судебного пристава-исполнителя' },
      { type: 'paragraph', text: 'На исполнении в {{department_name}} находится исполнительное производство {{enforcement_no}}: взыскание с должника в мою пользу.', justify: true },
      { type: 'paragraph', text: 'По вине пристава-исполнителя {{bailiff_name}} по исполнительному производству не совершаются исполнительные действия: {{inaction_desc}}. Взыскание фактически не производится.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 64.1, 121–123, 126, 127 Федерального закона «Об исполнительном производстве» прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Признать бездействие судебного пристава-исполнителя {{bailiff_name}} незаконным;',
        'Возложить обязанность совершить исполнительные действия: направить запросы в банки и государственные органы, принять меры принудительного взыскания (арест и обращение взыскания на имущество должника);',
        'Сообщить мне о результатах рассмотрения жалобы.',
      ] },
      { type: 'paragraph', text: 'Жалоба подаётся в течение десяти дней со дня установления бездействия (ст. 122 ФЗ № 229-ФЗ) и рассматривается в течение десяти дней (ст. 126). Отказ в рассмотрении может быть обжалован в суд в порядке главы 22 КАС РФ.', noIndent: true },
      { type: 'attachment', items: [
        'Копия постановления о возбуждении исполнительного производства;',
        'Копия исполнительного документа (при наличии);',
        'Переписка с приставом-исполнителем (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },

  // ── T1 (RU-2026): медицина — услуги и документы ────────────────────────────
  {
    slug: 'ru-med-paid-services', kind: 'STANDARD', categorySlug: 'med-services',
    titleRu: 'Заявление об оказании платных медицинских услуг в государственной больнице',
    titleEn: 'Application for paid medical services at a public hospital',
    descRu: 'Заявление на имя руководителя государственной (муниципальной) медицинской организации об оказании платных медицинских услуг. Платные услуги в госучреждении оказываются по договору с прейскурантом (ст. 80 ФЗ-323, Правила № 1692); пациент вправе выбрать врача.',
    descEn: 'Application to the head of a public medical organization for paid services, concluded by contract with a published price list (Art. 80 of Federal Law No. 323-FZ).',
    refRu: 'ст. 80 ФЗ от 21.11.2011 № 323-ФЗ; Правила предоставления медицинскими организациями платных медицинских услуг (постановление Правительства РФ от 11.10.2023 № 1692)',
    refEn: 'Art. 80 of Federal Law No. 323-FZ; Rules on paid medical services (Government Decree No. 1692 of 11.10.2023)',
    fields: [
      F('head_position', 'Должность руководителя', 'Head position', 'text', { half: true, placeholderDoc: 'Главному врачу' }),
      F('org_name', 'Наименование больницы', 'Hospital name', 'text', { half: true, placeholderDoc: 'ГБУЗ «Городская больница № 3»' }),
      F('head_name', 'ФИО руководителя', 'Head full name', 'text', { half: true, placeholderDoc: 'Петровой Елене Сергеевне', hintRu: 'в дательном падеже' }),
      F('org_address', 'Адрес больницы', 'Hospital address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Строителей, д. 8' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес заявителя', 'Address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('service_type', 'Просимые медицинские услуги', 'Requested services', 'textarea', { placeholderDoc: 'консультация врача-офтальмолога, диагностика зрения, подбор очков' }),
      F('payment_form', 'Способ оплаты', 'Payment method', 'select', { options: ['банковской картой', 'наличными средствами', 'переводом на расчётный счёт'] }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{head_position}}', '{{org_name}}', '{{head_name}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'об оказании платных медицинских услуг' },
      { type: 'paragraph', text: 'Прошу оказать мне на платной основе следующие медицинские услуги: {{service_type}}.', justify: true },
      { type: 'paragraph', text: 'Оплату гарантирую в порядке, установленном договором о предоставлении платных медицинских услуг ({{payment_form}}). От услуг в рамках программы государственных гарантий бесплатной медицинской помощи не отказываюсь.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьёй 80 Федерального закона «Об основах охраны здоровья граждан в РФ» и Правилами предоставления медицинскими организациями платных медицинских услуг (постановление Правительства РФ от 11.10.2023 № 1692) прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Заключить со мной договор о предоставлении платных медицинских услуг;',
        'Ознакомить меня с перечнем и прейскурантом платных услуг, лицензией и сведениями о медицинских работниках;',
        'Обеспечить реализацию моего права на выбор врача (ч. 2 ст. 19 ФЗ № 323-ФЗ).',
      ] },
      { type: 'paragraph', text: 'Платные медицинские услуги не должны оказываться взамен услуг, гарантированных программой государственных гарантий бесплатного оказания гражданам медицинской помощи.', noIndent: true },
      { type: 'attachment', items: [
        'Копия паспорта заявителя;',
        'Копия полиса ОМС (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-med-refusal', kind: 'STANDARD', categorySlug: 'med-services',
    titleRu: 'Заявление об отказе от медицинского вмешательства',
    titleEn: 'Refusal of medical intervention',
    descRu: 'Письменный отказ от медицинского вмешательства — право гражданина (ст. 20 ФЗ-323). За ребёнка до 15 лет отказ оформляет законный представитель. Заявление подписывается в присутствии медицинского работника после разъяснения последствий отказа.',
    descEn: 'Written refusal of medical intervention — a statutory patient right (Art. 20 of Federal Law No. 323-FZ); for a child under 15 it is signed by a legal representative.',
    refRu: 'ч. 3–5 ст. 20 ФЗ от 21.11.2011 № 323-ФЗ «Об основах охраны здоровья граждан в РФ»',
    refEn: 'p. 3-5 Art. 20 of Federal Law No. 323-FZ on Citizens’ Health Protection',
    fields: [
      F('org_name', 'Наименование медицинской организации', 'Medical organization', 'text', { half: true, placeholderDoc: 'ГБУЗ «Городская поликлиника № 7»' }),
      F('org_address', 'Адрес организации', 'Organization address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Строителей, д. 8' }),
      F('applicant_name', 'ФИО заявителя (пациента или законного представителя)', 'Applicant full name', 'text', { placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес заявителя', 'Applicant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('patient_name', 'Пациент — ФИО', 'Patient full name', 'text', { half: true, placeholderDoc: 'Смирнов Дмитрий Иванович', hintRu: 'если отказ даётся за себя — укажите свои ФИО' }),
      F('patient_birth', 'Дата рождения пациента', 'Patient birth date', 'date', { half: true }),
      F('intervention_desc', 'От какого вмешательства отказываетесь', 'Intervention refused', 'textarea', { placeholderDoc: 'вакцинация против гриппа; плановая хирургическая операция (согласно направлению от 05.10.2026)' }),
      F('refusal_grounds', 'Основание отказа (при желании)', 'Grounds (optional)', 'textarea', { required: false, placeholderDoc: 'принято самостоятельное решение после консультации с лечащим врачом' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{org_name}}', '{{org_address}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'об отказе от медицинского вмешательства' },
      { type: 'paragraph', text: 'Я, {{applicant_name}}, {{refusal_grounds}}, отказываюсь от медицинского вмешательства в отношении {{patient_name}} ({{patient_birth}} года рождения): {{intervention_desc}}.', justify: true },
      { type: 'paragraph', text: 'В доступной форме мне разъяснены возможные последствия отказа от медицинского вмешательства (ч. 4 ст. 20 Федерального закона от 21.11.2011 № 323-ФЗ). Ответственность за возможные последствия отказа принимаю на себя (в отношении подопечного — принимаю на себя как законный представитель).', justify: true },
      { type: 'paragraph', text: 'Обращаю внимание: отказ не влечёт отказа от иной медицинской помощи, кроме указанной выше; экстренная медицинская помощь оказывается в любом случае (ч. 2 ст. 11 ФЗ № 323-ФЗ).', noIndent: true },
      { type: 'attachment', items: [
        'Копия документа, удостоверяющего личность;',
        'Копия документа, подтверждающего полномочия законного представителя (для несовершеннолетнего / недееспособного).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-med-attach', kind: 'STANDARD', categorySlug: 'med-services',
    titleRu: 'Заявление о прикреплении к поликлинике',
    titleEn: 'Application to register with a clinic',
    descRu: 'Заявление о выборе медицинской организации (прикреплении к поликлинике) для получения помощи по ОМС. Право выбора предоставляется один раз в год, кроме случая смены места жительства (ч. 2 ст. 21 ФЗ-323).',
    descEn: 'Application to choose a medical organization under the compulsory insurance system; the choice can be made once a year (Art. 21 of Federal Law No. 323-FZ).',
    refRu: 'ст. 21 ФЗ от 21.11.2011 № 323-ФЗ; ФЗ от 29.11.2010 № 326-ФЗ «Об обязательном медицинском страховании»',
    refEn: 'Art. 21 of Federal Law No. 323-FZ; Federal Law No. 326-FZ on Compulsory Medical Insurance',
    fields: [
      F('chief_position', 'Должность руководителя', 'Head position', 'text', { half: true, placeholderDoc: 'Главному врачу' }),
      F('poliklinika_name', 'Наименование поликлиники', 'Clinic name', 'text', { half: true, placeholderDoc: 'ГБУЗ «Городская поликлиника № 7»' }),
      F('chief_name', 'ФИО руководителя', 'Head full name', 'text', { half: true, placeholderDoc: 'Петровой Елене Сергеевне', hintRu: 'в дательном падеже' }),
      F('org_address', 'Адрес поликлиники', 'Clinic address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Строителей, д. 8' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес регистрации (места жительства)', 'Registration address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('birth_date', 'Дата рождения', 'Birth date', 'date', { half: true }),
      F('policy_no', 'Полис ОМС', 'OMS policy number', 'text', { half: true, placeholderDoc: 'полис ОМС № 5412 0000 0000 0000' }),
      F('attached_before', 'Прежняя поликлиника (если прикреплены)', 'Previous clinic', 'text', { half: true, placeholderDoc: 'ГБУЗ «Городская поликлиника № 2»' }),
      F('reason', 'Основание выбора', 'Reason', 'select', { options: ['переезд на новое место жительства', 'выбор поликлиники по месту работы (учёбы)', 'выбор по иным основаниям'] }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{chief_position}}', '{{poliklinika_name}}', '{{chief_name}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о выборе медицинской организации (прикреплении к поликлинике)' },
      { type: 'paragraph', text: 'Прошу прикрепить меня к {{poliklinika_name}} для получения первичной медико-санитарной помощи по полису ОМС: {{policy_no}}.', justify: true },
      { type: 'paragraph', text: 'Основание выбора: {{reason}}. Ранее медицинская помощь по ОМС получалась в {{attached_before}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьёй 21 Федерального закона «Об основах охраны здоровья граждан в РФ» прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Прикрепить меня к {{poliklinika_name}} для получения первичной медико-санитарной помощи;',
        'Сообщить мне о принятом решении в установленный срок.',
      ] },
      { type: 'paragraph', text: 'Право выбора медицинской организации предоставляется один раз в год, кроме случая смены места жительства (ч. 2 ст. 21 ФЗ № 323-ФЗ). Прикрепить можно также через Госуслуги или МФЦ.', noIndent: true },
      { type: 'attachment', items: [
        'Копия полиса ОМС;',
        'Копия паспорта;',
        'СНИЛС (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-med-records-copy', kind: 'STANDARD', categorySlug: 'med-records',
    titleRu: 'Заявление о выдаче копий медицинских документов и медкарты',
    titleEn: 'Request for copies of medical records',
    descRu: 'Письменный запрос копий медицинских документов, выписок и медицинской карты на руки — для себя, лечащего врача другой клиники, суда, соцзащиты. Срок выдачи — не более 30 календарных дней с даты регистрации запроса (ч. 5 ст. 22 ФЗ-323).',
    descEn: 'Written request for copies of medical documents and the medical record; issued within 30 calendar days (Art. 22 of Federal Law No. 323-FZ).',
    refRu: 'ч. 4, 5 ст. 22 ФЗ от 21.11.2011 № 323-ФЗ; приказ Минздравсоцразвития России от 02.05.2012 № 441н',
    refEn: 'p. 4, 5 Art. 22 of Federal Law No. 323-FZ; Order of the Ministry of Health No. 441n of 02.05.2012',
    fields: [
      F('chief_position', 'Должность руководителя', 'Head position', 'text', { half: true, placeholderDoc: 'Главному врачу' }),
      F('org_name', 'Наименование медицинской организации', 'Medical organization', 'text', { half: true, placeholderDoc: 'ГБУЗ «Городская поликлиника № 7»' }),
      F('chief_name', 'ФИО руководителя', 'Head full name', 'text', { half: true, placeholderDoc: 'Петровой Елене Сергеевне', hintRu: 'в дательном падеже' }),
      F('org_address', 'Адрес организации', 'Organization address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Строителей, д. 8' }),
      F('applicant_name', 'Ваши ФИО (пациента/представителя)', 'Applicant full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('patient_name', 'Пациент — ФИО', 'Patient full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна', hintRu: 'если документы нужны за ребёнка — укажите его ФИО' }),
      F('patient_birth', 'Дата рождения пациента', 'Patient birth date', 'date', { half: true }),
      F('visit_period', 'Период обращений', 'Visits period', 'text', { half: true, placeholderDoc: 'период обращения: 01.03.2026 — 30.06.2026' }),
      F('doc_type', 'Какие документы нужны', 'Documents requested', 'select', { options: ['выписка из медицинской карты', 'копия медицинской карты', 'результаты анализов и обследований', 'заключение врачебной комиссии', 'все перечисленные документы'] }),
      F('purpose', 'Цель получения', 'Purpose', 'select', { options: ['для личного пользования', 'для передачи лечащему врачу другой медицинской организации', 'для предоставления в суд (органы соцзащиты, страховую организацию)'] }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{chief_position}}', '{{org_name}}', '{{chief_name}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о выдаче копий медицинских документов' },
      { type: 'paragraph', text: 'Я, {{applicant_name}}, обращался(лась) за медицинской помощью в {{org_name}} (пациент: {{patient_name}}, {{patient_birth}} года рождения) в период: {{visit_period}}.', justify: true },
      { type: 'paragraph', text: 'На основании части 4 статьи 22 Федерального закона «Об основах охраны здоровья граждан в РФ» пациент имеет право получать отражающие состояние здоровья медицинские документы (их копии) и медицинскую карту. Прошу выдать: {{doc_type}} за период {{visit_period}}.', justify: true },
      { type: 'paragraph', text: 'Цель получения: {{purpose}}. Форма выдачи — копии на бумажном носителе (заверенные в установленном порядке); допускается выдача в электронном виде.', justify: true },
      { type: 'paragraph', text: 'Срок выдачи — не позднее 30 календарных дней с даты регистрации запроса (ч. 5 ст. 22 ФЗ № 323-ФЗ). Отказ в выдаче может быть обжалован главному врачу, в страховую медицинскую организацию или Росздравнадзор.', noIndent: true },
      { type: 'attachment', items: [
        'Копия паспорта заявителя;',
        'Копия документа, подтверждающего представительство (для представителя пациента);',
        'Копия полиса ОМС (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-med-roszdravnadzor', kind: 'STANDARD', categorySlug: 'med-appeals',
    titleRu: 'Жалоба в Росздравнадзор на медицинскую организацию',
    titleEn: 'Complaint to Roszdravnadzor against a clinic',
    descRu: 'Жалоба в территориальный орган Росздравнадзора на нарушение прав пациента: отказ в помощи, навязывание платных услуг взамен бесплатных, нарушение порядка оказания помощи, качество медпомощи.',
    descEn: 'Complaint to the territorial Roszdravnadzor office over patient-rights violations: refusal of care, forced paid services, improper care quality.',
    refRu: 'ст. 19, 87 ФЗ от 21.11.2011 № 323-ФЗ; ФЗ от 02.05.2006 № 59-ФЗ',
    refEn: 'Art. 19, 87 of Federal Law No. 323-FZ; Federal Law No. 59-FZ on Citizens’ Appeals',
    fields: [
      F('rzn_office', 'Куда подаётся жалоба', 'Addressee', 'text', { placeholderDoc: 'Территориальный орган Росздравнадзора по г. Москве' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('clinic_name', 'Наименование клиники', 'Clinic name', 'text', { half: true, placeholderDoc: 'ООО «Клиника „Медлайн“»' }),
      F('clinic_address', 'Адрес клиники', 'Clinic address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Тверская, д. 15' }),
      F('incident_desc', 'Что произошло', 'What happened', 'textarea', { placeholderDoc: '05.10.2026 в приёмном отделении мне отказали в госпитализации при острых болях, предложив «обратиться в другую больницу»; обязали оплатить консультацию, входящую в программу госгарантий' }),
      F('previous_step', 'Обращения к клинике (при наличии)', 'Prior complaints', 'text', { placeholderDoc: 'жалоба главному врачу от 08.10.2026 — оставлена без ответа' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['В {{rzn_office}}', '', 'от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}'] },
      { type: 'title', text: 'ЖАЛОБА' },
      { type: 'subtitle', text: 'на нарушение прав пациента медицинской организацией' },
      { type: 'paragraph', text: 'Медицинской организацией {{clinic_name}} ({{clinic_address}}) допущены нарушения при оказании мне медицинской помощи: {{incident_desc}}.', justify: true },
      { type: 'paragraph', text: 'Досудебное обращение: {{previous_step}}.', justify: true },
      { type: 'paragraph', text: 'Медицинская помощь, гарантированная программой госгарантий, должна оказываться бесплатно; навязывание платных услуг взамен бесплатных и отказ в экстренной помощи запрещены (ст. 11, 19, 80 ФЗ № 323-ФЗ). В соответствии со статьями 19, 87 ФЗ № 323-ФЗ и ФЗ «О порядке рассмотрения обращений граждан» прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Провести контрольное (надзорное) мероприятие в отношении {{clinic_name}};',
        'Оценить соблюдение порядка оказания медицинской помощи и прав пациента;',
        'Выдать предписание об устранении нарушений;',
        'Сообщить мне о результатах рассмотрения жалобы в установленный срок.',
      ] },
      { type: 'attachment', items: [
        'Копия жалобы главному врачу и ответ на неё (при наличии);',
        'Копии медицинских документов (выписки, назначения, чеки об оплате);',
        'Фотоматериалы и иные доказательства (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },

  // ── T-a (RU-2026): иски — зарплата, моральный вред, ущерб от преступления, ОСАГО ──
  {
    slug: 'ru-lawsuit-salary', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление о взыскании заработной платы и компенсации за задержку',
    titleEn: 'Lawsuit: recovery of unpaid wages and delay compensation',
    descRu: 'Иск работника, когда требование о выплате зарплаты носит спорный характер (например, после отмены судебного приказа). Подаётся мировому судье по месту жительства ответчика или истца (ч. 6.3 ст. 29 ГПК РФ); работники освобождены от судебных расходов (ст. 393 ТК РФ), срок обращения — один год (ст. 392 ТК РФ). Взысканию подлежат сама зарплата, компенсация за задержку — не ниже 1/150 ключевой ставки ЦБ за каждый день просрочки (ст. 236 ТК РФ) — и моральный вред.',
    descEn: 'Employee lawsuit when the wage claim is disputed (e.g., after a court order was set aside). Filed with a justice of the peace at the defendant’s or plaintiff’s residence; employees are exempt from court costs and have one year to file. Recovers wages, delay compensation of at least 1/150 of the CBR key rate per day and moral damages.',
    refRu: 'ст. 136, 236, 237, 392–393 ТК РФ; ст. 23, 29, 131–132 ГПК РФ',
    refEn: 'Art. 136, 236, 237, 392-393 of the Labour Code; Art. 23, 29, 131-132 of the Civil Procedure Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'судебный участок № 5 Ленинского судебного района г. Москвы', hintRu: 'мировому судье — дела из трудовых отношений (ст. 23 ГПК РФ); можно по месту жительства истца (ч. 6.3 ст. 29 ГПК РФ)' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик — работодатель', 'Defendant (employer)', 'text', { half: true, placeholderDoc: 'ООО «Ромашка»' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('position', 'Ваша должность', 'Your position', 'text', { half: true, placeholderDoc: 'менеджера отдела продаж', hintRu: 'в родительном падеже' }),
      F('salary_period', 'Период задолженности', 'Debt period', 'text', { half: true, placeholderDoc: 'с 01.01.2026 по 31.03.2026' }),
      F('salary_amount', 'Сумма невыплаченной зарплаты, руб.', 'Unpaid wages, RUB', 'number', { half: true, placeholderDoc: '120000' }),
      F('delay_amount', 'Компенсация за задержку, руб.', 'Delay compensation, RUB', 'number', { half: true, placeholderDoc: '9200', hintRu: 'расчёт по ст. 236 ТК РФ: долг × 1/150 ключевой ставки ЦБ × число дней просрочки' }),
      F('moral_amount', 'Моральный вред, руб.', 'Moral damages, RUB', 'number', { half: true, placeholderDoc: '30000' }),
    ],
    body: [
      courtHdr(['Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}']),
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о взыскании заработной платы и компенсации за задержку выплаты' },
      { type: 'paragraph', text: 'Я состою в трудовых отношениях с ответчиком в должности {{position}}. За период {{salary_period}} ответчиком не выплачена заработная плата в размере {{salary_amount}} рублей, что подтверждается расчётными листками и справкой работодателя.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьёй 136 ТК РФ заработная плата выплачивается не реже чем каждые полмесяца. При нарушении срока выплаты работодатель обязан выплатить её с уплатой процентов (денежной компенсации) в размере не ниже одной сто пятидесятой действующей ключевой ставки Центрального банка РФ от не выплаченных в срок сумм за каждый день задержки (статья 236 ТК РФ). Компенсация за задержку составляет {{delay_amount}} рублей.', justify: true },
      { type: 'paragraph', text: 'Невыплатой заработной платы ответчиком нарушены мои трудовые права и причинён моральный вред, который оцениваю в {{moral_amount}} рублей (статья 237 ТК РФ).', justify: true },
      { type: 'paragraph', text: 'На основании статей 236–237, 391 ТК РФ, статей 131–132 ГПК РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Взыскать с ответчика {{defendant_name}} в мою пользу невыплаченную заработную плату за период {{salary_period}} в размере {{salary_amount}} рублей.',
        'Взыскать компенсацию за задержку выплаты заработной платы в размере {{delay_amount}} рублей, а по день фактической выплаты — проценты, начисляемые в порядке статьи 236 ТК РФ.',
        'Взыскать компенсацию морального вреда в размере {{moral_amount}} рублей.',
      ] },
      { type: 'paragraph', text: 'Работники освобождаются от оплаты пошлин и судебных расходов по искам, вытекающим из трудовых отношений (ст. 393 ТК РФ). Срок обращения в суд по спорам о невыплате заработной платы — один год со дня установленного срока выплаты (ст. 392 ТК РФ).', noIndent: true },
      { type: 'attachment', items: [
        'Копия трудового договора (при наличии);',
        'Расчётные листки, справка работодателя о задолженности (при наличии);',
        'Расчёт компенсации за задержку по статье 236 ТК РФ;',
        'Копии искового заявления по числу лиц, участвующих в деле.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'ru-lawsuit-moral-damage', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление о компенсации морального вреда',
    titleEn: 'Lawsuit: compensation for moral harm',
    descRu: 'Иск о денежной компенсации нравственных и физических страданий, причинённых противоправными действиями (бездействием) ответчика: оскорбление, распространение порочащих недостоверных сведений, некачественная услуга, нарушение прав потребителя. Подаётся в районный суд по месту жительства ответчика (ст. 24, 28 ГПК РФ); госпошлина — как за неимущественное требование (ст. 333.19 НК РФ). Размер компенсации определяет суд исходя из требований разумности и справедливости (ст. 1101 ГК РФ).',
    descEn: 'Lawsuit for monetary compensation of moral harm caused by the defendant’s unlawful actions (insult, defamation, poor-quality service, consumer-rights violation). Filed with the district court at the defendant’s residence; the court sets the amount based on reasonableness and fairness.',
    refRu: 'ст. 151, 1099–1101 ГК РФ; постановление Пленума ВС РФ от 15.11.2022 № 33; ст. 24, 28 ГПК РФ',
    refEn: 'Art. 151, 1099-1101 of the Civil Code; Plenum of the Supreme Court Resolution No. 33 of 15.11.2022; Art. 24, 28 of the Civil Procedure Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'Ленинский районный суд города Москвы', hintRu: 'районный суд по месту жительства ответчика (ст. 24, 28 ГПК РФ)' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик — ФИО или организация', 'Defendant full name', 'text', { half: true, placeholderDoc: 'Иванов Иван Иванович' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Гагарина, д. 5, кв. 12' }),
      F('incident_date', 'Дата противоправного действия', 'Incident date', 'date', { half: true }),
      F('incident_desc', 'В чём выразились противоправные действия (бездействие)', 'Unlawful conduct description', 'textarea', { placeholderDoc: 'в присутствии свидетелей ответчик публично высказал в мой адрес унижающие честь и достоинство выражения' }),
      F('consequences', 'Нравственные и физические страдания', 'Suffering description', 'textarea', { placeholderDoc: 'переживания, нарушение сна, ощущение унижения; обращалась за медицинской и психологической помощью' }),
      F('moral_amount', 'Сумма компенсации, руб.', 'Compensation amount, RUB', 'number', { half: true, placeholderDoc: '50000' }),
    ],
    body: [
      courtHdr(['Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}']),
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о компенсации морального вреда' },
      { type: 'paragraph', text: '{{incident_date}} ответчиком совершены противоправные действия (бездействие): {{incident_desc}}.', justify: true },
      { type: 'paragraph', text: 'Указанными действиями мне причинены нравственные и физические страдания: {{consequences}}. Размер компенсации морального вреда оцениваю в {{moral_amount}} рублей.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьёй 151 ГК РФ, если гражданину причинён моральный вред (физические или нравственные страдания) действиями, нарушающими его личные неимущественные права либо посягающими на принадлежащие гражданину нематериальные блага, суд может возложить на нарушителя обязанность денежной компенсации указанного вреда. Размер компенсации определяется судом с учётом требований разумности и справедливости (статья 1101 ГК РФ).', justify: true },
      { type: 'paragraph', text: 'На основании статей 151, 1099–1101 ГК РФ, статей 131–132 ГПК РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Взыскать с ответчика {{defendant_name}} в мою пользу компенсацию морального вреда в размере {{moral_amount}} рублей.',
        'Взыскать с ответчика расходы по уплате государственной пошлины.',
      ] },
      { type: 'paragraph', text: 'Компенсация морального вреда осуществляется независимо от подлежащего возмещению имущественного вреда (ст. 151 ГК РФ).', noIndent: true },
      { type: 'attachment', items: [
        'Доказательства противоправных действий (скриншоты, письменные доказательства, список свидетелей);',
        'Доказательства причинённых страданий (медицинские документы, заключение специалиста — при наличии);',
        'Квитанция об уплате государственной пошлины;',
        'Копии искового заявления по числу лиц, участвующих в деле.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'ru-lawsuit-crime-damage', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление о возмещении ущерба, причинённого преступлением',
    titleEn: 'Lawsuit: damages caused by a crime',
    descRu: 'Иск к лицу, причинившему имущественный ущерб преступлением (кража, мошенничество, умышленное повреждение имущества), если гражданский иск не был заявлен в уголовном деле (ст. 44 УПК РФ). Вступивший в силу приговор освобождает от доказывания факта преступления (ч. 4 ст. 61 ГПК РФ). Подаётся по месту жительства ответчика; госпошлина — от цены иска (ст. 333.19 НК РФ).',
    descEn: 'Civil claim against a person whose crime caused property damage (theft, fraud, deliberate property damage), when the claim was not filed within the criminal case. The verdict precludes re-proving the crime; the state fee follows Art. 333.19 of the Tax Code.',
    refRu: 'ст. 15, 1064, 1082 ГК РФ; ст. 44 УПК РФ; ч. 4 ст. 61 ГПК РФ',
    refEn: 'Art. 15, 1064, 1082 of the Civil Code; Art. 44 of the Criminal Procedure Code; p. 4 Art. 61 of the Civil Procedure Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'Ленинский районный суд города Москвы', hintRu: 'мировому судье — при цене иска до 50 000 ₽ (ст. 23 ГПК РФ), иначе районный суд (ст. 24 ГПК РФ); по месту жительства ответчика (ст. 28 ГПК РФ)' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик — ФИО причинителя вреда', 'Defendant full name', 'text', { half: true, placeholderDoc: 'Иванов Иван Иванович' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Гагарина, д. 5, кв. 12' }),
      F('crime_brief', 'Обстоятельства преступления', 'Crime circumstances', 'textarea', { placeholderDoc: '14.02.2026 ответчик тайно похитил принадлежащий мне велосипед из подъезда дома № 5 по ул. Гагарина' }),
      F('conviction', 'Процессуальное решение по делу', 'Proceeding decision', 'text', { half: true, placeholderDoc: 'приговор судебного участка № 3 от 10.03.2026 (ч. 1 ст. 158 УК РФ)', hintRu: 'если уголовное дело не возбуждалось — укажите это' }),
      F('damage_desc', 'Какое имущество похищено (повреждено)', 'Damaged or stolen property', 'textarea', { placeholderDoc: 'велосипед «Stels Navigator» 2024 года выпуска; стоимость подтверждена чеком и отчётом о рыночной оценке' }),
      F('damage_amount', 'Размер ущерба, руб.', 'Damage amount, RUB', 'number', { half: true, placeholderDoc: '32000' }),
      F('assessment_cost', 'Расходы на оценку, руб.', 'Appraisal costs, RUB', 'number', { half: true, placeholderDoc: '5000' }),
    ],
    body: [
      courtHdr(['Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}']),
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о возмещении ущерба, причинённого преступлением' },
      { type: 'paragraph', text: '{{crime_brief}}. В результате преступления похищено (повреждено) принадлежащее мне имущество: {{damage_desc}}. Размер причинённого ущерба составляет {{damage_amount}} рублей.', justify: true },
      { type: 'paragraph', text: 'Процессуальное решение по факту преступления: {{conviction}}. Гражданский иск при производстве по уголовному делу мною не заявлялся; в силу статьи 44 УПК РФ я вправе предъявить его в порядке гражданского судопроизводства.', justify: true },
      { type: 'paragraph', text: 'В соответствии с частью 4 статьи 61 ГПК РФ вступивший в законную силу приговор суда обязателен для суда, рассматривающего дело о гражданско-правовых последствиях действий лица, по вопросам, имели ли место эти действия и совершены ли они данным лицом. Вред, причинённый имуществу гражданина, подлежит возмещению в полном объёме лицом, причинившим вред (статья 1064 ГК РФ).', justify: true },
      { type: 'paragraph', text: 'На основании статей 15, 1064, 1082 ГК РФ, статей 131–132 ГПК РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Взыскать с ответчика {{defendant_name}} в мою пользу возмещение ущерба, причинённого преступлением, в размере {{damage_amount}} рублей.',
        'Взыскать с ответчика расходы на оценку ущерба в размере {{assessment_cost}} рублей.',
        'Взыскать с ответчика расходы по уплате государственной пошлины.',
      ] },
      { type: 'paragraph', text: 'Госпошлина при подаче иска имущественного характера исчисляется в соответствии со ст. 333.19 Налогового кодекса РФ.', noIndent: true },
      { type: 'attachment', items: [
        'Копия приговора (постановления) по уголовному делу;',
        'Отчёт независимой оценки, документы о стоимости похищенного (повреждённого) имущества;',
        'Квитанция об уплате государственной пошлины;',
        'Копии искового заявления по числу лиц, участвующих в деле.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'ru-lawsuit-osago', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление о взыскании страхового возмещения по ОСАГО',
    titleEn: 'Lawsuit: OSAGO insurance payout dispute',
    descRu: 'Иск к страховой компании, которая занизила страховую выплату по ОСАГО или отказала в ней. До подачи иска обязательны заявление страховщику и обращение к финансовому уполномоченному (ст. 16.1 ФЗ № 40-ФЗ); иск можно подать по месту жительства истца (ч. 7 ст. 29 ГПК РФ). Сверх недоплаты взыскиваются неустойка 1% в день (п. 21 ст. 12 ФЗ № 40-ФЗ), штраф 50% (п. 3 ст. 16.1) и моральный вред; госпошлина не уплачивается при цене иска до 1 млн рублей.',
    descEn: 'Lawsuit against the OSAGO insurer that underpaid or refused the claim. Mandatory pre-trial steps: insurer claim and financial ombudsman (Art. 16.1 of Federal Law No. 40-FZ). Recovers the shortfall, a 1%-per-day statutory penalty, the 50% consumer fine and moral damages; court fee exempt up to RUB 1 million.',
    refRu: 'ст. 12, 15.1, 16.1 ФЗ от 25.04.2002 № 40-ФЗ «Об ОСАГО»; ст. 931 ГК РФ; ч. 7 ст. 29 ГПК РФ',
    refEn: 'Art. 12, 15.1, 16.1 of Federal Law No. 40-FZ on Compulsory Motor Insurance; Art. 931 of the Civil Code; p. 7 Art. 29 of the Civil Procedure Code',
    fields: [
      F('court_name', 'Наименование суда', 'Court name', 'text', { placeholderDoc: 'Ленинский районный суд города Москвы', hintRu: 'можно по месту жительства истца (ч. 7 ст. 29 ГПК РФ); мировой судья — при цене иска до 100 000 ₽ (ст. 23 ГПК РФ)' }),
      F('plaintiff_name', 'Истец — ваши ФИО', 'Plaintiff full name', 'text', { half: true, placeholderDoc: 'Смирнов Дмитрий Олегович' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('defendant_name', 'Ответчик — страховая компания', 'Defendant (insurer)', 'text', { half: true, placeholderDoc: 'ООО «Страховая компания „Гарант“»' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('dtp_date', 'Дата ДТП', 'Accident date', 'date', { half: true }),
      F('claim_no', 'Номер заявления о страховом возмещении', 'Insurance claim number', 'text', { half: true, placeholderDoc: '№ 1234-ОС от 20.02.2026' }),
      F('insurer_amount', 'Выплачено страховщиком, руб.', 'Insurer payout, RUB', 'number', { half: true, placeholderDoc: '150000', hintRu: 'при полном отказе укажите 0' }),
      F('assessed_amount', 'Размер возмещения по независимой экспертизе, руб.', 'Independent assessment amount, RUB', 'number', { half: true, placeholderDoc: '285000' }),
      F('shortfall_amount', 'Сумма недоплаты, руб.', 'Shortfall amount, RUB', 'number', { half: true, placeholderDoc: '135000' }),
      F('finomb_brief', 'Досудебное урегулирование', 'Pre-trial settlement', 'textarea', { placeholderDoc: 'заявление страховщику оставлено без удовлетворения; решением финансового уполномоченного от 15.04.2026 требования удовлетворены частично' }),
      F('moral_amount', 'Моральный вред, руб.', 'Moral damages, RUB', 'number', { half: true, placeholderDoc: '15000' }),
    ],
    body: [
      courtHdr(['Ответчик: {{defendant_name}}', 'Адрес: {{defendant_address}}']),
      { type: 'title', text: 'ИСКОВОЕ ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о взыскании страхового возмещения по ОСАГО' },
      { type: 'paragraph', text: '{{dtp_date}} произошло дорожно-транспортное происшествие с участием принадлежащего мне транспортного средства. Заявление о страховом возмещении ({{claim_no}}) я направил(а) ответчику в порядке статьи 12 Федерального закона от 25.04.2002 № 40-ФЗ «Об ОСАГО».', justify: true },
      { type: 'paragraph', text: 'Ответчиком произведена страховая выплата в размере {{insurer_amount}} рублей, тогда как размер страхового возмещения, определённый независимой экспертизой (оценкой), составляет {{assessed_amount}} рублей. Сумма недоплаты — {{shortfall_amount}} рублей; установленный законом срок страховой выплаты нарушен.', justify: true },
      { type: 'paragraph', text: 'Досудебный порядок урегулирования спора соблюдён: {{finomb_brief}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 12, 16.1 ФЗ № 40-ФЗ, статьёй 931 ГК РФ, статьями 131–132 ГПК РФ прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Взыскать с ответчика в мою пользу недоплаченное страховое возмещение в размере {{shortfall_amount}} рублей.',
        'Взыскать неустойку за нарушение срока страховой выплаты, начисляемую в размере одного процента от суммы недоплаты за каждый день просрочки по пункту 21 статьи 12 ФЗ № 40-ФЗ, по день фактического исполнения обязательства.',
        'Взыскать компенсацию морального вреда в размере {{moral_amount}} рублей.',
        'Взыскать штраф за неисполнение требований потерпевшего в добровольном порядке в размере пятидесяти процентов от разницы между размером страховой выплаты, определённым судом, и суммой, выплаченной добровольно (п. 3 ст. 16.1 ФЗ № 40-ФЗ).',
      ] },
      { type: 'paragraph', text: 'К отношениям по ОСАГО применяется законодательство о защите прав потребителей в части, не урегулированной специальным законом (постановление Пленума ВС РФ от 08.11.2022 № 31); истцы освобождаются от госпошлины по искам о защите прав потребителей при цене иска до 1 млн рублей (ст. 17 Закона «О защите прав потребителей», пп. 4 п. 2, п. 3 ст. 333.36 НК РФ).', noIndent: true },
      { type: 'attachment', items: [
        'Копия заявления о страховом возмещении (номер страхового дела);',
        'Отчёт независимой технической экспертизы (оценки);',
        'Платёжные документы о страховой выплате;',
        'Решение финансового уполномоченного;',
        'Копии искового заявления по числу лиц, участвующих в деле.',
      ] },
      stdSign('{{plaintiff_name}}'),
    ],
  },

  // ── W-ru (волна 2): образование, ЖКХ, медицина ──────────────────────────────
  {
    slug: 'ru-edu-vpr-refusal', kind: 'STANDARD', categorySlug: 'edu-docs',
    titleRu: 'Заявление об отказе от участия в ВПР',
    titleEn: 'Waiver from VPR (all-Russian test works)',
    descRu: 'Письменный отказ законного представителя от участия ребёнка во всероссийских проверочных работах (ВПР) и иных мониторинговых работах. ВПР не входит в государственную итоговую аттестацию (ст. 59 ФЗ-273); обязанность участвовать федеральным законом не установлена, отказ не может влечь санкций к ученику.',
    descEn: 'Written parental waiver from VPR (all-Russian test works) and school monitoring assessments. VPR is not a state final exam and participation is not mandatory under the Federal Law on Education.',
    refRu: 'ст. 28, 59, 97 ФЗ от 29.12.2012 № 273-ФЗ «Об образовании в РФ»',
    refEn: 'Art. 28, 59, 97 of Federal Law No. 273-FZ on Education',
    fields: [
      F('head_position', 'Должность руководителя', 'Head position', 'text', { half: true, placeholderDoc: 'Директору' }),
      F('school_name', 'Наименование школы', 'School name', 'text', { half: true, placeholderDoc: 'МАОУ «Средняя школа № 12»' }),
      F('head_name', 'ФИО директора', 'Head full name', 'text', { half: true, placeholderDoc: 'Соколовой Наталье Петровне', hintRu: 'в дательном падеже' }),
      F('school_address', 'Адрес школы', 'School address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Строителей, д. 8' }),
      F('applicant_name', 'Ваши ФИО (законного представителя)', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('child_name', 'ФИО ребёнка', 'Child full name', 'text', { half: true, placeholderDoc: 'Смирнов Артём Иванович' }),
      F('child_class', 'Класс', 'Class', 'text', { half: true, placeholderDoc: '4 «А»' }),
      F('works_list', 'От каких работ отказываетесь', 'Assessments refused', 'textarea', { placeholderDoc: 'всероссийские проверочные работы (ВПР) по русскому языку и математике, апрель 2026 года; иные мониторинговые и диагностические работы в рамках внутреннего мониторинга качества образования' }),
      F('child_presence', 'Присутствие ребёнка в дни проведения работ', 'Child presence on test days', 'select', { options: ['будет присутствовать в школе, к проверочным работам его привлекать не нужно', 'не будет присутствовать в школе в дни проведения указанных работ'] }),
    ],
    body: [
      hdr(['{{head_position}}', '{{school_name}}', '{{head_name}}', '{{school_address}}'], ['от {{applicant_name}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'об отказе от участия во всероссийских проверочных работах (ВПР)' },
      { type: 'paragraph', text: 'Я, {{applicant_name}}, — законный представитель {{child_name}}, обучающегося {{child_class}} класса {{school_name}}. Настоящим отказываюсь от участия моего ребёнка в следующих контрольных (оценочных) мероприятиях: {{works_list}}.', justify: true },
      { type: 'paragraph', text: 'Всероссийские проверочные работы не входят в перечень форм государственной итоговой аттестации (ст. 59 ФЗ от 29.12.2012 № 273-ФЗ «Об образовании в РФ») и применяются как инструмент мониторинга качества образования (ст. 97 ФЗ № 273-ФЗ). Обязанность обучающегося участвовать в таких работах федеральным законом не установлена; неучастие не может быть основанием для дисциплинарного взыскания, снижения текущих отметок или недопуска к обучению.', justify: true },
      { type: 'paragraph', text: 'Ребёнок в дни проведения указанных работ: {{child_presence}}.', justify: true },
      { type: 'paragraph', text: 'Прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Освободить {{child_name}} от участия в указанных работах и не привлекать его к иным формам контроля, проводимым в это время;',
        'Не применять к ребёнку мер дисциплинарного воздействия и не выставлять неудовлетворительные отметки за неучастие;',
        'По моему запросу ознакомить меня с локальными актами школы о внутреннем мониторинге качества образования.',
      ] },
      { type: 'attachment', items: [
        'Копия документа, удостоверяющего личность законного представителя;',
        'Копия свидетельства о рождении ребёнка (при первом обращении).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-edu-school-transfer', kind: 'STANDARD', categorySlug: 'edu-docs',
    titleRu: 'Заявление о приёме в школу в порядке перевода',
    titleEn: 'Application for school transfer admission',
    descRu: 'Заявление в принимающую школу о приёме ребёнка в порядке перевода из другой образовательной организации. Перевод оформляется по порядку, утверждённому приказом Минпросвещения России № 458: принимающая школа подтверждает наличие мест, прежняя школа отчисляет ребёнка и выдаёт личное дело.',
    descEn: 'Application to the receiving school for admission by transfer under Order No. 458 of the Ministry of Education (school transfer procedure).',
    refRu: 'ч. 4, 5 ст. 67 ФЗ от 29.12.2012 № 273-ФЗ; приказ Минпросвещения России от 06.10.2020 № 458',
    refEn: 'p. 4-5 Art. 67 of Federal Law No. 273-FZ on Education; Order of the Ministry of Education No. 458 of 06.10.2020',
    fields: [
      F('head_position', 'Должность руководителя', 'Head position', 'text', { half: true, placeholderDoc: 'Директору' }),
      F('school_name', 'Наименование принимающей школы', 'Receiving school', 'text', { half: true, placeholderDoc: 'МАОУ «Средняя школа № 25»' }),
      F('head_name', 'ФИО директора', 'Head full name', 'text', { half: true, placeholderDoc: 'Кузнецову Павлу Андреевичу', hintRu: 'в дательном падеже' }),
      F('school_address', 'Адрес школы', 'School address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Профсоюзная, д. 41' }),
      F('applicant_name', 'Ваши ФИО (законного представителя)', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('child_name', 'ФИО ребёнка', 'Child full name', 'text', { half: true, placeholderDoc: 'Смирнов Артём Иванович' }),
      F('child_birth', 'Дата рождения ребёнка', 'Child birth date', 'date', { half: true }),
      F('current_school', 'Текущая школа', 'Current school', 'text', { half: true, placeholderDoc: 'МАОУ «Средняя школа № 12» г. Москвы' }),
      F('current_class', 'Текущий класс', 'Current class', 'text', { half: true, placeholderDoc: '4 «А»' }),
      F('target_class', 'В какой класс просите зачислить', 'Requested class', 'text', { half: true, placeholderDoc: 'в 4 класс' }),
      F('transfer_reason', 'Причина перевода', 'Transfer reason', 'select', { options: ['переезд семьи на новое место жительства', 'выбор другой образовательной программы', 'по семейным обстоятельствам'] }),
    ],
    body: [
      hdr(['{{head_position}}', '{{school_name}}', '{{head_name}}', '{{school_address}}'], ['от {{applicant_name}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о приёме в порядке перевода из другой образовательной организации' },
      { type: 'paragraph', text: 'Прошу зачислить в порядке перевода моего ребёнка {{child_name}} ({{child_birth}} года рождения) в {{school_name}} {{target_class}}. В настоящее время ребёнок обучается в {{current_school}}, {{current_class}} класс. Причина перевода: {{transfer_reason}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии с ч. 4, 5 ст. 67 ФЗ от 29.12.2012 № 273-ФЗ «Об образовании в РФ» и порядком перевода обучающихся (приказ Минпросвещения России от 06.10.2020 № 458) прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Сообщить мне о наличии свободных мест и возможности приёма в порядке перевода;',
        'После издания прежней школой приказа об отчислении в порядке перевода издать приказ о зачислении {{child_name}} с указанием класса;',
        'Предоставить ребёнку обучение по основным образовательным программам соответствующего уровня.',
      ] },
      { type: 'paragraph', text: 'Отказ в приёме возможен только при отсутствии свободных мест (ч. 4 ст. 67 ФЗ № 273-ФЗ). После получения письма принимающей школы о согласии прежняя школа отчисляет ребёнка в порядке перевода и выдаёт личное дело (приказ Минпросвещения России от 06.10.2020 № 458).', noIndent: true },
      { type: 'attachment', items: [
        'Копия документа, удостоверяющего личность законного представителя;',
        'Копия свидетельства о рождении ребёнка;',
        'Сведения об успеваемости (ведомость отметок, академическая справка — при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-util-meter-sealing', kind: 'STANDARD', categorySlug: 'util-management',
    titleRu: 'Заявление о вводе в эксплуатацию ИПУ после поверки (опломбировке)',
    titleEn: 'Application to commission a meter after verification',
    descRu: 'После поверки, замены или установки индивидуального прибора учёта (счётчика) потребитель уведомляет управляющую организацию или РСО. Прибор вводится в эксплуатацию не позднее календарного месяца; опломбирование — бесплатно, кроме повторного по вине потребителя.',
    descEn: 'After verification, replacement or installation of an individual meter, notify the management company: the meter must be commissioned within one calendar month and sealed free of charge (Utility Services Rules, Government Decree No. 354).',
    refRu: 'пп. 81(11)–81(19) Правил предоставления коммунальных услуг (постановление Правительства РФ от 06.05.2011 № 354)',
    refEn: 'pp. 81(11)-81(19) of the Utility Services Rules (Government Decree No. 354 of 06.05.2011)',
    fields: [
      F('executor_name', 'Управляющая организация / РСО', 'Management company', 'text', { half: true, placeholderDoc: 'ООО «УК „Домсервис“»' }),
      F('executor_address', 'Адрес организации', 'Company address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес квартиры', 'Apartment address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('account_no', 'Лицевой счёт', 'Account number', 'text', { half: true, placeholderDoc: 'лицевой счёт № 1234567890' }),
      F('meter_kind', 'Тип прибора учёта', 'Meter type', 'select', { options: ['индивидуальный прибор учёта холодной воды', 'индивидуальный прибор учёта горячей воды', 'индивидуальный прибор учёта электрической энергии', 'индивидуальный прибор учёта тепловой энергии', 'индивидуальный прибор учёта газа'] }),
      F('meter_no', 'Заводской (серийный) номер прибора', 'Meter serial number', 'text', { half: true, placeholderDoc: 'заводской № 4512789' }),
      F('event_kind', 'Причина ввода в эксплуатацию', 'Reason', 'select', { options: ['поверка прибора учёта', 'установка нового прибора учёта', 'замена прибора учёта', 'ремонт прибора учёта'] }),
      F('event_date', 'Дата установки / замены / поверки', 'Date of work', 'date', { half: true }),
      F('verifier', 'Кто выполнил работы (организация)', 'Performed by', 'text', { placeholderDoc: 'АНО «Центр метрологии», свидетельство о поверке № С-ЕУ/2026/123456' }),
    ],
    body: [
      hdr(['{{executor_name}}', '{{executor_address}}'], ['от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о вводе в эксплуатацию индивидуального прибора учёта' },
      { type: 'paragraph', text: 'Я, {{applicant_name}} ({{applicant_address}}, {{account_no}}), сообщаю о завершении работ: {{event_kind}} — {{meter_kind}}, {{meter_no}} ({{event_date}}). Работы выполнены: {{verifier}}.', justify: true },
      { type: 'paragraph', text: 'На основании пунктов 81(12), 81(14) Правил предоставления коммунальных услуг (постановление Правительства РФ от 06.05.2011 № 354) прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Согласовать со мной дату и ввести прибор учёта в эксплуатацию не позднее календарного месяца, следующего за {{event_date}};',
        'Опломбировать прибор учёта без взимания платы;',
        'Составить акт ввода прибора в эксплуатацию и выдать мне один экземпляр;',
        'Начать расчёт платы по показаниям прибора учёта с первого числа месяца, следующего за месяцем ввода в эксплуатацию.',
      ] },
      { type: 'paragraph', text: 'Опломбирование прибора учёта при вводе в эксплуатацию выполняется бесплатно, за исключением повторного опломбирования в связи с нарушением пломбы (знаков поверки) по вине потребителя. Если исполнитель не провёл проверку в установленный срок, показания прибора применяются для расчёта платы начиная с первого числа месяца, следующего за месяцем подачи настоящей заявки.', noIndent: true },
      { type: 'attachment', items: [
        'Копия паспорта прибора учёта;',
        'Копия свидетельства о поверке (для поверенного прибора);',
        'Копия документа о праве собственности (договора найма).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-util-common-property', kind: 'STANDARD', categorySlug: 'util-management',
    titleRu: 'Претензия в управляющую компанию о ненадлежащем содержании общего имущества',
    titleEn: 'Claim to the management company over poor upkeep of common property',
    descRu: 'Претензия в УК/ТСЖ при протечках кровли, сырых подвалах, разрушении фасада, неисправном лифте и иных дефектах общего имущества дома. УК обязана провести осмотр с составлением акта и устранить дефекты; при бездействии — жилищная инспекция и суд.',
    descEn: 'Claim to the management company for roof leaks, damp basements, facades, lifts and other common-property defects; the company must inspect, draw up an act and repair (Housing Code Art. 161-162).',
    refRu: 'ст. 156, 161, 162 ЖК РФ; постановления Правительства РФ от 13.08.2006 № 491 и от 03.04.2013 № 290',
    refEn: 'Art. 156, 161, 162 of the Housing Code; Government Decrees No. 491 of 13.08.2006 and No. 290 of 03.04.2013',
    fields: [
      F('org_name', 'Управляющая организация (ТСЖ)', 'Management company', 'text', { half: true, placeholderDoc: 'ООО «УК „Домсервис“»' }),
      F('org_address', 'Адрес организации', 'Company address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('house_address', 'Адрес дома', 'Building address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2' }),
      F('apartment', 'Ваша квартира', 'Your apartment', 'text', { half: true, placeholderDoc: 'кв. 3' }),
      F('discovered_date', 'Дата обнаружения дефектов', 'Date discovered', 'date', { half: true }),
      F('problem_desc', 'Описание дефектов общего имущества', 'Defects description', 'textarea', { placeholderDoc: 'протекает кровля над квартирой № 3: пятна и подтёки на потолке, отслоение обоев; чердачное помещение не убирается, вход не закрыт' }),
      F('repair_request', 'Что требуется сделать', 'Requested works', 'textarea', { placeholderDoc: 'обследовать кровлю и устранить протечку, привести чердачное помещение в надлежащее состояние' }),
      F('damage_note', 'Повреждения имущества / ущерб', 'Damage note', 'text', { placeholderDoc: 'повреждены натяжной потолок и обои, ущерб оценивается в 25 000 рублей', hintRu: 'если ущерба нет — напишите «ущерб не зафиксирован»' }),
    ],
    body: [
      hdr(['{{org_name}}', '{{org_address}}'], ['от {{applicant_name}}', '{{house_address}}, {{apartment}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ПРЕТЕНЗИЯ' },
      { type: 'subtitle', text: 'о ненадлежащем содержании общего имущества многоквартирного дома' },
      { type: 'paragraph', text: 'Я, {{applicant_name}}, — собственник жилого помещения по адресу: {{house_address}}, {{apartment}}. Дом обслуживается {{org_name}} на основании договора управления.', justify: true },
      { type: 'paragraph', text: '{{discovered_date}} обнаружены дефекты содержания общего имущества: {{problem_desc}}. Зафиксированы повреждения имущества: {{damage_note}}.', justify: true },
      { type: 'paragraph', text: 'Общее имущество многоквартирного дома должно содержаться в исправном состоянии (ст. 161, 162 ЖК РФ; Правила содержания общего имущества — постановление Правительства РФ от 13.08.2006 № 491; минимальный перечень работ и услуг — постановление Правительства РФ от 03.04.2013 № 290). По обращению собственника управляющая организация обязана провести осмотр, составить акт и устранить выявленные дефекты.', justify: true },
      { type: 'paragraph', text: 'На основании изложенного, руководствуясь статьями 161, 162, 156 ЖК РФ, требую:', justify: true },
      { type: 'list', numbered: true, items: [
        'В течение трёх рабочих дней с даты получения претензии провести осмотр {{house_address}} в моём присутствии и составить акт обследования;',
        'Устранить дефекты: {{repair_request}};',
        'Возместить ущерб от повреждения моего имущества: {{damage_note}};',
        'Произвести перерасчёт платы за содержание жилого помещения за период ненадлежащего исполнения обязанностей (ч. 10 ст. 156 ЖК РФ);',
        'О результатах письменно уведомить меня в установленный срок.',
      ] },
      { type: 'paragraph', text: 'В случае отказа или бездействия обращусь в государственную жилищную инспекцию, Роспотребнадзор и в суд с требованиями об устранении нарушений, взыскании ущерба, неустойки, компенсации морального вреда и штрафа (Закон РФ «О защите прав потребителей»). Претензия носит досудебный характер.', noIndent: true },
      { type: 'attachment', items: [
        'Фотоматериалы повреждений;',
        'Отчёт об оценке ущерба (при наличии);',
        'Копии предыдущих обращений и ответов на них (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-med-vmp', kind: 'STANDARD', categorySlug: 'med-services',
    titleRu: 'Заявление о направлении на высокотехнологичную медицинскую помощь (ВМП)',
    titleEn: 'Application for referral to high-technology medical care (VMP)',
    descRu: 'Заявление на имя главного врача о направлении на высокотехнологичную медицинскую помощь: лечащий врач оформляет направление, документы рассматривает комиссия по отбору пациентов на ВМП; при отказе или затягивании решение обжалуется главврачу, в минздрав региона, СМО или Росздравнадзор.',
    descEn: 'Application to the chief physician for referral to high-technology (highly specialized) medical care; the referral committee decides under statutory timeframes (Art. 34 of Federal Law No. 323-FZ).',
    refRu: 'ст. 34, 35, 80 ФЗ от 21.11.2011 № 323-ФЗ; приказ Минздрава России от 02.10.2020 № 1075н',
    refEn: 'Art. 34, 35, 80 of Federal Law No. 323-FZ; Order of the Ministry of Health No. 1075n of 02.10.2020',
    fields: [
      F('chief_position', 'Должность руководителя', 'Head position', 'text', { half: true, placeholderDoc: 'Главному врачу' }),
      F('org_name', 'Наименование медицинской организации', 'Medical organization', 'text', { half: true, placeholderDoc: 'ГБУЗ «Городская поликлиника № 7»' }),
      F('chief_name', 'ФИО руководителя', 'Head full name', 'text', { half: true, placeholderDoc: 'Петровой Елене Сергеевне', hintRu: 'в дательном падеже' }),
      F('org_address', 'Адрес организации', 'Address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Строителей, д. 8' }),
      F('applicant_name', 'Ваши ФИО (пациента/представителя)', 'Applicant full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('patient_name', 'Пациент — ФИО', 'Patient full name', 'text', { half: true, placeholderDoc: 'Смирнов Дмитрий Иванович', hintRu: 'если подаёте за себя — укажите свои ФИО' }),
      F('patient_birth', 'Дата рождения пациента', 'Patient birth date', 'date', { half: true }),
      F('policy_no', 'Полис ОМС', 'OMS policy number', 'text', { half: true, placeholderDoc: 'полис ОМС № 5412 0000 0000 0000' }),
      F('diagnosis', 'Диагноз', 'Diagnosis', 'textarea', { placeholderDoc: 'двусторонняя сенсоневральная тугоухость IV степени (МКБ-10 H90.5), подтверждена аудиометрией от 12.09.2026' }),
      F('vmp_method', 'Вид (метод) ВМП / профиль', 'VMP method / profile', 'text', { placeholderDoc: 'кохлеарная имплантация (профиль: оториноларингология)' }),
    ],
    body: [
      hdr(['{{chief_position}}', '{{org_name}}', '{{chief_name}}', '{{org_address}}'], ['от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о направлении на высокотехнологичную медицинскую помощь (ВМП)' },
      { type: 'paragraph', text: 'Прошу организовать направление пациента {{patient_name}} ({{patient_birth}} года рождения, полис ОМС {{policy_no}}) на оказание высокотехнологичной медицинской помощи: {{vmp_method}}. Диагноз: {{diagnosis}}.', justify: true },
      { type: 'paragraph', text: 'Показания к ВМП подтверждены обследованиями; лечение в обычных условиях требуемого результата не даёт. Заявление подано в соответствии со статьями 34, 35 ФЗ от 21.11.2011 № 323-ФЗ «Об основах охраны здоровья граждан в РФ» и порядком организации оказания ВМП (приказ Минздрава России от 02.10.2020 № 1075н).', justify: true },
      { type: 'paragraph', text: 'Прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Оформить лечащим врачом направление на ВМП и передать документы на рассмотрение комиссии медицинской организации по отбору пациентов на ВМП;',
        'При наличии показаний — оформить талон на оказание ВМП и определить медицинскую организацию, оказывающую ВМП;',
        'Уведомить меня о решении комиссии в установленный срок и по запросу выдать копию протокола решения.',
      ] },
      { type: 'paragraph', text: 'Высокотехнологичная медицинская помощь оказывается гражданам бесплатно за счёт средств ОМС и бюджетных средств (ст. 34, 35, 80 ФЗ № 323-ФЗ). Отказ в направлении либо необоснованное затягивание могут быть обжалованы главному врачу, в Минздрав субъекта РФ, страховую медицинскую организацию или Росздравнадзор.', noIndent: true },
      { type: 'attachment', items: [
        'Копия полиса ОМС;',
        'Копия паспорта пациента (законного представителя);',
        'Выписка из медицинской карты с диагнозом и результатами обследований;',
        'Документ, подтверждающий полномочия законного представителя (если заявление подаёт представитель).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },

  // ── 3-a (волна 3): налоги и банки, соцзащита и пенсии ───────────────────────
  {
    slug: 'ru-tax-deduction-refund', kind: 'STANDARD', categorySlug: 'tax-docs',
    titleRu: 'Заявление о возврате НДФЛ при получении налогового вычета',
    titleEn: 'Income tax refund application (tax deduction)',
    descRu: 'Заявление в налоговую инспекцию о возврате налога на доходы при расходах на покупку жилья (имущественный вычет) или на обучение, лечение, пенсионные взносы (социальный вычет). Подаётся вместе с декларацией 3-НДФЛ по окончании года; вернуть налог можно за три последних года (п. 7 ст. 78 НК РФ). Часть вычетов доступна и в упрощённом порядке — без декларации, через личный кабинет налогоплательщика (ст. 221.1 НК РФ).',
    descEn: 'Application to the tax inspectorate for an income tax refund for housing purchase (property deduction) or education, medical care and pension contributions (social deduction). Filed with the 3-NDFL declaration after the tax year; refunds are available for the three preceding years. Some deductions are granted in a simplified way via the taxpayer personal account (Art. 221.1 of the Tax Code).',
    refRu: 'ст. 78, 219, 220, 221.1, 231 НК РФ; декларация по форме 3-НДФЛ',
    refEn: 'Art. 78, 219, 220, 221.1, 231 of the Russian Tax Code; 3-NDFL declaration form',
    fields: [
      F('inspection', 'Налоговый орган (куда)', 'Tax office', 'text', { placeholderDoc: 'В Межрайонную ИФНС России № 5 по г. Москве' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('inn', 'Ваш ИНН', 'Your taxpayer ID (INN)', 'text', { half: true, placeholderDoc: 'ИНН 771234567890' }),
      F('applicant_address', 'Адрес для ответа', 'Mailing address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('deduction_kind', 'Вид вычета', 'Deduction type', 'select', { options: ['имущественный — расходы на приобретение жилья', 'имущественный — проценты по целевому кредиту (ипотеке)', 'социальный — обучение (своё или детей)', 'социальный — лечение и покупка лекарств', 'социальный — добровольное пенсионное страхование'] }),
      F('tax_period', 'Налоговый период (год)', 'Tax period (year)', 'text', { half: true, placeholderDoc: '2026' }),
      F('expenses_amount', 'Сумма расходов, руб.', 'Expenses, RUB', 'number', { half: true, placeholderDoc: '1200000', hintRu: 'имущественный вычет — не более 2 млн ₽ (возврат до 260 тыс. ₽), проценты по ипотеке — до 3 млн ₽; социальные вычеты — не более 120 тыс. ₽ в год, обучение каждого ребёнка — до 50 тыс. ₽' }),
      F('refund_amount', 'Сумма налога к возврату, руб.', 'Tax refund amount, RUB', 'number', { half: true, placeholderDoc: '156000' }),
      F('bank_name', 'Наименование банка', 'Bank name', 'text', { half: true, placeholderDoc: 'ПАО «Сбербанк»' }),
      F('account_no', 'Номер счёта для возврата', 'Account number', 'text', { placeholderDoc: 'счёт № 40817810000000001234', hintRu: '20-значный номер счёта' }),
    ],
    body: [
      hdr(['{{inspection}}'], ['от {{applicant_name}}', '{{inn}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о возврате суммы излишне уплаченного налога на доходы физических лиц' },
      { type: 'paragraph', text: 'В {{tax_period}} налоговом периоде мною оплачены расходы, дающие право на налоговый вычет по налогу на доходы физических лиц (ст. 219, 220 НК РФ): {{deduction_kind}}. Подтверждённые расходы составили {{expenses_amount}} рублей.', justify: true },
      { type: 'paragraph', text: 'На основании статьи 78 НК РФ прошу вернуть излишне уплаченную сумму налога на доходы физических лиц в размере {{refund_amount}} рублей.', justify: true },
      { type: 'paragraph', text: 'Получатель: {{applicant_name}} ({{inn}}). Счёт для перечисления: {{account_no}} в {{bank_name}}.', noIndent: true },
      { type: 'paragraph', text: 'Декларация по форме 3-НДФЛ и документы, подтверждающие право на вычет, прилагаются. Налог может быть возвращён за три предшествующих налоговых периода (п. 7 ст. 78 НК РФ).', noIndent: true },
      { type: 'attachment', items: [
        'Декларация по форме 3-НДФЛ;',
        'Документы, подтверждающие право на вычет (договор и выписка из ЕГРН, платёжные документы, справка банка об уплаченных процентах, договор обучения/лечения, справки об оплате);',
        'Справка о доходах и суммах налога физического лица.',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-bank-restructuring', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Заявление о реструктуризации задолженности по кредиту',
    titleEn: 'Loan debt restructuring application',
    descRu: 'Обращение в банк при финансовых затруднениях: просьба изменить график платежей, снизить платёж, предоставить отсрочку (кредитные каникулы) или продлить срок кредита. Изменение условий оформляется соглашением сторон (ст. 450 ГК РФ); банк не обязан соглашаться, но письменное заявление фиксирует инициативу заёмщика и его добросовестность.',
    descEn: 'Application to the bank in case of financial hardship: request to change the payment schedule, reduce the payment, grant a deferral or extend the term. Terms are amended by agreement (Art. 450 of the Civil Code); a written request documents the borrower’s initiative and good faith.',
    refRu: 'ст. 309–310, 450–451, 819 ГК РФ; ФЗ от 21.12.2013 № 353-ФЗ «О потребительском кредите (займе)»',
    refEn: 'Art. 309-310, 450-451, 819 of the Civil Code; Federal Law No. 353-FZ on Consumer Credit',
    fields: [
      F('bank_name', 'Банк (куда)', 'Bank', 'text', { half: true, placeholderDoc: 'ПАО «Коммерческий банк»' }),
      F('bank_address', 'Адрес банка', 'Bank address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнов Дмитрий Олегович' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Ваш адрес', 'Your address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('contract_no', 'Кредитный договор', 'Loan agreement', 'text', { placeholderDoc: 'кредитный договор № 123-КД от 15.03.2024' }),
      F('monthly_payment', 'Ежемесячный платёж, руб.', 'Monthly payment, RUB', 'number', { half: true, placeholderDoc: '24500' }),
      F('arrears', 'Просроченная задолженность, руб.', 'Overdue debt, RUB', 'number', { half: true, placeholderDoc: '49000', hintRu: 'если просрочки нет — укажите 0' }),
      F('reason', 'Причина затруднений', 'Reason', 'select', { options: ['снижение дохода (сокращение, понижение в должности)', 'потеря работы', 'длительная временная нетрудоспособность', 'рождение ребёнка', 'иные обстоятельства'] }),
      F('circumstances', 'Пояснение обстоятельств', 'Circumstances details', 'textarea', { placeholderDoc: 'с октября 2026 года доход семьи сократился вдвое; дополнительные доходы отсутствуют, имущество не заложено' }),
      F('proposal', 'Какую реструктуризацию просите', 'Proposed restructuring', 'textarea', { placeholderDoc: 'увеличить срок кредита с сохранением суммы долга и снизить ежемесячный платёж; в первые три месяца — отсрочка погашения основного долга' }),
    ],
    body: [
      hdr(['В {{bank_name}}', '{{bank_address}}'], ['от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о реструктуризации задолженности по кредитному договору' },
      { type: 'paragraph', text: 'По кредитному договору {{contract_no}} мой ежемесячный платёж составляет {{monthly_payment}} рублей. Просроченная задолженность — {{arrears}} рублей.', justify: true },
      { type: 'paragraph', text: 'Причиной финансовых затруднений является: {{reason}}. Дополнительно сообщаю: {{circumstances}}.', justify: true },
      { type: 'paragraph', text: 'На основании статей 309–310, 450–451 ГК РФ прошу рассмотреть возможность реструктуризации задолженности: {{proposal}}.', justify: true },
      { type: 'list', numbered: true, items: [
        'Зафиксировать настоящее обращение и сообщить мне письменно о принятом решении;',
        'При положительном решении — подготовить и подписать дополнительное соглашение к кредитному договору;',
        'Приобщить к кредитному делу представленные документы, подтверждающие изменение финансового положения.',
      ] },
      { type: 'paragraph', text: 'Реструктуризация производится по соглашению сторон (ст. 450 ГК РФ). В случае отказа банка настоящее обращение сохраняет доказательственное значение — оно подтверждает добросовестность заёмщика и его обращение за досудебным урегулированием.', noIndent: true },
      { type: 'attachment', items: [
        'Копии документов о доходах и расходах (справка о доходах, трудовая книжка, медицинские документы);',
        'Копия кредитного договора и графика платежей (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-bank-debit-claim', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Претензия в банк о незаконном списании денежных средств',
    titleEn: 'Claim to the bank over unlawful debits',
    descRu: 'Претензия при списании, с которым клиент не согласен: списание без распоряжения, дубль операции, комиссии вне договора, списание после отзыва согласия, мошенническая операция. Списание со счёта допускается только по распоряжению клиента (ст. 854 ГК РФ); при уведомлении о несанкционированной операции банк обязан провести проверку и восстановить средства (ст. 9 ФЗ № 161-ФЗ).',
    descEn: 'Claim over debits the client disputes: charges without a client order, duplicated operations, off-contract fees, debits after consent withdrawal, fraudulent operations. Debits require the client’s order (Art. 854 of the Civil Code); upon notice of an unauthorized operation the bank must investigate and restore the funds (Art. 9 of Law No. 161-FZ).',
    refRu: 'ст. 845, 854 ГК РФ; ст. 9 ФЗ от 27.06.2011 № 161-ФЗ «О национальной платёжной системе»; Закон РФ «О защите прав потребителей»',
    refEn: 'Art. 845, 854 of the Civil Code; Art. 9 of Federal Law No. 161-FZ on the National Payment System; Russian Consumer Protection Law',
    fields: [
      F('bank_name', 'Банк (куда)', 'Bank', 'text', { half: true, placeholderDoc: 'ПАО «Коммерческий банк»' }),
      F('bank_address', 'Адрес банка', 'Bank address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Ваш адрес', 'Your address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('account_no', 'Счёт / карта', 'Account / card', 'text', { placeholderDoc: 'счёт № 40817810000000001234, карта 4276 **** 1234' }),
      F('debit_date', 'Дата списания', 'Debit date', 'date', { half: true }),
      F('debit_amount', 'Списанная сумма, руб.', 'Debited amount, RUB', 'number', { half: true, placeholderDoc: '3500' }),
      F('debit_desc', 'Что списано (получатель, назначение)', 'Debit description', 'text', { placeholderDoc: 'ООО «Сервис подписок», списание за доступ к сервису' }),
      F('dispute_kind', 'Характер списания', 'Dispute type', 'select', { options: ['списание без моего распоряжения (согласия)', 'повторное (дублирующее) списание одной операции', 'комиссия, не предусмотренная договором', 'списание после отзыва согласия на регулярные платежи', 'операция, которую я не совершал(а) (мошенничество)'] }),
      F('agreed_amount', 'Правомерная сумма, руб.', 'Lawful amount, RUB', 'number', { half: true, required: false, placeholderDoc: '0', hintRu: 'часть списания, которую вы признаёте корректной; если всё списание незаконно — 0' }),
      F('actions_taken', 'Что уже предпринято', 'Actions taken', 'textarea', { placeholderDoc: 'заблокировал(а) карту в мобильном приложении, обратился(ась) на горячую линию банка 21.05.2026 (заявление № 4512)' }),
    ],
    body: [
      hdr(['В {{bank_name}}', '{{bank_address}}'], ['от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ПРЕТЕНЗИЯ' },
      { type: 'subtitle', text: 'о неправомерном списании денежных средств со счёта' },
      { type: 'paragraph', text: 'Являюсь клиентом банка ({{account_no}}). {{debit_date}} со счёта списано {{debit_amount}} рублей — {{debit_desc}}. Со списанием не согласен(на): {{dispute_kind}}.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьёй 854 ГК РФ списание денежных средств со счёта допускается банком только на основании распоряжения клиента. Такого распоряжения я не давал(а) (согласие отозвано, операция мною не совершалась). Согласно статье 9 Федерального закона от 27.06.2011 № 161-ФЗ «О национальной платёжной системе» при получении уведомления о несанкционированной операции банк обязан установить факт её совершения и восстановить положение клиента, действовавшее до совершения операции.', justify: true },
      { type: 'paragraph', text: 'Что уже предпринято: {{actions_taken}}. Правомерной признаю сумму {{agreed_amount}} рублей.', justify: true },
      { type: 'list', numbered: true, items: [
        'Восстановить денежные средства и зачислить на мой счёт {{debit_amount}} рублей;',
        'Предоставить документы, послужившие основанием списания (распоряжение, согласие клиента, договор с получателем);',
        'Провести проверку в порядке статьи 9 ФЗ № 161-ФЗ и сообщить о результатах письменно.',
      ] },
      { type: 'paragraph', text: 'В случае отказа претензия будет направлена в Банк России, а требования — предъявлены в суд с взысканием списанной суммы, неустойки, компенсации морального вреда и штрафа (Закон РФ «О защите прав потребителей»).', noIndent: true },
      { type: 'attachment', items: [
        'Выписка по счёту (скриншоты операций);',
        'Копия договора банковского счёта (при наличии);',
        'Документы об обращении в полицию (при мошеннических операциях).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-pension-appointment', kind: 'STANDARD', categorySlug: 'soc-pension',
    titleRu: 'Заявление о назначении страховой пенсии (СФР)',
    titleEn: 'Insurance pension appointment application (SFR)',
    descRu: 'Заявление о назначении страховой пенсии по старости, по инвалидности или по случаю потери кормильца в Фонд пенсионного и социального страхования РФ (СФР). Подаётся в клиентскую службу СФР, через МФЦ, работодателя или Госуслуги; пенсия назначается со дня обращения, но не ранее возникновения права (ст. 22 ФЗ № 400-ФЗ).',
    descEn: 'Application to the Russian Pension and Social Insurance Fund (SFR) for an insurance pension (old age, invalidity or survivor). Filed at an SFR client service, via MFC, the employer or Gosuslugi; the pension is granted from the application date but not before the right arises (Art. 22 of Law No. 400-FZ).',
    refRu: 'ст. 4, 8, 9, 10, 21, 22 ФЗ от 28.12.2013 № 400-ФЗ «О страховых пенсиях»; приказ Минтруда России от 17.11.2014 № 910н',
    refEn: 'Art. 4, 8, 9, 10, 21, 22 of Federal Law No. 400-FZ on Insurance Pensions; Order of the Ministry of Labour No. 910n of 17.11.2014',
    fields: [
      F('sfr_office', 'Наименование органа СФР (куда)', 'SFR office', 'text', { placeholderDoc: 'Управление № 4 отделения Фонда пенсионного и социального страхования РФ по г. Москве' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('snils', 'СНИЛС', 'SNILS number', 'text', { half: true, placeholderDoc: 'СНИЛС 123-456-789 00' }),
      F('applicant_address', 'Адрес', 'Address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('birth_date', 'Дата рождения', 'Date of birth', 'date', { half: true }),
      F('pension_kind', 'Вид пенсии', 'Pension type', 'select', { options: ['страховую пенсию по старости', 'страховую пенсию по инвалидности', 'страховую пенсию по случаю потери кормильца'] }),
      F('delivery', 'Способ доставки пенсии', 'Delivery method', 'select', { options: ['через банк — зачисление на счёт', 'через отделение почтовой связи по месту жительства', 'через иную организацию, осуществляющую доставку пенсии'] }),
      F('bank_account', 'Реквизиты счёта для зачисления', 'Account details', 'text', { required: false, placeholderDoc: 'ПАО «Сбербанк», счёт № 40817810000000001234', hintRu: 'заполняется при доставке через банк' }),
      F('extra_note', 'Дополнительно (иждивенцы, уход за детьми и т.п.)', 'Additional note', 'textarea', { required: false, placeholderDoc: 'на иждивении — ребёнок 15 лет; прошу учесть периоды ухода за детьми до достижения 1,5 лет' }),
    ],
    body: [
      hdr(['{{sfr_office}}'], ['от {{applicant_name}}', 'СНИЛС: {{snils}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о назначении страховой пенсии' },
      { type: 'paragraph', text: 'Я, {{applicant_name}} ({{birth_date}} года рождения, СНИЛС {{snils}}), обращаюсь за назначением {{pension_kind}}.', justify: true },
      { type: 'paragraph', text: 'Способ доставки пенсии: {{delivery}}. {{bank_account}}', noIndent: true },
      { type: 'paragraph', text: '{{extra_note}}', noIndent: true },
      { type: 'paragraph', text: 'В соответствии со статьями 4, 21, 22 Федерального закона от 28.12.2013 № 400-ФЗ «О страховых пенсиях» прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Назначить мне указанную страховую пенсию со дня обращения;',
        'Приобщить к выплатному делу представленные документы о стаже и заработке;',
        'Запросить недостающие сведения в рамках межведомственного взаимодействия;',
        'Уведомить меня о принятом решении и выдать справку о размере назначенной пенсии.',
      ] },
      { type: 'paragraph', text: 'Пенсия назначается со дня обращения за ней, но не ранее чем со дня возникновения права на неё (ст. 22 ФЗ № 400-ФЗ). Право на страховую пенсию по старости возникает при достижении возраста, установленного ст. 8 ФЗ № 400-ФЗ, наличии требуемого страхового стажа и величины индивидуального пенсионного коэффициента. Заявление можно подать в клиентской службе СФР, через МФЦ, работодателя или на портале Госуслуг.', noIndent: true },
      { type: 'attachment', items: [
        'Копия документа, удостоверяющего личность;',
        'Документы о страховом стаже (трудовая книжка, справки — при наличии);',
        'Справка о заработке за 60 месяцев подряд до 01.01.2002 (при необходимости);',
        'Документы о нетрудоспособных членах семьи (для пенсии по случаю потери кормильца).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-soc-unified-benefit', kind: 'STANDARD', categorySlug: 'soc-benefits',
    titleRu: 'Заявление о назначении единого пособия (СФР)',
    titleEn: 'Unified child benefit application (SFR)',
    descRu: 'Заявление о назначении единого пособия в связи с рождением и воспитанием ребёнка — ежемесячной выплаты семьям со среднедушевым доходом ниже прожиточного минимума, с комплексной оценкой нуждаемости (доход, имущество, занятость). Подаётся через Госуслуги, в клиентскую службу СФР или МФЦ.',
    descEn: 'Application for the unified benefit related to the birth and upbringing of a child — a monthly payment for families whose per-capita income is below the subsistence minimum, subject to a comprehensive needs assessment. Filed via Gosuslugi, at an SFR client service or MFC.',
    refRu: 'ст. 9.3 ФЗ от 19.05.1995 № 81-ФЗ «О государственных пособиях гражданам, имеющим детей»',
    refEn: 'Art. 9.3 of Federal Law No. 81-FZ on State Benefits for Families with Children',
    fields: [
      F('sfr_office', 'Наименование органа СФР (куда)', 'SFR office', 'text', { placeholderDoc: 'Клиентская служба отделения Фонда пенсионного и социального страхования РФ по Московской области' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('snils', 'СНИЛС', 'SNILS number', 'text', { half: true, placeholderDoc: 'СНИЛС 123-456-789 00' }),
      F('applicant_address', 'Адрес', 'Address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('benefit_period', 'Период назначения', 'Benefit period', 'select', { options: ['с даты рождения ребёнка (но не ранее чем за 12 месяцев до дня обращения)', 'с месяца обращения'] }),
      F('child_info', 'Сведения о детях', 'Children details', 'textarea', { placeholderDoc: 'ребёнок Смирнов Артём, 12.03.2026 года рождения, свидетельство о рождении серии II-МЮ № 123456' }),
      F('family_note', 'Дополнительные сведения о семье (по запросу СФР)', 'Family details', 'textarea', { required: false, placeholderDoc: 'в семье двое детей; доходы — зарплата и алименты; имущество: единственная квартира, автомобиль 2019 года' }),
      F('delivery', 'Способ доставки выплаты', 'Payment method', 'select', { options: ['зачисление на счёт в банке', 'через отделение почтовой связи'] }),
    ],
    body: [
      hdr(['{{sfr_office}}'], ['от {{applicant_name}}', 'СНИЛС: {{snils}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о назначении единого пособия в связи с рождением и воспитанием ребёнка' },
      { type: 'paragraph', text: 'Я, {{applicant_name}} (СНИЛС {{snils}}), прошу назначить единое пособие в связи с рождением и воспитанием ребёнка в соответствии со статьёй 9.3 Федерального закона от 19.05.1995 № 81-ФЗ «О государственных пособиях гражданам, имеющим детей». Период назначения: {{benefit_period}}.', justify: true },
      { type: 'paragraph', text: 'Сведения о детях: {{child_info}}.', justify: true },
      { type: 'paragraph', text: 'Дополнительные сведения о семье: {{family_note}}.', justify: true },
      { type: 'paragraph', text: 'Даю согласие на обработку моих персональных данных и данных членов моей семьи, а также на запрос сведений о доходах, имуществе и занятости в рамках межведомственного взаимодействия (комплексная оценка нуждаемости).', justify: true },
      { type: 'paragraph', text: 'Прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Назначить и осуществлять выплату единого пособия;',
        'При необходимости запросить недостающие сведения в рамках межведомственного взаимодействия;',
        'Уведомить меня о принятом решении.',
      ] },
      { type: 'paragraph', text: 'Пособие назначается с учётом комплексной оценки нуждаемости (среднедушевой доход, имущество, занятость) в размере 50, 75 или 100 % регионального прожиточного минимума на ребёнка. Заявление можно подать через портал Госуслуг, в клиентской службе СФР или МФЦ. Способ доставки выплаты: {{delivery}}.', noIndent: true },
      { type: 'attachment', items: [
        'Копия документа, удостоверяющего личность;',
        'Свидетельства о рождении детей;',
        'Документы о браке (расторжении брака), об установлении отцовства (при наличии);',
        'Справки о доходах — если сведения не поступают автоматически.',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },

  // ── 4-a (волна 4): бытовые заявления — соседи и повседневные жилищные ──────
  {
    slug: 'ru-util-neighbors-noise', kind: 'STANDARD', categorySlug: 'util-neighbors',
    titleRu: 'Заявление участковому о нарушении тишины и покоя (шумные соседи)',
    titleEn: 'Noise complaint to the district police officer',
    descRu: 'Заявление участковому уполномоченному полиции на систематический ночной шум от соседей (музыка, ремонт, ссоры в ночное время). Подаётся лично на приёме, через дежурную часть отдела полиции или Госуслуги; по обращению проводится проверка, виновные могут быть привлечены к административной ответственности. При бездействии участкового жалоба подаётся начальнику отдела полиции, в Управление МВД по региону или прокуратуру.',
    descEn: 'Complaint to the district police officer about systematic night noise from neighbours. Filed in person, at a police duty unit or via Gosuslugi; the officer must run a check and may bring offenders to administrative liability. If inactive — complain to the police department head, the regional MVD or the prosecutor.',
    refRu: 'ст. 6.4 КоАП РФ; ст. 12 ФЗ от 07.02.2011 № 3-ФЗ «О полиции»; ФЗ от 30.03.1999 № 52-ФЗ «О санитарно-эпидемиологическом благополучии населения»; региональный закон о тишине',
    refEn: 'Art. 6.4 of the Russian Code of Administrative Offences; Art. 12 of Federal Law No. 3-FZ on Police; Federal Law No. 52-FZ on Sanitary and Epidemiological Welfare; regional quiet-hours law',
    fields: [
      F('police_unit', 'Отдел полиции (куда)', 'Police unit', 'text', { placeholderDoc: 'УМВД России по г. Москве, ОП № 5' }),
      F('officer_name', 'ФИО участкового (кому)', 'District officer name', 'text', { placeholderDoc: 'Участковому уполномоченному полиции майору полиции Смирнову А.А.', hintRu: 'если ФИО не знаете — укажите только должность' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Козлова Елена Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Ваш адрес', 'Your address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('violator_address', 'Адрес нарушителя (квартира)', 'Violator address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 12' }),
      F('violations', 'Что происходит (даты, время, характер шума)', 'What happens (dates, time, noise)', 'textarea', { placeholderDoc: '12.10.2026 с 23:00 до 02:00 — громкая музыка; 15.10.2026 с 22:30 до 01:00 — скандал, крики; шум повторяется 3–4 раза в неделю' }),
      F('previous_reports', 'Обращались ли ранее (дежурная часть, 102)', 'Previous reports', 'text', { required: false, placeholderDoc: '15.10.2026 звонок в дежурную часть (КУСП № 4451), наряд не приезжал' }),
    ],
    body: [
      hdr(['{{police_unit}}', '{{officer_name}}'], ['от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о нарушении тишины и покоя граждан в ночное время' },
      { type: 'paragraph', text: 'Я, {{applicant_name}}, проживаю по адресу: {{applicant_address}}. Регулярно в ночное время из квартиры по адресу {{violator_address}} доносится шум, нарушающий тишину и покой проживающих: {{violations}}.', justify: true },
      { type: 'paragraph', text: '{{previous_reports}}', noIndent: true },
      { type: 'paragraph', text: 'Ночной шум превышает допустимые санитарные нормы уровней шума в жилых помещениях (ФЗ от 30.03.1999 № 52-ФЗ «О санитарно-эпидемиологическом благополучии населения»), действия соседей содержат признаки административного правонарушения (ст. 6.4 КоАП РФ; региональный закон о тишине). В соответствии со ст. 12 Федерального закона от 07.02.2011 № 3-ФЗ «О полиции» полиция обязана пресекать административные правонарушения и принимать меры по привлечению виновных к ответственности. Прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Провести проверку по изложенным фактам, в том числе с выходом по адресу {{violator_address}};',
        'Установить лиц, нарушающих тишину, и провести с ними профилактическую беседу;',
        'При подтверждении нарушений привлечь виновных к административной ответственности;',
        'О результатах рассмотрения сообщить мне письменно по указанному адресу.',
      ] },
      { type: 'paragraph', text: 'В случае бездействия по настоящему обращению обжалую его начальнику отдела полиции, в Управление МВД России по субъекту РФ и в прокуратуру.', noIndent: true },
      { type: 'attachment', items: [
        'Фотоматериалы, аудио- и видеозаписи (при наличии);',
        'Копии предыдущих обращений и ответов на них (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-util-neighbors-flood', kind: 'STANDARD', categorySlug: 'util-neighbors',
    titleRu: 'Претензия соседу о возмещении ущерба от залива квартиры',
    titleEn: 'Pre-court claim to the neighbour for apartment flood damage',
    descRu: 'Досудебная претензия соседу, по вине которого затоплена квартира (неисправная сантехника, забытый кран, стиральная машина). Подайте её после составления акта о заливе — акт оформляет управляющая организация или аварийная служба с участием обеих сторон. В претензии укажите сумму ущерба и срок добровольного возмещения; при отказе следующий шаг — исковое заявление в суд.',
    descEn: 'Pre-court claim to the neighbour whose faulty plumbing flooded your apartment. File it after the flood act is drawn up by the management company; state the damage amount and the deadline for voluntary compensation, otherwise sue.',
    refRu: 'ст. 15, 210, 1064 ГК РФ; ч. 4 ст. 30 ЖК РФ',
    refEn: 'Art. 15, 210, 1064 of the Civil Code; Art. 30(4) of the Housing Code',
    fields: [
      F('neighbor_name', 'ФИО соседа (кому)', 'Neighbour name', 'text', { half: true, placeholderDoc: 'Петрову Ивану Сергеевичу', hintRu: 'в дательном падеже' }),
      F('neighbor_address', 'Адрес соседа', 'Neighbour address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 12' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Козлова Елена Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Ваш адрес (затопленная квартира)', 'Your address (flooded apartment)', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('flood_date', 'Дата залива', 'Flood date', 'date', { half: true }),
      F('flood_cause', 'Причина залива', 'Flood cause', 'textarea', { placeholderDoc: 'разрыв гибкой подводки смесителя на кухне в квартире сверху' }),
      F('act_info', 'Акт о заливе', 'Flood record', 'text', { placeholderDoc: 'акт о заливе от 13.10.2026 № 12, составлен ООО «УК Центральная» с участием обеих сторон' }),
      F('damage_desc', 'Что повреждено', 'What was damaged', 'textarea', { placeholderDoc: 'натяжной потолок, обои в гостиной и спальне, корпусная мебель, телевизор' }),
      F('amount', 'Сумма ущерба, руб.', 'Damage amount, RUB', 'number', { half: true, placeholderDoc: '85000' }),
      F('refund_deadline', 'Срок добровольного возмещения', 'Deadline for compensation', 'text', { half: true, placeholderDoc: '10 календарных дней с даты получения претензии' }),
    ],
    body: [
      hdr(['{{neighbor_name}}', '{{neighbor_address}}'], ['от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ПРЕТЕНЗИЯ' },
      { type: 'subtitle', text: 'о возмещении ущерба, причинённого заливом квартиры' },
      { type: 'paragraph', text: 'Я, {{applicant_name}}, — собственник квартиры по адресу: {{applicant_address}}. {{flood_date}} квартира была затоплена по вине проживающих в вашей квартире: {{flood_cause}}.', justify: true },
      { type: 'paragraph', text: 'Факт залива зафиксирован актом: {{act_info}}. В результате залива повреждены: {{damage_desc}}. Размер ущерба подтверждён актом осмотра (отчётом независимой оценки) и составляет {{amount}} рублей.', justify: true },
      { type: 'paragraph', text: 'В соответствии со статьями 15, 1064 ГК РФ вред, причинённый имуществу гражданина, подлежит возмещению в полном объёме лицом, причинившим вред. Собственник жилого помещения несёт бремя его содержания и отвечает за неисправное инженерное оборудование квартиры (ст. 210 ГК РФ, ч. 4 ст. 30 ЖК РФ). Требую:', justify: true },
      { type: 'list', numbered: true, items: [
        'В срок {{refund_deadline}} возместить ущерб в размере {{amount}} рублей (наличными под расписку или перечислением на мой счёт);',
        'При необходимости согласовать со мной дату повторного осмотра квартиры;',
        'Письменно сообщить мне о принятом решении.',
      ] },
      { type: 'paragraph', text: 'В случае отказа или оставления претензии без ответа обращусь в суд с требованиями о взыскании суммы ущерба, расходов на независимую оценку, процентов по статье 395 ГК РФ и компенсации морального вреда. Претензия носит досудебный характер.', noIndent: true },
      { type: 'attachment', items: [
        'Копия акта о заливе;',
        'Фотоматериалы повреждений;',
        'Отчёт об оценке ущерба (при наличии);',
        'Копия документа о праве собственности.',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-util-neighbors-sanitation', kind: 'STANDARD', categorySlug: 'util-neighbors',
    titleRu: 'Жалоба в управляющую организацию на курение и антисанитарию в подъезде',
    titleEn: 'Complaint to the management company over smoking and poor sanitation in the stairwell',
    descRu: 'Жалоба в УК/ТСЖ на курение в лифте, подъезде и других помещениях общего пользования (запрещено ч. 2 ст. 12 ФЗ № 15-ФЗ, штраф — ст. 6.24 КоАП РФ) и на антисанитарное состояние общих мест: мусор на лестничных клетках, засорённый мусоропровод, насекомые. УК обязана провести осмотр с составлением акта, восстановить санитарное состояние и сообщать о нарушителях в полицию; при бездействии — жалоба в жилищную инспекцию (ст. 20 ЖК РФ).',
    descEn: 'Complaint to the management company about smoking in common areas (banned by Art. 12(2) of Law No. 15-FZ, fined under Art. 6.24 of the Administrative Code) and poor sanitation of the stairwell; the company must inspect with an act, restore cleanliness and report offenders to the police; if inactive — housing inspection (Art. 20 of the Housing Code).',
    refRu: 'ч. 2 ст. 12 ФЗ от 23.02.2013 № 15-ФЗ; ст. 6.24 КоАП РФ; ст. 161 ЖК РФ; постановления Правительства РФ от 13.08.2006 № 491, от 03.04.2013 № 290',
    refEn: 'Art. 12(2) of Federal Law No. 15-FZ; Art. 6.24 of the Code of Administrative Offences; Art. 161 of the Housing Code; Government Decrees No. 491 and No. 290',
    fields: [
      F('org_name', 'Управляющая организация (ТСЖ)', 'Management company', 'text', { half: true, placeholderDoc: 'ООО «УК „Домсервис“»' }),
      F('org_address', 'Адрес организации', 'Company address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Козлова Елена Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('house_address', 'Адрес дома', 'Building address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2' }),
      F('apartment', 'Ваша квартира', 'Your apartment', 'text', { half: true, placeholderDoc: 'кв. 3' }),
      F('place_desc', 'Где происходит (подъезд, этажи, лифт)', 'Where it happens', 'text', { half: true, placeholderDoc: 'подъезд № 2, лестничные клетки 1–9 этажей, кабина лифта' }),
      F('violations', 'Что происходит', 'What happens', 'textarea', { placeholderDoc: 'жители и их гости курят на лестничных площадках, тянется дым в квартиры, на полу окурки; мусор оставляют на площадках, мусоропровод не чистится, в холле появились насекомые' }),
      F('problem_since', 'Когда началось', 'Since when', 'text', { half: true, placeholderDoc: 'с августа 2026 года' }),
    ],
    body: [
      hdr(['{{org_name}}', '{{org_address}}'], ['от {{applicant_name}}', '{{house_address}}, {{apartment}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ЖАЛОБА' },
      { type: 'subtitle', text: 'о нарушении санитарного содержания мест общего пользования и запрета курения' },
      { type: 'paragraph', text: 'Я, {{applicant_name}}, — собственник квартиры {{apartment}} в доме {{house_address}}, обслуживаемом вашей организацией. {{problem_since}} в местах общего пользования ({{place_desc}}) происходят нарушения: {{violations}}.', justify: true },
      { type: 'paragraph', text: 'Курение табака в лифтах и помещениях общего пользования многоквартирного дома запрещено (ч. 2 ст. 12 Федерального закона от 23.02.2013 № 15-ФЗ «Об охране здоровья граждан от воздействия окружающего табачного дыма, последствий потребления табака или потребления никотинсодержащей продукции»), нарушители привлекаются к ответственности по ст. 6.24 КоАП РФ. Подъезды, лифты и мусоропроводы относятся к общему имуществу дома, которое должно содержаться в надлежащем санитарном состоянии (ст. 161 ЖК РФ; постановления Правительства РФ от 13.08.2006 № 491 и от 03.04.2013 № 290).', justify: true },
      { type: 'paragraph', text: 'На основании изложенного требую:', justify: true },
      { type: 'list', numbered: true, items: [
        'Провести осмотр подъезда с моим участием и составить акт о выявленных нарушениях;',
        'Восстановить санитарное состояние: убрать мусор и окурки, провести очистку мусоропровода, при необходимости — дезинсекцию и дератизацию;',
        'Разместить в подъезде объявления о запрете курения и правилах пользования местами общего пользования;',
        'О фактах курения и нарушении правил сообщать в органы полиции для привлечения виновных к ответственности (ст. 6.24 КоАП РФ);',
        'О принятых мерах уведомить меня письменно в установленный срок.',
      ] },
      { type: 'paragraph', text: 'При бездействии обращусь в государственную жилищную инспекцию (ст. 20 ЖК РФ), Роспотребнадзор и прокуратуру.', noIndent: true },
      { type: 'attachment', items: [
        'Фотоматериалы нарушений;',
        'Копии предыдущих обращений и ответов (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-util-household-repair', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Заявление в управляющую организацию об устранении неисправности',
    titleEn: 'Request to the management company to fix a fault',
    descRu: 'Заявление (заявка) в УК/ТСЖ/ЖСК при протечке кровли, подтоплении подвала, неисправном лифте, холодных батареях, перерывах в воде и электричестве. Организация обязана зарегистрировать заявку, провести осмотр с составлением акта и устранить неисправность в установленный срок; аварийные — немедленно. За период предоставления услуг ненадлежащего качества плата пересчитывается (Правила № 354).',
    descEn: 'Request to the management company for a roof leak, flooded basement, broken lift, cold radiators or utility outages. The company must register the request, inspect with an act and repair within the statutory time; emergency faults are fixed immediately; charges are recalculated for poor-quality service (Rules No. 354).',
    refRu: 'ст. 161, 162 ЖК РФ; Правила и нормы технической эксплуатации жилищного фонда (постановление Госстроя России от 27.09.2003 № 170); постановления Правительства РФ от 13.08.2006 № 491, от 03.04.2013 № 290',
    refEn: 'Art. 161, 162 of the Housing Code; Rules of Technical Operation of Housing Stock (State Construction Committee Decree No. 170 of 27.09.2003); Government Decrees No. 491 and No. 290',
    fields: [
      F('org_name', 'Управляющая организация (ТСЖ/ЖСК)', 'Management company', 'text', { half: true, placeholderDoc: 'ООО «УК „Домсервис“»' }),
      F('org_address', 'Адрес организации', 'Company address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('house_address', 'Адрес дома', 'Building address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2' }),
      F('apartment', 'Ваша квартира', 'Your apartment', 'text', { half: true, placeholderDoc: 'кв. 3' }),
      F('status_note', 'Вы собственник или наниматель', 'Owner or tenant', 'select', { half: true, options: ['собственник жилого помещения', 'наниматель жилого помещения по договору социального найма', 'наниматель жилого помещения по договору найма'] }),
      F('problem_kind', 'Что неисправно', 'Faulty system', 'select', { options: ['протечка кровли', 'подтопление подвала', 'неисправен лифт', 'отопление (батареи холодные, перерывы)', 'водоснабжение и канализация', 'электроснабжение', 'входная дверь, домофон, иное'] }),
      F('problem_desc', 'Описание неисправности', 'Fault description', 'textarea', { placeholderDoc: 'протекает кровля над квартирой: пятна и подтёки на потолке, отслоение обоев' }),
      F('discovered_date', 'Дата обнаружения', 'Date discovered', 'date', { half: true }),
      F('urgency', 'Характер заявки', 'Urgency', 'select', { half: true, options: ['аварийная — есть угроза жизни, здоровью или имуществу', 'обычная заявка'] }),
    ],
    body: [
      hdr(['{{org_name}}', '{{org_address}}'], ['от {{applicant_name}}', '{{house_address}}, {{apartment}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'об устранении неисправности и составлении акта обследования' },
      { type: 'paragraph', text: 'Я, {{applicant_name}}, — {{status_note}} в доме {{house_address}} (квартира {{apartment}}). {{discovered_date}} обнаружена неисправность ({{problem_kind}}): {{problem_desc}}. Характер заявки: {{urgency}}.', justify: true },
      { type: 'paragraph', text: 'Управляющая организация обязана содержать общее имущество многоквартирного дома в исправном состоянии и по заявке потребителя провести осмотр, составить акт и устранить неисправность (ст. 161, 162 ЖК РФ; постановления Правительства РФ от 13.08.2006 № 491 и от 03.04.2013 № 290). Правила и нормы технической эксплуатации жилищного фонда (постановление Госстроя России от 27.09.2003 № 170) требуют устранять протечки кровли и подтопления немедленно по обнаружении, аварии — немедленно.', justify: true },
      { type: 'paragraph', text: 'Прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Зарегистрировать настоящую заявку и сообщить мне её регистрационный номер;',
        'Провести осмотр с моим участием и составить акт обследования (один экземпляр — мне);',
        'Устранить неисправность в установленный срок и пригласить меня на проверку качества выполненных работ;',
        'Возместить ущерб, если неисправность привела к повреждению моего имущества;',
        'Произвести перерасчёт платы за услуги, предоставленные ненадлежащего качества (Правила предоставления коммунальных услуг — постановление Правительства РФ от 06.05.2011 № 354).',
      ] },
      { type: 'paragraph', text: 'В случае бездействия обращусь в государственную жилищную инспекцию (ст. 20 ЖК РФ), Роспотребнадзор и в суд. Копия заявки с отметкой о приёме остаётся у меня.', noIndent: true },
      { type: 'attachment', items: [
        'Фотоматериалы неисправности (при наличии);',
        'Копии предыдущих заявок и ответов (при наличии).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-util-household-recalc', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Заявление о перерасчёте платы за коммунальные услуги за период временного отсутствия',
    titleEn: 'Recalculation application for the period of temporary absence',
    descRu: 'Перерасчёт платы за период временного отсутствия более 5 полных календарных дней подряд делается только по услугам без приборов учёта (водоснабжение, водоотведение, газ, электричество по нормативу) и не распространяется на отопление и общедомовые нужды. Заявление подаётся в УК/РСО до отъезда или в течение 30 рабочих дней после возвращения вместе с документами, подтверждающими отсутствие.',
    descEn: 'Charges for a temporary absence longer than 5 full calendar days are recalculated only for services without meters (water, sewerage, gas, electricity by the standard) and never for heating or common-property needs. File with the management company before leaving or within 30 working days after return, attaching proof of absence.',
    refRu: 'пп. 86–92 Правил предоставления коммунальных услуг (постановление Правительства РФ от 06.05.2011 № 354)',
    refEn: 'pp. 86-92 of the Utility Services Rules (Government Decree No. 354 of 06.05.2011)',
    fields: [
      F('org_name', 'Управляющая организация / РСО (куда)', 'Management company / utility provider', 'text', { half: true, placeholderDoc: 'ООО «УК „Домсервис“»' }),
      F('org_address', 'Адрес организации', 'Company address', 'text', { half: true, placeholderDoc: 'г. Москва, ул. Ленина, д. 1' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text', { half: true, placeholderDoc: 'Смирнова Ольга Викторовна' }),
      F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '+7 900 000-00-00' }),
      F('applicant_address', 'Адрес квартиры', 'Apartment address', 'text', { placeholderDoc: 'г. Москва, ул. Пушкина, д. 2, кв. 3' }),
      F('account_no', 'Лицевой счёт', 'Account number', 'text', { half: true, placeholderDoc: 'лицевой счёт № 1234567890' }),
      F('absence_from', 'Дата начала отсутствия', 'Absence start date', 'date', { half: true }),
      F('absence_to', 'Дата окончания отсутствия', 'Absence end date', 'date', { half: true }),
      F('absent_persons', 'Кто отсутствовал', 'Who was absent', 'text', { half: true, placeholderDoc: 'все зарегистрированные: 2 человека (Смирнова О.В., Смирнов Д.О.)' }),
      F('absence_reason', 'Причина отсутствия', 'Reason', 'text', { half: true, placeholderDoc: 'работа вахтовым методом, поездка за границу' }),
      F('services', 'Услуги для перерасчёта', 'Services to recalculate', 'select', { options: ['холодное и горячее водоснабжение, водоотведение', 'электроснабжение', 'газоснабжение', 'все услуги, предоставляемые без приборов учёта'] }),
      F('proof', 'Подтверждающие документы', 'Proof documents', 'textarea', { placeholderDoc: 'приказ о командировке, копии билетов, копия страницы загранпаспорта с отметками о пересечении границы, справка о лечении в стационаре' }),
    ],
    body: [
      hdr(['{{org_name}}', '{{org_address}}'], ['от {{applicant_name}}', '{{applicant_address}}', 'тел.: {{applicant_phone}}']),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      { type: 'subtitle', text: 'о перерасчёте платы за коммунальные услуги за период временного отсутствия' },
      { type: 'paragraph', text: 'По адресу {{applicant_address}} ({{account_no}}) проживают (зарегистрированы): {{absent_persons}}. В период с {{absence_from}} по {{absence_to}} по указанному адресу никто не проживал — {{absence_reason}}.', justify: true },
      { type: 'paragraph', text: 'На основании пунктов 86–92 Правил предоставления коммунальных услуг (постановление Правительства РФ от 06.05.2011 № 354) прошу произвести перерасчёт платы за {{services}} за период временного отсутствия продолжительностью более 5 календарных дней. Перерасчёт не распространяется на отопление и коммунальные ресурсы, потреблённые на общедомовые нужды.', justify: true },
      { type: 'paragraph', text: 'Подтверждающие документы: {{proof}}.', noIndent: true },
      { type: 'paragraph', text: 'Прошу:', justify: true },
      { type: 'list', numbered: true, items: [
        'Принять документы, подтверждающие период временного отсутствия;',
        'Провести перерасчёт платы за указанный период и отразить результат в платёжном документе;',
        'Выдать (направить) мне перерасчитанную квитанцию и справку о результатах перерасчёта.',
      ] },
      { type: 'paragraph', text: 'Заявление подаётся до начала периода отсутствия или не позднее 30 рабочих дней после его окончания. В случае отказа перерасчёт может быть востребован в судебном порядке.', noIndent: true },
      { type: 'attachment', items: [
        'Документы, подтверждающие временное отсутствие (командировка, билеты, загранпаспорт, справка о лечении и т.п.);',
        'Копия документа о праве собственности (договора найма).',
      ] },
      stdSign('{{applicant_name}}'),
    ],
  }
];
