// Шаблоны для Швеции (язык документов — шведский).
// Основано на шведском законодательстве:
// Semesterlagen (1977:480): 19 § — 25 semesterdagar per semesterår.
// Lagen (1982:80) om anställningsskydd (LAS): 4 b § — intyg om anställning;
// 6 § 5 st. — uppsägningstid en månad; 34–36 §§ — ogiltig uppsägning, talan inom
// två månader. Föräldraledighetslagen (1995:584): 7 § — anmälan två månader i förväg.
// Lagen (1991:1047) om sjuklön: arbetsgivarperioden dag 2–14, sjuklön 80 %, karensdag.
// Lag (2008:1334) om närståendepenning. Medbestämmandelagen (1976:580).
// Konsumentköplagen (2022:260): reklamation inom skälig tid, tre års reklamationsrätt.
// Jordabalken 12 kap.: 8 § — hyresvärdens underhållsskyldighet (bruksvärdighet);
// 47 § — hävning; deposition vid utflyttning. Skuldebrevslagen (1936:81) 5–6 §;
// preskriptionslagen (1981:130) — tio år; räntelagen (1975:635) — dröjsmålsränta.
// Lagen (1990:746) om betalningsföreläggande och handräckning (Kronofogdemyndigheten).
// Dataskyddsförordningen (EU) 2016/679: art. 15–17, 21, 58, 77 — IMY (Integritetsskyddsmyndigheten).
// Regeringsformen (1974:152) 12 kap. 6 § — Justitieombudsmannen (JO).
// Skatteförfarandelagen (2011:1244) 60 kap. — överklagande inom fyra veckor.
// Socialförsäkringsbalken (2010:110) 100 kap. — omprövning inom tre veckor.
// Lag (1998:674) om allmän pension (Pensionsmyndigheten). Socialtjänstlagen (2001:453).
// Patientlagen (2014:821) — klagomål på vård; Patientdatalagen (2008:355) — utdrag ur journal.
// Skollagen (2010:800); högskoleförordningen (1993:100). Lagen (2016:238) om posttjänster
// (PostNord). Miljöbalken (1998:808) 26 kap. — olägenhet för människors hälsa (grannbuller).
// Folkbokföringslagen (1991:481) — anmälan om flyttning. Fullmaktsregler (2014:407).
// Lag (2004:297) om bank- och finansföretag — bankärenden och klagomål.
import type { TplDef } from '../types';
import { F } from './helpers';

// Шапка заявления работодателю: адресат справа, заявитель ниже (швед. делопроизводство)
const workHdr = (): TplDef['body'] => [
  { type: 'lines', align: 'right', items: ['{{org_name}}', 'Attn: {{head_name}}', '', '{{applicant_name}}', 'Personnummer: {{applicant_personnr}}', '', 'Datum: {{date_today}}'] },
];

// Шапка обращения в ведомство/организацию: Till: … / заявитель / Datum:
const govHdr = (to: string[]): TplDef['body'] => [
  { type: 'lines', align: 'right', items: [...to, '', '{{applicant_name}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
];

const workFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('org_name', 'Название компании', 'Company name', 'text', { half: true, placeholderDoc: 'Företaget Ekonomi AB' }),
  F('head_name', 'Кому (HR/руководитель)', 'Submit to', 'text', { half: true, placeholderDoc: 'Personalavdelningen' }),
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Anna Andersson' }),
  F('applicant_personnr', 'Ваш личный номер (personnummer)', 'Your personal identity number', 'text', { half: true, placeholderDoc: '19830517-1234' }),
  ...extra,
];

const personFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Anna Andersson' }),
  F('applicant_personnr', 'Ваш личный номер (personnummer)', 'Your personal identity number', 'text', { half: true, placeholderDoc: '19830517-1234' }),
  F('applicant_address', 'Ваш адрес', 'Your address', 'text', { half: true, placeholderDoc: 'Sturegatan 12, 114 36 Stockholm' }),
  F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '070-123 45 67' }),
  ...extra,
];

const sign = (leftText = 'Med vänliga hälsningar,', namePh = '{{applicant_name}}'): TplDef['body'][number] => ({
  type: 'signature', leftText, rightText: `_______________ / ${namePh} /`,
});

