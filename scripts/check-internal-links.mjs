import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(root, 'dist');

if (!existsSync(dist)) {
  console.error('dist/ is missing. Run npm run build before checking links.');
  process.exit(1);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function routeForHtml(file) {
  const path = `/${relative(dist, file).replaceAll('\\', '/')}`;
  if (path === '/index.html') return '/';
  return path.endsWith('/index.html') ? path.slice(0, -10) : path;
}

function resolvesToOutput(pathname) {
  const decoded = decodeURIComponent(pathname);
  const clean = decoded.replace(/^\/+/, '');
  const direct = join(dist, clean);
  return (
    existsSync(direct) ||
    existsSync(join(direct, 'index.html')) ||
    (!extname(direct) && existsSync(`${direct}.html`))
  );
}

const failures = [];
const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const sourceRoute = routeForHtml(file);
  const attributes = html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi);

  for (const [, rawTarget] of attributes) {
    if (
      rawTarget.startsWith('#') ||
      rawTarget.startsWith('//') ||
      /^(?:[a-z]+:|data:)/i.test(rawTarget)
    ) {
      continue;
    }

    const target = rawTarget.split(/[?#]/, 1)[0];
    if (!target) continue;

    const resolved = new URL(target, `https://site.invalid${sourceRoute}`)
      .pathname;
    if (!resolvesToOutput(resolved)) {
      failures.push(`${sourceRoute} -> ${rawTarget}`);
    }
  }
}

if (failures.length > 0) {
  console.error('Broken internal links:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Checked ${htmlFiles.length} HTML files: all internal links resolve.`,
);
