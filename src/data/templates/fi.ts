// Шаблоны для Финляндии (язык документов — финский).
// Основано на законодательстве Финляндии:
// Vuosilomalaki (162/2005): 2 § ja 10 § — vuosiloma karttuu 2 arkipäivää täydeltä
// lomakausikuulta, vähintään 24 arkipäivää (lomalainsäädäntö).
// Työsopimuslaki (55/2001): 2 luku — palkan maksaminen; 6 luku 4 § — määräämättömän
// työsuhteen irtisanoutuminen 14 päivän irtisanomisajalla; 6 luku — irtisanominen
// ja irtisanomisaika; 8 luku — sairausajan palkka; 10 luku 6 § — työtodistus.
// Työaikalaki (872/2019) — työajan järjestäminen ja joustotyöaikasopimus.
// Perhevapaalaki (637/2022) — raskaus-, vanhempain- ja hoitovapaa; vanhempainrahan
// myöntää Kela. Kuluttajansuojalaki (38/1978): 5 luku — tavaran virhe ja oikaisu;
// 6 luku 16 § — 14 päivän peräyttämisoikeus etämyynnissä. Laki asuinhuoneiston
// vuokrauksesta (481/1995): 5 luku 23 § — vuokranantajan kunnossapitovelvollisuus.
// Velkakirjalaki (622/1947) — velkakirja; korkolaki (633/1982) — viivästyskorko.
// Oikeudenkäymiskaari (4/1734): 10 luku 1 § — riita-asian vireillepano hakemuksella;
// 12 luku 3 § — asiamiehen käyttö tuomioistuimessa. Laki kuluttajariidoista (8/2007)
// — Kuluttajariitalautakunta. Tietosuojalaki (1050/2018) ja EU:n tietosuoja-asetus
// (2016/679, GDPR), 77 artikla — valitus valvontaviranomaiselle. Perustuslaki
// (731/1999), 109 § — eduskunnan oikeusasiamies ja apulaisoikeusasiamiehet.
// Verotusmenettelylaki (1558/1995), 64 § — muistutuksen tekeminen. Laki rahoitusalan
// kuluttajansuojasta (1012/2007) — pankin asiakassuhdesäännökset. Sosiaaliturvan
// muutoksenhakulaki (783/1982), 22 § — oikaisuvaatimus Kelalle. Työntekijän
// eläkelaki (TyEL 395/2006) — vanhuuseläke; kansaneläkelaki (566/2007) — kansaneläke.
// Potilaslaki (785/1992), 8–9 § — muistutus ja potilasasiamies; potilastietolaki
// (22/2019), 13 § — potilaan omat tiedot; terveydenhuoltolaki (1326/2010) — hoitotakuu.
// Perusopetuslaki (628/1998), 26 § — oppilaaksi ottaminen; yliopistolaki (558/2009),
// 37 § — opiskelijaksi ottaminen. Laki postipalveluista (661/2010) — lähetykset;
// valvonta: Traficom. Laki väestötietojärjestelmästä ja Väestötietoviraston
// varmistuspalveluista (661/2009) — muuttoilmoitus. Terveydensuojelulaki (763/1994),
// 32 § — melun aiheuttama terveyshaitta (naapurimelu).
import type { TplDef } from '../types';
import type { DocBlock } from '../../lib/types';
import { F } from './helpers';

// Шапка письма работодателю: организация и адресат справа, отправитель ниже
const workHdr = (): DocBlock[] => [
  {
    type: 'lines',
    align: 'right',
    items: ['{{org_name}}', 'Vastaanottaja: {{head_name}}', '', '{{applicant_name}}', 'Henkilötunnus: {{applicant_id}}', '', 'Päivämäärä: {{date_today}}'],
  },
];

// Шапка письма в орган/организацию: адресат справа, заявитель ниже
const authHdr = (): DocBlock[] => [
  {
    type: 'lines',
    align: 'right',
    items: ['Vastaanottaja: {{org_name}}', '', '{{applicant_name}}', '{{applicant_address}}', 'Henkilötunnus: {{applicant_id}}', 'Sähköposti: {{applicant_email}}', '', 'Päivämäärä: {{date_today}}'],
  },
];

// Шапка обращения в käräjäoikeus: суд и стороны справа
const courtHdr = (): DocBlock[] => [
  {
    type: 'lines',
    align: 'right',
    items: ['{{court_name}}', '', 'Kantaja: {{plaintiff_name}}', '{{plaintiff_address}}', 'Vastaaja: {{defendant_name}}, {{defendant_address}}', '', 'Päivämäärä: {{date_today}}'],
  },
];

// Обращение (Hyvä …, / Hyvät vastaanottajat,)
const greet = (text: string): DocBlock => ({ type: 'paragraph', text, noIndent: true });

// Стандартная подпись: завершение слева, имя справа
const sign = (namePh: string, closing = 'Kunnioittavasti,'): DocBlock => ({
  type: 'signature',
  leftText: closing,
  rightText: `_______________ / ${namePh} /`,
});

const workFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('org_name', 'Название компании', 'Company name', 'text', { half: true, placeholderDoc: 'Esimerkki Oy' }),
  F('head_name', 'Кому (руководитель/HR)', 'Submit to', 'text', { half: true, placeholderDoc: 'Meri Virtanen' }),
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Aino Korhonen' }),
  F('applicant_id', 'Личный код (henkilötunnus)', 'Personal identity code', 'text', { half: true, placeholderDoc: '010180-998A' }),
  ...extra,
];

const personFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('org_name', 'Организация (адресат)', 'Recipient (authority)', 'text', { half: true, placeholderDoc: 'Kela' }),
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Aino Korhonen' }),
  F('applicant_address', 'Ваш адрес в Финляндии', 'Your address in Finland', 'text', { half: true, placeholderDoc: 'Mannerheimintie 100 A 5, 00250 Helsinki' }),
  F('applicant_id', 'Личный код (henkilötunnus)', 'Personal identity code', 'text', { half: true, placeholderDoc: '010180-998A' }),
  F('applicant_email', 'Эл. почта', 'Email', 'text', { half: true, placeholderDoc: 'aino.korhonen@esimerkki.fi' }),
  ...extra,
];

