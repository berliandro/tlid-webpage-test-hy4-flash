import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

await cp(path.join(root, 'index.html'), path.join(out, 'index.html'));
await cp(path.join(root, '404.html'), path.join(out, '404.html'));
await cp(path.join(root, 'src'), path.join(out, 'src'), { recursive: true });
await cp(path.join(root, 'public'), path.join(out, 'public'), { recursive: true });

// Deep-link routes are full copies of the SPA shell at the site root. GitHub
// Pages serves them at /<route>/ with HTTP 200 and the app reads the route from
// location.pathname — no redirect, no "Loading…" flash. Mirror them in dist.
const routeStubs = ['discover', 'history', 'matches', 'missing', 'players', 'sources', 'statistics'];
for (const name of routeStubs) {
  await cp(path.join(root, name), path.join(out, name), { recursive: true });
}

console.log('Build complete: dist/');
