// Dutch (Netherlands) texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in euros.

module.exports = {
  meta: {
    name: 'Nederlands',
    locale: 'nl-NL',
    currency: 'EUR',
    ogLocale: 'nl_NL'
  },

  money: {
    symbol: '€',
    zero: '€ 0,00',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Naar de inhoud',
    home: 'Home',
    toggleTheme: 'Thema wisselen',
    themeToLight: 'Overschakelen naar licht thema',
    themeToDark: 'Overschakelen naar donker thema',
    language: 'Taal',
    allTools: 'Alle tools',
    share: 'Delen',
    settings: 'Instellingen',
    quickPicks: 'Snelkeuze',
    faqTitle: 'Veelgestelde vragen',
    relatedTools: 'Meer calculators',
    imageAlt: 'costsimulators.com – gratis calculators voor alledaagse vragen over geld'
  },

  footer: {
    privacy: 'Werkt volledig in je browser. Geen cookies, geen tracking.',
    about: 'Over deze site',
    contact: 'Contact',
    privacyPolicy: 'Privacy',
    terms: 'Voorwaarden'
  },

  runtime: {
    share: {
      linkCopied: 'Link gekopieerd',
      copyFailed: 'Kopiëren mislukt',
      copied: 'Gekopieerd!',
      calculatedWith: 'Berekend met costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} uur',
      hoursMinutes: '{h} uur {m} min'
    }
  },

  home: {
    title: 'Gratis calculators voor alledaagse kosten',
    description: 'Gratis, privacyvriendelijke calculators die laten zien wat dingen echt kosten: vergaderingen, werkuren, koffie, roken, abonnementen, stroom en brandstof. Zonder account, in je browser.',
    eyebrow: 'Gratis · Privé · Direct',
    heading: 'Kleine tools voor alledaagse vragen over <span class="accent-text">geld</span>.',
    lead: 'Snelle calculators die laten zien wat dingen echt kosten. Geen account, geen tracking – alles werkt gewoon in je browser.',
    toolsTitle: 'Tools',
    toolCount: '{count} tools',
    suggestTitle: 'Heb je een idee?',
    suggestText: 'Stel een nieuwe tool voor op GitHub.',
    whyTitle: 'Kleine kosten tellen op',
    whyText1: 'Eén vergadering, een koffie onderweg naar je werk of nog een streamingdienst voelt op zichzelf zelden duur. Tel ze op over een maand, een jaar of tien jaar, en de bedragen zien er heel anders uit.',
    whyText2: 'Elke calculator doet één ding, vraagt alleen de getallen die nodig zijn en laat meteen het antwoord zien. Alles wordt in je browser berekend, dus je getallen blijven op je eigen apparaat.',
    aboutLink: 'Meer over costsimulators.com',
    faq: [
      {
        q: 'Is costsimulators.com gratis?',
        a: 'Ja. Alle calculators zijn helemaal gratis, zonder account, betaalmuur of advertenties. Je mag ze ook op je werk gebruiken.'
      },
      {
        q: 'Worden mijn gegevens opgeslagen of ergens naartoe gestuurd?',
        a: 'Nee. Alles wat je invult, wordt in je browser berekend en nooit naar een server gestuurd. De site plaatst geen cookies en gebruikt geen analysetools.'
      },
      {
        q: 'Kan ik een berekening delen?',
        a: 'Ja. Je instellingen staan in het adres van de pagina. Klik op Delen om de link te kopiëren; wie de link opent, ziet dezelfde berekening.'
      }
    ]
  },

  notFound: {
    title: 'Pagina niet gevonden',
    description: 'De pagina die je zoekt, bestaat niet.',
    heading: 'Deze pagina bestaat niet.',
    lead: 'Misschien is het adres verkeerd getypt of is de pagina verplaatst. Alle calculators staan op de startpagina.'
  },

  documents: {
    about: {
      name: 'Over deze site',
      title: 'Over deze site – gratis kostencalculators zonder tracking',
      description: 'Wie costsimulators.com maakt en hoe de calculators werken. Gratis kostencalculators zonder tracking voor vergaderingen, werkuren, gewoontes, abonnementen, stroom en ritten.'
    },
    privacy: {
      name: 'Privacyverklaring',
      title: 'Privacyverklaring',
      description: 'Hoe costsimulators.com met je gegevens omgaat: berekeningen gebeuren in je browser, zonder tracking, zonder analysetools en zonder accounts.'
    },
    terms: {
      name: 'Gebruiksvoorwaarden',
      title: 'Gebruiksvoorwaarden',
      description: 'Gebruiksvoorwaarden van costsimulators.com: gratis voor persoonlijk en zakelijk gebruik, zonder garanties en met open source code onder de MIT-licentie.'
    }
  },

  tools: {
    meetings: {
      name: 'Vergaderkosten',
      heading: 'Vergaderkostencalculator',
      title: 'Vergaderkosten berekenen – wat kost een vergadering?',
      description: 'Gratis vergaderkostencalculator met live timer. Vul het uurtarief en het aantal deelnemers in en zie seconde voor seconde wat de vergadering kost.',
      card: 'Zie de kosten van een vergadering live oplopen terwijl jullie praten.',
      tag: 'Live timer',
      lead: 'Stel het uurtarief en het aantal deelnemers in, druk op Start en zie wat de vergadering kost terwijl die loopt.',
      pulseEvery: '1',
      rate: {
        label: 'Uurtarief',
        unit: '€ per persoon',
        step: '5',
        value: '60',
        decrease: 'Uurtarief verlagen',
        increase: 'Uurtarief verhogen'
      },
      persons: {
        label: 'Deelnemers',
        unit: 'personen',
        decrease: 'Minder deelnemers',
        increase: 'Meer deelnemers'
      },
      perMinute: 'Per minuut',
      perHour: 'Per uur',
      note: 'Je kunt de waarden aanpassen terwijl de timer loopt. Wie later aanschuift of eerder vertrekt, telt vanaf dat moment mee.',
      total: 'Totale kosten',
      elapsed: 'Verstreken tijd',
      reset: 'Resetten',
      copyReport: 'Verslag kopiëren',
      kbdHint: 'Druk op de <kbd>spatiebalk</kbd> om te starten of te pauzeren',
      runtime: {
        mode: { start: 'Start', pause: 'Pauzeer', resume: 'Hervat' },
        status: { ready: 'Klaar', live: 'Live', paused: 'Gepauzeerd' },
        announce: {
          invalid: 'Vul een uurtarief en het aantal deelnemers in om te starten.',
          started: 'Timer gestart.',
          paused: 'Gepauzeerd bij {cost} na {time}.',
          reset: 'Timer gereset.'
        },
        report: {
          cost: 'Kosten van de vergadering: {cost}',
          duration: 'Duur: {time}',
          participants: 'Deelnemers: {persons} × {rate} per uur'
        }
      },
      about: {
        title: 'Zo worden de vergaderkosten berekend',
        paragraphs: [
          'De calculator vermenigvuldigt het aantal deelnemers met hun uurtarief en met de verstreken tijd. Een vergadering van een uur met 5 personen à € 60 per uur kost € 300 – dat is € 5 per minuut.',
          'Gebruik als uurtarief wat een uur werk de werkgever echt kost, niet alleen het salaris. Een gangbare vuistregel is om zo’n 30 tot 40% bij het bruto-uurloon op te tellen voor werkgeverslasten zoals sociale premies, pensioenpremie en vakantiegeld. Weet je niet van iedereen het tarief, dan volstaat een gemiddelde voor het team.',
          'De timer telt ook in een achtergrondtabblad correct door, en de oplopende kosten staan in de titel van het browsertabblad, zodat je ze in de gaten kunt houden terwijl je je scherm deelt. Is de vergadering afgelopen, pauzeer dan de timer en kopieer een kort verslag voor de notulen.'
        ]
      },
      faq: [
        {
          q: 'Hoe bereken ik de kosten van een vergadering?',
          a: 'Vermenigvuldig het aantal deelnemers met hun gemiddelde uurtarief en met de duur van de vergadering in uren. Bijvoorbeeld: 6 personen × € 50 per uur × 1,5 uur = € 450. Deze calculator rekent het live voor je uit terwijl de vergadering loopt.'
        },
        {
          q: 'Welk uurtarief moet ik gebruiken?',
          a: 'Gebruik de volledige kosten van een uur werk: het bruto-uurloon plus werkgeverslasten zoals sociale premies, pensioenpremie en vakantiegeld. Voor zzp’ers, consultants en andere ingehuurde krachten gebruik je het uurtarief dat ze factureren.'
        },
        {
          q: 'Kan ik het aantal deelnemers tijdens de vergadering aanpassen?',
          a: 'Ja. Pas het aantal deelnemers of het tarief op elk moment aan. De nieuwe waarden tellen vanaf dat moment mee, en de kosten die al zijn opgebouwd, blijven gewoon staan.'
        },
        {
          q: 'Loopt de timer door als ik van tabblad wissel?',
          a: 'Ja. De timer werkt op basis van de klok, dus het totaal klopt ook in een achtergrondtabblad. Zolang de timer loopt, vraagt de pagina de browser bovendien om het scherm aan te laten.'
        }
      ]
    },

    workhours: {
      name: 'Prijs in werkuren',
      heading: 'Prijs omrekenen naar werkuren',
      title: 'Prijs in werkuren – hoe lang moet je ervoor werken?',
      description: 'Reken elke prijs om naar de uren, dagen en weken werk die het kost. Vul je uur-, maand- of jaarloon in en zie wat een aankoop echt kost in werktijd.',
      card: 'Reken elke prijs om naar de uren, dagen en weken die je ervoor moet werken.',
      tag: 'Werk',
      lead: 'Vul je loon en een prijs in en zie hoe lang je moet werken om het te kunnen betalen.',
      period: {
        label: 'Ik ken mijn loon',
        hour: 'Per uur',
        month: 'Per maand',
        year: 'Per jaar'
      },
      pay: {
        label: 'Loon',
        unit: '€ per uur',
        value: '17',
        step: '1',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Gebruik je nettoloon na belastingen voor het eerlijkste antwoord.',
        decrease: 'Loon verlagen',
        increase: 'Loon verhogen'
      },
      hoursPerWeek: {
        label: 'Uren per week',
        unit: 'uur',
        value: '40',
        chip1: '36 uur',
        chip2: '40 uur',
        preset1: '36',
        preset2: '40',
        decrease: 'Minder uren per week',
        increase: 'Meer uren per week'
      },
      price: {
        label: 'Prijs',
        unit: '€',
        value: '999',
        step: '10',
        decrease: 'Prijs verlagen',
        increase: 'Prijs verhogen'
      },
      resultsTitle: 'Prijs in werktijd',
      youNeedToWork: 'Hiervoor moet je werken',
      workDays: 'Werkdagen',
      workWeeks: 'Werkweken',
      hourlyRate: 'Je uurloon',
      runtime: {
        unit: {
          hour: '€ per uur',
          month: '€ per maand',
          year: '€ per jaar'
        },
        days: { one: '{n} dag', other: '{n} dagen' },
        weeks: { one: '{n} week', other: '{n} weken' },
        note: {
          empty: 'Vul je loon, je uren per week en een prijs in om te zien hoe lang je ervoor moet werken.',
          result: 'Uitgaande van werkdagen van {hours} uur, {days} dagen per week.'
        }
      },
      about: {
        title: 'Zo wordt de werktijd berekend',
        paragraphs: [
          'Eerst wordt je loon omgerekend naar een uurloon. Een maandloon wordt vermenigvuldigd met 12 en gedeeld door het aantal uren dat je per jaar werkt (uren per week × 52); een jaarloon wordt direct door die uren gedeeld. Daarna wordt de prijs gedeeld door je uurloon.',
          'Werkdagen gaan uit van een vijfdaagse werkweek, dus 40 uur per week betekent werkdagen van 8 uur. Bij € 17 per uur kost een telefoon van € 999 bijvoorbeeld bijna 59 uur werk – ruim zeven werkdagen, bijna anderhalve werkweek.',
          'Gebruik voor het eerlijkste antwoord je nettoloon na belastingen, want dat is het geld dat je echt uitgeeft. Prijzen zien als werkuren is een simpele manier om te bepalen of iets het echt waard is.'
        ]
      },
      faq: [
        {
          q: 'Hoeveel uur moet ik werken om iets te kunnen kopen?',
          a: 'Deel de prijs door je netto-uurloon. Verdien je € 16 per uur na belastingen, dan kost een aankoop van € 400 je 25 uur werk.'
        },
        {
          q: 'Moet ik mijn bruto- of nettoloon gebruiken?',
          a: 'Je nettoloon na belastingen geeft het meest realistische antwoord, want dat is het geld dat je echt kunt uitgeven. Met je brutoloon lijken dingen goedkoper dan ze zijn.'
        },
        {
          q: 'Hoe reken ik een maandloon om naar een uurloon?',
          a: 'Vermenigvuldig je maandloon met 12 en deel het door het aantal uren dat je per jaar werkt. Bij een werkweek van 40 uur zijn dat 2.080 uur, dus € 3.000 netto per maand is ongeveer € 17,30 per uur. De calculator doet dit voor je als je Per maand kiest. Krijg je ook vakantiegeld of een dertiende maand, kies dan Per jaar en vul je nettojaarloon in.'
        }
      ]
    },

    coffee: {
      name: 'Koffiekosten',
      heading: 'Koffiecalculator',
      title: 'Koffiekosten berekenen – wat kost je koffie per jaar?',
      description: 'Zie wat je dagelijkse koffie kost per maand en over 1, 5 en 10 jaar. Vul de prijs per kopje en het aantal kopjes per week in – gratis en privé.',
      card: 'Zie wat je dagelijkse kopje koffie kost over één, vijf en tien jaar.',
      tag: 'Gewoonte',
      lead: 'Vul in wat een kopje kost en hoe vaak je er een koopt, en zie wat die gewoonte in de loop der jaren kost.',
      price: {
        label: 'Prijs per kopje',
        unit: '€',
        step: '0.1',
        value: '3.5',
        decrease: 'Koffieprijs verlagen',
        increase: 'Koffieprijs verhogen'
      },
      perWeek: {
        label: 'Kopjes per week',
        unit: 'kopjes',
        chip1: 'Werkdagen',
        chip2: 'Elke dag',
        chip3: 'Twee per dag',
        decrease: 'Minder kopjes per week',
        increase: 'Meer kopjes per week'
      },
      resultsTitle: 'Dit kost het je',
      in10Years: 'In 10 jaar',
      perMonth: 'Per maand',
      year1: '1 jaar',
      year5: '5 jaar',
      runtime: {
        note: {
          empty: 'Vul een prijs in en hoeveel kopjes je per week drinkt om de totalen te zien.',
          result: 'Dat zijn zo’n {cups} kopjes per jaar à {price}.'
        }
      },
      about: {
        title: 'Zo worden de koffiekosten berekend',
        paragraphs: [
          'De kosten per jaar zijn de prijs per kopje × kopjes per week × 52 weken. De kosten per maand zijn de jaarkosten gedeeld door 12, en voor de totalen over 5 en 10 jaar worden de jaarkosten vermenigvuldigd, zonder inflatie of prijsstijgingen.',
          'Een cappuccino van € 3,50 op elke werkdag kost zo’n € 910 per jaar en € 9.100 in tien jaar. Schrik je van dat bedrag? Zet je koffie dan thuis en neem hem mee in een thermosbeker – een makkelijke manier om te besparen.',
          'De calculator werkt voor elke kleine, terugkerende aankoop: een energiedrankje, een broodje voor de lunch of een flesje water. Vul de prijs in en hoeveel je er per week koopt.'
        ]
      },
      faq: [
        {
          q: 'Wat kost een dagelijks kopje koffie per jaar?',
          a: 'Eén kopje per dag, zeven dagen per week, is 364 kopjes per jaar. Bij € 3 per kopje is dat € 1.092 per jaar en € 10.920 in tien jaar.'
        },
        {
          q: 'Is koffie thuis zetten goedkoper?',
          a: 'Meestal flink goedkoper. Een kop koffie die je thuis zet, kost vaak nog geen 30 cent, terwijl je in een koffiebar al snel een paar euro betaalt. Vul je prijs per kopje thuis in om te vergelijken.'
        },
        {
          q: 'Houdt de calculator rekening met inflatie?',
          a: 'Nee. De berekeningen gaan ervan uit dat de prijs gelijk blijft, dus ze laten zien wat de gewoonte kost tegen de prijzen van nu. Als de prijzen stijgen, zijn de werkelijke kosten op lange termijn hoger.'
        }
      ]
    },

    smoking: {
      name: 'Rookkosten',
      heading: 'Rookkostencalculator',
      title: 'Kosten van roken berekenen – wat kost roken per jaar?',
      description: 'Bereken wat roken kost per maand en over 1, 5 en 10 jaar – en hoeveel je bespaart als je stopt. Vul de prijs per pakje en het aantal sigaretten per dag in.',
      card: 'Zie hoeveel geld er elke maand en in de loop der jaren in rook opgaat.',
      tag: 'Gewoonte',
      lead: 'Vul in wat een pakje kost en hoeveel je rookt, en zie hoeveel geld er in de loop der jaren in rook opgaat.',
      packPrice: {
        label: 'Prijs per pakje',
        unit: '€',
        step: '0.1',
        value: '12',
        decrease: 'Pakjesprijs verlagen',
        increase: 'Pakjesprijs verhogen'
      },
      perDay: {
        label: 'Sigaretten per dag',
        unit: 'sigaretten',
        chip1: '5 per dag',
        chip2: '10 per dag',
        chip3: '20 per dag',
        decrease: 'Minder sigaretten per dag',
        increase: 'Meer sigaretten per dag'
      },
      perPack: {
        label: 'Sigaretten per pakje',
        unit: 'stuks',
        value: '20',
        decrease: 'Minder sigaretten per pakje',
        increase: 'Meer sigaretten per pakje'
      },
      resultsTitle: 'In rook opgegaan',
      in10Years: 'In 10 jaar',
      perMonth: 'Per maand',
      year1: '1 jaar',
      year5: '5 jaar',
      runtime: {
        note: {
          empty: 'Vul de prijs per pakje in, hoeveel sigaretten je per dag rookt en hoeveel er in een pakje zitten om de totalen te zien.',
          result: 'Dat zijn zo’n {cigarettes} sigaretten ({packs} pakjes) per jaar à {price} per stuk.'
        }
      },
      about: {
        title: 'Zo worden de kosten van roken berekend',
        paragraphs: [
          'De prijs van één sigaret is de pakjesprijs gedeeld door het aantal sigaretten in een pakje. Dat wordt vermenigvuldigd met het aantal sigaretten per dag en met 365 dagen voor de kosten per jaar. De kosten per maand zijn een twaalfde daarvan, en de totalen over 5 en 10 jaar gaan uit van de prijzen van nu.',
          'Een half pakje per dag à € 12 per pakje kost zo’n € 2.190 per jaar en bijna € 22.000 in tien jaar. Dat totaal zien kan een flinke motivatie zijn: van hetzelfde geld kun je op reis, sparen of schulden aflossen.',
          'De calculator telt alleen de prijs van de sigaretten. Zorgkosten en ziektedagen komen daar nog bij. Wil je hulp bij het stoppen? Kijk op Ikstopnu.nl van het Trimbos-instituut of vraag je huisarts om advies.'
        ]
      },
      faq: [
        {
          q: 'Wat kost een pakje per dag per jaar?',
          a: 'Een pakje per dag is 365 pakjes per jaar. Bij € 12 per pakje is dat € 4.380 per jaar en € 43.800 in tien jaar.'
        },
        {
          q: 'Hoeveel geld bespaar ik als ik stop met roken?',
          a: 'Alles wat deze calculator laat zien. Vul in hoeveel je nu rookt: de totalen per maand en per jaar zijn wat stoppen je oplevert.'
        },
        {
          q: 'Werkt dit ook voor shag?',
          a: 'Ja. Vul de prijs van een pakje shag in als pakjesprijs, het aantal sigaretten dat je ervan draait als aantal per pakje, en hoeveel je er per dag rookt.'
        }
      ]
    },

    subscriptions: {
      name: 'Abonnementen',
      heading: 'Abonnementencalculator',
      title: 'Abonnementen berekenen – totale kosten per maand en jaar',
      description: 'Tel streaming, sportschool, telefoon en al je andere abonnementen bij elkaar op. Zie je totaal per maand, per jaar en over 10 jaar, en welk abonnement het duurst is.',
      card: 'Tel streaming, sportschool en alle andere terugkerende betalingen op één plek bij elkaar op.',
      tag: 'Budget',
      lead: 'Zet alles op een rij waarvoor je regelmatig betaalt en zie wat het samen kost. Betalen per maand, per jaar of per week kan allemaal.',
      listTitle: 'Je abonnementen',
      empty: 'Nog geen abonnementen. Voeg er hieronder een toe of kies er een bij Snel toevoegen.',
      add: 'Abonnement toevoegen',
      quickAdd: 'Snel toevoegen',
      quick: {
        1: { name: 'Videostreaming', price: '13.99' },
        2: { name: 'Muziekstreaming', price: '11.99' },
        3: { name: 'Sportschool', price: '29.99' },
        4: { name: 'Cloudopslag', price: '2.99' },
        5: { name: 'Sim-only-abonnement', price: '15' },
        6: { name: 'Nieuws', price: '14.99' }
      },
      note: 'Je lijst staat in het adres van de pagina, dus je kunt hem als bladwijzer opslaan of delen. Hij wordt nergens naartoe gestuurd.',
      row: {
        name: 'Naam',
        nameLabel: 'Naam van het abonnement',
        priceLabel: 'Prijs in euro',
        cycleLabel: 'Betaalperiode',
        monthly: '/ maand',
        yearly: '/ jaar',
        weekly: '/ week'
      },
      resultsTitle: 'Totaal aan abonnementen',
      perYear: 'Per jaar',
      perMonth: 'Per maand',
      perDay: 'Per dag',
      in10Years: 'In 10 jaar',
      breakdownLabel: 'Jaarkosten per abonnement',
      copySummary: 'Overzicht kopiëren',
      runtime: {
        untitled: 'Naamloos',
        remove: '{name} verwijderen',
        removeUnnamed: 'Abonnement verwijderen',
        breakdown: '{cost} / jaar · {percent}%',
        cycle: { monthly: 'maand', yearly: 'jaar', weekly: 'week' },
        note: {
          empty: 'Voeg een abonnement met een prijs toe om de totalen te zien.',
          single: 'Dat is {cost} per jaar voor {name}.',
          biggest: 'Je grootste kostenpost is {name}: {cost} per jaar, {percent}% van het totaal.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Totaal: {month} per maand, {year} per jaar'
        }
      },
      about: {
        title: 'Zo wordt het totaal van je abonnementen berekend',
        paragraphs: [
          'Elk abonnement wordt omgerekend naar jaarkosten: maandprijzen worden vermenigvuldigd met 12, weekprijzen met 52, en jaarprijzen worden gebruikt zoals ze zijn. Het jaartotaal wordt daarna gedeeld door 12 voor de kosten per maand en door 365 voor de kosten per dag.',
          'Het overzicht zet je abonnementen op volgorde van duur naar goedkoop en toont het aandeel van elk abonnement in het totaal. Zo zie je snel wat je kunt opzeggen of goedkoper kunt maken.',
          'Je lijst wordt opgeslagen in het adres van de pagina, nooit op een server. Sla de pagina op als bladwijzer om later terug te keren naar je lijst, of deel de link om gezamenlijke abonnementen met je gezin door te nemen.'
        ]
      },
      faq: [
        {
          q: 'Hoe vind ik al mijn abonnementen?',
          a: 'Loop de afschriften van je bankrekening en creditcard van de afgelopen maanden door en zoek naar automatische incasso’s en andere terugkerende afschrijvingen. Kijk ook bij de abonnementsinstellingen in de App Store, Google Play en PayPal.'
        },
        {
          q: 'Is een jaarabonnement goedkoper dan een maandabonnement?',
          a: 'Vaak wel, zo’n 15–20%, maar alleen als je de dienst toch het hele jaar zou houden. Zet beide varianten in de lijst om de jaarkosten te vergelijken.'
        },
        {
          q: 'Wordt mijn lijst opgeslagen?',
          a: 'Je lijst staat alleen in het adres van de pagina. Sla de link op als bladwijzer of deel hem om de lijst te bewaren; er wordt niets opgeslagen op een server of in cookies.'
        }
      ]
    },

    electricity: {
      name: 'Stroomkosten',
      heading: 'Stroomkostencalculator',
      title: 'Stroomkosten berekenen – stroomverbruik per apparaat',
      description: 'Bereken wat een apparaat per dag, maand en jaar aan stroom kost op basis van het vermogen, de gebruiksduur en je stroomprijs. Gratis kWh-calculator.',
      card: 'Zie wat het kost om een apparaat aan te laten staan, per dag, maand en jaar.',
      tag: 'Thuis',
      lead: 'Vul het vermogen van een apparaat in, hoe lang het aanstaat en wat je voor stroom betaalt, en zie wat het echt kost om het aan te laten staan.',
      power: {
        label: 'Vermogen',
        unit: 'watt',
        chip1: 'Ledlamp 9 W',
        chip2: 'Laptop 60 W',
        chip3: 'Tv 100 W',
        chip4: 'Gaming-pc 400 W',
        chip5: 'Kachel 1500 W',
        decrease: 'Vermogen verlagen',
        increase: 'Vermogen verhogen'
      },
      hours: {
        label: 'Uren per dag',
        unit: 'uur',
        decrease: 'Minder uren per dag',
        increase: 'Meer uren per dag'
      },
      days: {
        label: 'Dagen per week',
        unit: 'dagen',
        decrease: 'Minder dagen per week',
        increase: 'Meer dagen per week'
      },
      kwhPrice: {
        label: 'Stroomprijs',
        unit: '€/kWh',
        value: '0.27',
        step: '0.01',
        divisor: '1',
        hint: 'Reken met het kWh-tarief inclusief energiebelasting en btw voor het nauwkeurigste resultaat.',
        decrease: 'Stroomprijs verlagen',
        increase: 'Stroomprijs verhogen'
      },
      resultsTitle: 'Gebruikskosten',
      perYear: 'Per jaar',
      perDayOfUse: 'Per gebruiksdag',
      perMonth: 'Per maand',
      energyPerYear: 'Verbruik per jaar',
      runtime: {
        note: {
          empty: 'Vul het vermogen, de uren per dag (maximaal 24), de dagen per week (maximaal 7) en je stroomprijs in.',
          result: 'Het apparaat verbruikt zo’n {day} per dag dat het aanstaat, ongeveer {year} per jaar.'
        }
      },
      about: {
        title: 'Zo worden de stroomkosten berekend',
        paragraphs: [
          'Het energieverbruik in kilowattuur (kWh) is het vermogen in watt × het aantal gebruiksuren ÷ 1.000. Een tv van 100 W die 4 uur aanstaat, verbruikt 0,4 kWh per dag. Vermenigvuldig dat met je stroomprijs per kWh en je hebt de kosten per gebruiksdag.',
          'De jaarkosten houden rekening met het aantal dagen per week dat het apparaat aanstaat, verdeeld over de 365 dagen van het jaar. De kosten per maand zijn een twaalfde van de jaarkosten.',
          'Het vermogen vind je op het typeplaatje van het apparaat of in de handleiding. Veel apparaten verbruiken meestal minder dan hun maximale vermogen, dus de uitkomst is een bovengrens. Reken voor de nauwkeurigste prijs met het kWh-tarief inclusief energiebelasting en btw, niet alleen met de kale leveringsprijs.'
        ]
      },
      faq: [
        {
          q: 'Hoe bereken ik de stroomkosten van een apparaat?',
          a: 'Vermenigvuldig het vermogen in kilowatt met het aantal gebruiksuren en met de prijs per kWh. Een kachel van 1.500 W die 3 uur aanstaat, kost 1,5 kW × 3 uur × € 0,27 ≈ € 1,22 per dag.'
        },
        {
          q: 'Hoeveel kWh verbruikt een apparaat?',
          a: 'Deel het vermogen in watt door 1.000 en vermenigvuldig met het aantal uren dat het aanstaat. Een laptop van 60 W die 8 uur per dag aanstaat, verbruikt 0,48 kWh per dag – ongeveer 175 kWh per jaar als je hem elke dag gebruikt.'
        },
        {
          q: 'Welke stroomprijs moet ik gebruiken?',
          a: 'Gebruik je tarief per kWh inclusief energiebelasting en btw, zoals dat in je energiecontract of op je jaarafrekening staat. Wil je een gemiddelde inclusief vaste leveringskosten en netbeheerkosten, deel dan het totaalbedrag voor stroom op je jaarafrekening door het aantal verbruikte kWh.'
        },
        {
          q: 'Verbruikt stand-by ook stroom?',
          a: 'Ja, veel apparaten verbruiken in stand-by een paar watt. Vul het stand-byvermogen in en 24 uur per dag om te zien wat dat per jaar kost.'
        }
      ]
    },

    trip: {
      name: 'Ritkosten',
      heading: 'Brandstofkostencalculator',
      title: 'Brandstofkosten berekenen – per rit en woon-werkverkeer',
      description: 'Bereken de brandstofkosten van een rit of je dagelijkse woon-werkverkeer en verdeel ze over de inzittenden. Werkt met kilometers en liters of met mijlen en gallons.',
      card: 'Bereken de brandstofkosten van een rit of woon-werkverkeer en deel ze met anderen.',
      tag: 'Reizen',
      lead: 'Bereken de brandstofkosten van een losse rit of je dagelijkse woon-werkverkeer, en verdeel ze over iedereen in de auto.',
      unit: {
        label: 'Eenheden',
        metric: 'Kilometers en liters',
        us: 'Mijlen en gallons'
      },
      distance: {
        label: 'Afstand',
        unit: 'km enkele reis',
        decrease: 'Afstand verkleinen',
        increase: 'Afstand vergroten'
      },
      direction: {
        label: 'Rit',
        one: 'Enkele reis',
        round: 'Heen en terug'
      },
      consumption: {
        label: 'Verbruik',
        unit: 'l/100 km',
        hint: 'Rijd je elektrisch? Vul kWh/100 km en de prijs per kWh in.',
        decrease: 'Verbruik verlagen',
        increase: 'Verbruik verhogen'
      },
      fuelPrice: {
        label: 'Brandstofprijs',
        unit: '€ per liter',
        value: '1.95',
        step: '0.05',
        usStep: '0.1',
        decrease: 'Brandstofprijs verlagen',
        increase: 'Brandstofprijs verhogen'
      },
      people: {
        label: 'Personen die meebetalen',
        unit: 'personen',
        decrease: 'Minder personen',
        increase: 'Meer personen'
      },
      tripsPerWeek: {
        label: 'Ritten per week',
        unit: 'voor maand- en jaartotalen',
        decrease: 'Minder ritten per week',
        increase: 'Meer ritten per week'
      },
      resultsTitle: 'Brandstofkosten',
      perPerson: 'Per persoon',
      perMonth: 'Per maand',
      perYear: 'Per jaar',
      runtime: {
        direction: { one: 'Enkele reis', round: 'Heen en terug' },
        unit: {
          metric: {
            distance: 'km enkele reis',
            consumption: 'l/100 km',
            price: '€ per liter',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'mijl enkele reis',
            consumption: 'mpg',
            price: '€ per gallon',
            perDistance: 'mijl',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Vul de afstand, het verbruik en de brandstofprijs in om de kosten te zien.',
          result: 'Je verbruikt {fuel} brandstof per rit, dat is ongeveer {price} per {distance}.'
        }
      },
      about: {
        title: 'Zo worden de ritkosten berekend',
        paragraphs: [
          'Het brandstofverbruik is de afstand × het verbruik ÷ 100. Is je woon-werkafstand 25 km enkele reis (50 km per dag) en verbruikt je auto 6,5 l/100 km, dan gebruik je 3,25 liter per dag. Vermenigvuldig dat met de literprijs voor de kosten van de rit, en deel door het aantal personen om de kosten te verdelen.',
          'Ken je het verbruik alleen als ‘1 op 15’? Reken het om met 100 ÷ 15 ≈ 6,7 l/100 km. In mijlen en gallons is de verbruikte brandstof de afstand gedeeld door het aantal mijlen per gallon (mpg). Als je van eenheid wisselt, worden de ingevulde waarden omgerekend, zodat je cijfers uit beide systemen kunt vergelijken.',
          'De totalen per maand en per jaar gaan uit van het aantal ritten per week – 5 keer heen en terug per week is gebruikelijk voor woon-werkverkeer. Rijd je elektrisch, vul dan het verbruik in kWh/100 km en de prijs per kWh in.'
        ]
      },
      faq: [
        {
          q: 'Hoe bereken ik de brandstofkosten van een rit?',
          a: 'Vermenigvuldig de afstand met het verbruik en de brandstofprijs en deel door 100. Voor 200 km met een auto die 6 l/100 km verbruikt, met Euro 95 à € 1,95 per liter: 200 × 6 ÷ 100 × € 1,95 = € 23,40.'
        },
        {
          q: 'Hoe verdeel ik de brandstofkosten over de inzittenden?',
          a: 'Vul het aantal personen in dat meebetaalt. De calculator verdeelt de kosten van de rit gelijk over iedereen, de bestuurder inbegrepen.'
        },
        {
          q: 'Rekent de calculator ook met slijtage, parkeren of wegenbelasting?',
          a: 'Nee, alleen met brandstof. Slijtage, verzekering, wegenbelasting, parkeerkosten en eventuele tol komen er nog bij, dus de totale kosten van autorijden liggen hoger.'
        }
      ]
    }
  }
};
