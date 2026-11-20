// Locale-completeness check: renders every route in EN and ID and reports any
// user-visible string that is still English in ID mode. Run:
//   node scripts/check-i18n.mjs [baseUrl]
// Exit 0 = complete, 1 = partial translation found. Needs headless Chrome.
import { spawn } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const BASE = (process.argv[2] || 'https://berliandro.github.io/tlid-webpage-test-hy4-flash/').replace(/\/?$/, '/');
const CHROME = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ROUTES = ['', 'players', 'players/anaver', 'players/drichel', 'statistics', 'matches', 'discover', 'history', 'sources', 'missing'];
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
  return { port, page };
}

let close = () => { try { chrome.kill(); } catch { /* noop */ } rmSync(profile, { recursive: true, force: true }); };
try {
  const { port, page } = await endpoint();
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
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode, text = node.nodeValue.trim();
      if (text.length < 8) continue;
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

  // Strings that legitimately keep their English/proper-noun form in both locales.
  const ALLOW = new Set([
    'TEAM LIQUID ID', 'TEAM LIQUID', 'Team Liquid ↗', 'Team Liquid ID (Instagram) ↗',
    'SPS S6 APAC — Challenge Season', 'CREDITS.md', 'provenance.json',
  ]);
  const isUrl = (s) => /^https?:\/\//.test(s);
  // Indonesian function words never appear in genuine English copy; their presence
  // keeps proper nouns like "Team Liquid" / "CC BY-SA" from being false positives.
  const IND = /\b(tidak|atau|oleh|yang|dengan|untuk|dari|dalam|pada|dan|ini|itu|kami|belum|mungkin|gunakan|mencantumkan|hasil|musim|sumber|poin|klasemen|ke|dari|bagian|terverifikasi|dikonfirmasi|di|apa|kenapa|data|game)\b/i;
  const english = (s) => {
    if (ALLOW.has(s) || isUrl(s) || IND.test(s)) return false;
    const words = (s.toLowerCase().match(/\b[a-z]+\b/g) || []);
    const hits = new Set(words.filter((w) => [
      'the', 'is', 'are', 'was', 'were', 'and', 'or', 'with', 'from', 'this', 'that',
      'these', 'those', 'for', 'not', 'but', 'you', 'your', 'our', 'we', 'they',
      'their', 'has', 'have', 'had', 'will', 'would', 'can', 'could', 'be', 'been',
      'being', 'in', 'on', 'at', 'to', 'of', 'by', 'as', 'it', 'its', 'all', 'season',
      'team', 'player', 'players', 'role', 'source', 'sources', 'note', 'notes',
      'record', 'match', 'matches', 'result', 'results', 'finish', 'list', 'what',
      'why', 'how', 'when', 'title', 'first', 'last', 'name', 'game', 'games',
      'official', 'verified', 'available', 'here', 'home', 'view', 'open', 'go',
      'retrieved', 'data', 'points', 'founded', 'acquisition', 'final', 'next',
    ].includes(w)));
    return hits.size >= 2;
  };

  const flagged = [];
  const counts = {};
  for (const route of ROUTES) {
    counts[route || 'home'] = 0;
    for (const lang of ['en', 'id']) {
      await ev(`localStorage.setItem('tlid-lang','${lang}')`);
      await send('Page.navigate', { url: `${BASE}index.html?p=/${route}` });
      for (let i = 0; i < 40; i++) {
        const ready = await ev(`document.readyState==='complete' && document.querySelector('#app')?.children.length>0`);
        if (ready) break;
        await sleep(100);
      }
      await sleep(250);
      if (lang === 'en') counts[route || 'home'] = (await ev(collect)).length;
      else {
        const idTexts = await ev(collect);
        for (const t of idTexts) if (english(t)) flagged.push({ route: route || 'home', text: t });
      }
    }
    // Specific assertion: the 404 heading must be fully Indonesian in ID mode.
    if (route === 'missing') {
      await ev(`localStorage.setItem('tlid-lang','id')`);
      await send('Page.navigate', { url: `${BASE}index.html?p=/missing` });
      await sleep(700);
      const h1 = await ev(`document.querySelector('h1')?.textContent.replace(/\\s+/g,' ').trim()`);
      if (/\b(this|is not here|not here)\b/i.test(h1)) flagged.push({ route: 'missing', text: `H1 still mixed: ${h1}` });
    }
  }

  const result = { base: BASE, routes: ROUTES.length, stringsPerRoute: counts, flagged };
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
