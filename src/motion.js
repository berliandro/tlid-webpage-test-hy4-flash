// Purposeful motion: one shared observer, transform/opacity only, no scroll listeners.
// Reduced-motion users get no reveal attributes at all; CSS also disables every animation.

const REVEAL_SELECTORS = [
  '.page-head h1', '.page-head .lede', '.page-head .source-note',
  '.hero-badge', '.hero h1', '.hero-sub', '.hero-cta', '.card-fan',
  '.section-head', '.tile', '.player-card', '.bench',
  '.stat-strip>div', '.total-cell', '.mvp-card', '.record-stack>div',
  '.conflict', '.source-card', '.story', '.timeline-item',
  '.unavailable', '.result-empty', '.bar-row', '.archive-row',
  '.footer-grid>div', '.glossary dl>div',
];

const reduced = () => typeof window.matchMedia === 'function'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const supported = () => 'IntersectionObserver' in window;
let observer = null;

function scan(root) {
  const seen = new Map();
  root.querySelectorAll(REVEAL_SELECTORS.join(',')).forEach((el) => {
    if (el.hasAttribute('data-reveal') || el.closest('[data-reveal]')) return;
    if (el.closest('.season-moment, .home-closing, .roster-notes')) return;
    const parent = el.parentElement;
    const index = seen.get(parent) || 0;
    seen.set(parent, index + 1);
    el.style.setProperty('--reveal-i', String(Math.min(index, 6)));
    el.setAttribute('data-reveal', '');
    observer.observe(el);
  });
}

export function initMotion(root = document) {
  if (reduced() || !supported()) return;
  if (observer) observer.disconnect();
  observer = new IntersectionObserver((entries, obs) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-in');
      obs.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
  scan(root);
}

// For chart and archive rows injected after the initial render.
export function refreshMotion(root = document) {
  if (reduced() || !supported() || !observer) return;
  scan(root);
}
