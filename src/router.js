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
import { translate, applyLanguage } from './i18n.js';
import { initMotion } from './motion.js';

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
  const navLink = (n) => `<a href="${n.href}" class="nav-link${current === n.href ? ' active' : ''}" data-search="${n.en} ${n.label}" aria-current="${current === n.href ? 'page' : 'false'}">${n.en}</a>`;
  const exploreItems = navItems.filter((n) => n.group === 'explore');
  const exploreChild = exploreItems.find((n) => n.href === current);
  const exploreOpen = !!exploreChild;
  const exploreLabel = exploreChild ? `Explore: ${exploreChild.en}` : 'Explore';
  const mobileExplore = window.matchMedia('(max-width:860px)').matches;
  const nav = navItems.filter((n) => n.top).map(navLink).join('') + `
    <div class="nav-explore">
      <button type="button" class="nav-link explore-toggle${exploreOpen ? ' active' : ''}" aria-expanded="${mobileExplore}" aria-controls="explore-menu">${exploreLabel}</button>
      <div class="explore-menu" id="explore-menu"${mobileExplore ? '' : ' hidden'}>${exploreItems.map(navLink).join('')}</div>
    </div>`;
  const currentLabel = navItems.find((n) => n.href === current)?.en || (current === '/sources' ? 'Sources' : '');
  const html = `
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="shell">
  <div class="grid-bg" aria-hidden="true"></div>
  <div class="grid-edge" aria-hidden="true"></div>
  <header class="topbar">
    <div class="topbar-left">
      <a class="brand" href="/" aria-label="Team Liquid ID — home">TEAM LIQUID ID <span class="brand-sub">/ MLBB</span></a>
      <div class="search-wrap">
        <label class="search-pill"><span>⌕</span><input id="site-search" type="search" placeholder="Find a section…" autocomplete="off" aria-label="Search site sections in header" aria-controls="search-status" /><span>/</span></label>
        <div class="search-feedback" id="search-feedback" aria-hidden="true" hidden>
          <span id="search-result"></span>
          <button type="button" class="search-clear" data-search-reset>Clear</button>
        </div>
      </div>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open navigation">Menu</button>
    </div>
    <a class="center-mark" href="/" aria-label="Team Liquid ID crest — home"><img src="public/assets/tlid-mark.svg" alt="" /></a>
    <div class="topbar-right">
      <span class="current-section">${currentLabel}</span>
      <nav id="primary-nav" class="site-nav" aria-label="Main navigation">${nav}</nav>
      <span class="pill status-pill"><span class="coin"></span> S18 · 17 NOV</span>
    </div>
  </header>
  <p id="route-status" class="sr-status" role="status" aria-live="polite"></p>
  <main id="main" tabindex="-1">${content}</main>
  <footer class="site-footer">
    <div class="footer-grid">
      <div><p class="footer-mark">TEAM LIQUID <em>ID</em></p><p class="footer-note">Unofficial concept. Not endorsed by Team Liquid or Moonton. Portraits: Liquipedia Commons, CC BY-SA 3.0; Anaver uses a synthetic illustration.</p></div>
    </div>
    <p id="search-status" class="sr-status" role="status" aria-live="polite">Search by section name in the navigation.</p>
    <details class="glossary" id="glossary" open><summary>Glossary</summary><dl>
      <div><dt>MLBB</dt><dd>The game TLID plays.</dd></div>
      <div><dt>MPL ID</dt><dd>Indonesia's pro MLBB league.</dd></div>
      <div><dt>S18</dt><dd>The season this roster refers to.</dd></div>
      <div><dt>KDA</dt><dd>Kills, deaths and assists per game.</dd></div>
      <div><dt>MVP</dt><dd>Most points in the official standings.</dd></div>
      <div><dt>Kill participation</dt><dd>Share of team kills involving the player.</dd></div>
      <div><dt>Source note</dt><dd>Where a fact came from.</dd></div>
    </dl></details>
    <div class="footer-controls">
      <div class="footer-control-links"><a href="/sources"${current === '/sources' ? ' class="active" aria-current="page"' : ''}>Sources</a><button class="expand-sources" type="button" data-expand-sources aria-expanded="false">Show all sources</button></div>
      <p class="motion-note">Motion stops when your system asks for less.</p>
    </div>
    <div class="footer-bottom-row">
      <p class="footer-bottom">Public research, 17 November 2026. Unknowns stay blank.</p>
      <button type="button" class="lang-toggle" data-lang-toggle aria-label="Switch to Bahasa Indonesia">Bahasa Indonesia</button>
    </div>
    <p class="credits-line">Portraits: Liquipedia Commons (CC BY-SA 3.0). Type: Manrope, IBM Plex Mono (SIL OFL). Horse from the TL crest. CREDITS.md.</p>
  </footer>
  </div>`;
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
    '/': 'Team', '/players': 'Players', '/statistics': 'Statistics',
    '/matches': 'Matches', '/discover': 'Discover', '/history': 'History', '/sources': 'Sources',
  };
  const title = path.startsWith('/players/') ? 'Player profile' : (map[path] || 'Page not found');
  return translate(title);
}

export function render() {
  const path = routeFromLocation();
  const result = resolve(path);
  app.innerHTML = shell(result.html);
  initMotion(app);
  const status = document.getElementById('route-status');
  if (status) status.textContent = titles(path);
  document.title = `${titles(path)} — Team Liquid ID`;
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.getElementById('main')?.focus({ preventScroll: true });
  result.mount?.();
  wireNav();
  applyLanguage(document);
}

function wireNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;
  const exploreToggle = document.querySelector('.explore-toggle');
  const exploreMenu = document.getElementById('explore-menu');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', translate(open ? 'Tutup navigasi' : 'Buka navigasi'));
  });
  exploreToggle?.addEventListener('click', () => {
    const open = exploreMenu.hidden;
    exploreMenu.hidden = !open;
    exploreToggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (e) => {
    if (e.target.closest('.explore-toggle')) return;
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      if (exploreMenu) exploreMenu.hidden = true;
      exploreToggle?.setAttribute('aria-expanded', 'false');
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
    const menu = document.getElementById('explore-menu');
    if (menu && !menu.hidden) {
      menu.hidden = true;
      document.querySelector('.explore-toggle')?.setAttribute('aria-expanded', 'false');
    }
    const nav = document.getElementById('primary-nav');
    const toggle = document.querySelector('.nav-toggle');
    if (!nav || !nav.classList.contains('open')) return;
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('explore-menu');
    if (menu && !menu.hidden && !e.target.closest('.nav-explore')) {
      menu.hidden = true;
      document.querySelector('.explore-toggle')?.setAttribute('aria-expanded', 'false');
    }
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
