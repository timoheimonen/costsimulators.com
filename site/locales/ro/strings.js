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
    quickPicks: 'Opțiuni rapide',
    faqTitle: 'Întrebări frecvente',
    relatedTools: 'Alte calculatoare',
    imageAlt: 'costsimulators.com – calculatoare gratuite pentru întrebările de zi cu zi despre bani',
    invest: {
      label: 'Dacă ai investi banii în schimb'
    },
    receipt: {
      open: 'Tipărește bonul',
      title: 'Bonul tău',
      close: 'Închide',
      skip: 'Mergi la total',
      total: 'Total',
      length: 'Lungimea bonului',
      thanks: 'Mulțumim pentru 10 ani de fidelitate!',
      image: 'Distribuie imaginea'
    }
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
    },
    invest: {
      note: '{monthly} pe lună timp de 10 ani, la {rate} pe an: ai depus {paid}, iar randamentul adaugă {gain}.'
    },
    receipt: {
      subtotal: 'Subtotal, anul {year}',
      year: 'Anul {year}',
      unit: 'meter',
      saved: 'Imagine salvată'
    }
  },

  home: {
    title: 'Calculatoare de costuri gratuite pentru viața de zi cu zi',
    description: 'Calculatoare gratuite și private care arată cât costă de fapt lucrurile: ședințe, ore de muncă, obiceiuri, abonamente, curent, benzină și cost pe utilizare. Fără cont, direct în browser.',
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
    title: 'Pagina nu a fost găsită',
    description: 'Pagina pe care o căutai nu există.',
    heading: 'Această pagină nu există.',
    lead: 'Este posibil ca adresa să fie greșită sau ca pagina să fi fost mutată. Toate calculatoarele se găsesc pe prima pagină.'
  },

  documents: {
    about: {
      name: 'Despre',
      title: 'Despre noi – calculatoare de costuri gratuite și private',
      description: 'Cine face costsimulators.com și cum funcționează calculatoarele. Calculatoare gratuite și private pentru ședințe, ore de muncă, obiceiuri, cumpărături, abonamente, curent și drumuri.'
    },
    privacy: {
      name: 'Politica de confidențialitate',
      title: 'Politica de confidențialitate',
      description: 'Cum tratează costsimulators.com datele tale: calculele rulează în browser, fără urmărire, fără instrumente de analiză și fără conturi de utilizator.'
    },
    terms: {
      name: 'Termeni de utilizare',
      title: 'Termeni de utilizare',
      description: 'Termenii de utilizare ai costsimulators.com: gratuit pentru uz personal și comercial, oferit „ca atare”, cu cod sursă deschis sub licența MIT.'
    }
  },

  tools: {
    meetings: {
      name: 'Costul ședinței',
      heading: 'Calculator pentru costul ședințelor',
      title: 'Calculator cost ședință – cât costă o ședință, în timp real',
      description: 'Calculator gratuit pentru costul unei ședințe, cu cronometru live. Introdu tariful orar și numărul de participanți și vezi cât costă ședința, secundă cu secundă.',
      card: 'Urmărește în timp real cum crește costul unei ședințe cât timp vorbiți.',
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
          a: 'Da. Cronometrul se bazează pe ceas, așa că totalul rămâne corect și într-un tab din fundal. Cât timp cronometrul merge, pagina îi cere totodată browserului să țină ecranul aprins.'
        }
      ]
    },

    workhours: {
      name: 'Ore de muncă',
      heading: 'Calculator pentru prețul în ore de muncă',
      title: 'Calculator ore de muncă – cât muncești ca să cumperi ceva',
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

    costperuse: {
      name: 'Cost pe utilizare',
      heading: 'Calculator pentru costul pe utilizare',
      title: 'Calculator cost pe utilizare – merită prețul?',
      description: 'Află cât te costă de fapt o achiziție de fiecare dată când o folosești: prețul minus valoarea de revânzare, împărțit la cât de des și cât timp o folosești.',
      card: 'Împarte un preț la toate utilizările ca să vezi dacă merită banii.',
      tag: 'Cumpărături',
      lead: 'Introdu un preț, cât de des vei folosi lucrul respectiv și cât timp, și vezi cât costă de fapt fiecare utilizare.',
      price: {
        label: 'Preț',
        unit: 'lei',
        value: '2500',
        step: '100',
        decrease: 'Scade prețul',
        increase: 'Crește prețul'
      },
      period: {
        label: 'Cât de des îl folosești',
        week: 'Săptămânal',
        month: 'Lunar',
        year: 'Anual'
      },
      uses: {
        label: 'Utilizări',
        unit: 'ori pe săptămână',
        decrease: 'Scade numărul de utilizări',
        increase: 'Crește numărul de utilizări'
      },
      years: {
        label: 'Ani de utilizare',
        unit: 'ani',
        chip1: '1 an',
        chip2: '3 ani',
        chip3: '5 ani',
        decrease: 'Scade anii de utilizare',
        increase: 'Crește anii de utilizare'
      },
      resale: {
        label: 'Valoare de revânzare',
        unit: 'lei, opțional',
        hint: 'Cât te aștepți să primești când îl vinzi. Lasă 0 dacă nu-l vei vinde.',
        decrease: 'Scade valoarea de revânzare',
        increase: 'Crește valoarea de revânzare'
      },
      resultsTitle: 'Cost pe utilizare',
      perUse: 'O utilizare costă',
      totalUses: 'Utilizări în total',
      perMonth: 'Pe lună',
      perYear: 'Pe an',
      runtime: {
        unit: {
          week: 'ori pe săptămână',
          month: 'ori pe lună',
          year: 'ori pe an'
        },
        note: {
          empty: 'Introdu prețul, cât de des îl folosești și câți ani. Valoarea de revânzare trebuie să fie mai mică decât prețul.',
          result: 'Încă un an de utilizare ar reduce costul pe utilizare la {next}.'
        }
      },
      about: {
        title: 'Cum se calculează costul pe utilizare',
        paragraphs: [
          'Costul pe utilizare este prețul minus suma pe care o primești când revinzi lucrul respectiv, împărțit la numărul de utilizări. Numărul de utilizări este frecvența de utilizare × săptămânile, lunile sau anii în care îl folosești. O achiziție de 2.500 de lei folosită de 3 ori pe săptămână timp de 3 ani înseamnă 468 de utilizări și costă 5,34 lei pe utilizare.',
          'Costurile lunare și anuale împart aceeași sumă pe perioada în care deții lucrul respectiv, așa că poți compara ușor cumpărarea cu închirierea, leasingul sau un abonament.',
          'Costul pe utilizare este o metodă simplă de a compara un lucru ieftin, care se uzează repede, cu unul scump, care durează. O pereche de pantofi de 250 de lei, purtată de 50 de ori, te costă 5 lei la fiecare purtare; o pereche de 800 de lei, purtată de 400 de ori, doar 2 lei.'
        ]
      },
      faq: [
        {
          q: 'Cum calculez costul pe utilizare?',
          a: 'Împarte prețul la numărul de utilizări. Dacă vinzi lucrul respectiv după aceea, scade mai întâi valoarea de revânzare din preț. O geacă de 600 de lei purtată de 80 de ori te costă 7,50 lei la fiecare purtare.'
        },
        {
          q: 'Ce înseamnă un cost pe utilizare bun?',
          a: 'Depinde cât costă alternativa. Compară-l cu închirierea, împrumutul sau plata la fiecare utilizare: dacă o intrare la sală costă 60 de lei, un abonament de 200 de lei pe lună devine rentabil de la a patra vizită pe lună.'
        },
        {
          q: 'Funcționează și pentru abonamente, de exemplu la sală?',
          a: 'Da. Introdu prețul anual ca preț, cât de des îl folosești și 1 an. Pentru un abonament la sală de 200 de lei pe lună, introdu 2.400 de lei și numărul de vizite pe săptămână.'
        }
      ]
    },

    coffee: {
      name: 'Costul cafelei',
      heading: 'Calculator pentru costul cafelei',
      title: 'Calculator cost cafea – cât te costă cafeaua pe an?',
      description: 'Vezi cât te costă cafeaua zilnică pe lună și în 1, 5 și 10 ani. Introdu prețul unei cești și câte cești bei pe săptămână – gratuit și privat.',
      card: 'Vezi cât te costă cafeaua de zi cu zi într-un an, în cinci și în zece ani.',
      tag: 'Obicei',
      lead: 'Introdu cât costă o ceașcă și cât de des cumperi una ca să vezi cât te costă obiceiul de-a lungul anilor.',
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
      receiptTitle: 'Bon de cafea',
      receiptCount: 'Cești',
      runtime: {
        note: {
          empty: 'Introdu un preț și câte cești bei pe săptămână ca să vezi totalurile.',
          result: 'Numărul de cești pe an: circa {cups}, la {price} ceașca.'
        },
        receiptItem: 'Cafea'
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
        },
        {
          q: 'Cât aș avea dacă aș investi banii în schimb?',
          a: 'Caseta „Dacă ai investi banii în schimb” arată cât ar deveni banii dacă i-ai investi în fiecare lună în loc să-i cheltuiești, cu un randament de 4 % pe an, capitalizat lunar. O cafea de 15 lei în fiecare zi lucrătoare înseamnă 325 de lei pe lună, care ajung la circa 47.700 de lei în 10 ani – din care 39.000 de lei sunt banii tăi, iar restul vine din randament. Impozitele, comisioanele și inflația nu sunt luate în calcul. Este un exemplu, nu un sfat de investiții.'
        }
      ]
    },

    smoking: {
      name: 'Costul fumatului',
      heading: 'Calculator pentru costul fumatului',
      title: 'Calculator cost fumat – cât te costă țigările pe an?',
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
      receiptTitle: 'Bon de țigări',
      receiptCount: 'Pachete',
      runtime: {
        receiptItem: 'Pachet de țigări',
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
          a: 'Exact cât arată acest calculator. Introdu cât fumezi acum: totalurile lunare și anuale sunt exact banii pe care îi economisești dacă renunți.'
        },
        {
          q: 'Funcționează și pentru tutunul de rulat?',
          a: 'Da. Introdu prețul unei pungi de tutun ca preț al pachetului, numărul de țigări pe care le rulezi din ea ca mărime a pachetului și câte fumezi pe zi.'
        },
        {
          q: 'Cât aș avea dacă aș investi banii în schimb?',
          a: 'Caseta „Dacă ai investi banii în schimb” arată cât ar deveni banii dacă i-ai investi în fiecare lună în loc să fumezi, cu un randament de 4 % pe an, capitalizat lunar. O jumătate de pachet pe zi, la 30 de lei pachetul, înseamnă circa 456 de lei pe lună, care ajung la circa 66.900 de lei în 10 ani – din care 54.750 de lei sunt banii tăi, iar restul vine din randament. Impozitele, comisioanele și inflația nu sunt luate în calcul. Este un exemplu, nu un sfat de investiții.'
        }
      ]
    },

    alcohol: {
      name: 'Costul alcoolului',
      heading: 'Calculator pentru costul alcoolului',
      title: 'Calculator cost alcool – cât te costă băutura pe an?',
      description: 'Vezi cât te costă berea, vinul și alte băuturi pe lună și în 1, 5 și 10 ani, plus cât ar deveni aceiași bani dacă i-ai investi.',
      card: 'Vezi cât se adună băuturile din fiecare săptămână într-un an, în cinci și în zece ani.',
      tag: 'Obicei',
      lead: 'Introdu cât costă o băutură și câte bei pe săptămână ca să vezi cât se adună de-a lungul anilor.',
      price: {
        label: 'Preț pe băutură',
        unit: 'lei',
        step: '1',
        value: '15',
        hint: 'Bei și acasă, și în oraș? Folosește un preț mediu.',
        decrease: 'Scade prețul băuturii',
        increase: 'Crește prețul băuturii'
      },
      perWeek: {
        label: 'Băuturi pe săptămână',
        unit: 'băuturi',
        chip1: '3 pe săptămână',
        chip2: '7 pe săptămână',
        chip3: '14 pe săptămână',
        decrease: 'Scade numărul de băuturi pe săptămână',
        increase: 'Crește numărul de băuturi pe săptămână'
      },
      resultsTitle: 'Cât se adună',
      in10Years: 'În 10 ani',
      perMonth: 'Pe lună',
      year1: '1 an',
      year5: '5 ani',
      receiptTitle: 'Nota de plată de la bar',
      receiptCount: 'Băuturi',
      runtime: {
        receiptItem: 'Băutură',
        note: {
          empty: 'Introdu un preț și câte băuturi bei pe săptămână ca să vezi totalurile.',
          result: 'Numărul de băuturi pe an: circa {drinks}, la {price} bucata.'
        }
      },
      about: {
        title: 'Cum se calculează costul alcoolului',
        paragraphs: [
          'Costul anual este prețul pe băutură × băuturile pe săptămână × 52 de săptămâni. Costul lunar este a douăsprezecea parte din el, iar totalurile pe 5 și 10 ani folosesc prețurile de azi, fără inflație.',
          'Șase beri pe săptămână, la 15 lei bucata, adună circa 4.700 de lei pe an și aproape 47.000 de lei în zece ani. Dacă bei și în baruri, și acasă, folosește un preț mediu sau calculează separat fiecare variantă și adună rezultatele.',
          'Caseta „Dacă ai investi banii în schimb” arată cât ar deveni aceiași bani dacă i-ai investi în fiecare lună, cu un randament de 4 % pe an, timp de 10 ani. Calculatorul ia în calcul doar cât costă băuturile; efectele asupra sănătății vin pe deasupra. Dacă vrei să bei mai puțin, medicul de familie sau o linie de consiliere pentru consumul de alcool te pot ajuta.'
        ]
      },
      faq: [
        {
          q: 'Cât cheltuiesc pe alcool într-un an?',
          a: 'Înmulțește prețul unei băuturi cu numărul de băuturi pe săptămână și cu 52. Șase băuturi pe săptămână, la 15 lei bucata, înseamnă 4.680 de lei pe an.'
        },
        {
          q: 'Cât aș economisi dacă aș bea mai puțin?',
          a: 'Introdu numărul de băuturi la care ai vrea să te limitezi și compară. Dacă treci de la 6 la 3 băuturi pe săptămână, la 15 lei bucata, economisești 2.340 de lei pe an și 23.400 de lei în zece ani.'
        },
        {
          q: 'Cât aș avea dacă aș investi banii în schimb?',
          a: 'Caseta „Dacă ai investi banii în schimb” arată cât ai avea după 10 ani dacă ai investi banii în fiecare lună în loc să-i cheltuiești, cu un randament de 4 % pe an, capitalizat lunar. Șase băuturi de 15 lei pe săptămână înseamnă 390 de lei pe lună, care ajung la circa 57.200 de lei – din care 46.800 de lei sunt banii tăi, iar restul vine din randament. Impozitele, comisioanele și inflația nu sunt luate în calcul. Este un exemplu, nu un sfat de investiții.'
        }
      ]
    },

    gambling: {
      name: 'Loto și pariuri',
      heading: 'Calculator pentru costul loteriei și al pariurilor',
      title: 'Calculator loto și pariuri – cât te costă jocurile de noroc?',
      description: 'Vezi cât te costă biletele de loto și pariurile pe lună și în 10 ani, cât pierzi în medie și cât ar deveni mizele dacă le-ai investi.',
      card: 'Vezi cât se adună biletele de loto și pariurile și cât pierzi în medie.',
      tag: 'Obicei',
      lead: 'Introdu cât mizezi și cât de des joci ca să vezi cât te costă biletele de loto și pariurile de-a lungul anilor – și cât din bani se întoarce în medie sub formă de câștiguri.',
      stake: {
        label: 'Miză pe joc',
        unit: 'lei',
        step: '5',
        value: '50',
        decrease: 'Scade miza',
        increase: 'Crește miza'
      },
      perWeek: {
        label: 'Jocuri pe săptămână',
        unit: 'jocuri',
        chip1: '1 pe săptămână',
        chip2: '2 pe săptămână',
        chip3: 'În fiecare zi',
        decrease: 'Scade numărul de jocuri pe săptămână',
        increase: 'Crește numărul de jocuri pe săptămână'
      },
      payout: {
        label: 'Rata de returnare',
        unit: '% din mize',
        chip1: 'Loto',
        chip2: 'Pariuri sportive',
        chip3: 'Cazinou',
        hint: 'Partea din totalul mizelor care se întoarce la jucători sub formă de câștiguri. Loteriile returnează de obicei cam jumătate, pariurile sportive și jocurile de cazinou 90–97 %.',
        decrease: 'Scade rata de returnare',
        increase: 'Crește rata de returnare'
      },
      resultsTitle: 'Cât te costă',
      in10Years: 'Mizat în 10 ani',
      perMonth: 'Pe lună',
      perYear: 'Pe an',
      lossPerYear: 'Pierdere medie pe an',
      receiptTitle: 'Bon de loto și pariuri',
      receiptCount: 'Jocuri',
      receiptBack: 'Returnat în câștiguri, în medie',
      receiptLoss: 'Pierdut, în medie',
      runtime: {
        receiptItem: 'Joc',
        note: {
          empty: 'Introdu miza, de câte ori joci pe săptămână și rata de returnare (0–100).',
          result: 'În medie, primești înapoi circa {back} pe an sub formă de câștiguri, deci pierzi circa {loss} pe an și {loss10} în 10 ani.'
        }
      },
      about: {
        title: 'Cum se calculează costul loteriei și al pariurilor',
        paragraphs: [
          'Costul anual este miza × jocurile pe săptămână × 52 de săptămâni. Costul lunar este a douăsprezecea parte din el, iar totalul pe 10 ani folosește mizele de azi.',
          'Rata de returnare este partea din totalul mizelor care se întoarce la jucători sub formă de câștiguri. La o rată de returnare de 50 %, dacă joci 50 de lei de două ori pe săptămână, mizezi 5.200 de lei pe an, din care circa 2.600 de lei se întorc în medie sub formă de câștiguri – o pierdere medie de 2.600 de lei pe an. Un jucător poate câștiga mult sau poate pierde tot, dar pe parcursul multor jocuri rezultatul se apropie de medie.',
          'Caseta „Dacă ai investi banii în schimb” arată cât ar deveni mizele dacă le-ai investi în fiecare lună, cu un randament de 4 % pe an, timp de 10 ani. Dacă simți că jocurile de noroc îți scapă de sub control, medicul de familie sau o linie de consiliere pentru jocuri de noroc te pot ajuta.'
        ]
      },
      faq: [
        {
          q: 'Cât cheltuiesc pe loto într-un an?',
          a: 'Înmulțește miza cu numărul de jocuri pe săptămână și cu 52. Dacă joci 50 de lei de două ori pe săptămână, asta înseamnă 5.200 de lei pe an și 52.000 de lei în zece ani.'
        },
        {
          q: 'Ce este rata de returnare?',
          a: 'Este partea din totalul mizelor care se întoarce la jucători sub formă de câștiguri. Loteriile returnează de obicei cam jumătate din mize, iar pariurile sportive și jocurile de cazinou 90–97 %. Restul rămâne la operator – și reprezintă ce pierd jucătorii în medie.'
        },
        {
          q: 'Cât aș avea dacă aș investi banii în schimb?',
          a: 'Caseta „Dacă ai investi banii în schimb” arată cât ai avea după 10 ani dacă ai investi mizele în fiecare lună, cu un randament de 4 % pe an, capitalizat lunar. Dacă joci 50 de lei de două ori pe săptămână, asta înseamnă circa 433 de lei pe lună, care ajung la circa 63.570 de lei – din care 52.000 de lei sunt banii tăi, iar restul vine din randament. Impozitele, comisioanele și inflația nu sunt luate în calcul. Este un exemplu, nu un sfat de investiții.'
        }
      ]
    },

    subscriptions: {
      name: 'Abonamente',
      heading: 'Calculator pentru costul abonamentelor',
      title: 'Calculator abonamente – cât plătești lunar și anual',
      description: 'Adună streamingul, sala de fitness, abonamentul de telefon și orice alt abonament. Vezi totalul pe lună, pe an și în 10 ani, plus care abonament costă cel mai mult.',
      card: 'Adună streamingul, sala și orice altă plată recurentă într-un singur loc.',
      tag: 'Buget',
      lead: 'Fă o listă cu tot ce plătești regulat și vezi cât se adună. Sunt acceptate plățile lunare, anuale și săptămânale.',
      listTitle: 'Abonamentele tale',
      empty: 'Încă nu ai niciun abonament. Adaugă unul mai jos sau folosește adăugarea rapidă.',
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
      receiptTitle: 'Bon de abonamente',
      receiptCount: 'Plăți',
      runtime: {
        receiptItem: 'Plată',
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
        },
        {
          q: 'Cât aș avea dacă aș investi banii în schimb?',
          a: 'Caseta „Dacă ai investi banii în schimb” arată cât ar deveni banii dați pe abonamente dacă ai investi aceeași sumă în fiecare lună, cu un randament de 4 % pe an, capitalizat lunar. 250 de lei pe lună ajung la circa 36.700 de lei în 10 ani – din care 30.000 de lei sunt banii tăi, iar restul vine din randament. Impozitele, comisioanele și inflația nu sunt luate în calcul. Este un exemplu, nu un sfat de investiții.'
        }
      ]
    },

    electricity: {
      name: 'Costul curentului',
      heading: 'Calculator pentru costul curentului electric',
      title: 'Calculator consum curent – cât costă un aparat electric',
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
          'Puterea o găsești pe eticheta aparatului sau în manualul de utilizare. Multe aparate consumă în mod obișnuit mai puțin decât puterea maximă, așa că rezultatul este mai degrabă o estimare acoperitoare. Pentru prețul cel mai exact, folosește prețul final de pe factură, cu distribuție, taxe și TVA, nu doar prețul energiei.'
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
      heading: 'Calculator pentru costul drumului cu mașina',
      title: 'Calculator cost benzină – cât costă drumul cu mașina',
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
          'Carburantul consumat este distanța × consumul ÷ 100. Dacă naveta are 25 km într-un sens (50 km pe zi) și mașina consumă 6,5 l/100 km, se consumă 3,25 litri. Înmulțește cu prețul pe litru ca să afli costul drumului, apoi împarte-l la numărul de persoane dacă mergeți mai mulți.',
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
