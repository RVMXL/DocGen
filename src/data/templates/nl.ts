// Шаблоны для Нидерландов (язык документов — нидерландский).
// Основано на законодательстве Нидерландов:
// Burgerlijk Wetboek (BW): art. 7:634 — wettelijke vakantiedagen (4× de wekelijkse
// arbeidsduur, min. 20 dagen bij volledige werkweek); art. 7:629 — loondoorbetaling
// bij ziekte (tot 104 weken); art. 7:620 — calamiteitenverlof (kort verzuimverlof);
// art. 7:655 — getuigschrift; art. 7:676 — opzegtermijn werknemer (één maand);
// art. 7:609–7:610b — Wet flexibel werken (wijziging arbeidsduur, werkplek,
// werkzaamheden); art. 7:611 — loon/loonstrook jo. Wet op de loonbelasting 1964
// (art. 32); art. 7:669 — redelijke grond voor ontslag, herplaatsing.
// Wet arbeid en zorg (WAZO): zwangerschaps- en bevallingsverlof.
// WW (Wet werk en inkomen naar arbeidsvermogen) en UWV: besluiten en bezwaar
// (Awb h. 6/7). AOW (Algemene ouderdomswet) — Sociale Verzekeringsbank (SVB).
// BW 7:17 jo. 6:74 — consumentenkoop (conformiteit, aansprakelijkheid);
// BW 7:206 — onderhoudsplicht verhuurder; BW 6:82 — ingebrekestelling;
// BW 6:162 — onrechtmatige daad; BW 7:456 — WGBO (inzage medisch dossier);
// BW 7A:1978 — schuldbekentenis; BW 3:60 — volmacht (machtiging).
// Rv art. 93 — bevoegdheid kantonrechter (vorderingen tot € 25.000).
// Algemene wet bestuursrecht (Awb): art. 6:7 — bezwaarschrift binnen 6 weken
// (Belastingdienst, UWV); hoofdstuk 9, art. 9:1 — klachtrecht bij bestuursorgaan
// (gemeente). Wet Nationale ombudsman — klacht bij de ombudsman.
// AVG (Verordening (EU) 2016/679), art. 77 — klacht bij de Autoriteit
// Persoonsgegevens. Klachten- en geschillenregeling Kifid — bankgeschillen.
// Wkkgz — klachtrecht zorginstellingen (termijn 6 weken, verlengbaar met 4).
// Wet primair onderwijs (WPO) — aanmelding basisschool; Wet op het hoger
// onderwijs en wetenschappelijk onderzoek (WHW) — inschrijving, studieverlof,
// collegegeld (afdeling 7.5). Postwet (Stb. 2009, 237) — klachtrecht postaanbieder
// (PostNL). APV en Wet milieubeheer — geluidsoverlast; Wet BRP — doorgeven
// verhuizing.
import type { TplDef } from '../types';
import { F } from './helpers';

// Шапка письма работодателю: адресат справа, заявитель ниже (нидерл. делопроизводство)
const workHdr = (): TplDef['body'] => [
  { type: 'lines', align: 'right', items: ['{{org_name}}', 't.a.v. {{head_name}}', '', '{{applicant_name}}', '{{applicant_address}}', '{{date_today}}'] },
];

// Шапка письма в организацию/ведомство
const orgHdr = (): TplDef['body'] => [
  { type: 'lines', align: 'right', items: ['{{recipient_name}}', '{{recipient_address}}', '', '{{applicant_name}}', '{{applicant_address}}', '{{date_today}}'] },
];

// Шапка обращения в суд: суд справа, заявитель ниже
const courtHdrNL = (): TplDef['body'] => [
  { type: 'lines', align: 'right', items: ['{{court_name}}', 't.a.v. de kantonrechter', '', '{{applicant_name}}', '{{applicant_address}}', '{{date_today}}'] },
];

// Шапка договора/декларации: место и дата справа
const docHdr = (): TplDef['body'] => [
  { type: 'lines', align: 'right', items: ['{{plaats}}', '{{date_today}}'] },
];

// Подпись: вежливое завершение слева, подпись справа
const sig = (namePh: string): TplDef['body'][number] => ({
  type: 'signature', leftText: 'Met vriendelijke groet,', rightText: `_______________ / ${namePh} /`,
});

const workFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('org_name', 'Название компании', 'Company name', 'text', { half: true, placeholderDoc: 'Bakkerij Van Dijk B.V.' }),
  F('head_name', 'Кому (HR/руководитель)', 'Submit to', 'text', { half: true, placeholderDoc: 'Mevrouw S. Jansen, afdeling HR' }),
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Anna de Vries' }),
  F('applicant_address', 'Ваш адрес', 'Your address', 'text', { half: true, placeholderDoc: 'Keizersgracht 12, 1015 CS Amsterdam' }),
  ...extra,
];

const personFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Anna de Vries' }),
  F('applicant_address', 'Ваш адрес', 'Your address', 'text', { half: true, placeholderDoc: 'Keizersgracht 12, 1015 CS Amsterdam' }),
  ...extra,
];

const orgFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('recipient_name', 'Кому (организация)', 'Recipient (organization)', 'text', { half: true, placeholderDoc: 'Gemeente Utrecht' }),
  F('recipient_address', 'Адрес получателя', 'Recipient address', 'text', { half: true, placeholderDoc: 'Postbus 16200, 3502 CE Utrecht' }),
  ...personFields(extra),
];

const courtFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('court_name', 'Суд (kantongerecht)', 'Court', 'text', { half: true, placeholderDoc: 'Kantongerecht Amsterdam' }),
  ...personFields(extra),
];

