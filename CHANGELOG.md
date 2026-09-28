# Changelog

All notable changes to costsimulators.com are listed here, newest first. Changes are marked by release date instead of version numbers.

## 2026-09-28b

### Added

- Language support. Every page is pre-rendered in each language at its own address, with `hreflang` alternates, a canonical URL and a sitemap that lists every language version. English stays at the root and is the default.
- Finnish (`/fi/`), with prices in euros, Finnish number formatting and typical Finnish default prices.
- 20 more languages, each with local currency, number formatting, typical local default prices, examples recalculated in that currency and translated about, privacy and terms pages: Spanish (`/es/`, euros), French (`/fr/`, euros), German (`/de/`, euros), Italian (`/it/`, euros), Swedish (`/sv/`, kronor), Norwegian (`/no/`, kroner), Danish (`/da/`, kroner), Simplified Chinese (`/zh/`, yuan), Japanese (`/ja/`, yen), Korean (`/ko/`, won), Brazilian Portuguese (`/pt/`, reais), Dutch (`/nl/`, euros), Polish (`/pl/`, złoty), Turkish (`/tr/`, lira), Indonesian (`/id/`, rupiah), Traditional Chinese (`/zh-hant/`, New Taiwan dollars), Czech (`/cs/`, koruna), Romanian (`/ro/`, lei), Hungarian (`/hu/`, forints) and Greek (`/el/`, euros).
- Currencies without small units: yen, won, rupiah, forints, koruna and New Taiwan dollars are shown without decimals, and the +/− steps, the electricity price unit (cents or whole currency units) and the other money settings suit each currency.
- Plural forms for every language, chosen for the number as it is shown (1,5 dne in Czech, 1,5 dnia in Polish).
- Browsers set to Chinese for Taiwan, Hong Kong or Macau open the traditional Chinese version; Chinese, Japanese and Korean pages use regional fonts.
- Language menu in the header, in two scrolling columns that fit a phone screen and work with the keyboard. It keeps the current tool settings when switching language, and English pages open in the visitor's language on the first visit.
- Explanation of how each calculation works, frequently asked questions and links to the other calculators on every tool page, and a short introduction and FAQ on the home page.
- Structured data on every page: `WebApplication` for the calculators, `FAQPage`, `BreadcrumbList`, `WebSite` and the author.
- The translated privacy policy and terms of use say that the English version prevails if the versions differ.
- Social sharing image for each language, large image cards for social media and an Apple touch icon.
- 404 page in each language.
- `llms.txt`, a plain-text summary of the site for AI assistants.
- `npm run build` generates the pages from `site/`, and `npm test` checks them. Tests run on GitHub Actions.

### Changed

- Clearer page addresses such as `/meeting-cost-calculator/` and `/about/`. The old `.html` addresses redirect permanently to the new ones.
- Page titles fit in search results: they are about 60 characters at most, and " | costsimulators.com" is added only when it fits.
- Page titles and descriptions name what each calculator does, and each tool page has a descriptive main heading such as "Meeting cost calculator".

## 2026-09-28

### Added

- New tools:
  - **Work hours** – turns any price into the hours, days and weeks of work it takes, from hourly, monthly or yearly pay
  - **Subscriptions** – list recurring payments with weekly, monthly or yearly billing and see the total per month, per year and over 10 years, with a breakdown of the biggest costs
  - **Electricity cost** – running cost of a device from its wattage, daily hours, days per week and electricity price
  - **Trip cost** – fuel cost per trip, per person, per month and per year, in kilometers and liters or miles and gallons
  - **Smoking cost** – what cigarettes cost per month and over 1, 5 and 10 years
- Light and dark theme. The site follows the operating system theme by default, and a theme picked with the toggle is remembered in `localStorage`
- Share button on the tools, which copies a link with the current settings or opens the share sheet on phones
- Quick picks for common values, and +/− buttons that repeat when held down
- Coffee habit: monthly cost, and quick picks for cups per week
- Meeting cost: pause and resume, cost per minute and per hour, running cost in the browser tab title, Space key to start and pause, and a warning before leaving the page while the timer runs. Rate and participants can be changed while the timer runs
- Privacy policy, terms of use and about pages
- Favicon, sitemap entries for all pages and this changelog
- `.assetsignore`, so that `wrangler.jsonc` is no longer served as a public file

### Changed

- Complete redesign: new home page with a tool grid, shared tool page layout with settings and results side by side, and a mobile-friendly layout
- Brand name is written as costsimulators.com everywhere
- Money amounts are shown with thousands separators, for example $16,380.00
- JavaScript reorganised into shared modules (`theme.js`, `core.js`, `timer.js`, `ui.js`) and one script per tool; unused calculators removed
- The meeting timer uses a monotonic clock and keeps counting correctly in a background tab
- Address bar updates are debounced, which avoids Safari's limit on URL updates

## 2026-07-20

### Changed

- UI refresh: animations, accessibility and mobile polish

## 2026-03-27

### Added

- Meeting cost keeps the screen awake while the timer runs
- Animation on the meeting cost display
- Default values for the meeting cost inputs

### Changed

- Better mobile layout
- Code cleanup

## 2026-03-26

### Added

- First release with the meeting cost calculator (live timer, including hours) and the coffee habit calculator (1, 5 and 10 year projections with default values)
- Cloudflare Workers configuration
- GitHub links and a privacy section in the README

### Changed

- Touch support and main menu text size
