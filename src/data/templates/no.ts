// Шаблоны для Норвегии (язык документов — норвежский букмол).
// Основано на законодательстве Норвегии:
// Ferieloven (1988-06-27 nr 45): §§ 5 og 7 — ferie og feriepenger; 25 arbeidsdager
// ferie ved femdagersuke (30 ved sekstdagersuke).
// Arbeidsmiljøloven (2005-06-17 nr 62): § 10-12 — fleksibel arbeidstid (avvikling av
// arbeidstidsregulering); §§ 12-5 og 12-6 — permisjoner og fravær ved omsorg for barn;
// § 15-3 — oppsigelsesfrist (én måned for arbeidstaker); § 15-7 — saklig grunn for
// oppsigelse; § 15-15 — arbeidsattest ved opphør; § 17-3 — gjenpartsmøte ved innsigelse.
// Lønnsoppgaveloven (2017-05-19 nr 18) — rett til lønnsslipp.
// Folketrygdloven (1997-02-28 nr 19): kap. 8 — sykepenger og sykmelding (§ 8-3);
// kap. 14 — foreldrepenger og foreldrepermisjon; kap. 20 — alderspensjon.
// Forbrukerkjøpsloven (2002-06-21 nr 34): §§ 13 og 27 — reklamasjon, retting,
// prisavslag og erstatning. Husleieloven (1999-03-26 nr 17): § 1-13 — utleiers
// vedlikeholdsplikt. Gjeldsbrevlova (1939-06-16 nr 4) og avtaleloven (1918-05-31 nr 4;
// §§ 17 ff. — fullmakt) — lån og betalingsoppfordring.
// Tvisteloven (2005-06-17 nr 90) kap. 3 — forliksrådsbehandling; forvaltningsloven
// (1967-02-10) §§ 28–32 — klage på vedtak (frist tre uker); skattebetalingsloven
// (2005-12-16 nr 97) § 8-3 — klage på skattefastsettelsen. Personopplysningsloven
// (2018-06-15 nr 38) og personvernforordningen (GDPR) art. 77 — klage til Datatilsynet.
// Pasient- og brukerrettighetsloven (1999-07-02 nr 63): § 3-2 — innsyn i pasientjournal;
// § 7-6 — klage over helsetjeneste til Statsforvalteren. Opplæringsloven (1998-07-17
// nr 61) § 8-1 — rett til skoleplass; universitets- og høyskoleloven (2005-04-01 nr 15) —
// studierett og permittering fra studiene. Postloven (2014-06-20 nr 44) — erstatning ved
// tapt forsendelse. Naboforholdloven (2020-06-19 nr 100) — plikter mellom naboer (støy).
import type { DocBlock } from '../../lib/types';
import type { TplDef } from '../types';
import { F } from './helpers';

// Шапка письма работодателю: адресат справа, заявитель ниже, «Dato:» (норв. делопроизводство)
const workHdr = (): DocBlock => ({
  type: 'lines',
  align: 'right',
  items: ['{{org_name}}', 'Att: {{head_name}}', '', '{{applicant_name}}', '{{applicant_address}}', 'Dato: {{date_today}}'],
});

const workBase = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('org_name', 'Название работодателя', 'Employer name', 'text', { half: true, placeholderDoc: 'Firma Eksempel AS' }),
  F('head_name', 'Кому (руководитель/HR)', 'Addressed to', 'text', { half: true, placeholderDoc: 'Personalavdelingen' }),
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Kari Nordmann' }),
  F('applicant_address', 'Ваш адрес', 'Your address', 'text', { half: true, placeholderDoc: 'Storgata 12, 0155 Oslo' }),
  ...extra,
];

// Шапка письма физлица организации/ведомству; contact — доп. строки отправителя
// (Telefon/Fødselsnummer, TPL-1: поля не должны «исчезать» из документа)
const personHdr = (toItem: string, contact: string[] = []): DocBlock => ({
  type: 'lines',
  align: 'right',
  items: [toItem, '', '{{applicant_name}}', '{{applicant_address}}', ...contact, 'Dato: {{date_today}}'],
});

const personBase = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Kari Nordmann' }),
  F('applicant_address', 'Ваш адрес', 'Your address', 'text', { half: true, placeholderDoc: 'Storgata 12, 0155 Oslo' }),
  F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '900 12 345' }),
  ...extra,
];

// Шапка обращения в ведомство: «Gjelder: …» — строка темы (возвращает МАССИВ — вставлять со spread)
const agHdr = (): TplDef['body'] => [
  personHdr('{{agency_name}}', ['Fødselsnummer: {{applicant_fodselnr}}', 'Telefon: {{applicant_phone}}']),
  { type: 'paragraph', text: 'Gjelder: {{emne}}', noIndent: true },
];

const agencyBase = (agency: string, emne: string, extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('agency_name', 'Название ведомства', 'Agency name', 'text', { half: true, placeholderDoc: agency }),
  F('emne', 'Тема письма (Gjelder)', 'Subject line', 'text', { placeholderDoc: emne }),
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Kari Nordmann' }),
  F('applicant_address', 'Ваш адрес', 'Your address', 'text', { half: true, placeholderDoc: 'Storgata 12, 0155 Oslo' }),
  F('applicant_fodselnr', 'Фёдсельнуммер (ID)', 'National ID number', 'text', { half: true, placeholderDoc: '010180 12345' }),
  F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '900 12 345' }),
  ...extra,
];

const gjelder = (text: string): DocBlock => ({ type: 'paragraph', text, noIndent: true });

const mvh = (): DocBlock => ({
  type: 'signature',
  leftText: 'Med vennlig hilsen,',
  rightText: '_______________ / {{applicant_name}} /',
});

