import { renderHome } from './pages/home.js';
import { renderPlayers } from './pages/players.js';
import { renderPlayer } from './pages/player.js';
import { renderStats } from './pages/statistics.js';
import { renderMatches } from './pages/matches.js';
import { renderDiscover } from './pages/discover.js';
import { renderHistory } from './pages/history.js';
import { renderSources } from './pages/sources.js';
import { renderNotFound } from './pages/notfound.js';
import { navItems } from './data/team.js';
import { laceTop } from './lib/ui.js';
import { translate, applyLanguage } from './i18n.js';
import { applySeededOffsets } from './motion.js';
import { icon } from './icons.js';

const app = document.getElementById('app');
const FORCE_PAGES = new URLSearchParams(location.search).has('pages');
const IS_PAGES = location.hostname.endsWith('github.io') || FORCE_PAGES;
const BASE = FORCE_PAGES ? '/' : (IS_PAGES ? '/' + (location.pathname.split('/')[1] || '') + '/' : '/');

function routeFromLocation() {
  if (IS_PAGES) {
    const q = new URLSearchParams(location.search).get('p');
    if (q) return q.replace(/\/+$/, '') || '/';
  }
  let p = location.pathname;
  if (IS_PAGES && p.startsWith(BASE)) p = p.slice(BASE.length - 1);
  return p.replace(/\/+$/, '') || '/';
}

function urlFor(route) {
  return IS_PAGES
    ? `${BASE}index.html?p=${encodeURIComponent(route)}`
    : route;
}

function routeFromHref(href) {
  let h = href;
  if (IS_PAGES && h.startsWith(BASE)) h = '/' + h.slice(BASE.length);
  if (h.startsWith(BASE) && BASE === '/') h = '/' + h.slice(1);
  return h.replace(/\/+$/, '') || '/';
}

function activeHref(path) {
  if (path === '/') return '/';
  if (path.startsWith('/players')) return '/players';
  return '/' + path.split('/')[1];
}

