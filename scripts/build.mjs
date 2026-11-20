import { cp, mkdir, readdir, rm } from 'node:fs/promises';
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

// Static deep-link stubs. GitHub Pages serves /<route>/index.html with HTTP 200,
// then the stub redirects to index.html?p=<route>. Without these, a direct
// bookmark hits the custom 404.html (HTTP 404) before the SPA can take over.
const routeStubs = path.join(root, 'public', 'routes');
for (const name of await readdir(routeStubs)) {
  await cp(path.join(routeStubs, name), path.join(out, name), { recursive: true });
}

console.log('Build complete: dist/');
