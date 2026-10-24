// Шаблоны для Дании (язык документов — датский).
// Правовые основания (Дания):
// Ferieloven (lov nr. 910 af 27.08.2019, i kraft 01.09.2020): § 4 — 5 ugers ferie (25 arbejdsdage) pr. ferieår.
// Funktionærloven: § 2 — opsigelsesvarsel (fra funktionær: 1 måned); § 2a — ret til arbejdsbevis
// ved ansættelsesforholdets ophør; § 5 — ret til løn under sygdom (op til 120 dage over 12 måneder).
// Barselsloven (2021): orlov i forbindelse med fødsel og adoption; kap. 19 — orlov af særlige
// familiefaktorer (fx pasning af alvorligt sygt barn eller pårørende).
// Sygedagpengeloven: arbejdsgiverperioden (30 dage), herefter udbetaler kommunen sygedagpenge.
// Købeloven (lov nr. 42 af 07.02.2018): § 22 — forbrugerkøb, reklamationsret i op til 2 år.
// Lejeloven: § 74 — depositum på højst 3 måneders husleje; § 174 — udlejerens vedligeholdelsespligt.
// Gældsbrevsloven (1955); Aftaleloven (1917): § 18 — fuldmagt.
// Retsplejeloven: § 14 a — småsagsproces ved krav indtil 100.000 kr.
// Databeskyttelsesloven og GDPR art. 77 — klage til Datatilsynet; Ombudsmandsloven — Folketingets
// Ombudsmand. Skattekontrolloven: § 29 — klage til Skattestyrelsen (6 uger). Ankestyrelsen — klage
// over kommunens afgørelse (frist 4 uger). Lov om social pension — folkepension.
// Sundhedsloven: § 39 — patientens ret til indsigt i journalen; §§ 206 ff. — patientklagenævn
// (klagefrist 2 år). Folkeskoleloven — skoleskift/skoletilvalg (kommunalbestyrelsen).
// Lov om universiteter — studieorlov; Lov om Statens Uddannelsesstøtte (SU-loven) — tillægsstipendium.
// Lov om posttjenester — universalposttjeneste og erstatning for tapt forsendelse (PostNord).
// CPR-loven — adresseændring skal anmeldes senest 5 dage efter flytning.
// Miljøbeskyttelsesloven §§ 3 og 35 — kommunen kan påbyde/forbyde støjgener fra naboer.
import type { DocBlock } from '../../lib/types';
import type { TplDef } from '../types';
import { F } from './helpers';

// ——— Датские шапки: «Til: …» / «Fra: …» / «Dato: …» в правом верхнем углу ———

const dkHdr = (to: string[], from: string[]): DocBlock => ({
  type: 'lines',
  align: 'right',
  items: ['Til: ' + to[0], ...to.slice(1), '', 'Fra: ' + from[0], ...from.slice(1), '', 'Dato: {{date_today}}'],
});

// Шапка письма работодателю
const workHdr = (): DocBlock =>
  dkHdr(['{{head_name}}', '{{org_name}}'], ['{{applicant_name}}', '{{applicant_address}}']);

// Шапка письма в инстанцию/физлицу
const personHdr = (to: string[]): DocBlock =>
  dkHdr(to, ['{{applicant_name}}', '{{applicant_address}}', 'Tlf.: {{applicant_phone}}']);

// Подпись: «Med venlig hilsen,» + имя справа
const dkSign = (namePh = '{{applicant_name}}'): DocBlock => ({
  type: 'signature',
  leftText: 'Med venlig hilsen,',
  rightText: `_______________ / ${namePh} /`,
});

// ——— Наборы полей ———

const workFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('org_name', 'Название компании', 'Company name', 'text', { half: true, placeholderDoc: 'Møllers Maskinværksted A/S', placeholderRu: '«Мёллерс Машинверкстед А/С»' }),
  F('head_name', 'Кому (руководитель/HR)', 'Submit to (head/HR)', 'text', { half: true, placeholderDoc: 'Leder Karin Møller', placeholderRu: 'Руководителю Карин Мёллер' }),
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Anna Holm Jensen', placeholderRu: 'Анна Хольм Йенсен' }),
  F('applicant_address', 'Ваш адрес', 'Your address', 'text', { half: true, placeholderDoc: 'Vestergade 10, 3. tv., 8000 Aarhus C', placeholderRu: 'Вестергаде 10, 3. тв., 8000 Орхус C' }),
  ...extra,
];

const personFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Anna Holm Jensen', placeholderRu: 'Анна Хольм Йенсен' }),
  F('applicant_address', 'Ваш адрес', 'Your address', 'text', { half: true, placeholderDoc: 'Vestergade 10, 3. tv., 8000 Aarhus C', placeholderRu: 'Вестергаде 10, 3. тв., 8000 Орхус C' }),
  F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '20 12 34 56', placeholderRu: '20 12 34 56' }),
  ...extra,
];

