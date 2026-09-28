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
- Simple, fast, and easy to use
- No tracking or data collection - everything runs locally in your browser

## Project Structure

- `CHANGELOG.md` - Changes by release date
- `public/` - All production files and deployable assets
  - `index.html` - Home page
  - `css/` - Shared stylesheets
  - `js/` - Shared JavaScript modules
    - `theme.js` - Light/dark theme handling (loaded in `<head>` to avoid a flash)
    - `core.js` - Formatting and calculators
    - `timer.js` - Pausable timer
    - `ui.js` - Steppers, URL state, sharing and animations
  - `meetings/` - Meetings cost calculator (`meetings.html`, `meetings.js`)
  - `coffee/` - Coffee cost calculator (`coffee.html`, `coffee.js`)
  - `smoking/` - Smoking cost calculator (`smoking.html`, `smoking.js`)
  - `workhours/` - Work hours calculator (`workhours.html`, `workhours.js`)
  - `subscriptions/` - Subscriptions calculator (`subscriptions.html`, `subscriptions.js`)
  - `electricity/` - Electricity cost calculator (`electricity.html`, `electricity.js`)
  - `trip/` - Trip cost calculator (`trip.html`, `trip.js`)


## Privacy

- **No tracking** - Zero analytics or user tracking
- **No data collection** - Your inputs are never stored or sent anywhere
- **Local computation** - All calculations happen entirely in your browser
- **No cookies** - The only thing stored on your device is your theme choice (in `localStorage`)
- **No external requests** - All code and resources are self-hosted
- **Open source** - Code is publicly available for transparency

## License

MIT License - Copyright (c) 2026 Timo Heimonen
