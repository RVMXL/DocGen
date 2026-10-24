// Шаблоны для Португалии (язык документов — португальский, норма Португалии).
// Основано на законодательстве Португалии:
// Código do Trabalho (Lei 7/2009, de 12 de fevereiro): art. 238 — férias (22 dias úteis por ano);
// art. 249 — faltas justificadas (doença; comunicação e justificação, Decreto Regulamentar 9/98);
// art. 218 — faltas para assistência inadiável à família (até 15 dias por ano);
// art. 204 — horário individual de trabalho; art. 296 — certificado de trabalho;
// art. 366 — resolução do contrato pelo trabalhador (pré-aviso de 30 dias, contratos ≥ 2 anos,
// ou 15 dias); arts. 389 e seguintes — impugnação judicial do despedimento (prazo de 60 dias).
// Lei 84/2012, de 26 de dezembro — licença parental; DL 261/93 — licença sem retribuição
// (assistência a filhos e netos). Lei 24/96 — defesa do consumidor; DL 67/2003 — garantia
// de conformidade (2 anos). Código Civil: arts. 804-805 (constituição em mora), 808
// (interpelação), 1026 e ss. (mútuo), 510 (reconhecimento de dívida), 1445 (vizinhança),
// 260 e ss. (mandato — procuração). CPA (DL 4/2020): art. 173 — reclamação; art. 181 —
// decisão em 15 dias. Lei 9/91 — Provedor de Justiça; art. 77.º do RGPD e Lei 58/2019 —
// reclamação à CNPD. LGT (Lei 39/88) — reclamação graciosa (arts. 160 e ss.); DL 84/2021 —
// reclamações em serviços financeiros (Banco de Portugal / SysReclama, 15 dias úteis).
// Segurança Social: DL 329/93 — pensão de velhice; Lei 4/2007 — regimes da segurança social.
// Saúde: Lei 46/2004 — direitos dos utentes; Lei 62/2005 — acesso ao processo clínico
// (10 dias úteis). Educação: Despacho 6477/2017 — matrícula; Lei 62/2007 (RJIES);
// DL 70/2010 — bolsas de estudo. Correios: DL 373/2014 — serviço postal universal (ANACOM).
// NRAU (Lei 6/2006): arts. 51-52 — obras de conservação pelo senhorio; art. 40/54 — obras
// do arrendatário. Ruído: DL 9/2007, art. 27 — perturbação sonora. DL 222/99 — Código do
// Registo Civil (atualização de morada). Julgados de paz: Lei 78/2001.
import type { DocBlock } from '../../lib/types';
import type { TplDef } from '../types';
import { F, courtHdr } from './helpers';

// Шапка заявления работодателю: адресат справа, заявитель ниже (порт. делопроизводство)
const workHdr = (): TplDef['body'] => [
  { type: 'lines', align: 'right', items: ['{{org_name}}', 'Aos cuidados de: {{head_name}}', '', '{{applicant_name}}', 'NIF: {{applicant_nif}}', '{{date_today}}'] },
];

// Блок данных заявителя (вставляется в шапки писем организациям и частным лицам)
const applicantLines = ['{{applicant_name}}', '{{applicant_address}}', 'NIF: {{applicant_nif}}', 'Tel.: {{applicant_phone}}'];

// Шапка письма организации: адресат справа, заявитель ниже
const letterHdr = (): TplDef['body'] => [
  { type: 'lines', align: 'right', items: ['{{entity_name}}', '{{entity_dept}}', '', ...applicantLines, '{{date_today}}'] },
];

// Шапка письма частному лицу (адресат задается списком строк)
const toPersonHdr = (to: string[]): TplDef['body'] => [
  { type: 'lines', align: 'right', items: [...to, '', ...applicantLines, '{{date_today}}'] },
];

const workFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('org_name', 'Название компании', 'Company name', 'text', { half: true, placeholderDoc: 'Empresa Exemplo, Lda.' }),
  F('head_name', 'Кому (руководитель/HR)', 'Submit to', 'text', { half: true, placeholderDoc: 'Direção de Recursos Humanos' }),
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Ana Ferreira Silva' }),
  F('applicant_nif', 'Ваш NIF', 'Your NIF (tax number)', 'text', { half: true, placeholderDoc: 'NIF 123456789' }),
  ...extra,
];

const personFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('applicant_name', 'Ваше имя', 'Your full name', 'text', { half: true, placeholderDoc: 'Ana Ferreira Silva' }),
  F('applicant_nif', 'Ваш NIF', 'Your NIF (tax number)', 'text', { half: true, placeholderDoc: 'NIF 123456789' }),
  F('applicant_address', 'Ваш адрес', 'Your address', 'text', { half: true, placeholderDoc: 'Rua das Flores, 12, 1200-192 Lisboa' }),
  F('applicant_phone', 'Телефон/email', 'Phone/email', 'text', { half: true, placeholderDoc: '912 345 678' }),
  ...extra,
];

const letterFields = (extra: TplDef['fields'] = []): TplDef['fields'] => [
  F('entity_name', 'Кому (организация)', 'Recipient organization', 'text', { half: true, placeholderDoc: 'Direção-Geral da Saúde' }),
  F('entity_dept', 'Отдел/служба', 'Department', 'text', { half: true, placeholderDoc: 'Divisão de Atendimento ao Público' }),
  ...personFields(extra),
];

const greet = (): DocBlock => ({ type: 'paragraph', text: 'Exmo.(a) Senhor(a),', noIndent: true });
const p = (text: string): DocBlock => ({ type: 'paragraph', text, justify: true });
const att = (items: string[], label = 'Anexos:'): DocBlock => ({ type: 'attachment', items, label });
const sign = (namePh: string): DocBlock => ({ type: 'signature', leftText: 'Com os melhores cumprimentos,', rightText: `_______________ / ${namePh} /` });