export const TEMPLATES_DK: TplDef[] = [
  // ————————————————————————— Работа: отпуск —————————————————————————
  {
    slug: 'dk-work-ferie', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление на ежегодный отпуск (5 недель)',
    titleDoc: 'Ansøgning om ferie', titleEn: 'Annual leave application',
    descRu: 'Заявление на ежегодный оплачиваемый отпуск. По Ferieloven работник имеет право на 5 недель отпуска (25 рабочих дней) за каждый ferieår; период согласовывается с работодателем заранее.',
    descEn: 'Application for annual paid leave. Under the Danish Holiday Act employees are entitled to 5 weeks of holiday (25 working days) per holiday year, agreed with the employer in advance.',
    descDoc: 'Ansøgning om at holde ferie efter ferieloven: 5 ugers ferie (25 arbejdsdage) pr. ferieår.',
    refRu: 'Ferieloven § 4 — 5 ugers ferie (25 arbejdsdage) pr. ferieår',
    refEn: 'Section 4 of the Danish Holiday Act — 5 weeks of holiday (25 working days) per holiday year',
    fields: [
      ...workFields([
        F('date_from', 'Первый день отпуска', 'First day of leave', 'date', { half: true }),
        F('date_to', 'Последний день отпуска', 'Last day of leave', 'date', { half: true }),
        F('days', 'Количество отпускных дней', 'Number of holiday days', 'number', { half: true, placeholderRu: '25', placeholderDoc: '25' }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'ANSØGNING OM FERIE' },
      { type: 'paragraph', text: 'Emne: Feriefri i perioden {{date_from}} – {{date_to}}', noIndent: true },
      { type: 'paragraph', text: 'Kære {{head_name}},', noIndent: true },
      { type: 'paragraph', text: 'Jeg ønsker herved at holde ferie i perioden fra {{date_from}} til og med {{date_to}}, i alt {{days}} feriedage.', justify: true },
      { type: 'paragraph', text: 'Ferien omfatter i henhold til ferieloven en del af mine 5 ugers (25 arbejdsdages) ferie for det aktuelle ferieår, og jeg antager, at perioden passer ind i virksomhedens ferieplan.', justify: true },
      { type: 'paragraph', text: 'Jeg sørger for at aflevere og overdrage mine arbejdsopgaver inden feriens begyndelse, så den daglige drift ikke påvirkes.', justify: true },
      { type: 'paragraph', text: 'Jeg står til rådighed for spørgsmål til planlægningen og beder om en bekræftelse på den ønskede periode.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— Работа: рабочее время —————————————————————————
  {
    slug: 'dk-work-flex-arbejdstid', kind: 'STANDARD', categorySlug: 'work-time',
    titleRu: 'Заявление о гибком рабочем времени',
    titleDoc: 'Ansøgning om fleksibel arbejdstid', titleEn: 'Flexible working hours application',
    descRu: 'Заявление о переходе на гибкий график: скользящее время (glidende tid), фиксированный flex-день, отгулы за переработку (afspadsering) или сокращённая ставка.',
    descEn: 'Application for flexible working hours: flextime, a fixed flex day, time off in lieu of overtime or reduced hours.',
    descDoc: 'Ansøgning om fleksibel arbejdstid, fx glidende tid eller afspadsering af overarbejde.',
    refRu: 'Funktionærloven; bekendtgørelse om arbejdstid — arbejdstiden aftales med arbejdsgiveren',
    refEn: 'Salaried Employees Act; Working Time Order — working hours are agreed with the employer',
    fields: [
      ...workFields([
        F('model', 'Желаемая модель', 'Preferred model', 'select', {
          options: [
            'Glidende tid med fleksramme (fx kl. 7–17)',
            'Fast fleksdag (fx hver fredag)',
            'Afspadsering af overarbejde',
            'Kortere arbejdstid med tilsvarende lønreduktion',
          ],
        }),
        F('date_from', 'С какой даты', 'Effective from', 'date', { half: true }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'ANSØGNING OM FLEKSIBEL ARBEJDSTID' },
      { type: 'paragraph', text: 'Emne: Ansøgning om fleksibel arbejdstid', noIndent: true },
      { type: 'paragraph', text: 'Kære {{head_name}},', noIndent: true },
      { type: 'paragraph', text: 'Jeg ønsker herved at aftale en mere fleksibel arbejdstid og foreslår følgende model: {{model}}.', justify: true },
      { type: 'paragraph', text: 'Ordningen vil ikke påvirke løsningen af mine opgaver. Jeg sikrer fuld dækning af væsentlige mødetider, og kernetid kan aftales, hvis det er ønskeligt.', justify: true },
      { type: 'paragraph', text: 'Jeg håber, at ordningen kan gennemføres fra {{date_from}}, og jeg er klar til en drøftelse af detaljerne på et møde.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— Работа: семья/родители —————————————————————————
  {
    slug: 'dk-work-barsel', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Заявление на родительский отпуск (barsel)',
    titleDoc: 'Ansøgning om barselsorlov', titleEn: 'Parental leave application',
    descRu: 'Заявление на родительский отпуск по Barselsloven 2021: мать — 4 недели до родов и 24 недели после; партнёр — 2 недели после рождения и 7 недель до исполнения ребёнку 1 года; усыновителям — соответствующий отпуск.',
    descEn: 'Parental leave application under the Danish Parental Leave Act 2021: the mother 4 weeks before and 24 weeks after birth; the partner 2 weeks after birth and 7 weeks within the child’s first year; adopters accordingly.',
    descDoc: 'Ansøgning om barselsorlov efter barselsloven (2021).',
    refRu: 'Barselsloven (2021) — orlov i forbindelse med fødsel og adoption',
    refEn: 'Danish Parental Leave Act 2021 — leave in connection with birth and adoption',
    fields: [
      ...workFields([
        F('rolle', 'Роль в барселе', 'Role in the leave', 'select', {
          options: [
            'barslende mor (4 uger før termin og 24 uger efter fødslen)',
            'partner/medforælder (2 uger efter fødslen og 7 uger inden barnet fylder 1 år)',
            'adoptionsforælder',
          ],
        }),
        F('termindato', 'Дата родов/рождения', 'Due date / date of birth', 'date', { half: true }),
        F('date_from', 'Отпуск с', 'Leave from', 'date', { half: true }),
        F('date_to', 'Отпуск по', 'Leave until', 'date', { half: true }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'ANSØGNING OM BARSELSORLOV' },
      { type: 'paragraph', text: 'Emne: Barselsorlov fra {{date_from}}', noIndent: true },
      { type: 'paragraph', text: 'Kære {{head_name}},', noIndent: true },
      { type: 'paragraph', text: 'Jeg anmoder herved om barselsorlov. Barnet er forventet/født den {{termindato}}, og orloven ønskes i perioden fra {{date_from}} til og med {{date_to}}.', justify: true },
      { type: 'paragraph', text: 'Orloven påberåbes i medfør af barselsloven (2021), hvor jeg som {{rolle}} har ret til orlov i forbindelse med fødslen.', justify: true },
      { type: 'paragraph', text: 'Jeg deltager gerne i planlægningen af afløsning og overdragelse af opgaverne og beder om bekræftelse på orloven samt oplysning om udbetaling af løn eller orlovederlag i perioden.', justify: true },
      dkSign(),
    ],
  },
  {
    slug: 'dk-work-orlov-familie', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Заявление на отпуск по семейным обстоятельствам',
    titleDoc: 'Ansøgning om orlov af familiemæssige årsager', titleEn: 'Leave for family reasons application',
    descRu: 'Заявление на неоплачиваемый отпуск по семейным обстоятельствам: уход за тяжело больным ребёнком или родственником, care days, иные особые семейные факторы (Barselsloven, гл. 19).',
    descEn: 'Application for leave for family reasons: caring for a seriously ill child or relative and other special family circumstances (chapter 19 of the Parental Leave Act).',
    descDoc: 'Ansøgning om orlov af særlige familiefaktorer, fx pasning af alvorligt sygt familiemedlem.',
    refRu: 'Barselsloven kap. 19 — orlov af særlige familiefaktorer',
    refEn: 'Parental Leave Act, chapter 19 — leave for special family circumstances',
    fields: [
      ...workFields([
        F('arsag', 'Причина отпуска', 'Reason for the leave', 'select', {
          options: [
            'alvorlig sygdom hos mit barn',
            'alvorlig sygdom hos en nær pårørende',
            'plejeopgaver i hjemmet',
            'andet forhold af særlig karakter',
          ],
        }),
        F('date_from', 'Отпуск с', 'Leave from', 'date', { half: true }),
        F('date_to', 'Отпуск по', 'Leave until', 'date', { half: true }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'ANSØGNING OM ORLOV AF FAMILIEMÆSSIGE ÅRSAGER' },
      { type: 'paragraph', text: 'Emne: Orlov af familiemæssige årsager', noIndent: true },
      { type: 'paragraph', text: 'Kære {{head_name}},', noIndent: true },
      { type: 'paragraph', text: 'Jeg anmoder herved om orlov af familiemæssige årsager på grund af {{arsag}}. Orloven ønskes fra {{date_from}} til og med {{date_to}}.', justify: true },
      { type: 'paragraph', text: 'Orloven påberåbes efter reglerne om orlov af særlige familiefaktorer i barselsloven. Dokumentation, fx en lægeerklæring, kan fremsendes efter anmodning.', justify: true },
      { type: 'paragraph', text: 'Jeg er indstillet på at koordinere forløbet med min leder og bidrage til afløsning i videst muligt omfang, så opgaverne sikres under mit fravær.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— Работа: увольнение —————————————————————————
  {
    slug: 'dk-work-opsigelse', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Увольнение по собственному желанию (opsigelse)',
    titleDoc: 'Opsigelse af ansættelsesforholdet', titleEn: 'Resignation letter',
    descRu: 'Заявление об увольнении по собственному желанию. По Funktionærloven § 2 работник соблюдает срок предупреждения — как правило 1 месяц, истекающий в первый день месяца.',
    descEn: 'Resignation letter. Under § 2 of the Salaried Employees Act the employee must give notice — normally one month, expiring on the first day of a month.',
    descDoc: 'Opsigelse af ansættelsesforholdet med overholdelse af opsigelsesvarslet.',
    refRu: 'Funktionærloven § 2 — opsigelsesvarsel fra funktionær: 1 måned',
    refEn: 'Salaried Employees Act § 2 — employee notice period: one month',
    fields: [
      ...workFields([
        F('opsigelsesdato', 'Дата подачи заявления', 'Date of notice', 'date', { half: true }),
        F('date_from', 'Последний рабочий день', 'Last working day', 'date', { half: true }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'OPSIGELSE AF ANSÆTTELSESFORHOLDET' },
      { type: 'paragraph', text: 'Emne: Opsigelse af mit ansættelsesforhold', noIndent: true },
      { type: 'paragraph', text: 'Kære {{head_name}},', noIndent: true },
      { type: 'paragraph', text: 'Jeg opsigher herved mit ansættelsesforhold i {{org_name}}. Opsigelsen gives den {{opsigelsesdato}}, og varselperioden udløber den {{date_from}}.', justify: true },
      { type: 'paragraph', text: 'Opsigelsesvarslet er overholdt i henhold til funktionærloven § 2 (1 måned, udløbende på en måneds første dag) samt eventuelle aftaler i min ansættelseskontrakt.', justify: true },
      { type: 'paragraph', text: 'Jeg sørger for en struktureret overdragelse af mine opgaver og stiller mig til rådighed for indlæring af afløser i varselperioden. Jeg beder om en skriftlig bekræftelse på opsigelsen.', justify: true },
      dkSign(),
    ],
  },
  {
    slug: 'dk-work-indsigelse', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Возражение против увольнения',
    titleDoc: 'Indsigelse mod opsigelse', titleEn: 'Objection to dismissal',
    descRu: 'Письменное возражение против увольнения: несогласие, ссылка на болезнь (§ 5 Funktionærloven — сохранение зарплаты до 120 дней) и требование мотивировать увольнение.',
    descEn: 'Written objection to dismissal: disagreement, reference to illness (§ 5 of the Salaried Employees Act — salary during sickness up to 120 days) and a request for concrete reasons.',
    descDoc: 'Indsigelse mod opsigelse med påberåbelse af sygdom og anmodning om begrundelse.',
    refRu: 'Funktionærloven § 5 — ret til løn under sygdom (op til 120 dage over 12 måneder)',
    refEn: 'Salaried Employees Act § 5 — right to salary during sickness (up to 120 days over 12 months)',
    fields: [
      ...workFields([
        F('opsigelsesdato', 'Дата увольнения (окончание срока)', 'Termination date', 'date', { half: true }),
        F('begrundelse', 'Ваши возражения', 'Your objections', 'textarea', { placeholderDoc: 'Jeg mener, at opsigelsen skyldes mit sygefravær og ikke en konkret vurdering af mit arbejde.', placeholderRu: 'Считаю, что увольнение связано с моей болезнью, а не с оценкой моей работы.' }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'INDSIGELSE MOD OPSIGELSE' },
      { type: 'paragraph', text: 'Emne: Indsigelse mod opsigelse af {{opsigelsesdato}}', noIndent: true },
      { type: 'paragraph', text: 'Kære {{head_name}},', noIndent: true },
      { type: 'paragraph', text: 'Jeg har modtaget opsigelse med varsel udløbende den {{opsigelsesdato}}. Jeg gør herved indsigelse mod opsigelsen og anmoder om en skriftlig og konkret begrundelse.', justify: true },
      { type: 'paragraph', text: 'Jeg mener, at opsigelsen kan være begrundet i mit sygefravær. Det påpeges, at jeg efter funktionærloven § 5 har ret til løn under sygdom, og at sygdom i udgangspunktet ikke kan begrunde en opsigelse.', justify: true },
      { type: 'paragraph', text: 'Mine bemærkninger til opsigelsen er: {{begrundelse}}.', justify: true },
      { type: 'paragraph', text: 'Jeg forbeholder mig retten til økonomisk kompensation og til at søge sagen bragt for domstolene, og beder om svar inden for rimelig tid, gerne inden varselperiodens udløb.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— Работа: документы —————————————————————————
  {
    slug: 'dk-work-arbejdsbevis', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Запрос справки с места работы (arbejdsbevis)',
    titleDoc: 'Anmodning om arbejdsbevis', titleEn: 'Request for a statement of employment',
    descRu: 'Запрос на arbejdsbevis — справку с периодом работы, должностью и описанием задач. Работодатель обязан выдать её по окончании работы (Funktionærloven § 2a).',
    descEn: 'Request for an arbejdsbevis — a statement with the employment period, position and duties. The employer must issue one when the employment ends (§ 2a of the Salaried Employees Act).',
    descDoc: 'Anmodning om arbejdsbevis (erhvervsreference) efter funktionærloven § 2a.',
    refRu: 'Funktionærloven § 2a — ret til arbejdsbevis ved ansættelsesforholdets ophør',
    refEn: 'Salaried Employees Act § 2a — right to a statement of employment upon termination',
    fields: [
      ...workFields([
        F('date_from', 'Период работы с', 'Employment from', 'date', { half: true }),
        F('date_to', 'Период работы по', 'Employment until', 'date', { half: true }),
      ]),
    ],
    body: [
      workHdr(),
      { type: 'title', text: 'ANMODNING OM ARBEJDSBEVIS' },
      { type: 'paragraph', text: 'Emne: Anmodning om arbejdsbevis', noIndent: true },
      { type: 'paragraph', text: 'Kære {{head_name}},', noIndent: true },
      { type: 'paragraph', text: 'Jeg anmoder herved om et arbejdsbevis for min ansættelse i {{org_name}} i perioden fra {{date_from}} til og med {{date_to}}.', justify: true },
      { type: 'paragraph', text: 'Beviset bedes oplyse ansættelsesperioden, min stilling og en kortfattet beskrivelse af mine arbejdsopgaver. Efter funktionærloven § 2a har jeg ret til et sådant bevis ved ansættelsesforholdets ophør.', justify: true },
      { type: 'paragraph', text: 'Beviset bedes udstedt på dansk, eventuelt tillige på engelsk, og kan sendes digitalt til mine kontaktoplysninger ovenfor.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— Претензии (частные) —————————————————————————
  {
    slug: 'dk-claim-reklamation', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Рекламация продавцу (недостаток товара)',
    titleDoc: 'Reklamation over mangelfuld vare', titleEn: 'Complaint about a defective good',
    descRu: 'Рекламация продавцу по товару с недостатком: ремонт, замена, скидка или возврат денег. При потребительской покупке рекламация возможна в течение 2 лет (Købeloven § 22).',
    descEn: 'Complaint to the seller about a defective good: repair, replacement, price reduction or rescission. For consumer purchases the complaint period is up to two years (§ 22 of the Sale of Goods Act).',
    descDoc: 'Reklamation over en mangelfuld vare købt hos forretningen, med krav efter købeloven.',
    refRu: 'Købeloven (2018) § 22 — forbrugerkøb: reklamationsret i op til 2 år',
    refEn: 'Danish Sale of Goods Act (2018) § 22 — consumer purchases: complaint period of up to two years',
    fields: [
      ...personFields([
        F('forretning_name', 'Название магазина', 'Shop name', 'text', { half: true, placeholderDoc: 'Butikken Eksempel ApS', placeholderRu: '«Бутиккен Эксампел АпС»' }),
        F('vare', 'Товар и модель', 'Product and model', 'text', { half: true, placeholderDoc: 'Kaffemaskine, model KM-2200', placeholderRu: 'Кофемашина, модель KM-2200' }),
        F('koebdato', 'Дата покупки', 'Date of purchase', 'date', { half: true }),
        F('fejl', 'Описание недостатка', 'Description of the defect', 'textarea', { placeholderDoc: 'Maskinen slukker spontant og varmer ikke op.', placeholderRu: 'Аппарат самопроизвольно выключается и не нагревается.' }),
        F('krav', 'Ваше требование', 'Your claim', 'select', {
          options: [
            'ombytning til en ny vare',
            'reparation af varen',
            'prisafslag',
            'fortrydelse og tilbagebetaling af købesummen',
          ],
        }),
      ]),
    ],
    body: [
      personHdr(['{{forretning_name}}']),
      { type: 'title', text: 'REKLAMATION OVER MANGELFUL VARE' },
      { type: 'paragraph', text: 'Emne: Reklamation over {{vare}}', noIndent: true },
      { type: 'paragraph', text: 'Kære {{forretning_name}},', noIndent: true },
      { type: 'paragraph', text: 'Jeg har købt {{vare}} hos jer den {{koebdato}}. Varen har følgende fejl: {{fejl}}.', justify: true },
      { type: 'paragraph', text: 'Fejlen er opstået inden for reklamationsfristen. Ved forbrugerkøb har jeg efter købeloven § 22 ret til at reklamere i op til 2 år efter modtagelsen, og manglen antages som udgangspunkt at have eksisteret ved leveringen.', justify: true },
      { type: 'paragraph', text: 'Jeg kræver derfor følgende: {{krav}}. Svar ønskes inden 14 dage fra brevets dato.', justify: true },
      { type: 'paragraph', text: 'Udebliver svaret, vil reklamationen blive indgivet til Forbrugerklagenævnet og/eller sagen blive bragt med småsagsproces.', justify: true },
      { type: 'attachment', items: ['Kopi af købsbevis/ordre', 'Fotos af fejlen'], label: 'Bilag:' },
      dkSign(),
    ],
  },
  {
    slug: 'dk-claim-laan', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Требование о возврате долга (частный займ)',
    titleDoc: 'Krav om tilbagebetaling af lån', titleEn: 'Demand for repayment of a loan',
    descRu: 'Письменное требование к заёмщику вернуть долг: сумма, дата займа, срок возврата, предложение рассрочки и предупреждение об инкассо и суде.',
    descEn: 'Written demand to a borrower for repayment: amount, loan date, deadline, proposal of instalments and notice of debt collection and court action.',
    descDoc: 'Krav om tilbagebetaling af privat lån med angivelse af frist og varsling om inkasso.',
    refRu: 'Gældsbrevsloven (1955); Aftaleloven (1917) — lån og tilbagebetaling efter aftale',
    refEn: 'Promissory Notes Act (1955); Contracts Act (1917) — loan and repayment under the agreement',
    fields: [
      ...personFields([
        F('laantager_name', 'Имя должника', 'Debtor’s name', 'text', { half: true, placeholderDoc: 'Peter Laursen', placeholderRu: 'Питер Лаурсен' }),
        F('beloeb', 'Сумма долга, kr.', 'Loan amount (DKK)', 'number', { half: true, placeholderRu: '15 000', placeholderDoc: '15.000' }),
        F('laanedato', 'Дата займа', 'Date of the loan', 'date', { half: true }),
        F('frist', 'Согласованный срок возврата', 'Agreed repayment deadline', 'date', { half: true }),
      ]),
    ],
    body: [
      personHdr(['{{laantager_name}}']),
      { type: 'title', text: 'KRAV OM TILBAGEBETALING AF LÅN' },
      { type: 'paragraph', text: 'Emne: Krav om tilbagebetaling af lån', noIndent: true },
      { type: 'paragraph', text: 'Kære {{laantager_name}},', noIndent: true },
      { type: 'paragraph', text: 'I forbindelse med det lån på {{beloeb}} kr., som jeg udbetalte til jer den {{laanedato}}, mangler jeg fortsat at få beløbet tilbagebetalt.', justify: true },
      { type: 'paragraph', text: 'Lånet var efter aftalen forfaldent senest den {{frist}}. Jeg anmoder herved om, at beløbet på {{beloeb}} kr. tilbagebetales inden 14 dage fra brevets dato, eventuelt via en aftalt afdragsordning.', justify: true },
      { type: 'paragraph', text: 'Udebliver betalingen eller et forslag til ordning, vil kravet blive sendt til inkasso og/eller bragt for retten med småsagsproces, og renter og omkostninger vil komme til jeres foranstaltning.', justify: true },
      dkSign(),
    ],
  },
  {
    slug: 'dk-claim-depositum', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Требование о возврате залога (depositum)',
    titleDoc: 'Krav om tilbagebetaling af depositum', titleEn: 'Demand for return of the deposit',
    descRu: 'Требование к бывшему арендодателю вернуть залог после выселения. По Lejeloven § 74 залог не может превышать 3 месячные аренды и подлежит возврату после проверки квартиры.',
    descEn: 'Demand to a former landlord for return of the security deposit. Under § 74 of the Rent Act the deposit may not exceed three months’ rent and must be refunded after the inspection.',
    descDoc: 'Krav om tilbagebetaling af depositum efter fraflytning af lejemålet.',
    refRu: 'Lejeloven § 74 — depositum på højst 3 måneders husleje; tilbagebetaling ved fraflytning',
    refEn: 'Rent Act § 74 — security deposit capped at three months’ rent; refund upon vacating',
    fields: [
      ...personFields([
        F('udlejer_name', 'Имя арендодателя', 'Landlord’s name', 'text', { half: true, placeholderDoc: 'Boligselskabet Eksempel / Jens Jensen', placeholderRu: 'Йенс Йенсен (арендодатель)' }),
        F('lejemaal_address', 'Адрес квартиры', 'Rental address', 'text', { half: true, placeholderDoc: 'Vestergade 10, 3. tv., 8000 Aarhus C', placeholderRu: 'Вестергаде 10, 3. тв., 8000 Орхус C' }),
        F('udflytningsdato', 'Дата выселения', 'Date of vacating', 'date', { half: true }),
        F('depositum_beloeb', 'Сумма залога, kr.', 'Deposit amount (DKK)', 'number', { half: true, placeholderRu: '30 000', placeholderDoc: '30.000' }),
      ]),
    ],
    body: [
      personHdr(['{{udlejer_name}}']),
      { type: 'title', text: 'KRAV OM TILBAGEBETALING AF DEPOSITUM' },
      { type: 'paragraph', text: 'Emne: Tilbagebetaling af depositum, {{lejemaal_address}}', noIndent: true },
      { type: 'paragraph', text: 'Kære {{udlejer_name}},', noIndent: true },
      { type: 'paragraph', text: 'Jeg har fraflyttet lejemålet {{lejemaal_address}} pr. {{udflytningsdato}}. Depositum på {{depositum_beloeb}} kr. er fortsat ikke tilbagebetalt.', justify: true },
      { type: 'paragraph', text: 'Depositum skal efter lejeloven § 74 tilbagebetales, når lejemålet er bragt i afleveringsstand, og eventuelle krav er dokumenteret og faktureret. Jeg beder jer om at tilbagebetale beløbet inden 14 dage.', justify: true },
      { type: 'paragraph', text: 'Bed jer ligeledes om en skriftlig gennemgang af eventuelle krav med dokumentation og regnskab. Udebliver svaret, forbeholder jeg mig retten til at søge sagen bragt for Huslejenævnet og/eller med småsagsproces.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— Суд: упрощённое производство —————————————————————————
  {
    slug: 'dk-court-smasagsproces', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Заявление об упрощённом судопроизводстве (småsagsproces)',
    titleDoc: 'Begæring om småsagsproces', titleEn: 'Petition for simplified civil proceedings',
    descRu: 'Заявление в суд (byret) о возбуждении дела в порядке småsagsproces — упрощённой процедуры для требований до 100 000 крон (Retsplejeloven § 14 a).',
    descEn: 'Petition to the district court for simplified proceedings (småsagsproces) available for claims up to DKK 100,000 (§ 14 a of the Administration of Justice Act).',
    descDoc: 'Begæring om småsagsproces mod sagsøgte ved krav indtil 100.000 kr.',
    refRu: 'Retsplejeloven § 14 a — småsagsproces ved krav indtil 100.000 kr.',
    refEn: 'Administration of Justice Act § 14 a — simplified proceedings for claims up to DKK 100,000',
    fields: [
      F('court_name', 'Наименование суда (byret)', 'Court name', 'text', { half: true, placeholderDoc: 'Retten i Aarhus', placeholderRu: 'Суд Орхуса (Retten i Aarhus)' }),
      F('plaintiff_name', 'Истец (вы)', 'Plaintiff (you)', 'text', { half: true, placeholderDoc: 'Anna Holm Jensen', placeholderRu: 'Анна Хольм Йенсен' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff’s address', 'text', { half: true, placeholderDoc: 'Vestergade 10, 3. tv., 8000 Aarhus C', placeholderRu: 'Вестергаде 10, 3. тв., 8000 Орхус C' }),
      F('defendant_name', 'Имя ответчика', 'Defendant’s name', 'text', { half: true, placeholderDoc: 'Peter Laursen', placeholderRu: 'Питер Лаурсен' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant’s address', 'text', { half: true, placeholderDoc: 'Søndergade 5, 5000 Odense C', placeholderRu: 'Сёндергаде 5, 5000 Оденсе C' }),
      F('krav', 'Существо требования', 'Claim', 'textarea', { placeholderDoc: 'Tilbagebetaling af lån på 15.000 kr. med renter.', placeholderRu: 'Возврат займа 15 000 крон с процентами.' }),
      F('beloeb', 'Сумма требования, kr.', 'Claim amount (DKK)', 'number', { half: true, placeholderRu: '15 000', placeholderDoc: '15.000' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Til: {{court_name}}', '', 'Sagsøger: {{plaintiff_name}}', '{{plaintiff_address}}', '', 'Dato: {{date_today}}'] },
      { type: 'title', text: 'BEGÆRING OM SMÅSAGSPROCES' },
      { type: 'paragraph', text: 'Emne: Sagsøgning mod {{defendant_name}}', noIndent: true },
      { type: 'paragraph', text: 'Begæring om småsagsproces indgives herved mod sagsøgte {{defendant_name}}, {{defendant_address}}, i henhold til retsplejeloven § 14 a.', justify: true },
      { type: 'paragraph', text: 'Sagsøges følgende krav: {{krav}}. Kravet udgør i alt {{beloeb}} kr. samt eventuelt renter og omkostninger efter reglerne om småsagsproces.', justify: true },
      { type: 'paragraph', text: 'Jeg har forsøgt at løse uenigheden ved forudgående henvendelse til sagsøgte uden resultat. Beviser fremlægges på rettens anmodning.', justify: true },
      { type: 'attachment', items: ['Kopi af aftale og korrespondance', 'Kopi af betalingspåmindelse'], label: 'Bilag:' },
      dkSign('{{plaintiff_name}}'),
    ],
  },
  // ————————————————————————— Жалобы в инстанции —————————————————————————
  {
    slug: 'dk-gov-forbrugerklage', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в Forbrugerklagenævnet',
    titleDoc: 'Klage til Forbrugerklagenævnet', titleEn: 'Complaint to the Consumer Complaints Board',
    descRu: 'Жалоба в Совет по потребительским жалобам (Forbrugerklagenævnet), если компания отказала в рекламации. Подаётся в Nævnenes Hus (Виборг); уплачивается сагсгебю (~250 крон).',
    descEn: 'Complaint to the Consumer Complaints Board when the company has rejected a complaint. Filed with Nævnenes Hus in Viborg; a case fee (approx. DKK 250) applies.',
    descDoc: 'Klage til Forbrugerklagenævnet over en virksomhed, der har afvist en reklamation.',
    refRu: 'Forbrugerklagenævnloven — klage over virksomhed; sagsgebyr (fx 250 kr.)',
    refEn: 'Consumer Complaints Board Act — complaint against a business; case fee (e.g. DKK 250)',
    fields: [
      ...personFields([
        F('virksomhed_name', 'Название компании', 'Business name', 'text', { half: true, placeholderDoc: 'Butikken Eksempel ApS', placeholderRu: '«Бутиккен Эксампел АпС»' }),
        F('reklamedato', 'Дата отклонённой рекламации', 'Date of the rejected complaint', 'date', { half: true }),
        F('sagsemne', 'Суть спора', 'Subject of the dispute', 'text', { placeholderDoc: 'Reklamation over køkkenmaskine med fejl', placeholderRu: 'Рекламация на кухонный комбайн с недостатком' }),
      ]),
    ],
    body: [
      personHdr(['Forbrugerklagenævnet', 'Nævnenes Hus', 'Toldboden 2', '8800 Viborg']),
      { type: 'title', text: 'KLAGE TIL FORBRUGERKLAGENÆVNET' },
      { type: 'paragraph', text: 'Emne: Klage over {{virksomhed_name}}', noIndent: true },
      { type: 'paragraph', text: 'Kære Forbrugerklagenævnet,', noIndent: true },
      { type: 'paragraph', text: 'Jeg indgiver herved klage over {{virksomhed_name}}, som har afvist min reklamation af {{reklamedato}}. Sagen vedrører {{sagsemne}}.', justify: true },
      { type: 'paragraph', text: 'Jeg har forsøgt at få sagen løst direkte med virksomheden uden resultat. Klagen indgives efter reglerne om Forbrugerklagenævnet, og jeg er indforstået med det tilknyttede sagsgebyr.', justify: true },
      { type: 'paragraph', text: 'Jeg er bekendt med, at nævnet behandler sager om varekøb og tjenesteydelser, hvor kravet ikke overstiger den til enhver tid gældende grænse.', justify: true },
      { type: 'attachment', items: ['Kopi af reklamation og virksomhedens svar', 'Købsbevis og dokumentation for fejlen'], label: 'Bilag:' },
      dkSign(),
    ],
  },
  {
    slug: 'dk-gov-datatilsynet', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в Datatilsynet (защита данных)',
    titleDoc: 'Klage til Datatilsynet', titleEn: 'Complaint to the Data Protection Agency',
    descRu: 'Жалоба в Datatilsynet на обработку персональных данных компанией или органом — право по GDPR ст. 77 и databeskyttelsesloven.',
    descEn: 'Complaint to the Danish Data Protection Agency about a company’s or authority’s processing of personal data — right under GDPR art. 77 and the Data Protection Act.',
    descDoc: 'Klage til Datatilsynet over behandling af personoplysninger i strid med GDPR.',
    refRu: 'Databeskyttelsesloven og GDPR art. 77 — ret til at klage til tilsynsmyndigheden',
    refEn: 'Danish Data Protection Act and GDPR art. 77 — right to lodge a complaint with the supervisory authority',
    fields: [
      ...personFields([
        F('virksomhed_name', 'Кто обработал данные', 'Data controller', 'text', { half: true, placeholderDoc: 'Eksempel ApS / Aarhus Kommune', placeholderRu: '«Эксампел АпС» / Коммуна Орхус' }),
        F('haendelsesdato', 'Дата инцидента', 'Date of the incident', 'date', { half: true }),
        F('beskrivelse', 'Описание нарушения', 'Description of the breach', 'textarea', { placeholderDoc: 'Virksomheden har videresolgt mine oplysninger uden samtykke og har ikke besvaret min henvendelse.', placeholderRu: 'Компания передала мои данные третьим лицам без согласия и не ответила на обращение.' }),
      ]),
    ],
    body: [
      personHdr(['Datatilsynet', 'Carl Jacobsens Vej 35', '2500 Valby']),
      { type: 'title', text: 'KLAGE TIL DATATILSYNET' },
      { type: 'paragraph', text: 'Emne: Klage over behandling af personoplysninger', noIndent: true },
      { type: 'paragraph', text: 'Kære Datatilsynet,', noIndent: true },
      { type: 'paragraph', text: 'Jeg klager herved over {{virksomhed_name}}s behandling af mine personoplysninger. Den {{haendelsesdato}} skete følgende: {{beskrivelse}}.', justify: true },
      { type: 'paragraph', text: 'Jeg har først henvendt mig til virksomheden, uden at sagen er blevet løst. Klagen indgives i henhold til databeskyttelsesloven og GDPR artikel 77 om ret til at klage til tilsynsmyndigheden.', justify: true },
      { type: 'paragraph', text: 'Jeg anmoder om, at tilsynet undersøger sagen og i givet fald påbyder virksomheden at rette efter reglerne. Mine kontaktoplysninger fremgår af brevets hoved.', justify: true },
      dkSign(),
    ],
  },
  {
    slug: 'dk-gov-ombudsmand', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в Парламентского омбудсмена',
    titleDoc: 'Klage til Folketingets Ombudsmand', titleEn: 'Complaint to the Parliamentary Ombudsman',
    descRu: 'Жалоба в Folketingets Ombudsmand на решение или порядок рассмотрения дела государственным/муниципальным органом — надзор за надлежащей практикой управления (god forvaltningsskik).',
    descEn: 'Complaint to the Danish Parliamentary Ombudsman about a public authority’s decision or case handling — supervision of good administrative practice.',
    descDoc: 'Klage til Folketingets Ombudsmand over en myndigheds afgørelse eller sagsbehandling.',
    refRu: 'Ombudsmandsloven — Ombudsmanden fører tilsyn med offentlig forvaltning',
    refEn: 'Ombudsman Act — the Ombudsman supervises public administration',
    fields: [
      ...personFields([
        F('myndighed_name', 'Наименование органа', 'Authority name', 'text', { half: true, placeholderDoc: 'Jobcenter Aarhus', placeholderRu: 'Джобцентр Орхуса (Jobcenter Aarhus)' }),
        F('afgoerelsesdato', 'Дата решения', 'Date of the decision', 'date', { half: true }),
        F('journalnummer', 'Номер дела (журнал)', 'Case number', 'text', { half: true, placeholderDoc: '2026-123456', placeholderRu: '2026-123456' }),
        F('beskrivelse', 'Суть жалобы', 'Subject of the complaint', 'textarea', { placeholderDoc: 'Myndigheden har ikke besvaret min sag inden for rimelig tid og har afvist min ansøgning uden begrundelse.', placeholderRu: 'Орган не ответил на моё дело в разумный срок и отказал в заявлении без мотивировки.' }),
      ]),
    ],
    body: [
      personHdr(['Folketingets Ombudsmand', 'Strandgade 82', '1401 København K']),
      { type: 'title', text: 'KLAGE TIL FOLKETINGETS OMBUDSMAND' },
      { type: 'paragraph', text: 'Emne: Klage over {{myndighed_name}}', noIndent: true },
      { type: 'paragraph', text: 'Kære Ombudsmand,', noIndent: true },
      { type: 'paragraph', text: 'Jeg klager herved over {{myndighed_name}}s afgørelse af {{afgoerelsesdato}} (sags-/journalnummer: {{journalnummer}}). Baggrunden er: {{beskrivelse}}.', justify: true },
      { type: 'paragraph', text: 'Jeg mener, at myndighedens behandling kan være i strid med god forvaltningsskik og gældende regler. Jeg har forsøgt at få sagen ændret ved henvendelse til myndigheden uden resultat.', justify: true },
      { type: 'paragraph', text: 'Jeg anmoder om, at Ombudsmanden behandler sagen og eventuelt indstiller den til genbehandling hos myndigheden.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— Налоги —————————————————————————
  {
    slug: 'dk-tax-skatteklage', kind: 'STANDARD', categorySlug: 'tax-docs',
    titleRu: 'Жалоба в Skattestyrelsen (налоги)',
    titleDoc: 'Klage til Skattestyrelsen', titleEn: 'Appeal to the Danish Tax Agency',
    descRu: 'Жалоба в Skattestyrelsen на решение коммуны по налогам: срок — 6 недель с даты решения (Skattekontrolloven § 29); жалоба направляется через коммуну.',
    descEn: 'Appeal to the Danish Tax Agency against the municipality’s tax decision: six-week deadline (§ 29 of the Tax Control Act); submitted via the municipality.',
    descDoc: 'Klage til Skattestyrelsen over en skattemæssig afgørelse, sendt gennem kommunen.',
    refRu: 'Skattekontrolloven § 29 — klagefrist: 6 uger efter afgørelsen',
    refEn: 'Tax Control Act § 29 — appeal deadline: six weeks after the decision',
    fields: [
      ...personFields([
        F('cpr_nr', 'CPR-номер', 'CPR number', 'text', { half: true, placeholderDoc: '010180-1234', placeholderRu: '010180-1234' }),
        F('skatteaar', 'Налоговый год', 'Tax year', 'number', { half: true, placeholderRu: '2026', placeholderDoc: '2026' }),
        F('afgoerelsesdato', 'Дата решения', 'Date of the decision', 'date', { half: true }),
        F('begrundelse', 'Основание жалобы', 'Grounds for the appeal', 'textarea', { placeholderDoc: 'Kommunen har ikke medregnet mine fradrag for færdsel mellem hjem og arbejde.', placeholderRu: 'Коммуна не учла мои вычеты на дорогу между домом и работой.' }),
      ]),
    ],
    body: [
      personHdr(['Skattestyrelsen', 'Østbanegade 123', '2100 København Ø']),
      { type: 'title', text: 'KLAGE TIL SKATTESTYRELSEN' },
      { type: 'paragraph', text: 'Emne: Klage over skattemæssig afgørelse for {{skatteaar}}', noIndent: true },
      { type: 'paragraph', text: 'Kære Skattestyrelsen,', noIndent: true },
      { type: 'paragraph', text: 'Jeg klager herved over kommunens skattemæssige afgørelse af {{afgoerelsesdato}} for skatteåret {{skatteaar}} (CPR-nr.: {{cpr_nr}}). Klagen går på: {{begrundelse}}.', justify: true },
      { type: 'paragraph', text: 'Klagen indgives inden for 6-ugers fristen i skattekontrolloven § 29 og bedes sendt gennem kommunen til Skattestyrelsen.', justify: true },
      { type: 'paragraph', text: 'Jeg anmoder om, at afgørelsen omgøres, og at eventuel for meget betalt skat tilbagebetales. Supplerende oplysninger udsendes gerne efter anmodning.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— Банк —————————————————————————
  {
    slug: 'dk-bank-klage', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Жалоба в банк',
    titleDoc: 'Klage til banken', titleEn: 'Complaint to the bank',
    descRu: 'Жалоба в банк: ошибочный платёж, несанкционированная транзакция, проценты/комиссии, отклонённый платёж. При отказе банка — жалоба в Finansklagenævnet.',
    descEn: 'Complaint to the bank: erroneous payment, unauthorised transaction, interest or fees, declined payment. If the bank rejects it — complaint to the Financial Complaints Board.',
    descDoc: 'Klage til banken over en post på kontoen eller bankens behandling af sagen.',
    refRu: 'Pengeinstitutloven og betalingsloven — klage til banken; eventuel klage til Finansklagenævnet',
    refEn: 'Financial Business Act and Payments Act — bank complaint; possible appeal to the Financial Complaints Board',
    fields: [
      ...personFields([
        F('bank_name', 'Название банка', 'Bank name', 'text', { half: true, placeholderDoc: 'Danske Bank', placeholderRu: '«Данске Банк»' }),
        F('kontonummer', 'Номер счёта', 'Account number', 'text', { half: true, placeholderDoc: 'Reg. 1234 konto 1234567890', placeholderRu: 'Рег. 1234 счёт 1234567890' }),
        F('sagsemne', 'Предмет жалобы', 'Subject of the complaint', 'select', {
          options: [
            'en fejlbetaling eller forkert beløb',
            'en uautoriseret transaktion',
            'beregning af renter og gebyrer',
            'afvisning af en betaling',
          ],
        }),
        F('beloeb', 'Оспариваемая сумма, kr.', 'Disputed amount (DKK)', 'number', { half: true, placeholderRu: '2 500', placeholderDoc: '2.500' }),
        F('transaktionsdato', 'Дата транзакции', 'Transaction date', 'date', { half: true }),
        F('beskrivelse', 'Описание ситуации', 'Description', 'textarea', { placeholderDoc: 'Betalingen til butikken blev trukket to gange den samme dag.', placeholderRu: 'Платёж магазину был списан дважды в один день.' }),
      ]),
    ],
    body: [
      personHdr(['{{bank_name}}', 'Kundeservice']),
      { type: 'title', text: 'KLAGE TIL BANKEN' },
      { type: 'paragraph', text: 'Emne: Klage over {{sagsemne}}', noIndent: true },
      { type: 'paragraph', text: 'Kære {{bank_name}},', noIndent: true },
      { type: 'paragraph', text: 'Jeg klager herved over {{sagsemne}} på min konto {{kontonummer}}. Beløbet er {{beloeb}} kr., og transaktionen fandt sted den {{transaktionsdato}}.', justify: true },
      { type: 'paragraph', text: 'Nærmere om forløbet: {{beskrivelse}}.', justify: true },
      { type: 'paragraph', text: 'Jeg anmoder om, at banken undersøger sagen og retter forholdet inden 14 dage. Udebliver et tilfredsstillende svar, klager jeg til Finansklagenævnet.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— Соцподдержка —————————————————————————
  {
    slug: 'dk-work-sygedagpenge', kind: 'STANDARD', categorySlug: 'soc-benefits',
    titleRu: 'Заявка на больничное пособие (sygedagpenge)',
    titleDoc: 'Anmodning om sygedagpenge', titleEn: 'Sickness benefit application',
    descRu: 'Заявка в коммуну (Jobcenter) на sygedagpenge: работодатель платит первые 30 дней (arbejdsgiverperioden), далее пособие выплачивает коммуна по Sygedagpengeloven.',
    descEn: 'Application to the municipality (Jobcenter) for sickness benefit: the employer covers the first 30 days (employer period), then the municipality pays under the Sickness Benefits Act.',
    descDoc: 'Anmodning til kommunen om sygedagpenge efter udløbet af arbejdsgiverperioden.',
    refRu: 'Sygedagpengeloven — sygedagpenge efter arbejdsgiverperioden (30 dage)',
    refEn: 'Sickness Benefits Act — sickness benefit after the 30-day employer period',
    fields: [
      ...personFields([
        F('kommune_name', 'Коммуна', 'Municipality', 'text', { half: true, placeholderDoc: 'Aarhus Kommune', placeholderRu: 'Коммуна Орхус' }),
        F('cpr_nr', 'CPR-номер', 'CPR number', 'text', { half: true, placeholderDoc: '010180-1234', placeholderRu: '010180-1234' }),
        F('arbejdsgiver_name', 'Работодатель', 'Employer', 'text', { half: true, placeholderDoc: 'Møllers Maskinværksted A/S', placeholderRu: '«Мёллерс Машинверкстед А/С»' }),
        F('fraavaersdato', 'Первый день больничного', 'First day of sickness', 'date', { half: true }),
      ]),
    ],
    body: [
      personHdr(['{{kommune_name}}', 'Jobcenteret']),
      { type: 'title', text: 'ANMODNING OM SYGEDAGPENGE' },
      { type: 'paragraph', text: 'Emne: Anmodning om sygedagpenge', noIndent: true },
      { type: 'paragraph', text: 'Kære sagsbehandler,', noIndent: true },
      { type: 'paragraph', text: 'Jeg har været sygemeldt siden {{fraavaersdato}} og er ansat hos {{arbejdsgiver_name}}. Mine oplysninger: {{applicant_name}}, CPR-nr. {{cpr_nr}}.', justify: true },
      { type: 'paragraph', text: 'Arbejdsgiverperioden på 30 dage er udløbet, og jeg er fortsat ude af stand til at arbejde på grund af sygdom. Jeg anmoder herved om at få sygedagpenge udbetalt af kommunen i henhold til sygedagpengeloven.', justify: true },
      { type: 'paragraph', text: 'Jeg er til rådighed for kommunens opfølgning og kan nås på telefon {{applicant_phone}}. Lægeerklæring og sygemelding følger som bilag efter anmodning.', justify: true },
      dkSign(),
    ],
  },
  {
    slug: 'dk-soc-anke-kommune', kind: 'STANDARD', categorySlug: 'soc-benefits',
    titleRu: 'Жалоба на решение коммуны (Ankestyrelsen)',
    titleDoc: 'Klage over kommunens afgørelse', titleEn: 'Complaint against a municipal decision',
    descRu: 'Жалоба на решение коммуны (Jobcenter, пособия и т.п.), направляемая через коммуну в Ankestyrelsen. Срок — 4 недели с даты решения; коммуна обязана приложить материалы дела.',
    descEn: 'Complaint against a municipal decision (Jobcenter, benefits etc.), submitted via the municipality to Ankestyrelsen. Four-week deadline; the municipality must attach the case file.',
    descDoc: 'Klage over kommunens afgørelse, som sendes gennem kommunen til Ankestyrelsen.',
    refRu: 'Ankestyrelsen — klage over kommunens afgørelse: frist 4 uger',
    refEn: 'Ankestyrelsen (Board of Appeal) — complaint against municipal decisions: four-week deadline',
    fields: [
      ...personFields([
        F('kommune_name', 'Коммуна', 'Municipality', 'text', { half: true, placeholderDoc: 'Aarhus Kommune', placeholderRu: 'Коммуна Орхус' }),
        F('journalnummer', 'Номер дела (журнал)', 'Case number', 'text', { half: true, placeholderDoc: '2026-654321', placeholderRu: '2026-654321' }),
        F('afgoerelsesdato', 'Дата решения', 'Date of the decision', 'date', { half: true }),
        F('begrundelse', 'Основание жалобы', 'Grounds for the complaint', 'textarea', { placeholderDoc: 'Kommunen har afvist min ansøgning uden at vurdere mine oplysninger om arbejdsevne.', placeholderRu: 'Коммуна отклонила заявление, не оценив мои данные о трудоспособности.' }),
      ]),
    ],
    body: [
      personHdr(['{{kommune_name}}', 'Jobcenteret']),
      { type: 'title', text: 'KLAGE OVER KOMMUNENS AFGØRELSE' },
      { type: 'paragraph', text: 'Emne: Klage over afgørelse af {{afgoerelsesdato}}', noIndent: true },
      { type: 'paragraph', text: 'Kære sagsbehandler,', noIndent: true },
      { type: 'paragraph', text: 'Jeg klager herved over kommunens afgørelse af {{afgoerelsesdato}} i sagen med journalnummer {{journalnummer}}. Begrundelsen er: {{begrundelse}}.', justify: true },
      { type: 'paragraph', text: 'Klagen indgives inden for 4-ugers fristen og sendes gennem kommunen til Ankestyrelsen. Jeg beder derfor om, at kommunen sender klagen videre sammen med sagens aktstykker.', justify: true },
      { type: 'paragraph', text: 'Jeg beder samtidig om indsigt i sagen og om bekræftelse på, at klagen er sendt videre inden for fristen.', justify: true },
      dkSign(),
    ],
  },
  {
    slug: 'dk-soc-folkepension', kind: 'STANDARD', categorySlug: 'soc-pension',
    titleRu: 'Заявление на народную пенсию (folkepension)',
    titleDoc: 'Ansøgning om folkepension', titleEn: 'Old-age pension (folkepension) application',
    descRu: 'Заявление на folkepension — государственную пенсию по возрасту (Lov om social pension). Подаётся через Udbetaling Danmark / borger.dk; рекомендуется за 3 месяца до пенсионного возраста.',
    descEn: 'Application for folkepension, the Danish statutory old-age pension (Social Pensions Act). Filed via Udbetaling Danmark / borger.dk; recommended about three months before pension age.',
    descDoc: 'Ansøgning om folkepension efter lov om social pension.',
    refRu: 'Lov om social pension — folkepension fra folkepensionsalderen',
    refEn: 'Social Pensions Act — old-age pension from the statutory pension age',
    fields: [
      ...personFields([
        F('cpr_nr', 'CPR-номер', 'CPR number', 'text', { half: true, placeholderDoc: '010180-1234', placeholderRu: '010180-1234' }),
        F('startdato', 'Желаемая дата начала', 'Requested start date', 'date', { half: true }),
      ]),
    ],
    body: [
      personHdr(['Udbetaling Danmark']),
      { type: 'title', text: 'ANSØGNING OM FOLKEPENSION' },
      { type: 'paragraph', text: 'Emne: Ansøgning om folkepension', noIndent: true },
      { type: 'paragraph', text: 'Kære sagsbehandler,', noIndent: true },
      { type: 'paragraph', text: 'Jeg anmoder herved om folkepension fra og med {{startdato}}. Mine oplysninger: {{applicant_name}}, CPR-nr. {{cpr_nr}}, {{applicant_address}}.', justify: true },
      { type: 'paragraph', text: 'Folkepension tilskrives efter lov om social pension fra folkepensionsalderen. Ansøgningen indgives gerne senest 3 måneder før den ønskede udbetalingsdato.', justify: true },
      { type: 'paragraph', text: 'Jeg oplyser gerne supplerende oplysninger om indtægter, formue og tidligere ophold i udlandet efter anmodning.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— Здравоохранение —————————————————————————
  {
    slug: 'dk-med-klage-behandling', kind: 'STANDARD', categorySlug: 'med-appeals',
    titleRu: 'Жалоба на лечение (patientklagenævn)',
    titleDoc: 'Klage over behandling', titleEn: 'Complaint about medical treatment',
    descRu: 'Жалоба в Patientklagenævnet на лечение: срок — 2 года с момента, когда вы узнали о последствиях (Sundhedsloven §§ 206 ff.). Жалоба оценивается с участием эксперта.',
    descEn: 'Complaint to the Patient Complaints Board about treatment: two-year deadline from when the consequences became known (Health Act §§ 206 ff.); assessed with expert involvement.',
    descDoc: 'Klage til patientklagenævnet over behandling, jf. sundhedsloven §§ 206 ff.',
    refRu: 'Sundhedsloven §§ 206 ff. — patientklagenævn; klagefrist 2 år',
    refEn: 'Health Act §§ 206 ff. — Patient Complaints Board; two-year complaint deadline',
    fields: [
      ...personFields([
        F('sygehus_name', 'Больница/врач', 'Hospital or doctor', 'text', { half: true, placeholderDoc: 'Aarhus Universitetshospital', placeholderRu: 'Госпиталь Орхусского университета' }),
        F('behandlingsdato', 'Дата лечения', 'Date of treatment', 'date', { half: true }),
        F('begrundelse', 'Суть жалобы', 'Subject of the complaint', 'textarea', { placeholderDoc: 'Behandlingen blev udført uden tilstrækkelig information om risici, og opfølgningen udeblev.', placeholderRu: 'Лечение проведено без достаточной информации о рисках, последующее наблюдение не состоялось.' }),
      ]),
    ],
    body: [
      personHdr(['Patientklagenævnet']),
      { type: 'title', text: 'KLAGE OVER BEHANDLING' },
      { type: 'paragraph', text: 'Emne: Klage over behandling den {{behandlingsdato}}', noIndent: true },
      { type: 'paragraph', text: 'Kære patientklagenævn,', noIndent: true },
      { type: 'paragraph', text: 'Jeg klager herved over min behandling på {{sygehus_name}} den {{behandlingsdato}}. Klagen vedrører følgende: {{begrundelse}}.', justify: true },
      { type: 'paragraph', text: 'Klagen indgives inden for 2-års fristen i sundhedsloven §§ 206 ff. om klager over sundhedsvæsenet, og jeg beder om, at sagen vurderes af en fagkyndig.', justify: true },
      { type: 'paragraph', text: 'Jeg anmoder samtidig om indsigt i min journal for behandlingsforløbet og er indstillet på at medvirke ved et eventuelt forliksmøde.', justify: true },
      dkSign(),
    ],
  },
  {
    slug: 'dk-med-journal', kind: 'STANDARD', categorySlug: 'med-records',
    titleRu: 'Запрос доступа к медицинской карте (journal)',
    titleDoc: 'Anmodning om indblik i journal', titleEn: 'Request for access to the medical record',
    descRu: 'Запрос на доступ к медицинской карте и её копию: право пациента по Sundhedsloven § 39; ответ должен быть дан без неоправданных задержек.',
    descEn: 'Request for access to and a copy of the medical record — patient right under § 39 of the Health Act; a reply must be given without undue delay.',
    descDoc: 'Anmodning om indblik i og kopi af journal efter sundhedsloven § 39.',
    refRu: 'Sundhedsloven § 39 — patientens ret til indsigt i journalen',
    refEn: 'Health Act § 39 — patient’s right of access to the medical record',
    fields: [
      ...personFields([
        F('klinik_name', 'Больница/клиника', 'Hospital or clinic', 'text', { half: true, placeholderDoc: 'Aarhus Universitetshospital', placeholderRu: 'Госпиталь Орхусского университета' }),
        F('cpr_nr', 'CPR-номер', 'CPR number', 'text', { half: true, placeholderDoc: '010180-1234', placeholderRu: '010180-1234' }),
        F('periode', 'Период (необязательно)', 'Period (optional)', 'text', { required: false, half: true, placeholderDoc: 'januar–marts 2026', placeholderRu: 'январь–март 2026' }),
      ]),
    ],
    body: [
      personHdr(['{{klinik_name}}', 'Journalafdelingen']),
      { type: 'title', text: 'ANMODNING OM INDBLIK I JOURNAL' },
      { type: 'paragraph', text: 'Emne: Indblik i journal', noIndent: true },
      { type: 'paragraph', text: 'Kære journalafdeling,', noIndent: true },
      { type: 'paragraph', text: 'Jeg anmoder herved om indblik i og kopi af min journal hos jer. Mine oplysninger: {{applicant_name}}, CPR-nr. {{cpr_nr}}. Journalen vedrører {{periode}}.', justify: true },
      { type: 'paragraph', text: 'Anmodningen støttes af sundhedsloven § 39 om patientens ret til indsigt i journalen. Jeg beder om en kopi af journalen med eventuelle noter og prøvesvar.', justify: true },
      { type: 'paragraph', text: 'Journalen kan udsendes digitalt eller fysisk til min adresse. Kontakt mig på telefon {{applicant_phone}}, hvis der er spørgsmål.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— Образование —————————————————————————
  {
    slug: 'dk-edu-skoleskift', kind: 'STANDARD', categorySlug: 'edu-docs',
    titleRu: 'Заявление о переводе ребёнка в другую школу',
    titleDoc: 'Ansøgning om skoleskift', titleEn: 'School transfer application',
    descRu: 'Заявление в коммуну (Børne- og Skoleforvaltning) о переводе ребёнка в другую школу (skoleskift/skoletilvalg). Решение принимает kommunalbestyrelsen по Folkeskoleloven.',
    descEn: 'Application to the municipality (Children and School Administration) to transfer the child to another school. The municipal council decides under the Folkeskole Act.',
    descDoc: 'Ansøgning til kommunen om skoleskift efter folkeskoleloven.',
    refRu: 'Folkeskoleloven — kommunalbestyrelsen beslutter om skoleskift/skoletilvalg',
    refEn: 'Folkeskole Act — the municipal council decides on school transfers',
    fields: [
      ...personFields([
        F('kommune_name', 'Коммуна', 'Municipality', 'text', { half: true, placeholderDoc: 'Aarhus Kommune', placeholderRu: 'Коммуна Орхус' }),
        F('barn_name', 'Имя ребёнка', 'Child’s name', 'text', { half: true, placeholderDoc: 'Emil Holm Jensen', placeholderRu: 'Эмиль Хольм Йенсен' }),
        F('barn_cpr', 'CPR-номер ребёнка', 'Child’s CPR number', 'text', { half: true, placeholderDoc: '120614-5678', placeholderRu: '120614-5678' }),
        F('nuvaerende_skole', 'Текущая школа', 'Current school', 'text', { half: true, placeholderDoc: 'Skovbakkeskolen', placeholderRu: 'Сковбаккешколен' }),
        F('oensket_skole', 'Желаемая школа', 'Requested school', 'text', { half: true, placeholderDoc: 'Viby Skole', placeholderRu: 'Вибю Сколе' }),
        F('begrundelse', 'Основание перевода', 'Reason for the transfer', 'textarea', { placeholderDoc: 'Skoleskiftet skyldes flytning og kortere skolevej for barnet.', placeholderRu: 'Перевод связан с переездом и более короткой дорогой в школу.' }),
      ]),
    ],
    body: [
      personHdr(['{{kommune_name}}', 'Børne- og Skoleforvaltningen']),
      { type: 'title', text: 'ANSØGNING OM SKOLESKIFT' },
      { type: 'paragraph', text: 'Emne: Skoleskift for {{barn_name}}', noIndent: true },
      { type: 'paragraph', text: 'Kære sagsbehandler,', noIndent: true },
      { type: 'paragraph', text: 'Jeg anmoder herved om skoleskift for mit barn {{barn_name}} (CPR-nr. {{barn_cpr}}) fra {{nuvaerende_skole}} til {{oensket_skole}}.', justify: true },
      { type: 'paragraph', text: 'Begrundelsen for ansøgningen er: {{begrundelse}}.', justify: true },
      { type: 'paragraph', text: 'Ansøgningen indgives i henhold til folkeskoleloven, hvor kommunalbestyrelsen beslutter om skoleskift. Jeg beder om svar, så skiftet kan ske efter skoleplanens rammer, og stiller mig til rådighed for en samtale.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— Почта —————————————————————————
  {
    slug: 'dk-post-postnord', kind: 'STANDARD', categorySlug: 'post-claims',
    titleRu: 'Рекламация PostNord (утраченное отправление)',
    titleDoc: 'Reklamation til PostNord (tapt forsendelse)', titleEn: 'Claim to PostNord for a lost item',
    descRu: 'Рекламация в PostNord об утраченном отправлении: трек-номер, дата отправки, содержимое и стоимость; возмещение по правилам почтовой службы (Lov om posttjenester).',
    descEn: 'Claim to PostNord for a lost mail item: tracking number, dispatch date, contents and value; compensation under the postal rules (Postal Services Act).',
    descDoc: 'Reklamation til PostNord over en forsendelse, der er tapt eller ikke leveret.',
    refRu: 'Lov om posttjenester — universalposttjeneste og erstatning for tapt forsendelse',
    refEn: 'Postal Services Act — universal postal service and compensation for lost items',
    fields: [
      ...personFields([
        F('tracking_nr', 'Трек-номер', 'Tracking number', 'text', { half: true, placeholderDoc: 'UG123456789DK', placeholderRu: 'UG123456789DK' }),
        F('afsendelsesdato', 'Дата отправки', 'Dispatch date', 'date', { half: true }),
        F('indhold', 'Содержимое и стоимость', 'Contents and value', 'text', { placeholderDoc: 'Bøger og tøj, ca. 800 kr.', placeholderRu: 'Книги и одежда, ок. 800 крон' }),
      ]),
    ],
    body: [
      personHdr(['PostNord Danmark', 'Kundeservice']),
      { type: 'title', text: 'REKLAMATION TIL POSTNORD' },
      { type: 'paragraph', text: 'Emne: Tapt forsendelse, sporingsnummer {{tracking_nr}}', noIndent: true },
      { type: 'paragraph', text: 'Kære PostNord,', noIndent: true },
      { type: 'paragraph', text: 'Jeg reklamerer herved over en forsendelse med sporingsnummer {{tracking_nr}}, afsendt den {{afsendelsesdato}}. Indholdet var {{indhold}}.', justify: true },
      { type: 'paragraph', text: 'Forsendelsen er ikke leveret og er af sporingsdataene at dømme tapt. Jeg anmoder om en udredning af forløbet samt erstatning i henhold til reglerne om posttjenester.', justify: true },
      { type: 'paragraph', text: 'Jeg beder om svar inden 14 dage. Udebliver svaret, forbeholder jeg mig retten til at klage til Post- og Telestyrelsen.', justify: true },
      dkSign(),
    ],
  },
  // ————————————————————————— ЖКУ/соседи/быт —————————————————————————
  {
    slug: 'dk-util-udlejer-reparation', kind: 'STANDARD', categorySlug: 'util-management',
    titleRu: 'Требование к арендодателю: ремонт',
    titleDoc: 'Krav til udlejer: reparationer', titleEn: 'Demand to the landlord: repairs',
    descRu: 'Требование к арендодателю устранить неисправности: описание повреждений, срок исполнения и предупреждение о Huslejenævnet и снижении аренды.',
    descEn: 'Demand to the landlord to carry out repairs: description of defects, deadline and notice of the Rent Tribunal and rent reduction.',
    descDoc: 'Krav til udlejer om reparationer og vedligeholdelse af lejemålet.',
    refRu: 'Lejeloven § 174 — udlejerens vedligeholdelsespligt',
    refEn: 'Rent Act § 174 — the landlord’s maintenance obligation',
    fields: [
      ...personFields([
        F('udlejer_name', 'Имя арендодателя', 'Landlord’s name', 'text', { half: true, placeholderDoc: 'Jens Jensen / Boligselskabet Eksempel', placeholderRu: 'Йенс Йенсен (арендодатель)' }),
        F('lejemaal_address', 'Адрес квартиры', 'Rental address', 'text', { half: true, placeholderDoc: 'Vestergade 10, 3. tv., 8000 Aarhus C', placeholderRu: 'Вестергаде 10, 3. тв., 8000 Орхус C' }),
        F('fejl', 'Неисправности', 'Defects', 'textarea', { placeholderDoc: 'Fugtskade i soveværelset, defekt radiator og utæt vandhane i køkkenet.', placeholderRu: 'Следы сырости в спальне, неисправный радиатор, протекающий кран на кухне.' }),
        F('frist', 'Срок исполнения', 'Deadline', 'date', { half: true }),
      ]),
    ],
    body: [
      personHdr(['{{udlejer_name}}']),
      { type: 'title', text: 'KRAV TIL UDLEJER: REPARATIONER' },
      { type: 'paragraph', text: 'Emne: Reparationer i lejemålet {{lejemaal_address}}', noIndent: true },
      { type: 'paragraph', text: 'Kære {{udlejer_name}},', noIndent: true },
      { type: 'paragraph', text: 'I lejemålet {{lejemaal_address}} er der følgende fejl og mangler, som kræver reparation: {{fejl}}.', justify: true },
      { type: 'paragraph', text: 'Udlejeren har efter lejeloven pligt til at stå for vedligeholdelse og reparationer, medmindre andet er aftalt. Jeg beder jer om at udbedre forholdene senest den {{frist}}.', justify: true },
      { type: 'paragraph', text: 'Udebliver reparationerne inden fristen, vil jeg søge sagen bragt for Huslejenævnet og/eller kræve huslejen nedsat, indtil forholdene er rettet.', justify: true },
      dkSign(),
    ],
  },
  {
    slug: 'dk-util-neighbors-noise', kind: 'STANDARD', categorySlug: 'util-neighbors',
    titleRu: 'Жалоба на шум от соседей (в коммуну)',
    titleDoc: 'Klage over nabostøj', titleEn: 'Complaint about noise from neighbours',
    descRu: 'Жалоба в коммуну (Miljøafdeling) на шум от соседей: описание шума и времени, история обращений. По Miljøbeskyttelsesloven §§ 3 и 35 коммуна может запретить недопустимый шум.',
    descEn: 'Complaint to the municipality (Environment Department) about noise from neighbours: description, timing and prior attempts. Under §§ 3 and 35 of the Environmental Protection Act the municipality may prohibit unacceptable noise.',
    descDoc: 'Klage til kommunen over støjgener fra naboer efter miljøbeskyttelsesloven.',
    refRu: 'Miljøbeskyttelsesloven §§ 3 og 35 — kommunen kan påbyde/forbyde uacceptable støjgener',
    refEn: 'Environmental Protection Act §§ 3 and 35 — the municipality may order or prohibit unacceptable noise nuisance',
    fields: [
      ...personFields([
        F('kommune_name', 'Коммуна', 'Municipality', 'text', { half: true, placeholderDoc: 'Aarhus Kommune', placeholderRu: 'Коммуна Орхус' }),
        F('nabo_address', 'Адрес источника шума', 'Address of the noise source', 'text', { half: true, placeholderDoc: 'Vestergade 12, 1. tv.', placeholderRu: 'Вестергаде 12, 1. тв.' }),
        F('stoej_tider', 'Когда возникает шум', 'When does the noise occur', 'text', { half: true, placeholderDoc: 'Dagligt kl. 22–01, især i weekenden', placeholderRu: 'Ежедневно с 22 до 01, особенно по выходным' }),
        F('beskrivelse', 'Описание шума', 'Description of the noise', 'textarea', { placeholderDoc: 'Høj musik med kraftige baser, som kan høres i hele min bolig og forhindrer søvn.', placeholderRu: 'Громкая музыка с басами, слышно по всей квартире, мешает спать.' }),
      ]),
    ],
    body: [
      personHdr(['{{kommune_name}}', 'Miljøafdelingen']),
      { type: 'title', text: 'KLAGE OVER NABOSTØJ' },
      { type: 'paragraph', text: 'Emne: Støjgener fra {{nabo_address}}', noIndent: true },
      { type: 'paragraph', text: 'Kære miljøafdeling,', noIndent: true },
      { type: 'paragraph', text: 'Jeg klager herved over støjgener fra lejemålet {{nabo_address}}. Støjen opstår følgende tidspunkter: {{stoej_tider}}.', justify: true },
      { type: 'paragraph', text: 'Beskrivelse af generne: {{beskrivelse}}.', justify: true },
      { type: 'paragraph', text: 'Jeg har tidligere henvendt mig til naboen uden varig effekt. Jeg beder kommunen om at undersøge sagen og i givet fald efter miljøbeskyttelsesloven §§ 3 og 35 påbyde foranstaltninger eller forbyde støj, der genere naboer i strid med loven.', justify: true },
      { type: 'paragraph', text: 'Jeg er indstillet på at medvirke ved en eventuel støjmåling og kan dokumentere forløbet med dagbog og lydoptagelser.', justify: true },
      dkSign(),
    ],
  },
  {
    slug: 'dk-util-cpr-adresse', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Уведомление о переезде (CPR)',
    titleDoc: 'Anmeldelse af adresseændring (CPR)', titleEn: 'Change of address notification (CPR)',
    descRu: 'Уведомление коммуне (Folkeregister) о смене адреса в CPR-регистре: обязанность заявить в течение 5 дней после переезда (CPR-loven), включая перевыпуск санитарной карты.',
    descEn: 'Notification to the municipality (National Register) of a change of address in the CPR register: must be reported within five days of moving (CPR Act), incl. a new health card.',
    descDoc: 'Anmeldelse af flytning/adresseændring til folkeregisteret (CPR).',
    refRu: 'CPR-loven — adresseændring anmeldes senest 5 dage efter flytning',
    refEn: 'CPR Act — a change of address must be reported within five days of moving',
    fields: [
      ...personFields([
        F('kommune_name', 'Коммуна', 'Municipality', 'text', { half: true, placeholderDoc: 'Aarhus Kommune', placeholderRu: 'Коммуна Орхус' }),
        F('cpr_nr', 'CPR-номер', 'CPR number', 'text', { half: true, placeholderDoc: '010180-1234', placeholderRu: '010180-1234' }),
        F('ny_adresse', 'Новый адрес', 'New address', 'text', { half: true, placeholderDoc: 'Østergade 25, 4. th., 1100 København K', placeholderRu: 'Эстергаде 25, 4. тх., 1100 Копенгаген K' }),
        F('flyttedato', 'Дата переезда', 'Moving date', 'date', { half: true }),
        F('husstand', 'Кто переезжает', 'Who is moving', 'select', {
          options: [
            'kun mig selv',
            'hele husstanden',
            'mig og enkelte familiemedlemmer',
          ],
        }),
      ]),
    ],
    body: [
      personHdr(['{{kommune_name}}', 'Folkeregisteret']),
      { type: 'title', text: 'ANMELDELSE AF ADRESSEÆNDRING (CPR)' },
      { type: 'paragraph', text: 'Emne: Adresseændring pr. {{flyttedato}}', noIndent: true },
      { type: 'paragraph', text: 'Kære folkeregister,', noIndent: true },
      { type: 'paragraph', text: 'Jeg anmoder herved om at få min adresse i CPR ændret til {{ny_adresse}} pr. {{flyttedato}}. Mine oplysninger: {{applicant_name}}, CPR-nr. {{cpr_nr}}.', justify: true },
      { type: 'paragraph', text: 'Flytningen omfatter {{husstand}}.', justify: true },
      { type: 'paragraph', text: 'Adresseændringen anmeldes inden for 5-dages fristen i CPR-loven. Jeg beder om bekræftelse på, at adressen er opdateret, samt om nyt sundhedskort efter behov.', justify: true },
      dkSign(),
    ],
  },
  {
    slug: 'dk-util-gaeldsbrev', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Долговая расписка (gældsbrev)',
    titleDoc: 'Gældsbrev (privat låneaftale)', titleEn: 'Promissory note (private loan agreement)',
    descRu: 'Долговая расписка (gældsbrev) при частном займе: стороны с CPR-номерами, сумма, процент, условия погашения и последствия просрочки (Gældsbrevsloven 1955).',
    descEn: 'Promissory note (gældsbrev) for a private loan: parties with CPR numbers, amount, interest, repayment terms and consequences of default (Promissory Notes Act 1955).',
    descDoc: 'Gældsbrev ved privat lån mellem långiver og låntager.',
    refRu: 'Gældsbrevsloven (1955); Aftaleloven (1917)',
    refEn: 'Promissory Notes Act (1955); Contracts Act (1917)',
    fields: [
      F('laangiver_name', 'Заимодавец (ФИО)', 'Lender’s name', 'text', { half: true, placeholderDoc: 'Mette Sørensen', placeholderRu: 'Мета Сёренсен' }),
      F('laangiver_cpr', 'CPR заимодавца', 'Lender’s CPR number', 'text', { half: true, placeholderDoc: '110979-8765', placeholderRu: '110979-8765' }),
      F('laangiver_address', 'Адрес заимодавца', 'Lender’s address', 'text', { half: true, placeholderDoc: 'Søndergade 5, 5000 Odense C', placeholderRu: 'Сёндергаде 5, 5000 Оденсе C' }),
      F('laantager_name', 'Заёмщик (ФИО)', 'Borrower’s name', 'text', { half: true, placeholderDoc: 'Peter Laursen', placeholderRu: 'Питер Лаурсен' }),
      F('laantager_cpr', 'CPR заёмщика', 'Borrower’s CPR number', 'text', { half: true, placeholderDoc: '040485-4321', placeholderRu: '040485-4321' }),
      F('laantager_address', 'Адрес заёмщика', 'Borrower’s address', 'text', { half: true, placeholderDoc: 'Havnegade 8, 8000 Aarhus C', placeholderRu: 'Хавнергаде 8, 8000 Орхус C' }),
      F('beloeb', 'Сумма займа, kr.', 'Loan amount (DKK)', 'number', { half: true, placeholderRu: '25 000', placeholderDoc: '25.000' }),
      F('rente', 'Процентная ставка, % год.', 'Interest rate (% p.a.)', 'number', { required: false, half: true, placeholderRu: '0', placeholderDoc: '0' }),
      F('tilbagebetaling', 'Условия погашения', 'Repayment terms', 'textarea', { placeholderDoc: 'Beløbet tilbagebetales i 12 månedlige rater af 2.084 kr. senest den 1. i hver måned, senest 1. januar 2027.', placeholderRu: 'Возврат 12 ежемесячными платежами по 2 084 крона не позднее 1-го числа месяца, крайний срок 1 января 2027.' }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Dato: {{date_today}}'] },
      { type: 'title', text: 'GÆLDSBREV' },
      { type: 'paragraph', text: 'Emne: Gældsbrev vedrørende privat lån', noIndent: true },
      { type: 'paragraph', text: 'Långiver: {{laangiver_name}}, CPR-nr. {{laangiver_cpr}}, {{laangiver_address}}.', justify: true },
      { type: 'paragraph', text: 'Låntager: {{laantager_name}}, CPR-nr. {{laantager_cpr}}, {{laantager_address}}.', justify: true },
      { type: 'paragraph', text: 'Låntager skylder herved långiver et lån på {{beloeb}} kr. Lånet udbetales ved underskrivelsen af dette gældsbrev, og gælden anerkendes som en forpligtelse i henhold til gældsbrevsloven.', justify: true },
      { type: 'paragraph', text: 'Tilbagebetaling sker på følgende vilkår: {{tilbagebetaling}}. Rentesatsen er {{rente}} % p.a.; ved rente 0 beregnes der ingen rente.', justify: true },
      { type: 'paragraph', text: 'Ved manglende betaling kan hele restbeløbet gøres tilbagekrævet, og kravet kan indbringes for retten i henhold til gældsbrevsloven og reglerne om småsagsproces.', justify: true },
      { type: 'signature', leftText: 'Långiver:', rightText: '_______________ / {{laangiver_name}} /' },
      { type: 'signature', leftText: 'Låntager:', rightText: '_______________ / {{laantager_name}} /' },
    ],
  },
  {
    slug: 'dk-util-fuldmagt', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Доверенность (fuldmagt)',
    titleDoc: 'Fuldmagt', titleEn: 'Power of attorney',
    descRu: 'Доверенность (fuldmagt): право другого лица представлять ваши интересы в указанных делах — банк, коммуна, получение документов (Aftaleloven § 18).',
    descEn: 'Power of attorney (fuldmagt): authorising another person to act for you in specified matters — banking, municipal affairs, collecting documents (§ 18 of the Contracts Act).',
    descDoc: 'Fuldmagt til at handle på vegne af fuldmagtsgiver i udpegede sager.',
    refRu: 'Aftaleloven § 18 — fuldmagt',
    refEn: 'Contracts Act § 18 — power of attorney',
    fields: [
      F('giver_name', 'Доверитель (ФИО)', 'Principal’s name', 'text', { half: true, placeholderDoc: 'Mette Sørensen', placeholderRu: 'Мета Сёренсен' }),
      F('giver_cpr', 'CPR доверителя', 'Principal’s CPR number', 'text', { half: true, placeholderDoc: '110979-8765', placeholderRu: '110979-8765' }),
      F('giver_address', 'Адрес доверителя', 'Principal’s address', 'text', { half: true, placeholderDoc: 'Søndergade 5, 5000 Odense C', placeholderRu: 'Сёндергаде 5, 5000 Оденсе C' }),
      F('magtshaver_name', 'Представитель (ФИО)', 'Attorney’s name', 'text', { half: true, placeholderDoc: 'Lars Holm', placeholderRu: 'Ларс Хольм' }),
      F('magtshaver_cpr', 'CPR представителя', 'Attorney’s CPR number', 'text', { half: true, placeholderDoc: '020384-1122', placeholderRu: '020384-1122' }),
      F('magtshaver_address', 'Адрес представителя', 'Attorney’s address', 'text', { half: true, placeholderDoc: 'Havnegade 8, 8000 Aarhus C', placeholderRu: 'Хавнергаде 8, 8000 Орхус C' }),
      F('omfang', 'Сфера полномочий', 'Scope of authority', 'select', {
        options: [
          'bank- og betalingsforretninger',
          'kommunale sager (kommune/jobcenter)',
          'udlevering af dokumenter og post',
          'sager hos offentlige myndigheder',
        ],
      }),
      F('gyldig_til', 'Действует до', 'Valid until', 'date', { half: true }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['Dato: {{date_today}}'] },
      { type: 'title', text: 'FULDMAGT' },
      { type: 'paragraph', text: 'Emne: Fuldmagt til {{magtshaver_name}}', noIndent: true },
      { type: 'paragraph', text: 'Fuldmagtsgiver: {{giver_name}}, CPR-nr. {{giver_cpr}}, {{giver_address}}.', justify: true },
      { type: 'paragraph', text: 'Magtshaver: {{magtshaver_name}}, CPR-nr. {{magtshaver_cpr}}, {{magtshaver_address}}.', justify: true },
      { type: 'paragraph', text: 'Herved giver jeg magtshaveren fuldmagt til at handle på min vegne i følgende sager: {{omfang}}.', justify: true },
      { type: 'paragraph', text: 'Fuldmagten gælder til og med {{gyldig_til}} og kan til enhver tid tilbagekaldes skriftligt. Magtshaveren kan ikke viderefuldmægtige uden mit skriftlige samtykke.', justify: true },
      { type: 'signature', leftText: 'Fuldmagtsgiver:', rightText: '_______________ / {{giver_name}} /' },
      { type: 'signature', leftText: 'Magtshaver:', rightText: '_______________ / {{magtshaver_name}} /' },
    ],
  },
  // ————————————————————————— Университет —————————————————————————
  {
    slug: 'dk-uni-studieorlov', kind: 'STANDARD', categorySlug: 'uni-common',
    titleRu: 'Заявление на академический отпуск (studieorlov)',
    titleDoc: 'Ansøgning om studieorlov', titleEn: 'Study leave application',
    descRu: 'Заявление в университет на академический отпуск (studieorlov) — как правило до 1 года за весь период обучения; подаётся в Studieadministrationen.',
    descEn: 'Application to the university for study leave — normally up to one year during the programme; filed with the study administration.',
    descDoc: 'Ansøgning om studieorlov på universitetet.',
    refRu: 'Lov om universiteter — studieorlov; studieordningen',
    refEn: 'University Act — study leave; the study regulations',
    fields: [
      ...personFields([
        F('uni_name', 'Университет', 'University', 'text', { half: true, placeholderDoc: 'Aarhus Universitet', placeholderRu: 'Университет Орхуса' }),
        F('studienummer', 'Номер студента', 'Student number', 'text', { half: true, placeholderDoc: '20181234', placeholderRu: '20181234' }),
        F('uddannelse', 'Программа обучения', 'Degree programme', 'text', { half: true, placeholderDoc: 'Kandidat i jura', placeholderRu: 'Магистратура по праву' }),
        F('date_from', 'Отпуск с', 'Leave from', 'date', { half: true }),
        F('date_to', 'Отпуск по', 'Leave until', 'date', { half: true }),
        F('begrundelse', 'Основание (необязательно)', 'Reason (optional)', 'textarea', { required: false, placeholderDoc: 'Orloven ønskes i forbindelse med praktikplads og familiesamsætning.', placeholderRu: 'Отпуск связан со стажировкой и семейными обстоятельствами.' }),
      ]),
    ],
    body: [
      personHdr(['{{uni_name}}', 'Studieadministrationen']),
      { type: 'title', text: 'ANSØGNING OM STUDIEORLOV' },
      { type: 'paragraph', text: 'Emne: Studieorlov fra {{date_from}}', noIndent: true },
      { type: 'paragraph', text: 'Kære studieadministration,', noIndent: true },
      { type: 'paragraph', text: 'Jeg anmoder herved om studieorlov fra {{date_from}} til og med {{date_to}}. Mine oplysninger: {{applicant_name}}, studienummer {{studienummer}}, {{uddannelse}}.', justify: true },
      { type: 'paragraph', text: 'Begrundelsen for orloven er: {{begrundelse}}.', justify: true },
      { type: 'paragraph', text: 'Jeg er bekendt med, at der kan være betingelser for studieorlov (fx maksimal varighed i hele forløbet), og beder om bekræftelse på orloven samt oplysning om eventuelle konsekvenser for SU og eksamen.', justify: true },
      dkSign(),
    ],
  },
  {
    slug: 'dk-uni-su', kind: 'STANDARD', categorySlug: 'uni-money',
    titleRu: 'Заявление на дополнительную стипендию (SU)',
    titleDoc: 'Ansøgning om tillægsstipendium (SU)', titleEn: 'Application for a supplementary SU grant',
    descRu: 'Заявление о дополнительной стипендии (tillægsstipendium) к SU при особых обстоятельствах по SU-loven; подаётся через SU-контур учебного заведения.',
    descEn: 'Application for a supplementary grant (tillægsstipendium) to the state educational support in special circumstances under the SU Act; filed via the institution’s SU office.',
    descDoc: 'Ansøgning om tillægsstipendium efter SU-loven.',
    refRu: 'Lov om Statens Uddannelsesstøtte (SU-loven) — tillægsstipendium',
    refEn: 'State Educational Support Act (SU Act) — supplementary grant',
    fields: [
      ...personFields([
        F('uni_name', 'Учебное заведение', 'Institution', 'text', { half: true, placeholderDoc: 'Aarhus Universitet', placeholderRu: 'Университет Орхуса' }),
        F('studienummer', 'Номер студента', 'Student number', 'text', { half: true, placeholderDoc: '20181234', placeholderRu: '20181234' }),
        F('uddannelse', 'Программа обучения', 'Degree programme', 'text', { half: true, placeholderDoc: 'Kandidat i jura', placeholderRu: 'Магистратура по праву' }),
        F('begrundelse', 'Основание заявки', 'Grounds for the application', 'textarea', { placeholderDoc: 'Jeg har udgifter til medicin og dobbelt husførelse i forbindelse med mit studieforløb.', placeholderRu: 'Расходы на лекарства и двойное домохозяйство в связи с учёбой.' }),
      ]),
    ],
    body: [
      personHdr(['{{uni_name}}', 'SU-kontoret']),
      { type: 'title', text: 'ANSØGNING OM TILLÆGSSTIPENDIUM (SU)' },
      { type: 'paragraph', text: 'Emne: Ansøgning om tillægsstipendium', noIndent: true },
      { type: 'paragraph', text: 'Kære SU-kontor,', noIndent: true },
      { type: 'paragraph', text: 'Jeg anmoder herved om tillægsstipendium i henhold til SU-loven. Mine oplysninger: {{applicant_name}}, studienummer {{studienummer}}, {{uddannelse}}.', justify: true },
      { type: 'paragraph', text: 'Begrundelsen er: {{begrundelse}}.', justify: true },
      { type: 'paragraph', text: 'Dokumentation for forholdene kan fremsendes efter anmodning. Jeg beder om svar og vejledning om ansøgningens videre behandling.', justify: true },
      dkSign(),
    ],
  },
];
