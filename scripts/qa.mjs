// Static QA checks that need no dependencies and no network.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SKIP = new Set(['node_modules', '.next', '.git', 'scripts']);
const EXT = new Set(['.ts', '.tsx', '.css', '.mjs', '.json', '.md']);
const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (EXT.has(extname(p))) files.push(p);
  }
})(ROOT);

const results = [];
const fail = (check, detail) => results.push({ ok: false, check, detail });
const pass = (check) => results.push({ ok: true, check });
const read = (p) => readFileSync(p, 'utf8');

// 1. Placeholder scan (README is excluded from the text-pattern scan because it documents these terms)
const placeholderPatterns = [
  /\[(?:URL|EMAIL|TBD|CONTACT_EMAIL|MERCHANT_DOMAIN)\]/i, /\bTODO\b/, /\bFIXME\b/, /YOUR_[A-Z_]+/,
  /INSERT_[A-Z_]+/, /EXAMPLE_[A-Z_]+/, /lorem ipsum/i, /example\.com/i,
];
let phHits = [];
for (const f of files) {
  if (f.endsWith('README.md')) continue;
  const text = read(f);
  for (const re of placeholderPatterns) if (re.test(text)) phHits.push(`${f.replace(ROOT, '')}: ${re}`);
}
phHits.length ? fail('placeholder scan', phHits.join('\n')) : pass('placeholder scan');

// 2. Banned navigation/CTA patterns
const banned = [/window\.open\s*\(/, /window\.location\s*(?:\.href)?\s*=/, /location\.assign\(/];
let navHits = [];
for (const f of files.filter((x) => /\.(tsx?)$/.test(x))) {
  const text = read(f);
  for (const re of banned) if (re.test(text)) navHits.push(`${f.replace(ROOT, '')}: ${re}`);
}
navHits.length ? fail('no JS redirects', navHits.join('\n')) : pass('no JS redirects');

// 3. CTA must never be absolutely positioned over an image
let overlayHits = [];
for (const f of files.filter((x) => /(components|app)\/.*\.tsx$/.test(x))) {
  const text = read(f);
  if (/CtaButton|TrackedLink/.test(text) && /\babsolute\b/.test(text.replace(/relative aspect-square/g, ''))) {
    overlayHits.push(`${f.replace(ROOT, '')}: "absolute" used in a file that renders CTAs`);
  }
  if (/(?<![\w-])-m[tblrxy]?-\d|\bz-\[?\d+\]?\b/.test(text) && /CtaButton/.test(text) && !/StickyCta/.test(f)) {
    overlayHits.push(`${f.replace(ROOT, '')}: negative margin / z-index in a CTA file`);
  }
}
overlayHits.length ? fail('CTA does not overlay image', overlayHits.join('\n')) : pass('CTA does not overlay image');

// 4. Affiliate URL integrity (static): default URL syntax + single click_id
const site = read(join(ROOT, 'lib/site.ts'));
const m = site.match(/DEFAULT_AFFILIATE_URL\s*=\s*'([^']+)'/);
if (!m) fail('affiliate url', 'DEFAULT_AFFILIATE_URL not found');
else {
  try {
    const u = new URL(m[1]);
    const ids = u.searchParams.getAll('click_id');
    u.protocol === 'https:' && ids.length === 1 && ids[0] ? pass('default affiliate URL: https, exactly one click_id') : fail('affiliate url', 'bad protocol or click_id count');
  } catch (e) { fail('affiliate url', String(e)); }
}

// 5. Products: every product URL is https on the merchant origin, none sold out
const products = read(join(ROOT, 'lib/products.ts'));
const urls = [...products.matchAll(/productUrl:\s*'([^']+)'/g)].map((x) => x[1]);
const badUrls = urls.filter((u) => !u.startsWith('https://bodegacooler.com/products/'));
urls.length && !badUrls.length ? pass(`product URLs (${urls.length}) on merchant origin`) : fail('product URLs', badUrls.join(', ') || 'none found');
// Deep links: each product URL + click_id must yield exactly one click_id and keep the product path
if (m) {
  const cid = new URL(m[1]).searchParams.get('click_id');
  const badDeep = urls.filter((u) => {
    const d = new URL(u);
    if (d.searchParams.has('click_id')) return true; // manifest URL must be clean; code appends it once
    d.searchParams.set('click_id', cid);
    return d.searchParams.getAll('click_id').length !== 1 || !d.pathname.startsWith('/products/');
  });
  badDeep.length ? fail('deep link integrity', badDeep.join(', ')) : pass(`deep links: ${urls.length} products, exactly one click_id each`);
}
/NEXT_PUBLIC_USE_PRODUCT_DEEP_LINKS\s*!==\s*'false'/.test(read(join(ROOT, 'lib/affiliate.ts'))) ? pass('deep links enabled by default') : fail('deep links default', 'flag logic changed');
/NEXT_PUBLIC_USE_PRODUCT_DEEP_LINKS=true/.test(read(join(ROOT, '.env.example'))) ? pass('.env.example sets deep links true') : fail('.env.example', 'deep link flag not true');
/availability:\s*'(sold_out|unknown)'/.test(products) ? fail('availability gate', 'non-in-stock product present in manifest') : pass('availability gate: all manifest products in_stock');

// 6. Required files and legal routes
for (const rel of ['app/page.tsx', 'app/privacy/page.tsx', 'app/terms/page.tsx', 'app/affiliate-disclosure/page.tsx', 'app/contact/page.tsx', 'app/sitemap.ts', 'app/robots.ts', 'app/not-found.tsx', 'app/icon.png', 'public/logo.png', 'public/og.png', 'next.config.mjs', '.env.example']) {
  try { statSync(join(ROOT, rel)); pass(`exists: ${rel}`); } catch { fail('required file', rel); }
}
/basePath:\s*'\/bodegacooler'/.test(read(join(ROOT, 'next.config.mjs'))) ? pass('basePath /bodegacooler') : fail('basePath', 'missing');
/hostname:\s*'\*\*'/.test(read(join(ROOT, 'next.config.mjs'))) ? fail('image hosts', 'wildcard hostname') : pass('image hosts not wildcarded');

// 7. 'use client' present in every file that uses hooks
let hookHits = [];
for (const f of files.filter((x) => /\.tsx$/.test(x))) {
  const t = read(f);
  if (/\buse(State|Effect|Ref|Memo|Callback)\(/.test(t) && !/^\s*['"]use client['"]/.test(t)) hookHits.push(f.replace(ROOT, ''));
}
hookHits.length ? fail("'use client' for hooks", hookHits.join(', ')) : pass("'use client' for hooks");

// 8. Secrets: nothing that looks like a real GA/Ads/Pixel ID or key is hard-coded
let secretHits = [];
for (const f of files) {
  if (f.endsWith('.env.example')) continue;
  const t = read(f);
  if (/\bG-[A-Z0-9]{8,}\b|\bAW-\d{6,}\b|AKIA[0-9A-Z]{12,}|sk_live_|\bfbq\('init','\d{8,}'/.test(t)) secretHits.push(f.replace(ROOT, ''));
}
secretHits.length ? fail('hard-coded tracking IDs/secrets', secretHits.join(', ')) : pass('no hard-coded tracking IDs/secrets');

for (const r of results) console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.check}${r.detail ? '\n      ' + r.detail.replace(/\n/g, '\n      ') : ''}`);
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} checks passed`);
process.exit(failed ? 1 : 0);
