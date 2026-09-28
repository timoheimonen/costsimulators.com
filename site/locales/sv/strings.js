// Swedish texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in Swedish
// kronor (SEK).

module.exports = {
  meta: {
    name: 'Svenska',
    locale: 'sv-SE',
    currency: 'SEK',
    ogLocale: 'sv_SE'
  },

  money: {
    symbol: 'kr',
    zero: '0,00 kr',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Hoppa till innehållet',
    home: 'Startsida',
    toggleTheme: 'Byt tema',
    themeToLight: 'Byt till ljust tema',
    themeToDark: 'Byt till mörkt tema',
    language: 'Språk',
    allTools: 'Alla verktyg',
    share: 'Dela',
    settings: 'Inställningar',
    quickPicks: 'Snabbval',
    faqTitle: 'Vanliga frågor',
    relatedTools: 'Fler räknare',
    imageAlt: 'costsimulators.com – gratis kostnadsräknare för vardagens pengafrågor'
  },

  footer: {
    privacy: 'Körs helt i din webbläsare. Inga kakor, ingen spårning.',
    about: 'Om webbplatsen',
    contact: 'Kontakt',
    privacyPolicy: 'Integritet',
    terms: 'Villkor'
  },

  runtime: {
    share: {
      linkCopied: 'Länken har kopierats',
      copyFailed: 'Det gick inte att kopiera',
      copied: 'Kopierat!',
      calculatedWith: 'Beräknat med costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} tim',
      hoursMinutes: '{h} tim {m} min'
    }
  },

  home: {
    title: 'Gratis kostnadsräknare för vardagen',
    description: 'Gratis och privata räknare som visar vad saker egentligen kostar: möten, arbetstimmar, kaffe, rökning, prenumerationer, el och bensin. Ingen registrering, allt körs i webbläsaren.',
    eyebrow: 'Gratis · Privat · Direkt',
    heading: 'Små verktyg för vardagens <span class="accent-text">pengafrågor</span>.',
    lead: 'Snabba räknare som visar vad saker egentligen kostar. Ingen registrering, ingen spårning – allt körs direkt i din webbläsare.',
    toolsTitle: 'Verktyg',
    toolCount: '{count} verktyg',
    suggestTitle: 'Har du en idé?',
    suggestText: 'Föreslå ett nytt verktyg på GitHub.',
    whyTitle: 'Många bäckar små',
    whyText1: 'Ett enstaka möte, en kaffe på väg till jobbet eller ännu en streamingtjänst känns sällan dyrt i sig. Men lägg ihop dem över en månad, ett år eller ett decennium, så ser siffrorna helt annorlunda ut.',
    whyText2: 'Varje räknare gör en sak, frågar bara efter de siffror den behöver och visar svaret direkt. Allt räknas ut i din webbläsare, så dina siffror stannar på din enhet.',
    aboutLink: 'Mer om costsimulators.com',
    faq: [
      {
        q: 'Är costsimulators.com gratis?',
        a: 'Ja. Alla räknare är helt gratis, utan registrering, betalvägg eller annonser. Du får också använda dem i jobbet.'
      },
      {
        q: 'Sparas eller skickas mina siffror någonstans?',
        a: 'Nej. Allt du fyller i räknas ut i din webbläsare och skickas aldrig till någon server. Webbplatsen använder inga kakor och inga analysverktyg.'
      },
      {
        q: 'Kan jag dela en uträkning?',
        a: 'Ja. Dina inställningar sparas i sidans adress. Tryck på Dela för att kopiera länken, så ser den som öppnar den samma uträkning.'
      }
    ]
  },

  notFound: {
    title: 'Sidan hittades inte',
    description: 'Sidan du letade efter finns inte.',
    heading: 'Den här sidan finns inte.',
    lead: 'Adressen kan vara felstavad, eller så har sidan flyttats. Alla räknare finns på startsidan.'
  },

  documents: {
    about: {
      name: 'Om webbplatsen',
      title: 'Om webbplatsen – gratis och privata kostnadsräknare',
      description: 'Vem som står bakom costsimulators.com och hur räknarna fungerar. Gratis och privata kostnadsräknare för möten, arbetstid, vanor, prenumerationer, el och resor.'
    },
    privacy: {
      name: 'Integritetspolicy',
      title: 'Integritetspolicy',
      description: 'Så hanterar costsimulators.com dina uppgifter: uträkningarna görs i din webbläsare, utan spårning, analysverktyg eller användarkonton.'
    },
    terms: {
      name: 'Användarvillkor',
      title: 'Användarvillkor',
      description: 'Användarvillkor för costsimulators.com: fritt att använda privat och kommersiellt, tillhandahålls i befintligt skick och har öppen källkod under MIT-licensen.'
    }
  },

  tools: {
    meetings: {
      name: 'Möteskostnad',
      heading: 'Räknare för möteskostnad',
      title: 'Möteskostnad – räkna ut vad ett möte kostar i realtid',
      description: 'Gratis räknare för möteskostnad med timer. Ange timpris och antal deltagare och se vad mötet kostar, sekund för sekund.',
      card: 'Se hur mötets pris tickar uppåt i realtid medan ni pratar.',
      tag: 'Timer',
      lead: 'Ställ in timpris och antal deltagare, tryck på Starta och se vad mötet kostar medan det pågår.',
      pulseEvery: '10',
      rate: {
        label: 'Timpris',
        unit: 'kr per person',
        step: '50',
        value: '500',
        decrease: 'Sänk timpriset',
        increase: 'Höj timpriset'
      },
      persons: {
        label: 'Deltagare',
        unit: 'personer',
        decrease: 'Färre deltagare',
        increase: 'Fler deltagare'
      },
      perMinute: 'Per minut',
      perHour: 'Per timme',
      note: 'Du kan ändra värdena medan timern går. Deltagare som ansluter eller lämnar mötet räknas från och med det ögonblicket.',
      total: 'Total kostnad',
      elapsed: 'Förfluten tid',
      reset: 'Nollställ',
      copyReport: 'Kopiera rapport',
      kbdHint: 'Tryck på <kbd>mellanslag</kbd> för att starta eller pausa',
      runtime: {
        mode: { start: 'Starta', pause: 'Pausa', resume: 'Fortsätt' },
        status: { ready: 'Redo', live: 'Pågår', paused: 'Pausad' },
        announce: {
          invalid: 'Ange timpris och antal deltagare för att starta.',
          started: 'Timern har startat.',
          paused: 'Pausad vid {cost} efter {time}.',
          reset: 'Timern har nollställts.'
        },
        report: {
          cost: 'Mötets kostnad: {cost}',
          duration: 'Längd: {time}',
          participants: 'Deltagare: {persons} × {rate}/tim'
        }
      },
      about: {
        title: 'Så räknas möteskostnaden ut',
        paragraphs: [
          'Räknaren multiplicerar antalet deltagare med deras timpris och med den tid som har gått. Ett möte på en timme med 5 personer och ett timpris på 500 kr kostar 2 500 kr – det är 41,67 kr varje minut.',
          'Som timpris bör du använda vad en arbetstimme faktiskt kostar arbetsgivaren, inte bara lönen. Ovanpå bruttolönen betalar arbetsgivaren arbetsgivaravgifter på 31,42 %, och med tjänstepension och semesterlön hamnar lönekostnadspåslaget ofta på 40–50 %. Om du inte vet allas timpris räcker ett snitt för gruppen gott och väl.',
          'Timern räknar rätt även i en bakgrundsflik, och den löpande kostnaden syns i webbläsarflikens titel, så att du kan hålla koll på den medan du delar skärmen. När mötet är slut pausar du timern och kopierar en kort rapport till mötesanteckningarna.'
        ]
      },
      faq: [
        {
          q: 'Hur räknar man ut vad ett möte kostar?',
          a: 'Multiplicera antalet deltagare med deras genomsnittliga timpris och med mötets längd i timmar. Till exempel: 6 personer × 450 kr i timmen × 1,5 timmar = 4 050 kr. Den här räknaren gör uträkningen live medan mötet pågår.'
        },
        {
          q: 'Vilket timpris ska jag använda?',
          a: 'Använd hela kostnaden för en arbetstimme: bruttotimlönen plus arbetsgivaravgifter, tjänstepension och andra personalkostnader. För konsulter och underleverantörer använder du deras timpris.'
        },
        {
          q: 'Kan jag ändra antalet deltagare under mötet?',
          a: 'Ja. Ändra antalet deltagare eller timpriset när som helst. De nya värdena räknas från och med det ögonblicket, och den kostnad som redan har uppstått ligger kvar som den är.'
        },
        {
          q: 'Fortsätter timern om jag byter flik?',
          a: 'Ja. Timern utgår från klockan, så summan stämmer även i en bakgrundsflik. Medan timern går ber sidan också webbläsaren att hålla skärmen tänd.'
        }
      ]
    },

    workhours: {
      name: 'Arbetstimmar',
      heading: 'Priset i arbetstimmar',
      title: 'Pris i arbetstid – hur många timmar måste du jobba för det?',
      description: 'Räkna om vilket pris som helst till arbetstimmar, arbetsdagar och arbetsveckor. Ange din timlön, månadslön eller årslön och se vad ett köp egentligen kostar i arbetstid.',
      card: 'Se hur många timmar, dagar och veckor du måste jobba för att ha råd med något.',
      tag: 'Arbete',
      lead: 'Ange din lön och ett pris för att se hur länge du måste jobba för att ha råd.',
      period: {
        label: 'Jag vet min lön',
        hour: 'Per timme',
        month: 'Per månad',
        year: 'Per år'
      },
      pay: {
        label: 'Lön',
        unit: 'kr per timme',
        value: '170',
        step: '10',
        monthStep: '1000',
        yearStep: '10000',
        hint: 'Använd din lön efter skatt för det ärligaste svaret.',
        decrease: 'Sänk lönen',
        increase: 'Höj lönen'
      },
      hoursPerWeek: {
        label: 'Timmar per vecka',
        unit: 'timmar',
        value: '40',
        chip1: '37,5 tim',
        chip2: '40 tim',
        preset1: '37.5',
        preset2: '40',
        decrease: 'Färre timmar per vecka',
        increase: 'Fler timmar per vecka'
      },
      price: {
        label: 'Pris',
        unit: 'kr',
        value: '9990',
        step: '100',
        decrease: 'Sänk priset',
        increase: 'Höj priset'
      },
      resultsTitle: 'Pris i arbetstid',
      youNeedToWork: 'Du behöver jobba',
      workDays: 'Arbetsdagar',
      workWeeks: 'Arbetsveckor',
      hourlyRate: 'Din timlön',
      runtime: {
        unit: {
          hour: 'kr per timme',
          month: 'kr per månad',
          year: 'kr per år'
        },
        days: { one: '{n} dag', other: '{n} dagar' },
        weeks: { one: '{n} vecka', other: '{n} veckor' },
        note: {
          empty: 'Ange din lön, dina timmar per vecka och ett pris för att se hur länge du behöver jobba för det.',
          result: 'Utgår från arbetsdagar på {hours} timmar, {days} dagar i veckan.'
        }
      },
      about: {
        title: 'Så räknas arbetstiden ut',
        paragraphs: [
          'Först räknas din lön om till en timlön. En månadslön multipliceras med 12 och delas med antalet arbetstimmar per år (timmar per vecka × 52); en årslön delas direkt med samma antal timmar. Sedan delas priset med din timlön.',
          'Arbetsdagarna utgår från en femdagarsvecka, så 40 timmar i veckan betyder 8-timmarsdagar. Med 170 kr i timmen kostar till exempel en telefon för 9 990 kr nästan 59 timmar – knappt en och en halv arbetsvecka.',
          'Det ärligaste svaret får du med din lön efter skatt, eftersom det är de pengarna du faktiskt gör av med. Att tänka på priser i arbetstimmar är ett enkelt sätt att avgöra om något verkligen är värt pengarna.'
        ]
      },
      faq: [
        {
          q: 'Hur många timmar måste jag jobba för att ha råd med något?',
          a: 'Dela priset med din timlön efter skatt. Tjänar du 150 kr i timmen efter skatt behöver du jobba 20 timmar för ett köp på 3 000 kr.'
        },
        {
          q: 'Ska jag använda lön före eller efter skatt?',
          a: 'Lönen efter skatt ger det mest realistiska svaret, eftersom det är de pengarna du faktiskt har att röra dig med. Med bruttolönen ser saker billigare ut än de är.'
        },
        {
          q: 'Hur räknar jag om månadslön till timlön?',
          a: 'Multiplicera månadslönen med 12 och dela med antalet arbetstimmar per år. Med 40 timmar i veckan blir det 2 080 timmar, så 28 000 kr i månaden efter skatt motsvarar cirka 162 kr i timmen. Räknaren gör det åt dig när du väljer Per månad.'
        }
      ]
    },

    coffee: {
      name: 'Kaffekostnad',
      heading: 'Kaffekalkylator',
      title: 'Kaffekalkylator – vad kostar ditt kaffe per år?',
      description: 'Se vad ditt dagliga kaffe kostar per månad och på 1, 5 och 10 år. Ange pris per kopp och antal koppar i veckan – gratis och privat.',
      card: 'Se vad din dagliga kopp kostar på ett, fem och tio år.',
      tag: 'Vana',
      lead: 'Ange vad en kopp kostar och hur ofta du köper en, så ser du vad vanan kostar med åren.',
      price: {
        label: 'Pris per kopp',
        unit: 'kr',
        step: '5',
        value: '45',
        decrease: 'Sänk kaffepriset',
        increase: 'Höj kaffepriset'
      },
      perWeek: {
        label: 'Koppar per vecka',
        unit: 'koppar',
        chip1: 'Arbetsdagar',
        chip2: 'Varje dag',
        chip3: 'Två om dagen',
        decrease: 'Färre koppar per vecka',
        increase: 'Fler koppar per vecka'
      },
      resultsTitle: 'Så mycket blir det',
      in10Years: 'På 10 år',
      perMonth: 'Per månad',
      year1: '1 år',
      year5: '5 år',
      runtime: {
        note: {
          empty: 'Ange ett pris och hur många koppar du dricker i veckan för att se summorna.',
          result: 'Det blir cirka {cups} koppar om året för {price} styck.'
        }
      },
      about: {
        title: 'Så räknas kaffekostnaden ut',
        paragraphs: [
          'Årskostnaden är priset per kopp × koppar per vecka × 52 veckor. Månadskostnaden är årskostnaden delad med 12, och summorna för 5 och 10 år är årskostnaden gånger fem och tio, utan inflation eller prishöjningar.',
          'En kaffe för 45 kr varje arbetsdag blir 11 700 kr om året och 117 000 kr på tio år. Att brygga hemma eller ta med en egen termosmugg är enkla sätt att få ner kostnaden om summan förvånar dig.',
          'Räknaren fungerar för alla små, regelbundna köp: en energidryck, en lunchmacka eller en kanelbulle till fikat. Ange priset och hur många du köper i veckan.'
        ]
      },
      faq: [
        {
          q: 'Vad kostar en kopp kaffe om dagen per år?',
          a: 'En kopp om dagen, sju dagar i veckan, blir 364 koppar om året. För 40 kr koppen blir det 14 560 kr om året och 145 600 kr på tio år.'
        },
        {
          q: 'Är det billigare att brygga kaffe hemma?',
          a: 'Oftast mycket billigare. En kopp som bryggs hemma kostar ofta bara ett par kronor, jämfört med 40–50 kr på ett kafé. Ange vad en kopp kostar hemma för att jämföra.'
        },
        {
          q: 'Tar räknaren hänsyn till inflation?',
          a: 'Nej. Beräkningarna utgår från att priset är detsamma, så de visar vad vanan kostar med dagens priser. Om priserna stiger blir den verkliga kostnaden på lång sikt högre.'
        }
      ]
    },

    smoking: {
      name: 'Rökningens kostnad',
      heading: 'Rökkalkylator',
      title: 'Rökkalkylator – vad kostar det att röka per år?',
      description: 'Räkna ut vad rökningen kostar per månad och på 1, 5 och 10 år – och hur mycket du sparar på att sluta. Ange paketpris och antal cigaretter per dag.',
      card: 'Se hur mycket pengar som går upp i rök varje månad och genom åren.',
      tag: 'Vana',
      lead: 'Ange vad ett paket kostar och hur mycket du röker, så ser du hur mycket pengar som går upp i rök genom åren.',
      packPrice: {
        label: 'Paketpris',
        unit: 'kr',
        step: '5',
        value: '80',
        decrease: 'Sänk paketpriset',
        increase: 'Höj paketpriset'
      },
      perDay: {
        label: 'Cigaretter per dag',
        unit: 'cigaretter',
        chip1: '5 om dagen',
        chip2: '10 om dagen',
        chip3: '20 om dagen',
        decrease: 'Färre cigaretter per dag',
        increase: 'Fler cigaretter per dag'
      },
      perPack: {
        label: 'Cigaretter per paket',
        unit: 'paketstorlek',
        value: '20',
        decrease: 'Färre cigaretter per paket',
        increase: 'Fler cigaretter per paket'
      },
      resultsTitle: 'Upp i rök',
      in10Years: 'På 10 år',
      perMonth: 'Per månad',
      year1: '1 år',
      year5: '5 år',
      runtime: {
        note: {
          empty: 'Ange paketpriset, hur många cigaretter du röker om dagen och paketstorleken för att se summorna.',
          result: 'Det blir cirka {cigarettes} cigaretter ({packs} paket) om året för {price} styck.'
        }
      },
      about: {
        title: 'Så räknas kostnaden för rökning ut',
        paragraphs: [
          'Priset för en cigarett är paketpriset delat med antalet cigaretter i paketet. Det multipliceras med antalet cigaretter per dag och med 365 dagar för årskostnaden. Månadskostnaden är en tolftedel av det, och summorna för 5 och 10 år utgår från dagens priser.',
          'Ett halvt paket om dagen för 80 kr paketet blir 14 600 kr om året och 146 000 kr på tio år. Att se summan kan vara en stark motivation: samma pengar skulle kunna gå till en resa, ett sparande eller att betala av skulder.',
          'Räknaren tar bara med priset på cigaretterna. Vårdkostnader, högre försäkringspremier och sjukdagar kommer ovanpå. Vill du ha hjälp att sluta kan du ringa den kostnadsfria Sluta-röka-linjen på 020-84 00 00 eller vända dig till din vårdcentral. Mer stöd finns på 1177.se.'
        ]
      },
      faq: [
        {
          q: 'Vad kostar ett paket om dagen per år?',
          a: 'Ett paket om dagen blir 365 paket om året. För 80 kr paketet blir det 29 200 kr om året och 292 000 kr på tio år.'
        },
        {
          q: 'Hur mycket pengar sparar jag om jag slutar röka?',
          a: 'Allt som den här räknaren visar. Ange hur mycket du röker i dag: månads- och årssummorna är vad du sparar på att sluta.'
        },
        {
          q: 'Fungerar räknaren för rulltobak och snus?',
          a: 'Ja. Ange priset för ett paket rulltobak som paketpris, hur många cigaretter du rullar av det som paketstorlek och hur många du röker per dag. För snus anger du dosans pris, antalet prillor i dosan och hur många prillor du tar per dag.'
        }
      ]
    },

    subscriptions: {
      name: 'Prenumerationer',
      heading: 'Räknare för prenumerationer och abonnemang',
      title: 'Prenumerationskalkylator – vad kostar dina abonnemang?',
      description: 'Lägg ihop streaming, gym, mobilabonnemang och alla andra prenumerationer. Se totalen per månad, per år och på 10 år – och vilken prenumeration som kostar mest.',
      card: 'Lägg ihop streaming, gym och alla andra återkommande betalningar på ett ställe.',
      tag: 'Budget',
      lead: 'Lista allt du betalar för regelbundet och se vad det blir tillsammans. Du kan välja månads-, års- eller veckobetalning.',
      listTitle: 'Dina prenumerationer',
      empty: 'Inga prenumerationer ännu. Lägg till en nedan eller välj ett snabbval.',
      add: 'Lägg till prenumeration',
      quickAdd: 'Snabbval',
      quick: {
        1: { name: 'Videostreaming', price: '149' },
        2: { name: 'Musikstreaming', price: '139' },
        3: { name: 'Gym', price: '399' },
        4: { name: 'Molnlagring', price: '39' },
        5: { name: 'Mobilabonnemang', price: '249' },
        6: { name: 'Nyheter', price: '129' }
      },
      note: 'Din lista sparas i sidans adress, så du kan bokmärka eller dela den. Den skickas aldrig någonstans.',
      row: {
        name: 'Namn',
        nameLabel: 'Prenumerationens namn',
        priceLabel: 'Pris i kronor',
        cycleLabel: 'Betalningsperiod',
        monthly: '/ mån',
        yearly: '/ år',
        weekly: '/ vecka'
      },
      resultsTitle: 'Prenumerationer totalt',
      perYear: 'Per år',
      perMonth: 'Per månad',
      perDay: 'Per dag',
      in10Years: 'På 10 år',
      breakdownLabel: 'Årskostnad per prenumeration',
      copySummary: 'Kopiera sammanställning',
      runtime: {
        untitled: 'Namnlös',
        remove: 'Ta bort {name}',
        removeUnnamed: 'Ta bort prenumeration',
        breakdown: '{cost} / år · {percent} %',
        cycle: { monthly: 'mån', yearly: 'år', weekly: 'vecka' },
        note: {
          empty: 'Lägg till en prenumeration med ett pris för att se summorna.',
          single: '{name} kostar {cost} om året.',
          biggest: 'Din största kostnad är {name} med {cost} om året, {percent} % av totalen.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Totalt: {month} per månad, {year} per år'
        }
      },
      about: {
        title: 'Så räknas totalen för prenumerationer ut',
        paragraphs: [
          'Varje prenumeration räknas om till en årskostnad: månadspriser multipliceras med 12, veckopriser med 52 och årspriser används som de är. Årstotalen delas sedan med 12 för månadskostnaden och med 365 för dagskostnaden.',
          'Fördelningen sorterar dina prenumerationer från dyrast till billigast och visar varje prenumerations andel av totalen, så det är lätt att se vad du kan säga upp eller byta till en billigare nivå.',
          'Din lista sparas i sidans adress, aldrig på en server. Bokmärk sidan för att komma tillbaka till listan senare, eller dela länken för att gå igenom gemensamma prenumerationer med familjen.'
        ]
      },
      faq: [
        {
          q: 'Hur hittar jag alla mina prenumerationer?',
          a: 'Gå igenom kontoutdragen från banken och kreditkortet för de senaste månaderna och leta efter återkommande dragningar, till exempel autogiro och e-fakturor. Kontrollera också prenumerationsinställningarna i App Store, Google Play och PayPal.'
        },
        {
          q: 'Är en årsprenumeration billigare än en månadsprenumeration?',
          a: 'Ofta är den 15–20 % billigare, men det lönar sig bara om du ändå skulle behålla tjänsten hela året. Lägg till båda varianterna i listan för att jämföra årskostnaden.'
        },
        {
          q: 'Sparas min lista?',
          a: 'Din lista finns bara i sidans adress. Bokmärk eller dela länken för att spara den; ingenting lagras på en server eller i kakor.'
        }
      ]
    },

    electricity: {
      name: 'Elkostnad',
      heading: 'Räknare för elkostnad',
      title: 'Räkna ut elförbrukning – vad kostar apparaten i el?',
      description: 'Räkna ut vad en apparat kostar i el per dag, månad och år utifrån effekt, användningstid och elpris. Gratis räknare för elförbrukning i kWh och kronor.',
      card: 'Se vad det kostar att ha en apparat påslagen per dag, månad och år.',
      tag: 'Hemma',
      lead: 'Ange apparatens effekt, hur länge den är igång och vad du betalar för elen, så ser du vad den verkligen kostar att ha igång.',
      power: {
        label: 'Effekt',
        unit: 'watt',
        chip1: 'LED-lampa 9 W',
        chip2: 'Laptop 60 W',
        chip3: 'Tv 100 W',
        chip4: 'Speldator 400 W',
        chip5: 'Elelement 1 500 W',
        decrease: 'Sänk effekten',
        increase: 'Höj effekten'
      },
      hours: {
        label: 'Timmar per dag',
        unit: 'timmar',
        decrease: 'Färre timmar per dag',
        increase: 'Fler timmar per dag'
      },
      days: {
        label: 'Dagar per vecka',
        unit: 'dagar',
        decrease: 'Färre dagar per vecka',
        increase: 'Fler dagar per vecka'
      },
      kwhPrice: {
        label: 'Elpris',
        unit: 'öre/kWh',
        value: '150',
        step: '10',
        divisor: '100',
        hint: 'Ta med elnätsavgift, energiskatt och moms för det mest exakta resultatet.',
        decrease: 'Sänk elpriset',
        increase: 'Höj elpriset'
      },
      resultsTitle: 'Driftkostnad',
      perYear: 'Per år',
      perDayOfUse: 'Per användningsdag',
      perMonth: 'Per månad',
      energyPerYear: 'Energi per år',
      runtime: {
        note: {
          empty: 'Ange effekt, timmar per dag (högst 24), dagar per vecka (högst 7) och ditt elpris.',
          result: 'Apparaten förbrukar cirka {day} per användningsdag, runt {year} om året.'
        }
      },
      about: {
        title: 'Så räknas elkostnaden ut',
        paragraphs: [
          'Energiförbrukningen i kilowattimmar (kWh) är effekten i watt × antal timmar ÷ 1 000. En tv på 100 W som är på i 4 timmar förbrukar 0,4 kWh om dagen. Multiplicerat med ditt elpris per kWh ger det kostnaden per användningsdag.',
          'Årskostnaden tar hänsyn till hur många dagar i veckan apparaten används, fördelat över årets 365 dagar. Månadskostnaden är en tolftedel av årskostnaden.',
          'Effekten hittar du på apparatens typskylt eller i bruksanvisningen. Många apparater drar för det mesta mindre än sin maxeffekt, så resultatet är en övre uppskattning. För det mest exakta priset tar du med elnätsavgift, energiskatt och moms, inte bara själva elpriset.'
        ]
      },
      faq: [
        {
          q: 'Hur räknar man ut vad en apparat kostar i el?',
          a: 'Multiplicera effekten i kilowatt med antalet timmar och med priset per kWh. Ett elelement på 1 500 W som är på i 3 timmar kostar med elpriset 150 öre/kWh: 1,5 kW × 3 h × 1,50 kr/kWh = 6,75 kr om dagen.'
        },
        {
          q: 'Hur många kWh drar en apparat?',
          a: 'Dela effekten i watt med 1 000 och multiplicera med antalet timmar den är igång. En laptop på 60 W som används 8 timmar om dagen drar 0,48 kWh per dag – cirka 175 kWh om året om den används varje dag.'
        },
        {
          q: 'Vilket elpris ska jag använda?',
          a: 'Använd det totala priset per kWh från din elräkning, inklusive elpris, elnätsavgift, energiskatt och moms. Dela fakturans totalbelopp med antalet förbrukade kWh för att få ett bra snitt – har du separata fakturor för elhandel och elnät lägger du ihop dem.'
        },
        {
          q: 'Drar apparater ström i standbyläge?',
          a: 'Ja, många apparater drar några watt i standbyläge. Ange effekten i standby och 24 timmar om dagen för att se vad det kostar på ett år.'
        }
      ]
    },

    trip: {
      name: 'Resekostnad',
      heading: 'Räknare för bränslekostnad',
      title: 'Räkna ut bensinkostnad för resa och pendling',
      description: 'Räkna ut bränslekostnaden för en resa eller den dagliga pendlingen och dela den mellan passagerarna. Fungerar med kilometer och liter eller miles och gallon.',
      card: 'Räkna ut bränslekostnaden för en resa eller pendling och dela den med andra.',
      tag: 'Resor',
      lead: 'Räkna ut bränslekostnaden för en enskild resa eller din dagliga pendling och dela den mellan alla i bilen.',
      unit: {
        label: 'Enheter',
        metric: 'Kilometer och liter',
        us: 'Miles och gallon'
      },
      distance: {
        label: 'Sträcka',
        unit: 'km enkel väg',
        decrease: 'Kortare sträcka',
        increase: 'Längre sträcka'
      },
      direction: {
        label: 'Resa',
        one: 'Enkel resa',
        round: 'Tur och retur'
      },
      consumption: {
        label: 'Bränsleförbrukning',
        unit: 'l/100 km',
        hint: 'Kör du elbil? Ange kWh/100 km och elpriset per kWh.',
        decrease: 'Sänk förbrukningen',
        increase: 'Höj förbrukningen'
      },
      fuelPrice: {
        label: 'Bränslepris',
        unit: 'kr per liter',
        value: '17',
        step: '0.1',
        usStep: '0.5',
        decrease: 'Sänk bränslepriset',
        increase: 'Höj bränslepriset'
      },
      people: {
        label: 'Personer som delar på kostnaden',
        unit: 'personer',
        decrease: 'Färre personer',
        increase: 'Fler personer'
      },
      tripsPerWeek: {
        label: 'Resor per vecka',
        unit: 'för månads- och årssummor',
        decrease: 'Färre resor per vecka',
        increase: 'Fler resor per vecka'
      },
      resultsTitle: 'Bränslekostnad',
      perPerson: 'Per person',
      perMonth: 'Per månad',
      perYear: 'Per år',
      runtime: {
        direction: { one: 'Enkel resa', round: 'Tur och retur' },
        unit: {
          metric: {
            distance: 'km enkel väg',
            consumption: 'l/100 km',
            price: 'kr per liter',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'miles enkel väg',
            consumption: 'mpg',
            price: 'kr per gallon',
            perDistance: 'mile',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Ange sträcka, bränsleförbrukning och bränslepris för att se kostnaden.',
          result: 'Resan förbrukar {fuel} bränsle, cirka {price} per {distance}.'
        }
      },
      about: {
        title: 'Så räknas resekostnaden ut',
        paragraphs: [
          'Med kilometer och liter är bränsleåtgången sträckan × förbrukningen ÷ 100. En pendling på 25 km enkel väg (50 km om dagen) med en bil som drar 6,5 l/100 km förbrukar 3,25 liter. Multiplicera med literpriset för att få resans kostnad och dela med antalet personer för att dela upp den. Är du van vid liter per mil räknar du bara gånger tio: 0,65 l/mil = 6,5 l/100 km.',
          'Med miles och gallon är bränsleåtgången sträckan delad med bilens mpg (miles per gallon). När du byter enheter räknas de värden du har angett om, så att du kan jämföra siffror från båda systemen.',
          'Månads- och årssummorna bygger på antalet resor per vecka – 5 resor tur och retur i veckan är en typisk pendling. För en elbil anger du i stället förbrukningen i kWh/100 km och priset per kWh.'
        ]
      },
      faq: [
        {
          q: 'Hur räknar man ut bensinkostnaden för en resa?',
          a: 'Multiplicera sträckan med förbrukningen och bensinpriset och dela med 100. För 200 km med en bil som drar 6 l/100 km och bensin för 17 kr/l: 200 × 6 ÷ 100 × 17 kr = 204 kr.'
        },
        {
          q: 'Hur delar man bränslekostnaden mellan passagerarna?',
          a: 'Ange hur många som delar på kostnaden. Räknaren delar resans kostnad lika mellan alla, föraren inräknad.'
        },
        {
          q: 'Ingår slitage, parkering eller trängselskatt?',
          a: 'Nej, räknaren tar bara med bränslet. Slitage, försäkring, parkering, trängselskatt och broavgifter kommer ovanpå, så den verkliga kostnaden för att köra bil är högre.'
        }
      ]
    }
  }
};
