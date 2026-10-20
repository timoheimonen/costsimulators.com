// Checks the generated site: every language is complete, the committed pages
// match the sources, and every page has the SEO metadata and working links.
//
//   npm test
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const {
  LANGUAGES, TOOLS, PAGES, ORIGIN, buildSite, languageTag, loadLocale, pagePath, pageTitle, pageUrl, textWidth
} = require('../scripts/build-site');
const SITE_NAME = 'costsimulators.com';

const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public');
const locales = LANGUAGES.map(loadLocale);
const files = buildSite();

// Chinese, Japanese and Korean say the same in far fewer characters, and
// search results show fewer of them, so their descriptions are shorter.
const DESCRIPTION_LENGTH = { default: [70, 200], cjk: [30, 120] };
const CJK = ['zh', 'zh-hant', 'ja', 'ko'];
const PLURAL_CATEGORIES = ['zero', 'one', 'two', 'few', 'many', 'other'];

function readPage(lang, page) {
  return fs.readFileSync(path.join(publicDir, pagePath(lang, page), 'index.html'), 'utf8');
}

// Key paths of an object; arrays count as one value, so their length may
// differ between languages. So do plural strings, since languages need
// different forms ({ one, other } in English, { one, few, many, other } in
// Polish).
function keyPaths(object, prefix = '') {
  return Object.entries(object).flatMap(([key, value]) => (
    value && typeof value === 'object' && !Array.isArray(value) && !isPlural(value)
      ? keyPaths(value, `${prefix}${key}.`)
      : [`${prefix}${key}`]
  ));
}

function isPlural(value) {
  const keys = Object.keys(value);
  return keys.includes('other') && keys.every(name => PLURAL_CATEGORIES.includes(name));
}

function lookup(object, key) {
  return key.split('.').reduce((value, part) => (value == null ? undefined : value[part]), object);
}

// Objects such as { one: '{n} day', other: '{n} days' } in the runtime strings.
function pluralObjects(object, prefix = '') {
  return Object.entries(object).flatMap(([key, value]) => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return [];
    if (isPlural(value)) return [[`${prefix}${key}`, value]];
    return pluralObjects(value, `${prefix}${key}.`);
  });
}

// A regional version such as en-GB shares most of its texts with the main
// version of its language (en), so it may repeat its titles on the same page.
function mainLanguage(lang) {
  const locale = new Intl.Locale(languageTag(lang));
  return locale.region ? locale.language : lang;
}

// Runs js/lang.js on the English home page with the given browser languages
// and returns the address it sends the visitor to, or null if it stays.
function redirectFor(languages, stored = null) {
  const html = readPage('en', PAGES[0]);
  const links = new Map([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)">/g)]
    .map(match => [match[1], match[2]]));
  let target = null;
  const context = {
    URL,
    navigator: { languages },
    localStorage: { getItem: () => stored, setItem() {} },
    location: { href: `${ORIGIN}/`, pathname: '/', search: '', hash: '', replace(url) { target = url; } },
    document: {
      documentElement: { lang: 'en' },
      addEventListener() {},
      querySelector(selector) {
        const href = links.get(selector.match(/hreflang="([^"]+)"/)[1]);
        return href ? { getAttribute: () => href } : null;
      }
    }
  };
  vm.runInNewContext(fs.readFileSync(path.join(publicDir, 'js', 'lang.js'), 'utf8'), context);
  return target;
}

function sameSpaces(text) {
  return text.replace(/[\s\u00a0\u202f]/g, ' ');
}

// Runs js/ui.js on a stepper field with the given value, step and limits,
// presses the arrow keys and returns the value shown after each press.
function stepThrough({ value, step, min = null, max = null }, keys) {
  const listeners = {};
  const limits = { min, max };
  const input = {
    value,
    getAttribute: name => limits[name],
    addEventListener(type, listener) { listeners[type] = listener; },
    dispatchEvent() {}
  };
  const stepper = { dataset: { step }, querySelector: () => input, querySelectorAll: () => [] };
  const window = { matchMedia: () => ({ matches: false }) };
  vm.runInNewContext(fs.readFileSync(path.join(publicDir, 'js', 'ui.js'), 'utf8'), { window, Event });
  window.CostSimulators.UI.bindSteppers({ querySelectorAll: () => [stepper] });
  return keys.map(key => {
    listeners.keydown({ key, shiftKey: false, preventDefault() {} });
    return input.value;
  });
}

