import { startRouter, render } from './router.js';
import { getLang, setLang, applyLanguage, translate } from './i18n.js';

startRouter();

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-lang-toggle]')) {
    const y = window.scrollY;
    const disclosure = [...document.querySelectorAll('.source-note, .glossary')].map((n) => n.open);
    setLang(getLang() === 'en' ? 'id' : 'en');
    render();
    document.querySelectorAll('[data-lang-toggle]').forEach((toggle) => {
      toggle.textContent = toggle.hasAttribute('data-lang-short')
        ? (getLang() === 'id' ? 'ID' : 'EN')
        : (getLang() === 'id' ? 'English' : 'Bahasa Indonesia');
    });
    [...document.querySelectorAll('.source-note, .glossary')].forEach((n, i) => { n.open = disclosure[i] !== false; });
    document.querySelector('[data-lang-toggle]')?.focus({ preventScroll: true });
    window.scrollTo({ top: y, behavior: 'instant' });
  }
});

function searchInputs() {
  return [...document.querySelectorAll('#site-search, #site-search-footer')];
}

function focusSearch() {
  const visible = searchInputs().find((input) => input.getBoundingClientRect().width > 0);
  (visible || document.querySelector('.nav-toggle'))?.focus();
}

document.addEventListener('keydown', (e) => {
  if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
    e.preventDefault();
    focusSearch();
  }
  if (e.key === 'Escape' && document.activeElement.id === 'site-search') {
    document.activeElement.value = '';
    runSearch('');
  }
});

function runSearch(q, source) {
  // Section/navigation finder only: header nav plus the footer-provenance link.
  const links = [...document.querySelectorAll('.site-nav .nav-link, .footer-control-links a[data-search]')];
  let shown = 0;
  links.forEach((a) => {
    const haystack = (a.dataset.search || a.textContent).toLowerCase();
    const match = !q || haystack.includes(q);
    // Navigation is always present; non-matches are only dimmed, never removed.
    a.hidden = false;
    a.classList.toggle('is-dimmed', !!q && !match);
    if (match) shown += 1;
  });
  const status = document.getElementById('search-status');
  const found = getLang() === 'id'
    ? `${shown} bagian ditemukan`
    : `${shown} section${shown === 1 ? '' : 's'} found`;
  if (status) status.textContent = q ? found : translate('Search by section name in the navigation.');
  const feedback = document.getElementById('search-feedback');
  const result = document.getElementById('search-result');
  if (feedback && result) {
    feedback.hidden = !q;
    if (q) {
      result.textContent = shown ? found : (getLang() === 'id'
        ? `Tidak ada bagian yang cocok dengan “${q}” — coba “tim”, “pertandingan” atau tekan Esc`
        : `No sections match “${q}” — try “team”, “matches” or press Esc`);
    }
  }
  // A footer-only match would otherwise be counted but invisible on screen.
  const hit = document.getElementById('search-hit');
  const footerHit = links.find((a) => a.matches('.footer-control-links a[data-search]') && !a.classList.contains('is-dimmed'));
  const footerOnly = !!footerHit && shown === 1;
  if (hit) {
    hit.hidden = !footerOnly;
    if (footerOnly) {
      hit.setAttribute('href', footerHit.getAttribute('href'));
      const hitLabel = footerHit.textContent.trim();
      const hitLoc = translate('in the footer');
      hit.querySelector('.search-hit-label').textContent = hitLabel;
      hit.querySelector('.search-hit-loc').textContent = hitLoc;
      hit.setAttribute('aria-label', `${hitLabel} — ${hitLoc}`);
    }
  }
  searchInputs().forEach((input) => { if (input !== source) input.value = q; });
  if (q) {
    const menu = document.getElementById('explore-menu');
    if (menu && [...menu.querySelectorAll('.nav-link')].some((a) => !a.classList.contains('is-dimmed'))) {
      menu.hidden = false;
      document.querySelector('.explore-toggle')?.setAttribute('aria-expanded', 'true');
    }
    const nav = document.getElementById('primary-nav');
    const toggle = document.querySelector('.nav-toggle');
    if (nav && getComputedStyle(nav).display === 'none') {
      nav.classList.add('open');
      toggle?.setAttribute('aria-expanded', 'true');
    }
  }
}

document.addEventListener('input', (e) => {
  if (e.target.id === 'site-search' || e.target.id === 'site-search-footer') {
    runSearch(e.target.value.toLowerCase().trim(), e.target);
  }
});

document.addEventListener('submit', (e) => {
  if (e.target.matches('[data-search-form]')) e.preventDefault();
});

// A "Full glossary" link must reveal its destination on any route.
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href="#glossary"]');
  if (!link) return;
  const glossary = document.getElementById('glossary');
  if (glossary) glossary.open = true;
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('[data-search-reset]')) return;
  const inputs = searchInputs();
  inputs.forEach((input) => { input.value = ''; });
  runSearch('');
  inputs.find((input) => input.getBoundingClientRect().width > 0)?.focus();
});

document.addEventListener('visibilitychange', () => {
  document.body.classList.toggle('is-hidden', document.hidden);
});

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-expand-sources]');
  if (!btn) return;
  const notes = [...document.querySelectorAll('.source-note')];
  const open = btn.getAttribute('aria-expanded') !== 'true';
  notes.forEach((note) => { note.open = open; });
  btn.setAttribute('aria-expanded', String(open));
  btn.textContent = open ? 'Hide all sources' : 'Show all sources';
  applyLanguage(btn);
});
