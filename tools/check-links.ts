// Проверка внешних ссылок каталога (порталы в шаблонах и странах).
// Мотивация: битая ссылка pochta.ru/support/search-shipments (404) доехала
// до релиза — ссылок в каталоге ~60, руками их не отследить.
//
// Классификация ответов:
//   OK            200-299 (после следования редиректов)
//   BROKEN        404/410 — страницы нет, ссылку править или удалять
//   UNVERIFIABLE  401/403/405/417/429/5xx — обычно анти-бот WAF (Pochta 417,
//                 Cloudflare 403): для пользователя ссылка может работать,
//                 но автоматом проверить нельзя — печатаем предупреждение
//
// Сеть падает по-разному: у каждой ссылки 2 попытки с таймаутом.
// Запуск: bun tools/check-links.ts [--json]
import { allTemplates } from '../src/data/catalog';
import { COUNTRIES } from '../src/data/countries';
import { STANDARDS } from '../src/data/standards';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';
const TIMEOUT_MS = 15000;
const RETRIES = 2;

interface UrlRef { url: string; where: string }

/** Собрать все URL каталога: portalUrl шаблонов + порталы стран + источники стандартов */
function collectUrls(): UrlRef[] {
  const refs = new Map<string, UrlRef[]>();
  const add = (url: string, where: string) => {
    const key = url.replace(/\/$/, '');
    const list = refs.get(key) ?? [];
    list.push({ url, where });
    refs.set(key, list);
  };
  for (const t of allTemplates()) {
    if (t.portalUrl) add(t.portalUrl, `template ${t.slug}`);
  }
  for (const c of COUNTRIES) {
    for (const p of c.portals ?? []) add(p.url, `country ${c.code}`);
  }
  for (const [cc, s] of Object.entries(STANDARDS)) {
    if (s.refUrl) add(s.refUrl, `standard ${cc}`);
  }
  const out: UrlRef[] = [];
  for (const [key, list] of refs) out.push({ url: key, where: list.map((r) => r.where).join(', ') });
  return out.sort((a, b) => a.url.localeCompare(b.url));
}

type Verdict = 'OK' | 'BROKEN' | 'UNVERIFIABLE' | 'NETFAIL';

async function checkUrl(url: string): Promise<{ verdict: Verdict; status?: number; note?: string }> {
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, {
        signal: controller.signal,
        redirect: 'follow',
        headers: {
          'User-Agent': UA,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'ru-RU,ru;q=0.9,en;q=0.8',
        },
      });
      clearTimeout(timer);
      if (res.status >= 200 && res.status < 300) return { verdict: 'OK', status: res.status };
      if (res.status === 404 || res.status === 410) return { verdict: 'BROKEN', status: res.status };
      // WAF/бот-защита: страница может существовать, автоматом не проверить
      return { verdict: 'UNVERIFIABLE', status: res.status, note: 'анти-бот/WAF: проверь вручную в браузере' };
    } catch (e) {
      clearTimeout(timer);
      const msg = e instanceof Error ? e.message : String(e);
      const isTimeout = msg.includes('abort') || msg.includes('timeout');
      if (attempt < RETRIES) continue; // вторая попытка
      return { verdict: 'NETFAIL', note: isTimeout ? 'таймаут/недоступен' : msg };
    }
  }
  return { verdict: 'NETFAIL', note: 'недоступен' }; // недостижимо, но TS этого не знает
}

async function main() {
  const refs = collectUrls();
  console.log(`Ссылок к проверке: ${refs.length}`);
  const results: { url: string; where: string; verdict: Verdict; status?: number; note?: string }[] = [];
  // по 5 параллельно: не хочется напугать WAF толпой одновременных запросов
  for (let i = 0; i < refs.length; i += 5) {
    const batch = refs.slice(i, i + 5);
    const checked = await Promise.all(batch.map(async (r) => ({ ...r, ...(await checkUrl(r.url)) })));
    for (const r of checked) {
      const badge = r.status ? ` [${r.status}]` : '';
      const tail = r.note ? ` — ${r.note}` : '';
      console.log(`${r.verdict.padEnd(12)} ${r.url}${badge}${tail}`);
      if (r.verdict !== 'OK') results.push(r);
    }
  }

  const broken = results.filter((r) => r.verdict === 'BROKEN');
  const unverifiable = results.filter((r) => r.verdict === 'UNVERIFIABLE');
  const netfail = results.filter((r) => r.verdict === 'NETFAIL');

  console.log(`\nИтог: OK=${refs.length - results.length}, BROKEN=${broken.length}, UNVERIFIABLE=${unverifiable.length}, NETFAIL=${netfail.length}`);
  if (broken.length) {
    console.log('\n✗ БИТЫЕ ССЫЛКИ (404/410) — исправить в исходниках:');
    for (const r of broken) console.log(`  ${r.url}  →  ${r.where}`);
  }
  if (unverifiable.length) {
    console.log('\n⚠ Не проверены автоматом (WAF) — убедись вручную, что страницы живы:');
    for (const r of unverifiable) console.log(`  ${r.url} [${r.status}]  →  ${r.where}`);
  }
  if (netfail.length) {
    console.log('\n⚠ Сетевые сбои (таймаут/DNS) — не считается битой ссылкой:');
    for (const r of netfail) console.log(`  ${r.url}  →  ${r.where}`);
  }
  // CI-гейт: падаем ТОЛЬКО на гарантированно битых (404/410). WAF-ответы и сетевые
  // сбои не блокируют — иначе CI будет флейкать из-за чужих анти-ботов.
  if (process.argv.includes('--json')) console.log(JSON.stringify({ broken, unverifiable, netfail }, null, 2));
  if (broken.length) process.exit(1);
}

await main();
