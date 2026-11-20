// Transform-only scroll motion. No loop, no layout-driving properties.
export function applyScrollMotion() {
  const horse = document.querySelector('.horse');
  const photo = document.querySelector('.photo-band img');
  if (!horse && !photo) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let queued = false;
  const update = () => {
    const y = Math.max(0, window.scrollY || 0);
    if (horse) horse.style.transform = `translate3d(0, ${Math.min(y * 0.12, 120).toFixed(1)}px, 0)`;
    if (photo) photo.style.transform = `translate3d(0, ${Math.min(y * 0.04, 28).toFixed(1)}px, 0) scale(${(1 + Math.min(y * 0.00018, 0.06)).toFixed(3)})`;
    queued = false;
  };
  window.addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
}
