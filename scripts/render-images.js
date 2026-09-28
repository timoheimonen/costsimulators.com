#!/usr/bin/env node
// Renders the social sharing images (public/og-image.png and
// public/<lang>/og-image.png) from site/og-image.html, and the home screen
// icon (public/apple-touch-icon.png) from public/favicon.svg.
//
//   npm run images
//
// Needs Playwright with Chromium, which is not a dependency of the site:
//   npm install --no-save playwright && npx playwright install chromium
// Run it after adding a language or changing the home page heading.
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { LANGUAGES, TOOLS, loadLocale, pagePath, readIcon, render } = require('./build-site');

const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public');

// Tool colours of the dark theme in public/css/main.css.
const TOOL_COLORS = {
  meetings: '134 170 255',
  workhours: '243 143 207',
  coffee: '242 172 98',
  smoking: '255 138 155',
  subscriptions: '180 156 255',
  electricity: '247 204 74',
  trip: '95 208 228'
};

function loadPlaywright() {
  try {
    return require('playwright');
  } catch (error) {
    console.error('Playwright is needed to render the images:\n  npm install --no-save playwright && npx playwright install chromium');
    process.exit(1);
  }
}

function toolIcons() {
  return TOOLS.map(tool => {
    const rgb = TOOL_COLORS[tool.key];
    const icon = readIcon(tool.key).replace(' class="icon"', '');
    return `        <span class="tool" style="--color: rgb(${rgb}); --soft: rgb(${rgb} / 0.14)">${icon}</span>`;
  }).join('\n');
}

async function main() {
  const { chromium } = loadPlaywright();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  const template = fs.readFileSync(path.join(repoRoot, 'site', 'og-image.html'), 'utf8');

  for (const lang of LANGUAGES) {
    const locale = loadLocale(lang);
    const html = render(template, { ...locale.strings, lang, toolIcons: toolIcons() }, `${lang}/og-image.html`);
    await page.setContent(html);
    const file = path.join(publicDir, pagePath(lang, { slug: '' }), 'og-image.png');
    await page.screenshot({ path: file });
    console.log(`Wrote ${path.relative(repoRoot, file)}`);
  }

  const favicon = fs.readFileSync(path.join(publicDir, 'favicon.svg'), 'utf8').replace(' rx="8"', '');
  await page.setViewportSize({ width: 180, height: 180 });
  await page.setContent(`<style>*{margin:0}svg{display:block;width:180px;height:180px}</style>${favicon}`);
  await page.screenshot({ path: path.join(publicDir, 'apple-touch-icon.png') });
  console.log('Wrote public/apple-touch-icon.png');

  await browser.close();
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
