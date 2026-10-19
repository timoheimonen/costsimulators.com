// Croatian texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in euros in
// Croatia.

module.exports = {
  meta: {
    name: 'Hrvatski',
    locale: 'hr-HR',
    currency: 'EUR',
    ogLocale: 'hr_HR'
  },

  money: {
    symbol: '€',
    zero: '0,00 €',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Preskoči na sadržaj',
    home: 'Početna',
    toggleTheme: 'Promijeni temu',
    themeToLight: 'Prebaci na svijetlu temu',
    themeToDark: 'Prebaci na tamnu temu',
    language: 'Jezik',
    allTools: 'Svi kalkulatori',
    share: 'Podijeli',
    settings: 'Postavke',
    quickPicks: 'Brzi odabir',
    faqTitle: 'Česta pitanja',
    relatedTools: 'Još kalkulatora',
    imageAlt: 'costsimulators.com – besplatni kalkulatori troškova za svakodnevna pitanja o novcu',
    invest: {
      label: 'Da ste novac umjesto toga uložili'
    }
  },

  footer: {
    privacy: 'Radi u potpunosti u vašem pregledniku. Bez kolačića, bez praćenja.',
    about: 'O projektu',
    contact: 'Kontakt',
    privacyPolicy: 'Privatnost',
    terms: 'Uvjeti'
  },

  runtime: {
    share: {
      linkCopied: 'Poveznica je kopirana',
      copyFailed: 'Kopiranje nije uspjelo',
      copied: 'Kopirano!',
      calculatedWith: 'Izračunato na costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    },
    invest: {
      note: '{monthly} mjesečno tijekom 10 godina uz prinos od {rate} godišnje: uplaćeno {paid}, a prinos iznosi {gain}.'
    }
  },

  home: {
    title: 'Besplatni kalkulatori troškova za svaki dan',
    description: 'Besplatni i privatni kalkulatori koji pokazuju koliko stvari zapravo koštaju: sastanci, radni sati, navike, pretplate, struja, gorivo i cijena po korištenju. Bez registracije, u pregledniku.',
    eyebrow: 'Besplatno · Privatno · Odmah',
    heading: 'Mali alati za svakodnevna pitanja o <span class="accent-text">novcu</span>.',
    lead: 'Brzi kalkulatori koji pokazuju koliko stvari zapravo koštaju. Bez registracije i bez praćenja – sve radi izravno u vašem pregledniku.',
    toolsTitle: 'Kalkulatori',
    toolCount: '{count} kalkulatora',
    suggestTitle: 'Imate ideju?',
    suggestText: 'Predložite novi kalkulator na GitHubu.',
    whyTitle: 'Sitni se troškovi zbrajaju',
    whyText1: 'Jedan sastanak, kava na putu do posla ili još jedna streaming usluga sami po sebi rijetko djeluju skupo. No zbrojite li ih za mjesec, godinu ili desetljeće, brojke izgledaju posve drukčije.',
    whyText2: 'Svaki kalkulator radi jednu stvar, traži samo brojke koje su mu potrebne i odmah prikazuje rezultat. Sve se izračunava u vašem pregledniku, pa vaše brojke ostaju na vašem uređaju.',
    aboutLink: 'Više o costsimulators.com',
    faq: [
      {
        q: 'Je li costsimulators.com besplatan?',
        a: 'Da. Svi su kalkulatori potpuno besplatni, bez registracije, bez naplate sadržaja i bez oglasa. Možete ih koristiti i na poslu.'
      },
      {
        q: 'Spremaju li se moje brojke ili šalju li se nekamo?',
        a: 'Ne. Sve što unesete izračunava se u vašem pregledniku i nikad se ne šalje na poslužitelj. Stranica ne postavlja kolačiće i ne koristi analitiku.'
      },
      {
        q: 'Mogu li podijeliti izračun?',
        a: 'Da. Vaše se postavke spremaju u adresu stranice. Pritisnite Podijeli da biste kopirali poveznicu – tko je otvori, vidjet će isti izračun.'
      }
    ]
  },

  notFound: {
    title: 'Stranica nije pronađena',
    description: 'Stranica koju tražite ne postoji.',
    heading: 'Ova stranica ne postoji.',
    lead: 'Adresa je možda pogrešno upisana ili je stranica premještena. Svi su kalkulatori na naslovnoj stranici.'
  },

  documents: {
    about: {
      name: 'O projektu',
      title: 'O projektu – besplatni i privatni kalkulatori troškova',
      description: 'Tko stoji iza costsimulators.com i kako kalkulatori rade. Besplatni i privatni kalkulatori troškova sastanaka, radnih sati, navika, kupnji, pretplata, struje i putovanja.'
    },
    privacy: {
      name: 'Pravila privatnosti',
      title: 'Pravila privatnosti',
      description: 'Kako costsimulators.com postupa s vašim podacima: izračuni se odvijaju u vašem pregledniku, bez praćenja, bez analitike i bez korisničkih računa.'
    },
    terms: {
      name: 'Uvjeti korištenja',
      title: 'Uvjeti korištenja',
      description: 'Uvjeti korištenja stranice costsimulators.com: besplatno za osobnu i komercijalnu upotrebu, bez jamstava, s otvorenim izvornim kodom pod licencom MIT.'
    }
  },

  tools: {
    meetings: {
      name: 'Trošak sastanka',
      heading: 'Kalkulator troška sastanka',
      title: 'Kalkulator troška sastanka – mjerač vremena uživo',
      description: 'Besplatni kalkulator troška sastanka s mjeračem vremena uživo. Unesite satnicu i broj sudionika i gledajte koliko sastanak košta, sekundu po sekundu.',
      card: 'Gledajte kako cijena sastanka raste u stvarnom vremenu dok razgovarate.',
      tag: 'Mjerač uživo',
      lead: 'Postavite satnicu i broj sudionika, pritisnite Pokreni i pratite koliko sastanak košta dok traje.',
      pulseEvery: '1',
      rate: {
        label: 'Satnica',
        unit: '€ po osobi',
        step: '5',
        value: '25',
        decrease: 'Smanji satnicu',
        increase: 'Povećaj satnicu'
      },
      persons: {
        label: 'Sudionici',
        unit: 'osoba',
        decrease: 'Smanji broj sudionika',
        increase: 'Povećaj broj sudionika'
      },
      perMinute: 'Po minuti',
      perHour: 'Po satu',
      note: 'Vrijednosti možete mijenjati i dok mjerač vremena radi. Sudionici koji se pridruže ili odu računaju se od tog trenutka.',
      total: 'Ukupni trošak',
      elapsed: 'Proteklo vrijeme',
      reset: 'Resetiraj',
      copyReport: 'Kopiraj izvješće',
      kbdHint: 'Pritisnite <kbd>razmaknicu</kbd> za pokretanje ili pauzu',
      runtime: {
        mode: { start: 'Pokreni', pause: 'Pauziraj', resume: 'Nastavi' },
        status: { ready: 'Spremno', live: 'Uživo', paused: 'Pauzirano' },
        announce: {
          invalid: 'Za pokretanje unesite satnicu i broj sudionika.',
          started: 'Mjerač vremena je pokrenut.',
          paused: 'Pauzirano na {cost} nakon {time}.',
          reset: 'Mjerač vremena je resetiran.'
        },
        report: {
          cost: 'Trošak sastanka: {cost}',
          duration: 'Trajanje: {time}',
          participants: 'Sudionici: {persons} × {rate}/h'
        }
      },
      about: {
        title: 'Kako se izračunava trošak sastanka',
        paragraphs: [
          'Kalkulator množi broj sudionika s njihovom satnicom i s proteklim vremenom. Sastanak od sat vremena s 5 osoba uz satnicu od 25 € košta 125 € – to je oko 2,08 € svake minute.',
          'Kao satnicu upotrijebite ono što sat rada stvarno košta poslodavca, a ne samo plaću. U Hrvatskoj poslodavac na bruto plaću plaća još i doprinos za obvezno zdravstveno osiguranje od 16,5 %, a tome se pridodaju i drugi troškovi rada, primjerice naknada za prijevoz, regres, plaćeni godišnji odmor i opremanje radnog mjesta. Ako ne znate satnicu svakog sudionika, dovoljan je prosjek za cijeli tim.',
          'Mjerač vremena točno broji i u kartici u pozadini, a trenutačni trošak prikazuje se u naslovu kartice preglednika, pa ga imate na oku i dok dijelite zaslon. Kad sastanak završi, pauzirajte mjerač i kopirajte kratko izvješće za zapisnik.'
        ]
      },
      faq: [
        {
          q: 'Kako izračunati trošak sastanka?',
          a: 'Pomnožite broj sudionika s njihovom prosječnom satnicom i s trajanjem sastanka u satima. Na primjer, 6 osoba × 20 € na sat × 1,5 h = 180 €. Ovaj kalkulator to računa uživo dok sastanak traje.'
        },
        {
          q: 'Koju satnicu trebam upotrijebiti?',
          a: 'Upotrijebite puni trošak sata rada: bruto satnicu uvećanu za doprinos za zdravstveno osiguranje koji plaća poslodavac i za druge troškove zaposlenja. Za konzultante i vanjske suradnike upotrijebite satnicu koju naplaćuju.'
        },
        {
          q: 'Mogu li tijekom sastanka promijeniti broj sudionika?',
          a: 'Da. Broj sudionika i satnicu možete promijeniti u bilo kojem trenutku. Nove vrijednosti računaju se od tog trenutka, a već nakupljeni trošak ostaje kakav je bio.'
        },
        {
          q: 'Radi li mjerač vremena i kad prijeđem na drugu karticu?',
          a: 'Da. Mjerač se ravna prema satu, pa zbroj ostaje točan i u kartici u pozadini. Dok mjerač radi, stranica od preglednika traži i da zaslon ostane uključen.'
        }
      ]
    },

    workhours: {
      name: 'Radni sati',
      heading: 'Kalkulator cijene u radnim satima',
      title: 'Cijena u radnim satima – koliko dugo morate raditi za to',
      description: 'Pretvorite bilo koju cijenu u sate, dane i tjedne rada. Unesite satnicu, mjesečnu ili godišnju plaću i pogledajte koliko vas kupnja stvarno košta radnog vremena.',
      card: 'Pretvorite bilo koju cijenu u sate, dane i tjedne koje za nju morate odraditi.',
      tag: 'Posao',
      lead: 'Unesite svoju zaradu i cijenu i pogledajte koliko dugo za to morate raditi.',
      period: {
        label: 'Znam svoju zaradu',
        hour: 'Po satu',
        month: 'Mjesečno',
        year: 'Godišnje'
      },
      pay: {
        label: 'Zarada',
        unit: '€ po satu',
        value: '8',
        step: '0.5',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Za najiskreniji odgovor upotrijebite neto plaću nakon poreza i doprinosa.',
        decrease: 'Smanji zaradu',
        increase: 'Povećaj zaradu'
      },
      hoursPerWeek: {
        label: 'Sati tjedno',
        unit: 'sati',
        value: '40',
        chip1: '36 h',
        chip2: '40 h',
        preset1: '36',
        preset2: '40',
        decrease: 'Smanji broj sati tjedno',
        increase: 'Povećaj broj sati tjedno'
      },
      price: {
        label: 'Cijena',
        unit: '€',
        value: '999',
        step: '10',
        decrease: 'Smanji cijenu',
        increase: 'Povećaj cijenu'
      },
      resultsTitle: 'Cijena u radnom vremenu',
      youNeedToWork: 'Morate raditi',
      workDays: 'Radni dani',
      workWeeks: 'Radni tjedni',
      hourlyRate: 'Vaša satnica',
      runtime: {
        unit: {
          hour: '€ po satu',
          month: '€ mjesečno',
          year: '€ godišnje'
        },
        days: { one: '{n} dan', few: '{n} dana', other: '{n} dana' },
        weeks: { one: '{n} tjedan', few: '{n} tjedna', other: '{n} tjedana' },
        note: {
          empty: 'Unesite zaradu, broj sati tjedno i cijenu i pogledajte koliko dugo za to morate raditi.',
          result: 'Izračunato uz radni dan od {hours} h i {days} radnih dana tjedno.'
        }
      },
      about: {
        title: 'Kako se izračunava radno vrijeme',
        paragraphs: [
          'Najprije se vaša zarada pretvara u satnicu. Mjesečna plaća množi se s 12 i dijeli s brojem sati koje odradite u godini (sati tjedno × 52), a godišnja se plaća izravno dijeli s tim brojem sati. Cijena se zatim dijeli s vašom satnicom.',
          'Radni dani računaju se s petodnevnim radnim tjednom, pa 40 sati tjedno znači radne dane od 8 sati. Na primjer, uz 8 € na sat mobitel od 999 € košta vas gotovo 125 sati rada – više od tri puna radna tjedna.',
          'Za najiskreniji odgovor upotrijebite neto plaću nakon poreza i doprinosa, jer je to novac koji stvarno trošite. Razmišljati o cijenama u radnim satima jednostavan je način da odlučite je li nešto doista vrijedno svoje cijene.'
        ]
      },
      faq: [
        {
          q: 'Koliko sati moram raditi za neku kupnju?',
          a: 'Podijelite cijenu sa svojom neto satnicom. Ako nakon poreza zarađujete 8 € na sat, kupnja od 200 € košta vas 25 sati rada.'
        },
        {
          q: 'Trebam li računati s bruto ili s neto plaćom?',
          a: 'Neto plaća nakon poreza i doprinosa daje najrealniji odgovor, jer je to novac koji vam stvarno stoji na raspolaganju. S bruto plaćom stvari izgledaju jeftinije nego što jesu.'
        },
        {
          q: 'Kako mjesečnu plaću pretvoriti u satnicu?',
          a: 'Pomnožite mjesečnu plaću s 12 i podijelite je s brojem sati koje odradite u godini. Uz radni tjedan od 40 sati to je 2.080 sati, pa 1.400 € neto mjesečno odgovara otprilike 8,08 € na sat. Kalkulator to izračuna umjesto vas kad odaberete Mjesečno.'
        }
      ]
    },

    costperuse: {
      name: 'Cijena po korištenju',
      heading: 'Kalkulator cijene po korištenju',
      title: 'Kalkulator cijene po korištenju – isplati li se kupnja?',
      description: 'Izračunajte koliko vas neka stvar stvarno košta svaki put kad je koristite: cijena umanjena za iznos koji dobijete prodajom, podijeljena s brojem korištenja.',
      card: 'Raspodijelite cijenu na svako korištenje i provjerite isplati li se kupnja.',
      tag: 'Kupnja',
      lead: 'Unesite cijenu te koliko ćete često i koliko dugo koristiti neku stvar i pogledajte koliko stvarno košta svako korištenje.',
      price: {
        label: 'Cijena',
        unit: '€',
        value: '500',
        step: '10',
        decrease: 'Smanji cijenu',
        increase: 'Povećaj cijenu'
      },
      period: {
        label: 'Koliko je često koristite',
        week: 'Tjedno',
        month: 'Mjesečno',
        year: 'Godišnje'
      },
      uses: {
        label: 'Korištenja',
        unit: 'puta tjedno',
        decrease: 'Smanji broj korištenja',
        increase: 'Povećaj broj korištenja'
      },
      years: {
        label: 'Razdoblje korištenja',
        unit: 'godina',
        chip1: '1 godina',
        chip2: '3 godine',
        chip3: '5 godina',
        decrease: 'Skrati razdoblje korištenja',
        increase: 'Produlji razdoblje korištenja'
      },
      resale: {
        label: 'Vrijednost pri prodaji',
        unit: '€, neobavezno',
        hint: 'Koliko očekujete dobiti kad stvar prodate. Ako ništa, ostavite 0.',
        decrease: 'Smanji vrijednost pri prodaji',
        increase: 'Povećaj vrijednost pri prodaji'
      },
      resultsTitle: 'Cijena po korištenju',
      perUse: 'Jedno korištenje košta',
      totalUses: 'Ukupno korištenja',
      perMonth: 'Mjesečno',
      perYear: 'Godišnje',
      runtime: {
        unit: {
          week: 'puta tjedno',
          month: 'puta mjesečno',
          year: 'puta godišnje'
        },
        note: {
          empty: 'Unesite cijenu, koliko je često koristite i koliko godina. Vrijednost pri prodaji mora biti niža od cijene.',
          result: 'Da je koristite godinu dana dulje, cijena po korištenju pala bi na {next}.'
        }
      },
      about: {
        title: 'Kako se izračunava cijena po korištenju',
        paragraphs: [
          'Cijena po korištenju jest cijena umanjena za ono što dobijete natrag prodajom, podijeljena s brojem korištenja. Broj korištenja je koliko često stvar koristite × broj tjedana, mjeseci ili godina korištenja. Stvar od 500 € koju koristite 3 puta tjedno tijekom 3 godine upotrijebit ćete 468 puta, pa jedno korištenje košta 1,07 €.',
          'Mjesečni i godišnji trošak raspoređuju isti iznos na vrijeme u kojem stvar posjedujete, pa je lako usporediti kupnju s najmom, leasingom ili pretplatom.',
          'Cijena po korištenju jednostavan je način da usporedite jeftinu stvar koja se brzo istroši sa skupljom koja dugo traje. Tenisice od 60 € nošene 50 puta koštaju 1,20 € po nošenju, a one od 200 € nošene 400 puta samo 0,50 €.'
        ]
      },
      faq: [
        {
          q: 'Kako izračunati cijenu po korištenju?',
          a: 'Podijelite cijenu s brojem korištenja. Ako stvar poslije prodate, najprije od cijene oduzmite iznos koji ćete dobiti. Jakna od 120 € nošena 80 puta košta 1,50 € po nošenju.'
        },
        {
          q: 'Koja je cijena po korištenju dobra?',
          a: 'Ovisi o tome koliko košta alternativa. Usporedite je s najmom, posudbom ili plaćanjem pri svakom korištenju: ako jednokratni ulaz u teretanu košta 10 €, mjesečna članarina od 40 € isplati se od petog posjeta u mjesecu.'
        },
        {
          q: 'Vrijedi li to i za pretplate i članarine?',
          a: 'Da. Kao cijenu unesite godišnju cijenu, zatim koliko često uslugu koristite i 1 godinu. Za mjesečnu članarinu u teretani od 40 € unesite 480 € i broj posjeta tjedno.'
        }
      ]
    },

    coffee: {
      name: 'Trošak kave',
      heading: 'Kalkulator troška kave',
      title: 'Kalkulator troška kave – koliko vas kava košta godišnje',
      description: 'Pogledajte koliko vas svakodnevna kava košta mjesečno te kroz 1, 5 i 10 godina. Unesite cijenu šalice i broj šalica tjedno – besplatno i privatno.',
      card: 'Pogledajte koliko se vaša svakodnevna kava nakupi kroz jednu, pet i deset godina.',
      tag: 'Navika',
      lead: 'Unesite koliko košta šalica kave i koliko je često kupujete i pogledajte koliko ta navika iznosi kroz godine.',
      price: {
        label: 'Cijena šalice',
        unit: '€',
        step: '0.1',
        value: '2',
        decrease: 'Smanji cijenu kave',
        increase: 'Povećaj cijenu kave'
      },
      perWeek: {
        label: 'Šalica tjedno',
        unit: 'šalica',
        chip1: 'Radnim danima',
        chip2: 'Svaki dan',
        chip3: 'Dvaput dnevno',
        decrease: 'Smanji broj šalica tjedno',
        increase: 'Povećaj broj šalica tjedno'
      },
      resultsTitle: 'Koliko se nakupi',
      in10Years: 'Za 10 godina',
      perMonth: 'Mjesečno',
      year1: '1 godina',
      year5: '5 godina',
      runtime: {
        note: {
          empty: 'Unesite cijenu i broj šalica tjedno da biste vidjeli zbrojeve.',
          result: 'To je oko {cups} šalica godišnje, svaka po {price}.'
        }
      },
      about: {
        title: 'Kako se izračunava trošak kave',
        paragraphs: [
          'Godišnji trošak je cijena šalice × broj šalica tjedno × 52 tjedna. Mjesečni trošak je godišnji trošak podijeljen s 12, a zbrojevi za 5 i 10 godina množe godišnji trošak bez inflacije i poskupljenja.',
          'Kava od 2 € u kafiću svakog radnog dana iznosi 520 € godišnje i 5.200 € u deset godina. Ako vas ta brojka iznenadi, kava skuhana kod kuće ili kava iz vlastite termošalice jednostavni su načini da uštedite.',
          'Kalkulator možete upotrijebiti za svaku malu, redovitu kupnju: energetsko piće, burek za doručak ili bocu vode. Unesite cijenu i koliko ih kupite tjedno.'
        ]
      },
      faq: [
        {
          q: 'Koliko godišnje košta jedna kava dnevno?',
          a: 'Jedna šalica dnevno, sedam dana u tjednu, to je 364 šalice godišnje. Uz 2 € po šalici to je 728 € godišnje i 7.280 € u deset godina.'
        },
        {
          q: 'Je li jeftinije kuhati kavu kod kuće?',
          a: 'Obično i to znatno. Šalica skuhana kod kuće često košta manje od 30 centi, a u kafiću ćete platiti oko 2 €. Unesite cijenu šalice kod kuće i usporedite.'
        },
        {
          q: 'Uzima li kalkulator u obzir inflaciju?',
          a: 'Ne. Izračuni pretpostavljaju da cijena ostaje ista, pa pokazuju koliko navika košta po današnjim cijenama. Ako cijene rastu, stvarni dugoročni trošak je veći.'
        },
        {
          q: 'Što ako novac umjesto toga uložim?',
          a: 'Okvir „Da ste novac umjesto toga uložili” pokazuje koliko bi novac narastao da ga svaki mjesec ulažete umjesto da ga trošite, uz godišnji prinos od 4 % i mjesečnu kapitalizaciju. Kava od 2 € svakog radnog dana iznosi 43,33 € mjesečno, što za 10 godina naraste na oko 6.360 € – od toga je 5.200 € vaš novac, a ostatak je prinos. Porezi, naknade i inflacija nisu uračunati. Ovo je primjer, a ne investicijski savjet.'
        }
      ]
    },

    smoking: {
      name: 'Trošak pušenja',
      heading: 'Kalkulator troška pušenja',
      title: 'Kalkulator troška pušenja – koliko vas koštaju cigarete',
      description: 'Saznajte koliko vas pušenje košta mjesečno te kroz 1, 5 i 10 godina – i koliko ćete uštedjeti ako prestanete. Unesite cijenu kutije i broj cigareta dnevno.',
      card: 'Saznajte koliko novca svaki mjesec i kroz godine doslovno ode u dim.',
      tag: 'Navika',
      lead: 'Unesite cijenu kutije i koliko pušite i pogledajte koliko vam novca kroz godine ode u dim.',
      packPrice: {
        label: 'Cijena kutije',
        unit: '€',
        step: '0.1',
        value: '5',
        decrease: 'Smanji cijenu kutije',
        increase: 'Povećaj cijenu kutije'
      },
      perDay: {
        label: 'Cigareta dnevno',
        unit: 'cigareta',
        chip1: '5 dnevno',
        chip2: '10 dnevno',
        chip3: '20 dnevno',
        decrease: 'Smanji broj cigareta dnevno',
        increase: 'Povećaj broj cigareta dnevno'
      },
      perPack: {
        label: 'Cigareta u kutiji',
        unit: 'komada u kutiji',
        value: '20',
        decrease: 'Smanji broj cigareta u kutiji',
        increase: 'Povećaj broj cigareta u kutiji'
      },
      resultsTitle: 'Odlazi u dim',
      in10Years: 'Za 10 godina',
      perMonth: 'Mjesečno',
      year1: '1 godina',
      year5: '5 godina',
      runtime: {
        note: {
          empty: 'Unesite cijenu kutije, koliko cigareta dnevno popušite i koliko ih je u kutiji da biste vidjeli zbrojeve.',
          result: 'To je oko {cigarettes} cigareta ({packs} kutija) godišnje, a jedna cigareta košta {price}.'
        }
      },
      about: {
        title: 'Kako se izračunava trošak pušenja',
        paragraphs: [
          'Cijena jedne cigarete je cijena kutije podijeljena s brojem cigareta u kutiji. Ona se množi s brojem cigareta popušenih dnevno i s 365 dana, što daje godišnji trošak. Mjesečni trošak je dvanaestina toga, a zbrojevi za 5 i 10 godina računaju se po današnjim cijenama.',
          'Pola kutije dnevno uz cijenu od 5 € po kutiji iznosi oko 913 € godišnje i više od 9.100 € u deset godina. Vidjeti ukupan iznos može biti snažna motivacija: isti novac mogao bi otići na putovanje, ušteđevinu ili otplatu duga.',
          'Kalkulator računa samo cijenu cigareta. Zdravstveni troškovi, više premije osiguranja i dani bolovanja dolaze povrh toga. Ako želite prestati pušiti, mogu vam pomoći vaš liječnik obiteljske medicine ili lokalno savjetovalište za odvikavanje od pušenja.'
        ]
      },
      faq: [
        {
          q: 'Koliko godišnje košta kutija cigareta dnevno?',
          a: 'Kutija dnevno je 365 kutija godišnje. Uz 5 € po kutiji to je 1.825 € godišnje i 18.250 € u deset godina.'
        },
        {
          q: 'Koliko ću novca uštedjeti ako prestanem pušiti?',
          a: 'Sve što ovaj kalkulator pokazuje. Unesite koliko pušite danas: mjesečni i godišnji zbrojevi iznosi su koje ćete uštedjeti ako prestanete.'
        },
        {
          q: 'Može li se kalkulator koristiti i za duhan za motanje?',
          a: 'Da. Kao cijenu kutije unesite cijenu paketića duhana, kao broj cigareta u kutiji koliko cigareta od njega smotate, a zatim koliko ih popušite dnevno.'
        },
        {
          q: 'Što ako novac umjesto toga uložim?',
          a: 'Okvir „Da ste novac umjesto toga uložili” pokazuje koliko bi novac narastao da ga svaki mjesec ulažete umjesto da ga potrošite na cigarete, uz godišnji prinos od 4 % i mjesečnu kapitalizaciju. Pola kutije dnevno uz 5 € po kutiji iznosi oko 76 € mjesečno, što za 10 godina naraste na oko 11.155 € – od toga je 9.125 € vaš novac, a ostatak je prinos. Porezi, naknade i inflacija nisu uračunati. Ovo je primjer, a ne investicijski savjet.'
        }
      ]
    },

    alcohol: {
      name: 'Trošak alkohola',
      heading: 'Kalkulator troška alkohola',
      title: 'Kalkulator troška alkohola – koliko vas košta piće',
      description: 'Pogledajte koliko vas pivo, vino i druga pića koštaju mjesečno te kroz 1, 5 i 10 godina i koliko bi isti novac narastao da ga uložite.',
      card: 'Pogledajte koliko se vaša tjedna pića nakupe kroz jednu, pet i deset godina.',
      tag: 'Navika',
      lead: 'Unesite koliko košta jedno piće i koliko ih popijete tjedno i pogledajte koliko se to nakupi kroz godine.',
      price: {
        label: 'Cijena pića',
        unit: '€',
        step: '0.1',
        value: '3.5',
        hint: 'Pijete i kod kuće i vani? Upotrijebite prosječnu cijenu.',
        decrease: 'Smanji cijenu pića',
        increase: 'Povećaj cijenu pića'
      },
      perWeek: {
        label: 'Pića tjedno',
        unit: 'pića',
        chip1: '3 tjedno',
        chip2: '7 tjedno',
        chip3: '14 tjedno',
        decrease: 'Smanji broj pića tjedno',
        increase: 'Povećaj broj pića tjedno'
      },
      resultsTitle: 'Koliko se nakupi',
      in10Years: 'Za 10 godina',
      perMonth: 'Mjesečno',
      year1: '1 godina',
      year5: '5 godina',
      runtime: {
        note: {
          empty: 'Unesite cijenu i broj pića tjedno da biste vidjeli zbrojeve.',
          result: 'To je oko {drinks} pića godišnje, svako po {price}.'
        }
      },
      about: {
        title: 'Kako se izračunava trošak alkohola',
        paragraphs: [
          'Godišnji trošak je cijena pića × broj pića tjedno × 52 tjedna. Mjesečni trošak je dvanaestina toga, a zbrojevi za 5 i 10 godina računaju se po današnjim cijenama, bez inflacije.',
          'Šest piva tjedno po 3,50 € iznosi 1.092 € godišnje i 10.920 € u deset godina. Ako pijete i u kafiću i kod kuće, upotrijebite prosječnu cijenu ili izračunajte svako zasebno i zbrojite.',
          'Okvir „Da ste novac umjesto toga uložili” pokazuje koliko bi isti novac narastao da ga svaki mjesec ulažete, uz godišnji prinos od 4 % tijekom 10 godina. Kalkulator računa samo cijenu pića; posljedice za zdravlje dolaze povrh toga. Ako želite piti manje, mogu vam pomoći vaš liječnik obiteljske medicine ili lokalno savjetovalište za probleme s alkoholom.'
        ]
      },
      faq: [
        {
          q: 'Koliko godišnje potrošim na alkohol?',
          a: 'Pomnožite cijenu pića s brojem pića tjedno i s 52. Šest pića tjedno po 3,50 € iznosi 1.092 € godišnje.'
        },
        {
          q: 'Koliko mogu uštedjeti ako smanjim pijenje?',
          a: 'Unesite broj pića na koji biste htjeli smanjiti i usporedite. Smanjite li sa 6 na 3 pića tjedno po 3,50 €, uštedjet ćete 546 € godišnje i 5.460 € u deset godina.'
        },
        {
          q: 'Što ako novac umjesto toga uložim?',
          a: 'Okvir „Da ste novac umjesto toga uložili” pokazuje koliko biste imali nakon 10 godina da novac svaki mjesec ulažete umjesto da ga trošite, uz godišnji prinos od 4 % i mjesečnu kapitalizaciju. Šest pića po 3,50 € tjedno iznosi 91 € mjesečno, što naraste na oko 13.350 € – od toga je 10.920 € vaš novac, a ostatak je prinos. Porezi, naknade i inflacija nisu uračunati. Ovo je primjer, a ne investicijski savjet.'
        }
      ]
    },

    gambling: {
      name: 'Lutrija i klađenje',
      heading: 'Kalkulator troška lutrije i klađenja',
      title: 'Kalkulator lutrije i klađenja – koliko košta kockanje',
      description: 'Pogledajte koliko listići i oklade koštaju mjesečno i kroz 10 godina, koliko u prosjeku gubite i koliko bi taj novac narastao da ga uložite.',
      card: 'Pogledajte koliko se nakupe lutrijski listići i oklade i koliko u prosjeku gubite.',
      tag: 'Navika',
      lead: 'Unesite svoj ulog i koliko često igrate i pogledajte koliko vas lutrija i klađenje koštaju kroz godine – i koliko vam se od toga u prosjeku vrati kao dobitak.',
      stake: {
        label: 'Ulog po igri',
        unit: '€',
        step: '1',
        value: '5',
        decrease: 'Smanji ulog',
        increase: 'Povećaj ulog'
      },
      perWeek: {
        label: 'Igara tjedno',
        unit: 'igara',
        chip1: 'Jednom tjedno',
        chip2: 'Dvaput tjedno',
        chip3: 'Svaki dan',
        decrease: 'Smanji broj igara tjedno',
        increase: 'Povećaj broj igara tjedno'
      },
      payout: {
        label: 'Stopa isplate',
        unit: '% se vraća',
        chip1: 'Loto',
        chip2: 'Sportsko klađenje',
        chip3: 'Kasino',
        hint: 'Udio svih uloga koji se igračima vraća kao dobitak. Lutrije obično vraćaju otprilike polovicu, a sportsko klađenje i kasino igre 90–97 %.',
        decrease: 'Smanji stopu isplate',
        increase: 'Povećaj stopu isplate'
      },
      resultsTitle: 'Koliko to košta',
      in10Years: 'Ulozi za 10 godina',
      perMonth: 'Mjesečno',
      perYear: 'Godišnje',
      lossPerYear: 'Prosječni gubitak godišnje',
      runtime: {
        note: {
          empty: 'Unesite ulog, koliko puta tjedno igrate i stopu isplate (0–100).',
          result: 'U prosjeku vam se oko {back} godišnje vrati kao dobitak, pa gubite oko {loss} godišnje i {loss10} za 10 godina.'
        }
      },
      about: {
        title: 'Kako se izračunava trošak lutrije i klađenja',
        paragraphs: [
          'Godišnji trošak je ulog × broj igara tjedno × 52 tjedna. Mjesečni trošak je dvanaestina toga, a zbroj za 10 godina računa se s današnjim ulozima.',
          'Stopa isplate je udio svih uloga koji se igračima vraća kao dobitak. Uz stopu isplate od 50 %, ulog od 5 € dvaput tjedno iznosi 520 € godišnje, od čega se u prosjeku oko 260 € vrati kao dobitak – prosječni je gubitak dakle 260 € godišnje. Pojedinac može puno dobiti ili sve izgubiti, ali što je više igara, to je rezultat bliži prosjeku.',
          'Okvir „Da ste novac umjesto toga uložili” pokazuje koliko bi novac od uloga narastao da ga umjesto toga svaki mjesec ulažete, uz godišnji prinos od 4 % tijekom 10 godina. Ako vam se čini da teško kontrolirate kockanje, mogu vam pomoći vaš liječnik obiteljske medicine ili lokalno savjetovalište za probleme s kockanjem.'
        ]
      },
      faq: [
        {
          q: 'Koliko godišnje potrošim na lutriju?',
          a: 'Pomnožite ulog s brojem igara tjedno i s 52. Ulog od 5 € dvaput tjedno iznosi 520 € godišnje i 5.200 € u deset godina.'
        },
        {
          q: 'Što je stopa isplate?',
          a: 'To je udio svih uloga koji se igračima isplaćuje kao dobitak. Lutrije obično vraćaju otprilike polovicu uloga, a sportsko klađenje i kasino igre 90–97 %. Ostatak zadržava priređivač igara – i upravo toliko igrači u prosjeku izgube.'
        },
        {
          q: 'Što ako novac umjesto toga uložim?',
          a: 'Okvir „Da ste novac umjesto toga uložili” pokazuje koliko biste imali nakon 10 godina da novac od uloga umjesto toga svaki mjesec ulažete, uz godišnji prinos od 4 % i mjesečnu kapitalizaciju. Ulog od 5 € dvaput tjedno iznosi oko 43,33 € mjesečno, što naraste na oko 6.360 € – od toga je 5.200 € vaš novac, a ostatak je prinos. Porezi, naknade i inflacija nisu uračunati. Ovo je primjer, a ne investicijski savjet.'
        }
      ]
    },

    subscriptions: {
      name: 'Pretplate',
      heading: 'Kalkulator troška pretplata',
      title: 'Kalkulator pretplata – mjesečni i godišnji zbroj',
      description: 'Zbrojite streaming, teretanu, mobilnu tarifu i sve ostale pretplate. Pogledajte ukupni iznos mjesečno, godišnje i za 10 godina te koja vas pretplata najviše košta.',
      card: 'Zbrojite streaming, teretanu i sva ostala redovita plaćanja na jednom mjestu.',
      tag: 'Proračun',
      lead: 'Popišite sve što redovito plaćate i pogledajte koliko to ukupno iznosi. Podržano je mjesečno, godišnje i tjedno plaćanje.',
      listTitle: 'Vaše pretplate',
      empty: 'Još nema pretplata. Dodajte jednu u nastavku ili upotrijebite brzo dodavanje.',
      add: 'Dodaj pretplatu',
      quickAdd: 'Brzo dodavanje',
      quick: {
        1: { name: 'Streaming videa', price: '10.99' },
        2: { name: 'Streaming glazbe', price: '7.99' },
        3: { name: 'Teretana', price: '40' },
        4: { name: 'Pohrana u oblaku', price: '1.99' },
        5: { name: 'Mobilna tarifa', price: '15' },
        6: { name: 'Digitalne novine', price: '5.99' }
      },
      note: 'Vaš se popis sprema u adresu stranice, pa ga možete spremiti u oznake ili podijeliti. Nikamo se ne šalje.',
      row: {
        name: 'Naziv',
        nameLabel: 'Naziv pretplate',
        priceLabel: 'Cijena u eurima',
        cycleLabel: 'Razdoblje naplate',
        monthly: '/ mjesec',
        yearly: '/ godina',
        weekly: '/ tjedan'
      },
      resultsTitle: 'Ukupno za pretplate',
      perYear: 'Godišnje',
      perMonth: 'Mjesečno',
      perDay: 'Dnevno',
      in10Years: 'Za 10 godina',
      breakdownLabel: 'Godišnji trošak po pretplati',
      copySummary: 'Kopiraj sažetak',
      runtime: {
        untitled: 'Bez naziva',
        remove: 'Ukloni: {name}',
        removeUnnamed: 'Ukloni pretplatu',
        breakdown: '{cost} / godina · {percent} %',
        cycle: { monthly: 'mjesec', yearly: 'godina', weekly: 'tjedan' },
        note: {
          empty: 'Dodajte pretplatu s cijenom da biste vidjeli zbrojeve.',
          single: '{name} vas košta {cost} godišnje.',
          biggest: 'Najveći vam je trošak {name}: {cost} godišnje, odnosno {percent} % ukupnog iznosa.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Ukupno: {month} mjesečno, {year} godišnje'
        }
      },
      about: {
        title: 'Kako se izračunava zbroj pretplata',
        paragraphs: [
          'Svaka se pretplata pretvara u godišnji trošak: mjesečne cijene množe se s 12, tjedne s 52, a godišnje se uzimaju kakve jesu. Godišnji zbroj zatim se dijeli s 12 za mjesečni trošak i s 365 za dnevni trošak.',
          'Pregled razvrstava pretplate od najskuplje do najjeftinije i za svaku pokazuje njezin udio u ukupnom iznosu, pa ćete lako uočiti što otkazati ili prebaciti na jeftiniji paket.',
          'Vaš se popis sprema u adresu stranice, nikad na poslužitelj. Spremite stranicu u oznake da biste se kasnije vratili svom popisu ili podijelite poveznicu i zajedno s obitelji prođite zajedničke pretplate.'
        ]
      },
      faq: [
        {
          q: 'Kako pronaći sve svoje pretplate?',
          a: 'Pregledajte izvode s bankovnog računa i kreditne kartice za posljednjih nekoliko mjeseci i potražite plaćanja koja se ponavljaju. Provjerite i postavke pretplata u App Storeu, na Google Playu i na PayPalu.'
        },
        {
          q: 'Je li godišnja pretplata jeftinija od mjesečne?',
          a: 'Često za 15–20 %, ali samo ako biste uslugu ionako koristili cijelu godinu. Dodajte obje varijante na popis i usporedite njihov godišnji trošak.'
        },
        {
          q: 'Sprema li se moj popis?',
          a: 'Vaš je popis spremljen samo u adresi stranice. Da biste ga sačuvali, spremite poveznicu u oznake ili je podijelite; ništa se ne sprema na poslužitelj ni u kolačiće.'
        },
        {
          q: 'Što ako novac umjesto toga uložim?',
          a: 'Okvir „Da ste novac umjesto toga uložili” pokazuje koliko bi narastao novac koji dajete za pretplate da isti iznos umjesto toga svaki mjesec ulažete, uz godišnji prinos od 4 % i mjesečnu kapitalizaciju. Iznos od 50 € mjesečno za 10 godina naraste na oko 7.335 € – od toga je 6.000 € vaš novac, a ostatak je prinos. Porezi, naknade i inflacija nisu uračunati. Ovo je primjer, a ne investicijski savjet.'
        }
      ]
    },

    electricity: {
      name: 'Trošak struje',
      heading: 'Kalkulator troška struje',
      title: 'Kalkulator troška struje – koliko košta rad uređaja',
      description: 'Izračunajte koliko rad uređaja košta dnevno, mjesečno i godišnje prema njegovoj snazi, vremenu rada i cijeni struje. Besplatni kalkulator troška po kWh.',
      card: 'Pogledajte koliko košta držati uređaj uključenim – dnevno, mjesečno i godišnje.',
      tag: 'Dom',
      lead: 'Unesite snagu uređaja, koliko dugo radi i koliko plaćate struju i pogledajte koliko njegov rad stvarno košta.',
      power: {
        label: 'Snaga',
        unit: 'vata',
        chip1: 'LED žarulja 9 W',
        chip2: 'Laptop 60 W',
        chip3: 'Televizor 100 W',
        chip4: 'Igraće računalo 400 W',
        chip5: 'Grijalica 1.500 W',
        decrease: 'Smanji snagu',
        increase: 'Povećaj snagu'
      },
      hours: {
        label: 'Sati dnevno',
        unit: 'sati',
        decrease: 'Smanji broj sati dnevno',
        increase: 'Povećaj broj sati dnevno'
      },
      days: {
        label: 'Dana tjedno',
        unit: 'dana',
        decrease: 'Smanji broj dana tjedno',
        increase: 'Povećaj broj dana tjedno'
      },
      kwhPrice: {
        label: 'Cijena struje',
        unit: '€/kWh',
        value: '0.15',
        step: '0.01',
        divisor: '1',
        hint: 'Za najtočniji rezultat uračunajte i mrežarinu, naknade i PDV.',
        decrease: 'Smanji cijenu struje',
        increase: 'Povećaj cijenu struje'
      },
      resultsTitle: 'Trošak rada',
      perYear: 'Godišnje',
      perDayOfUse: 'Po danu rada',
      perMonth: 'Mjesečno',
      energyPerYear: 'Potrošnja godišnje',
      runtime: {
        note: {
          empty: 'Unesite snagu, broj sati dnevno (najviše 24), broj dana tjedno (najviše 7) i cijenu struje.',
          result: 'Troši oko {day} svakog dana kad radi, odnosno oko {year} godišnje.'
        }
      },
      about: {
        title: 'Kako se izračunava trošak struje',
        paragraphs: [
          'Potrošnja energije u kilovatsatima (kWh) jest snaga u vatima × sati rada ÷ 1.000. Televizor od 100 W koji radi 4 sata potroši 0,4 kWh dnevno. Kad to pomnožite s cijenom struje po kWh, dobijete trošak po danu rada – uz 0,15 €/kWh to je 6 centi.',
          'Godišnji trošak uzima u obzir koliko dana u tjednu uređaj radi, raspoređeno na 365 dana u godini. Mjesečni trošak je dvanaestina godišnjeg.',
          'Snagu ćete pronaći na natpisnoj pločici uređaja ili u uputama za uporabu. Mnogi uređaji većinu vremena troše manje od svoje najveće snage, pa je rezultat gornja procjena. Za najtočniju cijenu uz cijenu same energije uračunajte i mrežarinu (prijenos i distribuciju), opskrbnu naknadu, naknadu za obnovljive izvore energije i PDV.'
        ]
      },
      faq: [
        {
          q: 'Kako izračunati trošak struje za neki uređaj?',
          a: 'Pomnožite snagu u kilovatima s brojem sati rada i s cijenom po kWh. Rad grijalice od 1.500 W tijekom 3 sata košta 1,5 kW × 3 h × 0,15 € = oko 0,68 € na dan.'
        },
        {
          q: 'Koliko kWh troši neki uređaj?',
          a: 'Podijelite snagu u vatima s 1.000 i pomnožite s brojem sati rada. Laptop od 60 W koji radi 8 sati dnevno potroši 0,48 kWh dnevno – oko 175 kWh godišnje ako ga koristite svaki dan.'
        },
        {
          q: 'Koju cijenu struje trebam upotrijebiti?',
          a: 'Upotrijebite ukupnu cijenu po kWh s računa za struju, uključujući cijenu energije, mrežarinu, naknade i PDV. Dobar prosjek dobit ćete ako ukupni iznos računa podijelite s potrošenim kWh. Imate li dvotarifno brojilo, upotrijebite prosjek više i niže tarife.'
        },
        {
          q: 'Troši li struju i stanje pripravnosti?',
          a: 'Da, mnogi uređaji u stanju pripravnosti (stand-by) troše nekoliko vata. Unesite snagu u stanju pripravnosti i 24 sata dnevno i pogledajte koliko to košta godišnje.'
        }
      ]
    },

    trip: {
      name: 'Trošak puta',
      heading: 'Kalkulator troška goriva',
      title: 'Kalkulator troška goriva – put autom i vožnja na posao',
      description: 'Izračunajte trošak goriva za put ili svakodnevnu vožnju na posao i podijelite ga sa suputnicima. Radi u kilometrima i litrama ili u miljama i galonima.',
      card: 'Izračunajte trošak goriva za put ili vožnju na posao i podijelite ga s drugima.',
      tag: 'Putovanje',
      lead: 'Izračunajte trošak goriva za jedan put ili svakodnevnu vožnju na posao i podijelite ga sa svima u autu.',
      unit: {
        label: 'Jedinice',
        metric: 'Kilometri i litre',
        us: 'Milje i galoni'
      },
      distance: {
        label: 'Udaljenost',
        unit: 'km u jednom smjeru',
        decrease: 'Smanji udaljenost',
        increase: 'Povećaj udaljenost'
      },
      direction: {
        label: 'Put',
        one: 'U jednom smjeru',
        round: 'Tamo i natrag'
      },
      consumption: {
        label: 'Potrošnja goriva',
        unit: 'l/100 km',
        hint: 'Vozite električni auto? Unesite kWh/100 km i cijenu po kWh.',
        decrease: 'Smanji potrošnju',
        increase: 'Povećaj potrošnju'
      },
      fuelPrice: {
        label: 'Cijena goriva',
        unit: '€ po litri',
        value: '1.5',
        step: '0.05',
        usStep: '0.1',
        decrease: 'Smanji cijenu goriva',
        increase: 'Povećaj cijenu goriva'
      },
      people: {
        label: 'Broj osoba koje dijele trošak',
        unit: 'osoba',
        decrease: 'Smanji broj osoba',
        increase: 'Povećaj broj osoba'
      },
      tripsPerWeek: {
        label: 'Vožnji tjedno',
        unit: 'za mjesečne i godišnje zbrojeve',
        decrease: 'Smanji broj vožnji tjedno',
        increase: 'Povećaj broj vožnji tjedno'
      },
      resultsTitle: 'Trošak goriva',
      perPerson: 'Po osobi',
      perMonth: 'Mjesečno',
      perYear: 'Godišnje',
      runtime: {
        direction: { one: 'U jednom smjeru', round: 'Tamo i natrag' },
        unit: {
          metric: {
            distance: 'km u jednom smjeru',
            consumption: 'l/100 km',
            price: '€ po litri',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'milja u jednom smjeru',
            consumption: 'mpg',
            price: '€ po galonu',
            perDistance: 'milji',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Unesite udaljenost, potrošnju i cijenu goriva da biste vidjeli trošak.',
          result: 'Po vožnji potrošite {fuel} goriva, oko {price} po {distance}.'
        }
      },
      about: {
        title: 'Kako se izračunava trošak puta',
        paragraphs: [
          'Potrošeno gorivo je udaljenost × potrošnja ÷ 100. Ako na posao putujete 25 km u jednom smjeru (50 km dnevno) autom koji troši 6,5 l/100 km, dnevno potrošite 3,25 litre goriva. Pomnožite to s cijenom po litri i dobit ćete trošak puta – uz 1,50 € po litri oko 4,88 €. Kad ga podijelite s brojem osoba, dobit ćete udio svake od njih.',
          'U miljama i galonima potrošeno gorivo računa se kao udaljenost podijeljena s potrošnjom u miljama po galonu (mpg). Kad promijenite jedinice, unesene se vrijednosti preračunavaju, pa možete uspoređivati podatke iz obaju sustava.',
          'Mjesečni i godišnji zbrojevi temelje se na broju vožnji tjedno – 5 vožnji tamo i natrag tjedno uobičajeno je putovanje na posao. Za električni auto umjesto toga unesite potrošnju u kWh/100 km i cijenu po kWh.'
        ]
      },
      faq: [
        {
          q: 'Kako izračunati trošak goriva za put?',
          a: 'Pomnožite udaljenost s potrošnjom, podijelite sa 100 i pomnožite s cijenom goriva. Za 200 km autom koji troši 6 l/100 km, uz Eurosuper 95 po 1,50 € po litri: 200 × 6 ÷ 100 × 1,50 € = 18 €.'
        },
        {
          q: 'Kako podijeliti trošak goriva sa suputnicima?',
          a: 'Unesite broj osoba koje dijele trošak. Kalkulator ravnomjerno dijeli trošak puta na sve, uključujući vozača.'
        },
        {
          q: 'Uključuje li kalkulator trošenje auta, parkiranje ili cestarinu?',
          a: 'Ne, računa samo gorivo. Trošenje vozila, osiguranje, parkiranje i cestarina dolaze povrh toga, pa je ukupni trošak vožnje veći.'
        }
      ]
    }
  }
};
