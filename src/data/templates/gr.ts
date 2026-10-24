// Шаблоны для Греции (язык документов — греческий, μονότονο).
// Основано на законодательстве Греции:
// π.δ. 741/2016 (ΚΑΔΑ) — ετήσια κανονική άδεια: 20 εργάσιμες ημέρες (πενθήμερο) / 24 (εξαήμερο);
// ν. 3899/2010 — προθεσμία 3 μηνών για προσφυγή κατά της απόλυσης; ΑΚ 200 — καταγγελία σύμβασης;
// ν. 3655/2008 — άδεια κύησης-λοχίας (119 ημέρες); ν. 4808/2021 — εργασιακή προστασία (άρθρα 47, 61);
// ν. 4024/2011 άρθρο 6 — άδεια σοβαρών οικογενειακών λόγων (έως 10 ημέρες);
// π.δ. 88/1999 — ευέλικτη οργάνωση του χρόνου εργασίας;
// ν. 3846/2010 — αναγγελία ασθένειας στον εργοδότη/ΕΦΚΑ; ν. 4488/2017 άρθρο 13 — μισθολογικές καταστάσεις;
// ΑΚ 648 — δευτερεύουσες υποχρεώσεις εργοδότη (πιστοποιητικά);
// ΑΚ 513 κ.ε. και 534-555 — αγορά και εγγύηση; ν. 2251/1994 — προστασία καταναλωτών, ΓΓΚ;
// ΑΚ 574 κ.ε. — μίσθωση; ΑΚ 584, 593, 595 — επισκευές και υποχρεώσεις εκμισθωτή;
// ΑΚ 806 — δάνειο; ΑΚ 914, 932 — αδικοπραγία, ηθική βλάβη; ΑΚ 215-216 — εξουσιοδότηση;
// ΑΚ 1008-1009 — απαγορευμένη ενόχληση; π.δ. 18/1980 — Δημοτικός και Κοινοτικός Κώδικας (θόρυβος);
// ΚΠολΔ άρθρα 465 κ.ε. — ειρηνοδικείο (αρμοδιότητα αξίας έως 20.000 €);
// ν. 4624/2019 άρθρο 91 και GDPR άρθρο 77 — καταγγελία στην Αρχή Προστασίας Δεδομένων;
// ν. 3094/2003 άρθρο 4 — Συνήγορος του Πολίτη;
// ΚΦΔ ν. 4174/2013 άρθρα 63, 66 — ενδικοφανής προσφυγή κατά πράξεων ΑΑΔΕ (30 ημέρες);
// ν. 4389/2016 — ΕΦΚΑ (έννομη προστασία κατά πράξεών του); ν. 4670/2020, ν. 3863/2010 — σύνταξη γήρατος;
// ν. 4213/2013 — δικαιώματα ασθενών, Δικηγόρος Ασθενούς; ν. 2071/1992 άρθρο 47 — ιατρικό αρχείο;
// ν. 4186/2013 — δευτεροβάθμια εκπαίδευση; ν. 4957/2022 — ανώτατη εκπαίδευση;
// ν. 4053/2012 — ταχυδρομικές υπηρεσίες, εποπτεία ΕΕΤΤ; ν. 4224/2013 — εξωδικαστική
// επίλυση τραπεζικών διαφορών, Συνήγορος Καταναλωτή της Τράπεζας της Ελλάδος;
// ν. 3443/2006 — δημοτολόγια (μεταβολή κατοικίας).
import type { TplDef } from '../types';
import { F, hdr, courtHdr } from './helpers';

// Шапка заявления работодателю (греческое делопроизводство): адресат справа, работник ниже
const workHdr = (): TplDef['body'] => [
  {
    type: 'lines',
    align: 'right',
    items: ['{{org_name}}', 'Προς: {{head_name}}', '', '{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{date_today}}'],
  },
];

const workFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('org_name', 'Название компании', 'Company name', 'text', { half: true, placeholderDoc: 'Εμπορική Εταιρεία Α.Ε.' }),
  F('head_name', 'Кому (HR/руководитель)', 'Submit to', 'text', { half: true, placeholderDoc: 'Διευθυντής Προσωπικού' }),
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Παπαδόπουλος Γεώργιος' }),
  F('applicant_afm', 'Ваш АФМ (налоговый №)', 'Your tax ID (AFM)', 'text', { half: true, placeholderDoc: '123456789' }),
  ...extra,
];

const personFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Παπαδόπουλος Γεώργιος' }),
  F('applicant_afm', 'Ваш АФМ (налоговый №)', 'Your tax ID (AFM)', 'text', { half: true, placeholderDoc: '123456789' }),
  F('applicant_address', 'Ваш адрес', 'Your address', 'text', { half: true, placeholderDoc: 'Πανεπιστημίου 10, 10671 Αθήνα' }),
  F('applicant_phone', 'Телефон', 'Phone', 'text', { half: true, placeholderDoc: '210 1234567' }),
  ...extra,
];

const sign = (namePh: string): TplDef['body'][number] => ({
  type: 'signature',
  leftText: 'Με εκτίμηση,',
  rightText: `_______________ / ${namePh} /`,
});

