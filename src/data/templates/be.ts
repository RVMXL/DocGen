// Шаблоны для Бельгии (язык документов — французский).
// Основано на законодательстве Бельгии:
// Loi du 3 juillet 1978 relative aux contrats de travail: art. 20 — длительность работы;
// ст. 21–22 — приостановление договора по личным мотивам (congé sans solde); ст. 31 —
// incapacité de travail; ст. 35–37 — licenciement, préavis (работник: 13 недель при стаже
// до 5 лет, +2 недели за каждую начавшуюся пятилетку); ст. 46 — petits congés (свадьба 2 дня,
// смерть близкого 3 дня, переезд 1 день); ст. 49 — congé annuel (минимум 4 недели).
// Code du travail, livre 1er: ст. 121–122 — congé de maternité (15 недель + repos postnatal
// supplémentaire); ст. 394bis — congé de naissance (10 дней). CCT n° 6 du 15 février 1966 —
// certificat de travail; CCT n° 82 bis — уведомление о нетрудоспособности; CCT n° 85 du
// 9 novembre 2005 — télétravail. Code de droit économique, Livre VI (consommateur):
// ст. VI.84 и сл. — гарантия соответствия (2 года), ст. VI.97 и сл. — недобросовестные
// коммерческие практики; Livre VII — услуги платежей. Code judiciaire: ст. 590 и сл.
// (компетенция juge de paix, ≤ 5 000 EUR), ст. 1144 — sommation interpellative.
// RGPD (ст. 12.3, 15, 32, 58, 77) и Loi du 30 juillet 2018 — APD (Autorité de protection
// des données); Loi du 23 mars 1995 — Médiateur fédéral; SPF Économie (DG Contrôle
// européen); SPF Finances: CIR 1992, ст. 374 и сл. — réclamation; Loi du 22 mars 2006 —
// рассмотрение жалоб в финансовых услугах (15 рабочих дней), ombudsfin.
// Loi du 12 avril 1965 — CPAS (ст. 145 и сл.); Loi du 28 décembre 1984 и Code des pensions
// (loi du 21 juin 1985) — пенсии. Loi du 22 août 2002 relative aux droits du patient:
// ст. 9 — доступ к dossier médical (30 дней), ст. 11 — функция жалоб, médiation patient.
// Loi du 29 mai 1959 (Pacte scolaire); Décret du 30 avril 2009 (FWB) — allocations d’études;
// Décret « Paysage » du 7 août 2014 — высшее образование. Loi du 21 mars 1991 и почтовое
// законодательство — bpost, универсальная почтовая служба, Arbitre de poste.
// Loi du 20 février 1991 relative au bail résidentiel: ст. 3 — обязанности bailleur;
// ст. 1753 Code civil — grosses réparations. Code civil, livre 5: ст. 5.126 — nuisances
// de voisinage; ст. 5.167 и сл. — заём (reconnaissance de dette); Loi du 24 février 1976 —
// борьба с шумом; Loi du 19 juillet 2011 (Règlement général sur la civicité) — domicile.
import type { TplDef } from '../types';
import { F, courtHdr, stdSign } from './helpers';

// Шапка письма работодателю: адресат справа, работник ниже (бельгийское делопроизводство)
const workHdr = (): TplDef['body'] => [
  { type: 'lines', align: 'right', items: ['{{org_name}}', 'À l’attention de : {{head_name}}', '', '{{applicant_name}}', 'Numéro national : {{applicant_nn}}', '{{date_today}}'] },
];

// Шапка письма в учреждение (администрация, банк, судограничные службы)
const admHdr = (): TplDef['body'] => [
  { type: 'lines', align: 'right', items: ['{{org_name}}', 'À l’attention de : {{head_name}}', '', '{{applicant_name}}', 'Téléphone : {{applicant_phone}}', '{{applicant_address}}', '{{date_today}}'] },
];

const workFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('org_name', 'Название компании', 'Company name', 'text', { half: true, placeholderDoc: 'Demeny & Fils SRL' }),
  F('head_name', 'Кому (служба/руководитель)', 'Submit to', 'text', { half: true, placeholderDoc: 'Service du personnel' }),
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Marie Dubois' }),
  F('applicant_nn', 'Ваш национальный номер (NISS)', 'Your national register number', 'text', { half: true, placeholderDoc: '85.07.14-123.45' }),
  ...extra,
];

const admFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('org_name', 'Куда (организация)', 'Organisation', 'text', { half: true, placeholderDoc: 'SPF Économie — Direction générale Contrôle européen' }),
  F('head_name', 'Кому (служба/должность)', 'Addressee', 'text', { half: true, placeholderDoc: 'Service des réclamations' }),
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Marie Dubois' }),
  F('applicant_address', 'Ваш адрес', 'Your address', 'text', { half: true, placeholderDoc: 'Rue Royale 12, 1000 Bruxelles' }),
  F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '02 123 45 67' }),
  ...extra,
];

// «Objet : …» — стандарт бельгийской переписки
const obj = (text: string): TplDef['body'] => [
  { type: 'paragraph', text: `Objet : ${text}`, noIndent: true },
];

const salut = (): TplDef['body'] => [
  { type: 'paragraph', text: 'Madame, Monsieur,', noIndent: true },
];

const P = (text: string): TplDef['body'] => [
  { type: 'paragraph', text, justify: true },
];

const courtoisie = (): TplDef['body'] => [
  { type: 'paragraph', text: 'Je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.', noIndent: true },
];

const pj = (items: string[]): TplDef['body'] => [
  { type: 'attachment', items, label: 'Pièces jointes :' },
];

