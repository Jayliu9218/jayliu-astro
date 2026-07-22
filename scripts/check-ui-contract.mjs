import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(root, 'dist');
const expectedNavigation = ['/', '/blog/', '/projects/'];
const expectedProfileLinks = [
  'mailto:jayliu9218@gmail.com',
  'https://github.com/Jayliu9218',
  'https://scholar.google.com/citations?user=Q-i6GPwAAAAJ',
  'https://orcid.org/0009-0001-3925-2219',
  '/resume-en.pdf',
  '/resume-zh_CN.pdf',
];

if (!existsSync(dist)) {
  console.error('dist/ is missing. Run npm run build before checking the UI.');
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

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']+)["']`, 'i'))?.[1];
}

function expectedActiveRoute(route) {
  if (route.startsWith('/posts/')) return '/blog/';
  if (route.startsWith('/projects/')) return '/projects/';
  return expectedNavigation.find((href) => href === route);
}

const failures = [];
const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const route = routeForHtml(file);
  const bodyClass = html.match(/<body\b[^>]*\bclass=["']([^"']*)["']/i)?.[1];

  if (!bodyClass?.split(/\s+/).includes('portfolio-page')) {
    failures.push(`${route}: body is missing the portfolio-page contract`);
  }

  const navHtml = html.match(
    /<div\b[^>]*class=["'][^"']*\bnav-links\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i,
  )?.[1];

  if (!navHtml) {
    failures.push(`${route}: shared navigation is missing`);
    continue;
  }

  const navAnchors = [...navHtml.matchAll(/<a\b[^>]*>/gi)].map(([tag]) => ({
    href: attribute(tag, 'href'),
    current: attribute(tag, 'aria-current'),
  }));
  const navHrefs = navAnchors.map((anchor) => anchor.href);

  if (JSON.stringify(navHrefs) !== JSON.stringify(expectedNavigation)) {
    failures.push(`${route}: navigation routes are inconsistent`);
  }

  const expectedActive = expectedActiveRoute(route);
  const activeHrefs = navAnchors
    .filter((anchor) => anchor.current === 'page')
    .map((anchor) => anchor.href);

  if (
    expectedActive &&
    (activeHrefs.length !== 1 || activeHrefs[0] !== expectedActive)
  ) {
    failures.push(
      `${route}: expected ${expectedActive} to be the active route`,
    );
  }

  if (
    !html.includes('data-theme-toggle') ||
    !html.includes('data-language-toggle')
  ) {
    failures.push(`${route}: theme or language control is missing`);
  }
}

const homeHtml = readFileSync(join(dist, 'index.html'), 'utf8');
for (const section of ['about', 'focus', 'contact']) {
  if (!homeHtml.includes(`data-home-section="${section}"`)) {
    failures.push(`/: homepage is missing the ${section} section`);
  }
}

const contactHtml = homeHtml.match(
  /<aside\b[^>]*id=["']contact-links["'][^>]*>([\s\S]*?)<\/aside>/i,
)?.[1];
const contactLinks = [
  ...(contactHtml?.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi) ?? []),
].map((match) => match[1]);

if (JSON.stringify(contactLinks) !== JSON.stringify(expectedProfileLinks)) {
  failures.push('/: homepage contact links are incomplete or out of order');
}

for (const legacyClass of [
  'post-grid',
  'tools-grid',
  'projects-list',
  'skill-grid',
]) {
  if (homeHtml.includes(`class="${legacyClass}`)) {
    failures.push(
      `/: homepage still includes the legacy ${legacyClass} section`,
    );
  }
}

if (existsSync(join(dist, 'about', 'index.html'))) {
  failures.push('/about/: removed route is still present in the build');
}

const blogHtml = readFileSync(join(dist, 'blog', 'index.html'), 'utf8');
if (
  !blogHtml.includes('class="document-list"') ||
  !blogHtml.includes('class="document-row"')
) {
  failures.push('/blog/: documents must render as a flat list');
}
if (
  blogHtml.includes('blog-card-grid') ||
  blogHtml.includes('post-card') ||
  blogHtml.includes('filter-block')
) {
  failures.push('/blog/: legacy card layout is still present');
}

const projectsHtml = readFileSync(join(dist, 'projects', 'index.html'), 'utf8');
for (const requiredClass of [
  'project-index-summary',
  'count-list',
  'summary-tag-list',
  'project-row',
]) {
  if (!projectsHtml.includes(`class="${requiredClass}`)) {
    failures.push(`/projects/: missing ${requiredClass}`);
  }
}
if (projectsHtml.includes('project-card')) {
  failures.push('/projects/: legacy card layout is still present');
}

if (failures.length > 0) {
  console.error('UI contract failures:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Checked ${htmlFiles.length} HTML files: layout, navigation, controls, and project routing are consistent.`,
);
