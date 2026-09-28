#!/usr/bin/env node
// Pre-renders every page in every language into public/ from the templates in
// site/ and the language files in site/locales/<lang>/.
//
//   npm run build        write the pages, sitemap.xml, _redirects and llms.txt
//   npm run build:check  fail if the committed files are out of date
//
// Search engines and visitors get complete pages in the right language, each
// language has its own URL (/fi/, /sv/, ...) and every page lists all of its
// language versions with hreflang links.
//
// Templates use {{key}} for text, which is HTML-escaped, and {{{key}}} for
// trusted HTML. A missing key fails the build.
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public');
const siteDir = path.join(repoRoot, 'site');

const ORIGIN = 'https://costsimulators.com';
const SITE_NAME = 'costsimulators.com';
const REPO_URL = 'https://github.com/timoheimonen/costsimulators.com';
const AUTHOR = {
  name: 'Timo Heimonen',
  email: 'timo.heimonen@proton.me',
  sameAs: ['https://github.com/timoheimonen']
};

// English stays at the root and is the x-default version. Every other
// language lives under /<code>/ and needs a site/locales/<code>/ folder with
// the same files and keys as site/locales/en/. The order is the order of the
// language menu.
const LANGUAGES = ['en', 'de', 'fi'];

// BCP 47 tags for <html lang>, hreflang, the sitemap and structured data,
// where they differ from the lower-case code used in the path.
const LANGUAGE_TAGS = { 'zh-hant': 'zh-Hant' };

// Slugs stay in English in every language, so a page has the same path in
// every language apart from the language prefix. `legacy` is the old address
// that now redirects to the page.
const TOOLS = [
  { key: 'meetings', slug: 'meeting-cost-calculator', legacy: 'meetings/meetings', scripts: ['timer'] },
  { key: 'workhours', slug: 'work-hours-calculator', legacy: 'workhours/workhours' },
  { key: 'coffee', slug: 'coffee-cost-calculator', legacy: 'coffee/coffee' },
  { key: 'smoking', slug: 'smoking-cost-calculator', legacy: 'smoking/smoking' },
  { key: 'subscriptions', slug: 'subscription-cost-calculator', legacy: 'subscriptions/subscriptions' },
  { key: 'electricity', slug: 'electricity-cost-calculator', legacy: 'electricity/electricity' },
  { key: 'trip', slug: 'trip-cost-calculator', legacy: 'trip/trip' }
];

const DOCUMENTS = [
  { key: 'about', slug: 'about', legacy: 'about' },
  { key: 'privacy', slug: 'privacy', legacy: 'privacy' },
  { key: 'terms', slug: 'terms', legacy: 'terms' }
];

const PAGES = [
  { key: 'home', slug: '', template: 'home' },
  ...TOOLS.map(tool => ({ ...tool, template: tool.key, tool: true })),
  ...DOCUMENTS.map(doc => ({ ...doc, template: 'document', document: true }))
];

// Served by Cloudflare for unknown addresses (not_found_handling in
// wrangler.jsonc): /fi/404.html under /fi/, /404.html everywhere else.
const NOT_FOUND = { key: 'notFound', slug: '', template: 'not-found', file: '404.html' };

