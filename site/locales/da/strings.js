// Danish texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in Danish kroner.

module.exports = {
  meta: {
    name: 'Dansk',
    locale: 'da-DK',
    currency: 'DKK',
    ogLocale: 'da_DK'
  },

  money: {
    symbol: 'kr.',
    zero: '0,00 kr.',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Spring til indhold',
    home: 'Forside',
    toggleTheme: 'Skift tema',
    themeToLight: 'Skift til lyst tema',
    themeToDark: 'Skift til mørkt tema',
    language: 'Sprog',
    allTools: 'Alle værktøjer',
    share: 'Del',
    settings: 'Indstillinger',
    quickPicks: 'Hurtigvalg',
    faqTitle: 'Ofte stillede spørgsmål',
    relatedTools: 'Flere beregnere',
    imageAlt: 'costsimulators.com – gratis beregnere til hverdagens pengespørgsmål'
  },

  footer: {
    privacy: 'Kører helt i din browser. Ingen cookies, ingen sporing.',
    about: 'Om siden',
    contact: 'Kontakt',
    privacyPolicy: 'Privatliv',
    terms: 'Vilkår'
  },

  runtime: {
    share: {
      linkCopied: 'Linket er kopieret',
      copyFailed: 'Kopiering mislykkedes',
      copied: 'Kopieret!',
      calculatedWith: 'Beregnet med costsimulators.com'
    },
    workTime: {
      minutes: '{m} min.',
      hours: '{h} timer',
      hoursMinutes: '{h} t. {m} min.'
    }
  },

  home: {
    title: 'Gratis beregnere til hverdagens udgifter',
    description: 'Gratis og private beregnere, der viser, hvad ting reelt koster: møder, arbejdstimer, kaffe, rygning, abonnementer, el og brændstof. Uden login – alt kører i din browser.',
    eyebrow: 'Gratis · Privat · Lynhurtigt',
    heading: 'Små værktøjer til hverdagens <span class="accent-text">penge</span>spørgsmål.',
    lead: 'Hurtige beregnere, der viser, hvad ting reelt koster. Ingen tilmelding, ingen sporing – alt kører direkte i din browser.',
    toolsTitle: 'Værktøjer',
    toolCount: '{count} værktøjer',
    suggestTitle: 'Har du en idé?',
    suggestText: 'Foreslå et nyt værktøj på GitHub.',
    whyTitle: 'Små udgifter løber op',
    whyText1: 'Et enkelt møde, en kaffe på vej til arbejde eller endnu en streamingtjeneste føles sjældent dyrt i sig selv. Men læg dem sammen over en måned, et år eller et årti, så ser tallene helt anderledes ud.',
    whyText2: 'Hver beregner gør én ting, spørger kun om de tal, den har brug for, og viser svaret med det samme. Alt beregnes i din browser, så dine tal bliver på din egen enhed.',
    aboutLink: 'Mere om costsimulators.com',
    faq: [
      {
        q: 'Er costsimulators.com gratis?',
        a: 'Ja. Alle beregnere er helt gratis – uden tilmelding, betalingsmur og reklamer. Du må også gerne bruge dem på arbejdet.'
      },
      {
        q: 'Bliver mine tal gemt eller sendt nogen steder hen?',
        a: 'Nej. Alt, hvad du indtaster, beregnes i din browser og sendes aldrig til en server. Siden sætter ingen cookies og bruger ingen webanalyse.'
      },
      {
        q: 'Kan jeg dele en beregning?',
        a: 'Ja. Dine indstillinger gemmes i sidens adresse. Tryk på Del for at kopiere linket, så ser den, der åbner det, præcis den samme beregning.'
      }
    ]
  },

  notFound: {
    title: 'Siden findes ikke',
    description: 'Den side, du leder efter, findes ikke.',
    heading: 'Denne side findes ikke.',
    lead: 'Adressen kan være skrevet forkert, eller siden er flyttet. Alle beregnere finder du på forsiden.'
  },

  documents: {
    about: {
      name: 'Om siden',
      title: 'Om costsimulators.com – gratis og private beregnere',
      description: 'Hvem står bag costsimulators.com, og hvordan virker beregnerne? Gratis og private beregnere til møder, arbejdstid, vaner, abonnementer, elforbrug og kørsel.'
    },
    privacy: {
      name: 'Privatlivspolitik',
      title: 'Privatlivspolitik',
      description: 'Sådan behandler costsimulators.com dine data: beregningerne foregår i din browser – ingen sporing, ingen webanalyse og ingen brugerkonti.'
    },
    terms: {
      name: 'Brugsvilkår',
      title: 'Brugsvilkår',
      description: 'Brugsvilkår for costsimulators.com: gratis til både privat og kommerciel brug, leveres som den er og har åben kildekode under MIT-licensen.'
    }
  },

  tools: {
    meetings: {
      name: 'Mødets pris',
      heading: 'Mødeberegner',
      title: 'Mødeberegner – hvad koster et møde? Se prisen live',
      description: 'Gratis mødeberegner med live-timer. Indtast timeprisen og antallet af deltagere, og se, hvad mødet koster – sekund for sekund.',
      card: 'Se prisen på et møde tikke op i realtid, mens I taler.',
      tag: 'Live-timer',
      lead: 'Angiv timepris og antal deltagere, tryk på Start, og følg med i, hvad mødet koster, mens det står på.',
      pulseEvery: '10',
      rate: {
        label: 'Timepris',
        unit: 'kr. pr. person',
        step: '50',
        value: '450',
        decrease: 'Sænk timeprisen',
        increase: 'Hæv timeprisen'
      },
      persons: {
        label: 'Deltagere',
        unit: 'personer',
        decrease: 'Færre deltagere',
        increase: 'Flere deltagere'
      },
      perMinute: 'Pr. minut',
      perHour: 'Pr. time',
      note: 'Du kan ændre værdierne, mens timeren kører. Deltagere, der kommer eller går, regnes med fra det øjeblik.',
      total: 'Samlet pris',
      elapsed: 'Forløbet tid',
      reset: 'Nulstil',
      copyReport: 'Kopiér rapport',
      kbdHint: 'Tryk på <kbd>mellemrumstasten</kbd> for at starte eller holde pause',
      runtime: {
        mode: { start: 'Start', pause: 'Pause', resume: 'Fortsæt' },
        status: { ready: 'Klar', live: 'Kører', paused: 'På pause' },
        announce: {
          invalid: 'Indtast en timepris og antallet af deltagere for at starte.',
          started: 'Timeren er startet.',
          paused: 'Sat på pause ved {cost} efter {time}.',
          reset: 'Timeren er nulstillet.'
        },
        report: {
          cost: 'Mødets pris: {cost}',
          duration: 'Varighed: {time}',
          participants: 'Deltagere: {persons} × {rate} pr. time'
        }
      },
      about: {
        title: 'Sådan beregnes mødets pris',
        paragraphs: [
          'Beregneren ganger antallet af deltagere med deres timepris og med den tid, der er gået. Et møde på en time med 5 deltagere til 450 kr. i timen koster 2.250 kr. – det er 37,50 kr. i minuttet.',
          'Brug som timepris det, en arbejdstime reelt koster arbejdsgiveren, ikke kun lønnen. Oven i bruttolønnen kommer blandt andet arbejdsgiverens pensionsbidrag, feriepenge, ATP og andre lønomkostninger, og en god tommelfingerregel er at lægge 20–30 % til bruttotimelønnen. Kender du ikke alles timepris, er et gennemsnit for teamet fint.',
          'Timeren tæller korrekt videre i en fane i baggrunden, og den løbende pris står i fanens titel, så du kan holde øje med den, mens du deler skærm. Når mødet slutter, sætter du timeren på pause og kopierer en kort rapport til referatet.'
        ]
      },
      faq: [
        {
          q: 'Hvordan beregner man, hvad et møde koster?',
          a: 'Gang antallet af deltagere med deres gennemsnitlige timepris og med mødets længde i timer. For eksempel 6 personer × 400 kr. i timen × 1,5 timer = 3.600 kr. Denne beregner regner det ud live, mens mødet kører.'
        },
        {
          q: 'Hvilken timepris skal jeg bruge?',
          a: 'Brug den fulde pris for en arbejdstime: bruttotimelønnen plus pension, feriepenge, ATP og andre lønomkostninger. For konsulenter og freelancere bruger du deres timesats.'
        },
        {
          q: 'Kan jeg ændre antallet af deltagere undervejs?',
          a: 'Ja. Du kan ændre antallet af deltagere eller timeprisen når som helst. De nye værdier regnes med fra det øjeblik, og det beløb, der allerede er løbet op, bliver stående.'
        },
        {
          q: 'Kører timeren videre, hvis jeg skifter fane?',
          a: 'Ja. Timeren bygger på uret, så summen er stadig korrekt i en fane i baggrunden. Mens timeren kører, beder siden også browseren om at holde skærmen tændt.'
        }
      ]
    },

    workhours: {
      name: 'Arbejdstimer',
      heading: 'Prisen i arbejdstimer',
      title: 'Pris i arbejdstimer – hvor længe skal du arbejde for det?',
      description: 'Omregn enhver pris til de timer, dage og uger, du skal arbejde for den. Indtast din time-, måneds- eller årsløn, og se, hvad et køb reelt koster i arbejdstid.',
      card: 'Se, hvor mange timer, dage og uger du skal arbejde for at have råd til noget.',
      tag: 'Arbejde',
      lead: 'Indtast din løn og en pris, og se, hvor længe du skal arbejde for at have råd.',
      period: {
        label: 'Jeg kender min løn',
        hour: 'Pr. time',
        month: 'Pr. måned',
        year: 'Pr. år'
      },
      pay: {
        label: 'Løn',
        unit: 'kr. pr. time',
        value: '190',
        step: '10',
        monthStep: '1000',
        yearStep: '10000',
        hint: 'Brug din udbetalte løn efter skat for at få det mest ærlige svar.',
        decrease: 'Sænk lønnen',
        increase: 'Hæv lønnen'
      },
      hoursPerWeek: {
        label: 'Timer om ugen',
        unit: 'timer',
        value: '37',
        chip1: '37 timer',
        chip2: '40 timer',
        preset1: '37',
        preset2: '40',
        decrease: 'Færre timer om ugen',
        increase: 'Flere timer om ugen'
      },
      price: {
        label: 'Pris',
        unit: 'kr.',
        value: '7999',
        step: '100',
        decrease: 'Sænk prisen',
        increase: 'Hæv prisen'
      },
      resultsTitle: 'Prisen i arbejdstid',
      youNeedToWork: 'Du skal arbejde',
      workDays: 'Arbejdsdage',
      workWeeks: 'Arbejdsuger',
      hourlyRate: 'Din timeløn',
      runtime: {
        unit: {
          hour: 'kr. pr. time',
          month: 'kr. pr. måned',
          year: 'kr. pr. år'
        },
        days: { one: '{n} dage', other: '{n} dage' },
        weeks: { one: '{n} uger', other: '{n} uger' },
        note: {
          empty: 'Indtast din løn, dine timer om ugen og en pris for at se, hvor længe du skal arbejde for det.',
          result: 'Beregnet med arbejdsdage på {hours} timer, {days} dage om ugen.'
        }
      },
      about: {
        title: 'Sådan beregnes arbejdstiden',
        paragraphs: [
          'Først omregnes din løn til en timeløn. En månedsløn ganges med 12 og divideres med dine arbejdstimer på et år (timer om ugen × 52), mens en årsløn divideres direkte med de timer. Derefter divideres prisen med din timeløn.',
          'Arbejdsdagene regnes ud fra en uge på fem dage, så 37 timer om ugen giver arbejdsdage på 7,4 timer. Med 190 kr. i timen koster en telefon til 7.999 kr. for eksempel godt 42 timer – lidt mere end en hel arbejdsuge.',
          'Det mest ærlige svar får du ved at bruge din løn efter skat, for det er de penge, du faktisk har at bruge af. At se priser som arbejdstimer er en enkel måde at afgøre, om noget virkelig er pengene værd.'
        ]
      },
      faq: [
        {
          q: 'Hvor mange timer skal jeg arbejde for at have råd til noget?',
          a: 'Divider prisen med din timeløn efter skat. Tjener du 180 kr. i timen efter skat, skal du arbejde 15 timer for et køb til 2.700 kr.'
        },
        {
          q: 'Skal jeg bruge løn før eller efter skat?',
          a: 'Løn efter skat giver det mest realistiske svar, fordi det er de penge, du faktisk har til rådighed. Med lønnen før skat ser tingene billigere ud, end de er.'
        },
        {
          q: 'Hvordan omregner jeg månedsløn til timeløn?',
          a: 'Gang månedslønnen med 12, og divider med dine arbejdstimer på et år. Med 37 timer om ugen er det 1.924 timer, så 28.000 kr. udbetalt om måneden svarer til ca. 175 kr. i timen. Beregneren gør det for dig, når du vælger Pr. måned.'
        }
      ]
    },

    coffee: {
      name: 'Kaffevanen',
      heading: 'Kaffeberegner',
      title: 'Kaffeberegner – hvad koster din kaffe om året?',
      description: 'Se, hvad din daglige kaffe koster om måneden og over 1, 5 og 10 år. Indtast prisen pr. kop og antal kopper om ugen – gratis og privat.',
      card: 'Se, hvad din daglige kop kaffe løber op i over et, fem og ti år.',
      tag: 'Vane',
      lead: 'Indtast, hvad en kop koster, og hvor tit du køber en, så ser du, hvad vanen løber op i gennem årene.',
      price: {
        label: 'Pris pr. kop',
        unit: 'kr.',
        step: '5',
        value: '45',
        decrease: 'Sænk kaffeprisen',
        increase: 'Hæv kaffeprisen'
      },
      perWeek: {
        label: 'Kopper om ugen',
        unit: 'kopper',
        chip1: 'Hverdage',
        chip2: 'Hver dag',
        chip3: 'To om dagen',
        decrease: 'Færre kopper om ugen',
        increase: 'Flere kopper om ugen'
      },
      resultsTitle: 'Det løber op i',
      in10Years: 'På 10 år',
      perMonth: 'Pr. måned',
      year1: '1 år',
      year5: '5 år',
      runtime: {
        note: {
          empty: 'Indtast en pris, og hvor mange kopper du drikker om ugen, for at se beløbene.',
          result: 'Det er ca. {cups} kopper om året til {price} stykket.'
        }
      },
      about: {
        title: 'Sådan beregnes prisen på kaffen',
        paragraphs: [
          'Årsprisen er prisen pr. kop × kopper om ugen × 52 uger. Månedsprisen er årsprisen divideret med 12, og beløbene for 5 og 10 år ganger årsprisen op uden inflation eller prisstigninger.',
          'En kaffe til 45 kr. hver arbejdsdag løber op i 11.700 kr. om året og 117.000 kr. på ti år. Overrasker tallet dig, er kaffe brygget derhjemme eller en termokop med på farten nemme måder at spare på.',
          'Beregneren virker til ethvert lille, fast køb: en energidrik, en sandwich til frokost eller en flaske vand. Indtast prisen, og hvor mange du køber om ugen.'
        ]
      },
      faq: [
        {
          q: 'Hvad koster en daglig kaffe om året?',
          a: 'En kop om dagen, alle ugens syv dage, er 364 kopper om året. Til 40 kr. koppen bliver det 14.560 kr. om året og 145.600 kr. på ti år.'
        },
        {
          q: 'Er det billigere at lave kaffe derhjemme?',
          a: 'Som regel meget billigere. En kop brygget derhjemme koster ofte kun et par kroner, mens en kop på en café let koster 40 kr. eller mere. Indtast prisen på din hjemmebryggede kop for at sammenligne.'
        },
        {
          q: 'Tager beregneren højde for inflation?',
          a: 'Nej. Fremskrivningerne går ud fra, at prisen er uændret, så de viser, hvad vanen koster med dagens priser. Når priserne stiger, bliver den reelle udgift på lang sigt højere.'
        }
      ]
    },

    smoking: {
      name: 'Rygningens pris',
      heading: 'Rygeberegner',
      title: 'Rygeberegner – hvad koster det at ryge?',
      description: 'Find ud af, hvad rygning koster om måneden og over 1, 5 og 10 år – og hvor meget du sparer ved at stoppe. Indtast pakkeprisen og cigaretter om dagen.',
      card: 'Se, hvor mange penge der går op i røg hver måned og gennem årene.',
      tag: 'Vane',
      lead: 'Indtast, hvad en pakke koster, og hvor meget du ryger, så ser du, hvor mange penge der går op i røg gennem årene.',
      packPrice: {
        label: 'Pakkepris',
        unit: 'kr.',
        step: '5',
        value: '75',
        decrease: 'Sænk pakkeprisen',
        increase: 'Hæv pakkeprisen'
      },
      perDay: {
        label: 'Cigaretter om dagen',
        unit: 'cigaretter',
        chip1: '5 om dagen',
        chip2: '10 om dagen',
        chip3: '20 om dagen',
        decrease: 'Færre cigaretter om dagen',
        increase: 'Flere cigaretter om dagen'
      },
      perPack: {
        label: 'Cigaretter pr. pakke',
        unit: 'pakkestørrelse',
        value: '20',
        decrease: 'Færre cigaretter pr. pakke',
        increase: 'Flere cigaretter pr. pakke'
      },
      resultsTitle: 'Op i røg',
      in10Years: 'På 10 år',
      perMonth: 'Pr. måned',
      year1: '1 år',
      year5: '5 år',
      runtime: {
        note: {
          empty: 'Indtast pakkeprisen, hvor mange du ryger om dagen, og pakkestørrelsen for at se beløbene.',
          result: 'Det er ca. {cigarettes} cigaretter ({packs} pakker) om året til {price} stykket.'
        }
      },
      about: {
        title: 'Sådan beregnes prisen på rygning',
        paragraphs: [
          'Prisen på én cigaret er pakkeprisen divideret med antallet af cigaretter i pakken. Den ganges med antal cigaretter om dagen og med årets 365 dage, og så har du årsprisen. Månedsprisen er en tolvtedel af den, og beløbene for 5 og 10 år er regnet med dagens priser.',
          'En halv pakke om dagen til 75 kr. pakken er ca. 13.700 kr. om året og over 136.000 kr. på ti år. Det samlede beløb kan være en stærk motivation: de samme penge kunne gå til en rejse, opsparing eller afdrag på gæld.',
          'Beregneren tæller kun prisen på cigaretterne. Sundhedsudgifter, højere forsikringspræmier og sygedage kommer oveni. Vil du have hjælp til at stoppe, kan du ringe gratis til Stoplinien på 80 31 31 31 eller tale med din læge, og de fleste kommuner tilbyder gratis rygestopforløb.'
        ]
      },
      faq: [
        {
          q: 'Hvad koster en pakke om dagen om året?',
          a: 'En pakke om dagen er 365 pakker om året. Til 75 kr. pakken bliver det 27.375 kr. om året og 273.750 kr. på ti år.'
        },
        {
          q: 'Hvor mange penge sparer jeg, hvis jeg holder op med at ryge?',
          a: 'Alt det, beregneren viser. Indtast, hvad du ryger i dag: beløbene pr. måned og pr. år er det, du sparer ved at stoppe.'
        },
        {
          q: 'Virker beregneren også til rulletobak?',
          a: 'Ja. Indtast prisen på en pakke tobak som pakkepris, antallet af cigaretter, du ruller af den, som pakkestørrelse, og hvor mange du ryger om dagen.'
        }
      ]
    },

    subscriptions: {
      name: 'Abonnementer',
      heading: 'Abonnementsberegner',
      title: 'Abonnementsberegner – samlet pris pr. måned og år',
      description: 'Læg streaming, fitnesscenter, mobil og alle andre abonnementer sammen. Se den samlede pris pr. måned, pr. år og over 10 år – og hvilket abonnement der koster mest.',
      card: 'Læg streaming, fitness og alle andre faste betalinger sammen ét sted.',
      tag: 'Budget',
      lead: 'Skriv alt det op, du betaler for fast, og se, hvad det løber op i tilsammen. Både månedlig, årlig og ugentlig betaling kan bruges.',
      listTitle: 'Dine abonnementer',
      empty: 'Ingen abonnementer endnu. Tilføj et nedenfor, eller vælg et af hurtigvalgene.',
      add: 'Tilføj abonnement',
      quickAdd: 'Tilføj hurtigt',
      quick: {
        1: { name: 'Videostreaming', price: '129' },
        2: { name: 'Musikstreaming', price: '119' },
        3: { name: 'Fitnesscenter', price: '299' },
        4: { name: 'Cloudlagring', price: '39' },
        5: { name: 'Mobilabonnement', price: '149' },
        6: { name: 'Nyheder', price: '179' }
      },
      note: 'Din liste gemmes i sidens adresse, så du kan gemme den som bogmærke eller dele den. Den sendes aldrig nogen steder hen.',
      row: {
        name: 'Navn',
        nameLabel: 'Abonnementets navn',
        priceLabel: 'Pris i kroner',
        cycleLabel: 'Betalingsperiode',
        monthly: '/ md.',
        yearly: '/ år',
        weekly: '/ uge'
      },
      resultsTitle: 'Abonnementer i alt',
      perYear: 'Pr. år',
      perMonth: 'Pr. måned',
      perDay: 'Pr. dag',
      in10Years: 'På 10 år',
      breakdownLabel: 'Årlig pris pr. abonnement',
      copySummary: 'Kopiér oversigt',
      runtime: {
        untitled: 'Uden navn',
        remove: 'Fjern {name}',
        removeUnnamed: 'Fjern abonnement',
        breakdown: '{cost} / år · {percent} %',
        cycle: { monthly: 'md.', yearly: 'år', weekly: 'uge' },
        note: {
          empty: 'Tilføj et abonnement med en pris for at se beløbene.',
          single: '{name} koster {cost} om året.',
          biggest: 'Din største udgift er {name} med {cost} om året, {percent} % af det samlede beløb.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'I alt: {month} om måneden, {year} om året'
        }
      },
      about: {
        title: 'Sådan beregnes den samlede pris for abonnementer',
        paragraphs: [
          'Hvert abonnement omregnes til en årlig pris: månedspriser ganges med 12, ugepriser med 52, og årspriser bruges, som de er. Den årlige sum divideres derefter med 12 for at få prisen pr. måned og med 365 for at få prisen pr. dag.',
          'Oversigten sorterer dine abonnementer fra det dyreste til det billigste og viser hvert abonnements andel af det samlede beløb, så det er nemt at se, hvad du kan opsige eller skifte til en billigere løsning.',
          'Din liste gemmes i sidens adresse, aldrig på en server. Gem siden som bogmærke for at vende tilbage til listen senere, eller del linket, så I kan gennemgå familiens fælles abonnementer sammen.'
        ]
      },
      faq: [
        {
          q: 'Hvordan finder jeg alle mine abonnementer?',
          a: 'Gennemgå dine konto- og kreditkortudtog for de seneste måneder, og kig efter faste træk. Tjek også Betalingsservice i din netbank, MobilePay og abonnementsindstillingerne i App Store, Google Play og PayPal.'
        },
        {
          q: 'Er et årsabonnement billigere end et månedsabonnement?',
          a: 'Ofte med 15–20 %, men kun hvis du alligevel ville beholde tjenesten hele året. Tilføj begge udgaver til listen for at sammenligne deres årlige pris.'
        },
        {
          q: 'Bliver min liste gemt?',
          a: 'Din liste findes kun i sidens adresse. Gem linket som bogmærke, eller del det for at beholde listen; intet gemmes på en server eller i cookies.'
        }
      ]
    },

    electricity: {
      name: 'Elforbrug',
      heading: 'Elforbrugsberegner',
      title: 'Beregn elforbrug – hvad koster strømmen til dit apparat?',
      description: 'Beregn, hvad et apparat koster i strøm pr. dag, måned og år ud fra watt, brugstid og elpris. Gratis beregner til elforbrug og pris pr. kWh.',
      card: 'Se, hvad det koster at have et apparat tændt pr. dag, måned og år.',
      tag: 'Hjem',
      lead: 'Indtast apparatets effekt, hvor længe det kører, og hvad du betaler for strøm, så ser du, hvad det reelt koster at have det tændt.',
      power: {
        label: 'Effekt',
        unit: 'watt',
        chip1: 'LED-pære 9 W',
        chip2: 'Bærbar 60 W',
        chip3: 'Tv 100 W',
        chip4: 'Gamer-pc 400 W',
        chip5: 'Elradiator 1.500 W',
        decrease: 'Sænk effekten',
        increase: 'Hæv effekten'
      },
      hours: {
        label: 'Timer om dagen',
        unit: 'timer',
        decrease: 'Færre timer om dagen',
        increase: 'Flere timer om dagen'
      },
      days: {
        label: 'Dage om ugen',
        unit: 'dage',
        decrease: 'Færre dage om ugen',
        increase: 'Flere dage om ugen'
      },
      kwhPrice: {
        label: 'Elpris',
        unit: 'kr./kWh',
        value: '2',
        step: '0.1',
        divisor: '1',
        hint: 'Medregn nettarif, afgifter og moms for at få det mest præcise resultat.',
        decrease: 'Sænk elprisen',
        increase: 'Hæv elprisen'
      },
      resultsTitle: 'Udgift til strøm',
      perYear: 'Pr. år',
      perDayOfUse: 'Pr. brugsdag',
      perMonth: 'Pr. måned',
      energyPerYear: 'Forbrug pr. år',
      runtime: {
        note: {
          empty: 'Indtast effekten, timer om dagen (højst 24), dage om ugen (højst 7) og din elpris.',
          result: 'Apparatet bruger ca. {day} pr. brugsdag og omkring {year} om året.'
        }
      },
      about: {
        title: 'Sådan beregnes udgiften til strøm',
        paragraphs: [
          'Energiforbruget i kilowatttimer (kWh) er effekten i watt × brugstimer ÷ 1.000. Et tv på 100 W, der er tændt i 4 timer, bruger 0,4 kWh om dagen. Ganger du det med din elpris pr. kWh, får du prisen pr. brugsdag.',
          'Årsprisen tager højde for, hvor mange dage om ugen apparatet kører, fordelt over årets 365 dage. Månedsprisen er en tolvtedel af årsprisen.',
          'Effekten står på apparatets typeskilt eller i brugsanvisningen. Mange apparater bruger det meste af tiden mindre end deres maksimale effekt, så resultatet er et overslag i den høje ende. Den mest præcise pris får du, hvis du medregner nettarif, elafgift og moms og ikke kun selve elprisen.'
        ]
      },
      faq: [
        {
          q: 'Hvordan beregner man, hvad et apparat koster i strøm?',
          a: 'Gang effekten i kilowatt med antal brugstimer og med prisen pr. kWh. En elradiator på 1.500 W, der kører i 3 timer, koster 1,5 kW × 3 t × 2 kr./kWh = 9 kr. om dagen.'
        },
        {
          q: 'Hvor mange kWh bruger et apparat?',
          a: 'Divider antallet af watt med 1.000, og gang med antal timer, det kører. En bærbar computer på 60 W, der bruges 8 timer om dagen, bruger 0,48 kWh om dagen – ca. 175 kWh om året, hvis den bruges hver dag.'
        },
        {
          q: 'Hvilken elpris skal jeg bruge?',
          a: 'Brug den samlede pris pr. kWh fra din elregning, inklusive selve elprisen, nettarif, elafgift og moms. Dividerer du regningens samlede beløb med de forbrugte kWh, får du et godt gennemsnit.'
        },
        {
          q: 'Bruger standby også strøm?',
          a: 'Ja, mange apparater trækker et par watt på standby. Indtast standbyeffekten og 24 timer om dagen for at se, hvad det koster om året.'
        }
      ]
    },

    trip: {
      name: 'Turens pris',
      heading: 'Brændstofberegner',
      title: 'Benzinberegner – beregn benzinudgifter til tur og pendling',
      description: 'Beregn brændstofudgiften til en tur eller den daglige pendling, og del den mellem passagererne. Virker med kilometer og liter eller miles og gallons.',
      card: 'Regn ud, hvad en tur eller din pendling koster i brændstof, og del udgiften med andre.',
      tag: 'Transport',
      lead: 'Beregn brændstofudgiften til en enkelt tur eller din daglige pendling, og del den mellem alle i bilen.',
      unit: {
        label: 'Enheder',
        metric: 'Kilometer og liter',
        us: 'Miles og gallons'
      },
      distance: {
        label: 'Afstand',
        unit: 'km én vej',
        decrease: 'Kortere afstand',
        increase: 'Længere afstand'
      },
      direction: {
        label: 'Tur',
        one: 'Én vej',
        round: 'Tur-retur'
      },
      consumption: {
        label: 'Brændstofforbrug',
        unit: 'l/100 km',
        hint: 'Kender du kun bilens km/l? Så er l/100 km = 100 ÷ km/l. Elbil? Indtast kWh/100 km og prisen pr. kWh.',
        decrease: 'Sænk forbruget',
        increase: 'Øg forbruget'
      },
      fuelPrice: {
        label: 'Brændstofpris',
        unit: 'kr. pr. liter',
        value: '13.5',
        step: '0.1',
        usStep: '0.5',
        decrease: 'Sænk brændstofprisen',
        increase: 'Hæv brændstofprisen'
      },
      people: {
        label: 'Personer, der deler udgiften',
        unit: 'personer',
        decrease: 'Færre personer',
        increase: 'Flere personer'
      },
      tripsPerWeek: {
        label: 'Ture om ugen',
        unit: 'til beløb pr. måned og år',
        decrease: 'Færre ture om ugen',
        increase: 'Flere ture om ugen'
      },
      resultsTitle: 'Brændstofudgift',
      perPerson: 'Pr. person',
      perMonth: 'Pr. måned',
      perYear: 'Pr. år',
      runtime: {
        direction: { one: 'Én vej', round: 'Tur-retur' },
        unit: {
          metric: {
            distance: 'km én vej',
            consumption: 'l/100 km',
            price: 'kr. pr. liter',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'miles én vej',
            consumption: 'mpg',
            price: 'kr. pr. gallon',
            perDistance: 'mile',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Indtast afstand, brændstofforbrug og brændstofpris for at se udgiften.',
          result: 'Turen bruger {fuel} brændstof, ca. {price} pr. {distance}.'
        }
      },
      about: {
        title: 'Sådan beregnes turens pris',
        paragraphs: [
          'Brændstofforbruget er afstanden × forbruget ÷ 100. Er der 25 km hver vej til arbejde (50 km om dagen), og bruger bilen 6,5 l/100 km, går der 3,25 liter brændstof om dagen. Gang med literprisen for at få turens pris, og divider med antallet af personer for at dele den.',
          'I Danmark oplyses bilers forbrug ofte i km/l: 100 ÷ km/l giver l/100 km, så 20 km/l svarer til 5 l/100 km. Med miles og gallons divideres afstanden med bilens mpg (miles pr. gallon). Når du skifter enheder, omregnes de værdier, du har indtastet, så du kan sammenligne tal fra begge systemer.',
          'Beløbene pr. måned og pr. år bygger på antallet af ture om ugen – 5 ture frem og tilbage om ugen er typisk pendling. Kører du elbil, så indtast i stedet forbruget i kWh/100 km og prisen pr. kWh.'
        ]
      },
      faq: [
        {
          q: 'Hvordan beregner man benzinudgiften til en tur?',
          a: 'Gang afstanden med bilens forbrug, divider med 100, og gang med literprisen. 200 km i en bil, der bruger 6 l/100 km, med blyfri 95 til 13,50 kr. literen: 200 × 6 ÷ 100 × 13,50 kr. = 162 kr. Regner du i miles, divideres afstanden med bilens mpg og ganges med prisen pr. gallon.'
        },
        {
          q: 'Hvordan deler man brændstofudgiften mellem passagererne?',
          a: 'Indtast antallet af personer, der deler udgiften. Beregneren fordeler turens pris ligeligt mellem alle, inklusive føreren.'
        },
        {
          q: 'Medregner beregneren slid, parkering og broafgifter?',
          a: 'Nej, den tæller kun brændstof. Slid, forsikring, parkering og broafgifter kommer oveni, så den samlede pris for at køre bil er højere.'
        }
      ]
    }
  }
};
