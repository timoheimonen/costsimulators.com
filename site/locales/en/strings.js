// English texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file; the pages it writes carry the
// texts, and the `runtime` sections are embedded for the page scripts.
//
// Every language folder has exactly the same keys and files as this one.
// Money values (`value`, `quick`) are typical prices in the language's own
// currency, so each language starts from sensible local defaults.

module.exports = {
  meta: {
    name: 'English',
    locale: 'en-US',
    currency: 'USD',
    ogLocale: 'en_US'
  },

  money: {
    symbol: '$',
    zero: '$0.00',
    placeholder: '0.00'
  },

  common: {
    skip: 'Skip to content',
    home: 'Home',
    toggleTheme: 'Toggle theme',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    language: 'Language',
    allTools: 'All tools',
    share: 'Share',
    settings: 'Settings',
    quickPicks: 'Quick picks',
    faqTitle: 'Frequently asked questions',
    relatedTools: 'More calculators',
    imageAlt: 'costsimulators.com – free cost calculators for everyday money questions'
  },

  footer: {
    privacy: 'Runs entirely in your browser. No cookies, no tracking.',
    about: 'About',
    contact: 'Contact',
    privacyPolicy: 'Privacy',
    terms: 'Terms'
  },

  runtime: {
    share: {
      linkCopied: 'Link copied',
      copyFailed: 'Copy failed',
      copied: 'Copied!',
      calculatedWith: 'Calculated with costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    }
  },

  home: {
    title: 'Free Cost Calculators for Everyday Life | costsimulators.com',
    description: 'Free, private calculators that show what things really cost: meetings, work hours, coffee, smoking, subscriptions, electricity and fuel. No sign-up, runs in your browser.',
    eyebrow: 'Free · Private · Instant',
    heading: 'Small tools for everyday <span class="accent-text">money</span> questions.',
    lead: 'Quick calculators that show what things really cost. No sign-up, no tracking – everything runs right in your browser.',
    toolsTitle: 'Tools',
    toolCount: '{count} tools',
    suggestTitle: 'Got an idea?',
    suggestText: 'Suggest a new tool on GitHub.',
    whyTitle: 'Small costs add up',
    whyText1: 'A single meeting, a coffee on the way to work or one more streaming service rarely feels expensive on its own. Add them up over a month, a year or a decade, and the numbers look very different.',
    whyText2: 'Each calculator does one thing, asks only for the numbers it needs and shows the answer instantly. Everything is calculated in your browser, so your numbers stay on your device.',
    aboutLink: 'More about costsimulators.com',
    faq: [
      {
        q: 'Is costsimulators.com free?',
        a: 'Yes. All calculators are completely free, with no sign-up, no paywall and no ads. You can also use them at work.'
      },
      {
        q: 'Are my numbers saved or sent anywhere?',
        a: 'No. Everything you enter is calculated in your browser and never sent to a server. The site sets no cookies and has no analytics.'
      },
      {
        q: 'Can I share a calculation?',
        a: 'Yes. Your settings are kept in the page address. Press Share to copy the link, and whoever opens it sees the same calculation.'
      }
    ]
  },

  notFound: {
    title: 'Page not found | costsimulators.com',
    description: 'The page you were looking for does not exist.',
    heading: 'This page does not exist.',
    lead: 'The address may be mistyped, or the page has moved. All calculators are on the front page.'
  },

  documents: {
    about: {
      name: 'About',
      title: 'About costsimulators.com – Free, Private Cost Calculators',
      description: 'Who makes costsimulators.com and how the calculators work. Free, private cost calculators for meetings, work hours, habits, subscriptions, electricity and trips.'
    },
    privacy: {
      name: 'Privacy policy',
      title: 'Privacy Policy | costsimulators.com',
      description: 'How costsimulators.com handles your data: calculations run in your browser, no tracking, no analytics and no accounts.'
    },
    terms: {
      name: 'Terms of use',
      title: 'Terms of Use | costsimulators.com',
      description: 'Terms of use for costsimulators.com: free to use for personal and commercial purposes, provided as is, with open source code under the MIT License.'
    }
  },

  tools: {
    meetings: {
      name: 'Meeting cost',
      heading: 'Meeting cost calculator',
      title: 'Meeting Cost Calculator – Live Meeting Timer | costsimulators.com',
      description: 'Free meeting cost calculator with a live timer. Enter the hourly rate and number of participants and watch what the meeting costs, second by second.',
      card: 'Watch the price of a meeting tick up in real time while you talk.',
      tag: 'Live timer',
      lead: 'Set the hourly rate and headcount, press start and watch what the meeting costs as it happens.',
      rate: {
        label: 'Hourly rate',
        unit: 'USD per person',
        step: '5',
        value: '75',
        decrease: 'Decrease hourly rate',
        increase: 'Increase hourly rate'
      },
      persons: {
        label: 'Participants',
        unit: 'people',
        decrease: 'Decrease participants',
        increase: 'Increase participants'
      },
      perMinute: 'Per minute',
      perHour: 'Per hour',
      note: 'You can adjust the values while the timer runs. People joining or leaving are counted from that moment on.',
      total: 'Total cost',
      elapsed: 'Elapsed time',
      reset: 'Reset',
      copyReport: 'Copy report',
      kbdHint: 'Press <kbd>Space</kbd> to start or pause',
      runtime: {
        mode: { start: 'Start', pause: 'Pause', resume: 'Resume' },
        status: { ready: 'Ready', live: 'Live', paused: 'Paused' },
        announce: {
          invalid: 'Enter an hourly rate and the number of participants to start.',
          started: 'Timer started.',
          paused: 'Paused at {cost} after {time}.',
          reset: 'Timer reset.'
        },
        report: {
          cost: 'Meeting cost: {cost}',
          duration: 'Duration: {time}',
          participants: 'Participants: {persons} × {rate}/h'
        }
      },
      about: {
        title: 'How the meeting cost is calculated',
        paragraphs: [
          'The calculator multiplies the number of participants by their hourly rate and by the time that has passed. A one-hour meeting with 5 people at $75 an hour costs $375 – that is $6.25 every minute.',
          'For the hourly rate, use what an hour of work really costs the employer, not just the salary. A common rule of thumb is to add 25–40 % to the gross hourly wage for payroll taxes, pensions and other employment costs. If you do not know everyone’s rate, an average for the team is good enough.',
          'The timer keeps counting correctly in a background tab, and the running cost is shown in the browser tab title, so you can keep an eye on it while sharing your screen. When the meeting ends, pause the timer and copy a short report for the meeting notes.'
        ]
      },
      faq: [
        {
          q: 'How do I calculate the cost of a meeting?',
          a: 'Multiply the number of participants by their average hourly rate and by the length of the meeting in hours. For example, 6 people × $60 per hour × 1.5 hours = $540. This calculator does the math live while the meeting runs.'
        },
        {
          q: 'What hourly rate should I use?',
          a: 'Use the full cost of an hour of work: the gross hourly wage plus payroll taxes, pension and other employment costs. For consultants and contractors, use their billing rate.'
        },
        {
          q: 'Can I change the number of participants during the meeting?',
          a: 'Yes. Change the headcount or the rate at any time. The new values are counted from that moment on, and the cost that has already built up stays as it was.'
        },
        {
          q: 'Does the timer keep running if I switch tabs?',
          a: 'Yes. The timer is based on the clock, so the total stays correct in a background tab. While the timer runs, the page also asks the browser to keep the screen awake.'
        }
      ]
    },

    workhours: {
      name: 'Work hours',
      heading: 'Price in work hours calculator',
      title: 'Price in Work Hours Calculator – How Long to Work for It | costsimulators.com',
      description: 'Turn any price into the hours, days and weeks of work it takes. Enter your hourly, monthly or yearly pay and see what a purchase really costs in work time.',
      card: 'Turn any price into the hours, days and weeks you need to work for it.',
      tag: 'Work',
      lead: 'Enter your pay and a price to see how long you have to work to afford it.',
      period: {
        label: 'I know my pay',
        hour: 'Per hour',
        month: 'Per month',
        year: 'Per year'
      },
      pay: {
        label: 'Pay',
        unit: 'USD per hour',
        value: '25',
        hint: 'Use your take-home pay after taxes for the most honest answer.',
        decrease: 'Decrease pay',
        increase: 'Increase pay'
      },
      hoursPerWeek: {
        label: 'Hours per week',
        unit: 'hours',
        value: '40',
        chip1: '37.5 h',
        chip2: '40 h',
        decrease: 'Decrease hours per week',
        increase: 'Increase hours per week'
      },
      price: {
        label: 'Price',
        unit: 'USD',
        value: '999',
        decrease: 'Decrease price',
        increase: 'Increase price'
      },
      resultsTitle: 'Price in work time',
      youNeedToWork: 'You need to work',
      workDays: 'Work days',
      workWeeks: 'Work weeks',
      hourlyRate: 'Your hourly rate',
      runtime: {
        unit: {
          hour: 'USD per hour',
          month: 'USD per month',
          year: 'USD per year'
        },
        days: { one: '{n} day', other: '{n} days' },
        weeks: { one: '{n} week', other: '{n} weeks' },
        note: {
          empty: 'Enter your pay, weekly hours and a price to see how long you need to work for it.',
          result: 'Based on {hours}-hour work days, {days} days a week.'
        }
      },
      about: {
        title: 'How the work time is calculated',
        paragraphs: [
          'First your pay is turned into an hourly rate. A monthly salary is multiplied by 12 and divided by the hours you work in a year (weekly hours × 52); a yearly salary is divided by those hours directly. The price is then divided by your hourly rate.',
          'Work days assume a five-day week, so 40 hours a week means 8-hour days. For example, at $25 an hour a $999 phone costs almost 40 hours – about one full work week.',
          'For the most honest answer, use your take-home pay after taxes, since that is the money you actually spend. Thinking of prices in work hours is a simple way to decide whether something is really worth it.'
        ]
      },
      faq: [
        {
          q: 'How many hours do I need to work to afford something?',
          a: 'Divide the price by your hourly take-home pay. If you earn $20 an hour after taxes, a $300 purchase costs 15 hours of work.'
        },
        {
          q: 'Should I use gross or net pay?',
          a: 'Net pay after taxes gives the most realistic answer, because it is the money you actually have to spend. Gross pay makes things look cheaper than they are.'
        },
        {
          q: 'How do I turn a monthly salary into an hourly rate?',
          a: 'Multiply the monthly salary by 12 and divide it by the hours you work in a year. With a 40-hour week that is 2,080 hours, so $4,000 a month is about $23 an hour. The calculator does this for you when you choose Per month.'
        }
      ]
    },

    coffee: {
      name: 'Coffee habit',
      heading: 'Coffee cost calculator',
      title: 'Coffee Cost Calculator – What Your Coffee Habit Costs | costsimulators.com',
      description: 'See what your daily coffee costs per month and over 1, 5 and 10 years. Enter the price per cup and cups per week – free and private.',
      card: 'See what your daily cup adds up to over one, five and ten years.',
      tag: 'Habit',
      lead: 'Enter what a cup costs and how often you buy one to see what the habit adds up to over the years.',
      price: {
        label: 'Price per cup',
        unit: 'USD',
        step: '0.5',
        value: '3.08',
        decrease: 'Decrease coffee price',
        increase: 'Increase coffee price'
      },
      perWeek: {
        label: 'Cups per week',
        unit: 'cups',
        chip1: 'Workdays',
        chip2: 'Every day',
        chip3: 'Twice a day',
        decrease: 'Decrease cups per week',
        increase: 'Increase cups per week'
      },
      resultsTitle: 'What it adds up to',
      in10Years: 'In 10 years',
      perMonth: 'Per month',
      year1: '1 year',
      year5: '5 years',
      runtime: {
        note: {
          empty: 'Enter a price and how many cups you have per week to see the totals.',
          result: 'That’s about {cups} cups a year at {price} each.'
        }
      },
      about: {
        title: 'How the coffee cost is calculated',
        paragraphs: [
          'The yearly cost is the price per cup × cups per week × 52 weeks. The monthly cost is the yearly cost divided by 12, and the 5- and 10-year totals multiply the yearly cost without inflation or price rises.',
          'A $3.08 coffee on every work day adds up to about $800 a year and $8,000 in ten years. Brewing at home or bringing a refillable cup are easy ways to cut the cost if the number surprises you.',
          'The calculator works for any small, regular purchase: an energy drink, a lunch sandwich or a bottle of water. Enter the price and how many you buy a week.'
        ]
      },
      faq: [
        {
          q: 'How much does a daily coffee cost per year?',
          a: 'One cup a day, seven days a week, is 364 cups a year. At $3 a cup that is $1,092 a year and $10,920 in ten years.'
        },
        {
          q: 'Is it cheaper to make coffee at home?',
          a: 'Usually by a lot. A cup brewed at home often costs well under 50 cents, compared with several dollars at a café. Enter your cost per cup at home to compare.'
        },
        {
          q: 'Does the calculator include inflation?',
          a: 'No. The projections assume the price stays the same, so they show what the habit costs at today’s prices. With rising prices the real long-term cost is higher.'
        }
      ]
    },

    smoking: {
      name: 'Smoking cost',
      heading: 'Smoking cost calculator',
      title: 'Smoking Cost Calculator – What Cigarettes Cost You | costsimulators.com',
      description: 'Find out how much smoking costs per month and over 1, 5 and 10 years – and how much you save by quitting. Enter pack price and cigarettes per day.',
      card: 'Find out how much money goes up in smoke each month and over the years.',
      tag: 'Habit',
      lead: 'Enter what a pack costs and how much you smoke to see how much money goes up in smoke over the years.',
      packPrice: {
        label: 'Pack price',
        unit: 'USD',
        step: '0.5',
        value: '9',
        decrease: 'Decrease pack price',
        increase: 'Increase pack price'
      },
      perDay: {
        label: 'Cigarettes per day',
        unit: 'cigarettes',
        chip1: '5 a day',
        chip2: '10 a day',
        chip3: '20 a day',
        decrease: 'Decrease cigarettes per day',
        increase: 'Increase cigarettes per day'
      },
      perPack: {
        label: 'Cigarettes per pack',
        unit: 'pack size',
        decrease: 'Decrease cigarettes per pack',
        increase: 'Increase cigarettes per pack'
      },
      resultsTitle: 'Up in smoke',
      in10Years: 'In 10 years',
      perMonth: 'Per month',
      year1: '1 year',
      year5: '5 years',
      runtime: {
        note: {
          empty: 'Enter the pack price, how many you smoke a day and the pack size to see the totals.',
          result: 'That’s about {cigarettes} cigarettes ({packs} packs) a year at {price} each.'
        }
      },
      about: {
        title: 'How the cost of smoking is calculated',
        paragraphs: [
          'The price of one cigarette is the pack price divided by the number of cigarettes in a pack. That is multiplied by the cigarettes smoked a day and by 365 days for the yearly cost. The monthly cost is a twelfth of that, and the 5- and 10-year totals use today’s prices.',
          'Half a pack a day at $9 a pack is about $1,640 a year and over $16,000 in ten years. Seeing the total can be a strong motivator: the same money could go to a trip, savings or paying off debt.',
          'The calculator counts only the price of the cigarettes. Health costs, higher insurance premiums and sick days come on top. If you want help to quit, your doctor or a national quitline can help.'
        ]
      },
      faq: [
        {
          q: 'How much does a pack a day cost per year?',
          a: 'A pack a day is 365 packs a year. At $9 a pack that is $3,285 a year and $32,850 in ten years.'
        },
        {
          q: 'How much money do I save if I quit smoking?',
          a: 'Everything this calculator shows. Enter what you smoke today: the monthly and yearly totals are what quitting saves you.'
        },
        {
          q: 'Does this work for rolling tobacco?',
          a: 'Yes. Enter the price of a pouch as the pack price, the number of cigarettes you roll from it as the pack size and how many you smoke a day.'
        }
      ]
    },

    subscriptions: {
      name: 'Subscriptions',
      heading: 'Subscription cost calculator',
      title: 'Subscription Cost Calculator – Monthly & Yearly Total | costsimulators.com',
      description: 'Add up streaming, gym, phone and every other subscription. See your total per month, per year and over 10 years, and which subscription costs the most.',
      card: 'Add up streaming, gym and every other recurring payment in one place.',
      tag: 'Budget',
      lead: 'List everything you pay for regularly and see what it all adds up to. Monthly, yearly and weekly billing are all supported.',
      listTitle: 'Your subscriptions',
      empty: 'No subscriptions yet. Add one below or pick a quick add.',
      add: 'Add subscription',
      quickAdd: 'Quick add',
      quick: {
        1: { name: 'Video streaming', price: '15.49' },
        2: { name: 'Music streaming', price: '11.99' },
        3: { name: 'Gym', price: '39.99' },
        4: { name: 'Cloud storage', price: '2.99' },
        5: { name: 'Phone plan', price: '35' },
        6: { name: 'News', price: '9.99' }
      },
      note: 'Your list is kept in the page address, so you can bookmark or share it. It is never sent anywhere.',
      row: {
        name: 'Name',
        nameLabel: 'Subscription name',
        priceLabel: 'Price in USD',
        cycleLabel: 'Billing cycle',
        monthly: '/ month',
        yearly: '/ year',
        weekly: '/ week'
      },
      resultsTitle: 'Subscriptions total',
      perYear: 'Per year',
      perMonth: 'Per month',
      perDay: 'Per day',
      in10Years: 'In 10 years',
      breakdownLabel: 'Yearly cost per subscription',
      copySummary: 'Copy summary',
      runtime: {
        untitled: 'Untitled',
        remove: 'Remove {name}',
        removeUnnamed: 'Remove subscription',
        breakdown: '{cost} / year · {percent}%',
        cycle: { monthly: 'month', yearly: 'year', weekly: 'week' },
        note: {
          empty: 'Add a subscription with a price to see the totals.',
          single: 'That’s {cost} a year for {name}.',
          biggest: 'Your biggest cost is {name} at {cost} a year, {percent}% of the total.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Total: {month} per month, {year} per year'
        }
      },
      about: {
        title: 'How the subscription total is calculated',
        paragraphs: [
          'Every subscription is converted into a yearly cost: monthly prices are multiplied by 12, weekly prices by 52, and yearly prices are used as they are. The yearly total is then divided by 12 for the monthly cost and by 365 for the daily cost.',
          'The breakdown sorts your subscriptions from the most to the least expensive and shows each one’s share of the total, which makes it easy to spot what to cancel or downgrade.',
          'Your list is saved in the page address, never on a server. Bookmark the page to come back to your list later, or share the link to go through shared subscriptions with your family.'
        ]
      },
      faq: [
        {
          q: 'How do I find all my subscriptions?',
          a: 'Go through your bank and credit card statements for the last few months and look for recurring charges. Also check the subscription settings in the App Store, Google Play and PayPal.'
        },
        {
          q: 'Is a yearly plan cheaper than a monthly one?',
          a: 'Often, by 15–20 %, but only if you would keep the service for the whole year anyway. Add both versions to the list to compare their yearly cost.'
        },
        {
          q: 'Is my list saved?',
          a: 'Your list is kept only in the page address. Bookmark or share the link to keep it; nothing is stored on a server or in cookies.'
        }
      ]
    },

    electricity: {
      name: 'Electricity cost',
      heading: 'Electricity cost calculator',
      title: 'Electricity Cost Calculator – Appliance Running Cost | costsimulators.com',
      description: 'Calculate what a device costs to run per day, month and year from its wattage, hours of use and electricity price. Free kWh cost calculator.',
      card: 'See what keeping a device switched on costs per day, month and year.',
      tag: 'Home',
      lead: 'Enter a device’s power, how long it runs and what you pay for electricity to see what it really costs to keep it on.',
      power: {
        label: 'Power',
        unit: 'watts',
        chip1: 'LED bulb 9 W',
        chip2: 'Laptop 60 W',
        chip3: 'TV 100 W',
        chip4: 'Gaming PC 400 W',
        chip5: 'Heater 1500 W',
        decrease: 'Decrease power',
        increase: 'Increase power'
      },
      hours: {
        label: 'Hours per day',
        unit: 'hours',
        decrease: 'Decrease hours per day',
        increase: 'Increase hours per day'
      },
      days: {
        label: 'Days per week',
        unit: 'days',
        decrease: 'Decrease days per week',
        increase: 'Increase days per week'
      },
      kwhPrice: {
        label: 'Electricity price',
        unit: '¢ per kWh',
        value: '17',
        hint: 'Include transfer fees and taxes for the most accurate result.',
        decrease: 'Decrease electricity price',
        increase: 'Increase electricity price'
      },
      resultsTitle: 'Running cost',
      perYear: 'Per year',
      perDayOfUse: 'Per day of use',
      perMonth: 'Per month',
      energyPerYear: 'Energy per year',
      runtime: {
        note: {
          empty: 'Enter the power, daily hours (up to 24), days per week (up to 7) and your electricity price.',
          result: 'Uses about {day} on each day it runs, around {year} a year.'
        }
      },
      about: {
        title: 'How the electricity cost is calculated',
        paragraphs: [
          'Energy use in kilowatt-hours (kWh) is the power in watts × hours of use ÷ 1,000. A 100 W TV used for 4 hours uses 0.4 kWh a day. Multiplying that by your electricity price per kWh gives the cost per day of use.',
          'The yearly cost takes into account how many days a week the device runs, spread over the 365 days of the year. The monthly cost is a twelfth of the yearly cost.',
          'You can find the power on the device’s rating label or in its manual. Many devices use less than their maximum power most of the time, so the result is an upper estimate. For the most accurate price, include transfer fees and taxes, not just the energy price.'
        ]
      },
      faq: [
        {
          q: 'How do I calculate the electricity cost of a device?',
          a: 'Multiply the power in kilowatts by the hours of use and by the price per kWh. A 1,500 W heater running for 3 hours costs 1.5 kW × 3 h × $0.17 = $0.77 a day.'
        },
        {
          q: 'How many kWh does a device use?',
          a: 'Divide the wattage by 1,000 and multiply by the hours it runs. A 60 W laptop used 8 hours a day uses 0.48 kWh a day – about 175 kWh a year if it is used every day.'
        },
        {
          q: 'What electricity price should I use?',
          a: 'Use the total price per kWh from your electricity bill, including the energy price, delivery fees and taxes. Dividing the bill total by the kWh used gives a good average.'
        },
        {
          q: 'Does standby use electricity?',
          a: 'Yes, many devices draw a few watts on standby. Enter the standby power and 24 hours a day to see what it costs over a year.'
        }
      ]
    },

    trip: {
      name: 'Trip cost',
      heading: 'Trip fuel cost calculator',
      title: 'Trip Fuel Cost Calculator – Gas Cost per Trip & Commute | costsimulators.com',
      description: 'Calculate the fuel cost of a trip or daily commute and split it between passengers. Works in miles and gallons or kilometers and liters.',
      card: 'Work out the fuel cost of a trip or commute and split it with others.',
      tag: 'Travel',
      lead: 'Work out the fuel cost of a single trip or your daily commute, and split it between everyone in the car.',
      unit: {
        label: 'Units',
        metric: 'Kilometers & liters',
        us: 'Miles & gallons'
      },
      distance: {
        label: 'Distance',
        unit: 'km one way',
        decrease: 'Decrease distance',
        increase: 'Increase distance'
      },
      direction: {
        label: 'Trip',
        one: 'One way',
        round: 'Round trip'
      },
      consumption: {
        label: 'Fuel consumption',
        unit: 'l/100 km',
        hint: 'Driving electric? Enter kWh/100 km and the price per kWh.',
        decrease: 'Decrease fuel consumption',
        increase: 'Increase fuel consumption'
      },
      fuelPrice: {
        label: 'Fuel price',
        unit: 'USD per liter',
        value: '1.8',
        decrease: 'Decrease fuel price',
        increase: 'Increase fuel price'
      },
      people: {
        label: 'People sharing the cost',
        unit: 'people',
        decrease: 'Decrease people',
        increase: 'Increase people'
      },
      tripsPerWeek: {
        label: 'Trips per week',
        unit: 'for monthly and yearly totals',
        decrease: 'Decrease trips per week',
        increase: 'Increase trips per week'
      },
      resultsTitle: 'Fuel cost',
      perPerson: 'Per person',
      perMonth: 'Per month',
      perYear: 'Per year',
      runtime: {
        direction: { one: 'One way', round: 'Round trip' },
        unit: {
          metric: {
            distance: 'km one way',
            consumption: 'l/100 km',
            price: 'USD per liter',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'miles one way',
            consumption: 'mpg',
            price: 'USD per gallon',
            perDistance: 'mile',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Enter the distance, fuel consumption and fuel price to see the cost.',
          result: 'Uses {fuel} of fuel per trip, about {price} per {distance}.'
        }
      },
      about: {
        title: 'How the trip cost is calculated',
        paragraphs: [
          'In miles and gallons, the fuel used is the distance divided by your car’s miles per gallon. A 25-mile commute each way (50 miles a day) in a car that does 30 mpg uses 1.7 gallons. Multiply by the price per gallon for the cost of the trip, and divide by the number of people to split it.',
          'In kilometers and liters, the fuel used is the distance × consumption ÷ 100. Switching units converts the values you have entered, so you can compare figures from either system.',
          'Monthly and yearly totals are based on the trips per week – 5 round trips a week is a typical commute. For an electric car, enter the consumption in kWh/100 km and the price per kWh instead.'
        ]
      },
      faq: [
        {
          q: 'How do I calculate the gas cost of a trip?',
          a: 'Divide the distance by your car’s miles per gallon and multiply by the price of gas. For 300 miles in a car that does 30 mpg with gas at $3.50 a gallon: 300 ÷ 30 × $3.50 = $35.'
        },
        {
          q: 'How do I split fuel costs between passengers?',
          a: 'Enter the number of people sharing the cost. The calculator divides the trip cost evenly between everyone, including the driver.'
        },
        {
          q: 'Does the calculator include wear, parking or tolls?',
          a: 'No, it counts fuel only. Wear and tear, insurance, parking and tolls come on top, so the full cost of driving is higher.'
        }
      ]
    }
  }
};