export const TEMPLATES_SE: TplDef[] = [
  {
    slug: 'se-work-semester', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление на ежегодный оплачиваемый отпуск',
    titleDoc: 'Ansökan om semester', titleEn: 'Annual paid leave application',
    descRu: 'Заявление на ежегодный отпуск. По Semesterlagen (1977:480) работнику положено 25 оплачиваемых отпускных дней за семестровый год (semesterår); график отпусков работодатель согласовывает заранее.',
    descEn: 'Annual leave application. Under the Swedish Annual Leave Act (1977:480) the employee is entitled to 25 paid holiday days per leave year; the schedule is agreed with the employer in advance.',
    descDoc: 'Ansökan till arbetsgivaren om att få uttaga semesterdagar under angiven period.',
    refRu: 'Semesterlagen (1977:480) — 25 semesterdagar за семестровый год',
    refEn: 'Annual Leave Act (1977:480) — 25 paid holiday days per leave year',
    fields: [
      ...workFields([
        F('date_from', 'Начало отпуска', 'Leave start', 'date', { half: true }),
        F('date_to', 'Конец отпуска', 'Leave end', 'date', { half: true }),
        F('days', 'Количество дней', 'Number of days', 'number', { half: true, placeholderRu: '25' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'ANSÖKAN OM SEMESTER' },
      { type: 'paragraph', text: 'Hej,', noIndent: true },
      { type: 'paragraph', text: 'Jag ansöker härmed om att få uttaga min semester under perioden {{date_from}} – {{date_to}}, totalt {{days}} dagar. Enligt semesterlagen (1977:480) har jag rätt till 25 betalda semesterdagar per semesterår.', justify: true },
      { type: 'paragraph', text: 'Jag ser till att påbörjade arbetsuppgifter överlämnas till berörda kollegor innan semestern inleds. Kontakta mig gärna om perioden behöver justeras med hänsyn till verksamheten.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-work-flexibel-arbetstid', kind: 'STANDARD', categorySlug: 'work-time',
    titleRu: 'Просьба о гибком рабочем времени',
    titleDoc: 'Begäran om flexibel arbetstid', titleEn: 'Flexible working hours request',
    descRu: 'Просьба о гибком рабочем времени: гибкий график с обязательным ядром (kärntid), сдвинутые часы или сокращённый рабочий день. Порядок согласуется с работодателем; для части отраслей — через коллективный договор.',
    descEn: 'Request for flexible working hours: flexitime with a core period, shifted hours or a shorter working day. The arrangement is agreed with the employer or through a collective agreement.',
    descDoc: 'Begäran till arbetsgivaren om flexibel arbetstid eller förskjuten arbetstid.',
    refRu: 'LAS (1982:80); kollektivavtal — arbetstidsordning ändras genom överenskommelse',
    refEn: 'Employment Protection Act (1982:80); collective agreement — working-time arrangement by agreement',
    fields: [
      ...workFields([
        F('model', 'Желаемая модель', 'Preferred model', 'select', {
          options: [
            'flexibel arbetstid med kärntid 09.00–15.00',
            'förskjuten arbetstid (07.00–15.30)',
            'förskjuten arbetstid (09.00–17.30)',
            'kortare arbetsdag med mål- eller prestationslön',
          ],
        }),
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'BEGÄRAN OM FLEXIBEL ARBETSTID' },
      { type: 'paragraph', text: 'Hej,', noIndent: true },
      { type: 'paragraph', text: 'Jag önskar härmed att få arbeta enligt följande arbetstidsmodell: {{model}}, med start den {{date_from}}.', justify: true },
      { type: 'paragraph', text: 'Ordningen underlättar för mig att förena arbetet med privatlivet och familjeansvaret, utan att verksamheten påverkas negativt. Jag föreslår att vi prövar modellen under en avtalad period och därefter utvärderar den tillsammans.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-work-foraldraredighet', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Уведомление о родительском отпуске',
    titleDoc: 'Anmälan om föräldraledighet', titleEn: 'Parental leave notification',
    descRu: 'Уведомление работодателя о родительском отпуске для ухода за ребёнком. По Föräldraledighetslagen (1995:584) о полном отпуске нужно уведомить минимум за два месяца; об отпуске меньшей продолжительности — заблаговременно.',
    descEn: 'Notification to the employer of parental leave to care for a child. Under the Parental Leave Act (1995:584) full-time leave must be notified at least two months in advance.',
    descDoc: 'Anmälan till arbetsgivaren om föräldraledighet för vård av barn.',
    refRu: 'Föräldraledighetslagen (1995:584) — anmälan minst två månader i förväg (7 §)',
    refEn: 'Parental Leave Act (1995:584) — notice at least two months in advance (Section 7)',
    fields: [
      ...workFields([
        F('barn_namn', 'Имя ребёнка', 'Child’s name', 'text', { half: true, placeholderDoc: 'Elsa Andersson' }),
        F('barn_fodelsedatum', 'Дата рождения ребёнка', 'Child’s date of birth', 'date', { half: true }),
        F('period_from', 'Начало отпуска', 'Leave start', 'date', { half: true }),
        F('period_to', 'Конец отпуска', 'Leave end', 'date', { half: true }),
        F('omfattning', 'Объём отпуска', 'Extent of leave', 'select', {
          half: true,
          options: ['heltid (100 %)', 'deltid 75 %', 'deltid 50 %', 'deltid 25 %'],
        }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'ANMÄLAN OM FÖRÄLDRALEDIGHET' },
      { type: 'paragraph', text: 'Hej,', noIndent: true },
      { type: 'paragraph', text: 'Med stöd av föräldraledighetslagen (1995:584) anmäler jag härmed föräldraledighet för vård av {{barn_namn}}, född {{barn_fodelsedatum}}. Ledigheten avser perioden {{period_from}} – {{period_to}} med omfattningen {{omfattning}}.', justify: true },
      { type: 'paragraph', text: 'Jag bidrar gärna till en plan för överlämning av arbetsuppgifterna och kan ställa upp på ett avstämningssamtal innan ledigheten inleds. Förlängning eller avkortning av perioden meddelar jag så snart det är klart.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-work-familjeangelagenhet', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Заявление на отпуск по семейным обстоятельствам',
    titleDoc: 'Ansökan om ledighet för familjeangelägenheter', titleEn: 'Leave for family reasons application',
    descRu: 'Заявление на краткосрочный отпуск по семейным обстоятельствам: уход за близким (närståendepenning), врачебные визиты, похороны и другие важные семейные события.',
    descEn: 'Application for short-term leave for family reasons: care of a relative (care allowance), medical visits, funerals and other important family matters.',
    descDoc: 'Ansökan om tillfällig ledighet med anledning av familjeangelägenheter.',
    refRu: 'Lag (2008:1334) om närståendepenning; согласование с работодателем',
    refEn: 'Act on Care Allowance (2008:1334); agreement with the employer',
    fields: [
      ...workFields([
        F('angelagenhet', 'Причина', 'Reason', 'select', {
          options: [
            'vård av nära anhörig (närståendepenning)',
            'akut läkarbesök eller behandling',
            'deltagande i begravning',
            'annan viktig familjeangelägenhet',
          ],
        }),
        F('date_from', 'Начало отпуска', 'Leave start', 'date', { half: true }),
        F('date_to', 'Конец отпуска', 'Leave end', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'ANSÖKAN OM LEDIGHET FÖR FAMILJEANGELÄGENHETER' },
      { type: 'paragraph', text: 'Hej,', noIndent: true },
      { type: 'paragraph', text: 'Jag ansöker härmed om ledighet från och med {{date_from}} till och med {{date_to}} med anledning av följande familjeangelägenhet: {{angelagenhet}}.', justify: true },
      { type: 'paragraph', text: 'Jag eftersträvar att störa verksamheten så lite som möjligt och kan omplanera ordinarie arbetstid för den tid som inte omfattas av rätt till ledighet. Ta gärna kontakt om ytterligare information behövs.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-work-uppsagning', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Заявление об увольнении (расторжение договора работником)',
    titleDoc: 'Uppsägning av anställning', titleEn: 'Resignation from employment',
    descRu: 'Заявление об увольнении по собственному желанию (uppsägning со стороны работника). По LAS (1982:80) срок уведомления со стороны работника — один месяц, если иное не согласовано в договоре.',
    descEn: 'Resignation notice from the employee. Under the Employment Protection Act (1982:80) the employee’s notice period is one month unless otherwise agreed.',
    descDoc: 'Uppsägning av anställning från arbetstagarens sida med iakttagande av uppsägningstid.',
    refRu: 'LAS (1982:80) 6 § — uppsägningstid en månad om inget annat avtalats',
    refEn: 'Employment Protection Act (1982:80), Section 6 — one month notice unless otherwise agreed',
    fields: [
      ...workFields([
        F('date_end', 'Последний рабочий день', 'Last working day', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'UPPSÄGNING AV ANSTÄLLNING' },
      { type: 'paragraph', text: 'Hej,', noIndent: true },
      { type: 'paragraph', text: 'Jag säger härmed upp mig från min anställning hos {{org_name}} och ber om att anställningen avslutas den {{date_end}}, i enlighet med den uppsägningstid som följer av lagen (1982:80) om anställningsskydd.', justify: true },
      { type: 'paragraph', text: 'Under uppsägningstiden fullgör jag mina arbetsuppgifter som vanligt och bidrar till en ordnad överlämning. Jag ber om skriftlig bekräftelse på uppsägningen samt information om slutlön, semesterersättning och tjänstepension.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-work-invandning', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Возражение против увольнения',
    titleDoc: 'Invändning mot uppsägning', titleEn: 'Objection to dismissal',
    descRu: 'Возражение работника против увольнения: требование вернуть должность. По LAS (1982:80) 34–36 §§ увольнение можно оспорить в суде в течение двух месяцев; профсоюз может подключиться по MBL (1976:580).',
    descEn: 'Employee’s objection to dismissal with a demand for reinstatement. Under the Employment Protection Act (1982:80), Sections 34–36, the notice can be challenged in court within two months.',
    descDoc: 'Invändning mot uppsägning med begäran om att anställningen består.',
    refRu: 'LAS (1982:80) 34–36 §§ — ogiltig uppsägning, talan inom två månader; MBL (1976:580)',
    refEn: 'Employment Protection Act (1982:80), Sections 34–36 — invalid notice, action within two months',
    fields: [
      ...workFields([
        F('date_received', 'Дата получения уведомления', 'Date the notice was received', 'date', { half: true }),
        F('motivering', 'Обоснование возражения', 'Grounds for objection', 'textarea', { placeholderDoc: 'saknas grundad anledning enligt 7 § LAS; arbetsbristen är inte verklig' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'INVÄNDNING MOT UPPSÄGNING' },
      { type: 'paragraph', text: 'Hej,', noIndent: true },
      { type: 'paragraph', text: 'Jag bestrider härmed den uppsägning som jag mottog den {{date_received}}. Uppsägningen är enligt min mening saknad grund, eftersom {{motivering}}.', justify: true },
      { type: 'paragraph', text: 'Enligt 36 § lagen (1982:80) om anställningsskydd kan en uppsägning förklaras ogiltig av domstol, och talan ska väckas inom två månader. Jag begär att arbetsgivaren återtar uppsägningen och låter mig kvarstå i tjänsten. Ärendet har även förts fram till företagets fackliga organisation med stöd av medbestämmandelagen (1976:580).', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-work-intyg', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Запрос справки о трудоустройстве',
    titleDoc: 'Begäran om intyg om anställning', titleEn: 'Employment certificate request',
    descRu: 'Запрос справки о трудоустройстве (intyg om anställning): работодатель обязан выдать её после окончания трудовых отношений (LAS 4 b §); нужна для жилья, кредита, визы или нового работодателя.',
    descEn: 'Request for a certificate of employment: the employer must issue one when employment ends (Employment Protection Act, Section 4 b); needed for housing, loans, visas or a new employer.',
    descDoc: 'Begäran till arbetsgivaren om intyg om anställning.',
    refRu: 'LAS (1982:80) 4 b § — rätt till intyg om anställningen',
    refEn: 'Employment Protection Act (1982:80), Section 4 b — right to a certificate of employment',
    fields: [
      ...workFields([
        F('syfte', 'Цель справки', 'Purpose of the certificate', 'select', {
          options: [
            'ansökan om bostad',
            'ansökan om lån',
            'visum- och uppehållstillståndsärenden',
            'ansökan hos ny arbetsgivare',
          ],
        }),
        F('sprak', 'Язык справки', 'Language of the certificate', 'select', {
          half: true,
          options: ['svenska', 'engelska', 'svenska och engelska'],
        }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'BEGÄRAN OM INTYG OM ANSTÄLLNING' },
      { type: 'paragraph', text: 'Hej,', noIndent: true },
      { type: 'paragraph', text: 'Jag ber härmed om att få ett intyg om min anställning hos {{org_name}}, avsett för {{syfte}}. Enligt 4 b § lagen (1982:80) om anställningsskydd har jag rätt till ett sådant intyg.', justify: true },
      { type: 'paragraph', text: 'Jag önskar att intyget upprättas på {{sprak}} och innehåller uppgifter om anställningstid, tjänstgöringsomfattning och arbetsuppgifter. Intyget kan lämnas till mig i pappersform eller delges digitalt.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-work-sjukanmalan', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Уведомление о болезни',
    titleDoc: 'Sjukanmälan', titleEn: 'Sickness notification',
    descRu: 'Уведомление работодателя о болезни. По Lagen (1991:1047) om sjuklön работодатель платит sjuklön в период работодателя (дни 2–14) в размере 80 % от расчётной базы; первый день — каренсный день.',
    descEn: 'Sickness notification to the employer. Under the Sick Pay Act (1991:1047) the employer pays sick pay during the employer period (days 2–14) at 80 % of the qualifying income; the first day is a waiting day.',
    descDoc: 'Sjukanmälan till arbetsgivaren med uppgift om sjukperiod och beräknad återgång.',
    refRu: 'Lagen (1991:1047) om sjuklön — arbetsgivarperioden, sjuklön 80 %, karensdag',
    refEn: 'Sick Pay Act (1991:1047) — employer period, 80 % sick pay, waiting day',
    fields: [
      ...workFields([
        F('date_ill', 'Первый день болезни', 'First day of illness', 'date', { half: true }),
        F('date_return', 'Ожидаемое возвращение', 'Expected return day', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'SJUKANMÄLAN' },
      { type: 'paragraph', text: 'Hej,', noIndent: true },
      { type: 'paragraph', text: 'Härmed anmäler jag mig sjuk från och med {{date_ill}} och räknar med att vara åter i arbetet den {{date_return}}.', justify: true },
      { type: 'paragraph', text: 'Enligt lagen (1991:1047) om sjuklön betalar arbetsgivaren sjuklön under arbetsgivarperioden, dag 2–14, med 80 procent av sjukpenninggrundande inkomst; den första sjukdagen utgör karensdag. Läkarintyg kommer att lämnas om sjukdomen varar längre än sju dagar. Jag hör av mig med uppdatering om tillståndet förändras.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-court-reklamation', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Рекламация продавцу',
    titleDoc: 'Reklamation till säljaren', titleEn: 'Complaint to the seller',
    descRu: 'Досудебная рекламация продавцу о товаре с дефектом: по Konsumentköplagen (2022:260) рекламацию следует подать в разумный срок (skälig tid) в пределах трёх лет; требуйте ремонт, замену, возврат денег или скидку.',
    descEn: 'Pre-court complaint to the seller about a defective product: under the Consumer Sales Act (2022:260) the complaint must be made within reasonable time and three years of purchase; demand repair, replacement, refund or a price reduction.',
    descDoc: 'Reklamation till säljaren enligt konsumentköplagen med begäran om åtgärd.',
    refRu: 'Konsumentköplagen (2022:260) — reklamation inom skälig tid, трёхлетний срок',
    refEn: 'Consumer Sales Act (2022:260) — complaint within reasonable time, three-year period',
    fields: [
      ...personFields([
        F('seljare', 'Магазин/продавец', 'Seller', 'text', { half: true, placeholderDoc: 'Butiken Exempel AB' }),
        F('produkt', 'Товар', 'Product', 'text', { half: true, placeholderDoc: 'kaffebryggare, modell X-200' }),
        F('datum_kop', 'Дата покупки', 'Purchase date', 'date', { half: true }),
        F('belopp', 'Сумма покупки, kr', 'Purchase amount, SEK', 'number', { half: true, placeholderRu: '1200' }),
        F('fel', 'Описание дефекта', 'Description of the defect', 'textarea', { placeholderDoc: 'varan slutar fungera efter två veckors användning' }),
        F('krav', 'Требование', 'Demand', 'select', {
          options: ['reparation av varan', 'ny vara i utbyte', 'återbetalning av köpesumman', 'prisavdrag'],
        }),
      ]),
    ],
    body: [
      ...govHdr(['{{seljare}}']),
      { type: 'title', text: 'REKLAMATION' },
      { type: 'paragraph', text: 'Ärende: Reklamation enligt konsumentköplagen (2022:260)', noIndent: true },
      { type: 'paragraph', text: 'Den {{datum_kop}} köpte jag hos er {{produkt}} för {{belopp}} kr. Varan uppvisar följande fel: {{fel}}.', justify: true },
      { type: 'paragraph', text: 'Enligt konsumentköplagen (2022:260) har jag rätt att reklamera fel som uppkommit inom tre år från köpet, och reklamation ska göras inom skälig tid efter att felet upptäckts. Jag reklamerar härmed inom skälig tid och begär {{krav}}.', justify: true },
      { type: 'paragraph', text: 'Om vi inte når en överenskommelse avser jag att anföra ärendet hos Allmänna reklamationsnämnden (ARN).', justify: true },
      { type: 'attachment', items: ['Kopia av kvitto.', 'Fotografier av felet.'], label: 'Bilagor:' },
      sign(),
    ],
  },
  {
    slug: 'se-court-hyra-reparation', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Требование к арендодателю о ремонте',
    titleDoc: 'Krav på hyresvärden om reparationer', titleEn: 'Demand for repairs from the landlord',
    descRu: 'Требование к арендодателю выполнить ремонт: по Jordabalken 12 kap. 8 § арендодатель обязан содержать жильё в надлежащем состоянии (bruksvärdighet); при бездействии — обращение в hyresnämnden или расторжение договора.',
    descEn: 'Demand that the landlord carry out repairs: under the Land Code, Chapter 12, Section 8, the landlord must keep the dwelling in proper condition; otherwise the tenant may turn to the rent tribunal.',
    descDoc: 'Krav till hyresvärden om underhåll och reparationer enligt jordabalken.',
    refRu: 'Jordabalken 12 kap. 8 § — hyresvärdens underhållsskyldighet',
    refEn: 'Land Code, Chapter 12, Section 8 — landlord’s duty of maintenance',
    fields: [
      ...personFields([
        F('hyresvard', 'Арендодатель', 'Landlord', 'text', { half: true, placeholderDoc: 'Fastighets AB Bostaden' }),
        F('lagenhet', 'Адрес квартиры', 'Rental address', 'text', { half: true, placeholderDoc: 'Sturegatan 12, Stockholm' }),
        F('beskrivning', 'Что требуется отремонтировать', 'What needs repair', 'textarea', { placeholderDoc: 'läckande fönster och defekt element i sovrummet' }),
        F('frist', 'Срок выполнения', 'Deadline for completion', 'date', { half: true }),
      ]),
    ],
    body: [
      ...govHdr(['{{hyresvard}}']),
      { type: 'title', text: 'KRAV PÅ REPARATIONER' },
      { type: 'paragraph', text: 'Ärende: Underhåll av hyresrätt', noIndent: true },
      { type: 'paragraph', text: 'Jag hyr lägenheten {{lagenhet}} av er. Lägenheten behöver följande underhåll och reparationer: {{beskrivning}}.', justify: true },
      { type: 'paragraph', text: 'Enligt 12 kap. 8 § jordabalken är hyresvärden skyldig att hålla bostaden i gott skick (bruksvärdighet) och svara för underhåll som inte beror på hyresgästen. Jag begär att åtgärderna vidtas senast den {{frist}}.', justify: true },
      { type: 'paragraph', text: 'Om underlåtenheten kvarstår avser jag att vända mig till hyresnämnden och kan i allvarliga fall begära hävning av avtalet enligt 12 kap. 47 § jordabalken.', justify: true },
      { type: 'attachment', items: ['Fotografier som visar bristerna.'], label: 'Bilagor:' },
      sign(),
    ],
  },
  {
    slug: 'se-court-betalningskrav', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Требование о возврате займа',
    titleDoc: 'Betalningskrav (lån)', titleEn: 'Payment demand (loan)',
    descRu: 'Требование о возврате займа перед обращением в Kronofogden: по Skuldebrevslagen (1936:81) требование подлежит оплате при наступлении срока; при просрочке — проценты по Räntelagen (1975:635).',
    descEn: 'Demand for repayment of a loan before applying for a payment order: under the Promissory Notes Act (1936:81) the debt is payable when due; default interest accrues under the Interest Act (1975:635).',
    descDoc: 'Kravbrev på återbetalning av lån innan ansökan om betalningsföreläggande.',
    refRu: 'Skuldebrevslagen (1936:81) 5 §; räntelagen (1975:635) — dröjsmålsränta',
    refEn: 'Promissory Notes Act (1936:81), Section 5; Interest Act (1975:635)',
    fields: [
      ...personFields([
        F('lanetagare', 'Заёмщик', 'Borrower', 'text', { half: true, placeholderDoc: 'Erik Eriksson' }),
        F('lanetagare_adress', 'Адрес заёмщика', 'Borrower address', 'text', { half: true, placeholderDoc: 'Kungsgatan 5, 111 43 Stockholm' }),
        F('belopp', 'Сумма займа, kr', 'Loan amount, SEK', 'number', { half: true, placeholderRu: '15000' }),
        F('datum_lan', 'Дата выдачи займа', 'Date of the loan', 'date', { half: true }),
        F('forfallodatum', 'Срок возврата', 'Due date', 'date', { half: true }),
        F('frist', 'Срок оплаты', 'Payment deadline', 'date', { half: true }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{lanetagare}}', '{{lanetagare_adress}}', '', '{{applicant_name}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'BETALNINGSKRAV' },
      { type: 'paragraph', text: 'Ärende: Krav på återbetalning av lån', noIndent: true },
      { type: 'paragraph', text: 'Den {{datum_lan}} lämnade jag ut ett lån på {{belopp}} kr till dig. Lånet förföll till betalning den {{forfallodatum}} men är ännu inte återbetalat.', justify: true },
      { type: 'paragraph', text: 'Med stöd av skuldebrevslagen (1936:81) och räntelagen (1975:635) kräver jag härmed att lånet återbetalas till mitt bankkonto senast den {{frist}}, jämte dröjsmålsränta från förfallodagen.', justify: true },
      { type: 'paragraph', text: 'Om betalning inte erhållits till angiven tid ansöker jag om betalningsföreläggande hos Kronofogdemyndigheten, vilket kan leda till betalningsanmärkning och verkställighet.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-court-kronofogden', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Заявление в Kronofogden о платёжном приказе',
    titleDoc: 'Ansökan om betalningsföreläggande', titleEn: 'Application for a payment order',
    descRu: 'Заявление в Kronofogdemyndigheten (шведская служба взыскания) о платёжном приказе (betalningsföreläggande) по Lagen (1990:746): упрощённое производство по бесспорным денежным требованиям.',
    descEn: 'Application to the Swedish Enforcement Authority (Kronofogden) for a payment order under the Act (1990:746): simplified proceedings for undisputed monetary claims.',
    descDoc: 'Ansökan till Kronofogdemyndigheten om betalningsföreläggande mot gäldenär.',
    refRu: 'Lagen (1990:746) om betalningsföreläggande och handräckning',
    refEn: 'Act (1990:746) on Summary Procedure and Enforcement',
    fields: [
      ...personFields([
        F('galdenar', 'Должник', 'Debtor', 'text', { half: true, placeholderDoc: 'Erik Eriksson' }),
        F('galdenar_adress', 'Адрес должника', 'Debtor address', 'text', { half: true, placeholderDoc: 'Kungsgatan 5, 111 43 Stockholm' }),
        F('belopp', 'Сумма требования, kr', 'Claim amount, SEK', 'number', { half: true, placeholderRu: '15000' }),
        F('forfallodatum', 'Дата наступления срока', 'Due date', 'date', { half: true }),
        F('grund', 'Основание требования', 'Basis of the claim', 'select', {
          options: ['enkelt skuldebrev', 'obetalda fakturor', 'arbete utfört men ej betalt', 'annan fordran'],
        }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Kronofogdemyndigheten', 'Enheten för betalningsföreläggande', '', '{{applicant_name}}', 'Personnummer: {{applicant_personnr}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'ANSÖKAN OM BETALNINGSFÖRELÄGGANDE' },
      { type: 'paragraph', text: 'Jag ansöker härmed om betalningsföreläggande mot {{galdenar}}, {{galdenar_adress}}, med stöd av lagen (1990:746) om betalningsföreläggande och handräckning.', justify: true },
      { type: 'paragraph', text: 'Fordringen uppgår till {{belopp}} kr och förföll till betalning den {{forfallodatum}}. Grund för fordringen är {{grund}}. Gäldenären har erinrats om betalning utan att betalning erhållits.', justify: true },
      { type: 'paragraph', text: 'Utöver huvudbeloppet begär jag dröjsmålsränta enligt räntelagen (1975:635) från och med förfallodagen till dess betalning sker. Underlag och bevis bifogas.', justify: true },
      { type: 'attachment', items: ['Kopia av skuldebrev respektive faktura.', 'Kravbrev och annan korrespondens med gäldenären.'], label: 'Bilagor:' },
      sign(),
    ],
  },
  {
    slug: 'se-court-arn', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Обращение в ARN (потребительский спор)',
    titleDoc: 'Klagomål till ARN', titleEn: 'Complaint to ARN',
    descRu: 'Обращение в ARN (Allmänna reklamationsnämnden) — шведский орган по разрешению потребительских споров: бесплатное рассмотрение спора с компанией, если продавец отклонил рекламацию.',
    descEn: 'Complaint to ARN (the Swedish National Board for Consumer Disputes): free review of a dispute with a company when the seller has rejected your complaint.',
    descDoc: 'Ansökan till Allmänna reklamationsnämnden om prövning av konsumenttvist.',
    refRu: 'Konsumentköplagen (2022:260); ARN — бесплатное рассмотрение спора',
    refEn: 'Consumer Sales Act (2022:260); ARN — free dispute resolution',
    fields: [
      ...personFields([
        F('foretag', 'Компания', 'Company', 'text', { half: true, placeholderDoc: 'Butiken Exempel AB' }),
        F('produkt', 'Товар или услуга', 'Product or service', 'text', { half: true, placeholderDoc: 'tvättmaskin modell W-500' }),
        F('belopp', 'Спорная сумма, kr', 'Amount in dispute, SEK', 'number', { half: true, placeholderRu: '4500' }),
        F('datum_kop', 'Дата покупки/заказа', 'Purchase date', 'date', { half: true }),
        F('beskrivning', 'Суть спора', 'Description of the dispute', 'textarea', { placeholderDoc: 'varan levererades skadad och företaget har nekat ersättning' }),
        F('krav', 'Требование', 'Demand', 'select', {
          options: ['återbetalning', 'ny vara i utbyte', 'reparation', 'prisavdrag'],
        }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Allmänna reklamationsnämnden (ARN)', 'Box 174, 101 23 Stockholm', '', '{{applicant_name}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'ANSÖKAN OM PRÖVNING' },
      { type: 'paragraph', text: 'Jag ansöker härmed om att Allmänna reklamationsnämnden (ARN) prövar tvist med {{foretag}} avseende {{produkt}} till ett värde av {{belopp}} kr, köpt den {{datum_kop}}.', justify: true },
      { type: 'paragraph', text: 'Förloppet är följande: {{beskrivning}}. Jag har reklamerat till företaget och begärt {{krav}}, men tvisten har inte kunnat lösas.', justify: true },
      { type: 'paragraph', text: 'Enligt konsumentköplagen (2022:260) och gällande konsumentvillkor anser jag att mitt krav är grundat. Bevis, bland annat kvitto och korrespondens med företaget, bifogas.', justify: true },
      { type: 'attachment', items: ['Kopia av kvitto eller orderbekräftelse.', 'Korrespondens med företaget.'], label: 'Bilagor:' },
      sign(),
    ],
  },
  {
    slug: 'se-court-imy', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в IMY (GDPR)',
    titleDoc: 'Anmälan till IMY (GDPR)', titleEn: 'Complaint to IMY (GDPR)',
    descRu: 'Жалоба в IMY (Integritetsskyddsmyndigheten) — шведский орган по защите данных: нарушение GDPR компанией или ведомством. Ст. 77 GDPR даёт право на жалобу, ст. 58 — полномочия регулятора.',
    descEn: 'Complaint to IMY (the Swedish Authority for Privacy Protection): GDPR violation by a company or authority. Article 77 GDPR gives the right to complain, Article 58 lists the regulator’s powers.',
    descDoc: 'Anmälan till Integritetsskyddsmyndigheten om bristande efterlevnad av dataskyddsförordningen.',
    refRu: 'Dataskyddsförordningen (EU) 2016/679, art. 77 — право на жалобу в надзорный орган',
    refEn: 'GDPR (EU) 2016/679, Article 77 — right to lodge a complaint with a supervisory authority',
    fields: [
      ...personFields([
        F('foretag', 'Компания/ведомство', 'Company or authority', 'text', { half: true, placeholderDoc: 'Företaget Exempel AB' }),
        F('beskrivning', 'Описание нарушения', 'Description of the breach', 'textarea', { placeholderDoc: 'företaget vägrar radera mina personuppgifter trots begäran' }),
        F('krav', 'Требование', 'Demand', 'select', {
          options: [
            'radering av mina personuppgifter (art. 17)',
            'tillgång till mina personuppgifter (art. 15)',
            'rättelse av felaktiga uppgifter (art. 16)',
            'stopp för direktreklam (art. 21)',
          ],
        }),
      ]),
    ],
    body: [
      ...govHdr(['Integritetsskyddsmyndigheten (IMY)']),
      { type: 'title', text: 'ANMÄLAN TILL INTEGRITETSSKYDDSMYNDIGHETEN' },
      { type: 'paragraph', text: 'Jag anmäler härmed {{foretag}} för bristande efterlevnad av dataskyddsförordningen (EU) 2016/679. Förhållandena är följande: {{beskrivning}}.', justify: true },
      { type: 'paragraph', text: 'Jag har tidigare vänt mig till {{foretag}} och begärt {{krav}}, utan att ärendet har åtgärdats. Enligt artikel 77 i förordningen har jag rätt att anmäla till tillsynsmyndigheten, och enligt artikel 79 rätt till ett rättsligt tillvägagångssätt.', justify: true },
      { type: 'paragraph', text: 'Jag ber IMY att utreda anmälan och vidta de åtgärder som behövs, bland annat med stöd av artikel 58 i förordningen.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-court-jo', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в JO (парламентский омбудсмен)',
    titleDoc: 'Klagomål till JO', titleEn: 'Complaint to the Parliamentary Ombudsman (JO)',
    descRu: 'Жалоба в JO (Justitieombudsmannen) — парламентские омбудсмены контролируют ведомства: по Regeringsformen 12 kap. 6 §. Жалобу можно подать бесплатно и без срока давности.',
    descEn: 'Complaint to JO (the Parliamentary Ombudsmen), who supervise public authorities under Chapter 12, Section 6 of the Instrument of Government. Complaints are free of charge with no time limit.',
    descDoc: 'Klagomål till Justitieombudsmannen över en myndighets åtgärd eller försummelse.',
    refRu: 'Regeringsformen (1974:152) 12 kap. 6 § — надзор JO за ведомствами',
    refEn: 'Instrument of Government (1974:152), Chapter 12, Section 6 — JO supervision of authorities',
    fields: [
      ...personFields([
        F('myndighet', 'Ведомство', 'Authority', 'text', { half: true, placeholderDoc: 'Försäkringskassan' }),
        F('datum_handelse', 'Дата события/ответа', 'Date of the event', 'date', { half: true }),
        F('beskrivning', 'Суть жалобы', 'Description of the complaint', 'textarea', { placeholderDoc: 'myndigheten har inte besvarat mitt ärende inom rimlig tid' }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Justitieombudsmannen (JO)', 'Box 16327, 103 26 Stockholm', '', '{{applicant_name}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'KLAGOMÅL TILL JO' },
      { type: 'paragraph', text: 'Jag vänder mig härmed till Justitieombudsmannen med klagomål över {{myndighet}}. Klagomålet avser händelse den {{datum_handelse}} och gäller följande: {{beskrivning}}.', justify: true },
      { type: 'paragraph', text: 'Enligt min mening har myndigheten gjort fel eller åsidosatt sin skyldighet att bemöta mig objektivt och svara inom rimlig tid. Klagomål till JO kan lämnas utan kostnad och utan tidsgräns.', justify: true },
      { type: 'paragraph', text: 'Jag ber JO att granska åtgärden eller försummelsen och vidta de åtgärder som bedöms erforderliga. Kopior av min korrespondens med myndigheten bifogas.', justify: true },
      { type: 'attachment', items: ['Kopia av brevväxling med myndigheten.', 'Kopia av myndighetens beslut.'], label: 'Bilagor:' },
      sign(),
    ],
  },
  {
    slug: 'se-tax-overklagande', kind: 'STANDARD', categorySlug: 'tax-docs',
    titleRu: 'Апелляция на решение Skatteverket',
    titleDoc: 'Överklagande av Skatteverkets beslut', titleEn: 'Appeal against a Swedish Tax Agency decision',
    descRu: 'Апелляция на решение Skatteverket: по Skatteförfarandelagen (2011:1244) 60 kap. решение обжалуется в течение четырёх недель; далее дело рассматривает административный суд.',
    descEn: 'Appeal against a Swedish Tax Agency decision: under the Tax Procedure Act (2011:1244), Chapter 60, the decision may be appealed within four weeks; the case then goes to the administrative court.',
    descDoc: 'Överklagande av Skatteverkets beslut enligt skatteförfarandelagen.',
    refRu: 'Skatteförfarandelagen (2011:1244) 60 kap. — обжалование в течение четырёх недель',
    refEn: 'Tax Procedure Act (2011:1244), Chapter 60 — appeal within four weeks',
    fields: [
      ...personFields([
        F('beslutsdatum', 'Дата решения', 'Decision date', 'date', { half: true }),
        F('besluttyp', 'Тип решения', 'Type of decision', 'select', {
          options: ['beslut om slutlig skatt', 'avslag på avdrag', 'beslut om preliminär inkomstdeklaration', 'annat beslut'],
        }),
        F('motivering', 'Обоснование апелляции', 'Grounds for appeal', 'textarea', { placeholderDoc: 'avdraget är grundat enligt 71 kap. 21 § SFL' }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Skatteverket', '', '{{applicant_name}}', 'Personnummer: {{applicant_personnr}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'ÖVERKLAGANDE AV BESLUT' },
      { type: 'paragraph', text: 'Jag överklagar härmed Skatteverkets beslut av {{beslutsdatum}} avseende {{besluttyp}}, med stöd av 60 kap. skatteförfarandelagen (2011:1244).', justify: true },
      { type: 'paragraph', text: 'Jag bestrider beslutet av följande skäl: {{motivering}}. Jag anhåller om att beslutet ändras i enlighet med mina anföranden.', justify: true },
      { type: 'paragraph', text: 'Överklagandet lämnas in inom föreskriven tid, fyra veckor från den dag då jag delgavs beslutet. Kopior av beslutet och relevanta bilagor bifogas.', justify: true },
      { type: 'attachment', items: ['Kopia av Skatteverkets beslut.', 'Underlag och kvitton som stöder överklagandet.'], label: 'Bilagor:' },
      sign(),
    ],
  },
  {
    slug: 'se-bank-klagomal', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Жалоба в банк',
    titleDoc: 'Klagomål till banken', titleEn: 'Complaint to the bank',
    descRu: 'Жалоба в банк: споры о комиссиях, списаниях, переводах и обслуживании. Банк обязан ответить письменно; при отказе дело можно передать в ARN (Allmänna reklamationsnämnden).',
    descEn: 'Complaint to the bank: disputes over fees, charges, transfers and service. The bank must answer in writing; if rejected, the case can be taken to ARN.',
    descDoc: 'Klagomål till banken avseende tjänster, avgifter eller transaktioner.',
    refRu: 'Lag (2004:297) om bank- och finansföretag; далее — ARN',
    refEn: 'Banking and Financing Business Act (2004:297); further review by ARN',
    fields: [
      ...personFields([
        F('bank', 'Банк', 'Bank', 'text', { half: true, placeholderDoc: 'Banken Exempel AB' }),
        F('arenderef', 'Номер счёта/дела', 'Account or case reference', 'text', { half: true, placeholderDoc: 'konto 1234-567-89' }),
        F('beskrivning', 'Описание проблемы', 'Description of the problem', 'textarea', { placeholderDoc: 'felaktig avgift debiterades mitt konto i mars' }),
        F('krav', 'Требование', 'Claim', 'text', { half: true, placeholderDoc: 'återbetalning av avgiften 250 kr' }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{bank}}', 'Kundtjänst/Klagomålsansvarig', '', '{{applicant_name}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'KLAGOMÅL TILL BANKEN' },
      { type: 'paragraph', text: 'Ärende: Klagomål avseende banktjänster (referens: {{arenderef}})', noIndent: true },
      { type: 'paragraph', text: 'Jag är kund hos er bank och vill härmed klaga över följande: {{beskrivning}}.', justify: true },
      { type: 'paragraph', text: 'Jag begär {{krav}}. Jag ber er besvara klagomålet skriftligen och redogöra för den grund ni utgår från vid bedömningen.', justify: true },
      { type: 'paragraph', text: 'Om jag inte är nöjd med ert svar avser jag att anföra ärendet hos Allmänna reklamationsnämnden (ARN), som även prövar tvist mellan konsument och bank.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-bank-kontoutdrag', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Запрос банковской выписки',
    titleDoc: 'Begäran om kontoutdrag', titleEn: 'Bank statement request',
    descRu: 'Запрос банковской выписки за период: по GDPR (ст. 15) и банковским условиям клиент имеет право получить выписку по счёту и копию данных о себе.',
    descEn: 'Request for a bank statement for a period: under GDPR (Article 15) and the bank’s terms the customer is entitled to a statement and a copy of personal data.',
    descDoc: 'Begäran till banken om kontoutdrag för angiven period.',
    refRu: 'Dataskyddsförordningen (EU) 2016/679 art. 15; lag (2004:297) om bank- och finansföretag',
    refEn: 'GDPR (EU) 2016/679, Article 15; Banking and Financing Business Act (2004:297)',
    fields: [
      ...personFields([
        F('bank', 'Банк', 'Bank', 'text', { half: true, placeholderDoc: 'Banken Exempel AB' }),
        F('period_from', 'Начало периода', 'Period start', 'date', { half: true }),
        F('period_to', 'Конец периода', 'Period end', 'date', { half: true }),
        F('leverans', 'Способ получения', 'Delivery method', 'select', {
          options: ['utskrift per post', 'PDF via internetbanken', 'certifierat utdrag med stämpel'],
        }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{bank}}', '', '{{applicant_name}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'BEGÄRAN OM KONTOUTDRAG' },
      { type: 'paragraph', text: 'Jag begär härmed kontoutdrag för mitt konto hos er bank för perioden {{period_from}} – {{period_to}}. Önskad leveransform är {{leverans}}.', justify: true },
      { type: 'paragraph', text: 'Rätten att ta del av uppgifter om mig följer av artikel 15 i dataskyddsförordningen (EU) 2016/679 samt av gällande bankvillkor. Utdraget behövs för dokumentation och bokföring.', justify: true },
      { type: 'paragraph', text: 'Kontoutdraget kan skickas till min folkbokföringsadress eller delges digitalt. Vid frågor når ni mig på {{applicant_phone}}.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-soc-fk-omprovning', kind: 'STANDARD', categorySlug: 'soc-benefits',
    titleRu: 'Запрос пересмотра решения Försäkringskassan',
    titleDoc: 'Omprövning av Försäkringskassans beslut', titleEn: 'Review of a Social Insurance Agency decision',
    descRu: 'Запрос пересмотра решения Försäkringskassan (пособия, больничные, родительские выплаты): по Socialförsäkringsbalken (2010:110) 100 kap. — omprövning в течение трёх недель; далее — административный суд.',
    descEn: 'Request for review of a Försäkringskassan decision: under the Social Insurance Code (2010:110), Chapter 100, review must be requested within three weeks; the case can then go to the administrative court.',
    descDoc: 'Begäran till Försäkringskassan om omprövning av beslut om förmån.',
    refRu: 'Socialförsäkringsbalken (2010:110) 100 kap. — пересмотр в течение трёх недель',
    refEn: 'Social Insurance Code (2010:110), Chapter 100 — review within three weeks',
    fields: [
      ...personFields([
        F('arendenummer', 'Номер дела', 'Case number', 'text', { half: true, placeholderDoc: 'årende 123456789' }),
        F('beslutsdatum', 'Дата решения', 'Decision date', 'date', { half: true }),
        F('forman', 'Вид пособия', 'Type of benefit', 'select', {
          options: ['sjukpenning', 'föräldrapenning', 'aktivitetsersättning', 'bostadsbidrag', 'underhållsstöd'],
        }),
        F('motivering', 'Обоснование', 'Grounds', 'textarea', { placeholderDoc: 'nytt läkarintyg visar fortsatt arbetsoförmåga' }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Försäkringskassan', '', '{{applicant_name}}', 'Personnummer: {{applicant_personnr}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'OMPRÖVNING AV BESLUT' },
      { type: 'paragraph', text: 'Jag begär härmed omprövning av Försäkringskassans beslut den {{beslutsdatum}} avseende {{forman}} (ärendenummer {{arendenummer}}), med stöd av 100 kap. socialförsäkringsbalken (2010:110).', justify: true },
      { type: 'paragraph', text: 'Jag bestrider beslutet av följande skäl: {{motivering}}.', justify: true },
      { type: 'paragraph', text: 'Omprövningen begärs inom föreskriven tid om tre veckor från den dag då beslutet delgavs mig. Underlag som stöder min begäran bifogas.', justify: true },
      { type: 'attachment', items: ['Kopia av beslutet.', 'Nya uppgifter eller läkarintyg.'], label: 'Bilagor:' },
      sign(),
    ],
  },
  {
    slug: 'se-soc-alderpension', kind: 'STANDARD', categorySlug: 'soc-pension',
    titleRu: 'Заявление о назначении возрастной пенсии',
    titleDoc: 'Ansökan om ålderpension', titleEn: 'Old-age pension application',
    descRu: 'Заявление в Pensionsmyndigheten о возрастной пенсии (ålderpension): полный или частичный вывод пенсии; общая пенсия формируется из inkomstpension, premiepension och tjänstepension.',
    descEn: 'Application to the Swedish Pensions Agency for an old-age pension: full or partial withdrawal; the public pension comprises income pension, premium pension and occupational pension.',
    descDoc: 'Ansökan till Pensionsmyndigheten om ålderpension med angivet uttag.',
    refRu: 'Lag (1998:674) om allmän pension — ålderpension',
    refEn: 'National Public Pensions Act (1998:674) — old-age pension',
    fields: [
      ...personFields([
        F('date_from', 'Дата начала пенсии', 'Pension start date', 'date', { half: true }),
        F('uttag', 'Охват вывода пенсии', 'Withdrawal level', 'select', {
          options: ['helt uttag (100 % pension)', 'deltagande uttag 75 %', 'deltagande uttag 50 %', 'deltagande uttag 25 %'],
        }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Pensionsmyndigheten', '', '{{applicant_name}}', 'Personnummer: {{applicant_personnr}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'ANSÖKAN OM ÅLDERPENSION' },
      { type: 'paragraph', text: 'Jag ansöker härmed om ålderpension med start den {{date_from}}. Önskad omfattning på uttaget är {{uttag}}.', justify: true },
      { type: 'paragraph', text: 'Uppgifter om mina inkomster och bostadsförhållanden finns hos Skatteverket och andra myndigheter. Kontouppgifter för utbetalning meddelas på begäran.', justify: true },
      { type: 'paragraph', text: 'Ta gärna kontakt på {{applicant_phone}} om ytterligare uppgifter behövs för att handlägga min ansökan.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-med-vardklagomal', kind: 'STANDARD', categorySlug: 'med-appeals',
    titleRu: 'Жалоба на медицинскую помощь',
    titleDoc: 'Klagomål på vård', titleEn: 'Complaint about healthcare',
    descRu: 'Жалоба на медицинскую помощь: по Patientlagen (2014:821) пациент вправе высказать недовольство; жалоба подаётся в регистратуру жалоб региона; серьёзные случаи — IVO (lex Maria).',
    descEn: 'Complaint about healthcare: under the Patient Act (2014:821) patients may express dissatisfaction; complaints go to the regional complaint desk; serious cases go to IVO.',
    descDoc: 'Klagomål till vårdgivaren över mottagen vård enligt patientlagen.',
    refRu: 'Patientlagen (2014:821) — право пациентов на подачу жалоб; IVO при серьёзных нарушениях',
    refEn: 'Patient Act (2014:821) — patients’ right to complain; IVO in serious cases',
    fields: [
      ...personFields([
        F('vardgivare', 'Медицинская организация', 'Healthcare provider', 'text', { half: true, placeholderDoc: 'Vårdcentralen Exempel' }),
        F('besokdatum', 'Дата визита', 'Visit date', 'date', { half: true }),
        F('beskrivning', 'Что произошло', 'What happened', 'textarea', { placeholderDoc: 'jag fick inte den remitterade specialistvården i tid' }),
        F('krav', 'Требование', 'Demand', 'select', {
          options: ['skriftligt svar från verksamheten', 'åtgärder i min fortsatta vård', 'intern utredning av händelsen'],
        }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{vardgivare}}', 'Klagomålsansvarig', '', '{{applicant_name}}', 'Personnummer: {{applicant_personnr}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'KLAGOMÅL PÅ VÅRD' },
      { type: 'paragraph', text: 'Jag vill härmed framföra klagomål över den vård jag erhöll hos {{vardgivare}} den {{besokdatum}}. Händelseförloppet var följande: {{beskrivning}}.', justify: true },
      { type: 'paragraph', text: 'Enligt patientlagen (2014:821) har patienter rätt att lämna synpunkter och klagomål på vården, och vårdgivaren är skyldig att ta emot och besvara dem. Jag begär {{krav}}.', justify: true },
      { type: 'paragraph', text: 'Jag förbehåller mig rätten att anmäla ärendet till Inspektionen för vård och omsorg (IVO) om bristerna inte åtgärdas.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-med-journal', kind: 'STANDARD', categorySlug: 'med-records',
    titleRu: 'Запрос выписки из медицинской карты',
    titleDoc: 'Begäran om utdrag ur journalen', titleEn: 'Medical record extract request',
    descRu: 'Запрос копии или выписки из медкарты: по Patientdatalagen (2008:355) пациент имеет право ознакомиться с журналом и получить выписку (utdrag) или копию.',
    descEn: 'Request for a copy or extract of the medical record: under the Patient Data Act (2008:355) the patient may access the record and receive an extract or a copy.',
    descDoc: 'Begäran om utdrag ur patientjournal enligt patientdatalagen.',
    refRu: 'Patientdatalagen (2008:355) — право на выписку из медицинской карты',
    refEn: 'Patient Data Act (2008:355) — right to an extract from the medical record',
    fields: [
      ...personFields([
        F('vardgivare', 'Медицинская организация', 'Healthcare provider', 'text', { half: true, placeholderDoc: 'Vårdcentralen Exempel' }),
        F('period_from', 'Начало периода', 'Period start', 'date', { half: true }),
        F('period_to', 'Конец периода', 'Period end', 'date', { half: true }),
        F('format', 'Формат выписки', 'Format', 'select', {
          options: ['kopia av journalen (papper)', 'digital kopia', 'utdrag med angivna poster'],
        }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{vardgivare}}', 'Journalenheten', '', '{{applicant_name}}', 'Personnummer: {{applicant_personnr}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'BEGÄRAN OM UTDRAK UR JOURNALEN' },
      { type: 'paragraph', text: 'Jag begär härmed utdrag ur min patientjournal hos {{vardgivare}} för perioden {{period_from}} – {{period_to}}. Önskat format är {{format}}.', justify: true },
      { type: 'paragraph', text: 'Enligt patientdatalagen (2008:355) har jag rätt att ta del av journaluppgifter och att erhålla utdrag eller kopia av journalen. Uppgifterna behövs för min egen dokumentation och för vidare vård.', justify: true },
      { type: 'paragraph', text: 'Underlaget kan skickas till min folkbokföringsadress. Legitimation kan visas vid överlämnande.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-edu-skolplats', kind: 'STANDARD', categorySlug: 'edu-docs',
    titleRu: 'Заявление о школьном месте',
    titleDoc: 'Ansökan om skolplats', titleEn: 'School place application',
    descRu: 'Заявление в коммуну о школьном месте: по Skollagen (2010:800) каждый ребёнок имеет право на обучение в коммунальной школе; коммуна обязана предложить место в школе рядом с домом.',
    descEn: 'Application to the municipality for a school place: under the Education Act (2010:800) every child has the right to education in the municipal school, which must offer a place close to home.',
    descDoc: 'Ansökan till kommunen om skolplats i den kommunala skolan.',
    refRu: 'Skollagen (2010:800) — право на обучение в коммунальной школе',
    refEn: 'Education Act (2010:800) — right to education in the municipal school',
    fields: [
      ...personFields([
        F('kommun', 'Коммуна', 'Municipality', 'text', { half: true, placeholderDoc: 'Stockholms stad' }),
        F('barn_namn', 'Имя ребёнка', 'Child’s name', 'text', { half: true, placeholderDoc: 'Elsa Andersson' }),
        F('barn_fodelsedatum', 'Дата рождения ребёнка', 'Child’s date of birth', 'date', { half: true }),
        F('skola', 'Школа', 'School', 'text', { half: true, placeholderDoc: 'Exempelskolan' }),
        F('date_from', 'Желаемая дата начала', 'Preferred start date', 'date', { half: true }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{kommun}}', 'Barn- och utbildningsförvaltningen', '', '{{applicant_name}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'ANSÖKAN OM SKOLPLATS' },
      { type: 'paragraph', text: 'Jag ansöker härmed om skolplats för mitt barn {{barn_namn}}, fött {{barn_fodelsedatum}}, vid {{skola}} med start den {{date_from}}.', justify: true },
      { type: 'paragraph', text: 'Enligt skollagen (2010:800) har alla barn rätt till utbildning i den kommunala skolan, och kommunen är skyldig att erbjuda en skolplats i nära anslutning till hemmet. Familjen är folkbokförd på adressen ovan.', justify: true },
      { type: 'paragraph', text: 'Ta gärna kontakt på {{applicant_phone}} om kompletterande uppgifter behövs.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-edu-universitet', kind: 'STANDARD', categorySlug: 'edu-docs',
    titleRu: 'Заявление о приёме в университет',
    titleDoc: 'Ansökan om antagning till universitetet', titleEn: 'University admission application',
    descRu: 'Заявление о приёме в университет/вуз: мотивация и приложение документов. Правила приёма — Högskoleförordningen (1993:100); основной канал заявок — antagning.se.',
    descEn: 'Application for admission to a university or college: motivation and supporting documents. Admission is governed by the Higher Education Ordinance (1993:100); applications go via antagning.se.',
    descDoc: 'Ansökan om antagning till utbildning vid universitet eller högskola.',
    refRu: 'Högskoleförordningen (1993:100) — приём в высшее образование',
    refEn: 'Higher Education Ordinance (1993:100) — admission to higher education',
    fields: [
      ...personFields([
        F('universitet', 'Университет', 'University', 'text', { half: true, placeholderDoc: 'Stockholms universitet' }),
        F('program', 'Программа/курс', 'Programme or course', 'text', { half: true, placeholderDoc: 'kandidatprogram i datavetenskap' }),
        F('termin', 'Семестр начала', 'Starting term', 'text', { half: true, placeholderDoc: 'höstterminen 2026' }),
        F('bakgrund', 'Мотивация и бэкграунд', 'Motivation and background', 'textarea', { placeholderDoc: 'gymnasieexamen med naturvetenskaplig inriktning och dokumenterat intresse för programmering' }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{universitet}}', 'Antagningsenheten', '', '{{applicant_name}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'ANSÖKAN OM ANTAGNING' },
      { type: 'paragraph', text: 'Jag ansöker härmed om antagning till {{program}} vid {{universitet}} till {{termin}}.', justify: true },
      { type: 'paragraph', text: 'Min bakgrund och min motivation för utbildningen är följande: {{bakgrund}}. Betyg och övriga intyg bifogas ansökan.', justify: true },
      { type: 'paragraph', text: 'Antagningen görs enligt högskoleförordningen (1993:100) och gällande urvalskriterier. Kontakta mig gärna på {{applicant_phone}} eller via brev om uppgifter behövs.', justify: true },
      { type: 'attachment', items: ['Kopia av betyg och examensbevis.', 'Övriga intyg som stöder ansökan.'], label: 'Bilagor:' },
      sign(),
    ],
  },
  {
    slug: 'se-post-postnord', kind: 'STANDARD', categorySlug: 'post-claims',
    titleRu: 'Рекламация PostNord (утерянное отправление)',
    titleDoc: 'Reklamation till PostNord om förlorat paket', titleEn: 'PostNord complaint (lost parcel)',
    descRu: 'Рекламация в PostNord об утерянном отправлении: по Postlagen (2016:238) за утерю письма или бандероли предусмотрена компенсация; для отправлений с трекингом ответственность шире.',
    descEn: 'Complaint to PostNord about a lost item: under the Postal Services Act (2016:238) compensation is payable for lost letters and parcels; tracked items carry wider liability.',
    descDoc: 'Reklamation till PostNord om förlorad eller skadad försändelse.',
    refRu: 'Lagen (2016:238) om posttjänster — компенсация за утерянные отправления',
    refEn: 'Postal Services Act (2016:238) — compensation for lost mail items',
    fields: [
      ...personFields([
        F('sandningid', 'Номер отправления', 'Tracking number', 'text', { half: true, placeholderDoc: 'AB123456789SE' }),
        F('datum', 'Дата отправки', 'Date of posting', 'date', { half: true }),
        F('innehall', 'Содержимое отправления', 'Contents', 'text', { half: true, placeholderDoc: 'elektronik och dokument' }),
        F('belopp', 'Стоимость, kr', 'Value, SEK', 'number', { half: true, placeholderRu: '3000' }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['PostNord Sverige AB', 'Kundtjänst/Reklamation', '', '{{applicant_name}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'REKLAMATION AV FÖRLORAD FÖRSÄNDELSE' },
      { type: 'paragraph', text: 'Ärende: Förlorad försändelse (sändningsnummer {{sandningid}})', noIndent: true },
      { type: 'paragraph', text: 'Försändelsen med sändningsnummer {{sandningid}}, postad den {{datum}}, har inte anlänt till mottagaren. Innehållet var {{innehall}} med ett värde av {{belopp}} kr.', justify: true },
      { type: 'paragraph', text: 'Enligt lagen (2016:238) om posttjänster har avsändaren rätt till ersättning för skada som uppkommer vid transport av brevförsändelser. Jag reklamerar härmed försändelsen och begär full ersättning för förlorad eller skadad vara.', justify: true },
      { type: 'paragraph', text: 'Sändningskvitto och eventuell försäkringsinformation bifogas. Ta gärna kontakt på {{applicant_phone}} om ytterligare uppgifter behövs.', justify: true },
      { type: 'attachment', items: ['Kopia av sändningskvitto.', 'Dokumentation av innehållets värde.'], label: 'Bilagor:' },
      sign(),
    ],
  },
  {
    slug: 'se-util-hyresvard-deposition', kind: 'STANDARD', categorySlug: 'util-management',
    titleRu: 'Требование к арендодателю о возврате депозита',
    titleDoc: 'Krav på hyresvärden om återbetalning av deposition', titleEn: 'Demand for the deposit refund from the landlord',
    descRu: 'Требование к арендодателю вернуть депозит после выезда: квартира сдана в надлежащем состоянии; по Jordabalken 12 kap. при удержании депозита спор рассматривает hyresnämnden.',
    descEn: 'Demand that the landlord refund the deposit after moving out: the dwelling was left in good condition; under the Land Code, Chapter 12, a dispute can be taken to the rent tribunal.',
    descDoc: 'Krav till hyresvärden om återbetalning av deposition efter utflyttning.',
    refRu: 'Jordabalken 12 kap. — прекращение аренды и депозит',
    refEn: 'Land Code, Chapter 12 — termination of tenancy and deposit',
    fields: [
      ...personFields([
        F('hyresvard', 'Арендодатель', 'Landlord', 'text', { half: true, placeholderDoc: 'Fastighets AB Bostaden' }),
        F('lagenhet', 'Адрес квартиры', 'Rental address', 'text', { half: true, placeholderDoc: 'Sturegatan 12, Stockholm' }),
        F('datum_flytt', 'Дата выезда', 'Move-out date', 'date', { half: true }),
        F('deposition', 'Сумма депозита, kr', 'Deposit amount, SEK', 'number', { half: true, placeholderRu: '20000' }),
        F('frist', 'Срок возврата', 'Deadline for repayment', 'date', { half: true }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{hyresvard}}', '', '{{applicant_name}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'KRAV PÅ ÅTERBETALNING AV DEPOSITION' },
      { type: 'paragraph', text: 'Ärende: Återbetalning av deposition', noIndent: true },
      { type: 'paragraph', text: 'Jag har hyrt lägenheten {{lagenhet}} av er och flyttade ut den {{datum_flytt}}. Lägenheten lämnades i gott skick efter besiktning, och ni har inte anfört några krav eller skador.', justify: true },
      { type: 'paragraph', text: 'Depositionen på {{deposition}} kr ska därför återbetalas. Jag begär att beloppet sätts in på mitt bankkonto senast den {{frist}}.', justify: true },
      { type: 'paragraph', text: 'Om depositionen inte återbetalas till angiven tid avser jag att anföra ärendet hos hyresnämnden.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-util-neighbors-noise', kind: 'STANDARD', categorySlug: 'util-neighbors',
    titleRu: 'Жалоба на шум от соседей (в коммуну)',
    titleDoc: 'Klagomål på grannbuller', titleEn: 'Neighbour noise complaint',
    descRu: 'Жалоба в коммуну на шум от соседей: по Miljöbalken (1998:808) 26 kap. деятельность не должна причинять неудобство здоровью (olägenhet för människors hälsa); коммуна проводит проверку и может выдать предписание.',
    descEn: 'Complaint to the municipality about neighbour noise: under the Environmental Code (1998:808), Chapter 26, activities must not cause a nuisance to human health; the municipality may inspect and issue an injunction.',
    descDoc: 'Klagomål till kommunens miljöförvaltning på buller från grannar.',
    refRu: 'Miljöbalken (1998:808) 26 kap. — неудобство для здоровья людей',
    refEn: 'Environmental Code (1998:808), Chapter 26 — nuisance to human health',
    fields: [
      ...personFields([
        F('kommun', 'Коммуна', 'Municipality', 'text', { half: true, placeholderDoc: 'Stockholms stad' }),
        F('granne_adress', 'Адрес соседей', 'Neighbours’ address', 'text', { half: true, placeholderDoc: 'Sturegatan 14, Stockholm' }),
        F('beskrivning', 'Описание шума и времени', 'Description of the noise', 'textarea', { placeholderDoc: 'hög musik och skrik varje natt mellan 23 och 03' }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{kommun}}', 'Miljö- och byggnämnden', '', '{{applicant_name}}', '{{applicant_address}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'KLAGOMÅL PÅ BULLER FRÅN GRANNAR' },
      { type: 'paragraph', text: 'Jag bor på adressen ovan och vill härmed klaga på buller från fastigheten {{granne_adress}}. Bullret är återkommande och kan beskrivas så här: {{beskrivning}}.', justify: true },
      { type: 'paragraph', text: 'Enligt 26 kap. miljöbalken (1998:808) får verksamheter eller åtgärder inte orsaka olägenhet för människors hälsa. Bullret från grannen utgör en sådan olägenhet och påverkar min möjlighet att sova och vistas i bostaden.', justify: true },
      { type: 'paragraph', text: 'Jag ber nämnden att utreda ärendet och vidta lämpliga åtgärder, exempelvis tillsyn eller föreläggande. Loggbok över tidpunkterna för bullret kan lämnas vid begäran.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-util-laneavtal', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Договор займа между частными лицами',
    titleDoc: 'Låneavtal mellan privatpersoner', titleEn: 'Private loan agreement',
    descRu: 'Договор займа между частными лицами: сумма, срок, проценты, подписи сторон. По Skuldebrevslagen (1936:81) и Preskriptionslagen (1981:130) требование по простому расписанию гасится через 10 лет.',
    descEn: 'Loan agreement between private individuals: amount, term, interest and signatures. Under the Promissory Notes Act (1936:81) and the Limitation Act (1981:130) a simple note lapses after ten years.',
    descDoc: 'Enkelt låneavtal mellan lånegivare och låntagare med återbetalningsvillkor.',
    refRu: 'Skuldebrevslagen (1936:81); preskriptionslagen (1981:130) — срок давности 10 лет',
    refEn: 'Promissory Notes Act (1936:81); Limitation Act (1981:130) — ten-year limitation period',
    fields: [
      F('lanegivare', 'Заимодавец', 'Lender', 'text', { half: true, placeholderDoc: 'Anna Andersson' }),
      F('lanegivare_personnr', 'Личный номер заимодавца', 'Lender’s identity number', 'text', { half: true, placeholderDoc: '19830517-1234' }),
      F('lanetagare', 'Заёмщик', 'Borrower', 'text', { half: true, placeholderDoc: 'Erik Eriksson' }),
      F('lanetagare_personnr', 'Личный номер заёмщика', 'Borrower’s identity number', 'text', { half: true, placeholderDoc: '19900101-5678' }),
      F('belopp', 'Сумма займа, kr', 'Loan amount, SEK', 'number', { half: true, placeholderRu: '20000' }),
      F('datum_lan', 'Дата выдачи', 'Date of disbursement', 'date', { half: true }),
      F('forfallodatum', 'Срок возврата', 'Due date', 'date', { half: true }),
      F('ranta', 'Процентная ставка', 'Interest rate', 'text', { half: true, placeholderDoc: '0 % (räntefritt lån)' }),
      F('ort', 'Место заключения', 'Place of signing', 'text', { half: true, placeholderDoc: 'Stockholm' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Lånegivare: {{lanegivare}}', 'Låntagare: {{lanetagare}}', '', 'Ort: {{ort}}', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'LÅNEAVTAL' },
      { type: 'paragraph', text: 'Lånegivaren {{lanegivare}} (personnummer {{lanegivare_personnr}}) lämnar härmed ut ett lån på {{belopp}} kr till låntagaren {{lanetagare}} (personnummer {{lanetagare_personnr}}). Lånet utbetalas den {{datum_lan}}.', justify: true },
      { type: 'paragraph', text: 'Lånet ska återbetalas senast den {{forfallodatum}} med en ränta av {{ranta}}. Delbetalningar kan göras enligt överenskommelse mellan parterna och ska antecknas.', justify: true },
      { type: 'paragraph', text: 'Om lånet inte återbetalas till förfallodagen förfaller hela beloppet till betalning och kan krävas in hos Kronofogdemyndigheten. Fordran preskriveras enligt preskriptionslagen (1981:130) efter tio år, och avtalet utgör underlag för utkrävning enligt skuldebrevslagen (1936:81).', justify: true },
      sign('Lånegivare:', '{{lanegivare}}'),
      sign('Låntagare:', '{{lanetagare}}'),
    ],
  },
  {
    slug: 'se-uni-folkbokforing', kind: 'STANDARD', categorySlug: 'uni-common',
    titleRu: 'Уведомление о переезде (регистрация населения)',
    titleDoc: 'Anmälan om flyttning (folkbokföring)', titleEn: 'Change of address notification',
    descRu: 'Уведомление Skatteverket о переезде (folkbokföring/adressändring): по Folkbokföringslagen (1991:481) переезд нужно сообщить в течение недели; регистрационный адрес определяет права и обязанности.',
    descEn: 'Notification to the Swedish Tax Agency of a move: under the Population Registration Act (1991:481) the move must be reported within a week; the registered address affects rights and obligations.',
    descDoc: 'Anmälan till Skatteverket om flyttning och ny adress.',
    refRu: 'Folkbokföringslagen (1991:481) — сообщить о переезде в течение недели',
    refEn: 'Population Registration Act (1991:481) — report a move within one week',
    fields: [
      ...personFields([
        F('nyadress', 'Новый адрес', 'New address', 'text', { half: true, placeholderDoc: 'Drottninggatan 45, 111 21 Stockholm' }),
        F('datum_flytt', 'Дата переезда', 'Moving date', 'date', { half: true }),
        F('medfoljande', 'Едущие вместе со мной', 'Others moving with me', 'text', { half: true, placeholderDoc: 'ingen' }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Skatteverket', 'Folkbokföringsenheten', '', '{{applicant_name}}', 'Personnummer: {{applicant_personnr}}', '', 'Datum: {{date_today}}'] },
      { type: 'title', text: 'ANMÄLAN OM FLYTTNING' },
      { type: 'paragraph', text: 'Jag anmäler härmed min flyttning enligt folkbokföringslagen (1991:481). Ny adress är {{nyadress}} och inflyttningsdatum är {{datum_flytt}}.', justify: true },
      { type: 'paragraph', text: 'Följande personer flyttar tillsammans med mig: {{medfoljande}}. Uppgifter om tidigare adress finns hos Skatteverket.', justify: true },
      { type: 'paragraph', text: 'Anmälan ska lämnas till Skatteverket inom en vecka efter flyttningen. Jag meddelar gärna ytterligare uppgifter på {{applicant_phone}} vid behov.', justify: true },
      sign(),
    ],
  },
  {
    slug: 'se-uni-fullmakt', kind: 'STANDARD', categorySlug: 'uni-money',
    titleRu: 'Доверенность (на банковские и административные дела)',
    titleDoc: 'Fullmakt', titleEn: 'Power of attorney',
    descRu: 'Доверенность (fullmakt) на выполнение действий от вашего имени: получение почты, банковские и административные вопросы. По правилам о доверенностях (2014:407) доверенность можно отозвать письменно в любой момент.',
    descEn: 'Power of attorney for acting in your name: collecting mail, banking and administrative matters. Under the power of attorney rules (2014:407) it may be revoked in writing at any time.',
    descDoc: 'Fullmakt till annan person att utföra angivna ärenden i fullmaktsgivarens ställe.',
    refRu: 'Правила о доверенности (2014:407) — отзыв возможен в любой момент',
    refEn: 'Power of Attorney rules (2014:407) — may be revoked at any time',
    fields: [
      ...personFields([
        F('ombud', 'Доверенное лицо', 'Attorney-in-fact', 'text', { half: true, placeholderDoc: 'Erik Eriksson' }),
        F('ombud_personnr', 'Личный номер доверенного', 'Attorney’s identity number', 'text', { half: true, placeholderDoc: '19900101-5678' }),
        F('omfattning', 'Охват полномочий', 'Scope of authority', 'select', {
          options: [
            'hämta post och paket i mitt ställe',
            'ta emot och svara på myndighetspost',
            'sköta bankärenden på mitt konto',
            'ombesta alla ekonomiska och administrativa ärenden',
          ],
        }),
        F('date_from', 'Действует с', 'Valid from', 'date', { half: true }),
        F('date_to', 'Действует до', 'Valid until', 'date', { half: true }),
      ]),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Fullmaktsgivare: {{applicant_name}}', 'Personnummer: {{applicant_personnr}}', '', 'Ombud: {{ombud}}', 'Personnummer: {{ombud_personnr}}', '', 'Ort och datum: {{date_today}}'] },
      { type: 'title', text: 'FULLMAKT' },
      { type: 'paragraph', text: 'Jag, {{applicant_name}} (personnummer {{applicant_personnr}}), ger härmed {{ombud}} (personnummer {{ombud_personnr}}) fullmakt att {{omfattning}} under perioden {{date_from}} – {{date_to}}.', justify: true },
      { type: 'paragraph', text: 'Fullmakten utfärdas i enlighet med gällande fullmaktsregler (2014:407) och kan återkallas skriftligen när som helst. Ombudet ska redovisa alla åtgärder som vidtagits i mitt ställe.', justify: true },
      sign('Fullmaktsgivare:', '{{applicant_name}}'),
      sign('Ombud:', '{{ombud}}'),
    ],
  },
];
