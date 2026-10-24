// Дерево каталога: большие группы (уровень 1) → подгруппы (уровень 2).
// Общие для всех стран (ТЗ: работа, суды, медицина, образование, почта, ЖКХ + универсальные).
// titleI18n — названия на 26 прочих языках интерфейса (ru/en — через titleRu/titleEn);
// порядок ключей фиксирован: uk, be, kk, uz, kg, tg, hy, az, ro, de, fr, pl, zh, ja, ko, tr, he, pt, es, it, nl, sv, no, da, fi, el.
import type { GroupDef } from './types';

export const CATEGORY_TREE: GroupDef[] = [
  {
    slug: 'work', titleRu: 'Работа и трудовые отношения', titleEn: 'Work & employment', icon: 'Briefcase',
    titleI18n: {
      uk: 'Робота та працевлаштування', be: 'Работа і працаўладкаванне', kk: 'Жұмыс және жұмысқа орналасу', uz: 'Ish va bandlik', kg: 'Иш жана эмгек', tg: 'Кор ва меҳнат', hy: 'Աշխատանք և զբաղվածություն', az: 'İş və məşğulluq', ro: 'Muncă și angajare',
      de: 'Arbeit & Beschäftigung', fr: 'Travail et emploi', pl: 'Praca i zatrudnienie', zh: '工作与就业', ja: '仕事と雇用', ko: '근로와 고용', tr: 'İş ve istihdam', he: 'עבודה ותעסוקה', pt: 'Trabalho e emprego',
      es: 'Trabajo y empleo', it: 'Lavoro e occupazione', nl: 'Werk en arbeid', sv: 'Arbete och anställning', no: 'Arbeid og sysselsetting', da: 'Arbejde og beskæftigelse', fi: 'Työ ja työllisyys', el: 'Εργασία και απασχόληση',
    },
    children: [
      {
        slug: 'work-hiring', titleRu: 'Приём и перевод', titleEn: 'Hiring & transfer',
        titleI18n: {
          uk: 'Приймання та переведення', be: 'Прыём і перавод', kk: 'Қабылдау және ауыстыру', uz: 'Ishga qabul va o‘tkazish', kg: 'Ишке алуу жана көчүрүү', tg: 'Қабул ва гузариш', hy: 'Ընդունում և տեղափոխում', az: 'İşə qəbul və köçürmə', ro: 'Angajare și transfer',
          de: 'Einstellung & Versetzung', fr: 'Embauche et mutation', pl: 'Zatrudnienie i przeniesienie', zh: '入职与调岗', ja: '採用と異動', ko: '채용과 인사이동', tr: 'İşe alma ve tayin', he: 'גיוס והעברה', pt: 'Contratação e transferência',
          es: 'Contratación y traslado', it: 'Assunzione e trasferimento', nl: 'Aanname en overplaatsing', sv: 'Anställning och omplacering', no: 'Ansettelse og forflytning', da: 'Ansættelse og forflyttelse', fi: 'Palkkaaminen ja siirto', el: 'Πρόσληψη και μετάθεση',
        },
      },
      {
        slug: 'work-time', titleRu: 'Рабочее время и режим', titleEn: 'Working time & schedule',
        titleI18n: {
          uk: 'Робочий час і режим', be: 'Працоўны час і рэжым', kk: 'Жұмыс уақыты және кесте', uz: 'Ish vaqti va jadval', kg: 'Жумуш убактысы жана график', tg: 'Вақти корӣ ва режим', hy: 'Աշխատանքային ժամանակ և գրաֆիկ', az: 'İş vaxtı və qrafik', ro: 'Timp de muncă și program',
          de: 'Arbeitszeit & Zeitplan', fr: 'Temps de travail et horaires', pl: 'Czas pracy i harmonogram', zh: '工时与排班', ja: '労働時間とシフト', ko: '근로시간과 근무일정', tr: 'Çalışma süresi ve program', he: 'שעות עבודה ולוח זמנים', pt: 'Horário de trabalho',
          es: 'Jornada y horario', it: 'Orario di lavoro', nl: 'Werktijd en rooster', sv: 'Arbetstid och schema', no: 'Arbeidstid og vaktplan', da: 'Arbejdstid og vagtplan', fi: 'Työaika ja aikataulu', el: 'Ωράριο εργασίας και πρόγραμμα',
        },
      },
      {
        slug: 'work-vacations', titleRu: 'Отпуска', titleEn: 'Vacations',
        titleI18n: {
          uk: 'Відпустки', be: 'Адпачынкі', kk: 'Демалыс', uz: 'Ta’til', kg: 'Демалыш', tg: 'Рухсатӣ', hy: 'Արձակուրդներ', az: 'Məzuniyyət', ro: 'Concedii',
          de: 'Urlaub', fr: 'Congés', pl: 'Urlopy', zh: '休假', ja: '休暇', ko: '휴가', tr: 'İzinler', he: 'חופשות', pt: 'Férias',
          es: 'Vacaciones', it: 'Ferie', nl: 'Vakantie', sv: 'Semester', no: 'Ferie', da: 'Ferie', fi: 'Lomat', el: 'Άδειες',
        },
      },
      {
        slug: 'work-family', titleRu: 'Семья и дети: гарантии', titleEn: 'Family & childcare guarantees',
        titleI18n: {
          uk: 'Сім’я та діти: гарантії', be: 'Сям’я і дзеці: гарантыі', kk: 'Отбасы және балалар: кепілдіктер', uz: 'Oila va bolalar: kafolatlar', kg: 'Үй-бүлө жана балдар: кепилдиктер', tg: 'Оила ва кӯдакон: кафолатҳо', hy: 'Ընտանիք և երեխաներ՝ երաշխիքներ', az: 'Ailə və uşaqlar: zəmanətlər', ro: 'Familie și copii: garanții',
          de: 'Familie & Kinder: Ansprüche', fr: 'Famille et enfants : garanties', pl: 'Rodzina i dzieci: gwarancje', zh: '家庭与育儿保障', ja: '家族と育児の保障', ko: '가족과 육아 보장', tr: 'Aile ve çocuk güvenceleri', he: 'משפחה וילדים: זכויות', pt: 'Família e filhos: garantias',
          es: 'Familia e hijos: garantías', it: 'Famiglia e figli: garanzie', nl: 'Gezin en kinderen: garanties', sv: 'Familj och barn: garantier', no: 'Familie og barn: garantier', da: 'Familie og børn: garantier', fi: 'Perhe ja lapset: oikeudet', el: 'Οικογένεια και παιδιά: εγγυήσεις',
        },
      },
      {
        slug: 'work-dismissal', titleRu: 'Увольнение', titleEn: 'Dismissal',
        titleI18n: {
          uk: 'Звільнення', be: 'Звальненне', kk: 'Жұмыстан босату', uz: 'Ishdan bo‘shatish', kg: 'Жумуштан бошотуу', tg: 'Аз кор баровардан', hy: 'Աշխատանքից ազատում', az: 'İşdən çıxarma', ro: 'Concediere',
          de: 'Kündigung', fr: 'Licenciement', pl: 'Zwolnienie', zh: '解雇', ja: '解雇', ko: '해고', tr: 'İşten çıkarma', he: 'פיטורים', pt: 'Despedimento',
          es: 'Despido', it: 'Licenziamento', nl: 'Ontslag', sv: 'Uppsägning', no: 'Oppsigelse', da: 'Opsigelse', fi: 'Irtisanominen', el: 'Απόλυση',
        },
      },
      {
        slug: 'work-docs', titleRu: 'Документы с места работы', titleEn: 'Workplace documents',
        titleI18n: {
          uk: 'Документи з місця роботи', be: 'Дакументы з месца работы', kk: 'Жұмыс орнының құжаттары', uz: 'Ish joyidan hujjatlar', kg: 'Иш орнунун документтери', tg: 'Ҳуҷҷатҳо аз ҷои кор', hy: 'Աշխատավայրի փաստաթղթեր', az: 'İş yerindən sənədlər', ro: 'Documente de la angajator',
          de: 'Dokumente vom Arbeitgeber', fr: 'Documents de l’employeur', pl: 'Dokumenty od pracodawcy', zh: '单位证明文件', ja: '職場の証明書', ko: '직장 서류', tr: 'İşyeri belgeleri', he: 'מסמכים ממקום העבודה', pt: 'Documentos do trabalho',
          es: 'Documentos laborales', it: 'Documenti del lavoro', nl: 'Documenten van de werkgever', sv: 'Dokument från arbetsgivaren', no: 'Dokumenter fra arbeidsgiver', da: 'Dokumenter fra arbejdsgiver', fi: 'Työpaikan todistukset', el: 'Έγγραφα από τον εργοδότη',
        },
      },
    ],
  },
  {
    slug: 'court', titleRu: 'Суды и правовая защита', titleEn: 'Courts & legal protection', icon: 'Scale',
    titleI18n: {
      uk: 'Суди та правовий захист', be: 'Суды і прававая абарона', kk: 'Сот және құқықтық қорғау', uz: 'Sud va huquqiy himoya', kg: 'Сот жана укуктук коргоо', tg: 'Суд ва ҳимояи ҳуқуқӣ', hy: 'Դատարան և իրավական պաշտպանություն', az: 'Məhkəmə və hüquqi müdafiə', ro: 'Instanțe și protecție juridică',
      de: 'Gerichte & Rechtsschutz', fr: 'Justice et protection juridique', pl: 'Sądy i ochrona prawna', zh: '法院与法律保护', ja: '裁判と法的保護', ko: '법원과 법적 보호', tr: 'Mahkeme ve hukuki koruma', he: 'בתי משפט והגנה משפטית', pt: 'Tribunais e proteção jurídica',
      es: 'Tribunales y protección jurídica', it: 'Tribunali e tutela legale', nl: 'Rechtbanken en rechtsbescherming', sv: 'Domstolar och rättsskydd', no: 'Domstoler og rettssikring', da: 'Domstole og retssikring', fi: 'Tuomioistuimet ja oikeusturva', el: 'Δικαστήρια και νομική προστασία',
    },
    children: [
      {
        slug: 'court-claims', titleRu: 'Претензии', titleEn: 'Pre-court claims',
        titleI18n: {
          uk: 'Претензії', be: 'Прэтэнзіі', kk: 'Претензиялар', uz: 'Pretensiyalar', kg: 'Претензиялар', tg: 'Претензияҳо', hy: 'Պահանջներ', az: 'Tələblər', ro: 'Notificări',
          de: 'Vorgerichtliche Forderungen', fr: 'Mises en demeure', pl: 'Wezwania', zh: '索赔', ja: '内容証明', ko: '내용증명', tr: 'İhtarlar', he: 'דרישות מקדימות', pt: 'Notificações extrajudiciais',
          es: 'Reclamaciones', it: 'Diffide', nl: 'Ingebrekestellingen', sv: 'Kravbrev', no: 'Kravbrev', da: 'Påkrav', fi: 'Vaatimukset', el: 'Εξωδικαστικές απαιτήσεις',
        },
      },
      {
        slug: 'court-lawsuits', titleRu: 'Исковые заявления', titleEn: 'Lawsuits',
        titleI18n: {
          uk: 'Позовні заяви', be: 'Пазоўныя заявы', kk: 'Сотқа арыздар', uz: 'Da’vo arizalari', kg: 'Сотко арыздар', tg: 'Даъвономаҳо', hy: 'Հայցադիմումներ', az: 'İddia ərizələri', ro: 'Acțiuni în justiție',
          de: 'Klagen', fr: 'Actions en justice', pl: 'Pozwy', zh: '起诉状', ja: '訴状', ko: '소장', tr: 'Dava dilekçeleri', he: 'תביעות', pt: 'Ações judiciais',
          es: 'Demandas', it: 'Atti di citazione', nl: 'Dagvaardingen', sv: 'Stämningsansökningar', no: 'Søksmål', da: 'Søgsmål', fi: 'Kannekirjelmät', el: 'Αγωγές',
        },
      },
      {
        slug: 'court-gov', titleRu: 'Жалобы в госорганы', titleEn: 'Complaints to authorities',
        titleI18n: {
          uk: 'Скарги до держорганів', be: 'Скаргі ў дзяржорганы', kk: 'Мемлекеттік органдарға шағымдар', uz: 'Davlat organlariga shikoyatlar', kg: 'Мамлекеттик органдарга даттануулар', tg: 'Ба мақомотҳо шикоятҳо', hy: 'Բողոքներ պետական մարմիններին', az: 'Dövlət orqanlarına şikayətlər', ro: 'Reclamații la autorități',
          de: 'Beschwerden an Behörden', fr: 'Réclamations aux autorités', pl: 'Skargi do urzędów', zh: '政府投诉', ja: '行政への苦情', ko: '행정기관 민원', tr: 'Resmi makamlara şikayet', he: 'תלונות לרשויות', pt: 'Reclamações às autoridades',
          es: 'Quejas a las autoridades', it: 'Reclami agli enti pubblici', nl: 'Klachten bij instanties', sv: 'Klagomål till myndigheter', no: 'Klager til myndigheter', da: 'Klager til myndigheder', fi: 'Valitukset viranomaisille', el: 'Παράπονα στις αρχές',
        },
      },
      {
        slug: 'court-family', titleRu: 'Семейные и наследственные дела', titleEn: 'Family & inheritance',
        titleI18n: {
          uk: 'Сімейні та спадкові справи', be: 'Сямейныя і спадчынныя справы', kk: 'Отбасы және мұра істері', uz: 'Oila va meros ishlari', kg: 'Үй-бүлө жана мурас иштери', tg: 'Делоҳои оилавӣ ва меросӣ', hy: 'Ընտանեկան և ժառանգական գործեր', az: 'Ailə və miras işləri', ro: 'Familii și moșteniri',
          de: 'Familien- & Erbsachen', fr: 'Famille et succession', pl: 'Rodzina i spadki', zh: '家庭与继承事务', ja: '家族と相続', ko: '가족과 상속', tr: 'Aile ve miras', he: 'משפחה וירושה', pt: 'Família e heranças',
          es: 'Familia y herencias', it: 'Famiglia ed eredità', nl: 'Familie en erfenis', sv: 'Familj och arv', no: 'Familie og arv', da: 'Familie og arv', fi: 'Perhe ja perintä', el: 'Οικογένεια και κληρονομικά',
        },
      },
    ],
  },
  {
    slug: 'finance', titleRu: 'Налоги и банки', titleEn: 'Taxes & banking', icon: 'Landmark',
    titleI18n: {
      uk: 'Податки та банки', be: 'Падаткі і банкі', kk: 'Салық және банк', uz: 'Soliqlar va banklar', kg: 'Салык жана банктар', tg: 'Андоз ва бонкҳо', hy: 'Հարկեր և բանկեր', az: 'Vergilər və banklar', ro: 'Impozite și bănci',
      de: 'Steuern & Banken', fr: 'Impôts et banques', pl: 'Podatki i banki', zh: '税务与银行', ja: '税金と銀行', ko: '세금과 은행', tr: 'Vergiler ve bankalar', he: 'מיסים ובנקים', pt: 'Impostos e bancos',
      es: 'Impuestos y bancos', it: 'Tasse e banche', nl: 'Belastingen en banken', sv: 'Skatter och banker', no: 'Skatter og banker', da: 'Skatter og banker', fi: 'Verot ja pankit', el: 'Φόροι και τράπεζες',
    },
    children: [
      {
        slug: 'tax-docs', titleRu: 'Налоговые заявления', titleEn: 'Tax documents',
        titleI18n: {
          uk: 'Податкові заяви', be: 'Падатковыя заявы', kk: 'Салық арыздары', uz: 'Soliq arizalari', kg: 'Салык арыздары', tg: 'Аризаҳои андоз', hy: 'Հարկային դիմումներ', az: 'Vergi sənədləri', ro: 'Documente fiscale',
          de: 'Steuerdokumente', fr: 'Documents fiscaux', pl: 'Dokumenty podatkowe', zh: '税务文件', ja: '税務書類', ko: '세금 서류', tr: 'Vergi belgeleri', he: 'מסמכי מס', pt: 'Documentos fiscais',
          es: 'Documentos fiscales', it: 'Documenti fiscali', nl: 'Belastingdocumenten', sv: 'Skattedokument', no: 'Skattedokumenter', da: 'Skattedokumenter', fi: 'Verodokumentit', el: 'Φορολογικά έγγραφα',
        },
      },
      {
        slug: 'bank-docs', titleRu: 'Банки и кредиты', titleEn: 'Banks & loans',
        titleI18n: {
          uk: 'Банки та кредити', be: 'Банкі і крэдыты', kk: 'Банк және несие', uz: 'Banklar va kreditlar', kg: 'Банктар жана кредиттер', tg: 'Бонкҳо ва қарзҳо', hy: 'Բանկեր և վարկեր', az: 'Banklar və kreditlər', ro: 'Bănci și credite',
          de: 'Banken & Kredite', fr: 'Banques et crédits', pl: 'Banki i kredyty', zh: '银行与贷款', ja: '銀行とローン', ko: '은행과 대출', tr: 'Bankalar ve krediler', he: 'בנקים והלוואות', pt: 'Bancos e empréstimos',
          es: 'Bancos y préstamos', it: 'Banche e prestiti', nl: 'Banken en leningen', sv: 'Banker och lån', no: 'Banker og lån', da: 'Banker og lån', fi: 'Pankit ja lainat', el: 'Τράπεζες και δάνεια',
        },
      },
    ],
  },
  {
    slug: 'social', titleRu: 'Соцзащита и пенсии', titleEn: 'Social security & pensions', icon: 'HeartHandshake',
    titleI18n: {
      uk: 'Соцзахист і пенсії', be: 'Сацзабеспячэнне і пенсіі', kk: 'Әлеуметтік қорғау және зейнетақы', uz: 'Ijtimoiy himoya va nafaqalar', kg: 'Социалдык камсыздоо жана пенсиялар', tg: 'Ҳимояи иҷтимоӣ ва нафақаҳо', hy: 'Սոցիալական ապահովություն և կենսաթոշակներ', az: 'Sosial təminat və pensiyalar', ro: 'Asigurări sociale și pensii',
      de: 'Sozialleistungen & Renten', fr: 'Sécurité sociale et retraites', pl: 'Zabezpieczenie społeczne i emerytury', zh: '社保与养老金', ja: '社会保障と年金', ko: '사회보장과 연금', tr: 'Sosyal güvenlik ve emeklilik', he: 'ביטוח לאומי ופנסיה', pt: 'Segurança social e pensões',
      es: 'Seguridad social y pensiones', it: 'Previdenza sociale e pensioni', nl: 'Sociale zekerheid en pensioen', sv: 'Socialförsäkring och pensioner', no: 'Trygd og pensjoner', da: 'Sociale ydelser og pension', fi: 'Sosiaaliturva ja eläkkeet', el: 'Κοινωνική πρόνοια και συντάξεις',
    },
    children: [
      {
        slug: 'soc-benefits', titleRu: 'Пособия и выплаты', titleEn: 'Benefits & payments',
        titleI18n: {
          uk: 'Допомога та виплати', be: 'Дапамога і выплаты', kk: 'Жәрдемақы және төлемдер', uz: 'Nafaqalar va to‘lovlar', kg: 'Жөндөмө жана төлөмдөр', tg: 'Мусоида ва пардохтҳо', hy: 'Նպաստներ և վճարումներ', az: 'Müavinətlər və ödənişlər', ro: 'Alocații și plăți',
          de: 'Leistungen & Zahlungen', fr: 'Prestations et paiements', pl: 'Zasiłki i wypłaty', zh: '补贴与发放', ja: '手当と給付金', ko: '수당과 지원금', tr: 'Yardımlar ve ödemeler', he: 'קצבאות ותשלומים', pt: 'Subsídios e pagamentos',
          es: 'Prestaciones y pagos', it: 'Sussidi e pagamenti', nl: 'Uitkeringen en betalingen', sv: 'Bidrag och utbetalningar', no: 'Ytelser og utbetalinger', da: 'Ydelser og udbetalinger', fi: 'Etuudet ja maksat', el: 'Επιδόματα και πληρωμές',
        },
      },
      {
        slug: 'soc-pension', titleRu: 'Пенсии', titleEn: 'Pensions',
        titleI18n: {
          uk: 'Пенсії', be: 'Пенсіі', kk: 'Зейнетақы', uz: 'Nafaqalar', kg: 'Пенсиялар', tg: 'Нафақаҳо', hy: 'Կենսաթոշակներ', az: 'Pensiyalar', ro: 'Pensii',
          de: 'Renten', fr: 'Retraites', pl: 'Emerytury', zh: '养老金', ja: '年金', ko: '연금', tr: 'Emeklilik', he: 'פנסיות', pt: 'Pensões',
          es: 'Pensiones', it: 'Pensioni', nl: 'Pensioenen', sv: 'Pensioner', no: 'Pensjoner', da: 'Pensioner', fi: 'Eläkkeet', el: 'Συντάξεις',
        },
      },
    ],
  },
  {
    slug: 'medicine', titleRu: 'Медицина', titleEn: 'Healthcare', icon: 'HeartPulse',
    titleI18n: {
      uk: 'Медицина', be: 'Медыцына', kk: 'Денсаулық сақтау', uz: 'Sog‘liqni saqlash', kg: 'Саламаттыкты сактоо', tg: 'Тандурустӣ', hy: 'Առողջապահություն', az: 'Səhiyyə', ro: 'Medicină',
      de: 'Gesundheit', fr: 'Santé', pl: 'Zdrowie', zh: '医疗', ja: '医療', ko: '의료', tr: 'Sağlık', he: 'בריאות', pt: 'Saúde',
      es: 'Salud', it: 'Salute', nl: 'Gezondheid', sv: 'Vård', no: 'Helse', da: 'Sundhed', fi: 'Terveys', el: 'Υγεία',
    },
    children: [
      {
        slug: 'med-appeals', titleRu: 'Обращения и жалобы', titleEn: 'Appeals & complaints',
        titleI18n: {
          uk: 'Звернення та скарги', be: 'Звароты і скаргі', kk: 'Өтініштер және шағымдар', uz: 'Murojaat va shikoyatlar', kg: 'Кайрылуулар жана даттануулар', tg: 'Муроҷиат ва шикоятҳо', hy: 'Դիմումներ և բողոքներ', az: 'Müraciət və şikayətlər', ro: 'Sesizări și reclamații',
          de: 'Anliegen & Beschwerden', fr: 'Demandes et réclamations', pl: 'Wnioski i skargi', zh: '诉求与投诉', ja: '相談と苦情', ko: '문의와 불만', tr: 'Başvuru ve şikayetler', he: 'פניות ותלונות', pt: 'Pedidos e reclamações',
          es: 'Solicitudes y quejas', it: 'Richieste e reclami', nl: 'Verzoeken en klachten', sv: 'Framställningar och klagomål', no: 'Henvendelser og klager', da: 'Henvendelser og klager', fi: 'Yhteydenotot ja valitukset', el: 'Αιτήματα και παράπονα',
        },
      },
      {
        slug: 'med-records', titleRu: 'Медицинские документы', titleEn: 'Medical records',
        titleI18n: {
          uk: 'Медичні документи', be: 'Медыцынскія дакументы', kk: 'Медициналық құжаттар', uz: 'Tibbiy hujjatlar', kg: 'Медициналык документтер', tg: 'Ҳуҷҷатҳои тиббӣ', hy: 'Բժշկական փաստաթղթեր', az: 'Tibbi sənədlər', ro: 'Documente medicale',
          de: 'Ärztliche Unterlagen', fr: 'Documents médicaux', pl: 'Dokumenty medyczne', zh: '医疗文件', ja: '医療文書', ko: '의료 서류', tr: 'Tıbbi belgeler', he: 'מסמכים רפואיים', pt: 'Documentos médicos',
          es: 'Documentos médicos', it: 'Documenti medici', nl: 'Medische documenten', sv: 'Medicinska dokument', no: 'Medisinske dokumenter', da: 'Medicinske dokumenter', fi: 'Lääketieteelliset asiakirjat', el: 'Ιατρικά έγγραφα',
        },
      },
      {
        slug: 'med-services', titleRu: 'Платные услуги и доступ к помощи', titleEn: 'Paid services & access to care',
        titleI18n: {
          uk: 'Платні послуги та доступ до допомоги', be: 'Платныя паслугі і доступ да дапамогі', kk: 'Ақылы қызметтер және көмекке қолжетімділік', uz: 'Pullik xizmatlar va davolanish imkoniyati', kg: 'Акылуу кызматтар жана жардамга жетүү', tg: 'Хидматҳои пулакӣ ва дастрасии кӯмак', hy: 'Վճարովի ծառայություններ և օգնության հասանելիություն', az: 'Pullu xidmətlər və yardım əlçatanlığı', ro: 'Servicii plătite și acces la îngrijiri',
          de: 'Selbstzahler & Zugang zur Versorgung', fr: 'Services payants et accès aux soins', pl: 'Usługi płatne i dostęp do opieki', zh: '自费服务与就医保障', ja: '有料サービスと受診アクセス', ko: '유료 서비스와 진료 접근성', tr: 'Ücretli hizmetler ve tedaviye erişim', he: 'שירותים בתשלום ונגישות לטיפול', pt: 'Serviços pagos e acesso a cuidados',
          es: 'Servicios de pago y acceso a la atención', it: 'Servizi a pagamento e accesso alle cure', nl: 'Betaalde diensten en toegang tot zorg', sv: 'Betalda tjänster och tillgång till vård', no: 'Betalte tjenester og tilgang til behandling', da: 'Betalte ydelser og adgang til behandling', fi: 'Maksulliset palvelut ja hoidon saatavuus', el: 'Υπηρεσίες επί πληρωμή και πρόσβαση στη θεραπεία',
        },
      },
      {
        slug: 'med-online', titleRu: 'Онлайн-сервисы', titleEn: 'Online services',
        titleI18n: {
          uk: 'Онлайн-сервіси', be: 'Анлайн-сэрвісы', kk: 'Онлайн-қызметтер', uz: 'Onlayn xizmatlar', kg: 'Онлайн-кызматтар', tg: 'Хидматҳои онлайн', hy: 'Առցանց ծառայություններ', az: 'Onlayn xidmətlər', ro: 'Servicii online',
          de: 'Online-Dienste', fr: 'Services en ligne', pl: 'Usługi online', zh: '在线服务', ja: 'オンラインサービス', ko: '온라인 서비스', tr: 'Çevrimiçi hizmetler', he: 'שירותים מקוונים', pt: 'Serviços online',
          es: 'Servicios en línea', it: 'Servizi online', nl: 'Online diensten', sv: 'Onlinetjänster', no: 'Netttjenester', da: 'Onlinetjenester', fi: 'Verkkopalvelut', el: 'Διαδικτυακές υπηρεσίες',
        },
      },
    ],
  },
  {
    slug: 'education', titleRu: 'Образование', titleEn: 'Education', icon: 'GraduationCap',
    titleI18n: {
      uk: 'Освіта', be: 'Адукацыя', kk: 'Білім', uz: 'Ta’lim', kg: 'Билим берүү', tg: 'Маориф', hy: 'Կրթություն', az: 'Təhsil', ro: 'Educație',
      de: 'Bildung', fr: 'Éducation', pl: 'Edukacja', zh: '教育', ja: '教育', ko: '교육', tr: 'Eğitim', he: 'חינוך', pt: 'Educação',
      es: 'Educación', it: 'Istruzione', nl: 'Onderwijs', sv: 'Utbildning', no: 'Utdanning', da: 'Uddannelse', fi: 'Koulutus', el: 'Εκπαίδευση',
    },
    children: [
      {
        slug: 'edu-docs', titleRu: 'Заявления в школу и вуз', titleEn: 'School & university',
        titleI18n: {
          uk: 'Школа та університет', be: 'Школа і ўніверсітэт', kk: 'Мектеп және ЖОО', uz: 'Maktab va universitet', kg: 'Мектеп жана ЖОЖ', tg: 'Мактаб ва донишгоҳ', hy: 'Դպրոց և համալսարան', az: 'Məktəb və universitet', ro: 'Şcoală și universitate',
          de: 'Schule & Hochschule', fr: 'École et université', pl: 'Szkoła i uczelnia', zh: '学校与高校', ja: '学校と大学', ko: '학교와 대학', tr: 'Okul ve üniversite', he: 'בית ספר ואוניברסיטה', pt: 'Escola e universidade',
          es: 'Escuela y universidad', it: 'Scuola e università', nl: 'School en universiteit', sv: 'Skola och universitet', no: 'Skole og universitet', da: 'Skole og universitet', fi: 'Koulu ja yliopisto', el: 'Σχολείο και πανεπιστήμιο',
        },
      },
      {
        slug: 'edu-online', titleRu: 'Онлайн-сервисы', titleEn: 'Online services',
        titleI18n: {
          uk: 'Онлайн-сервіси', be: 'Анлайн-сэрвісы', kk: 'Онлайн-қызметтер', uz: 'Onlayn xizmatlar', kg: 'Онлайн-кызматтар', tg: 'Хидматҳои онлайн', hy: 'Առցանց ծառայություններ', az: 'Onlayn xidmətlər', ro: 'Servicii online',
          de: 'Online-Dienste', fr: 'Services en ligne', pl: 'Usługi online', zh: '在线服务', ja: 'オンラインサービス', ko: '온라인 서비스', tr: 'Çevrimiçi hizmetler', he: 'שירותים מקוונים', pt: 'Serviços online',
          es: 'Servicios en línea', it: 'Servizi online', nl: 'Online diensten', sv: 'Onlinetjänster', no: 'Netttjenester', da: 'Onlinetjenester', fi: 'Verkkopalvelut', el: 'Διαδικτυακές υπηρεσίες',
        },
      },
    ],
  },
  {
    slug: 'post', titleRu: 'Почта и доставка', titleEn: 'Post & delivery', icon: 'Mail',
    titleI18n: {
      uk: 'Пошта та доставка', be: 'Пошта і дастаўка', kk: 'Пошта және жеткізу', uz: 'Pochta va yetkazish', kg: 'Почта жана жеткирүү', tg: 'Почта ва расонидан', hy: 'Փոստ և առաքում', az: 'Poçt və çatdırılma', ro: 'Poștă și livrare',
      de: 'Post & Versand', fr: 'Poste et livraison', pl: 'Poczta i dostawa', zh: '邮政与快递', ja: '郵便と配送', ko: '우편과 배송', tr: 'Posta ve kargo', he: 'דואר ומשלוחים', pt: 'Correios e entregas',
      es: 'Correo y envíos', it: 'Posta e spedizioni', nl: 'Post en verzending', sv: 'Post och leverans', no: 'Post og levering', da: 'Post og levering', fi: 'Posti ja lähetys', el: 'Ταχυδρομείο και αποστολές',
    },
    children: [
      {
        slug: 'post-claims', titleRu: 'Претензии и розыск', titleEn: 'Claims & search',
        titleI18n: {
          uk: 'Претензії та розшук', be: 'Прэтэнзіі і вышук', kk: 'Претензиялар және іздеу', uz: 'Pretensiyalar va izlash', kg: 'Претензиялар жана издөө', tg: 'Претензияҳо ва ҷустуҷӯ', hy: 'Պահանջներ և որոնում', az: 'Tələblər və axtarış', ro: 'Reclamații și căutări',
          de: 'Reklamation & Nachforschung', fr: 'Réclamations et recherches', pl: 'Reklamacje i poszukiwanie', zh: '索赔与查询', ja: 'クレームと調査', ko: '클레임과 조사', tr: 'İtiraz ve arama', he: 'תביעות ואיתור', pt: 'Reclamações e buscas',
          es: 'Reclamaciones y búsquedas', it: 'Reclami e ricerche', nl: 'Claims en nasporing', sv: 'Reklamationer och eftersökning', no: 'Reklamasjoner og ettersøking', da: 'Reklamationer og eftersøgning', fi: 'Reklamaatiot ja etsinnät', el: 'Απαιτήσεις και αναζήτηση',
        },
      },
      {
        slug: 'post-forms', titleRu: 'Бланки строгой формы', titleEn: 'Strict paper forms',
        titleI18n: {
          uk: 'Бланки суворої звітності', be: 'Бланкі строгай справазнальнасці', kk: 'Қатаң есеп бланкілері', uz: 'Qat’iy hisob blankalari', kg: 'Катуу эсеп бланктары', tg: 'Бланкаҳои ҳисоби қатъӣ', hy: 'Խիստ հաշվառման բլանկներ', az: 'Ciddi hesabat blankları', ro: 'Formulare de strictă evidență',
          de: 'Streng kontrollierte Formulare', fr: 'Formulaires numérotés', pl: 'Formularze ścisłej ewidencji', zh: '重要空白凭证', ja: '重要空白伝票', ko: '중요공란증표', tr: 'Numaralı resmi formlar', he: 'טפסים ממוספרים', pt: 'Formulários numerados',
          es: 'Formularios numerados', it: 'Moduli numerati', nl: 'Genummerde formulieren', sv: 'Numrerade blanketter', no: 'Nummererte skjemaer', da: 'Nummererede formularer', fi: 'Sarjanumeroidut lomakkeet', el: 'Αριθμημένα έντυπα',
        },
      },
      {
        slug: 'post-online', titleRu: 'Онлайн-сервисы', titleEn: 'Online services',
        titleI18n: {
          uk: 'Онлайн-сервіси', be: 'Анлайн-сэрвісы', kk: 'Онлайн-қызметтер', uz: 'Onlayn xizmatlar', kg: 'Онлайн-кызматтар', tg: 'Хидматҳои онлайн', hy: 'Առցանց ծառայություններ', az: 'Onlayn xidmətlər', ro: 'Servicii online',
          de: 'Online-Dienste', fr: 'Services en ligne', pl: 'Usługi online', zh: '在线服务', ja: 'オンラインサービス', ko: '온라인 서비스', tr: 'Çevrimiçi hizmetler', he: 'שירותים מקוונים', pt: 'Serviços online',
          es: 'Servicios en línea', it: 'Servizi online', nl: 'Online diensten', sv: 'Onlinetjänster', no: 'Netttjenester', da: 'Onlinetjenester', fi: 'Verkkopalvelut', el: 'Διαδικτυακές υπηρεσίες',
        },
      },
    ],
  },
  {
    slug: 'utilities', titleRu: 'ЖКХ и жильё', titleEn: 'Housing & utilities', icon: 'Building2',
    titleI18n: {
      uk: 'ЖКГ та житло', be: 'ЖКГ і жылло', kk: 'Тұрғын үй және коммуналдық қызметтер', uz: 'Uy-joy va kommunal xizmatlar', kg: 'Турак жай жана коммуналдык кызматтар', tg: 'Хона ва хизматрасонии коммуналӣ', hy: 'Բնակարան և կոմունալ ծառայություններ', az: 'Mənzil və kommunal xidmətlər', ro: 'Locuință și utilități',
      de: 'Wohnen & Nebenkosten', fr: 'Logement et charges', pl: 'Mieszkanie i media', zh: '住房与水电', ja: '住宅と公共料金', ko: '주거와 공과금', tr: 'Konut ve faturalar', he: 'דיור וחשבונות', pt: 'Moradia e contas',
      es: 'Vivienda y suministros', it: 'Abitazione e utenze', nl: 'Wonen en nutsvoorzieningen', sv: 'Boende, el och vatten', no: 'Bolig, strøm og vann', da: 'Bolig, vand og el', fi: 'Asuminen, sähkö ja vesi', el: 'Στέγαση και λογαριασμοί',
    },
    children: [
      {
        slug: 'util-management', titleRu: 'Заявления управляющей организации и арендодателю', titleEn: 'To management company & landlord',
        titleI18n: {
          uk: 'Керуючій компанії та орендодавцю', be: 'Кіруючай кампаніі і арандадаўцу', kk: 'Басқарушы компания және жалға беруші', uz: 'Boshqaruv kompaniyasi va ijaraga beruvchi', kg: 'Башкаруу компаниясы жана ижара берүүчү', tg: 'Ширкати идоракунӣ ва мулкдор', hy: 'Կառավարող ընկերություն և վարձատու', az: 'İdarəetmə şirkəti və icarə verən', ro: 'Compania de administrare și proprietar',
          de: 'Hausverwaltung & Vermieter', fr: 'Syndic et bailleur', pl: 'Zarządca i wynajmujący', zh: '物业与房东', ja: '管理会社と家主', ko: '관리사무소와 집주인', tr: 'Site yönetimi ve ev sahibi', he: 'ועד בית ומשכיר', pt: 'Administração e senhorio',
          es: 'Administración y casero', it: 'Amministratore e locatore', nl: 'Beheerder en verhuurder', sv: 'Förvaltare och hyresvärd', no: 'Forvalter og utleier', da: 'Forvalter og udlejer', fi: 'Isännöitsijä ja vuokranantaja', el: 'Διαχείριση και εκμισθωτής',
        },
      },
      {
        slug: 'util-neighbors', titleRu: 'Соседи и конфликтные ситуации', titleEn: 'Neighbors & disputes',
        titleI18n: {
          uk: 'Сусіди та конфлікти', be: 'Суседзі і канфлікты', kk: 'Көршілер және дау-жанжал', uz: 'Qo‘shnilar va nizolar', kg: 'Коңшуулар жана чыр-чатак', tg: 'Ҳамсоягон ва низоҳо', hy: 'Հարևաններ և վեճեր', az: 'Qonşular və mübahisələr', ro: 'Vecini și dispute',
          de: 'Nachbarn & Streitfälle', fr: 'Voisins et conflits', pl: 'Sąsiedzi i konflikty', zh: '邻里纠纷', ja: '近隣トラブル', ko: '이웃과 분쟁', tr: 'Komşular ve anlaşmazlıklar', he: 'שכנים וסכסוכים', pt: 'Vizinhos e disputas',
          es: 'Vecinos y conflictos', it: 'Vicini e controversie', nl: 'Buren en conflicten', sv: 'Grannar och konflikter', no: 'Naboer og konflikter', da: 'Naboer og konflikter', fi: 'Naapurit ja riidat', el: 'Γείτονες και διαφωνίες',
        },
      },
      {
        slug: 'util-household', titleRu: 'Повседневные жилищные заявления', titleEn: 'Everyday housing requests',
        titleI18n: {
          uk: 'Побутові житлові заяви', be: 'Побутовыя жыллёвыя заявы', kk: 'Күнделікті тұрғын үй арыздары', uz: 'Kundalik uy-joy arizalari', kg: 'Күнүмдүк турак жай арыздары', tg: 'Аризаҳои ҳаррӯзаи манзилӣ', hy: 'Ամենօրյա բնակարանային դիմումներ', az: 'Gündəlik mənzil müraciətləri', ro: 'Cereri locative obișnuite',
          de: 'Alltägliche Wohnanliegen', fr: 'Demandes de logement courantes', pl: 'Codzienne sprawy mieszkaniowe', zh: '日常住房事务', ja: '日常の住宅手続き', ko: '일상 주거 신청', tr: 'Günlük konut talepleri', he: 'בקשות דיור שוטפות', pt: 'Pedidos habitacionais cotidianos',
          es: 'Trámites habitacionales cotidianos', it: 'Richieste abitative quotidiane', nl: 'Alledaagse woningzaken', sv: 'Vardagliga boendeärenden', no: 'Hverdagslige boligsaker', da: 'Hverdagslige boligsaker', fi: 'Arkipäiväiset asuntoasiat', el: 'Καθημερινά στεγαστικά αιτήματα',
        },
      },
      {
        slug: 'util-online', titleRu: 'Онлайн-сервисы', titleEn: 'Online services',
        titleI18n: {
          uk: 'Онлайн-сервіси', be: 'Анлайн-сэрвісы', kk: 'Онлайн-қызметтер', uz: 'Onlayn xizmatlar', kg: 'Онлайн-кызматтар', tg: 'Хидматҳои онлайн', hy: 'Առցանց ծառայություններ', az: 'Onlayn xidmətlər', ro: 'Servicii online',
          de: 'Online-Dienste', fr: 'Services en ligne', pl: 'Usługi online', zh: '在线服务', ja: 'オンラインサービス', ko: '온라인 서비스', tr: 'Çevrimiçi hizmetler', he: 'שירותים מקוונים', pt: 'Serviços online',
          es: 'Servicios en línea', it: 'Servizi online', nl: 'Online diensten', sv: 'Onlinetjänster', no: 'Netttjenester', da: 'Onlinetjenester', fi: 'Verkkopalvelut', el: 'Διαδικτυακές υπηρεσίες',
        },
      },
    ],
  },
  {
    slug: 'universal', titleRu: 'Универсальные документы', titleEn: 'Universal documents', icon: 'Files',
    titleI18n: {
      uk: 'Універсальні документи', be: 'Універсальныя дакументы', kk: 'Әмбебап құжаттар', uz: 'Universal hujjatlar', kg: 'Универсалдуу документтер', tg: 'Ҳуҷҷатҳои универсалӣ', hy: 'Համընդհանուր փաստաթղթեր', az: 'Universal sənədlər', ro: 'Documente universale',
      de: 'Universelle Dokumente', fr: 'Documents universels', pl: 'Dokumenty uniwersalne', zh: '通用文件', ja: '汎用書類', ko: '범용 문서', tr: 'Genel amaçlı belgeler', he: 'מסמכים אוניברסליים', pt: 'Documentos universais',
      es: 'Documentos universales', it: 'Documenti universali', nl: 'Universele documenten', sv: 'Universella dokument', no: 'Universelle dokumenter', da: 'Universelle dokumenter', fi: 'Monikäyttöiset asiakirjat', el: 'Έγγραφα γενικής χρήσης',
    },
    children: [
      {
        slug: 'uni-money', titleRu: 'Денежные документы', titleEn: 'Money documents',
        titleI18n: {
          uk: 'Грошові документи', be: 'Грашовыя дакументы', kk: 'Ақша құжаттары', uz: 'Pul hujjatlari', kg: 'Акча документтери', tg: 'Ҳуҷҷатҳои пулакӣ', hy: 'Դրամային փաստաթղթեր', az: 'Pul sənədləri', ro: 'Documente financiare',
          de: 'Geldbelege', fr: 'Documents financiers', pl: 'Dokumenty pieniężne', zh: '钱款单据', ja: '金銭関連書類', ko: '금전 서류', tr: 'Para belgeleri', he: 'מסמכי כספים', pt: 'Documentos financeiros',
          es: 'Documentos monetarios', it: 'Documenti di pagamento', nl: 'Betalingsdocumenten', sv: 'Betalningsdokument', no: 'Betalingsdokumenter', da: 'Betalingsdokumenter', fi: 'Maksuasiakirjat', el: 'Χρηματικά έγγραφα',
        },
      },
      {
        slug: 'uni-common', titleRu: 'Общие документы', titleEn: 'Common documents',
        titleI18n: {
          uk: 'Загальні документи', be: 'Агульныя дакументы', kk: 'Жалпы құжаттар', uz: 'Umumiy hujjatlar', kg: 'Жалпы документтер', tg: 'Ҳуҷҷатҳои умумӣ', hy: 'Ընդհանուր փաստաթղթեր', az: 'Ümumi sənədlər', ro: 'Documente generale',
          de: 'Allgemeine Dokumente', fr: 'Documents généraux', pl: 'Dokumenty ogólne', zh: '常用文件', ja: '一般書類', ko: '일반 문서', tr: 'Genel belgeler', he: 'מסמכים כלליים', pt: 'Documentos gerais',
          es: 'Documentos generales', it: 'Documenti generali', nl: 'Algemene documenten', sv: 'Allmänna dokument', no: 'Generelle dokumenter', da: 'Generelle dokumenter', fi: 'Yleiset asiakirjat', el: 'Γενικά έγγραφα',
        },
      },
    ],
  },
];
