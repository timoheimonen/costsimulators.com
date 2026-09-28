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
- Available in English and Finnish, with local currency and number formats
- Simple, fast, and easy to use
- No tracking or data collection - everything runs locally in your browser

## Languages

Every page is pre-rendered in every language at its own address: English at the root
(`/coffee-cost-calculator/`) and other languages under their language code
(`/fi/coffee-cost-calculator/`). Pages list all of their language versions with `hreflang` links,
and English pages open in the visitor's language on the first visit. Each language uses its own
number format, currency and typical default prices.

Supported languages: English, Finnish (`/fi/`).

### Adding a language

1. Copy `site/locales/en/` to `site/locales/<code>/`, for example `site/locales/sv/` for Swedish.
2. Translate `strings.js`, `about.html`, `privacy.html` and `terms.html`. In `strings.js`, also set
   `meta` (name, locale, currency, Open Graph locale), `money` and the local default prices (`value`
   and `quick`). Keep the keys the same; the tests check that every language has the same keys as English.
3. Add the code to `LANGUAGES` in `scripts/build-site.js`.
4. Run `npm run build`, `npm run images` and `npm test`.

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
  - `fi/` - Generated Finnish pages
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
