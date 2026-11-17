import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = process.argv.includes('--dist');
const root = dist ? path.join(here, 'dist') : here;
const port = Number(process.env.PORT || 5173);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

function safe(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  const resolved = path.resolve(root, '.' + clean);
  if (!resolved.startsWith(root)) return null;
  return resolved;
}

const server = http.createServer(async (req, res) => {
  try {
    let file = safe(req.url || '/');
    if (!file) { res.writeHead(403).end('Forbidden'); return; }
    let info;
    try { info = await stat(file); } catch { info = null; }
    if (!info || info.isDirectory()) file = path.join(root, 'index.html');
    else if (info.isFile() && file.endsWith('.html') === false && req.url.includes('.')) {
      // serve real files directly
    } else if (info.isFile() && path.extname(file) === '') {
      file = path.join(root, 'index.html');
    }
    const body = await readFile(file);
    res.writeHead(200, {
      'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    res.end(body);
  } catch (err) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!doctype html><title>Error</title><p>Unable to serve request.</p>');
  }
});

server.keepAliveTimeout = 2000;
server.headersTimeout = 3000;
server.listen(port, '127.0.0.1', () => {
  console.log(`TLID V1 running at http://localhost:${port}${dist ? ' (dist)' : ' (dev)'}`);
});
