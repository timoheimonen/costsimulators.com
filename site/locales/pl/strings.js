// Polish texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in złoty (PLN).

module.exports = {
  meta: {
    name: 'Polski',
    locale: 'pl-PL',
    currency: 'PLN',
    ogLocale: 'pl_PL'
  },

  money: {
    symbol: 'zł',
    zero: '0,00 zł',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Przejdź do treści',
    home: 'Strona główna',
    toggleTheme: 'Zmień motyw',
    themeToLight: 'Włącz jasny motyw',
    themeToDark: 'Włącz ciemny motyw',
    language: 'Język',
    allTools: 'Wszystkie narzędzia',
    share: 'Udostępnij',
    settings: 'Ustawienia',
    quickPicks: 'Szybki wybór',
    faqTitle: 'Najczęściej zadawane pytania',
    relatedTools: 'Więcej kalkulatorów',
    imageAlt: 'costsimulators.com – darmowe kalkulatory do codziennych pytań o pieniądze'
  },

  footer: {
    privacy: 'Działa w całości w Twojej przeglądarce. Bez plików cookie, bez śledzenia.',
    about: 'O serwisie',
    contact: 'Kontakt',
    privacyPolicy: 'Prywatność',
    terms: 'Warunki korzystania'
  },

  runtime: {
    share: {
      linkCopied: 'Link skopiowany',
      copyFailed: 'Nie udało się skopiować',
      copied: 'Skopiowano!',
      calculatedWith: 'Obliczono w costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    }
  },

  home: {
    title: 'Darmowe kalkulatory kosztów na co dzień | costsimulators.com',
    description: 'Darmowe i prywatne kalkulatory, które pokazują, ile naprawdę kosztują spotkania, godziny pracy, kawa, palenie, subskrypcje, prąd i paliwo. Bez rejestracji, działa w przeglądarce.',
    eyebrow: 'Za darmo · Prywatnie · Od razu',
    heading: 'Małe narzędzia na codzienne pytania o <span class="accent-text">pieniądze</span>.',
    lead: 'Szybkie kalkulatory, które pokazują, ile naprawdę kosztują różne rzeczy. Bez rejestracji i śledzenia – wszystko działa bezpośrednio w Twojej przeglądarce.',
    toolsTitle: 'Narzędzia',
    toolCount: '{count} narzędzi',
    suggestTitle: 'Masz pomysł?',
    suggestText: 'Zaproponuj nowe narzędzie na GitHubie.',
    whyTitle: 'Drobne wydatki się sumują',
    whyText1: 'Jedno spotkanie, kawa w drodze do pracy czy kolejny serwis streamingowy rzadko wydają się drogie same w sobie. Gdy jednak zsumujesz je w skali miesiąca, roku albo dekady, liczby wyglądają zupełnie inaczej.',
    whyText2: 'Każdy kalkulator robi jedną rzecz, pyta tylko o potrzebne liczby i od razu pokazuje wynik. Wszystko jest liczone w przeglądarce, więc Twoje liczby nie opuszczają urządzenia.',
    aboutLink: 'Więcej o costsimulators.com',
    faq: [
      {
        q: 'Czy costsimulators.com jest darmowy?',
        a: 'Tak. Wszystkie kalkulatory są całkowicie darmowe – bez rejestracji, płatnego dostępu i reklam. Możesz z nich korzystać także w pracy.'
      },
      {
        q: 'Czy wpisane liczby są gdzieś zapisywane lub wysyłane?',
        a: 'Nie. Wszystko, co wpiszesz, jest liczone w przeglądarce i nigdy nie trafia na serwer. Strona nie używa plików cookie ani narzędzi analitycznych.'
      },
      {
        q: 'Czy mogę udostępnić obliczenie?',
        a: 'Tak. Ustawienia są zapisywane w adresie strony. Kliknij „Udostępnij”, aby skopiować link – każdy, kto go otworzy, zobaczy to samo obliczenie.'
      }
    ]
  },

  notFound: {
    title: 'Nie znaleziono strony | costsimulators.com',
    description: 'Strona, której szukasz, nie istnieje.',
    heading: 'Ta strona nie istnieje.',
    lead: 'Adres mógł zostać błędnie wpisany albo strona została przeniesiona. Wszystkie kalkulatory znajdziesz na stronie głównej.'
  },

  documents: {
    about: {
      name: 'O serwisie',
      title: 'O serwisie – darmowe i prywatne kalkulatory kosztów | costsimulators.com',
      description: 'Kto tworzy costsimulators.com i jak działają kalkulatory. Darmowe, prywatne kalkulatory kosztów spotkań, czasu pracy, nawyków, subskrypcji, prądu i podróży.'
    },
    privacy: {
      name: 'Polityka prywatności',
      title: 'Polityka prywatności | costsimulators.com',
      description: 'Jak costsimulators.com traktuje Twoje dane: obliczenia odbywają się w przeglądarce, bez śledzenia, bez narzędzi analitycznych i bez kont użytkowników.'
    },
    terms: {
      name: 'Warunki korzystania',
      title: 'Warunki korzystania | costsimulators.com',
      description: 'Warunki korzystania z costsimulators.com: bezpłatnie do użytku prywatnego i komercyjnego, bez gwarancji („tak jak jest”), otwarty kod źródłowy na licencji MIT.'
    }
  },

  tools: {
    meetings: {
      name: 'Koszt spotkania',
      heading: 'Kalkulator kosztów spotkania',
      title: 'Kalkulator kosztów spotkania – ile kosztuje spotkanie? | costsimulators.com',
      description: 'Darmowy kalkulator kosztów spotkania z licznikiem na żywo. Wpisz stawkę godzinową i liczbę uczestników, a zobaczysz, ile kosztuje spotkanie – sekunda po sekundzie.',
      card: 'Zobacz, jak koszt spotkania rośnie na żywo, gdy rozmawiacie.',
      tag: 'Na żywo',
      lead: 'Ustaw stawkę godzinową i liczbę osób, kliknij „Start” i obserwuj, ile kosztuje spotkanie w trakcie jego trwania.',
      pulseEvery: '1',
      rate: {
        label: 'Stawka godzinowa',
        unit: 'zł na osobę',
        step: '10',
        value: '120',
        decrease: 'Zmniejsz stawkę godzinową',
        increase: 'Zwiększ stawkę godzinową'
      },
      persons: {
        label: 'Uczestnicy',
        unit: 'osób',
        decrease: 'Zmniejsz liczbę uczestników',
        increase: 'Zwiększ liczbę uczestników'
      },
      perMinute: 'Na minutę',
      perHour: 'Na godzinę',
      note: 'Możesz zmieniać wartości, gdy licznik działa. Osoby, które dołączają lub wychodzą, są liczone od tej chwili.',
      total: 'Łączny koszt',
      elapsed: 'Czas trwania',
      reset: 'Wyzeruj',
      copyReport: 'Kopiuj raport',
      kbdHint: 'Naciśnij <kbd>spację</kbd>, aby uruchomić lub wstrzymać licznik',
      runtime: {
        mode: { start: 'Start', pause: 'Pauza', resume: 'Wznów' },
        status: { ready: 'Gotowy', live: 'Na żywo', paused: 'Wstrzymany' },
        announce: {
          invalid: 'Wpisz stawkę godzinową i liczbę uczestników, aby rozpocząć.',
          started: 'Licznik uruchomiony.',
          paused: 'Wstrzymano: {cost} po {time}.',
          reset: 'Licznik wyzerowany.'
        },
        report: {
          cost: 'Koszt spotkania: {cost}',
          duration: 'Czas trwania: {time}',
          participants: 'Uczestnicy: {persons} × {rate}/h'
        }
      },
      about: {
        title: 'Jak liczony jest koszt spotkania',
        paragraphs: [
          'Kalkulator mnoży liczbę uczestników przez ich stawkę godzinową i czas, który upłynął. Godzinne spotkanie 5 osób przy stawce 120 zł za godzinę kosztuje 600 zł – to 10 zł za każdą minutę.',
          'Jako stawkę godzinową wpisz to, ile godzina pracy naprawdę kosztuje pracodawcę, a nie samo wynagrodzenie. Do wynagrodzenia brutto pracodawca dolicza swoją część składek ZUS oraz składki na Fundusz Pracy i FGŚP – zwykle łącznie około 20–22% pensji. Jeśli nie znasz stawek wszystkich osób, wystarczy średnia dla zespołu.',
          'Licznik liczy poprawnie także w karcie w tle, a bieżący koszt widać w tytule karty przeglądarki, więc możesz go śledzić nawet podczas udostępniania ekranu. Po spotkaniu zatrzymaj licznik i skopiuj krótki raport do notatek.'
        ]
      },
      faq: [
        {
          q: 'Jak obliczyć koszt spotkania?',
          a: 'Pomnóż liczbę uczestników przez ich średnią stawkę godzinową i czas trwania spotkania w godzinach. Na przykład 6 osób × 100 zł/h × 1,5 godziny = 900 zł. Ten kalkulator liczy to na żywo, w trakcie spotkania.'
        },
        {
          q: 'Jaką stawkę godzinową przyjąć?',
          a: 'Użyj pełnego kosztu godziny pracy: stawki brutto powiększonej o składki pracodawcy i inne koszty zatrudnienia. W przypadku konsultantów i osób współpracujących na zasadach B2B przyjmij stawkę z faktury.'
        },
        {
          q: 'Czy mogę zmienić liczbę uczestników w trakcie spotkania?',
          a: 'Tak. Liczbę osób lub stawkę możesz zmienić w dowolnym momencie. Nowe wartości są liczone od tej chwili, a koszt naliczony wcześniej pozostaje bez zmian.'
        },
        {
          q: 'Czy licznik działa po przełączeniu karty?',
          a: 'Tak. Licznik opiera się na zegarze, więc suma jest poprawna także w karcie w tle. Gdy licznik działa, strona prosi też przeglądarkę, by nie wygaszała ekranu.'
        }
      ]
    },

    workhours: {
      name: 'Godziny pracy',
      heading: 'Kalkulator ceny w godzinach pracy',
      title: 'Cena w godzinach pracy – ile trzeba pracować na zakup? | costsimulators.com',
      description: 'Przelicz dowolną cenę na godziny, dni i tygodnie pracy. Podaj stawkę godzinową, pensję miesięczną lub roczną i zobacz, ile naprawdę kosztuje zakup w czasie pracy.',
      card: 'Przelicz dowolną cenę na godziny, dni i tygodnie, które musisz na nią przepracować.',
      tag: 'Praca',
      lead: 'Podaj swoje wynagrodzenie i cenę, a zobaczysz, jak długo musisz pracować, żeby było Cię na to stać.',
      period: {
        label: 'Znam swoje wynagrodzenie',
        hour: 'Za godzinę',
        month: 'Za miesiąc',
        year: 'Za rok'
      },
      pay: {
        label: 'Wynagrodzenie',
        unit: 'zł za godzinę',
        value: '35',
        step: '1',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Najuczciwszy wynik da kwota netto – to, co dostajesz na rękę.',
        decrease: 'Zmniejsz wynagrodzenie',
        increase: 'Zwiększ wynagrodzenie'
      },
      hoursPerWeek: {
        label: 'Godziny w tygodniu',
        unit: 'godz.',
        value: '40',
        chip1: '35 h',
        chip2: '40 h',
        preset1: '35',
        preset2: '40',
        decrease: 'Zmniejsz liczbę godzin w tygodniu',
        increase: 'Zwiększ liczbę godzin w tygodniu'
      },
      price: {
        label: 'Cena',
        unit: 'zł',
        value: '3999',
        step: '100',
        decrease: 'Zmniejsz cenę',
        increase: 'Zwiększ cenę'
      },
      resultsTitle: 'Cena w czasie pracy',
      youNeedToWork: 'Musisz pracować',
      workDays: 'Dni pracy',
      workWeeks: 'Tygodnie pracy',
      hourlyRate: 'Twoja stawka godzinowa',
      runtime: {
        unit: {
          hour: 'zł za godzinę',
          month: 'zł za miesiąc',
          year: 'zł za rok'
        },
        days: { one: '{n} dzień', few: '{n} dni', many: '{n} dni', other: '{n} dnia' },
        weeks: { one: '{n} tydzień', few: '{n} tygodnie', many: '{n} tygodni', other: '{n} tygodnia' },
        note: {
          empty: 'Podaj wynagrodzenie, liczbę godzin w tygodniu i cenę, a zobaczysz, jak długo musisz na to pracować.',
          result: 'Przyjęto dzień pracy {hours} h, {days} dni w tygodniu.'
        }
      },
      about: {
        title: 'Jak liczony jest czas pracy',
        paragraphs: [
          'Najpierw wynagrodzenie jest przeliczane na stawkę godzinową. Pensję miesięczną mnoży się przez 12 i dzieli przez liczbę godzin przepracowanych w roku (godziny tygodniowo × 52), a roczną dzieli się bezpośrednio przez te godziny. Następnie cena jest dzielona przez stawkę godzinową.',
          'Dni pracy liczone są dla pięciodniowego tygodnia, więc 40 godzin tygodniowo oznacza 8-godzinne dni. Na przykład przy stawce 35 zł za godzinę telefon za 3999 zł kosztuje ponad 114 godzin pracy, czyli prawie trzy tygodnie.',
          'Najuczciwszy wynik da wynagrodzenie netto, bo to te pieniądze faktycznie wydajesz. Myślenie o cenach w godzinach pracy to prosty sposób, by ocenić, czy coś jest naprawdę warte swojej ceny.'
        ]
      },
      faq: [
        {
          q: 'Ile godzin muszę pracować, żeby było mnie stać na zakup?',
          a: 'Podziel cenę przez swoją stawkę godzinową netto. Jeśli zarabiasz na rękę 30 zł za godzinę, zakup za 600 zł to 20 godzin pracy.'
        },
        {
          q: 'Wpisać wynagrodzenie brutto czy netto?',
          a: 'Najbardziej realistyczny wynik da kwota netto, bo to pieniądze, którymi faktycznie dysponujesz. Przy kwocie brutto rzeczy wydają się tańsze, niż są naprawdę.'
        },
        {
          q: 'Jak przeliczyć pensję miesięczną na stawkę godzinową?',
          a: 'Pomnóż pensję miesięczną przez 12 i podziel przez liczbę godzin przepracowanych w roku. Przy 40-godzinnym tygodniu to 2080 godzin, więc 6000 zł netto miesięcznie to niecałe 35 zł za godzinę. Kalkulator zrobi to za Ciebie, gdy wybierzesz „Za miesiąc”.'
        }
      ]
    },

    coffee: {
      name: 'Koszt kawy',
      heading: 'Kalkulator kosztów kawy',
      title: 'Kalkulator kosztów kawy – ile wydajesz na kawę rocznie? | costsimulators.com',
      description: 'Sprawdź, ile kosztuje Cię codzienna kawa miesięcznie oraz w ciągu 1, 5 i 10 lat. Wpisz cenę kawy i liczbę kaw w tygodniu – za darmo i prywatnie.',
      card: 'Zobacz, ile kosztuje codzienna kawa w ciągu roku, pięciu i dziesięciu lat.',
      tag: 'Nawyk',
      lead: 'Wpisz cenę kawy i to, jak często ją kupujesz, a zobaczysz, ile ten nawyk kosztuje przez lata.',
      price: {
        label: 'Cena jednej kawy',
        unit: 'zł',
        step: '1',
        value: '15',
        decrease: 'Zmniejsz cenę kawy',
        increase: 'Zwiększ cenę kawy'
      },
      perWeek: {
        label: 'Kawy w tygodniu',
        unit: 'szt.',
        chip1: 'W dni robocze',
        chip2: 'Codziennie',
        chip3: 'Dwa razy dziennie',
        decrease: 'Zmniejsz liczbę kaw w tygodniu',
        increase: 'Zwiększ liczbę kaw w tygodniu'
      },
      resultsTitle: 'Ile to kosztuje w sumie',
      in10Years: 'Przez 10 lat',
      perMonth: 'Miesięcznie',
      year1: '1 rok',
      year5: '5 lat',
      runtime: {
        note: {
          empty: 'Wpisz cenę i liczbę kaw w tygodniu, aby zobaczyć sumy.',
          result: 'Kupujesz kawę około {cups} razy w roku, po {price} za każdą.'
        }
      },
      about: {
        title: 'Jak liczony jest koszt kawy',
        paragraphs: [
          'Koszt roczny to cena kawy × liczba kaw w tygodniu × 52 tygodnie. Koszt miesięczny to koszt roczny podzielony przez 12, a sumy dla 5 i 10 lat to wielokrotność kosztu rocznego – bez inflacji i podwyżek cen.',
          'Kawa za 15 zł w każdy dzień roboczy to 3900 zł rocznie i 39 000 zł w ciągu dziesięciu lat. Jeśli ta liczba Cię zaskoczy, kawa zaparzona w domu i zabrana w kubku termicznym to prosty sposób na oszczędności.',
          'Kalkulator sprawdzi się przy każdym drobnym, regularnym zakupie: napoju energetycznym, drożdżówce czy butelce wody. Wpisz cenę i liczbę zakupów w tygodniu.'
        ]
      },
      faq: [
        {
          q: 'Ile kosztuje codzienna kawa w skali roku?',
          a: 'Jedna kawa dziennie, siedem dni w tygodniu, to 364 kawy rocznie. Przy cenie 10 zł daje to 3640 zł rocznie i 36 400 zł w ciągu dziesięciu lat.'
        },
        {
          q: 'Czy kawa parzona w domu jest tańsza?',
          a: 'Zwykle dużo tańsza. Filiżanka kawy zaparzonej w domu często kosztuje mniej niż 2 zł, a w kawiarni płaci się kilkanaście złotych. Wpisz koszt domowej kawy i porównaj.'
        },
        {
          q: 'Czy kalkulator uwzględnia inflację?',
          a: 'Nie. Prognozy zakładają, że cena się nie zmienia, więc pokazują koszt nawyku w dzisiejszych cenach. Gdy ceny rosną, rzeczywisty koszt w długim okresie jest wyższy.'
        }
      ]
    },

    smoking: {
      name: 'Koszt palenia',
      heading: 'Kalkulator kosztów palenia',
      title: 'Kalkulator kosztów palenia – ile kosztują papierosy? | costsimulators.com',
      description: 'Sprawdź, ile kosztuje palenie miesięcznie oraz w ciągu 1, 5 i 10 lat – i ile zaoszczędzisz, rzucając palenie. Wpisz cenę paczki i liczbę papierosów dziennie.',
      card: 'Zobacz, ile pieniędzy idzie z dymem co miesiąc i przez lata.',
      tag: 'Nawyk',
      lead: 'Wpisz cenę paczki i to, ile palisz, a zobaczysz, ile pieniędzy idzie z dymem przez lata.',
      packPrice: {
        label: 'Cena paczki',
        unit: 'zł',
        step: '0.5',
        value: '21',
        decrease: 'Zmniejsz cenę paczki',
        increase: 'Zwiększ cenę paczki'
      },
      perDay: {
        label: 'Papierosy dziennie',
        unit: 'szt.',
        chip1: '5 dziennie',
        chip2: '10 dziennie',
        chip3: '20 dziennie',
        decrease: 'Zmniejsz liczbę papierosów dziennie',
        increase: 'Zwiększ liczbę papierosów dziennie'
      },
      perPack: {
        label: 'Papierosy w paczce',
        unit: 'rozmiar paczki',
        value: '20',
        decrease: 'Zmniejsz liczbę papierosów w paczce',
        increase: 'Zwiększ liczbę papierosów w paczce'
      },
      resultsTitle: 'Poszło z dymem',
      in10Years: 'Przez 10 lat',
      perMonth: 'Miesięcznie',
      year1: '1 rok',
      year5: '5 lat',
      runtime: {
        note: {
          empty: 'Wpisz cenę paczki, liczbę papierosów dziennie i rozmiar paczki, aby zobaczyć sumy.',
          result: 'Rocznie to około {cigarettes} szt. ({packs} op.), po {price} za sztukę.'
        }
      },
      about: {
        title: 'Jak liczony jest koszt palenia',
        paragraphs: [
          'Cena jednego papierosa to cena paczki podzielona przez liczbę papierosów w paczce. Mnoży się ją przez liczbę papierosów wypalanych dziennie i przez 365 dni, co daje koszt roczny. Koszt miesięczny to jego dwunasta część, a sumy dla 5 i 10 lat są liczone w dzisiejszych cenach.',
          'Pół paczki dziennie przy cenie 21 zł za paczkę to około 3830 zł rocznie i ponad 38 000 zł w ciągu dziesięciu lat. Zobaczenie tej sumy potrafi mocno zmotywować: te same pieniądze mogłyby pójść na wyjazd, oszczędności albo spłatę długów.',
          'Kalkulator liczy tylko cenę papierosów. Do tego dochodzą koszty leczenia, wyższe składki ubezpieczeniowe i dni spędzone na zwolnieniu lekarskim. Jeśli chcesz rzucić palenie, pomoc znajdziesz u lekarza rodzinnego i w Telefonicznej Poradni Pomocy Palącym (801 108 108).'
        ]
      },
      faq: [
        {
          q: 'Ile kosztuje paczka dziennie w skali roku?',
          a: 'Paczka dziennie to 365 paczek rocznie. Przy cenie 21 zł za paczkę daje to 7665 zł rocznie i 76 650 zł w ciągu dziesięciu lat.'
        },
        {
          q: 'Ile zaoszczędzę, jeśli rzucę palenie?',
          a: 'Wszystko, co pokazuje ten kalkulator. Wpisz, ile palisz dziś: sumy miesięczne i roczne to kwota, którą zaoszczędzisz, rzucając palenie.'
        },
        {
          q: 'Czy to działa także w przypadku tytoniu do skręcania?',
          a: 'Tak. Jako cenę paczki wpisz cenę opakowania tytoniu, jako rozmiar paczki – liczbę papierosów, które z niego skręcasz, a do tego liczbę papierosów wypalanych dziennie.'
        }
      ]
    },

    subscriptions: {
      name: 'Subskrypcje',
      heading: 'Kalkulator kosztów subskrypcji',
      title: 'Kalkulator subskrypcji – ile płacisz miesięcznie i rocznie? | costsimulators.com',
      description: 'Zsumuj streaming, siłownię, abonament telefoniczny i inne subskrypcje. Zobacz łączny koszt miesięcznie, rocznie i przez 10 lat oraz to, która subskrypcja kosztuje najwięcej.',
      card: 'Zsumuj streaming, siłownię i wszystkie inne stałe opłaty w jednym miejscu.',
      tag: 'Budżet',
      lead: 'Wypisz wszystko, za co płacisz regularnie, i zobacz, ile to kosztuje razem. Obsługiwane są opłaty miesięczne, roczne i tygodniowe.',
      listTitle: 'Twoje subskrypcje',
      empty: 'Nie masz jeszcze żadnych subskrypcji. Dodaj pierwszą poniżej albo skorzystaj z szybkiego dodawania.',
      add: 'Dodaj subskrypcję',
      quickAdd: 'Szybkie dodawanie',
      quick: {
        1: { name: 'Streaming wideo', price: '49' },
        2: { name: 'Streaming muzyki', price: '23.99' },
        3: { name: 'Siłownia', price: '139' },
        4: { name: 'Dysk w chmurze', price: '14.99' },
        5: { name: 'Abonament komórkowy', price: '50' },
        6: { name: 'Prasa cyfrowa', price: '29.99' }
      },
      note: 'Lista jest zapisywana w adresie strony, więc możesz dodać ją do zakładek lub udostępnić. Nigdy nie jest nigdzie wysyłana.',
      row: {
        name: 'Nazwa',
        nameLabel: 'Nazwa subskrypcji',
        priceLabel: 'Cena w złotych',
        cycleLabel: 'Okres rozliczeniowy',
        monthly: '/ mies.',
        yearly: '/ rok',
        weekly: '/ tydz.'
      },
      resultsTitle: 'Subskrypcje razem',
      perYear: 'Rocznie',
      perMonth: 'Miesięcznie',
      perDay: 'Dziennie',
      in10Years: 'Przez 10 lat',
      breakdownLabel: 'Koszt roczny poszczególnych subskrypcji',
      copySummary: 'Kopiuj podsumowanie',
      runtime: {
        untitled: 'Bez nazwy',
        remove: 'Usuń: {name}',
        removeUnnamed: 'Usuń subskrypcję',
        breakdown: '{cost} / rok · {percent}%',
        cycle: { monthly: 'mies.', yearly: 'rok', weekly: 'tydz.' },
        note: {
          empty: 'Dodaj subskrypcję z ceną, aby zobaczyć sumy.',
          single: '{name} kosztuje {cost} rocznie.',
          biggest: 'Najwięcej kosztuje {name}: {cost} rocznie, czyli {percent}% całości.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Razem: {month} miesięcznie, {year} rocznie'
        }
      },
      about: {
        title: 'Jak liczona jest suma subskrypcji',
        paragraphs: [
          'Każda subskrypcja jest przeliczana na koszt roczny: ceny miesięczne mnoży się przez 12, tygodniowe przez 52, a roczne przyjmuje bez zmian. Sumę roczną dzieli się następnie przez 12, co daje koszt miesięczny, i przez 365, co daje koszt dzienny.',
          'Zestawienie porządkuje subskrypcje od najdroższej do najtańszej i pokazuje udział każdej z nich w całości, dzięki czemu łatwo zauważyć, co warto anulować lub zmienić na tańszy plan.',
          'Lista jest zapisywana w adresie strony, nigdy na serwerze. Dodaj stronę do zakładek, aby wrócić do listy później, albo udostępnij link, by przejrzeć wspólne subskrypcje z rodziną.'
        ]
      },
      faq: [
        {
          q: 'Jak znaleźć wszystkie swoje subskrypcje?',
          a: 'Przejrzyj wyciągi z konta bankowego i karty kredytowej z ostatnich kilku miesięcy i poszukaj powtarzających się obciążeń. Sprawdź też ustawienia subskrypcji w App Store, Google Play i PayPalu.'
        },
        {
          q: 'Czy plan roczny jest tańszy niż miesięczny?',
          a: 'Często o 15–20%, ale tylko wtedy, gdy i tak zamierzasz korzystać z usługi przez cały rok. Dodaj obie wersje do listy, aby porównać ich koszt roczny.'
        },
        {
          q: 'Czy moja lista jest zapisywana?',
          a: 'Lista istnieje tylko w adresie strony. Aby ją zachować, dodaj link do zakładek lub go udostępnij – nic nie jest zapisywane na serwerze ani w plikach cookie.'
        }
      ]
    },

    electricity: {
      name: 'Koszt prądu',
      heading: 'Kalkulator zużycia prądu',
      title: 'Kalkulator zużycia prądu – ile kosztuje praca urządzenia? | costsimulators.com',
      description: 'Oblicz, ile kosztuje praca urządzenia dziennie, miesięcznie i rocznie na podstawie mocy, czasu użytkowania i ceny prądu. Darmowy kalkulator zużycia energii i kosztu kWh.',
      card: 'Zobacz, ile kosztuje używanie urządzenia dziennie, miesięcznie i rocznie.',
      tag: 'Dom',
      lead: 'Wpisz moc urządzenia, czas pracy i cenę prądu, a zobaczysz, ile naprawdę kosztuje jego używanie.',
      power: {
        label: 'Moc',
        unit: 'watów',
        chip1: 'Żarówka LED 9 W',
        chip2: 'Laptop 60 W',
        chip3: 'Telewizor 100 W',
        chip4: 'Komputer do gier 400 W',
        chip5: 'Grzejnik 1500 W',
        decrease: 'Zmniejsz moc',
        increase: 'Zwiększ moc'
      },
      hours: {
        label: 'Godziny dziennie',
        unit: 'godz.',
        decrease: 'Zmniejsz liczbę godzin dziennie',
        increase: 'Zwiększ liczbę godzin dziennie'
      },
      days: {
        label: 'Dni w tygodniu',
        unit: 'dni',
        decrease: 'Zmniejsz liczbę dni w tygodniu',
        increase: 'Zwiększ liczbę dni w tygodniu'
      },
      kwhPrice: {
        label: 'Cena prądu',
        unit: 'zł/kWh',
        value: '1.10',
        step: '0.05',
        divisor: '1',
        hint: 'Uwzględnij opłaty dystrybucyjne i podatki, aby wynik był najdokładniejszy.',
        decrease: 'Zmniejsz cenę prądu',
        increase: 'Zwiększ cenę prądu'
      },
      resultsTitle: 'Koszt użytkowania',
      perYear: 'Rocznie',
      perDayOfUse: 'Za dzień użytkowania',
      perMonth: 'Miesięcznie',
      energyPerYear: 'Zużycie roczne',
      runtime: {
        note: {
          empty: 'Wpisz moc, liczbę godzin dziennie (maks. 24), dni w tygodniu (maks. 7) i cenę prądu.',
          result: 'Zużywa około {day} w każdym dniu użytkowania i około {year} rocznie.'
        }
      },
      about: {
        title: 'Jak liczony jest koszt prądu',
        paragraphs: [
          'Zużycie energii w kilowatogodzinach (kWh) to moc w watach × czas pracy w godzinach ÷ 1000. Telewizor o mocy 100 W włączony przez 4 godziny zużywa 0,4 kWh dziennie. Po pomnożeniu przez cenę za kWh otrzymujesz koszt jednego dnia użytkowania.',
          'Koszt roczny uwzględnia, ile dni w tygodniu urządzenie pracuje, w przeliczeniu na 365 dni w roku. Koszt miesięczny to dwunasta część kosztu rocznego.',
          'Moc znajdziesz na tabliczce znamionowej urządzenia lub w instrukcji obsługi. Wiele urządzeń przez większość czasu pobiera mniej niż maksymalną moc, więc wynik jest górnym oszacowaniem. Aby cena była najdokładniejsza, uwzględnij nie tylko cenę energii, ale też opłaty dystrybucyjne i podatki.'
        ]
      },
      faq: [
        {
          q: 'Jak obliczyć koszt prądu zużywanego przez urządzenie?',
          a: 'Pomnóż moc w kilowatach przez liczbę godzin pracy i cenę za kWh. Grzejnik o mocy 1500 W włączony na 3 godziny kosztuje 1,5 kW × 3 h × 1,10 zł = 4,95 zł dziennie.'
        },
        {
          q: 'Ile kWh zużywa urządzenie?',
          a: 'Podziel moc w watach przez 1000 i pomnóż przez liczbę godzin pracy. Laptop o mocy 60 W używany 8 godzin dziennie zużywa 0,48 kWh na dobę – około 175 kWh rocznie, jeśli pracuje codziennie.'
        },
        {
          q: 'Jaką cenę prądu przyjąć?',
          a: 'Przyjmij łączną cenę za kWh z rachunku za prąd, obejmującą energię, opłaty dystrybucyjne i podatki. Dobrą średnią da podzielenie kwoty rachunku przez liczbę zużytych kWh.'
        },
        {
          q: 'Czy tryb czuwania zużywa prąd?',
          a: 'Tak, wiele urządzeń w trybie czuwania pobiera kilka watów. Wpisz moc w trybie czuwania i 24 godziny na dobę, aby zobaczyć, ile to kosztuje w ciągu roku.'
        }
      ]
    },

    trip: {
      name: 'Koszt przejazdu',
      heading: 'Kalkulator kosztów paliwa',
      title: 'Kalkulator kosztów paliwa – koszt przejazdu i dojazdów | costsimulators.com',
      description: 'Oblicz koszt paliwa na trasę lub codzienne dojazdy do pracy i podziel go między pasażerów. Działa w kilometrach i litrach albo w milach i galonach.',
      card: 'Oblicz koszt paliwa na podróż lub dojazd do pracy i podziel go z innymi.',
      tag: 'Podróże',
      lead: 'Oblicz koszt paliwa na jedną trasę lub codzienny dojazd do pracy i podziel go między wszystkich jadących.',
      unit: {
        label: 'Jednostki',
        metric: 'Kilometry i litry',
        us: 'Mile i galony'
      },
      distance: {
        label: 'Odległość',
        unit: 'km w jedną stronę',
        decrease: 'Zmniejsz odległość',
        increase: 'Zwiększ odległość'
      },
      direction: {
        label: 'Trasa',
        one: 'W jedną stronę',
        round: 'Tam i z powrotem'
      },
      consumption: {
        label: 'Spalanie',
        unit: 'l/100 km',
        hint: 'Jeździsz autem elektrycznym? Wpisz kWh/100 km i cenę za kWh.',
        decrease: 'Zmniejsz spalanie',
        increase: 'Zwiększ spalanie'
      },
      fuelPrice: {
        label: 'Cena paliwa',
        unit: 'zł za litr',
        value: '6',
        step: '0.05',
        usStep: '0.2',
        decrease: 'Zmniejsz cenę paliwa',
        increase: 'Zwiększ cenę paliwa'
      },
      people: {
        label: 'Osoby dzielące koszt',
        unit: 'osób',
        decrease: 'Zmniejsz liczbę osób',
        increase: 'Zwiększ liczbę osób'
      },
      tripsPerWeek: {
        label: 'Przejazdy w tygodniu',
        unit: 'do sum miesięcznych i rocznych',
        decrease: 'Zmniejsz liczbę przejazdów w tygodniu',
        increase: 'Zwiększ liczbę przejazdów w tygodniu'
      },
      resultsTitle: 'Koszt paliwa',
      perPerson: 'Na osobę',
      perMonth: 'Miesięcznie',
      perYear: 'Rocznie',
      runtime: {
        direction: { one: 'W jedną stronę', round: 'Tam i z powrotem' },
        unit: {
          metric: {
            distance: 'km w jedną stronę',
            consumption: 'l/100 km',
            price: 'zł za litr',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'mil w jedną stronę',
            consumption: 'mpg',
            price: 'zł za galon',
            perDistance: 'milę',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Wpisz odległość, spalanie i cenę paliwa, aby zobaczyć koszt.',
          result: 'Na przejazd zużyjesz {fuel} paliwa – to około {price} za {distance}.'
        }
      },
      about: {
        title: 'Jak liczony jest koszt przejazdu',
        paragraphs: [
          'Zużycie paliwa to odległość × spalanie ÷ 100. Jeśli do pracy masz 25 km w jedną stronę (50 km dziennie), a auto spala 6,5 l/100 km, zużyjesz 3,25 litra paliwa. Po pomnożeniu przez cenę litra otrzymujesz koszt przejazdu, a po podzieleniu go przez liczbę osób – kwotę na osobę.',
          'W milach i galonach zużycie paliwa oblicza się, dzieląc odległość przez liczbę mil, które auto przejeżdża na jednym galonie (mpg). Zmiana jednostek przelicza wpisane wartości, więc możesz porównywać dane z obu systemów.',
          'Sumy miesięczne i roczne wynikają z liczby przejazdów w tygodniu – typowy dojazd do pracy to 5 przejazdów tam i z powrotem tygodniowo. Przy aucie na LPG wpisz spalanie i cenę autogazu, a przy elektrycznym – zużycie w kWh/100 km i cenę za kWh.'
        ]
      },
      faq: [
        {
          q: 'Jak obliczyć koszt paliwa na trasę?',
          a: 'Pomnóż odległość przez spalanie i cenę paliwa, a wynik podziel przez 100. Trasa 200 km autem, które spala 6 l/100 km, przy cenie benzyny Pb95 6 zł za litr: 200 × 6 ÷ 100 × 6 zł = 72 zł.'
        },
        {
          q: 'Jak podzielić koszt paliwa między pasażerów?',
          a: 'Wpisz liczbę osób, które dzielą koszt. Kalkulator podzieli koszt przejazdu równo między wszystkich, łącznie z kierowcą.'
        },
        {
          q: 'Czy kalkulator uwzględnia zużycie auta, parkowanie i opłaty za autostrady?',
          a: 'Nie, liczy tylko paliwo. Zużycie auta, ubezpieczenie, parkowanie i opłaty za autostrady dochodzą do tego, więc pełny koszt jazdy jest wyższy.'
        }
      ]
    }
  }
};
