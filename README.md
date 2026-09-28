# costsimulators.com

A simple web application to help you see how much money you are spending.

## Features

- **Meetings cost calculator** - Track real-time meeting costs with a pausable timer; participants and rate can change mid-meeting
- **Coffee cost calculator** - See long-term coffee expenses (monthly and 1/5/10 year projections)
- **Smoking cost calculator** - See what cigarettes cost per month and over 1/5/10 years
- **Work hours calculator** - Turn any price into the hours, days and weeks of work it takes
- **Subscriptions calculator** - List recurring payments and see the monthly, yearly and 10-year total
- **Electricity cost calculator** - See what running a device costs from its wattage, usage and electricity price
- **Trip cost calculator** - Fuel cost per trip, per person and per year, in metric or US units
- Light and dark theme - follows your operating system by default, your choice is remembered
- Shareable links - tool settings are kept in the URL
- Available in 22 languages, each with its local currency, number formats and typical local prices
- Simple, fast, and easy to use
- No tracking or data collection - everything runs locally in your browser

## Languages

Every page is pre-rendered in every language at its own address: English at the root
(`/coffee-cost-calculator/`) and other languages under their language code
(`/fi/coffee-cost-calculator/`). Pages list all of their language versions with `hreflang` links,
and English pages open in the visitor's language on the first visit. Each language uses its own
number format, currency and typical default prices.

Supported languages, in the order of the language menu: English, Spanish (`/es/`), French (`/fr/`),
German (`/de/`), Italian (`/it/`), Finnish (`/fi/`), Swedish (`/sv/`), Norwegian (`/no/`), Danish (`/da/`),
Simplified Chinese (`/zh/`), Japanese (`/ja/`), Korean (`/ko/`), Brazilian Portuguese (`/pt/`),
Dutch (`/nl/`), Polish (`/pl/`), Turkish (`/tr/`), Indonesian (`/id/`), Traditional Chinese
(`/zh-hant/`), Czech (`/cs/`), Romanian (`/ro/`), Hungarian (`/hu/`) and Greek (`/el/`).

Paths use lower-case codes; `<html lang>`, `hreflang`, the sitemap and structured data use the BCP 47
tag where it differs (`zh-Hant` for `/zh-hant/`, set in `LANGUAGE_TAGS`). Visitors whose browser is set
to Chinese for Taiwan, Hong Kong or Macau get traditional Chinese, and Norwegian Bokmål and Nynorsk get
`/no/`.

### Adding a language

1. Copy `site/locales/en/` to `site/locales/<code>/`, for example `site/locales/sv/` for Swedish.
2. Translate `strings.js`, `about.html`, `privacy.html` and `terms.html`. In `strings.js`, also set
   `meta` (name, locale, currency, Open Graph locale), `money` and the local default prices (`value`
   and `quick`). Keep the keys the same; the tests check that every language has the same keys as English.
   Write page titles without the site name and keep them to about 60 characters (30 for Chinese, Japanese
   and Korean), so that they fit in search results; the build adds " | costsimulators.com" when it fits.
   In the translated `privacy.html` and `terms.html`, keep the note that the English version prevails.
3. Set the numbers that depend on the currency (see the comment at the top of `site/locales/en/strings.js`):
   `money.decimals` (0 for yen or forints), the `step` values of the +/− buttons, the electricity price
   `divisor` (100 for cents, 1 for whole currency units) and `pulseEvery` for the meeting timer. Plural
   strings need every form the language uses (`one`, `few`, `many`, `other`, ...).
4. Add the code to `LANGUAGES` in `scripts/build-site.js`. If the BCP 47 tag differs from the lower-case
   path code, also add it to `LANGUAGE_TAGS`.
5. Run `npm run build`, `npm run images -- <code>` and `npm test`.

## Development

The HTML pages in `public/` are generated. Edit the sources in `site/` and regenerate the pages,
`sitemap.xml`, `_redirects` and `llms.txt`:

```bash
npm run build
```

`npm run build:check` and `npm test` fail when the committed pages are out of date. Node.js 22 or
newer is needed; the site has no dependencies.

Preview the site locally at http://localhost:4173:

```bash
npm run serve
```

The social sharing images (`og-image.png` per language) and `apple-touch-icon.png` are rendered with
Playwright, which is not installed by default:

```bash
npm install --no-save playwright && npx playwright install chromium && npm run images
```

`npm run images -- de fr` renders only the images of those languages. Chinese, Japanese, Korean and
Greek need fonts with those scripts, for example `fonts-noto-cjk` and `fonts-noto-core` on Linux.

## Project Structure

- `CHANGELOG.md` - Changes by release date
- `scripts/build-site.js` - Generates the pages of every language into `public/`
- `scripts/render-images.js` - Renders the social sharing images and the home screen icon
- `site/` - Page sources
  - `layout.html` - Shared page layout: head, header and footer
  - `pages/` - Page templates (home, one per tool, documents, 404)
  - `locales/<lang>/` - Texts of one language: `strings.js` and the about, privacy and terms pages
  - `icons/` - Tool icons
  - `og-image.html` - Social sharing image template
- `tests/` - Checks for the generated site (`npm test`)
- `public/` - All production files and deployable assets
  - `index.html`, `<tool>/`, `about/`, `privacy/`, `terms/` - Generated English pages
  - `<lang>/` - Generated pages of the other languages, for example `fi/` or `zh-hant/`
  - `_redirects` - Permanent redirects from the old `.html` addresses
  - `css/` - Shared stylesheets
  - `js/` - Shared JavaScript modules
    - `theme.js` - Light/dark theme handling (loaded in `<head>` to avoid a flash)
    - `lang.js` - Language menu and opening the site in the visitor's language
    - `core.js` - Translations, number and currency formatting, and calculators
    - `timer.js` - Pausable timer
    - `ui.js` - Steppers, URL state, sharing and animations
    - `tools/` - One script per calculator

## Privacy

- **No tracking** - Zero analytics or user tracking
- **No data collection** - Your inputs are never stored or sent anywhere
- **Local computation** - All calculations happen entirely in your browser
- **No cookies** - The only things stored on your device are your theme and language choices (in `localStorage`)
- **No external requests** - All code and resources are self-hosted
- **Open source** - Code is publicly available for transparency

## License

MIT License - Copyright (c) 2026 Timo Heimonen