// Keys the build adds to every template context. Language files must not use them.
const GENERATED_KEYS = [
  'lang', 'url', 'current', 'tool', 'page', 'icon', 'head', 'i18nScript', 'scripts',
  'langMenu', 'main', 'content', 'toolCards', 'toolCount', 'toolInfo', 'homeFaq'
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function indent(text, spaces) {
  const pad = ' '.repeat(spaces);
  return text.split('\n').map(line => (line ? pad + line : line)).join('\n');
}

function jsonLd(data) {
  const json = JSON.stringify(data, null, 4).replace(/</g, '\\u003c');
  return `    <script type="application/ld+json">\n${indent(json, 4)}\n    </script>`;
}

function lookup(object, key) {
  return key.split('.').reduce((value, part) => (value == null ? undefined : value[part]), object);
}

function render(template, context, name) {
  return template.replace(/\{\{\{\s*([\w.]+)\s*\}\}\}|\{\{\s*([\w.]+)\s*\}\}/g, (match, rawKey, textKey) => {
    const key = rawKey || textKey;
    const value = lookup(context, key);
    if (typeof value !== 'string' && typeof value !== 'number') {
      throw new Error(`${name}: missing value for ${match}`);
    }
    return rawKey ? String(value) : escapeHtml(value);
  });
}

function readSite(file) {
  return fs.readFileSync(path.join(siteDir, file), 'utf8');
}

function loadLocale(lang) {
  const file = path.join(siteDir, 'locales', lang, 'strings.js');
  delete require.cache[require.resolve(file)];
  const strings = require(file);

  for (const key of GENERATED_KEYS) {
    if (key in strings) throw new Error(`site/locales/${lang}/strings.js must not define "${key}"`);
  }

  const documents = {};
  for (const doc of DOCUMENTS) {
    documents[doc.key] = fs.readFileSync(path.join(siteDir, 'locales', lang, `${doc.key}.html`), 'utf8');
  }
  return { lang, strings, documents };
}

function languageTag(lang) {
  return LANGUAGE_TAGS[lang] || lang;
}

function htmlLang(locale) {
  return languageTag(locale.lang);
}

function pagePath(lang, page) {
  const prefix = lang === 'en' ? '/' : `/${lang}/`;
  return page.slug ? `${prefix}${page.slug}/` : prefix;
}

function pageUrl(lang, page) {
  return `${ORIGIN}${pagePath(lang, page)}`;
}

function outputFile(lang, page) {
  if (page.file) {
    return path.join(publicDir, lang === 'en' ? '' : lang, page.file);
  }
  return path.join(publicDir, pagePath(lang, page), 'index.html');
}

function pageStrings(locale, page) {
  if (page.tool) return locale.strings.tools[page.key];
  if (page.document) return locale.strings.documents[page.key];
  return locale.strings[page.key];
}

function urls(lang) {
  const result = {};
  for (const page of PAGES) result[page.key] = pagePath(lang, page);
  return result;
}

function renderHead(locales, locale, page, strings) {
  const { lang } = locale;
  const meta = locale.strings.meta;
  const indexable = !page.file;
  const canonical = pageUrl(lang, page);
  const title = escapeHtml(strings.title);
  const description = escapeHtml(strings.description);
  const image = `${ORIGIN}${pagePath(lang, PAGES[0])}og-image.png`;
  const lines = [
    `    <title>${title}</title>`,
    `    <meta name="description" content="${description}">`,
    `    <meta name="robots" content="${indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow'}">`
  ];

  if (indexable) {
    lines.push(`    <link rel="canonical" href="${canonical}">`);
    for (const other of locales) {
      lines.push(`    <link rel="alternate" hreflang="${htmlLang(other)}" href="${pageUrl(other.lang, page)}">`);
    }
    lines.push(`    <link rel="alternate" hreflang="x-default" href="${pageUrl('en', page)}">`);
  }

  lines.push(
    `    <meta property="og:type" content="website">`,
    `    <meta property="og:site_name" content="${SITE_NAME}">`,
    `    <meta property="og:title" content="${title}">`,
    `    <meta property="og:description" content="${description}">`,
    `    <meta property="og:url" content="${canonical}">`,
    `    <meta property="og:image" content="${image}">`,
    `    <meta property="og:image:width" content="1200">`,
    `    <meta property="og:image:height" content="630">`,
    `    <meta property="og:image:alt" content="${escapeHtml(locale.strings.common.imageAlt)}">`,
    `    <meta property="og:locale" content="${meta.ogLocale}">`
  );
  for (const other of locales) {
    if (other !== locale) lines.push(`    <meta property="og:locale:alternate" content="${other.strings.meta.ogLocale}">`);
  }
  lines.push(
    `    <meta name="twitter:card" content="summary_large_image">`,
    `    <meta name="twitter:title" content="${title}">`,
    `    <meta name="twitter:description" content="${description}">`,
    `    <meta name="twitter:image" content="${image}">`
  );

  if (indexable) lines.push(jsonLd(structuredData(locale, page, strings)));
  return lines.join('\n');
}

// One JSON-LD graph per page: the site, its author, the page itself with its
// breadcrumb and, depending on the page, the calculator, the FAQ or the list
// of tools.
function structuredData(locale, page, strings) {
  const { lang } = locale;
  const s = locale.strings;
  const inLanguage = htmlLang(locale);
  const url = pageUrl(lang, page);
  const homeUrl = pageUrl('en', PAGES[0]);
  const websiteId = `${homeUrl}#website`;
  const authorId = `${homeUrl}#author`;
  const graph = [];

  const webPage = {
    '@type': page.key === 'about' ? 'AboutPage' : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: strings.title,
    description: strings.description,
    inLanguage,
    isPartOf: { '@id': websiteId }
  };
  graph.push(webPage);

  if (page.key === 'home') {
    webPage.about = { '@id': websiteId };
    webPage.mainEntity = { '@id': `${url}#tools` };
  } else {
    webPage.breadcrumb = { '@id': `${url}#breadcrumb` };
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: s.common.home, item: pageUrl(lang, PAGES[0]) },
        { '@type': 'ListItem', position: 2, name: strings.heading || strings.name, item: url }
      ]
    });
  }

  graph.push(
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: homeUrl,
      name: SITE_NAME,
      description: s.home.description,
      inLanguage: LANGUAGES.map(languageTag),
      publisher: { '@id': authorId }
    },
    {
      '@type': 'Person',
      '@id': authorId,
      name: AUTHOR.name,
      email: `mailto:${AUTHOR.email}`,
      url: pageUrl('en', DOCUMENTS[0]),
      sameAs: AUTHOR.sameAs
    }
  );

  if (page.key === 'home' || page.key === 'about') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#tools`,
      name: s.home.toolsTitle,
      numberOfItems: TOOLS.length,
      itemListElement: TOOLS.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: s.tools[tool.key].name,
        url: pageUrl(lang, tool)
      }))
    });
    if (page.key === 'about') webPage.mainEntity = { '@id': `${url}#tools` };
  }

  if (page.tool) {
    webPage.mainEntity = { '@id': `${url}#app` };
    graph.push({
      '@type': 'WebApplication',
      '@id': `${url}#app`,
      name: strings.heading,
      url,
      description: strings.description,
      inLanguage,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: 0, priceCurrency: s.meta.currency },
      author: { '@id': authorId },
      isPartOf: { '@id': websiteId }
    });
  }

  const faq = page.tool ? strings.faq : page.key === 'home' ? strings.faq : null;
  if (faq) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage,
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

