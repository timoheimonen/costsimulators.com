// Czech texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in Czech koruna.

module.exports = {
  meta: {
    name: 'Čeština',
    locale: 'cs-CZ',
    currency: 'CZK',
    ogLocale: 'cs_CZ'
  },

  money: {
    symbol: 'Kč',
    zero: '0 Kč',
    placeholder: '0',
    decimals: '0'
  },

  common: {
    skip: 'Přejít na obsah',
    home: 'Domů',
    toggleTheme: 'Přepnout motiv',
    themeToLight: 'Přepnout na světlý motiv',
    themeToDark: 'Přepnout na tmavý motiv',
    language: 'Jazyk',
    allTools: 'Všechny nástroje',
    share: 'Sdílet',
    settings: 'Nastavení',
    quickPicks: 'Rychlá volba',
    faqTitle: 'Časté dotazy',
    relatedTools: 'Další kalkulačky',
    imageAlt: 'costsimulators.com – bezplatné kalkulačky pro každodenní otázky kolem peněz',
    invest: {
      label: 'Kdybyste peníze místo toho investovali'
    },
    receipt: {
      open: 'Vytisknout účtenku',
      title: 'Vaše účtenka',
      close: 'Zavřít',
      skip: 'Přejít na součet',
      total: 'Celkem',
      length: 'Délka účtenky',
      lengthNote: 'Při 4 mm na řádek, jako skutečná účtenka.',
      thanks: 'Děkujeme za 10 let věrnosti!',
      image: 'Sdílet jako obrázek'
    }
  },

  footer: {
    privacy: 'Vše běží ve vašem prohlížeči. Žádné cookies, žádné sledování.',
    about: 'O projektu',
    contact: 'Kontakt',
    privacyPolicy: 'Ochrana soukromí',
    terms: 'Podmínky'
  },

  runtime: {
    share: {
      linkCopied: 'Odkaz zkopírován',
      copyFailed: 'Kopírování se nezdařilo',
      copied: 'Zkopírováno!',
      calculatedWith: 'Spočítáno na costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    },
    invest: {
      note: '{monthly} měsíčně po dobu 10 let při zhodnocení {rate} ročně: vložíte celkem {paid} a výnos bude {gain}.'
    },
    receipt: {
      subtotal: 'Mezisoučet, rok {year}',
      year: 'Rok {year}',
      unit: 'meter',
      saved: 'Obrázek uložen'
    }
  },

  home: {
    title: 'Kalkulačky nákladů zdarma pro každý den',
    description: 'Bezplatné a soukromé kalkulačky, které ukážou, kolik věci doopravdy stojí: porady, hodiny práce, zvyky, předplatné, elektřina, benzín a cena za použití. Bez registrace, přímo v prohlížeči.',
    eyebrow: 'Zdarma · Soukromě · Okamžitě',
    heading: 'Malé nástroje na každodenní otázky kolem <span class="accent-text">peněz</span>.',
    lead: 'Rychlé kalkulačky, které ukážou, kolik věci doopravdy stojí. Bez registrace a bez sledování – všechno běží přímo ve vašem prohlížeči.',
    toolsTitle: 'Nástroje',
    toolCount: '{count} nástrojů',
    suggestTitle: 'Máte nápad?',
    suggestText: 'Navrhněte nový nástroj na GitHubu.',
    whyTitle: 'Malé výdaje se sčítají',
    whyText1: 'Jedna porada, káva cestou do práce nebo další streamovací služba se sama o sobě nezdá drahá. Když je ale sečtete za měsíc, rok nebo deset let, čísla vypadají úplně jinak.',
    whyText2: 'Každá kalkulačka dělá jednu věc, ptá se jen na čísla, která potřebuje, a výsledek ukáže okamžitě. Všechno se počítá ve vašem prohlížeči, takže vaše čísla zůstávají ve vašem zařízení.',
    aboutLink: 'Více o costsimulators.com',
    faq: [
      {
        q: 'Je costsimulators.com zdarma?',
        a: 'Ano. Všechny kalkulačky jsou úplně zdarma, bez registrace, bez placeného obsahu a bez reklam. Můžete je používat i v práci.'
      },
      {
        q: 'Ukládají se moje čísla nebo se někam odesílají?',
        a: 'Ne. Všechno, co zadáte, se počítá ve vašem prohlížeči a nikdy se neodesílá na server. Web nepoužívá cookies ani analytické nástroje.'
      },
      {
        q: 'Mohu výpočet sdílet?',
        a: 'Ano. Nastavení se ukládá do adresy stránky. Stiskněte Sdílet a zkopírujte odkaz – kdo ho otevře, uvidí stejný výpočet.'
      }
    ]
  },

  notFound: {
    title: 'Stránka nenalezena',
    description: 'Stránka, kterou hledáte, neexistuje.',
    heading: 'Tato stránka neexistuje.',
    lead: 'Adresa může obsahovat překlep, nebo se stránka přesunula. Všechny kalkulačky najdete na úvodní stránce.'
  },

  documents: {
    about: {
      name: 'O projektu',
      title: 'O projektu – bezplatné a soukromé kalkulačky nákladů',
      description: 'Kdo stojí za costsimulators.com a jak kalkulačky fungují. Bezplatné a soukromé kalkulačky nákladů na porady, hodiny práce, zvyky, nákupy, předplatné, elektřinu a cesty.'
    },
    privacy: {
      name: 'Zásady ochrany osobních údajů',
      title: 'Zásady ochrany osobních údajů',
      description: 'Jak costsimulators.com nakládá s vašimi údaji: výpočty probíhají ve vašem prohlížeči, bez sledování, bez analytiky a bez uživatelských účtů.'
    },
    terms: {
      name: 'Podmínky použití',
      title: 'Podmínky použití',
      description: 'Podmínky použití costsimulators.com: zdarma pro osobní i komerční účely, poskytováno tak, jak je, s otevřeným zdrojovým kódem pod licencí MIT.'
    }
  },

  tools: {
    meetings: {
      name: 'Cena porady',
      heading: 'Kalkulačka nákladů na poradu',
      title: 'Kalkulačka nákladů na poradu – kolik stojí porada',
      description: 'Bezplatná kalkulačka nákladů na poradu s živým časovačem. Zadejte hodinovou sazbu a počet účastníků a sledujte, kolik porada stojí, sekundu po sekundě.',
      card: 'Sledujte, jak cena porady roste v reálném čase, zatímco mluvíte.',
      tag: 'Živý časovač',
      lead: 'Nastavte hodinovou sazbu a počet lidí, stiskněte Spustit a sledujte, kolik porada stojí, přímo během ní.',
      pulseEvery: '10',
      rate: {
        label: 'Hodinová sazba',
        unit: 'Kč za osobu',
        step: '50',
        value: '500',
        decrease: 'Snížit hodinovou sazbu',
        increase: 'Zvýšit hodinovou sazbu'
      },
      persons: {
        label: 'Účastníci',
        unit: 'osob',
        decrease: 'Snížit počet účastníků',
        increase: 'Zvýšit počet účastníků'
      },
      perMinute: 'Za minutu',
      perHour: 'Za hodinu',
      note: 'Hodnoty můžete měnit i za běhu časovače. Příchody a odchody účastníků se počítají od okamžiku změny.',
      total: 'Celková cena',
      elapsed: 'Uplynulý čas',
      reset: 'Vynulovat',
      copyReport: 'Kopírovat zprávu',
      kbdHint: 'Klávesou <kbd>Mezerník</kbd> časovač spustíte nebo pozastavíte',
      runtime: {
        mode: { start: 'Spustit', pause: 'Pozastavit', resume: 'Pokračovat' },
        status: { ready: 'Připraveno', live: 'Běží', paused: 'Pozastaveno' },
        announce: {
          invalid: 'Pro spuštění zadejte hodinovou sazbu a počet účastníků.',
          started: 'Časovač spuštěn.',
          paused: 'Pozastaveno po {time} na částce {cost}.',
          reset: 'Časovač vynulován.'
        },
        report: {
          cost: 'Cena porady: {cost}',
          duration: 'Délka: {time}',
          participants: 'Účastníci: {persons} × {rate}/h'
        }
      },
      about: {
        title: 'Jak se počítá cena porady',
        paragraphs: [
          'Kalkulačka násobí počet účastníků jejich hodinovou sazbou a uplynulým časem. Hodinová porada pěti lidí se sazbou 500 Kč za hodinu stojí 2 500 Kč – to je asi 42 Kč každou minutu.',
          'Jako hodinovou sazbu použijte to, kolik hodina práce skutečně stojí zaměstnavatele, ne jen mzdu. V Česku platí zaměstnavatel navíc k hrubé mzdě sociální a zdravotní pojištění ve výši 33,8 % a k tomu přicházejí další náklady, třeba benefity nebo vybavení pracoviště. Pokud neznáte sazbu každého, stačí průměr za celý tým.',
          'Časovač počítá správně i na kartě na pozadí a průběžná cena se zobrazuje v názvu karty prohlížeče, takže ji máte na očích, i když sdílíte obrazovku. Po skončení porady časovač pozastavte a zkopírujte krátkou zprávu do zápisu.'
        ]
      },
      faq: [
        {
          q: 'Jak spočítat náklady na poradu?',
          a: 'Vynásobte počet účastníků jejich průměrnou hodinovou sazbou a délkou porady v hodinách. Například 6 lidí × 400 Kč za hodinu × 1,5 hodiny = 3 600 Kč. Tato kalkulačka počítá živě přímo během porady.'
        },
        {
          q: 'Jakou hodinovou sazbu použít?',
          a: 'Použijte celkové náklady na hodinu práce: hrubou hodinovou mzdu plus odvody zaměstnavatele na sociální a zdravotní pojištění a další náklady spojené se zaměstnáním. U konzultantů a externistů použijte jejich fakturační sazbu.'
        },
        {
          q: 'Mohu během porady změnit počet účastníků?',
          a: 'Ano. Počet lidí i sazbu můžete změnit kdykoli. Nové hodnoty se počítají od té chvíle a už naběhlá částka zůstane, jak byla.'
        },
        {
          q: 'Běží časovač dál, i když přepnu na jinou kartu?',
          a: 'Ano. Časovač vychází ze systémových hodin, takže součet zůstane správný i na kartě na pozadí. Dokud časovač běží, stránka také žádá prohlížeč, aby nezhasínal obrazovku.'
        }
      ]
    },

    workhours: {
      name: 'Hodiny práce',
      heading: 'Kalkulačka ceny v hodinách práce',
      title: 'Přepočet ceny na hodiny práce – kolik musím odpracovat',
      description: 'Převeďte jakoukoli cenu na hodiny, dny a týdny práce. Zadejte hodinovou, měsíční nebo roční mzdu a zjistěte, kolik pracovního času vás nákup doopravdy stojí.',
      card: 'Převeďte jakoukoli cenu na hodiny, dny a týdny, které na ni musíte odpracovat.',
      tag: 'Práce',
      lead: 'Zadejte svůj výdělek a cenu a uvidíte, jak dlouho na ni musíte pracovat.',
      period: {
        label: 'Znám svůj výdělek',
        hour: 'Za hodinu',
        month: 'Za měsíc',
        year: 'Za rok'
      },
      pay: {
        label: 'Mzda',
        unit: 'Kč za hodinu',
        value: '200',
        step: '10',
        monthStep: '1000',
        yearStep: '10000',
        hint: 'Nejpoctivější odpověď dostanete s čistou mzdou po zdanění.',
        decrease: 'Snížit mzdu',
        increase: 'Zvýšit mzdu'
      },
      hoursPerWeek: {
        label: 'Hodin týdně',
        unit: 'hodin',
        value: '40',
        chip1: '37,5 h',
        chip2: '40 h',
        preset1: '37.5',
        preset2: '40',
        decrease: 'Snížit počet hodin týdně',
        increase: 'Zvýšit počet hodin týdně'
      },
      price: {
        label: 'Cena',
        unit: 'Kč',
        value: '24990',
        step: '100',
        decrease: 'Snížit cenu',
        increase: 'Zvýšit cenu'
      },
      resultsTitle: 'Cena v pracovním čase',
      youNeedToWork: 'Musíte pracovat',
      workDays: 'Pracovní dny',
      workWeeks: 'Pracovní týdny',
      hourlyRate: 'Vaše hodinová mzda',
      runtime: {
        unit: {
          hour: 'Kč za hodinu',
          month: 'Kč za měsíc',
          year: 'Kč za rok'
        },
        days: { one: '{n} den', few: '{n} dny', many: '{n} dne', other: '{n} dní' },
        weeks: { one: '{n} týden', few: '{n} týdny', many: '{n} týdne', other: '{n} týdnů' },
        note: {
          empty: 'Zadejte mzdu, počet hodin týdně a cenu a uvidíte, jak dlouho na ni musíte pracovat.',
          result: 'Počítáno s pracovní dobou {hours} h denně, {days} dní v týdnu.'
        }
      },
      about: {
        title: 'Jak se počítá pracovní čas',
        paragraphs: [
          'Nejprve se váš výdělek převede na hodinovou mzdu. Měsíční mzda se vynásobí 12 a vydělí počtem hodin odpracovaných za rok (hodiny týdně × 52); roční mzda se tímto počtem hodin vydělí přímo. Cena se pak vydělí hodinovou mzdou.',
          'Pracovní dny počítají s pětidenním týdnem, takže 40 hodin týdně znamená osmihodinové dny. Například při 200 Kč za hodinu vás telefon za 24 990 Kč stojí téměř 125 hodin práce – víc než tři celé pracovní týdny.',
          'Nejpoctivější odpověď dostanete s čistou mzdou po zdanění, protože to jsou peníze, které skutečně utrácíte. Přemýšlet o cenách v hodinách práce je jednoduchý způsob, jak se rozhodnout, jestli za to něco opravdu stojí.'
        ]
      },
      faq: [
        {
          q: 'Kolik hodin musím na nákup odpracovat?',
          a: 'Vydělte cenu svou čistou hodinovou mzdou. Pokud si po zdanění vyděláte 180 Kč za hodinu, nákup za 3 600 Kč vás stojí 20 hodin práce.'
        },
        {
          q: 'Mám použít hrubou, nebo čistou mzdu?',
          a: 'Čistá mzda po zdanění dává nejrealističtější výsledek, protože to jsou peníze, které máte skutečně k dispozici. S hrubou mzdou vypadají věci levnější, než ve skutečnosti jsou.'
        },
        {
          q: 'Jak převést měsíční mzdu na hodinovou?',
          a: 'Vynásobte měsíční mzdu 12 a výsledek vydělte počtem hodin odpracovaných za rok. Při 40hodinovém týdnu je to 2 080 hodin, takže čistých 35 000 Kč měsíčně odpovídá zhruba 202 Kč za hodinu. Kalkulačka to spočítá za vás, když zvolíte Za měsíc.'
        }
      ]
    },

    costperuse: {
      name: 'Cena za použití',
      heading: 'Kalkulačka ceny za použití',
      title: 'Kalkulačka ceny za použití – vyplatí se nákup?',
      description: 'Spočítejte, kolik vás nákup doopravdy stojí při každém použití: cena minus částka, za kterou věc prodáte, vydělená tím, jak často a jak dlouho ji používáte.',
      card: 'Rozpočítejte cenu na každé použití a zjistěte, jestli se nákup vyplatí.',
      tag: 'Nákupy',
      lead: 'Zadejte cenu a to, jak často a jak dlouho budete věc používat, a uvidíte, kolik doopravdy stojí každé použití.',
      price: {
        label: 'Cena',
        unit: 'Kč',
        value: '10000',
        step: '100',
        decrease: 'Snížit cenu',
        increase: 'Zvýšit cenu'
      },
      period: {
        label: 'Jak často věc používáte',
        week: 'Týdně',
        month: 'Měsíčně',
        year: 'Ročně'
      },
      uses: {
        label: 'Počet použití',
        unit: 'krát týdně',
        decrease: 'Snížit počet použití',
        increase: 'Zvýšit počet použití'
      },
      years: {
        label: 'Doba používání',
        unit: 'let',
        chip1: '1 rok',
        chip2: '3 roky',
        chip3: '5 let',
        decrease: 'Zkrátit dobu používání',
        increase: 'Prodloužit dobu používání'
      },
      resale: {
        label: 'Hodnota při prodeji',
        unit: 'Kč, nepovinné',
        hint: 'Kolik za věc nejspíš dostanete, až ji prodáte. Pokud nic, nechte 0.',
        decrease: 'Snížit hodnotu při prodeji',
        increase: 'Zvýšit hodnotu při prodeji'
      },
      resultsTitle: 'Cena za použití',
      perUse: 'Jedno použití stojí',
      totalUses: 'Použití celkem',
      perMonth: 'Za měsíc',
      perYear: 'Za rok',
      runtime: {
        unit: {
          week: 'krát týdně',
          month: 'krát měsíčně',
          year: 'krát ročně'
        },
        note: {
          empty: 'Zadejte cenu, jak často věc používáte a kolik let. Hodnota při prodeji musí být nižší než cena.',
          result: 'Kdybyste věc používali o rok déle, cena za použití by klesla na {next}.'
        }
      },
      about: {
        title: 'Jak se počítá cena za použití',
        paragraphs: [
          'Cena za použití je cena snížená o to, co dostanete zpět při prodeji, vydělená počtem použití. Počet použití je to, jak často věc používáte, × počet týdnů, měsíců nebo let, po které ji používáte. Nákup za 10 000 Kč používaný 3krát týdně po dobu 3 let se použije 468krát a jedno použití vyjde zhruba na 21 Kč.',
          'Měsíční a roční náklady rozpočítávají stejnou částku na dobu, po kterou věc vlastníte, takže snadno porovnáte nákup s pronájmem, leasingem nebo předplatným.',
          'Cena za použití je jednoduchý způsob, jak porovnat levnou věc, která se rychle opotřebí, s dražší, která vydrží. Boty za 1 500 Kč nošené 50krát vyjdou na 30 Kč za jedno nošení, boty za 4 000 Kč nošené 400krát na 10 Kč.'
        ]
      },
      faq: [
        {
          q: 'Jak spočítat cenu za použití?',
          a: 'Vydělte cenu počtem použití. Pokud věc potom prodáte, nejdřív od ceny odečtěte částku, kterou za ni dostanete. Bunda za 2 000 Kč nošená 80krát vyjde na 25 Kč za jedno nošení.'
        },
        {
          q: 'Jaká cena za použití je dobrá?',
          a: 'Záleží na tom, kolik stojí alternativa. Porovnejte ji s pronájmem, vypůjčením nebo placením za každé použití: pokud jednorázový vstup do posilovny stojí 150 Kč, měsíční členství za 1 000 Kč se vyplatí od sedmé návštěvy v měsíci.'
        },
        {
          q: 'Funguje to i pro předplatné a členství?',
          a: 'Ano. Jako cenu zadejte roční cenu, dále to, jak často službu využíváte, a 1 rok. U měsíčního členství v posilovně za 1 000 Kč zadejte 12 000 Kč a počet návštěv týdně.'
        }
      ]
    },

    coffee: {
      name: 'Cena kávy',
      heading: 'Kalkulačka ceny kávy',
      title: 'Kalkulačka ceny kávy – kolik utratíte za kávu za rok',
      description: 'Zjistěte, kolik vás denní káva stojí měsíčně a za 1, 5 a 10 let. Zadejte cenu jednoho šálku a počet šálků týdně – zdarma a soukromě.',
      card: 'Podívejte se, na kolik vás denní šálek kávy vyjde za rok, pět a deset let.',
      tag: 'Zvyk',
      lead: 'Zadejte, kolik stojí šálek a jak často si ho kupujete, a uvidíte, kolik vás tento zvyk stojí v průběhu let.',
      price: {
        label: 'Cena šálku',
        unit: 'Kč',
        step: '5',
        value: '75',
        decrease: 'Snížit cenu kávy',
        increase: 'Zvýšit cenu kávy'
      },
      perWeek: {
        label: 'Šálků týdně',
        unit: 'šálků',
        chip1: 'Pracovní dny',
        chip2: 'Každý den',
        chip3: 'Dvakrát denně',
        decrease: 'Snížit počet šálků týdně',
        increase: 'Zvýšit počet šálků týdně'
      },
      resultsTitle: 'Kolik to dělá',
      in10Years: 'Za 10 let',
      perMonth: 'Za měsíc',
      year1: '1 rok',
      year5: '5 let',
      receiptTitle: 'Účtenka za kávu',
      receiptCount: 'Šálky',
      runtime: {
        note: {
          empty: 'Zadejte cenu a počet šálků týdně a uvidíte součty.',
          result: 'To je zhruba {cups} šálků ročně po {price}.'
        },
        receiptItem: 'Káva'
      },
      about: {
        title: 'Jak se počítá cena kávy',
        paragraphs: [
          'Roční cena je cena šálku × počet šálků týdně × 52 týdnů. Měsíční cena je roční cena vydělená 12 a součty za 5 a 10 let násobí roční cenu bez inflace a zdražování.',
          'Káva za 75 Kč každý pracovní den vyjde na 19 500 Kč ročně a 195 000 Kč za deset let. Pokud vás to číslo překvapí, snadno ušetříte s kávou uvařenou doma nebo s vlastním termohrnkem.',
          'Kalkulačka funguje pro jakýkoli malý pravidelný nákup: energetický nápoj, bagetu k obědu nebo lahev vody. Zadejte jeho cenu a počet nákupů týdně.'
        ]
      },
      faq: [
        {
          q: 'Kolik stojí denní káva za rok?',
          a: 'Jeden šálek denně, sedm dní v týdnu, je 364 šálků ročně. Při 70 Kč za šálek to dělá 25 480 Kč ročně a 254 800 Kč za deset let.'
        },
        {
          q: 'Je levnější vařit kávu doma?',
          a: 'Obvykle výrazně. Šálek uvařený doma často vyjde pod 10 Kč, zatímco v kavárně zaplatíte několik desítek korun. Zadejte cenu domácího šálku a porovnejte.'
        },
        {
          q: 'Počítá kalkulačka s inflací?',
          a: 'Ne. Výpočty předpokládají, že cena zůstane stejná, takže ukazují cenu zvyku v dnešních cenách. Když ceny rostou, jsou skutečné dlouhodobé náklady vyšší.'
        },
        {
          q: 'Co když budu peníze místo toho investovat?',
          a: 'Rámeček „Kdybyste peníze místo toho investovali“ ukazuje, na kolik by peníze vyrostly, kdybyste je místo utrácení každý měsíc investovali s ročním zhodnocením 4 % a měsíční kapitalizací. Káva za 75 Kč každý pracovní den dělá 1 625 Kč měsíčně, což za 10 let vyroste zhruba na 238 400 Kč – z toho 195 000 Kč jsou vaše vlastní peníze a zbytek tvoří výnos. Daně, poplatky ani inflace se nezapočítávají. Jde jen o příklad, nikoli o investiční poradenství.'
        }
      ]
    },

    smoking: {
      name: 'Cena kouření',
      heading: 'Kalkulačka nákladů na kouření',
      title: 'Kalkulačka kouření – kolik stojí cigarety a kolik ušetříte',
      description: 'Spočítejte, kolik vás kouření stojí měsíčně a za 1, 5 a 10 let – a kolik ušetříte, když přestanete. Zadejte cenu krabičky a počet cigaret denně.',
      card: 'Zjistěte, kolik peněz vám každý měsíc a v průběhu let doslova shoří.',
      tag: 'Zvyk',
      lead: 'Zadejte cenu krabičky a kolik toho vykouříte, a uvidíte, kolik peněz vám v průběhu let vyletí komínem.',
      packPrice: {
        label: 'Cena krabičky',
        unit: 'Kč',
        step: '5',
        value: '170',
        decrease: 'Snížit cenu krabičky',
        increase: 'Zvýšit cenu krabičky'
      },
      perDay: {
        label: 'Cigaret denně',
        unit: 'cigaret',
        chip1: '5 denně',
        chip2: '10 denně',
        chip3: '20 denně',
        decrease: 'Snížit počet cigaret denně',
        increase: 'Zvýšit počet cigaret denně'
      },
      perPack: {
        label: 'Cigaret v krabičce',
        unit: 'kusů v balení',
        value: '20',
        decrease: 'Snížit počet cigaret v krabičce',
        increase: 'Zvýšit počet cigaret v krabičce'
      },
      resultsTitle: 'Vyletí komínem',
      in10Years: 'Za 10 let',
      perMonth: 'Za měsíc',
      year1: '1 rok',
      year5: '5 let',
      receiptTitle: 'Účtenka za cigarety',
      receiptCount: 'Krabičky',
      runtime: {
        receiptItem: 'Krabička cigaret',
        note: {
          empty: 'Zadejte cenu krabičky, kolik cigaret denně vykouříte a kolik jich je v krabičce, a uvidíte součty.',
          result: 'To je zhruba {cigarettes} cigaret ({packs} krabiček) ročně po {price} za kus.'
        }
      },
      about: {
        title: 'Jak se počítá cena kouření',
        paragraphs: [
          'Cena jedné cigarety je cena krabičky vydělená počtem cigaret v krabičce. Ta se vynásobí počtem cigaret vykouřených za den a 365 dny, a tak vznikne roční cena. Měsíční cena je její dvanáctina a součty za 5 a 10 let počítají s dnešními cenami.',
          'Půl krabičky denně při ceně 170 Kč za krabičku vyjde zhruba na 31 000 Kč ročně a přes 310 000 Kč za deset let. Vidět celkovou částku může být silná motivace: za stejné peníze můžete vyrazit na dovolenou, spořit nebo splatit dluhy.',
          'Kalkulačka počítá jen s cenou cigaret. Náklady na zdraví, vyšší pojistné a dny pracovní neschopnosti přicházejí navíc. Pokud chcete s kouřením přestat, pomůže vám praktický lékař nebo Národní linka pro odvykání kouření na bezplatném čísle 800 350 000.'
        ]
      },
      faq: [
        {
          q: 'Kolik stojí krabička denně za rok?',
          a: 'Krabička denně je 365 krabiček ročně. Při ceně 170 Kč za krabičku to dělá 62 050 Kč ročně a 620 500 Kč za deset let.'
        },
        {
          q: 'Kolik ušetřím, když přestanu kouřit?',
          a: 'Všechno, co tato kalkulačka ukazuje. Zadejte, kolik kouříte dnes: měsíční a roční součty jsou částky, které ušetříte, když přestanete.'
        },
        {
          q: 'Funguje kalkulačka i pro tabák na balení?',
          a: 'Ano. Jako cenu krabičky zadejte cenu balíčku tabáku, jako počet cigaret v krabičce to, kolik cigaret z něj ubalíte, a nakonec počet cigaret, které denně vykouříte.'
        },
        {
          q: 'Co když budu peníze místo toho investovat?',
          a: 'Rámeček „Kdybyste peníze místo toho investovali“ ukazuje, na kolik by peníze vyrostly, kdybyste je místo kouření každý měsíc investovali s ročním zhodnocením 4 % a měsíční kapitalizací. Půl krabičky denně při ceně 170 Kč za krabičku je zhruba 2 585 Kč měsíčně, což za 10 let vyroste zhruba na 379 300 Kč – z toho 310 250 Kč jsou vaše vlastní peníze a zbytek tvoří výnos. Daně, poplatky ani inflace se nezapočítávají. Jde jen o příklad, nikoli o investiční poradenství.'
        }
      ]
    },

    alcohol: {
      name: 'Cena alkoholu',
      heading: 'Kalkulačka nákladů na alkohol',
      title: 'Kalkulačka nákladů na alkohol – kolik vás stojí pití',
      description: 'Zjistěte, kolik vás pivo, víno a další nápoje stojí měsíčně a za 1, 5 a 10 let a na kolik by stejné peníze vyrostly, kdybyste je investovali.',
      card: 'Podívejte se, na kolik vás alkohol vyjde za rok, pět a deset let.',
      tag: 'Zvyk',
      lead: 'Zadejte, kolik stojí jeden nápoj a kolik jich týdně vypijete, a uvidíte, kolik to dělá v průběhu let.',
      price: {
        label: 'Cena jednoho nápoje',
        unit: 'Kč',
        step: '5',
        value: '60',
        hint: 'Pijete doma i venku? Použijte průměrnou cenu.',
        decrease: 'Snížit cenu nápoje',
        increase: 'Zvýšit cenu nápoje'
      },
      perWeek: {
        label: 'Nápojů týdně',
        unit: 'nápojů',
        chip1: '3 týdně',
        chip2: '7 týdně',
        chip3: '14 týdně',
        decrease: 'Snížit počet nápojů týdně',
        increase: 'Zvýšit počet nápojů týdně'
      },
      resultsTitle: 'Kolik to dělá',
      in10Years: 'Za 10 let',
      perMonth: 'Za měsíc',
      year1: '1 rok',
      year5: '5 let',
      receiptTitle: 'Účet z baru',
      receiptCount: 'Nápoje',
      runtime: {
        receiptItem: 'Nápoj',
        note: {
          empty: 'Zadejte cenu a počet nápojů týdně a uvidíte součty.',
          result: 'To je zhruba {drinks} nápojů ročně po {price}.'
        }
      },
      about: {
        title: 'Jak se počítají náklady na alkohol',
        paragraphs: [
          'Roční náklady jsou cena jednoho nápoje × počet nápojů týdně × 52 týdnů. Měsíční náklady jsou jejich dvanáctina a součty za 5 a 10 let počítají s dnešními cenami bez inflace.',
          'Šest piv týdně po 60 Kč vyjde na 18 720 Kč ročně a 187 200 Kč za deset let. Pokud pijete v hospodě i doma, použijte průměrnou cenu, nebo spočítejte obojí zvlášť a výsledky sečtěte.',
          'Rámeček „Kdybyste peníze místo toho investovali“ ukazuje, na kolik by stejné peníze vyrostly, kdybyste je každý měsíc investovali s ročním zhodnocením 4 % po dobu 10 let. Kalkulačka počítá jen s cenou nápojů; dopady na zdraví přicházejí navíc. Pokud chcete pít méně, pomůže vám praktický lékař nebo linka pomoci zaměřená na alkohol.'
        ]
      },
      faq: [
        {
          q: 'Kolik ročně utratím za alkohol?',
          a: 'Vynásobte cenu jednoho nápoje počtem nápojů týdně a číslem 52. Šest nápojů týdně po 60 Kč dělá 18 720 Kč ročně.'
        },
        {
          q: 'Kolik ušetřím, když budu pít méně?',
          a: 'Zadejte počet nápojů, na který chcete pití omezit, a porovnejte. Když místo 6 nápojů týdně po 60 Kč vypijete jen 3, ušetříte 9 360 Kč ročně a 93 600 Kč za deset let.'
        },
        {
          q: 'Co když budu peníze místo toho investovat?',
          a: 'Rámeček „Kdybyste peníze místo toho investovali“ ukazuje, kolik byste měli po 10 letech, kdybyste peníze místo utrácení každý měsíc investovali s ročním zhodnocením 4 % a měsíční kapitalizací. Šest nápojů po 60 Kč týdně je 1 560 Kč měsíčně, což vyroste zhruba na 228 800 Kč – z toho 187 200 Kč jsou vaše vlastní peníze a zbytek tvoří výnos. Daně, poplatky ani inflace se nezapočítávají. Jde jen o příklad, nikoli o investiční poradenství.'
        }
      ]
    },

    gambling: {
      name: 'Loterie a sázky',
      heading: 'Kalkulačka nákladů na loterie a sázky',
      title: 'Kalkulačka loterií a sázek – kolik vás stojí hazard',
      description: 'Zjistěte, kolik vás loterie a sázky stojí měsíčně a za 10 let, kolik v průměru prohrajete a na kolik by vsazené peníze vyrostly, kdybyste je investovali.',
      card: 'Podívejte se, kolik dělají loterie a sázky dohromady a kolik v průměru prohrajete.',
      tag: 'Zvyk',
      lead: 'Zadejte, kolik vsadíte a jak často hrajete, a uvidíte, kolik vás loterie a sázky stojí v průběhu let – a kolik se vám z toho v průměru vrátí na výhrách.',
      stake: {
        label: 'Vklad na jednu hru',
        unit: 'Kč',
        step: '10',
        value: '200',
        decrease: 'Snížit vklad',
        increase: 'Zvýšit vklad'
      },
      perWeek: {
        label: 'Počet her týdně',
        unit: 'her',
        chip1: 'Jednou týdně',
        chip2: 'Dvakrát týdně',
        chip3: 'Každý den',
        decrease: 'Snížit počet her týdně',
        increase: 'Zvýšit počet her týdně'
      },
      payout: {
        label: 'Výherní podíl',
        unit: '% se vrátí',
        chip1: 'Loterie',
        chip2: 'Sportovní sázky',
        chip3: 'Kasino',
        hint: 'Podíl všech vkladů, který se hráčům vyplatí zpět na výhrách. Loterie obvykle vracejí zhruba polovinu, sportovní sázky a kasinové hry 90–97 %.',
        decrease: 'Snížit výherní podíl',
        increase: 'Zvýšit výherní podíl'
      },
      resultsTitle: 'Kolik to stojí',
      in10Years: 'Vsazeno za 10 let',
      perMonth: 'Za měsíc',
      perYear: 'Za rok',
      lossPerYear: 'Průměrná ztráta za rok',
      receiptTitle: 'Účtenka za loterie a sázky',
      receiptCount: 'Hry',
      receiptBack: 'Průměrně vráceno na výhrách',
      receiptLoss: 'Průměrně prohráno',
      runtime: {
        receiptItem: 'Hra',
        note: {
          empty: 'Zadejte vklad, počet her týdně a výherní podíl (0–100).',
          result: 'V průměru se vám na výhrách vrátí zhruba {back} ročně, takže prohrajete asi {loss} ročně a {loss10} za 10 let.'
        }
      },
      about: {
        title: 'Jak se počítají náklady na loterie a sázky',
        paragraphs: [
          'Roční náklady jsou vklad × počet her týdně × 52 týdnů. Měsíční náklady jsou jejich dvanáctina a součet za 10 let počítá s dnešními vklady.',
          'Výherní podíl je část všech vkladů, která se hráčům vyplatí zpět na výhrách. Při výherním podílu 50 % dělá vklad 200 Kč dvakrát týdně 20 800 Kč ročně, z čehož se v průměru vrátí zhruba 10 400 Kč na výhrách – průměrná ztráta je tedy 10 400 Kč ročně. Jednotlivý hráč může vyhrát hodně, nebo přijít o všechno, ale čím víc her, tím víc se výsledek blíží průměru.',
          'Rámeček „Kdybyste peníze místo toho investovali“ ukazuje, na kolik by vklady vyrostly, kdybyste je místo sázení každý měsíc investovali s ročním zhodnocením 4 % po dobu 10 let. Pokud máte pocit, že hraní nemáte pod kontrolou, pomůže vám praktický lékař nebo linka pomoci zaměřená na hazardní hraní.'
        ]
      },
      faq: [
        {
          q: 'Kolik ročně utratím za loterii?',
          a: 'Vynásobte vklad počtem her týdně a číslem 52. Při vkladu 200 Kč dvakrát týdně to dělá 20 800 Kč ročně a 208 000 Kč za deset let.'
        },
        {
          q: 'Co je výherní podíl?',
          a: 'Je to část všech vkladů, která se hráčům vyplatí zpět na výhrách. Loterie obvykle vracejí zhruba polovinu vkladů, sportovní sázky a kasinové hry 90–97 %. Zbytek si ponechá provozovatel – a právě o tolik hráči v průměru přijdou.'
        },
        {
          q: 'Co když budu peníze místo toho investovat?',
          a: 'Rámeček „Kdybyste peníze místo toho investovali“ ukazuje, kolik byste měli po 10 letech, kdybyste vklady místo sázení každý měsíc investovali s ročním zhodnocením 4 % a měsíční kapitalizací. Vklad 200 Kč dvakrát týdně je zhruba 1 733 Kč měsíčně, což vyroste zhruba na 254 300 Kč – z toho 208 000 Kč jsou vaše vlastní peníze a zbytek tvoří výnos. Daně, poplatky ani inflace se nezapočítávají. Jde jen o příklad, nikoli o investiční poradenství.'
        }
      ]
    },

    subscriptions: {
      name: 'Předplatné',
      heading: 'Kalkulačka předplatného',
      title: 'Kalkulačka předplatného – kolik platíte měsíčně a ročně',
      description: 'Sečtěte streamovací služby, posilovnu, mobilní tarif a všechna další předplatná. Uvidíte součet za měsíc, rok i 10 let a které předplatné je nejdražší.',
      card: 'Sečtěte streaming, posilovnu a všechny další pravidelné platby na jednom místě.',
      tag: 'Rozpočet',
      lead: 'Vypište všechno, za co pravidelně platíte, a uvidíte, kolik to dělá dohromady. Počítá s měsíčními, ročními i týdenními platbami.',
      listTitle: 'Vaše předplatná',
      empty: 'Zatím žádná předplatná. Přidejte nějaké níže nebo použijte rychlé přidání.',
      add: 'Přidat předplatné',
      quickAdd: 'Rychlé přidání',
      quick: {
        1: { name: 'Videostreaming', price: '259' },
        2: { name: 'Hudební streaming', price: '169' },
        3: { name: 'Posilovna', price: '990' },
        4: { name: 'Cloudové úložiště', price: '79' },
        5: { name: 'Mobilní tarif', price: '399' },
        6: { name: 'Zpravodajství', price: '149' }
      },
      note: 'Seznam se ukládá do adresy stránky, takže si ho můžete uložit do záložek nebo ho sdílet. Nikam se neodesílá.',
      row: {
        name: 'Název',
        nameLabel: 'Název předplatného',
        priceLabel: 'Cena v Kč',
        cycleLabel: 'Období platby',
        monthly: '/ měsíc',
        yearly: '/ rok',
        weekly: '/ týden'
      },
      resultsTitle: 'Předplatné celkem',
      perYear: 'Za rok',
      perMonth: 'Za měsíc',
      perDay: 'Za den',
      in10Years: 'Za 10 let',
      breakdownLabel: 'Roční cena jednotlivých předplatných',
      copySummary: 'Kopírovat souhrn',
      receiptTitle: 'Účtenka za předplatné',
      receiptCount: 'Platby',
      runtime: {
        receiptItem: 'Platba',
        untitled: 'Bez názvu',
        remove: 'Odebrat {name}',
        removeUnnamed: 'Odebrat předplatné',
        breakdown: '{cost} / rok · {percent} %',
        cycle: { monthly: 'měsíc', yearly: 'rok', weekly: 'týden' },
        note: {
          empty: 'Přidejte předplatné s cenou a uvidíte součty.',
          single: '{name} vás stojí {cost} ročně.',
          biggest: 'Nejvíc vás stojí {name}: {cost} ročně, tedy {percent} % z celku.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Celkem: {month} měsíčně, {year} ročně'
        }
      },
      about: {
        title: 'Jak se počítá součet předplatného',
        paragraphs: [
          'Každé předplatné se převede na roční cenu: měsíční ceny se násobí 12, týdenní 52 a roční se použijí tak, jak jsou. Roční součet se pak vydělí 12 pro měsíční cenu a 365 pro denní cenu.',
          'Přehled seřadí předplatná od nejdražšího po nejlevnější a u každého ukáže jeho podíl na celku, takže snadno poznáte, co zrušit nebo přepnout na levnější tarif.',
          'Seznam se ukládá do adresy stránky, nikdy na server. Uložte si stránku do záložek, abyste se k seznamu mohli později vrátit, nebo pošlete odkaz rodině a projděte si společně, za co všechno platíte.'
        ]
      },
      faq: [
        {
          q: 'Jak najdu všechna svá předplatná?',
          a: 'Projděte výpisy z bankovního účtu a platební karty za posledních pár měsíců a hledejte opakované platby. Zkontrolujte také nastavení předplatného v App Storu, Google Play a PayPalu.'
        },
        {
          q: 'Je roční předplatné levnější než měsíční?',
          a: 'Často o 15–20 %, ale jen pokud byste službu stejně používali celý rok. Přidejte do seznamu obě varianty a porovnejte jejich roční cenu.'
        },
        {
          q: 'Ukládá se můj seznam?',
          a: 'Seznam je uložený jen v adrese stránky. Pokud si ho chcete ponechat, uložte si odkaz do záložek nebo ho sdílejte; nic se neukládá na server ani do cookies.'
        },
        {
          q: 'Co když budu peníze místo toho investovat?',
          a: 'Rámeček „Kdybyste peníze místo toho investovali“ ukazuje, na kolik by vyrostly peníze, které dáváte za předplatné, kdybyste stejnou částku místo toho každý měsíc investovali s ročním zhodnocením 4 % a měsíční kapitalizací. Částka 1 000 Kč měsíčně za 10 let vyroste zhruba na 146 700 Kč – z toho 120 000 Kč jsou vaše vlastní peníze a zbytek tvoří výnos. Daně, poplatky ani inflace se nezapočítávají. Jde jen o příklad, nikoli o investiční poradenství.'
        }
      ]
    },

    electricity: {
      name: 'Cena elektřiny',
      heading: 'Kalkulačka spotřeby elektřiny',
      title: 'Kalkulačka spotřeby elektřiny – cena provozu spotřebiče',
      description: 'Spočítejte, kolik stojí provoz spotřebiče za den, měsíc a rok podle jeho příkonu, doby používání a ceny elektřiny. Bezplatná kalkulačka ceny za kWh.',
      card: 'Podívejte se, kolik stojí nechat spotřebič zapnutý – za den, měsíc i rok.',
      tag: 'Domácnost',
      lead: 'Zadejte příkon spotřebiče, jak dlouho běží a kolik platíte za elektřinu, a uvidíte, kolik jeho provoz doopravdy stojí.',
      power: {
        label: 'Příkon',
        unit: 'wattů',
        chip1: 'LED žárovka 9 W',
        chip2: 'Notebook 60 W',
        chip3: 'Televize 100 W',
        chip4: 'Herní PC 400 W',
        chip5: 'Přímotop 1 500 W',
        decrease: 'Snížit příkon',
        increase: 'Zvýšit příkon'
      },
      hours: {
        label: 'Hodin denně',
        unit: 'hodin',
        decrease: 'Snížit počet hodin denně',
        increase: 'Zvýšit počet hodin denně'
      },
      days: {
        label: 'Dní v týdnu',
        unit: 'dní',
        decrease: 'Snížit počet dní v týdnu',
        increase: 'Zvýšit počet dní v týdnu'
      },
      kwhPrice: {
        label: 'Cena elektřiny',
        unit: 'Kč/kWh',
        value: '5.5',
        step: '0.1',
        divisor: '1',
        hint: 'Pro co nejpřesnější výsledek započítejte i distribuci, poplatky a DPH.',
        decrease: 'Snížit cenu elektřiny',
        increase: 'Zvýšit cenu elektřiny'
      },
      resultsTitle: 'Náklady na provoz',
      perYear: 'Za rok',
      perDayOfUse: 'Za den provozu',
      perMonth: 'Za měsíc',
      energyPerYear: 'Spotřeba za rok',
      runtime: {
        note: {
          empty: 'Zadejte příkon, počet hodin denně (nejvýše 24), počet dní v týdnu (nejvýše 7) a cenu elektřiny.',
          result: 'Spotřebuje asi {day} za každý den provozu, zhruba {year} ročně.'
        }
      },
      about: {
        title: 'Jak se počítá cena elektřiny',
        paragraphs: [
          'Spotřeba energie v kilowatthodinách (kWh) je příkon ve wattech × doba provozu v hodinách ÷ 1 000. Televize s příkonem 100 W zapnutá 4 hodiny denně spotřebuje 0,4 kWh. Když to vynásobíte cenou elektřiny za kWh, dostanete cenu za den provozu.',
          'Roční cena zohledňuje, kolik dní v týdnu spotřebič běží, a počítá s 365 dny v roce. Měsíční cena je dvanáctina roční ceny.',
          'Příkon najdete na typovém štítku spotřebiče nebo v návodu. Mnoho spotřebičů většinu času odebírá méně než svůj maximální příkon, takže výsledek je horní odhad. Nejpřesnější cenu dostanete, když kromě ceny silové elektřiny započítáte i distribuci, poplatky a daně.'
        ]
      },
      faq: [
        {
          q: 'Jak spočítat, kolik spotřebič stojí na elektřině?',
          a: 'Vynásobte příkon v kilowattech dobou provozu v hodinách a cenou za kWh. Přímotop s příkonem 1 500 W zapnutý na 3 hodiny stojí 1,5 kW × 3 h × 5,50 Kč = asi 25 Kč denně.'
        },
        {
          q: 'Kolik kWh spotřebič spotřebuje?',
          a: 'Vydělte příkon ve wattech 1 000 a vynásobte počtem hodin provozu. Notebook s příkonem 60 W používaný 8 hodin denně spotřebuje 0,48 kWh denně – zhruba 175 kWh ročně, pokud ho používáte každý den.'
        },
        {
          q: 'Jakou cenu elektřiny použít?',
          a: 'Použijte celkovou cenu za kWh z vyúčtování: cenu silové elektřiny, distribuci, poplatky a daně. Dobrý průměr získáte, když celkovou částku vyúčtování vydělíte počtem spotřebovaných kWh.'
        },
        {
          q: 'Spotřebovává elektřinu i pohotovostní režim?',
          a: 'Ano, mnoho spotřebičů odebírá v pohotovostním režimu (stand-by) několik wattů. Zadejte příkon v pohotovostním režimu a 24 hodin denně a uvidíte, kolik to stojí za rok.'
        }
      ]
    },

    trip: {
      name: 'Cena cesty',
      heading: 'Kalkulačka nákladů na palivo',
      title: 'Kalkulačka nákladů na benzín – cesta autem a dojíždění',
      description: 'Spočítejte náklady na palivo za cestu nebo každodenní dojíždění a rozdělte je mezi spolucestující. Funguje v kilometrech a litrech i v mílích a galonech.',
      card: 'Spočítejte náklady na palivo za cestu nebo dojíždění a rozdělte je s ostatními.',
      tag: 'Cestování',
      lead: 'Spočítejte náklady na palivo za jednu cestu nebo každodenní dojíždění do práce a rozdělte je mezi všechny v autě.',
      unit: {
        label: 'Jednotky',
        metric: 'Kilometry a litry',
        us: 'Míle a galony'
      },
      distance: {
        label: 'Vzdálenost',
        unit: 'km jedním směrem',
        decrease: 'Zkrátit vzdálenost',
        increase: 'Prodloužit vzdálenost'
      },
      direction: {
        label: 'Cesta',
        one: 'Jedním směrem',
        round: 'Tam a zpět'
      },
      consumption: {
        label: 'Spotřeba paliva',
        unit: 'l/100 km',
        hint: 'Jezdíte elektromobilem? Zadejte kWh/100 km a cenu za kWh.',
        decrease: 'Snížit spotřebu',
        increase: 'Zvýšit spotřebu'
      },
      fuelPrice: {
        label: 'Cena paliva',
        unit: 'Kč za litr',
        value: '36',
        step: '0.1',
        usStep: '0.5',
        decrease: 'Snížit cenu paliva',
        increase: 'Zvýšit cenu paliva'
      },
      people: {
        label: 'Kolik lidí se dělí o náklady',
        unit: 'osob',
        decrease: 'Snížit počet lidí',
        increase: 'Zvýšit počet lidí'
      },
      tripsPerWeek: {
        label: 'Cest týdně',
        unit: 'pro měsíční a roční součty',
        decrease: 'Snížit počet cest týdně',
        increase: 'Zvýšit počet cest týdně'
      },
      resultsTitle: 'Náklady na palivo',
      perPerson: 'Na osobu',
      perMonth: 'Za měsíc',
      perYear: 'Za rok',
      runtime: {
        direction: { one: 'Jedním směrem', round: 'Tam a zpět' },
        unit: {
          metric: {
            distance: 'km jedním směrem',
            consumption: 'l/100 km',
            price: 'Kč za litr',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'mil jedním směrem',
            consumption: 'mpg',
            price: 'Kč za galon',
            perDistance: 'míli',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Zadejte vzdálenost, spotřebu a cenu paliva a uvidíte náklady.',
          result: 'Na jednu cestu spotřebujete {fuel} paliva, asi {price} na {distance}.'
        }
      },
      about: {
        title: 'Jak se počítá cena cesty',
        paragraphs: [
          'Spotřebované palivo je vzdálenost × spotřeba ÷ 100. Když dojíždíte 25 km jedním směrem (50 km denně) autem se spotřebou 6,5 l/100 km, spotřebujete denně 3,25 litru paliva. Vynásobením cenou za litr získáte cenu cesty a vydělením počtem lidí ji rozdělíte mezi spolucestující.',
          'V mílích a galonech se spotřebované palivo počítá jako vzdálenost vydělená hodnotou mpg (míle na galon). Přepnutím jednotek se zadané hodnoty převedou, takže můžete porovnávat údaje z obou soustav.',
          'Měsíční a roční součty vycházejí z počtu cest týdně – 5 cest tam a zpět týdně odpovídá běžnému dojíždění do práce. U elektromobilu zadejte místo toho spotřebu v kWh/100 km a cenu za kWh.'
        ]
      },
      faq: [
        {
          q: 'Jak spočítat náklady na benzín za cestu?',
          a: 'Vynásobte vzdálenost spotřebou a cenou paliva a vydělte stem. Cesta dlouhá 200 km autem se spotřebou 6 l/100 km s benzínem Natural 95 za 36 Kč/l vyjde na 200 × 6 ÷ 100 × 36 Kč = 432 Kč.'
        },
        {
          q: 'Jak rozdělit náklady na palivo mezi spolucestující?',
          a: 'Zadejte počet lidí, kteří se o náklady dělí. Kalkulačka rozdělí cenu cesty rovným dílem mezi všechny, včetně řidiče.'
        },
        {
          q: 'Zahrnuje kalkulačka opotřebení, parkování nebo mýtné?',
          a: 'Ne, počítá jen palivo. Opotřebení auta, pojištění, parkování, dálniční známka a mýtné jsou navíc, takže celkové náklady na jízdu autem jsou vyšší.'
        }
      ]
    }
  }
};