export const TEMPLATES_NL: TplDef[] = [
  {
    slug: 'nl-work-vakantie', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление на ежегодный оплачиваемый отпуск (vakantiedagen)',
    titleDoc: 'Aanvraag vakantiedagen', titleEn: 'Annual leave application',
    descRu: 'Заявление работодателю о предоставлении ежегодного оплачиваемого отпуска. По BW 7:634 отпуск составляет 4× недельную рабочую нагрузку (минимум 20 дней при полной рабочей неделе); работодатель учитывает пожелания работника, если это возможно.',
    descEn: 'Annual leave application. Under BW 7:634 the statutory holiday amounts to 4× the weekly working hours (at least 20 days for a full working week); the employer takes the employee’s wishes into account where possible.',
    refRu: 'BW 7:634 (Burgerlijk Wetboek) — отпуск: 4× недельная рабочая нагрузка, минимум 20 дней',
    refEn: 'Article 7:634 of the Dutch Civil Code (BW) — statutory leave of 4× the weekly working hours, at least 20 days',
    fields: [
      ...workFields([
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
        F('date_to', 'Дата окончания', 'End date', 'date', { half: true }),
        F('days', 'Количество дней', 'Number of days', 'number', { half: true, placeholderRu: '20', placeholderDoc: '20' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'AANVRAAG VAKANTIEDAGEN' },
      { type: 'paragraph', text: 'Betreft: aanvraag vakantiedagen van {{date_from}} tot en met {{date_to}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij verzoek ik u om mijn wettelijke vakantiedagen op te nemen van {{date_from}} tot en met {{date_to}}, zijnde {{days}} dagen. Op grond van artikel 7:634 van het Burgerlijk Wetboek heeft iemand met een volledige werkweek recht op ten minste twintig vakantiedagen per jaar.', justify: true },
      { type: 'paragraph', text: 'Ik neem aan dat u deze dagen voor mij reserveert en zal mijn werkzaamheden tijdig overdragen, zodat mijn afwezigheid de lopende taken niet belemmert. Ik hoor graag binnen korte tijd of de aanvraag kan worden gehonoreerd.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-work-arbeidsduur', kind: 'STANDARD', categorySlug: 'work-time',
    titleRu: 'Заявление об изменении рабочего времени (Wet flexibel werken)',
    titleDoc: 'Verzoek wijziging arbeidsduur', titleEn: 'Request to change working hours (Wet flexibel werken)',
    descRu: 'Заявление об изменении рабочей недели по Wet flexibel werken (BW 7:609–610b): работник вправе просить изменить продолжительность рабочего времени; отказ возможен только по веским производственным причинам и должен быть мотивирован.',
    descEn: 'Request to change the weekly working hours under the Wet flexibel werken (BW 7:609–610b): the employer may only refuse for compelling business reasons, with written motivation.',
    refRu: 'Wet flexibel werken (BW 7:609–7:610b) — изменение рабочей нагрузки; отказ только по веским производственным причинам',
    refEn: 'Wet flexibel werken (BW 7:609–7:610b) — change of working hours; refusal only for compelling business reasons',
    fields: [
      ...workFields([
        F('huidige_arbeidsduur', 'Текущая нагрузка', 'Current hours', 'text', { half: true, placeholderDoc: '40 uur' }),
        F('nieuwe_arbeidsduur', 'Желаемая нагрузка', 'Requested hours', 'text', { half: true, placeholderDoc: '32 uur' }),
        F('reden', 'Причина', 'Reason', 'select', {
          half: true,
          options: [
            'zorg voor kinderen',
            'mantelzorg voor een familielid',
            'vervolgopleiding of studie',
            'combinatie van werk en privéleven',
            'overige persoonlijke omstandigheden',
          ],
        }),
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'VERZOEK WIJZIGING ARBEIDSDUUR' },
      { type: 'paragraph', text: 'Betreft: verzoek tot wijziging van mijn arbeidsduur (Wet flexibel werken)', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Op grond van de Wet flexibel werken (artikelen 7:609 tot en met 7:610b van het Burgerlijk Wetboek) verzoek ik u mijn arbeidsduur te wijzigen van {{huidige_arbeidsduur}} naar {{nieuwe_arbeidsduur}} per week, met ingang van {{date_from}}. Als reden voor dit verzoek geef ik op: {{reden}}.', justify: true },
      { type: 'paragraph', text: 'Ik verzoek u om binnen de daarvoor geldende termijn schriftelijk op dit verzoek te reageren. Indien u het verzoek niet kunt honoreren, verzoek ik u dit te motiveren met zwaarwegende bedrijfs- of dienstbelangen en met mij in overleg te treden over een alternatief.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-work-zwangerschap', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Уведомление о декретном отпуске (WAZO)',
    titleDoc: 'Melding zwangerschapsverlof', titleEn: 'Notification of maternity leave (WAZO)',
    descRu: 'Уведомление работодателя о беременности и начале декретного отпуска (zwangerschaps- en bevallingsverlof) по Wet arbeid en zorg (WAZO): в общей сложности 16 недель (4–6 недель до предположительной даты родов, 10–12 после). Работодатель выдаёт справку для пособия UWV.',
    descEn: 'Notification of pregnancy and maternity leave (zwangerschaps- en bevallingsverlof) under the Wet arbeid en zorg (WAZO): 16 weeks in total, starting 4–6 weeks before the expected delivery date. The employer provides a statement for the UWV benefit.',
    refRu: 'Wet arbeid en zorg (WAZO) — декретный отпуск и пособие по беременности',
    refEn: 'Wet arbeid en zorg (WAZO) — maternity leave and pregnancy benefit',
    fields: [
      ...workFields([
        F('uitgerekend', 'Предположительная дата родов', 'Expected delivery date', 'date', { half: true }),
        F('date_from', 'Дата начала отпуска', 'Leave start date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'MELDING ZWANGERSCHAPSVERLOF' },
      { type: 'paragraph', text: 'Betreft: melding zwangerschapsverlof (Wet arbeid en zorg, WAZO)', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij meld ik u dat ik zwanger ben en dat de vermoedelijke bevallingsdatum {{uitgerekend}} is. Ik ga ervan uit met zwangerschapsverlof te gaan per {{date_from}}, conform de Wet arbeid en zorg (WAZO).', justify: true },
      { type: 'paragraph', text: 'Ik verzoek u om de benodigde werkgeversverklaring te verstrekken voor de aanvraag van de zwangerschapsuitkering bij het UWV en om de planning van mijn werkzaamheden in overleg met mij af te stemmen. Ik houd u op de hoogte van de verdere ontwikkelingen.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-work-calamiteiten', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Заявление на чрезвычайный отпуск (calamiteitenverlof)',
    titleDoc: 'Verzoek calamiteitenverlof', titleEn: 'Request for calamity leave',
    descRu: 'Заявление на краткосрочный оплачиваемый отпуск-отгул по семейным обстоятельствам (calamiteitenverlof, BW 7:620): внезапная болезнь близких, смерть родственника, аварийные ситуации; оплачивается за часы необходимого отсутствия.',
    descEn: 'Request for short paid leave for urgent family circumstances (calamiteitenverlof, BW 7:620): sudden illness of relatives, bereavement, emergencies; paid for the hours of necessary absence.',
    refRu: 'BW 7:620 (Burgerlijk Wetboek) — calamiteitenverlof (краткосрочный отпуск по семейным обстоятельствам)',
    refEn: 'Article 7:620 of the Dutch Civil Code (BW) — calamity leave (short-term absence for family circumstances)',
    fields: [
      ...workFields([
        F('reden', 'Причина', 'Reason', 'select', {
          half: true,
          options: [
            'plotselinge ziekte van een huisgenoot',
            'overlijden van een familielid',
            'ongeval in de privé-sfeer',
            'dringende buitengewone gezinsomstandigheden',
          ],
        }),
        F('date_from', 'Дата отпуска', 'Date of leave', 'date', { half: true }),
        F('uren', 'Количество часов', 'Number of hours', 'number', { half: true, placeholderRu: '4', placeholderDoc: '4' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'VERZOEK CALAMITEITENVERLOF' },
      { type: 'paragraph', text: 'Betreft: verzoek calamiteitenverlof op {{date_from}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij verzoek ik om calamiteitenverlof (kort verzuimverlof) conform artikel 7:620 van het Burgerlijk Wetboek, op {{date_from}}, voor een omvang van {{uren}} uur. Als reden geef ik op: {{reden}}.', justify: true },
      { type: 'paragraph', text: 'Calamiteitenverlof geldt voor de uren dat ik noodzakelijkerwijs van mijn werk verstoken ben en wordt doorbetaald. Ik zal mijn taken zo spoedig mogelijk weer oppakken en zorgdragen voor de noodzakelijke overdracht.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-work-opzeg', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Заявление об увольнении по собственному желанию (opzegbrief)',
    titleDoc: 'Opzegbrief werknemer', titleEn: 'Resignation letter (one-month notice)',
    descRu: 'Заявление об увольнении по инициативе работника с соблюдением срока уведомления: по BW 7:676 работник соблюдает срок в один месяц. Письмо также просит справку (getuigschrift, BW 7:655) и окончательный расчёт.',
    descEn: 'Resignation letter observing the notice period: under BW 7:676 the employee observes a one-month notice period. The letter also requests a certificate of employment (BW 7:655) and the final settlement.',
    refRu: 'BW 7:676 (Burgerlijk Wetboek) — срок уведомления работника: один месяц',
    refEn: 'Article 7:676 of the Dutch Civil Code (BW) — employee’s notice period of one month',
    fields: [
      ...workFields([
        F('date_from', 'Последний рабочий день', 'Last working day', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'OPZEGBRIEF WERKNEMER' },
      { type: 'paragraph', text: 'Betreft: opzegging van mijn arbeidsovereenkomst per {{date_from}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij zeg ik mijn arbeidsovereenkomst op, met inachtneming van de opzegtermijn van één maand die in artikel 7:676 van het Burgerlijk Wetboek voor de werknemer geldt. Ik verzoek u om mijn dienstverband per {{date_from}} te beëindigen.', justify: true },
      { type: 'paragraph', text: 'Ik draag zorg voor een zorgvuldige overdracht van mijn werkzaamheden. Na afloop van het dienstverband verzoek ik om een getuigschrift conform artikel 7:655 BW en om de eindafrekening van mijn salaris en vakantiedagen.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-work-ontslag-bezwaar', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Возражения в UWV против увольнения (zienswijze)',
    titleDoc: 'Zienswijze bij het UWV tegen ontslag', titleEn: 'Statement of views to the UWV against dismissal',
    descRu: 'Возражения работника в UWV по ходатайству работодателя о разрешении на увольнение (dossiernummer UWV): отсутствие разумного основания (BW 7:669), не исследовано перетрудоустройство (herplaatsing).',
    descEn: 'The employee’s statement of views to the UWV regarding the employer’s request for permission to dismiss (UWV dossier number): no reasonable ground under BW 7:669, redeployment not (sufficiently) explored.',
    refRu: 'BW 7:669 (Burgerlijk Wetboek) — разумное основание для увольнения и перетрудоустройство; zienswijze при процедуре UWV',
    refEn: 'Article 7:669 of the Dutch Civil Code (BW) — reasonable ground for dismissal and redeployment; statement of views in the UWV procedure',
    fields: [
      ...orgFields([
        F('employer_name', 'Работодатель (истец)', 'Employer (applicant)', 'text', { half: true, placeholderDoc: 'Handelsbedrijf Van Leeuwen B.V.' }),
        F('uwv_dossier', 'Dossiernummer UWV', 'UWV dossier number', 'text', { half: true, placeholderDoc: '1234567' }),
        F('gronden', 'Возражения (кратко)', 'Grounds (short)', 'text', { half: true, placeholderDoc: 'geen redelijke grond; herplaatsing niet onderzocht' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'ZIENSWIJZE BIJ HET UWV TEGEN ONTSLAG' },
      { type: 'paragraph', text: 'Betreft: zienswijze bij het verzoek om toestemming tot opzegging, dossiernummer {{uwv_dossier}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij breng ik mijn zienswijze naar voren bij het verzoek van {{employer_name}} om toestemming voor het opzeggen van mijn arbeidsovereenkomst, onder dossiernummer {{uwv_dossier}}.', justify: true },
      { type: 'paragraph', text: 'Ik ben van mening dat er geen redelijke grond voor het ontslag aanwezig is in de zin van artikel 7:669 BW en dat herplaatsing in een andere passende functie niet (voldoende) is onderzocht. Mijn bezwaren zijn kort samengevat: {{gronden}}. Ik verzoek het UWV om het verzoek af te wijzen; bewijsstukken worden op verzoek toegezonden.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-work-ziekmelding', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Уведомление о болезни (ziekmelding)',
    titleDoc: 'Ziekmelding', titleEn: 'Sickness notification',
    descRu: 'Уведомление работодателя о временной нетрудоспособности. По BW 7:629 работодатель продолжает выплачивать зарплату (первый год — 100%, второй — 70%) в течение максимум 104 недель; сотрудник сотрудничает с корпоративным врачом.',
    descEn: 'Notification of temporary incapacity for work. Under BW 7:629 the employer continues to pay wages (100% in the first year, 70% in the second) for up to 104 weeks; the employee cooperates with the occupational physician.',
    refRu: 'BW 7:629 (Burgerlijk Wetboek) — сохранение зарплаты при болезни (до 104 недель)',
    refEn: 'Article 7:629 of the Dutch Civil Code (BW) — continued payment of wages during sickness (up to 104 weeks)',
    fields: [
      ...workFields([
        F('date_from', 'Первый день болезни', 'First sick day', 'date', { half: true }),
        F('date_to', 'Ожидаемое окончание', 'Expected end', 'date', { half: true }),
        F('klachten', 'Жалобы (кратко)', 'Complaints (short)', 'text', { half: true, placeholderDoc: 'griep met hoge koorts' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'ZIEKMELDING' },
      { type: 'paragraph', text: 'Betreft: ziekmelding per {{date_from}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij meld ik mij ziek per {{date_from}}. Als klachten geef ik op: {{klachten}}. Ik verwacht voorlopig tot en met {{date_to}} niet in staat te zijn om mijn werkzaamheden te verrichten.', justify: true },
      { type: 'paragraph', text: 'Ik houd u op de hoogte van mijn herstel en werk waar nodig mee aan de re-integratie conform de richtlijnen van de bedrijfsarts. Ik verzoek u om mij te informeren over de bij uw organisatie geldende procedure bij ziekteverzuim.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-work-getuigschrift', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Запрос справки с места работы (getuigschrift)',
    titleDoc: 'Verzoek getuigschrift', titleEn: 'Request for a certificate of employment',
    descRu: 'Запрос справки от работодателя о характере и сроке работы. По BW 7:655 работодатель обязан по первому требованию выдать справку (getuigschrift) о выполнявшихся обязанностях и периоде занятости.',
    descEn: 'Request for a certificate from the employer about the nature and duration of the work. Under BW 7:655 the employer must, upon first request, issue a certificate of employment (getuigschrift).',
    refRu: 'BW 7:655 (Burgerlijk Wetboek) — обязанность работодателя выдать справку (getuigschrift)',
    refEn: 'Article 7:655 of the Dutch Civil Code (BW) — employer’s obligation to issue a certificate of employment',
    fields: [
      ...workFields([
        F('date_from', 'Начало работы', 'Employment start', 'date', { half: true }),
        F('date_to', 'Окончание работы', 'Employment end', 'date', { half: true }),
        F('functie', 'Должность', 'Job title', 'text', { half: true, placeholderDoc: 'verkoopmedewerker' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'VERZOEK GETUIGSCHRIFT' },
      { type: 'paragraph', text: 'Betreft: verzoek om een getuigschrift (artikel 7:655 BW)', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij verzoek ik om een getuigschrift over mijn werkzaamheden in dienst van {{org_name}}. Ik heb daar van {{date_from}} tot en met {{date_to}} gewerkt als {{functie}}.', justify: true },
      { type: 'paragraph', text: 'Op grond van artikel 7:655 van het Burgerlijk Wetboek is de werkgever verplicht om op eerste verzoek een getuigschrift af te geven over de aard en de duur van de werkzaamheden. Ik verzoek om toezending aan het bovengenoemde adres.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-work-salarisstrook', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Запрос дубликата расчётного листа (salarisstrook)',
    titleDoc: 'Verzoek salarisstrook', titleEn: 'Request for a (duplicate) payslip',
    descRu: 'Запрос дубликата расчётного листа за указанный месяц. Право следует из BW 7:611 и Wet op de loonbelasting 1964 (art. 32): работник вправе получить детализированную информацию о зарплате и удержаниях.',
    descEn: 'Request for a duplicate payslip for a specified month. The right follows from BW 7:611 and the Wet op de loonbelasting 1964 (art. 32): the employee is entitled to a specified statement of wages and deductions.',
    refRu: 'BW 7:611 jo. Wet op de loonbelasting 1964, art. 32 — расчётный лист (loonstrook)',
    refEn: 'Article 7:611 BW in conjunction with the Wet op de loonbelasting 1964, art. 32 — payslip (loonstrook)',
    fields: [
      ...workFields([
        F('periode', 'Период (месяц/год)', 'Period (month/year)', 'text', { half: true, placeholderDoc: 'maart 2026' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'VERZOEK SALARISSTROOK' },
      { type: 'paragraph', text: 'Betreft: verzoek om een (dubbel) exemplaar van mijn salarisstrook over {{periode}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij verzoek ik om een (dubbel) exemplaar van mijn salarisstrook over {{periode}}. Op grond van artikel 7:611 van het Burgerlijk Wetboek en de Wet op de loonbelasting 1964 heb ik recht op een gespecificeerde opgaaf van mijn loon en de inhoudingen.', justify: true },
      { type: 'paragraph', text: 'Ik verzoek om toezending per post of via de digitale werkomgeving. Mochten er kosten verbonden zijn aan de verstrekking, dan verneem ik dat graag vooraf.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-court-verkoper', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Претензия продавцу (consumentenkoop, BW 7:17)',
    titleDoc: 'Klacht bij verkoper', titleEn: 'Complaint to the seller (consumer sale)',
    descRu: 'Досудебная претензия продавцу по товару с дефектом: по BW 7:17 вещь должна соответствовать договору; потребитель вправе требовать ремонт, замену, снижение цены или расторжение. Упоминается возможность жалобы в Geschillencommissie или к kantonrechter.',
    descEn: 'Pre-court complaint to the seller about a defective product: under BW 7:17 the item must conform to the contract; the consumer may demand repair, replacement, price reduction or termination. Mentions a dispute committee or the district court as next steps.',
    refRu: 'BW 7:17 (conformiteit bij koop) jo. BW 6:74 — consumentenkoop',
    refEn: 'Article 7:17 BW (conformity in sale) in conjunction with BW 6:74 — consumer sale',
    fields: [
      ...orgFields([
        F('product', 'Товар', 'Product', 'text', { half: true, placeholderDoc: 'een wasmachine, merk CleanMax' }),
        F('aankoopdatum', 'Дата покупки', 'Purchase date', 'date', { half: true }),
        F('factuurnummer', 'Номер чека/фактуры', 'Invoice number', 'text', { half: true, placeholderDoc: '2026-0123' }),
        F('bedrag', 'Сумма покупки (€)', 'Purchase amount (€)', 'number', { half: true, placeholderDoc: '499,00' }),
        F('defect', 'Описание дефекта', 'Defect description', 'text', { placeholderDoc: 'de trommel maakt een luid lawaai en de deur sluit niet goed' }),
        F('eis', 'Требование', 'Demand', 'select', {
          half: true,
          options: [
            'reparatie van het product',
            'vervanging van het product',
            'terugname van het product en terugbetaling van de koopsom',
            'korting op de koopsom',
          ],
        }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'KLACHT BIJ VERKOPER' },
      { type: 'paragraph', text: 'Betreft: klacht over {{product}} (aankoop op {{aankoopdatum}}, factuurnummer {{factuurnummer}})', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Op {{aankoopdatum}} heb ik bij uw bedrijf {{product}} gekocht voor {{bedrag}} (factuurnummer {{factuurnummer}}). Het product beantwoordt niet aan de overeenkomst: {{defect}}.', justify: true },
      { type: 'paragraph', text: 'Op grond van artikel 7:17 van het Burgerlijk Wetboek heeft de consument recht op een zaak die aan de overeenkomst beantwoordt. Ik verzoek u om binnen twee weken uit te komen voor: {{eis}}. Indien u niet binnen deze termijn reageert, overweeg ik een klacht bij de geschillencommissie of een procedure bij de kantonrechter.', justify: true },
      { type: 'attachment', items: ['Kopie van de aankoopbon / factuur', 'Foto’s van het gebrek'], label: 'Bijlage:' },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-court-verhuurder-ingebreke', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Официальное напоминание арендодателю (ingebrekestelling)',
    titleDoc: 'Ingebrekestelling verhuurder', titleEn: 'Formal notice of default to the landlord',
    descRu: 'Письменное напоминание (ingebrekestelling) арендодателю, не устранившему дефект жилья: по BW 7:206 арендодатель отвечает за поддержание жилья; по BW 6:82 должник считается в просрочке после письменного напоминания. Далее — ремонт за счёт арендодателя или kantonrechter.',
    descEn: 'Written notice of default to a landlord who has not repaired a defect: under BW 7:206 the landlord is responsible for maintaining the dwelling; under BW 6:82 the debtor is in default after a written notice. Repair costs or the district court may follow.',
    refRu: 'BW 6:82 (ingebrekestelling) jo. BW 7:206 (обязанность арендодателя по поддержанию жилья)',
    refEn: 'Article 6:82 BW (notice of default) in conjunction with BW 7:206 (landlord’s maintenance duty)',
    fields: [
      ...orgFields([
        F('adres_huurwoning', 'Адрес арендованного жилья', 'Rented dwelling address', 'text', { half: true, placeholderDoc: 'Javastraat 25, 1094 HB Amsterdam' }),
        F('gebrek', 'Дефект/неисправность', 'Defect', 'text', { half: true, placeholderDoc: 'lek in het dak, schimmel in de badkamer' }),
        F('datum_gemeld', 'Дата ранее сообщённого', 'Date of earlier report', 'date', { half: true }),
        F('termijn', 'Срок для устранения', 'Deadline to repair', 'select', {
          half: true,
          options: ['binnen 7 dagen', 'binnen 14 dagen', 'binnen 30 dagen'],
        }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'INGEBREKESTELLING VERHUURDER' },
      { type: 'paragraph', text: 'Betreft: ingebrekestelling verhuurder — onderhoud woning {{adres_huurwoning}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Ik ben huurder van de woning {{adres_huurwoning}}. Op {{datum_gemeld}} heb ik u schriftelijk gewezen op het volgende gebrek: {{gebrek}}. Tot op heden heeft u dit gebrek niet verholpen.', justify: true },
      { type: 'paragraph', text: 'U bent op grond van artikel 7:206 van het Burgerlijk Wetboek verplicht om het gehuurde in een goede staat van onderhoud te houden. Bij deze stel ik u schriftelijk in gebreke en verzoek ik u om het gebrek binnen {{termijn}} te verhelpen. Na het verstrijken van deze termijn kan ik de reparatie laten uitvoeren en de kosten op u verhalen, alsmede een procedure bij de kantonrechter starten.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-court-kantonrechter', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Обращение в кантональный суд (kantonrechter, до € 25 000)',
    titleDoc: 'Verzoekschrift aan de kantonrechter', titleEn: 'Petition to the district court (kantonrechter)',
    descRu: 'Письменное обращение в кантональный суд с требованием о возмещении ущерба. По art. 93 Rv кантонный суд рассматривает иски до € 25 000; просится назначить заседание с вызовом обеих сторон, доказательства прилагаются.',
    descEn: 'Written petition to the district court (kantonrechter) claiming damages. Under art. 93 Rv the kantonrechter hears claims up to € 25,000; a hearing with both parties is requested and evidence is attached.',
    refRu: 'Rv art. 93 — компетенция kantonrechter по искам до € 25.000',
    refEn: 'Article 93 of the Code of Civil Procedure (Rv) — jurisdiction of the kantonrechter for claims up to € 25,000',
    fields: [
      ...courtFields([
        F('gedaagde_name', 'Ответчик (имя)', 'Defendant (name)', 'text', { half: true, placeholderDoc: 'Firma Bakker & Zn' }),
        F('gedaagde_address', 'Адрес ответчика', 'Defendant address', 'text', { half: true, placeholderDoc: 'Marktplein 3, 1011 PV Amsterdam' }),
        F('datum_feit', 'Дата события', 'Date of the event', 'date', { half: true }),
        F('bedrag', 'Сумма иска (€)', 'Claim amount (€)', 'number', { half: true, placeholderDoc: '2.500,00' }),
        F('omschrijving', 'Существо требований', 'Claim description', 'text', { placeholderDoc: 'schade door waterschade na defecte levering' }),
      ]),
    ],
    body: [
      ...courtHdrNL(),
      { type: 'title', text: 'VERZOEKSCHRIFT AAN DE KANTONRECHTER' },
      { type: 'paragraph', text: 'Betreft: verzoekschrift schadevergoeding tegen {{gedaagde_name}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte leden van de rechtbank,', noIndent: true },
      { type: 'paragraph', text: 'Ondergetekende verzoekt de kantonrechter om {{gedaagde_name}}, wonende te {{gedaagde_address}}, te veroordelen tot betaling van {{bedrag}} aan schadevergoeding, vermeerderd met rente en buitengerechtelijke incassokosten. De vordering is ontstaan op {{datum_feit}} en houdt het volgende in: {{omschrijving}}.', justify: true },
      { type: 'paragraph', text: 'De kantonrechter is bevoegd, nu de vordering niet meer dan € 25.000 bedraagt (artikel 93 van het Wetboek van Burgerlijke Rechtsvordering). Bewijsstukken voeg ik als bijlage bij. Ik verzoek om een zittingsdatum waartoe zowel {{gedaagde_name}} als ik worden opgeroepen.', justify: true },
      { type: 'attachment', items: ['Kopie facturen en bewijsstukken', 'Correspondentie met gedaagde'], label: 'Bijlage:' },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-court-avg', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в Autoriteit Persoonsgegevens (AVG/GDPR)',
    titleDoc: 'Klacht bij de Autoriteit Persoonsgegevens', titleEn: 'Complaint to the Dutch Data Protection Authority (GDPR)',
    descRu: 'Жалоба в надзорный орган по защите данных (Autoriteit Persoonsgegevens) на организацию, нарушившую AVG/GDPR: по ст. 77 AVG заявитель вправе подать жалобу в надзорный орган страны проживания; сначала организациям даётся шанс отреагировать.',
    descEn: 'Complaint to the data protection authority (Autoriteit Persoonsgegevens) about an organisation violating the GDPR: under art. 77 GDPR the complainant may lodge a complaint with the supervisory authority of their residence; organisations are first given a chance to respond.',
    refRu: 'AVG (Verordening (EU) 2016/679), art. 77 — жалоба в надзорный орган (Autoriteit Persoonsgegevens)',
    refEn: 'GDPR (Regulation (EU) 2016/679), art. 77 — right to lodge a complaint with a supervisory authority',
    fields: [
      ...orgFields([
        F('org_name', 'Организация-нарушитель', 'Organisation complained about', 'text', { half: true, placeholderDoc: 'Webwinkel Perfect B.V.' }),
        F('datum_incident', 'Дата инцидента', 'Date of the incident', 'date', { half: true }),
        F('omschrijving', 'Описание инцидента', 'Incident description', 'text', { placeholderDoc: 'verkeerde persoonsgegevens verstuurd; geen reactie op mijn e-mail' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'KLACHT BIJ DE AUTORITEIT PERSOONSGEGEVENS' },
      { type: 'paragraph', text: 'Betreft: klacht op grond van artikel 77 AVG tegen {{org_name}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij dien ik een klacht in tegen {{org_name}} wegens vermeende schending van de Algemene verordening gegevensbescherming (AVG). Het incident deed zich voor op {{datum_incident}} en houdt het volgende in: {{omschrijving}}.', justify: true },
      { type: 'paragraph', text: 'Ik heb {{org_name}} eerder de gelegenheid gegeven te reageren, maar die reactie was onvoldoende. Op grond van artikel 77 van de AVG heb ik het recht om een klacht in te dienen bij de toezichthouder. Ik verzoek de Autoriteit Persoonsgegevens om de klacht te onderzoeken en passende maatregelen te nemen.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-court-ombudsman', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба Национальному омбудсмену (Nationale ombudsman)',
    titleDoc: 'Klacht bij de Nationale ombudsman', titleEn: 'Complaint to the National Ombudsman',
    descRu: 'Жалоба Национальному омбудсмену на ненадлежащую работу государственного органа: сначала жалоба подаётся самому органу; если она не обработана или ответ неудовлетворителен, дело передаётся омбудсмену (Wet Nationale ombudsman).',
    descEn: 'Complaint to the National Ombudsman about improper conduct of a public body: the complaint is first filed with the body itself; if it is not handled or the answer is unsatisfactory, the matter goes to the ombudsman (Wet Nationale ombudsman).',
    refRu: 'Wet Nationale ombudsman — жалоба на действия государственного органа',
    refEn: 'Wet Nationale ombudsman — complaint about the conduct of a public authority',
    fields: [
      ...orgFields([
        F('overheidsorgaan', 'Госорган (объект жалобы)', 'Public body complained about', 'text', { half: true, placeholderDoc: 'Gemeente Utrecht, afdeling Handhaving' }),
        F('datum_klacht', 'Дата ранее поданной жалобы', 'Date of earlier complaint', 'date', { half: true }),
        F('omschrijving', 'Существо жалобы', 'Complaint description', 'text', { placeholderDoc: 'geen reactie op mijn brief; telefoongesprekken niet teruggebeld' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'KLACHT BIJ DE NATIONALE OMBUDSMAN' },
      { type: 'paragraph', text: 'Betreft: klacht over de handelswijze van {{overheidsorgaan}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij dien ik een klacht in over de handelswijze van {{overheidsorgaan}}: {{omschrijving}}. Op {{datum_klacht}} heb ik bij deze instantie al een klacht ingediend; deze is niet (naar behoren) behandeld of onbeantwoord gebleven.', justify: true },
      { type: 'paragraph', text: 'Ik verzoek de Nationale ombudsman om, conform de Wet Nationale ombudsman, een onderzoek in te stellen naar de wijze waarop deze instantie mijn zaak heeft behandeld en om aanbevelingen te doen. Bewijsstukken kunnen op verzoek worden toegezonden.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-court-gemeente', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в муниципалитет (Awb, глава 9)',
    titleDoc: 'Klacht bij de gemeente', titleEn: 'Complaint to the municipality (Awb ch. 9)',
    descRu: 'Жалоба муниципалитету на действия его сотрудника или подразделения: по главе 9 Awb (art. 9:1) заявитель имеет право на тщательное рассмотрение жалобы, подтверждение получения и письменный ответ; далее — National ombudsman.',
    descEn: 'Complaint to the municipality about the conduct of an official or department: under chapter 9 of the Awb (art. 9:1) the complainant is entitled to careful handling, an acknowledgement of receipt and a written reply; the National Ombudsman is a next step.',
    refRu: 'Awb hoofdstuk 9, art. 9:1 — право на жалобу в административный орган (gemeente)',
    refEn: 'Awb chapter 9, art. 9:1 — right to lodge a complaint with an administrative body (municipality)',
    fields: [
      ...orgFields([
        F('datum', 'Дата инцидента', 'Date of the incident', 'date', { half: true }),
        F('omschrijving', 'Существо жалобы', 'Complaint description', 'text', { placeholderDoc: 'onheus gedrag van een medewerker aan de balie' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'KLACHT BIJ DE GEMEENTE' },
      { type: 'paragraph', text: 'Betreft: klacht over de handelswijze van een medewerker van {{recipient_name}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij dien ik bij {{recipient_name}} een klacht in over de handelswijze van een medewerker. Op {{datum}} heb ik het volgende meegemaakt: {{omschrijving}}.', justify: true },
      { type: 'paragraph', text: 'Op grond van hoofdstuk 9 van de Algemene wet bestuursrecht (artikel 9:1) heb ik recht op een zorgvuldige behandeling van deze klacht. Ik verzoek om een ontvangstbevestiging en om de uitkomst schriftelijk aan mij mede te delen. Wordt de klacht niet naar behoren behandeld, dan wend ik mij tot de Nationale ombudsman.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-tax-bezwaar', kind: 'STANDARD', categorySlug: 'tax-docs',
    titleRu: 'Возражение на налоговое решение (bezwaarschrift, 6 недель)',
    titleDoc: 'Bezwaarschrift Belastingdienst', titleEn: 'Objection letter to the Tax Administration',
    descRu: 'Возражение (bezwaarschrift) на налоговое решение Belastingdienst: по art. 6:7 Awb возражение подаётся в течение 6 недель после отправки решения; просится подтверждение получения, возможность быть выслушанным и отсрочка платежа на время процедуры.',
    descEn: 'Objection (bezwaarschrift) against a tax decision of the Belastingdienst: under art. 6:7 Awb the objection must be filed within six weeks after the decision is sent; acknowledgement of receipt, a hearing and suspension of payment are requested.',
    refRu: 'Awb art. 6:7 — возражение в течение 6 недель (bezwaarschrift Belastingdienst)',
    refEn: 'Awb art. 6:7 — objection within six weeks (bezwaarschrift to the Tax Administration)',
    fields: [
      ...orgFields([
        F('belasting_soort', 'Вид налога', 'Type of tax', 'select', {
          half: true,
          options: [
            'inkomstenbelasting',
            'omzetbelasting (btw)',
            'woz-waarde',
            'huurtoeslag',
            'naheffingsaanslag',
          ],
        }),
        F('aanslag_nummer', 'Номер решения (kenmerk)', 'Decision number (kenmerk)', 'text', { half: true, placeholderDoc: 'AB 2026-123456' }),
        F('datum_aanslag', 'Дата решения', 'Decision date', 'date', { half: true }),
        F('bedrag', 'Сумма спора (€)', 'Amount in dispute (€)', 'number', { half: true, placeholderDoc: '1.200,00' }),
        F('gronden', 'Основания возражения', 'Grounds of objection', 'text', { placeholderDoc: 'niet met de hoogte van het inkomen dat is aangehouden' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'BEZWAARSCHRIFT BELASTINGDIENST' },
      { type: 'paragraph', text: 'Betreft: bezwaarschrift tegen de {{belasting_soort}}, kenmerk {{aanslag_nummer}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij maak ik bezwaar tegen de {{belasting_soort}} met kenmerk {{aanslag_nummer}}, gedateerd {{datum_aanslag}}. Ik ben het niet eens met de volgende onderdelen en gronden: {{gronden}}. Het bedrag waar het geschil over gaat, is {{bedrag}}.', justify: true },
      { type: 'paragraph', text: 'Dit bezwaarschrift wordt binnen de termijn van zes weken, genoemd in artikel 6:7 van de Algemene wet bestuursrecht, ingediend. Ik verzoek om een ontvangstbevestiging en om de gelegenheid om te worden gehoord. Het bezwaar schorst de betalingsverplichting niet; ik verzoek om uitstel van betaling (schorring) zolang het bezwaar loopt.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-bank-klacht', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Жалоба в банк (Kifid)',
    titleDoc: 'Klacht bij de bank', titleEn: 'Complaint to the bank (Kifid)',
    descRu: 'Письменная жалоба банку по счёту/операции с требованием повторного рассмотрения и мотивированного ответа в срок по правилам банка; при неудовлетворительном ответе — спор в Kifid (Институт финансовых споров).',
    descEn: 'Written complaint to the bank about an account or transaction requesting re-examination and a reasoned reply within the bank’s rules; if unsatisfied, the dispute can be submitted to Kifid (the Financial Services Complaints Institute).',
    refRu: 'Klachten- en geschillenregeling Kifid — рассмотрение споров с финансовыми организациями',
    refEn: 'Kifid Complaints and Disputes Scheme — handling disputes with financial institutions',
    fields: [
      ...orgFields([
        F('rekening_nummer', 'Номер счёта (IBAN)', 'Account number (IBAN)', 'text', { half: true, placeholderDoc: 'NL91 ABNA 0417 1643 00' }),
        F('datum_incident', 'Дата инцидента', 'Date of the incident', 'date', { half: true }),
        F('bedrag', 'Сумма (€)', 'Amount (€)', 'number', { half: true, placeholderDoc: '350,00' }),
        F('omschrijving', 'Описание проблемы', 'Problem description', 'text', { placeholderDoc: 'onterecht incasso; kosten niet teruggeboekt' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'KLACHT BIJ DE BANK' },
      { type: 'paragraph', text: 'Betreft: klacht over rekening {{rekening_nummer}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij dien ik een klacht in over mijn rekening {{rekening_nummer}} bij uw bank. Op {{datum_incident}} heeft zich het volgende voorgedaan: {{omschrijving}}. Het hiermee gemoeide bedrag is {{bedrag}}.', justify: true },
      { type: 'paragraph', text: 'Ik verzoek u om de klacht te heronderzien en om een schriftelijke en gemotiveerde reactie binnen de in uw klachtenregeling genoemde termijn. Wordt de klacht niet naar tevredenheid opgelost, dan dien ik een geschil in bij Kifid, het Instituut voor Financiële Geschillenbeslechting.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-soc-uwv', kind: 'STANDARD', categorySlug: 'soc-benefits',
    titleRu: 'Возражение на решение UWV по пособию (bezwaar)',
    titleDoc: 'Bezwaar UWV-uitkering', titleEn: 'Objection to a UWV benefit decision',
    descRu: 'Возражение на решение UWV по пособию (WW, Zw, WAZO и др.): по art. 6:7 Awb возражение подаётся в течение 6 недель; просится пересмотр решения и возможность быть выслушанным.',
    descEn: 'Objection to a UWV benefit decision (WW, Zw, WAZO etc.): under art. 6:7 Awb the objection must be filed within six weeks; re-examination and a hearing are requested.',
    refRu: 'Awb art. 6:7 — возражение в течение 6 недель на решение UWV',
    refEn: 'Awb art. 6:7 — objection within six weeks against a UWV decision',
    fields: [
      ...orgFields([
        F('soort_uitkering', 'Вид пособия', 'Type of benefit', 'select', {
          half: true,
          options: [
            'ww-uitkering (Werkloosheidswet)',
            'zwangerschapsuitkering (WAZO)',
            'ziektewet-uitkering',
            'toeslag op de uitkering',
          ],
        }),
        F('besluit_nummer', 'Номер решения (kenmerk)', 'Decision number (kenmerk)', 'text', { half: true, placeholderDoc: 'UWV 2026-456789' }),
        F('datum_besluit', 'Дата решения', 'Decision date', 'date', { half: true }),
        F('gronden', 'Основания возражения', 'Grounds of objection', 'text', { placeholderDoc: 'het besluit is gebaseerd op onjuiste arbeidsuren' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'BEZWAAR UWV-UITKERING' },
      { type: 'paragraph', text: 'Betreft: bezwaar tegen het besluit {{soort_uitkering}}, kenmerk {{besluit_nummer}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij maak ik bezwaar tegen het besluit van het UWV van {{datum_besluit}} over mijn {{soort_uitkering}}, met kenmerk {{besluit_nummer}}. Ik ben het oneens met het besluit om de volgende redenen: {{gronden}}.', justify: true },
      { type: 'paragraph', text: 'Dit bezwaarschrift wordt binnen de termijn van zes weken, genoemd in artikel 6:7 van de Algemene wet bestuursrecht, ingediend. Ik verzoek het UWV om het besluit opnieuw te beoordelen en om mij de gelegenheid te geven om te worden gehoord.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-soc-aow', kind: 'STANDARD', categorySlug: 'soc-pension',
    titleRu: 'Заявление в SVB: AOW / выписка о пенсионных накоплениях',
    titleDoc: 'Aanvraag AOW (SVB)', titleEn: 'AOW pension application (SVB)',
    descRu: 'Заявление в Sociale Verzekeringsbank (SVB): запрос на AOW-пенсию, пенсионную выписку или информацию о накоплении. Указываются bsn и дата рождения; просится информация о размере, дате начала и последствиях проживания/работы за границей.',
    descEn: 'Application to the Sociale Verzekeringsbank (SVB): request for the AOW pension, a pension statement or information about accrual. BSN and date of birth are stated; details about the amount, start date and consequences of living/working abroad are requested.',
    refRu: 'Algemene ouderdomswet (AOW) — пенсионное страхование; исполнение — Sociale Verzekeringsbank (SVB)',
    refEn: 'Algemene ouderdomswet (AOW) — state pension insurance; administered by the Sociale Verzekeringsbank (SVB)',
    fields: [
      ...orgFields([
        F('soort', 'Вид запроса', 'Type of request', 'select', {
          half: true,
          options: [
            'aanvraag van mijn AOW-uitkering',
            'aanvraag van een pensioenoverzicht',
            'aanvraag van informatie over mijn pensioenopbouw',
          ],
        }),
        F('geboortedatum', 'Дата рождения', 'Date of birth', 'date', { half: true }),
        F('bsn', 'Гражданский номер (bsn)', 'Citizen service number (bsn)', 'text', { half: true, placeholderDoc: '123456782' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'AANVRAAG AOW (SVB)' },
      { type: 'paragraph', text: 'Betreft: {{soort}} (geboortedatum {{geboortedatum}}, bsn {{bsn}})', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Ondergetekende, geboren op {{geboortedatum}} met burgerservicenummer {{bsn}}, verzoekt de Sociale Verzekeringsbank om {{soort}}.', justify: true },
      { type: 'paragraph', text: 'Ik verzoek om toezending van de benodigde formulieren en van informatie over de hoogte en de ingangsdatum van de uitkering, alsook over de gevolgen van wonen of werken in het buitenland. Correspondeer alstublieft naar het bovengenoemde adres.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-med-klacht', kind: 'STANDARD', categorySlug: 'med-appeals',
    titleRu: 'Жалоба в медицинское учреждение (Wkkgz)',
    titleDoc: 'Klacht zorginstelling', titleEn: 'Complaint to a care provider (Wkkgz)',
    descRu: 'Жалоба в медицинское/социальное учреждение по качеству оказанной помощи: по Wkkgz у учреждения есть klachtenfunctionaris; жалоба рассматривается в срок 6 недель с возможным продлением на 4 недели, просится встреча и письменный мотивированный ответ.',
    descEn: 'Complaint to a care provider about the quality of care: under the Wkkgz the institution has a complaints officer; the complaint must be handled within six weeks (extendable by four weeks). A meeting and a written reasoned reply are requested.',
    refRu: 'Wkkgz (Wet kwaliteit, klachten en geschillen zorg) — право на жалобу и klachtenfunctionaris',
    refEn: 'Wkkgz (Care Quality, Complaints and Disputes Act) — right to complain and the complaints officer',
    fields: [
      ...orgFields([
        F('datum_zorg', 'Дата оказания помощи', 'Date of care', 'date', { half: true }),
        F('omschrijving', 'Существо жалобы', 'Complaint description', 'text', { placeholderDoc: 'lange wachttijd en onvoldoende uitleg over de behandeling' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'KLACHT ZORGINSTELLING' },
      { type: 'paragraph', text: 'Betreft: klacht over de verleende zorg op {{datum_zorg}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij dien ik bij uw instelling een klacht in over de zorg die mij op {{datum_zorg}} is verleend: {{omschrijving}}.', justify: true },
      { type: 'paragraph', text: 'Op grond van de Wet kwaliteit, klachten en geschillen zorg (Wkkgz) heeft uw instelling een klachtenregeling en een klachtenfunctionaris. Ik verzoek om een gesprek met de klachtenfunctionaris en om een schriftelijke en gemotiveerde reactie binnen de daarvoor geldende termijn van zes weken, met mogelijke verlenging van vier weken.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-med-dossier', kind: 'STANDARD', categorySlug: 'med-records',
    titleRu: 'Запрос доступа к медицинской карте (WGBO)',
    titleDoc: 'Verzoek inzage medisch dossier', titleEn: 'Request for access to the medical record (WGBO)',
    descRu: 'Запрос на ознакомление и получение копии медицинской карты: по BW 7:456 (WGBO) пациент вправе ознакомиться с картой и получить копию за разумную плату; указываются bsn и дата рождения.',
    descEn: 'Request to inspect and receive a copy of the medical record: under BW 7:456 (WGBO) the patient may inspect the record and obtain a copy for a reasonable fee; bsn and date of birth are stated.',
    refRu: 'BW 7:456 (WGBO, Wet geneeskundige behandelingsovereenkomst) — доступ к медицинской карте',
    refEn: 'Article 7:456 BW (Medical Treatment Contracts Act, WGBO) — access to the medical record',
    fields: [
      ...orgFields([
        F('geboortedatum', 'Дата рождения', 'Date of birth', 'date', { half: true }),
        F('bsn', 'Гражданский номер (bsn)', 'Citizen service number (bsn)', 'text', { half: true, placeholderDoc: '123456782' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'VERZOEK INZAGE MEDISCH DOSSIER' },
      { type: 'paragraph', text: 'Betreft: verzoek om inzage in en een kopie van mijn medisch dossier (WGBO)', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij verzoek ik om inzage in en een kopie van mijn medisch dossier bij uw instelling. Mijn gegevens: geboren op {{geboortedatum}}, burgerservicenummer {{bsn}}.', justify: true },
      { type: 'paragraph', text: 'Op grond van artikel 7:456 van het Burgerlijk Wetboek (WGBO) heb ik recht op inzage in mijn dossier en op een kopie daarvan, tegen betaling van ten hoogste de redelijke kosten. Ik verzoek om toezending van de kopie of om een afspraak voor inzage.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-edu-school', kind: 'STANDARD', categorySlug: 'edu-docs',
    titleRu: 'Заявление о приёме ребёнка в школу (WPO)',
    titleDoc: 'Aanmelding leerling', titleEn: 'Pupil enrolment application (WPO)',
    descRu: 'Заявление о зачислении ребёнка в начальную школу: по Wet primair onderwijs (WPO) родители вправе выбирать школу; просится подтверждение приёма, школьный справочник (schoolgids) и информация о правилах приёма.',
    descEn: 'Application to enrol a child in primary school: under the Wet primair onderwijs (WPO) parents are free to choose a school; confirmation of enrolment, the school guide and admission criteria are requested.',
    refRu: 'Wet primair onderwijs (WPO) — право родителей на выбор школы и порядок приёма',
    refEn: 'Wet primair onderwijs (WPO) — parents’ free choice of school and admission procedure',
    fields: [
      ...orgFields([
        F('achternaam', 'Фамилия получателя (директор)', 'Recipient’s last name (head)', 'text', { half: true, placeholderDoc: 'Bakker' }),
        F('child_name', 'Имя ребёнка', 'Child’s full name', 'text', { half: true, placeholderDoc: 'Milan de Vries' }),
        F('child_geboortedatum', 'Дата рождения ребёнка', 'Child’s date of birth', 'date', { half: true }),
        F('datum_start', 'Дата начала обучения', 'School start date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'AANMELDING LEERLING' },
      { type: 'paragraph', text: 'Betreft: aanmelding van {{child_name}} (geboren op {{child_geboortedatum}})', noIndent: true },
      { type: 'paragraph', text: 'Geachte mevrouw/de heer {{achternaam}},', noIndent: true },
      { type: 'paragraph', text: 'Hierbij meld ik mijn kind, {{child_name}}, geboren op {{child_geboortedatum}}, aan bij uw school voor de schoolperiode die ingaat op {{datum_start}}.', justify: true },
      { type: 'paragraph', text: 'Ik verzoek om een bevestiging van de aanmelding en om toezending van de schoolgids en informatie over de aannameprocedure en de criteria voor toelating. Voor vragen kan ik worden bereikt op het bovengenoemde adres.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-post-postnl', kind: 'STANDARD', categorySlug: 'post-claims',
    titleRu: 'Претензия в PostNL (утраченное отправление)',
    titleDoc: 'Klacht PostNL (verloren zending)', titleEn: 'Claim to PostNL (lost shipment)',
    descRu: 'Претензия в PostNL по утраченному отправлению с указанием track-and-trace номера: просится расследование и возмещение стоимости отправления согласно правилам рассмотрения жалоб, вытекающим из Postwet; доказательства прилагаются.',
    descEn: 'Claim to PostNL about a lost shipment with the track-and-trace number: an investigation and reimbursement of the shipment value are requested under the complaint-handling rules following from the Postwet; evidence is attached.',
    refRu: 'Postwet (Stb. 2009, 237) — право на жалобу и порядок рассмотрения жалоб у почтового оператора',
    refEn: 'Postwet (Stb. 2009, 237) — right to complain and complaint handling by the postal operator',
    fields: [
      ...orgFields([
        F('zending_nummer', 'Track-and-trace номер', 'Track-and-trace number', 'text', { half: true, placeholderDoc: '3SZNDL1234567' }),
        F('datum_verzending', 'Дата отправки', 'Date of dispatch', 'date', { half: true }),
        F('waarde', 'Стоимость отправления (€)', 'Shipment value (€)', 'number', { half: true, placeholderDoc: '120,00' }),
        F('omschrijving', 'Обстоятельства', 'Circumstances', 'text', { half: true, placeholderDoc: 'zending nooit aangekomen; status ‘bezorgd’ klopt niet' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'KLACHT POSTNL (VERLOREN ZENDING)' },
      { type: 'paragraph', text: 'Betreft: klacht over verloren zending, track-and-tracenummer {{zending_nummer}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Op {{datum_verzending}} heb ik via PostNL een zending met track-and-tracenummer {{zending_nummer}} verstuurd. Helaas is deze zending niet aangekomen op de bestemming: {{omschrijving}}.', justify: true },
      { type: 'paragraph', text: 'Ik verzoek PostNL om een onderzoek in te stellen en de waarde van de verloren zending, zijnde {{waarde}}, te vergoeden, conform de klachtenregeling die voortvloeit uit de Postwet. Het verzendbewijs voeg ik als bijlage bij.', justify: true },
      { type: 'attachment', items: ['Verzendbewijs met track-and-tracenummer'], label: 'Bijlage:' },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-util-onderhoud', kind: 'STANDARD', categorySlug: 'util-management',
    titleRu: 'Заявление арендодателю на ремонт (BW 7:206)',
    titleDoc: 'Verzoek verhuurder tot onderhoud', titleEn: 'Maintenance request to the landlord',
    descRu: 'Заявление арендодателю о проведении ремонта/поддержания жилья: по BW 7:206 арендодатель обязан поддерживать жильё в хорошем состоянии и устранять мелкие дефекты; просится запись на ремонт в разумный срок.',
    descEn: 'Maintenance request to the landlord: under BW 7:206 the landlord must keep the dwelling in good condition and repair minor defects; an appointment within a reasonable period is requested.',
    refRu: 'BW 7:206 (Burgerlijk Wetboek) — обязанность арендодателя поддерживать жильё',
    refEn: 'Article 7:206 of the Dutch Civil Code (BW) — the landlord’s duty to maintain the dwelling',
    fields: [
      ...orgFields([
        F('achternaam', 'Фамилия получателя', 'Recipient’s last name', 'text', { half: true, placeholderDoc: 'Bakker' }),
        F('adres_woning', 'Адрес жилья', 'Dwelling address', 'text', { half: true, placeholderDoc: 'Javastraat 25, 1094 HB Amsterdam' }),
        F('datum_gemeld', 'Дата сообщения', 'Date reported', 'date', { half: true }),
        F('gebrek', 'Что требует ремонта', 'What needs repair', 'text', { half: true, placeholderDoc: 'verwarming werkt niet; kraan in de keuken lekt' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'VERZOEK VERHUURDER TOT ONDERHOUD' },
      { type: 'paragraph', text: 'Betreft: verzoek om onderhoud en reparatie van de woning {{adres_woning}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte mevrouw/de heer {{achternaam}},', noIndent: true },
      { type: 'paragraph', text: 'Ik ben huurder van de woning {{adres_woning}}. Op {{datum_gemeld}} heb ik u gewezen op het volgende onderhoud: {{gebrek}}. Naar aanleiding hiervan verzoek ik u om de noodzakelijke reparaties te (laten) uitvoeren.', justify: true },
      { type: 'paragraph', text: 'U bent op grond van artikel 7:206 van het Burgerlijk Wetboek verplicht om het gehuurde in een goede staat van onderhoud te houden en de kleine gebreken te herstellen. Ik verzoek om een afspraak binnen een redelijke termijn en om schriftelijke bevestiging van de planning.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-util-neighbors-noise', kind: 'STANDARD', categorySlug: 'util-neighbors',
    titleRu: 'Жалоба на шум от соседей (geluidsoverlast)',
    titleDoc: 'Klacht geluidsoverlast buren', titleEn: 'Noise nuisance complaint about neighbours',
    descRu: 'Жалоба муниципалитету на постоянный шум от соседей: описываются моменты и характер шума; просится вмешательство по APV (общие полицейские правила) и при необходимости шумовое исследование; упоминается ст. 6:162 BW (неправомерное деяние) как следующий шаг.',
    descEn: 'Complaint to the municipality about recurring noise from neighbours: the moments and nature of the noise are described; action under the local APV ordinance and, if needed, a noise survey are requested; art. 6:162 BW (tort) is mentioned as a next step.',
    refRu: 'APV (overlast) и Wet milieubeheer (шум); BW 6:162 — неправомерное деяние',
    refEn: 'APV (nuisance) and Wet milieubeheer (noise); BW 6:162 — tort (unlawful act)',
    fields: [
      ...orgFields([
        F('adres_buren', 'Адрес соседей', 'Neighbours’ address', 'text', { half: true, placeholderDoc: 'Javastraat 27, 1094 HB Amsterdam' }),
        F('datum_tijd', 'Моменты шума', 'Times of the nuisance', 'text', { half: true, placeholderDoc: 'in de avonden van 22.00 tot 01.00 uur, ook op werkdagen' }),
        F('omschrijving', 'Характер шума', 'Nature of the noise', 'text', { placeholderDoc: 'luide muziek en schreeuwen, doodlopende slaap' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'KLACHT GELUIDSOVERLAST BUREN' },
      { type: 'paragraph', text: 'Betreft: klacht over geluidsoverlast van de woning {{adres_buren}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Ik ben woonachtig naast de woning {{adres_buren}}. Sinds geruime tijd ondervind ik regelmatig geluidsoverlast van deze woning: {{omschrijving}}. De overlast deed zich voor op de volgende momenten: {{datum_tijd}}.', justify: true },
      { type: 'paragraph', text: 'Ik heb de bewoners in eerste instantie zelf op de overlast gewezen, maar die is niet beëindigd. Ik verzoek de gemeente om op te treden op grond van de Algemene plaatselijke verordening (APV) en, indien nodig, een geluidsonderzoek te laten verrichten. Van een civiele procedure op grond van artikel 6:162 BW (onrechtmatige daad) zie ik vooralsnog af.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-util-verhuizing', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Уведомление о переезде (BRP)',
    titleDoc: 'Melding verhuizing (BRP)', titleEn: 'Change of address notification (BRP)',
    descRu: 'Уведомление муниципалитета о переезде для обновления данных в реестре населения (Basisregistratie Personen, BRP): указываются дата переезда и новый адрес; просится подтверждение обработки и возможность идентификации в стационарной стойке.',
    descEn: 'Notification to the municipality of a change of address for the municipal personal records database (BRP): the moving date and new address are stated; confirmation of processing and identification at the counter are requested.',
    refRu: 'Wet BRP (Basisregistratie Personen) — обязанность сообщить о переезде в муниципалитет',
    refEn: 'Wet BRP (Municipal Personal Records Database Act) — duty to report a change of address to the municipality',
    fields: [
      ...orgFields([
        F('datum_verhuizing', 'Дата переезда', 'Moving date', 'date', { half: true }),
        F('nieuw_adres', 'Новый адрес', 'New address', 'text', { half: true, placeholderDoc: 'Kanaalweg 8, 3526 KL Utrecht' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'MELDING VERHUIZING (BRP)' },
      { type: 'paragraph', text: 'Betreft: melding verhuizing per {{datum_verhuizing}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij geef ik mijn verhuizing door aan de Basisregistratie Personen (BRP). Per {{datum_verhuizing}} verhuis ik van mijn huidige adres naar {{nieuw_adres}}.', justify: true },
      { type: 'paragraph', text: 'Ik verzoek om verwerking van mijn nieuwe gegevens in de BRP en om een bevestiging daarvan. Mijn identiteit kan ik desgewenst bij een afspraak aan de balie aantonen.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-util-volmacht', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Доверенность (volmacht, BW 3:60)',
    titleDoc: 'Volmacht', titleEn: 'Power of attorney (BW 3:60)',
    descRu: 'Доверенность (volmacht) на совершение определённых действий от имени доверителя: по BW 3:60 доверенное лицо действует от имени доверителя; указываются срок действия и перечень действий, доверенность может быть отозвана письменно.',
    descEn: 'Power of attorney (volmacht) authorising a representative to perform specified acts on behalf of the principal: under BW 3:60 the representative acts in the principal’s name; the term and scope are stated and the authorisation may be withdrawn in writing.',
    refRu: 'BW 3:60 (Burgerlijk Wetboek) — volmacht (доверенность)',
    refEn: 'Article 3:60 of the Dutch Civil Code (BW) — power of attorney (volmacht)',
    fields: [
      ...personFields([
        F('plaats', 'Место составления', 'Place of execution', 'text', { half: true, placeholderDoc: 'Amsterdam' }),
        F('geboortedatum', 'Ваша дата рождения', 'Your date of birth', 'date', { half: true }),
        F('gevolmachtigde_name', 'Доверенное лицо (имя)', 'Representative (name)', 'text', { half: true, placeholderDoc: 'Sanne Jansen' }),
        F('gevolmachtigde_geboortedatum', 'Дата рождения доверенного', 'Representative’s date of birth', 'date', { half: true }),
        F('taken', 'Полномочия', 'Scope of authority', 'text', { placeholderDoc: 'beheren van mijn bankrekening; ondertekening van documenten bij de gemeente' }),
        F('datum_geldig_van', 'Действует с', 'Valid from', 'date', { half: true }),
        F('datum_geldig_tot', 'Действует по', 'Valid until', 'date', { half: true }),
      ]),
    ],
    body: [
      ...docHdr(),
      { type: 'title', text: 'VOLMACHT' },
      { type: 'paragraph', text: 'Ik, {{applicant_name}}, geboren op {{geboortedatum}}, woonachtig te {{applicant_address}}, machtig hierbij {{gevolmachtigde_name}}, geboren op {{gevolmachtigde_geboortedatum}}, om namens mij de volgende handelingen te verrichten: {{taken}}.', justify: true },
      { type: 'paragraph', text: 'Deze volmacht geldt vanaf {{datum_geldig_van}} tot en met {{datum_geldig_tot}}, tenzij ik deze eerder schriftelijk intrek. Op deze volmacht is artikel 3:60 van het Burgerlijk Wetboek van toepassing.', justify: true },
      { type: 'signature', leftText: 'De machtigende partij:', rightText: '_______________ / {{applicant_name}} /' },
      { type: 'signature', leftText: 'De gevolmachtigde gaat akkoord:', rightText: '_______________ / {{gevolmachtigde_name}} /' },
    ],
  },
  {
    slug: 'nl-util-lening', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Договор займа / расписка о долге (BW 7A:1978)',
    titleDoc: 'Schuldbekentenis (lening)', titleEn: 'Loan agreement / acknowledgement of debt (BW 7A:1978)',
    descRu: 'Расписка-договор займа между частными лицами: сумма, срок и реквизиты перевода, признание долга заемщиком и порядок возврата; по BW 7A:1978 расписка подтверждает долг, при просрочке возможно письменное напоминание (BW 6:82).',
    descEn: 'Loan agreement and acknowledgement of debt between private persons: amount, term and transfer details, the borrower’s acknowledgement and repayment schedule; under BW 7A:1978 the document evidences the debt, and a written default notice (BW 6:82) may follow.',
    refRu: 'BW 7A:1978 (schuldbekentenis) jo. BW 6:82 (ingebrekestelling) — заём между частными лицами',
    refEn: 'BW 7A:1978 (acknowledgement of debt) in conjunction with BW 6:82 (notice of default) — private loan',
    fields: [
      F('plaats', 'Место составления', 'Place of execution', 'text', { half: true, placeholderDoc: 'Amsterdam' }),
      F('lener_name', 'Заёмщик (имя)', 'Borrower (name)', 'text', { half: true, placeholderDoc: 'Milan de Vries' }),
      F('lener_geboortedatum', 'Дата рождения заёмщика', 'Borrower’s date of birth', 'date', { half: true }),
      F('gever_name', 'Заимодавец (имя)', 'Lender (name)', 'text', { half: true, placeholderDoc: 'Sanne Jansen' }),
      F('gever_geboortedatum', 'Дата рождения заимодавца', 'Lender’s date of birth', 'date', { half: true }),
      F('bedrag', 'Сумма займа (€)', 'Loan amount (€)', 'number', { half: true, placeholderDoc: '5.000,00' }),
      F('datum_uitbetaling', 'Дата перевода суммы', 'Date of disbursement', 'date', { half: true }),
      F('rekening_nummer', 'Счёт заёмщика (IBAN)', 'Borrower’s account (IBAN)', 'text', { half: true, placeholderDoc: 'NL91 ABNA 0417 1643 00' }),
      F('datum_terugbetaling', 'Срок возврата (до)', 'Repayment deadline', 'date', { half: true }),
      F('rente', 'Условия о процентах', 'Interest terms', 'select', {
        half: true,
        options: ['zonder rente', 'met een rente van 2 % per jaar', 'met een rente van 5 % per jaar'],
      }),
    ],
    body: [
      ...docHdr(),
      { type: 'title', text: 'SCHULDBEKENTENIS (LENING)' },
      { type: 'paragraph', text: 'De lener, {{lener_name}}, geboren op {{lener_geboortedatum}}, leent van de geldverstrekker, {{gever_name}}, geboren op {{gever_geboortedatum}}, een bedrag van {{bedrag}} euro. Het bedrag wordt op {{datum_uitbetaling}} overgemaakt naar rekeningnummer {{rekening_nummer}}.', justify: true },
      { type: 'paragraph', text: 'De lener erkent hierbij deze schuld en verplicht zich het geleende bedrag uiterlijk op {{datum_terugbetaling}} geheel terug te betalen. Over de schuld geldt de volgende renteregeling: {{rente}}.', justify: true },
      { type: 'paragraph', text: 'Deze schuldbekentenis is opgemaakt in twee exemplaren, waarvan elke partij een ondertekend exemplaar ontvangt. Op de overeenkomst is artikel 7A:1978 van het Burgerlijk Wetboek van toepassing. Bij betalingsachterstand kan de geldverstrekker de lener schriftelijk in gebreke stellen (artikel 6:82 BW).', justify: true },
      { type: 'signature', leftText: 'De lener:', rightText: '_______________ / {{lener_name}} /' },
      { type: 'signature', leftText: 'De geldverstrekker:', rightText: '_______________ / {{gever_name}} /' },
    ],
  },
  {
    slug: 'nl-uni-studieverlof', kind: 'STANDARD', categorySlug: 'uni-common',
    titleRu: 'Заявление на академический отпуск (WHW)',
    titleDoc: 'Verzoek studieverlof', titleEn: 'Request for study leave (WHW)',
    descRu: 'Заявление студенческой канцелярии университета о предоставлении академического отпуска (studieverlof) на указанный период с основанием (болезнь, беременность, спорт, правление ассоциации); просится решение с последствиями для регистрации и стоимости обучения.',
    descEn: 'Request to the university’s student desk for study leave for a stated period with a ground (illness, pregnancy, top sport, board membership); a written decision with the consequences for enrolment and tuition fees is requested.',
    refRu: 'Wet op het hoger onderwijs en wetenschappelijk onderzoek (WHW) — регистрация и отпуск по правилам учебного заведения',
    refEn: 'Wet op het hoger onderwijs en wetenschappelijk onderzoek (WHW) — enrolment and leave under the institution’s rules',
    fields: [
      ...orgFields([
        F('universiteit_name', 'Университет', 'University', 'text', { half: true, placeholderDoc: 'Universiteit van Amsterdam' }),
        F('student_nummer', 'Номер студента', 'Student number', 'text', { half: true, placeholderDoc: 's1234567' }),
        F('opleiding_name', 'Программа обучения', 'Study programme', 'text', { half: true, placeholderDoc: 'Psychologie (bachelor)' }),
        F('date_from', 'Дата начала отпуска', 'Leave start date', 'date', { half: true }),
        F('date_to', 'Дата окончания отпуска', 'Leave end date', 'date', { half: true }),
        F('reden', 'Основание', 'Ground', 'select', {
          half: true,
          options: [
            'zwangerschap en geboorte',
            'langdurige ziekte',
            'mantelzorg voor een familielid',
            'bestuursjaar bij een studievereniging',
            'topsport',
          ],
        }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'VERZOEK STUDIEVERLOF' },
      { type: 'paragraph', text: 'Betreft: verzoek om studieverlof van {{date_from}} tot en met {{date_to}}', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij verzoek ik om studieverlof van {{date_from}} tot en met {{date_to}}. Mijn gegevens: studentnummer {{student_nummer}}, opleiding {{opleiding_name}}. Als reden voor dit verzoek geef ik op: {{reden}}.', justify: true },
      { type: 'paragraph', text: 'Ik verzoek u om dit verzoek te beoordelen conform de regeling verlof en inschrijving van {{universiteit_name}} en om mij de beslissing schriftelijk mede te delen, met vermelding van de gevolgen voor mijn inschrijving en het collegegeld.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
  {
    slug: 'nl-uni-collegegeld', kind: 'STANDARD', categorySlug: 'uni-money',
    titleRu: 'Заявление о возврате платы за обучение (WHW)',
    titleDoc: 'Verzoek teruggave collegegeld', titleEn: 'Request for tuition fee refund (WHW)',
    descRu: 'Заявление о возврате (части) платы за обучение при отчислении/окончании учёбы: по правилам университета и разделу 7.5 WHW возможна реституция за период после выписки из реестра; просится возврат на указанный IBAN.',
    descEn: 'Request for a refund of (part of) the tuition fee after deregistration or graduation: under the university’s rules and WHW part 7.5 a refund over the period after deregistration is possible; repayment to the stated IBAN is requested.',
    refRu: 'WHW, afdeling 7.5 (collegegeld) — реституция платы за обучение по правилам учебного заведения',
    refEn: 'WHW, part 7.5 (tuition fees) — tuition fee refund under the institution’s rules',
    fields: [
      ...orgFields([
        F('universiteit_name', 'Университет', 'University', 'text', { half: true, placeholderDoc: 'Universiteit van Amsterdam' }),
        F('student_nummer', 'Номер студента', 'Student number', 'text', { half: true, placeholderDoc: 's1234567' }),
        F('datum_uitschrijving', 'Дата отчисления', 'Deregistration date', 'date', { half: true }),
        F('periode', 'Период возврата', 'Period to refund', 'select', {
          half: true,
          options: ['maandelijks collegegeld over de afgelopen periode', 'het kwartaalbedrag', 'het jaarbedrag (pro rata)'],
        }),
        F('iban', 'Ваш IBAN', 'Your IBAN', 'text', { half: true, placeholderDoc: 'NL91 ABNA 0417 1643 00' }),
      ]),
    ],
    body: [
      ...orgHdr(),
      { type: 'title', text: 'VERZOEK TERUGGAVE COLLEGEGELD' },
      { type: 'paragraph', text: 'Betreft: verzoek om teruggave van collegegeld (studentnummer {{student_nummer}})', noIndent: true },
      { type: 'paragraph', text: 'Geachte heer/mevrouw,', noIndent: true },
      { type: 'paragraph', text: 'Hierbij verzoek ik om teruggave van (een deel van) het collegegeld dat ik aan {{universiteit_name}} heb betaald. Ik ben per {{datum_uitschrijving}} uitgeschreven als student; mijn studentnummer is {{student_nummer}}. Ik verzoek om restitutie van: {{periode}}.', justify: true },
      { type: 'paragraph', text: 'Conform de regeling collegegeld van {{universiteit_name}} en de Wet op het hoger onderwijs en wetenschappelijk onderzoek (WHW) kan restitutie worden verleend over de periode na de uitschrijving. Ik verzoek om het bedrag terug te storten op rekeningnummer {{iban}}.', justify: true },
      sig('{{applicant_name}}'),
    ],
  },
];
