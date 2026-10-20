// Finnish texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in euros.

module.exports = {
  meta: {
    name: 'Suomi',
    locale: 'fi-FI',
    currency: 'EUR',
    ogLocale: 'fi_FI'
  },

  money: {
    symbol: '€',
    zero: '0,00 €',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Siirry sisältöön',
    home: 'Etusivu',
    toggleTheme: 'Vaihda teema',
    themeToLight: 'Vaihda vaaleaan teemaan',
    themeToDark: 'Vaihda tummaan teemaan',
    language: 'Kieli',
    allTools: 'Kaikki työkalut',
    share: 'Jaa',
    settings: 'Asetukset',
    quickPicks: 'Pikavalinnat',
    faqTitle: 'Usein kysytyt kysymykset',
    relatedTools: 'Lisää laskureita',
    imageAlt: 'costsimulators.com – ilmaiset laskurit arjen rahakysymyksiin',
    invest: {
      label: 'Jos sijoittaisit summan'
    },
    receipt: {
      open: 'Tulosta kuitti',
      title: 'Kuittisi',
      close: 'Sulje',
      skip: 'Siirry loppusummaan',
      total: 'Yhteensä',
      length: 'Kuitin pituus',
      lengthNote: '4 mm riviltä, kuten oikeassa kassakuitissa.',
      thanks: 'Kiitos 10 vuoden kanta-asiakkuudesta!',
      image: 'Jaa kuvana'
    }
  },

  footer: {
    privacy: 'Toimii kokonaan selaimessasi. Ei evästeitä, ei seurantaa.',
    about: 'Tietoa',
    contact: 'Yhteystiedot',
    privacyPolicy: 'Tietosuoja',
    terms: 'Käyttöehdot'
  },

  runtime: {
    share: {
      linkCopied: 'Linkki kopioitu',
      copyFailed: 'Kopiointi epäonnistui',
      copied: 'Kopioitu!',
      calculatedWith: 'Laskettu costsimulators.comilla'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    },
    invest: {
      note: '{monthly} kuukaudessa 10 vuoden ajan {rate}:n vuosituotolla: omaa rahaa {paid} ja tuottoa {gain}.'
    },
    receipt: {
      subtotal: 'Välisumma, vuosi {year}',
      year: 'Vuosi {year}',
      unit: 'meter',
      saved: 'Kuva tallennettu'
    }
  },

  home: {
    title: 'Ilmaiset kustannuslaskurit arkeen',
    description: 'Ilmaiset ja yksityiset laskurit, jotka näyttävät, mitä asiat oikeasti maksavat: kokoukset, työtunnit, tavat, tilaukset, sähkö, polttoaine ja ostokset käyttökertaa kohden. Ei rekisteröitymistä.',
    eyebrow: 'Ilmainen · Yksityinen · Heti',
    heading: 'Pieniä työkaluja arjen <span class="accent-text">raha</span>kysymyksiin.',
    lead: 'Nopeat laskurit, jotka näyttävät, mitä asiat oikeasti maksavat. Ei rekisteröitymistä eikä seurantaa – kaikki toimii suoraan selaimessasi.',
    toolsTitle: 'Työkalut',
    toolCount: '{count} työkalua',
    suggestTitle: 'Onko sinulla idea?',
    suggestText: 'Ehdota uutta työkalua GitHubissa.',
    whyTitle: 'Pienet kulut kasvavat suuriksi',
    whyText1: 'Yksi palaveri, kahvi töihin mennessä tai yksi suoratoistopalvelu lisää ei yksinään tunnu kalliilta. Kun ne laskee yhteen kuukauden, vuoden tai vuosikymmenen ajalta, luvut näyttävät aivan toisilta.',
    whyText2: 'Jokainen laskuri tekee yhden asian, kysyy vain tarvitsemansa luvut ja näyttää vastauksen heti. Kaikki lasketaan selaimessasi, joten lukusi pysyvät omalla laitteellasi.',
    aboutLink: 'Lisää costsimulators.comista',
    faq: [
      {
        q: 'Onko costsimulators.com ilmainen?',
        a: 'On. Kaikki laskurit ovat täysin ilmaisia, eikä niissä ole rekisteröitymistä, maksumuuria tai mainoksia. Voit käyttää niitä myös työssä.'
      },
      {
        q: 'Tallennetaanko tai lähetetäänkö lukujani minnekään?',
        a: 'Ei. Kaikki syöttämäsi lasketaan selaimessasi, eikä mitään lähetetä palvelimelle. Sivusto ei käytä evästeitä eikä analytiikkaa.'
      },
      {
        q: 'Voinko jakaa laskelman?',
        a: 'Voit. Asetukset säilyvät sivun osoitteessa. Paina Jaa kopioidaksesi linkin, niin sen avaaja näkee saman laskelman.'
      }
    ]
  },

  notFound: {
    title: 'Sivua ei löytynyt',
    description: 'Etsimääsi sivua ei ole olemassa.',
    heading: 'Tätä sivua ei ole olemassa.',
    lead: 'Osoitteessa voi olla kirjoitusvirhe, tai sivu on siirtynyt. Kaikki laskurit löytyvät etusivulta.'
  },

  documents: {
    about: {
      name: 'Tietoa',
      title: 'Tietoa costsimulators.comista – ilmaiset laskurit',
      description: 'Kuka tekee costsimulators.comin ja miten laskurit toimivat. Ilmaiset ja yksityiset laskurit kokouksille, työtunneille, tavoille, ostoksille, tilauksille, sähkölle ja matkoille.'
    },
    privacy: {
      name: 'Tietosuojaseloste',
      title: 'Tietosuojaseloste',
      description: 'Miten costsimulators.com käsittelee tietojasi: laskut tehdään selaimessasi, ei seurantaa, ei analytiikkaa eikä käyttäjätilejä.'
    },
    terms: {
      name: 'Käyttöehdot',
      title: 'Käyttöehdot',
      description: 'costsimulators.comin käyttöehdot: vapaasti käytettävissä henkilökohtaiseen ja kaupalliseen käyttöön, tarjotaan sellaisenaan, avoin lähdekoodi MIT-lisenssillä.'
    }
  },

  tools: {
    meetings: {
      name: 'Kokouksen hinta',
      heading: 'Kokouksen hintalaskuri',
      title: 'Kokouksen hintalaskuri – palaverin kustannukset reaaliajassa',
      description: 'Ilmainen kokouslaskuri ajastimella. Syötä tuntihinta ja osallistujien määrä ja näe, mitä palaveri maksaa sekunti sekunnilta.',
      card: 'Katso, miten palaverin hinta kasvaa reaaliajassa puhuessanne.',
      tag: 'Ajastin',
      lead: 'Aseta tuntihinta ja osallistujamäärä, paina Aloita ja seuraa, mitä kokous maksaa sitä mukaa kuin se etenee.',
      pulseEvery: '1',
      rate: {
        label: 'Tuntihinta',
        unit: '€ / henkilö',
        step: '5',
        value: '50',
        decrease: 'Pienennä tuntihintaa',
        increase: 'Suurenna tuntihintaa'
      },
      persons: {
        label: 'Osallistujat',
        unit: 'henkilöä',
        decrease: 'Vähennä osallistujia',
        increase: 'Lisää osallistujia'
      },
      perMinute: 'Minuutissa',
      perHour: 'Tunnissa',
      note: 'Voit muuttaa arvoja ajastimen käydessä. Tulevat ja lähtevät osallistujat lasketaan mukaan siitä hetkestä alkaen.',
      total: 'Kokonaishinta',
      elapsed: 'Kulunut aika',
      reset: 'Nollaa',
      copyReport: 'Kopioi raportti',
      kbdHint: 'Käynnistä ja pysäytä <kbd>välilyönnillä</kbd>',
      runtime: {
        mode: { start: 'Aloita', pause: 'Tauko', resume: 'Jatka' },
        status: { ready: 'Valmis', live: 'Käynnissä', paused: 'Tauolla' },
        announce: {
          invalid: 'Syötä tuntihinta ja osallistujien määrä aloittaaksesi.',
          started: 'Ajastin käynnistyi.',
          paused: 'Tauolla: {cost}, aikaa kulunut {time}.',
          reset: 'Ajastin nollattiin.'
        },
        report: {
          cost: 'Kokouksen hinta: {cost}',
          duration: 'Kesto: {time}',
          participants: 'Osallistujat: {persons} × {rate}/h'
        }
      },
      about: {
        title: 'Näin kokouksen hinta lasketaan',
        paragraphs: [
          'Laskuri kertoo osallistujien määrän heidän tuntihinnallaan ja kuluneella ajalla. Tunnin palaveri viidellä hengellä ja 50 euron tuntihinnalla maksaa 250 € – noin 4,17 € joka minuutti.',
          'Käytä tuntihintana sitä, mitä työtunti oikeasti maksaa työnantajalle, ei pelkkää palkkaa. Bruttopalkan päälle tulevat työnantajan sivukulut, kuten työeläke- ja sosiaalivakuutusmaksut, jotka ovat tyypillisesti noin 20–25 % palkasta. Jos kaikkien tuntihintoja ei tiedä, tiimin keskiarvo riittää hyvin.',
          'Ajastin laskee oikein myös taustavälilehdellä, ja kertynyt summa näkyy selaimen välilehden otsikossa, joten voit seurata sitä vaikka jakaisit näyttöäsi. Kun palaveri loppuu, pysäytä ajastin ja kopioi lyhyt raportti muistioon.'
        ]
      },
      faq: [
        {
          q: 'Miten kokouksen hinta lasketaan?',
          a: 'Kerro osallistujien määrä heidän keskimääräisellä tuntihinnallaan ja kokouksen kestolla tunteina. Esimerkiksi 6 henkeä × 45 €/h × 1,5 tuntia = 405 €. Tämä laskuri tekee laskun reaaliajassa kokouksen aikana.'
        },
        {
          q: 'Mitä tuntihintaa kannattaa käyttää?',
          a: 'Käytä työtunnin kokonaiskustannusta: bruttotuntipalkka ja työnantajan sivukulut, kuten eläke- ja sosiaalivakuutusmaksut. Konsulteille ja alihankkijoille käytä heidän laskutushintaansa.'
        },
        {
          q: 'Voiko osallistujamäärää muuttaa kesken kokouksen?',
          a: 'Voi. Muuta osallistujamäärää tai tuntihintaa milloin tahansa. Uudet arvot lasketaan mukaan siitä hetkestä alkaen, ja jo kertynyt summa säilyy ennallaan.'
        },
        {
          q: 'Jatkuuko ajastin, jos vaihdan välilehteä?',
          a: 'Jatkuu. Ajastin perustuu kelloon, joten summa pysyy oikeana myös taustavälilehdellä. Ajastimen käydessä sivu pyytää selainta myös pitämään näytön päällä.'
        }
      ]
    },

    workhours: {
      name: 'Työtunnit',
      heading: 'Hinta työtunteina -laskuri',
      title: 'Hinta työtunteina – montako tuntia pitää tehdä töitä?',
      description: 'Muuta mikä tahansa hinta työtunneiksi, -päiviksi ja -viikoiksi. Syötä tunti-, kuukausi- tai vuosipalkkasi ja näe, mitä ostos oikeasti maksaa työaikana.',
      card: 'Muuta mikä tahansa hinta tunneiksi, päiviksi ja viikoiksi, jotka sen eteen pitää tehdä töitä.',
      tag: 'Työ',
      lead: 'Syötä palkkasi ja hinta, niin näet, kuinka kauan sinun pitää tehdä töitä sen eteen.',
      period: {
        label: 'Tiedän palkkani',
        hour: 'Tunnilta',
        month: 'Kuukaudelta',
        year: 'Vuodelta'
      },
      pay: {
        label: 'Palkka',
        unit: '€ / tunti',
        value: '20',
        step: '1',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Käytä nettopalkkaa verojen jälkeen, niin saat rehellisimmän vastauksen.',
        decrease: 'Pienennä palkkaa',
        increase: 'Suurenna palkkaa'
      },
      hoursPerWeek: {
        label: 'Tunteja viikossa',
        unit: 'tuntia',
        value: '37.5',
        chip1: '37,5 h',
        chip2: '40 h',
        preset1: '37.5',
        preset2: '40',
        decrease: 'Vähennä viikkotunteja',
        increase: 'Lisää viikkotunteja'
      },
      price: {
        label: 'Hinta',
        unit: '€',
        value: '999',
        step: '10',
        decrease: 'Pienennä hintaa',
        increase: 'Suurenna hintaa'
      },
      resultsTitle: 'Hinta työaikana',
      youNeedToWork: 'Sinun pitää tehdä töitä',
      workDays: 'Työpäiviä',
      workWeeks: 'Työviikkoja',
      hourlyRate: 'Tuntipalkkasi',
      runtime: {
        unit: {
          hour: '€ / tunti',
          month: '€ / kuukausi',
          year: '€ / vuosi'
        },
        days: { one: '{n} päivä', other: '{n} päivää' },
        weeks: { one: '{n} viikko', other: '{n} viikkoa' },
        note: {
          empty: 'Syötä palkkasi, viikkotuntisi ja hinta, niin näet, kuinka kauan sen eteen pitää tehdä töitä.',
          result: 'Laskettu {hours} tunnin työpäivillä, {days} päivää viikossa.'
        }
      },
      about: {
        title: 'Näin työaika lasketaan',
        paragraphs: [
          'Ensin palkkasi muutetaan tuntipalkaksi. Kuukausipalkka kerrotaan 12:lla ja jaetaan vuoden työtunneilla (viikkotunnit × 52), vuosipalkka jaetaan suoraan vuoden työtunneilla. Sen jälkeen hinta jaetaan tuntipalkalla.',
          'Työpäivät lasketaan viisipäiväisellä työviikolla, joten 37,5 tunnin viikko tarkoittaa 7,5 tunnin päiviä. Esimerkiksi 20 euron tuntipalkalla 999 euron puhelin maksaa noin 50 tuntia eli reilun työviikon.',
          'Rehellisimmän vastauksen saat käyttämällä nettopalkkaa verojen jälkeen, sillä se on raha, jonka oikeasti käytät. Kun hinnat ajattelee työtunteina, on helpompi päättää, onko jokin todella hintansa arvoinen.'
        ]
      },
      faq: [
        {
          q: 'Montako tuntia minun pitää tehdä töitä ostoksen eteen?',
          a: 'Jaa hinta nettotuntipalkallasi. Jos tienaat verojen jälkeen 15 € tunnissa, 300 euron ostos vastaa 20 työtuntia.'
        },
        {
          q: 'Kannattaako käyttää brutto- vai nettopalkkaa?',
          a: 'Nettopalkka verojen jälkeen antaa realistisimman tuloksen, koska se on raha, joka sinulla oikeasti on käytettävissä. Bruttopalkalla asiat näyttävät halvemmilta kuin ne ovat.'
        },
        {
          q: 'Miten kuukausipalkka muutetaan tuntipalkaksi?',
          a: 'Kerro kuukausipalkka 12:lla ja jaa vuoden työtunneilla. 37,5 tunnin viikolla niitä on 1 950, joten 3 500 euron kuukausipalkka on noin 21,50 € tunnissa. Laskuri tekee tämän puolestasi, kun valitset Kuukaudelta.'
        }
      ]
    },

    costperuse: {
      name: 'Käyttökerran hinta',
      heading: 'Käyttökerran hintalaskuri',
      title: 'Käyttökerran hinta – onko ostos hintansa arvoinen?',
      description: 'Laske, mitä ostos oikeasti maksaa käyttökertaa kohden: hinta miinus jälleenmyyntiarvo jaettuna sillä, kuinka usein ja kuinka kauan käytät sitä.',
      card: 'Jaa hinta kaikille käyttökerroille ja katso, onko ostos hintansa arvoinen.',
      tag: 'Ostokset',
      lead: 'Syötä hinta, kuinka usein käytät tavaraa ja kuinka monta vuotta, niin näet, mitä yksi käyttökerta oikeasti maksaa.',
      price: {
        label: 'Hinta',
        unit: '€',
        value: '500',
        step: '10',
        decrease: 'Pienennä hintaa',
        increase: 'Suurenna hintaa'
      },
      period: {
        label: 'Kuinka usein käytät',
        week: 'Viikossa',
        month: 'Kuukaudessa',
        year: 'Vuodessa'
      },
      uses: {
        label: 'Käyttökerrat',
        unit: 'kertaa viikossa',
        decrease: 'Vähennä käyttökertoja',
        increase: 'Lisää käyttökertoja'
      },
      years: {
        label: 'Käyttövuodet',
        unit: 'vuotta',
        chip1: '1 vuosi',
        chip2: '3 vuotta',
        chip3: '5 vuotta',
        decrease: 'Vähennä käyttövuosia',
        increase: 'Lisää käyttövuosia'
      },
      resale: {
        label: 'Jälleenmyyntiarvo',
        unit: '€, valinnainen',
        hint: 'Summa, jonka arvelet saavasi, kun myyt tavaran. Jätä nollaksi, jos et saa siitä mitään.',
        decrease: 'Pienennä jälleenmyyntiarvoa',
        increase: 'Suurenna jälleenmyyntiarvoa'
      },
      resultsTitle: 'Käyttökerran hinta',
      perUse: 'Yksi käyttökerta maksaa',
      totalUses: 'Käyttökertoja yhteensä',
      perMonth: 'Kuukaudessa',
      perYear: 'Vuodessa',
      runtime: {
        unit: {
          week: 'kertaa viikossa',
          month: 'kertaa kuukaudessa',
          year: 'kertaa vuodessa'
        },
        note: {
          empty: 'Syötä hinta, kuinka usein käytät tavaraa ja kuinka monta vuotta. Jälleenmyyntiarvon pitää olla hintaa pienempi.',
          result: 'Vuoden pidemmällä käytöllä yksi käyttökerta maksaisi {next}.'
        }
      },
      about: {
        title: 'Näin käyttökerran hinta lasketaan',
        paragraphs: [
          'Käyttökerran hinta on ostoksen hinta, josta on vähennetty myydessä takaisin saatava summa, jaettuna käyttökertojen määrällä. Käyttökertojen määrä saadaan kertomalla käyttötiheys viikoilla, kuukausilla tai vuosilla, joiden ajan tavaraa käytät. 500 euron ostos, jota käytetään 3 kertaa viikossa 3 vuoden ajan, on käytössä 468 kertaa, ja yksi käyttökerta maksaa 1,07 €.',
          'Kuukausi- ja vuosihinta jakavat saman summan koko ajalle, jonka tavara on sinulla, joten ostamista on helppo verrata vuokraamiseen, leasingiin tai kuukausimaksulliseen palveluun.',
          'Käyttökerran hinnalla on helppo verrata halpaa, nopeasti kuluvaa tavaraa kalliiseen ja kestävään. 60 euron kengät, joita käytät 50 kertaa, maksavat 1,20 € käyttökerralta; 200 euron kengät, joita käytät 400 kertaa, maksavat 0,50 €.'
        ]
      },
      faq: [
        {
          q: 'Miten käyttökerran hinta lasketaan?',
          a: 'Jaa hinta käyttökertojen määrällä. Jos myyt tavaran myöhemmin, vähennä jälleenmyyntiarvo ensin hinnasta. 120 euron takki, jota käytät 80 kertaa, maksaa 1,50 € käyttökerralta.'
        },
        {
          q: 'Mikä on hyvä käyttökerran hinta?',
          a: 'Se riippuu siitä, mitä vaihtoehto maksaa. Vertaa vuokraamiseen, lainaamiseen tai kertamaksuun: jos kuntosalin kertamaksu on 15 €, 40 euron kuukausijäsenyys tulee edullisemmaksi jo kolmannesta käynnistä kuukaudessa.'
        },
        {
          q: 'Toimiiko laskuri tilauksille ja jäsenyyksille?',
          a: 'Toimii. Syötä hinnaksi vuosihinta, käyttötiheys ja käyttövuosiksi 1. Jos kuntosalijäsenyys maksaa 40 € kuukaudessa, syötä hinnaksi 480 € ja käyntiesi määrä viikossa.'
        }
      ]
    },

    coffee: {
      name: 'Kahvin hinta',
      heading: 'Kahvilaskuri',
      title: 'Kahvilaskuri – paljonko kahvi maksaa vuodessa?',
      description: 'Katso, mitä päivittäinen kahvisi maksaa kuukaudessa sekä 1, 5 ja 10 vuodessa. Syötä kupin hinta ja kupit viikossa – ilmainen ja yksityinen.',
      card: 'Katso, mitä päivän kahvikuppi maksaa vuodessa, viidessä ja kymmenessä vuodessa.',
      tag: 'Tapa',
      lead: 'Syötä kupin hinta ja kuinka usein ostat kahvia, niin näet, mitä tapa maksaa vuosien mittaan.',
      price: {
        label: 'Kupin hinta',
        unit: '€',
        step: '0.5',
        value: '3.5',
        decrease: 'Pienennä kahvin hintaa',
        increase: 'Suurenna kahvin hintaa'
      },
      perWeek: {
        label: 'Kuppeja viikossa',
        unit: 'kuppia',
        chip1: 'Arkipäivisin',
        chip2: 'Joka päivä',
        chip3: 'Kaksi päivässä',
        decrease: 'Vähennä kuppeja viikossa',
        increase: 'Lisää kuppeja viikossa'
      },
      resultsTitle: 'Mitä se maksaa yhteensä',
      in10Years: '10 vuodessa',
      perMonth: 'Kuukaudessa',
      year1: '1 vuosi',
      year5: '5 vuotta',
      receiptTitle: 'Kahvikuitti',
      receiptCount: 'Kuppeja',
      runtime: {
        note: {
          empty: 'Syötä hinta ja kuinka monta kuppia juot viikossa, niin näet summat.',
          result: 'Se on noin {cups} kuppia vuodessa, {price} kupilta.'
        },
        receiptItem: 'Kahvi'
      },
      about: {
        title: 'Näin kahvin hinta lasketaan',
        paragraphs: [
          'Vuosihinta on kupin hinta × kupit viikossa × 52 viikkoa. Kuukausihinta on vuosihinta jaettuna 12:lla, ja 5 ja 10 vuoden summat kertovat vuosihinnan ilman inflaatiota tai hinnannousuja.',
          'Joka arkipäivä ostettu 3,50 euron kahvi maksaa noin 910 € vuodessa ja 9 100 € kymmenessä vuodessa. Jos summa yllättää, kotona keitetty kahvi tai oma termosmuki ovat helppoja tapoja säästää.',
          'Laskuri sopii mihin tahansa pieneen, säännölliseen ostokseen: energiajuomaan, lounassämpylään tai vesipulloon. Syötä hinta ja kuinka monta ostat viikossa.'
        ]
      },
      faq: [
        {
          q: 'Paljonko päivittäinen kahvi maksaa vuodessa?',
          a: 'Kuppi päivässä joka päivä tekee 364 kuppia vuodessa. 3 euron hinnalla se on 1 092 € vuodessa ja 10 920 € kymmenessä vuodessa.'
        },
        {
          q: 'Onko kotona keitetty kahvi halvempaa?',
          a: 'Yleensä huomattavasti. Kotona keitetty kuppi maksaa usein alle 30 senttiä, kun kahvilassa kuppi maksaa useita euroja. Syötä kotikahvin hinta kupilta ja vertaa.'
        },
        {
          q: 'Huomioiko laskuri inflaation?',
          a: 'Ei. Laskelmat olettavat hinnan pysyvän samana, joten ne näyttävät tavan hinnan tämän päivän hinnoilla. Hintojen noustessa todellinen pitkän aikavälin kustannus on suurempi.'
        },
        {
          q: 'Entä jos sijoittaisin rahat?',
          a: '”Jos sijoittaisit summan” -kohta näyttää, mihin rahat kasvaisivat, jos et käyttäisi niitä vaan sijoittaisit ne joka kuukausi 4 %:n vuosituotolla ja kuukausittaisella koronkorolla. Joka arkipäivä ostettu 3,50 euron kahvi tekee 75,83 € kuukaudessa, ja se kasvaa 10 vuodessa noin 11 100 euroon – siitä 9 100 € on omaa rahaasi ja loput tuottoa. Verot, kulut ja inflaatio on jätetty huomiotta. Kyse on esimerkistä, ei sijoitusneuvonnasta.'
        }
      ]
    },

    smoking: {
      name: 'Tupakoinnin hinta',
      heading: 'Tupakkalaskuri',
      title: 'Tupakkalaskuri – paljonko tupakointi maksaa?',
      description: 'Laske, paljonko tupakointi maksaa kuukaudessa sekä 1, 5 ja 10 vuodessa – ja paljonko säästät lopettamalla. Syötä askin hinta ja savukkeet päivässä.',
      card: 'Katso, paljonko rahaa menee savuna ilmaan kuukaudessa ja vuosien mittaan.',
      tag: 'Tapa',
      lead: 'Syötä askin hinta ja kuinka paljon poltat, niin näet, paljonko rahaa menee savuna ilmaan vuosien mittaan.',
      packPrice: {
        label: 'Askin hinta',
        unit: '€',
        step: '0.5',
        value: '11',
        decrease: 'Pienennä askin hintaa',
        increase: 'Suurenna askin hintaa'
      },
      perDay: {
        label: 'Savukkeita päivässä',
        unit: 'savuketta',
        chip1: '5 päivässä',
        chip2: '10 päivässä',
        chip3: '20 päivässä',
        decrease: 'Vähennä savukkeita päivässä',
        increase: 'Lisää savukkeita päivässä'
      },
      perPack: {
        label: 'Savukkeita askissa',
        unit: 'askin koko',
        value: '20',
        decrease: 'Vähennä savukkeita askissa',
        increase: 'Lisää savukkeita askissa'
      },
      resultsTitle: 'Savuna ilmaan',
      in10Years: '10 vuodessa',
      perMonth: 'Kuukaudessa',
      year1: '1 vuosi',
      year5: '5 vuotta',
      runtime: {
        note: {
          empty: 'Syötä askin hinta, montako savuketta poltat päivässä ja askin koko, niin näet summat.',
          result: 'Se on noin {cigarettes} savuketta ({packs} askia) vuodessa, {price} savukkeelta.'
        }
      },
      about: {
        title: 'Näin tupakoinnin hinta lasketaan',
        paragraphs: [
          'Yhden savukkeen hinta on askin hinta jaettuna askin savukkeiden määrällä. Se kerrotaan päivässä poltettujen savukkeiden määrällä ja 365 päivällä, jolloin saadaan vuosihinta. Kuukausihinta on siitä kahdestoistaosa, ja 5 ja 10 vuoden summat on laskettu nykyhinnoilla.',
          'Puoli askia päivässä 11 euron askihinnalla on noin 2 000 € vuodessa ja yli 20 000 € kymmenessä vuodessa. Summan näkeminen voi motivoida: samalla rahalla voisi matkustaa, säästää tai maksaa velkoja pois.',
          'Laskuri huomioi vain savukkeiden hinnan. Terveyskulut ja sairauspoissaolot tulevat vielä päälle. Jos haluat tukea lopettamiseen, apua saa esimerkiksi Stumppi.fi-palvelusta ja omalta terveysasemalta.'
        ]
      },
      faq: [
        {
          q: 'Paljonko aski päivässä maksaa vuodessa?',
          a: 'Aski päivässä tekee 365 askia vuodessa. 11 euron askihinnalla se on 4 015 € vuodessa ja 40 150 € kymmenessä vuodessa.'
        },
        {
          q: 'Paljonko säästän, jos lopetan tupakoinnin?',
          a: 'Kaiken sen, minkä tämä laskuri näyttää. Syötä nykyinen tupakointisi: kuukausi- ja vuosisummat ovat se, minkä lopettaminen säästää.'
        },
        {
          q: 'Toimiiko laskuri myös kääretupakalle?',
          a: 'Toimii. Syötä tupakkapussin hinta askin hinnaksi, siitä käärittävien savukkeiden määrä askin kooksi ja kuinka monta poltat päivässä.'
        },
        {
          q: 'Entä jos sijoittaisin rahat?',
          a: '”Jos sijoittaisit summan” -kohta näyttää, mihin rahat kasvaisivat, jos et polttaisi vaan sijoittaisit ne joka kuukausi 4 %:n vuosituotolla ja kuukausittaisella koronkorolla. Puoli askia päivässä 11 euron askihinnalla tekee noin 167 € kuukaudessa, ja se kasvaa 10 vuodessa noin 24 500 euroon – siitä 20 075 € on omaa rahaasi ja loput tuottoa. Verot, kulut ja inflaatio on jätetty huomiotta. Kyse on esimerkistä, ei sijoitusneuvonnasta.'
        }
      ]
    },

    alcohol: {
      name: 'Alkoholin hinta',
      heading: 'Alkoholilaskuri',
      title: 'Alkoholilaskuri – paljonko juomiin kuluu rahaa?',
      description: 'Katso, mitä oluet, viinit ja muut juomat maksavat kuukaudessa sekä 1, 5 ja 10 vuodessa – ja mihin sama raha kasvaisi sijoitettuna.',
      card: 'Katso, mitä viikon juomat maksavat vuodessa, viidessä ja kymmenessä vuodessa.',
      tag: 'Tapa',
      lead: 'Syötä juoman hinta ja kuinka monta juot viikossa, niin näet, mitä se maksaa vuosien mittaan.',
      price: {
        label: 'Juoman hinta',
        unit: '€',
        step: '0.5',
        value: '8',
        hint: 'Juotko sekä kotona että ravintolassa? Käytä keskihintaa.',
        decrease: 'Pienennä juoman hintaa',
        increase: 'Suurenna juoman hintaa'
      },
      perWeek: {
        label: 'Juomia viikossa',
        unit: 'juomaa',
        chip1: '3 viikossa',
        chip2: '7 viikossa',
        chip3: '14 viikossa',
        decrease: 'Vähennä juomia viikossa',
        increase: 'Lisää juomia viikossa'
      },
      resultsTitle: 'Mitä se maksaa yhteensä',
      in10Years: '10 vuodessa',
      perMonth: 'Kuukaudessa',
      year1: '1 vuosi',
      year5: '5 vuotta',
      runtime: {
        note: {
          empty: 'Syötä hinta ja kuinka monta juomaa juot viikossa, niin näet summat.',
          result: 'Se on noin {drinks} juomaa vuodessa, {price} juomalta.'
        }
      },
      about: {
        title: 'Näin alkoholin hinta lasketaan',
        paragraphs: [
          'Vuosihinta on juoman hinta × juomat viikossa × 52 viikkoa. Kuukausihinta on siitä kahdestoistaosa, ja 5 ja 10 vuoden summat on laskettu nykyhinnoilla ilman inflaatiota.',
          'Kuusi 8 euron olutta viikossa tekee noin 2 500 € vuodessa ja lähes 25 000 € kymmenessä vuodessa. Jos juot sekä ravintolassa että kotona, käytä keskihintaa tai tee kummastakin oma laskelma ja laske summat yhteen.',
          '”Jos sijoittaisit summan” -kohta näyttää, mihin sama raha kasvaisi, jos sijoittaisit sen joka kuukausi 4 %:n vuosituotolla 10 vuoden ajan. Laskuri huomioi vain juomien hinnan, ja terveysvaikutukset tulevat vielä päälle. Jos haluat vähentää juomista, apua saa omalta lääkäriltä tai terveysasemalta sekä esimerkiksi Päihdelinkki.fi-palvelusta.'
        ]
      },
      faq: [
        {
          q: 'Paljonko kulutan alkoholiin vuodessa?',
          a: 'Kerro juoman hinta viikon juomien määrällä ja 52:lla. Kuusi 8 euron juomaa viikossa tekee 2 496 € vuodessa.'
        },
        {
          q: 'Paljonko säästäisin juomalla vähemmän?',
          a: 'Syötä juomamäärä, johon haluaisit vähentää, ja vertaa. Jos vähennät kuudesta juomasta kolmeen viikossa 8 euron hinnalla, säästät 1 248 € vuodessa ja 12 480 € kymmenessä vuodessa.'
        },
        {
          q: 'Entä jos sijoittaisin rahat?',
          a: '”Jos sijoittaisit summan” -kohta näyttää, paljonko sinulla olisi 10 vuoden kuluttua, jos et käyttäisi rahoja juomiin vaan sijoittaisit ne joka kuukausi 4 %:n vuosituotolla ja kuukausittaisella koronkorolla. Kuusi 8 euron juomaa viikossa tekee 208 € kuukaudessa, ja se kasvaa noin 30 500 euroon – siitä 24 960 € on omaa rahaasi ja loput tuottoa. Verot, kulut ja inflaatio on jätetty huomiotta. Kyse on esimerkistä, ei sijoitusneuvonnasta.'
        }
      ]
    },

    gambling: {
      name: 'Lotto ja vedonlyönti',
      heading: 'Lotto- ja vedonlyöntilaskuri',
      title: 'Lotto- ja vedonlyöntilaskuri – paljonko pelaaminen maksaa?',
      description: 'Katso, mitä lottorivit ja vedot maksavat kuukaudessa ja 10 vuodessa, paljonko niistä keskimäärin häviät ja mihin panokset kasvaisivat sijoitettuna.',
      card: 'Katso, mitä lottorivit ja vedot maksavat yhteensä ja paljonko niistä keskimäärin häviät.',
      tag: 'Tapa',
      lead: 'Syötä panos ja kuinka usein pelaat, niin näet, mitä lotto ja vedonlyönti maksavat vuosien mittaan – ja kuinka suuri osa rahasta palautuu keskimäärin voittoina.',
      stake: {
        label: 'Panos kerralla',
        unit: '€',
        step: '1',
        value: '10',
        decrease: 'Pienennä panosta',
        increase: 'Suurenna panosta'
      },
      perWeek: {
        label: 'Pelikertoja viikossa',
        unit: 'kertaa',
        chip1: 'Kerran viikossa',
        chip2: 'Kahdesti viikossa',
        chip3: 'Joka päivä',
        decrease: 'Vähennä pelikertoja viikossa',
        increase: 'Lisää pelikertoja viikossa'
      },
      payout: {
        label: 'Palautusprosentti',
        unit: '% takaisin',
        chip1: 'Lotto',
        chip2: 'Vedonlyönti',
        chip3: 'Kasino',
        hint: 'Se osuus kaikista panoksista, joka maksetaan takaisin voittoina. Lotossa palautuu yleensä noin puolet, vedonlyönnissä ja kasinopeleissä 90–97 %.',
        decrease: 'Pienennä palautusprosenttia',
        increase: 'Suurenna palautusprosenttia'
      },
      resultsTitle: 'Mitä pelaaminen maksaa',
      in10Years: 'Panokset 10 vuodessa',
      perMonth: 'Kuukaudessa',
      perYear: 'Vuodessa',
      lossPerYear: 'Keskimääräinen tappio vuodessa',
      runtime: {
        note: {
          empty: 'Syötä panos, montako kertaa viikossa pelaat ja palautusprosentti (0–100).',
          result: 'Voittoina palautuu keskimäärin noin {back} vuodessa, joten häviät noin {loss} vuodessa ja {loss10} kymmenessä vuodessa.'
        }
      },
      about: {
        title: 'Näin lottoamisen ja vedonlyönnin hinta lasketaan',
        paragraphs: [
          'Vuosihinta on panos × pelikerrat viikossa × 52 viikkoa. Kuukausihinta on siitä kahdestoistaosa, ja 10 vuoden summa on laskettu nykyisillä panoksilla.',
          'Palautusprosentti kertoo, kuinka suuri osa kaikista panoksista maksetaan takaisin voittoina. 50 %:n palautusprosentilla 10 euron panos kahdesti viikossa tekee 1 040 € vuodessa, josta voittoina palautuu keskimäärin 520 € – keskimääräinen tappio on siis 520 € vuodessa. Yksittäinen pelaaja voi voittaa paljon tai hävitä kaiken, mutta mitä enemmän pelikertoja kertyy, sitä lähemmäs keskiarvoa tulos asettuu.',
          '”Jos sijoittaisit summan” -kohta näyttää, mihin panokset kasvaisivat, jos sijoittaisit ne sen sijaan joka kuukausi 4 %:n vuosituotolla 10 vuoden ajan. Jos pelaamista on vaikea hallita, apua saa omalta lääkäriltä tai terveysasemalta sekä rahapelihaittoihin erikoistuneesta Peluuri-palvelusta.'
        ]
      },
      faq: [
        {
          q: 'Paljonko lottoaminen maksaa vuodessa?',
          a: 'Kerro panos viikon pelikertojen määrällä ja 52:lla. 10 euron panos kahdesti viikossa tekee 1 040 € vuodessa ja 10 400 € kymmenessä vuodessa.'
        },
        {
          q: 'Mikä on palautusprosentti?',
          a: 'Se on osuus kaikista panoksista, joka maksetaan pelaajille takaisin voittoina. Lotossa palautuu yleensä noin puolet panoksista, vedonlyönnissä ja kasinopeleissä 90–97 %. Loput jäävät pelinjärjestäjälle – ja juuri sen verran pelaajat keskimäärin häviävät.'
        },
        {
          q: 'Entä jos sijoittaisin rahat?',
          a: '”Jos sijoittaisit summan” -kohta näyttää, paljonko sinulla olisi 10 vuoden kuluttua, jos et pelaisi vaan sijoittaisit panokset joka kuukausi 4 %:n vuosituotolla ja kuukausittaisella koronkorolla. 10 euron panos kahdesti viikossa tekee 86,67 € kuukaudessa, ja se kasvaa noin 12 700 euroon – siitä 10 400 € on omaa rahaasi ja loput tuottoa. Verot, kulut ja inflaatio on jätetty huomiotta. Kyse on esimerkistä, ei sijoitusneuvonnasta.'
        }
      ]
    },

    subscriptions: {
      name: 'Tilaukset',
      heading: 'Tilausten ja kuukausimaksujen laskuri',
      title: 'Tilauslaskuri – kuukausimaksujen yhteishinta vuodessa',
      description: 'Laske yhteen suoratoistopalvelut, kuntosali, puhelinliittymä ja muut kuukausimaksut. Näe kokonaishinta kuukaudessa, vuodessa ja 10 vuodessa sekä kallein tilaus.',
      card: 'Laske suoratoisto, kuntosali ja kaikki muut toistuvat maksut yhteen.',
      tag: 'Budjetti',
      lead: 'Listaa kaikki, mistä maksat säännöllisesti, ja näe, mitä ne maksavat yhteensä. Kuukausi-, vuosi- ja viikkolaskutus käyvät kaikki.',
      listTitle: 'Tilauksesi',
      empty: 'Ei vielä tilauksia. Lisää tilaus alta tai valitse pikalisäys.',
      add: 'Lisää tilaus',
      quickAdd: 'Pikalisäys',
      quick: {
        1: { name: 'Videopalvelu', price: '12.99' },
        2: { name: 'Musiikkipalvelu', price: '11.99' },
        3: { name: 'Kuntosali', price: '39.90' },
        4: { name: 'Pilvitallennus', price: '2.99' },
        5: { name: 'Puhelinliittymä', price: '19.90' },
        6: { name: 'Uutiset', price: '14.90' }
      },
      note: 'Listasi tallentuu sivun osoitteeseen, joten voit lisätä sen kirjanmerkiksi tai jakaa sen. Sitä ei lähetetä minnekään.',
      row: {
        name: 'Nimi',
        nameLabel: 'Tilauksen nimi',
        priceLabel: 'Hinta euroina',
        cycleLabel: 'Laskutusjakso',
        monthly: '/ kk',
        yearly: '/ vuosi',
        weekly: '/ viikko'
      },
      resultsTitle: 'Tilaukset yhteensä',
      perYear: 'Vuodessa',
      perMonth: 'Kuukaudessa',
      perDay: 'Päivässä',
      in10Years: '10 vuodessa',
      breakdownLabel: 'Vuosihinta tilauksittain',
      copySummary: 'Kopioi yhteenveto',
      runtime: {
        untitled: 'Nimetön',
        remove: 'Poista {name}',
        removeUnnamed: 'Poista tilaus',
        breakdown: '{cost} / vuosi · {percent} %',
        cycle: { monthly: 'kk', yearly: 'vuosi', weekly: 'viikko' },
        note: {
          empty: 'Lisää tilaus ja sen hinta, niin näet summat.',
          single: '{name} maksaa {cost} vuodessa.',
          biggest: 'Suurin kulusi on {name}, {cost} vuodessa eli {percent} % kokonaissummasta.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Yhteensä: {month} kuukaudessa, {year} vuodessa'
        }
      },
      about: {
        title: 'Näin tilausten yhteishinta lasketaan',
        paragraphs: [
          'Jokainen tilaus muutetaan vuosihinnaksi: kuukausihinnat kerrotaan 12:lla, viikkohinnat 52:lla ja vuosihinnat käytetään sellaisenaan. Vuosisumma jaetaan 12:lla kuukausihinnaksi ja 365:llä päivähinnaksi.',
          'Erittely järjestää tilaukset kalleimmasta halvimpaan ja näyttää kunkin osuuden kokonaissummasta, joten on helppo nähdä, minkä voisi perua tai vaihtaa halvempaan.',
          'Lista tallentuu sivun osoitteeseen, ei palvelimelle. Lisää sivu kirjanmerkiksi palataksesi listaan myöhemmin, tai jaa linkki ja käykää perheen yhteiset tilaukset läpi yhdessä.'
        ]
      },
      faq: [
        {
          q: 'Miten löydän kaikki tilaukseni?',
          a: 'Käy läpi pankkitilin ja luottokortin tiliotteet muutaman kuukauden ajalta ja etsi toistuvia veloituksia. Tarkista myös App Storen, Google Playn ja PayPalin tilausasetukset.'
        },
        {
          q: 'Onko vuositilaus halvempi kuin kuukausitilaus?',
          a: 'Usein 15–20 %, mutta vain jos pitäisit palvelun joka tapauksessa koko vuoden. Lisää molemmat vaihtoehdot listaan ja vertaa niiden vuosihintaa.'
        },
        {
          q: 'Tallentuuko listani?',
          a: 'Lista säilyy vain sivun osoitteessa. Tallenna linkki kirjanmerkiksi tai jaa se; mitään ei tallenneta palvelimelle eikä evästeisiin.'
        },
        {
          q: 'Entä jos sijoittaisin rahat?',
          a: '”Jos sijoittaisit summan” -kohta näyttää, mihin tilauksiin kuluva raha kasvaisi, jos sijoittaisit sen joka kuukausi 4 %:n vuosituotolla ja kuukausittaisella koronkorolla. 50 € kuukaudessa kasvaa 10 vuodessa noin 7 330 euroon – siitä 6 000 € on omaa rahaasi ja loput tuottoa. Verot, kulut ja inflaatio on jätetty huomiotta. Kyse on esimerkistä, ei sijoitusneuvonnasta.'
        }
      ]
    },

    electricity: {
      name: 'Sähkön hinta',
      heading: 'Sähkönkulutuslaskuri',
      title: 'Sähkönkulutuslaskuri – paljonko laitteen käyttö maksaa?',
      description: 'Laske, mitä laitteen käyttö maksaa päivässä, kuukaudessa ja vuodessa tehon, käyttötuntien ja sähkön hinnan perusteella. Ilmainen kWh-laskuri.',
      card: 'Katso, mitä laitteen pitäminen päällä maksaa päivässä, kuukaudessa ja vuodessa.',
      tag: 'Koti',
      lead: 'Syötä laitteen teho, käyttöaika ja sähkön hinta, niin näet, mitä sen pitäminen päällä oikeasti maksaa.',
      power: {
        label: 'Teho',
        unit: 'wattia',
        chip1: 'LED-lamppu 9 W',
        chip2: 'Kannettava 60 W',
        chip3: 'Televisio 100 W',
        chip4: 'Pelitietokone 400 W',
        chip5: 'Lämmitin 1500 W',
        decrease: 'Pienennä tehoa',
        increase: 'Suurenna tehoa'
      },
      hours: {
        label: 'Tunteja päivässä',
        unit: 'tuntia',
        decrease: 'Vähennä tunteja päivässä',
        increase: 'Lisää tunteja päivässä'
      },
      days: {
        label: 'Päiviä viikossa',
        unit: 'päivää',
        decrease: 'Vähennä päiviä viikossa',
        increase: 'Lisää päiviä viikossa'
      },
      kwhPrice: {
        label: 'Sähkön hinta',
        unit: 'snt / kWh',
        value: '15',
        step: '1',
        divisor: '100',
        hint: 'Ota mukaan siirtomaksut ja verot, niin tulos on tarkin.',
        decrease: 'Pienennä sähkön hintaa',
        increase: 'Suurenna sähkön hintaa'
      },
      resultsTitle: 'Käyttökustannus',
      perYear: 'Vuodessa',
      perDayOfUse: 'Käyttöpäivältä',
      perMonth: 'Kuukaudessa',
      energyPerYear: 'Energiaa vuodessa',
      runtime: {
        note: {
          empty: 'Syötä teho, tunnit päivässä (enintään 24), päivät viikossa (enintään 7) ja sähkön hinta.',
          result: 'Kuluttaa noin {day} jokaisena käyttöpäivänä, noin {year} vuodessa.'
        }
      },
      about: {
        title: 'Näin sähkön hinta lasketaan',
        paragraphs: [
          'Energiankulutus kilowattitunteina (kWh) on teho watteina × käyttötunnit ÷ 1 000. 100 watin televisio neljä tuntia päivässä kuluttaa 0,4 kWh päivässä. Kun sen kertoo sähkön kilowattituntihinnalla, saadaan hinta käyttöpäivältä.',
          'Vuosihinta huomioi, montako päivää viikossa laite on käytössä, jaettuna vuoden 365 päivälle. Kuukausihinta on vuosihinnasta kahdestoistaosa.',
          'Laitteen tehon löydät arvokilvestä tai käyttöohjeesta. Moni laite kuluttaa suurimman osan ajasta vähemmän kuin maksimitehonsa, joten tulos on yläraja-arvio. Tarkimman hinnan saat, kun otat sähköenergian lisäksi mukaan siirtomaksun ja verot.'
        ]
      },
      faq: [
        {
          q: 'Miten laitteen sähkönkulutuksen hinta lasketaan?',
          a: 'Kerro teho kilowatteina käyttötunneilla ja kilowattituntihinnalla. 1 500 watin lämmitin kolme tuntia päivässä maksaa 1,5 kW × 3 h × 0,15 € = 0,68 € päivässä.'
        },
        {
          q: 'Montako kilowattituntia laite kuluttaa?',
          a: 'Jaa teho watteina tuhannella ja kerro käyttötunneilla. 60 watin kannettava kahdeksan tuntia päivässä kuluttaa 0,48 kWh päivässä – noin 175 kWh vuodessa, jos sitä käytetään joka päivä.'
        },
        {
          q: 'Mitä sähkön hintaa kannattaa käyttää?',
          a: 'Käytä sähkölaskun kokonaishintaa kilowattitunnilta: energian hinta, siirtomaksu ja verot. Hyvän keskiarvon saat jakamalla laskun loppusumman kulutetuilla kilowattitunneilla.'
        },
        {
          q: 'Kuluttaako valmiustila sähköä?',
          a: 'Kuluttaa, moni laite vie valmiustilassa muutaman watin. Syötä valmiustilan teho ja 24 tuntia päivässä, niin näet, mitä se maksaa vuodessa.'
        }
      ]
    },

    trip: {
      name: 'Matkan hinta',
      heading: 'Matkan polttoainekululaskuri',
      title: 'Polttoainelaskuri – matkan ja työmatkan bensakulut',
      description: 'Laske matkan tai työmatkan polttoainekulut ja jaa ne kyydissä olevien kesken. Toimii kilometreillä ja litroilla tai maileilla ja gallonoilla.',
      card: 'Laske matkan tai työmatkan polttoainekulut ja jaa ne muiden kanssa.',
      tag: 'Matkat',
      lead: 'Laske yksittäisen matkan tai päivittäisen työmatkan polttoainekulut ja jaa ne kaikkien kyydissä olevien kesken.',
      unit: {
        label: 'Yksiköt',
        metric: 'Kilometrit ja litrat',
        us: 'Mailit ja gallonat'
      },
      distance: {
        label: 'Matka',
        unit: 'km yhteen suuntaan',
        decrease: 'Lyhennä matkaa',
        increase: 'Pidennä matkaa'
      },
      direction: {
        label: 'Suunta',
        one: 'Yhteen suuntaan',
        round: 'Meno-paluu'
      },
      consumption: {
        label: 'Kulutus',
        unit: 'l/100 km',
        hint: 'Ajatko sähköautolla? Syötä kWh/100 km ja sähkön hinta kilowattitunnilta.',
        decrease: 'Pienennä kulutusta',
        increase: 'Suurenna kulutusta'
      },
      fuelPrice: {
        label: 'Polttoaineen hinta',
        unit: '€ / litra',
        value: '1.85',
        step: '0.05',
        usStep: '0.1',
        decrease: 'Pienennä polttoaineen hintaa',
        increase: 'Suurenna polttoaineen hintaa'
      },
      people: {
        label: 'Kulujen jakajat',
        unit: 'henkilöä',
        decrease: 'Vähennä henkilöitä',
        increase: 'Lisää henkilöitä'
      },
      tripsPerWeek: {
        label: 'Matkoja viikossa',
        unit: 'kuukausi- ja vuosisummia varten',
        decrease: 'Vähennä matkoja viikossa',
        increase: 'Lisää matkoja viikossa'
      },
      resultsTitle: 'Polttoainekulut',
      perPerson: 'Henkeä kohden',
      perMonth: 'Kuukaudessa',
      perYear: 'Vuodessa',
      runtime: {
        direction: { one: 'Yhteen suuntaan', round: 'Meno-paluu' },
        unit: {
          metric: {
            distance: 'km yhteen suuntaan',
            consumption: 'l/100 km',
            price: '€ / litra',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'mailia yhteen suuntaan',
            consumption: 'mpg',
            price: '€ / gallona',
            perDistance: 'maili',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Syötä matka, kulutus ja polttoaineen hinta, niin näet kulut.',
          result: 'Matkaan kuluu {fuel} polttoainetta, noin {price} / {distance}.'
        }
      },
      about: {
        title: 'Näin matkan hinta lasketaan',
        paragraphs: [
          'Polttoaineen kulutus on matka × kulutus ÷ 100. Kun työmatka on 25 km suuntaansa (50 km päivässä) ja auto kuluttaa 6,5 l/100 km, polttoainetta kuluu 3,25 litraa. Kertomalla litrahinnalla saadaan matkan hinta, ja jakamalla henkilömäärällä se jaetaan kyytiläisten kesken.',
          'Maileilla ja gallonoilla kulutus lasketaan jakamalla matka auton mpg-arvolla (mailia gallonalla). Yksikön vaihto muuntaa syöttämäsi arvot, joten voit verrata kumman tahansa järjestelmän lukuja.',
          'Kuukausi- ja vuosisummat perustuvat matkoihin viikossa – viisi meno-paluuta viikossa on tyypillinen työmatka. Sähköautolla syötä kulutus kWh/100 km ja sähkön hinta kilowattitunnilta.'
        ]
      },
      faq: [
        {
          q: 'Miten matkan polttoainekulut lasketaan?',
          a: 'Kerro matka kulutuksella ja polttoaineen hinnalla ja jaa sadalla. 200 km:n matka autolla, joka kuluttaa 6 l/100 km, bensan hinnalla 1,85 €/l: 200 × 6 ÷ 100 × 1,85 € = 22,20 €.'
        },
        {
          q: 'Miten bensakulut jaetaan kyytiläisten kesken?',
          a: 'Syötä kulujen jakajien määrä. Laskuri jakaa matkan hinnan tasan kaikkien kesken, kuljettaja mukaan lukien.'
        },
        {
          q: 'Sisältyvätkö auton kuluminen ja pysäköinti?',
          a: 'Eivät, laskuri laskee vain polttoaineen. Auton kuluminen, vakuutukset, pysäköinti ja tiemaksut tulevat päälle, joten ajamisen kokonaishinta on suurempi.'
        }
      ]
    }
  }
};
