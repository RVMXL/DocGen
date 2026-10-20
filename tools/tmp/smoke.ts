const BASE = 'http://127.0.0.1:8124/';
(globalThis as any).location = { href: BASE };
const origFetch = globalThis.fetch.bind(globalThis);
globalThis.fetch = ((input: any, init?: any) =>
  origFetch(new URL(String(input instanceof Request ? input.url : input), BASE), init)) as typeof fetch;

const { templateBySlug } = await import('../../src/data/catalog.ts');
const { renderBlocks } = await import('../../src/lib/generate.ts');
const { buildDocx } = await import('../../src/lib/docgen/docx.ts');
const { buildPdf } = await import('../../src/lib/docgen/pdf.ts');

const slugs = ['kz-family-alimony', 'uz-med-paid-services', 'kg-gov-prosecutor', 'tj-claim-salary', 'us-med-bill-dispute', 'de-lawsuit-klage-ag', 'jp-med-ryojyo-kaiji', 'tr-gov-cimer', 'il-lawsuit-tik-katana', 'br-family-alimentos', 'ar-med-historia-clinica', 'ru-med-paid-services'];
let fails = 0;
for (const s of slugs) {
  const t = templateBySlug(s);
  if (!t) { console.log('MISS', s); fails++; continue; }
  const data: Record<string, string> = {};
  for (const f of t.fields) data[f.id] = (f as any).placeholderDoc ?? (f as any).placeholderRu ?? (f as any).placeholderEn ?? 'test';
  try {
    const blocks = renderBlocks(t as any, data);
    const docx = await buildDocx(blocks as any, t.slug.slice(0,2));
    const pdf = await buildPdf(blocks as any, t.slug.slice(0,2));
    console.log('OK ', s, 'docx', docx.size, 'pdf', pdf.byteLength);
  } catch (e) { console.log('FAIL', s, String(e).slice(0,150)); fails++; }
}
process.exit(fails ? 1 : 0);
