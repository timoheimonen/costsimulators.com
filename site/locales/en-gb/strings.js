// UK English texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical UK prices in pounds.

module.exports = {
  meta: {
    name: 'English (UK)',
    locale: 'en-GB',
    currency: 'GBP',
    ogLocale: 'en_GB'
  },

  money: {
    symbol: '£',
    zero: '£0.00',
    placeholder: '0.00',
    decimals: '2'
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
    imageAlt: 'costsimulators.com – free cost calculators for everyday money questions',
    invest: {
      label: 'If you invested it instead'
    },
    receipt: {
      open: 'Print receipt',
      title: 'Your receipt',
      close: 'Close',
      skip: 'Skip to total',
      total: 'Total',
      length: 'Receipt length',
      thanks: 'Thank you for 10 years of loyalty!',
      image: 'Share image'
    }
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
    },
    invest: {
      note: '{monthly} a month for 10 years at {rate} a year: {paid} paid in and {gain} in returns.'
    },
    receipt: {
      subtotal: 'Subtotal, year {year}',
      year: 'Year {year}',
      unit: 'meter',
      saved: 'Image saved'
    }
  },

  home: {
    title: 'Free Cost Calculators for Everyday Life',
    description: 'Free, private calculators that show what things really cost: meetings, work hours, habits, subscriptions, electricity, petrol and cost per use. No sign-up, runs in your browser.',
    eyebrow: 'Private · Free · Instant',
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
        a: 'Yes. All calculators are completely free, with no sign-up, no paywall and no adverts. You can also use them at work.'
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
    title: 'Page not found',
    description: 'The page you were looking for does not exist.',
    heading: 'This page does not exist.',
    lead: 'The address may be mistyped, or the page has moved. All calculators are on the front page.'
  },

  documents: {
    about: {
      name: 'About',
      title: 'About costsimulators.com – Free, Private Cost Calculators',
      description: 'Who makes costsimulators.com and how the calculators work. Free, private cost calculators for meetings, work hours, habits, purchases, subscriptions, electricity and journeys.'
    },
    privacy: {
      name: 'Privacy policy',
      title: 'Privacy Policy',
      description: 'How costsimulators.com handles your data: calculations run in your browser, no tracking, no analytics and no accounts.'
    },
    terms: {
      name: 'Terms of use',
      title: 'Terms of Use',
      description: 'Terms of use for costsimulators.com: free to use for personal and commercial purposes, provided as is, with open source code under the MIT License.'
    }
  },

  tools: {
    meetings: {
      name: 'Meeting cost',
      heading: 'Meeting cost calculator',
      title: 'Meeting Cost Calculator – Live Meeting Timer',
      description: 'Free meeting cost calculator with a live timer. Enter the hourly rate and number of participants and watch what the meeting costs, second by second.',
      card: 'Watch the price of a meeting tick up in real time while you talk.',
      tag: 'Live timer',
      lead: 'Set the hourly rate and headcount, press start and watch what the meeting costs as it happens.',
      pulseEvery: '1',
      rate: {
        label: 'Hourly rate',
        unit: '£ per person',
        step: '5',
        value: '45',
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
          'The calculator multiplies the number of participants by their hourly rate and by the time that has passed. A one-hour meeting with 5 people at £45 an hour costs £225 – that is £3.75 every minute.',
          'For the hourly rate, use what an hour of work really costs the employer, not just the salary. On top of the gross hourly wage come employer’s National Insurance, pension contributions, holiday pay and other employment costs – often 20–30 % more. If you do not know everyone’s rate, an average for the team is good enough.',
          'The timer keeps counting correctly in a background tab, and the running cost is shown in the browser tab title, so you can keep an eye on it while sharing your screen. When the meeting ends, pause the timer and copy a short report for the meeting notes.'
        ]
      },
      faq: [
        {
          q: 'How do I calculate the cost of a meeting?',
          a: 'Multiply the number of participants by their average hourly rate and by the length of the meeting in hours. For example, 6 people × £40 per hour × 1.5 hours = £360. This calculator does the maths live while the meeting runs.'
        },
        {
          q: 'What hourly rate should I use?',
          a: 'Use the full cost of an hour of work: the gross hourly wage plus employer’s National Insurance, pension contributions and other employment costs. For consultants and contractors, use their day rate divided by the hours in their working day.'
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
      title: 'Price in Work Hours Calculator – How Long to Work for It',
      description: 'Turn any price into the hours, days and weeks of work it takes. Enter your hourly, monthly or yearly pay and see what a purchase really costs in working time.',
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
        unit: '£ per hour',
        value: '15',
        step: '1',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Use your take-home pay after tax and National Insurance for the most honest answer.',
        decrease: 'Decrease pay',
        increase: 'Increase pay'
      },
      hoursPerWeek: {
        label: 'Hours per week',
        unit: 'hours',
        value: '37.5',
        chip1: '37.5 h',
        chip2: '40 h',
        preset1: '37.5',
        preset2: '40',
        decrease: 'Decrease hours per week',
        increase: 'Increase hours per week'
      },
      price: {
        label: 'Price',
        unit: '£',
        value: '799',
        step: '10',
        decrease: 'Decrease price',
        increase: 'Increase price'
      },
      resultsTitle: 'Price in working time',
      youNeedToWork: 'You need to work',
      workDays: 'Working days',
      workWeeks: 'Working weeks',
      hourlyRate: 'Your hourly rate',
      runtime: {
        unit: {
          hour: '£ per hour',
          month: '£ per month',
          year: '£ per year'
        },
        days: { one: '{n} day', other: '{n} days' },
        weeks: { one: '{n} week', other: '{n} weeks' },
        note: {
          empty: 'Enter your pay, weekly hours and a price to see how long you need to work for it.',
          result: 'Based on {hours}-hour working days, {days} days a week.'
        }
      },
      about: {
        title: 'How the working time is calculated',
        paragraphs: [
          'First your pay is turned into an hourly rate. A monthly salary is multiplied by 12 and divided by the hours you work in a year (weekly hours × 52); a yearly salary is divided by those hours directly. The price is then divided by your hourly rate.',
          'Working days assume a five-day week, so 37.5 hours a week means 7.5-hour days. For example, at £15 an hour a £799 phone costs just over 53 hours – about seven working days.',
          'For the most honest answer, use your take-home pay after tax and National Insurance, since that is the money you actually spend. Thinking of prices in work hours is a simple way to decide whether something is really worth it.'
        ]
      },
      faq: [
        {
          q: 'How many hours do I need to work to afford something?',
          a: 'Divide the price by your hourly take-home pay. If you earn £12 an hour after tax, a £300 purchase costs 25 hours of work.'
        },
        {
          q: 'Should I use gross or net pay?',
          a: 'Net pay after tax and National Insurance gives the most realistic answer, because it is the money you actually have to spend. Gross pay makes things look cheaper than they are.'
        },
        {
          q: 'How do I turn a monthly salary into an hourly rate?',
          a: 'Multiply the monthly salary by 12 and divide it by the hours you work in a year. With a 37.5-hour week that is 1,950 hours, so £2,500 a month is about £15.38 an hour. The calculator does this for you when you choose Per month.'
        }
      ]
    },

    costperuse: {
      name: 'Cost per use',
      heading: 'Cost per use calculator',
      title: 'Cost per Use Calculator – Is It Worth the Price?',
      description: 'Work out what a purchase really costs each time you use it: the price minus the resale value, divided by how often and for how long you use it.',
      card: 'Spread a price over every time you use it to see if it is worth it.',
      tag: 'Shopping',
      lead: 'Enter a price, how often you will use the thing and for how long, and see what each use really costs.',
      price: {
        label: 'Price',
        unit: '£',
        value: '400',
        step: '10',
        decrease: 'Decrease price',
        increase: 'Increase price'
      },
      period: {
        label: 'How often you use it',
        week: 'Weekly',
        month: 'Monthly',
        year: 'Yearly'
      },
      uses: {
        label: 'Uses',
        unit: 'times a week',
        decrease: 'Decrease uses',
        increase: 'Increase uses'
      },
      years: {
        label: 'Years of use',
        unit: 'years',
        chip1: '1 year',
        chip2: '3 years',
        chip3: '5 years',
        decrease: 'Decrease years of use',
        increase: 'Increase years of use'
      },
      resale: {
        label: 'Resale value',
        unit: '£, optional',
        hint: 'What you expect to get when you sell it. Leave at 0 if nothing.',
        decrease: 'Decrease resale value',
        increase: 'Increase resale value'
      },
      resultsTitle: 'Cost per use',
      perUse: 'Each use costs',
      totalUses: 'Uses in total',
      perMonth: 'Per month',
      perYear: 'Per year',
      runtime: {
        unit: {
          week: 'times a week',
          month: 'times a month',
          year: 'times a year'
        },
        note: {
          empty: 'Enter the price, how often you use it and for how many years. The resale value must be lower than the price.',
          result: 'Using it for one more year would bring the price per use down to {next}.'
        }
      },
      about: {
        title: 'How the cost per use is calculated',
        paragraphs: [
          'The cost per use is the price minus what you get back when you sell it, divided by the number of times you use it. The number of uses is how often you use it × the weeks, months or years you use it for. A £400 purchase used 3 times a week for 3 years is used 468 times and costs £0.85 a use.',
          'The monthly and yearly costs spread the same amount over the time you own the thing, which makes it easy to compare buying with renting, leasing or a subscription.',
          'Cost per use is a simple way to compare a cheap thing that wears out quickly with an expensive one that lasts. A £50 pair of shoes worn 50 times costs £1 a wear; a £160 pair worn 400 times costs 40p.'
        ]
      },
      faq: [
        {
          q: 'How do I calculate cost per use?',
          a: 'Divide the price by the number of times you use the thing. If you sell it afterwards, take the resale value off the price first. A £100 coat worn 80 times costs £1.25 a wear.'
        },
        {
          q: 'What is a good cost per use?',
          a: 'It depends on what the alternative costs. Compare it with renting, borrowing or paying each time: if a gym visit costs £12 on a day pass, a £30 monthly membership pays off from the third visit a month.'
        },
        {
          q: 'Does it work for subscriptions and memberships?',
          a: 'Yes. Enter the yearly price as the price, how often you use it and 1 year. For a £30 monthly gym membership, enter £360 and your visits per week.'
        }
      ]
    },

    coffee: {
      name: 'Coffee habit',
      heading: 'Coffee cost calculator',
      title: 'Coffee Cost Calculator – What Your Coffee Habit Costs',
      description: 'See what your daily coffee costs per month and over 1, 5 and 10 years. Enter the price per cup and cups per week – free and private.',
      card: 'See what your daily cup adds up to over one, five and ten years.',
      tag: 'Habit',
      lead: 'Enter what a cup costs and how often you buy one to see what the habit adds up to over the years.',
      price: {
        label: 'Price per cup',
        unit: '£',
        step: '0.1',
        value: '3.4',
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
      receiptTitle: 'Coffee receipt',
      receiptCount: 'Cups',
      runtime: {
        receiptItem: 'Coffee',
        note: {
          empty: 'Enter a price and how many cups you have per week to see the totals.',
          result: 'That’s about {cups} cups a year at {price} each.'
        }
      },
      about: {
        title: 'How the coffee cost is calculated',
        paragraphs: [
          'The yearly cost is the price per cup × cups per week × 52 weeks. The monthly cost is the yearly cost divided by 12, and the 5- and 10-year totals multiply the yearly cost without inflation or price rises.',
          'A £3.40 flat white on every working day adds up to £884 a year and £8,840 in ten years. Brewing at home or taking a reusable cup are easy ways to cut the cost if the number surprises you.',
          'The calculator works for any small, regular purchase: an energy drink, a lunchtime meal deal or a bottle of water. Enter the price and how many you buy a week.'
        ]
      },
      faq: [
        {
          q: 'How much does a daily coffee cost per year?',
          a: 'One cup a day, seven days a week, is 364 cups a year. At £3 a cup that is £1,092 a year and £10,920 in ten years.'
        },
        {
          q: 'Is it cheaper to make coffee at home?',
          a: 'Usually by a lot. A cup brewed at home often costs well under 50p, compared with £3 or more at a coffee shop. Enter your cost per cup at home to compare.'
        },
        {
          q: 'Does the calculator include inflation?',
          a: 'No. The projections assume the price stays the same, so they show what the habit costs at today’s prices. With rising prices the real long-term cost is higher.'
        },
        {
          q: 'What if I invested the money instead?',
          a: 'The “If you invested it instead” box shows what the money would grow to if you put it into an investment every month instead of spending it, at a 4% yearly return compounded monthly. A £3.40 coffee every working day is £73.67 a month, which grows to about £10,810 in 10 years – £8,840 of your own money and the rest returns. Tax, fees and inflation are left out. It is an example, not investment advice.'
        }
      ]
    },

    smoking: {
      name: 'Smoking cost',
      heading: 'Smoking cost calculator',
      title: 'Smoking Cost Calculator – What Cigarettes Cost You',
      description: 'Find out how much smoking costs per month and over 1, 5 and 10 years – and how much you save by quitting. Enter pack price and cigarettes per day.',
      card: 'Find out how much money goes up in smoke each month and over the years.',
      tag: 'Habit',
      lead: 'Enter what a pack costs and how much you smoke to see how much money goes up in smoke over the years.',
      packPrice: {
        label: 'Pack price',
        unit: '£',
        step: '0.5',
        value: '16',
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
        value: '20',
        decrease: 'Decrease cigarettes per pack',
        increase: 'Increase cigarettes per pack'
      },
      resultsTitle: 'Up in smoke',
      in10Years: 'In 10 years',
      perMonth: 'Per month',
      year1: '1 year',
      year5: '5 years',
      receiptTitle: 'Cigarette receipt',
      receiptCount: 'Packs',
      runtime: {
        receiptItem: 'Pack of cigarettes',
        note: {
          empty: 'Enter the pack price, how many you smoke a day and the pack size to see the totals.',
          result: 'That’s about {cigarettes} cigarettes ({packs} packs) a year at {price} each.'
        }
      },
      about: {
        title: 'How the cost of smoking is calculated',
        paragraphs: [
          'The price of one cigarette is the pack price divided by the number of cigarettes in a pack. That is multiplied by the cigarettes smoked a day and by 365 days for the yearly cost. The monthly cost is a twelfth of that, and the 5- and 10-year totals use today’s prices.',
          'Half a pack a day at £16 a pack is £2,920 a year and £29,200 in ten years. Seeing the total can be a strong motivator: the same money could go towards a holiday, savings or paying off debt.',
          'The calculator counts only the price of the cigarettes. Higher life insurance premiums and sick days come on top. If you want help to quit, your GP, a pharmacist or your local NHS Stop Smoking Service can help.'
        ]
      },
      faq: [
        {
          q: 'How much does a pack a day cost per year?',
          a: 'A pack a day is 365 packs a year. At £16 a pack that is £5,840 a year and £58,400 in ten years.'
        },
        {
          q: 'How much money do I save if I quit smoking?',
          a: 'Everything this calculator shows. Enter what you smoke today: the monthly and yearly totals are what quitting saves you.'
        },
        {
          q: 'Does this work for rolling tobacco?',
          a: 'Yes. Enter the price of a pouch as the pack price, the number of cigarettes you roll from it as the pack size and how many you smoke a day.'
        },
        {
          q: 'What if I invested the money instead?',
          a: 'The “If you invested it instead” box shows what the money would grow to if you invested it every month instead of smoking, at a 4% yearly return compounded monthly. Half a pack a day at £16 a pack is about £243 a month, which grows to about £35,700 in 10 years – £29,200 of your own money and the rest returns. Tax, fees and inflation are left out. It is an example, not investment advice.'
        }
      ]
    },

    alcohol: {
      name: 'Alcohol cost',
      heading: 'Alcohol cost calculator',
      title: 'Alcohol Cost Calculator – What Drinking Costs You',
      description: 'See what beer, wine and other drinks cost you per month and over 1, 5 and 10 years, and what the same money would grow to if you invested it.',
      card: 'See what your weekly drinks add up to over one, five and ten years.',
      tag: 'Habit',
      lead: 'Enter what a drink costs and how many you have in a week to see what it adds up to over the years.',
      price: {
        label: 'Price per drink',
        unit: '£',
        step: '0.5',
        value: '6',
        hint: 'Drinking both at home and in the pub? Use an average price.',
        decrease: 'Decrease drink price',
        increase: 'Increase drink price'
      },
      perWeek: {
        label: 'Drinks per week',
        unit: 'drinks',
        chip1: '3 a week',
        chip2: '7 a week',
        chip3: '14 a week',
        decrease: 'Decrease drinks per week',
        increase: 'Increase drinks per week'
      },
      resultsTitle: 'What it adds up to',
      in10Years: 'In 10 years',
      perMonth: 'Per month',
      year1: '1 year',
      year5: '5 years',
      receiptTitle: 'Bar tab',
      receiptCount: 'Drinks',
      runtime: {
        receiptItem: 'Drink',
        note: {
          empty: 'Enter a price and how many drinks you have per week to see the totals.',
          result: 'That’s about {drinks} drinks a year at {price} each.'
        }
      },
      about: {
        title: 'How the cost of drinking is calculated',
        paragraphs: [
          'The yearly cost is the price per drink × drinks per week × 52 weeks. The monthly cost is a twelfth of that, and the 5- and 10-year totals use today’s prices without inflation.',
          'Six pints a week at £6 each add up to £1,872 a year and almost £19,000 in ten years. If you drink both in the pub and at home, use an average price, or work out each separately and add them up.',
          'The “If you invested it instead” box shows what the same money would grow to if you invested it every month, at a 4% yearly return over 10 years. The calculator counts only what the drinks cost; health effects come on top. If you want to cut down, your GP or a local alcohol support service can help.'
        ]
      },
      faq: [
        {
          q: 'How much do I spend on alcohol in a year?',
          a: 'Multiply the price of a drink by the drinks you have in a week and by 52. Six drinks a week at £6 each is £1,872 a year.'
        },
        {
          q: 'How much would I save by drinking less?',
          a: 'Enter the number of drinks you would like to cut down to and compare. Going from 6 to 3 drinks a week at £6 each saves £936 a year and £9,360 in ten years.'
        },
        {
          q: 'What if I invested the money instead?',
          a: 'The “If you invested it instead” box shows what you would have after 10 years if you invested the money every month instead of spending it, at a 4% yearly return compounded monthly. Six £6 pints a week is £156 a month, which grows to about £22,880 – £18,720 of your own money and the rest returns. Tax, fees and inflation are left out. It is an example, not investment advice.'
        }
      ]
    },

    gambling: {
      name: 'Lottery & betting',
      heading: 'Lottery and betting cost calculator',
      title: 'Lottery & Betting Cost Calculator – What Gambling Costs',
      description: 'See what lottery tickets and bets cost per month and over 10 years, how much you lose on average and what the stakes would grow to if invested.',
      card: 'See what lottery tickets and bets add up to and how much you lose on average.',
      tag: 'Habit',
      lead: 'Enter what you stake and how often you play to see what lottery tickets and bets cost over the years – and how much of it comes back as winnings on average.',
      stake: {
        label: 'Stake per game',
        unit: '£',
        step: '1',
        value: '5',
        decrease: 'Decrease stake',
        increase: 'Increase stake'
      },
      perWeek: {
        label: 'Games per week',
        unit: 'games',
        chip1: 'Once a week',
        chip2: 'Twice a week',
        chip3: 'Every day',
        decrease: 'Decrease games per week',
        increase: 'Increase games per week'
      },
      payout: {
        label: 'Payout rate',
        unit: '% paid back',
        chip1: 'Lottery',
        chip2: 'Sports betting',
        chip3: 'Casino',
        hint: 'The share of all stakes paid back as winnings. Lotteries usually pay back about half, sports betting and casino games 90–97%.',
        decrease: 'Decrease payout rate',
        increase: 'Increase payout rate'
      },
      resultsTitle: 'What it costs',
      in10Years: 'Staked in 10 years',
      perMonth: 'Per month',
      perYear: 'Per year',
      lossPerYear: 'Average loss a year',
      receiptTitle: 'Lottery & betting receipt',
      receiptCount: 'Games',
      receiptBack: 'Back as winnings on average',
      receiptLoss: 'Lost on average',
      runtime: {
        receiptItem: 'Game',
        note: {
          empty: 'Enter the stake, how many times a week you play and the payout rate (0–100).',
          result: 'On average about {back} a year comes back as winnings, so you lose about {loss} a year and {loss10} in 10 years.'
        }
      },
      about: {
        title: 'How the cost of lottery and betting is calculated',
        paragraphs: [
          'The yearly cost is the stake × games per week × 52 weeks. The monthly cost is a twelfth of that, and the 10-year total uses today’s stakes.',
          'The payout rate is the share of all stakes that is paid back as winnings. With a 50% payout rate, £5 twice a week is £520 a year in stakes, of which about £260 comes back as winnings on average – an average loss of £260 a year. One player can win big or lose everything, but over many games the result moves towards the average.',
          'The “If you invested it instead” box shows what the stakes would grow to if you invested them every month instead, at a 4% yearly return over 10 years. If gambling feels hard to control, your GP or the National Gambling Helpline can help.'
        ]
      },
      faq: [
        {
          q: 'How much do I spend on the lottery in a year?',
          a: 'Multiply the stake by the number of games a week and by 52. £5 twice a week is £520 a year and £5,200 in ten years.'
        },
        {
          q: 'What is a payout rate?',
          a: 'It is the share of all stakes that is paid back to players as winnings. Lotteries usually pay back about half of the stakes, while sports betting and casino games pay back 90–97%. The rest goes to the operator – and is what players lose on average.'
        },
        {
          q: 'What if I invested the money instead?',
          a: 'The “If you invested it instead” box shows what you would have after 10 years if you invested your stakes every month instead, at a 4% yearly return compounded monthly. £5 twice a week is about £43.33 a month, which grows to about £6,360 – £5,200 of your own money and the rest returns. Tax, fees and inflation are left out. It is an example, not investment advice.'
        }
      ]
    },

    subscriptions: {
      name: 'Subscriptions',
      heading: 'Subscription cost calculator',
      title: 'Subscription Cost Calculator – Monthly & Yearly Total',
      description: 'Add up streaming, the gym, your mobile and every other subscription. See your total per month, per year and over 10 years, and which subscription costs the most.',
      card: 'Add up streaming, the gym and every other recurring payment in one place.',
      tag: 'Budget',
      lead: 'List everything you pay for regularly and see what it all adds up to. Monthly, yearly and weekly billing are all supported.',
      listTitle: 'Your subscriptions',
      empty: 'No subscriptions yet. Add one below or pick a quick add.',
      add: 'Add subscription',
      quickAdd: 'Quick add',
      quick: {
        1: { name: 'Video streaming', price: '12.99' },
        2: { name: 'Music streaming', price: '12.99' },
        3: { name: 'Gym', price: '29.99' },
        4: { name: 'Cloud storage', price: '2.99' },
        5: { name: 'Mobile plan', price: '12' },
        6: { name: 'News', price: '9.99' }
      },
      note: 'Your list is kept in the page address, so you can bookmark or share it. It is never sent anywhere.',
      row: {
        name: 'Name',
        nameLabel: 'Subscription name',
        priceLabel: 'Price in pounds',
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
      receiptTitle: 'Subscription receipt',
      receiptCount: 'Charges',
      runtime: {
        receiptItem: 'Charge',
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
          a: 'Go through your bank and credit card statements for the last few months and look for direct debits, standing orders and recurring card payments. Also check the subscription settings in the App Store, Google Play and PayPal.'
        },
        {
          q: 'Is a yearly plan cheaper than a monthly one?',
          a: 'Often, by 15–20 %, but only if you would keep the service for the whole year anyway. Add both versions to the list to compare their yearly cost.'
        },
        {
          q: 'Is my list saved?',
          a: 'Your list is kept only in the page address. Bookmark or share the link to keep it; nothing is stored on a server or in cookies.'
        },
        {
          q: 'What if I invested the money instead?',
          a: 'The “If you invested it instead” box shows what your subscriptions would grow to if you invested the same amount every month instead, at a 4% yearly return compounded monthly. £50 a month grows to about £7,335 in 10 years – £6,000 of your own money and the rest returns. Tax, fees and inflation are left out. It is an example, not investment advice.'
        }
      ]
    },

    electricity: {
      name: 'Electricity cost',
      heading: 'Electricity cost calculator',
      title: 'Electricity Cost Calculator – Appliance Running Cost',
      description: 'Calculate what an appliance costs to run per day, month and year from its wattage, hours of use and your electricity unit rate. Free kWh cost calculator.',
      card: 'See what keeping an appliance switched on costs per day, month and year.',
      tag: 'Home',
      lead: 'Enter an appliance’s power, how long it runs and what you pay for electricity to see what it really costs to keep it on.',
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
        label: 'Electricity unit rate',
        unit: 'p per kWh',
        value: '26',
        step: '1',
        divisor: '100',
        hint: 'Use the unit rate from your bill, which already includes VAT. Leave out the daily standing charge.',
        decrease: 'Decrease electricity unit rate',
        increase: 'Increase electricity unit rate'
      },
      resultsTitle: 'Running cost',
      perYear: 'Per year',
      perDayOfUse: 'Per day of use',
      perMonth: 'Per month',
      energyPerYear: 'Energy per year',
      runtime: {
        note: {
          empty: 'Enter the power, daily hours (up to 24), days per week (up to 7) and your electricity unit rate.',
          result: 'Uses about {day} on each day it runs, around {year} a year.'
        }
      },
      about: {
        title: 'How the electricity cost is calculated',
        paragraphs: [
          'Energy use in kilowatt-hours (kWh) is the power in watts × hours of use ÷ 1,000. A 100 W TV used for 4 hours uses 0.4 kWh a day. Multiplying that by your unit rate per kWh gives the cost per day of use.',
          'The yearly cost takes into account how many days a week the appliance runs, spread over the 365 days of the year. The monthly cost is a twelfth of the yearly cost.',
          'You can find the power on the appliance’s rating plate or in its manual. Many appliances use less than their maximum power most of the time, so the result is an upper estimate. The daily standing charge on your bill is paid whether or not the appliance runs, so it does not change what running it costs.'
        ]
      },
      faq: [
        {
          q: 'How do I calculate the electricity cost of an appliance?',
          a: 'Multiply the power in kilowatts by the hours of use and by the unit rate per kWh. A 1,500 W heater running for 3 hours costs 1.5 kW × 3 h × £0.26 = £1.17 a day.'
        },
        {
          q: 'How many kWh does an appliance use?',
          a: 'Divide the wattage by 1,000 and multiply by the hours it runs. A 60 W laptop used 8 hours a day uses 0.48 kWh a day – about 175 kWh a year if it is used every day.'
        },
        {
          q: 'What electricity price should I use?',
          a: 'Use the unit rate per kWh from your electricity bill or your supplier’s app; it already includes VAT. On a time-of-use tariff, use the rate for the hours the appliance runs.'
        },
        {
          q: 'Does standby use electricity?',
          a: 'Yes, many appliances draw a few watts on standby. Enter the standby power and 24 hours a day to see what it costs over a year.'
        }
      ]
    },

    trip: {
      name: 'Journey cost',
      heading: 'Journey fuel cost calculator',
      title: 'Fuel Cost Calculator – Petrol Cost per Journey & Commute',
      description: 'Calculate the petrol or diesel cost of a journey or daily commute and split it between passengers. Works in kilometres and litres or miles and US gallons.',
      card: 'Work out the fuel cost of a journey or commute and split it with others.',
      tag: 'Travel',
      lead: 'Work out the fuel cost of a single journey or your daily commute, and split it between everyone in the car.',
      unit: {
        label: 'Units',
        metric: 'Kilometres & litres',
        us: 'Miles & US gallons'
      },
      distance: {
        label: 'Distance',
        unit: 'km one way',
        decrease: 'Decrease distance',
        increase: 'Increase distance'
      },
      direction: {
        label: 'Journey',
        one: 'One way',
        round: 'Return'
      },
      consumption: {
        label: 'Fuel consumption',
        unit: 'l/100 km',
        hint: 'Know your mpg? Divide 282.5 by it for l/100 km. Driving electric? Enter kWh/100 km and the price per kWh.',
        decrease: 'Decrease fuel consumption',
        increase: 'Increase fuel consumption'
      },
      fuelPrice: {
        label: 'Fuel price',
        unit: '£ per litre',
        value: '1.4',
        step: '0.05',
        usStep: '0.1',
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
        label: 'Journeys per week',
        unit: 'for monthly and yearly totals',
        decrease: 'Decrease journeys per week',
        increase: 'Increase journeys per week'
      },
      resultsTitle: 'Fuel cost',
      perPerson: 'Per person',
      perMonth: 'Per month',
      perYear: 'Per year',
      runtime: {
        direction: { one: 'One way', round: 'Return' },
        unit: {
          metric: {
            distance: 'km one way',
            consumption: 'l/100 km',
            price: '£ per litre',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'miles one way',
            consumption: 'US mpg',
            price: '£ per US gallon',
            perDistance: 'mile',
            fuel: 'US gal'
          }
        },
        note: {
          empty: 'Enter the distance, fuel consumption and fuel price to see the cost.',
          result: 'Uses {fuel} of fuel per journey, about {price} per {distance}.'
        }
      },
      about: {
        title: 'How the journey cost is calculated',
        paragraphs: [
          'In kilometres and litres, the fuel used is the distance × consumption ÷ 100. A 25 km commute each way (50 km a day) in a car that uses 6.5 l/100 km burns 3.25 litres. Multiply by the price per litre for the cost of the journey, and divide by the number of people to split it.',
          'UK mpg figures use the imperial gallon, which is about a fifth bigger than the US gallon of the miles option. To use your car’s mpg, divide 282.5 by it and enter the result in l/100 km: 45 mpg is about 6.3 l/100 km. Switching units converts the values you have entered.',
          'Monthly and yearly totals are based on the journeys per week – 5 return journeys a week is a typical commute. For an electric car, enter the consumption in kWh/100 km and the price per kWh instead.'
        ]
      },
      faq: [
        {
          q: 'How do I calculate the fuel cost of a journey?',
          a: 'Multiply the distance in kilometres by the consumption in l/100 km, divide by 100 and multiply by the price per litre. For 300 km in a car that uses 6 l/100 km with petrol at £1.40 a litre: 300 × 6 ÷ 100 × £1.40 = £25.20.'
        },
        {
          q: 'My car’s fuel economy is in mpg – what do I enter?',
          a: 'UK mpg uses imperial gallons. Divide 282.5 by your mpg to get litres per 100 km – 45 mpg is about 6.3 l/100 km – and use kilometres and litres. The Miles & US gallons option expects US mpg, which is about a sixth lower than the UK figure for the same car.'
        },
        {
          q: 'How do I split fuel costs between passengers?',
          a: 'Enter the number of people sharing the cost. The calculator divides the journey cost evenly between everyone, including the driver.'
        },
        {
          q: 'Does the calculator include wear, parking or tolls?',
          a: 'No, it counts fuel only. Wear and tear, insurance, road tax, parking and tolls come on top, so the full cost of driving is higher.'
        }
      ]
    }
  }
};
