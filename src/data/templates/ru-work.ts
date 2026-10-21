// Волна 4: заявления по Трудовому кодексу РФ — базовые (запрошены пользователями).
// Оформление — ГОСТ Р 7.0.97-2016 (шапка-адресат справа, ЗАЯВЛЕНИЕ по центру,
// дата и подпись внизу). Правовые основания — только реальные статьи ТК РФ.
import type { TplDef } from '../types';
import { F, workHdr, stdSign } from './helpers';

/** Стандартная шапка работодателя (адресат справа, заявитель ниже) */
const wk = (): ReturnType<typeof workHdr> => workHdr(false);

export const TEMPLATES_RU_WORK_CORE: TplDef[] = [
  {
    slug: 'ru-work-vacation-childcare',
    kind: 'STANDARD',
    categorySlug: 'work-vacations',
    titleRu: 'Заявление на отпуск по уходу за ребёнком (до 1,5 / 3 лет)',
    titleEn: 'Childcare leave application (up to 1.5 / 3 years)',
    descRu: 'Заявление работодателю об отпуске по уходу за ребёнком до достижения им возраста полутора или трёх лет. Подаётся после окончания отпуска по беременности и родам; ежемесячное пособие до 1,5 лет назначается СФР автоматически (проактивно).',
    descEn: 'Application for parental leave until the child turns 1.5 or 3 years old. Submitted after maternity leave; the monthly allowance is granted by the Social Fund automatically.',
    refRu: 'ст. 256 Трудового кодекса РФ',
    refEn: 'Article 256 of the Russian Labour Code',
    fields: [
      F('head_position', 'Должность руководителя', 'Head position', 'text',
        { half: true, placeholderRu: 'Генеральному директору', hintRu: 'в дательном падеже' }),
      F('org_name', 'Наименование организации', 'Organization name', 'text',
        { half: true, placeholderRu: 'ООО «Ромашка»' }),
      F('head_name', 'ФИО руководителя', 'Head full name', 'text',
        { half: true, placeholderRu: 'Иванову И.И.', hintRu: 'в дательном падеже' }),
      F('applicant_position', 'Ваша должность', 'Your position', 'text',
        { half: true, placeholderRu: 'бухгалтера', hintRu: 'в родительном падеже' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text',
        { half: true, placeholderRu: 'Смирновой Ольги Викторовны', hintRu: 'в родительном падеже' }),
      F('child_name', 'ФИО ребёнка', 'Child full name', 'text',
        { required: false, half: true, placeholderRu: 'Смирнова Артёма Олеговича', hintRu: 'в родительном падеже' }),
      F('child_birthdate', 'Дата рождения ребёнка', 'Child birth date', 'date', { half: true }),
      F('until_age', 'Отпуск до достижения возраста', 'Leave until the age of', 'select', {
        half: true,
        options: ['полутора лет', 'трёх лет'],
        hintRu: 'до 1,5 лет или до 3 лет (ст. 256 ТК РФ)',
      }),
      F('benefit_line', 'Пособие по уходу', 'Allowance request', 'select', {
        options: [
          'Одновременно прошу назначить мне ежемесячное пособие по уходу за ребёнком до достижения им возраста полутора лет.',
          'Прошу предоставить только отпуск; вопрос о пособии будет решён через СФР.',
        ],
        hintRu: 'пособие до 1,5 лет назначает СФР (соцстрах) автоматически',
      }),
    ],
    body: [
      wk(),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      {
        type: 'paragraph',
        text: 'Прошу предоставить мне отпуск по уходу за ребёнком {{child_name}} (дата рождения — {{child_birthdate}}) до достижения им возраста {{until_age}}.',
        justify: true,
      },
      { type: 'paragraph', text: '{{benefit_line}}', justify: true },
      {
        type: 'attachment',
        items: ['копия свидетельства о рождении ребёнка'],
      },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-work-family-disabled-days',
    kind: 'STANDARD',
    categorySlug: 'work-family',
    titleRu: 'Заявление о 4 выходных днях по уходу за ребёнком-инвалидом',
    titleEn: 'Extra days off to care for a disabled child',
    descRu: 'Одному из родителей (опекуну, попечителю) по его письменному заявлению предоставляются четыре дополнительных оплачиваемых выходных дня в месяц для ухода за ребёнком-инвалидом. Дни распределяются между родителями по их усмотрению.',
    descEn: 'One parent (guardian) is entitled to four additional paid days off per month to care for a disabled child, upon written application. The days may be split between the parents.',
    refRu: 'ст. 262 ТК РФ; Постановление Правительства РФ от 11.10.2021 № 1720',
    refEn: 'Art. 262 of the Russian Labour Code; RF Government Decree No. 1720 of 11.10.2021',
    fields: [
      F('head_position', 'Должность руководителя', 'Head position', 'text',
        { half: true, placeholderRu: 'Генеральному директору', hintRu: 'в дательном падеже' }),
      F('org_name', 'Наименование организации', 'Organization name', 'text',
        { half: true, placeholderRu: 'ООО «Ромашка»' }),
      F('head_name', 'ФИО руководителя', 'Head full name', 'text',
        { half: true, placeholderRu: 'Иванову И.И.', hintRu: 'в дательном падеже' }),
      F('applicant_position', 'Ваша должность', 'Your position', 'text',
        { half: true, placeholderRu: 'инженера', hintRu: 'в родительном падеже' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text',
        { half: true, placeholderRu: 'Кузнецовой Марины Павловны', hintRu: 'в родительном падеже' }),
      F('child_name', 'ФИО ребёнка', 'Child full name', 'text',
        { required: false, half: true, placeholderRu: 'Кузнецова Даниила Андреевича', hintRu: 'в родительном падеже' }),
      F('month', 'Месяц предоставления', 'Month', 'text',
        { half: true, placeholderRu: 'ноябре 2026 года', hintRu: 'в предложном падеже' }),
      F('days_count', 'Количество дней (до 4)', 'Days count (up to 4)', 'number',
        { half: true, placeholderRu: '4' }),
      F('dates', 'Даты дополнительных выходных', 'Dates of the days off', 'text',
        { placeholderRu: '10 ноября 2026 г., 17 ноября 2026 г., 24 ноября 2026 г., 27 ноября 2026 г.' }),
    ],
    body: [
      wk(),
      { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
      {
        type: 'paragraph',
        text: 'На основании статьи 262 Трудового кодекса РФ прошу предоставить мне в {{month}} {{days_count}} дополнительных оплачиваемых выходных дня (дней) для ухода за ребёнком-инвалидом {{child_name}} в следующие даты: {{dates}}.',
        justify: true,
      },
      {
        type: 'attachment',
        items: [
          'копия справки об установлении инвалидности ребёнка (при первом обращении)',
          'справка с места работы другого родителя о том, что дополнительные выходные дни на запрашиваемые даты ему (ей) не предоставлялись (не требуется, если другого родителя нет или он не работает)',
        ],
      },
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'ru-work-time-weekend-consent',
    kind: 'STANDARD',
    categorySlug: 'work-time',
    titleRu: 'Согласие на работу в выходной или праздничный день',
    titleEn: 'Consent to work on a day off or public holiday',
    descRu: 'Письменное согласие работника на привлечение к работе в выходной или нерабочий праздничный день. Привлечение допускается только с согласия работника и оформляется приказом работодателя; работа оплачивается не менее чем в двойном размере либо компенсируется другим днём отдыха.',
    descEn: 'Written consent to work on a day off or public holiday. Required before the employer issues an order; the work is paid at double rate or compensated with another day off.',
    refRu: 'ст. 113, 153 Трудового кодекса РФ',
    refEn: 'Articles 113, 153 of the Russian Labour Code',
    warningRu: 'Работодатель должен издать письменный приказ о привлечении к работе. Без письменного согласия работника привлечение незаконно (исключения — чрезвычайные ситуации, ст. 113 ТК РФ).',
    warningEn: 'The employer must issue a written order. Without written consent, engaging weekend work is unlawful (except emergencies, Art. 113 of the Labour Code).',
    fields: [
      F('head_position', 'Должность руководителя', 'Head position', 'text',
        { half: true, placeholderRu: 'Генеральному директору', hintRu: 'в дательном падеже' }),
      F('org_name', 'Наименование организации', 'Organization name', 'text',
        { half: true, placeholderRu: 'ООО «Ромашка»' }),
      F('head_name', 'ФИО руководителя', 'Head full name', 'text',
        { half: true, placeholderRu: 'Иванову И.И.', hintRu: 'в дательном падеже' }),
      F('applicant_position', 'Ваша должность', 'Your position', 'text',
        { half: true, placeholderRu: 'менеджера отдела продаж', hintRu: 'в родительном падеже' }),
      F('applicant_name', 'Ваши ФИО', 'Your full name', 'text',
        { half: true, placeholderRu: 'Петровой Анны Сергеевны', hintRu: 'в родительном падеже' }),
      F('work_date', 'Дата выхода на работу', 'Work date', 'date', { half: true }),
      F('reason', 'Причина привлечения к работе', 'Reason', 'textarea', {
        placeholderRu: 'для выполнения заранее непредвиденных работ, от срочного выполнения которых зависит в дальнейшем нормальная работа организации',
        hintRu: 'указывается в приказе работодателя',
      }),
      F('compensation', 'Компенсация за работу', 'Compensation', 'select', {
        options: [
          'оплату не менее чем в двойном размере (статья 153 ТК РФ)',
          'оплату в одинарном размере с предоставлением другого дня отдыха',
        ],
        hintRu: 'выберите: двойная оплата или одинарная + отгул',
      }),
    ],
    body: [
      wk(),
      { type: 'title', text: 'СОГЛАСИЕ' },
      {
        type: 'paragraph',
        text: 'Я, {{applicant_name}}, должность {{applicant_position}}, даю согласие на привлечение меня к работе в выходной (нерабочий праздничный) день {{work_date}}.',
        justify: true,
      },
      {
        type: 'paragraph',
        text: 'Работа в указанный день необходима в связи со следующим: {{reason}}',
        justify: true,
      },
      {
        type: 'paragraph',
        text: 'В качестве компенсации за работу в выходной (нерабочий праздничный) день прошу обеспечить {{compensation}}.',
        justify: true,
      },
      stdSign('{{applicant_name}}'),
    ],
  },
];