// A long list is shown in two columns of `--rows` languages, see .lang-list
// in public/css/main.css.
function renderLangMenu(locales, locale, page) {
  const current = locale.strings.meta;
  const rows = locales.length > 8 ? Math.ceil(locales.length / 2) : locales.length;
  const items = locales.map(other => {
    const selected = other === locale ? ' aria-current="true"' : '';
    return `                    <li><a href="${pagePath(other.lang, page)}" hreflang="${htmlLang(other)}" lang="${htmlLang(other)}"${selected}>${escapeHtml(other.strings.meta.name)}</a></li>`;
  }).join('\n');

  const long = locale.lang.length > 2 ? ' lang-toggle--long' : '';

  return `            <details class="lang-menu" data-lang-menu>
                <summary class="icon-btn lang-toggle${long}" aria-label="${escapeHtml(locale.strings.common.language)}: ${escapeHtml(current.name)}">
                    <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
                    <span class="lang-code" aria-hidden="true">${escapeHtml(locale.lang.toUpperCase())}</span>
                </summary>
                <ul class="lang-list" role="list" style="--rows: ${rows}">
${items}
                </ul>
            </details>`;
}

// Interface strings for the page scripts, read by js/core.js.
function renderRuntime(locale, page) {
  const s = locale.strings;
  const strings = { ...s.runtime };
  if (page.tool) {
    const own = s.tools[page.key].runtime || {};
    for (const key of Object.keys(own)) {
      if (key in strings) throw new Error(`${locale.lang}: runtime key "${key}" of ${page.key} is also a shared runtime key`);
      strings[key] = own[key];
    }
  }
  const data = { locale: s.meta.locale, currency: s.meta.currency, decimals: Number(s.money.decimals), strings };
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return `    <script type="application/json" id="i18n">${json}</script>`;
}

