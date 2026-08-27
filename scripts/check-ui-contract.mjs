import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(root, 'dist');
const expectedNavigation = ['/', '/publications/', '/blog/', '/projects/'];
const expectedProfileLinks = [
  'mailto:jayliu9218@gmail.com',
  'https://github.com/Jayliu9218',
  'https://scholar.google.com/citations?user=Q-i6GPwAAAAJ',
  'https://orcid.org/0009-0001-3925-2219',
  '/resume-en.pdf',
  '/resume-zh_CN.pdf',
];
const expectedProjectLinks = [
  'https://github.com/Jayliu9218/personal-website',
  'https://github.com/Jayliu9218/py4DSTEM-pipeline',
  'https://github.com/Jayliu9218/couple-memory',
  'https://github.com/Jayliu9218/phase_orientation_screening',
  'https://github.com/Jayliu9218/large-4dstem-analysis',
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
const baseCss = readFileSync(join(root, 'src', 'styles', 'base.css'), 'utf8');

if (!/scrollbar-gutter\s*:\s*stable/.test(baseCss)) {
  failures.push(
    'shared layout must reserve the vertical scrollbar gutter to prevent navigation layout shifts',
  );
}

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

  if (!html.includes('data-menu-toggle')) {
    failures.push(`${route}: mobile menu control is missing`);
  }

  for (const removedFeature of [
    'data-theme-toggle',
    'data-language-toggle',
    'data-i18n-',
    'data-theme=',
  ]) {
    if (html.includes(removedFeature)) {
      failures.push(`${route}: removed UI feature remains: ${removedFeature}`);
    }
  }
}

const homeHtml = readFileSync(join(dist, 'index.html'), 'utf8');
for (const section of [
  'profile',
  'about',
  'focus',
  'news',
  'publications',
  'education',
]) {
  if (!homeHtml.includes(`data-home-section="${section}"`)) {
    failures.push(`/: homepage is missing the ${section} section`);
  }
}

const contactHtml = homeHtml.match(
  /<nav\b[^>]*id=["']contact-links["'][^>]*>([\s\S]*?)<\/nav>/i,
)?.[1];
const contactLinks = [
  ...(contactHtml?.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi) ?? []),
].map((match) => match[1]);

if (JSON.stringify(contactLinks) !== JSON.stringify(expectedProfileLinks)) {
  failures.push('/: homepage contact links are incomplete or out of order');
}
if (
  !contactHtml?.includes('class="profile-email"') ||
  !contactHtml.includes('jayliu9218@gmail.com')
) {
  failures.push('/: email address must be visible on its own profile line');
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const route = routeForHtml(file);
  if (html.includes('class="site-footer"')) {
    failures.push(`${route}: removed footer remains`);
  }
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
  !blogHtml.includes('class="document-list collection-card"') ||
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
  'collection-heading',
  'project-card-grid',
  'project-card',
  'project-building-badge',
  'project-github-link',
]) {
  if (!projectsHtml.includes(`class="${requiredClass}`)) {
    failures.push(`/projects/: missing ${requiredClass}`);
  }
}
if (
  !projectsHtml.includes('data-project-building') ||
  !projectsHtml.includes('On building')
) {
  failures.push('/projects/: missing the On building page status');
}

const projectCardAnchors = [
  ...projectsHtml.matchAll(
    /<a\b[^>]*class=["'][^"']*\bproject-card\b[^"']*["'][^>]*>/gi,
  ),
].map(([tag]) => ({
  href: attribute(tag, 'href'),
  target: attribute(tag, 'target'),
  rel: attribute(tag, 'rel')?.split(/\s+/) ?? [],
}));

if (
  JSON.stringify(projectCardAnchors.map((anchor) => anchor.href)) !==
  JSON.stringify(expectedProjectLinks)
) {
  failures.push('/projects/: repository cards are incomplete or out of order');
}
for (const anchor of projectCardAnchors) {
  if (
    anchor.target !== '_blank' ||
    !anchor.rel.includes('noopener') ||
    !anchor.rel.includes('noreferrer')
  ) {
    failures.push(
      `/projects/: ${anchor.href} must open safely in a new browser tab`,
    );
  }
}

for (const removedProject of [
  'Inspiration Flow',
  'Medical Study',
  'CFD Learning Path',
  'Build of Thermal Loop',
  'Jayliu9218.github.io',
]) {
  if (projectsHtml.includes(removedProject)) {
    failures.push(`/projects/: removed project remains: ${removedProject}`);
  }
}

const projectOutputEntries = readdirSync(join(dist, 'projects'), {
  withFileTypes: true,
});
if (projectOutputEntries.some((entry) => entry.isDirectory())) {
  failures.push(
    '/projects/: removed project detail routes remain in the build',
  );
}
const publicationsHtml = readFileSync(
  join(dist, 'publications', 'index.html'),
  'utf8',
);
for (const requiredClass of [
  'collection-shell publications-shell',
  'collection-years publication-years',
  'publication-year-group',
  'publication-item',
]) {
  if (!publicationsHtml.includes(`class="${requiredClass}`)) {
    failures.push(`/publications/: missing ${requiredClass}`);
  }
}

if (!homeHtml.includes('class="publication-list compact-publications"')) {
  failures.push('/: selected publications are missing');
}

if (failures.length > 0) {
  console.error('UI contract failures:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `Checked ${htmlFiles.length} HTML files: layout, navigation, single-language UI, academic sections, and content routing are consistent.`,
);
