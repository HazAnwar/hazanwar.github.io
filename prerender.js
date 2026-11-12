// Runs after `vite build`. Makes the site readable without JavaScript, for search engines, AI crawlers, recruiter
// tools and link previews:
//   1. renders the React app into dist/index.html (the browser then hydrates it),
//   2. adds JSON-LD structured data describing me,
//   3. writes llms.txt, robots.txt and sitemap.xml.
// Everything comes from src/data, the same content the page shows, so it can't drift out of sync.
import fs from 'fs';
import { fileURLToPath } from 'url';
import { PROFILE, LINKS, ABOUT, HIGHLIGHTS, EDUCATION } from './src/data/profile.js';
import { STACK } from './src/data/stack.js';
import { EXPERIENCE } from './src/data/experience.js';
import { PROJECTS } from './src/data/projects.js';

const SITE = 'https://hazanwar.github.io/';
const dist = (file) => fileURLToPath(new URL(`./dist/${file}`, import.meta.url));
const ssrEntry = new URL('./dist-ssr/entry-server.js', import.meta.url);

// 1. Pre-render the page
const { render } = await import(ssrEntry.href);
let html = fs.readFileSync(dist('index.html'), 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('prerender: <div id="root"></div> not found in dist/index.html');
html = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);

// 2. Structured data (schema.org Person)
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE}#person`,
  name: PROFILE.name,
  url: SITE,
  image: new URL(PROFILE.avatar.replace(/^\//, ''), SITE).href,
  jobTitle: PROFILE.title,
  description: PROFILE.intro,
  email: `mailto:${PROFILE.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: EDUCATION.school },
  knowsAbout: [...new Set(STACK.flatMap((group) => group.items))],
  sameAs: [LINKS.linkedin, LINKS.github, LINKS.stackoverflow, LINKS.haztech],
};
const jsonLd = `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, '\\u003c')}</script>`;
html = html.replace('</head>', `    ${jsonLd}\n  </head>`);
fs.writeFileSync(dist('index.html'), html);

// 3. llms.txt: a plain summary for AI assistants and agents (https://llmstxt.org)
const llms = [
  `# ${PROFILE.name}`,
  '',
  `> ${PROFILE.title}, London. ${PROFILE.intro}`,
  '',
  ...ABOUT.flatMap((p) => [p, '']),
  '## At a glance',
  '',
  ...HIGHLIGHTS.map((h) => `- ${h.value} ${h.label}`),
  `- ${EDUCATION.degree}, ${EDUCATION.school} (${EDUCATION.period})`,
  '',
  '## Tech stack',
  '',
  ...STACK.map((g) => `- **${g.title}:** ${g.items.join(', ')}`),
  '',
  '## Experience',
  '',
  ...EXPERIENCE.flatMap((job) => [`### ${job.role}, ${job.company} (${job.period})`, '', ...(job.summary ? [job.summary, ''] : []), ...job.points.map((p) => `- ${p}`), '']),
  '## Projects',
  '',
  ...PROJECTS.flatMap((p) => [`### [${p.name}](${p.url})`, '', `${p.kind}. ${p.desc}`, '', ...p.points.map((x) => `- ${x}`), '', `Stack: ${p.stack.join(', ')}`, '']),
  '## Contact',
  '',
  `- Email: ${PROFILE.email}`,
  `- LinkedIn: ${LINKS.linkedin}`,
  `- GitHub: ${LINKS.github}`,
  `- Website: ${SITE}`,
  '',
].join('\n');
fs.writeFileSync(dist('llms.txt'), llms);

// robots.txt: everything may crawl, AI crawlers included (being found is the point)
fs.writeFileSync(dist('robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}sitemap.xml\n`);

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  dist('sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${SITE}</loc>\n    <lastmod>${today}</lastmod>\n  </url>\n</urlset>\n`,
);

fs.rmSync(fileURLToPath(new URL('./dist-ssr', import.meta.url)), { recursive: true, force: true });
console.log('prerender: wrote index.html (pre-rendered + JSON-LD), llms.txt, robots.txt, sitemap.xml');