function renderScripts(page) {
  if (!page.tool) return '';
  const scripts = ['core', ...(page.scripts || []), 'ui', `tools/${page.key}`];
  return scripts.map(name => `    <script src="/js/${name}.js" defer></script>`).join('\n');
}

function renderToolCards(locale, lang) {
  const s = locale.strings;
  return TOOLS.map((tool, index) => {
    const t = s.tools[tool.key];
    return `                <li class="reveal" style="--i: ${index + 2}">
                    <a class="tool-card tool--${tool.key}" href="${pagePath(lang, tool)}">
                        <span class="tool-icon" aria-hidden="true">
                            ${readIcon(tool.key)}
                        </span>
                        <span>
                            <h3>${escapeHtml(t.name)}</h3>
                            <p>${escapeHtml(t.card)}</p>
                        </span>
                        <span class="tool-card-foot">
                            <span class="tag">${escapeHtml(t.tag)}</span>
                            <svg class="icon tool-card-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                        </span>
                    </a>
                </li>`;
  }).join('\n');
}

function renderFaq(title, items) {
  const entries = items.map(item => `            <details class="faq-item">
                <summary>${escapeHtml(item.q)}</summary>
                <p>${escapeHtml(item.a)}</p>
            </details>`).join('\n');

  return `        <section class="info-section reveal" aria-labelledby="faqTitle">
            <h2 class="info-title" id="faqTitle">${escapeHtml(title)}</h2>
            <div class="faq-list">
${entries}
            </div>
        </section>`;
}

// Explanation, FAQ and links to the other tools below every calculator. The
// text is what search engines can rank the page for; the calculator alone is
// mostly form fields.
function renderToolInfo(locale, page) {
  const s = locale.strings;
  const t = s.tools[page.key];
  const paragraphs = t.about.paragraphs.map(text => `            <p>${escapeHtml(text)}</p>`).join('\n');
  const related = TOOLS.filter(tool => tool.key !== page.key).map(tool => `                <li>
                    <a class="related-tool tool--${tool.key}" href="${pagePath(locale.lang, tool)}">
                        <span class="tool-icon" aria-hidden="true">
                            ${readIcon(tool.key)}
                        </span>
                        <span>${escapeHtml(s.tools[tool.key].name)}</span>
                    </a>
                </li>`).join('\n');

  return `        <section class="info-section info-prose reveal" aria-labelledby="aboutTitle">
            <h2 class="info-title" id="aboutTitle">${escapeHtml(t.about.title)}</h2>
${paragraphs}
        </section>

${renderFaq(s.common.faqTitle, t.faq)}

        <nav class="info-section reveal" aria-labelledby="relatedTitle">
            <h2 class="info-title" id="relatedTitle">${escapeHtml(s.common.relatedTools)}</h2>
            <ul class="related-tools" role="list">
${related}
            </ul>
        </nav>`;
}

const iconCache = new Map();
function readIcon(key) {
  if (!iconCache.has(key)) iconCache.set(key, readSite(`icons/${key}.svg`).trim());
  return iconCache.get(key);
}

function renderPage(layout, locales, locale, page) {
  const { lang, strings: s } = locale;
  const strings = pageStrings(locale, page);
  const current = {};
  for (const other of PAGES) current[other.key] = other === page ? ' aria-current="page"' : '';

  const context = {
    ...s,
    home: { ...s.home, toolCount: s.home.toolCount.replace('{count}', TOOLS.length) },
    lang: htmlLang(locale),
    url: urls(lang),
    current,
    page: strings,
    tool: page.tool ? strings : {},
    icon: page.tool ? readIcon(page.key) : '',
    toolCards: page.key === 'home' ? renderToolCards(locale, lang) : '',
    toolCount: TOOLS.length,
    toolInfo: page.tool ? renderToolInfo(locale, page) : '',
    homeFaq: page.key === 'home' ? renderFaq(s.common.faqTitle, strings.faq) : ''
  };

  const name = `${lang}/${page.template}`;
  context.content = page.document ? render(locale.documents[page.key], context, `${lang}/${page.key}.html`) : '';
  context.main = render(readSite(`pages/${page.template}.html`), context, name);
  context.head = renderHead(locales, locale, page, strings);
  context.i18nScript = page.tool ? renderRuntime(locale, page) : '';
  context.scripts = renderScripts(page);
  context.langMenu = renderLangMenu(locales, locale, page.file ? PAGES[0] : page);

  return render(layout, context, name)
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\n\n(\s*<\/head>)/, '\n$1');
}