export const TEMPLATES_BE: TplDef[] = [
  {
    slug: 'be-work-conge-annuel', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление на ежегодный оплачиваемый отпуск',
    titleDoc: 'Demande de congé annuel', titleEn: 'Annual paid leave application',
    descRu: 'Заявление работодателю о предоставлении ежегодного оплачиваемого отпуска (congé annuel). По Loi du 3 juillet 1978 (ст. 49) работнику на полный рабочий день гарантируется минимум четыре недели отпуска; график согласовывается заранее.',
    descEn: 'Application to the employer for paid annual leave (congé annuel). Under the Belgian Law of 3 July 1978 (art. 49), a full-time worker is entitled to at least four weeks of leave per year.',
    descDoc: 'Demande de congé annuel adressée à l’employeur, conformément à l’article 49 de la loi du 3 juillet 1978 (quatre semaines minimum).',
    refRu: 'ст. 49 Loi du 3 juillet 1978 relative aux contrats de travail — отпуск не менее четырёх недель',
    refEn: 'Article 49 of the Law of 3 July 1978 on employment contracts — minimum four weeks of annual leave',
    fields: [
      ...workFields([
        F('date_from', 'Дата начала отпуска', 'Start date', 'date', { half: true }),
        F('date_to', 'Дата окончания отпуска', 'End date', 'date', { half: true }),
        F('days', 'Количество рабочих дней', 'Working days', 'number', { half: true, placeholderRu: '20' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'DEMANDE DE CONGÉ ANNUEL' },
      ...obj('congé annuel du {{date_from}} au {{date_to}}'),
      ...salut(),
      ...P('Conformément à l’article 49 de la loi du 3 juillet 1978 relative aux contrats de travail, je sollicite le bénéfice de mon congé annuel payé du {{date_from}} au {{date_to}}, soit {{days}} jours ouvrables, en tenant compte du calendrier des vacances applicable à l’entreprise.'),
      ...P('Je m’engage à organiser et à transmettre les dossiers en cours avant mon départ, afin d’assurer la continuité du service. Je vous remercie de bien vouloir confirmer votre accord par écrit dans les meilleurs délais.'),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-work-conge-sans-solde', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление на неоплачиваемый отпуск (congé sans solde)',
    titleDoc: 'Demande de congé sans solde', titleEn: 'Unpaid leave application',
    descRu: 'Заявление о неоплачиваемом отпуске: приостановление трудового договора по личным мотивам (ст. 21–22 Loi du 3 juillet 1978). Указываются период, причина и последствия для зарплаты, отпуска и отпускных.',
    descEn: 'Application for unpaid leave: suspension of the employment contract for personal reasons (arts. 21–22 of the Law of 3 July 1978), with the period, reason and consequences set out.',
    descDoc: 'Demande de congé sans solde — suspension du contrat de travail pour raison personnelle (articles 21 et 22 de la loi du 3 juillet 1978).',
    refRu: 'ст. 21–22 Loi du 3 juillet 1978 — приостановление трудового договора по личным мотивам',
    refEn: 'Articles 21–22 of the Law of 3 July 1978 — suspension of the employment contract for personal reasons',
    fields: [
      ...workFields([
        F('motif', 'Причина отпуска', 'Reason for the leave', 'select', {
          options: [
            'raisons personnelles',
            'voyage à l’étranger',
            'formation personnelle non liée à l’entreprise',
            'raison familiale nécessitant ma présence',
            'complément de congé parental',
          ],
        }),
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
        F('date_to', 'Дата окончания', 'End date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'DEMANDE DE CONGÉ SANS SOLDE' },
      ...obj('congé sans solde du {{date_from}} au {{date_to}}'),
      ...salut(),
      ...P('Je sollicite un congé sans solde du {{date_from}} au {{date_to}}, pour le motif suivant : {{motif}}. Ce congé emporte la suspension du contrat de travail pour raison personnelle, conformément aux articles 21 et 22 de la loi du 3 juillet 1978 relative aux contrats de travail.'),
      ...P('Je reconnais que la rémunération et les cotisations de sécurité sociale sont suspendues pendant cette période, et que le congé annuel ainsi que le pécule de vacances sont calculés au prorata des prestations effectuées. Je reste à la disposition du service du personnel pour toute information complémentaire et vous remercie de me confirmer votre accord par écrit.'),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-work-horaire-flexible', kind: 'STANDARD', categorySlug: 'work-time',
    titleRu: 'Заявление о введении гибкого графика работы',
    titleDoc: 'Demande d’horaire flexible', titleEn: 'Flexible working schedule request',
    descRu: 'Заявление о гибком графике: скользящие часы с обязательным присутствием в часы пик, частичный телеработ (CCT n° 85), четырёхдневная неделя. Подчёркивается непрерывность службы и учёт рабочего времени.',
    descEn: 'Request for a flexible schedule: gliding hours with core-time presence, partial telework (CCT n° 85) or a four-day week, stressing service continuity and time recording.',
    descDoc: 'Demande d’instauration d’un horaire flexible (horaires glissants, télétravail partiel ou semaine de quatre jours).',
    refRu: 'ст. 20 Loi du 3 juillet 1978 (длительность работы); CCT n° 85 du 9 novembre 2005 — телеработ',
    refEn: 'Article 20 of the Law of 3 July 1978 (working time); Collective Agreement No. 85 of 9 November 2005 on telework',
    fields: [
      ...workFields([
        F('modalite', 'Формат гибкого графика', 'Flexible scheme', 'select', {
          options: [
            'horaires glissants avec plage de présence obligatoire',
            'télétravail partiel (deux jours par semaine)',
            'semaine de quatre jours à journées plus longues',
            'horaires variables avec enregistrement individuel',
          ],
        }),
        F('date_from', 'Дата вступления в силу', 'Effective date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'DEMANDE D’HORAIRE FLEXIBLE' },
      ...obj('instauration d’un horaire flexible à partir du {{date_from}}'),
      ...salut(),
      ...P('Par la présente, je demande l’instauration d’un horaire flexible à partir du {{date_from}}, selon la modalité suivante : {{modalite}}. Cette demande s’inscrit dans le respect de la durée maximale de travail prévue à l’article 20 de la loi du 3 juillet 1978 relative aux contrats de travail et, le cas échéant, de la convention collective de travail n° 85 du 9 novembre 2005 concernant le travail à distance.'),
      ...P('Je m’engage à assurer ma présence pendant les heures de pointe, à garantir la continuité du service et à enregistrer mes prestations de manière fiable. Je reste disponible pour toute concertation, y compris au sein du conseil d’entreprise ou par voie de convention collective d’entreprise.'),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-work-declaration-maladie', kind: 'STANDARD', categorySlug: 'work-time',
    titleRu: 'Уведомление о нетрудоспособности (болезни)',
    titleDoc: 'Déclaration d’incapacité de travail', titleEn: 'Sickness (work incapacity) notification',
    descRu: 'Уведомление работодателя о нетрудоспособности с приложением медицинского сертификата. Сертификат одновременно пересылается в фонд болезни (mutuelle) в течение 48 часов; при продлении — новый сертификат.',
    descEn: 'Notification to the employer of incapacity for work with a medical certificate attached; the certificate is sent to the health insurance fund (mutuelle) within 48 hours.',
    descDoc: 'Déclaration d’incapacité de travail à l’employeur, avec certificat médical à l’appui.',
    refRu: 'ст. 31 Loi du 3 juillet 1978; CCT n° 82 bis — уведомление о нетрудоспособности',
    refEn: 'Article 31 of the Law of 3 July 1978; Collective Agreement No. 82 bis — notification of incapacity for work',
    fields: [
      ...workFields([
        F('date_from', 'Первый день нетрудоспособности', 'First day of incapacity', 'date', { half: true }),
        F('duree', 'Ожидаемая длительность (дней)', 'Expected duration (days)', 'number', { half: true, placeholderRu: '7' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'DÉCLARATION D’INCAPACITÉ DE TRAVAIL' },
      ...obj('incapacité de travail à partir du {{date_from}}'),
      ...salut(),
      ...P('Je vous déclare en incapacité de travail à partir du {{date_from}}, pour une durée présumée de {{duree}} jours. Le certificat médical établi par mon médecin traitant est joint à la présente déclaration.'),
      ...P('Conformément à la loi du 3 juillet 1978 relative aux contrats de travail et à la convention collective de travail n° 82 bis, je transmets simultanément le certificat médical à ma mutuelle dans les quarante-huit heures, afin de garantir le maintien de mes allocations. En cas de prolongation, un nouveau certificat vous sera adressé sans délai.'),
      ...pj(['Certificat médical d’incapacité de travail.']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-work-maternite', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Уведомление об отпуске по материнству',
    titleDoc: 'Notification de congé de maternité', titleEn: 'Maternity leave notification',
    descRu: 'Уведомление о беременности и отпуске по материнству (congé de maternité): минимум 15 недель пренатального и постанатального отдыха с возможностью сокращения дородового периода; основание для выплат от mutuelle.',
    descEn: 'Notification of pregnancy and maternity leave (congé de maternité): at least fifteen weeks of prenatal and postnatal rest, with an optional reduction of the prenatal period.',
    descDoc: 'Notification de congé de maternité à l’employeur (articles 121 et 122 du Code du travail).',
    refRu: 'ст. 121–122 Code du travail, livre 1er — отпуск по материнству (15 недель + дополнительный послеродовой отдых)',
    refEn: 'Articles 121–122 of the Labour Code, Book I — maternity leave (15 weeks plus additional postnatal rest)',
    fields: [
      ...workFields([
        F('date_accouchement', 'Предполагаемая дата родов', 'Expected delivery date', 'date', { half: true }),
        F('date_from', 'Начало отпуска', 'Leave start date', 'date', { half: true }),
        F('modalite', 'Распределение отпуска', 'Leave distribution', 'select', {
          options: [
            'repos prénatal de trois semaines et repos postnatal de douze semaines',
            'congé prénatal réduit à une semaine et repos postnatal prolongé (quinze semaines au total)',
          ],
        }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'NOTIFICATION DE CONGÉ DE MATERNITÉ' },
      ...obj('congé de maternité à partir du {{date_from}}'),
      ...salut(),
      ...P('Je vous informe que je suis enceinte et que la date présumée de l’accouchement est fixée au {{date_accouchement}}. Conformément aux articles 121 et 122 du Code du travail, je prendrai mon congé de maternité à partir du {{date_from}}, selon la répartition suivante : {{modalite}}.'),
      ...P('Le congé de maternité comprend quinze semaines au minimum, prolongées d’un repos postnatal supplémentaire. Je vous remercie de me délivrer l’attestation nécessaire à ma mutuelle pour l’octroi des allocations de maternité et de m’indiquer les modalités pratiques de transmission de mes dossiers pendant mon absence.'),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-work-evenements-familiaux', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Заявление на отпуск по семейным событиям',
    titleDoc: 'Demande de congé pour événements familiaux', titleEn: 'Family event leave application',
    descRu: 'Заявление на краткосрочный отпуск по семейным событиям (ст. 46 Loi du 3 juillet 1978): свадьба (2 дня), смерть близкого (3 дня), переезд (1 день); congé de naissance — 10 дней (ст. 394bis Кодекса о труде).',
    descEn: 'Application for short leave for family events (art. 46 of the Law of 3 July 1978): marriage (2 days), bereavement (3 days), moving house (1 day); birth leave of 10 days under the Labour Code.',
    descDoc: 'Demande de congé pour événements familiaux (article 46 de la loi du 3 juillet 1978) et congé de naissance.',
    refRu: 'ст. 46 Loi du 3 juillet 1978; ст. 394bis Code du travail (congé de naissance)',
    refEn: 'Article 46 of the Law of 3 July 1978; article 394bis of the Labour Code (birth leave)',
    fields: [
      ...workFields([
        F('motif', 'Событие', 'Event', 'select', {
          options: [
            'mariage ou déclaration de cohabitation légale (deux jours)',
            'décès d’un conjoint, d’un partenaire cohabitant ou d’un parent jusqu’au deuxième degré (trois jours)',
            'naissance d’un enfant — congé de naissance (dix jours à prendre dans les quatre mois)',
            'déménagement du domicile habituel (un jour)',
            'communion solennelle ou transition d’un enfant (un jour)',
          ],
        }),
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
        F('date_to', 'Дата окончания', 'End date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'DEMANDE DE CONGÉ POUR ÉVÉNEMENTS FAMILIAUX' },
      ...obj('congé pour événements familiaux du {{date_from}} au {{date_to}}'),
      ...salut(),
      ...P('Je sollicite le bénéfice d’un congé pour événements familiaux conformément à l’article 46 de la loi du 3 juillet 1978 relative aux contrats de travail, pour le motif suivant : {{motif}}. La période sollicitée s’étend du {{date_from}} au {{date_to}}.'),
      ...P('Le document justificatif correspondant est joint à la présente. Je m’organiserai pour que mes tâches soient couvertes pendant mon absence et vous remercie de me confirmer l’accord de l’entreprise par écrit.'),
      ...pj(['Document justificatif : acte de mariage, acte de naissance, acte de décès ou attestation correspondante.']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-work-demission', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Заявление об увольнении по собственному желанию (с préavis)',
    titleDoc: 'Démission avec préavis', titleEn: 'Resignation with notice',
    descRu: 'Уведомление об увольнении по инициативе работника с предуведомлением по ст. 37 Loi du 3 juillet 1978: 13 недель при стаже до 5 лет, далее +2 недели за каждую начавшуюся пятилетку. Просит C4, сертификат о работе, отпускные.',
    descEn: 'Resignation notice under art. 37 of the Law of 3 July 1978: thirteen weeks of notice below five years of service, plus two weeks per commenced five-year period; requests the C4 form and work certificate.',
    descDoc: 'Lettre de démission avec préavis, conformément à l’article 37 de la loi du 3 juillet 1978.',
    refRu: 'ст. 37 Loi du 3 juillet 1978 — предуведомление при увольнении по инициативе работника',
    refEn: 'Article 37 of the Law of 3 July 1978 — notice where the worker terminates the contract',
    fields: [
      ...workFields([
        F('poste', 'Должность', 'Job title', 'text', { half: true, placeholderDoc: 'employé administratif' }),
        F('date_debut_preavis', 'Начало предуведомления', 'Notice start date', 'date', { half: true }),
        F('duree_preavis', 'Длительность предуведомления', 'Notice period', 'text', { half: true, placeholderDoc: 'treize semaines' }),
        F('date_fin', 'Дата окончания договора', 'Contract end date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'DÉMISSION AVEC PRÉAVIS' },
      ...obj('démission de ma fonction de {{poste}}'),
      ...salut(),
      ...P('Par la présente, je vous notifie ma démission de ma fonction de {{poste}}, conformément à l’article 37 de la loi du 3 juillet 1978 relative aux contrats de travail. Le préavis débutera le {{date_debut_preavis}}, pour une durée de {{duree_preavis}}, de sorte que le contrat de travail prendra fin le {{date_fin}}.'),
      ...P('Je rappelle que le préavis court à compter du premier jour qui suit la notification et qu’aucune compensation ne peut y être substituée sans mon accord écrit. Je vous prie de me remettre, à la fin du contrat, le formulaire C4, mon attestation fiscale et mon certificat de travail, ainsi que le solde de mon pécule de vacances.'),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-work-licenciement', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Оспаривание увольнения',
    titleDoc: 'Contestation du licenciement', titleEn: 'Dismissal contestation letter',
    descRu: 'Письмо-оспаривание увольнения: недостаточное предуведомление, отсутствие действительного основания (licenciement abusif), нарушение процедуры или дискриминация. Резервирует обращение в tribunal du travail.',
    descEn: 'Letter contesting a dismissal: insufficient notice, no valid reason (abusive dismissal), procedural breach or discrimination; reserves recourse to the labour court.',
    descDoc: 'Contestation d’un licenciement auprès de l’employeur (articles 35 à 37 et 63 de la loi du 3 juillet 1978).',
    refRu: 'ст. 35–37, 63 Loi du 3 juillet 1978; loi du 10 mai 2007 (недискриминация)',
    refEn: 'Articles 35–37 and 63 of the Law of 3 July 1978; the Anti-Discrimination Law of 10 May 2007',
    fields: [
      ...workFields([
        F('date_notification', 'Дата уведомления об увольнении', 'Dismissal notice date', 'date', { half: true }),
        F('motif_contestation', 'Основание оспаривания', 'Ground of contestation', 'select', {
          options: [
            'préavis manifestement insuffisant par rapport à mon ancienneté',
            'licenciement sans motif valable (licenciement abusif)',
            'non-respect de la procédure applicable (conseil d’entreprise, protection spéciale)',
            'motif discriminatoire (loi du 10 mai 2007)',
          ],
        }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'CONTESTATION DU LICENCIEMENT' },
      ...obj('contestation du licenciement notifié le {{date_notification}}'),
      ...salut(),
      ...P('Par la présente, je conteste le licenciement qui m’a été notifié le {{date_notification}}, pour le motif suivant : {{motif_contestation}}. Les articles 35 et 37 de la loi du 3 juillet 1978 relative aux contrats de travail imposent des règles strictes quant au motif, à la procédure et à la durée du préavis.'),
      ...P('En conséquence, je vous demande de me communiquer par écrit les motifs précis du licenciement, de me remettre le formulaire C4 sans mention préjudiciable et de régler amiablement ma situation dans les trente jours, y compris l’indemnité correspondante. À défaut, je saisirai le tribunal du travail, sous réserve de tous mes droits et de tous frais et dépens.'),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-work-attestation-travail', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Запрос сертификата о работе (certificat de travail)',
    titleDoc: 'Demande de certificat de travail', titleEn: 'Certificate of employment request',
    descRu: 'Запрос сертификата о работе с нейтральным описанием функций и качества работы за период занятости (CCT n° 6 du 15 février 1966), а также формы C4 для биржи труда и налоговой справки 281.10.',
    descEn: 'Request for a certificate of employment with a neutral description of duties and performance (CCT n° 6), plus the C4 unemployment form and the 281.10 tax slip.',
    descDoc: 'Demande de certificat de travail (CCT n° 6 du 15 février 1966), du formulaire C4 et de l’attestation fiscale.',
    refRu: 'CCT n° 6 du 15 février 1966 — сертификат о работе при уходе из компании',
    refEn: 'Collective Agreement No. 6 of 15 February 1966 — certificate of employment upon leaving the company',
    fields: [
      ...workFields([
        F('periode', 'Период работы', 'Employment period', 'text', { half: true, placeholderDoc: 'du 1er mars 2019 au 31 août 2025' }),
        F('poste', 'Должность', 'Job title', 'text', { half: true, placeholderDoc: 'technicien de maintenance' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'DEMANDE DE CERTIFICAT DE TRAVAIL' },
      ...obj('délivrance de mon certificat de travail'),
      ...salut(),
      ...P('Je vous prie de bien vouloir me délivrer mon certificat de travail couvrant la période {{periode}}, au cours de laquelle j’ai exercé la fonction de {{poste}}. Conformément à la convention collective de travail n° 6 du 15 février 1966, ce document décrit la nature des fonctions, la durée et la qualité des prestations, et demeure strictement neutre.'),
      ...P('Je vous demande également de me remettre le formulaire C4 en vue de ma demande d’allocations de chômage, ainsi que l’attestation fiscale 281.10. Je vous remercie d’avance pour votre collaboration.'),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-work-attestation-salaire', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Запрос справки о зарплате',
    titleDoc: 'Demande d’attestation de salaire', titleEn: 'Salary certificate request',
    descRu: 'Запрос справки о зарплате для банка, арендодателя, соцжилья или иммиграционной процедуры: должность, дата приёма, брутто-зарплата, удержания ONSS и профессиональное удержание (précompte professionnel).',
    descEn: 'Request for a salary certificate for a bank, landlord, social housing or immigration file: position, seniority, gross monthly pay, ONSS withholding and professional tax.',
    descDoc: 'Demande d’attestation de salaire destinée à un tiers (banque, bailleur, administration).',
    refRu: 'Loi du 3 juillet 1978 relative aux contrats de travail — обязанность работодателя подтверждать условия и вознаграждение работника',
    refEn: 'Law of 3 July 1978 on employment contracts — employer’s duty to certify the worker’s terms and remuneration',
    fields: [
      ...workFields([
        F('motif', 'Назначение документа', 'Purpose', 'select', {
          options: [
            'demande de crédit bancaire',
            'dossier de location',
            'demande de logement social',
            'procédure d’immigration ou de visa',
            'dossier familial (adoption, garde d’enfants)',
          ],
        }),
        F('periode', 'Период', 'Period', 'select', {
          options: [
            'le dernier mois écoulé',
            'les trois derniers mois',
            'l’année calendaire écoulée',
          ],
        }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'DEMANDE D’ATTESTATION DE SALAIRE' },
      ...obj('attestation de salaire pour une {{motif}}'),
      ...salut(),
      ...P('Dans le cadre d’une {{motif}}, je vous prie de bien vouloir me délivrer une attestation de salaire couvrant {{periode}}.'),
      ...P('Cette attestation mentionnera ma fonction, ma date d’entrée en service, ma rémunération brute mensuelle ainsi que les retenues ONSS et le précompte professionnel. Je vous remercie de me la remettre sous forme écrite, à l’en-tête de l’entreprise, dans les meilleurs délais.'),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-court-reclamation-vendeur', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Претензия продавцу (дефектный товар)',
    titleDoc: 'Réclamation au vendeur (produit défectueux)', titleEn: 'Claim to the seller (defective product)',
    descRu: 'Претензия продавцу о дефектном товаре: законная гарантия соответствия два года (ст. VI.84 Кодекса экономического права). Требует замену, ремонт, снижение цены или расторжение с возвратом; срок ответа 14 дней, иначе SPF Économie или мировой судья.',
    descEn: 'Claim to the seller over a defective product: two-year statutory conformity guarantee (art. VI.84 of the Code of Economic Law); demands replacement, repair, price reduction or rescission and refund.',
    descDoc: 'Réclamation au vendeur pour produit défectueux (garantie légale de conformité, livre VI du Code de droit économique).',
    refRu: 'ст. VI.84 и сл. Code de droit économique, Livre VI — законная гарантия потребителя (2 года)',
    refEn: 'Articles VI.84 et seq. of the Code of Economic Law, Book VI — statutory consumer guarantee (two years)',
    fields: [
      ...admFields([
        F('produit', 'Товар', 'Product', 'text', { half: true, placeholderDoc: 'lave-linge, modèle W-1234' }),
        F('date_achat', 'Дата покупки', 'Purchase date', 'date', { half: true }),
        F('prix', 'Цена', 'Price', 'text', { half: true, placeholderDoc: '549,00 EUR' }),
        F('defaut', 'Описание дефекта', 'Defect described', 'text', { half: true, placeholderDoc: 'fuite d’eau et arrêt du tambour après deux semaines d’usage' }),
        F('demande', 'Требование', 'Remedy sought', 'select', {
          options: [
            'remplacement du produit défectueux',
            'réparation gratuite du produit',
            'réduction proportionnelle du prix',
            'résolution du contrat et remboursement intégral',
          ],
        }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'RÉCLAMATION POUR PRODUIT DÉFECTUEUX' },
      ...obj('produit défectueux — garantie légale de conformité'),
      ...salut(),
      ...P('Je vous ai acheté le {{date_achat}} le produit suivant : {{produit}}, au prix de {{prix}}. Malgré un usage normal, le défaut suivant est apparu : {{defaut}}.'),
      ...P('Conformément aux articles VI.84 et suivants du Code de droit économique, vous êtes tenu d’assurer la conformité du bien pendant deux ans à compter de sa délivrance. En conséquence, je vous demande : {{demande}}.'),
      ...P('Je vous mets en demeure de me répondre sous quatorze jours à dater de la présente. À défaut, je transmettrai mon dossier au SPF Économie (Direction générale Contrôle européen) et saisirai le juge de paix compétent, avec demande d’indemnisation des frais.'),
      ...pj(['Copie de la facture d’achat', 'Photos du défaut (le cas échéant).']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-court-mise-en-demeure-emprunteur', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Официальное требование заёмщику (возврат займа)',
    titleDoc: 'Mise en demeure de l’emprunteur (remboursement)', titleEn: 'Formal notice to the borrower (repayment)',
    descRu: 'Mise en demeure заёмщику: возврат займа, подтверждённого распиской (reconnaissance de dette), в восьмидневный срок с законными процентами; иначе иск к мировому судье (до 5 000 EUR) или в суд первой инстанции.',
    descEn: 'Formal notice to a borrower: repayment of a loan acknowledged in writing (reconnaissance de dette) within eight days plus statutory interest, failing which proceedings before the justice of the peace.',
    descDoc: 'Mise en demeure de rembourser un prêt assorti d’une reconnaissance de dette (Code civil, livre 5).',
    refRu: 'Code civil, livre 5, ст. 5.167 и сл. — заём и признание долга; законная процентная ставка',
    refEn: 'Civil Code, Book 5, arts. 5.167 et seq. — loan and acknowledgement of debt; statutory interest rate',
    fields: [
      ...admFields([
        F('montant', 'Сумма займа', 'Loan amount', 'text', { half: true, placeholderDoc: '3 200,00 EUR' }),
        F('date_pret', 'Дата предоставления займа', 'Loan date', 'date', { half: true }),
        F('date_echeance', 'Срок возврата', 'Repayment deadline', 'date', { half: true }),
        F('date_relance', 'Дата напоминания', 'Date of the reminder', 'date', { half: true }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'MISE EN DEMEURE DE REMBOURSEMENT' },
      ...obj('prêt de {{montant}} — reconnaissance de dette'),
      ...salut(),
      ...P('Le {{date_pret}}, je vous ai consenti un prêt de {{montant}}, remboursable au plus tard le {{date_echeance}}, dont vous m’avez reconnu l’obligation par une reconnaissance de dette écrite. Malgré ma relance du {{date_relance}}, aucune somme ne m’a été restituée à ce jour.'),
      ...P('Par la présente, je vous mets en demeure de me rembourser la totalité de la somme due, augmentée des intérêts au taux légal à compter de la date d’échéance, dans un délai de huit jours à dater de la présente. À défaut, je saisirai le juge de paix (si la demande n’excède pas 5 000 EUR) ou le tribunal de première instance, tous frais et dépens réservés.'),
      ...pj(['Copie de la reconnaissance de dette', 'Copie de la relance du {{date_relance}}.']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-court-spf-economie', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в SPF Économie (защита потребителей)',
    titleDoc: 'Réclamation auprès du SPF Économie (consommateur)', titleEn: 'Complaint to SPF Economy (consumer protection)',
    descRu: 'Жалоба в федеральную службу экономики на недобросовестные коммерческие практики продавца: вводящая в заблуждение информация, отказ в гарантии, злоупотребительные условия, отсутствие права отказа при онлайн-покупке.',
    descEn: 'Complaint to the Federal Public Service Economy about unfair commercial practices: misleading information, refusal of the statutory guarantee, abusive clauses or absence of a withdrawal right online.',
    descDoc: 'Réclamation auprès du SPF Économie pour pratiques commerciales déloyales (livre VI du Code de droit économique).',
    refRu: 'Code de droit économique, Livre VI (ст. VI.97 и сл. — недобросовестные коммерческие практики); компетенция SPF Économie',
    refEn: 'Code of Economic Law, Book VI (arts. VI.97 et seq. — unfair commercial practices); jurisdiction of SPF Economy',
    fields: [
      ...admFields([
        F('commercant', 'Наименование и адрес продавца', 'Trader’s name and address', 'text', { half: true, placeholderDoc: 'ElectroPlus SRL, Avenue Louise 100, 1050 Bruxelles' }),
        F('date_faits', 'Дата инцидента', 'Date of the facts', 'date', { half: true }),
        F('infraction', 'Характер нарушения', 'Infringement', 'select', {
          options: [
            'une pratique commerciale trompeuse (art. VI.97 et suivants)',
            'le refus d’appliquer la garantie légale de conformité',
            'une clause abusive dans un contrat de consommation',
            'l’absence de droit de rétractation pour une vente en ligne',
          ],
        }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'RÉCLAMATION AUPRÈS DU SPF ÉCONOMIE' },
      ...obj('pratiques commerciales déloyales — {{commercant}}'),
      ...salut(),
      ...P('Je vous prie de bien vouloir enquêter sur les faits suivants, survenus le {{date_faits}} chez le commerçant suivant : {{commercant}}. Les faits concernent {{infraction}}.'),
      ...P('Malgré ma démarche préalable auprès du commerçant, la situation n’a pas été régularisée. Je vous demande de bien vouloir instruire ma réclamation, d’engager, le cas échéant, une médiation avec le Service de médiation pour le consommateur et de me communiquer les suites réservées à mon dossier.'),
      ...pj(['Copie de la démarche adressée au commerçant', 'Factures et correspondance utiles.']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-court-apd-rgpd', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в APD (защита персональных данных, RGPD)',
    titleDoc: 'Plainte auprès de l’APD (protection des données)', titleEn: 'Complaint to the Data Protection Authority (GDPR)',
    descRu: 'Жалоба в Autorité de protection des données (APD) по ст. 77 RGPD и Loi du 30 juillet 2018: отказ в доступе к данным, обработка без правового основания, отсутствие мер безопасности, передача данных третьим лицам.',
    descEn: 'Complaint to the Belgian Data Protection Authority (APD) under art. 77 GDPR and the Law of 30 July 2018: denied access, unlawful processing, missing security measures or disclosures to third parties.',
    descDoc: 'Plainte auprès de l’Autorité de protection des données (article 77 du RGPD ; loi du 30 juillet 2018).',
    refRu: 'ст. 77 RGPD; Loi du 30 juillet 2018 — компетенция APD (Autorité de protection des données)',
    refEn: 'Article 77 GDPR; the Law of 30 July 2018 — jurisdiction of the Belgian Data Protection Authority',
    fields: [
      ...admFields([
        F('responsable', 'Ответственный за обработку', 'Data controller', 'text', { half: true, placeholderDoc: 'TelecomPlus SA, Rue de la Loi 50, 1040 Bruxelles' }),
        F('date_demande', 'Дата обращения к оператору', 'Date of the prior request', 'date', { half: true }),
        F('manquement', 'Характер нарушения', 'Breach described', 'select', {
          options: [
            'le refus de répondre à ma demande d’accès (article 15 du RGPD)',
            'un traitement dépourvu de base légale (article 6 du RGPD)',
            'l’absence de mesures de sécurité appropriées (article 32 du RGPD)',
            'la divulgation de mes données à des tiers sans consentement',
          ],
        }),
        F('applicant_email', 'Ваш e-mail', 'Your e-mail', 'text', { half: true, placeholderDoc: 'marie.dubois@example.be' }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'PLAINTE AUPRÈS DE L’AUTORITÉ DE PROTECTION DES DONNÉES' },
      ...obj('plainte contre {{responsable}} — protection des données'),
      ...salut(),
      ...P('Je dépose plainte contre le responsable du traitement suivant : {{responsable}}, pour le manquement suivant : {{manquement}}.'),
      ...P('Le {{date_demande}}, j’ai exercé mes droits auprès de ce responsable ; il n’a fourni aucune réponse dans le délai d’un mois prévu à l’article 12.3 du RGPD. Conformément à l’article 77 du RGPD et à la loi du 30 juillet 2018 relative à la protection des personnes physiques à l’égard du traitement des données à caractère personnel, je vous demande d’instruire ma plainte et de prendre les mesures prévues par l’article 58 du RGPD.'),
      ...P('Pour toute correspondance, vous pouvez me joindre à l’adresse {{applicant_email}} ou par courrier à l’adresse reprise ci-dessus.'),
      ...pj(['Copie de la demande adressée au responsable du traitement ({{date_demande}}).']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-court-mediateur-federal', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба федеральному омбудсмену (Médiateur fédéral)',
    titleDoc: 'Plainte auprès du Médiateur fédéral', titleEn: 'Complaint to the Federal Ombudsman',
    descRu: 'Жалоба федеральному омбудсмену (Loi du 23 mars 1995) на администрацию: неоправданная задержка досье, отказ в административной информации, ошибка в решении, некорректное поведение чиновника.',
    descEn: 'Complaint to the Federal Ombudsman (Law of 23 March 1995) about a federal administration: unjustified delay, refusal of information, administrative error or inadequate conduct of a public official.',
    descDoc: 'Plainte auprès du Médiateur fédéral (loi du 23 mars 1995).',
    refRu: 'Loi du 23 mars 1995 portant création d’un Médiateur fédéral',
    refEn: 'Law of 23 March 1995 establishing the Federal Ombudsman',
    fields: [
      ...admFields([
        F('administration', 'Администрация (ведомство)', 'Administration concerned', 'text', { half: true, placeholderDoc: 'SPF Mobilité et Transports — Direction régionale' }),
        F('probleme', 'Суть претензии', 'Complaint described', 'select', {
          options: [
            'un retard injustifié dans le traitement de mon dossier',
            'un refus de me communiquer des informations administratives',
            'une erreur administrative affectant une décision me concernant',
            'un comportement inadéquat d’un agent public',
          ],
        }),
        F('date_demarche', 'Дата предварительного обращения', 'Date of the prior approach', 'date', { half: true }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'PLAINTE AUPRÈS DU MÉDIATEUR FÉDÉRAL' },
      ...obj('plainte relative à {{administration}}'),
      ...salut(),
      ...P('Je me plains du fonctionnement de l’administration fédérale suivante : {{administration}}. Les faits sont les suivants : {{probleme}}.'),
      ...P('Le {{date_demarche}}, j’ai introduit une démarche écrite auprès des services concernés, restée sans effet utile. Conformément à la loi du 23 mars 1995 portant création d’un Médiateur fédéral, je vous demande d’instruire ma plainte, de proposer une médiation et de me communiquer vos recommandations.'),
      ...pj(['Copie de la démarche adressée à l’administration ({{date_demarche}}).']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-court-juge-paix', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Ходатайство мировому судье (juge de paix, до 5 000 EUR)',
    titleDoc: 'Requête au juge de paix', titleEn: 'Application to the justice of the peace',
    descRu: 'Ходатайство мировому судье о взыскании суммы до 5 000 EUR: sommation interpellative, совершённая по ст. 1144 Судебного кодекса, предмет требования, законные проценты и издержки.',
    descEn: 'Application to the justice of the peace for a claim not exceeding 5,000 EUR: prior formal summons (sommation interpellative, art. 1144 of the Judicial Code), subject of the claim, interest and costs.',
    descDoc: 'Requête au juge de paix tendant au paiement d’une somme n’excédant pas 5 000 EUR (article 1144 du Code judiciaire).',
    refRu: 'ст. 590 и сл., ст. 1144 Code judiciaire — компетенция juge de paix; sommation interpellative',
    refEn: 'Articles 590 et seq. and 1144 of the Judicial Code — jurisdiction of the justice of the peace; formal summons',
    fields: [
      F('court_name', 'Мировой суд (кантон)', 'Justice of the peace (canton)', 'text', { half: true, placeholderDoc: 'Justice de paix du canton de Bruxelles' }),
      F('plaintiff_name', 'Ваше имя (истец)', 'Claimant’s name', 'text', { half: true, placeholderDoc: 'Marie Dubois' }),
      F('plaintiff_address', 'Ваш адрес', 'Claimant’s address', 'text', { half: true, placeholderDoc: 'Rue Royale 12, 1000 Bruxelles' }),
      F('defendant_name', 'Имя ответчика', 'Defendant’s name', 'text', { half: true, placeholderDoc: 'Karim Benali' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant’s address', 'text', { half: true, placeholderDoc: 'Rue du Midi 45, 1000 Bruxelles' }),
      F('objet_demande', 'Предмет требования', 'Subject of the claim', 'text', { half: true, placeholderDoc: 'paiement d’une facture impayée' }),
      F('montant', 'Сумма требования', 'Amount claimed', 'text', { half: true, placeholderDoc: '2 450,00 EUR' }),
      F('date_sommation', 'Дата sommation interpellative', 'Date of the formal summons', 'date', { half: true }),
    ],
    body: [
      courtHdr(['À l’attention de : Madame, Monsieur le Juge de paix']),
      { type: 'title', text: 'REQUÊTE AU JUGE DE PAIX' },
      ...obj('{{objet_demande}} — somme de {{montant}}'),
      { type: 'paragraph', text: 'Madame, Monsieur le Juge,', noIndent: true },
      ...P('Je soussigné(e), {{plaintiff_name}}, domicilié(e) {{plaintiff_address}}, requiers respectueusement de votre honneur d’ordonner à {{defendant_name}}, domicilié(e) {{defendant_address}}, de me payer la somme de {{montant}} au titre de {{objet_demande}}, augmentée des intérêts légaux et des frais de la procédure.'),
      ...P('Une sommation interpellative préalable a été régulièrement accomplie le {{date_sommation}}, conformément à l’article 1144 du Code judiciaire, et est restée sans effet. La demande relève de la compétence du juge de paix, le montant litigieux n’excédant pas 5 000 EUR.'),
      ...pj(['Copie de la sommation interpellative', 'Justificatifs de la créance (factures, reconnaissance de dette).']),
      stdSign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'be-tax-reclamation-finances', kind: 'STANDARD', categorySlug: 'tax-docs',
    titleRu: 'Налоговая жалоба в SPF Finances (réclamation)',
    titleDoc: 'Réclamation auprès du SPF Finances (impôts)', titleEn: 'Tax claim to SPF Finances',
    descRu: 'Административная налоговая жалоба (réclamation) по ст. 374 CIR 1992: оспаривание расчёта налога, применённой ставки, отказанного вычета или штрафа; запрос мотивированного решения, списания и возврата излишне уплаченного.',
    descEn: 'Administrative tax claim (réclamation) under art. 374 of the CIR 1992: contesting the assessment, the applied rate, a wrongly refused deduction or a surcharge; request for a motivated decision and refund.',
    descDoc: 'Réclamation fiscale auprès du SPF Finances (articles 374 et suivants du CIR 1992).',
    refRu: 'ст. 374 и сл. Code des impôts sur les revenus 1992 — административная налоговая жалоба (réclamation)',
    refEn: 'Articles 374 et seq. of the Income Tax Code 1992 — administrative tax claim',
    fields: [
      ...admFields([
        F('annee_imposition', 'Налоговый период', 'Tax year', 'text', { half: true, placeholderDoc: 'exercice d’imposition 2025' }),
        F('num_avis', 'Номер уведомления', 'Assessment reference', 'text', { half: true, placeholderDoc: '2016/254789' }),
        F('date_avis', 'Дата уведомления', 'Date of the assessment', 'date', { half: true }),
        F('objet_contestation', 'Предмет оспаривания', 'Object of the claim', 'select', {
          options: [
            'le montant de l’impôt calculé',
            'l’application d’un taux erroné',
            'le refus d’une déduction à tort',
            'une amende ou une majoration d’impôt injustifiée',
          ],
        }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'RÉCLAMATION FISCALE AUPRÈS DU SPF FINANCES' },
      ...obj('réclamation — exercice d’imposition {{annee_imposition}}'),
      ...salut(),
      ...P('Conformément aux articles 374 et suivants du Code des impôts sur les revenus 1992, je dépose une réclamation contre l’avis d’imposition relatif à l’exercice d’imposition {{annee_imposition}} (référence : {{num_avis}}), reçu le {{date_avis}}.'),
      ...P('Je conteste : {{objet_contestation}}.'),
      ...P('Je vous demande de rectifier l’avis et, le cas échéant, de procéder au dégrèvement et à la restitution des sommes indûment perçues, avec les intérêts légaux. Je vous remercie de me communiquer une décision motivée dans les délais prévus par la loi.'),
      ...pj(['Copie de l’avis d’imposition contesté', 'Pièces justificatives (attestations, calculs, correspondance).']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-bank-reclamation', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Жалоба в банк',
    titleDoc: 'Réclamation auprès de la banque', titleEn: 'Complaint to the bank',
    descRu: 'Жалоба банку по Loi du 22 mars 2006: комиссии без согласия, ошибка исполнения платежа, необоснованная блокировка счёта, отказ в возврате средств. Ответ в течение 15 рабочих дней, иначе ombudsfin.',
    descEn: 'Complaint to the bank under the Law of 22 March 2006: unauthorised charges, payment execution error, unjustified account block or refusal to release funds; answer within fifteen business days, failing which ombudsfin.',
    descDoc: 'Réclamation auprès de la banque (loi du 22 mars 2006) ; saisine d’ombudsfin à défaut de réponse.',
    refRu: 'Loi du 22 mars 2006 — порядок рассмотрения жалоб в финансовых услугах; ombudsfin',
    refEn: 'Law of 22 March 2006 — handling of complaints in financial services; ombudsfin',
    fields: [
      ...admFields([
        F('produit_bancaire', 'Банковский продукт', 'Banking product', 'text', { half: true, placeholderDoc: 'compte à vue n° BE12 3456 7890 1234' }),
        F('probleme', 'Суть проблемы', 'Problem described', 'select', {
          options: [
            'des frais ont été prélevés sans mon accord préalable',
            'un paiement a été exécuté de manière erronée',
            'mon compte a été bloqué sans justification',
            'la restitution de mes avoirs m’a été refusée',
          ],
        }),
        F('date_incident', 'Дата инцидента', 'Date of the incident', 'date', { half: true }),
        F('montant_conteste', 'Оспариваемая сумма', 'Amount disputed', 'text', { half: true, placeholderDoc: '180,50 EUR' }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'RÉCLAMATION AUPRÈS DE LA BANQUE' },
      ...obj('réclamation — {{produit_bancaire}}'),
      ...salut(),
      ...P('Je vous adresse une réclamation concernant le produit bancaire suivant : {{produit_bancaire}}. Le {{date_incident}}, les faits suivants se sont produits : {{probleme}}.'),
      ...P('Le montant contesté s’élève à {{montant_conteste}}. Conformément à la loi du 22 mars 2006 relative au traitement des réclamations en matière de services financiers, je vous demande une réponse écrite et motivée dans les quinze jours ouvrables. À défaut, je saisirai le service d’ombudsfin et réserve tous mes droits.'),
      ...pj(['Relevés et justificatifs des opérations contestées.']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-bank-releve-compte', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Запрос выписки по счёту и истории операций',
    titleDoc: 'Demande de relevé de compte', titleEn: 'Account statement request',
    descRu: 'Запрос копий выписок по счёту и истории операций за период (бумажных или электронных). Право клиента на письменную фиксацию операций; комиссии за дублирование — только после предварительного уведомления.',
    descEn: 'Request for copies of account statements and transaction history for a given period (paper or electronic); the client’s right to a written record, with prior notice of any duplication fees.',
    descDoc: 'Demande de relevés de compte et d’historique des opérations pour une période donnée.',
    refRu: 'Code de droit économique, Livre VII — услуги платежей и документирование операций',
    refEn: 'Code of Economic Law, Book VII — payment services and documentation of transactions',
    fields: [
      ...admFields([
        F('num_compte', 'Номер счёта (IBAN)', 'Account number (IBAN)', 'text', { half: true, placeholderDoc: 'BE68 5390 0754 7034' }),
        F('date_from', 'Период с', 'Period from', 'date', { half: true }),
        F('date_to', 'Период по', 'Period to', 'date', { half: true }),
        F('format_livraison', 'Формат получения', 'Delivery format', 'select', {
          options: [
            'format électronique (PDF sécurisé)',
            'format papier (envoi postal)',
          ],
        }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'DEMANDE DE RELEVÉS DE COMPTE' },
      ...obj('relevés du compte {{num_compte}}'),
      ...salut(),
      ...P('Je vous prie de bien vouloir me communiquer la copie des relevés du compte suivant : {{num_compte}}, pour la période du {{date_from}} au {{date_to}}.'),
      ...P('Je souhaite recevoir ces documents selon la modalité suivante : {{format_livraison}}. Conformément à la législation relative aux services de paiement, le client a droit à une trace écrite des opérations effectuées. Je vous remercie de m’indiquer préalablement, le cas échéant, les frais éventuels de duplication avant tout prélèvement.'),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-soc-mutuelle-cpas', kind: 'STANDARD', categorySlug: 'soc-benefits',
    titleRu: 'Оспаривание решения mutuelle / CPAS',
    titleDoc: 'Contestation d’une décision (mutuelle / CPAS)', titleEn: 'Contesting a mutuelle / CPAS decision',
    descRu: 'Оспаривание решения mutuelle или CPAS (Loi du 12 avril 1965): отказ или корректировка дохода интеграции, возмещения расходов на лечение, пособия для инвалидов, неотложной медпомощи. Просит пересмотр, копию досье; резервирует обращения.',
    descEn: 'Contestation of a decision by a mutuelle or CPAS (Law of 12 April 1965): refusal or adjustment of integration income, healthcare refunds, disability allowance or urgent medical aid; requests review and the case file.',
    descDoc: 'Contestation d’une décision de mutuelle ou de CPAS (loi du 12 avril 1965) et demande de réexamen.',
    refRu: 'Loi du 12 avril 1965 relative aux CPAS (ст. 145 и сл.) — пересмотр и обжалование решений',
    refEn: 'Law of 12 April 1965 on public centres for social welfare (arts. 145 et seq.) — review and appeals',
    fields: [
      ...admFields([
        F('date_decision', 'Дата решения', 'Date of the decision', 'date', { half: true }),
        F('ref_decision', 'Реквизиты решения', 'Decision reference', 'text', { half: true, placeholderDoc: 'dossier n° 2025-04871' }),
        F('type_aide', 'Вид помощи', 'Type of assistance', 'select', {
          options: [
            'l’aide sociale financière (revenu d’intégration)',
            'le remboursement de frais de soins',
            'l’allocation pour personne handicapée',
            'l’aide médicale urgente',
          ],
        }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'CONTESTATION D’UNE DÉCISION' },
      ...obj('contestation de la décision du {{date_decision}}'),
      ...salut(),
      ...P('Par la présente, je conteste la décision du {{date_decision}} (référence : {{ref_decision}}) concernant {{type_aide}}.'),
      ...P('Cette décision ne paraît pas tenir compte de ma situation réelle et n’est pas suffisamment motivée. Je vous demande de bien vouloir réexaminer mon dossier, de me communiquer copie complète de celui-ci ainsi que les éléments sur lesquels la décision repose.'),
      ...P('Je me réserve le droit d’introduire un recours devant le ministre compétent ou le tribunal du travail, selon la législation applicable (loi du 12 avril 1965 relative aux centres publics d’action sociale ; législation sur les mutualités), dans les délais prévus.'),
      ...pj(['Copie de la décision contestée', 'Justificatifs de la situation (revenus, factures de soins).']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-soc-pension', kind: 'STANDARD', categorySlug: 'soc-pension',
    titleRu: 'Заявление о назначении пенсии по старости (SFP Pensions)',
    titleDoc: 'Demande de pension de retraite (SFP Pensions)', titleEn: 'Old-age pension application (Federal Pensions Service)',
    descRu: 'Заявление в Service fédéral des Pensions о назначении пенсии по старости с даты достижения пенсионного возраста: проверка карьеры (наёмный труд, самозанятость, Бельгия и заграница), минимальная пенсия, пенсия по потере кормильца.',
    descEn: 'Application to the Federal Pensions Service for the old-age pension from the statutory pensionable age: career review (employee, self-employed, Belgium and abroad), minimum pension, survivor’s pension.',
    descDoc: 'Demande de liquidation de la pension de retraite auprès du Service fédéral des Pensions (SFP Pensions).',
    refRu: 'Loi du 28 décembre 1984 (пенсия по старости работников); Code des pensions — loi du 21 juin 1985',
    refEn: 'Law of 28 December 1984 (old-age and survivors’ pensions for workers); Pensions Code of 21 June 1985',
    fields: [
      ...admFields([
        F('date_from', 'Дата начала пенсии', 'Pension start date', 'date', { half: true }),
        F('num_ident', 'Национальный номер (NISS)', 'National number (NISS)', 'text', { half: true, placeholderDoc: '60.03.22-478.19' }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'DEMANDE DE PENSION DE RETRAITE' },
      ...obj('liquidation de ma pension de retraite à partir du {{date_from}}'),
      ...salut(),
      ...P('Je demande la liquidation de ma pension de retraite à partir du {{date_from}}, date à laquelle j’atteins l’âge légal de la pension. Mon numéro d’identification (NISS) est le suivant : {{num_ident}}.'),
      ...P('Ma carrière comprend des périodes d’activité salariée et, le cas échéant, indépendante, ainsi que des périodes reconnues en Belgique et à l’étranger. Conformément à la loi du 28 décembre 1984 relative aux pensions de retraite et de survie des travailleurs et au Code des pensions (loi du 21 juin 1985), je vous prie d’examiner l’ensemble de mes droits, y compris la pension minimale garantie et, le cas échéant, la pension de survie.'),
      ...P('Je vous remercie de m’adresser le formulaire de demande ainsi que la liste des documents à produire, et de me notifier votre décision par écrit.'),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-med-plainte-etablissement', kind: 'STANDARD', categorySlug: 'med-appeals',
    titleRu: 'Жалоба в учреждение здравоохранения',
    titleDoc: 'Plainte auprès d’un établissement de soins', titleEn: 'Complaint to a care institution',
    descRu: 'Жалоба в учреждение здравоохранения (служба медиации пациента, ст. 11 Loi du 22 août 2002): качество лечения, недостаточная информация и согласие, отказ в доступе к досье, поведение персонала.',
    descEn: 'Complaint to a care institution (patient mediation service, art. 11 of the Law of 22 August 2002): quality of care, insufficient information and consent, denied access to records, staff conduct.',
    descDoc: 'Plainte auprès d’un établissement de soins — intervention du service de médiation patient (article 11 de la loi du 22 août 2002).',
    refRu: 'ст. 11 Loi du 22 août 2002 relative aux droits du patient — функция жалоб и медиация пациента',
    refEn: 'Article 11 of the Law of 22 August 2002 on patients’ rights — complaints function and patient mediation',
    fields: [
      ...admFields([
        F('patient_name', 'Имя пациента', 'Patient’s name', 'text', { half: true, placeholderDoc: 'Marie Dubois' }),
        F('date_soins', 'Дата оказания помощи', 'Date of the care', 'date', { half: true }),
        F('probleme', 'Суть жалобы', 'Complaint described', 'select', {
          options: [
            'la qualité des soins ou du traitement prodigué',
            'une information insuffisante sur le traitement et son consentement',
            'un refus d’accès au dossier médical',
            'le comportement d’un membre du personnel',
          ],
        }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'PLAINTE AUPRÈS D’UN ÉTABLISSEMENT DE SOINS' },
      ...obj('plainte relative aux soins du {{date_soins}}'),
      ...salut(),
      ...P('Je dépose une plainte concernant les soins dispensés le {{date_soins}} à {{patient_name}} dans votre établissement. Les faits que je signale sont les suivants : {{probleme}}.'),
      ...P('Conformément à l’article 11 de la loi du 22 août 2002 relative aux droits du patient, je demande l’intervention du service de médiation patient, l’organisation d’une rencontre et une réponse écrite aux points soulevés ci-dessus. Je rappelle que le patient a droit à une information complète et à un libre consentement éclairé.'),
      ...pj(['Copie des documents médicaux disponibles (le cas échéant).']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-med-dossier', kind: 'STANDARD', categorySlug: 'med-records',
    titleRu: 'Запрос доступа к медицинскому досье',
    titleDoc: 'Demande d’accès au dossier médical', titleEn: 'Medical record access request',
    descRu: 'Запрос доступа к медицинскому досье (ст. 9 Loi du 22 août 2002): полная копия или просмотр на месте с профессионалом; срок один месяц, разумная оплата копирования.',
    descEn: 'Request for access to the medical record (art. 9 of the Law of 22 August 2002): full copy or on-site consultation with a professional; one-month deadline and reasonable copying costs only.',
    descDoc: 'Demande d’accès au dossier médical (article 9 de la loi du 22 août 2002 relative aux droits du patient).',
    refRu: 'ст. 9 Loi du 22 août 2002 — доступ к медицинскому досье (30 дней, копия)',
    refEn: 'Article 9 of the Law of 22 August 2002 — access to the medical record (one month, copy)',
    fields: [
      ...admFields([
        F('patient_name', 'Имя пациента', 'Patient’s name', 'text', { half: true, placeholderDoc: 'Marie Dubois' }),
        F('format_acces', 'Форма доступа', 'Access format', 'select', {
          options: [
            'la copie intégrale du dossier, sur support papier ou électronique',
            'la consultation sur place, en présence d’un professionnel de la santé',
          ],
        }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'DEMANDE D’ACCÈS AU DOSSIER MÉDICAL' },
      ...obj('accès au dossier médical de {{patient_name}}'),
      ...salut(),
      ...P('Conformément à l’article 9 de la loi du 22 août 2002 relative aux droits du patient, je demande l’accès au dossier médical de {{patient_name}}, suivi(e) dans votre institution.'),
      ...P('Je souhaite disposer du dossier selon la modalité suivante : {{format_acces}}. Je rappelle que l’accès doit être donné dans un délai d’un mois après la demande et que seuls des coûts raisonnables de duplication peuvent être réclamés.'),
      ...P('Une pièce d’identité ainsi que, le cas échéant, la justification de ma qualité de représentant légal vous seront remises sur simple demande.'),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-edu-inscription', kind: 'STANDARD', categorySlug: 'edu-docs',
    titleRu: 'Заявление о зачислении ребёнка в школу',
    titleDoc: 'Demande d’inscription scolaire', titleEn: 'School enrolment application',
    descRu: 'Заявление о зачислении ребёнка в школу на учебный год (Pacte scolaire, loi du 29 mai 1959): свобода выбора школы, запрет дискриминационных отказов, письменное подтверждение и список документов.',
    descEn: 'School enrolment application for a child (School Pact, Law of 29 May 1959): freedom of school choice, ban on discriminatory refusals, written confirmation and list of documents.',
    descDoc: 'Demande d’inscription scolaire pour l’année scolaire choisie (Pacte scolaire, loi du 29 mai 1959).',
    refRu: 'Loi du 29 mai 1959 (Pacte scolaire) — свобода выбора школы и право на зачисление',
    refEn: 'Law of 29 May 1959 (School Pact) — freedom of school choice and right to enrolment',
    fields: [
      ...admFields([
        F('enfant_name', 'Имя ребёнка', 'Child’s name', 'text', { half: true, placeholderDoc: 'Lucas Dubois' }),
        F('enfant_nais', 'Дата рождения ребёнка', 'Child’s date of birth', 'date', { half: true }),
        F('classe', 'Класс', 'Grade', 'text', { half: true, placeholderDoc: '3e primaire' }),
        F('annee_scolaire', 'Учебный год', 'School year', 'text', { half: true, placeholderDoc: '2025–2026' }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'DEMANDE D’INSCRIPTION SCOLAIRE' },
      ...obj('inscription de {{enfant_name}} pour l’année scolaire {{annee_scolaire}}'),
      ...salut(),
      ...P('Je demande l’inscription de mon enfant, {{enfant_name}}, né(e) le {{enfant_nais}}, en {{classe}}, pour l’année scolaire {{annee_scolaire}}.'),
      ...P('En vertu du Pacte scolaire (loi du 29 mai 1959), l’école ne peut refuser une inscription pour des motifs discriminatoires et tout refus doit être justifié par écrit. Je vous remercie de me confirmer cette inscription par écrit et de m’indiquer la liste des documents à fournir ainsi que les dates utiles de rentrée.'),
      ...pj(['Copie de la carte d’identité de l’enfant (ou attestation)', 'Document attestant le domicile de la famille.']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-uni-bourse', kind: 'STANDARD', categorySlug: 'uni-money',
    titleRu: 'Заявление на учебное пособие (bourse d’études)',
    titleDoc: 'Demande d’aide financière pour études', titleEn: 'Student grant application',
    descRu: 'Заявление на стипендию/учебное пособие (allocation d’études) в Fédération Wallonie-Bruxelles по декрету от 30 апреля 2009 г.: доходы студента и родителей, комплект досье, письменное решение и пути обжалования.',
    descEn: 'Application for a study grant (allocation d’études) in the French Community under the decree of 30 April 2009: student and parental income, complete file, written decision and appeal routes.',
    descDoc: 'Demande d’allocation d’études (décret du 30 avril 2009 de la Fédération Wallonie-Bruxelles).',
    refRu: 'Décret du 30 avril 2009 (FWB) — учебные пособия и займы студентам',
    refEn: 'Decree of 30 April 2009 (French Community) — student grants and loans',
    fields: [
      ...admFields([
        F('annee_academique', 'Учебный год', 'Academic year', 'text', { half: true, placeholderDoc: '2025–2026' }),
        F('num_matricule', 'Номер матрикула', 'Student number', 'text', { half: true, placeholderDoc: 'matricule 20194152' }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'DEMANDE D’AIDE FINANCIÈRE POUR ÉTUDES' },
      ...obj('allocation d’études — année académique {{annee_academique}}'),
      ...salut(),
      ...P('Par la présente, je sollicite l’octroi d’une allocation d’études pour l’année académique {{annee_academique}}, conformément au décret du 30 avril 2009 relatif aux allocations et prêts d’études de la Fédération Wallonie-Bruxelles. Mon numéro de matricule est le suivant : {{num_matricule}}.'),
      ...P('Ma situation de revenus, ainsi que celle de mes parents le cas échéant, est détaillée dans le formulaire joint et justifiée par les documents requis. Je vous remercie de me notifier votre décision par écrit et de m’indiquer, en cas de refus, les voies de recours disponibles.'),
      ...pj(['Formulaire de demande d’allocation d’études complété', 'Avis d’imposition (étudiant et/ou parents)', 'Attestation d’inscription à l’établissement.']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-uni-demande', kind: 'STANDARD', categorySlug: 'uni-common',
    titleRu: 'Обращение в университет (аттестаты, перенос, эквивалентность)',
    titleDoc: 'Demande adressée à l’université', titleEn: 'Request to the university',
    descRu: 'Универсальное обращение к университету или haute école: аттестат зачисления, перенос регистрации на следующий год, эквивалентность кредитов, полученных за границей, дубликат диплома (décret « Paysage » du 7 août 2014).',
    descEn: 'General request to a university or college: enrolment certificate, deferral of registration, equivalence of foreign credits, diploma duplicate (Landscape decree of 7 August 2014).',
    descDoc: 'Demande adressée à l’université (décret « Paysage » du 7 août 2014 — enseignement supérieur).',
    refRu: 'Décret du 7 août 2014 («décret Paysage», FWB) — организация высшего образования',
    refEn: 'Decree of 7 August 2014 (“Landscape decree”, French Community) — higher education framework',
    fields: [
      ...admFields([
        F('objet_demande', 'Предмет обращения', 'Subject of the request', 'select', {
          options: [
            'la délivrance d’une attestation d’inscription',
            'le report de mon inscription à l’année académique suivante',
            'la reconnaissance d’équivalence de crédits acquis à l’étranger',
            'la délivrance d’un duplicata de mon diplôme',
          ],
        }),
        F('annee_academique', 'Учебный год', 'Academic year', 'text', { half: true, placeholderDoc: '2025–2026' }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'DEMANDE ADRESSÉE À L’UNIVERSITÉ' },
      ...obj('demande pour l’année académique {{annee_academique}}'),
      ...salut(),
      ...P('Par la présente, je sollicite : {{objet_demande}}, pour l’année académique {{annee_academique}}.'),
      ...P('Conformément au décret du 7 août 2014 définissant le paysage de l’enseignement supérieur et l’organisation académique des études, je vous remercie de me répondre par écrit dans un délai raisonnable et de m’indiquer, en cas de refus, les motifs ainsi que les voies de recours.'),
      ...pj(['Copie de ma carte d’étudiant ou d’identité', 'Documents justificatifs (le cas échéant).']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-post-bpost', kind: 'STANDARD', categorySlug: 'post-claims',
    titleRu: 'Претензия bpost (посылка потеряна/повреждена)',
    titleDoc: 'Réclamation bpost (colis perdu ou endommagé)', titleEn: 'bpost claim (lost or damaged parcel)',
    descRu: 'Претензия bpost о потерянной или повреждённой посылке с номером отслеживания: расследование цепочки доставки, подтверждение доставки или возмещение; далее — Arbitre de poste.',
    descEn: 'Claim to bpost about a lost or damaged parcel with a tracking number: investigation of the distribution chain, proof of delivery or compensation; failing that, the Post Arbitrator (Arbitre de poste).',
    descDoc: 'Réclamation bpost pour colis perdu ou endommagé ; saisine de l’Arbitre de poste à défaut.',
    refRu: 'Loi du 21 mars 1991 (реформа публичных предприятий) и почтовое законодательство — универсальная почтовая служба; Arbitre de poste',
    refEn: 'Law of 21 March 1991 (reform of public undertakings) and postal legislation — universal postal service; Post Arbitrator',
    fields: [
      ...admFields([
        F('num_suivi', 'Номер отслеживания', 'Tracking number', 'text', { half: true, placeholderDoc: '329871654320' }),
        F('date_envoi', 'Дата отправки', 'Dispatch date', 'date', { half: true }),
        F('statut', 'Статус посылки', 'Parcel status', 'select', {
          options: [
            'le colis n’a jamais été livré et son statut n’évolue plus',
            'le colis est marqué « livré » alors que je ne l’ai pas reçu',
            'le colis a été livré nettement endommagé',
            'des éléments du contenu manquent dans le colis',
          ],
        }),
        F('montant', 'Сумма возмещения', 'Compensation sought', 'text', { half: true, placeholderDoc: '125,00 EUR' }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'RÉCLAMATION POUR COLIS PERDU OU ENDOMMAGÉ' },
      ...obj('envoi suivi n° {{num_suivi}}'),
      ...salut(),
      ...P('Je vous adresse une réclamation concernant l’envoi portant le numéro de suivi {{num_suivi}}, déposé le {{date_envoi}}. Le statut constaté est le suivant : {{statut}}.'),
      ...P('Je vous demande de mener une enquête complète sur le circuit de distribution de cet envoi et, selon le cas, de fournir la preuve de livraison ou de m’indemniser à hauteur de {{montant}}. À défaut de résolution dans le délai d’un mois, je saisirai l’Arbitre de poste.'),
      ...pj(['Preuve de dépôt et numéro de suivi', 'Photos de l’emballage (le cas échéant).']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-util-reparations-bailleur', kind: 'STANDARD', categorySlug: 'util-management',
    titleRu: 'Требование арендодателю о ремонте',
    titleDoc: 'Demande de réparations au bailleur', titleEn: 'Repair demand to the landlord',
    descRu: 'Требование арендодателю устранить дефекты жилья (Loi du 20 février 1991, ст. 3; ст. 1753 Code civil — grosses réparations): срок 14 дней, иначе формальная mise en demeure и мировой судья.',
    descEn: 'Demand to the landlord to repair housing defects (Law of 20 February 1991, art. 3; art. 1753 Civil Code — major repairs): fourteen-day deadline, failing which a formal notice and the justice of the peace.',
    descDoc: 'Demande de réparations au bailleur (loi du 20 février 1991 relative au bail résidentiel).',
    refRu: 'ст. 3 Loi du 20 février 1991 (bail résidentiel); ст. 1753 Code civil — крупные ремонты на арендодателе',
    refEn: 'Article 3 of the Law of 20 February 1991 (residential lease); article 1753 of the Civil Code — major repairs on the landlord',
    fields: [
      ...admFields([
        F('adresse_bien', 'Адрес жилья', 'Rented property address', 'text', { half: true, placeholderDoc: 'Rue Haute 210, 1000 Bruxelles' }),
        F('date_bail', 'Дата договора аренды', 'Lease date', 'date', { half: true }),
        F('defauts', 'Описание дефектов', 'Defects described', 'text', { half: true, placeholderDoc: 'fuite de toiture, chauffage central hors service' }),
        F('date_constat', 'Дата обнаружения', 'Date noticed', 'date', { half: true }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'DEMANDE DE RÉPARATIONS AU BAILLEUR' },
      ...obj('réparations locatives — {{adresse_bien}}'),
      ...salut(),
      ...P('Je suis locataire du bien situé {{adresse_bien}} en vertu du bail conclu le {{date_bail}}. Je vous signale les défauts suivants, constatés le {{date_constat}} : {{defauts}}.'),
      ...P('Conformément à l’article 3 de la loi du 20 février 1991 relative au bail résidentiel, vous êtes tenu de livrer le bien en bon état et d’en assurer le maintien ; les grosses réparations visées à l’article 1753 du Code civil restent à votre charge. Je vous demande d’organiser les réparations nécessaires dans un délai de quatorze jours, après accord sur la date de visite au {{applicant_phone}}.'),
      ...P('À défaut d’exécution dans ce délai, je vous adresserai une mise en demeure formelle et, si nécessaire, une requête devant le juge de paix aux fins d’exécution forcée, tous frais et dépens réservés.'),
      ...pj(['Photos des défauts constatés', 'Copie du bail (extrait).']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-util-neighbors-noise', kind: 'STANDARD', categorySlug: 'util-neighbors',
    titleRu: 'Жалоба на шумовых соседей',
    titleDoc: 'Plainte pour nuisances sonores de voisinage', titleEn: 'Neighbour noise nuisance complaint',
    descRu: 'Жалоба мэру/полиции на шумовые неудобства от соседей (ст. 5.126 Code civil — аномальные неудобства соседства; Loi du 24 février 1976 о борьбе с шумом): мирная попытка урегулирования, просьба о проверках и констатациях.',
    descEn: 'Complaint to the mayor or police about noise nuisances from neighbours (art. 5.126 Civil Code — abnormal neighbourhood nuisances; the noise abatement law of 24 February 1976): amicable step, requests for checks and reports.',
    descDoc: 'Plainte pour nuisances sonores de voisinage (article 5.126 du Code civil, livre 5).',
    refRu: 'ст. 5.126 Code civil, livre 5 — аномальные неудобства соседства; Loi du 24 février 1976 (борьба с шумом)',
    refEn: 'Article 5.126 of the Civil Code, Book 5 — abnormal neighbourhood nuisances; Law of 24 February 1976 (noise abatement)',
    fields: [
      ...admFields([
        F('adresse_voisin', 'Адрес соседнего жилья', 'Neighbour’s address', 'text', { half: true, placeholderDoc: 'Rue Haute 212, 1000 Bruxelles' }),
        F('nuisances', 'Характер шума', 'Nature of the noise', 'select', {
          options: [
            'des fêtes bruyantes répétées en pleine nuit',
            'des travaux de bricolage hors des heures autorisées',
            'un usage habituel d’appareils audio à volume excessif',
            'des aboiements constants d’animaux',
          ],
        }),
        F('date_demarche', 'Дата мирной попытки урегулирования', 'Date of the amicable step', 'date', { half: true }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'PLAINTE POUR NUISANCES SONORES DE VOISINAGE' },
      ...obj('nuisances sonores — {{adresse_voisin}}'),
      ...salut(),
      ...P('Je porte à votre connaissance des nuisances sonores répétées en provenance du bien voisin situé {{adresse_voisin}}. La nature des nuisances est la suivante : {{nuisances}}.'),
      ...P('Ces nuisances portent atteinte de manière anormale à la jouissance paisible de mon logement, contrairement à l’article 5.126 du Code civil (livre 5) relatif aux émanations de voisinage, ainsi qu’à la législation sur la lutte contre le bruit (loi du 24 février 1976) et au règlement de police local. Une démarche amiable effectuée le {{date_demarche}} est restée sans résultat.'),
      ...P('Je vous demande de bien vouloir faire procéder à des constats aux heures concernées, d’avertir les occupants du bien voisin et de me tenir informé des suites. Je me réserve le droit d’introduire une action civile en cessation des troubles.'),
      ...pj(['Journal des nuisances (dates et heures)', 'Copie de la démarche amiable ({{date_demarche}}).']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'be-util-changement-domicile', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Декларация о перемене места жительства',
    titleDoc: 'Déclaration de changement de domicile', titleEn: 'Change of residence declaration',
    descRu: 'Декларация о перемене места жительства в коммуне (Règlement général sur la civicité, loi du 19 juillet 2011): внесение в реестр населения, обновление реестра национального и карты eID, справка о domicile.',
    descEn: 'Declaration of change of residence at the commune (General Civic Status Regulations, Law of 19 July 2011): population register update, national register and eID card, residence certificate.',
    descDoc: 'Déclaration de changement de domicile auprès de l’administration communale (loi du 19 juillet 2011).',
    refRu: 'Loi du 19 juillet 2011 (Règlement général sur la civicité) — декларация о месте жительства в коммуне',
    refEn: 'Law of 19 July 2011 (General Regulations on Civic Status) — declaration of residence at the commune',
    fields: [
      ...admFields([
        F('nouvelle_adresse', 'Новый адрес', 'New address', 'text', { half: true, placeholderDoc: 'Avenue de la Couronne 88, 1050 Ixelles' }),
        F('date_from', 'Дата с', 'Effective from', 'date', { half: true }),
        F('membres', 'Члены семьи, переезжающие вместе', 'Family members moving along', 'text', { half: true, placeholderDoc: 'супруг(а) и двое несовершеннолетних детей' }),
      ]),
    ],
    body: [
      ...admHdr(),
      { type: 'title', text: 'DÉCLARATION DE CHANGEMENT DE DOMICILE' },
      ...obj('changement de domicile à partir du {{date_from}}'),
      ...salut(),
      ...P('Par la présente, je déclare mon changement de domicile à compter du {{date_from}}. Ma nouvelle adresse est la suivante : {{nouvelle_adresse}}.'),
      ...P('Sont concernés par ce déménagement les membres de la famille suivants : {{membres}}. Conformément à la loi du 19 juillet 2011 portant le Règlement général sur la civicité, cette déclaration est effectuée dans les trente jours du déménagement.'),
      ...P('Je vous prie de procéder à l’inscription au registre de la population, à la mise à jour du registre national et de ma carte d’identité, et de me délivrer une attestation de domicile.'),
      ...pj(['Copie de la carte d’identité', 'Justificatif d’occupation du nouveau logement (bail, acte).']),
      ...courtoisie(),
      stdSign('{{applicant_name}}'),
    ],
  },
];
