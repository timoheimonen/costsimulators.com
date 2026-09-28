// Hungarian texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in forints.

module.exports = {
  meta: {
    name: 'Magyar',
    locale: 'hu-HU',
    currency: 'HUF',
    ogLocale: 'hu_HU'
  },

  money: {
    symbol: 'Ft',
    zero: '0 Ft',
    placeholder: '0',
    decimals: '0'
  },

  common: {
    skip: 'Ugrás a tartalomra',
    home: 'Főoldal',
    toggleTheme: 'Téma váltása',
    themeToLight: 'Váltás világos témára',
    themeToDark: 'Váltás sötét témára',
    language: 'Nyelv',
    allTools: 'Összes eszköz',
    share: 'Megosztás',
    settings: 'Beállítások',
    quickPicks: 'Gyors választás',
    faqTitle: 'Gyakori kérdések',
    relatedTools: 'További kalkulátorok',
    imageAlt: 'costsimulators.com – ingyenes költségkalkulátorok a hétköznapi pénzügyekhez'
  },

  footer: {
    privacy: 'Teljesen a böngésződben fut. Nincs süti, nincs követés.',
    about: 'Az oldalról',
    contact: 'Kapcsolat',
    privacyPolicy: 'Adatvédelem',
    terms: 'Feltételek'
  },

  runtime: {
    share: {
      linkCopied: 'Link kimásolva',
      copyFailed: 'A másolás nem sikerült',
      copied: 'Kimásolva!',
      calculatedWith: 'Kiszámolva a costsimulators.com segítségével'
    },
    workTime: {
      minutes: '{m} perc',
      hours: '{h} óra',
      hoursMinutes: '{h} óra {m} perc'
    }
  },

  home: {
    title: 'Ingyenes költségkalkulátorok a mindennapokhoz | costsimulators.com',
    description: 'Ingyenes, privát kalkulátorok, amelyek megmutatják, mibe kerülnek valójában a dolgok: meetingek, munkaórák, kávé, dohányzás, előfizetések, áram és benzin. Regisztráció nélkül, a böngésződben.',
    eyebrow: 'Ingyenes · Privát · Azonnali',
    heading: 'Kis eszközök a hétköznapi <span class="accent-text">pénz</span>ügyekhez.',
    lead: 'Gyors kalkulátorok, amelyek megmutatják, mibe kerülnek valójában a dolgok. Nincs regisztráció, nincs követés – minden közvetlenül a böngésződben fut.',
    toolsTitle: 'Eszközök',
    toolCount: '{count} eszköz',
    suggestTitle: 'Van egy ötleted?',
    suggestText: 'Javasolj új eszközt a GitHubon.',
    whyTitle: 'A kis kiadások is összeadódnak',
    whyText1: 'Egy meeting, egy kávé munkába menet vagy még egy streamingszolgáltatás önmagában ritkán tűnik drágának. Ha viszont összeadod őket egy hónapra, egy évre vagy egy évtizedre, egészen más számok jönnek ki.',
    whyText2: 'Minden kalkulátor egyetlen dolgot csinál, csak a szükséges számokat kéri, és azonnal megmutatja az eredményt. Mindent a böngésződ számol ki, így a számaid a készülékeden maradnak.',
    aboutLink: 'Bővebben a costsimulators.com-ról',
    faq: [
      {
        q: 'Ingyenes a costsimulators.com?',
        a: 'Igen. Minden kalkulátor teljesen ingyenes: nincs regisztráció, nincs fizetőfal, és nincsenek hirdetések. Munkahelyen is nyugodtan használhatod őket.'
      },
      {
        q: 'Elmenti vagy továbbítja valahová az oldal a számaimat?',
        a: 'Nem. Mindent, amit beírsz, a böngésződ számol ki, és semmi sem kerül szerverre. Az oldal nem használ sütiket, és nincs rajta analitika.'
      },
      {
        q: 'Megoszthatok egy számítást?',
        a: 'Igen. A beállításaid az oldal címében tárolódnak. Nyomd meg a Megosztás gombot a link kimásolásához, és aki megnyitja, ugyanazt a számítást látja.'
      }
    ]
  },

  notFound: {
    title: 'Az oldal nem található | costsimulators.com',
    description: 'A keresett oldal nem létezik.',
    heading: 'Ez az oldal nem létezik.',
    lead: 'Lehet, hogy elírtad a címet, vagy az oldal máshová költözött. Az összes kalkulátort megtalálod a főoldalon.'
  },

  documents: {
    about: {
      name: 'Az oldalról',
      title: 'Az oldalról – ingyenes, privát költségkalkulátorok | costsimulators.com',
      description: 'Ki készíti a costsimulators.com-ot, és hogyan működnek a kalkulátorok. Ingyenes, privát költségkalkulátorok meetingekhez, munkaórákhoz, szokásokhoz, előfizetésekhez, áramhoz és utazáshoz.'
    },
    privacy: {
      name: 'Adatvédelmi tájékoztató',
      title: 'Adatvédelmi tájékoztató | costsimulators.com',
      description: 'Hogyan kezeli a costsimulators.com az adataidat: a számítások a böngésződben futnak, nincs követés, nincs analitika, és nincsenek felhasználói fiókok.'
    },
    terms: {
      name: 'Felhasználási feltételek',
      title: 'Felhasználási feltételek | costsimulators.com',
      description: 'A costsimulators.com felhasználási feltételei: szabadon használható magán- és üzleti célra is, „ahogy van” alapon, nyílt forráskóddal, MIT-licenc alatt.'
    }
  },

  tools: {
    meetings: {
      name: 'Meeting költsége',
      heading: 'Meetingköltség-kalkulátor',
      title: 'Meetingköltség-kalkulátor – mennyibe kerül egy értekezlet? | costsimulators.com',
      description: 'Ingyenes meetingköltség-kalkulátor élő időzítővel. Add meg az óradíjat és a résztvevők számát, és kövesd másodpercről másodpercre, mennyibe kerül a megbeszélés.',
      card: 'Kövesd élőben, ahogy percről percre nő egy meeting ára.',
      tag: 'Élő időzítő',
      lead: 'Állítsd be az óradíjat és a létszámot, nyomd meg az Indítás gombot, és kövesd, mennyibe kerül a meeting, miközben zajlik.',
      pulseEvery: '100',
      rate: {
        label: 'Óradíj',
        unit: 'Ft / fő',
        step: '500',
        value: '8000',
        decrease: 'Óradíj csökkentése',
        increase: 'Óradíj növelése'
      },
      persons: {
        label: 'Résztvevők',
        unit: 'fő',
        decrease: 'Résztvevők számának csökkentése',
        increase: 'Résztvevők számának növelése'
      },
      perMinute: 'Percenként',
      perHour: 'Óránként',
      note: 'Az értékeket az időzítő futása közben is módosíthatod. Ha valaki csatlakozik vagy távozik, a változás attól a pillanattól számít.',
      total: 'Teljes költség',
      elapsed: 'Eltelt idő',
      reset: 'Nullázás',
      copyReport: 'Jelentés másolása',
      kbdHint: 'Indítás és szünet a <kbd>Szóköz</kbd> billentyűvel',
      runtime: {
        mode: { start: 'Indítás', pause: 'Szünet', resume: 'Folytatás' },
        status: { ready: 'Kész', live: 'Élő', paused: 'Szünetel' },
        announce: {
          invalid: 'Az indításhoz add meg az óradíjat és a résztvevők számát.',
          started: 'Az időzítő elindult.',
          paused: 'Szüneteltetve: {cost}, eltelt idő: {time}.',
          reset: 'Az időzítő nullázva.'
        },
        report: {
          cost: 'A meeting költsége: {cost}',
          duration: 'Időtartam: {time}',
          participants: 'Résztvevők: {persons} × {rate}/óra'
        }
      },
      about: {
        title: 'Így számoljuk a meeting költségét',
        paragraphs: [
          'A kalkulátor összeszorozza a résztvevők számát az óradíjukkal és az eltelt idővel. Egy egyórás meeting 5 fővel és 8000 Ft-os óradíjjal 40 000 Ft-ba kerül – ez percenként kb. 667 Ft.',
          'Óradíjként azt add meg, amennyibe egy munkaóra valójában kerül a munkáltatónak, ne csak a bért. A bruttó bér után a munkáltató szociális hozzájárulási adót is fizet, és ehhez jönnek még a juttatások és az egyéb foglalkoztatási költségek, így ökölszabályként érdemes 20–30%-ot hozzáadni a bruttó órabérhez. Ha nem tudod mindenki óradíját, a csapat átlaga is bőven elég.',
          'Az időzítő háttérben lévő fülön is pontosan számol, a futó költség pedig a böngészőfül címében is látszik, így képernyőmegosztás közben is szemmel tarthatod. A meeting végén állítsd meg az időzítőt, és másolj egy rövid jelentést az emlékeztetőbe.'
        ]
      },
      faq: [
        {
          q: 'Hogyan számolható ki egy meeting költsége?',
          a: 'Szorozd össze a résztvevők számát az átlagos óradíjukkal és a meeting hosszával órában. Például 6 fő × 7000 Ft/óra × 1,5 óra = 63 000 Ft. Ez a kalkulátor élőben, a meeting alatt végzi el a számítást.'
        },
        {
          q: 'Milyen óradíjjal számoljak?',
          a: 'Egy munkaóra teljes költségével: a bruttó órabérrel, valamint a szociális hozzájárulási adóval és az egyéb foglalkoztatási költségekkel. Tanácsadóknál és alvállalkozóknál az általuk számlázott óradíjat használd.'
        },
        {
          q: 'Módosíthatom a résztvevők számát a meeting közben?',
          a: 'Igen. A létszámot és az óradíjat bármikor megváltoztathatod. Az új értékek attól a pillanattól számítanak, a már összegyűlt költség pedig változatlan marad.'
        },
        {
          q: 'Tovább fut az időzítő, ha másik fülre váltok?',
          a: 'Igen. Az időzítő az órához igazodik, így a végösszeg háttérben lévő fülön is pontos marad. Amíg az időzítő fut, az oldal azt is kéri a böngészőtől, hogy ne kapcsolja ki a képernyőt.'
        }
      ]
    },

    workhours: {
      name: 'Munkaórák',
      heading: 'Ár munkaórában',
      title: 'Ár munkaórában – hány órát kell dolgoznod érte? | costsimulators.com',
      description: 'Váltsd át bármilyen árat munkaórákra, munkanapokra és munkahetekre. Add meg az órabéred, havi vagy éves fizetésed, és nézd meg, mennyi munkaidőbe kerül egy vásárlás.',
      card: 'Váltsd át bármilyen árat munkaórákra, munkanapokra és munkahetekre.',
      tag: 'Munka',
      lead: 'Add meg a fizetésed és egy árat, és megmutatjuk, mennyit kell dolgoznod, hogy megengedhesd magadnak.',
      period: {
        label: 'Fizetés típusa',
        hour: 'Órabér',
        month: 'Havi bér',
        year: 'Éves bér'
      },
      pay: {
        label: 'Fizetés',
        unit: 'Ft / óra',
        value: '3000',
        step: '100',
        monthStep: '10000',
        yearStep: '100000',
        hint: 'A legőszintébb eredményhez az adózás utáni, nettó fizetéseddel számolj.',
        decrease: 'Fizetés csökkentése',
        increase: 'Fizetés növelése'
      },
      hoursPerWeek: {
        label: 'Heti munkaidő',
        unit: 'óra',
        value: '40',
        chip1: '37,5 óra',
        chip2: '40 óra',
        preset1: '37.5',
        preset2: '40',
        decrease: 'Heti munkaidő csökkentése',
        increase: 'Heti munkaidő növelése'
      },
      price: {
        label: 'Ár',
        unit: 'Ft',
        value: '249990',
        step: '1000',
        decrease: 'Ár csökkentése',
        increase: 'Ár növelése'
      },
      resultsTitle: 'Az ár munkaidőben',
      youNeedToWork: 'Ennyit kell dolgoznod',
      workDays: 'Munkanapok',
      workWeeks: 'Munkahetek',
      hourlyRate: 'Az órabéred',
      runtime: {
        unit: {
          hour: 'Ft / óra',
          month: 'Ft / hó',
          year: 'Ft / év'
        },
        days: { one: '{n} nap', other: '{n} nap' },
        weeks: { one: '{n} hét', other: '{n} hét' },
        note: {
          empty: 'Add meg a fizetésed, a heti munkaidődet és egy árat, és megmutatjuk, mennyit kell dolgoznod érte.',
          result: '{hours} órás munkanapokkal és heti {days} munkanappal számolva.'
        }
      },
      about: {
        title: 'Így számoljuk a munkaidőt',
        paragraphs: [
          'Először a fizetésedet órabérre váltjuk. A havi fizetést megszorozzuk 12-vel, és elosztjuk az éves munkaóráid számával (heti órák × 52); az éves fizetést közvetlenül ezzel osztjuk el. Ezután az árat elosztjuk az órabérrel.',
          'A munkanapokat ötnapos munkahéttel számoljuk, így a heti 40 óra 8 órás napokat jelent. Például 3000 Ft-os órabérrel egy 249 990 Ft-os telefon nagyjából 83 munkaórádba kerül – ez valamivel több mint két teljes munkahét.',
          'A legőszintébb eredményt a nettó, adózás utáni fizetéseddel kapod, hiszen valójában azt költöd el. Ha az árakat munkaórában nézed, könnyebb eldönteni, hogy valami tényleg megéri-e.'
        ]
      },
      faq: [
        {
          q: 'Hány órát kell dolgoznom, hogy megvehessek valamit?',
          a: 'Oszd el az árat a nettó órabéreddel. Ha adózás után óránként 2500 Ft-ot keresel, egy 30 000 Ft-os vásárlás 12 munkaórádba kerül.'
        },
        {
          q: 'Bruttó vagy nettó fizetéssel számoljak?',
          a: 'Az adózás utáni nettó fizetés adja a legreálisabb eredményt, mert valójában ennyi pénzt költhetsz el. A bruttó fizetéssel a dolgok olcsóbbnak tűnnek, mint amilyenek.'
        },
        {
          q: 'Hogyan számolom át a havi fizetést órabérre?',
          a: 'Szorozd meg a havi fizetést 12-vel, és oszd el az éves munkaóráid számával. Heti 40 órával ez 2080 óra, így a havi 450 000 Ft nettó fizetés kb. 2600 Ft-os órabérnek felel meg. A kalkulátor ezt elvégzi helyetted, ha a Havi bér lehetőséget választod.'
        }
      ]
    },

    coffee: {
      name: 'Kávézás költsége',
      heading: 'Kávékalkulátor',
      title: 'Kávékalkulátor – mennyibe kerül évente a napi kávé? | costsimulators.com',
      description: 'Nézd meg, mennyibe kerül a napi kávéd havonta, valamint 1, 5 és 10 év alatt. Add meg egy csésze árát és a heti kávék számát – ingyenes és privát.',
      card: 'Mennyi pénz lesz a napi kávédból egy, öt és tíz év alatt? Itt kiderül.',
      tag: 'Szokás',
      lead: 'Add meg, mennyibe kerül egy csésze kávé, és milyen gyakran veszel, és megmutatjuk, mennyit tesz ki ez a szokás az évek során.',
      price: {
        label: 'Egy csésze ára',
        unit: 'Ft',
        step: '50',
        value: '990',
        decrease: 'Kávé árának csökkentése',
        increase: 'Kávé árának növelése'
      },
      perWeek: {
        label: 'Heti kávék',
        unit: 'csésze',
        chip1: 'Munkanapokon',
        chip2: 'Minden nap',
        chip3: 'Napi kettő',
        decrease: 'Heti kávék számának csökkentése',
        increase: 'Heti kávék számának növelése'
      },
      resultsTitle: 'Ennyit tesz ki',
      in10Years: '10 év alatt',
      perMonth: 'Havonta',
      year1: '1 év',
      year5: '5 év',
      runtime: {
        note: {
          empty: 'Add meg az árat és azt, hogy hetente hány csésze kávét iszol, és megmutatjuk az összegeket.',
          result: 'Ez évente kb. {cups} csésze, csészénként {price}.'
        }
      },
      about: {
        title: 'Így számoljuk a kávé költségét',
        paragraphs: [
          'Az éves költség: egy csésze ára × heti csészék száma × 52 hét. A havi költség az éves költség tizenketted része, az 5 és 10 éves összegek pedig infláció és áremelkedés nélkül szorozzák meg az éves költséget.',
          'Ha minden munkanapon veszel egy 990 Ft-os kávét, az évente kb. 257 000 Ft, tíz év alatt pedig több mint 2,5 millió forint. Ha meglep a szám, az otthon főzött kávé vagy egy saját termoszbögre egyszerű módja a spórolásnak.',
          'A kalkulátor bármilyen kis, rendszeres vásárláshoz jó: energiaitalhoz, ebédre vett szendvicshez vagy egy üveg ásványvízhez. Add meg az árát, és azt, hogy hetente hányat veszel belőle.'
        ]
      },
      faq: [
        {
          q: 'Mennyibe kerül évente a napi kávé?',
          a: 'Ha a hét minden napján iszol egy csészével, az évente 364 csésze. 1000 Ft-os áron ez évente 364 000 Ft, tíz év alatt pedig 3 640 000 Ft.'
        },
        {
          q: 'Olcsóbb otthon kávét főzni?',
          a: 'Általában sokkal. Egy otthon főzött csésze gyakran 100 Ft-nál is kevesebbe kerül, míg a kávézóban ennek sokszorosát fizeted. Add meg az otthoni kávéd csészénkénti árát, és hasonlítsd össze.'
        },
        {
          q: 'Számol a kalkulátor az inflációval?',
          a: 'Nem. Az előrejelzések változatlan árral számolnak, így azt mutatják, mennyibe kerül a szokás mai árakon. Emelkedő árak mellett a valós hosszú távú költség ennél magasabb.'
        }
      ]
    },

    smoking: {
      name: 'Dohányzás költsége',
      heading: 'Cigarettakalkulátor',
      title: 'Cigarettakalkulátor – mennyibe kerül a dohányzás? | costsimulators.com',
      description: 'Számold ki, mennyibe kerül a dohányzás havonta, valamint 1, 5 és 10 év alatt – és mennyit spórolsz, ha leszoksz. Add meg a doboz árát és a napi szálak számát.',
      card: 'Tudd meg, mennyi pénz megy füstbe havonta és az évek során.',
      tag: 'Szokás',
      lead: 'Add meg, mennyibe kerül egy doboz cigaretta, és mennyit szívsz, és megmutatjuk, mennyi pénz megy füstbe az évek alatt.',
      packPrice: {
        label: 'Doboz ára',
        unit: 'Ft',
        step: '50',
        value: '2800',
        decrease: 'Doboz árának csökkentése',
        increase: 'Doboz árának növelése'
      },
      perDay: {
        label: 'Napi cigaretta',
        unit: 'szál',
        chip1: 'Napi 5',
        chip2: 'Napi 10',
        chip3: 'Napi 20',
        decrease: 'Napi szálak számának csökkentése',
        increase: 'Napi szálak számának növelése'
      },
      perPack: {
        label: 'Szál dobozonként',
        unit: 'dobozméret',
        value: '20',
        decrease: 'Dobozonkénti szálak számának csökkentése',
        increase: 'Dobozonkénti szálak számának növelése'
      },
      resultsTitle: 'Füstbe megy',
      in10Years: '10 év alatt',
      perMonth: 'Havonta',
      year1: '1 év',
      year5: '5 év',
      runtime: {
        note: {
          empty: 'Add meg a doboz árát, azt, hogy naponta hány szálat szívsz el, és hány szál van egy dobozban, és megmutatjuk az összegeket.',
          result: 'Ez évente kb. {cigarettes} szál ({packs} doboz), szálanként {price}.'
        }
      },
      about: {
        title: 'Így számoljuk a dohányzás költségét',
        paragraphs: [
          'Egy szál ára a doboz ára osztva a dobozban lévő szálak számával. Ezt megszorozzuk a naponta elszívott szálak számával és 365 nappal, így kapjuk az éves költséget. A havi költség ennek tizenketted része, az 5 és 10 éves összegek pedig mai árakkal számolnak.',
          'Napi fél doboz 2800 Ft-os dobozárral évente kb. 511 000 Ft-ba kerül, tíz év alatt pedig több mint 5 millió forintba. Az összeg látványa komoly motiváció lehet: ugyanebből a pénzből utazhatnál, félretehetnél, vagy törleszthetnéd a tartozásaidat.',
          'A kalkulátor csak a cigaretta árát számolja. Az egészségügyi kiadások és a betegség miatt kiesett munkanapok még erre jönnek. Ha segítség kell a leszokáshoz, fordulj a háziorvosodhoz – a gyógyszertárban is szívesen adnak tanácsot.'
        ]
      },
      faq: [
        {
          q: 'Mennyibe kerül évente napi egy doboz?',
          a: 'Napi egy doboz egy év alatt 365 doboz. 2800 Ft-os dobozárral ez évente 1 022 000 Ft, tíz év alatt pedig 10 220 000 Ft.'
        },
        {
          q: 'Mennyi pénzt spórolok, ha leszokom a dohányzásról?',
          a: 'Mindazt, amit ez a kalkulátor mutat. Add meg, mennyit szívsz most: a havi és az éves összeg pontosan az, amennyit a leszokással megspórolsz.'
        },
        {
          q: 'Sodort cigarettára is működik?',
          a: 'Igen. Add meg egy csomag dohány árát dobozárként, a belőle sodort cigaretták számát dobozméretként, és azt, hogy naponta hányat szívsz el.'
        }
      ]
    },

    subscriptions: {
      name: 'Előfizetések',
      heading: 'Előfizetés-kalkulátor',
      title: 'Előfizetés-kalkulátor – havi és éves díjak összesítve | costsimulators.com',
      description: 'Add össze a streaminget, az edzőtermet, a mobilt és minden más előfizetést. Nézd meg a havi, éves és 10 éves végösszeget, és azt, hogy melyik előfizetés a legdrágább.',
      card: 'Add össze a streaminget, az edzőtermet és minden más rendszeres kiadást egy helyen.',
      tag: 'Költségvetés',
      lead: 'Írd fel mindazt, amiért rendszeresen fizetsz, és nézd meg, mennyi ez összesen. Havi, éves és heti számlázás is megadható.',
      listTitle: 'Előfizetéseid',
      empty: 'Még nincs előfizetés. Adj hozzá egyet lent, vagy válassz a gyors hozzáadásból.',
      add: 'Előfizetés hozzáadása',
      quickAdd: 'Gyors hozzáadás',
      quick: {
        1: { name: 'Videostreaming', price: '3990' },
        2: { name: 'Zenestreaming', price: '1999' },
        3: { name: 'Edzőterem', price: '19990' },
        4: { name: 'Felhőtárhely', price: '1190' },
        5: { name: 'Mobil-előfizetés', price: '5990' },
        6: { name: 'Hírportál-előfizetés', price: '2490' }
      },
      note: 'A listád az oldal címében tárolódik, így elmentheted könyvjelzőként, vagy megoszthatod. Soha nem kerül el sehová.',
      row: {
        name: 'Név',
        nameLabel: 'Előfizetés neve',
        priceLabel: 'Ár forintban',
        cycleLabel: 'Számlázási időszak',
        monthly: '/ hó',
        yearly: '/ év',
        weekly: '/ hét'
      },
      resultsTitle: 'Előfizetések összesen',
      perYear: 'Évente',
      perMonth: 'Havonta',
      perDay: 'Naponta',
      in10Years: '10 év alatt',
      breakdownLabel: 'Éves költség előfizetésenként',
      copySummary: 'Összesítés másolása',
      runtime: {
        untitled: 'Névtelen',
        remove: '{name} törlése',
        removeUnnamed: 'Előfizetés törlése',
        breakdown: '{cost} / év · {percent}%',
        cycle: { monthly: 'hó', yearly: 'év', weekly: 'hét' },
        note: {
          empty: 'Adj hozzá egy előfizetést az árával együtt, és megmutatjuk az összegeket.',
          single: 'Évente {cost} megy el erre: {name}.',
          biggest: 'A legnagyobb kiadásod: {name}, évente {cost}, vagyis a teljes összeg {percent}%-a.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Összesen: havonta {month}, évente {year}'
        }
      },
      about: {
        title: 'Így számoljuk az előfizetések összegét',
        paragraphs: [
          'Minden előfizetést éves költségre váltunk: a havi árakat 12-vel, a heti árakat 52-vel szorozzuk, az éves árakat pedig változatlanul használjuk. Az éves végösszeget 12-vel osztva kapjuk a havi, 365-tel osztva a napi költséget.',
          'A részletezés a legdrágábbtól a legolcsóbbig sorba rendezi az előfizetéseidet, és megmutatja, mekkora részt tesz ki mindegyik a teljes összegből, így könnyen kiszúrhatod, mit érdemes lemondani vagy olcsóbbra cserélni.',
          'A listád az oldal címében tárolódik, nem szerveren. Mentsd el az oldalt könyvjelzőként, ha később vissza akarsz térni hozzá, vagy küldd el a linket, és nézzétek át együtt a család közös előfizetéseit.'
        ]
      },
      faq: [
        {
          q: 'Hogyan találom meg az összes előfizetésemet?',
          a: 'Nézd át az elmúlt néhány hónap bankszámla- és hitelkártya-kivonatait, és keresd az ismétlődő terheléseket. Ellenőrizd az App Store, a Google Play és a PayPal előfizetési beállításait is.'
        },
        {
          q: 'Olcsóbb az éves csomag, mint a havi?',
          a: 'Gyakran 15–20%-kal, de csak akkor, ha a szolgáltatást egyébként is egész évben használnád. Vedd fel mindkét változatot a listára, és hasonlítsd össze az éves költségüket.'
        },
        {
          q: 'Megmarad a listám?',
          a: 'A listád csak az oldal címében tárolódik. Ha meg akarod tartani, mentsd el a linket könyvjelzőként, vagy oszd meg; semmi sem kerül szerverre vagy sütikbe.'
        }
      ]
    },

    electricity: {
      name: 'Áramköltség',
      heading: 'Áramfogyasztás-kalkulátor',
      title: 'Áramfogyasztás-kalkulátor – mennyibe kerül egy készülék? | costsimulators.com',
      description: 'Számold ki, mennyibe kerül egy készülék működtetése naponta, havonta és évente a teljesítménye, a használati idő és az áramár alapján. Ingyenes kWh-kalkulátor.',
      card: 'Nézd meg, mennyibe kerül egy készülék bekapcsolva tartása naponta, havonta és évente.',
      tag: 'Otthon',
      lead: 'Add meg egy készülék teljesítményét, a használati idejét és az áramárat, és megmutatjuk, mennyibe kerül valójában bekapcsolva tartani.',
      power: {
        label: 'Teljesítmény',
        unit: 'watt',
        chip1: 'LED-izzó 9 W',
        chip2: 'Laptop 60 W',
        chip3: 'Tévé 100 W',
        chip4: 'Gamer PC 400 W',
        chip5: 'Hősugárzó 1500 W',
        decrease: 'Teljesítmény csökkentése',
        increase: 'Teljesítmény növelése'
      },
      hours: {
        label: 'Napi használat',
        unit: 'óra',
        decrease: 'Napi használat csökkentése',
        increase: 'Napi használat növelése'
      },
      days: {
        label: 'Heti használat',
        unit: 'nap',
        decrease: 'Heti használati napok csökkentése',
        increase: 'Heti használati napok növelése'
      },
      kwhPrice: {
        label: 'Áramár',
        unit: 'Ft / kWh',
        value: '36',
        step: '1',
        divisor: '1',
        hint: 'A legpontosabb eredményhez a rendszerhasználati díjat és az áfát is tartalmazó bruttó árral számolj.',
        decrease: 'Áramár csökkentése',
        increase: 'Áramár növelése'
      },
      resultsTitle: 'Működtetési költség',
      perYear: 'Évente',
      perDayOfUse: 'Használati naponként',
      perMonth: 'Havonta',
      energyPerYear: 'Éves fogyasztás',
      runtime: {
        note: {
          empty: 'Add meg a teljesítményt, a napi használatot órában (legfeljebb 24), azt, hogy hetente hány napon működik (legfeljebb 7), és az áramárat.',
          result: 'A fogyasztás használati naponként kb. {day}, évente nagyjából {year}.'
        }
      },
      about: {
        title: 'Így számoljuk az áram költségét',
        paragraphs: [
          'Az energiafogyasztás kilowattórában (kWh): teljesítmény wattban × használati órák ÷ 1000. Egy 100 W-os tévé napi 4 órás használattal naponta 0,4 kWh-t fogyaszt. Ezt megszorozva a kilowattóránkénti áramárral megkapod egy használati nap költségét.',
          'Az éves költség figyelembe veszi, hogy a készülék hetente hány napon működik, és ezt az év 365 napjára vetíti. A havi költség az éves költség tizenketted része.',
          'A teljesítményt a készülék adattábláján vagy a használati útmutatóban találod. Sok készülék az idő nagy részében a maximális teljesítményénél kevesebbet fogyaszt, így az eredmény felső becslés. A legpontosabb árhoz ne csak az energia árát, hanem a rendszerhasználati díjat és az adókat is vedd figyelembe.'
        ]
      },
      faq: [
        {
          q: 'Hogyan számolom ki egy készülék áramköltségét?',
          a: 'Szorozd össze a kilowattban megadott teljesítményt a használati órákkal és a kilowattóránkénti árral. Egy 1500 W-os hősugárzó napi 3 órás használattal 1,5 kW × 3 óra × 36 Ft = 162 Ft-ba kerül naponta.'
        },
        {
          q: 'Hány kWh-t fogyaszt egy készülék?',
          a: 'Oszd el a wattban megadott teljesítményt 1000-rel, és szorozd meg a használati órák számával. Egy 60 W-os laptop napi 8 órás használattal naponta 0,48 kWh-t fogyaszt – ha minden nap használod, ez évente kb. 175 kWh.'
        },
        {
          q: 'Milyen áramárral számoljak?',
          a: 'A villanyszámládon szereplő teljes kilowattóránkénti árral, amely tartalmazza az energia árát, a rendszerhasználati díjat és az adókat. Jó átlagot kapsz, ha a számla végösszegét elosztod a felhasznált kilowattórák számával. A rezsicsökkentett ár az átlagfogyasztásig kb. 36 Ft/kWh, az e fölötti rész ennél jóval drágább.'
        },
        {
          q: 'Fogyaszt áramot a készenléti üzemmód?',
          a: 'Igen, sok készülék készenlétben is fogyaszt néhány wattot. Add meg a készenléti teljesítményt és napi 24 órát, és megmutatjuk, mennyibe kerül ez egy év alatt.'
        }
      ]
    },

    trip: {
      name: 'Útiköltség',
      heading: 'Útiköltség-kalkulátor',
      title: 'Benzinköltség-kalkulátor – utazás és ingázás költsége | costsimulators.com',
      description: 'Számold ki egy utazás vagy a napi ingázás üzemanyagköltségét, és oszd el az utasok között. Kilométerrel és literrel, vagy mérfölddel és gallonnal is működik.',
      card: 'Számold ki egy út vagy az ingázás benzinköltségét, és oszd el a többiekkel.',
      tag: 'Utazás',
      lead: 'Számold ki egy utazás vagy a napi ingázás üzemanyagköltségét, és oszd el mindenki között, aki az autóban ül.',
      unit: {
        label: 'Mértékegység',
        metric: 'Kilométer és liter',
        us: 'Mérföld és gallon'
      },
      distance: {
        label: 'Távolság',
        unit: 'km egy irányba',
        decrease: 'Távolság csökkentése',
        increase: 'Távolság növelése'
      },
      direction: {
        label: 'Út típusa',
        one: 'Egy irányba',
        round: 'Oda-vissza'
      },
      consumption: {
        label: 'Fogyasztás',
        unit: 'l/100 km',
        hint: 'Elektromos autód van? Add meg a fogyasztást kWh/100 km-ben és a kilowattóránkénti árat.',
        decrease: 'Fogyasztás csökkentése',
        increase: 'Fogyasztás növelése'
      },
      fuelPrice: {
        label: 'Üzemanyagár',
        unit: 'Ft / liter',
        value: '600',
        step: '5',
        usStep: '20',
        decrease: 'Üzemanyagár csökkentése',
        increase: 'Üzemanyagár növelése'
      },
      people: {
        label: 'Költségen osztozók',
        unit: 'fő',
        decrease: 'Létszám csökkentése',
        increase: 'Létszám növelése'
      },
      tripsPerWeek: {
        label: 'Utak hetente',
        unit: 'a havi és éves összegekhez',
        decrease: 'Heti utak számának csökkentése',
        increase: 'Heti utak számának növelése'
      },
      resultsTitle: 'Üzemanyagköltség',
      perPerson: 'Fejenként',
      perMonth: 'Havonta',
      perYear: 'Évente',
      runtime: {
        direction: { one: 'Egy irányba', round: 'Oda-vissza' },
        unit: {
          metric: {
            distance: 'km egy irányba',
            consumption: 'l/100 km',
            price: 'Ft / liter',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'mérföld egy irányba',
            consumption: 'mpg',
            price: 'Ft / gallon',
            perDistance: 'mérföld',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Add meg a távolságot, a fogyasztást és az üzemanyag árát, és megmutatjuk a költséget.',
          result: 'Az úthoz {fuel} üzemanyag kell, ez kb. {price} / {distance}.'
        }
      },
      about: {
        title: 'Így számoljuk az útiköltséget',
        paragraphs: [
          'Az elfogyasztott üzemanyag mennyisége: távolság × fogyasztás ÷ 100. Ha a munkahelyed 25 km-re van (naponta 50 km oda-vissza), és az autód fogyasztása 6,5 l/100 km, naponta 3,25 liter üzemanyag fogy. Ezt a literenkénti árral megszorozva megkapod az út költségét, az utasok számával elosztva pedig az egy főre jutó részt.',
          'Mérföldben és gallonban az elfogyasztott üzemanyag a távolság osztva az autó mpg-értékével (mérföld per gallon). Ha mértékegységet váltasz, a beírt értékek átszámolódnak, így bármelyik rendszer adatait összevetheted.',
          'A havi és az éves összeg a heti utak számán alapul – heti 5 oda-vissza út tipikus ingázás. Elektromos autónál a fogyasztást kWh/100 km-ben, az árat pedig kilowattóránként add meg.'
        ]
      },
      faq: [
        {
          q: 'Hogyan számolom ki egy út benzinköltségét?',
          a: 'Szorozd meg a távolságot a fogyasztással és az üzemanyag árával, majd oszd el 100-zal. Egy 200 km-es út 6 l/100 km-es fogyasztású autóval, 600 Ft-os literenkénti áron (95-ös benzin): 200 × 6 ÷ 100 × 600 Ft = 7200 Ft.'
        },
        {
          q: 'Hogyan osszuk el a benzinköltséget az utasok között?',
          a: 'Add meg, hányan osztoznak a költségen. A kalkulátor egyenlően elosztja az út költségét mindenki között, a sofőrt is beleértve.'
        },
        {
          q: 'Beleszámolja a kalkulátor az autó kopását, a parkolást vagy az útdíjat?',
          a: 'Nem, csak az üzemanyaggal számol. Az autó kopása, a biztosítás, a parkolás és az útdíjak (például az autópálya-matrica) még erre jönnek, így a vezetés teljes költsége ennél magasabb.'
        }
      ]
    }
  }
};
