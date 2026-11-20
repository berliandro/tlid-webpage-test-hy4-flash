// Deterministic, seeded offsets for the specimen plates. No animation loop.
function hash(input) {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function applySeededOffsets() {
  const nodes = document.querySelectorAll('.band-card, .roster-row .row-portrait');
  nodes.forEach((node, i) => {
    const key = node.getAttribute('href') || node.className || String(i);
    const h = hash(key);
    node.style.setProperty('--offset', `${((h % 9) - 4)}px`);
  });
}