export const TEMPLATES_NO: TplDef[] = [
  {
    slug: 'no-work-ferie', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление на ежегодный отпуск',
    titleDoc: 'Søknad om ferie', titleEn: 'Annual leave application',
    descRu: 'Заявление работодателю о предоставлении ежегодного отпуска. По Ferieloven работник имеет право минимум на 25 рабочих дней отпуска при пятидневной рабочей неделе (30 дней при шестидневной).',
    descEn: 'Application to the employer for annual leave. Under the Norwegian Holiday Act the employee is entitled to at least 25 working days of holiday per year (five-day week).',
    descDoc: 'Søknad til arbeidsgiver om ferie etter ferieloven §§ 5 og 7, med ønsket periode og antall arbeidsdager.',
    refRu: 'Ferieloven (1988-06-27 nr 45) §§ 5, 7 — 25 arbeidsdager ferie ved femdagersuke',
    refEn: 'Holiday Act (1988 no. 45) §§ 5, 7 — 25 working days of holiday on a five-day week',
    fields: [
      ...workBase([
        F('date_from', 'Первый день отпуска', 'First day of leave', 'date', { half: true }),
        F('date_to', 'Последний день отпуска', 'Last day of leave', 'date', { half: true }),
        F('dager', 'Рабочих дней', 'Working days', 'number', { half: true, placeholderRu: '25' }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'SØKNAD OM FERIE' },
      { type: 'paragraph', text: 'Hei,', noIndent: true },
      { type: 'paragraph', text: 'Jeg søker hermed om ferie i perioden {{date_from}} til {{date_to}}, i alt {{dager}} arbeidsdager, i henhold til ferieloven §§ 5 og 7.', justify: true },
      { type: 'paragraph', text: 'Etter ferieloven har jeg rett til 25 arbeidsdager ferie i ferieåret ved femdagersuke. Jeg vil sørge for at gjenværende arbeidsoppgaver blir planlagt og ivaretatt før feriestart, og stiller meg til disposisjon for en gjennomgang av oppgavefordelingen.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-work-permisjon', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление на неоплачиваемый отпуск (permisjon)',
    titleDoc: 'Søknad om ubetalt permisjon', titleEn: 'Unpaid leave application',
    descRu: 'Заявление о неоплачиваемом отпуске/отпуске без содержания (permisjon) на определённый период с указанием причины — учёба, личные дела, забота о близких.',
    descEn: 'Application for unpaid leave from work for a defined period, stating the reason — studies, personal matters or care for relatives.',
    descDoc: 'Søknad til arbeidsgiver om ubetalt permisjon for en bestemt periode, med begrunnelse.',
    refRu: 'Arbeidsmiljøloven (2005-06-17 nr 62) kap. 12 — permisjoner',
    refEn: 'Working Environment Act (2005 no. 62) chapter 12 — leave of absence',
    fields: [
      ...workBase([
        F('date_from', 'Начало отпуска', 'Leave start', 'date', { half: true }),
        F('date_to', 'Конец отпуска', 'Leave end', 'date', { half: true }),
        F('arsak', 'Причина', 'Reason', 'text', { placeholderDoc: 'videreutdanning på deltid' }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'SØKNAD OM UBETALT PERMISJON' },
      { type: 'paragraph', text: 'Hei,', noIndent: true },
      { type: 'paragraph', text: 'Jeg søker hermed om ubetalt permisjon fra {{date_from}} til {{date_to}}. Bakgrunnen for søknaden er {{arsak}}.', justify: true },
      { type: 'paragraph', text: 'Jeg stiller meg til disposisjon for en samtale om hvordan mine arbeidsoppgaver kan ivaretas i permisjonsperioden, og forplikter meg til å gi beskjed snarest dersom planene mine endres. Jeg håper søknaden kan innvilges.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-work-fleksitid', kind: 'STANDARD', categorySlug: 'work-time',
    titleRu: 'Заявление о гибком рабочем времени (fleksitid)',
    titleDoc: 'Søknad om fleksibel arbeidstid', titleEn: 'Flexible working hours application',
    descRu: 'Заявление о введении гибкого рабочего графика: скользящее начало и конец дня, компенсирующее свободное время, частичная работа из дома. Основание — § 10-12 Aml. (отмена жёсткой регламентации рабочего времени).',
    descEn: 'Application for a flexible working-hours scheme: flexible start and end of the workday, compensating time off or partial home office, under § 10-12 of the Working Environment Act.',
    descDoc: 'Søknad om fleksibel arbeidstid etter arbeidsmiljøloven § 10-12, med ønsket ordning og oppstartsdato.',
    refRu: 'Arbeidsmiljøloven (2005-06-17 nr 62) § 10-12 — fleksibel arbeidstid',
    refEn: 'Working Environment Act (2005 no. 62) § 10-12 — flexible working hours',
    fields: [
      ...workBase([
        F('fleksibel_ordning', 'Желаемый режим', 'Preferred scheme', 'select', {
          options: [
            'Fleksibel start- og slutttid (fleksitid)',
            'Lengre arbeidsdager med ekstra fridager (kompenserende fritid)',
            'Fast veksling mellom fleksitid og teletid',
            'Delvis heimarbeid med fleksibel tidsbruk',
          ],
        }),
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'SØKNAD OM FLEKSIBEL ARBEIDSTID' },
      { type: 'paragraph', text: 'Hei,', noIndent: true },
      { type: 'paragraph', text: 'Jeg søker hermed om fleksibel arbeidstid i form av {{fleksibel_ordning}}, med oppstart {{date_from}}. Arbeidsmiljøloven § 10-12 gir adgang til å avvikle arbeidstidsreguleringen i form av fleksitid, slik at arbeidstiden kan tilpasses både den enkelte og virksomhetens behov.', justify: true },
      { type: 'paragraph', text: 'Jeg vil registrere all arbeidstid i bedriftens system, respektere eventuelle rammer for kjernetid og tilrettelegge oppgavene slik at samarbeidet og tilgjengeligheten ikke svekkes.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-work-fravaer', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Заявление на отсутствие по семейным обстоятельствам',
    titleDoc: 'Søknad om fravær (familieforhold)', titleEn: 'Absence application (family reasons)',
    descRu: 'Заявление на отсутствие по семейным причинам: болезнь ребёнка (§ 12-6 Aml.), уход за тяжело больным близким, похороны, семейные события, визиты к врачу или в школу.',
    descEn: 'Application for absence for family reasons: sick child (§ 12-6 of the Working Environment Act), care for a seriously ill relative, bereavement, family events or appointments.',
    descDoc: 'Søknad om fravær fra arbeid av hensyn til familieforhold, med periode og begrunnelse.',
    refRu: 'Arbeidsmiljøloven (2005-06-17 nr 62) § 12-6 — fravær ved omsorg for barn',
    refEn: 'Working Environment Act (2005 no. 62) § 12-6 — absence to care for a child',
    fields: [
      ...workBase([
        F('date_from', 'Первый день отсутствия', 'Absence start', 'date', { half: true }),
        F('date_to', 'Последний день отсутствия', 'Absence end', 'date', { half: true }),
        F('arsak_fravaer', 'Причина отсутствия', 'Reason for absence', 'select', {
          options: [
            'Sykt barn (arbeidsmiljøloven § 12-6)',
            'Omsorg for nærstående som er alvorlig syk',
            'Innkalling til helsevesenet eller skolen',
            'Sorg i forbindelse med dødsfall i nære familie',
            'Familiehendelse som bryllup eller konfirmasjon',
          ],
        }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'SØKNAD OM FRAVÆR' },
      { type: 'paragraph', text: 'Hei,', noIndent: true },
      { type: 'paragraph', text: 'Jeg søker om fravær fra arbeid i perioden {{date_from}} til {{date_to}} på grunn av {{arsak_fravaer}}.', justify: true },
      { type: 'paragraph', text: 'Jeg gir beskjed så tidlig som mulig dersom fraværet må forlenges eller avkortes, og stiller meg til disposisjon for avtale om dekning av mine oppgaver i fraværsperioden.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-work-foreldrepermisjon', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Уведомление о родительском отпуске (foreldrepermisjon)',
    titleDoc: 'Varsel om foreldrepermisjon', titleEn: 'Parental leave notification',
    descRu: 'Уведомление работодателя о родительском отпуске: сроки, степень занятости (100 %, 80 %, 50 %), план передачи задач. Родительские пособия (foreldrepenger) регулируются гл. 14 folketrygdloven.',
    descEn: 'Notification to the employer of parental leave: dates, degree of leave (100 %, 80 %, 50 %) and handover plan. Parental benefits are regulated by chapter 14 of the National Insurance Act.',
    descDoc: 'Varsel til arbeidsgiver om foreldrepermisjon, med oppstart, varighet og permisjonsgrad.',
    refRu: 'Folketrygdloven (1997-02-28 nr 19) kap. 14 — foreldrepenger; arbeidsmiljøloven § 12-5',
    refEn: 'National Insurance Act (1997 no. 19) ch. 14 — parental benefits; Working Environment Act § 12-5',
    fields: [
      ...workBase([
        F('permisjon_start', 'Начало отпуска', 'Leave start', 'date', { half: true }),
        F('permisjon_slutt', 'Конец отпуска', 'Leave end', 'date', { half: true }),
        F('grad', 'Степень отпуска', 'Leave ratio', 'select', {
          options: [
            '100 % foreldrepermisjon',
            '80 % foreldrepermisjon (forlenga periode)',
            '50 % gradert foreldrepermisjon',
            'Deling av permisjonen mellom foreldrene',
          ],
        }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'VARSEL OM FORELDREPERMISJON' },
      { type: 'paragraph', text: 'Hei,', noIndent: true },
      { type: 'paragraph', text: 'Jeg gir hermed varsel om foreldrepermisjon med oppstart {{permisjon_start}} og varighet til {{permisjon_slutt}}. Permisjonsgraden vil være {{grad}}.', justify: true },
      { type: 'paragraph', text: 'Etter folketrygdloven kapittel 14 er jeg berettiget til foreldrepenger, og jeg vil sende søknad til NAV i god tid. Før permisjonen starter vil jeg komme tilbake til en plan for overføring og dekning av mine arbeidsoppgaver.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-work-sykmelding', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Уведомление о больничном (sykmelding)',
    titleDoc: 'Melding om sykmelding', titleEn: 'Sick leave notification',
    descRu: 'Сообщение работодателю о больничном с указанием периода и выдавшего врача/приёмной. Sykmelding регистрируется в NAV по гл. 8 folketrygdloven (sykepenger); первая часть оплачивает работодатель.',
    descEn: 'Notification to the employer of sick leave with the period and issuing doctor/clinic. The sick note is registered with NAV under chapter 8 of the National Insurance Act (sickness benefits).',
    descDoc: 'Melding til arbeidsgiver om sykmelding, med sykmeldingsperiode og utferdigende legekontor.',
    refRu: 'Folketrygdloven (1997-02-28 nr 19) kap. 8, § 8-3 — sykepenger og sykmelding',
    refEn: 'National Insurance Act (1997 no. 19) ch. 8, § 8-3 — sickness benefits and sick notes',
    fields: [
      ...workBase([
        F('fravaer_fra', 'Больничный с', 'Sick leave from', 'date', { half: true }),
        F('fravaer_til', 'Больничный по', 'Sick leave until', 'date', { half: true }),
        F('leget_navn', 'Врач/приёмная', 'Doctor or clinic', 'text', { half: true, placeholderDoc: 'Legekontoret Eksempel' }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'MELDING OM SYKEMELDING' },
      { type: 'paragraph', text: 'Hei,', noIndent: true },
      { type: 'paragraph', text: 'Jeg gir hermed beskjed om at jeg er sykemeldt i perioden {{fravaer_fra}} til {{fravaer_til}}. Sykmeldingen er utferdiget av {{leget_navn}} og er registrert hos NAV etter folketrygdloven kapittel 8.', justify: true },
      { type: 'paragraph', text: 'Sykmeldingen sendes gjennom NAVs sykmeldingsløsning, slik at arbeidsgiverperioden og evt. sykepenger kan behandles. Jeg stiller meg til disposisjon for dialog om tilrettelegging, gradert tjenestegjøring eller oppfølging under fraværet.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-work-oppsigelse', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Заявление об увольнении по инициативе работника',
    titleDoc: 'Oppsigelse av arbeidsforholdet', titleEn: 'Resignation letter',
    descRu: 'Увольнение работником по собственному желанию. Срок предупреждения — 1 месяц (§ 15-3 Aml.), если не согласован более короткий срок в коллективном договоре. Просьба выдать arbeidsattest (§ 15-15).',
    descEn: 'Resignation by the employee. The notice period is one month (§ 15-3 of the Working Environment Act) unless a collective agreement provides otherwise; a work certificate is requested (§ 15-15).',
    descDoc: 'Oppsigelse av arbeidsforholdet fra arbeidstaker, med oppsigelsesfrist etter arbeidsmiljøloven § 15-3.',
    refRu: 'Arbeidsmiljøloven (2005-06-17 nr 62) § 15-3 — oppsigelsesfrist én måned',
    refEn: 'Working Environment Act (2005 no. 62) § 15-3 — one month notice period',
    fields: [
      ...workBase([
        F('stilling', 'Должность', 'Position', 'text', { half: true, placeholderDoc: 'konsulent' }),
        F('oppstart_stilling', 'Дата начала работы', 'Employment start', 'date', { half: true }),
        F('siste_arbeidsdag', 'Последний рабочий день', 'Last working day', 'date', { half: true }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'OPPSIGELSE AV ARBEIDSFORHOLDET' },
      { type: 'paragraph', text: 'Hei,', noIndent: true },
      { type: 'paragraph', text: 'Jeg sier hermed opp min stilling som {{stilling}} i henhold til arbeidsmiljøloven § 15-3, med oppsigelsesfrist på én måned. Jeg har vært ansatt siden {{oppstart_stilling}}, og oppsigelsen har virkning fra {{siste_arbeidsdag}}, som vil være min siste arbeidsdag.', justify: true },
      { type: 'paragraph', text: 'Jeg vil medvirke til en ordentlig overføring av arbeidsoppgaver og stiller meg til disposisjon for avslutningssamtale. Jeg ber om en arbeidsattest i henhold til arbeidsmiljøloven § 15-15 ved opphør av arbeidsforholdet.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-work-innsigelse', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Возражение против увольнения (innsigelse)',
    titleDoc: 'Innsigelse mot oppsigelse', titleEn: 'Objection to dismissal',
    descRu: 'Возражение работника против увольнения: требование созвать gjenpartsmøte (§ 17-3 Aml.), ссылка на отсутствие объективных оснований (§ 15-7), оговорка о судебной защите и компенсации.',
    descEn: 'Objection to a dismissal: request for a meeting under § 17-3 of the Working Environment Act, reference to the lack of fair grounds (§ 15-7) and reservation of the right to court proceedings.',
    descDoc: 'Innsigelse mot oppsigelse, med krav om gjenpartsmøte etter arbeidsmiljøloven § 17-3.',
    refRu: 'Arbeidsmiljøloven (2005-06-17 nr 62) §§ 15-7, 17-3 — saklig grunn og gjenpartsmøte',
    refEn: 'Working Environment Act (2005 no. 62) §§ 15-7, 17-3 — fair grounds and follow-up meeting',
    fields: [
      ...workBase([
        F('oppsigelse_dato', 'Дата получения уведомления', 'Date of notice received', 'date', { half: true }),
        F('stilling', 'Должность', 'Position', 'text', { half: true, placeholderDoc: 'rådgiver' }),
        F('begrunnelse_innsigelse', 'Основание возражения', 'Grounds of objection', 'select', {
          options: [
            'Oppsigelsen mangler saklig grunnlag etter arbeidsmiljøloven § 15-7',
            'Forholdene som er påberopt kan avhjelpes i arbeidsforholdet',
            'Nødvendig tilrettelegging og dialog manglet før oppsigelsen',
            'Oppsigelsen virker diskriminerende eller i strid med god skikk',
          ],
        }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'INNSIGELSE MOT OPPSIGELSE' },
      { type: 'paragraph', text: 'Hei,', noIndent: true },
      { type: 'paragraph', text: 'Jeg gjør hermed innsigelse mot oppsigelsen som jeg mottok den {{oppsigelse_dato}}. Jeg stiller meg uforstående til oppsigelsen av min stilling som {{stilling}} og mener at den mangler saklig grunnlag etter arbeidsmiljøloven § 15-7: {{begrunnelse_innsigelse}}.', justify: true },
      { type: 'paragraph', text: 'Jeg ber om at bedriften sammenkaller til gjenpartsmøte etter arbeidsmiljøloven § 17-3, og om at oppsigelsen inntil videre ikke gjennomføres. Dersom partene ikke blir enige, forbeholder jeg meg retten til å kreve oppsigelsen prøvd for domstolene og å kreve godtgjørelse og erstatning.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-work-arbeidsattest', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Запрос рабочего аттестата (arbeidsattest)',
    titleDoc: 'Begjæring om arbeidsattest', titleEn: 'Work certificate request',
    descRu: 'Запрос справки с места работы (arbeidsattest) при прекращении трудового договора. Работодатель обязан выдать аттестат по требованию (§ 15-15 Aml.); содержание — задачи, стаж, основание прекращения.',
    descEn: 'Request for a work certificate (arbeidsattest) upon termination of employment. The employer is obliged to issue it on request (§ 15-15 of the Working Environment Act).',
    descDoc: 'Begjæring til arbeidsgiver om arbeidsattest etter arbeidsmiljøloven § 15-15 ved opphør av arbeidsforholdet.',
    refRu: 'Arbeidsmiljøloven (2005-06-17 nr 62) § 15-15 — rett til arbeidsattest',
    refEn: 'Working Environment Act (2005 no. 62) § 15-15 — right to a work certificate',
    fields: [
      ...workBase([
        F('stilling', 'Должность', 'Position', 'text', { half: true, placeholderDoc: 'selger' }),
        F('ansatt_fra', 'Начало работы', 'Employment start', 'date', { half: true }),
        F('ansatt_til', 'Конец работы', 'Employment end', 'date', { half: true }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'BEGJÆRING OM ARBEIDSATTEST' },
      { type: 'paragraph', text: 'Hei,', noIndent: true },
      { type: 'paragraph', text: 'Jeg ber hermed om å få utstedt arbeidsattest etter arbeidsmiljøloven § 15-15 i forbindelse med opphør av mitt arbeidsforhold som {{stilling}} i perioden {{ansatt_fra}} til {{ansatt_til}}.', justify: true },
      { type: 'paragraph', text: 'Jeg ber om at attesten gjengir arbeidsoppgaver, arbeidstid og opphørsgrunnlag, og at den utferdiges på en måte som er nyttig for videre søknadsprosess. Attesten kan sendes elektronisk til oppgitt kontaktadresse.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-court-reklamasjon', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Претензия продавцу (reklamasjon)',
    titleDoc: 'Reklamasjon til selger', titleEn: 'Consumer complaint to the seller',
    descRu: 'Претензия продавцу по товару с дефектом: требование ремонта, замены, скидки или возврата денег. По forbrukerkjøpsloven reklamasjon должна быть заявлена в разумный срок (обычно 2 года).',
    descEn: 'Complaint to the seller about a defective product: claim for repair, replacement, price reduction or refund. Under the Norwegian Consumer Purchase Act the complaint must be made within a reasonable time (normally 2 years).',
    descDoc: 'Reklamasjon på vare med feil etter forbrukerkjøpsloven §§ 13 og 27, med krav om retting, prisavslag eller erstatning.',
    refRu: 'Forbrukerkjøpsloven (2002-06-21 nr 34) §§ 13, 27 — reklamasjon og erstatning',
    refEn: 'Consumer Purchase Act (2002 no. 34) §§ 13, 27 — complaints and remedies',
    fields: [
      ...personBase([
        F('butikk_navn', 'Название продавца', 'Seller name', 'text', { half: true, placeholderDoc: 'Butikken Eksempel AS' }),
        F('produkt', 'Товар', 'Product', 'text', { half: true, placeholderDoc: 'vaskemaskin, modell XY-200' }),
        F('kjopsdato', 'Дата покупки', 'Purchase date', 'date', { half: true }),
        F('pris', 'Цена', 'Price', 'text', { half: true, placeholderDoc: '5 490 kr' }),
        F('defekt', 'Описание дефекта', 'Defect description', 'text', { placeholderDoc: 'Maskinen stopper midt i programmet og lekker vann' }),
        F('krav_type', 'Требование', 'Remedy sought', 'select', {
          options: [
            'Reparasjon av varen på selgerens kostnad',
            'Prisavslag tilsvarende varens verdi med feil',
            'Heving av kjøpet med tilbakebetaling',
            'Nytt, tilsvarende produkt i stedet for det defekte',
          ],
        }),
      ]),
    ],
    body: [
      personHdr('{{butikk_navn}}', ['Telefon: {{applicant_phone}}']),
      gjelder('Gjelder: reklamasjon på kjøp av {{produkt}}'),
      { type: 'paragraph', text: 'Jeg henvender meg angående følgende reklamasjon. Den {{kjopsdato}} kjøpte jeg {{produkt}} hos dere for {{pris}}. Varen har følgende feil: {{defekt}}. Feilen har oppstått i normal bruk og skyldes ikke feilbruk fra min side.', justify: true },
      { type: 'paragraph', text: 'Etter forbrukerkjøpsloven §§ 13 og 27 gjør jeg hermed reklamasjon og krever {{krav_type}}. Jeg ber om svar innen rimelig tid, og senest 30 dager etter at denne reklamasjonen er mottatt. Ved manglende svar forbeholder jeg meg retten til å ta saken videre til Forbrukerrådet og forliksrådet.', justify: true },
      { type: 'attachment', items: ['Kopi av kvittering for kjøpet', 'Dokumentasjon av feilen (fotografier, korrespondanse)'], label: 'Vedlegg:' },
      mvh(),
    ],
  },
  {
    slug: 'no-court-husleie-vedlikehold', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Требование к арендодателю о ремонте (юридическое)',
    titleDoc: 'Vedlikeholdskrav til utleier', titleEn: 'Repair claim against the landlord',
    descRu: 'Юридическое требование к арендодателю об устранении недостатков: ссылка на § 1-13 husleieloven (обязанность поддерживать жильё), срок исполнения, оговорка о forliksråd и компенсации.',
    descEn: 'Formal demand to the landlord to repair defects: reference to § 1-13 of the Tenancy Act (duty to maintain), deadline and reservation of the right to conciliation and damages.',
    descDoc: 'Krav til utleier om utbedring av mangler etter husleieloven § 1-13, med frist for reparasjon.',
    refRu: 'Husleieloven (1999-03-26 nr 17) § 1-13 — utleiers vedlikeholdsplikt',
    refEn: 'Tenancy Act (1999 no. 17) § 1-13 — landlord’s duty to maintain',
    fields: [
      ...personBase([
        F('utleier_navn', 'Арендодатель', 'Landlord name', 'text', { half: true, placeholderDoc: 'Utleie Eksempel AS' }),
        F('leilighet_adresse', 'Адрес квартиры', 'Rented address', 'text', { half: true, placeholderDoc: 'Bergveien 4B, 7030 Trondheim' }),
        F('mangel', 'Описание повреждения', 'Defect description', 'text', { placeholderDoc: 'Fuktskader i badet og defekt ventilasjon' }),
        F('meldt_dato', 'Дата первого уведомления', 'Date first reported', 'date', { half: true }),
        F('frist_reparasjon', 'Срок устранения (дней)', 'Repair deadline (days)', 'number', { half: true, placeholderRu: '14' }),
      ]),
    ],
    body: [
      personHdr('{{utleier_navn}}', ['Telefon: {{applicant_phone}}']),
      gjelder('Gjelder: vedlikeholdskrav for {{leilighet_adresse}}'),
      { type: 'paragraph', text: 'Jeg henvender meg angående følgende mangler i leiligheten som jeg leier: {{mangel}}. Mangelen ble meldt til dere {{meldt_dato}}, men den er ennå ikke utbedret.', justify: true },
      { type: 'paragraph', text: 'Etter husleieloven § 1-13 plikter utleier å holde leiligheten i forsvarlig stand, inkludert utbedring av skader som ikke skyldes leietaker. Jeg krever at mangelen utbedres innen {{frist_reparasjon}} dager etter mottak av dette brevet.', justify: true },
      { type: 'paragraph', text: 'Dersom reparasjonen ikke blir gjennomført innen fristen, forbeholder jeg meg retten til å gjøre kravet gjeldende for forliksrådet etter tvisteloven, samt å kreve erstatning eller leierabatt etter husleieloven.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-court-betalingsoppfordring', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Требование о возврате займа (betalingsoppfordring)',
    titleDoc: 'Betalingsoppfordring (lån)', titleEn: 'Demand for repayment of a loan',
    descRu: 'Требование вернуть просроченный частный заём: сумма, дата займа, срок оплаты; упоминание forliksråd (tvisteloven) и gjeldsbrev/utleggstrekk (gjeldsbrevlova) при неоплате.',
    descEn: 'Demand for repayment of an overdue private loan: amount, loan date and payment deadline, with reference to the conciliation board and to enforcement if payment is not made.',
    descDoc: 'Betalingsoppfordring til debitor om å betale forfallent lån, med frist og varsel om forliksråd.',
    refRu: 'Gjeldsbrevlova (1939-06-16 nr 4); tvisteloven (2005-06-17 nr 90) kap. 3',
    refEn: 'Promissory Notes Act (1939 no. 4); Dispute Act (2005 no. 90) ch. 3',
    fields: [
      ...personBase([
        F('skyldner_navn', 'Имя должника', 'Debtor name', 'text', { half: true, placeholderDoc: 'Ola Skyldner' }),
        F('skyldner_adresse', 'Адрес должника', 'Debtor address', 'text', { half: true, placeholderDoc: 'Havnegata 3, 7010 Trondheim' }),
        F('lanebelop', 'Сумма займа', 'Loan amount', 'text', { half: true, placeholderDoc: '50 000 kr' }),
        F('lane_dato', 'Дата займа', 'Loan date', 'date', { half: true }),
        F('forfall_frist', 'Срок оплаты (дней)', 'Payment deadline (days)', 'number', { half: true, placeholderRu: '14' }),
      ]),
    ],
    body: [
      {
        type: 'lines',
        align: 'right',
        items: ['{{skyldner_navn}}', '{{skyldner_adresse}}', '', '{{applicant_name}}', '{{applicant_address}}', 'Telefon: {{applicant_phone}}', 'Dato: {{date_today}}'],
      },
      gjelder('Gjelder: betalingsoppfordring for lån på {{lanebelop}}'),
      { type: 'paragraph', text: 'Jeg henvender meg angående lån på {{lanebelop}} som jeg utbetalte til deg den {{lane_dato}}. Lånet er forfallent til betaling, og beløpet er ikke oppfylt til tross for tidligere henvendelser.', justify: true },
      { type: 'paragraph', text: 'Jeg ber deg hermed betale {{lanebelop}} innen {{forfall_frist}} dager etter mottak av denne betalingsoppfordringen. Betalingen gjøres til oppgitt konto, og jeg ber om bekreftelse når beløpet er betalt.', justify: true },
      { type: 'paragraph', text: 'Ved manglende betaling vil kravet bli sendt til forliksrådet etter tvisteloven, og renter, gebyrer og andre omkostninger kommer i tillegg. Et gjeldsbrev etter gjeldsbrevlova kan også gjøres til grunn for utleggstrekk.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-court-forliksradet', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Иск в посреднический совет (forliksrådet)',
    titleDoc: 'Krav til forliksrådet', titleEn: 'Claim to the conciliation board',
    descRu: 'Исковое требование в forliksråd по гл. 3 tvisteloven: стороны, сумма, суть спора, требование о проведении медиации и компенсации издержек.',
    descEn: 'Claim filed with the Norwegian conciliation board under chapter 3 of the Dispute Act: parties, amount, basis of the claim and request for mediation and costs.',
    descDoc: 'Krav til forliksrådet om mekling etter tvisteloven kapittel 3, med beskrivelse av grunnlaget for kravet.',
    refRu: 'Tvisteloven (2005-06-17 nr 90) kap. 3 — forliksrådsbehandling',
    refEn: 'Dispute Act (2005 no. 90) ch. 3 — conciliation board proceedings',
    fields: [
      ...personBase([
        F('forliksrad', 'Посреднический совет', 'Conciliation board', 'text', { half: true, placeholderDoc: 'Oslo forliksråd' }),
        F('motpart_navn', 'Имя ответчика', 'Respondent name', 'text', { half: true, placeholderDoc: 'Firma Eksempel AS' }),
        F('motpart_adresse', 'Адрес ответчика', 'Respondent address', 'text', { half: true, placeholderDoc: 'Nedre gate 7, 0157 Oslo' }),
        F('krav_belop', 'Сумма требования', 'Claim amount', 'text', { half: true, placeholderDoc: '35 000 kr' }),
        F('krav_bakgrunn', 'Суть спора', 'Basis of claim', 'text', { placeholderDoc: 'ubetalt faktura for utført reparasjonsarbeid, fakturanr. 1234' }),
      ]),
    ],
    body: [
      personHdr('{{forliksrad}}', ['Telefon: {{applicant_phone}}']),
      gjelder('Gjelder: krav mot {{motpart_navn}}'),
      { type: 'paragraph', text: 'Jeg har hermed lagt fram krav mot {{motpart_navn}} (adresse: {{motpart_adresse}}) for forliksrådsbehandling etter tvisteloven kapittel 3. Kravet lyder på {{krav_belop}} og gjelder {{krav_bakgrunn}}.', justify: true },
      { type: 'paragraph', text: 'Jeg har tidligere forsøkt å få kravet dekket gjennom henvendelser til motparten uten resultat, og partene har ikke inngått minnelig oppgjør. Jeg ber derfor om at forliksrådet iverksetter mekling.', justify: true },
      { type: 'list', items: ['Kravet tilskrives renter etter forsinkelsesrenteloven', 'Omkostninger til forliksrådsbehandlingen legges på motparten'] },
      mvh(),
    ],
  },
  {
    slug: 'no-court-forbrukerradet', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в Forbrukerrådet',
    titleDoc: 'Klage til Forbrukerrådet', titleEn: 'Complaint to the Norwegian Consumer Council',
    descRu: 'Жалоба в Совет по делам потребителей: продавец не ответил на reklamasjon или отказал. Forbrukerrådet рассматривает споры по forbrukerkjøpsloven и может передать дело в Форум потребителческих жалоб.',
    descEn: 'Complaint to the Norwegian Consumer Council: the seller ignored or refused the complaint. The Council handles disputes under the Consumer Purchase Act and may refer the case to the Consumer Disputes Commission.',
    descDoc: 'Klage til Forbrukerrådet over ubesvart reklamasjon, med dokumentasjon av saksforløpet.',
    refRu: 'Forbrukerkjøpsloven (2002-06-21 nr 34); forvaltningsloven — klagebehandling',
    refEn: 'Consumer Purchase Act (2002 no. 34); Public Administration Act — complaint handling',
    fields: [
      ...agencyBase('Forbrukerrådet', 'Klage over ubesvart reklamasjon', [
        F('virksomhet', 'Название компании', 'Company complained about', 'text', { half: true, placeholderDoc: 'Butikken Eksempel AS' }),
        F('reklamasjon_dato', 'Дата первой претензии', 'Date of original complaint', 'date', { half: true }),
        F('klage_sak', 'Суть жалобы', 'Complaint summary', 'text', { placeholderDoc: 'Selger nekter å etterkomme reklamasjon på defekt fjernsyn' }),
      ]),
    ],
    body: [
      ...agHdr(),
      { type: 'paragraph', text: 'Jeg henvender meg angående {{klage_sak}}. Jeg reklamerte til {{virksomhet}} den {{reklamasjon_dato}}, uten at saken er løst tilfredsstillende etter forbrukerkjøpsloven.', justify: true },
      { type: 'paragraph', text: 'Jeg ber Forbrukerrådet vurdere klagen og bistå med å få kravet oppfylt. Vedlagt følger kopi av reklamasjonen, kvittering og korrespondanse med virksomheten. Jeg ber om bekreftelse på at klagen er mottatt og registrert.', justify: true },
      { type: 'attachment', items: ['Kopi av reklamasjon til virksomheten', 'Kvittering og dokumentasjon av varens feil', 'Korrespondanse med selgeren'], label: 'Vedlegg:' },
      mvh(),
    ],
  },
  {
    slug: 'no-court-datatilsynet', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в Datatilsynet (персональные данные)',
    titleDoc: 'Klage til Datatilsynet', titleEn: 'Complaint to the Norwegian Data Protection Authority',
    descRu: 'Жалоба в Норвежскую дирекцию по защите данных: отказ в доступе к данным, отказ в исправлении, утечка или нежелательная рассылка. Основание — personopplysningsloven и GDPR art. 77.',
    descEn: 'Complaint to the Norwegian Data Protection Authority: refusal of access or correction, data leak or unwanted marketing. Based on the Norwegian Personal Data Act and GDPR art. 77.',
    descDoc: 'Klage til Datatilsynet over virksomhetens behandling av personopplysninger etter personopplysningsloven og GDPR art. 77.',
    refRu: 'Personopplysningsloven (2018-06-15 nr 38); GDPR art. 77 — klage til Datatilsynet',
    refEn: 'Personal Data Act (2018 no. 38); GDPR art. 77 — complaint to the supervisory authority',
    fields: [
      ...agencyBase('Datatilsynet', 'Klage over behandling av personopplysninger', [
        F('virksomhet_navn', 'Название организации', 'Organisation', 'text', { half: true, placeholderDoc: 'Virksomhet Eksempel AS' }),
        F('henvendelse_dato', 'Дата обращения в организацию', 'Date of enquiry to organisation', 'date', { half: true }),
        F('klage_bakgrunn', 'Суть жалобы', 'Complaint basis', 'select', {
          options: [
            'Virksomheten har nektet innsyn i mine personopplysninger',
            'Feilaktige personopplysninger er ikke rettet etter min henvendelse',
            'Personopplysninger er lekket eller delt videre uten rettslig grunnlag',
            'Jeg mottar uønsket markedsføring til tross for protest',
          ],
        }),
      ]),
    ],
    body: [
      ...agHdr(),
      { type: 'paragraph', text: 'Jeg klager hermed over {{virksomhet_navn}} sin behandling av mine personopplysninger: {{klage_bakgrunn}}. Jeg tok opp saken med virksomheten {{henvendelse_dato}}, uten at den er blitt løst.', justify: true },
      { type: 'paragraph', text: 'Etter personopplysningsloven og personvernforordningen (GDPR) artikkel 77 har jeg rett til å klage til Datatilsynet. Jeg ber tilsynet vurdere om behandlingen er i strid med personvernreglene og sette i verk nødvendige tiltak.', justify: true },
      { type: 'attachment', items: ['Kopi av henvendelse til virksomheten', 'Dokumentasjon av saksforløpet'], label: 'Vedlegg:' },
      mvh(),
    ],
  },
  {
    slug: 'no-tax-skatteklage', kind: 'STANDARD', categorySlug: 'tax-docs',
    titleRu: 'Жалоба на налоговое начисление (Skatteetaten)',
    titleDoc: 'Klage på skattefastsettelsen', titleEn: 'Complaint against the tax assessment',
    descRu: 'Жалоба в Skatteetaten на начисление налога: оспариваемые позиции, желаемое изменение, документация. Срок жалобы — 6 недель после получения skatteoppgjør (§ 8-3 skattebetalingsloven).',
    descEn: 'Complaint to the Norwegian Tax Administration against the tax assessment: contested items, sought change and documentation. Deadline: six weeks after receiving the tax settlement (§ 8-3 of the Tax Payment Act).',
    descDoc: 'Klage på skattefastsettelsen for inntektsåret etter skattebetalingsloven § 8-3, med dokumentasjon.',
    refRu: 'Skattebetalingsloven (2005-12-16 nr 97) § 8-3 — klage på skattefastsettelsen',
    refEn: 'Tax Payment Act (2005 no. 97) § 8-3 — complaint against the tax assessment',
    fields: [
      ...agencyBase('Skatteetaten', 'Klage på skattefastsettelsen', [
        F('skatteaar', 'Налоговый год', 'Tax year', 'text', { half: true, placeholderDoc: '2025' }),
        F('klage_post', 'Оспариваемые позиции', 'Contested items', 'text', { placeholderDoc: 'Fradrag for reise mellom hjem og arbeid er ikke innvilget' }),
        F('endret_belop', 'Желаемое изменение', 'Sought change', 'text', { half: true, placeholderDoc: 'fradrag på 12 000 kr' }),
      ]),
    ],
    body: [
      ...agHdr(),
      { type: 'paragraph', text: 'Jeg klager hermed på skattefastsettelsen for inntektsåret {{skatteaar}} etter skattebetalingsloven § 8-3: {{klage_post}}.', justify: true },
      { type: 'paragraph', text: 'Jeg ber om at fastsettelsen omgjøres, slik at det innvilges {{endret_belop}}. Vedlagt følger dokumentasjon som grunnlag for klagen. Jeg ber om bekreftelse på at klagen er mottatt, og om skriftlig svar med begrunnelse dersom klagen avslås.', justify: true },
      { type: 'attachment', items: ['Dokumentasjon som grunnlag for klagen (kvitteringer, utskrifter)'], label: 'Vedlegg:' },
      mvh(),
    ],
  },
  {
    slug: 'no-bank-klage', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Жалоба в банк',
    titleDoc: 'Klage til banken', titleEn: 'Complaint to the bank',
    descRu: 'Жалоба в банк на некорректные комиссии, ошибки по счёту или карту, отсутствие ответа. Ссылка на finansavtaleloven; при отказе — дальнейшее обжалование в Finansklagenemnda.',
    descEn: 'Complaint to the bank about incorrect fees, account or card errors, or lack of response. Based on the Financial Agreements Act; failure to resolve can be escalated to the Financial Complaints Board.',
    descDoc: 'Klage til banken over behandling av kundeforholdet, med krav om etterundersøkelse og korrigering.',
    refRu: 'Finansavtaleloven (1999-04-09 nr 19) — finansavtaler og kundehåndtering',
    refEn: 'Financial Agreements Act (1999 no. 19) — financial agreements and customer handling',
    fields: [
      ...agencyBase('Banken Eksempel AS', 'Klage over bankens behandling av kundeforholdet', [
        F('konto_nr', 'Номер счёта', 'Account number', 'text', { half: true, placeholderDoc: '1234 56 78903' }),
        F('klage_sak_bank', 'Суть жалобы', 'Complaint summary', 'text', { placeholderDoc: 'feilaktige gebyrer på konto og manglende varsling om kortsalg' }),
      ]),
    ],
    body: [
      ...agHdr(),
      { type: 'paragraph', text: 'Jeg henvender meg angående {{klage_sak_bank}}. Kontonummeret mitt i {{agency_name}} er {{konto_nr}}. Jeg har tidligere tatt opp saken med banken uten tilfredsstillende svar.', justify: true },
      { type: 'paragraph', text: 'Jeg ber banken etterforske forholdet, korrigere eventuelle feil og tilbakebetale urimelige gebyrer etter finansavtaleloven. Jeg forventer svar innen rimelig tid; ellers forbeholder jeg meg retten til å ta saken videre til Finansklagenemnda.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-bank-kontoutskrift', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Запрос выписки по счёту',
    titleDoc: 'Begjæring om kontoutskrift', titleEn: 'Request for account statement',
    descRu: 'Запрос полной выписки по счёту за период. Банк обязан предоставлять документацию по счёту (finansavtaleloven); выписка может быть выслана электронно или выдана в отделении.',
    descEn: 'Request for a full account statement for a period. The bank is obliged to provide documentation on the account (Financial Agreements Act); the statement can be sent electronically or issued at the branch.',
    descDoc: 'Begjæring til banken om kontoutskrift for en gitt periode, med ønsket måte for utlevering.',
    refRu: 'Finansavtaleloven (1999-04-09 nr 19) — dokumentasjons- og opplysningsplikt',
    refEn: 'Financial Agreements Act (1999 no. 19) — duty to provide documentation',
    fields: [
      ...agencyBase('Banken Eksempel AS', 'Begjæring om kontoutskrift', [
        F('konto_nr', 'Номер счёта', 'Account number', 'text', { half: true, placeholderDoc: '1234 56 78903' }),
        F('utskrift_fra', 'Период с', 'Period from', 'date', { half: true }),
        F('utskrift_til', 'Период по', 'Period to', 'date', { half: true }),
      ]),
    ],
    body: [
      ...agHdr(),
      { type: 'paragraph', text: 'Jeg ber hermed om å få tilsendt fullstendig kontoutskrift for konto {{konto_nr}} i {{agency_name}} for perioden {{utskrift_fra}} til {{utskrift_til}}.', justify: true },
      { type: 'paragraph', text: 'Etter finansavtaleloven har jeg rett til dokumentasjon over avtaler og kontobehandling. Utskriften kan sendes elektronisk til oppgitt e-postadresse eller utleveres på bankkontor etter nærmere avtale.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-soc-nav-klage', kind: 'STANDARD', categorySlug: 'soc-benefits',
    titleRu: 'Жалоба на решение NAV',
    titleDoc: 'Klage på NAV-vedtak', titleEn: 'Complaint against a NAV decision',
    descRu: 'Жалоба на решение NAV (отказ в пособии, неверный расчёт). Срок — 3 недели с получения решения (§ 29 forvaltningsloven); при отклонении жалобы дело передаётся в Trygderetten.',
    descEn: 'Complaint against a NAV decision (benefit refusal or miscalculation). Deadline: three weeks from receiving the decision (§ 29 of the Public Administration Act); unresolved cases go to the Welfare Appeals Board.',
    descDoc: 'Klage på vedtak fattet av NAV etter forvaltningsloven §§ 28–32, med begrunnelse og ny dokumentasjon.',
    refRu: 'Forvaltningsloven (1967-02-10) §§ 28–32 — klagefrist tre uker',
    refEn: 'Public Administration Act (1967-02-10) §§ 28–32 — three-week complaint deadline',
    fields: [
      ...agencyBase('NAV', 'Klage på vedtak fattet av NAV', [
        F('vedtak_dato', 'Дата решения', 'Date of decision', 'date', { half: true }),
        F('vedtak_sak', 'Тема решения', 'Subject of decision', 'text', { half: true, placeholderDoc: 'avslag på sykepenger' }),
        F('klage_grunn_nav', 'Основание жалобы', 'Grounds of complaint', 'select', {
          options: [
            'Vedtaket er fattet på feil faktisk grunnlag',
            'Rettsanvendelsen er feil',
            'Saken er ikke tilstrekkelig utredet',
            'Ny dokumentasjon endrer sakens grunnlag',
          ],
        }),
      ]),
    ],
    body: [
      ...agHdr(),
      { type: 'paragraph', text: 'Jeg klager hermed på NAVs vedtak {{vedtak_dato}} om {{vedtak_sak}}. Klagen sendes innen fristen på tre uker etter forvaltningsloven § 29.', justify: true },
      { type: 'paragraph', text: 'Grunnlaget for klagen er: {{klage_grunn_nav}}. Jeg ber om at vedtaket omgjøres etter klagen, og om at saken får en tilstrekkelig utredning. Dersom klagen avslås eller avvises, ber jeg om at saken sendes videre til Trygderetten.', justify: true },
      { type: 'attachment', items: ['Ny dokumentasjon som grunnlag for klagen', 'Kopi av vedtaket'], label: 'Vedlegg:' },
      mvh(),
    ],
  },
  {
    slug: 'no-soc-alderspensjon', kind: 'STANDARD', categorySlug: 'soc-pension',
    titleRu: 'Заявление на старческую пенсию (alderspensjon)',
    titleDoc: 'Søknad om alderspensjon', titleEn: 'Old-age pension application',
    descRu: 'Заявление в NAV о старческой пенсии по гл. 20 folketrygdloven: дата начала, семейное положение, периоды проживания за границей (влияют на расчёт pensjonsopptjening).',
    descEn: 'Application to NAV for old-age pension under chapter 20 of the National Insurance Act: start date, marital status and periods of residence abroad (affecting pension accrual).',
    descDoc: 'Søknad til NAV om alderspensjon etter folketrygdloven kapittel 20, med oppstartsdato og tilleggsopplysninger.',
    refRu: 'Folketrygdloven (1997-02-28 nr 19) kap. 20 — alderspensjon',
    refEn: 'National Insurance Act (1997 no. 19) ch. 20 — old-age pension',
    fields: [
      ...agencyBase('NAV', 'Søknad om alderspensjon', [
        F('pensjon_fra', 'Начало пенсии', 'Pension start', 'date', { half: true }),
        F('sivilstand', 'Семейное положение', 'Marital status', 'select', {
          options: ['ugift', 'gift eller samboende', 'enslig', 'skilt eller separert'],
        }),
        F('bosted_utenland', 'Периоды проживания за границей', 'Periods of residence abroad', 'text', { half: true, placeholderDoc: 'ikke relevant' }),
      ]),
    ],
    body: [
      ...agHdr(),
      { type: 'paragraph', text: 'Jeg søker hermed om alderspensjon etter folketrygdloven kapittel 20 med oppstart {{pensjon_fra}}. Jeg er {{sivilstand}}. Opphold i utlandet: {{bosted_utenland}}.', justify: true },
      { type: 'paragraph', text: 'Jeg ber om at NAV gjennomfører nødvendig registrering, beregning og utbetaling av pensjonen, og om bekreftelse på hvilke tilleggsytelser jeg har rett til. Tilleggsopplysninger og dokumentasjon gis gjerne på telefon eller på forespørsel.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-med-klage', kind: 'STANDARD', categorySlug: 'med-appeals',
    titleRu: 'Жалоба на медицинскую помощь (Statsforvalteren)',
    titleDoc: 'Klage over helsetjeneste', titleEn: 'Complaint about health services',
    descRu: 'Жалоба на качество медицинской помощи в Statsforvalteren: § 7-6 pasient- og brukerrettighetsloven; ведомство оценивает, было ли обслуживание forsvarlig (должным).',
    descEn: 'Complaint about the quality of health services to the County Governor: § 7-6 of the Patients’ Rights Act; the authority assesses whether the care was proper.',
    descDoc: 'Klage til Statsforvalteren over helsetjenesten etter pasient- og brukerrettighetsloven § 7-6.',
    refRu: 'Pasient- og brukerrettighetsloven (1999-07-02 nr 63) § 7-6 — klage over helsetjeneste',
    refEn: 'Patients’ and Users’ Rights Act (1999 no. 63) § 7-6 — complaint about health services',
    fields: [
      ...agencyBase('Statsforvalteren', 'Klage over helsetjeneste', [
        F('helseforetak', 'Название учреждения', 'Health institution', 'text', { half: true, placeholderDoc: 'Universitetssykehuset Eksempel' }),
        F('behandling_dato', 'Дата обращения/лечения', 'Date of treatment', 'date', { half: true }),
        F('klage_sak_med', 'Суть жалобы', 'Complaint summary', 'text', { placeholderDoc: 'manglende undersøkelser og uklar informasjon om behandlingsforløpet' }),
      ]),
    ],
    body: [
      ...agHdr(),
      { type: 'paragraph', text: 'Jeg klager hermed over helsetjenesten ved {{helseforetak}} i forbindelse med behandling {{behandling_dato}}: {{klage_sak_med}}.', justify: true },
      { type: 'paragraph', text: 'Etter pasient- og brukerrettighetsloven § 7-6 ber jeg Statsforvalteren vurdere om helsetjenesten var forsvarlig. Jeg ber også om at journalen min gjennomgås i forbindelse med klagebehandlingen, og om skriftlig svar med begrunnelse.', justify: true },
      { type: 'attachment', items: ['Kopi av relevant korrespondanse med helseforetaket'], label: 'Vedlegg:' },
      mvh(),
    ],
  },
  {
    slug: 'no-med-journal', kind: 'STANDARD', categorySlug: 'med-records',
    titleRu: 'Запрос на доступ к медицинской карте',
    titleDoc: 'Begjæring om innsyn i pasientjournal', titleEn: 'Request for access to patient records',
    descRu: 'Запрос на доступ к пациентской карте за период (§ 3-2 pasient- og brukerrettighetsloven): форма выдачи — распечатка, безопасная электронная копия или просмотр в учреждении.',
    descEn: 'Request for access to the patient record for a period (§ 3-2 of the Patients’ Rights Act): form of access — printout, secure electronic copy or viewing at the institution.',
    descDoc: 'Begjæring om innsyn i pasientjournal etter pasient- og brukerrettighetsloven § 3-2, med ønsket form for innsyn.',
    refRu: 'Pasient- og brukerrettighetsloven (1999-07-02 nr 63) § 3-2 — innsyn i journal',
    refEn: 'Patients’ and Users’ Rights Act (1999 no. 63) § 3-2 — right of access to the record',
    fields: [
      ...agencyBase('Legekontoret Eksempel', 'Begjæring om innsyn i pasientjournal', [
        F('journal_fra', 'Период с', 'Period from', 'date', { half: true }),
        F('journal_til', 'Период по', 'Period to', 'date', { half: true }),
        F('innsyn_form', 'Форма выдачи', 'Form of access', 'select', {
          options: [
            'Utskrift av journalen tilsendt i posten',
            'Elektronisk kopi på sikker e-post',
            'Innsyn på behandlingssted etter avtale',
          ],
        }),
      ]),
    ],
    body: [
      ...agHdr(),
      { type: 'paragraph', text: 'Jeg ber hermed om innsyn i min pasientjournal hos {{agency_name}} for perioden {{journal_fra}} til {{journal_til}} etter pasient- og brukerrettighetsloven § 3-2. Ønsket form for innsyn: {{innsyn_form}}.', justify: true },
      { type: 'paragraph', text: 'Jeg ber om at utskrift eller kopi gjengir alle journalnotater, prøvesvar og henvisninger i perioden. Vedlagt følger kopi av legitimasjon som bekreftelse på min identitet.', justify: true },
      { type: 'attachment', items: ['Kopi av legitimasjonsdokument'], label: 'Vedlegg:' },
      mvh(),
    ],
  },
  {
    slug: 'no-edu-skoleplass', kind: 'STANDARD', categorySlug: 'edu-docs',
    titleRu: 'Заявление на школьное место',
    titleDoc: 'Søknad om skoleplass', titleEn: 'School place application',
    descRu: 'Заявление в коммуну о предоставлении школьного места ребёнку: § 8-1 opplæringsloven даёт право на обучение в начальной школе, обычно в ближайшей школе (nærskole).',
    descEn: 'Application to the municipality for a school place for a child: § 8-1 of the Education Act grants the right to primary education, normally at the nearby school.',
    descDoc: 'Søknad til kommunen om skoleplass etter opplæringsloven § 8-1, med ønsket skole og oppstart.',
    refRu: 'Opplæringsloven (1998-07-17 nr 61) § 8-1 — rett til skoleplass',
    refEn: 'Education Act (1998 no. 61) § 8-1 — right to a school place',
    fields: [
      ...agencyBase('Utdanningsetaten, Oslo kommune', 'Søknad om skoleplass', [
        F('barn_navn', 'Имя ребёнка', 'Child’s name', 'text', { half: true, placeholderDoc: 'Ola Nordmann' }),
        F('barn_fodt', 'Дата рождения ребёнка', 'Child’s date of birth', 'date', { half: true }),
        F('skole_start', 'Начало обучения', 'School start', 'date', { half: true }),
        F('skole_onsket', 'Желаемая школа', 'Preferred school', 'text', { half: true, placeholderDoc: 'Eksempel skole' }),
      ]),
    ],
    body: [
      ...agHdr(),
      { type: 'paragraph', text: 'Jeg søker hermed om skoleplass for {{barn_navn}} (født {{barn_fodt}}) med oppstart ved {{skole_onsket}} fra {{skole_start}}, etter opplæringsloven § 8-1.', justify: true },
      { type: 'paragraph', text: 'Barnet har rett til skoleplass i nærskolen, og jeg ber kommunen bekrefte tildeling så tidlig som mulig, slik at planleggingen av skolestart blir forsvarlig. Tilleggsopplysninger om adresser og omsorgssituasjon gis ved behov.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-uni-permittering', kind: 'STANDARD', categorySlug: 'uni-common',
    titleRu: 'Заявление о перерыве в учёбе (permittering)',
    titleDoc: 'Søknad om permittering fra studiene', titleEn: 'Study leave (suspension) application',
    descRu: 'Заявление в вуз о перерыве в учёбе (permittering fra studiene): срок, причина (болезнь, забота о близких, работа, военная служба), сохранение студенческих прав.',
    descEn: 'Application to the university for a leave of absence from studies: period, reason (illness, care for relatives, work, military service) and retention of student rights.',
    descDoc: 'Søknad til universitetet om permittering fra studiene, med periode og begrunnelse.',
    refRu: 'Universitets- og høyskoleloven (2005-04-01 nr 15) — studierett og permittering',
    refEn: 'Universities and Colleges Act (2005 no. 15) — study rights and leave of absence',
    fields: [
      ...agencyBase('Universitetet i Eksempel', 'Søknad om permittering fra studiene', [
        F('studium', 'Программа обучения', 'Study programme', 'text', { half: true, placeholderDoc: 'bachelor i informatikk' }),
        F('permittering_fra', 'Период с', 'Leave from', 'date', { half: true }),
        F('permittering_til', 'Период по', 'Leave to', 'date', { half: true }),
        F('arsak_permittering', 'Причина', 'Reason', 'select', {
          options: [
            'Sykdom',
            'Omsorgsoppgaver for nærstående',
            'Arbeid eller praksisplass i studieperioden',
            'Verneplikt eller annen tjenestegjøring',
          ],
        }),
      ]),
    ],
    body: [
      ...agHdr(),
      { type: 'paragraph', text: 'Jeg søker hermed om permittering fra studiene mine i {{studium}} i perioden {{permittering_fra}} til {{permittering_til}} på grunn av {{arsak_permittering}}.', justify: true },
      { type: 'paragraph', text: 'Jeg ber om bekreftelse på at studierett og progresjon følges opp i samsvar med universitets- og høyskoleloven og gjeldende studieforskrift. I svaret ønsker jeg også opplysninger om eventuelle konsekvenser for studieplan og utdanningsstøtte.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-uni-stipend', kind: 'STANDARD', categorySlug: 'uni-money',
    titleRu: 'Заявление на стипендию/грант (stipend)',
    titleDoc: 'Søknad om stipend', titleEn: 'Scholarship application',
    descRu: 'Заявление на стипендию или грант фонда: программа, цель (обмен, проект, учебные материалы), запрашиваемая сумма и приложенные документы (оценки, бюджет, подтверждение зачисления).',
    descEn: 'Application for a scholarship or foundation grant: programme, purpose (exchange, project, study materials), amount sought and enclosures (transcript, budget, admission confirmation).',
    descDoc: 'Søknad om stipend fra fond, med formål, ønsket beløp og vedlagt dokumentasjon.',
    refRu: 'Universitets- og høyskoleloven (2005-04-01 nr 15); vedtekter для stipend- og legatordninger',
    refEn: 'Universities and Colleges Act (2005 no. 15); bylaws for scholarship and grant schemes',
    fields: [
      ...agencyBase('Eksempel fondet', 'Søknad om stipend', [
        F('studium_stipend', 'Программа обучения', 'Study programme', 'text', { half: true, placeholderDoc: 'master i samfunnsøkonomi' }),
        F('stipend_belop', 'Запрашиваемая сумма', 'Amount sought', 'text', { half: true, placeholderDoc: '25 000 kr' }),
        F('formal_stipend', 'Цель', 'Purpose', 'text', { placeholderDoc: 'utvekslingsopphold ved partneruniversitet i ett semester' }),
      ]),
    ],
    body: [
      ...agHdr(),
      { type: 'paragraph', text: 'Jeg søker hermed om stipend fra {{agency_name}} på {{stipend_belop}} til {{formal_stipend}}. Jeg studerer {{studium_stipend}} og oppfyller kravene i vedtektene for tildeling.', justify: true },
      { type: 'paragraph', text: 'Vedlagt følger dokumentasjon av studierett, karakterutskrift og budsjett for gjennomføringen. Jeg stiller meg til disposisjon for ytterligere opplysninger og ber om svar innen søknadsfristen.', justify: true },
      { type: 'attachment', items: ['Karakterutskrift', 'Budsjettoppstilling', 'Bekreftelse på opptak eller utvekslingsavtale'], label: 'Vedlegg:' },
      mvh(),
    ],
  },
  {
    slug: 'no-post-tapt-forsendelse', kind: 'STANDARD', categorySlug: 'post-claims',
    titleRu: 'Претензия в почтовую службу (потерянное отправление)',
    titleDoc: 'Reklamasjon på tapt forsendelse', titleEn: 'Lost mail complaint',
    descRu: 'Претензия почтовому оператору об утерянном отправлении: номер отслеживания, дата отправки, содержимое и стоимость; требование расследования и возмещения по postloven.',
    descEn: 'Complaint to the postal operator about a lost item: tracking number, posting date, contents and value; request for investigation and compensation under the Norwegian Postal Act.',
    descDoc: 'Reklamasjon på tapt forsendelse til postoperatør, med krav om undersøkelse og erstatning etter postloven.',
    refRu: 'Postloven (2014-06-20 nr 44) — erstatning ved tapt forsendelse',
    refEn: 'Postal Act (2014 no. 44) — compensation for lost mail',
    fields: [
      ...personBase([
        F('postleverandor', 'Почтовый оператор', 'Postal operator', 'text', { half: true, placeholderDoc: 'Posten Norge AS' }),
        F('forsendelse_nr', 'Номер отслеживания', 'Tracking number', 'text', { half: true, placeholderDoc: 'RA123456789NO' }),
        F('forsendelse_dato', 'Дата отправки', 'Date of posting', 'date', { half: true }),
        F('forsendelse_innhold', 'Содержимое и стоимость', 'Contents and value', 'text', { placeholderDoc: 'dokumentmappe med viktige papirer, verdi ca. 3 000 kr' }),
      ]),
    ],
    body: [
      personHdr('{{postleverandor}}', ['Telefon: {{applicant_phone}}']),
      gjelder('Gjelder: tapt forsendelse {{forsendelse_nr}}'),
      { type: 'paragraph', text: 'Jeg henvender meg angående en forsendelse sendt {{forsendelse_dato}} med sporingsnummer {{forsendelse_nr}}. Sendingen er registrert som innlevert, men den er aldri levert, og sporingen er stanset opp.', justify: true },
      { type: 'paragraph', text: 'Innholdet var {{forsendelse_innhold}}. Etter postloven har jeg krav på erstatning for tapt forsendelse. Jeg ber om at saken blir undersøkt, og om erstatning for dokumentert verdi med tilskrivelse av portokostnaden.', justify: true },
      { type: 'attachment', items: ['Kvittering for innsendelse og utskrift av sporing', 'Dokumentasjon av innholdets verdi'], label: 'Vedlegg:' },
      mvh(),
    ],
  },
  {
    slug: 'no-util-vedlikehold', kind: 'STANDARD', categorySlug: 'util-management',
    titleRu: 'Обращение в управляющую компанию о ремонте',
    titleDoc: 'Krav om vedlikehold til forvaltningen', titleEn: 'Maintenance request to the property management',
    descRu: 'Практическое обращение в управляющую компанию/арендодателя о необходимом ремонте жилья: описание, дата первого сообщения, требование плана ремонта и письменного ответа.',
    descEn: 'Practical request to the property management or landlord for necessary home repairs: description, date first reported, demand for a repair plan and a written reply.',
    descDoc: 'Henvendelse til boligforvaltningen om vedlikehold og reparasjon, med henvisning til husleieloven § 1-13.',
    refRu: 'Husleieloven (1999-03-26 nr 17) § 1-13 — utleiers vedlikeholdsplikt',
    refEn: 'Tenancy Act (1999 no. 17) § 1-13 — landlord’s duty to maintain',
    fields: [
      ...personBase([
        F('forvaltning_navn', 'Управляющая компания', 'Property management', 'text', { half: true, placeholderDoc: 'Boligforvaltning Eksempel AS' }),
        F('bolig_adresse', 'Адрес жилья', 'Address', 'text', { half: true, placeholderDoc: 'Nordre gate 8, 7011 Trondheim' }),
        F('vedlikehold_sak', 'Что требует ремонта', 'What needs repair', 'text', { placeholderDoc: 'lekkasje fra taket over soverommet' }),
        F('vedlikehold_meldt', 'Дата первого сообщения', 'First reported', 'date', { half: true }),
      ]),
    ],
    body: [
      personHdr('{{forvaltning_navn}}', ['Telefon: {{applicant_phone}}']),
      gjelder('Gjelder: vedlikehold i {{bolig_adresse}}'),
      { type: 'paragraph', text: 'Jeg henvender meg angående behovet for vedlikehold i boligen min: {{vedlikehold_sak}}. Forholdet ble første gang meldt {{vedlikehold_meldt}}, men det er ikke satt i verk tiltak så langt.', justify: true },
      { type: 'paragraph', text: 'Etter husleieloven § 1-13 plikter utleier å sørge for forsvarlig vedlikehold. Jeg ber om at reparasjonen planlegges og gjennomføres innen rimelig tid, og om skriftlig beskjed om når arbeidet vil bli utført.', justify: true },
      { type: 'paragraph', text: 'Dersom vedlikeholdet ikke blir gjennomført, forbeholder jeg meg retten til å følge opp saken etter husleieloven, inkludert krav om leierabatt eller heving av leieforholdet.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-util-neighbors-noise', kind: 'STANDARD', categorySlug: 'util-neighbors',
    titleRu: 'Жалоба на шум от соседей',
    titleDoc: 'Klage på nabostøy', titleEn: 'Complaint about neighbour noise',
    descRu: 'Жалоба в коммуну на повторяющийся шум от соседей: тип шума, время, предпринятые попытки диалога; просьба о консультации, контроле и предписании по naboforholdloven.',
    descEn: 'Complaint to the municipality about repeated noise from neighbours: type of noise, time, attempts at dialogue; request for guidance, inspection and an order under the Neighbours Act.',
    descDoc: 'Klage til kommunen på nabostøy etter naboforholdloven, med beskrivelse av type støy og tidsrom.',
    refRu: 'Naboforholdloven (2020-06-19 nr 100) — hensynsplikt mellom naboer (støy)',
    refEn: 'Neighbours Act (2020 no. 100) — duty of consideration between neighbours (noise)',
    fields: [
      ...personBase([
        F('kommune_navn', 'Название коммуны', 'Municipality', 'text', { half: true, placeholderDoc: 'Oslo kommune' }),
        F('nabo_adresse', 'Адрес соседей', 'Neighbour address', 'text', { half: true, placeholderDoc: 'Storgata 14, 0155 Oslo' }),
        F('stoy_type', 'Характер шума', 'Noise type', 'select', {
          options: [
            'Musikk og høy lyd i leiligheten',
            'Arbeid med maskiner i uhensiktsmessige tider',
            'Bjeffing fra hund over lengre perioder',
            'Regelmessig støy nattestid på hverdager',
          ],
        }),
        F('stoy_periode', 'Когда происходит', 'When it occurs', 'text', { half: true, placeholderDoc: 'hver kveld fra ca. klokken 23' }),
      ]),
    ],
    body: [
      personHdr('{{kommune_navn}}', ['Telefon: {{applicant_phone}}']),
      gjelder('Gjelder: klage på nabostøy fra {{nabo_adresse}}'),
      { type: 'paragraph', text: 'Jeg henvender meg angående gjentatt støy fra naboeiendommen {{nabo_adresse}}: {{stoy_type}}. Støyen foregår {{stoy_periode}} og forstyrrer nattesøvnen og dagliglivet i husholdningen min i betydelig grad.', justify: true },
      { type: 'paragraph', text: 'Jeg har forsøkt å ta opp forholdet direkte med naboen, uten at det har hatt noen varig effekt. Etter naboforholdloven skal naboer utvise hensyn til hverandre, og jeg ber kommunen om veiledning og, om nødvendig, tilsyn og pålegg.', justify: true },
      { type: 'paragraph', text: 'Jeg ber om skriftlig svar med opplysning om hvilke tiltak kommunen kan iverksette, og om at denne klagen dokumenteres til eventuell videre behandling.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-util-fullmakt', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Доверенность (fullmakt)',
    titleDoc: 'Fullmakt', titleEn: 'Power of attorney',
    descRu: 'Простая письменная доверенность на представителя: полномочия (получение почты, представительство в NAV/банке/ведомствах), срок действия, право отзыва. §§ 17 ff. avtaleloven.',
    descEn: 'Simple written power of attorney: scope (collecting mail, representation before NAV, the bank or public bodies), validity period and right of revocation. §§ 17 ff. of the Agreements Act.',
    descDoc: 'Fullmakt til å representere giveren hos offentlige organer, bank eller post, med omfang og gyldighetstid.',
    refRu: 'Avtaleloven (1918-05-31 nr 4) §§ 17 ff. — fullmaktsregler',
    refEn: 'Agreements Act (1918 no. 4) §§ 17 ff. — rules on powers of attorney',
    fields: [
      ...personBase([
        F('applicant_fodselnr', 'Ваш фёдсельнуммер', 'Your national ID number', 'text', { half: true, placeholderDoc: '010180 12345' }),
        F('fullmektig_navn', 'Имя представителя', 'Attorney-in-fact', 'text', { half: true, placeholderDoc: 'Ola Nordmann' }),
        F('fullmektig_fnr', 'Фёдсельнуммер представителя', 'Attorney-in-fact ID', 'text', { half: true, placeholderDoc: '120480 12345' }),
        F('fullmakt_omfang', 'Объём полномочий', 'Scope of authority', 'select', {
          options: [
            'Hente post og dokumenter på min vegne',
            'Representere meg hos NAV',
            'Representere meg hos banken',
            'Representere meg i henvendelser til offentlige organer',
          ],
        }),
        F('fullmakt_gyldig', 'Действительна до', 'Valid until', 'date', { half: true }),
      ]),
    ],
    body: [
      {
        type: 'lines',
        align: 'right',
        items: ['{{applicant_name}}', '{{applicant_address}}', 'Telefon: {{applicant_phone}}', 'Dato: {{date_today}}'],
      },
      { type: 'title', text: 'FULLMAKT' },
      { type: 'paragraph', text: 'Jeg, {{applicant_name}} (fødselsnummer {{applicant_fodselnr}}), gir hermed {{fullmektig_navn}} (fødselsnummer {{fullmektig_fnr}}) fullmakt til å: {{fullmakt_omfang}}.', noIndent: true },
      { type: 'paragraph', text: 'Fullmakten er gyldig til og med {{fullmakt_gyldig}} og gir ikke rett til videre overføring til andre. Fullmakten kan tilbakekalles skriftlig når som helst.', justify: true },
      { type: 'paragraph', text: 'Bekreftelse på at fullmakten er mottatt og registrert ønskes tilsendt.', justify: true },
      mvh(),
    ],
  },
  {
    slug: 'no-util-laneavtale', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Договор частного займа (låneavtale)',
    titleDoc: 'Låneavtale', titleEn: 'Private loan agreement',
    descRu: 'Письменный договор частного займа между физлицами: стороны с фёдсельнуммерами, сумма, график возврата, процент, последствия просрочки. Avtaleloven og gjeldsbrevlova.',
    descEn: 'Written agreement for a private loan between individuals: parties with national ID numbers, amount, repayment schedule, interest and consequences of default. Agreements Act and Promissory Notes Act.',
    descDoc: 'Låneavtale mellom långiver og låntaker, med beløp, tilbakebetalingsvilkår og rente.',
    refRu: 'Avtaleloven (1918-05-31 nr 4); gjeldsbrevlova (1939-06-16 nr 4)',
    refEn: 'Agreements Act (1918 no. 4); Promissory Notes Act (1939 no. 4)',
    fields: [
      ...personBase([
        F('applicant_fodselnr', 'Ваш фёдсельнуммер', 'Your national ID number', 'text', { half: true, placeholderDoc: '010180 12345' }),
        F('lane_taker', 'Имя заёмщика', 'Borrower name', 'text', { half: true, placeholderDoc: 'Ola Nordmann' }),
        F('lane_taker_fnr', 'Фёдсельнуммер заёмщика', 'Borrower ID', 'text', { half: true, placeholderDoc: '120480 12345' }),
        F('lane_sum', 'Сумма займа', 'Loan amount', 'text', { half: true, placeholderDoc: '30 000 kr' }),
        F('lane_dato_avtale', 'Дата заключения', 'Agreement date', 'date', { half: true }),
        F('tilbakebetaling', 'Условия возврата', 'Repayment terms', 'text', { placeholderDoc: '1 000 kr månedlig den første i hver måned, forfall senest 1. januar 2028' }),
        F('rente_laan', 'Процент', 'Interest', 'text', { half: true, placeholderDoc: '0 % (rentefritt låner mellom private)' }),
      ]),
    ],
    body: [
      {
        type: 'lines',
        align: 'right',
        items: ['{{applicant_name}}', '{{applicant_address}}', 'Telefon: {{applicant_phone}}', 'Dato: {{date_today}}'],
      },
      { type: 'title', text: 'LÅNEAVTALE' },
      { type: 'paragraph', text: 'Mellom {{applicant_name}} (fødselsnummer {{applicant_fodselnr}}) og {{lane_taker}} (fødselsnummer {{lane_taker_fnr}}) er det den {{lane_dato_avtale}} inngått låneavtale etter avtaleloven og gjeldsbrevlova: Långiver utbetaler {{lane_sum}} til låntaker.', noIndent: true },
      { type: 'paragraph', text: 'Lånet tilbakebetales etter følgende vilkår: {{tilbakebetaling}}. Rente avtales til {{rente_laan}}. Ved forsinket betaling forfaller hele restbeløpet til betaling, og forsinkelsesrente kan kreves.', justify: true },
      { type: 'paragraph', text: 'Begge parter bekrefter å ha lest og forstått vilkårene. Avtalen utferdiges i to eksemplar, ett for hver part.', justify: true },
      { type: 'paragraph', text: 'Låntakers underskrift: ______________________________', noIndent: true },
      {
        type: 'signature',
        leftText: 'Sted og dato: ______________',
        rightText: 'Långiver: _______________ / {{applicant_name}} /',
      },
    ],
  },
];
