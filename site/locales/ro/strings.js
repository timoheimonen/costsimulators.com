// Romanian texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in Romanian lei (RON).

module.exports = {
  meta: {
    name: 'Română',
    locale: 'ro-RO',
    currency: 'RON',
    ogLocale: 'ro_RO'
  },

  money: {
    symbol: 'lei',
    zero: '0,00 lei',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Salt la conținut',
    home: 'Acasă',
    toggleTheme: 'Schimbă tema',
    themeToLight: 'Treci la tema luminoasă',
    themeToDark: 'Treci la tema întunecată',
    language: 'Limbă',
    allTools: 'Toate instrumentele',
    share: 'Distribuie',
    settings: 'Setări',
    quickPicks: 'Alegeri rapide',
    faqTitle: 'Întrebări frecvente',
    relatedTools: 'Alte calculatoare',
    imageAlt: 'costsimulators.com – calculatoare gratuite pentru întrebările de zi cu zi despre bani'
  },

  footer: {
    privacy: 'Funcționează integral în browserul tău. Fără cookie-uri, fără urmărire.',
    about: 'Despre',
    contact: 'Contact',
    privacyPolicy: 'Confidențialitate',
    terms: 'Termeni'
  },

  runtime: {
    share: {
      linkCopied: 'Link copiat',
      copyFailed: 'Copierea a eșuat',
      copied: 'Copiat!',
      calculatedWith: 'Calculat cu costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    }
  },

  home: {
    title: 'Calculatoare de costuri gratuite pentru viața de zi cu zi | costsimulators.com',
    description: 'Calculatoare gratuite și private care arată cât costă de fapt lucrurile: ședințe, ore de muncă, cafea, fumat, abonamente, curent și benzină. Fără cont, direct în browser.',
    eyebrow: 'Gratuit · Privat · Instant',
    heading: 'Instrumente mici pentru întrebările de zi cu zi despre <span class="accent-text">bani</span>.',
    lead: 'Calculatoare rapide care arată cât costă de fapt lucrurile. Fără cont, fără urmărire – totul rulează direct în browserul tău.',
    toolsTitle: 'Instrumente',
    toolCount: '{count} instrumente',
    suggestTitle: 'Ai o idee?',
    suggestText: 'Propune un instrument nou pe GitHub.',
    whyTitle: 'Cheltuielile mici se adună',
    whyText1: 'O singură ședință, o cafea în drum spre birou sau încă un serviciu de streaming rareori par scumpe luate separat. Adunate pe o lună, un an sau un deceniu, cifrele arată cu totul altfel.',
    whyText2: 'Fiecare calculator face un singur lucru, îți cere doar cifrele de care are nevoie și îți arată imediat rezultatul. Totul se calculează în browser, așa că cifrele tale rămân pe dispozitivul tău.',
    aboutLink: 'Mai multe despre costsimulators.com',
    faq: [
      {
        q: 'Este costsimulators.com gratuit?',
        a: 'Da. Toate calculatoarele sunt complet gratuite, fără cont, fără conținut cu plată și fără reclame. Le poți folosi și la serviciu.'
      },
      {
        q: 'Cifrele mele sunt salvate sau trimise undeva?',
        a: 'Nu. Tot ce introduci se calculează în browser și nu ajunge niciodată pe un server. Site-ul nu folosește cookie-uri și nici instrumente de analiză a traficului.'
      },
      {
        q: 'Pot distribui un calcul?',
        a: 'Da. Setările tale sunt păstrate în adresa paginii. Apasă Distribuie ca să copiezi linkul, iar cine îl deschide vede același calcul.'
      }
    ]
  },

  notFound: {
    title: 'Pagina nu a fost găsită | costsimulators.com',
    description: 'Pagina pe care o căutai nu există.',
    heading: 'Această pagină nu există.',
    lead: 'Este posibil ca adresa să fie greșită sau ca pagina să fi fost mutată. Toate calculatoarele se găsesc pe prima pagină.'
  },

  documents: {
    about: {
      name: 'Despre',
      title: 'Despre noi – calculatoare de costuri gratuite și private | costsimulators.com',
      description: 'Cine face costsimulators.com și cum funcționează calculatoarele. Calculatoare gratuite și private pentru ședințe, ore de muncă, obiceiuri, abonamente, curent și drumuri.'
    },
    privacy: {
      name: 'Politica de confidențialitate',
      title: 'Politica de confidențialitate | costsimulators.com',
      description: 'Cum tratează costsimulators.com datele tale: calculele rulează în browser, fără urmărire, fără instrumente de analiză și fără conturi de utilizator.'
    },
    terms: {
      name: 'Termeni de utilizare',
      title: 'Termeni de utilizare | costsimulators.com',
      description: 'Termenii de utilizare ai costsimulators.com: gratuit pentru uz personal și comercial, oferit „ca atare”, cu cod sursă deschis sub licența MIT.'
    }
  },

  tools: {
    meetings: {
      name: 'Costul ședinței',
      heading: 'Calculator pentru costul ședințelor',
      title: 'Calculator cost ședință – cât costă o ședință, în timp real | costsimulators.com',
      description: 'Calculator gratuit pentru costul unei ședințe, cu cronometru live. Introdu tariful orar și numărul de participanți și vezi cât costă ședința, secundă cu secundă.',
      card: 'Urmărește în timp real cum crește prețul unei ședințe în timp ce vorbiți.',
      tag: 'Cronometru live',
      lead: 'Setează tariful orar și numărul de participanți, apasă Start și urmărește cât costă ședința pe măsură ce se desfășoară.',
      pulseEvery: '1',
      rate: {
        label: 'Tarif orar',
        unit: 'lei pe persoană',
        step: '10',
        value: '100',
        decrease: 'Scade tariful orar',
        increase: 'Crește tariful orar'
      },
      persons: {
        label: 'Participanți',
        unit: 'persoane',
        decrease: 'Scade numărul de participanți',
        increase: 'Crește numărul de participanți'
      },
      perMinute: 'Pe minut',
      perHour: 'Pe oră',
      note: 'Poți modifica valorile în timp ce cronometrul merge. Cei care intră în ședință sau o părăsesc sunt luați în calcul din acel moment.',
      total: 'Cost total',
      elapsed: 'Timp scurs',
      reset: 'Resetează',
      copyReport: 'Copiază raportul',
      kbdHint: 'Apasă <kbd>Spațiu</kbd> pentru start sau pauză',
      runtime: {
        mode: { start: 'Start', pause: 'Pauză', resume: 'Continuă' },
        status: { ready: 'Pregătit', live: 'În curs', paused: 'În pauză' },
        announce: {
          invalid: 'Introdu tariful orar și numărul de participanți ca să pornești.',
          started: 'Cronometrul a pornit.',
          paused: 'Pauză la {cost}, după {time}.',
          reset: 'Cronometrul a fost resetat.'
        },
        report: {
          cost: 'Costul ședinței: {cost}',
          duration: 'Durată: {time}',
          participants: 'Participanți: {persons} × {rate}/oră'
        }
      },
      about: {
        title: 'Cum se calculează costul ședinței',
        paragraphs: [
          'Calculatorul înmulțește numărul de participanți cu tariful lor orar și cu timpul scurs. O ședință de o oră cu 5 persoane la 100 de lei pe oră costă 500 de lei – adică 8,33 lei în fiecare minut.',
          'Ca tarif orar, folosește cât costă de fapt o oră de muncă pentru angajator, nu doar salariul. În România, cele mai multe contribuții sociale se rețin din salariul brut, iar angajatorul mai plătește peste el contribuția asiguratorie pentru muncă, de 2,25 %. La acestea se adaugă concediul plătit, tichetele de masă, echipamentele și spațiul de birou, așa că o oră costă firma vizibil mai mult decât salariul orar brut. Dacă nu știi tariful fiecăruia, o medie pe echipă este suficientă.',
          'Cronometrul numără corect și într-un tab din fundal, iar costul acumulat apare în titlul tabului, așa că îl poți urmări și când îți partajezi ecranul. La finalul ședinței, pune cronometrul pe pauză și copiază un scurt raport pentru minuta ședinței.'
        ]
      },
      faq: [
        {
          q: 'Cum calculez costul unei ședințe?',
          a: 'Înmulțește numărul de participanți cu tariful lor orar mediu și cu durata ședinței în ore. De exemplu, 6 persoane × 80 de lei pe oră × 1,5 ore = 720 de lei. Acest calculator face socoteala în direct, cât timp ședința este în desfășurare.'
        },
        {
          q: 'Ce tarif orar ar trebui să folosesc?',
          a: 'Folosește costul complet al unei ore de muncă: salariul orar brut plus contribuțiile plătite de angajator și celelalte costuri de personal. Pentru consultanți și colaboratori externi, folosește tariful pe care îl facturează.'
        },
        {
          q: 'Pot schimba numărul de participanți în timpul ședinței?',
          a: 'Da. Poți schimba oricând numărul de participanți sau tariful. Noile valori se aplică din acel moment, iar costul deja acumulat rămâne neschimbat.'
        },
        {
          q: 'Cronometrul continuă dacă schimb tabul?',
          a: 'Da. Cronometrul se bazează pe ceas, așa că totalul rămâne corect și într-un tab din fundal. Cât timp cronometrul merge, pagina îi cere browserului și să țină ecranul aprins.'
        }
      ]
    },

    workhours: {
      name: 'Ore de muncă',
      heading: 'Calculator pentru prețul în ore de muncă',
      title: 'Calculator ore de muncă – câte ore muncești ca să cumperi ceva? | costsimulators.com',
      description: 'Transformă orice preț în orele, zilele și săptămânile de muncă necesare. Introdu salariul pe oră, pe lună sau pe an și vezi cât costă de fapt o achiziție în timp de muncă.',
      card: 'Transformă orice preț în orele, zilele și săptămânile pe care trebuie să le muncești pentru el.',
      tag: 'Muncă',
      lead: 'Introdu salariul și un preț ca să vezi cât trebuie să muncești ca să ți-l permiți.',
      period: {
        label: 'Îmi cunosc salariul',
        hour: 'Pe oră',
        month: 'Pe lună',
        year: 'Pe an'
      },
      pay: {
        label: 'Salariu',
        unit: 'lei pe oră',
        value: '30',
        step: '1',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Folosește salariul net, după taxe, pentru cel mai onest răspuns.',
        decrease: 'Scade salariul',
        increase: 'Crește salariul'
      },
      hoursPerWeek: {
        label: 'Ore pe săptămână',
        unit: 'ore',
        value: '40',
        chip1: '37,5 h',
        chip2: '40 h',
        preset1: '37.5',
        preset2: '40',
        decrease: 'Scade orele pe săptămână',
        increase: 'Crește orele pe săptămână'
      },
      price: {
        label: 'Preț',
        unit: 'lei',
        value: '3999',
        step: '100',
        decrease: 'Scade prețul',
        increase: 'Crește prețul'
      },
      resultsTitle: 'Prețul în timp de muncă',
      youNeedToWork: 'Trebuie să muncești',
      workDays: 'Zile de muncă',
      workWeeks: 'Săptămâni de muncă',
      hourlyRate: 'Salariul tău pe oră',
      runtime: {
        unit: {
          hour: 'lei pe oră',
          month: 'lei pe lună',
          year: 'lei pe an'
        },
        days: { one: '{n} zi', few: '{n} zile', other: '{n} de zile' },
        weeks: { one: '{n} săptămână', few: '{n} săptămâni', other: '{n} de săptămâni' },
        note: {
          empty: 'Introdu salariul, orele pe săptămână și un preț ca să vezi cât trebuie să muncești pentru el.',
          result: 'Calcul bazat pe zile de muncă de {hours} h, {days} zile pe săptămână.'
        }
      },
      about: {
        title: 'Cum se calculează timpul de muncă',
        paragraphs: [
          'Mai întâi, salariul tău este transformat în salariu pe oră. Salariul lunar se înmulțește cu 12 și se împarte la orele lucrate într-un an (orele pe săptămână × 52), iar salariul anual se împarte direct la aceste ore. Apoi prețul se împarte la salariul pe oră.',
          'Zilele de muncă presupun o săptămână de cinci zile, așa că 40 de ore pe săptămână înseamnă zile de 8 ore. De exemplu, la 30 de lei pe oră, un telefon de 3.999 de lei costă circa 133 de ore de muncă – aproape 17 zile lucrătoare, adică mai bine de trei săptămâni.',
          'Pentru cel mai onest răspuns, folosește salariul net, după taxe, pentru că aceștia sunt banii pe care îi cheltuiești de fapt. Să te gândești la prețuri în ore de muncă e o metodă simplă de a decide dacă un lucru chiar merită.'
        ]
      },
      faq: [
        {
          q: 'Câte ore trebuie să muncesc ca să-mi permit ceva?',
          a: 'Împarte prețul la salariul tău net pe oră. Dacă câștigi 25 de lei pe oră după taxe, o cumpărătură de 500 de lei te costă 20 de ore de muncă.'
        },
        {
          q: 'Folosesc salariul brut sau pe cel net?',
          a: 'Salariul net, după taxe, dă răspunsul cel mai realist, pentru că aceștia sunt banii pe care îi ai de fapt de cheltuit. Cu salariul brut, lucrurile par mai ieftine decât sunt.'
        },
        {
          q: 'Cum transform salariul lunar în salariu pe oră?',
          a: 'Înmulțește salariul lunar cu 12 și împarte rezultatul la orele lucrate într-un an. La o săptămână de 40 de ore, acestea sunt 2.080 de ore, deci un salariu net de 5.000 de lei pe lună înseamnă circa 28,85 lei pe oră. Calculatorul face asta pentru tine când alegi Pe lună.'
        }
      ]
    },

    coffee: {
      name: 'Costul cafelei',
      heading: 'Calculator pentru costul cafelei',
      title: 'Calculator cost cafea – cât te costă cafeaua pe an? | costsimulators.com',
      description: 'Vezi cât te costă cafeaua zilnică pe lună și în 1, 5 și 10 ani. Introdu prețul unei cești și câte cești bei pe săptămână – gratuit și privat.',
      card: 'Vezi cât adună cafeaua de zi cu zi în unu, cinci și zece ani.',
      tag: 'Obicei',
      lead: 'Introdu cât costă o ceașcă și cât de des cumperi una ca să vezi cât adună obiceiul de-a lungul anilor.',
      price: {
        label: 'Preț pe ceașcă',
        unit: 'lei',
        step: '1',
        value: '15',
        decrease: 'Scade prețul cafelei',
        increase: 'Crește prețul cafelei'
      },
      perWeek: {
        label: 'Cești pe săptămână',
        unit: 'cești',
        chip1: 'Zile lucrătoare',
        chip2: 'În fiecare zi',
        chip3: 'De două ori pe zi',
        decrease: 'Scade numărul de cești pe săptămână',
        increase: 'Crește numărul de cești pe săptămână'
      },
      resultsTitle: 'Cât se adună',
      in10Years: 'În 10 ani',
      perMonth: 'Pe lună',
      year1: '1 an',
      year5: '5 ani',
      runtime: {
        note: {
          empty: 'Introdu un preț și câte cești bei pe săptămână ca să vezi totalurile.',
          result: 'Numărul de cești pe an: circa {cups}, la {price} ceașca.'
        }
      },
      about: {
        title: 'Cum se calculează costul cafelei',
        paragraphs: [
          'Costul anual este prețul pe ceașcă × ceștile pe săptămână × 52 de săptămâni. Costul lunar este costul anual împărțit la 12, iar totalurile pe 5 și 10 ani înmulțesc costul anual, fără inflație sau scumpiri.',
          'O cafea de 15 lei în fiecare zi lucrătoare adună 3.900 de lei pe an și 39.000 de lei în zece ani. Dacă cifra te surprinde, cafeaua făcută acasă sau un termos propriu sunt metode simple de a reduce costul.',
          'Calculatorul funcționează pentru orice cumpărătură mică și regulată: o băutură energizantă, un sandviș la prânz sau o sticlă de apă. Introdu prețul și câte bucăți cumperi pe săptămână.'
        ]
      },
      faq: [
        {
          q: 'Cât costă pe an o cafea pe zi?',
          a: 'O ceașcă pe zi, șapte zile pe săptămână, înseamnă 364 de cești pe an. La 10 lei ceașca, asta face 3.640 de lei pe an și 36.400 de lei în zece ani.'
        },
        {
          q: 'E mai ieftin să faci cafea acasă?',
          a: 'De obicei, mult mai ieftin. O ceașcă făcută acasă costă adesea sub 2 lei, față de 10–20 de lei la cafenea. Introdu costul unei cești făcute acasă ca să compari.'
        },
        {
          q: 'Calculatorul ține cont de inflație?',
          a: 'Nu. Estimările presupun că prețul rămâne același, deci arată cât costă obiceiul la prețurile de azi. Dacă prețurile cresc, costul real pe termen lung este mai mare.'
        }
      ]
    },

    smoking: {
      name: 'Costul fumatului',
      heading: 'Calculator pentru costul fumatului',
      title: 'Calculator cost fumat – cât te costă țigările pe an? | costsimulators.com',
      description: 'Află cât costă fumatul pe lună și în 1, 5 și 10 ani – și cât economisești dacă renunți. Introdu prețul pachetului și câte țigări fumezi pe zi.',
      card: 'Află câți bani se duc în fum în fiecare lună și de-a lungul anilor.',
      tag: 'Obicei',
      lead: 'Introdu cât costă un pachet și cât fumezi ca să vezi câți bani se duc în fum de-a lungul anilor.',
      packPrice: {
        label: 'Prețul pachetului',
        unit: 'lei',
        step: '0.5',
        value: '30',
        decrease: 'Scade prețul pachetului',
        increase: 'Crește prețul pachetului'
      },
      perDay: {
        label: 'Țigări pe zi',
        unit: 'țigări',
        chip1: '5 pe zi',
        chip2: '10 pe zi',
        chip3: '20 pe zi',
        decrease: 'Scade numărul de țigări pe zi',
        increase: 'Crește numărul de țigări pe zi'
      },
      perPack: {
        label: 'Țigări în pachet',
        unit: 'mărimea pachetului',
        value: '20',
        decrease: 'Scade numărul de țigări din pachet',
        increase: 'Crește numărul de țigări din pachet'
      },
      resultsTitle: 'Bani duși în fum',
      in10Years: 'În 10 ani',
      perMonth: 'Pe lună',
      year1: '1 an',
      year5: '5 ani',
      runtime: {
        note: {
          empty: 'Introdu prețul pachetului, câte țigări fumezi pe zi și câte țigări are pachetul ca să vezi totalurile.',
          result: 'Numărul de țigări pe an: circa {cigarettes} (pachete: {packs}), la {price} țigara.'
        }
      },
      about: {
        title: 'Cum se calculează costul fumatului',
        paragraphs: [
          'Prețul unei țigări este prețul pachetului împărțit la numărul de țigări din pachet. Acesta se înmulțește cu țigările fumate pe zi și cu 365 de zile pentru costul anual. Costul lunar este a douăsprezecea parte din el, iar totalurile pe 5 și 10 ani folosesc prețurile de azi.',
          'O jumătate de pachet pe zi, la 30 de lei pachetul, înseamnă aproape 5.500 de lei pe an și peste 54.000 de lei în zece ani. Să vezi totalul poate fi o motivație puternică: aceiași bani ar putea merge într-o vacanță, în economii sau în plata datoriilor.',
          'Calculatorul ia în calcul doar prețul țigărilor. Costurile cu sănătatea, primele de asigurare mai mari și zilele de concediu medical vin pe deasupra. Dacă vrei ajutor ca să renunți, vorbește cu medicul de familie – te poate îndruma spre consiliere și tratament.'
        ]
      },
      faq: [
        {
          q: 'Cât costă pe an un pachet pe zi?',
          a: 'Un pachet pe zi înseamnă 365 de pachete pe an. La 30 de lei pachetul, asta face 10.950 de lei pe an și 109.500 de lei în zece ani.'
        },
        {
          q: 'Câți bani economisesc dacă mă las de fumat?',
          a: 'Tot ce arată acest calculator. Introdu cât fumezi acum: totalurile lunare și anuale sunt exact banii pe care îi economisești dacă renunți.'
        },
        {
          q: 'Funcționează și pentru tutunul de rulat?',
          a: 'Da. Introdu prețul unei pungi de tutun ca preț al pachetului, numărul de țigări pe care le rulezi din ea ca mărime a pachetului și câte fumezi pe zi.'
        }
      ]
    },

    subscriptions: {
      name: 'Abonamente',
      heading: 'Calculator pentru costul abonamentelor',
      title: 'Calculator abonamente – cât plătești lunar și anual | costsimulators.com',
      description: 'Adună streamingul, sala de fitness, abonamentul de telefon și orice alt abonament. Vezi totalul pe lună, pe an și în 10 ani, plus care abonament costă cel mai mult.',
      card: 'Adună streamingul, sala și orice altă plată recurentă într-un singur loc.',
      tag: 'Buget',
      lead: 'Fă o listă cu tot ce plătești regulat și vezi cât se adună. Sunt acceptate plățile lunare, anuale și săptămânale.',
      listTitle: 'Abonamentele tale',
      empty: 'Niciun abonament încă. Adaugă unul mai jos sau folosește adăugarea rapidă.',
      add: 'Adaugă abonament',
      quickAdd: 'Adăugare rapidă',
      quick: {
        1: { name: 'Streaming video', price: '55' },
        2: { name: 'Streaming muzică', price: '25.99' },
        3: { name: 'Sală de fitness', price: '200' },
        4: { name: 'Stocare în cloud', price: '14.99' },
        5: { name: 'Abonament mobil', price: '39' },
        6: { name: 'Știri online', price: '19.99' }
      },
      note: 'Lista ta este păstrată în adresa paginii, așa că o poți salva la marcaje sau o poți distribui. Nu este trimisă nicăieri.',
      row: {
        name: 'Nume',
        nameLabel: 'Numele abonamentului',
        priceLabel: 'Preț în lei',
        cycleLabel: 'Perioada de facturare',
        monthly: '/ lună',
        yearly: '/ an',
        weekly: '/ săptămână'
      },
      resultsTitle: 'Total abonamente',
      perYear: 'Pe an',
      perMonth: 'Pe lună',
      perDay: 'Pe zi',
      in10Years: 'În 10 ani',
      breakdownLabel: 'Costul anual pe abonament',
      copySummary: 'Copiază rezumatul',
      runtime: {
        untitled: 'Fără nume',
        remove: 'Elimină {name}',
        removeUnnamed: 'Elimină abonamentul',
        breakdown: '{cost} / an · {percent} %',
        cycle: { monthly: 'lună', yearly: 'an', weekly: 'săptămână' },
        note: {
          empty: 'Adaugă un abonament cu preț ca să vezi totalurile.',
          single: '{name} te costă {cost} pe an.',
          biggest: 'Cea mai mare cheltuială este {name}: {cost} pe an, adică {percent} % din total.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Total: {month} pe lună, {year} pe an'
        }
      },
      about: {
        title: 'Cum se calculează totalul abonamentelor',
        paragraphs: [
          'Fiecare abonament este transformat într-un cost anual: prețurile lunare se înmulțesc cu 12, cele săptămânale cu 52, iar cele anuale se folosesc ca atare. Totalul anual se împarte apoi la 12 pentru costul lunar și la 365 pentru costul zilnic.',
          'Defalcarea ordonează abonamentele de la cel mai scump la cel mai ieftin și arată cât din total reprezintă fiecare, așa că vezi ușor ce ai putea anula sau înlocui cu o variantă mai ieftină.',
          'Lista este salvată în adresa paginii, niciodată pe un server. Salvează pagina la marcaje ca să revii mai târziu la listă sau trimite linkul familiei ca să treceți împreună prin abonamentele comune.'
        ]
      },
      faq: [
        {
          q: 'Cum îmi găsesc toate abonamentele?',
          a: 'Verifică extrasele de cont și de card din ultimele luni și caută plățile recurente. Uită-te și la setările de abonamente din App Store, Google Play și PayPal.'
        },
        {
          q: 'Un abonament anual e mai ieftin decât unul lunar?',
          a: 'Adesea cu 15–20 %, dar doar dacă oricum ai păstra serviciul tot anul. Adaugă ambele variante în listă ca să le compari costul anual.'
        },
        {
          q: 'Lista mea este salvată?',
          a: 'Lista este păstrată doar în adresa paginii. Salvează linkul la marcaje sau distribuie-l ca s-o păstrezi; nimic nu este stocat pe un server sau în cookie-uri.'
        }
      ]
    },

    electricity: {
      name: 'Costul curentului',
      heading: 'Calculator pentru costul curentului electric',
      title: 'Calculator consum curent – cât costă un aparat electric pornit | costsimulators.com',
      description: 'Calculează cât costă funcționarea unui aparat pe zi, pe lună și pe an, după putere, ore de utilizare și prețul energiei. Calculator gratuit al costului pe kWh.',
      card: 'Vezi cât costă un aparat lăsat pornit pe zi, pe lună și pe an.',
      tag: 'Casă',
      lead: 'Introdu puterea aparatului, cât timp funcționează și cât plătești curentul ca să vezi cât costă de fapt să-l ții pornit.',
      power: {
        label: 'Putere',
        unit: 'wați',
        chip1: 'Bec LED 9 W',
        chip2: 'Laptop 60 W',
        chip3: 'Televizor 100 W',
        chip4: 'PC de gaming 400 W',
        chip5: 'Aerotermă 1500 W',
        decrease: 'Scade puterea',
        increase: 'Crește puterea'
      },
      hours: {
        label: 'Ore pe zi',
        unit: 'ore',
        decrease: 'Scade orele pe zi',
        increase: 'Crește orele pe zi'
      },
      days: {
        label: 'Zile pe săptămână',
        unit: 'zile',
        decrease: 'Scade zilele pe săptămână',
        increase: 'Crește zilele pe săptămână'
      },
      kwhPrice: {
        label: 'Prețul curentului',
        unit: 'lei/kWh',
        value: '1.30',
        step: '0.05',
        divisor: '1',
        hint: 'Folosește prețul final pe kWh, cu distribuție, taxe și TVA, pentru cel mai exact rezultat.',
        decrease: 'Scade prețul curentului',
        increase: 'Crește prețul curentului'
      },
      resultsTitle: 'Costul de funcționare',
      perYear: 'Pe an',
      perDayOfUse: 'Pe zi de utilizare',
      perMonth: 'Pe lună',
      energyPerYear: 'Energie pe an',
      runtime: {
        note: {
          empty: 'Introdu puterea, orele pe zi (maximum 24), zilele pe săptămână (maximum 7) și prețul curentului.',
          result: 'Consumă circa {day} în fiecare zi de funcționare, aproximativ {year} pe an.'
        }
      },
      about: {
        title: 'Cum se calculează costul curentului',
        paragraphs: [
          'Consumul de energie în kilowați-oră (kWh) este puterea în wați × orele de utilizare ÷ 1.000. Un televizor de 100 W folosit 4 ore consumă 0,4 kWh pe zi. Înmulțit cu prețul curentului pe kWh, rezultă costul pe zi de utilizare.',
          'Costul anual ține cont de câte zile pe săptămână funcționează aparatul, repartizate pe cele 365 de zile ale anului. Costul lunar este a douăsprezecea parte din costul anual.',
          'Puterea o găsești pe eticheta aparatului sau în manualul de utilizare. Multe aparate consumă de cele mai multe ori mai puțin decât puterea maximă, așa că rezultatul este o estimare acoperitoare. Pentru prețul cel mai exact, folosește prețul final de pe factură, cu distribuție, taxe și TVA, nu doar prețul energiei.'
        ]
      },
      faq: [
        {
          q: 'Cum calculez costul curentului consumat de un aparat?',
          a: 'Înmulțește puterea în kilowați cu orele de utilizare și cu prețul pe kWh. O aerotermă de 1.500 W care merge 3 ore costă 1,5 kW × 3 h × 1,30 lei = 5,85 lei pe zi.'
        },
        {
          q: 'Câți kWh consumă un aparat?',
          a: 'Împarte puterea în wați la 1.000 și înmulțește cu orele de funcționare. Un laptop de 60 W folosit 8 ore pe zi consumă 0,48 kWh pe zi – circa 175 kWh pe an, dacă îl folosești zilnic.'
        },
        {
          q: 'Ce preț al curentului să folosesc?',
          a: 'Folosește prețul total pe kWh de pe factura de curent, care include energia, tarifele de distribuție și transport, taxele și TVA-ul. Dacă împarți totalul facturii la kWh consumați, obții o medie bună.'
        },
        {
          q: 'Aparatele consumă curent în stand-by?',
          a: 'Da, multe aparate consumă câțiva wați în stand-by. Introdu puterea în stand-by și 24 de ore pe zi ca să vezi cât costă într-un an.'
        }
      ]
    },

    trip: {
      name: 'Costul drumului',
      heading: 'Calculator pentru costul carburantului pe drum',
      title: 'Calculator cost benzină – cât costă drumul sau naveta cu mașina | costsimulators.com',
      description: 'Calculează costul carburantului pentru o călătorie sau pentru naveta zilnică și împarte-l între pasageri. Funcționează în kilometri și litri sau în mile și galoane.',
      card: 'Află cât costă carburantul pentru un drum sau pentru navetă și împarte costul cu ceilalți.',
      tag: 'Călătorii',
      lead: 'Calculează costul carburantului pentru un singur drum sau pentru naveta zilnică și împarte-l între toți cei din mașină.',
      unit: {
        label: 'Unități',
        metric: 'Kilometri și litri',
        us: 'Mile și galoane'
      },
      distance: {
        label: 'Distanță',
        unit: 'km într-un sens',
        decrease: 'Scade distanța',
        increase: 'Crește distanța'
      },
      direction: {
        label: 'Traseu',
        one: 'Doar dus',
        round: 'Dus-întors'
      },
      consumption: {
        label: 'Consum de carburant',
        unit: 'l/100 km',
        hint: 'Ai mașină electrică? Introdu kWh/100 km și prețul pe kWh.',
        decrease: 'Scade consumul',
        increase: 'Crește consumul'
      },
      fuelPrice: {
        label: 'Prețul carburantului',
        unit: 'lei pe litru',
        value: '7.5',
        step: '0.05',
        usStep: '0.2',
        decrease: 'Scade prețul carburantului',
        increase: 'Crește prețul carburantului'
      },
      people: {
        label: 'Persoane care împart costul',
        unit: 'persoane',
        decrease: 'Scade numărul de persoane',
        increase: 'Crește numărul de persoane'
      },
      tripsPerWeek: {
        label: 'Drumuri pe săptămână',
        unit: 'pentru totalurile lunare și anuale',
        decrease: 'Scade drumurile pe săptămână',
        increase: 'Crește drumurile pe săptămână'
      },
      resultsTitle: 'Costul carburantului',
      perPerson: 'De persoană',
      perMonth: 'Pe lună',
      perYear: 'Pe an',
      runtime: {
        direction: { one: 'Doar dus', round: 'Dus-întors' },
        unit: {
          metric: {
            distance: 'km într-un sens',
            consumption: 'l/100 km',
            price: 'lei pe litru',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'mile într-un sens',
            consumption: 'mpg',
            price: 'lei pe galon',
            perDistance: 'milă',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Introdu distanța, consumul și prețul carburantului ca să vezi costul.',
          result: 'Consumă {fuel} de carburant pe drum, circa {price} pe {distance}.'
        }
      },
      about: {
        title: 'Cum se calculează costul drumului',
        paragraphs: [
          'Carburantul consumat este distanța × consumul ÷ 100. Dacă naveta are 25 km într-un sens (50 km pe zi) și mașina consumă 6,5 l/100 km, se consumă 3,25 litri. Înmulțește cu prețul pe litru pentru costul drumului și împarte la numărul de persoane ca să-l împărțiți.',
          'În mile și galoane, consumul se calculează împărțind distanța la numărul de mile pe galon (mpg) al mașinii. Dacă schimbi unitățile, valorile introduse sunt convertite, așa că poți compara cifre din oricare sistem.',
          'Totalurile lunare și anuale se bazează pe drumurile pe săptămână – 5 drumuri dus-întors pe săptămână înseamnă o navetă obișnuită. Pentru o mașină electrică, introdu consumul în kWh/100 km și prețul pe kWh.'
        ]
      },
      faq: [
        {
          q: 'Cum calculez costul benzinei pentru un drum?',
          a: 'Înmulțește distanța cu consumul și cu prețul carburantului și împarte la 100. Pentru 200 km cu o mașină care consumă 6 l/100 km, cu benzina la 7,50 lei/l: 200 × 6 ÷ 100 × 7,50 lei = 90 de lei.'
        },
        {
          q: 'Cum împart costul carburantului între pasageri?',
          a: 'Introdu numărul de persoane care împart costul. Calculatorul împarte costul drumului în mod egal între toți, inclusiv șoferul.'
        },
        {
          q: 'Calculatorul include uzura, parcarea sau taxele de drum?',
          a: 'Nu, ia în calcul doar carburantul. Uzura mașinii, asigurarea RCA, parcarea, rovinieta și taxele de pod vin pe deasupra, așa că în realitate condusul costă mai mult.'
        }
      ]
    }
  }
};