export const TEMPLATES_PT: TplDef[] = [
  // ─── Trabalho ───────────────────────────────────────────────────────────────
  {
    slug: 'pt-work-ferias', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление о предоставлении ежегодного отпуска',
    titleDoc: 'Pedido de marcação de férias', titleEn: 'Annual leave booking request',
    descRu: 'Заявление о предоставлении ежегодного оплачиваемого отпуска. По ст. 238 Código do Trabalho отпуск составляет 22 рабочих дня (dias úteis) в год; период маркируется по соглашению с работодателем.',
    descEn: 'Request to book annual paid leave. Under art. 238 of the Portuguese Labour Code the leave period is 22 working days per year, to be set by agreement with the employer.',
    refRu: 'ст. 238.º Código do Trabalho (Lei 7/2009) — отпуск 22 рабочих дня в год',
    refEn: 'Article 238 of the Labour Code (Lei 7/2009) — 22 working days of annual leave',
    fields: [
      ...workFields([
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
        F('date_to', 'Дата окончания', 'End date', 'date', { half: true }),
        F('days', 'Количество рабочих дней', 'Working days', 'number', { half: true, placeholderRu: '22' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'PEDIDO DE MARCAÇÃO DE FÉRIAS' },
      greet(),
      p('Assunto: Marcação do período de férias anuais.'),
      p('Ao abrigo do artigo 238.º do Código do Trabalho, venho requerer o gozo das minhas férias anuais retribuídas no período compreendido entre {{date_from}} e {{date_to}}, num total de {{days}} dias úteis.'),
      p('Comprometo-me a organizar e transmitir as tarefas pendentes antes do início do período requerido, de modo a não prejudicar o normal funcionamento da empresa.'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-work-licenca-sem-vencimento', kind: 'STANDARD', categorySlug: 'work-vacations',
    titleRu: 'Заявление о неоплачиваемом отпуске (licença sem retribuição)',
    titleDoc: 'Pedido de licença sem retribuição', titleEn: 'Unpaid leave request',
    descRu: 'Заявление о неоплачиваемом отпуске по личным делам или для ухода за семьёй; для ухода за детьми/внуками применим DL 261/93. Требуется согласие работодателя (poder diretivo).',
    descEn: 'Unpaid leave request for personal matters or family care; for care of children and grandchildren the DL 261/93 regime applies. Requires the employer’s consent.',
    refRu: 'DL 261/93, de 24 de julho — licença sem retribuição para assistência a filhos e netos; ст. 129.º CT (poder diretivo)',
    refEn: 'DL 261/93, of 24 July — unpaid leave to care for children and grandchildren; art. 129 of the Labour Code (management powers)',
    fields: [
      ...workFields([
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
        F('date_to', 'Дата окончания', 'End date', 'date', { half: true }),
        F('motivo', 'Причина', 'Reason', 'text', { half: true, placeholderDoc: 'assuntos pessoais', placeholderRu: 'личные дела' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'PEDIDO DE LICENÇA SEM RETRIBUIÇÃO' },
      greet(),
      p('Assunto: Pedido de licença sem retribuição.'),
      p('Venho requerer uma licença sem retribuição no período compreendido entre {{date_from}} e {{date_to}}, pelo seguinte motivo: {{motivo}}.'),
      p('Quando aplicável, a licença é requerida nos termos do Decreto-Lei n.º 261/93, de 24 de julho, para assistência a filhos ou netos, acompanhada da documentação comprovativa. Comprometo-me a retomar as minhas funções na data acordada.'),
      att(['Documentação comprovativa do motivo, se aplicável.'], 'Anexo:'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-work-horario-flexivel', kind: 'STANDARD', categorySlug: 'work-time',
    titleRu: 'Заявление об адаптации рабочего графика (гибкий режим)',
    titleDoc: 'Pedido de adaptação do horário de trabalho', titleEn: 'Working-time adaptation request',
    descRu: 'Заявление об изменении индивидуального рабочего графика (гибкий вход, непрерывный режим, частичный удалённый формат, сокращение дня). График индивидуального труда определяется по ст. 204.º CT.',
    descEn: 'Request to adapt the individual working schedule (flexible start, continuous shift, partial remote work, shorter day). The individual schedule is governed by art. 204 of the Labour Code.',
    refRu: 'ст. 204.º Código do Trabalho (Lei 7/2009) — horário individual de trabalho; ajuste por acordo',
    refEn: 'Article 204 of the Labour Code (Lei 7/2009) — individual working schedule, adjusted by agreement',
    fields: [
      ...workFields([
        F('regime', 'Новый режим графика', 'New schedule', 'select', { half: true, options: ['horário flexível (entrada entre as 08h00 e as 10h00)', 'horário contínuo (08h00–16h00, com 30 minutos de intervalo)', 'teletrabalho parcial (dois dias por semana)', 'redução de 30 minutos diários no horário'] }),
        F('date_from', 'Действует с', 'Effective from', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'PEDIDO DE ADAPTAÇÃO DO HORÁRIO DE TRABALHO' },
      greet(),
      p('Assunto: Adaptação do horário individual de trabalho.'),
      p('Ao abrigo do artigo 204.º do Código do Trabalho, venho requerer a adaptação do meu horário individual de trabalho para o seguinte regime: {{regime}}, com efeitos a partir de {{date_from}}.'),
      p('Esta adaptação não prejudica o cumprimento do período normal de trabalho semanal em vigor e favorece a conciliação entre a vida profissional e a vida pessoal. Aguardo a vossa aprovação.'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-work-baixa-doenca', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Уведомление работодателя о больничном',
    titleDoc: 'Comunicação de ausência por doença', titleEn: 'Sick leave notification',
    descRu: 'Уведомление работодателя об отсутствии по болезни. По ст. 249.º CT болезнь — оправданное отсутствие; справка CIT (Decreto Regulamentar 9/98) передаётся в установленный срок.',
    descEn: 'Notification to the employer of absence due to illness. Under art. 249 of the Labour Code sickness is a justified absence; the CIT sick note (Decreto Regulamentar 9/98) must be delivered on time.',
    refRu: 'ст. 249.º Código do Trabalho — falta justificada por doença; Decreto Regulamentar 9/98 (CIT)',
    refEn: 'Article 249 of the Labour Code — justified absence due to illness; Decreto Regulamentar 9/98 (sick note, CIT)',
    fields: [
      ...workFields([
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
        F('date_to', 'Дата (предварительно)', 'Expected end date', 'date', { half: true }),
        F('cit_number', 'Номер справки CIT', 'Sick note (CIT) number', 'text', { half: true, placeholderDoc: 'CIT n.º 1234567', placeholderRu: 'CIT №1234567' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'COMUNICAÇÃO DE AUSÊNCIA POR DOENÇA' },
      greet(),
      p('Assunto: Comunicação de ausência por doença.'),
      p('Vim por este meio comunicar que, por motivo de doença, me encontrarei impedido(a) de comparecer ao trabalho no período compreendido entre {{date_from}} e {{date_to}}.'),
      p('Nos termos do artigo 249.º do Código do Trabalho e do Decreto Regulamentar n.º 9/98, farei chegar o certificado de incapacidade temporária para o trabalho ({{cit_number}}) no prazo legal e permaneço contactável para assuntos urgentes, se autorizado pelo serviço de saúde.'),
      att(['Certificado de incapacidade temporária para o trabalho (CIT).'], 'Anexo:'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-work-licenca-parental', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Уведомление о родительском отпуске (licença parental)',
    titleDoc: 'Comunicação de licença parental inicial', titleEn: 'Initial parental leave notice',
    descRu: 'Уведомление работодателя о начале родительского отпуска (licença parental inicial) по Lei 84/2012: 120, 150 или 180 дней; пособие оформляется в Segurança Social.',
    descEn: 'Notice to the employer of initial parental leave under Lei 84/2012: 120, 150 or 180 days; the corresponding benefit is claimed from Social Security.',
    refRu: 'Lei 84/2012, de 26 de dezembro — licença parental inicial (120/150/180 dias)',
    refEn: 'Lei 84/2012, of 26 December — initial parental leave (120/150/180 days)',
    fields: [
      ...workFields([
        F('nome_filho', 'Имя ребёнка', 'Child’s name', 'text', { half: true, placeholderDoc: 'Miguel Ferreira Silva' }),
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
        F('regime', 'Режим отпуска', 'Leave scheme', 'select', { options: ['120 dias, a tempo inteiro', '150 dias, a tempo inteiro (partilha obrigatória entre os pais)', '180 dias, a tempo inteiro (partilha exclusiva entre os pais)', '120 dias, a tempo parcial (60 % da jornada)'] }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'COMUNICAÇÃO DE LICENÇA PARENTAL INICIAL' },
      greet(),
      p('Assunto: Comunicação de licença parental inicial.'),
      p('Nos termos da Lei n.º 84/2012, de 26 de dezembro, comunico que pretendo gozar a licença parental inicial no regime de {{regime}}, com início em {{date_from}}, para prestar assistência ao meu filho {{nome_filho}}.'),
      p('O subsídio correspondente será requerido à Segurança Social. Permaneço à disposição para organizar a cobertura das minhas funções durante o período da licença.'),
      att(['Certidão de nascimento do filho.'], 'Anexo:'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-work-falta-familia', kind: 'STANDARD', categorySlug: 'work-family',
    titleRu: 'Заявление на отгул для ухода за родственником',
    titleDoc: 'Pedido de falta para assistência à família', titleEn: 'Family care absence request',
    descRu: 'Заявление на неоплачиваемый отгул для срочной помощи родственнику при болезни или несчастном случае: до 15 дней в год по ст. 218.º Código do Trabalho.',
    descEn: 'Request for unpaid absence to give urgent assistance to a relative in case of illness or accident: up to 15 days per year under art. 218 of the Labour Code.',
    refRu: 'ст. 218.º Código do Trabalho (Lei 7/2009) — assistência inadiável à família, 15 dias por ano',
    refEn: 'Article 218 of the Labour Code (Lei 7/2009) — urgent family assistance, 15 days per year',
    fields: [
      ...workFields([
        F('familiar_name', 'Имя родственника', 'Relative’s name', 'text', { half: true, placeholderDoc: 'António Ferreira' }),
        F('grau', 'Степень родства', 'Relationship', 'select', { half: true, options: ['filho(a)', 'neta(o)', 'ascendente (pai/mãe/avô/avó)', 'afim até ao segundo grau da linha colateral'] }),
        F('date_from', 'Дата начала', 'Start date', 'date', { half: true }),
        F('date_to', 'Дата окончания', 'End date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'PEDIDO DE FALTA PARA ASSISTÊNCIA À FAMÍLIA' },
      greet(),
      p('Assunto: Falta para assistência inadiável à família.'),
      p('Ao abrigo do artigo 218.º do Código do Trabalho, venho requerer falta para prestar assistência inadiável e imprescindível a {{familiar_name}} ({{grau}}), no período compreendido entre {{date_from}} e {{date_to}}, em situação de doença ou acidente.'),
      p('Declaro que as faltas requeridas se encontram dentro do limite de 15 dias por ano fixado por lei e anexo a documentação comprovativa. Aguardo a vossa aprovação.'),
      att(['Documento comprovativo (certificado médico ou declaração da unidade de saúde).'], 'Anexo:'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-work-demissao', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Заявление об увольнении по собственному желанию (с предупреждением)',
    titleDoc: 'Comunicação de resolução do contrato de trabalho', titleEn: 'Resignation letter with notice',
    descRu: 'Письменное уведомление о расторжении трудового договора работником. По ст. 366.º CT предупреждение (pré-aviso): 30 дней при договоре ≥ 2 лет, 15 дней — менее 2 лет.',
    descEn: 'Written notice of contract termination by the worker. Under art. 366 of the Labour Code the notice period is 30 days for contracts of two years or more, 15 days for shorter contracts.',
    refRu: 'ст. 366.º Código do Trabalho (Lei 7/2009) — pré-aviso de 30 dias (contrato ≥ 2 anos) ou 15 dias',
    refEn: 'Article 366 of the Labour Code (Lei 7/2009) — 30 days’ notice (contracts of two years or more) or 15 days',
    fields: [
      ...workFields([
        F('date_effect', 'Дата прекращения договора', 'Termination date', 'date', { half: true }),
        F('preaviso', 'Срок предупреждения', 'Notice period', 'select', { half: true, options: ['30 dias (contrato com duração igual ou superior a dois anos)', '15 dias (contrato com duração inferior a dois anos)'] }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'COMUNICAÇÃO DE RESOLUÇÃO DO CONTRATO DE TRABALHO' },
      greet(),
      p('Assunto: Resolução do contrato de trabalho pelo trabalhador.'),
      p('Nos termos do artigo 366.º do Código do Trabalho, comunico por escrito a minha intenção de resolver o contrato de trabalho que me liga à {{org_name}}, com efeitos a partir de {{date_effect}}, observando o prazo de pré-aviso de {{preaviso}}.'),
      p('Coloco-me à disposição para transmitir as funções, cumprir todas as formalidades de cessação e comparecer ao trabalho durante o período de pré-aviso, nos termos legalmente previstos.'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-work-impugnacao-despedimento', kind: 'STANDARD', categorySlug: 'work-dismissal',
    titleRu: 'Уведомление об оспаривании увольнения',
    titleDoc: 'Aviso prévio de impugnação do despedimento', titleEn: 'Notice of intent to challenge dismissal',
    descRu: 'Письмо работодателю с уведомлением о несогласии с увольнением и намерении оспорить его в суде. По ст. 389.º CT оспаривание возможно в течение 60 дней с момента уведомления.',
    descEn: 'Letter to the employer declaring disagreement with the dismissal and the intention to challenge it in court. Under art. 389 of the Labour Code the challenge must be brought within 60 days of notice.',
    refRu: 'ст. 389.º e ss. Código do Trabalho — impugnação judicial da cessação (prazo de 60 dias)',
    refEn: 'Articles 389 et seq. of the Labour Code — judicial challenge of dismissal (60-day deadline)',
    fields: [
      ...workFields([
        F('data_cessacao', 'Дата уведомления об увольнении', 'Date of dismissal notice', 'date', { half: true }),
        F('motivo_empregador', 'Причина, указанная работодателем', 'Ground stated by employer', 'text', { half: true, placeholderDoc: 'factos imputáveis ao trabalhador', placeholderRu: 'виновные действия работника' }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'AVISO PRÉVIO DE IMPUGNAÇÃO DO DESPEDIMENTO' },
      greet(),
      p('Assunto: Impugnação do despedimento — aviso prévio obrigatório.'),
      p('Vim por este meio comunicar que não aceito o despedimento que me foi comunicado em {{data_cessacao}}, com o fundamento indicado pela empresa ({{motivo_empregador}}), por o considerar ilegal.'),
      p('Nos termos dos artigos 389.º e seguintes do Código do Trabalho, apresento o presente aviso prévio de impugnação e declaro a minha intenção de impugnar judicialmente a cessação do contrato no prazo legal de 60 dias, reservando-me todos os direitos, incluindo o direito a indemnização.'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-work-certificado-trabalho', kind: 'STANDARD', categorySlug: 'work-docs',
    titleRu: 'Запрос справки с работы (certificado de trabalho)',
    titleDoc: 'Pedido de certificado de trabalho', titleEn: 'Certificate of employment request',
    descRu: 'Запрос справки о работе: даты приёма и прекращения договора, должности, место работы и характер выполняемых задач; по желанию — размер последней зарплаты (ст. 296.º CT).',
    descEn: 'Request for a certificate of employment stating admission and termination dates, positions held, workplace and tasks performed; optionally the last monthly pay (art. 296 of the Labour Code).',
    refRu: 'ст. 296.º Código do Trabalho (Lei 7/2009) — certificado de trabalho',
    refEn: 'Article 296 of the Labour Code (Lei 7/2009) — certificate of employment',
    fields: [
      ...workFields([
        F('pedido_remuneracao', 'Что указать в справке', 'Certificate content', 'select', { options: ['constem apenas as datas de admissão e de cessação, os cargos exercidos e as funções desempenhadas', 'conste igualmente a última retribuição mensal'] }),
      ]),
    ],
    body: [
      ...workHdr(),
      { type: 'title', text: 'PEDIDO DE CERTIFICADO DE TRABALHO' },
      greet(),
      p('Assunto: Pedido de certificado de trabalho.'),
      p('Ao abrigo do artigo 296.º do Código do Trabalho, venho requerer a emissão do certificado de trabalho, do qual deverão constar as datas de admissão e de cessação do contrato, os cargos exercidos, a indicação do posto de trabalho e a natureza das tarefas desempenhadas.'),
      p('Requeiro que: {{pedido_remuneracao}}. Agradeço a entrega do documento em suporte de papel e digital, no prazo mais curto possível.'),
      sign('{{applicant_name}}'),
    ],
  },

  // ─── Reclamações e cível ───────────────────────────────────────────────────
  {
    slug: 'pt-court-reclamacao-vendedor', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Претензия продавцу по товару с дефектом',
    titleDoc: 'Reclamação por produto com defeito', titleEn: 'Claim to the seller for a defective product',
    descRu: 'Претензия продавцу по товару с недостатком: гарантия соответствия 2 года (DL 67/2003) и права потребителя по Lei 24/96; далее — Livro de Reclamações, ASAE, арбитраж или суд.',
    descEn: 'Claim to the seller over a non-conforming product: two-year conformity guarantee (DL 67/2003) and consumer rights under Lei 24/96; failing settlement — complaints book, ASAE, arbitration or court.',
    refRu: 'DL 67/2003, de 8 de abril — garantia de conformidade (2 anos); Lei 24/96, de 31 de julho (defesa do consumidor)',
    refEn: 'DL 67/2003, of 8 April — conformity guarantee (two years); Lei 24/96, of 31 July (consumer protection)',
    fields: [
      ...letterFields([
        F('produto', 'Товар', 'Product', 'text', { half: true, placeholderDoc: 'telemóvel Modelo X, n.º de série 123456' }),
        F('data_compra', 'Дата покупки', 'Purchase date', 'date', { half: true }),
        F('valor', 'Сумма покупки', 'Amount paid', 'text', { half: true, placeholderDoc: '249,00 €', placeholderRu: '249,00 €' }),
        F('pedido', 'Требование', 'Remedy sought', 'select', { options: ['a reparação do produto', 'a substituição do produto', 'a redução proporcional do preço', 'a resolução do contrato e a devolução integral do valor pago'] }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'RECLAMAÇÃO POR PRODUTO COM DEFEITO' },
      greet(),
      p('Assunto: Reclamação por falta de conformidade — Decreto-Lei n.º 67/2003.'),
      p('Em {{data_compra}} adquiri na vossa loja o produto {{produto}}, pelo qual paguei {{valor}}. Verifico que o produto apresenta uma falta de conformidade, pelo que exerço o direito de garantia de dois anos previsto no Decreto-Lei n.º 67/2003, de 8 de abril, e exijo: {{pedido}}.'),
      p('Caso a reclamação não seja satisfeita no prazo de 15 dias, darei por violados os meus direitos de consumidor consagrados na Lei n.º 24/96, de 31 de julho, e apresentarei reclamação no Livro de Reclamações Eletrónico, junto da ASAE e do Centro de Arbitragem de Conflitos de Consumo (CNIACC), sem prejuízo de ação judicial.'),
      att(['Cópia da fatura ou do recibo.', 'Cópia do certificado de garantia.']),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-court-interpelacao-devedor', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Межевое письмо должнику по займу (interpelação)',
    titleDoc: 'Interpelação para pagamento (mútuo)', titleEn: 'Formal demand for repayment of a loan',
    descRu: 'Формальное требование возврата беспроцентного/договорного займа: по ст. 804-805 Código Civil должник в просрочке (mora), ст. 808 — interpelação; далее — судебное взыскание.',
    descEn: 'Formal demand for repayment of a loan: under arts. 804-805 of the Civil Code the debtor is in default (mora); art. 808 provides for interpelação; failing payment — court recovery.',
    refRu: 'ст. 804-805 e 1026.º Código Civil — mora do mutuário; ст. 808.º — interpelação',
    refEn: 'Arts. 804-805 and 1026 of the Civil Code — debtor’s default on a loan; art. 808 — formal notice (interpelação)',
    fields: [
      ...personFields([
        F('devedor_name', 'Имя должника', 'Debtor’s name', 'text', { half: true, placeholderDoc: 'João Matos Santos' }),
        F('devedor_address', 'Адрес должника', 'Debtor’s address', 'text', { half: true, placeholderDoc: 'Rua Nova, 8, 4000-000 Porto' }),
        F('valor', 'Сумма долга', 'Amount owed', 'text', { half: true, placeholderDoc: '2.500,00 €', placeholderRu: '2.500,00 €' }),
        F('data_emprestimo', 'Дата займа', 'Loan date', 'date', { half: true }),
        F('prazo_reembolso', 'Срок возврата', 'Repayment deadline', 'date', { half: true }),
      ]),
    ],
    body: [
      ...toPersonHdr(['{{devedor_name}}', '{{devedor_address}}']),
      { type: 'title', text: 'INTERPELAÇÃO PARA PAGAMENTO' },
      greet(),
      p('Assunto: Interpelação para pagamento — constituição em mora.'),
      p('Em {{data_emprestimo}} emprestei-lhe a quantia de {{valor}}, ao abrigo do mútuo previsto nos artigos 1026.º e seguintes do Código Civil, com reembolso acordado até {{prazo_reembolso}}. Até à data não recebi o pagamento, pelo que se encontra constituído em mora, nos termos dos artigos 804.º e 805.º do Código Civil.'),
      p('Pelo presente, interpelo-o formalmente, nos termos do artigo 808.º do Código Civil, para que, no prazo de 15 dias a contar da receção desta carta, proceda ao pagamento integral da quantia devida, acrescida dos juros de mora legais. Não o fazendo, darei início à ação judicial de cobrança, sem prejuízo de outros meios previstos na lei.'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-court-reconhecimento-divida', kind: 'STANDARD', categorySlug: 'court-claims',
    titleRu: 'Документ о признании долга',
    titleDoc: 'Declaração de reconhecimento de dívida', titleEn: 'Debt acknowledgement declaration',
    descRu: 'Письменное признание долга (займа) должником в пользу кредитора. По ст. 510.º Código Civil такое заявление является достаточным началом доказательства долга.',
    descEn: 'Written acknowledgement by the debtor of a debt owed to the creditor. Under art. 510 of the Civil Code such a declaration is sufficient prima facie evidence of the debt.',
    refRu: 'ст. 510.º Código Civil — reconhecimento de dívida; ст. 1026.º e ss. — mútuo',
    refEn: 'Article 510 of the Civil Code — acknowledgement of debt; arts. 1026 et seq. — loan (mútuo)',
    fields: [
      ...personFields([
        F('credor_name', 'Имя кредитора', 'Creditor’s name', 'text', { half: true, placeholderDoc: 'Maria Alves Lopes' }),
        F('credor_address', 'Адрес кредитора', 'Creditor’s address', 'text', { half: true, placeholderDoc: 'Av. da Liberdade, 100, 1250-146 Lisboa' }),
        F('valor', 'Сумма долга', 'Amount owed', 'text', { half: true, placeholderDoc: '3.000,00 €', placeholderRu: '3.000,00 €' }),
        F('data_origem', 'Дата возникновения долга', 'Date the debt arose', 'date', { half: true }),
        F('prazo_reembolso', 'Срок возврата', 'Repayment deadline', 'date', { half: true }),
        F('juros', 'Проценты (при наличии)', 'Interest (if any)', 'text', { half: true, placeholderDoc: 'juros de 4 % ao ano', placeholderRu: '4% годовых' }),
      ]),
    ],
    body: [
      ...toPersonHdr(['{{credor_name}}', '{{credor_address}}']),
      { type: 'title', text: 'DECLARAÇÃO DE RECONHECIMENTO DE DÍVIDA' },
      greet(),
      p('Assunto: Reconhecimento de dívida — artigo 510.º do Código Civil.'),
      p('Eu, {{applicant_name}}, titular do NIF {{applicant_nif}}, com domicílio em {{applicant_address}}, declaro por este documento, nos termos do artigo 510.º do Código Civil, que reconheço dever ao Sr.(a) {{credor_name}}, com domicílio em {{credor_address}}, a quantia de {{valor}}, relativa ao mútuo concedido em {{data_origem}}, nos termos dos artigos 1026.º e seguintes do Código Civil.'),
      p('Comprometo-me a reembolsar a quantia reconhecida até {{prazo_reembolso}}, acrescida de {{juros}}. A presente declaração constitui princípio de prova suficiente da dívida, admitindo prova em contrário nos termos gerais.'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-court-reclamacao-orgao', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в госорган (reclamação по CPA)',
    titleDoc: 'Reclamação administrativa (CPA)', titleEn: 'Administrative complaint (CPA)',
    descRu: 'Жалоба на акт или бездействие госоргана в порядке ст. 173.º CPA (DL 4/2020); ответ обязателен в течение 15 дней (ст. 181.º), далее — административный суд или Provedor de Justiça.',
    descEn: 'Complaint about a public body’s act or omission under art. 173 of the Administrative Procedure Code (DL 4/2020); a decision is due within 15 days (art. 181), failing which administrative court or the Ombudsman.',
    refRu: 'ст. 173.º e 181.º CPA (DL 4/2020, de 6 de janeiro) — reclamação; decisão em 15 dias',
    refEn: 'Arts. 173 and 181 of the Administrative Procedure Code (DL 4/2020) — complaint; decision within 15 days',
    fields: [
      ...letterFields([
        F('assunto', 'Предмет жалобы', 'Subject matter', 'text', { half: true, placeholderDoc: 'deferimento do pedido de licenciamento apresentado' }),
        F('data_ato', 'Дата акта/факта', 'Date of the act', 'date', { half: true }),
        F('pedido', 'Требование', 'Relief sought', 'text', { placeholderDoc: 'a revogação do ato e o novo exame do pedido' }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'RECLAMAÇÃO' },
      greet(),
      p('Assunto: Reclamação nos termos do artigo 173.º do Código do Procedimento Administrativo.'),
      p('Nos termos do artigo 173.º do Código do Procedimento Administrativo, aprovado pelo Decreto-Lei n.º 4/2020, de 6 de janeiro, venho reclamar do seguinte ato ou omissão da vossa competência: {{assunto}}, ocorrido em {{data_ato}}.'),
      p('Requeiro: {{pedido}}. Aguardo a decisão no prazo de 15 dias previsto no artigo 181.º do CPA; na falta de resposta satisfatória, recorrer-se-á ao tribunal administrativo competente e ao Provedor de Justiça, sem prejuízo de outros meios previstos na lei.'),
      att(['Cópia do pedido apresentado e da resposta recebida (se existente).', 'Cópia do documento de identificação do reclamante.']),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-court-reclamacao-cnpd', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба в CNPD (защита персональных данных)',
    titleDoc: 'Reclamação à CNPD', titleEn: 'Complaint to the CNPD (data protection)',
    descRu: 'Жалоба в Comissão Nacional de Proteção de Dados на организацию, нарушающую права на защиту персональных данных (ст. 77.º RGPD, Lei 58/2019).',
    descEn: 'Complaint to the National Data Protection Commission against an organisation breaching personal data rights (art. 77 of the GDPR, Lei 58/2019).',
    refRu: 'ст. 77.º RGPD; Lei 58/2019, de 8 de agosto — reclamação à Comissão Nacional de Proteção de Dados',
    refEn: 'Article 77 of the GDPR; Lei 58/2019, of 8 August — complaint to the National Data Protection Commission',
    fields: [
      ...letterFields([
        F('responsavel_name', 'Организация-нарушитель', 'Organisation complained of', 'text', { half: true, placeholderDoc: 'Empresa Exemplo, S.A.' }),
        F('materia', 'Описание ситуации', 'Description', 'text', { placeholderDoc: 'divulgação dos meus dados pessoais sem consentimento' }),
        F('pedido', 'Требование', 'Relief sought', 'text', { placeholderDoc: 'a ordem de apagamento dos dados e a cessação do tratamento' }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'RECLAMAÇÃO À CNPD' },
      greet(),
      p('Assunto: Reclamação nos termos do artigo 77.º do RGPD.'),
      p('Nos termos do artigo 77.º do Regulamento (UE) 2016/679 (RGPD) e da Lei n.º 58/2019, de 8 de agosto, venho apresentar reclamação contra {{responsavel_name}}, pela seguinte situação: {{materia}}.'),
      p('Requeiro que a Comissão Nacional de Proteção de Dados investigue os factos e ordene as medidas necessárias à proteção dos meus dados pessoais, nomeadamente: {{pedido}}. Declaro que os factos descritos são verdadeiros e que já tentei exercer os meus direitos junto da responsável pelo tratamento, sem êxito.'),
      att(['Cópia da correspondência trocada com a organização (se existente).', 'Cópia do documento de identificação do reclamante.']),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-court-provedor-justica', kind: 'STANDARD', categorySlug: 'court-gov',
    titleRu: 'Жалоба Омбудсмену (Provedor de Justiça)',
    titleDoc: 'Queixa ao Provedor de Justiça', titleEn: 'Complaint to the Ombudsman',
    descRu: 'Жалоба Provedor de Justiça на действия или бездействие органов публичной администрации по Lei 9/91; жалоба подаётся после неудачной попытки решить вопрос напрямую с органом.',
    descEn: 'Complaint to the Ombudsman (Provedor de Justiça) over acts or omissions of public administration bodies under Lei 9/91, filed after an unsuccessful direct approach to the body.',
    refRu: 'Lei 9/91, de 9 de abril — Provedor de Justiça (queixa contra ações e omissões das entidades públicas)',
    refEn: 'Lei 9/91, of 9 April — the Ombudsman (complaints against acts and omissions of public bodies)',
    fields: [
      ...letterFields([
        F('entidade_name', 'Госорган, на который жалоба', 'Public body complained of', 'text', { half: true, placeholderDoc: 'Câmara Municipal de Lisboa' }),
        F('materia', 'Описание действий/бездействия', 'Description', 'text', { placeholderDoc: 'falta de resposta ao pedido de informação apresentado' }),
        F('pedido', 'Требование', 'Relief sought', 'text', { placeholderDoc: 'a intervenção para obter resposta e a correção da omissão' }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'QUEIXA AO PROVEDOR DE JUSTIÇA' },
      greet(),
      p('Assunto: Queixa contra a {{entidade_name}} — Lei n.º 9/91, de 9 de abril.'),
      p('Nos termos da Lei n.º 9/91, de 9 de abril, venho apresentar queixa ao Provedor de Justiça contra a {{entidade_name}}, pelas seguintes ações ou omissões de natureza administrativa: {{materia}}.'),
      p('Requeiro a vossa intervenção, no sentido de: {{pedido}}. Declaro que os factos descritos são verdadeiros e que tentei, sem êxito, resolver a situação diretamente junto da entidade. Aguardo a apreciação do V. Exa. e agradeço a confirmação do registo da queixa.'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-court-acao-julgado-paz', kind: 'STANDARD', categorySlug: 'court-lawsuits',
    titleRu: 'Исковое заявление в суде мелких дел (Julgado de Paz)',
    titleDoc: 'Petição inicial — ação declarativa (Julgado de Paz)', titleEn: 'Statement of claim before the Peace Court',
    descRu: 'Исковое заявление (petição inicial) в Julgado de Paz по Lei 78/2001: упрощённое производство по делам до установленного порога; требование о взыскании суммы с ответчика.',
    descEn: 'Statement of claim before the Peace Court (Julgado de Paz) under Lei 78/2001: simplified civil procedure for smaller-value claims seeking payment from the defendant.',
    refRu: 'Lei 78/2001, de 13 de julho — julgados de paz; ст. 462.º e ss. Código de Processo Civil',
    refEn: 'Lei 78/2001, of 13 July — peace courts; arts. 462 et seq. of the Civil Procedure Code',
    fields: [
      F('court_name', 'Суд (Julgado de Paz)', 'Peace court', 'text', { half: true, placeholderDoc: 'Julgado de Paz de Lisboa' }),
      F('plaintiff_name', 'Ваше имя (истец)', 'Plaintiff’s name', 'text', { half: true, placeholderDoc: 'Ana Ferreira Silva' }),
      F('plaintiff_address', 'Ваш адрес', 'Plaintiff’s address', 'text', { half: true, placeholderDoc: 'Rua das Flores, 12, 1200-192 Lisboa' }),
      F('defendant_name', 'Имя ответчика', 'Defendant’s name', 'text', { half: true, placeholderDoc: 'João Matos Santos' }),
      F('defendant_address', 'Адрес ответчика', 'Defendant’s address', 'text', { half: true, placeholderDoc: 'Rua Nova, 8, 4000-000 Porto' }),
      F('valor', 'Сумма требования', 'Amount claimed', 'text', { half: true, placeholderDoc: '1.500,00 €', placeholderRu: '1.500,00 €' }),
      F('pedido', 'Факты и требование', 'Facts and relief', 'text', { placeholderDoc: 'não pagamento de obra realizada; requeiro a condenação no pagamento da quantia indicada' }),
    ],
    body: [
      courtHdr(['{{defendant_name}}', '{{defendant_address}}']),
      { type: 'title', text: 'PETIÇÃO INICIAL — AÇÃO DECLARATIVA DE CONDENÇÃO' },
      { type: 'paragraph', text: 'Exmo.(a) Senhor(a) Juiz(a),', noIndent: true },
      p('Assunto: Ação declarativa de condenação — valor de {{valor}}.'),
      p('Vem o requerente, {{plaintiff_name}}, com domicílio em {{plaintiff_address}}, apresentar a presente ação declarativa de condenação contra {{defendant_name}}, com domicílio em {{defendant_address}}, invocando os seguintes factos e pretensão: {{pedido}}.'),
      p('A ação tramita nos termos da Lei n.º 78/2001, de 13 de julho (julgados de paz), e dos artigos 462.º e seguintes do Código de Processo Civil. Requeiro a citação do requerido e a condenação deste no pagamento de {{valor}}, acrescida de juros e custas, se aplicável.'),
      att(['Cópia do documento que fundamenta a pretensão (contrato, fatura, interpelação).', 'Cópia do documento de identificação do requerente.']),
      sign('{{plaintiff_name}}'),
    ],
  },
  {
    slug: 'pt-tax-reclamacao-graciosa', kind: 'STANDARD', categorySlug: 'tax-docs',
    titleRu: 'Административная налоговая жалоба (reclamação graciosa)',
    titleDoc: 'Reclamação graciosa (Autoridade Tributária)', titleEn: 'Tax friendly complaint (Autoridade Tributária)',
    descRu: 'Reclamação graciosa в Autoridade Tributária по ст. 160.º e ss. LGT (Lei 39/88) — обжалование налогового акта (ликвидации IRS и др.); срок подачи — один год.',
    descEn: 'Friendly complaint (reclamação graciosa) to the Tax Authority under arts. 160 et seq. of the LGT (Lei 39/88), challenging a tax act such as an IRS assessment; filed within one year.',
    refRu: 'ст. 160.º e ss. LGT (Lei 39/88, de 8 de agosto) — reclamação graciosa (prazo de 1 ano)',
    refEn: 'Arts. 160 et seq. of the LGT (Lei 39/88) — friendly complaint (one-year deadline)',
    fields: [
      ...letterFields([
        F('ato_tributario', 'Налоговый акт', 'Tax act', 'text', { half: true, placeholderDoc: 'liquidação de IRS relativa ao ano de 2024' }),
        F('data_notificacao', 'Дата уведомления', 'Notification date', 'date', { half: true }),
        F('fundamentacao', 'Обоснование', 'Grounds', 'text', { placeholderDoc: 'erro na apuração dos rendimentos declarados' }),
        F('pedido', 'Требование', 'Relief sought', 'text', { placeholderDoc: 'a revogação da liquidação e a devolução do imposto pago a mais' }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'RECLAMAÇÃO GRACIOSA' },
      greet(),
      p('Assunto: Reclamação graciosa — artigos 160.º e seguintes da Lei Geral Tributária.'),
      p('Ao abrigo dos artigos 160.º e seguintes da Lei Geral Tributária, aprovada pela Lei n.º 39/88, de 8 de agosto, venho reclamar do seguinte ato tributário: {{ato_tributario}}, do qual fui notificado(a) em {{data_notificacao}}, com a seguinte fundamentação: {{fundamentacao}}.'),
      p('Requeiro: {{pedido}}. A presente reclamação é apresentada dentro do prazo de um ano previsto na lei. Aguardo a decisão no prazo legal, sob pena de recorrer ao Provedor de Justiça e aos tribunais competentes.'),
      att(['Cópia do ato tributário impugnado e da notificação.', 'Documentos comprovativos dos factos alegados.']),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-bank-reclamacao', kind: 'STANDARD', categorySlug: 'bank-docs',
    titleRu: 'Жалоба в банк (финансовые услуги)',
    titleDoc: 'Reclamação ao banco', titleEn: 'Bank complaint',
    descRu: 'Жалоба банку по ненадлежащей услуге (незаконные комиссии, списания и т. п.) по DL 84/2021; письменный ответ — 15 рабочих дней, далее — SysReclama / Banco de Portugal.',
    descEn: 'Complaint to the bank over a poor financial service (uncontracted fees, charges, etc.) under DL 84/2021; a written reply is due within 15 business days, failing which SysReclama / Banco de Portugal.',
    refRu: 'DL 84/2021, de 18 de outubro — reclamações em serviços financeiros; Banco de Portugal (SysReclama), 15 dias úteis',
    refEn: 'DL 84/2021, of 18 October — complaints in financial services; Banco de Portugal (SysReclama), 15 business days',
    fields: [
      ...letterFields([
        F('operacao', 'Операция', 'Operation', 'text', { half: true, placeholderDoc: 'cobrança de comissão não contratada' }),
        F('data_operacao', 'Дата операции', 'Operation date', 'date', { half: true }),
        F('materia', 'Описание ситуации', 'Description', 'text', { placeholderDoc: 'foi cobrada uma comissão de manutenção não prevista no contrato' }),
        F('pedido', 'Требование', 'Relief sought', 'text', { placeholderDoc: 'a devolução imediata das quantias cobradas indevidamente' }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'RECLAMAÇÃO' },
      greet(),
      p('Assunto: Reclamação relativa à operação: {{operacao}}.'),
      p('Em {{data_operacao}}, ocorreu a seguinte situação relacionada com os serviços prestados pela vossa instituição: {{materia}}.'),
      p('Ao abrigo do Decreto-Lei n.º 84/2021, de 18 de outubro, venho reclamar e requeiro: {{pedido}}. Aguardo resposta escrita e fundamentada no prazo de 15 dias úteis; caso a resposta não seja satisfatória, apresentarei reclamação ao Banco de Portugal através do SysReclama, sem prejuízo de outros meios previstos na lei.'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-soc-reclamacao', kind: 'STANDARD', categorySlug: 'soc-benefits',
    titleRu: 'Жалоба в Segurança Social (пособия)',
    titleDoc: 'Reclamação à Segurança Social', titleEn: 'Complaint to Social Security',
    descRu: 'Жалоба на решение или бездействие Института соцстрахования по пособиям: порядок ст. 173.º CPA (DL 4/2020), ответ в течение 15 дней; далее — административный суд.',
    descEn: 'Complaint against a Social Security decision or omission regarding benefits: art. 173 of the CPA (DL 4/2020) procedure, a reply within 15 days, failing which the administrative court.',
    refRu: 'ст. 173.º CPA (DL 4/2020); Lei 4/2007 — regimes de segurança social',
    refEn: 'Art. 173 of the CPA (DL 4/2020); Lei 4/2007 — social security schemes',
    fields: [
      ...letterFields([
        F('niss', 'Ваш NISS (номер соцстраха)', 'Social security number', 'text', { half: true, placeholderDoc: 'NISS 12345678901', placeholderRu: 'NISS 12345678901' }),
        F('materia', 'Решение/бездействие', 'Decision or omission', 'text', { placeholderDoc: 'suspensão do subsídio de desemprego sem fundamentação' }),
        F('pedido', 'Требование', 'Relief sought', 'text', { placeholderDoc: 'o reexame da decisão e a retoma do pagamento do subsídio' }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'RECLAMAÇÃO — SEGURANÇA SOCIAL' },
      greet(),
      p('Assunto: Reclamação — NISS {{niss}}.'),
      p('Nos termos do artigo 173.º do Código do Procedimento Administrativo (Decreto-Lei n.º 4/2020, de 6 de janeiro), venho reclamar da seguinte decisão ou omissão do serviço: {{materia}}.'),
      p('Requeiro o reexame da situação e a prática do seguinte ato: {{pedido}}. Aguardo a resposta no prazo de 15 dias previsto no artigo 181.º do CPA; na falta de resposta satisfatória, recorrer-se-á às instâncias competentes, incluindo o tribunal administrativo e o Provedor de Justiça.'),
      att(['Cópia da decisão impugnada ou comprovativo do pedido apresentado.', 'Cópia do documento de identificação do reclamante.']),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-soc-pensao-velhice', kind: 'STANDARD', categorySlug: 'soc-pension',
    titleRu: 'Заявление о назначении пенсии по старости',
    titleDoc: 'Pedido de pensão de velhice', titleEn: 'Old-age pension application',
    descRu: 'Заявление о назначении пенсии по старости в Segurança Social по DL 329/93: возраст и карьера взносов по закону, выплата на IBAN, приложение документов.',
    descEn: 'Application for an old-age pension from Social Security under DL 329/93: statutory age and contribution record, payment to an IBAN account, supporting documents attached.',
    refRu: 'DL 329/93, de 23 de setembro — regime da pensão de velhice e invalidez',
    refEn: 'DL 329/93, of 23 September — old-age and invalidity pension regime',
    fields: [
      ...letterFields([
        F('niss', 'Ваш NISS', 'Social security number', 'text', { half: true, placeholderDoc: 'NISS 12345678901', placeholderRu: 'NISS 12345678901' }),
        F('data_inicio', 'Дата начала пенсии', 'Pension start date', 'date', { half: true }),
        F('iban', 'IBAN для выплат', 'IBAN for payment', 'text', { half: true, placeholderDoc: 'PT50 0002 0123 1234 5678 9015 4', placeholderRu: 'PT50 …' }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'PEDIDO DE PENSÃO DE VELHICE' },
      greet(),
      p('Assunto: Pedido de atribuição de pensão de velhice — NISS {{niss}}.'),
      p('Ao abrigo do Decreto-Lei n.º 329/93, de 23 de setembro, venho requerer a atribuição da pensão de velhice, com início em {{data_inicio}}, na qualidade de beneficiário com a idade e a carreira contributiva legalmente exigidas.'),
      p('Requeiro que as prestações sejam pagas na conta IBAN {{iban}}. Declaro que os elementos apresentados são verdadeiros e autorizo a consulta da minha carreira contributiva; coloco-me à disposição para apresentar qualquer elemento adicional necessário ao processamento do pedido.'),
      att(['Cópia do documento de identificação.', 'Cópia do documento comprovativo do NISS.']),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-med-reclamacao', kind: 'STANDARD', categorySlug: 'med-appeals',
    titleRu: 'Жалоба в медучреждение (на приём/обслуживание)',
    titleDoc: 'Reclamação na unidade de saúde', titleEn: 'Healthcare unit complaint',
    descRu: 'Жалоба на обслуживание в единице здравоохранения: права пациента по Lei 46/2004, процедура жалобы CPA (15 дней); далее — ARS, регулятор ERS, Livro de Reclamações.',
    descEn: 'Complaint about care received at a healthcare unit: patient rights under Lei 46/2004, CPA complaint procedure (15 days); failing settlement — regional health administration, the ERS regulator, complaints book.',
    refRu: 'Lei 46/2004, de 19 de agosto — direitos dos utentes; ст. 173.º CPA (DL 4/2020)',
    refEn: 'Lei 46/2004, of 19 August — patients’ rights; art. 173 of the CPA (DL 4/2020)',
    fields: [
      ...letterFields([
        F('unidade_name', 'Медучреждение', 'Health unit', 'text', { half: true, placeholderDoc: 'Centro de Saúde de Lisboa' }),
        F('data_atendimento', 'Дата приёма', 'Date of care', 'date', { half: true }),
        F('materia', 'Описание ситуации', 'Description', 'text', { placeholderDoc: 'demora excessiva e falta de informação no atendimento' }),
        F('pedido', 'Требование', 'Relief sought', 'text', { placeholderDoc: 'a análise do caso e a garantia de marcação da consulta necessária' }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'RECLAMAÇÃO — SERVIÇO DE SAÚDE' },
      greet(),
      p('Assunto: Reclamação relativa ao atendimento de {{data_atendimento}}.'),
      p('Na qualidade de utente, com os direitos consagrados na Lei n.º 46/2004, de 19 de agosto, venho reclamar do seguinte atendimento prestado na {{unidade_name}}: {{materia}}.'),
      p('Requeiro: {{pedido}}. Aguardo resposta escrita no prazo de 15 dias previsto no Código do Procedimento Administrativo; na falta de resposta satisfatória, apresentarei reclamação na Administração Regional de Saúde, na Entidade Reguladora da Saúde (ERS) e no Livro de Reclamações.'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-med-processo-clinico', kind: 'STANDARD', categorySlug: 'med-records',
    titleRu: 'Запрос доступа к медицинской карте (processo clínico)',
    titleDoc: 'Pedido de acesso ao processo clínico', titleEn: 'Clinical records access request',
    descRu: 'Запрос на доступ/копию медицинской карты: ст. 9.º Lei 62/2005 — право пациента на ознакомление с процессом; выдача в срок до 10 рабочих дней.',
    descEn: 'Request for access to or a copy of clinical records: art. 9 of Lei 62/2005 grants the patient the right to consult the process; delivery within 10 working days.',
    refRu: 'Lei 62/2005, de 11 de outubro, ст. 9.º — acesso ao processo clínico (10 dias úteis); Lei 46/2004',
    refEn: 'Lei 62/2005, of 11 October, art. 9 — access to clinical records (10 working days); Lei 46/2004',
    fields: [
      ...letterFields([
        F('periodo', 'Период/объём', 'Scope of access', 'text', { half: true, placeholderDoc: 'consultas e exames de 2024' }),
        F('formato', 'Формат выдачи', 'Delivery format', 'select', { options: ['cópia integral do processo clínico', 'cópia de partes específicas do processo clínico', 'consulta presencial do processo clínico', 'cópia dos exames e relatórios realizados'] }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'PEDIDO DE ACESSO AO PROCESSO CLÍNICO' },
      greet(),
      p('Assunto: Pedido de acesso ao processo clínico.'),
      p('Ao abrigo do artigo 9.º da Lei n.º 62/2005, de 11 de outubro, e da Lei n.º 46/2004, de 19 de agosto, venho requerer o acesso ao meu processo clínico, no âmbito seguinte: {{periodo}}.'),
      p('Solicito a entrega em: {{formato}}, no prazo máximo de 10 dias úteis previsto na lei. Coloco-me à disposição para comparecer pessoalmente e apresentar documento de identificação, se necessário.'),
      att(['Cópia do documento de identificação.', 'Cópia do cartão de utente do SNS.']),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-edu-matricula-transferencia', kind: 'STANDARD', categorySlug: 'edu-docs',
    titleRu: 'Заявление о зачислении/переводе в школу',
    titleDoc: 'Pedido de matrícula e transferência escolar', titleEn: 'School enrolment and transfer request',
    descRu: 'Заявление о зачислении ребёнка и переводе из другой школы по Despacho 6477/2017 (matrícula): указание класса, учебного года, причины перевода и приложений.',
    descEn: 'Request to enrol a child and transfer from another school under Despacho 6477/2017: grade, school year, reason for transfer and attachments stated.',
    refRu: 'Despacho 6477/2017, de 26 de julho — matrícula e escolaridade obrigatória',
    refEn: 'Despacho 6477/2017, of 26 July — school enrolment and compulsory schooling',
    fields: [
      ...letterFields([
        F('aluno_name', 'Имя ученика', 'Pupil’s name', 'text', { half: true, placeholderDoc: 'Pedro Ferreira Silva' }),
        F('data_nascimento', 'Дата рождения ученика', 'Pupil’s date of birth', 'date', { half: true }),
        F('ano_letivo', 'Учебный год', 'School year', 'text', { half: true, placeholderDoc: '2025/2026', placeholderRu: '2025/2026' }),
        F('ano_escolar', 'Класс', 'Grade', 'select', { half: true, options: ['1.º ciclo (1.º ao 4.º ano)', '2.º ciclo (5.º e 6.º ano)', '3.º ciclo (7.º ao 9.º ano)', 'ensino secundário (10.º ao 12.º ano)'] }),
        F('motivo', 'Причина перевода', 'Reason', 'text', { placeholderDoc: 'mudança de residência da família para a área escolar da escola' }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'PEDIDO DE MATRÍCULA E TRANSFERÊNCIA ESCOLAR' },
      greet(),
      p('Assunto: Pedido de matrícula e transferência do aluno {{aluno_name}}.'),
      p('Venho requerer a matrícula, com transferência de estabelecimento, do meu filho {{aluno_name}}, nascido em {{data_nascimento}}, para o {{ano_escolar}}, no ano letivo {{ano_letivo}}, pelo seguinte motivo: {{motivo}}.'),
      p('Ao abrigo do Despacho n.º 6477/2017, de 26 de julho, aguardo a confirmação da existência de vaga e a indicação dos passos seguintes do processo. Comprometo-me a apresentar toda a documentação necessária nos prazos indicados.'),
      att(['Cópia do documento de identificação do aluno e do encarregado de educação.', 'Cópia do cartão de vacinas.', 'Certificado de matrícula e aproveitamento da escola anterior.']),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-post-ctt-objeto', kind: 'STANDARD', categorySlug: 'post-claims',
    titleRu: 'Претензия почте (CTT) за утраченное отправление',
    titleDoc: 'Reclamação por extravio de objeto postal', titleEn: 'Lost mail item complaint',
    descRu: 'Претензия почтовому оператору за не доставленное отправление с номером трекинга: DL 373/2014 (универсальная почтовая служба, надзор ANACOM) и Lei 24/96.',
    descEn: 'Complaint to the postal operator over an undelivered tracked item: DL 373/2014 (universal postal service, ANACOM supervision) and Lei 24/96.',
    refRu: 'DL 373/2014, de 30 de junho — serviço postal universal (ANACOM); Lei 24/96 — defesa do consumidor',
    refEn: 'DL 373/2014, of 30 June — universal postal service (ANACOM); Lei 24/96 — consumer protection',
    fields: [
      ...letterFields([
        F('num_objeto', 'Номер отправления', 'Tracking number', 'text', { half: true, placeholderDoc: 'RR123456789PT' }),
        F('data_envio', 'Дата отправки', 'Dispatch date', 'date', { half: true }),
        F('valor_objeto', 'Стоимость отправления', 'Declared value', 'text', { half: true, placeholderDoc: '150,00 €', placeholderRu: '150,00 €' }),
        F('pedido', 'Требование', 'Relief sought', 'text', { placeholderDoc: 'a investigação do extravio e a indemnização pelo valor do objeto' }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'RECLAMAÇÃO POR EXTRAVIO DE OBJETO POSTAL' },
      greet(),
      p('Assunto: Reclamação — objeto de correio n.º {{num_objeto}}.'),
      p('Em {{data_envio}}, enviei pelo serviço postal um objeto com o número de registo {{num_objeto}} e valor de {{valor_objeto}}, que até à data não foi entregue ao destinatário, presumindo-se o seu extravio.'),
      p('Nos termos do Decreto-Lei n.º 373/2014, de 30 de junho (serviço postal universal), e da Lei n.º 24/96, de 31 de julho, requeiro: {{pedido}}. Aguardo resposta escrita no prazo de 30 dias; na falta de resposta satisfatória, apresentarei queixa na ANACOM e no Centro de Arbitragem de Conflitos de Consumo, sem prejuízo de ação judicial.'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-util-interpelacao-senhorio', kind: 'STANDARD', categorySlug: 'util-management',
    titleRu: 'Требование к арендодателю провести ремонт (NRAU)',
    titleDoc: 'Interpelação do senhorio para realização de obras', titleEn: 'Landlord demand for conservation works',
    descRu: 'Официальное требование арендодателю выполнить работы по консервации жилья: ст. 51-52 NRAU (Lei 6/2006), interpelação по ст. 808.º Código Civil, с указанием срока.',
    descEn: 'Formal demand for the landlord to carry out conservation works on the rented dwelling: arts. 51-52 of the NRAU (Lei 6/2006), interpelação under art. 808 of the Civil Code, with a set deadline.',
    refRu: 'ст. 51-52 NRAU (Lei 6/2006) — obras de conservação; ст. 808.º Código Civil — interpelação',
    refEn: 'Arts. 51-52 of the NRAU (Lei 6/2006) — conservation works; art. 808 of the Civil Code — formal notice',
    fields: [
      ...personFields([
        F('senhorio_name', 'Имя арендодателя', 'Landlord’s name', 'text', { half: true, placeholderDoc: 'Carlos Neves Rodrigues' }),
        F('senhorio_address', 'Адрес арендодателя', 'Landlord’s address', 'text', { half: true, placeholderDoc: 'Av. do Brasil, 5, 1700-063 Lisboa' }),
        F('locado_address', 'Адрес арендуемого жилья', 'Rented property address', 'text', { placeholderDoc: 'Rua da Alegria, 45, 1.º Dto., 1250-004 Lisboa' }),
        F('obras', 'Необходимые работы', 'Works needed', 'text', { placeholderDoc: 'reparação da cobertura e correção da infiltração de água' }),
        F('prazo_dias', 'Срок выполнения', 'Deadline', 'select', { half: true, options: ['15 dias', '30 dias', '60 dias'] }),
      ]),
    ],
    body: [
      ...toPersonHdr(['{{senhorio_name}}', '{{senhorio_address}}']),
      { type: 'title', text: 'INTERPELAÇÃO — OBRAS DE CONSERVAÇÃO' },
      greet(),
      p('Assunto: Interpelação para realização de obras de conservação — NRAU.'),
      p('Na qualidade de arrendatário do locado sito em {{locado_address}}, ao abrigo dos artigos 51.º e 52.º do NRAU (Lei n.º 6/2006, de 27 de fevereiro), informo que o locado necessita das seguintes obras de conservação: {{obras}}.'),
      p('Pelo presente, interpelo-o, nos termos do artigo 808.º do Código Civil, para que realize as referidas obras no prazo de {{prazo_dias}} a contar da receção desta carta. Não o fazendo, darei início à ação judicial competente, sem prejuízo de outros direitos previstos no NRAU.'),
      att(['Fotografias dos danos.', 'Cópia do contrato de arrendamento.']),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-util-neighbors-noise', kind: 'STANDARD', categorySlug: 'util-neighbors',
    titleRu: 'Жалоба на шум от соседей',
    titleDoc: 'Reclamação por perturbação sonora (vizinhos)', titleEn: 'Neighbour noise complaint',
    descRu: 'Вежливая жалоба соседу на шум: ст. 27.º DL 9/2007 запрещает звуковое беспокойство, ст. 1445.º Código Civil — пределы прав собственника; далее — полиция, муниципалитет, суд.',
    descEn: 'Polite complaint to a neighbour over noise: art. 27 of DL 9/2007 prohibits sound nuisance and art. 1445 of the Civil Code limits property rights; failing settlement — police, municipality, court.',
    refRu: 'ст. 27.º DL 9/2007, de 19 de janeiro — perturbação sonora; ст. 1445.º Código Civil (vizinhança)',
    refEn: 'Art. 27 of DL 9/2007, of 19 January — noise nuisance; art. 1445 of the Civil Code (neighbour law)',
    fields: [
      ...personFields([
        F('vizinho_name', 'Имя соседа', 'Neighbour’s name', 'text', { half: true, placeholderDoc: 'Sr. Manuel Costa' }),
        F('morada_vizinho', 'Адрес соседа', 'Neighbour’s address', 'text', { half: true, placeholderDoc: 'Rua da Alegria, 45, 2.º Esq., 1250-004 Lisboa' }),
        F('natureza', 'Описание шума', 'Description of noise', 'text', { placeholderDoc: 'música alta e gritaria habitualmente entre as 23h00 e as 02h00' }),
        F('pedido', 'Требование', 'Relief sought', 'text', { placeholderDoc: 'o imediato respeito do período de descanso nocturno' }),
      ]),
    ],
    body: [
      ...toPersonHdr(['{{vizinho_name}}', '{{morada_vizinho}}']),
      { type: 'title', text: 'RECLAMAÇÃO POR PERTURBAÇÃO SONORA' },
      greet(),
      p('Assunto: Perturbação sonora proveniente do imóvel sito em {{morada_vizinho}}.'),
      p('Venho, de forma respeitosa, informar que o imóvel que ocupa tem produzido ruído excessivo: {{natureza}}, em violação do artigo 27.º do Decreto-Lei n.º 9/2007, de 19 de janeiro, e do dever de respeitar os limites da vizinhança previsto no artigo 1445.º do Código Civil.'),
      p('Requeiro que cesse a perturbação sonora, nos termos seguintes: {{pedido}}. Caso a situação persista, apresentarei queixa à Polícia de Segurança Pública e à autoridade municipal competente, ao abrigo do DL n.º 9/2007, sem prejuízo de ação judicial.'),
      att(['Registo de horários e tipos de ruído observados.', 'Cópia de queixa policial, se existente.']),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-uni-bolsa-estudo', kind: 'STANDARD', categorySlug: 'uni-money',
    titleRu: 'Заявление на стипендию (bolsa de estudo)',
    titleDoc: 'Pedido de bolsa de estudo', titleEn: 'Study grant (bolsa) application',
    descRu: 'Заявление на стипендию/социальную поддержку в вузе по DL 70/2010 (bolsas de estudo no ensino superior) и правилам Serviços de Ação Social; согласие на проверку доходов.',
    descEn: 'Application for a study grant at university under DL 70/2010 (higher education grants) and the Social Services rules; consent to income verification included.',
    refRu: 'DL 70/2010, de 21 de junho — bolsas de estudo no ensino superior; Lei 62/2007 (RJIES)',
    refEn: 'DL 70/2010, of 21 June — higher education study grants; Lei 62/2007 (RJIES)',
    fields: [
      ...letterFields([
        F('curso', 'Курс/программа', 'Programme', 'text', { half: true, placeholderDoc: 'Licenciatura em Engenharia Informática' }),
        F('num_estudante', 'Номер студента', 'Student number', 'text', { half: true, placeholderDoc: 'n.º 45678', placeholderRu: '№45678' }),
        F('ano_letivo', 'Учебный год', 'Academic year', 'text', { half: true, placeholderDoc: '2025/2026', placeholderRu: '2025/2026' }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'PEDIDO DE BOLSA DE ESTUDO' },
      greet(),
      p('Assunto: Pedido de bolsa de estudo — ano letivo {{ano_letivo}}.'),
      p('Eu, {{applicant_name}}, estudante n.º {{num_estudante}} do curso de {{curso}}, venho requerer a atribuição de bolsa de estudo para o ano letivo {{ano_letivo}}, ao abrigo do Decreto-Lei n.º 70/2010, de 21 de junho, e do regulamento dos Serviços de Ação Social.'),
      p('Declaro que os elementos constantes do meu processo são verdadeiros e autorizo a verificação dos rendimentos junto das entidades competentes. Requeiro a indicação, por escrito, de qualquer elemento adicional necessário ao processamento do pedido.'),
      att(['Comprovativos de rendimentos do agregado familiar.', 'Cópia do documento de identificação e do cartão de estudante.']),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-uni-interrupcao-estudos', kind: 'STANDARD', categorySlug: 'uni-common',
    titleRu: 'Заявление о перерыве в учёбе (interrupção de estudos)',
    titleDoc: 'Pedido de interrupção de estudos', titleEn: 'Study interruption request',
    descRu: 'Заявление о прерывании обучения на семестр или год: по Lei 62/2007 (RJIES) и уставу вуза; обязательство вернуться к учёбе в согласованный период.',
    descEn: 'Request to interrupt studies for a semester or a year: under Lei 62/2007 (RJIES) and the institution’s statutes; commitment to resume studies in the agreed period.',
    refRu: 'Lei 62/2007, de 10 de setembro (RJIES) e estatutos da instituição — interrupção de estudos',
    refEn: 'Lei 62/2007, of 10 September (RJIES) and the institution’s statutes — study interruption',
    fields: [
      ...letterFields([
        F('curso', 'Курс/программа', 'Programme', 'text', { half: true, placeholderDoc: 'Licenciatura em Economia' }),
        F('num_estudante', 'Номер студента', 'Student number', 'text', { half: true, placeholderDoc: 'n.º 45678', placeholderRu: '№45678' }),
        F('date_from', 'Дата начала перерыва', 'Interruption start', 'date', { half: true }),
        F('duracao', 'Продолжительность', 'Duration', 'select', { half: true, options: ['um semestre', 'dois semestres (um ano letivo)'] }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'PEDIDO DE INTERRUPÇÃO DE ESTUDOS' },
      greet(),
      p('Assunto: Pedido de interrupção de estudos no curso de {{curso}}.'),
      p('Eu, {{applicant_name}}, estudante n.º {{num_estudante}}, venho requerer a interrupção do meu percurso no curso de {{curso}}, com efeitos a partir de {{date_from}}, por um período de {{duracao}}, nos termos da Lei n.º 62/2007, de 10 de setembro, e dos estatutos da instituição.'),
      p('Comprometo-me a retomar as atividades letivas no período requerido e requeiro a preservação das condições de acesso à matrícula nos termos aplicáveis. Agradeço a confirmação escrita da aprovação do pedido.'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-civil-atualizacao-morada', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Уведомление об обновлении адреса (morada)',
    titleDoc: 'Comunicação de atualização de morada', titleEn: 'Address update notification',
    descRu: 'Уведомление организации (финансы, соцстрах, банк и др.) о смене адреса: регистрация места жительства по DL 222/99 (Código do Registo Civil) и перенос переписки.',
    descEn: 'Notification to an organisation (tax office, social security, bank, etc.) of an address change: residence registration under DL 222/99 (Civil Registration Code) and mail redirection.',
    refRu: 'DL 222/99, de 6 de agosto — Código do Registo Civil (atualização de morada)',
    refEn: 'DL 222/99, of 6 August — Civil Registration Code (address update)',
    fields: [
      ...letterFields([
        F('nova_morada', 'Новый адрес', 'New address', 'text', { placeholderDoc: 'Rua das Flores, 12, 1200-192 Lisboa' }),
        F('data_mudanca', 'Дата переезда', 'Move date', 'date', { half: true }),
      ]),
    ],
    body: [
      ...letterHdr(),
      { type: 'title', text: 'COMUNICAÇÃO DE ATUALIZAÇÃO DE MORADA' },
      greet(),
      p('Assunto: Atualização de morada.'),
      p('Vim comunicar que, a partir de {{data_mudanca}}, a minha morada passa a ser {{nova_morada}}, mantendo-se inalterados os restantes elementos de identificação (nome e NIF {{applicant_nif}}).'),
      p('Requeiro a atualização do meu registo nos vossos serviços e o envio de toda a correspondência para a nova morada, ao abrigo do disposto no Decreto-Lei n.º 222/99, de 6 de agosto, e da legislação aplicável. Agradeço a confirmação da atualização.'),
      sign('{{applicant_name}}'),
    ],
  },
  {
    slug: 'pt-civil-procuracao', kind: 'STANDARD', categorySlug: 'util-household',
    titleRu: 'Доверенность (procuração)',
    titleDoc: 'Procuração', titleEn: 'Power of attorney',
    descRu: 'Простая письменная доверенность на имя поверенного: мандат по ст. 260.º e ss. Código Civil, перечень полномочий, срок действия и возможность отзыва.',
    descEn: 'Simple written power of attorney in favour of an attorney-in-fact: mandate under arts. 260 et seq. of the Civil Code, list of powers, validity period and revocation option.',
    refRu: 'ст. 260.º e ss. Código Civil — mandato (procuração); ст. 262.º — forma do documento particular',
    refEn: 'Arts. 260 et seq. of the Civil Code — mandate (power of attorney); art. 262 — form of a private document',
    fields: [
      ...personFields([
        F('mandatario_name', 'Имя поверенного', 'Attorney-in-fact’s name', 'text', { half: true, placeholderDoc: 'Rui Costa Andrade' }),
        F('mandatario_nif', 'NIF поверенного', 'Attorney-in-fact’s NIF', 'text', { half: true, placeholderDoc: 'NIF 987654321' }),
        F('poderes', 'Полномочия', 'Powers granted', 'text', { placeholderDoc: 'representar-me junto das finanças e da segurança social, praticando todos os atos necessários' }),
        F('validade', 'Срок действия', 'Validity', 'text', { half: true, placeholderDoc: 'dois anos', placeholderRu: 'два года' }),
      ]),
    ],
    body: [
      ...toPersonHdr(['{{mandatario_name}}', 'NIF: {{mandatario_nif}}']),
      { type: 'title', text: 'PROCURAÇÃO' },
      p('Eu, {{applicant_name}}, titular do NIF {{applicant_nif}}, residente em {{applicant_address}}, venho por este meio constituir como meu mandatário {{mandatario_name}}, titular do NIF {{mandatario_nif}}, a quem confiro os seguintes poderes, nos termos dos artigos 260.º e seguintes do Código Civil: {{poderes}}.'),
      p('A presente procuração é outorgada por um período de {{validade}}, sem prejuízo da revogação a todo o tempo, nos termos gerais. O mandatário pode subdelegar os poderes conferidos, total ou parcialmente, mediante o meu consentimento prévio.'),
      { type: 'signature', leftText: 'Com os melhores cumprimentos,', rightText: '_______________ / {{applicant_name}}, Outorgante /' },
    ],
  },
];