export const TEMPLATES_GR: TplDef[] = [
  // ==================== РАБОТА ====================
  {
    slug: 'gr-work-annual-leave', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление на ежегодный оплачиваемый отпуск',
    titleDoc: 'Αίτηση ετήσιας κανονικής άδειας', titleEn: 'Annual paid leave application',
    descRu: 'Заявление на ежегодную «κανονική άδεια». По π.δ. 741/2016: не менее 20 рабочих дней при 5-дневной неделе (24 дня при 6-дневной); во время отпуска работа и выплата компенсации вместо отпуска запрещены.',
    descEn: 'Application for annual paid leave. Under π.δ. 741/2016: at least 20 working days on a five-day week (24 on a six-day week); work and payment in lieu of leave are prohibited.',
    descDoc: 'Αίτηση προς τον εργοδότη για τη χορήγηση της ετήσιας κανονικής άδειας με αποδοχές.',
    refRu: 'π.δ. 741/2016 — ежегодный отпуск не менее 20 рабочих дней (5-дневная неделя)',
    refEn: 'Presidential Decree 741/2016 — annual leave of at least 20 working days (five-day week)',
    fields: [
      ...workFields([
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
        F('date_to', 'Дата окончания', 'End date', 'date', { half: true }),
        F('days', 'Рабочих дней', 'Working days', 'number', { half: true, placeholderRu: '20' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'ΑΙΤΗΣΗ ΕΤΗΣΙΑΣ ΚΑΝΟΝΙΚΗΣ ΑΔΕΙΑΣ' },
      { type: 'paragraph', text: 'Αξιότιμοι κύριοι,', noIndent: true },
      { type: 'paragraph', text: 'Σας υποβάλλω αίτηση για τη χορήγηση της ετήσιας κανονικής μου άδειας με αποδοχές, σύμφωνα με το π.δ. 741/2016, για το τρέχον ημερολόγιο έτος, από την {{date_from}} έως και την {{date_to}}, συνολικής διάρκειας {{days}} εργάσιμων ημερών (πενθήμερο ωράριο). Στη διάρκεια της άδειας δεν υπολογίζονται οι Κυριακές και οι ημέρες αργίας που τυχόν εμπίπτουν σε αυτήν.', justify: true },
      { type: 'paragraph', text: 'Υπενθυμίζω ότι κατά τη διάρκεια της άδειας δεν επιτρέπεται η απασχόλησή μου ούτε η καταβολή επιδόματος αδείας αντί της πραγματικής άδειας. Αναλαμβάνω την παράδοση των εκκρεμών εργασιών μου πριν από την έναρξη της άδειας, ώστε να μην διαταραχθεί η λειτουργία της υπηρεσίας.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-work-flextime', kind: 'STANDARD', categorySlug: 'work-time',
    titleRu: 'Заявление о гибком графике работы',
    titleDoc: 'Αίτηση ρύθμισης ευέλικτου ωραρίου', titleEn: 'Flexible working hours application',
    descRu: 'Заявление о переводе на систему гибкой организации рабочего времени (π.δ. 88/1999): изменённое время начала и окончания при сохранении полного недельного времени работы, с возможным «временем ядра» (χρόνος πυρήνας).',
    descEn: 'Application for a flexible working-time arrangement (π.δ. 88/1999): shifted start and end times with the same weekly working hours and, if agreed, a core time.',
    descDoc: 'Αίτηση για μεταφορά σε σύστημα ευέλικτης οργάνωσης του χρόνου εργασίας.',
    refRu: 'π.δ. 88/1999 — системы гибкой организации рабочего времени',
    refEn: 'Presidential Decree 88/1999 — flexible organisation of working time',
    fields: [
      ...workFields([
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
        F('schedule_start', 'Предлагаемое время начала', 'Proposed start time', 'text', { half: true, placeholderDoc: '09:30' }),
        F('schedule_end', 'Предлагаемое время окончания', 'Proposed end time', 'text', { half: true, placeholderDoc: '17:30' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'ΑΙΤΗΣΗ ΡΥΘΜΙΣΗΣ ΕΥΕΛΙΚΤΟΥ ΩΡΑΡΙΟΥ' },
      { type: 'paragraph', text: 'Αξιότιμοι κύριοι,', noIndent: true },
      { type: 'paragraph', text: 'Σας υποβάλλω αίτηση για τη μεταφορά μου σε σύστημα ευέλικτης οργάνωσης του χρόνου εργασίας, κατά το π.δ. 88/1999, από την {{date_from}}. Προτείνω το ημερήσιο ωράριό μου να ορίζεται από τις {{schedule_start}} έως τις {{schedule_end}}, με πλήρη διατήρηση του συνολικού εβδομαδιαίου χρόνου εργασίας.', justify: true },
      { type: 'paragraph', text: 'Είμαι σύμφωνος/σύμφωνη να συμφωνηθεί «χρόνος πυρήνας», κατά τον οποίο όλοι οι εργαζόμενοι βρίσκονται στην εργασία τους, καθώς και μέγιστο όριο για την ημερήσια μετακίνηση του ωραρίου. Η ρύθμιση αφορά μόνο το ωράριο και δεν μεταβάλλει τον όγκο ή τη φύση της εργασίας μου, ούτε τα μισθολογικά μου δικαιώματα.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-work-maternity-notice', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Уведомление об отпуске по беременности и родам',
    titleDoc: 'Αναγγελία άδειας κύησης και λοχίας', titleEn: 'Maternity leave notification',
    descRu: 'Письменное уведомление работодателя об отпуске по беременности и родам (119 дней — ν. 3655/2008) с датой начала; защита от увольнения в период беременности и отпуска — ν. 4808/2021 (ст. 61).',
    descEn: 'Written notice to the employer of maternity leave (119 days under Law 3655/2008) with the start date; dismissal protection under Law 4808/2021, art. 61.',
    descDoc: 'Αναγγελία στον εργοδότη της άδειας κύησης και λοχίας με ημερομηνία έναρξης.',
    refRu: 'ν. 3655/2008 — 119 дней отпуска; ν. 4808/2021 — защита от увольнения',
    refEn: 'Law 3655/2008 — 119 days of maternity leave; Law 4808/2021 — dismissal protection',
    fields: [
      ...workFields([
        F('expected_birth', 'Ожидаемая дата родов', 'Expected date of birth', 'date', { half: true }),
        F('date_start', 'Дата начала отпуска', 'Leave start date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'ΑΝΑΓΓΕΛΙΑ ΑΔΕΙΑΣ ΚΥΗΣΗΣ ΚΑΙ ΛΟΧΙΑΣ' },
      { type: 'paragraph', text: 'Αξιότιμοι κύριοι,', noIndent: true },
      { type: 'paragraph', text: 'Με την παρούσα σας αναγγέλλω ότι αναμένω τη γέννηση παιδιού την {{expected_birth}} και ότι θα λάβω άδεια κύησης και λοχίας συνολικής διάρκειας εκατόν δέκα εννέα (119) ημερών, σύμφωνα με τον ν. 3655/2008, από την {{date_start}}.', justify: true },
      { type: 'paragraph', text: 'Σας επιδίδω το ιατρικό ή νοσοκομειακό πιστοποιητικό από το οποίο προκύπτουν τα ανωτέρω. Παρακαλώ όπως αναγγείλετε την άδειά μου στον ΕΦΚΑ και προβείτε στις νόμιμες ενέργειες για την καταβολή του ειδικού επιδόματος μητρότητας. Υπενθυμίζω ότι, κατά τον ν. 4808/2021 (άρθρο 61), απαγορεύεται η καταγγελία της σύμβασης εργασίας μου κατά τη διάρκεια της εγκυμοσύνης και της άδειας, εκτός από εξαιρετικούς νόμιμους λόγους.', justify: true },
      { type: 'attachment', items: ['Ιατρικό ή νοσοκομειακό πιστοποιητικό κύησης.'], label: 'Επισυνάπτεται:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-work-family-leave', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Заявление на отпуск по серьёзным семейным обстоятельствам',
    titleDoc: 'Αίτηση άδειας για σοβαρούς οικογενειακούς λόγους', titleEn: 'Leave for serious family reasons application',
    descRu: 'Заявление на неоплачиваемый отпуск по серьёзным семейным обстоятельствам (болезнь членов семьи): до 10 рабочих дней в год по ст. 6 ν. 4024/2011; с учётом родительских прав ν. 4808/2021 (ст. 47).',
    descEn: 'Application for unpaid leave for serious family reasons (illness of family members): up to 10 working days per year under Law 4024/2011, art. 6.',
    descDoc: 'Αίτηση για χορήγηση άδειας για σοβαρούς οικογενειακούς λόγους.',
    refRu: 'ст. 6 ν. 4024/2011 — до 10 рабочих дней в год; ст. 47 ν. 4808/2021',
    refEn: 'Law 4024/2011 art. 6 — up to 10 working days per year; Law 4808/2021 art. 47',
    fields: [
      ...workFields([
        F('reason', 'Причина отпуска', 'Reason for the leave', 'select', {
          options: [
            'νοσηλεία μέλους της οικογένειάς μου σε νοσοκομείο',
            'σοβαρή ασθένεια συζύγου, τέκνου ή γονέα',
            'φροντίδα τέκνου με αναπηρία ή χρόνια πάθηση',
            'λοιποί σοβαροί οικογενειακοί λόγοι',
          ],
        }),
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
        F('date_to', 'Дата окончания', 'End date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'ΑΙΤΗΣΗ ΑΔΕΙΑΣ ΓΙΑ ΟΙΚΟΓΕΝΕΙΑΚΟΥΣ ΛΟΓΟΥΣ' },
      { type: 'paragraph', text: 'Αξιότιμοι κύριοι,', noIndent: true },
      { type: 'paragraph', text: 'Σας υποβάλλω αίτηση για χορήγηση άδειας για σοβαρούς οικογενειακούς λόγους, σύμφωνα με το άρθρο 6 του ν. 4024/2011, για την περίοδο από την {{date_from}} έως και την {{date_to}}, με την επιφύλαξη της νόμιμης μείωσης των αποδοχών μου για τις ημέρες της άδειας.', justify: true },
      { type: 'paragraph', text: 'Ο λόγος της άδειας είναι ο εξής: {{reason}}. Το αίτημά μου στηρίζεται στα σχετικά ιατρικά έγγραφα, τα οποία επιδίδω μαζί με την παρούσα. Αναλαμβάνω την ολοκλήρωση των επειγουσών εργασιών μου πριν από την έναρξη της άδειας και παραμένω στη διάθεσή σας για τυχόν αναγκαίο συντονισμό.', justify: true },
      { type: 'attachment', items: ['Ιατρικά έγγραφα που τεκμηριώνουν τον λόγο της άδειας.'], label: 'Επισυνάπτονται:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-work-resignation', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Заявление об увольнении по собственному желанию',
    titleDoc: 'Καταγγελία σύμβασης εργασίας από τον εργαζόμενο', titleEn: 'Resignation letter (termination by the employee)',
    descRu: 'Заявление о расторжении трудового договора по инициативе работника: одностороннее прекращение (ΑΚ 200), указание последнего рабочего дня, просьба о расчёте (εκκαθάριση), справке работодателя и уведомлении ЕФКА.',
    descEn: 'Resignation letter terminating the employment contract by the employee’s unilateral declaration (Civil Code art. 200), stating the last working day and requesting final settlement.',
    descDoc: 'Καταγγελία της σύμβασης εργασίας με πρωτοβουλία του εργαζομένου (παραίτηση).',
    refRu: 'ΑΚ 200 — одностороннее расторжение договора; сроки уведомления — по КД/КНС',
    refEn: 'Civil Code art. 200 — unilateral termination; notice periods under the applicable collective agreement',
    fields: [
      ...workFields([
        F('date_end', 'Последний рабочий день', 'Last working day', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'ΚΑΤΑΓΓΕΛΙΑ ΣΥΜΒΑΣΗΣ ΕΡΓΑΣΙΑΣ ΑΠΟ ΤΟΝ ΕΡΓΑΖΟΜΕΝΟ' },
      { type: 'paragraph', text: 'Αξιότιμοι κύριοι,', noIndent: true },
      { type: 'paragraph', text: 'Σας αναγγέλλω ότι, ενεργώντας ελεύθερα και χωρίς καμία πίεση, ασκώ με την παρούσα το δικαίωμά μου καταγγελίας της σύμβασης εργασίας μου αορίστου χρόνου, δυνάμει του άρθρου 200 του Αστικού Κώδικα, με ισχύ από την {{date_end}}, η οποία θα αποτελέσει την τελευταία μου ημέρα εργασίας.', justify: true },
      { type: 'paragraph', text: 'Παρακαλώ όπως προβείτε στην εκκαθάριση των αποδοχών και των λοιπών δικαιωμάτων μου, μου χορηγήσετε πιστοποιητικό εργοδότη και βεβαίωση χρόνου ασφάλισης, και αναγγείλετε τη λύση της σύμβασης στον ΕΦΚΑ. Ευχαριστώ για τη συνεργασία κατά το διάστημα της εργασίας μου στην εταιρεία.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-work-dismissal-appeal', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Обжалование увольнения',
    titleDoc: 'Προσφυγή κατά της απόλυσης', titleEn: 'Appeal against dismissal',
    descRu: 'Письменное досудебное возражение против увольнения: незаконность, отсутствие существенного основания; предупреждение о иске в 3-месячный срок (ν. 3899/2010) и требование компенсации (ΑΚ 672).',
    descEn: 'Written pre-court objection to dismissal and notice of intent to sue within the three-month deadline of Law 3899/2010, claiming annulment or compensation (Civil Code art. 672).',
    descDoc: 'Εξωδικαστικό έγγραφο με το οποίο αμφισβητείται η απόλυση.',
    refRu: 'ν. 3899/2010 — 3-месячный срок обжалования; ΑΚ 672 — компенсация за незаконное увольнение',
    refEn: 'Law 3899/2010 — three-month deadline to challenge dismissal; Civil Code art. 672',
    fields: [
      ...personFields([
        F('employer_name', 'Название работодателя', 'Employer name', 'text', { half: true, placeholderDoc: 'Εμπορική Εταιρεία Α.Ε.' }),
        F('dismissal_date', 'Дата увольнения (анγеллия)', 'Dismissal notice date', 'date', { half: true }),
        F('receipt_date', 'Дата получения уведомления', 'Date of receipt', 'date', { half: true }),
      ]),
    ],
    body: [
      hdr(['{{employer_name}}', 'Προς: Τη Διοίκηση'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΠΡΟΣΦΥΓΗ ΚΑΤΑ ΤΗΣ ΑΠΟΛΥΣΗΣ' },
      { type: 'subtitle', text: 'Θέμα: Αμφισβήτηση της απόλυσης ως παράνομης' },
      { type: 'paragraph', text: 'Στις {{dismissal_date}} έλαβα γνώση της αναγγελίας καταγγελίας της σύμβασης εργασίας μου από την εταιρεία σας (παραλαβή: {{receipt_date}}). Με την παρούσα αμφισβητώ ευθύς την απόλυσή μου ως παράνομη, καθώς δεν στηρίζεται σε ουσιώδη λόγο ούτε τηρεί τις προβλεπόμενες από τον νόμο και τη σύμβαση διαδικασίες.', justify: true },
      { type: 'paragraph', text: 'Σύμφωνα με τον ν. 3899/2010, η αγωγή για την προστασία των δικαιωμάτων μου από τη λύση της σύμβασης εργασίας πρέπει να ασκηθεί εντός τριών (3) μηνών από την παραλαβή της αναγγελίας. Δηλώνω ότι θα ασκήσω αγωγή εντός της προθεσμίας αυτής, αξιώνοντας την ακύρωση της απόλυσης ή τη νόμιμη αποζημίωση (ΑΚ 672), τις ληξιπρόθεσμες αποδοχές και την αποκατάσταση της ζημίας μου (ΑΚ 914). Σας προσκαλώ σε εξωδικαστική επίλυση εντός δέκα (10) ημερών από την επίδοση του παρόντος.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-work-sick-notice', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Уведомление о болезни (отпуск по болезни)',
    titleDoc: 'Αναγγελία αναρρωτικής άδειας', titleEn: 'Sick leave notification',
    descRu: 'Письменное уведомление работодателя о болезни и начале отпуска по болезни: анγеллия в первый день нетрудоспособности (ν. 384/2010), обязательство представить медицинское свидетельство и уведомить ЕФКА.',
    descEn: 'Written notice to the employer of sickness and certified sick leave, with the undertaking to provide a medical certificate and notify EFKA (Law 3846/2010).',
    descDoc: 'Αναγγελία στον εργοδότη της αδυναμής προσέλευσης λόγω ασθένειας.',
    refRu: 'ν. 3846/2010 — анγеллия асθένειας в первый день; сохранение рабочего места',
    refEn: 'Law 3846/2010 — notification of sickness on the first day; job retention during sick leave',
    fields: [
      ...workFields([
        F('date_from', 'Первый день отсутствия', 'First day of absence', 'date', { half: true }),
        F('date_to', 'Ожидаемый день возвращения', 'Expected return date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'ΑΝΑΓΓΕΛΙΑ ΑΝΑΡΡΩΤΙΚΗΣ ΑΔΕΙΑΣ' },
      { type: 'paragraph', text: 'Αξιότιμοι κύριοι,', noIndent: true },
      { type: 'paragraph', text: 'Σας αναγγέλλω ότι από την {{date_from}} αδυνατώ να προσέλθω στην εργασία μου λόγω ασθένειας, όπως προκύπτει από το επισυναπτόμενο ιατρικό πιστοποιητικό. Η αναρρωτική μου άδεια, κατ’ εκτίμηση του θεράποντος ιατρού, εκτείνεται έως και την {{date_to}}.', justify: true },
      { type: 'paragraph', text: 'Σύμφωνα με τον ν. 3846/2010, η αναγγελία της ασθένειας στον εργοδότη και στον ασφαλιστικό οργανισμό γίνεται μέσα στην πρώτη ημέρα αδυναμής προσέλευσης. Θα επιδίδω τις προβλεπόμενες αναγγελίες και τα δικαιολογητικά στον ΕΦΚΑ εντός των νόμιμων προθεσμιών και θα σας ενημερώνω γραπτώς για την πορεία της υγείας μου και την ημερομηνία της επιστροφής μου.', justify: true },
      { type: 'attachment', items: ['Ιατρικό πιστοποιητικό αναρρωτικής άδειας.'], label: 'Επισυνάπτεται:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-work-employer-certificate', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Заявление на справку от работодателя',
    titleDoc: 'Αίτηση χορήγησης πιστοποιητικού εργοδότη', titleEn: 'Request for employer’s certificate',
    descRu: 'Заявление на выдачу справки о трудовых отношениях (срок, должность, вид договора): выдача пистопоретико́н — вторичная обязанность работодателя по ΑΚ 648; справка нужна банку, консульству, органам соцобеспечения.',
    descEn: 'Request for a certificate of employment (period, position, contract type) — the employer’s secondary duty under Civil Code art. 648; needed for banks, consulates and social-security bodies.',
    descDoc: 'Αίτηση για χορήγηση πιστοποιητικού εργοδότη σχετικά με την εργασιακή σχέση.',
    refRu: 'ΑΚ 648 — δευτερεύουσες υποχρεώσεις εργοδότη (πιστοποιητικά)',
    refEn: 'Civil Code art. 648 — employer’s secondary duties (certificates of employment)',
    fields: [
      ...workFields([
        F('purpose', 'Для какой цели нужна справка', 'Purpose of the certificate', 'select', {
          options: [
            'τραπεζική δάνεια',
            'έκδοση θεώρησης ή διαβατηρίου',
            'ασφαλιστικός ή συνταξιοδοτικός οργανισμός',
            'άλλη δημόσια υπηρεσία',
            'μίσθωση κατοικίας',
          ],
        }),
        F('cert_details', 'Какие данные подтвердить', 'Details to be certified', 'text', { placeholderDoc: 'χρόνος εργασίας, ειδικότητα, είδος σύμβασης, αποδοχές' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'ΑΙΤΗΣΗ ΓΙΑ ΠΙΣΤΟΠΟΙΗΤΙΚΟ ΕΡΓΟΔΟΤΗ' },
      { type: 'paragraph', text: 'Αξιότιμοι κύριοι,', noIndent: true },
      { type: 'paragraph', text: 'Σας παρακαλώ να μου χορηγήσετε πιστοποιητικό εργοδότη, στο οποίο να βεβαιώνονται τα εξής στοιχεία της εργασιακής μου σχέσης: {{cert_details}}. Το πιστοποιητικό απαιτείται για {{purpose}}.', justify: true },
      { type: 'paragraph', text: 'Η έκδοση πιστοποιητικών αποτελεί δευτερεύουσα υποχρέωση του εργοδότη, η οποία απορρέει από το άρθρο 648 του Αστικού Κώδικα και από την πάγια νομολογία. Παρακαλώ όπως το πιστοποιητικό εκδοθεί σε τρία (3) αντίγραφα, υπογεγραμμένο και σφραγισμένο, εντός εύλογου χρόνου.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-work-payslips', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Заявление на выдачу расчётных листков (мистодосия)',
    titleDoc: 'Αίτηση χορήγησης μισθολογικών καταστάσεων', titleEn: 'Request for payslips',
    descRu: 'Заявление на выдачу копий расчётных листков за период: работодатель обязан выдавать листок при каждой выплате с аналитическими данными (ν. 4488/2017, ст. 13).',
    descEn: 'Request for copies of payslips for a period; the employer must issue a payslip with every payment showing earnings, deductions and net amount (Law 4488/2017, art. 13).',
    descDoc: 'Αίτηση για χορήγηση αντιγράφων μισθολογικών καταστάσεων.',
    refRu: 'ст. 13 ν. 4488/2017 — обязанность выдачи расчётного листка',
    refEn: 'Law 4488/2017, art. 13 — duty to issue payslips',
    fields: [
      ...workFields([
        F('period_from', 'Период с', 'Period from', 'date', { half: true }),
        F('period_to', 'Период по', 'Period to', 'date', { half: true }),
        F('copies', 'Количество копий', 'Number of copies', 'number', { half: true, placeholderRu: '1' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'ΑΙΤΗΣΗ ΓΙΑ ΧΟΡΗΓΗΣΗ ΜΙΣΘΟΛΟΓΙΚΩΝ ΚΑΤΑΣΤΑΣΕΩΝ' },
      { type: 'paragraph', text: 'Αξιότιμοι κύριοι,', noIndent: true },
      { type: 'paragraph', text: 'Σας παρακαλώ να μου χορηγήσετε αντίγραφα των μισθολογικών καταστάσεων για το διάστημα από την {{period_from}} έως την {{period_to}}, σε {{copies}} αντίγραφα, υπογεγραμμένα και σφραγισμένα.', justify: true },
      { type: 'paragraph', text: 'Σύμφωνα με το άρθρο 13 του ν. 4488/2017, με την κάθε καταβολή αποδοχών σας επιδίδεται εγγράφως μισθολογική κατάσταση με αναλυτικά στοιχεία της αμοιβής, των κρατήσεων και του καθαρού ποσού. Τα στοιχεία αυτά μου είναι αναγκαία για ασφαλιστική και τραπεζική διαδικασία, γι’ αυτό και ζητώ την άμεση χορήγησή τους.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ==================== СУД / ПРАВОЗАЩИТА ====================
  {
    slug: 'gr-court-seller-complaint', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Претензия продавцу о недостатках товара',
    titleDoc: 'Καταγγελία στον πωλητή για ελαττώματα προϊόντος', titleEn: 'Complaint to the seller about defective goods',
    descRu: 'Досудебная претензия продавцу о недостатках товара: гарантия по АК 534/540-555, права потребителя по ν. 2251/1994 — замена, ремонт, снижение цены, расторжение; предупреждение об обращении в ΓΓΚ.',
    descEn: 'Pre-court complaint to the seller about defective goods: statutory warranty (Civil Code arts. 534 ff.) and consumer remedies (Law 2251/1994), with warning of escalation.',
    descDoc: 'Εξωδικαστική καταγγελία ελαττώματος προϊόντος στον πωλητή.',
    refRu: 'ΑΚ 513 κ.ε., 534-555 — гарантия качества; ν. 2251/1994 — права потребителей',
    refEn: 'Civil Code arts. 513 ff., 534–555 — statutory warranty; Law 2251/1994 — consumer protection',
    fields: [
      ...personFields([
        F('seller_name', 'Название магазина/продавца', 'Seller name', 'text', { half: true, placeholderDoc: 'Κατάστημα Ηλεκτρονικών Α.Ε.Ε.' }),
        F('product', 'Описание товара', 'Product description', 'text', { half: true, placeholderDoc: 'Ψυγείο μάρκας Χ, σειριακός αριθμός 12345' }),
        F('purchase_date', 'Дата покупки', 'Purchase date', 'date', { half: true }),
        F('price', 'Цена покупки', 'Purchase price', 'text', { half: true, placeholderDoc: '450 ευρώ' }),
        F('defect', 'Описание недостатка', 'Defect description', 'text', { placeholderDoc: 'δεν ψύχει και διακόπτει αυτόματα τη λειτουργία του' }),
        F('demand', 'Ваше требование', 'Remedy sought', 'select', {
          options: [
            'την αντικατάσταση του προϊόντος με νέο, χωρίς ελάττωμα',
            'τη δωρεάν επισκευή του προϊόντος εντός εύλογου χρόνου',
            'τη μείωση της τιμής κατά αναλογία του ελαττώματος',
            'την επιστροφή της τιμής και τη λύση της σύμβασης',
          ],
        }),
      ]),
    ],
    body: [
      hdr(['{{seller_name}}', 'Προς: Το Τμήμα Εξυπηρέτησης Πελατών'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΚΑΤΑΓΓΕΛΙΑ ΓΙΑ ΕΛΑΤΤΩΜΑ ΠΡΟΪΟΝΤΟΣ' },
      { type: 'paragraph', text: 'Στις {{purchase_date}} αγόρασα από το κατάστημά σας το προϊόν: {{product}}, έναντι τιμής {{price}}, όπως προκύπτει από το επισυναπτόμενο αποδεικτικό αγοράς. Το προϊόν παρουσιάζει το εξής ελάττωμα: {{defect}}. Το ελάττωμα οφείλεται στην πραγματική υπαιτιότητα του πωλητή και όχι σε δική μου αμέλεια ή εσφαλμένη χρήση.', justify: true },
      { type: 'paragraph', text: 'Καταγγέλλω το ελάττωμα εντός εύλογου χρόνου από την ημέρα που το διαπίστωσα, σύμφωνα με τα άρθρα 534 και 540 του Αστικού Κώδικα, και σας ζητώ: {{demand}}. Σε περίπτωση άρνησης ή σιωπής σας θα στραφώ στη Γενική Γραμματεία Καταναλωτή και στα αρμόδια δικαστήρια, αξιώνοντας την αποκατάσταση της ζημίας μου (ΑΚ 914).', justify: true },
      { type: 'attachment', items: ['Αποδεικτικό αγοράς (απόδειξη/τιμολόγιο).', 'Φωτογραφίες του ελαττώματος.'], label: 'Επισυνάπτονται:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-court-loan-demand', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Досудебное требование погасить долг (займ)',
    titleDoc: 'Εξωδικαστικό αίτημα εξόφλησης οφειλής (δάνειο)', titleEn: 'Pre-court demand for repayment of a loan',
    descRu: 'Досудебное письменное требование о возврате займа (АК 806): сумма, согласованный срок, назначение новой даты, предупреждение об иске в мировой суд; письмо служит доказательством просрочки должника.',
    descEn: 'Pre-court written demand for repayment of a loan (Civil Code art. 806), setting a final deadline and warning of court action; the letter evidences the debtor’s default.',
    descDoc: 'Εξωδικαστική αναγγελία εξόφλησης προς τον οφειλέτη.',
    refRu: 'ΑΚ 806 — договор займа; ΑΚ 573-574 — обязанность возврата в срок',
    refEn: 'Civil Code arts. 806 and 573–574 — duty to repay the loan at the agreed time',
    fields: [
      ...personFields([
        F('debtor_name', 'Имя должника', 'Debtor’s full name', 'text', { half: true, placeholderDoc: 'Ιωάννου Νικόλαος' }),
        F('debtor_address', 'Адрес должника', 'Debtor’s address', 'text', { half: true, placeholderDoc: 'Σολωμού 5, 10432 Αθήνα' }),
        F('loan_amount', 'Сумма долга', 'Loan amount', 'text', { half: true, placeholderDoc: '3.000 ευρώ' }),
        F('loan_date', 'Дата предоставления займа', 'Date of the loan', 'date', { half: true }),
        F('due_date', 'Согласованный срок возврата', 'Agreed repayment date', 'date', { half: true }),
        F('deadline', 'Новый срок оплаты', 'Final deadline', 'date', { half: true }),
      ]),
    ],
    body: [
      hdr(['Προς: {{debtor_name}}', '{{debtor_address}}'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΕΞΩΔΙΚΟ ΑΙΤΗΜΑ ΕΞΟΦΛΗΣΗΣ' },
      { type: 'paragraph', text: 'Στις {{loan_date}} σας παραχώρησα ως δάνειο το ποσό των {{loan_amount}}, σύμφωνα με τη συμφωνία μας, για επιστροφή έως την {{due_date}}. Παρά τις προηγούμενες αναμνήσεις μου, μέχρι σήμερα δεν έχετε εξοφλήσει το ποσό αυτό ούτε μέρος αυτού.', justify: true },
      { type: 'paragraph', text: 'Με την παρούσα σας καλώ να εξοφλήσετε το συνολικό ποσό των {{loan_amount}}, μαζί με τον νόμιμο τόκο καθυστέρησης, μέχρι την {{deadline}}. Σε αντίθετη περίπτωση θα ασκήσω αγωγή αρμοδιότητας του ειρηνοδικείου για την είσπραξη της οφειλής (ΑΚ 806), ζητώντας και τη δικαστική δαπάνη· η παρούσα θα χρησιμοποιηθεί και ως απόδειξη της υστερήσεώς σας.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-court-lawsuit-jp', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление в мировой суд (Ειρηνοδικείο)',
    titleDoc: 'Αγωγή ενώπιον του ειρηνοδικείου', titleEn: 'Statement of claim to the Justice-of-the-Peace Court',
    descRu: 'Шаблон искового заявления для мелких гражданских споров стоимостью до €20 000 (арбитражная юрисдикция мирового суда): стороны, факты, правовое основание, требования и доказательства (КПоД 465 κ.ε.).',
    descEn: 'Template of a statement of claim for small civil disputes up to €20,000 before the Justice-of-the-Peace Court: parties, facts, legal basis, relief and evidence (ΚΠολΔ arts. 465 ff.).',
    descDoc: 'Δικόγραφο αγωγής για διαφορές αρμοδιότητας του ειρηνοδικείου.',
    refRu: 'ст. 465 κ.ε. КПоД — производство в мировом суде (до €20 000)',
    refEn: 'Code of Civil Procedure arts. 465 ff. — procedure before the Justice-of-the-Peace Court',
    fields: [
      F('court_name', 'Мировой суд (Ειρηνοδικείο)', 'Justice-of-the-Peace Court', 'text', { half: true, placeholderDoc: 'Ειρηνοδικείο Αθηνών' }),
      F('city', 'Город подачи', 'City', 'text', { half: true, placeholderDoc: 'Αθήνα' }),
      F('plaintiff_name', 'Истец (ФИО)', 'Plaintiff’s full name', 'text', { half: true, placeholderDoc: 'Παπαδόπουλος Γεώργιος' }),
      F('plaintiff_afm', 'АФМ истца', 'Plaintiff’s tax ID', 'text', { half: true, placeholderDoc: '123456789' }),
      F('plaintiff_address', 'Адрес истца', 'Plaintiff’s address', 'text', { half: true, placeholderDoc: 'Πανεπιστημίου 10, 10671 Αθήνα' }),
      F('defendant_name', 'Ответчик (ФИО)', 'Defendant’s full name', 'text', { half: true, placeholderDoc: 'Ιωάννου Νικόλαος' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant’s address', 'text', { half: true, placeholderDoc: 'Σολωμού 5, 10432 Αθήνα' }),
      F('claim_amount', 'Сумма иска', 'Amount claimed', 'text', { half: true, placeholderDoc: '2.500 ευρώ' }),
      F('claim_basis', 'Правовое основание', 'Legal basis', 'text', { half: true, placeholderDoc: 'δάνειο (ΑΚ 806) ή αδικοπραγία (ΑΚ 914)' }),
      F('facts', 'Фактические обстоятельства', 'Statement of facts', 'text', { placeholderDoc: 'Στις 10.3.2025 παραχώρησα στον εναγόμενο δάνειο 2.500 ευρώ, το οποίο δεν επιστράφηκε παρά την αναγγελία.' }),
    ],
    body: [
      courtHdr(['ΑΦΜ: {{plaintiff_afm}}']),
      { type: 'title', text: 'ΑΓΩΓΗ' },
      { type: 'subtitle', text: 'κατά του/της {{defendant_name}}' },
      { type: 'paragraph', text: '1. Με την παρούσα αγωγή, η οποία κατατίθεται αρμοδίως ενώπιον του Δικαστηρίου σας λόγω της αξίας της διαφοράς, ενάγομαι κατά του/της {{defendant_name}} ({{defendant_address}}) και ζητώ να τον/την υποχρεώσετε να μου καταβάλει το ποσό των {{claim_amount}}, μαζί με τον νόμιμο τόκο από την επίδοση της αγωγής και τη δικαστική δαπάνη.', justify: true },
      { type: 'paragraph', text: '2. Το αίτημά μου στηρίζεται στα εξής πραγματικά περιστατικά: {{facts}}.', justify: true },
      { type: 'paragraph', text: '3. Νομική βάση του αιτήματος: {{claim_basis}}. 4. Αποδεικτικά στοιχεία: τα έγγραφα που επιδίδω μαζί με την παρούσα, καθώς και κάθε νόμιμο αποδεικτικό μέσο. 5. Παρακαλώ όπως ορισθεί δικάσιμο και όπως η αγωγή εκδικασθεί και γίνει δεκτή κατά τον νόμο.', justify: true },
      { type: 'attachment', items: ['Αντίγραφα των σχετικών εγγράφων (συμφωνία, αναγγελία, αποδεικτικά πληρωμής).'], label: 'Επισυνάπτονται:' },
      { type: 'signature', leftText: '{{city}}, {{date_today}}', rightText: '_______________ / {{plaintiff_name}} /' },
    ],
  },
  {
    slug: 'gr-court-ggk-complaint', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в Генеральный секретариат потребителя (ΓΓΚ)',
    titleDoc: 'Καταγγελία στη Γενική Γραμματεία Καταναλωτή', titleEn: 'Complaint to the General Secretariat for Consumer Protection',
    descRu: 'Жалоба в ΓΓΚ (ν. 2251/1994, ст. 9 κ.ε.) против бизнеса: нарушение прав потребителя, невыполнение гарантии, несправедливые условия; ΓΓΚ передаёт жалобу на местный контроль и может назначить посредничество.',
    descEn: 'Complaint to the General Secretariat for Consumer Protection (Law 2251/1994, arts. 9 ff.) against a business for consumer-rights violations; the complaint is forwarded for local inspection and mediation.',
    descDoc: 'Καταγγελία κατά επιχείρησης για παραβίαση της νομοθεσίας προστασίας καταναλωτών.',
    refRu: 'ν. 2251/1994 (ст. 9 κ.ε.) — защита потребителей, компетенция ΓΓΚ',
    refEn: 'Law 2251/1994, arts. 9 ff. — consumer protection; powers of the General Secretariat',
    fields: [
      ...personFields([
        F('business_name', 'Название компании', 'Business name', 'text', { half: true, placeholderDoc: 'Κατάστημα Εμπορίου Α.Ε.' }),
        F('business_address', 'Адрес компании', 'Business address', 'text', { half: true, placeholderDoc: 'Ερμού 25, 10563 Αθήνα' }),
        F('issue', 'Суть нарушения', 'Nature of the violation', 'text', { placeholderDoc: 'άρνηση εγγύησης για ελαττωματικό προϊόν και μη απάντηση σε εξωδικαστική καταγγελία' }),
        F('request', 'Что просите', 'Relief sought', 'select', {
          options: [
            'να διενεργηθεί έλεγχος και να επιβληθούν κυρώσεις στην επιχείρηση',
            'να ορισθεί διαδικασία συμβιβαστικής επίλυσης της διαφοράς',
            'να ελεγχθούν οι όροι της σύμβασης ως καταχρηστικοί',
          ],
        }),
      ]),
    ],
    body: [
      hdr(['Γενική Γραμματεία Εμπορίου και Προστασίας Καταναλωτή', 'Υπουργείο Ανάπτυξης', 'Κανίγγος 2, 101 81 Αθήνα'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΚΑΤΑΓΓΕΛΙΑ ΚΑΤΑ ΕΠΙΧΕΙΡΗΣΗΣ' },
      { type: 'paragraph', text: 'Σύμφωνα με το άρθρο 9 του ν. 2251/1994, δικαιούμαι να υποβάλω καταγγελία σε περίπτωση παραβίασης της νομοθεσίας προστασίας καταναλωτών. Καταγγέλλω την επιχείρηση «{{business_name}}» ({{business_address}}) για τα εξής: {{issue}}.', justify: true },
      { type: 'paragraph', text: 'Επισυνάπτω τα σχετικά αποδεικτικά (αποδεικτικά αγοράς και αλληλογραφία με την επιχείρηση). Ζητώ: {{request}}. Παρακαλώ όπως η καταγγελία διαβιβασθεί στην αρμόδια περιφερειακή υπηρεσία ελέγχου και ενημερωθώ εγγράφως για την πορεία της.', justify: true },
      { type: 'attachment', items: ['Αποδεικτικά αγοράς και αλληλογραφία με την επιχείρηση.'], label: 'Επισυνάπτονται:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-court-dpa-complaint', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в Управление по защите персональных данных (ΑΠΔΠΧ)',
    titleDoc: 'Καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα', titleEn: 'Complaint to the Hellenic Data Protection Authority',
    descRu: 'Жалоба в ΑΠΔΠΧ по ст. 91 ν. 4624/2019 и ст. 77 GDPR: незаконная обработка, отказ в доступе/удалении, утечка данных; АПДПХ проводит расследование и может наложить штрафы.',
    descEn: 'Complaint to the Hellenic Data Protection Authority under Law 4624/2019, art. 91, and GDPR art. 77: unlawful processing, refusal of access or erasure, data breach.',
    descDoc: 'Καταγγελία στην Αρχή Προστασίας Δεδομένων για παραβίαση της νομοθεσίας προστασίας δεδομένων.',
    refRu: 'ст. 91 ν. 4624/2019; ст. 77 GDPR — право на жалобу в надзорный орган',
    refEn: 'Law 4624/2019 art. 91 and GDPR art. 77 — right to lodge a complaint with the supervisory authority',
    fields: [
      ...personFields([
        F('applicant_email', 'Эл. почта', 'E-mail', 'text', { half: true, placeholderDoc: 'name@example.gr' }),
        F('controller', 'Ответственный за обработку', 'Data controller', 'text', { half: true, placeholderDoc: 'Εταιρεία Παροχής Υπηρεσιών Α.Ε.' }),
        F('violation', 'Вид нарушения', 'Type of violation', 'select', {
          options: [
            'επεξεργασία δεδομένων χωρίς νόμιμη βάση',
            'άρνηση άσκησης δικαιώματος πρόσβασης, διόρθωσης ή διαγραφής',
            'διαρροή ή παράνομη αποκάλυψη προσωπικών δεδομένων',
            'χρήση δεδομένων για σκοπούς διαφορετικούς από τους δηλωμένους',
          ],
        }),
        F('details', 'Описание инцидента', 'Description of the incident', 'text', { placeholderDoc: 'Χωρίς τη συγκατάθεσή μου η εταιρεία δημοσίευσε την τηλεφωνική μου διεύθυνση σε λίστα διαφήμισης.' }),
      ]),
    ],
    body: [
      hdr(['Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα', 'Κηφισσίας 1-3, 115 23 Αθήνα'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{applicant_email}}', '{{date_today}}']),
      { type: 'title', text: 'ΚΑΤΑΓΓΕΛΙΑ ΓΙΑ ΠΑΡΑΒΙΑΣΗ ΠΡΟΣΤΑΣΙΑΣ ΔΕΔΟΜΕΝΩΝ' },
      { type: 'paragraph', text: 'Σύμφωνα με το άρθρο 91 του ν. 4624/2019 και το άρθρο 77 του ΓΚΠΔ, υποβάλλω καταγγελία κατά του/της {{controller}}, ως υπεύθυνου επεξεργασίας, για την εξής παραβίαση: {{violation}}. Ειδικότερα: {{details}}.', justify: true },
      { type: 'paragraph', text: 'Προηγουμένως άσκησα τα δικαιώματά μου προς τον υπεύθυνο επεξεργασίας (πρόσβαση, διόρθωση, διαγραφή), χωρίς να ικανοποιηθούν. Παρακαλώ όπως εξετασθεί η καταγγελία, διενεργηθεί έρευνα και επιβληθούν οι προβλεπόμενες διορθωτικές κυρώσεις και πρόστιμα. Ενημερώνω ότι προτιμώ την αλληλογραφία μέσω ηλεκτρονικού ταχυδρομείου.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-court-ombudsman', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Обращение к Уполномоченному по правам граждан (Συνήγορος του Πολίτη)',
    titleDoc: 'Προσφυγή στον Συνήγορο του Πολίτη', titleEn: 'Complaint to the Greek Ombudsman',
    descRu: 'Обращение к Συνήγορος του Πολίτη (ν. 3094/2003, ст. 4) против действий или бездействия органов госсектора: задержка выдачи документов, неответ на заявление, неправомерные акты; процедура бесплатная.',
    descEn: 'Complaint to the Greek Ombudsman (Law 3094/2003, art. 4) against acts or omissions of public-sector bodies: delays, non-response to applications, unlawful administrative acts.',
    descDoc: 'Προσφυγή στον Συνήγορο του Πολίτη κατά πράξης ή παράλειψης δημόσιας υπηρεσίας.',
    refRu: 'ст. 4 ν. 3094/2003 — право на обращение к Συνήγορος του Πολίτη',
    refEn: 'Law 3094/2003, art. 4 — right to apply to the Greek Ombudsman',
    fields: [
      ...personFields([
        F('authority', 'Госорган', 'Public authority', 'text', { half: true, placeholderDoc: 'Δήμος Αθηναίων / Δ.Ο.Υ. Α΄ Αθηνών' }),
        F('date_applied', 'Дата подачи заявления в орган', 'Date of the original application', 'date', { half: true }),
        F('case_details', 'Описание проблемы', 'Description of the problem', 'text', { placeholderDoc: 'Η υπηρεσία δεν απαντά στο αίτημά μου για χορήγηση πιστοποιητικού εδώ και τρεις μήνες.' }),
      ]),
    ],
    body: [
      hdr(['Συνήγορος του Πολίτη', 'Χατζηγιάννη Μέξα 5, 115 28 Αθήνα'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΠΡΟΣΦΥΓΗ ΣΤΟΝ ΣΥΝΗΓΟΡΟ ΤΟΥ ΠΟΛΙΤΗ' },
      { type: 'paragraph', text: 'Σύμφωνα με το άρθρο 4 του ν. 3094/2003, υποβάλλω προσφυγή κατά της {{authority}}. Στις {{date_applied}} απηύθυνα στην υπηρεσία σχετικό αίτημα, το οποίο δεν έχει ικανοποιηθεί: {{case_details}}.', justify: true },
      { type: 'paragraph', text: 'Παρά τις επαναλαμβανόμενες αναμνήσεις μου, η υπηρεσία δεν απάντησε ούτε συμμορφώθηκε με τις νόμιμες προθεσμίες. Παρακαλώ όπως μεσολαβήσετε ώστε η υπηρεσία να απαντήσει βάσει νόμου και να τηρήσει τις προβλεπόμενες διαδικασίες. Επισυνάπτω την αλληλογραφία μου με την υπηρεσία.', justify: true },
      { type: 'attachment', items: ['Αντίγραφο του αιτήματος και της αλληλογραφίας με την υπηρεσία.'], label: 'Επισυνάπτονται:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-tax-aaade-appeal', kind: 'STANDARD', categorySlug: 'tax-docs',
    titleRu: 'Ведомственная жалоба (ενδικοφανής προσφυγή) на акт ААДЭ',
    titleDoc: 'Ενδικοφανής προσφυγή κατά πράξης ΑΑΔΕ', titleEn: 'Administrative appeal to ΑΑΔΕ against a tax act',
    descRu: 'Ведомственное обжалование налогового акта: срок — 30 дней с вручения (КФД ν. 4174/2013, ст. 63); подаётся в орган, издавший акт; при отклонении — иск в административный апелляционный суд.',
    descEn: 'Administrative appeal against a tax act within 30 days of service under the Tax Procedure Code (Law 4174/2013, arts. 63, 66).',
    descDoc: 'Ενδικοφανής προσφυγή κατά φορολογικής πράξης κατά τον ΚΦΔ.',
    refRu: 'ст. 63 и 66 КФД (ν. 4174/2013) — ведомственная жалоба, срок 30 дней',
    refEn: 'Tax Procedure Code (Law 4174/2013), arts. 63 and 66 — administrative appeal within 30 days',
    fields: [
      ...personFields([
        F('dou', 'Налоговый орган (Δ.Ο.Υ.)', 'Tax office', 'text', { half: true, placeholderDoc: 'Δ.Ο.Υ. Α΄ Αθηνών' }),
        F('act', 'Обжалуемый акт (№/дата)', 'Contested act (no./date)', 'text', { half: true, placeholderDoc: 'Πράξη προσδιορισμού φόρου αριθμός 12345/2025' }),
        F('date_served', 'Дата получения акта', 'Date of receipt', 'date', { half: true }),
        F('grounds', 'Основания жалобы', 'Grounds of the appeal', 'text', { placeholderDoc: 'λανθασμένος προσδιορισμός του εισοδήματος και μη συνυπολογισμός παρακρατηθέντων φόρων' }),
        F('relief', 'Требование', 'Relief sought', 'select', {
          options: [
            'την πλήρη ακύρωση της προσβαλλόμενης πράξης',
            'τη μείωση του προσδιορισθέντος φόρου',
            'την εξαφάνιση των επιβληθέντων κυρώσεων',
          ],
        }),
      ]),
    ],
    body: [
      hdr(['{{dou}}', 'Προς: Το Τμήμα Έννομης Προστασίας'], ['{{applicant_name}}', '{{applicant_address}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΕΝΔΙΚΟΦΑΝΗΣ ΠΡΟΣΦΥΓΗ' },
      { type: 'paragraph', text: 'Εντός της προθεσμίας του άρθρου 63 του Κώδικα Φορολογικής Διαδικασίας (ν. 4174/2013), προσφέρω κατά της πράξης {{act}}, που εξέδωσε η {{dou}} και της οποίας έλαβα γνώση την {{date_served}}.', justify: true },
      { type: 'paragraph', text: 'Οι λόγοι της προσφυγής είναι οι εξής: {{grounds}}. Ζητώ: {{relief}}. Επισυνάπτω την προσβαλλόμενη πράξη και τα σχετικά δικαιολογητικά. Σε περίπτωση απόρριψης της προσφυγής θα ασκήσω προσφυγή ενώπιον του αρμόδιου Διοικητικού Εφετείου εντός της νόμιμης προθεσμίας.', justify: true },
      { type: 'attachment', items: ['Η προσβαλλόμενη πράξη και τα σχετικά δικαιολογητικά.'], label: 'Επισυνάπτονται:' },
      sign('{{applicant_name}}'),
    ],
  },

  // ==================== БАНК ====================
  {
    slug: 'gr-bank-complaint', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Претензия в банк',
    titleDoc: 'Καταγγελία στην τράπεζα', titleEn: 'Complaint to the bank',
    descRu: 'Письменная претензия банку (немотивированные комиссии, ошибка платежа, нарушение условий договора) с требованием письменного ответа; при отказе — Синигорос Катаналоти Банка Греции (ν. 4224/2013).',
    descEn: 'Written complaint to the bank (unfair charges, payment error, breach of contract) demanding a written reply; escalation to the Bank of Greece Consumer Advocate (Law 4224/2013).',
    descDoc: 'Καταγγελία προς την τράπεζα για παραβίαση σχετικά με τον λογαριασμό.',
    refRu: 'ν. 4224/2013 — внесудебное урегулирование банковских споров; Συνήγορος Καταναλωτή ΤτΕ',
    refEn: 'Law 4224/2013 — out-of-court settlement of banking disputes; Bank of Greece Consumer Advocate',
    fields: [
      ...personFields([
        F('bank_name', 'Название банка', 'Bank name', 'text', { half: true, placeholderDoc: 'Τράπεζα Εμπορίου Α.Ε.' }),
        F('iban', 'Номер счёта (IBAN)', 'Account number (IBAN)', 'text', { half: true, placeholderDoc: 'GR16 0110 1250 0000 0001 2300 695' }),
        F('issue', 'Суть претензии', 'Nature of the complaint', 'select', {
          options: [
            'αδικαιολόγητες ή μη συμφωνημένες χρεώσεις στον λογαριασμό',
            'λάθος σε εντολή πληρωμής ή κατάθεση',
            'άρνηση χορήγησης στοιχείων του λογαριασμού',
            'παράβαση των όρων της σύμβασης από την τράπεζα',
          ],
        }),
        F('demand', 'Ваше требование', 'Relief sought', 'select', {
          options: [
            'την επιστροφή των αδικαιολόγητων χρεώσεων',
            'τη διόρθωση του λάθους και την αποκατάσταση',
            'τη γραπτή απάντηση με πλήρη νομική τεκμηρίωση',
          ],
        }),
      ]),
    ],
    body: [
      hdr(['{{bank_name}}', 'Προς: Το Τμήμα Εξυπηρέτησης Πελατών'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΚΑΤΑΓΓΕΛΙΑ ΣΤΗΝ ΤΡΑΠΕΖΑ' },
      { type: 'paragraph', text: 'Σχετικά με τον λογαριασμό μου {{iban}}, καταγγέλλω την εξής παραβίαση: {{issue}}. Το γεγονός προκύπτει από τις κινήσεις του λογαριασμού και τα επισυναπτόμενα έγγραφα.', justify: true },
      { type: 'paragraph', text: 'Ζητώ: {{demand}}, με γραπτή απάντηση εντός δέκα (10) εργάσιμων ημερών. Σύμφωνα με τον ν. 4224/2013, η τράπεζα οφείλει να τηρεί διαδικασία εσωτερικής εξέτασης καταγγελιών. Σε περίπτωση απόρριψης ή σιωπής θα απευθυνθώ στον Συνήγορο Καταναλωτή της Τράπεζας της Ελλάδος και στα αρμόδια δικαστήρια, αξιώνοντας και αποζημίωση για ηθική βλάβη (ΑΚ 914, 932).', justify: true },
      { type: 'attachment', items: ['Αποδεικτικά κινήσεων λογαριασμού και σχετικής αλληλογραφίας.'], label: 'Επισυνάπτονται:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-bank-statement-copy', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Запрос выписки по счёту',
    titleDoc: 'Αίτημα αντιγράφου κινήσεων λογαριασμού', titleEn: 'Request for a copy of account statements',
    descRu: 'Запрос в банк на выдачу выписки за период: договорные обязанности банка + право на доступ к своим данным (ст. 15 GDPR, ν. 4624/2019).',
    descEn: 'Request to the bank for account statements for a period: contractual duty plus the right of access to personal data (GDPR art. 15, Law 4624/2019).',
    descDoc: 'Αίτημα προς την τράπεζα για χορήγηση αντιγράφου κινήσεων λογαριασμού.',
    refRu: 'ст. 15 GDPR и ν. 4624/2019 — право доступа к данным; договорные условия',
    refEn: 'GDPR art. 15 and Law 4624/2019 — right of access to personal data',
    fields: [
      ...personFields([
        F('bank_name', 'Название банка', 'Bank name', 'text', { half: true, placeholderDoc: 'Τράπεζα Εμπορίου Α.Ε.' }),
        F('iban', 'Номер счёта (IBAN)', 'Account number (IBAN)', 'text', { half: true, placeholderDoc: 'GR16 0110 1250 0000 0001 2300 695' }),
        F('period_from', 'Период с', 'Period from', 'date', { half: true }),
        F('period_to', 'Период по', 'Period to', 'date', { half: true }),
        F('delivery', 'Способ получения', 'Delivery method', 'select', {
          options: [
            'σε ηλεκτρονική μορφή μέσω ηλεκτρονικού ταχυδρομείου',
            'σε έντυπη μορφή με ταχυδρομείο στη διεύθυνσή μου',
            'παραλαβή από το υποκατάστημα',
          ],
        }),
      ]),
    ],
    body: [
      hdr(['{{bank_name}}', 'Προς: Το Τμήμα Εξυπηρέτησης Πελατών'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΑΙΤΗΜΑ ΓΙΑ ΑΝΤΙΓΡΑΦΟ ΚΙΝΗΣΕΩΝ ΛΟΓΑΡΙΑΣΜΟΥ' },
      { type: 'paragraph', text: 'Σας παρακαλώ να μου χορηγήσετε αντίγραφο των κινήσεων του λογαριασμού μου {{iban}} για το διάστημα από την {{period_from}} έως την {{period_to}}. Παρακαλώ όπως το υλικό μου αποσταλεί ως εξής: {{delivery}}.', justify: true },
      { type: 'paragraph', text: 'Η χορήγηση αντιγράφων των κινήσεων του λογαριασμού αποτελεί υποχρέωση της τράπεζας δυνάμει της σύμβασης και του δικαιώματος πρόσβασης στα προσωπικά μου δεδομένα (άρθρο 15 του ΓΚΠΔ, ν. 4624/2019). Σε περίπτωση μη ικανοποίησης του αιτήματός μου εντός εύλογου χρόνου θα απευθυνθώ στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ==================== СОЦОБЕСПЕЧЕНИЕ ====================
  {
    slug: 'gr-soc-efka-appeal', kind: 'STANDARD', categorySlug: 'soc-benefits',
    titleRu: 'Обжалование решения ЕФКА',
    titleDoc: 'Προσφυγή κατά πράξης ΕΦΚΑ', titleEn: 'Appeal against an EFKA decision',
    descRu: 'Ведомственное обжалование решения ЕФКА (отказ в пособии, непризнание стажа, расчёт взносов): по ν. 4389/2016 с применением по аналогии процедур КФД; при отклонении — иск в суд.',
    descEn: 'Administrative appeal against an EFKA decision (refusal of benefit, non-recognition of insurance stamps, contributions) under Law 4389/2016.',
    descDoc: 'Προσφυγή κατά πράξης του ΕΦΚΑ εντός της νόμιμης προθεσμίας.',
    refRu: 'ν. 4389/2016 — ЕФКА; КФД ν. 4174/2013 применяется по аналогии',
    refEn: 'Law 4389/2016 (EFKA); the Tax Procedure Code (Law 4174/2013) applies by analogy',
    fields: [
      ...personFields([
        F('amka', 'Ваш АМКА', 'Your AMKA (social security no.)', 'text', { half: true, placeholderDoc: '12345678901' }),
        F('efka_unit', 'Отделение ЕФКА', 'EFKA branch', 'text', { half: true, placeholderDoc: 'Υποκατάστημα Αθηνών' }),
        F('decision', 'Обжалуемое решение (№)', 'Contested decision (no.)', 'text', { half: true, placeholderDoc: 'Απόφαση αριθμός 4567/2025' }),
        F('grounds', 'Основания обжалования', 'Grounds of the appeal', 'text', { placeholderDoc: 'δεν αναγνωρίστηκε χρόνος ασφάλισης 2010-2012, ο οποίος αποδεικνύεται με βεβαιώσεις εργοδοτών' }),
      ]),
    ],
    body: [
      hdr(['{{efka_unit}}', 'Προς: Το Τμήμα Ασφαλιστικών Υποθέσεων'], ['{{applicant_name}}', 'ΑΜΚΑ: {{amka}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΠΡΟΣΦΥΓΗ ΚΑΤΑ ΠΡΑΞΗΣ ΤΟΥ ΕΦΚΑ' },
      { type: 'paragraph', text: 'Με την παρούσα ασκώ προσφυγή, εντός της νόμιμης προθεσμίας, κατά της πράξης {{decision}} του Υποκαταστήματός σας, σύμφωνα με τον ν. 4389/2016 και τις διατάξεις περί έννομης προστασίας που εφαρμόζονται στον ΕΦΚΑ.', justify: true },
      { type: 'paragraph', text: 'Οι λόγοι της προσφυγής είναι οι εξής: {{grounds}}. Επισυνάπτω βεβαιώσεις εργοδοτών και έγγραφα ασφάλισης που αποδεικνύουν το αίτημά μου. Παρακαλώ όπως επανεξετασθεί η υπόθεση και εκδοθεί ευνοϊκή απόφαση· σε αντίθετη περίπτωση θα ασκήσω προσφυγή ενώπιον των αρμοδίων διοικητικών δικαστηρίων.', justify: true },
      { type: 'attachment', items: ['Βεβαιώσεις εργοδοτών και έγγραφα ασφάλισης.', 'Η προσβαλλόμενη πράξη.'], label: 'Επισυνάπτονται:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-soc-pension-age', kind: 'STANDARD', categorySlug: 'soc-pension',
    titleRu: 'Заявление о назначении пенсии по старости',
    titleDoc: 'Αίτηση χορήγησης σύνταξης λόγω γήρατος', titleEn: 'Old-age pension application',
    descRu: 'Заявление о назначении пенсии по старости (ν. 4670/2020 «Μέρες», ν. 3863/2010 — возраст и стаж) через ЕФКА/ΗΔΙΚΑ; при подаче в течение 3 месяцев с даты выхода — выплата с даты пенсии.',
    descEn: 'Old-age pension application (Laws 4670/2020 and 3863/2010) submitted to EFKA; if filed within three months of retirement, the pension is paid from that date.',
    descDoc: 'Αίτηση για χορήγηση σύνταξης λόγω γήρατος προς τον ΕΦΚΑ.',
    refRu: 'ν. 4670/2020 и ν. 3863/2010 — возраст выхода на пенсию и требования к стажу',
    refEn: 'Laws 4670/2020 and 3863/2010 — retirement age and contribution requirements',
    fields: [
      ...personFields([
        F('amka', 'Ваш АМКА', 'Your AMKA (social security no.)', 'text', { half: true, placeholderDoc: '12345678901' }),
        F('efka_branch', 'Отделение ЕФКА', 'EFKA branch', 'text', { half: true, placeholderDoc: 'Υποκατάστημα Αθηνών' }),
        F('marital', 'Семейное положение', 'Marital status', 'select', { half: true, options: ['Άγαμος/Άγαμη', 'Έγγαμος/Έγγαμη', 'Διαζευγμένος/Διαζευγμένη', 'Χήρος/Χήρα'] }),
        F('pension_date', 'Дата выхода на пенсию', 'Retirement date', 'date', { half: true }),
        F('iban', 'IBAN для выплаты', 'IBAN for payment', 'text', { half: true, placeholderDoc: 'GR16 0110 1250 0000 0001 2300 695' }),
      ]),
    ],
    body: [
      hdr(['ΕΦΚΑ — {{efka_branch}}', 'Προς: Το Τμήμα Συντάξεων'], ['{{applicant_name}}', 'ΑΜΚΑ: {{amka}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΑΙΤΗΣΗ ΓΙΑ ΧΟΡΗΓΗΣΗ ΣΥΝΤΑΞΕΩΣ ΛΟΓΩ ΓΗΡΑΤΟΣ' },
      { type: 'paragraph', text: 'Με την παρούσα υποβάλλω αίτηση για χορήγηση σύνταξης λόγω γήρατος, σύμφωνα με τις διατάξεις του ν. 4670/2020 και του ν. 3863/2010, με ημερομηνία συνταξιοδότησης την {{pension_date}}. Στοιχεία μου: ΑΜΚΑ {{amka}}, ΑΦΜ {{applicant_afm}}, οικογενειακή κατάσταση: {{marital}}.', justify: true },
      { type: 'paragraph', text: 'Παρακαλώ όπως εκδοθεί η σχετική απόφαση και η σύνταξη καταβάλλεται στον τραπεζικό λογαριασμό IBAN {{iban}}. Υπενθυμίζω ότι, σύμφωνα με τον ν. 4670/2020, όταν η αίτηση υποβάλλεται εντός τριμήνου από τη συνταξιοδότηση, η σύνταξη καταβάλλεται από την επόμενη ημέρα της συνταξιοδότησης. Δήλωνω ότι τα στοιχεία μου είναι αληθή και θα προσκομίσω όσα επιπλέον δικαιολογητικά ζητηθούν.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ==================== ЗДРАВООХРАНЕНИЕ ====================
  {
    slug: 'gr-med-facility-complaint', kind: 'STANDARD', categorySlug: 'med-appeals',
    titleRu: 'Жалоба в медицинское учреждение',
    titleDoc: 'Καταγγελία σε μονάδα υγείας', titleEn: 'Complaint to a health facility',
    descRu: 'Жалоба на работу больницы/поликлиники (очереди, отношение персонала, отказ в помощи) руководству учреждения и Дикеогору асθενούς — ν. 4213/2013; требует письменного ответа.',
    descEn: 'Complaint about a health facility (waiting times, staff conduct, refusal of care) to its management and the Patient’s Advocate under Law 4213/2013.',
    descDoc: 'Καταγγελία σε μονάδα υγείας για παραβίαση δικαιωμάτων ασθενών.',
    refRu: 'ν. 4213/2013 — права пациентов, Дикеогор асθενούς',
    refEn: 'Law 4213/2013 — patients’ rights and the Patient’s Advocate',
    fields: [
      ...personFields([
        F('facility', 'Медицинское учреждение', 'Health facility', 'text', { half: true, placeholderDoc: 'Γενικό Νοσοκομείο Αθηνών' }),
        F('incident_date', 'Дата инцидента', 'Date of the incident', 'date', { half: true }),
        F('incident', 'Описание инцидента', 'Description of the incident', 'text', { placeholderDoc: 'Πολυωρία στην εξωτερική ιατρεία χωρίς εξέταση και χωρίς ενημέρωση.' }),
      ]),
    ],
    body: [
      hdr(['{{facility}}', 'Προς: Τη Διοίκηση και τον Δικηγόρο Ασθενούς'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΚΑΤΑΓΓΕΛΙΑ ΣΕ ΜΟΝΑΔΑ ΥΓΕΙΑΣ' },
      { type: 'paragraph', text: 'Καταγγέλλω το εξής περιστατικό που σημειώθηκε στη μονάδα σας στις {{incident_date}}: {{incident}}. Το περιστατικό παραβιάζει τα δικαιώματα ασθενών, όπως προστατεύονται από τον ν. 4213/2013 και τις σχετικές διατάξεις περί λειτουργίας των υπηρεσιών υγείας.', justify: true },
      { type: 'paragraph', text: 'Παρακαλώ όπως διενεργηθεί διοικητική έρευνα, ενημερωθεί ο Δικηγόρος Ασθενούς της αρμόδιας Διεύθυνσης Υγείας της Περιφέρειας και μου δοθεί γραπτή απάντηση εντός εύλογου χρόνου. Σε περίπτωση μη ικανοποιητικής απάντησης θα απευθυνθώ στον Συνήγορο του Πολίτη (Τμήμα Υγείας-Κοινωνικής Αλληλεγγύης) και στα αρμόδια δικαστήρια.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-med-records-access', kind: 'STANDARD', categorySlug: 'med-records',
    titleRu: 'Запрос доступа к медицинской карте',
    titleDoc: 'Αίτηση πρόσβασης στο ιατρικό αρχείο', titleEn: 'Request for access to the medical record',
    descRu: 'Запрос копии медицинской карты: право пациента на доступ к данным о своём здоровье (ст. 47 ν. 2071/1992; ст. 15 GDPR); учреждение обязано выдать копию за разумную плату.',
    descEn: 'Request for a copy of the medical record: the patient’s right of access (Law 2071/1992 art. 47; GDPR art. 15), against a reasonable copying fee.',
    descDoc: 'Αίτηση για χορήγηση αντιγράφου του ιατρικού αρχείου.',
    refRu: 'ст. 47 ν. 2071/1992 — доступ к медицинской карте; ст. 15 GDPR',
    refEn: 'Law 2071/1992 art. 47 — access to medical records; GDPR art. 15',
    fields: [
      ...personFields([
        F('facility', 'Медицинское учреждение', 'Health facility', 'text', { half: true, placeholderDoc: 'Γενικό Νοσοκομείο Αθηνών' }),
        F('record_period', 'Период лечения/визитов', 'Period of care', 'text', { half: true, placeholderDoc: 'Μάρτιος 2024 – Ιούνιος 2024' }),
        F('delivery', 'Способ получения', 'Delivery method', 'select', {
          options: [
            'παραλαβή από το αρχείο της μονάδας',
            'αποστολή με ταχυδρομείο στη διεύθυνσή μου',
            'αποστολή σε ηλεκτρονική μορφή',
          ],
        }),
      ]),
    ],
    body: [
      hdr(['{{facility}}', 'Προς: Την Ιατρική Υπηρεσία / Το Αρχείο'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΑΙΤΗΣΗ ΠΡΟΣΒΑΣΗΣ ΣΤΟ ΙΑΤΡΙΚΟ ΑΡΧΕΙΟ' },
      { type: 'paragraph', text: 'Σύμφωνα με το άρθρο 47 του ν. 2071/1992 και το άρθρο 15 του ΓΚΠΔ, ζητώ τη χορήγηση αντιγράφου του ιατρικού μου αρχείου που τηρείται στη μονάδα σας, για την περίοδο {{record_period}}. Παρακαλώ όπως το υλικό μου παραδοθεί ως εξής: {{delivery}}.', justify: true },
      { type: 'paragraph', text: 'Η πρόσβαση στο προσωπικό μου ιατρικό αρχείο είναι δικαίωμά μου ως ασθενή, και ο υγειονομικός φορέας υποχρεούται να μου χορηγήσει αντίγραφο με εύλογη δαπάνη αναπαραγωγής. Σε περίπτωση άρνησης ή αδικαιολόγητης καθυστέρησης θα απευθυνθώ στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ==================== ОБРАЗОВАНИЕ ====================
  {
    slug: 'gr-edu-school-enrollment', kind: 'STANDARD', categorySlug: 'edu-docs',
    titleRu: 'Заявление о зачислении ребёнка в школу',
    titleDoc: 'Αίτηση εγγραφής μαθητή στο σχολείο', titleEn: 'School enrolment application',
    descRu: 'Заявление родителей о зачислении ребёнка в государственную школу (ν. 4186/2013 — организация образования): данные ребёнка, класс, приложения документов.',
    descEn: 'Parents’ application to enrol a child in a public school (Law 4186/2013): child’s details, class and supporting documents.',
    descDoc: 'Αίτηση γονέα για εγγραφή μαθητή στο σχολείο.',
    refRu: 'ν. 4186/2013 — организация образования, порядок зачисления',
    refEn: 'Law 4186/2013 — structure of education; enrolment procedure',
    fields: [
      ...personFields([
        F('school_name', 'Школа', 'School', 'text', { half: true, placeholderDoc: 'Γυμνάσιο Αθηνών' }),
        F('child_name', 'ФИО ребёнка', 'Child’s full name', 'text', { half: true, placeholderDoc: 'Παπαδοπούλου Μαρία' }),
        F('child_birthdate', 'Дата рождения ребёнка', 'Child’s date of birth', 'date', { half: true }),
        F('grade', 'Класс зачисления', 'Class', 'select', { half: true, options: ['Α΄ Δημοτικού', 'Δ΄ Δημοτικού', 'Α΄ Γυμνασίου', 'Γ΄ Γυμνασίου', 'Α΄ Λυκείου'] }),
      ]),
    ],
    body: [
      hdr(['{{school_name}}', 'Προς: Τον/Την Διευθυντή/Διευθύντρια'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΑΙΤΗΣΗ ΓΙΑ ΕΓΓΡΑΦΗ ΜΑΘΗΤΗ' },
      { type: 'paragraph', text: 'Σας υποβάλλω αίτηση για την εγγραφή του/της τέκνου μου {{child_name}}, γεννημένου/ης στις {{child_birthdate}}, στην {{grade}} του σχολείου σας για το σχολικό έτος 2025-2026.', justify: true },
      { type: 'paragraph', text: 'Επιδίδω τα προβλεπόμενα δικαιολογητικά: πιστοποιητικό γέννησης, βεβαίωση διαμονής, βιβλιάριο υγείας (εμβολιασμοί) και βεβαίωση της προηγούμενης σχολικής μονάδας, εφόσον απαιτείται. Δηλώνω ότι τα στοιχεία είναι αληθή, αποδεχόμαι τον εσωτερικό κανονισμό του σχολείου και παρακαλώ όπως ενημερωθώ εγγράφως για την απόφαση εγγραφής.', justify: true },
      { type: 'attachment', items: ['Πιστοποιητικό γέννησης.', 'Βεβαίωση διαμονής.', 'Βιβλιάριο υγείας (εμβολιασμοί).'], label: 'Επισυνάπτονται:' },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-edu-university-certs', kind: 'STANDARD', categorySlug: 'edu-docs',
    titleRu: 'Заявление в университет (выдача справок)',
    titleDoc: 'Αίτηση προς πανεπιστήμιο για χορήγηση πιστοποιητικών', titleEn: 'Application to the university for certificates',
    descRu: 'Заявление в вуз на выдачу академических справок (подтверждение статуса студента, выписка оценок, подтверждение срока учёбы) — ν. 4957/2022; секретариат обязан выдать в разумный срок.',
    descEn: 'Application to a university for academic certificates (enrolment status, transcript, duration of studies) under Law 4957/2022.',
    descDoc: 'Αίτηση προς τη γραμματεία του ιδρύματος για χορήγηση πιστοποιητικών.',
    refRu: 'ν. 4957/2022 — рамка функционирования вузов',
    refEn: 'Law 4957/2022 — framework for the operation of Higher Education Institutions',
    fields: [
      ...personFields([
        F('university', 'Вуз', 'University', 'text', { half: true, placeholderDoc: 'Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών' }),
        F('school_dept', 'Факультет/кафедра', 'School/Department', 'text', { half: true, placeholderDoc: 'Τμήμα Νομικής' }),
        F('student_id', 'Номер студента', 'Student ID', 'text', { half: true, placeholderDoc: '73102345' }),
        F('certificates', 'Какая справка нужна', 'Certificate requested', 'select', {
          options: [
            'βεβαίωση σπουδαστικής κατάστασης',
            'πιστοποιητικό σπουδών και αναλυτική βαθμολογία',
            'πιστοποιητικό αποφοίτησης',
            'βεβαίωση διάρκειας σπουδών',
          ],
        }),
        F('copies', 'Количество копий', 'Number of copies', 'number', { half: true, placeholderRu: '2' }),
      ]),
    ],
    body: [
      hdr(['{{university}}', 'Προς: Τη Γραμματεία της Σχολής'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΑΙΤΗΣΗ ΓΙΑ ΧΟΡΗΓΗΣΗ ΠΙΣΤΟΠΟΙΗΤΙΚΩΝ' },
      { type: 'paragraph', text: 'Είμαι φοιτητής/φοιτήτρια της {{school_dept}} του ιδρύματός σας με αριθμό μητρώου {{student_id}}. Σας παρακαλώ να μου χορηγήσετε: {{certificates}}, σε {{copies}} αντίγραφα, επίσημα επικυρωμένα.', justify: true },
      { type: 'paragraph', text: 'Σύμφωνα με το πλαίσιο λειτουργίας των ΑΕΙ (ν. 4957/2022) και τον εσωτερικό κανονισμό, η γραμματεία υποχρεούται να χορηγεί τα πιστοποιητικά εντός εύλογου χρόνου. Παρακαλώ όπως ενημερωθώ για την ημερομηνία παραλαβής ή την αποστολή τους με ταχυδρομείο στη διεύθυνσή μου.', justify: true },
      sign('{{applicant_name}}'),
    ],
  },

  // ==================== ПОЧТА ====================
  {
    slug: 'gr-post-lost-parcel', kind: 'STANDARD', categorySlug: 'post-claims',
    titleRu: 'Претензия почтовому оператору (утраченное отправление)',
    titleDoc: 'Καταγγελία σε ταχυδρομικό πάροχο για χαμένο δέμα', titleEn: 'Claim to the postal operator for a lost parcel',
    descRu: 'Претензия почтовому оператору по утраченному отправлению: договорные обязательства + надзор ЕЭТТ (ν. 4053/2012); компенсация до объявленной стоимости; при отказе — жалоба в ЕЭТТ.',
    descEn: 'Claim to the postal operator for a lost or delayed parcel, demanding compensation up to the declared value; supervision by ΕΕΤΤ (Law 4053/2012).',
    descDoc: 'Καταγγελία σε ταχυδρομικό πάροχο για χαμένη ή καθυστερημένη αποστολή.',
    refRu: 'ν. 4053/2012 — почтовые услуги и надзор ЕЭТТ',
    refEn: 'Law 4053/2012 — postal services and ΕΕΤΤ supervision',
    fields: [
      ...personFields([
        F('provider', 'Почтовый оператор', 'Postal operator', 'text', { half: true, placeholderDoc: 'Ταχυδρομική Εταιρεία Α.Ε.' }),
        F('tracking', 'Номер отправления (tracking)', 'Tracking number', 'text', { half: true, placeholderDoc: 'RR123456789GR' }),
        F('sent_date', 'Дата отправки', 'Date of dispatch', 'date', { half: true }),
        F('contents', 'Содержимое и стоимость', 'Contents and value', 'text', { half: true, placeholderDoc: 'βιβλία, αξία 80 ευρώ' }),
      ]),
    ],
    body: [
      hdr(['{{provider}}', 'Προς: Το Τμήμα Εξυπηρέτησης Πελατών'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΚΑΤΑΓΓΕΛΙΑ ΓΙΑ ΧΑΜΕΝΟ ΔΕΜΑ' },
      { type: 'paragraph', text: 'Στις {{sent_date}} παρέδωσα στον πάροχό σας αποστολή με αριθμό παρακολούθησης {{tracking}}, με περιεχόμενο και αξία: {{contents}}. Η αποστολή δεν παραδόθηκε στον παραλήπτη μέχρι σήμερα, παρά την πάροδο του εύλογου χρόνου διανομής.', justify: true },
      { type: 'paragraph', text: 'Σας ζητώ να εντοπισθεί η αποστολή και, εφόσον έχει χαθεί ή καταστραφεί, να μου αποδοθεί αποζημίωση μέχρι τη δηλωμένη αξία, σύμφωνα με τους όρους της υπηρεσίας και τη νομοθεσία περί ταχυδρομικών υπηρεσιών (ν. 4053/2012). Παρακαλώ όπως απαντήσετε εγγράφως εντός δέκα (10) εργάσιμων ημερών· σε αντίθετη περίπτωση θα υποβάλω καταγγελία στην Εθνική Επιτροπή Τηλεπικοινωνιών και Ταχυδρομείων (ΕΕΤΤ) και στα δικαστήρια.', justify: true },
      { type: 'attachment', items: ['Απόδειξη αποστολής με αριθμό παρακολούθησης.', 'Τεκμηρίωση της αξίας του περιεχομένου.'], label: 'Επισυνάπτονται:' },
      sign('{{applicant_name}}'),
    ],
  },

  // ==================== ЖКХ / СОСЕДИ / БЫТ ====================
  {
    slug: 'gr-util-address-change', kind: 'STANDARD', categorySlug: 'util-management',
    titleRu: 'Заявление о смене места жительства в муниципалитет',
    titleDoc: 'Δήλωση αλλαγής κατοικίας στον Δήμο', titleEn: 'Municipality declaration of change of residence',
    descRu: 'Заявление в муниципалитет об изменении адреса и внесении его в реестры (δημοτολόγιο, ν. 3443/2006): новое жильё, дата переезда, документы-подтверждения.',
    descEn: 'Declaration to the municipality of a change of residence for registration in the municipal records (Law 3443/2006).',
    descDoc: 'Δήλωση αλλαγής κατοικίας προς τον Δήμο.',
    refRu: 'ν. 3443/2006 — реестры (δημοτολόγια)',
    refEn: 'Law 3443/2006 — municipal registration records',
    fields: [
      ...personFields([
        F('municipality', 'Муниципалитет (Δήμος)', 'Municipality', 'text', { half: true, placeholderDoc: 'Δήμος Αθηναίων' }),
        F('new_address', 'Новый адрес', 'New address', 'text', { half: true, placeholderDoc: 'Παπαφλέσσα 8, 17671 Καλλιθέα' }),
        F('move_date', 'Дата переезда', 'Date of the move', 'date', { half: true }),
      ]),
    ],
    body: [
      hdr(['{{municipality}}', 'Προς: Το Γραφείο Δημοτολογίου'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΔΗΛΩΣΗ ΑΛΛΑΓΗΣ ΚΑΤΟΙΚΙΑΣ' },
      { type: 'paragraph', text: 'Δηλώνω ότι από την {{move_date}} διαμένω στη διεύθυνση {{new_address}}, εντός των διοικητικών ορίων του Δήμου σας, όπου και μεταφέρω την κατοικία μου. Ζητώ την ορθή αναγραφή της νέας μου διεύθυνσης στα μητρώα του Δήμου, κατά τον ν. 3443/2006.', justify: true },
      { type: 'paragraph', text: 'Επιδίδω αποδεικτικά στοιχεία (μισθωτήριο σύμβαση ή βεβαίωση ιδιοκτησίας, πρόσφατος λογαριασμός ΔΕΚΟ). Δηλώνω υπεύθυνα ότι τα στοιχεία που αναφέρω είναι αληθή. Σημειώνεται ότι την αλλαγή διεύθυνσης θα δηλώσω επίσης προς τη φορολογική διοίκηση και τους λοιπούς φορείς, σύμφωνα με τις υποχρεώσεις μου.', justify: true },
      { type: 'attachment', items: ['Μισθωτήριο σύμβαση ή βεβαίωση ιδιοκτησίας.', 'Πρόσφατος λογαριασμός ΔΕΚΟ.'], label: 'Επισυνάπτονται:' },
      { type: 'signature', leftText: 'Ο δηλών', rightText: '_______________ / {{applicant_name}} /' },
    ],
  },
  {
    slug: 'gr-util-neighbors-noise', kind: 'STANDARD', categorySlug: 'util-neighbors',
    titleRu: 'Жалоба на шум от соседей',
    titleDoc: 'Καταγγελία θορύβου γειτόνων', titleEn: 'Complaint about neighbours’ noise',
    descRu: 'Жалоба в муниципалитет на систематический шум от соседей: недопустимые помехи (АК 1008-1009), правила тишины по муниципальному кодексу (π.δ. 18/1980); просьба о замере шума и санкциях.',
    descEn: 'Complaint to the municipality about recurring neighbourhood noise: prohibited annoyance (Civil Code arts. 1008–1009) and municipal noise rules (π.δ. 18/1980).',
    descDoc: 'Καταγγελία στον Δήμο για δυσχερή θορυβώδη διατάραξη από γείτονες.',
    refRu: 'АК 1008-1009 — недопустимые помехи; π.δ. 18/1980 (Демутический кодекс)',
    refEn: 'Civil Code arts. 1008–1009 — prohibited annoyance; Presidential Decree 18/1980 (Municipal Code)',
    fields: [
      ...personFields([
        F('municipality', 'Муниципалитет (Δήμος)', 'Municipality', 'text', { half: true, placeholderDoc: 'Δήμος Αθηναίων' }),
        F('noise_source', 'Источник шума (адрес/деятельность)', 'Noise source', 'text', { half: true, placeholderDoc: 'διαμέρισμα 3ου ορόφου, οδός Παπάφη 12' }),
        F('noise_times', 'Когда отмечается шум', 'Noise times', 'text', { half: true, placeholderDoc: 'καθημερινά μετά τις 23:00 και τα ξημερώματα' }),
        F('measures', 'Что просите', 'Measures requested', 'select', {
          options: [
            'να διενεργηθεί μέτρηση θορύβου από την αρμόδια υπηρεσία',
            'να επιβληθούν πρόστιμα στους παραβάτες',
            'να κοινοποιηθεί γραπτή επίπληξη στον παραβάτη',
          ],
        }),
      ]),
    ],
    body: [
      hdr(['{{municipality}}', 'Προς: Τον Δήμαρχο και το Τμήμα Περιβάλλοντος'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΚΑΤΑΓΓΕΛΙΑ ΓΙΑ ΔΥΣΧΕΡΗ ΘΟΡΥΒΩΔΗ ΔΙΑΤΑΡΑΧΗ' },
      { type: 'paragraph', text: 'Καταγγέλλω ότι από τη διεύθυνση {{noise_source}} προκαλείται επανειλημμένα δυσχερής θορυβώδης διατάραξη ({{noise_times}}), που καθιστά την κατοικία μου δυσανεκτική και παραβιάζει το δικαίωμά μου στην προσωπική και οικογενειακή γαλήνη.', justify: true },
      { type: 'paragraph', text: 'Η συμπεριφορά αυτή συνιστά απαγορευμένη ενόχληση σύμφωνα με τα άρθρα 1008 και 1009 του Αστικού Κώδικα και παραβαίνει τους όρους του Δημοτικού και Κοινοτικού Κώδικα (π.δ. 18/1980) περί θορύβου. Ζητώ να ληφθούν τα εξής μέτρα: {{measures}}. Σε περίπτωση μη άμεσης αντιμετώπισης θα απευθυνθώ στην Ελληνική Αστυνομία και στα δικαστήρια, αξιώνοντας την παύση της ενόχλησης και αποζημίωση για ηθική βλάβη (ΑΚ 914, 932).', justify: true },
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'gr-util-landlord-repairs', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Досудебное письмо арендодателю о ремонте',
    titleDoc: 'Εξωδικαστικό έγγραφο στον εκμισθωτή για επισκευές', titleEn: 'Pre-court letter to the landlord demanding repairs',
    descRu: 'Письмо арендодателю с требованием провести ремонт: обязанность содержать жильё пригодным для договора (АК 584, 595); при бездействии — снижение аренды (АК 593) или расторжение.',
    descEn: 'Pre-court letter to the landlord demanding repairs: the duty to keep the leased property fit for the agreed use (Civil Code arts. 584, 595); otherwise rent reduction (art. 593) or termination.',
    descDoc: 'Εξωδικαστικό έγγραφο στον εκμισθωτή για αναγκαίες επισκευές.',
    refRu: 'АК 584, 595 — обязанности арендодателя; АК 593 — снижение аренды',
    refEn: 'Civil Code arts. 584 and 595 — landlord’s duty to repair; art. 593 — rent reduction',
    fields: [
      ...personFields([
        F('landlord_name', 'Имя арендодателя', 'Landlord’s name', 'text', { half: true, placeholderDoc: 'Ιωάννου Νικόλαος' }),
        F('property', 'Адрес арендуемого жилья', 'Leased property address', 'text', { half: true, placeholderDoc: 'Μαυροματίου 12, 3ος όροφος, Αθήνα' }),
        F('repairs', 'Необходимые работы', 'Repairs needed', 'text', { placeholderDoc: 'διαρροή οροφής στο υπνοδωμάτιο και βλάβη στον θερμοσίφωνα' }),
        F('deadline_days', 'Срок в днях', 'Deadline in days', 'number', { half: true, placeholderRu: '10' }),
      ]),
    ],
    body: [
      hdr(['{{landlord_name}}', 'Προς: Τον/Την εκμισθωτή'], ['{{applicant_name}}', 'ΑΦΜ: {{applicant_afm}}', '{{applicant_address}}', '{{applicant_phone}}', '{{date_today}}']),
      { type: 'title', text: 'ΕΞΩΔΙΚΟ ΕΓΓΡΑΦΟ — ΑΠΑΙΤΗΣΗ ΕΠΙΣΚΕΥΩΝ' },
      { type: 'paragraph', text: 'Το μισθωμένο μου ακίνητο στη διεύθυνση {{property}} χρήζει των εξής επισκευών: {{repairs}}. Σύμφωνα με τα άρθρα 584 και 595 του Αστικού Κώδικα, ο εκμισθωτής οφείλει να παραδίδει και να διατηρεί το μίσχιο σε κατάσταση κατάλληλη για τη συμφωνημένη χρήση και να πραγματοποιεί κατά τη διάρκεια της μίσθωσης τις αναγκαίες επισκευές.', justify: true },
      { type: 'paragraph', text: 'Σας καλώ να προβείτε στις επισκευές εντός {{deadline_days}} ημερών από την επίδοση του παρόντος. Εφόσον δεν προβείτε, θα ασκήσω τα δικαιώματά μου δυνάμει των άρθρων 593 και 595 του Αστικού Κώδικα, συμπεριλαμβανομένης της ανάλογης μείωσης του μισθώματος, της ολικής ή μερικής λύσης της μίσθωσης και της αποζημιώσεως για τυχόν ζημία.', justify: true },
      { type: 'attachment', items: ['Φωτογραφίες των βλαβών.'], label: 'Επισυνάπτονται:' },
      sign('{{applicant_name}}'),
    ],
  },

  // ==================== УНИВЕРСАЛЬНЫЕ ====================
  {
    slug: 'gr-uni-private-loan', kind: 'STANDARD', categorySlug: 'uni-money',
    titleRu: 'Договор займа между частными лицами',
    titleDoc: 'Συμβόλαιο δανείου μεταξύ ιδιωτών', titleEn: 'Private loan agreement',
    descRu: 'Простой письменный договор займа между физическими лицами (АК 806): сумма, срок возврата, проценты, порядок возврата, последствия просрочки; подписывается обеими сторонами в двух экземплярах.',
    descEn: 'Simple written loan agreement between private individuals (Civil Code art. 806): amount, repayment date, interest, repayment procedure and default consequences.',
    descDoc: 'Ιδιωτικό συμβόλαιο δανείου μεταξύ φυσικών προσώπων.',
    refRu: 'АК 806 — договор займа; АК 245 κ.ε. — проценты',
    refEn: 'Civil Code art. 806 — loan (mutuum); arts. 245 ff. — interest',
    fields: [
      F('city', 'Место подписания', 'Place of signing', 'text', { half: true, placeholderDoc: 'Αθήνα' }),
      F('lender_name', 'Заимодавец (ФИО)', 'Lender’s full name', 'text', { half: true, placeholderDoc: 'Παπαδόπουλος Γεώργιος' }),
      F('lender_afm', 'АФМ заимодавца', 'Lender’s tax ID', 'text', { half: true, placeholderDoc: '123456789' }),
      F('borrower_name', 'Заёмщик (ФИО)', 'Borrower’s full name', 'text', { half: true, placeholderDoc: 'Ιωάννου Νικόλαος' }),
      F('borrower_afm', 'АФМ заёмщика', 'Borrower’s tax ID', 'text', { half: true, placeholderDoc: '987654321' }),
      F('loan_amount', 'Сумма займа', 'Loan amount', 'text', { half: true, placeholderDoc: '5.000 ευρώ' }),
      F('due_date', 'Срок возврата', 'Repayment date', 'date', { half: true }),
      F('interest', 'Условия о процентах', 'Interest terms', 'select', {
        options: [
          'χωρίς τόκους (άτοκο δάνειο)',
          'με τον νόμιμο τόκο καθυστέρησης',
          'με συμφωνημένο τόκο 3 % ετησίως',
        ],
      }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{city}}', '{{date_today}}'] },
      { type: 'title', text: 'ΣΥΜΒΟΛΑΙΟ ΔΑΝΕΙΟΥ' },
      { type: 'paragraph', text: 'Ο/Η κάτωθι υπογεγραμμένος/η {{lender_name}} (ΑΦΜ {{lender_afm}}), που αποκαλείται «δανειστής», παραχωρεί από σήμερα στον/στην {{borrower_name}} (ΑΦΜ {{borrower_afm}}), που αποκαλείται «δανειολήπτη», ως δάνειο το ποσό των {{loan_amount}}. Ο δανειολήπτης παραλαμβάνει το ποσό αυτό και αναγνωρίζει ότι το οφείλει στον δανειστή (ΑΚ 806).', justify: true },
      { type: 'paragraph', text: 'Ο δανειολήπτης δεσμεύεται να επιστρέψει το ανωτέρω ποσό μέχρι την {{due_date}}. Εφαρμόζεται η εξής συμφωνία τόκων: {{interest}}. Η εξόφληση γίνεται σε τραπεζικό λογαριασμό του δανειστή ή σε μετρητά με γραπτή απόδειξη. Σε περίπτωση καθυστέρησης οφείλονται ο νόμιμος τόκος καθυστέρησης και, εφόσον απαιτηθεί, η δικαστική δαπάνη.', justify: true },
      { type: 'paragraph', text: 'Το παρόν συντάχθηκε σε δύο (2) όμοια αντίτυπα, από ένα για κάθε συμβαλλόμενο μέρος.', justify: true },
      { type: 'signature', leftText: 'Ο δανειστής', rightText: '_______________ / {{lender_name}} /' },
      { type: 'signature', leftText: 'Ο δανειολήπτης', rightText: '_______________ / {{borrower_name}} /' },
    ],
  },
  {
    slug: 'gr-uni-power-attorney', kind: 'STANDARD', categorySlug: 'uni-common',
    titleRu: 'Доверенность',
    titleDoc: 'Εξουσιοδότηση', titleEn: 'Power of attorney',
    descRu: 'Простая письменная доверенность (АК 215-216): полномочие представителя на конкретные действия (получение документов, представление в ведомствах), срок действия, запрет передачи без согласия.',
    descEn: 'Simple written power of attorney (Civil Code arts. 215–216) authorising a representative for specific acts, with validity period and no substitution.',
    descDoc: 'Εξουσιοδότηση για εκπροσώπηση σε συγκεκριμένες υποθέσεις.',
    refRu: 'АК 215-216 — доверенность (εξουσιοδότηση)',
    refEn: 'Civil Code arts. 215–216 — mandate and power of attorney',
    fields: [
      F('city', 'Место подписания', 'Place of signing', 'text', { half: true, placeholderDoc: 'Αθήνα' }),
      F('principal_name', 'Доверитель (ФИО)', 'Principal’s full name', 'text', { half: true, placeholderDoc: 'Παπαδόπουλος Γεώργιος' }),
      F('principal_afm', 'АФМ доверителя', 'Principal’s tax ID', 'text', { half: true, placeholderDoc: '123456789' }),
      F('agent_name', 'Представитель (ФИО)', 'Agent’s full name', 'text', { half: true, placeholderDoc: 'Ιωάννου Νικόλαος' }),
      F('agent_afm', 'АФМ представителя', 'Agent’s tax ID', 'text', { half: true, placeholderDoc: '987654321' }),
      F('agent_id', 'Удостоверение представителя', 'Agent’s ID number', 'text', { half: true, placeholderDoc: 'ΑΔΤ ΑΒ 123456' }),
      F('powers', 'Полномочия', 'Powers granted', 'select', {
        options: [
          'παραλαβή πιστοποιητικών και εγγράφων από δημόσιες υπηρεσίες',
          'υποβολή αιτήσεων και παραλαβή απαντήσεων ενώπιον Δήμου ή λοιπών φορέων',
          'παράσταση ενώπιον φορέων κοινωνικής ασφάλισης',
          'διαχείριση τραπεζικών υποθέσεων (καταθέσεις και αναλήψεις)',
        ],
      }),
      F('validity', 'Срок действия', 'Validity', 'select', {
        options: [
          'για μία (1) συγκεκριμένη πράξη',
          'για διάστημα έξι (6) μηνών',
          'για διάστημα ενός (1) έτους',
          'μέχρι την ανάκλησή της',
        ],
      }),
    ],
    body: [
      { type: 'lines', align: 'right', items: ['{{city}}', '{{date_today}}'] },
      { type: 'title', text: 'ΕΞΟΥΣΙΟΔΟΤΗΣΗ' },
      { type: 'paragraph', text: 'Εγώ ο/η κάτωθι υπογεγραμμένος/η {{principal_name}} (ΑΦΜ {{principal_afm}}), εξουσιοδοτώ νόμιμα τον/την {{agent_name}} (ΑΦΜ {{agent_afm}}, ταυτότητα {{agent_id}}) να με εκπροσωπεί στις εξής υποθέσεις: {{powers}}.', justify: true },
      { type: 'paragraph', text: 'Η παρούσα εξουσιοδότηση ισχύει {{validity}} και δεν επιτρέπει υποκατάσταση, εκτός αν δηλωθεί ρητά το αντίθετο. Ο πληρεξούμενος δικαιούται να υπογράφει αιτήσεις και σχετικά έγγραφα για τις ανωτέρω υποθέσεις και υποχρεούται να λογοδοτήσει για τις πράξεις του (ΑΚ 215 και 216).', justify: true },
      { type: 'signature', leftText: 'Ο εξουσιοδοτών', rightText: '_______________ / {{principal_name}} /' },
    ],
  },
];