export const TEMPLATES_FI: TplDef[] = [
  // ——— Работа: отпуска ———
  {
    slug: 'fi-work-vuosiloma', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление на ежегодный отпуск (vuosiloma)',
    titleDoc: 'Hakemus vuosilomasta', titleEn: 'Annual leave application',
    descRu: 'Заявление на ежегодный оплачиваемый отпуск. По Vuosilomalaki (162/2005) отпуск накапливается по 2 рабочих дня за каждый полный месяц работы, минимум 24 arkipäivää за отпускной год; график согласуется с работодателем.',
    descEn: 'Annual leave application. Under the Finnish Annual Holidays Act (162/2005): two weekdays accrue per full holiday credit month, at least 24 weekdays per holiday year; the schedule is agreed with the employer.',
    descDoc: 'Vuosilomahakemus vuosilomalain (162/2005) mukaisesti: loma ajetaan sovittuna aikana ja työtehtävät järjestetään ennen lomaa.',
    refRu: 'Vuosilomalaki (162/2005), 2 § и 10 § — 2 рабочих дня за месяц, минимум 24 arkipäivää',
    refEn: 'Annual Holidays Act (162/2005), sections 2 and 10 — two weekdays per month, minimum 24 weekdays',
    fields: [
      ...workFields([
        F('date_from', 'Первый день отпуска', 'First day of leave', 'date', { half: true }),
        F('date_to', 'Последний день отпуска', 'Last day of leave', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'Hakemus vuosilomasta' },
      greet('Hyvä {{head_name}},'),
      { type: 'paragraph', text: 'Pyydän täten vuosilomaa ajalle {{date_from}} – {{date_to}} vuosilomalain (162/2005) mukaisesti. Loma karttuu kaksi arkipäivää jokaista täyttä lomakausikuulta kohden, ja vuosiloman vähimmäismäärä on 24 arkipäivää lomakautta kohden.', justify: true },
      { type: 'paragraph', text: 'Varmistan ennen lomaa, että työtehtäväni ovat ajan tasalla, ja sovitan sijaisjärjestelyistä työyhteisön kanssa siten, että työn edistyminen ei lomani aikana vaarannu.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'fi-work-palkaton-loma', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление на неоплачиваемый отпуск',
    titleDoc: 'Hakemus palkattomasta lomasta', titleEn: 'Unpaid leave application',
    descRu: 'Заявление на неоплачиваемый отпуск (учёба, семейные обстоятельства, чередующийся отпуск). Такой отпуск не является законодательно гарантированным правом — он предоставляется по договорённости с работодателем; условия сохранения трудовых отношений уточняются в соглашении.',
    descEn: 'Application for unpaid leave (studies, family reasons, alternating leave). Unpaid leave is granted by agreement with the employer; the terms are confirmed in writing.',
    descDoc: 'Hakemus palkattomasta lomasta: loma myönnetään työnantajan ja työntekijän keskinäisellä sopimuksella ja peruste ilmoitetaan hakemuksessa.',
    refRu: 'Työsopimuslaki (55/2001) — loma myönnetään työnantajan ja työntekijän sopimuksella',
    refEn: 'Employment Contracts Act (55/2001) — leave granted by agreement between employer and employee',
    fields: [
      ...workFields([
        F('date_from', 'Первый день отпуска', 'First day of leave', 'date', { half: true }),
        F('date_to', 'Последний день отпуска', 'Last day of leave', 'date', { half: true }),
        F('reason', 'Основание отпуска', 'Reason for the leave', 'select', {
          options: ['opinnot', 'perhesyyt', 'vuorotteluvapaa', 'muu henkilökohtainen syy'],
        }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'Hakemus palkattomasta lomasta' },
      greet('Hyvä {{head_name}},'),
      { type: 'paragraph', text: 'Anon palkatonta lomaa ajalle {{date_from}} – {{date_to}}. Loman perusteena on {{reason}}. Ymmärrän, että palkattoman loman myöntämisestä sovitaan työnantajan kanssa ja loman ajalta ei makseta palkkaa.', justify: true },
      { type: 'paragraph', text: 'Sitoudun ilmoittamaan viivytyksettä, jos ajankohta muuttuu, ja järjestän työni siten, että poissaoloni ei aiheuta haittaa toiminnalle. Olen käytettävissä käytäntöjen ja sijaisjärjestelyjen suunnittelussa ennen loman alkua.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ——— Работа: рабочее время ———
  {
    slug: 'fi-work-joustava-aika', kind: 'STANDARD', categorySlug: 'work-time',
    titleRu: 'Предложение о гибком рабочем времени',
    titleDoc: 'Ehdotus työajan joustamisesta', titleEn: 'Flexible working hours proposal',
    descRu: 'Предложение работодателю о гибкой организации рабочего времени: joustotyöaika (накопительные часы), сдвиг смен, сокращённая рабочая неделя, сочетание удалённых и офисных дней. Схема фиксируется письменным соглашением о гибком рабочем времени.',
    descEn: 'Proposal to the employer on flexible working time arrangements: flexitime, shifted shifts, a shortened working week, or a mix of remote and office days, confirmed by a written flexitime agreement.',
    descDoc: 'Kirjallinen ehdotus työajan joustamisesta ja joustotyöaikasopimuksen tekemisestä työnantajan kanssa.',
    refRu: 'Työaikalaki (872/2019) — организация рабочего времени; соглашение о joustotyöaika',
    refEn: 'Working Hours Act (872/2019) — working time arrangements; written flexitime agreement',
    fields: [
      ...workFields([
        F('arrangement', 'Модель гибкости', 'Flexibility model', 'select', {
          options: ['joustotyöaika (kortteriaika)', 'työvuorojen siirtäminen myöhemmiksi aamuiksi', 'lyhennetty työviikko sovitulla palkkajärjestelyllä', 'etätyö- ja läsnäolopäivien yhdistäminen'],
        }),
        F('date_from', 'Дата вступления изменения', 'Start date of the change', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'Ehdotus työajan joustamisesta' },
      greet('Hyvä {{head_name}},'),
      { type: 'paragraph', text: 'Ehdotan, että siirrymme {{arrangement}} {{date_from}} alkaen. Tavoitteeni on turvata työn laatu ja tuloksellisuus ja samalla sovittaa työajat ja työsuoritus paremmin yhteen.', justify: true },
      { type: 'paragraph', text: 'Olen valmis sopimaan joustotyöaikasopimuksen kirjallisesti työaikalain (872/2019) mukaisesti sekä seuraamaan sovittua työmäärää ja läsnäoloaikoja. Sovin käytännön työajoista esimieheni kanssa säännöllisesti.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'fi-work-sairausloma', kind: 'STANDARD', categorySlug: 'work-time',
    titleRu: 'Уведомление о больничном (sairausloma)',
    titleDoc: 'Sairauslomailmoitus', titleEn: 'Sick leave notification',
    descRu: 'Уведомление работодателя о временной нетрудоспособности с ожидаемой датой возвращения. По Työsopimuslaki (55/2001), 8 luku, за время болезни сохраняется оплата (зависит от стажа); работодатель вправе потребовать медицинскую справку.',
    descEn: 'Notification to the employer of incapacity for work with the expected return date. Under the Employment Contracts Act (55/2001), chapter 8, sick pay is due; the employer may require a medical certificate.',
    descDoc: 'Sairauslomailmoitus työnantajalle: sairauden syy, poissaolon kesto ja lääkärintodistuksen toimittaminen tarvittaessa.',
    refRu: 'Työsopimuslaki (55/2001), 8 luku — оплата времени болезни',
    refEn: 'Employment Contracts Act (55/2001), chapter 8 — sick pay',
    fields: [
      ...workFields([
        F('illness', 'Причина болезни', 'Reason for the sick leave', 'select', {
          options: ['äkillinen hengitystieinfektio', 'vatsatauti', 'lapsen äkillinen sairastuminen', 'toimenpide tai tapaturma', 'muu sairaus'],
        }),
        F('date_from', 'Первый день больничного', 'First day of sick leave', 'date', { half: true }),
        F('date_to', 'Ожидаемое возвращение', 'Expected return date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'Sairauslomailmoitus' },
      greet('Hyvä {{head_name}},'),
      { type: 'paragraph', text: 'Ilmoitan, että olen sairauslomalla {{date_from}} lähtien {{illness}} vuoksi. Odotettu paluupäiväni töihin on {{date_to}}.', justify: true },
      { type: 'paragraph', text: 'Toimitan työnantajalle lääkärintodistuksen, mikäli sairaus jatkuu todistuksen vaatiman ajan yli tai työnantaja sitä pyytää. Pidän työnantajani ajan tasalla tilanteen muuttumisesta ja palautan itselleni kuuluvat tehtävät paluussani.', justify: true },
      sign('{{applicant_name}}', 'Ystävällisin terveisin,'),
    ],
  },

  // ——— Работа: семья ———
  {
    slug: 'fi-work-perhevapaa', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Уведомление о родительском отпуске',
    titleDoc: 'Ilmoitus perhevapaasta', titleEn: 'Parental leave notification',
    descRu: 'Уведомление работодателя о родительском отпуске: отпуск по беременности, родительский отпуск или отпуск по уходу (Perhevapaalaki 637/2022). Пособие (vanhempainraha) выплачивает Kela; об отпуске уведомляют заранее для организации замены.',
    descEn: 'Notification to the employer of parental leave: pregnancy leave, parental leave or care leave under the Parental Leave Act (637/2022). The benefit (vanhempainraha) is paid by Kela.',
    descDoc: 'Ilmoitus perhevapaasta perhevapaalain (637/2022) mukaisesti: vapaan laji, lapsen syntymäaika ja vapaan kesto.',
    refRu: 'Perhevapaalaki (637/2022) — родительские отпуска; vanhempainraha выплачивает Kela',
    refEn: 'Parental Leave Act (637/2022) — parental leave; vanhempainraha paid by Kela',
    fields: [
      ...workFields([
        F('leave_type', 'Вид отпуска', 'Type of leave', 'select', {
          options: ['raskausvapaa', 'vanhempainvapaa', 'hoitovapaa'],
        }),
        F('child_dob', 'Дата рождения ребёнка', 'Child’s date of birth', 'date', { half: true }),
        F('date_from', 'Начало отпуска', 'Start of the leave', 'date', { half: true }),
        F('date_to', 'Конец отпуска', 'End of the leave', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'Ilmoitus perhevapaasta' },
      greet('Hyvä {{head_name}},'),
      { type: 'paragraph', text: 'Ilmoitan ottavani {{leave_type}} ajalle {{date_from}} – {{date_to}}. Lapseni syntymäaika on {{child_dob}}. Ilmoitus tehdään perhevapaalain (637/2022) mukaisesti, ja vanhempainrahan maksamisesta vastaa Kela.', justify: true },
      { type: 'paragraph', text: 'Sovittelen vapaan ajankohdan ja mahdollisen pidemmän hoitovapaan alkamisen kanssa mahdollisimman varhain, jotta sijaisjärjestelyt voidaan tehdä harkitusti. Palaan asiaan sijoitussuunnitelman laatimiseksi ja olen käytettävissä perehdyttämään sijaisen.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ——— Работа: увольнение ———
  {
    slug: 'fi-work-irtisanoutuminen', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Заявление об увольнении по собственному желанию',
    titleDoc: 'Irtisanoutumisilmoitus', titleEn: 'Letter of resignation',
    descRu: 'Уведомление работодателя о расторжении бессрочного трудового договора. По Työsopimuslaki (55/2001), 6 luku 4 §, работник увольняется без объяснения причин с 14-дневным сроком предупреждения; работодатель обязан выдать työtodistus (10 luku 6 §).',
    descEn: 'Notice of termination of an indefinite employment contract by the employee. Under the Employment Contracts Act (55/2001), chapter 6 section 4, the employee may resign without stating reasons subject to a 14-day notice period.',
    descDoc: 'Irtisanoutumisilmoitus: irtisanomisajan noudattaminen, työtodistuksen pyytäminen ja työn jatkuvuuden järjestäminen.',
    refRu: 'Työsopimuslaki (55/2001), 6 luku 4 § — увольнение с 14-дневным сроком; työtodistus — 10 luku 6 §',
    refEn: 'Employment Contracts Act (55/2001), chapter 6 section 4 — resignation with 14-day notice; reference letter, chapter 10 section 6',
    fields: [
      ...workFields([
        F('last_day', 'Последний рабочий день (14 дней)', 'Last day of employment (14-day notice)', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'Irtisanoutumisilmoitus' },
      greet('Hyvä {{head_name}},'),
      { type: 'paragraph', text: 'Irtisanoudun työsopimuksestani viimeistään {{last_day}}, jolloin 14 päivän irtisanomisaika työsopimuslain (55/2001) 6 luvun 4 §:n mukaisesti päättyy. Irtisanoutumisen perusteita ei ole tarpeen ilmoittaa.', justify: true },
      { type: 'paragraph', text: 'Pyydän, että työtodistus työsuhteen sisällöstä ja kestosta laaditaan työsopimuslain 10 luvun 6 §:n mukaisesti. Järjestän tehtäväni ja tarvittavan tiedonsiirron niin, että työn jatkuvuus turvataan irtisanomisajan aikana.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'fi-work-vastaus-irtisanomiseen', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Ответ на уведомление об увольнении',
    titleDoc: 'Vastaus irtisanomisilmoitukseen', titleEn: 'Reply to a dismissal notice',
    descRu: 'Письменный ответ работника на уведомление работодателя об увольнении: запрос конкретных оснований и оценки потребности в рабочей силе, напоминание о сроке предупреждения (tsl 6 luku) и требованиях о зарплате за срок предупреждения и työtodistus.',
    descEn: 'A written reply to the employer’s dismissal notice: a request for concrete grounds and an assessment of workforce needs, a reminder of the notice period (chapter 6) and of pay and the reference letter.',
    descDoc: 'Vastaus irtisanomisilmoitukseen: konkreettisten perusteiden pyytäminen, irtisanomisajan noudattaminen ja työtodistuksen vaatiminen.',
    refRu: 'Työsopimuslaki (55/2001), 6 luku — основания и срок предупреждения; 10 luku 6 § — työtodistus',
    refEn: 'Employment Contracts Act (55/2001), chapter 6 — grounds and notice period; chapter 10 section 6 — reference letter',
    fields: [
      ...workFields([
        F('notice_date', 'Дата уведомления об увольнении', 'Date of the dismissal notice', 'date', { half: true }),
        F('stated_reason', 'Указанное работодателем основание', 'Employer’s stated reason', 'text', { half: true, placeholderDoc: 'työn nopeutunut väheneminen' }),
        F('last_day', 'Последний день срока предупреждения', 'Last day of the notice period', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'Vastaus irtisanomisilmoitukseen' },
      greet('Hyvä {{head_name}},'),
      { type: 'paragraph', text: 'Olen vastaanottanut työnantajanne irtisanomisilmoituksen {{notice_date}}. Ilmoitetun perusteen {{stated_reason}} johdosta pyydän tarkempia ja konkreettisia perusteluja sekä arviota työvoiman tarpeesta, jotta irtisanomisen peruste selvitetään asianmukaisesti.', justify: true },
      { type: 'paragraph', text: 'Muistutan, että irtisanomisaika noudattaa työsopimuslain (55/2001) 6 lukua ja päättyy {{last_day}}. Vastaan palkkani maksamisesta irtisanomisajalta sekä pyydän asianmukaisen työtodistuksen työsuhteen päättyessä.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ——— Работа: документы ———
  {
    slug: 'fi-work-tyotodistus', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Запрос рекомендации с работы (työtodistus)',
    titleDoc: 'Pyyntö työtodistuksesta', titleEn: 'Reference letter request',
    descRu: 'Запрос письменного työtodistus — документа о содержании и продолжительности трудовых отношений. По Työsopimuslaki (55/2001), 10 luku 6 §, работодатель обязан выдать его по окончании трудового договора.',
    descEn: 'Request for a written reference letter (työtodistus) on the content and duration of the employment. Under the Employment Contracts Act (55/2001), chapter 10 section 6, the employer must provide it upon termination.',
    descDoc: 'Pyyntö työtodistuksesta työsopimuslain 10 luvun 6 §:n mukaisesti: tehtävät, työn laatu ja työsuhteen kesto.',
    refRu: 'Työsopimuslaki (55/2001), 10 luku 6 § — обязанность выдать työtodistus',
    refEn: 'Employment Contracts Act (55/2001), chapter 10 section 6 — duty to issue a reference letter',
    fields: [
      ...workFields([
        F('last_day', 'Последний день трудового договора', 'Last day of employment', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'Pyyntö työtodistuksesta' },
      greet('Hyvä {{head_name}},'),
      { type: 'paragraph', text: 'Pyydän teitä laatimaan työtodistuksen työsuhteeni sisällöstä ja kestosta työsopimuslain (55/2001) 10 luvun 6 §:n mukaisesti. Työsuhteeni päättyy {{last_day}}.', justify: true },
      { type: 'paragraph', text: 'Pyydän, että todistukseen merkitään tehtäväni, työn laatu ja työsuhteen kesto, sekä toivon saavani todistuksen viimeistään työsuhteen päättymispäivänä. Kiitos yhteistyöstä työsuhteeni aikana.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'fi-work-palkkakuitti', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Запрос расчётного листа (palkkalaskelma)',
    titleDoc: 'Pyyntö palkkalaskelmasta', titleEn: 'Payslip request',
    descRu: 'Запрос к работодателю о предоставлении письменного расчёта зарплаты (palkkalaskelma / palkkakuitti) за период: итоговые суммы, надбавки, удержания и основания расчёта — для проверки зарплаты и использования в налоговых и социальных вопросах.',
    descEn: 'Request to the employer for a written pay statement (palkkalaskelma) for a period: totals, allowances, deductions and calculation bases — for wage verification and tax or benefit purposes.',
    descDoc: 'Pyyntö kirjallisesta palkkalaskelmasta: palkan perusteet, työsuhde-edut ja vähennykset.',
    refRu: 'Työsopimuslaki (55/2001), 2 luku — выплата зарплаты и её основания',
    refEn: 'Employment Contracts Act (55/2001), chapter 2 — payment of wages and their bases',
    fields: [
      ...workFields([
        F('period', 'Расчётный период', 'Pay period', 'text', { half: true, placeholderDoc: 'maaliskuu 2026' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'Pyyntö palkkalaskelmasta' },
      greet('Hyvä {{head_name}},'),
      { type: 'paragraph', text: 'Pyydän teitä toimittamaan kirjallisen palkkalaskelman palkkajaksolta {{period}}. Tarvitsen tarkennusta palkkani laskennan perusteista, työsuhde-etuuksista ja tehdyistä vähennyksistä.', justify: true },
      { type: 'paragraph', text: 'Laskelma on tarpeen palkkani tarkistamiseksi sekä tarvittaessa verotukseen ja sosiaalietuuksiin liittyvissä asioissa. Pyydän toimittamaan laskelman sähköpostiini viikon kuluessa tämän viestin päiväyksestä.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ——— Претензии потребителя и деньги ———
  {
    slug: 'fi-court-reklamaatio', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Рекламация продавцу (товар/услуга)',
    titleDoc: 'Reklamaatio myyjälle', titleEn: 'Complaint to the seller',
    descRu: 'Письменная рекламация продавцу или интернет-магазину: товар с недостатком, просрочка поставки, несоответствие заказу или отказ от сделки (14 дней при дистанционной покупке). По Kuluttajansuojalaki (38/1978), 5 luku, требуются исправление, замена, скидка или расторжение договора.',
    descEn: 'Written complaint to the seller or online store: defective goods, delayed delivery, non-conformity or withdrawal (14 days for distance purchases). Under the Consumer Protection Act (38/1978), chapter 5: repair, replacement, price reduction or rescission.',
    descDoc: 'Reklamaatio myyjälle kuluttajansuojalain (38/1978) 5 luvun mukaisesti: vaatimus oikaisusta ja liitteet.',
    refRu: 'Kuluttajansuojalaki (38/1978), 5 luku — недостаток товара; 6 luku 16 § — отказ от сделки (14 дней)',
    refEn: 'Consumer Protection Act (38/1978), chapter 5 — defective goods; chapter 6 section 16 — 14-day right of withdrawal',
    fields: [
      ...personFields([
        F('org_name', 'Продавец (магазин)', 'Seller (store)', 'text', { half: true, placeholderDoc: 'Esimerkkikauppa Oy' }),
        F('product', 'Товар и номер заказа', 'Product and order number', 'text', { half: true, placeholderDoc: 'pölynimuri VV-200, tilaus nro 4567' }),
        F('purchase_date', 'Дата покупки', 'Purchase date', 'date', { half: true }),
        F('problem', 'Основание рекламации', 'Ground for the complaint', 'select', {
          options: ['tuotteessa on virhe tai vika', 'toimitus on viivästynyt', 'toimitettu tuote ei vastaa tilattua', 'käytän 14 päivän peräyttämisoikeutta'],
        }),
        F('remedy', 'Требуемое исправление', 'Remedy sought', 'select', {
          options: ['virheen korjaaminen', 'uusi virheetön tuote', 'hinnanalennus', 'kaupan purku ja maksun palautus'],
        }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Reklamaatio' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Olen ostanut yritykseltänne {{product}} {{purchase_date}}. Reklamaationi kohdistuu seuraavaan seikkaan: {{problem}}. Kuluttajansuojalain (38/1978) 5 luvun mukaisesti vaadin {{remedy}}.', justify: true },
      { type: 'paragraph', text: 'Pidän reklamaationi esillä, kunnes asia on oikaistu. Pyydän vastaustanne ja oikaisutoimenpiteistä ilmoittamista kirjallisesti viikon kuluessa. Mikäli asiaa ei ratkaista, otan yhteyttä kuluttajaneuvontaan ja kuluttajariitalautakuntaan.', justify: true },
      { type: 'attachment', items: ['Ostokuitti tai tilausvahvistus', 'Valokuvat tuotteen virheistä (tarvittaessa)'], label: 'Liitteet:' },
      sign('{{applicant_name}}', 'Ystävällisin terveisin,'),
    ],
  },
  {
    slug: 'fi-court-maksuvaatimus', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Требование о возврате долга (по расписке)',
    titleDoc: 'Maksuvaatimus velalliselle', titleEn: 'Payment demand to the debtor',
    descRu: 'Письменное требование к заёмщику возврата долга по velkakirja. По Velkakirjalaki (622/1947) расписка служит доказательством долга; за просрочку начисляется пеня по Korkolaki (633/1982). При отказе — обращение в käräjäoikeus.',
    descEn: 'Written demand to the borrower to repay a debt evidenced by an IOU (velkakirja). Under the Promissory Notes Act (622/1947) the note evidences the debt; default interest accrues under the Interest Act (633/1982).',
    descDoc: 'Maksuvaatimus velalliselle: velkapääoman ja viivästyskorun suorittaminen 14 päivän määräaikana.',
    refRu: 'Velkakirjalaki (622/1947) — расписка; Korkolaki (633/1982) — пеня за просрочку',
    refEn: 'Promissory Notes Act (622/1947) — IOU; Interest Act (633/1982) — default interest',
    fields: [
      // org_name удалён (TPL-1): адресат уже назван в шапке как {{debtor_name}}
      F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Aino Korhonen' }),
      F('applicant_address', 'Ваш адрес в Финляндии', 'Your address in Finland', 'text', { half: true, placeholderDoc: 'Mannerheimintie 100 A 5, 00250 Helsinki' }),
      F('applicant_id', 'Личный код (henkilötunnus)', 'Personal identity code', 'text', { half: true, placeholderDoc: '010180-998A' }),
      F('applicant_email', 'Эл. почта', 'Email', 'text', { half: true, placeholderDoc: 'aino.korhonen@esimerkki.fi' }),
      F('debtor_name', 'Заёмщик (адресат)', 'Debtor (recipient)', 'text', { half: true, placeholderDoc: 'Matti Meikäläinen' }),
      F('debtor_address', 'Адрес заёмщика', 'Debtor’s address', 'text', { half: true, placeholderDoc: 'Esimerkkikatu 2 B 8, 33100 Tampere' }),
      F('loan_date', 'Дата выдачи займа', 'Date of the loan', 'date', { half: true }),
      F('loan_amount', 'Сумма основного долга', 'Principal amount', 'text', { half: true, placeholderDoc: '5 000,00 €' }),
      F('due_date', 'Срок возврата (eräpäivä)', 'Due date', 'date', { half: true }),
    ],
    body: [
      {
        type: 'lines',
        align: 'right',
        items: ['Vastaanottaja: {{debtor_name}}', '{{debtor_address}}', '', '{{applicant_name}}', '{{applicant_address}}', 'Henkilötunnus: {{applicant_id}}', 'Sähköposti: {{applicant_email}}', '', 'Päivämäärä: {{date_today}}'],
      },
      { type: 'title', text: 'Maksuvaatimus' },
      greet('Hyvä {{debtor_name}},'),
      { type: 'paragraph', text: 'Olen myöntänyt teille {{loan_date}} {{loan_amount}} suuruisen lainan velkakirjalain (622/1947) mukaisella velkakirjalla. Lainan eräpäivä {{due_date}} on ohitettu, eikä velkaa ole suoritettu.', justify: true },
      { type: 'paragraph', text: 'Vaadin, että maksette velkapääoman {{loan_amount}} sekä korkolain (633/1982) mukaisen viivästyskoron ajalta eräpäivästä maksupäivään. Pyydän maksua neljäntoista (14) päivän kuluessa tämän kirjeen päiväyksestä.', justify: true },
      { type: 'paragraph', text: 'Mikäli maksua ei suoriteta määräaikana, panen asian käräjäoikeuden ratkaistavaksi ja perin saatavani lisänä asian käsittelystä aiheutuneet kulut.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ——— Суды и надзорные органы ———
  {
    slug: 'fi-court-karajaoikeus', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Заявление в суд первой инстанции (риита-асия)',
    titleDoc: 'Hakemus käräjäoikeuteen (riita-asia)', titleEn: 'Application to the district court (civil claim)',
    descRu: 'Заявление о возбуждении гражданского дела в käräjäoikeus (суд первой инстанции). По Oikeudenkäymiskaari (4/1734), 10 luku 1 §, имущественный спор возбуждается письменным заявлением с указанием требования, его основания и приложений.',
    descEn: 'Application to initiate a civil case in the district court (käräjäoikeus). Under the Code of Judicial Procedure (4/1734), chapter 10 section 1, a civil claim is filed in writing stating the claim, its basis and the exhibits.',
    descDoc: 'Hakemus riita-asian vireillepanosta käräjäoikeudessa: vaatimus, sen peruste ja liitteet.',
    refRu: 'Oikeudenkäymiskaari (4/1734), 10 luku 1 § — возбуждение имущественного спора заявлением',
    refEn: 'Code of Judicial Procedure (4/1734), chapter 10 section 1 — initiating a civil claim by application',
    fields: [
      F('court_name', 'Суд käräjäoikeus', 'District court', 'text', { half: true, placeholderDoc: 'Helsingin käräjäoikeus' }),
      F('plaintiff_name', 'Истец (вы)', 'Plaintiff (you)', 'text', { half: true, placeholderDoc: 'Aino Korhonen' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff’s address', 'text', { half: true, placeholderDoc: 'Mannerheimintie 100 A 5, 00250 Helsinki' }),
      F('defendant_name', 'Ответчик', 'Defendant', 'text', { half: true, placeholderDoc: 'Kiinteistöhuolto Esimerkki Oy' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant’s address', 'text', { half: true, placeholderDoc: 'Teollisuustie 8, 00510 Helsinki' }),
      F('claim_amount', 'Требуемая сумма', 'Amount claimed', 'text', { half: true, placeholderDoc: '3 200,00 €' }),
      F('claim_basis', 'Основание требования', 'Basis of the claim', 'text', { placeholderDoc: 'maksamaton laina velkakirjalla' }),
    ],
    body: [
      ...courtHdr(),
      { type: 'title', text: 'Hakemus riita-asian vireillepanosta' },
      { type: 'paragraph', text: 'Asia: saatavan periminen', noIndent: true },
      { type: 'paragraph', text: 'Panan riita-asian vireelle oikeudenkäymiskaaren (4/1734) 10 luvun 1 §:n mukaisella hakemuksella. Vaadin, että vastaaja {{defendant_name}} velvoitetaan maksamaan minulle {{claim_amount}} viivästyskorkoineen. Vaatimuksen perusteena on {{claim_basis}}.', justify: true },
      { type: 'paragraph', text: 'Pyydän, että hakemus tutkitaan todistusaineiston perusteella ja että asian käsittelyä varten sovitaan valmistelusta. Kiistakysymykset esitän tarkemmin lisäselvityksessä ja istunnossa.', justify: true },
      { type: 'attachment', items: ['Velkakirja tai muu sopimusasiakirja', 'Maksukehotukset ja niiden todisteet'], label: 'Liitteet:' },
      { type: 'signature', leftText: '{{date_today}}', rightText: '_______________ / {{plaintiff_name}} /' },
    ],
  },
  {
    slug: 'fi-court-kuluttajariita', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Обращение в Комиссию по потребительским спорам',
    titleDoc: 'Hakemus Kuluttajariitalautakunnalle', titleEn: 'Application to the Consumer Disputes Board',
    descRu: 'Заявление в Kuluttajariitalautakunta — бесплатный орган разрешения споров между потребителем и компанией. По Laki kuluttajariidoista (8/2007) подаче предшествует рекламация продавцу и, как правило, обращение в потребительскую консультацию.',
    descEn: 'Application to the Consumer Disputes Board (Kuluttajariitalautakunta), a free dispute resolution body for consumer–business disputes. Under the Act on Consumer Disputes (8/2007), a prior complaint to the business is required.',
    descDoc: 'Hakemus Kuluttajariitalautakunnan ratkaisusuosituksesta lain kuluttajariidoista (8/2007) mukaisesti.',
    refRu: 'Laki kuluttajariidoista (8/2007) — компетенция и процедура Kuluttajariitalautakunta',
    refEn: 'Act on Consumer Disputes (8/2007) — jurisdiction and procedure of the Consumer Disputes Board',
    fields: [
      ...personFields([
        F('org_name', 'Вторая сторона спора', 'Counterparty', 'text', { half: true, placeholderDoc: 'Esimerkkiliike Oy' }),
        F('dispute', 'Предмет спора', 'Subject of the dispute', 'text', { placeholderDoc: 'viallinen sohva; reklamaatio hylätty' }),
        F('claim_amount', 'Требуемая сумма', 'Amount claimed', 'text', { half: true, placeholderDoc: '1 150,00 €' }),
        F('complaint_date', 'Дата рекламации продавцу', 'Date of the earlier complaint', 'date', { half: true }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Hakemus kuluttajariidan käsittelystä' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Anon Kuluttajariitalautakunnan ratkaisusuositusta riidassani yrityksen {{org_name}} kanssa. Riidan aiheena on {{dispute}}. Olen esittänyt vaatimukseni yhtiölle kirjallisesti {{complaint_date}}, mutta asiaa ei ole oikaistu. Vaadin {{claim_amount}} suuruista oikaisua.', justify: true },
      { type: 'paragraph', text: 'Anon ratkaisusuositusta lain kuluttajariidoista (8/2007) mukaisesti. Olen hakenut asiaan neuvontaa kuluttajaneuvonnasta. Liitteenä ovat reklamaatio, yrityksen vastaus ja muut asian selvittämiseksi tarpeelliset asiakirjat.', justify: true },
      { type: 'attachment', items: ['Reklamaatio ja yrityksen vastaus', 'Ostokuitti ja tuotetiedot', 'Muu selvitys riidan aiheesta'], label: 'Liitteet:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'fi-court-tietosuoja', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба Уполномоченному по защите данных',
    titleDoc: 'Valitus tietosuojavaltuutetulle', titleEn: 'Complaint to the Data Protection Ombudsman',
    descRu: 'Жалоба Офису Уполномоченного по защите данных Финляндии (Tietosuojavaltuutettu) на нарушение прав субъекта данных: передача данных без согласия, утечка, отказ в удалении, спам. Основание — GDPR ст. 77 и Tietosuojalaki (1050/2018).',
    descEn: 'Complaint to the Office of the Data Protection Ombudsman (Tietosuojavaltuutettu) on a breach of data subject rights: disclosure without consent, a data breach, refusal to erase data, or spam. Based on GDPR Article 77 and the Data Protection Act (1050/2018).',
    descDoc: 'Valitus tietosuojavaltuutetulle rekisterinpitäjän menettelystä GDPR:n 77 artiklan ja tietosuojalain nojalla.',
    refRu: 'Tietosuojalaki (1050/2018); GDPR (2016/679), ст. 77 — жалоба надзорному органу',
    refEn: 'Data Protection Act (1050/2018); GDPR (2016/679), Article 77 — complaint to the supervisory authority',
    fields: [
      ...personFields([
        F('org_name', 'Контролёр данных', 'Data controller', 'text', { half: true, placeholderDoc: 'Verkkokauppa Esimerkki Oy' }),
        F('issue', 'Предмет жалобы', 'Subject of the complaint', 'select', {
          options: ['henkilötietojen luovuttaminen ilman suostumusta', 'tietoturvavuoto tai tietojen katoaminen', 'oikeutta tietojen poistamiseen ei ole kunnioitettu', 'suostumukseton suoramarkkinointi'],
        }),
        F('issue_date', 'Дата обнаружения', 'Date of the incident', 'date', { half: true }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Valitus tietosuojavaltuutetulle' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Valitan rekisterinpitäjän {{org_name}} menettelystä. Valituksen kohteena on {{issue}}, jonka havaitsin {{issue_date}}. En ole saanut yritykseltä tyydyttävää selvitystä tai oikaisua.', justify: true },
      { type: 'paragraph', text: 'Esitän valituksen EU:n yleisen tietosuoja-asetuksen (2016/679) 77 artiklan ja tietosuojalain (1050/2018) nojalla. Pyydän viranomaista selvittämään henkilötietojeni käsittelyn lainmukaisuutta, määräämään tarvittavia korjaavia toimenpiteitä ja ohjaamaan minua oikeuksieni turvaamisessa.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'fi-court-oikeusasiamies', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба заместителю Омбудсмена справедливости',
    titleDoc: 'Valitus apulaisoikeusasiamiehelle', titleEn: 'Complaint to the Deputy Parliamentary Ombudsman',
    descRu: 'Жалоба апулисойкеусасиамиеху (заместителю Эдускунта-омбудсмена) на действия или бездействие органа власти: недостаточная мотивировка решения, нарушение процедуры, затягивание сроков. Основание — Perustuslaki (731/1999), 109 §.',
    descEn: 'Complaint to the Deputy Parliamentary Ombudsman (apulaisoikeusasiamies) on the conduct of a public authority: poor reasoning of a decision, procedural violations or delays. Based on the Constitution Act (731/1999), section 109.',
    descDoc: 'Valitus apulaisoikeusasiamiehelle viranomaisen menettelystä perustuslain 109 §:n nojalla.',
    refRu: 'Perustuslaki (731/1999), 109 § — эдускунта-омбудсмен и его заместители контролируют законность',
    refEn: 'Constitution Act (731/1999), section 109 — the Parliamentary Ombudsman and deputies oversee lawfulness',
    fields: [
      ...personFields([
        F('org_name', 'Орган власти', 'Authority', 'text', { half: true, placeholderDoc: 'Kunnan rakennusvalvonta' }),
        F('decision', 'Предмет жалобы (решение/действие)', 'Decision or conduct complained of', 'text', { placeholderDoc: 'rakennuslupahakemuksen ratkaisu 12.3.2026' }),
        F('event_date', 'Дата события', 'Date of the event', 'date', { half: true }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Valitus apulaisoikeusasiamiehelle' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Valitan viranomaisen {{org_name}} menettelystä. Valituksen kohteena on {{decision}}, joka on saatu {{event_date}}. Katson, että menettelyssä ei ole noudatettu lainmukaisia menettelytapoja eikä ratkaisua ole perusteltu riittävästi.', justify: true },
      { type: 'paragraph', text: 'Pyydän apulaisoikeusasiamiestä perustuslain (731/1999) 109 §:n nojalla tutkimaan asian, kehottamaan viranomaista toimittamaan selvityksen ja tarvittaessa puuttumaan laiminlyöntiin. Toimitan lisäselvityksen ja asiakirjat pyydettäessä.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ——— Налоги ———
  {
    slug: 'fi-tax-muistutus', kind: 'STANDARD', categorySlug: 'tax-docs',
    titleRu: 'Возражение по налогу (muistutus)',
    titleDoc: 'Muistutus verotuksesta', titleEn: 'Tax assessment reminder (objection)',
    descRu: 'Возражение в Verohallinto (налоговое управление) по результатам налогообложения: неверно учтённые вычеты или доходы. По Verotusmenettelylaki (1558/1995), 64 §, muistutus подаётся письменно, как правило, в течение 3 лет после конца налогового года.',
    descEn: 'Objection to the Finnish Tax Administration (Verohallinto) on the tax assessment: incorrectly accounted deductions or income. Under the Tax Procedure Act (1558/1995), section 64, a written reminder/objection is filed within three years.',
    descDoc: 'Muistutus verotuksesta verotusmenettelylain 64 §:n nojalla: vaatimus verotuksen oikaisusta ja liitteet.',
    refRu: 'Verotusmenettelylaki (1558/1995), 64 § — подача muistutus',
    refEn: 'Tax Procedure Act (1558/1995), section 64 — filing of a reminder (objection)',
    fields: [
      ...personFields([
        F('org_name', 'Налоговое управление (Verohallinto)', 'Tax Administration (recipient)', 'text', { half: true, placeholderDoc: 'Verohallinto' }),
        F('tax_year', 'Налоговый год', 'Tax year', 'text', { half: true, placeholderDoc: '2025' }),
        F('issue', 'Предмет возражения', 'Subject of the reminder', 'text', { placeholderDoc: 'työmatkakulujen vähentäminen' }),
        F('amount', 'Сумма вычета', 'Deduction amount', 'text', { half: true, placeholderDoc: '1 450,00 €' }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Muistutus verotuksesta' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Muistutan verotusmenettelylain (1558/1995) 64 §:n nojalla verovuoden {{tax_year}} verotuksesta. Muistutuksen aiheena on {{issue}}. Kulut, yhteensä {{amount}}, eivät ole tulleet huomioiduiksi verotuksessani.', justify: true },
      { type: 'paragraph', text: 'Toimitan muistutuksen tueksi kulujen erittelyn ja tarvittavat todistukset. Pyydän, että verotukseni oikaistaan muistutuksen perusteella ja että oikaisusta annetaan minulle kirjallinen vahvistus.', justify: true },
      { type: 'attachment', items: ['Kulujen erittely', 'Todistukset ja kuitit'], label: 'Liitteet:' },
      sign('{{applicant_name}}'),
    ],
  },

  // ——— Банк ———
  {
    slug: 'fi-bank-valitus', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Жалоба в банк',
    titleDoc: 'Valitus pankille', titleEn: 'Complaint to the bank',
    descRu: 'Письменная жалоба банку на ошибочное списание, двойное списание по карте, необоснованные комиссии или задержку рассмотрения кредитной заявки. По Laki rahoitusalan kuluttajansuojasta (1012/2007) банк обязан отвечать и действовать добросовестно.',
    descEn: 'Written complaint to the bank on an erroneous charge, duplicate card charge, unreasonable fees or a delayed credit decision. Under the Act on Consumer Protection in the Financial Sector (1012/2007) the bank must respond and act fairly.',
    descDoc: 'Valitus pankille: virheellisen veloitteen palautuspyyntö ja kirjallinen selvitys.',
    refRu: 'Laki rahoitusalan kuluttajansuojasta (1012/2007) — правила отношений банка и клиента',
    refEn: 'Act on Consumer Protection in the Financial Sector (1012/2007) — bank–customer relations',
    fields: [
      ...personFields([
        F('org_name', 'Банк (адресат)', 'Bank (recipient)', 'text', { half: true, placeholderDoc: 'Esimerkkipankki Oyj' }),
        F('issue', 'Предмет жалобы', 'Subject of the complaint', 'select', {
          options: ['tililtä on veloitettu virheellisesti', 'korttimaksu on veloitettu kahdesti', 'palvelukulut ovat kohtuuttomat', 'luottohakemuksen käsittely on viivästynyt'],
        }),
        F('account_ref', 'Счёт или идентификатор операции', 'Account or transaction reference', 'text', { half: true, placeholderDoc: 'tili FI21 1234 5600 0007 85' }),
        F('claim_amount', 'Сумма к возврату', 'Amount to be refunded', 'text', { half: true, placeholderDoc: '45,00 €' }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Valitus pankille' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Valitan pankkinne menettelystä. Valituksen kohteena on {{issue}}, ja asia koskee tunnistetta {{account_ref}}. Pyydän, että pankki palauttaa virheellisesti veloitetun summan {{claim_amount}} tililleni.', justify: true },
      { type: 'paragraph', text: 'Lain rahoitusalan kuluttajansuojasta (1012/2007) mukaisesti pankin tulee toimia asiakasta kohtuullisesti ja antaa kirjallinen vastaus valitukseen. Pyydän selvitystä tapahtumista, kulujen perusteista ja korjauksesta neljäntoista päivän kuluessa.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ——— Социальные выплаты ———
  {
    slug: 'fi-soc-kela-oikaisu', kind: 'STANDARD', categorySlug: 'soc-benefits',
    titleRu: 'Ходатайство об исправлении решения Kela',
    titleDoc: 'Oikaisuvaatimus Kelalle', titleEn: 'Request for revision to Kela',
    descRu: 'Oikaisuvaatimus — требование исправить решение Kela по выплатам (пособие по безработице, sickness, студенческое, жилищное, детское). По Sosiaaliturvan muutoksenhakulaki (783/1982), 22 §, подаётся в течение 3 месяцев со дня получения решения.',
    descEn: 'A request for revision (oikaisuvaatimus) of a Kela decision on benefits (unemployment, sickness, student, housing or child benefit). Under the Act on the Judicial Procedure in Social Welfare Matters (783/1982), section 22, filed within three months.',
    descDoc: 'Oikaisuvaatimus Kelalle sosiaaliturvan muutoksenhakulain 22 §:n nojalla: päätöksen oikaisun vaatimus ja liitteet.',
    refRu: 'Sosiaaliturvan muutoksenhakulaki (783/1982), 22 § — oikaisuvaatimus в Kela',
    refEn: 'Act on the Judicial Procedure in Social Welfare Matters (783/1982), section 22 — request for revision to Kela',
    fields: [
      ...personFields([
        F('org_name', 'Kela (адресат)', 'Kela (recipient)', 'text', { half: true, placeholderDoc: 'Kela' }),
        F('benefit', 'Выплата', 'Benefit', 'select', {
          options: ['työttömyyspäiväraha', 'sairauspäiväraha', 'opintotuki', 'yleinen asumistuki', 'lapsilisä'],
        }),
        F('decision_date', 'Дата решения', 'Date of the decision', 'date', { half: true }),
        F('reason', 'Основания ходатайства', 'Grounds', 'text', { placeholderDoc: 'tulotiedot olivat virheelliset' }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Oikaisuvaatimus' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Anon oikaisuvaatimusta sosiaaliturvan muutoksenhakulain (783/1982) 22 §:n nojalla. Kohteena on {{benefit}} koskeva päätöksenne {{decision_date}}. Katson, että päätös on virheellinen, koska {{reason}}.', justify: true },
      { type: 'paragraph', text: 'Toimitan oikaisuvaatimuksen tueksi lisäselvityksen ja asiakirjat. Pyydän, että päätös oikaistaan ja siitä annetaan uusi, perusteltu päätös lain edellyttämässä määräajassa.', justify: true },
      { type: 'attachment', items: ['Päätöksestä saatu kopio', 'Lisäselvitys ja todistukset'], label: 'Liitteet:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'fi-soc-tyoelake', kind: 'STANDARD', categorySlug: 'soc-pension',
    titleRu: 'Заявление на трудовую пенсию (vanhuuseläke)',
    titleDoc: 'Hakemus vanhuuseläkkeestä', titleEn: 'Old-age pension application',
    descRu: 'Заявление в пенсионную страховую компанию (eläkevakuutusyhtiö) на трудовую пенсию по старости. По Työntekijän eläkelaki (TyEL 395/2006) пенсия начисляется по страховым доходам; kansaneläke (Kansaneläkelaki 566/2007) выплачивается Kela.',
    descEn: 'Application to the pension insurance company for the old-age pension. Under the Employees’ Pensions Act (TyEL 395/2006) the pension accrues from insured earnings; the national pension (kansaneläkelaki 566/2007) is granted by Kela.',
    descDoc: 'Hakemus vanhuuseläkkeestä TyEL-lain mukaisesti: eläkkeen alkamispäivä ja työhistoria.',
    refRu: 'Työntekijän eläkelaki (TyEL 395/2006) — пенсия по старости; Kansaneläkelaki (566/2007) — kansaneläke',
    refEn: 'Employees’ Pensions Act (TyEL 395/2006) — old-age pension; National Pensions Act (566/2007) — national pension',
    fields: [
      ...personFields([
        F('org_name', 'Пенсионная компания (адресат)', 'Pension insurance company (recipient)', 'text', { half: true, placeholderDoc: 'Eläkevakuutusyhtiö Esimerkki' }),
        F('pension_date', 'Дата начала пенсии', 'Start date of the pension', 'date', { half: true }),
        F('employer_history', 'Последние работодатели', 'Most recent employers', 'text', { placeholderDoc: 'Esimerkki Oy 2015–2026, Kaupunki Oy 2008–2015' }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Hakemus vanhuuseläkkeestä' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Anon vanhuuseläkettä {{pension_date}} alkaen työntekijän eläkelain (TyEL 395/2006) mukaisesti. Työhistoriani viimeisimmät työnantajat ovat: {{employer_history}}.', justify: true },
      { type: 'paragraph', text: 'Pyydän, että eläkkeen laskennassa otetaan huomioon kaikki TyEL-vakuutetut tulot ja mahdolliset lisäosuudet. Olen hakenut samalla kansaneläkettä Kelalta kansaneläkelain (566/2007) mukaisesti. Toimitan pyydettäessä tarkemmat eläketiedot ja asiakirjat.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ——— Здравоохранение ———
  {
    slug: 'fi-med-muistutus', kind: 'STANDARD', categorySlug: 'med-appeals',
    titleRu: 'Замечание по медицинскому обслуживанию (muistutus)',
    titleDoc: 'Muistutus terveydenhuollosta', titleEn: 'Healthcare service reminder (complaint)',
    descRu: 'Письменное замечание в медицинское учреждение: задержка доступа к лечению, качество и отношение, неясность сборов, отсутствие плана лечения. По Potilaslaki (785/1992), 8–9 §, подаётся muistutus, есть право на помощь potilasasiamies; критерии доступа — Terveydenhuoltolaki (1326/2010).',
    descEn: 'Written reminder to a healthcare unit: delayed access to care, quality and treatment, unclear fees or a missing care plan. Under the Patient Act (785/1992), sections 8–9, a muistutus may be filed with the help of the patient ombudsman.',
    descDoc: 'Muistutus terveydenhuollosta potilaslain (785/1992) mukaisesti: johtavan lääkärin arvio ja oikaisun vaatimus.',
    refRu: 'Potilaslaki (785/1992), 8–9 § — muistutus и potilasasiamies; Terveydenhuoltolaki (1326/2010) — сроки доступа',
    refEn: 'Patient Act (785/1992), sections 8–9 — reminder and patient ombudsman; Health Care Act (1326/2010) — access times',
    fields: [
      ...personFields([
        F('org_name', 'Медицинское учреждение', 'Healthcare unit', 'text', { half: true, placeholderDoc: 'Helsingin terveyskeskus' }),
        F('issue', 'Предмет замечания', 'Subject of the reminder', 'select', {
          options: ['hoitoon pääsyn viivästys', 'hoidon laatu tai kohtelu', 'potilasmaksujen epäselvyys', 'hoitosuunnitelman puute'],
        }),
        F('visit_date', 'Период лечения', 'Date of the visit or period', 'text', { half: true, placeholderDoc: 'maaliskuu 2026' }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Muistutus hoitoon pääsystä ja hoidosta' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Muistutan yksikönne menettelystä. Muistutuksen aiheena on {{issue}} käynnilläni tai hoidossani {{visit_date}}. Katson, että potilaslain (785/1992) mukaisia potilaan oikeuksia ja hoidon hyvää tasoa ei ole noudatettu.', justify: true },
      { type: 'paragraph', text: 'Pyydän johtavan lääkärin arviota ja kirjallista selvitystä menettelystä. Tarvittaessa otan yhteyttä potilasasiamieheen. Toivon, että asia oikaistaan ja hoito järjestetään terveydenhuoltolain (1326/2010) mukaisesti kohtuullisessa ajassa.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'fi-med-potilasasiakirjat', kind: 'STANDARD', categorySlug: 'med-records',
    titleRu: 'Запрос своих медицинских документов',
    titleDoc: 'Pyyntö omista potilastiedoista', titleEn: 'Request for one’s own patient records',
    descRu: 'Запрос доступа к своим пациентским данным и их копий за период. По Potilastietolaki (22/2019), 13 §, пациент вправе ознакомиться со своими данными и получить их; при отказе — письменное обоснование.',
    descEn: 'Request for access to one’s own patient records and copies for a period. Under the Act on the Status and Rights of Patients’ Records (22/2019), section 13, the patient may inspect and receive their records.',
    descDoc: 'Pyyntö omista potilastiedoista potilastietolain 13 §:n nojalla: ajanjakso ja toimitustapa.',
    refRu: 'Potilastietolaki (22/2019), 13 § — право ознакомиться со своими пациентскими данными',
    refEn: 'Act on Patients’ Records (22/2019), section 13 — right to access one’s own records',
    fields: [
      ...personFields([
        F('org_name', 'Учреждение (адресат)', 'Healthcare provider (recipient)', 'text', { half: true, placeholderDoc: 'Esimerkin hyvinvointialue' }),
        F('record_period', 'Период записей', 'Period of the records', 'text', { half: true, placeholderDoc: '1.1.2025–31.12.2025' }),
        F('delivery', 'Способ получения', 'Delivery method', 'select', {
          options: ['sähköpostitse', 'postitse', 'noudettavaksi paikan päälle'],
        }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Pyyntö omista potilastiedoista' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Pyydän potilastietolain (22/2019) 13 §:n nojalla pääsyn omiin potilastietoihini ja kopioita asiakirjoista ajanjaksolta {{record_period}}. Henkilötunnukseni on tiedoissanne, ja vahvistan henkilöllisyyteni pyydettäessä.', justify: true },
      { type: 'paragraph', text: 'Pyydän, että tiedot toimitetaan {{delivery}} kohtuullisessa ajassa. Mikäli jokin tieto jätetään toimittamatta, pyydän siitä kirjallisen perustelun sekä ohjeet oikaisuvaatimuksen tekemiseen.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ——— Образование ———
  {
    slug: 'fi-edu-koulupaikka', kind: 'STANDARD', categorySlug: 'edu-docs',
    titleRu: 'Заявление о школьном месте',
    titleDoc: 'Hakemus koulupaikasta', titleEn: 'School placement application',
    descRu: 'Заявление опекуна в муниципальный орган образования о предоставлении школьного места ребёнку. По Perusopetuslaki (628/1998), 26 §, муниципалитет обязан принять ребёнка, проживающего в коммуне, в базовую школу.',
    descEn: 'Guardian’s application to the municipal education office for a school place. Under the Basic Education Act (628/1998), section 26, the municipality must admit a child residing in it to basic education.',
    descDoc: 'Hakemus koulupaikasta perusopetuslain (628/1998) mukaisesti: lapsen tiedot ja asuinpaikka.',
    refRu: 'Perusopetuslaki (628/1998), 26 § — приём в базовую школу',
    refEn: 'Basic Education Act (628/1998), section 26 — admission to basic education',
    fields: [
      F('org_name', 'Коммуна / орган образования', 'Municipality / education office', 'text', { half: true, placeholderDoc: 'Kuopion kaupunki, sivistystoimisto' }),
      F('contact_name', 'Контактное лицо (директор)', 'Contact person (principal)', 'text', { half: true, placeholderDoc: 'Rehtori Anna Laakso' }),
      F('applicant_name', 'Ваше имя (опекун)', 'Your name (guardian)', 'text', { half: true, placeholderDoc: 'Aino Korhonen' }),
      F('home_address', 'Домашний адрес ребёнка', 'Child’s home address', 'text', { half: true, placeholderDoc: 'Keskuskatu 4 A 2, 70110 Kuopio' }),
      F('child_name', 'Имя ребёнка', 'Child’s full name', 'text', { half: true, placeholderDoc: 'Eino Korhonen' }),
      F('child_dob', 'Дата рождения ребёнка', 'Child’s date of birth', 'date', { half: true }),
      F('class_level', 'Класс / ситуация', 'Grade level / situation', 'select', {
        options: ['aloittaminen 1. luokalla', 'siirto toiselle luokka-asteelle', 'koulupaikka kesken lukuvuoden'],
      }),
    ],
    body: [
      {
        type: 'lines',
        align: 'right',
        items: ['{{org_name}}', 'Vastaanottaja: {{contact_name}}', '', '{{applicant_name}}', '{{home_address}}', '', 'Päivämäärä: {{date_today}}'],
      },
      { type: 'title', text: 'Hakemus koulupaikasta' },
      greet('Hyvä {{contact_name}},'),
      { type: 'paragraph', text: 'Anon lapselleni {{child_name}} (s. {{child_dob}}) koulupaikkaa: {{class_level}}. Perusopetuslain (628/1998) mukaisesti kunta järjestää koulupaikan lapselle, jonka kotipaikka on kunnassa. Lapsen kotiosoite on {{home_address}}.', justify: true },
      { type: 'paragraph', text: 'Toimitan hakemuksen liitteenä asuinpaikan vahvistuksen ja tarvittavat tiedot. Pyydän, että lapsi otetaan oppilaaksi ja että päätöksestä ilmoitetaan mahdollisimman pian, jotta koulukuljetukset ja muut käytännön järjestelyt voidaan varmistaa.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ——— Университет ———
  {
    slug: 'fi-uni-hakemus', kind: 'STANDARD', categorySlug: 'uni-common',
    titleRu: 'Заявление в университет',
    titleDoc: 'Hakemus opiskelijaksi', titleEn: 'University application',
    descRu: 'Заявление о приёме в университет на магистерскую программу. По Yliopistolaki (558/2009), 37 §, университет организует отбор; к заявлению прилагаются дипломы, выписки оценок и подтверждение языка.',
    descEn: 'Application for admission to a university master’s programme. Under the Universities Act (558/2009), section 37, the university organises the admissions; diplomas, transcripts and language proof are attached.',
    descDoc: 'Hakemus opiskelijaksi yliopistolain (558/2009) 37 §:n tarkoittamassa valinnassa.',
    refRu: 'Yliopistolaki (558/2009), 37 § — приём студентов',
    refEn: 'Universities Act (558/2009), section 37 — student admissions',
    fields: [
      ...personFields([
        F('org_name', 'Университет', 'University', 'text', { half: true, placeholderDoc: 'Helsingin yliopisto' }),
        F('program', 'Название программы', 'Name of the programme', 'text', { placeholderDoc: 'maisteriohjelma tietotekniikassa' }),
        F('start_term', 'Начало обучения', 'Starting term', 'select', {
          options: ['syksy 2026', 'kevät 2027'],
        }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Hakemus opiskelijaksi' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Anon opiskelijaksi {{org_name}}:n hakukohteeseen {{program}} {{start_term}}. Hakemus tehdään yliopistolain (558/2009) 37 §:n tarkoittamassa opiskelijavalinnassa.', justify: true },
      { type: 'paragraph', text: 'Liitteenä ovat tutkintotodistukset ja arvosanakopiot, kielitaitotodistus sekä muut hakukohteen vaatimat asiakirjat. Olen käytettävissä mahdollisiin valintakokeisiin ja haastatteluihin ja toimitan lisäselvitykset pyydettäessä.', justify: true },
      { type: 'attachment', items: ['Tutkintotodistus ja arvosanakopiot', 'Kielitaitotodistus', 'Motivaatiokirje ja suositukset'], label: 'Liitteet:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'fi-uni-apuraha', kind: 'STANDARD', categorySlug: 'uni-money',
    titleRu: 'Заявление на стипендию (apuraha)',
    titleDoc: 'Hakemus apurahasta', titleEn: 'Grant application',
    descRu: 'Заявление на стипендию/грант от факультета или фонда университета: цель использования средств, сумма и период, план работы. Приложения — CV, выписка оценок и рекомендации; расход отчётности по правилам фонда.',
    descEn: 'Application for a grant from a university faculty or fund: purpose of the funds, amount and period, and a work plan. Attachments include a CV, transcript and references; use of the grant is reported to the fund.',
    descDoc: 'Hakemus apurahasta: käyttötarkoitus, haettava summa ja käyttökausi sekä liitteet.',
    refRu: 'Yliopistolaki (558/2009) — распоряжение средствами; порядок стипендий определяется правилами университета',
    refEn: 'Universities Act (558/2009) — use of funds; grants are awarded under the university’s own rules',
    fields: [
      ...personFields([
        F('org_name', 'Факультет / фонд', 'Faculty / fund', 'text', { half: true, placeholderDoc: 'Helsingin yliopiston matemaattis-luonnontieteellinen tiedekunta' }),
        F('purpose', 'Цель использования гранта', 'Purpose of the grant', 'text', { placeholderDoc: 'väitöskirjatutkimus 2026–2027' }),
        F('amount', 'Запрашиваемая сумма', 'Amount applied for', 'text', { half: true, placeholderDoc: '10 000,00 €' }),
        F('start_date', 'Начало периода использования', 'Grant period start', 'date', { half: true }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Hakemus apurahasta' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Anon apurahaa {{amount}} suuruisena käyttötarkoitukseen {{purpose}}. Apurahan käyttökausi alkaa {{start_date}}. Suunnitelmassani yhdistyvät jatkokoulutus ja tutkimustyön edistäminen kohtuullisella kustannustasolla.', justify: true },
      { type: 'paragraph', text: 'Liitteenä ovat tutkimus- tai käyttösuunnitelma, opintosuoritusote, ansioluettelo ja suosituskirjeet. Sitoudun raportoimaan apurahan käytöstä ja tuloksista rahaston tai tiedekunnan vaatimusten mukaisesti.', justify: true },
      { type: 'attachment', items: ['Tutkimus- tai käyttösuunnitelma', 'Opintosuoritusote ja ansioluettelo', 'Suosituskirjeet'], label: 'Liitteet:' },
      sign('{{applicant_name}}'),
    ],
  },

  // ——— Почта ———
  {
    slug: 'fi-post-reklamaatio', kind: 'STANDARD', categorySlug: 'post-claims',
    titleRu: 'Рекламация в Posti (утерянное отправление)',
    titleDoc: 'Reklamaatio kadonneesta lähetyksestä', titleEn: 'Complaint about a lost postal item',
    descRu: 'Рекламация почтовому оператору (Posti) об утерянном или не доставленном отправлении с требованием возмещения. По Laki postipalveluista (661/2010) за перевозку отвечает оператор; надзор за почтовыми услугами осуществляет Traficom.',
    descEn: 'Complaint to the postal operator (Posti) about a lost or undelivered item with a claim for compensation. Under the Postal Services Act (661/2010) the operator is liable for carriage; Traficom supervises postal services.',
    descDoc: 'Reklamaatio kadonneesta lähetyksestä: seurantakoodi, arvo ja korvausvaatimus.',
    refRu: 'Laki postipalveluista (661/2010) — ответственность оператора; надзор — Traficom',
    refEn: 'Postal Services Act (661/2010) — operator’s liability; supervised by Traficom',
    fields: [
      ...personFields([
        F('org_name', 'Почтовый оператор', 'Postal operator', 'text', { half: true, placeholderDoc: 'Posti Oyj' }),
        F('tracking', 'Код отслеживания', 'Tracking number', 'text', { half: true, placeholderDoc: 'JD012345678901234567' }),
        F('send_date', 'Дата отправления', 'Date of dispatch', 'date', { half: true }),
        F('item_value', 'Стоимость вложения', 'Value of the item', 'text', { half: true, placeholderDoc: '120,00 €' }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Reklamaatio kadonneesta lähetyksestä' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Olen luovuttanut lähetyksenne kuljetettavaksi {{send_date}}, ja lähetyksen seurantakoodi on {{tracking}}. Lähetys ei ole saapunut perille eikä seurantatiedot ole päivittyneet. Lähetyksen sisällön arvo on {{item_value}}.', justify: true },
      { type: 'paragraph', text: 'Vaadin postipalvelulain (661/2010) mukaisesti selvitystä lähetyksen kohtalosta ja korvausta vahingosta. Mikäli asiaa ei ratkaista, otan yhteyttä Traficomiin, joka valvoo postipalvelujen järjestämistä ja laatua.', justify: true },
      { type: 'attachment', items: ['Lähetyskuitti ja seurantaraportti', 'Arvon osoittavat asiakirjat (kuitti, lasku)'], label: 'Liitteet:' },
      sign('{{applicant_name}}', 'Ystävällisin terveisin,'),
    ],
  },

  // ——— Жильё и быт ———
  {
    slug: 'fi-util-vuokrakorjaus', kind: 'STANDARD', categorySlug: 'util-management',
    titleRu: 'Требование арендодателю о ремонте',
    titleDoc: 'Vaatimus vuokra-asunnon korjauksesta', titleEn: 'Repair demand to the landlord',
    descRu: 'Требование арендодателю устранить недостатки в арендной квартире. По Laki asuinhuoneiston vuokrauksesta (481/1995), 5 luku 23 §, арендодатель отвечает за содержание и ремонт; при бездействии арендатор может сделать ремонт и взыскать разумные расходы.',
    descEn: 'Demand to the landlord to remedy defects in the rented dwelling. Under the Act on Residential Leases (481/1995), chapter 5 section 23, the landlord is responsible for maintenance and repairs; otherwise the tenant may arrange repairs and recover reasonable costs.',
    descDoc: 'Vaatimus korjauksesta lain asuinhuoneiston vuokrauksesta 5 luvun 23 §:n nojalla ja määräaika korjaukselle.',
    refRu: 'Laki asuinhuoneiston vuokrauksesta (481/1995), 5 luku 23 § — обязанность арендодателя по содержанию',
    refEn: 'Act on Residential Leases (481/1995), chapter 5 section 23 — landlord’s maintenance duty',
    fields: [
      // org_name и applicant_address удалены (TPL-1): адресат — {{landlord_name}}/{{contact_name}},
      // адрес отправителя — {{apartment_address}} (арендатор живёт в арендуемой квартире)
      F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Aino Korhonen' }),
      F('applicant_id', 'Личный код (henkilötunnus)', 'Personal identity code', 'text', { half: true, placeholderDoc: '010180-998A' }),
      F('applicant_email', 'Эл. почта', 'Email', 'text', { half: true, placeholderDoc: 'aino.korhonen@esimerkki.fi' }),
      F('landlord_name', 'Арендодатель', 'Landlord', 'text', { half: true, placeholderDoc: 'Kiinteistö Oy Asumistie' }),
      F('contact_name', 'Управляющий / контактное лицо', 'Property manager / contact', 'text', { half: true, placeholderDoc: 'isännöitsija Pekka Niemi' }),
      F('apartment_address', 'Адрес квартиры', 'Rental apartment address', 'text', { placeholderDoc: 'Asumistie 3 B 12, 00440 Helsinki' }),
      F('repair_desc', 'Объект и описание ремонта', 'Repair target and description', 'text', { placeholderDoc: 'keittiön vesihana vuotaa lattiaan' }),
      F('repair_deadline', 'Срок ремонта', 'Deadline for the repair', 'date', { half: true }),
    ],
    body: [
      {
        type: 'lines',
        align: 'right',
        items: ['{{landlord_name}}', 'Vastaanottaja: {{contact_name}}', '', '{{applicant_name}}', '{{apartment_address}}', 'Henkilötunnus: {{applicant_id}}', 'Sähköposti: {{applicant_email}}', '', 'Päivämäärä: {{date_today}}'],
      },
      { type: 'title', text: 'Vaatimus vuokra-asunnon korjauksesta' },
      greet('Hyvä {{contact_name}},'),
      { type: 'paragraph', text: 'Asun vuokra-asunnossanne osoitteessa {{apartment_address}}. Asunnossa esiintyy korjaustarve: {{repair_desc}}. Lain asuinhuoneiston vuokrauksesta (481/1995) 5 luvun 23 §:n mukaan vuokranantajan on huolehdittava asunnon kunnossapidosta ja korjauksesta.', justify: true },
      { type: 'paragraph', text: 'Vaadin, että korjaus tehdään viimeistään {{repair_deadline}}. Mikäli korjausta ei aloiteta määräaikana, voin korjauttaa asian itse ja periä aiheutuneet kohtuulliset kulut vuokranantajalta sekä ottaa asian käräjäoikeuden ratkaistavaksi.', justify: true },
      { type: 'attachment', items: ['Valokuvat korjauksen kohteesta', 'Aikaisemmat yhteydenotot (tarvittaessa)'], label: 'Liitteet:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'fi-util-neighbors-noise', kind: 'STANDARD', categorySlug: 'util-neighbors',
    titleRu: 'Жалоба на шум от соседей',
    titleDoc: 'Meluvalitus naapurista', titleEn: 'Noise complaint about neighbours',
    descRu: 'Жалоба в орган муниципального контроля или управляющую компанию на постоянный шум от соседей: музыка, ночные работы, собаки, техника. По Terveydensuojelulaki (763/1994), 32 §, шум не должен причинять вред здоровью; контроль осуществляет коммуна (ympäristöterveys).',
    descEn: 'Complaint to the municipal control authority or housing company about recurring neighbour noise: music, night-time works, dogs or machinery. Under the Health Protection Act (763/1994), section 32, noise must not harm health; the municipality supervises.',
    descDoc: 'Meluvalitus terveydensuojelulain (763/1994) 32 §:n nojalla: tarkastuspyyntö ja toimenpidevaatimus.',
    refRu: 'Terveydensuojelulaki (763/1994), 32 § — шум как вред здоровью; контроль — коммуна',
    refEn: 'Health Protection Act (763/1994), section 32 — noise as a health hazard; municipal supervision',
    fields: [
      ...personFields([
        F('org_name', 'Орган / taloyhtiö', 'Authority / housing company', 'text', { half: true, placeholderDoc: 'Helsingin kaupunki, ympäristöterveys' }),
        F('noise_source', 'Адрес источника шума', 'Address of the noise source', 'text', { half: true, placeholderDoc: 'Rauhankatu 10 A 4, Helsinki' }),
        F('noise_type', 'Характер шума', 'Type of noise', 'select', {
          options: ['kova musiikki tai tv-äänet toistuvasti', 'rakentamisen ja kunnostuksen äänet yöllä', 'koirien jatkuva haukunta', 'koneiden tai laitteiden häiriöäänet'],
        }),
        F('noise_period', 'Время появления шума', 'When the noise occurs', 'text', { half: true, placeholderDoc: 'arki-iltaisin klo 22–24 ja viikonloppuisin puolenyön jälkeen' }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Meluvalitus' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Valitan naapurustoni toistuvasta melusta, joka esiintyy osoitteessa {{noise_source}}. Melun lajia on {{noise_type}}, ja sitä kuuluu {{noise_period}}. Melu estää normaalin yön unen ja aiheuttaa terveyshaittaa.', justify: true },
      { type: 'paragraph', text: 'Terveydensuojelulain (763/1994) 32 §:n mukaan melu ei saa aiheuttaa terveyshaittaa asumisessa, ja kunta valvoo asiaa ympäristöterveydenhuollon osalta. Pyydän, että kohteessa tehdään tarkastus ja melun aiheuttamisen lopettamiseksi määrätään tarvittavat toimenpiteet. Olen ilmoittanut asiasta myös taloyhtiölle.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'fi-util-muuttoilmoitus', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Уведомление о переезде (DVV)',
    titleDoc: 'Muuttoilmoitus', titleEn: 'Notification of move (change of address)',
    descRu: 'Muuttoilmoitus в Väestötietovirasto (DVV) о смене адреса: по Laki väestötietojärjestelmästä (661/2009) переезд уведомляется в течение недели; единая подача обновляет данные для муниципалитета, Kela, налоговой и почты.',
    descEn: 'Notification of move (muuttoilmoitus) to the Digital and Population Data Services Agency (DVV): under the Population Information Act (661/2009) a move must be notified within a week; one filing updates authorities and the postal address.',
    descDoc: 'Muuttoilmoitus Väestötietovirastolle: muuttopäivä, uusi ja entinen osoite.',
    refRu: 'Laki väestötietojärjestelmästä ja Väestötietoviraston varmistuspalveluista (661/2009) — muuttoilmoitus',
    refEn: 'Population Information Act (661/2009) — notification of move',
    fields: [
      ...personFields([
        F('org_name', 'Väestötietovirasto (адресат)', 'DVV (recipient)', 'text', { half: true, placeholderDoc: 'Väestötietovirasto (DVV)' }),
        F('move_date', 'Дата переезда', 'Date of the move', 'date', { half: true }),
        F('new_address', 'Новый адрес', 'New address', 'text', { half: true, placeholderDoc: 'Kotikatu 5 B 3, 00100 Helsinki' }),
        F('old_address', 'Прежний адрес', 'Previous address', 'text', { half: true, placeholderDoc: 'Mannerheimintie 100 A 5, 00250 Helsinki' }),
      ]),
    ],
    body: [
      ...authHdr(),
      { type: 'title', text: 'Muuttoilmoitus' },
      greet('Hyvät vastaanottajat,'),
      { type: 'paragraph', text: 'Ilmoitan muuttavani pysyvästi {{move_date}}. Uusi osoitteeni on {{new_address}} ja entinen osoite {{old_address}}. Muuttoilmoitus tehdään väestötietojärjestelmästä annetun lain (661/2009) mukaisesti.', justify: true },
      { type: 'paragraph', text: 'Pyydän, että osoitteeni ja väestötietojeni muut tiedot päivitetään ilmoituksen mukaisesti ja että viranomaiset saavat tiedon uudesta osoitteestani. Olen samalla ilmoittanut osoitteenmuutoksesta posti- ja osoitepalvelujen kautta.', justify: true },
      sign('{{applicant_name}}', 'Ystävällisin terveisin,'),
    ],
  },
  {
    slug: 'fi-util-velkakirja', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Долговая расписка (velkakirja)',
    titleDoc: 'Velkakirja', titleEn: 'Promissory note (IOU)',
    descRu: 'Составление velkakirja — долговой расписки при займе между частными лицами: сумма, процент, срок возврата и подписи. По Velkakirjalaki (622/1947) расписка служит доказательством долга в суде.',
    descEn: 'Drafting a promissory note (velkakirja) for a private loan: amount, interest, due date and signatures. Under the Promissory Notes Act (622/1947) the note evidences the debt before a court.',
    descDoc: 'Velkakirja velkakirjalain (622/1947) mukaisesti: velan määrä, korko, eräpäivä ja allekirjoitukset.',
    refRu: 'Velkakirjalaki (622/1947) — содержание и доказательная сила velkakirja',
    refEn: 'Promissory Notes Act (622/1947) — content and evidentiary force of an IOU',
    fields: [
      F('place', 'Место (город)', 'Place (city)', 'text', { half: true, placeholderDoc: 'Tampere' }),
      F('debtor_name', 'Заёмщик (должник)', 'Debtor', 'text', { half: true, placeholderDoc: 'Matti Meikäläinen' }),
      F('creditor_name', 'Кредитор', 'Creditor', 'text', { half: true, placeholderDoc: 'Aino Korhonen' }),
      F('amount', 'Сумма долга', 'Amount of the debt', 'text', { half: true, placeholderDoc: '5 000,00 €' }),
      F('interest', 'Процент по долгу', 'Interest', 'text', { half: true, placeholderDoc: 'viitekorko + 2 %' }),
      F('due_date', 'Срок возврата (eräpäivä)', 'Due date', 'date', { half: true }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{place}}', '', 'Päivämäärä: {{date_today}}'] },
      { type: 'title', text: 'Velkakirja' },
      { type: 'paragraph', text: 'Tämä asiakirja on velkakirjalain (622/1947) tarkoittama velkakirja.', noIndent: true },
      { type: 'paragraph', text: 'Minä {{debtor_name}}, velallinen, olen velkaa {{creditor_name}}:lle, velkojalle, {{amount}} suuruisen velan. Maksamatta jäänyt velkapääoma korkoineen maksetaan viimeistään {{due_date}}.', justify: true },
      { type: 'paragraph', text: 'Maksamattomalta velkapääomalta maksetaan {{interest}} suuruinen korko eräpäivän jälkeiseltä ajalta. Velkakirjan allekirjoittaa velallinen, ja velkoja säilyttää kirjan todisteena saatavasta.', justify: true },
      { type: 'signature', leftText: '{{date_today}}', rightText: '_______________ / {{debtor_name}} / (velallinen)' },
      { type: 'signature', rightText: 'Vastaanotettu ja hyväksytty: _______________ / {{creditor_name}} / (velkoja)' },
    ],
  },
  {
    slug: 'fi-util-valtakirja', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Доверенность (valtakirja)',
    titleDoc: 'Valtakirja', titleEn: 'Letter of authorisation',
    descRu: 'Доверенность на ведение дел перед органами и судом: объём полномочий, срок действия и право подписи. В суде представитель действует как asiamies по Oikeudenkäymiskaari (4/1734), 12 luku 3 §.',
    descEn: 'Letter of authorisation to handle one’s affairs before authorities and courts: scope of powers, validity and signing rights. In court the representative acts as an asiamies under the Code of Judicial Procedure (4/1734), chapter 12 section 3.',
    descDoc: 'Valtakirja: valtuudet, niiden voimassaolo ja asiamiehen oikeus tuomioistuimessa.',
    refRu: 'Oikeudenkäymiskaari (4/1734), 12 luku 3 § — asiamies в суде; общие правила доверенности',
    refEn: 'Code of Judicial Procedure (4/1734), chapter 12 section 3 — representative in court; general rules on authorisation',
    fields: [
      F('principal_name', 'Доверитель', 'Principal', 'text', { half: true, placeholderDoc: 'Aino Korhonen' }),
      F('agent_name', 'Представитель (valtuutettu)', 'Authorised representative', 'text', { half: true, placeholderDoc: 'Pekka Niemi' }),
      F('task_desc', 'Объём полномочий / задача', 'Scope of the authorisation', 'text', { placeholderDoc: 'asiani hoitaminen verotoimistossa ja käräjäoikeudessa' }),
      F('validity', 'Срок действия', 'Validity', 'select', {
        options: ['toistaiseksi', 'yksittäistä toimeksiantoa varten', 'määräaikainen, kunnes en peru sitä kirjallisesti'],
      }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Päivämäärä: {{date_today}}'] },
      { type: 'title', text: 'Valtakirja' },
      { type: 'paragraph', text: 'Minä {{principal_name}} annan tällä valtakirjalla {{agent_name}}:lle valtuuden hoitaa puolestani seuraavan asian: {{task_desc}}.', justify: true },
      { type: 'paragraph', text: 'Valtuutettu saa nimelläni allekirjoittaa asian hoitamiseksi tarpeelliset asiakirjat ja toimittaa viranomaisille ilmoituksia tämän valtakirjan rajoissa. Valtakirja on voimassa {{validity}}.', justify: true },
      { type: 'paragraph', text: 'Jos tehtävä koskee tuomioistuinasiaa, valtuutettu käyttää oikeutta toimia asiamiehenä oikeudenkäymiskaaren (4/1734) 12 luvun 3 §:n mukaisesti.', justify: true },
      { type: 'signature', leftText: '{{date_today}}', rightText: '_______________ / {{principal_name}} / (valtakirjan antaja)' },
    ],
  },
];