function renderSitemap(locales) {
  const entries = PAGES.flatMap(page => locales.map(locale => {
    const alternates = locales
      .map(other => `    <xhtml:link rel="alternate" hreflang="${htmlLang(other)}" href="${pageUrl(other.lang, page)}"/>`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl('en', page)}"/>`)
      .join('\n');
    return `  <url>
    <loc>${pageUrl(locale.lang, page)}</loc>
${alternates}
  </url>`;
  }));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
}

// Permanent redirects from the old .html addresses. Cloudflare also served
// them without the extension, so both forms are covered.
function renderRedirects() {
  const lines = ['# Generated by scripts/build-site.js. Old addresses redirect to the current pages.'];
  for (const page of PAGES) {
    if (!page.legacy) continue;
    const target = pagePath('en', page);
    lines.push(`/${page.legacy}.html ${target} 301`);
    lines.push(`/${page.legacy} ${target} 301`);
  }
  lines.push('/index.html / 301');
  return `${lines.join('\n')}\n`;
}

// A plain-text summary of the site for AI assistants and answer engines
// (https://llmstxt.org).
function renderLlmsTxt(locales) {
  const en = locales.find(locale => locale.lang === 'en').strings;
  const tools = TOOLS.map(tool => `- [${en.tools[tool.key].heading}](${pageUrl('en', tool)}): ${en.tools[tool.key].description}`);
  const languages = locales.filter(locale => locale.lang !== 'en')
    .map(locale => `- ${locale.strings.meta.name}: ${pageUrl(locale.lang, PAGES[0])}`);

  return `# ${SITE_NAME}

> ${en.home.description}

All calculators are free, need no account and run entirely in the browser. Nothing that is entered is sent to a server. Settings are kept in the page address, so a calculation can be shared as a link.

## Calculators

${tools.join('\n')}

## Languages

${languages.length ? languages.join('\n') : '- English only'}

## About

- [About](${pageUrl('en', DOCUMENTS[0])}): who makes the site and how the calculators work
- [Privacy policy](${pageUrl('en', DOCUMENTS[1])})
- [Terms of use](${pageUrl('en', DOCUMENTS[2])})
- [Source code](${REPO_URL}): MIT License
`;
}

// Returns every generated file as an absolute path mapped to its contents.
function buildSite() {
  const layout = readSite('layout.html');
  const locales = LANGUAGES.map(loadLocale);
  const files = new Map();

  for (const locale of locales) {
    for (const page of [...PAGES, NOT_FOUND]) {
      files.set(outputFile(locale.lang, page), renderPage(layout, locales, locale, page));
    }
  }

  files.set(path.join(publicDir, 'sitemap.xml'), renderSitemap(locales));
  files.set(path.join(publicDir, '_redirects'), renderRedirects());
  files.set(path.join(publicDir, 'llms.txt'), renderLlmsTxt(locales));
  return files;
}

function main() {
  const check = process.argv.includes('--check');
  const files = buildSite();
  const stale = [];

  for (const [file, contents] of files) {
    const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
    if (current === contents) continue;

    if (check) {
      stale.push(path.relative(repoRoot, file));
    } else {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, contents);
    }
  }

  if (check && stale.length) {
    console.error(`Generated files are out of date. Run "npm run build".\n${stale.join('\n')}`);
    process.exit(1);
  }

  console.log(check ? `${files.size} generated files are up to date.` : `Generated ${files.size} files.`);
}

if (require.main === module) {
  main();
}

module.exports = {
  LANGUAGES, TOOLS, DOCUMENTS, PAGES, ORIGIN,
  buildSite, languageTag, loadLocale, pagePath, pageUrl, readIcon, render
};
