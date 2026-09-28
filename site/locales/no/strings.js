// Norwegian (bokmål) texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in Norwegian
// kroner (NOK).

module.exports = {
  meta: {
    name: 'Norsk',
    locale: 'nb-NO',
    currency: 'NOK',
    ogLocale: 'nb_NO'
  },

  money: {
    symbol: 'kr',
    zero: '0,00 kr',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Hopp til innholdet',
    home: 'Forside',
    toggleTheme: 'Bytt tema',
    themeToLight: 'Bytt til lyst tema',
    themeToDark: 'Bytt til mørkt tema',
    language: 'Språk',
    allTools: 'Alle verktøy',
    share: 'Del',
    settings: 'Innstillinger',
    quickPicks: 'Hurtigvalg',
    faqTitle: 'Ofte stilte spørsmål',
    relatedTools: 'Flere kalkulatorer',
    imageAlt: 'costsimulators.com – gratis kalkulatorer for hverdagens pengespørsmål'
  },

  footer: {
    privacy: 'Kjører helt i nettleseren din. Ingen informasjonskapsler, ingen sporing.',
    about: 'Om oss',
    contact: 'Kontakt',
    privacyPolicy: 'Personvern',
    terms: 'Vilkår'
  },

  runtime: {
    share: {
      linkCopied: 'Lenken er kopiert',
      copyFailed: 'Kunne ikke kopiere',
      copied: 'Kopiert!',
      calculatedWith: 'Beregnet med costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} t',
      hoursMinutes: '{h} t {m} min'
    }
  },

  home: {
    title: 'Gratis kostnadskalkulatorer for hverdagen | costsimulators.com',
    description: 'Gratis og private kalkulatorer som viser hva ting egentlig koster: møter, arbeidstimer, kaffe, røyking, abonnementer, strøm og drivstoff. Ingen registrering, alt skjer i nettleseren.',
    eyebrow: 'Gratis · Privat · Lynraskt',
    heading: 'Små verktøy for hverdagens <span class="accent-text">penge</span>spørsmål.',
    lead: 'Raske kalkulatorer som viser hva ting egentlig koster. Ingen registrering, ingen sporing – alt kjører rett i nettleseren din.',
    toolsTitle: 'Verktøy',
    toolCount: '{count} verktøy',
    suggestTitle: 'Har du en idé?',
    suggestText: 'Foreslå et nytt verktøy på GitHub.',
    whyTitle: 'Mange bekker små gjør en stor å',
    whyText1: 'Ett møte, en kaffe på vei til jobben eller én strømmetjeneste til føles sjelden dyrt i seg selv. Legger du dem sammen over en måned, et år eller et tiår, ser tallene helt annerledes ut.',
    whyText2: 'Hver kalkulator gjør én ting, spør bare om tallene den trenger og viser svaret med en gang. Alt beregnes i nettleseren din, så tallene dine blir værende på enheten din.',
    aboutLink: 'Mer om costsimulators.com',
    faq: [
      {
        q: 'Er costsimulators.com gratis?',
        a: 'Ja. Alle kalkulatorene er helt gratis, uten registrering, betalingsmur eller reklame. Du kan også bruke dem på jobben.'
      },
      {
        q: 'Blir tallene mine lagret eller sendt noe sted?',
        a: 'Nei. Alt du skriver inn, beregnes i nettleseren din og sendes aldri til en server. Nettstedet bruker ingen informasjonskapsler og ingen analyseverktøy.'
      },
      {
        q: 'Kan jeg dele en beregning?',
        a: 'Ja. Innstillingene dine ligger i sideadressen. Trykk på Del for å kopiere lenken – den som åpner den, ser den samme beregningen.'
      }
    ]
  },

  notFound: {
    title: 'Fant ikke siden | costsimulators.com',
    description: 'Siden du lette etter, finnes ikke.',
    heading: 'Denne siden finnes ikke.',
    lead: 'Adressen kan være feilskrevet, eller siden kan ha blitt flyttet. Alle kalkulatorene finner du på forsiden.'
  },

  documents: {
    about: {
      name: 'Om oss',
      title: 'Om oss – gratis og private kostnadskalkulatorer | costsimulators.com',
      description: 'Hvem som lager costsimulators.com, og hvordan kalkulatorene virker. Gratis og private kalkulatorer for møter, arbeidstimer, vaner, abonnementer, strøm og bilturer.'
    },
    privacy: {
      name: 'Personvernerklæring',
      title: 'Personvernerklæring | costsimulators.com',
      description: 'Slik behandler costsimulators.com opplysningene dine: beregningene skjer i nettleseren, uten sporing, uten analyseverktøy og uten brukerkontoer.'
    },
    terms: {
      name: 'Brukervilkår',
      title: 'Brukervilkår | costsimulators.com',
      description: 'Brukervilkår for costsimulators.com: gratis til både privat og kommersiell bruk, leveres som den er, med åpen kildekode under MIT-lisensen.'
    }
  },

  tools: {
    meetings: {
      name: 'Møtekostnad',
      heading: 'Møtekalkulator',
      title: 'Møtekalkulator – se hva et møte koster i sanntid | costsimulators.com',
      description: 'Gratis møtekalkulator med tidtaker. Skriv inn timepris og antall deltakere, og se hva møtet koster, sekund for sekund.',
      card: 'Se prisen på et møte tikke oppover i sanntid mens dere snakker.',
      tag: 'Sanntid',
      lead: 'Angi timepris og antall deltakere, trykk Start og følg med på hva møtet koster mens det pågår.',
      pulseEvery: '10',
      rate: {
        label: 'Timepris',
        unit: 'kr per person',
        step: '50',
        value: '600',
        decrease: 'Senk timeprisen',
        increase: 'Øk timeprisen'
      },
      persons: {
        label: 'Deltakere',
        unit: 'personer',
        decrease: 'Færre deltakere',
        increase: 'Flere deltakere'
      },
      perMinute: 'Per minutt',
      perHour: 'Per time',
      note: 'Du kan endre verdiene mens tidtakeren går. Deltakere som kommer til eller forlater møtet, telles fra det øyeblikket.',
      total: 'Totalkostnad',
      elapsed: 'Medgått tid',
      reset: 'Nullstill',
      copyReport: 'Kopier rapport',
      kbdHint: 'Trykk på <kbd>mellomromstasten</kbd> for å starte eller pause',
      runtime: {
        mode: { start: 'Start', pause: 'Pause', resume: 'Fortsett' },
        status: { ready: 'Klar', live: 'Pågår', paused: 'Pauset' },
        announce: {
          invalid: 'Skriv inn timepris og antall deltakere for å starte.',
          started: 'Tidtakeren er startet.',
          paused: 'Pauset ved {cost} etter {time}.',
          reset: 'Tidtakeren er nullstilt.'
        },
        report: {
          cost: 'Møtekostnad: {cost}',
          duration: 'Varighet: {time}',
          participants: 'Deltakere: {persons} × {rate}/t'
        }
      },
      about: {
        title: 'Slik beregnes møtekostnaden',
        paragraphs: [
          'Kalkulatoren ganger antall deltakere med timeprisen deres og med tiden som har gått. Et møte på én time med 5 personer til 600 kr i timen koster 3 000 kr – det er 50 kr hvert minutt.',
          'Som timepris bør du bruke det en arbeidstime faktisk koster arbeidsgiveren, ikke bare lønnen. Arbeidsgiveravgiften er 14,1 % for de fleste arbeidsgivere, og med feriepenger og pensjon kommer det ofte 30–40 % i tillegg til bruttotimelønnen. Vet du ikke timeprisen til alle, holder det fint med et snitt for teamet.',
          'Tidtakeren teller riktig også i en bakgrunnsfane, og den løpende kostnaden vises i fanetittelen i nettleseren, så du kan følge med selv når du deler skjermen. Når møtet er ferdig, setter du tidtakeren på pause og kopierer en kort rapport til referatet.'
        ]
      },
      faq: [
        {
          q: 'Hvordan regner jeg ut hva et møte koster?',
          a: 'Gang antall deltakere med gjennomsnittlig timepris og med møtets lengde i timer. For eksempel: 6 personer × 500 kr i timen × 1,5 timer = 4 500 kr. Denne kalkulatoren gjør regnestykket fortløpende mens møtet pågår.'
        },
        {
          q: 'Hvilken timepris bør jeg bruke?',
          a: 'Bruk hele kostnaden for en arbeidstime: bruttotimelønn pluss arbeidsgiveravgift, feriepenger, pensjon og andre personalkostnader. For konsulenter og innleide bruker du timeprisen de fakturerer.'
        },
        {
          q: 'Kan jeg endre antall deltakere underveis i møtet?',
          a: 'Ja. Endre antall deltakere eller timeprisen når som helst. De nye verdiene gjelder fra det øyeblikket, og kostnaden som allerede har påløpt, blir stående som den er.'
        },
        {
          q: 'Fortsetter tidtakeren hvis jeg bytter fane?',
          a: 'Ja. Tidtakeren går etter klokken, så summen blir riktig også i en bakgrunnsfane. Mens tidtakeren går, ber siden dessuten nettleseren om å holde skjermen påslått.'
        }
      ]
    },

    workhours: {
      name: 'Arbeidstimer',
      heading: 'Kalkulator for pris i arbeidstimer',
      title: 'Pris i arbeidstimer – hvor lenge må du jobbe for det? | costsimulators.com',
      description: 'Gjør om en hvilken som helst pris til timer, dager og uker med arbeid. Skriv inn timelønn, månedslønn eller årslønn og se hva et kjøp egentlig koster i arbeidstid.',
      card: 'Gjør om en pris til timene, dagene og ukene du må jobbe for den.',
      tag: 'Jobb',
      lead: 'Skriv inn lønnen din og en pris for å se hvor lenge du må jobbe for å ha råd.',
      period: {
        label: 'Jeg kjenner lønnen min',
        hour: 'Per time',
        month: 'Per måned',
        year: 'Per år'
      },
      pay: {
        label: 'Lønn',
        unit: 'kr per time',
        value: '250',
        step: '10',
        monthStep: '1000',
        yearStep: '10000',
        hint: 'Bruk lønnen du får utbetalt etter skatt, så blir svaret mest ærlig.',
        decrease: 'Senk lønnen',
        increase: 'Øk lønnen'
      },
      hoursPerWeek: {
        label: 'Timer per uke',
        unit: 'timer',
        value: '37.5',
        chip1: '37,5 t',
        chip2: '40 t',
        preset1: '37.5',
        preset2: '40',
        decrease: 'Færre timer per uke',
        increase: 'Flere timer per uke'
      },
      price: {
        label: 'Pris',
        unit: 'kr',
        value: '11990',
        step: '100',
        decrease: 'Senk prisen',
        increase: 'Øk prisen'
      },
      resultsTitle: 'Pris i arbeidstid',
      youNeedToWork: 'Du må jobbe',
      workDays: 'Arbeidsdager',
      workWeeks: 'Arbeidsuker',
      hourlyRate: 'Timelønnen din',
      runtime: {
        unit: {
          hour: 'kr per time',
          month: 'kr per måned',
          year: 'kr per år'
        },
        days: { one: '{n} dager', other: '{n} dager' },
        weeks: { one: '{n} uker', other: '{n} uker' },
        note: {
          empty: 'Skriv inn lønnen din, timer per uke og en pris for å se hvor lenge du må jobbe for det.',
          result: 'Basert på {hours} timers arbeidsdager, {days} dager i uken.'
        }
      },
      about: {
        title: 'Slik beregnes arbeidstiden',
        paragraphs: [
          'Først gjøres lønnen din om til timelønn. Månedslønn ganges med 12 og deles på antall arbeidstimer i året (timer per uke × 52), mens årslønn deles direkte på de samme timene. Deretter deles prisen på timelønnen din.',
          'Arbeidsdagene regnes med femdagersuke, så 37,5 timer i uken betyr arbeidsdager på 7,5 timer. Med 250 kr i timen koster for eksempel en telefon til 11 990 kr nesten 48 timer – vel seks arbeidsdager, eller om lag 1,3 arbeidsuker.',
          'For det ærligste svaret bør du bruke lønnen du får utbetalt etter skatt, siden det er de pengene du faktisk bruker. Å tenke på priser i arbeidstimer er en enkel måte å avgjøre om noe virkelig er verdt det.'
        ]
      },
      faq: [
        {
          q: 'Hvor mange timer må jeg jobbe for å ha råd til noe?',
          a: 'Del prisen på timelønnen din etter skatt. Tjener du 200 kr i timen etter skatt, koster et kjøp på 3 000 kr 15 timers arbeid.'
        },
        {
          q: 'Bør jeg bruke brutto- eller nettolønn?',
          a: 'Nettolønn etter skatt gir det mest realistiske svaret, fordi det er de pengene du faktisk har å bruke. Med bruttolønn ser ting billigere ut enn de er.'
        },
        {
          q: 'Hvordan gjør jeg om månedslønn til timelønn?',
          a: 'Gang månedslønnen med 12 og del på antall arbeidstimer i året. Med 37,5 timers uke er det 1 950 timer, så 40 000 kr utbetalt i måneden tilsvarer om lag 246 kr i timen. Kalkulatoren gjør dette for deg når du velger Per måned.'
        }
      ]
    },

    coffee: {
      name: 'Kaffevane',
      heading: 'Kaffekalkulator',
      title: 'Kaffekalkulator – hva koster kaffevanen din i året? | costsimulators.com',
      description: 'Se hva den daglige kaffen koster per måned og over 1, 5 og 10 år. Skriv inn pris per kopp og antall kopper i uken – gratis og privat.',
      card: 'Se hva den daglige koppen blir til over ett, fem og ti år.',
      tag: 'Vane',
      lead: 'Skriv inn hva en kopp koster og hvor ofte du kjøper en, så ser du hva vanen blir til over årene.',
      price: {
        label: 'Pris per kopp',
        unit: 'kr',
        step: '5',
        value: '50',
        decrease: 'Senk kaffeprisen',
        increase: 'Øk kaffeprisen'
      },
      perWeek: {
        label: 'Kopper per uke',
        unit: 'kopper',
        chip1: 'Hverdager',
        chip2: 'Hver dag',
        chip3: 'To om dagen',
        decrease: 'Færre kopper per uke',
        increase: 'Flere kopper per uke'
      },
      resultsTitle: 'Hva det blir til',
      in10Years: 'På 10 år',
      perMonth: 'Per måned',
      year1: '1 år',
      year5: '5 år',
      runtime: {
        note: {
          empty: 'Skriv inn en pris og hvor mange kopper du drikker i uken for å se summene.',
          result: 'Det blir omtrent {cups} kopper i året til {price} koppen.'
        }
      },
      about: {
        title: 'Slik beregnes kaffekostnaden',
        paragraphs: [
          'Årskostnaden er pris per kopp × kopper per uke × 52 uker. Månedskostnaden er årskostnaden delt på 12, og summene for 5 og 10 år ganger årskostnaden uten inflasjon eller prisøkninger.',
          'En kaffe til 50 kr hver arbeidsdag blir 13 000 kr i året og 130 000 kr på ti år. Blir du overrasket over tallet, er det enkelt å spare ved å brygge kaffen hjemme eller ta med egen termokopp.',
          'Kalkulatoren fungerer for alle små, faste kjøp: en energidrikk, et påsmurt rundstykke til lunsj eller en flaske vann. Skriv inn prisen og hvor mange du kjøper i uken.'
        ]
      },
      faq: [
        {
          q: 'Hva koster en kaffe om dagen i løpet av et år?',
          a: 'Én kopp om dagen, sju dager i uken, blir 364 kopper i året. Til 40 kr koppen er det 14 560 kr i året og 145 600 kr på ti år.'
        },
        {
          q: 'Er det billigere å lage kaffe hjemme?',
          a: 'Som regel mye billigere. En kopp brygget hjemme koster ofte godt under 5 kroner, mens en kopp på kafé fort koster 40–60 kroner. Skriv inn hva en kopp hjemme koster deg, og sammenlign.'
        },
        {
          q: 'Tar kalkulatoren hensyn til inflasjon?',
          a: 'Nei. Beregningene forutsetter at prisen holder seg lik, så de viser hva vanen koster med dagens priser. Når prisene stiger, blir den reelle kostnaden over tid høyere.'
        }
      ]
    },

    smoking: {
      name: 'Røykekostnad',
      heading: 'Røykekalkulator',
      title: 'Røykekalkulator – hva koster røykingen din? | costsimulators.com',
      description: 'Finn ut hva røyking koster per måned og over 1, 5 og 10 år – og hvor mye du sparer på å slutte. Skriv inn pakkepris og antall sigaretter per dag.',
      card: 'Se hvor mye penger som går opp i røyk hver måned og over årene.',
      tag: 'Vane',
      lead: 'Skriv inn hva en pakke koster og hvor mye du røyker, så ser du hvor mye penger som går opp i røyk over årene.',
      packPrice: {
        label: 'Pakkepris',
        unit: 'kr',
        step: '5',
        value: '150',
        decrease: 'Senk pakkeprisen',
        increase: 'Øk pakkeprisen'
      },
      perDay: {
        label: 'Sigaretter per dag',
        unit: 'sigaretter',
        chip1: '5 om dagen',
        chip2: '10 om dagen',
        chip3: '20 om dagen',
        decrease: 'Færre sigaretter per dag',
        increase: 'Flere sigaretter per dag'
      },
      perPack: {
        label: 'Sigaretter per pakke',
        unit: 'pakkestørrelse',
        value: '20',
        decrease: 'Færre sigaretter per pakke',
        increase: 'Flere sigaretter per pakke'
      },
      resultsTitle: 'Opp i røyk',
      in10Years: 'På 10 år',
      perMonth: 'Per måned',
      year1: '1 år',
      year5: '5 år',
      runtime: {
        note: {
          empty: 'Skriv inn pakkeprisen, hvor mange du røyker om dagen og pakkestørrelsen for å se summene.',
          result: 'Det blir omtrent {cigarettes} sigaretter ({packs} pakker) i året til {price} stykket.'
        }
      },
      about: {
        title: 'Slik beregnes kostnaden ved røyking',
        paragraphs: [
          'Prisen på én sigarett er pakkeprisen delt på antall sigaretter i pakken. Den ganges med antall sigaretter du røyker om dagen og med 365 dager for å få årskostnaden. Månedskostnaden er en tolvtedel av dette, og summene for 5 og 10 år bruker dagens priser.',
          'En halv pakke om dagen til 150 kr pakken blir omtrent 27 400 kr i året og over 270 000 kr på ti år. Å se totalen kan være en sterk motivasjon: de samme pengene kunne gått til en reise, sparing eller nedbetaling av gjeld.',
          'Kalkulatoren regner bare med prisen på sigarettene. Helsekostnader, høyere forsikringspremier og sykedager kommer i tillegg. Vil du ha hjelp til å slutte, kan du laste ned appen Slutta, finne råd på helsenorge.no eller snakke med fastlegen din.'
        ]
      },
      faq: [
        {
          q: 'Hva koster en pakke om dagen i året?',
          a: 'En pakke om dagen blir 365 pakker i året. Til 150 kr pakken er det 54 750 kr i året og 547 500 kr på ti år.'
        },
        {
          q: 'Hvor mye sparer jeg på å slutte å røyke?',
          a: 'Akkurat det kalkulatoren viser. Skriv inn det du røyker i dag: måneds- og årssummene er det du sparer ved å slutte.'
        },
        {
          q: 'Fungerer dette for rulletobakk og snus?',
          a: 'Ja. For rulletobakk skriver du inn prisen på en pakke tobakk som pakkepris og hvor mange sigaretter du ruller av den som pakkestørrelse. For snus bruker du prisen på en boks og antall porsjoner i den. Legg så inn hvor mange du bruker om dagen.'
        }
      ]
    },

    subscriptions: {
      name: 'Abonnementer',
      heading: 'Abonnementskalkulator',
      title: 'Abonnementskalkulator – totalpris per måned og år | costsimulators.com',
      description: 'Legg sammen strømmetjenester, treningssenter, mobilabonnement og alle andre abonnementer. Se totalen per måned, per år og over 10 år, og hvilket abonnement som koster mest.',
      card: 'Legg sammen strømming, trening og alle andre faste betalinger på ett sted.',
      tag: 'Budsjett',
      lead: 'List opp alt du betaler for jevnlig, og se hva det blir til sammen. Månedlig, årlig og ukentlig betaling støttes.',
      listTitle: 'Abonnementene dine',
      empty: 'Ingen abonnementer ennå. Legg til ett nedenfor, eller velg et av forslagene.',
      add: 'Legg til abonnement',
      quickAdd: 'Legg til raskt',
      quick: {
        1: { name: 'Videostrømming', price: '159' },
        2: { name: 'Musikkstrømming', price: '139' },
        3: { name: 'Treningssenter', price: '449' },
        4: { name: 'Skylagring', price: '39' },
        5: { name: 'Mobilabonnement', price: '299' },
        6: { name: 'Nyheter', price: '199' }
      },
      note: 'Listen din ligger i sideadressen, så du kan bokmerke eller dele den. Den sendes aldri noe sted.',
      row: {
        name: 'Navn',
        nameLabel: 'Navn på abonnement',
        priceLabel: 'Pris i kroner',
        cycleLabel: 'Betalingsintervall',
        monthly: '/ måned',
        yearly: '/ år',
        weekly: '/ uke'
      },
      resultsTitle: 'Abonnementer totalt',
      perYear: 'Per år',
      perMonth: 'Per måned',
      perDay: 'Per dag',
      in10Years: 'På 10 år',
      breakdownLabel: 'Årskostnad per abonnement',
      copySummary: 'Kopier oppsummering',
      runtime: {
        untitled: 'Uten navn',
        remove: 'Fjern {name}',
        removeUnnamed: 'Fjern abonnement',
        breakdown: '{cost} / år · {percent} %',
        cycle: { monthly: 'måned', yearly: 'år', weekly: 'uke' },
        note: {
          empty: 'Legg til et abonnement med pris for å se summene.',
          single: 'Det blir {cost} i året for {name}.',
          biggest: 'Den største utgiften din er {name} med {cost} i året, {percent} % av totalen.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Totalt: {month} per måned, {year} per år'
        }
      },
      about: {
        title: 'Slik beregnes totalen for abonnementene',
        paragraphs: [
          'Hvert abonnement gjøres om til en årskostnad: månedspriser ganges med 12, ukepriser med 52, og årspriser brukes som de er. Årstotalen deles deretter på 12 for månedskostnaden og på 365 for dagskostnaden.',
          'Oversikten sorterer abonnementene fra dyrest til billigst og viser hvor stor andel av totalen hvert av dem utgjør, så det er lett å se hva du kan si opp eller bytte til noe billigere.',
          'Listen lagres i sideadressen, aldri på en server. Bokmerk siden for å komme tilbake til listen senere, eller del lenken for å gå gjennom felles abonnementer med familien.'
        ]
      },
      faq: [
        {
          q: 'Hvordan finner jeg alle abonnementene mine?',
          a: 'Gå gjennom kontoutskriftene fra banken og kredittkortet for de siste månedene, og se etter faste trekk. Sjekk også AvtaleGiro og eFaktura i nettbanken, faste betalinger i Vipps og abonnementsinnstillingene i App Store, Google Play og PayPal.'
        },
        {
          q: 'Er årsabonnement billigere enn månedsabonnement?',
          a: 'Ofte 15–20 %, men bare hvis du uansett ville beholdt tjenesten hele året. Legg inn begge variantene i listen for å sammenligne årskostnaden.'
        },
        {
          q: 'Blir listen min lagret?',
          a: 'Listen ligger bare i sideadressen. Bokmerk eller del lenken for å ta vare på den; ingenting lagres på en server eller i informasjonskapsler.'
        }
      ]
    },

    electricity: {
      name: 'Strømkostnad',
      heading: 'Strømkalkulator',
      title: 'Strømkalkulator – beregn strømforbruk og strømkostnad | costsimulators.com',
      description: 'Regn ut hva et apparat koster i strøm per dag, måned og år ut fra watt, brukstid og strømpris. Gratis kalkulator for strømforbruk og kWh-pris.',
      card: 'Se hva det koster å ha et apparat påslått per dag, måned og år.',
      tag: 'Hjem',
      lead: 'Skriv inn effekten til apparatet, hvor lenge det står på og hva du betaler for strømmen, så ser du hva det egentlig koster å ha det påslått.',
      power: {
        label: 'Effekt',
        unit: 'watt',
        chip1: 'LED-pære 9 W',
        chip2: 'Bærbar PC 60 W',
        chip3: 'TV 100 W',
        chip4: 'Gaming-PC 400 W',
        chip5: 'Panelovn 1 500 W',
        decrease: 'Senk effekten',
        increase: 'Øk effekten'
      },
      hours: {
        label: 'Timer per dag',
        unit: 'timer',
        decrease: 'Færre timer per dag',
        increase: 'Flere timer per dag'
      },
      days: {
        label: 'Dager per uke',
        unit: 'dager',
        decrease: 'Færre dager per uke',
        increase: 'Flere dager per uke'
      },
      kwhPrice: {
        label: 'Strømpris',
        unit: 'øre/kWh',
        value: '120',
        step: '10',
        divisor: '100',
        hint: 'Ta med nettleie og avgifter for et mest mulig riktig resultat.',
        decrease: 'Senk strømprisen',
        increase: 'Øk strømprisen'
      },
      resultsTitle: 'Driftskostnad',
      perYear: 'Per år',
      perDayOfUse: 'Per bruksdag',
      perMonth: 'Per måned',
      energyPerYear: 'Energi per år',
      runtime: {
        note: {
          empty: 'Skriv inn effekten, timer per dag (maks 24), dager per uke (maks 7) og strømprisen din.',
          result: 'Apparatet bruker omtrent {day} hver dag det står på, rundt {year} i året.'
        }
      },
      about: {
        title: 'Slik beregnes strømkostnaden',
        paragraphs: [
          'Energiforbruket i kilowattimer (kWh) er effekten i watt × antall brukstimer ÷ 1 000. En TV på 100 W som står på i 4 timer, bruker 0,4 kWh om dagen. Ganger du det med strømprisen per kWh, får du kostnaden per bruksdag.',
          'Årskostnaden tar hensyn til hvor mange dager i uken apparatet brukes, fordelt over årets 365 dager. Månedskostnaden er en tolvtedel av årskostnaden.',
          'Effekten finner du på typeskiltet eller i bruksanvisningen. Mange apparater bruker mindre enn maksimal effekt det meste av tiden, så resultatet er et øvre anslag. For en mest mulig riktig pris bør du ta med nettleie og avgifter, ikke bare selve strømprisen.'
        ]
      },
      faq: [
        {
          q: 'Hvordan regner jeg ut strømkostnaden for et apparat?',
          a: 'Gang effekten i kilowatt med antall brukstimer og med prisen per kWh. En panelovn på 1 500 W som står på i 3 timer, koster 1,5 kW × 3 t × 1,20 kr = 5,40 kr om dagen.'
        },
        {
          q: 'Hvor mange kWh bruker et apparat?',
          a: 'Del effekten i watt på 1 000 og gang med antall timer det står på. En bærbar PC på 60 W som brukes 8 timer om dagen, bruker 0,48 kWh om dagen – om lag 175 kWh i året hvis den brukes hver dag.'
        },
        {
          q: 'Hvilken strømpris bør jeg bruke?',
          a: 'Bruk totalprisen per kWh fra strømregningen: strømpris, nettleie og avgifter, minus eventuell strømstøtte. Deler du totalbeløpet på regningen på antall kWh du har brukt, får du et godt gjennomsnitt.'
        },
        {
          q: 'Bruker apparater strøm i standby?',
          a: 'Ja, mange apparater trekker noen watt i standby. Skriv inn standby-effekten og 24 timer i døgnet for å se hva det koster over et år.'
        }
      ]
    },

    trip: {
      name: 'Drivstoffkostnad',
      heading: 'Drivstoffkalkulator for bilturer',
      title: 'Drivstoffkalkulator – bensinkostnad for tur og pendling | costsimulators.com',
      description: 'Regn ut drivstoffkostnaden for en biltur eller daglig pendling, og del den mellom passasjerene. Fungerer med kilometer og liter eller miles og gallon.',
      card: 'Regn ut drivstoffkostnaden for en tur eller pendling, og del den med andre.',
      tag: 'Reise',
      lead: 'Regn ut drivstoffkostnaden for en enkelt tur eller den daglige pendlingen, og del den mellom alle i bilen.',
      unit: {
        label: 'Enheter',
        metric: 'Kilometer og liter',
        us: 'Miles og gallon'
      },
      distance: {
        label: 'Avstand',
        unit: 'km én vei',
        decrease: 'Kortere avstand',
        increase: 'Lengre avstand'
      },
      direction: {
        label: 'Tur',
        one: 'Én vei',
        round: 'Tur-retur'
      },
      consumption: {
        label: 'Drivstofforbruk',
        unit: 'l/100 km',
        hint: 'Kjører du elbil? Skriv inn kWh/100 km og strømprisen per kWh.',
        decrease: 'Lavere forbruk',
        increase: 'Høyere forbruk'
      },
      fuelPrice: {
        label: 'Drivstoffpris',
        unit: 'kr per liter',
        value: '21',
        step: '0.1',
        usStep: '0.5',
        decrease: 'Senk drivstoffprisen',
        increase: 'Øk drivstoffprisen'
      },
      people: {
        label: 'Personer som deler kostnaden',
        unit: 'personer',
        decrease: 'Færre personer',
        increase: 'Flere personer'
      },
      tripsPerWeek: {
        label: 'Turer per uke',
        unit: 'for måneds- og årstotaler',
        decrease: 'Færre turer per uke',
        increase: 'Flere turer per uke'
      },
      resultsTitle: 'Drivstoffkostnad',
      perPerson: 'Per person',
      perMonth: 'Per måned',
      perYear: 'Per år',
      runtime: {
        direction: { one: 'Én vei', round: 'Tur-retur' },
        unit: {
          metric: {
            distance: 'km én vei',
            consumption: 'l/100 km',
            price: 'kr per liter',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'miles én vei',
            consumption: 'mpg',
            price: 'kr per gallon',
            perDistance: 'mile',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Skriv inn avstand, drivstofforbruk og drivstoffpris for å se kostnaden.',
          result: 'Turen bruker {fuel} drivstoff, omtrent {price} per {distance}.'
        }
      },
      about: {
        title: 'Slik beregnes drivstoffkostnaden',
        paragraphs: [
          'Med kilometer og liter er drivstofforbruket avstanden × forbruket ÷ 100. Er pendleavstanden 25 km hver vei (50 km om dagen) og bilen bruker 6,5 l/100 km, går det med 3,25 liter. Ganger du med literprisen, får du kostnaden for turen, og deler du på antall personer, fordeles den mellom dem. Oppgir du forbruket i liter per mil, ganger du med 10: 0,65 l/mil er det samme som 6,5 l/100 km.',
          'Med miles og gallon deles avstanden på bilens mpg-verdi (miles per gallon). Bytter du enhet, gjør kalkulatoren om verdiene du har skrevet inn, så du kan sammenligne tall fra begge systemene.',
          'Måneds- og årstotalene bygger på antall turer per uke – fem turer tur-retur i uken er typisk for pendling. For elbil skriver du i stedet inn forbruket i kWh/100 km og prisen per kWh.'
        ]
      },
      faq: [
        {
          q: 'Hvordan regner jeg ut drivstoffkostnaden for en tur?',
          a: 'Gang avstanden med forbruket og drivstoffprisen, og del på 100. For 200 km med en bil som bruker 6 l/100 km, og bensin til 21 kr literen: 200 × 6 ÷ 100 × 21 kr = 252 kr.'
        },
        {
          q: 'Hvordan deler jeg drivstoffutgiftene mellom passasjerene?',
          a: 'Skriv inn antall personer som deler kostnaden. Kalkulatoren deler turkostnaden likt på alle, sjåføren medregnet.'
        },
        {
          q: 'Er slitasje, parkering og bompenger regnet med?',
          a: 'Nei, kalkulatoren regner bare med drivstoff. Slitasje, forsikring, parkering, bompenger og ferjer kommer i tillegg, så den totale kostnaden ved å kjøre er høyere.'
        }
      ]
    }
  }
};