function shell(content) {
  const current = activeHref(routeFromLocation());
  const nav = navItems.map((n) =>
    `<a href="${n.href}" class="nav-link${current === n.href ? ' active' : ''}" aria-current="${current === n.href ? 'page' : 'false'}">${icon(n.icon)}${n.label}</a>`
  ).join('');
  const html = `
  <a class="skip-link" href="#main">Lewati ke konten</a>
  ${laceTop()}
  <header class="site-header">
    <a class="brand" href="/" aria-label="Team Liquid ID — beranda">TEAM LIQUID <b>ID</b><span class="brand-meta">MPL-ID / MLBB</span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Buka navigasi"><span></span><span></span><span></span></button>
    <nav id="primary-nav" class="site-nav" aria-label="Navigasi utama">${nav}</nav>
  </header>
  <p id="route-status" class="sr-status" role="status" aria-live="polite"></p>
  <main id="main" tabindex="-1">${content}</main>
  <footer class="site-footer">
    <div class="footer-grid">
      <div><p class="footer-mark">TEAM LIQUID <em>ID</em></p><p class="footer-note">Proyek independen. Tidak afiliasi, tidak commission, dan tidak disetujui oleh Team Liquid atau Moonton. Potret pemain bersumber dari Liquipedia Commons (CC BY-SA 3.0); Anaver memakai ilustrasi sintetik.</p></div>
      <div><p class="footer-label">Navigasi</p>${navItems.map((n) => `<a href="${n.href}">${n.label}</a>`).join('')}</div>
      <div><p class="footer-label">Data</p><a href="/sources">Daftar sumber</a><a href="/statistics">Catatan verifikasi</a><a href="/players">Roster S18</a></div>
    </div>
    <div class="footer-search"><label for="site-search">Cari bagian</label><input id="site-search" type="search" placeholder="Cari bagian…" autocomplete="off" aria-label="Cari bagian situs" aria-controls="search-status" /><button type="button" data-search-reset aria-label="Hapus pencarian">Reset</button></div>
    <p id="search-status" class="search-status" role="status" aria-live="polite">Cari berdasarkan nama bagian di navigasi.</p>
    <details class="glossary" id="glossary" open><summary>Glosarium</summary><dl>
      <div><dt>MLBB</dt><dd>Mobile Legends: Bang Bang, judul kompetitif yang diikuti TLID.</dd></div>
      <div><dt>MPL ID</dt><dd>Liga MLBB profesional Indonesia tempat TLID berkompetisi.</dd></div>
      <div><dt>S18</dt><dd>Season 18, musim kompetisi yang menjadi acuan roster saat ini.</dd></div>
      <div><dt>KDA</dt><dd>Rasio kill, death, assist. Semakin tinggi, semakin baik.</dd></div>
      <div><dt>MVP</dt><dd>Pemain paling berkontribusi menurut klasemen resmi liga.</dd></div>
      <div><dt>Kill participation</dt><dd>Persentase kill tim yang melibatkan pemain tersebut.</dd></div>
      <div><dt>Arsip</dt><dd>Kumpulan fakta bersumber, bukan siaran langsung.</dd></div>
      <div><dt>Sumber</dt><dd>Penerbit, tautan, tanggal ambil, dan tingkat keyakinan tiap fakta.</dd></div>
    </dl></details>
    <div class="footer-controls">
      <button class="expand-sources" type="button" data-expand-sources aria-expanded="false">Tampilkan semua sumber</button>
      <p class="motion-note">Gerakan dikurangi otomatis bila sistem memintanya.</p>
    </div>
    <div class="footer-bottom-row">
      <p class="footer-bottom">Dibangun sebagai arsip editorial · data dari riset publik 2026-11-17 · status tidak diketahui sengaja dibiarkan kosong.</p>
      <button type="button" class="lang-toggle" data-lang-toggle aria-label="Switch to Bahasa Indonesia">Bahasa Indonesia</button>
    </div>
    <p class="credits-line">Icons by Lorc from <a href="https://game-icons.net" target="_blank" rel="noopener noreferrer">game-icons.net</a> · CC BY 3.0. Paper grain from <a href="https://ambientcg.com/a/Paper001" target="_blank" rel="noopener noreferrer">ambientCG</a> · CC0. Full credits: CREDITS.md.</p>
  </footer>`;
  return html.replace(/href="\//g, `href="${BASE}`);
}

function resolve(path) {
  if (path === '/') return renderHome();
  if (path === '/players') return renderPlayers();
  if (/^\/players\/[a-z0-9-]+\/?$/.test(path)) return renderPlayer(path.split('/')[2]);
  if (path === '/statistics') return renderStats();
  if (path === '/matches') return renderMatches();
  if (path === '/discover') return renderDiscover();
  if (path === '/history') return renderHistory();
  if (path === '/sources') return renderSources();
  return renderNotFound();
}

function titles(path) {
  const map = {
    '/': 'Beranda', '/players': 'Pemain', '/statistics': 'Statistik',
    '/matches': 'Pertandingan', '/discover': 'Jelajah', '/history': 'Sejarah', '/sources': 'Sumber',
  };
  const title = path.startsWith('/players/') ? 'Profil Pemain' : (map[path] || 'Halaman tidak ditemukan');
  return translate(title);
}

export function render() {
  const path = routeFromLocation();
  const result = resolve(path);
  app.innerHTML = shell(result.html);
  const status = document.getElementById('route-status');
  if (status) status.textContent = titles(path);
  document.title = `${titles(path)} — Team Liquid ID`;
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.getElementById('main')?.focus({ preventScroll: true });
  result.mount?.();
  wireNav();
  applyLanguage(document);
  applySeededOffsets();
}

function wireNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', translate(open ? 'Tutup navigasi' : 'Buka navigasi'));
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

export function startRouter() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="/"]');
    if (!link || link.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(link.getAttribute('href'));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const nav = document.getElementById('primary-nav');
    const toggle = document.querySelector('.nav-toggle');
    if (!nav || !nav.classList.contains('open')) return;
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
  document.addEventListener('click', (e) => {
    const nav = document.getElementById('primary-nav');
    if (!nav || !nav.classList.contains('open')) return;
    if (e.target.closest('#primary-nav') || e.target.closest('.nav-toggle')) return;
    nav.classList.remove('open');
    document.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
  });
  window.addEventListener('popstate', render);
  render();
}

export function navigate(href) {
  const route = routeFromHref(href);
  if (route === routeFromLocation()) return;
  history.pushState({}, '', urlFor(route));
  render();
}
