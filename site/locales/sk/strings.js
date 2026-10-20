// Slovak texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in euros in Slovakia.

module.exports = {
  meta: {
    name: 'Slovenčina',
    locale: 'sk-SK',
    currency: 'EUR',
    ogLocale: 'sk_SK'
  },

  money: {
    symbol: '€',
    zero: '0,00 €',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Preskočiť na obsah',
    home: 'Domov',
    toggleTheme: 'Prepnúť farebný režim',
    themeToLight: 'Prepnúť na svetlý režim',
    themeToDark: 'Prepnúť na tmavý režim',
    language: 'Jazyk',
    allTools: 'Všetky nástroje',
    share: 'Zdieľať',
    settings: 'Nastavenia',
    quickPicks: 'Rýchly výber',
    faqTitle: 'Časté otázky',
    relatedTools: 'Ďalšie kalkulačky',
    imageAlt: 'costsimulators.com – bezplatné kalkulačky na každodenné otázky o peniazoch',
    invest: {
      label: 'Keby ste peniaze namiesto toho investovali'
    }
  },

  footer: {
    privacy: 'Všetko beží vo vašom prehliadači. Žiadne cookies, žiadne sledovanie.',
    about: 'O projekte',
    contact: 'Kontakt',
    privacyPolicy: 'Ochrana súkromia',
    terms: 'Podmienky'
  },

  runtime: {
    share: {
      linkCopied: 'Odkaz skopírovaný',
      copyFailed: 'Kopírovanie zlyhalo',
      copied: 'Skopírované!',
      calculatedWith: 'Vypočítané na costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    },
    invest: {
      note: '{monthly} mesačne počas 10 rokov pri zhodnotení {rate} ročne: vložíte spolu {paid} a výnos bude {gain}.'
    }
  },

  home: {
    title: 'Bezplatné kalkulačky nákladov na každý deň',
    description: 'Bezplatné a súkromné kalkulačky, ktoré ukážu, koľko veci naozaj stoja: porady, hodiny práce, zvyky, predplatné, elektrina, palivo a cena za použitie. Bez registrácie, priamo v prehliadači.',
    eyebrow: 'Súkromne · Zadarmo · Okamžite',
    heading: 'Malé nástroje na každodenné otázky o <span class="accent-text">peniazoch</span>.',
    lead: 'Rýchle kalkulačky, ktoré ukážu, koľko veci naozaj stoja. Bez registrácie a bez sledovania – všetko beží priamo vo vašom prehliadači.',
    toolsTitle: 'Nástroje',
    toolCount: '{count} nástrojov',
    suggestTitle: 'Máte nápad?',
    suggestText: 'Navrhnite nový nástroj na GitHube.',
    whyTitle: 'Aj malé výdavky sa nazbierajú',
    whyText1: 'Jedna porada, káva cestou do práce alebo ďalšia streamovacia služba sa sama osebe nezdá drahá. Keď ich však sčítate za mesiac, rok alebo desať rokov, čísla vyzerajú úplne inak.',
    whyText2: 'Každá kalkulačka robí jednu vec, pýta sa len na čísla, ktoré potrebuje, a výsledok ukáže okamžite. Všetko sa počíta vo vašom prehliadači, takže vaše čísla zostávajú vo vašom zariadení.',
    aboutLink: 'Viac o costsimulators.com',
    faq: [
      {
        q: 'Je costsimulators.com zadarmo?',
        a: 'Áno. Všetky kalkulačky sú úplne zadarmo, bez registrácie, bez plateného obsahu a bez reklám. Môžete ich používať aj v práci.'
      },
      {
        q: 'Ukladajú sa moje čísla alebo sa niekam odosielajú?',
        a: 'Nie. Všetko, čo zadáte, sa počíta vo vašom prehliadači a nikdy sa neodosiela na server. Web nepoužíva cookies ani analytické nástroje.'
      },
      {
        q: 'Môžem výpočet zdieľať?',
        a: 'Áno. Nastavenia sa ukladajú do adresy stránky. Stlačte Zdieľať a skopírujte odkaz – kto ho otvorí, uvidí rovnaký výpočet.'
      }
    ]
  },

  notFound: {
    title: 'Stránka sa nenašla',
    description: 'Stránka, ktorú hľadáte, neexistuje.',
    heading: 'Táto stránka neexistuje.',
    lead: 'Adresa môže obsahovať preklep alebo sa stránka presunula. Všetky kalkulačky nájdete na úvodnej stránke.'
  },

  documents: {
    about: {
      name: 'O projekte',
      title: 'O projekte – bezplatné a súkromné kalkulačky nákladov',
      description: 'Kto stojí za costsimulators.com a ako kalkulačky fungujú. Bezplatné a súkromné kalkulačky nákladov na porady, hodiny práce, zvyky, nákupy, predplatné, elektrinu a cesty.'
    },
    privacy: {
      name: 'Zásady ochrany osobných údajov',
      title: 'Zásady ochrany osobných údajov',
      description: 'Ako costsimulators.com zaobchádza s vašimi údajmi: výpočty prebiehajú vo vašom prehliadači, bez sledovania, bez analytiky a bez používateľských účtov.'
    },
    terms: {
      name: 'Podmienky používania',
      title: 'Podmienky používania',
      description: 'Podmienky používania costsimulators.com: zadarmo na osobné aj komerčné účely, poskytované tak, ako je, s otvoreným zdrojovým kódom pod licenciou MIT.'
    }
  },

  tools: {
    meetings: {
      name: 'Cena porady',
      heading: 'Kalkulačka nákladov na poradu',
      title: 'Kalkulačka nákladov na poradu – koľko stojí porada',
      description: 'Bezplatná kalkulačka nákladov na poradu so živým časovačom. Zadajte hodinovú sadzbu a počet účastníkov a sledujte, koľko porada stojí, sekundu po sekunde.',
      card: 'Sledujte, ako cena porady rastie v reálnom čase, kým rozprávate.',
      tag: 'Živý časovač',
      lead: 'Nastavte hodinovú sadzbu a počet ľudí, stlačte Spustiť a sledujte, koľko porada stojí, priamo počas nej.',
      pulseEvery: '1',
      rate: {
        label: 'Hodinová sadzba',
        unit: '€ na osobu',
        step: '5',
        value: '25',
        decrease: 'Znížiť hodinovú sadzbu',
        increase: 'Zvýšiť hodinovú sadzbu'
      },
      persons: {
        label: 'Účastníci',
        unit: 'osôb',
        decrease: 'Znížiť počet účastníkov',
        increase: 'Zvýšiť počet účastníkov'
      },
      perMinute: 'Za minútu',
      perHour: 'Za hodinu',
      note: 'Hodnoty môžete meniť aj počas behu časovača. Príchody a odchody účastníkov sa započítavajú od okamihu zmeny.',
      total: 'Celková cena',
      elapsed: 'Uplynutý čas',
      reset: 'Vynulovať',
      copyReport: 'Kopírovať správu',
      kbdHint: 'Klávesom <kbd>Medzerník</kbd> časovač spustíte alebo pozastavíte',
      runtime: {
        mode: { start: 'Spustiť', pause: 'Pozastaviť', resume: 'Pokračovať' },
        status: { ready: 'Pripravené', live: 'Beží', paused: 'Pozastavené' },
        announce: {
          invalid: 'Na spustenie zadajte hodinovú sadzbu a počet účastníkov.',
          started: 'Časovač spustený.',
          paused: 'Pozastavené po {time} pri sume {cost}.',
          reset: 'Časovač vynulovaný.'
        },
        report: {
          cost: 'Cena porady: {cost}',
          duration: 'Trvanie: {time}',
          participants: 'Účastníci: {persons} × {rate}/h'
        }
      },
      about: {
        title: 'Ako sa počíta cena porady',
        paragraphs: [
          'Kalkulačka násobí počet účastníkov ich hodinovou sadzbou a uplynutým časom. Hodinová porada piatich ľudí so sadzbou 25 € za hodinu stojí 125 € – to je asi 2,08 € každú minútu.',
          'Ako hodinovú sadzbu použite to, koľko hodina práce skutočne stojí zamestnávateľa, nie len mzdu. Na Slovensku platí zamestnávateľ k hrubej mzde navyše odvody na sociálne a zdravotné poistenie vo výške vyše 35 % a k tomu prichádzajú ďalšie náklady, napríklad stravné, benefity alebo vybavenie pracoviska. Ak nepoznáte sadzbu každého, stačí priemer za celý tím.',
          'Časovač počíta správne aj na karte na pozadí a priebežná cena sa zobrazuje v názve karty prehliadača, takže ju máte na očiach, aj keď zdieľate obrazovku. Po skončení porady časovač pozastavte a skopírujte krátku správu do zápisnice.'
        ]
      },
      faq: [
        {
          q: 'Ako vypočítať náklady na poradu?',
          a: 'Vynásobte počet účastníkov ich priemernou hodinovou sadzbou a dĺžkou porady v hodinách. Napríklad 6 ľudí × 30 € za hodinu × 1,5 hodiny = 270 €. Táto kalkulačka počíta naživo priamo počas porady.'
        },
        {
          q: 'Akú hodinovú sadzbu použiť?',
          a: 'Použite celkové náklady na hodinu práce: hrubú hodinovú mzdu plus odvody zamestnávateľa na sociálne a zdravotné poistenie a ďalšie náklady spojené so zamestnaním. Pri konzultantoch a živnostníkoch použite ich fakturačnú sadzbu.'
        },
        {
          q: 'Môžem počas porady zmeniť počet účastníkov?',
          a: 'Áno. Počet ľudí aj sadzbu môžete zmeniť kedykoľvek. Nové hodnoty sa počítajú od tej chvíle a suma, ktorá sa už nazbierala, zostane nezmenená.'
        },
        {
          q: 'Beží časovač ďalej, aj keď prepnem na inú kartu?',
          a: 'Áno. Časovač vychádza zo systémových hodín, takže súčet zostane správny aj na karte na pozadí. Kým časovač beží, stránka tiež žiada prehliadač, aby nevypínal obrazovku.'
        }
      ]
    },

    workhours: {
      name: 'Hodiny práce',
      heading: 'Kalkulačka ceny v hodinách práce',
      title: 'Prepočet ceny na hodiny práce – koľko musím odpracovať',
      description: 'Premeňte akúkoľvek cenu na hodiny, dni a týždne práce. Zadajte hodinovú, mesačnú alebo ročnú mzdu a zistite, koľko pracovného času vás nákup naozaj stojí.',
      card: 'Premeňte akúkoľvek cenu na hodiny, dni a týždne, ktoré na ňu musíte odpracovať.',
      tag: 'Práca',
      lead: 'Zadajte svoj zárobok a cenu a uvidíte, ako dlho na ňu musíte pracovať.',
      period: {
        label: 'Poznám svoj zárobok',
        hour: 'Za hodinu',
        month: 'Za mesiac',
        year: 'Za rok'
      },
      pay: {
        label: 'Mzda',
        unit: '€ za hodinu',
        value: '8',
        step: '0.5',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Najrealistickejší výsledok dostanete s čistou mzdou po zdanení.',
        decrease: 'Znížiť mzdu',
        increase: 'Zvýšiť mzdu'
      },
      hoursPerWeek: {
        label: 'Hodín týždenne',
        unit: 'hodín',
        value: '40',
        chip1: '37,5 h',
        chip2: '40 h',
        preset1: '37.5',
        preset2: '40',
        decrease: 'Znížiť počet hodín týždenne',
        increase: 'Zvýšiť počet hodín týždenne'
      },
      price: {
        label: 'Cena',
        unit: '€',
        value: '999',
        step: '10',
        decrease: 'Znížiť cenu',
        increase: 'Zvýšiť cenu'
      },
      resultsTitle: 'Cena v pracovnom čase',
      youNeedToWork: 'Musíte pracovať',
      workDays: 'Pracovné dni',
      workWeeks: 'Pracovné týždne',
      hourlyRate: 'Vaša hodinová mzda',
      runtime: {
        unit: {
          hour: '€ za hodinu',
          month: '€ za mesiac',
          year: '€ za rok'
        },
        days: { one: '{n} deň', few: '{n} dni', many: '{n} dňa', other: '{n} dní' },
        weeks: { one: '{n} týždeň', few: '{n} týždne', many: '{n} týždňa', other: '{n} týždňov' },
        note: {
          empty: 'Zadajte mzdu, počet hodín týždenne a cenu a uvidíte, ako dlho na ňu musíte pracovať.',
          result: 'Počítané s pracovným časom {hours} h denne, {days} dní v týždni.'
        }
      },
      about: {
        title: 'Ako sa počíta pracovný čas',
        paragraphs: [
          'Najprv sa váš zárobok prepočíta na hodinovú mzdu. Mesačná mzda sa vynásobí 12 a vydelí počtom hodín odpracovaných za rok (hodiny týždenne × 52); ročná mzda sa týmto počtom hodín vydelí priamo. Cena sa potom vydelí hodinovou mzdou.',
          'Pracovné dni počítajú s päťdňovým týždňom, takže 40 hodín týždenne znamená osemhodinové dni. Napríklad pri 8 € za hodinu vás telefón za 999 € stojí takmer 125 hodín práce – viac ako tri celé pracovné týždne.',
          'Najrealistickejší výsledok dostanete s čistou mzdou po zdanení, pretože to sú peniaze, ktoré skutočne míňate. Premýšľať o cenách v hodinách práce je jednoduchý spôsob, ako sa rozhodnúť, či niečo naozaj stojí za to.'
        ]
      },
      faq: [
        {
          q: 'Koľko hodín musím na nákup odpracovať?',
          a: 'Vydeľte cenu svojou čistou hodinovou mzdou. Ak si po zdanení zarobíte 8 € za hodinu, nákup za 240 € vás stojí 30 hodín práce.'
        },
        {
          q: 'Mám použiť hrubú, alebo čistú mzdu?',
          a: 'Čistá mzda po zdanení dáva najrealistickejší výsledok, pretože to sú peniaze, ktoré máte skutočne k dispozícii. S hrubou mzdou vyzerajú veci lacnejšie, než v skutočnosti sú.'
        },
        {
          q: 'Ako prepočítať mesačnú mzdu na hodinovú?',
          a: 'Vynásobte mesačnú mzdu 12 a výsledok vydeľte počtom hodín odpracovaných za rok. Pri 40-hodinovom týždni je to 2 080 hodín, takže čistých 1 400 € mesačne zodpovedá zhruba 8 € za hodinu. Kalkulačka to vypočíta za vás, keď zvolíte Za mesiac.'
        }
      ]
    },

    costperuse: {
      name: 'Cena za použitie',
      heading: 'Kalkulačka ceny za použitie',
      title: 'Kalkulačka ceny za použitie – oplatí sa nákup?',
      description: 'Vypočítajte, koľko vás nákup naozaj stojí pri každom použití: cena mínus suma, za ktorú vec predáte, vydelená tým, ako často a ako dlho ju používate.',
      card: 'Rozpočítajte cenu na každé použitie a zistite, či sa nákup oplatí.',
      tag: 'Nákupy',
      lead: 'Zadajte cenu a to, ako často a ako dlho budete vec používať, a uvidíte, koľko naozaj stojí každé použitie.',
      price: {
        label: 'Cena',
        unit: '€',
        value: '500',
        step: '10',
        decrease: 'Znížiť cenu',
        increase: 'Zvýšiť cenu'
      },
      period: {
        label: 'Ako často vec používate',
        week: 'Týždenne',
        month: 'Mesačne',
        year: 'Ročne'
      },
      uses: {
        label: 'Počet použití',
        unit: 'krát týždenne',
        decrease: 'Znížiť počet použití',
        increase: 'Zvýšiť počet použití'
      },
      years: {
        label: 'Doba používania',
        unit: 'rokov',
        chip1: '1 rok',
        chip2: '3 roky',
        chip3: '5 rokov',
        decrease: 'Skrátiť dobu používania',
        increase: 'Predĺžiť dobu používania'
      },
      resale: {
        label: 'Hodnota pri predaji',
        unit: '€, nepovinné',
        hint: 'Koľko za vec pravdepodobne dostanete, keď ju predáte. Ak nič, nechajte 0.',
        decrease: 'Znížiť hodnotu pri predaji',
        increase: 'Zvýšiť hodnotu pri predaji'
      },
      resultsTitle: 'Cena za použitie',
      perUse: 'Jedno použitie stojí',
      totalUses: 'Použití celkom',
      perMonth: 'Za mesiac',
      perYear: 'Za rok',
      runtime: {
        unit: {
          week: 'krát týždenne',
          month: 'krát mesačne',
          year: 'krát ročne'
        },
        note: {
          empty: 'Zadajte cenu, ako často vec používate a koľko rokov. Hodnota pri predaji musí byť nižšia ako cena.',
          result: 'Keby ste vec používali o rok dlhšie, cena za použitie by klesla na {next}.'
        }
      },
      about: {
        title: 'Ako sa počíta cena za použitie',
        paragraphs: [
          'Cena za použitie je cena znížená o to, čo dostanete späť pri predaji, vydelená počtom použití. Počet použití je to, ako často vec používate, × počet týždňov, mesiacov alebo rokov, počas ktorých ju používate. Nákup za 500 € používaný 3-krát týždenne počas 3 rokov sa použije 468-krát a jedno použitie vyjde na 1,07 €.',
          'Mesačné a ročné náklady rozpočítavajú rovnakú sumu na obdobie, počas ktorého vec vlastníte, takže ľahko porovnáte kúpu s prenájmom, lízingom alebo predplatným.',
          'Cena za použitie je jednoduchý spôsob, ako porovnať lacnú vec, ktorá sa rýchlo opotrebuje, s drahšou, ktorá vydrží. Topánky za 60 € nosené 50-krát vyjdú na 1,20 € za jedno nosenie, topánky za 200 € nosené 400-krát na 0,50 €.'
        ]
      },
      faq: [
        {
          q: 'Ako vypočítať cenu za použitie?',
          a: 'Vydeľte cenu počtom použití. Ak vec potom predáte, najprv od ceny odpočítajte sumu, ktorú za ňu dostanete. Bunda za 120 € nosená 80-krát vyjde na 1,50 € za jedno nosenie.'
        },
        {
          q: 'Aká cena za použitie je dobrá?',
          a: 'Závisí od toho, koľko stojí alternatíva. Porovnajte ju s prenájmom, požičaním alebo platením za každé použitie: ak jednorazový vstup do posilňovne stojí 8 €, mesačné členstvo za 35 € sa oplatí od piatej návštevy v mesiaci.'
        },
        {
          q: 'Funguje to aj pre predplatné a členstvá?',
          a: 'Áno. Ako cenu zadajte ročnú cenu, ďalej to, ako často službu využívate, a 1 rok. Pri mesačnom členstve v posilňovni za 35 € zadajte 420 € a počet návštev týždenne.'
        }
      ]
    },

    coffee: {
      name: 'Cena kávy',
      heading: 'Kalkulačka ceny kávy',
      title: 'Kalkulačka ceny kávy – koľko miniete za kávu za rok',
      description: 'Zistite, koľko vás denná káva stojí mesačne a za 1, 5 a 10 rokov. Zadajte cenu jednej šálky a počet šálok týždenne – zadarmo a súkromne.',
      card: 'Pozrite sa, na koľko vás denná šálka kávy vyjde za rok, päť a desať rokov.',
      tag: 'Zvyk',
      lead: 'Zadajte, koľko stojí šálka a ako často si ju kupujete, a uvidíte, koľko vás tento zvyk stojí v priebehu rokov.',
      price: {
        label: 'Cena šálky',
        unit: '€',
        step: '0.1',
        value: '2.5',
        decrease: 'Znížiť cenu kávy',
        increase: 'Zvýšiť cenu kávy'
      },
      perWeek: {
        label: 'Šálok týždenne',
        unit: 'šálok',
        chip1: 'Pracovné dni',
        chip2: 'Každý deň',
        chip3: 'Dvakrát denne',
        decrease: 'Znížiť počet šálok týždenne',
        increase: 'Zvýšiť počet šálok týždenne'
      },
      resultsTitle: 'Koľko to robí dokopy',
      in10Years: 'Za 10 rokov',
      perMonth: 'Za mesiac',
      year1: '1 rok',
      year5: '5 rokov',
      runtime: {
        note: {
          empty: 'Zadajte cenu a počet šálok týždenne a uvidíte súčty.',
          result: 'To je zhruba {cups} šálok ročne po {price}.'
        }
      },
      about: {
        title: 'Ako sa počíta cena kávy',
        paragraphs: [
          'Ročná cena je cena šálky × počet šálok týždenne × 52 týždňov. Mesačná cena je ročná cena vydelená 12 a súčty za 5 a 10 rokov násobia ročnú cenu bez inflácie a zdražovania.',
          'Káva za 2,50 € každý pracovný deň vyjde na 650 € ročne a 6 500 € za desať rokov. Ak vás to číslo prekvapí, ľahko ušetríte s kávou uvarenou doma alebo s vlastným termohrnčekom.',
          'Kalkulačka funguje pre akýkoľvek malý pravidelný nákup: energetický nápoj, bagetu na obed alebo fľašu vody. Zadajte jeho cenu a počet nákupov týždenne.'
        ]
      },
      faq: [
        {
          q: 'Koľko stojí denná káva za rok?',
          a: 'Jedna šálka denne, sedem dní v týždni, je 364 šálok ročne. Pri cene 2,50 € za šálku to robí 910 € ročne a 9 100 € za desať rokov.'
        },
        {
          q: 'Je lacnejšie variť kávu doma?',
          a: 'Zvyčajne výrazne. Šálka uvarená doma často vyjde pod 30 centov, kým v kaviarni zaplatíte 2 až 3 eurá. Zadajte cenu domácej šálky a porovnajte.'
        },
        {
          q: 'Počíta kalkulačka s infláciou?',
          a: 'Nie. Výpočty predpokladajú, že cena zostane rovnaká, takže ukazujú cenu zvyku v dnešných cenách. Keď ceny rastú, skutočné dlhodobé náklady sú vyššie.'
        },
        {
          q: 'Čo ak budem peniaze namiesto toho investovať?',
          a: 'Rámček „Keby ste peniaze namiesto toho investovali“ ukazuje, na koľko by peniaze narástli, keby ste ich namiesto míňania každý mesiac investovali s ročným zhodnotením 4 % pri mesačnom úročení. Káva za 2,50 € každý pracovný deň robí 54,17 € mesačne, čo za 10 rokov narastie zhruba na 7 950 € – z toho 6 500 € sú vaše vlastné peniaze a zvyšok tvorí výnos. Dane, poplatky ani inflácia sa nezapočítavajú. Ide len o príklad, nie o investičné poradenstvo.'
        }
      ]
    },

    smoking: {
      name: 'Cena fajčenia',
      heading: 'Kalkulačka nákladov na fajčenie',
      title: 'Kalkulačka fajčenia – koľko stoja cigarety a koľko ušetríte',
      description: 'Vypočítajte, koľko vás fajčenie stojí mesačne a za 1, 5 a 10 rokov – a koľko ušetríte, keď prestanete. Zadajte cenu škatuľky a počet cigariet denne.',
      card: 'Zistite, koľko peňazí vám každý mesiac a v priebehu rokov doslova zhorí.',
      tag: 'Zvyk',
      lead: 'Zadajte cenu škatuľky a koľko toho vyfajčíte, a uvidíte, koľko peňazí vám v priebehu rokov vyletí komínom.',
      packPrice: {
        label: 'Cena škatuľky',
        unit: '€',
        step: '0.1',
        value: '5.5',
        decrease: 'Znížiť cenu škatuľky',
        increase: 'Zvýšiť cenu škatuľky'
      },
      perDay: {
        label: 'Cigariet denne',
        unit: 'cigariet',
        chip1: '5 denne',
        chip2: '10 denne',
        chip3: '20 denne',
        decrease: 'Znížiť počet cigariet denne',
        increase: 'Zvýšiť počet cigariet denne'
      },
      perPack: {
        label: 'Cigariet v škatuľke',
        unit: 'kusov v balení',
        value: '20',
        decrease: 'Znížiť počet cigariet v škatuľke',
        increase: 'Zvýšiť počet cigariet v škatuľke'
      },
      resultsTitle: 'Vyletí komínom',
      in10Years: 'Za 10 rokov',
      perMonth: 'Za mesiac',
      year1: '1 rok',
      year5: '5 rokov',
      runtime: {
        note: {
          empty: 'Zadajte cenu škatuľky, koľko cigariet denne vyfajčíte a koľko ich je v škatuľke, a uvidíte súčty.',
          result: 'To je zhruba {cigarettes} cigariet ({packs} škatuliek) ročne po {price} za kus.'
        }
      },
      about: {
        title: 'Ako sa počíta cena fajčenia',
        paragraphs: [
          'Cena jednej cigarety je cena škatuľky vydelená počtom cigariet v škatuľke. Tá sa vynásobí počtom cigariet vyfajčených za deň a 365 dňami, a tak vznikne ročná cena. Mesačná cena je jej dvanástina a súčty za 5 a 10 rokov počítajú s dnešnými cenami.',
          'Pol škatuľky denne pri cene 5,50 € za škatuľku vyjde zhruba na 1 000 € ročne a viac ako 10 000 € za desať rokov. Vidieť celkovú sumu môže byť silná motivácia: za rovnaké peniaze môžete ísť na dovolenku, sporiť alebo splatiť dlhy.',
          'Kalkulačka počíta len s cenou cigariet. Náklady na zdravie, vyššie poistné a dni pracovnej neschopnosti prichádzajú navyše. Ak chcete s fajčením prestať, pomôže vám váš lekár alebo poradňa pre odvykanie od fajčenia.'
        ]
      },
      faq: [
        {
          q: 'Koľko stojí škatuľka denne za rok?',
          a: 'Škatuľka denne je 365 škatuliek ročne. Pri cene 5,50 € za škatuľku to robí 2 007,50 € ročne a 20 075 € za desať rokov.'
        },
        {
          q: 'Koľko ušetrím, keď prestanem fajčiť?',
          a: 'Všetko, čo táto kalkulačka ukazuje. Zadajte, koľko fajčíte dnes: mesačné a ročné súčty sú sumy, ktoré ušetríte, keď prestanete.'
        },
        {
          q: 'Funguje kalkulačka aj pre tabak na šúľanie?',
          a: 'Áno. Ako cenu škatuľky zadajte cenu balíčka tabaku, ako počet cigariet v škatuľke to, koľko cigariet z neho ušúľate, a nakoniec počet cigariet, ktoré denne vyfajčíte.'
        },
        {
          q: 'Čo ak budem peniaze namiesto toho investovať?',
          a: 'Rámček „Keby ste peniaze namiesto toho investovali“ ukazuje, na koľko by peniaze narástli, keby ste ich namiesto fajčenia každý mesiac investovali s ročným zhodnotením 4 % pri mesačnom úročení. Pol škatuľky denne pri cene 5,50 € za škatuľku je zhruba 84 € mesačne, čo za 10 rokov narastie zhruba na 12 270 € – z toho 10 037,50 € sú vaše vlastné peniaze a zvyšok tvorí výnos. Dane, poplatky ani inflácia sa nezapočítavajú. Ide len o príklad, nie o investičné poradenstvo.'
        }
      ]
    },

    alcohol: {
      name: 'Cena alkoholu',
      heading: 'Kalkulačka nákladov na alkohol',
      title: 'Kalkulačka nákladov na alkohol – koľko vás stojí pitie',
      description: 'Zistite, koľko vás pivo, víno a ďalšie nápoje stoja mesačne a za 1, 5 a 10 rokov a na koľko by rovnaké peniaze narástli, keby ste ich investovali.',
      card: 'Pozrite sa, na koľko vás alkohol vyjde za rok, päť a desať rokov.',
      tag: 'Zvyk',
      lead: 'Zadajte, koľko stojí jeden nápoj a koľko ich týždenne vypijete, a uvidíte, koľko to robí v priebehu rokov.',
      price: {
        label: 'Cena jedného nápoja',
        unit: '€',
        step: '0.1',
        value: '2.5',
        hint: 'Pijete doma aj vonku? Použite priemernú cenu.',
        decrease: 'Znížiť cenu nápoja',
        increase: 'Zvýšiť cenu nápoja'
      },
      perWeek: {
        label: 'Nápojov týždenne',
        unit: 'nápojov',
        chip1: '3 týždenne',
        chip2: '7 týždenne',
        chip3: '14 týždenne',
        decrease: 'Znížiť počet nápojov týždenne',
        increase: 'Zvýšiť počet nápojov týždenne'
      },
      resultsTitle: 'Koľko to robí dokopy',
      in10Years: 'Za 10 rokov',
      perMonth: 'Za mesiac',
      year1: '1 rok',
      year5: '5 rokov',
      runtime: {
        note: {
          empty: 'Zadajte cenu a počet nápojov týždenne a uvidíte súčty.',
          result: 'To je zhruba {drinks} nápojov ročne po {price}.'
        }
      },
      about: {
        title: 'Ako sa počítajú náklady na alkohol',
        paragraphs: [
          'Ročné náklady sú cena jedného nápoja × počet nápojov týždenne × 52 týždňov. Mesačné náklady sú ich dvanástina a súčty za 5 a 10 rokov počítajú s dnešnými cenami bez inflácie.',
          'Šesť pív týždenne po 2,50 € vyjde na 780 € ročne a 7 800 € za desať rokov. Ak pijete v krčme aj doma, použite priemernú cenu, alebo vypočítajte oboje zvlášť a výsledky sčítajte.',
          'Rámček „Keby ste peniaze namiesto toho investovali“ ukazuje, na koľko by rovnaké peniaze narástli, keby ste ich každý mesiac investovali s ročným zhodnotením 4 % počas 10 rokov. Kalkulačka počíta len s cenou nápojov; vplyv na zdravie prichádza navyše. Ak chcete piť menej, pomôže vám váš lekár alebo poradňa či linka pomoci zameraná na problémy s alkoholom.'
        ]
      },
      faq: [
        {
          q: 'Koľko ročne miniem za alkohol?',
          a: 'Vynásobte cenu jedného nápoja počtom nápojov týždenne a číslom 52. Šesť nápojov týždenne po 2,50 € robí 780 € ročne.'
        },
        {
          q: 'Koľko ušetrím, keď budem piť menej?',
          a: 'Zadajte počet nápojov, na ktorý chcete pitie obmedziť, a porovnajte. Keď namiesto 6 nápojov týždenne po 2,50 € vypijete len 3, ušetríte 390 € ročne a 3 900 € za desať rokov.'
        },
        {
          q: 'Čo ak budem peniaze namiesto toho investovať?',
          a: 'Rámček „Keby ste peniaze namiesto toho investovali“ ukazuje, koľko by ste mali po 10 rokoch, keby ste peniaze namiesto míňania každý mesiac investovali s ročným zhodnotením 4 % pri mesačnom úročení. Šesť nápojov po 2,50 € týždenne je 65 € mesačne, čo narastie zhruba na 9 540 € – z toho 7 800 € sú vaše vlastné peniaze a zvyšok tvorí výnos. Dane, poplatky ani inflácia sa nezapočítavajú. Ide len o príklad, nie o investičné poradenstvo.'
        }
      ]
    },

    gambling: {
      name: 'Lotérie a stávky',
      heading: 'Kalkulačka nákladov na lotérie a stávky',
      title: 'Kalkulačka lotérií a stávok – koľko vás stojí hazard',
      description: 'Zistite, koľko vás lotérie a stávky stoja mesačne a za 10 rokov, koľko v priemere prehráte a na koľko by vsadené peniaze narástli, keby ste ich investovali.',
      card: 'Pozrite sa, koľko robia lotérie a stávky dokopy a koľko v priemere prehráte.',
      tag: 'Zvyk',
      lead: 'Zadajte, koľko vsadíte a ako často hráte, a uvidíte, koľko vás lotérie a stávky stoja v priebehu rokov – a koľko sa vám z toho v priemere vráti na výhrach.',
      stake: {
        label: 'Vklad na jednu hru',
        unit: '€',
        step: '1',
        value: '5',
        decrease: 'Znížiť vklad',
        increase: 'Zvýšiť vklad'
      },
      perWeek: {
        label: 'Počet hier týždenne',
        unit: 'hier',
        chip1: 'Raz týždenne',
        chip2: 'Dvakrát týždenne',
        chip3: 'Každý deň',
        decrease: 'Znížiť počet hier týždenne',
        increase: 'Zvýšiť počet hier týždenne'
      },
      payout: {
        label: 'Výherný podiel',
        unit: '% sa vráti',
        chip1: 'Lotéria',
        chip2: 'Športové stávky',
        chip3: 'Kasíno',
        hint: 'Podiel všetkých vkladov, ktorý sa hráčom vyplatí späť na výhrach. Lotérie zvyčajne vracajú zhruba polovicu, športové stávky a kasínové hry 90–97 %.',
        decrease: 'Znížiť výherný podiel',
        increase: 'Zvýšiť výherný podiel'
      },
      resultsTitle: 'Koľko to stojí',
      in10Years: 'Vsadené za 10 rokov',
      perMonth: 'Za mesiac',
      perYear: 'Za rok',
      lossPerYear: 'Priemerná strata za rok',
      runtime: {
        note: {
          empty: 'Zadajte vklad, počet hier týždenne a výherný podiel (0–100).',
          result: 'V priemere sa vám na výhrach vráti zhruba {back} ročne, takže prehráte asi {loss} ročne a {loss10} za 10 rokov.'
        }
      },
      about: {
        title: 'Ako sa počítajú náklady na lotérie a stávky',
        paragraphs: [
          'Ročné náklady sú vklad × počet hier týždenne × 52 týždňov. Mesačné náklady sú ich dvanástina a súčet za 10 rokov počíta s dnešnými vkladmi.',
          'Výherný podiel je časť všetkých vkladov, ktorá sa hráčom vyplatí späť na výhrach. Pri výhernom podiele 50 % robí vklad 5 € dvakrát týždenne 520 € ročne, z čoho sa v priemere vráti zhruba 260 € na výhrach – priemerná strata je teda 260 € ročne. Jednotlivý hráč môže vyhrať veľa alebo prísť o všetko, ale čím viac hier, tým viac sa výsledok blíži k priemeru.',
          'Rámček „Keby ste peniaze namiesto toho investovali“ ukazuje, na koľko by vklady narástli, keby ste ich namiesto stávkovania každý mesiac investovali s ročným zhodnotením 4 % počas 10 rokov. Ak máte pocit, že hranie nemáte pod kontrolou, pomôže vám váš lekár alebo poradňa či linka pomoci zameraná na problémové hráčstvo.'
        ]
      },
      faq: [
        {
          q: 'Koľko ročne miniem na lotériu?',
          a: 'Vynásobte vklad počtom hier týždenne a číslom 52. Pri vklade 5 € dvakrát týždenne, napríklad v hrách Loto alebo Eurojackpot, to robí 520 € ročne a 5 200 € za desať rokov.'
        },
        {
          q: 'Čo je výherný podiel?',
          a: 'Je to časť všetkých vkladov, ktorá sa hráčom vyplatí späť na výhrach. Lotérie zvyčajne vracajú zhruba polovicu vkladov, športové stávky a kasínové hry 90–97 %. Zvyšok si ponechá prevádzkovateľ – a práve o toľko hráči v priemere prídu.'
        },
        {
          q: 'Čo ak budem peniaze namiesto toho investovať?',
          a: 'Rámček „Keby ste peniaze namiesto toho investovali“ ukazuje, koľko by ste mali po 10 rokoch, keby ste vklady namiesto stávkovania každý mesiac investovali s ročným zhodnotením 4 % pri mesačnom úročení. Vklad 5 € dvakrát týždenne je zhruba 43,33 € mesačne, čo narastie zhruba na 6 360 € – z toho 5 200 € sú vaše vlastné peniaze a zvyšok tvorí výnos. Dane, poplatky ani inflácia sa nezapočítavajú. Ide len o príklad, nie o investičné poradenstvo.'
        }
      ]
    },

    subscriptions: {
      name: 'Predplatné',
      heading: 'Kalkulačka predplatného',
      title: 'Kalkulačka predplatného – koľko platíte mesačne a ročne',
      description: 'Sčítajte streamovacie služby, posilňovňu, mobilný paušál a všetky ďalšie predplatné. Uvidíte súčet za mesiac, rok aj 10 rokov a ktoré predplatné je najdrahšie.',
      card: 'Sčítajte streaming, posilňovňu a všetky ďalšie pravidelné platby na jednom mieste.',
      tag: 'Rozpočet',
      lead: 'Vypíšte všetko, za čo pravidelne platíte, a uvidíte, koľko to robí dokopy. Počíta s mesačnými, ročnými aj týždennými platbami.',
      listTitle: 'Vaše predplatné',
      empty: 'Zatiaľ žiadne predplatné. Pridajte nejaké nižšie alebo použite rýchle pridanie.',
      add: 'Pridať predplatné',
      quickAdd: 'Rýchle pridanie',
      quick: {
        1: { name: 'Videostreaming', price: '11.99' },
        2: { name: 'Hudobný streaming', price: '7.99' },
        3: { name: 'Posilňovňa', price: '35' },
        4: { name: 'Cloudové úložisko', price: '1.99' },
        5: { name: 'Mobilný paušál', price: '15' },
        6: { name: 'Spravodajstvo', price: '6.99' }
      },
      note: 'Zoznam sa ukladá do adresy stránky, takže si ho môžete uložiť do záložiek alebo ho zdieľať. Nikam sa neodosiela.',
      row: {
        name: 'Názov',
        nameLabel: 'Názov predplatného',
        priceLabel: 'Cena v €',
        cycleLabel: 'Obdobie platby',
        monthly: '/ mesiac',
        yearly: '/ rok',
        weekly: '/ týždeň'
      },
      resultsTitle: 'Predplatné spolu',
      perYear: 'Za rok',
      perMonth: 'Za mesiac',
      perDay: 'Za deň',
      in10Years: 'Za 10 rokov',
      breakdownLabel: 'Ročná cena jednotlivých predplatných',
      copySummary: 'Kopírovať súhrn',
      runtime: {
        untitled: 'Bez názvu',
        remove: 'Odstrániť {name}',
        removeUnnamed: 'Odstrániť predplatné',
        breakdown: '{cost} / rok · {percent} %',
        cycle: { monthly: 'mesiac', yearly: 'rok', weekly: 'týždeň' },
        note: {
          empty: 'Pridajte predplatné s cenou a uvidíte súčty.',
          single: '{name} vás stojí {cost} ročne.',
          biggest: 'Najviac vás stojí {name}: {cost} ročne, teda {percent} % z celku.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Spolu: {month} mesačne, {year} ročne'
        }
      },
      about: {
        title: 'Ako sa počíta súčet predplatného',
        paragraphs: [
          'Každé predplatné sa prepočíta na ročnú cenu: mesačné ceny sa násobia 12, týždenné 52 a ročné sa použijú tak, ako sú. Ročný súčet sa potom vydelí 12 pre mesačnú cenu a 365 pre dennú cenu.',
          'Prehľad zoradí predplatné od najdrahšieho po najlacnejšie a pri každom ukáže jeho podiel na celku, takže ľahko zistíte, čo zrušiť alebo prepnúť na lacnejší tarif.',
          'Zoznam sa ukladá do adresy stránky, nikdy na server. Uložte si stránku do záložiek, aby ste sa k zoznamu mohli neskôr vrátiť, alebo pošlite odkaz rodine a prejdite si spoločne, za čo všetko platíte.'
        ]
      },
      faq: [
        {
          q: 'Ako nájdem všetky svoje predplatné?',
          a: 'Prejdite si výpisy z bankového účtu a platobnej karty za posledných pár mesiacov a hľadajte opakované platby. Skontrolujte aj nastavenia predplatného v obchodoch App Store a Google Play a v službe PayPal.'
        },
        {
          q: 'Je ročné predplatné lacnejšie ako mesačné?',
          a: 'Často o 15–20 %, ale len ak by ste službu aj tak používali celý rok. Pridajte do zoznamu obe možnosti a porovnajte ich ročnú cenu.'
        },
        {
          q: 'Ukladá sa môj zoznam?',
          a: 'Zoznam je uložený len v adrese stránky. Ak si ho chcete ponechať, uložte si odkaz do záložiek alebo ho zdieľajte; nič sa neukladá na server ani do cookies.'
        },
        {
          q: 'Čo ak budem peniaze namiesto toho investovať?',
          a: 'Rámček „Keby ste peniaze namiesto toho investovali“ ukazuje, na koľko by narástli peniaze, ktoré dávate za predplatné, keby ste rovnakú sumu namiesto toho každý mesiac investovali s ročným zhodnotením 4 % pri mesačnom úročení. Suma 50 € mesačne za 10 rokov narastie zhruba na 7 335 € – z toho 6 000 € sú vaše vlastné peniaze a zvyšok tvorí výnos. Dane, poplatky ani inflácia sa nezapočítavajú. Ide len o príklad, nie o investičné poradenstvo.'
        }
      ]
    },

    electricity: {
      name: 'Cena elektriny',
      heading: 'Kalkulačka spotreby elektriny',
      title: 'Kalkulačka spotreby elektriny – cena prevádzky spotrebiča',
      description: 'Vypočítajte, koľko stojí prevádzka spotrebiča za deň, mesiac a rok podľa jeho príkonu, doby používania a ceny elektriny. Bezplatná kalkulačka ceny za kWh.',
      card: 'Pozrite sa, koľko stojí nechať spotrebič zapnutý – za deň, mesiac aj rok.',
      tag: 'Domácnosť',
      lead: 'Zadajte príkon spotrebiča, ako dlho beží a koľko platíte za elektrinu, a uvidíte, koľko jeho prevádzka naozaj stojí.',
      power: {
        label: 'Príkon',
        unit: 'wattov',
        chip1: 'LED žiarovka 9 W',
        chip2: 'Notebook 60 W',
        chip3: 'Televízor 100 W',
        chip4: 'Herné PC 400 W',
        chip5: 'Ohrievač 1 500 W',
        decrease: 'Znížiť príkon',
        increase: 'Zvýšiť príkon'
      },
      hours: {
        label: 'Hodín denne',
        unit: 'hodín',
        decrease: 'Znížiť počet hodín denne',
        increase: 'Zvýšiť počet hodín denne'
      },
      days: {
        label: 'Dní v týždni',
        unit: 'dní',
        decrease: 'Znížiť počet dní v týždni',
        increase: 'Zvýšiť počet dní v týždni'
      },
      kwhPrice: {
        label: 'Cena elektriny',
        unit: '€/kWh',
        value: '0.17',
        step: '0.01',
        divisor: '1',
        hint: 'Pre čo najpresnejší výsledok započítajte aj distribúciu, poplatky a DPH.',
        decrease: 'Znížiť cenu elektriny',
        increase: 'Zvýšiť cenu elektriny'
      },
      resultsTitle: 'Náklady na prevádzku',
      perYear: 'Za rok',
      perDayOfUse: 'Za deň prevádzky',
      perMonth: 'Za mesiac',
      energyPerYear: 'Spotreba za rok',
      runtime: {
        note: {
          empty: 'Zadajte príkon, počet hodín denne (najviac 24), počet dní v týždni (najviac 7) a cenu elektriny.',
          result: 'Spotrebuje asi {day} za každý deň prevádzky, zhruba {year} ročne.'
        }
      },
      about: {
        title: 'Ako sa počíta cena elektriny',
        paragraphs: [
          'Spotreba energie v kilowatthodinách (kWh) je príkon vo wattoch × doba prevádzky v hodinách ÷ 1 000. Televízor s príkonom 100 W zapnutý 4 hodiny denne spotrebuje 0,4 kWh. Keď to vynásobíte cenou elektriny za kWh, dostanete cenu za deň prevádzky – pri 0,17 € za kWh je to asi 0,07 €.',
          'Ročná cena zohľadňuje, koľko dní v týždni spotrebič beží, a počíta s 365 dňami v roku. Mesačná cena je dvanástina ročnej ceny.',
          'Príkon nájdete na typovom štítku spotrebiča alebo v návode. Mnohé spotrebiče väčšinu času odoberajú menej, ako je ich maximálny príkon, takže výsledok je horný odhad. Najpresnejšiu cenu dostanete, keď okrem ceny silovej elektriny započítate aj distribúciu, ďalšie regulované poplatky a DPH.'
        ]
      },
      faq: [
        {
          q: 'Ako vypočítať, koľko spotrebič stojí na elektrine?',
          a: 'Vynásobte príkon v kilowattoch dobou prevádzky v hodinách a cenou za kWh. Ohrievač s príkonom 1 500 W zapnutý na 3 hodiny stojí 1,5 kW × 3 h × 0,17 € = asi 0,77 € denne.'
        },
        {
          q: 'Koľko kWh spotrebič spotrebuje?',
          a: 'Vydeľte príkon vo wattoch číslom 1 000 a vynásobte počtom hodín prevádzky. Notebook s príkonom 60 W používaný 8 hodín denne spotrebuje 0,48 kWh denne – zhruba 175 kWh ročne, ak ho používate každý deň.'
        },
        {
          q: 'Akú cenu elektriny použiť?',
          a: 'Použite celkovú cenu za kWh z vyúčtovacej faktúry: cenu silovej elektriny, distribúciu, ďalšie regulované poplatky (napríklad odvod do Národného jadrového fondu) a DPH. Dobrý priemer získate, keď celkovú sumu faktúry vydelíte počtom spotrebovaných kWh.'
        },
        {
          q: 'Spotrebúva elektrinu aj pohotovostný režim?',
          a: 'Áno, mnohé spotrebiče odoberajú v pohotovostnom režime (stand-by) niekoľko wattov. Zadajte príkon v pohotovostnom režime a 24 hodín denne a uvidíte, koľko to stojí za rok.'
        }
      ]
    },

    trip: {
      name: 'Cena cesty',
      heading: 'Kalkulačka nákladov na palivo',
      title: 'Kalkulačka nákladov na benzín – cesta autom a dochádzanie',
      description: 'Vypočítajte náklady na palivo za cestu alebo každodenné dochádzanie a rozdeľte ich medzi spolucestujúcich. Funguje v kilometroch a litroch aj v míľach a galónoch.',
      card: 'Vypočítajte náklady na palivo za cestu alebo dochádzanie a rozdeľte ich s ostatnými.',
      tag: 'Cestovanie',
      lead: 'Vypočítajte náklady na palivo za jednu cestu alebo každodenné dochádzanie do práce a rozdeľte ich medzi všetkých v aute.',
      unit: {
        label: 'Jednotky',
        metric: 'Kilometre a litre',
        us: 'Míle a galóny'
      },
      distance: {
        label: 'Vzdialenosť',
        unit: 'km jedným smerom',
        decrease: 'Skrátiť vzdialenosť',
        increase: 'Predĺžiť vzdialenosť'
      },
      direction: {
        label: 'Cesta',
        one: 'Jedným smerom',
        round: 'Tam a späť'
      },
      consumption: {
        label: 'Spotreba paliva',
        unit: 'l/100 km',
        hint: 'Jazdíte elektromobilom? Zadajte kWh/100 km a cenu za kWh.',
        decrease: 'Znížiť spotrebu',
        increase: 'Zvýšiť spotrebu'
      },
      fuelPrice: {
        label: 'Cena paliva',
        unit: '€ za liter',
        value: '1.6',
        step: '0.05',
        usStep: '0.1',
        decrease: 'Znížiť cenu paliva',
        increase: 'Zvýšiť cenu paliva'
      },
      people: {
        label: 'Koľko ľudí sa delí o náklady',
        unit: 'osôb',
        decrease: 'Znížiť počet ľudí',
        increase: 'Zvýšiť počet ľudí'
      },
      tripsPerWeek: {
        label: 'Ciest týždenne',
        unit: 'pre mesačné a ročné súčty',
        decrease: 'Znížiť počet ciest týždenne',
        increase: 'Zvýšiť počet ciest týždenne'
      },
      resultsTitle: 'Náklady na palivo',
      perPerson: 'Na osobu',
      perMonth: 'Za mesiac',
      perYear: 'Za rok',
      runtime: {
        direction: { one: 'Jedným smerom', round: 'Tam a späť' },
        unit: {
          metric: {
            distance: 'km jedným smerom',
            consumption: 'l/100 km',
            price: '€ za liter',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'míľ jedným smerom',
            consumption: 'mpg',
            price: '€ za galón',
            perDistance: 'míľu',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Zadajte vzdialenosť, spotrebu a cenu paliva a uvidíte náklady.',
          result: 'Na jednu cestu spotrebujete {fuel} paliva, asi {price} na {distance}.'
        }
      },
      about: {
        title: 'Ako sa počíta cena cesty',
        paragraphs: [
          'Spotrebované palivo je vzdialenosť × spotreba ÷ 100. Keď dochádzate 25 km jedným smerom (50 km denne) autom so spotrebou 6,5 l/100 km, spotrebujete denne 3,25 litra paliva. Vynásobením cenou za liter získate cenu cesty – pri 1,60 € za liter je to 5,20 € – a vydelením počtom ľudí ju rozdelíte medzi spolucestujúcich.',
          'V míľach a galónoch sa spotrebované palivo počíta ako vzdialenosť vydelená hodnotou mpg (míle na galón). Prepnutím jednotiek sa zadané hodnoty prepočítajú, takže môžete porovnávať údaje z oboch sústav.',
          'Mesačné a ročné súčty vychádzajú z počtu ciest týždenne – 5 ciest tam a späť týždenne zodpovedá bežnému dochádzaniu do práce. Pri elektromobile zadajte namiesto toho spotrebu v kWh/100 km a cenu za kWh.'
        ]
      },
      faq: [
        {
          q: 'Ako vypočítať náklady na benzín za cestu?',
          a: 'Vynásobte vzdialenosť spotrebou a cenou paliva a vydeľte stom. Cesta dlhá 200 km autom so spotrebou 6 l/100 km s benzínom Natural 95 za 1,60 €/l vyjde na 200 × 6 ÷ 100 × 1,60 € = 19,20 €.'
        },
        {
          q: 'Ako rozdeliť náklady na palivo medzi spolucestujúcich?',
          a: 'Zadajte počet ľudí, ktorí sa o náklady delia. Kalkulačka rozdelí cenu cesty rovnakým dielom medzi všetkých vrátane vodiča.'
        },
        {
          q: 'Zahŕňa kalkulačka opotrebenie, parkovanie alebo diaľničnú známku?',
          a: 'Nie, počíta len palivo. Opotrebenie auta, poistenie, parkovanie a diaľničná známka sú navyše, takže celkové náklady na jazdu autom sú vyššie.'
        }
      ]
    }
  }
};
