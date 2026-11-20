import { startRouter, render } from './router.js';
import { getLang, setLang, applyLanguage } from './i18n.js';

startRouter();

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-lang-toggle]')) {
    const y = window.scrollY;
    const disclosure = [...document.querySelectorAll('.source-note, .glossary')].map((n) => n.open);
    setLang(getLang() === 'en' ? 'id' : 'en');
    render();
    const toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) toggle.textContent = getLang() === 'id' ? 'English' : 'Bahasa Indonesia';
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
});

function runSearch(q, source) {
  const links = [...document.querySelectorAll('.site-nav .nav-link')];
  let shown = 0;
  links.forEach((a) => {
    a.hidden = !!q && !a.textContent.toLowerCase().includes(q);
    if (!a.hidden) shown += 1;
  });
  const status = document.getElementById('search-status');
  if (status) status.textContent = q ? `${shown} section${shown === 1 ? '' : 's'} found` : 'Search by section name in the navigation.';
  searchInputs().forEach((input) => { if (input !== source) input.value = q; });
  if (q) {
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