function localAssetPath(url) {
  const clean = url.split(/[?#]/)[0];
  const file = path.join(publicDir, clean);
  return clean.endsWith('/') ? path.join(file, 'index.html') : file;
}

test('every language has the same keys as English', () => {
  const english = keyPaths(locales[0].strings).sort();
  for (const locale of locales.slice(1)) {
    assert.deepEqual(keyPaths(locale.strings).sort(), english, `site/locales/${locale.lang}/strings.js`);
  }
});

test('FAQ and explanation texts are present for every tool in every language', () => {
  for (const { lang, strings } of locales) {
    for (const tool of TOOLS) {
      const t = strings.tools[tool.key];
      assert.ok(t.faq.length >= 3, `${lang} ${tool.key} needs at least 3 FAQ items`);
      assert.ok(t.about.paragraphs.length >= 2, `${lang} ${tool.key} needs an explanation`);
      for (const item of t.faq) assert.ok(item.q && item.a, `${lang} ${tool.key} FAQ item is incomplete`);
    }
  }
});

test('language tags are valid BCP 47 and match the locale', () => {
  for (const { lang, strings } of locales) {
    const tag = languageTag(lang);
    assert.equal(Intl.getCanonicalLocales(tag)[0], tag, `${lang}: ${tag}`);
    assert.equal(Intl.getCanonicalLocales(strings.meta.locale)[0], strings.meta.locale, `${lang}: meta.locale`);
    assert.match(strings.meta.ogLocale, /^[a-z]{2,3}_[A-Z]{2}$/, `${lang}: meta.ogLocale`);
  }
});

test('plural strings have every form the language needs', () => {
  for (const { lang, strings } of locales) {
    const needed = new Intl.PluralRules(strings.meta.locale).resolvedOptions().pluralCategories;
    const runtimes = [['runtime', strings.runtime], ...TOOLS.map(tool => [`tools.${tool.key}.runtime`, strings.tools[tool.key].runtime || {}])];
    for (const [prefix, runtime] of runtimes) {
      for (const [key, forms] of pluralObjects(runtime, `${prefix}.`)) {
        for (const category of needed) assert.equal(typeof forms[category], 'string', `${lang}: ${key}.${category}`);
      }
    }
  }
});

test('money placeholders match how the page scripts format amounts', () => {
  for (const { lang, strings } of locales) {
    const decimals = Number(strings.money.decimals);
    assert.ok(Number.isInteger(decimals) && decimals >= 0 && decimals <= 2, `${lang}: money.decimals`);
    const zero = new Intl.NumberFormat(strings.meta.locale, {
      style: 'currency',
      currency: strings.meta.currency,
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(0);
    assert.equal(sameSpaces(strings.money.zero), sameSpaces(zero), `${lang}: money.zero`);
  }
});

test('currency-dependent settings are positive numbers', () => {
  for (const { lang, strings } of locales) {
    const t = strings.tools;
    const settings = {
      'meetings.pulseEvery': t.meetings.pulseEvery,
      'meetings.rate.step': t.meetings.rate.step,
      'workhours.pay.step': t.workhours.pay.step,
      'workhours.pay.monthStep': t.workhours.pay.monthStep,
      'workhours.pay.yearStep': t.workhours.pay.yearStep,
      'workhours.price.step': t.workhours.price.step,
      'workhours.hoursPerWeek.preset1': t.workhours.hoursPerWeek.preset1,
      'workhours.hoursPerWeek.preset2': t.workhours.hoursPerWeek.preset2,
      'costperuse.price.step': t.costperuse.price.step,
      'costperuse.price.value': t.costperuse.price.value,
      'coffee.price.step': t.coffee.price.step,
      'smoking.packPrice.step': t.smoking.packPrice.step,
      'smoking.perPack.value': t.smoking.perPack.value,
      'alcohol.price.step': t.alcohol.price.step,
      'alcohol.price.value': t.alcohol.price.value,
      'gambling.stake.step': t.gambling.stake.step,
      'gambling.stake.value': t.gambling.stake.value,
      'electricity.kwhPrice.step': t.electricity.kwhPrice.step,
      'electricity.kwhPrice.divisor': t.electricity.kwhPrice.divisor,
      'trip.fuelPrice.step': t.trip.fuelPrice.step,
      'trip.fuelPrice.usStep': t.trip.fuelPrice.usStep
    };
    for (const [key, value] of Object.entries(settings)) {
      assert.match(value, /^\d+(\.\d+)?$/, `${lang}: ${key}`);
      assert.ok(Number(value) > 0, `${lang}: ${key}`);
    }
  }
});

test('committed pages are up to date with site/', () => {
  const stale = [...files].filter(([file, contents]) => (
    !fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== contents
  )).map(([file]) => path.relative(repoRoot, file));
  assert.deepEqual(stale, [], 'Run "npm run build"');
});

test('generated files have no unfilled placeholders', () => {
  for (const [file, contents] of files) {
    assert.doesNotMatch(contents, /\{\{\{?\s*[\w.]+\s*\}?\}\}/, path.relative(repoRoot, file));
  }
});

test('every page has its language, canonical URL and hreflang alternates', () => {
  for (const { lang } of locales) {
    for (const page of PAGES) {
      const html = readPage(lang, page);
      const name = pagePath(lang, page);

      assert.ok(html.includes(`<html lang="${languageTag(lang)}">`), `${name} html lang`);
      assert.ok(html.includes(`<link rel="canonical" href="${pageUrl(lang, page)}">`), `${name} canonical`);
      for (const other of LANGUAGES) {
        assert.ok(
          html.includes(`<link rel="alternate" hreflang="${languageTag(other)}" href="${pageUrl(other, page)}">`),
          `${name} hreflang ${languageTag(other)}`
        );
      }
      assert.ok(
        html.includes(`<link rel="alternate" hreflang="x-default" href="${pageUrl('en', page)}">`),
        `${name} x-default`
      );
      assert.match(html, /<meta name="robots" content="index, follow/, name);
    }
  }
});

test('translated privacy and terms pages say that the English version prevails', () => {
  for (const { lang, documents } of locales.slice(1)) {
    for (const doc of ['privacy', 'terms']) {
      assert.match(documents[doc], new RegExp(`class="legal-meta legal-translation">[^\\n]*<a href="/${doc}/" hreflang="en">`), `${lang}/${doc}.html`);
    }
  }
});

test('titles fit in search results', () => {
  for (const { lang, strings } of locales) {
    const titles = [
      strings.home.title,
      strings.notFound.title,
      ...Object.values(strings.tools).map(tool => tool.title),
      ...Object.values(strings.documents).map(doc => doc.title)
    ];
    for (const title of titles) {
      assert.ok(!title.endsWith(`| ${SITE_NAME}`), `${lang}: leave the site name out of "${title}", the build adds it`);
      assert.ok(textWidth(title) <= 60, `${lang}: "${title}" is too long for search results`);
      assert.ok(textWidth(pageTitle(title)) <= 65, `${lang}: "${pageTitle(title)}"`);
    }
  }
});

test('titles and descriptions are unique and of a sensible length', () => {
  const seen = new Map();
  for (const { lang } of locales) {
    for (const page of PAGES) {
      const html = readPage(lang, page);
      const title = html.match(/<title>([^<]+)<\/title>/)[1];
      const description = html.match(/<meta name="description" content="([^"]+)">/)[1];
      const name = pagePath(lang, page);

      const [min, max] = DESCRIPTION_LENGTH[CJK.includes(lang) ? 'cjk' : 'default'];
      assert.ok(description.length >= min && description.length <= max, `${name} description is ${description.length} characters`);
      for (const value of [title, description]) {
        const other = seen.get(value);
        const variant = other && other.key === page.key && mainLanguage(other.lang) === mainLanguage(lang);
        assert.ok(!other || variant, `${name} repeats "${value}" from ${other && other.name}`);
        if (!other) seen.set(value, { name, lang, key: page.key });
      }
    }
  }
});

test('structured data is valid JSON with the expected types', () => {
  for (const { lang } of locales) {
    for (const page of PAGES) {
      const html = readPage(lang, page);
      const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      assert.equal(blocks.length, 1, pagePath(lang, page));

      const types = JSON.parse(blocks[0][1])['@graph'].map(node => node['@type']);
      assert.ok(types.includes('WebSite'), pagePath(lang, page));
      if (page.tool) {
        assert.ok(types.includes('WebApplication') && types.includes('FAQPage') && types.includes('BreadcrumbList'), pagePath(lang, page));
      }
    }
  }
});

test('local links, scripts, styles and images point to existing files', () => {
  for (const [file, contents] of files) {
    if (!file.endsWith('.html')) continue;
    const urls = [...contents.matchAll(/\s(?:href|src)="(\/[^"]*)"/g)].map(match => match[1]);
    for (const url of urls) {
      assert.ok(fs.existsSync(localAssetPath(url)), `${path.relative(repoRoot, file)} links to missing ${url}`);
    }
    const absolute = [...contents.matchAll(/(?:href|content)="(https:\/\/costsimulators\.com\/[^"]*)"/g)].map(match => match[1]);
    for (const url of absolute) {
      assert.ok(fs.existsSync(localAssetPath(url.slice(ORIGIN.length))), `${path.relative(repoRoot, file)} links to missing ${url}`);
    }
  }
});

test('old addresses redirect to existing pages', () => {
  const redirects = fs.readFileSync(path.join(publicDir, '_redirects'), 'utf8')
    .split('\n').filter(line => line && !line.startsWith('#'));
  assert.ok(redirects.length > 0);
  for (const line of redirects) {
    const [from, to, status] = line.split(' ');
    assert.equal(status, '301', line);
    const source = localAssetPath(from);
    assert.ok(!fs.existsSync(source) || !fs.statSync(source).isFile() || from === '/index.html', `${from} still exists`);
    assert.ok(fs.existsSync(localAssetPath(to)), `${to} does not exist`);
  }
});

test('every string the page scripts ask for exists in every language', () => {
  const jsDir = path.join(publicDir, 'js');
  const keysIn = file => [...fs.readFileSync(file, 'utf8').matchAll(/\bt\('([\w.]*\w)'/g)].map(match => match[1]);
  const shared = ['core.js', 'ui.js', 'receipt.js'].flatMap(file => keysIn(path.join(jsDir, file)));

  for (const { lang, strings } of locales) {
    for (const key of shared) {
      assert.equal(typeof lookup(strings.runtime, key), 'string', `${lang}: runtime.${key}`);
    }
    for (const tool of TOOLS) {
      const runtime = { ...strings.runtime, ...strings.tools[tool.key].runtime };
      for (const key of keysIn(path.join(jsDir, 'tools', `${tool.key}.js`))) {
        assert.ok(lookup(runtime, key) !== undefined, `${lang}: ${tool.key} runtime.${key}`);
      }
    }
  }
});

test('English pages open in the version for the browser language and region', () => {
  assert.equal(redirectFor(['en-US', 'en']), null);
  assert.equal(redirectFor(['en-GB', 'en']), '/en-gb/');
  assert.equal(redirectFor(['en-AU', 'en']), null);
  assert.equal(redirectFor(['es-ES', 'es']), '/es/');
  assert.equal(redirectFor(['es-MX']), '/es-mx/');
  assert.equal(redirectFor(['es-AR', 'es']), '/es-mx/');
  assert.equal(redirectFor(['es-419']), '/es-mx/');
  assert.equal(redirectFor(['es-US']), '/es/');
  assert.equal(redirectFor(['es']), '/es/');
  assert.equal(redirectFor(['de-AT', 'de']), '/de/');
  assert.equal(redirectFor(['nb-NO']), '/no/');
  assert.equal(redirectFor(['zh-TW']), '/zh-hant/');
  assert.equal(redirectFor(['zh-Hans-HK']), '/zh/');
  assert.equal(redirectFor(['xx-YY', 'fi-FI']), '/fi/');
  assert.equal(redirectFor(['en-GB'], 'en'), null);
  assert.equal(redirectFor(['en-US'], 'es-MX'), '/es-mx/');
});

test('every language has a sharing image and a 404 page', () => {
  for (const { lang } of locales) {
    const dir = path.join(publicDir, lang === 'en' ? '' : lang);
    assert.ok(fs.existsSync(path.join(dir, 'og-image.png')), `${lang} og-image.png, run "npm run images"`);
    const notFound = fs.readFileSync(path.join(dir, '404.html'), 'utf8');
    assert.match(notFound, /<meta name="robots" content="noindex/);
  }
});

test('the sitemap lists every page in every language', () => {
  const sitemap = fs.readFileSync(path.join(publicDir, 'sitemap.xml'), 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  assert.equal(locs.length, PAGES.length * LANGUAGES.length);
  for (const { lang } of locales) {
    for (const page of PAGES) {
      assert.ok(locs.includes(pageUrl(lang, page)), pageUrl(lang, page));
      assert.ok(
        sitemap.includes(`<xhtml:link rel="alternate" hreflang="${languageTag(lang)}" href="${pageUrl(lang, page)}"/>`),
        `sitemap hreflang ${languageTag(lang)} ${pageUrl(lang, page)}`
      );
    }
  }
});

test('steppers stop at a limit without adding decimals to the value', () => {
  const down = ['ArrowDown', 'ArrowDown', 'ArrowUp'];
  // Whole-number steps (yen, won) on a price field with min="0.01" stay whole.
  assert.deepEqual(stepThrough({ value: '5000', step: '5000', min: '0.01' }, down), ['5000', '5000', '10000']);
  assert.deepEqual(stepThrough({ value: '0.2', step: '0.1', min: '0.01' }, down), ['0.1', '0.1', '0.2']);
  // A value with cents can still go down to the lowest price.
  assert.deepEqual(stepThrough({ value: '0.58', step: '0.5', min: '0.01' }, down), ['0.08', '0.01', '0.51']);
  assert.deepEqual(stepThrough({ value: '1', step: '5', min: '0' }, down), ['0', '0', '5']);
  assert.deepEqual(stepThrough({ value: '22.5', step: '1', max: '24' }, ['ArrowUp', 'ArrowUp']), ['23.5', '24']);
});
