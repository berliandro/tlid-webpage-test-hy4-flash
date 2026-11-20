// Locale-completeness check: renders every route in EN and ID and flags any
// visible string that is byte-identical in both locales — i.e. untranslated.
// Run: node scripts/check-i18n.mjs [baseUrl]
// Exit 0 = complete, 1 = untranslated strings found. Needs headless Chrome.
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const BASE = (process.argv[2] || 'https://berliandro.github.io/tlid-webpage-test-hy4-flash/').replace(/\/?$/, '/');
const CHROME = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ROUTES = ['', 'players', 'players/aran', 'players/anaver', 'players/drichel', 'statistics', 'matches', 'discover', 'history', 'sources', 'missing'];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const profile = mkdtempSync(join(tmpdir(), 'tlid-i18n-'));
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--no-first-run', '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' });

async function endpoint() {
  const fs = await import('node:fs');
  let port;
  for (let i = 0; i < 80; i++) {
    try {
      port = fs.readFileSync(join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0].trim();
      if (port) break;
    } catch { /* port file not written yet */ }
    await sleep(100);
  }
  if (!port) throw new Error('Chrome debugging port never became available');
  const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const page = targets.find((t) => t.type === 'page');
  if (!page) throw new Error('No Chrome page target');
  return page;
}

let close = () => { try { chrome.kill(); } catch { /* noop */ } rmSync(profile, { recursive: true, force: true }); };
try {
  const page = await endpoint();
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0;
  const pending = new Map();
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  };
  const send = (method, params = {}) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (expression) => (await send('Runtime.evaluate', { expression, returnByValue: true })).result?.result?.value;
  await send('Runtime.enable');
  await send('Page.enable');

  const collect = `(() => {
    const out = [];
    // Disclosures contain user-visible labels too; open them before collecting.
    document.querySelectorAll('details').forEach((d) => { d.open = true; });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode, text = node.nodeValue.trim();
      if (text.length < 4) continue;
      const el = node.parentElement;
      if (!el) continue;
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') continue;
      if (el.closest('[hidden],script,style,noscript')) continue;
      const d = el.closest('details'); if (d && !d.open) continue;
      const r = el.getBoundingClientRect(); if (r.width === 0 && r.height === 0) continue;
      out.push(text.replace(/\\s+/g, ' '));
    }
    return [...new Set(out)];
  })()`;

  // Strings that legitimately keep their source form in both locales:
  // brands, proper names, URLs, abbreviations, numeric tokens, approved loan terms.
  const ALLOW = new Set([
    'TEAM LIQUID ID', 'TEAM LIQUID', 'Team Liquid', 'Team Liquid ID', 'Team Liquid ID (Instagram)',
    'Team Liquid ↗', 'Team Liquid ID (Instagram) ↗', 'TLID', 'CREDITS.md', 'provenance.json',
    'Aran', 'Kevin', 'Drichel', 'Anaver', 'Keven', 'Lyoni', 'Joo', 'Faviannn', 'YehezKiel', 'AeronnShikii',
    'Honjaw', 'Facehugger', 'Liquid AURA', 'TLID Academy', 'Monster Vicious',
    'MPL Indonesia', 'MPL ID', 'MLBB', 'MLBBHub', 'M6', 'M8', 'S13', 'S14', 'S15', 'S16', 'S17', 'S18',
    'KDA', 'MVP', 'VG', 'VCGamers', 'titosenpai', 'Liquipedia', 'Liquipedia Commons', 'Liquipedia player pages',
    'Esports Charts', 'Dot Esports', 'Esports Insider', 'Esports Advocate', 'esports.gg', 'IDN Times',
    'Wikipedia', 'Moonton', 'itemgame', 'API', 'UTC', 'HTML', 'CAPTCHA', 'PNG', 'CC BY-SA 3.0',
    'SPS S6 APAC — Challenge Season', 'STUN.GG', 'AURA', 'ECHO', 'SIL OFL', 'Manrope', 'IBM Plex Mono',
    'EXP', 'MID', 'GOLD', 'Jungler', 'Roamer', 'Mid Laner', 'Gold Laner', 'EXP Laner',
    'Kill participation', 'No. 04', 'NO. 04', 'JOINED',
    // words identical in Indonesian, or approved in-game loan terms
    'Menu', 'Indonesia', 'Damage', 'Lord', 'Tortoise', 'Grand Final',
    // proper names and data labels that carry no translatable prose
    'Kevin, Keven, Anaver', 'Aldhia Fahmi Aranda', 'Andric Alfayyadh', 'Joo → Kevin', 'RRQ Hoshi',
    'MLBBHub, 17 November 2026.',
  ]);
  const PROPER = /^(MPL Indonesia S\d+|M6 World Championship|SPS |ESL |Snapdragon |Joo →|VCGamers|titosenpai|Liquipedia|MPL Indonesia|Dot Esports|itemgame|Esports Charts|Wikipedia|Esports Insider|Esports Advocate|esports\.gg|IDN Times|Moonton|4–3 RRQ|1–4 Fnatic)/;
  const allow = (s) => {
    if (ALLOW.has(s)) return true;
    if (PROPER.test(s)) return true;
    if (/↗$/.test(s)) return true; // publisher links
    if (/^https?:\/\//.test(s)) return true;
    if (/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(s)) return true; // hostnames
    if (/^[\d\s\-–—.,:+%()/×]+$/.test(s)) return true; // pure numeric/date tokens
    if (/^\d[\d\w\s\-–—.,:+%()/]*$/.test(s) && s.length <= 28) return true; // 2026-11-08, 71–50, 26 sources
    if (!/[a-z]/.test(s)) return true; // all-caps labels/abbreviations
    return false;
  };

  const flagged = [];
  const counts = {};
  for (const route of ROUTES) {
    counts[route || 'home'] = 0;
    let enSet = new Set();
    for (const lang of ['en', 'id']) {
      await ev(`localStorage.setItem('tlid-lang','${lang}')`);
      await send('Page.navigate', { url: `${BASE}index.html?p=/${route}` });
      for (let i = 0; i < 40; i++) {
        const ready = await ev(`document.readyState==='complete' && document.querySelector('#app')?.children.length>0`);
        if (ready) break;
        await sleep(100);
      }
      await sleep(250);
      const texts = await ev(collect);
      if (lang === 'en') { enSet = new Set(texts); counts[route || 'home'] = texts.length; }
      else {
        for (const t of texts) if (enSet.has(t) && !allow(t)) flagged.push({ route: route || 'home', text: t });
      }
    }
  }

  // Explicit regression assertions for the previously verified P1 strings.
  const KNOWN = [
    'Public research, 17 November 2026. Unknowns stay blank.',
    'No invented fixtures.',
    'S18 ended 8 November 2026',
    'Player profile',
    'MPL ID S14 champion',
    'M6 runner-up',
    'S18 lineup announced',
    'Substitutes (1) · No. 04',
  ];
  const stillFlagged = KNOWN.filter((s) => flagged.some((f) => f.text === s));

  const result = {
    base: BASE,
    routes: ROUTES.length,
    stringsPerRoute: counts,
    flagged,
    knownStringsTotal: KNOWN.length,
    knownStringsStillFlagged: stillFlagged,
  };
  console.log(JSON.stringify(result, null, 2));
  ws.close();
  close = () => {};
  process.exit(flagged.length ? 1 : 0);
} catch (err) {
  console.error('check-i18n failed:', err.message);
  process.exit(2);
} finally {
  close();
}
