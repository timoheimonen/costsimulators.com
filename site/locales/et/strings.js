// Estonian texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in euros.

module.exports = {
  meta: {
    name: 'Eesti',
    locale: 'et-EE',
    currency: 'EUR',
    ogLocale: 'et_EE'
  },

  money: {
    symbol: '€',
    zero: '0,00 €',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Liigu sisu juurde',
    home: 'Avaleht',
    toggleTheme: 'Vaheta teemat',
    themeToLight: 'Lülitu heledale teemale',
    themeToDark: 'Lülitu tumedale teemale',
    language: 'Keel',
    allTools: 'Kõik tööriistad',
    share: 'Jaga',
    settings: 'Seaded',
    quickPicks: 'Kiirvalikud',
    faqTitle: 'Korduma kippuvad küsimused',
    relatedTools: 'Veel kalkulaatoreid',
    imageAlt: 'costsimulators.com – tasuta kalkulaatorid igapäevastele rahaküsimustele',
    invest: {
      label: 'Kui investeeriksid selle raha'
    }
  },

  footer: {
    privacy: 'Töötab täielikult sinu brauseris. Ei mingeid küpsiseid ega jälgimist.',
    about: 'Teave',
    contact: 'Kontakt',
    privacyPolicy: 'Privaatsus',
    terms: 'Kasutustingimused'
  },

  runtime: {
    share: {
      linkCopied: 'Link kopeeritud',
      copyFailed: 'Kopeerimine ebaõnnestus',
      copied: 'Kopeeritud!',
      calculatedWith: 'Arvutatud saidil costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    },
    invest: {
      note: '{monthly} kuus 10 aasta jooksul {rate} aastase tootlusega: oma raha {paid} ja tootlust {gain}.'
    }
  },

  home: {
    title: 'Tasuta kulukalkulaatorid igapäevaeluks',
    description: 'Tasuta ja privaatsed kalkulaatorid, mis näitavad, mida asjad tegelikult maksavad: koosolekud, töötunnid, harjumused, tellimused, elekter, kütus ja kasutuskorra hind. Ilma registreerimiseta.',
    eyebrow: 'Tasuta · Privaatne · Kohe',
    heading: 'Väikesed tööriistad igapäevastele <span class="accent-text">raha</span>küsimustele.',
    lead: 'Kiired kalkulaatorid, mis näitavad, mida asjad tegelikult maksavad. Ilma registreerimise ja jälgimiseta – kõik töötab otse sinu brauseris.',
    toolsTitle: 'Tööriistad',
    toolCount: '{count} tööriista',
    suggestTitle: 'On sul mõni idee?',
    suggestText: 'Soovita uut tööriista GitHubis.',
    whyTitle: 'Väikestest kuludest kasvavad suured',
    whyText1: 'Üks koosolek, kohv tööle minnes või veel üks voogedastusteenus ei tundu eraldi võttes kallis. Kui need aga kuu, aasta või kümne aasta peale kokku liita, näevad numbrid hoopis teistsugused välja.',
    whyText2: 'Iga kalkulaator teeb üht asja, küsib ainult vajalikke numbreid ja näitab vastust kohe. Kõik arvutatakse sinu brauseris, nii et sinu numbrid jäävad sinu seadmesse.',
    aboutLink: 'Loe lähemalt costsimulators.com kohta',
    faq: [
      {
        q: 'Kas costsimulators.com on tasuta?',
        a: 'Jah. Kõik kalkulaatorid on täiesti tasuta – ei registreerimist, maksumüüri ega reklaame. Võid neid kasutada ka tööl.'
      },
      {
        q: 'Kas minu numbreid salvestatakse või saadetakse kuhugi?',
        a: 'Ei. Kõik, mida sisestad, arvutatakse sinu brauseris ja seda ei saadeta kunagi serverisse. Sait ei kasuta küpsiseid ega analüütikat.'
      },
      {
        q: 'Kas saan arvutust jagada?',
        a: 'Jah. Sinu seaded salvestuvad lehe aadressi. Vajuta Jaga, et link kopeerida, ja igaüks, kes selle avab, näeb sama arvutust.'
      }
    ]
  },

  notFound: {
    title: 'Lehte ei leitud',
    description: 'Lehte, mida otsisid, ei ole olemas.',
    heading: 'Seda lehte ei ole olemas.',
    lead: 'Aadressis võib olla trükiviga või on leht mujale kolinud. Kõik kalkulaatorid leiad avalehelt.'
  },

  documents: {
    about: {
      name: 'Teave',
      title: 'Teave costsimulators.com kohta – tasuta kalkulaatorid',
      description: 'Kes teeb saiti costsimulators.com ja kuidas kalkulaatorid töötavad. Tasuta ja privaatsed kalkulaatorid koosolekute, töötundide, harjumuste, ostude, tellimuste, elektri ja sõitude jaoks.'
    },
    privacy: {
      name: 'Privaatsuspoliitika',
      title: 'Privaatsuspoliitika',
      description: 'Kuidas costsimulators.com sinu andmeid käsitleb: arvutused tehakse sinu brauseris, ei mingit jälgimist, analüütikat ega kasutajakontosid.'
    },
    terms: {
      name: 'Kasutustingimused',
      title: 'Kasutustingimused',
      description: 'Saidi costsimulators.com kasutustingimused: tasuta isiklikuks ja äriliseks kasutuseks, pakutakse sellisena, nagu see on, avatud lähtekoodiga MIT-litsentsi alusel.'
    }
  },

  tools: {
    meetings: {
      name: 'Koosoleku hind',
      heading: 'Koosoleku hinna kalkulaator',
      title: 'Koosoleku hinna kalkulaator – kulud reaalajas',
      description: 'Tasuta koosoleku hinna kalkulaator taimeriga. Sisesta tunnihind ja osalejate arv ning vaata, mida koosolek sekund-sekundilt maksab.',
      card: 'Vaata, kuidas koosoleku hind jutu ajal reaalajas kasvab.',
      tag: 'Taimer',
      lead: 'Määra tunnihind ja osalejate arv, vajuta Alusta ja jälgi, mida koosolek jooksvalt maksab.',
      pulseEvery: '1',
      rate: {
        label: 'Tunnihind',
        unit: '€ inimese kohta',
        step: '5',
        value: '35',
        decrease: 'Vähenda tunnihinda',
        increase: 'Suurenda tunnihinda'
      },
      persons: {
        label: 'Osalejad',
        unit: 'inimest',
        decrease: 'Vähenda osalejate arvu',
        increase: 'Suurenda osalejate arvu'
      },
      perMinute: 'Minutis',
      perHour: 'Tunnis',
      note: 'Väärtusi saab muuta ka siis, kui taimer käib. Liitujaid ja lahkujaid arvestatakse sellest hetkest alates.',
      total: 'Koguhind',
      elapsed: 'Kulunud aeg',
      reset: 'Lähtesta',
      copyReport: 'Kopeeri aruanne',
      kbdHint: 'Vajuta <kbd>tühikut</kbd>, et alustada või peatada',
      runtime: {
        mode: { start: 'Alusta', pause: 'Peata', resume: 'Jätka' },
        status: { ready: 'Valmis', live: 'Käib', paused: 'Peatatud' },
        announce: {
          invalid: 'Alustamiseks sisesta tunnihind ja osalejate arv.',
          started: 'Taimer käivitus.',
          paused: 'Peatatud: {cost}, kulunud aeg {time}.',
          reset: 'Taimer lähtestati.'
        },
        report: {
          cost: 'Koosoleku hind: {cost}',
          duration: 'Kestus: {time}',
          participants: 'Osalejad: {persons} × {rate}/h'
        }
      },
      about: {
        title: 'Kuidas koosoleku hinda arvutatakse',
        paragraphs: [
          'Kalkulaator korrutab osalejate arvu nende tunnihinna ja möödunud ajaga. Tunnine koosolek viie inimesega ja 35 € tunnihinnaga maksab 175 € – see on umbes 2,92 € iga minut.',
          'Kasuta tunnihinnana seda, mida töötund tööandjale tegelikult maksab, mitte ainult palka. Eestis maksab tööandja brutopalgale lisaks 33% sotsiaalmaksu ja 0,8% töötuskindlustusmakset, nii et töötund läheb maksma umbes kolmandiku võrra rohkem kui brutopalk. Kui kõigi tunnihinda ei tea, piisab hästi meeskonna keskmisest.',
          'Taimer arvestab õigesti ka taustal oleval vahekaardil ja jooksev summa on näha brauseri vahekaardi pealkirjas, nii et saad seda jälgida ka ekraani jagades. Kui koosolek lõpeb, peata taimer ja kopeeri lühike aruanne koosoleku protokolli.'
        ]
      },
      faq: [
        {
          q: 'Kuidas arvutada koosoleku hinda?',
          a: 'Korruta osalejate arv nende keskmise tunnihinnaga ja koosoleku kestusega tundides. Näiteks 6 inimest × 30 €/h × 1,5 tundi = 270 €. See kalkulaator teeb arvutuse koosoleku ajal reaalajas.'
        },
        {
          q: 'Millist tunnihinda kasutada?',
          a: 'Kasuta töötunni kogukulu: brutotunnipalk koos tööandja maksudega – Eestis lisanduvad palgale sotsiaalmaks (33%) ja töötuskindlustusmakse (0,8%). Konsultantide ja alltöövõtjate puhul kasuta tunnihinda, mille nad arvele kirjutavad.'
        },
        {
          q: 'Kas osalejate arvu saab koosoleku ajal muuta?',
          a: 'Jah. Muuda osalejate arvu või tunnihinda igal ajal. Uusi väärtusi arvestatakse sellest hetkest alates ja juba kogunenud summa jääb samaks.'
        },
        {
          q: 'Kas taimer jätkab, kui vahetan vahekaarti?',
          a: 'Jah. Taimer põhineb kellal, nii et summa püsib õige ka taustal oleval vahekaardil. Kui taimer käib, palub leht brauseril ka ekraani sees hoida.'
        }
      ]
    },

    workhours: {
      name: 'Töötunnid',
      heading: 'Hind töötundides',
      title: 'Hind töötundides – kui kaua pead selle eest töötama?',
      description: 'Muuda iga hind töötundideks, -päevadeks ja -nädalateks. Sisesta oma tunni-, kuu- või aastapalk ja vaata, mida ost tööajas tegelikult maksab.',
      card: 'Muuda iga hind tundideks, päevadeks ja nädalateks, mille jagu pead selle eest töötama.',
      tag: 'Töö',
      lead: 'Sisesta oma palk ja hind ning vaata, kui kaua pead selle eest töötama.',
      period: {
        label: 'Tean oma palka',
        hour: 'Tunnis',
        month: 'Kuus',
        year: 'Aastas'
      },
      pay: {
        label: 'Palk',
        unit: '€ tunnis',
        value: '12',
        step: '1',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Kõige ausama vastuse saad, kui kasutad netopalka ehk kätte saadavat palka pärast makse.',
        decrease: 'Vähenda palka',
        increase: 'Suurenda palka'
      },
      hoursPerWeek: {
        label: 'Tunde nädalas',
        unit: 'tundi',
        value: '40',
        chip1: '37,5 h',
        chip2: '40 h',
        preset1: '37.5',
        preset2: '40',
        decrease: 'Vähenda nädalatunde',
        increase: 'Suurenda nädalatunde'
      },
      price: {
        label: 'Hind',
        unit: '€',
        value: '999',
        step: '10',
        decrease: 'Vähenda hinda',
        increase: 'Suurenda hinda'
      },
      resultsTitle: 'Hind tööajas',
      youNeedToWork: 'Pead töötama',
      workDays: 'Tööpäevi',
      workWeeks: 'Töönädalaid',
      hourlyRate: 'Sinu tunnitasu',
      runtime: {
        unit: {
          hour: '€ tunnis',
          month: '€ kuus',
          year: '€ aastas'
        },
        days: { one: '{n} päev', other: '{n} päeva' },
        weeks: { one: '{n} nädal', other: '{n} nädalat' },
        note: {
          empty: 'Sisesta oma palk, nädalatunnid ja hind ning vaata, kui kaua pead selle eest töötama.',
          result: 'Arvestatud {hours}-tunniste tööpäevadega, {days} päeva nädalas.'
        }
      },
      about: {
        title: 'Kuidas tööaega arvutatakse',
        paragraphs: [
          'Kõigepealt muudetakse sinu palk tunnitasuks. Kuupalk korrutatakse 12-ga ja jagatakse aasta töötundidega (nädalatunnid × 52), aastapalk jagatakse aasta töötundidega otse. Seejärel jagatakse hind sinu tunnitasuga.',
          'Tööpäevade arvestus eeldab viiepäevast töönädalat, nii et 40-tunnine nädal tähendab 8-tunniseid tööpäevi. Näiteks 12 € tunnitasu juures maksab 999-eurone telefon umbes 83 töötundi – veidi üle kahe töönädala.',
          'Kõige ausama vastuse saad netopalgaga, sest see on raha, mida sa tegelikult kulutad. Kui mõtled hindadest töötundides, on lihtsam otsustada, kas miski on tõesti oma raha väärt.'
        ]
      },
      faq: [
        {
          q: 'Mitu tundi pean ostu eest töötama?',
          a: 'Jaga hind oma netotunnitasuga. Kui teenid pärast makse 12 € tunnis, maksab 300-eurone ost 25 töötundi.'
        },
        {
          q: 'Kas kasutada bruto- või netopalka?',
          a: 'Netopalk pärast makse annab kõige realistlikuma tulemuse, sest see on raha, mis sul päriselt kulutamiseks on. Brutopalgaga paistavad asjad odavamad, kui need tegelikult on.'
        },
        {
          q: 'Kuidas kuupalka tunnitasuks ümber arvutada?',
          a: 'Korruta kuupalk 12-ga ja jaga aasta töötundidega. 40-tunnise töönädalaga on neid 2080, nii et 2000 € kuupalk teeb umbes 11,54 € tunnis. Kalkulaator teeb selle sinu eest ära, kui valid valiku „Kuus“.'
        }
      ]
    },

    costperuse: {
      name: 'Kasutuskorra hind',
      heading: 'Kasutuskorra hinna kalkulaator',
      title: 'Kasutuskorra hind – kas ost on oma raha väärt?',
      description: 'Arvuta, mida ost iga kasutuskorra kohta tegelikult maksab: hind miinus edasimüügi väärtus, jagatud sellega, kui tihti ja kui kaua asja kasutad.',
      card: 'Jaota hind kõigi kasutuskordade peale ja vaata, kas ost on oma raha väärt.',
      tag: 'Ostud',
      lead: 'Sisesta hind, kui tihti asja kasutad ja mitu aastat, ning vaata, mida üks kasutuskord tegelikult maksab.',
      price: {
        label: 'Hind',
        unit: '€',
        value: '500',
        step: '10',
        decrease: 'Vähenda hinda',
        increase: 'Suurenda hinda'
      },
      period: {
        label: 'Kui tihti kasutad',
        week: 'Nädalas',
        month: 'Kuus',
        year: 'Aastas'
      },
      uses: {
        label: 'Kasutuskorrad',
        unit: 'korda nädalas',
        decrease: 'Vähenda kasutuskordi',
        increase: 'Suurenda kasutuskordi'
      },
      years: {
        label: 'Kasutusaeg',
        unit: 'aastat',
        chip1: '1 aasta',
        chip2: '3 aastat',
        chip3: '5 aastat',
        decrease: 'Lühenda kasutusaega',
        increase: 'Pikenda kasutusaega'
      },
      resale: {
        label: 'Edasimüügi väärtus',
        unit: '€, valikuline',
        hint: 'Summa, mida loodad asja müües saada. Kui midagi ei saa, jäta 0.',
        decrease: 'Vähenda edasimüügi väärtust',
        increase: 'Suurenda edasimüügi väärtust'
      },
      resultsTitle: 'Kasutuskorra hind',
      perUse: 'Üks kasutuskord maksab',
      totalUses: 'Kasutuskordi kokku',
      perMonth: 'Kuus',
      perYear: 'Aastas',
      runtime: {
        unit: {
          week: 'korda nädalas',
          month: 'korda kuus',
          year: 'korda aastas'
        },
        note: {
          empty: 'Sisesta hind, kui tihti asja kasutad ja mitu aastat. Edasimüügi väärtus peab olema hinnast väiksem.',
          result: 'Kui kasutaksid seda aasta kauem, oleks kasutuskorra hind {next}.'
        }
      },
      about: {
        title: 'Kuidas kasutuskorra hinda arvutatakse',
        paragraphs: [
          'Kasutuskorra hind on ostuhind, millest on lahutatud müügist tagasi saadav summa, jagatud kasutuskordade arvuga. Kasutuskordade arv on kasutamise sagedus × nädalate, kuude või aastate arv, mille jooksul asja kasutad. 500-eurone ost, mida kasutad 3 korda nädalas 3 aasta jooksul, saab 468 kasutuskorda ja üks kord maksab 1,07 €.',
          'Kuu- ja aastahind jaotavad sama summa kogu ajale, mil asi sul on, nii et ostmist on lihtne võrrelda rentimise, liisingu või tellimusega.',
          'Kasutuskorra hinnaga on lihtne võrrelda odavat ja kiiresti kuluvat asja kalli ja vastupidavaga. 60-eurosed jalanõud, mida kannad 50 korda, maksavad 1,20 € kandmiskorra kohta; 200-eurosed, mida kannad 400 korda, maksavad 0,50 €.'
        ]
      },
      faq: [
        {
          q: 'Kuidas arvutada kasutuskorra hinda?',
          a: 'Jaga hind kasutuskordade arvuga. Kui müüd asja hiljem maha, lahuta enne edasimüügi väärtus hinnast. 120-eurone jope, mida kannad 80 korda, maksab 1,50 € kandmiskorra kohta.'
        },
        {
          q: 'Mis on hea kasutuskorra hind?',
          a: 'See sõltub sellest, mida alternatiiv maksab. Võrdle rentimise, laenamise või ühekordse tasuga: kui jõusaali ühekordne külastus maksab 15 €, tasub 39-eurone kuupilet end ära alates kolmandast külastusest kuus.'
        },
        {
          q: 'Kas see sobib ka tellimuste ja liikmesuste jaoks?',
          a: 'Jah. Sisesta hinnaks aastahind, kasutamise sagedus ja kasutusajaks 1 aasta. Kui jõusaali kuupilet maksab 39 €, sisesta hinnaks 468 € ja oma külastuste arv nädalas.'
        }
      ]
    },

    coffee: {
      name: 'Kohviharjumus',
      heading: 'Kohvikalkulaator',
      title: 'Kohvikalkulaator – kui palju kohv sulle aastas maksab?',
      description: 'Vaata, mida sinu igapäevane kohv maksab kuus ning 1, 5 ja 10 aasta jooksul. Sisesta tassi hind ja tasside arv nädalas – tasuta ja privaatne.',
      card: 'Vaata, milliseks summaks kasvab igapäevane kohvitass ühe, viie ja kümne aastaga.',
      tag: 'Harjumus',
      lead: 'Sisesta tassi hind ja kui tihti kohvi ostad, ning vaata, mida see harjumus aastate jooksul maksab.',
      price: {
        label: 'Tassi hind',
        unit: '€',
        step: '0.1',
        value: '3.5',
        decrease: 'Vähenda kohvi hinda',
        increase: 'Suurenda kohvi hinda'
      },
      perWeek: {
        label: 'Tasse nädalas',
        unit: 'tassi',
        chip1: 'Tööpäeviti',
        chip2: 'Iga päev',
        chip3: 'Kaks korda päevas',
        decrease: 'Vähenda tasside arvu nädalas',
        increase: 'Suurenda tasside arvu nädalas'
      },
      resultsTitle: 'Kokku kulub',
      in10Years: '10 aastaga',
      perMonth: 'Kuus',
      year1: '1 aasta',
      year5: '5 aastat',
      runtime: {
        note: {
          empty: 'Sisesta hind ja mitu tassi nädalas jood, et näha kogusummasid.',
          result: 'See on umbes {cups} tassi aastas, {price} tassi kohta.'
        }
      },
      about: {
        title: 'Kuidas kohvikulu arvutatakse',
        paragraphs: [
          'Aastakulu on tassi hind × tasse nädalas × 52 nädalat. Kuukulu on aastakulu jagatud 12-ga ning 5 ja 10 aasta summad korrutavad aastakulu ilma inflatsiooni ja hinnatõusuta.',
          'Iga tööpäev ostetud 3,50-eurone kohv teeb aastas umbes 910 € ja kümne aastaga 9100 €. Kui summa üllatab, on kodus keedetud kohv või oma termoskruus lihtne viis kulusid vähendada.',
          'Kalkulaator sobib iga väikese ja korduva ostu jaoks: energiajook, lõunavõileib või pudel vett. Sisesta hind ja mitu tükki nädalas ostad.'
        ]
      },
      faq: [
        {
          q: 'Kui palju maksab igapäevane kohv aastas?',
          a: 'Üks tass päevas seitsmel päeval nädalas teeb 364 tassi aastas. Kui tass maksab 3,50 €, on see 1274 € aastas ja 12 740 € kümne aastaga.'
        },
        {
          q: 'Kas kodus keedetud kohv on odavam?',
          a: 'Tavaliselt tunduvalt. Kodus keedetud tass maksab sageli alla 30 sendi, kohvikus aga mitu eurot. Sisesta kodukohvi tassi hind ja võrdle.'
        },
        {
          q: 'Kas kalkulaator arvestab inflatsiooni?',
          a: 'Ei. Arvutused eeldavad, et hind jääb samaks, nii et need näitavad harjumuse hinda tänastes hindades. Hinnatõusu korral on tegelik pikaajaline kulu suurem.'
        },
        {
          q: 'Mis siis, kui investeeriksin selle raha?',
          a: 'Plokk „Kui investeeriksid selle raha“ näitab, milliseks summaks raha kasvaks, kui sa ei kulutaks seda, vaid investeeriksid iga kuu 4% aastase tootlusega ja igakuise liitintressiga. Iga tööpäev ostetud 3,50-eurone kohv teeb 75,83 € kuus, mis kasvab 10 aastaga umbes 11 120 euroni – sellest 9100 € on sinu enda raha ja ülejäänu tootlus. Maksud, tasud ja inflatsioon on arvestamata. See on näide, mitte investeerimisnõuanne.'
        }
      ]
    },

    smoking: {
      name: 'Suitsetamise hind',
      heading: 'Suitsetamise hinna kalkulaator',
      title: 'Suitsetamise hinna kalkulaator – mida sigaretid maksavad?',
      description: 'Uuri, kui palju suitsetamine maksab kuus ning 1, 5 ja 10 aasta jooksul – ja kui palju säästad loobudes. Sisesta paki hind ja sigarettide arv päevas.',
      card: 'Vaata, kui palju raha läheb igas kuus ja aastate jooksul suitsuna õhku.',
      tag: 'Harjumus',
      lead: 'Sisesta paki hind ja kui palju suitsetad, ning vaata, kui palju raha läheb aastate jooksul suitsuna õhku.',
      packPrice: {
        label: 'Paki hind',
        unit: '€',
        step: '0.1',
        value: '7',
        decrease: 'Vähenda paki hinda',
        increase: 'Suurenda paki hinda'
      },
      perDay: {
        label: 'Sigarette päevas',
        unit: 'sigaretti',
        chip1: '5 päevas',
        chip2: '10 päevas',
        chip3: '20 päevas',
        decrease: 'Vähenda sigarettide arvu päevas',
        increase: 'Suurenda sigarettide arvu päevas'
      },
      perPack: {
        label: 'Sigarette pakis',
        unit: 'paki suurus',
        value: '20',
        decrease: 'Vähenda sigarettide arvu pakis',
        increase: 'Suurenda sigarettide arvu pakis'
      },
      resultsTitle: 'Suitsuna õhku',
      in10Years: '10 aastaga',
      perMonth: 'Kuus',
      year1: '1 aasta',
      year5: '5 aastat',
      runtime: {
        note: {
          empty: 'Sisesta paki hind, mitu sigaretti päevas suitsetad ja paki suurus, et näha kogusummasid.',
          result: 'See on umbes {cigarettes} sigaretti ({packs} pakki) aastas, {price} sigareti kohta.'
        }
      },
      about: {
        title: 'Kuidas suitsetamise hinda arvutatakse',
        paragraphs: [
          'Ühe sigareti hind on paki hind jagatud sigarettide arvuga pakis. See korrutatakse päevas suitsetatud sigarettide arvuga ja 365 päevaga, mis annab aastakulu. Kuukulu on sellest kaheteistkümnendik ning 5 ja 10 aasta summad on arvutatud tänaste hindadega.',
          'Pool pakki päevas 7-eurose paki hinnaga teeb umbes 1280 € aastas ja üle 12 700 € kümne aastaga. Kogusumma nägemine võib olla tugev motivaator: sama raha eest saaks reisida, säästa või võlgu tasuda.',
          'Kalkulaator arvestab ainult sigarettide hinda. Tervisekulud ja haiguspäevad tulevad sellele lisaks. Kui soovid suitsetamisest loobuda ja vajad tuge, saad abi oma perearstilt või suitsetamisest loobumise nõustajalt.'
        ]
      },
      faq: [
        {
          q: 'Kui palju maksab pakk päevas aastas?',
          a: 'Pakk päevas teeb 365 pakki aastas. 7-eurose paki hinnaga on see 2555 € aastas ja 25 550 € kümne aastaga.'
        },
        {
          q: 'Kui palju säästan, kui suitsetamisest loobun?',
          a: 'Kõik, mida see kalkulaator näitab. Sisesta, kui palju praegu suitsetad: kuu- ja aastasummad ongi see, mida loobumine sulle säästab.'
        },
        {
          q: 'Kas see sobib ka keeramistubaka jaoks?',
          a: 'Jah. Sisesta paki hinnaks tubakapaki hind, paki suuruseks sellest keeratavate sigarettide arv ja lisaks, mitu tükki päevas suitsetad.'
        },
        {
          q: 'Mis siis, kui investeeriksin selle raha?',
          a: 'Plokk „Kui investeeriksid selle raha“ näitab, milliseks summaks raha kasvaks, kui sa ei suitsetaks, vaid investeeriksid selle iga kuu 4% aastase tootlusega ja igakuise liitintressiga. Pool pakki päevas 7-eurose paki hinnaga teeb umbes 106 € kuus, mis kasvab 10 aastaga umbes 15 620 euroni – sellest 12 775 € on sinu enda raha ja ülejäänu tootlus. Maksud, tasud ja inflatsioon on arvestamata. See on näide, mitte investeerimisnõuanne.'
        }
      ]
    },

    alcohol: {
      name: 'Alkoholikulud',
      heading: 'Alkoholikulude kalkulaator',
      title: 'Alkoholikulude kalkulaator – mida joomine sulle maksab?',
      description: 'Vaata, mida õlu, vein ja muud joogid maksavad kuus ning 1, 5 ja 10 aasta jooksul ja milliseks summaks kasvaks sama raha investeerituna.',
      card: 'Vaata, milliseks summaks nädala joogid kasvavad ühe, viie ja kümne aastaga.',
      tag: 'Harjumus',
      lead: 'Sisesta joogi hind ja mitu jooki nädalas jood, ning vaata, mida see aastate jooksul kokku teeb.',
      price: {
        label: 'Joogi hind',
        unit: '€',
        step: '0.5',
        value: '5.5',
        hint: 'Jood nii kodus kui ka väljas? Kasuta keskmist hinda.',
        decrease: 'Vähenda joogi hinda',
        increase: 'Suurenda joogi hinda'
      },
      perWeek: {
        label: 'Jooke nädalas',
        unit: 'jooki',
        chip1: '3 nädalas',
        chip2: '7 nädalas',
        chip3: '14 nädalas',
        decrease: 'Vähenda jookide arvu nädalas',
        increase: 'Suurenda jookide arvu nädalas'
      },
      resultsTitle: 'Kokku kulub',
      in10Years: '10 aastaga',
      perMonth: 'Kuus',
      year1: '1 aasta',
      year5: '5 aastat',
      runtime: {
        note: {
          empty: 'Sisesta hind ja mitu jooki nädalas jood, et näha kogusummasid.',
          result: 'See on umbes {drinks} jooki aastas, {price} joogi kohta.'
        }
      },
      about: {
        title: 'Kuidas alkoholikulusid arvutatakse',
        paragraphs: [
          'Aastakulu on joogi hind × jooke nädalas × 52 nädalat. Kuukulu on sellest kaheteistkümnendik ning 5 ja 10 aasta summad on arvutatud tänaste hindadega ilma inflatsioonita.',
          'Kuue baaris joodud 5,50-eurose õlle eest nädalas kulub umbes 1720 € aastas ja üle 17 000 € kümne aastaga. Kui jood nii baaris kui ka kodus, kasuta keskmist hinda või arvuta mõlemad eraldi ja liida kokku.',
          'Plokk „Kui investeeriksid selle raha“ näitab, milliseks summaks sama raha kasvaks, kui investeeriksid selle iga kuu 4% aastase tootlusega 10 aasta jooksul. Kalkulaator arvestab ainult jookide hinda, tervisemõjud tulevad lisaks. Kui soovid joomist vähendada, saad abi oma perearstilt või mõnelt nõustamisteenuselt.'
        ]
      },
      faq: [
        {
          q: 'Kui palju kulutan aastas alkoholile?',
          a: 'Korruta joogi hind nädalas joodud jookide arvuga ja 52-ga. Näiteks kuus jooki nädalas hinnaga 5,50 € teeb 1716 € aastas.'
        },
        {
          q: 'Kui palju säästaksin, kui joon vähem?',
          a: 'Sisesta jookide arv, milleni tahaksid vähendada, ja võrdle. Kui vähendad nädalas kuuelt joogilt kolmele, säästad 5,50-eurose hinna juures 858 € aastas ja 8580 € kümne aastaga.'
        },
        {
          q: 'Mis siis, kui investeeriksin selle raha?',
          a: 'Plokk „Kui investeeriksid selle raha“ näitab, kui palju oleks sul 10 aasta pärast, kui sa ei kulutaks raha jookidele, vaid investeeriksid selle iga kuu 4% aastase tootlusega ja igakuise liitintressiga. Kuue 5,50-eurose joogi eest nädalas kulub 143 € kuus, mis kasvab umbes 20 980 euroni – sellest 17 160 € on sinu enda raha ja ülejäänu tootlus. Maksud, tasud ja inflatsioon on arvestamata. See on näide, mitte investeerimisnõuanne.'
        }
      ]
    },

    gambling: {
      name: 'Loto ja kihlveod',
      heading: 'Loto- ja kihlveokalkulaator',
      title: 'Loto- ja kihlveokalkulaator – mida hasartmängud maksavad?',
      description: 'Vaata, mida lotopiletid ja kihlveod maksavad kuus ja 10 aasta jooksul, kui palju neist keskmiselt kaotad ja milliseks summaks panused investeerituna kasvaksid.',
      card: 'Vaata, mida lotopiletid ja kihlveod kokku maksavad ja kui palju neist keskmiselt kaotad.',
      tag: 'Harjumus',
      lead: 'Sisesta panus ja kui tihti mängid, ning vaata, mida loto ja kihlveod aastate jooksul maksavad – ja kui suur osa rahast tuleb keskmiselt võitudena tagasi.',
      stake: {
        label: 'Panus mängu kohta',
        unit: '€',
        step: '1',
        value: '5',
        decrease: 'Vähenda panust',
        increase: 'Suurenda panust'
      },
      perWeek: {
        label: 'Mänge nädalas',
        unit: 'mängu',
        chip1: 'Kord nädalas',
        chip2: 'Kaks korda nädalas',
        chip3: 'Iga päev',
        decrease: 'Vähenda mängude arvu nädalas',
        increase: 'Suurenda mängude arvu nädalas'
      },
      payout: {
        label: 'Tagastusprotsent',
        unit: '% tagasi',
        chip1: 'Loto',
        chip2: 'Spordiennustus',
        chip3: 'Kasiino',
        hint: 'See osa kõigist panustest, mis makstakse võitudena tagasi. Loto maksab tavaliselt tagasi umbes poole, spordiennustus ja kasiinomängud 90–97%.',
        decrease: 'Vähenda tagastusprotsenti',
        increase: 'Suurenda tagastusprotsenti'
      },
      resultsTitle: 'Mida see maksab',
      in10Years: 'Panused 10 aastaga',
      perMonth: 'Kuus',
      perYear: 'Aastas',
      lossPerYear: 'Keskmine kaotus aastas',
      runtime: {
        note: {
          empty: 'Sisesta panus, mitu korda nädalas mängid ja tagastusprotsent (0–100).',
          result: 'Keskmiselt tuleb võitudena tagasi umbes {back} aastas, nii et kaotad umbes {loss} aastas ja {loss10} kümne aastaga.'
        }
      },
      about: {
        title: 'Kuidas loto ja kihlvedude kulu arvutatakse',
        paragraphs: [
          'Aastakulu on panus × mänge nädalas × 52 nädalat. Kuukulu on sellest kaheteistkümnendik ning 10 aasta summa on arvutatud tänaste panustega.',
          'Tagastusprotsent näitab, kui suur osa kõigist panustest makstakse võitudena tagasi. 50% tagastusprotsendi juures teeb 5 € panus kaks korda nädalas aastas 520 € panuseid, millest keskmiselt tuleb võitudena tagasi umbes 260 € – keskmine kaotus on seega 260 € aastas. Üksik mängija võib võita suurelt või kaotada kõik, kuid mida rohkem mänge, seda lähemale keskmisele tulemus jõuab.',
          'Plokk „Kui investeeriksid selle raha“ näitab, milliseks summaks panused kasvaksid, kui investeeriksid need hoopis iga kuu 4% aastase tootlusega 10 aasta jooksul. Kui mängimist on raske kontrolli all hoida, saad abi oma perearstilt või hasartmängusõltuvuse nõustamisteenuselt.'
        ]
      },
      faq: [
        {
          q: 'Kui palju kulutan aastas lotole?',
          a: 'Korruta panus nädalas mängitud mängude arvuga ja 52-ga. 5 € panus kaks korda nädalas teeb 520 € aastas ja 5200 € kümne aastaga.'
        },
        {
          q: 'Mis on tagastusprotsent?',
          a: 'See on osa kõigist panustest, mis makstakse mängijatele võitudena tagasi. Loto maksab tavaliselt tagasi umbes poole panustest, spordiennustus ja kasiinomängud 90–97%. Ülejäänu jääb mängu korraldajale – ja just nii palju mängijad keskmiselt kaotavadki.'
        },
        {
          q: 'Mis siis, kui investeeriksin selle raha?',
          a: 'Plokk „Kui investeeriksid selle raha“ näitab, kui palju oleks sul 10 aasta pärast, kui sa ei mängiks, vaid investeeriksid panused iga kuu 4% aastase tootlusega ja igakuise liitintressiga. 5 € panus kaks korda nädalas teeb umbes 43,33 € kuus, mis kasvab umbes 6360 euroni – sellest 5200 € on sinu enda raha ja ülejäänu tootlus. Maksud, tasud ja inflatsioon on arvestamata. See on näide, mitte investeerimisnõuanne.'
        }
      ]
    },

    subscriptions: {
      name: 'Tellimused',
      heading: 'Tellimuste kalkulaator',
      title: 'Tellimuste kalkulaator – püsimaksete summa kuus ja aastas',
      description: 'Liida kokku voogedastus, jõusaal, mobiilipakett ja kõik muud tellimused. Vaata kogusummat kuus, aastas ja 10 aastaga ning seda, milline tellimus on kõige kallim.',
      card: 'Liida voogedastus, jõusaal ja kõik muud püsimaksed ühes kohas kokku.',
      tag: 'Eelarve',
      lead: 'Pane kirja kõik, mille eest regulaarselt maksad, ja vaata, mis see kokku teeb. Arvestada saab nii kuu-, aasta- kui ka nädalatasusid.',
      listTitle: 'Sinu tellimused',
      empty: 'Tellimusi veel ei ole. Lisa tellimus allpool või kasuta kiirlisamist.',
      add: 'Lisa tellimus',
      quickAdd: 'Kiirlisamine',
      quick: {
        1: { name: 'Videoteenus', price: '10.99' },
        2: { name: 'Muusikateenus', price: '7.99' },
        3: { name: 'Jõusaal', price: '39' },
        4: { name: 'Pilvesalvestus', price: '2.99' },
        5: { name: 'Mobiilipakett', price: '19.99' },
        6: { name: 'Uudised', price: '9.99' }
      },
      note: 'Sinu nimekiri salvestub lehe aadressi, nii et saad selle järjehoidjasse lisada või jagada. Seda ei saadeta kuhugi.',
      row: {
        name: 'Nimi',
        nameLabel: 'Tellimuse nimi',
        priceLabel: 'Hind eurodes',
        cycleLabel: 'Arveldusperiood',
        monthly: '/ kuu',
        yearly: '/ aasta',
        weekly: '/ nädal'
      },
      resultsTitle: 'Tellimused kokku',
      perYear: 'Aastas',
      perMonth: 'Kuus',
      perDay: 'Päevas',
      in10Years: '10 aastaga',
      breakdownLabel: 'Aastahind tellimuste kaupa',
      copySummary: 'Kopeeri kokkuvõte',
      runtime: {
        untitled: 'Nimetu',
        remove: 'Eemalda {name}',
        removeUnnamed: 'Eemalda tellimus',
        breakdown: '{cost} / aasta · {percent}%',
        cycle: { monthly: 'kuu', yearly: 'aasta', weekly: 'nädal' },
        note: {
          empty: 'Lisa tellimus koos hinnaga, et näha kogusummasid.',
          single: '{name} maksab {cost} aastas.',
          biggest: 'Sinu suurim kulu on {name}: {cost} aastas ehk {percent}% kogusummast.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Kokku: {month} kuus, {year} aastas'
        }
      },
      about: {
        title: 'Kuidas tellimuste kogusummat arvutatakse',
        paragraphs: [
          'Iga tellimus teisendatakse aastahinnaks: kuuhinnad korrutatakse 12-ga, nädalahinnad 52-ga ja aastahinnad kasutatakse nii, nagu need on. Aasta kogusumma jagatakse seejärel 12-ga kuuhinnaks ja 365-ga päevahinnaks.',
          'Jaotus järjestab tellimused kalleimast odavaimani ja näitab igaühe osa kogusummast, nii et on lihtne näha, millest loobuda või mida odavama paketi vastu vahetada.',
          'Nimekiri salvestub lehe aadressi, mitte serverisse. Lisa leht järjehoidjasse, et nimekirja juurde hiljem tagasi tulla, või jaga linki ja käige pere ühised tellimused koos läbi.'
        ]
      },
      faq: [
        {
          q: 'Kuidas leida üles kõik oma tellimused?',
          a: 'Vaata läbi paari viimase kuu pangakonto ja krediitkaardi väljavõtted ning otsi korduvaid makseid. Kontrolli internetipangas ka püsimakseid ja e-arvete püsimakselepinguid ning App Store’i, Google Play ja PayPali tellimuste seadeid.'
        },
        {
          q: 'Kas aastapakett on kuupaketist odavam?',
          a: 'Sageli 15–20%, aga ainult siis, kui kasutaksid teenust niikuinii terve aasta. Lisa nimekirja mõlemad variandid ja võrdle nende aastahinda.'
        },
        {
          q: 'Kas mu nimekiri salvestatakse?',
          a: 'Nimekiri säilib ainult lehe aadressis. Selle hoidmiseks lisa link järjehoidjasse või jaga seda; serverisse ega küpsistesse ei salvestata midagi.'
        },
        {
          q: 'Mis siis, kui investeeriksin selle raha?',
          a: 'Plokk „Kui investeeriksid selle raha“ näitab, milliseks summaks tellimustele kuluv raha kasvaks, kui investeeriksid sama summa iga kuu 4% aastase tootlusega ja igakuise liitintressiga. 50 € kuus kasvab 10 aastaga umbes 7335 euroni – sellest 6000 € on sinu enda raha ja ülejäänu tootlus. Maksud, tasud ja inflatsioon on arvestamata. See on näide, mitte investeerimisnõuanne.'
        }
      ]
    },

    electricity: {
      name: 'Elektrikulu',
      heading: 'Elektrikulu kalkulaator',
      title: 'Elektrikulu kalkulaator – mida seadme kasutamine maksab?',
      description: 'Arvuta, mida seadme kasutamine maksab päevas, kuus ja aastas, lähtudes selle võimsusest, kasutustundidest ja elektri hinnast. Tasuta kWh-kalkulaator.',
      card: 'Vaata, mida seadme sisselülitatuna hoidmine maksab päevas, kuus ja aastas.',
      tag: 'Kodu',
      lead: 'Sisesta seadme võimsus, kasutusaeg ja elektri hind ning vaata, mida selle sees hoidmine tegelikult maksab.',
      power: {
        label: 'Võimsus',
        unit: 'vatti',
        chip1: 'LED-pirn 9 W',
        chip2: 'Sülearvuti 60 W',
        chip3: 'Teler 100 W',
        chip4: 'Mänguriarvuti 400 W',
        chip5: 'Soojapuhur 1500 W',
        decrease: 'Vähenda võimsust',
        increase: 'Suurenda võimsust'
      },
      hours: {
        label: 'Tunde päevas',
        unit: 'tundi',
        decrease: 'Vähenda tunde päevas',
        increase: 'Suurenda tunde päevas'
      },
      days: {
        label: 'Päevi nädalas',
        unit: 'päeva',
        decrease: 'Vähenda päevi nädalas',
        increase: 'Suurenda päevi nädalas'
      },
      kwhPrice: {
        label: 'Elektri hind',
        unit: 'senti/kWh',
        value: '20',
        step: '1',
        divisor: '100',
        hint: 'Kasuta keskmist koguhinda koos võrgutasu, maksude ja käibemaksuga – ka börsihinnaga lepingu puhul.',
        decrease: 'Vähenda elektri hinda',
        increase: 'Suurenda elektri hinda'
      },
      resultsTitle: 'Kasutuskulu',
      perYear: 'Aastas',
      perDayOfUse: 'Kasutuspäeva kohta',
      perMonth: 'Kuus',
      energyPerYear: 'Energiat aastas',
      runtime: {
        note: {
          empty: 'Sisesta võimsus, tunnid päevas (kuni 24), päevad nädalas (kuni 7) ja elektri hind.',
          result: 'Tarbib umbes {day} igal kasutuspäeval ja umbes {year} aastas.'
        }
      },
      about: {
        title: 'Kuidas elektrikulu arvutatakse',
        paragraphs: [
          'Energiatarve kilovatt-tundides (kWh) on võimsus vattides × kasutustunnid ÷ 1000. 100 W teler, mis on 4 tundi sees, tarbib 0,4 kWh päevas. Kui korrutad selle elektri kilovatt-tunni hinnaga, saad kulu kasutuspäeva kohta.',
          'Aastakulu arvestab, mitu päeva nädalas seade töötab, jaotatuna aasta 365 päevale. Kuukulu on aastakulust kaheteistkümnendik.',
          'Seadme võimsuse leiad andmesildilt või kasutusjuhendist. Paljud seadmed tarbivad enamiku ajast vähem kui maksimumvõimsus, nii et tulemus on pigem ülemine hinnang. Elektri hind koosneb energia hinnast, võrgutasust, taastuvenergia ja muudest riiklikest tasudest, elektriaktsiisist ning käibemaksust. Börsihinnaga lepingu puhul muutub energia hind päeva jooksul pidevalt, nii et kasuta keskmist koguhinda kilovatt-tunni kohta, mitte ainult börsihinda.'
        ]
      },
      faq: [
        {
          q: 'Kuidas arvutada seadme elektrikulu?',
          a: 'Korruta võimsus kilovattides kasutustundide ja kilovatt-tunni hinnaga. 1500 W soojapuhur, mis töötab 3 tundi, maksab 1,5 kW × 3 h × 0,20 € = 0,90 € päevas.'
        },
        {
          q: 'Mitu kWh seade tarbib?',
          a: 'Jaga võimsus vattides 1000-ga ja korruta töötundidega. 60 W sülearvuti, mida kasutatakse 8 tundi päevas, tarbib 0,48 kWh päevas – umbes 175 kWh aastas, kui seda kasutatakse iga päev.'
        },
        {
          q: 'Millist elektri hinda kasutada?',
          a: 'Kasuta kilovatt-tunni koguhinda koos energia hinna, võrgutasu, maksude ja käibemaksuga. Eriti börsihinnaga lepingu puhul saad hea keskmise, kui jagad kuu elektri- ja võrguarve kogusumma kulutatud kilovatt-tundidega.'
        },
        {
          q: 'Kas ooterežiim tarbib elektrit?',
          a: 'Jah, paljud seadmed tarbivad ooterežiimis paar vatti. Sisesta ooterežiimi võimsus ja 24 tundi päevas, et näha, mida see aastas maksab.'
        }
      ]
    },

    trip: {
      name: 'Sõidukulud',
      heading: 'Sõidukulude kalkulaator',
      title: 'Sõidukulude kalkulaator – kütusearve reisil ja tööl käies',
      description: 'Arvuta reisi või igapäevase tööle sõidu kütuse maksumus ja jaga see kaassõitjatega. Töötab kilomeetrite ja liitritega või miilide ja gallonitega.',
      card: 'Arvuta reisi või tööle sõidu kütuse maksumus ja jaga see teistega.',
      tag: 'Reisimine',
      lead: 'Arvuta ühe sõidu või igapäevase tööle sõidu kütuse maksumus ja jaga see kõigi autos olijate vahel.',
      unit: {
        label: 'Ühikud',
        metric: 'Kilomeetrid ja liitrid',
        us: 'Miilid ja gallonid'
      },
      distance: {
        label: 'Vahemaa',
        unit: 'km ühes suunas',
        decrease: 'Vähenda vahemaad',
        increase: 'Suurenda vahemaad'
      },
      direction: {
        label: 'Sõit',
        one: 'Üks suund',
        round: 'Edasi-tagasi'
      },
      consumption: {
        label: 'Kütusekulu',
        unit: 'l/100 km',
        hint: 'Sõidad elektriautoga? Sisesta kWh/100 km ja elektri hind kilovatt-tunni kohta.',
        decrease: 'Vähenda kütusekulu',
        increase: 'Suurenda kütusekulu'
      },
      fuelPrice: {
        label: 'Kütuse hind',
        unit: '€ liitri kohta',
        value: '1.65',
        step: '0.05',
        usStep: '0.1',
        decrease: 'Vähenda kütuse hinda',
        increase: 'Suurenda kütuse hinda'
      },
      people: {
        label: 'Kulude jagajad',
        unit: 'inimest',
        decrease: 'Vähenda inimeste arvu',
        increase: 'Suurenda inimeste arvu'
      },
      tripsPerWeek: {
        label: 'Sõite nädalas',
        unit: 'kuu- ja aastasummade jaoks',
        decrease: 'Vähenda sõitude arvu nädalas',
        increase: 'Suurenda sõitude arvu nädalas'
      },
      resultsTitle: 'Kütuse maksumus',
      perPerson: 'Inimese kohta',
      perMonth: 'Kuus',
      perYear: 'Aastas',
      runtime: {
        direction: { one: 'Üks suund', round: 'Edasi-tagasi' },
        unit: {
          metric: {
            distance: 'km ühes suunas',
            consumption: 'l/100 km',
            price: '€ liitri kohta',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'miili ühes suunas',
            consumption: 'mpg',
            price: '€ galloni kohta',
            perDistance: 'miil',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Sisesta vahemaa, kütusekulu ja kütuse hind, et näha kulusid.',
          result: 'Sõiduks kulub {fuel} kütust, umbes {price} / {distance}.'
        }
      },
      about: {
        title: 'Kuidas sõidukulusid arvutatakse',
        paragraphs: [
          'Kilomeetrite ja liitrite puhul on kütusekogus vahemaa × kütusekulu ÷ 100. Kui tööle on 25 km ühes suunas (50 km päevas) ja auto kulutab 6,5 l/100 km, kulub 3,25 liitrit kütust. Kui bensiin 95 maksab 1,65 € liitrist, läheb päevane sõit maksma 5,36 €. Kui jagad selle inimeste arvuga, saad iga sõitja osa.',
          'Miilide ja gallonite puhul jagatakse vahemaa auto mpg-väärtusega (miile galloni kohta). Ühikute vahetamine teisendab sisestatud väärtused, nii et saad võrrelda mõlema süsteemi numbreid.',
          'Kuu- ja aastasummad põhinevad sõitude arvul nädalas – 5 edasi-tagasi sõitu nädalas on tavaline tööl käimine. Elektriauto puhul sisesta kütusekulu asemel energiatarve kWh/100 km ja hinnaks elektri hind kilovatt-tunni kohta.'
        ]
      },
      faq: [
        {
          q: 'Kuidas arvutada sõidu kütuse maksumust?',
          a: 'Korruta vahemaa kütusekulu ja kütuse hinnaga ning jaga 100-ga. Tallinnast Pärnusse on umbes 130 km; kui auto kulutab 6 l/100 km ja bensiin maksab 1,65 € liitrist: 130 × 6 ÷ 100 × 1,65 € = 12,87 €.'
        },
        {
          q: 'Kuidas jagada kütusekulud kaassõitjate vahel?',
          a: 'Sisesta kulude jagajate arv. Kalkulaator jagab sõidu hinna võrdselt kõigi vahel, kaasa arvatud juht.'
        },
        {
          q: 'Kas kalkulaator arvestab auto kulumist ja parkimist?',
          a: 'Ei, see arvestab ainult kütust. Auto kulumine, hooldus, kindlustus ja parkimine tulevad lisaks, nii et autoga sõitmise tegelik hind on suurem.'
        }
      ]
    }
  }
};
