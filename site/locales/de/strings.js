// German texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in euros in
// Germany.

module.exports = {
  meta: {
    name: 'Deutsch',
    locale: 'de-DE',
    currency: 'EUR',
    ogLocale: 'de_DE'
  },

  money: {
    symbol: '€',
    zero: '0,00 €',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Zum Inhalt springen',
    home: 'Startseite',
    toggleTheme: 'Design umschalten',
    themeToLight: 'Zum hellen Design wechseln',
    themeToDark: 'Zum dunklen Design wechseln',
    language: 'Sprache',
    allTools: 'Alle Rechner',
    share: 'Teilen',
    settings: 'Einstellungen',
    quickPicks: 'Schnellauswahl',
    faqTitle: 'Häufig gestellte Fragen',
    relatedTools: 'Weitere Rechner',
    imageAlt: 'costsimulators.com – kostenlose Kostenrechner für Geldfragen im Alltag',
    invest: {
      label: 'Wenn du das Geld stattdessen anlegst'
    },
    receipt: {
      open: 'Kassenbon drucken',
      title: 'Dein Kassenbon',
      close: 'Schließen',
      skip: 'Zur Summe',
      total: 'Summe',
      length: 'Länge des Bons',
      thanks: 'Danke für 10 Jahre Treue!',
      image: 'Als Bild teilen'
    }
  },

  footer: {
    privacy: 'Läuft komplett in deinem Browser. Keine Cookies, kein Tracking.',
    about: 'Über uns',
    contact: 'Kontakt',
    privacyPolicy: 'Datenschutz',
    terms: 'Nutzungsbedingungen'
  },

  runtime: {
    share: {
      linkCopied: 'Link kopiert',
      copyFailed: 'Kopieren fehlgeschlagen',
      copied: 'Kopiert!',
      calculatedWith: 'Berechnet mit costsimulators.com'
    },
    workTime: {
      minutes: '{m} Min.',
      hours: '{h} Std.',
      hoursMinutes: '{h} Std. {m} Min.'
    },
    invest: {
      note: '{monthly} pro Monat über 10 Jahre bei {rate} Rendite im Jahr: {paid} eingezahlt und {gain} an Erträgen.'
    },
    receipt: {
      subtotal: 'Zwischensumme, Jahr {year}',
      year: 'Jahr {year}',
      unit: 'meter',
      saved: 'Bild gespeichert'
    }
  },

  home: {
    title: 'Kostenrechner für den Alltag – kostenlos und privat',
    description: 'Kostenlose, private Rechner, die zeigen, was Dinge wirklich kosten: Meetings, Arbeitszeit, Gewohnheiten, Abos, Strom, Sprit und Kosten pro Nutzung. Ohne Anmeldung, direkt im Browser.',
    eyebrow: 'Privat · Kostenlos · Sofort',
    heading: 'Kleine Rechner für alltägliche <span class="accent-text">Geld</span>fragen.',
    lead: 'Schnelle Rechner, die zeigen, was Dinge wirklich kosten. Ohne Anmeldung, ohne Tracking – alles läuft direkt in deinem Browser.',
    toolsTitle: 'Rechner',
    toolCount: '{count} Rechner',
    suggestTitle: 'Hast du eine Idee?',
    suggestText: 'Schlag auf GitHub einen neuen Rechner vor.',
    whyTitle: 'Kleine Kosten summieren sich',
    whyText1: 'Ein einzelnes Meeting, ein Kaffee auf dem Weg zur Arbeit oder noch ein Streamingdienst fühlen sich für sich genommen selten teuer an. Rechnet man sie über einen Monat, ein Jahr oder ein Jahrzehnt zusammen, sehen die Zahlen ganz anders aus.',
    whyText2: 'Jeder Rechner macht genau eine Sache, fragt nur die nötigen Zahlen ab und zeigt das Ergebnis sofort. Alles wird in deinem Browser berechnet, deine Zahlen bleiben also auf deinem Gerät.',
    aboutLink: 'Mehr über costsimulators.com',
    faq: [
      {
        q: 'Ist costsimulators.com kostenlos?',
        a: 'Ja. Alle Rechner sind komplett kostenlos – ohne Anmeldung, ohne Bezahlschranke und ohne Werbung. Du kannst sie auch bei der Arbeit nutzen.'
      },
      {
        q: 'Werden meine Zahlen gespeichert oder irgendwohin gesendet?',
        a: 'Nein. Alles, was du eingibst, wird in deinem Browser berechnet und nie an einen Server gesendet. Die Website setzt keine Cookies und verwendet keine Analysetools.'
      },
      {
        q: 'Kann ich eine Berechnung teilen?',
        a: 'Ja. Deine Einstellungen stehen in der Adresse der Seite. Mit „Teilen“ kopierst du den Link, und wer ihn öffnet, sieht dieselbe Berechnung.'
      }
    ]
  },

  notFound: {
    title: 'Seite nicht gefunden',
    description: 'Die gesuchte Seite existiert nicht.',
    heading: 'Diese Seite gibt es nicht.',
    lead: 'Vielleicht hat sich in der Adresse ein Tippfehler eingeschlichen, oder die Seite ist umgezogen. Alle Rechner findest du auf der Startseite.'
  },

  documents: {
    about: {
      name: 'Über uns',
      title: 'Über uns – kostenlose, private Kostenrechner',
      description: 'Wer hinter costsimulators.com steckt und wie die Rechner funktionieren. Kostenlose, private Kostenrechner für Meetings, Arbeitszeit, Gewohnheiten, Anschaffungen, Abos, Strom und Fahrten.'
    },
    privacy: {
      name: 'Datenschutzerklärung',
      title: 'Datenschutzerklärung',
      description: 'Wie costsimulators.com mit deinen Daten umgeht: Die Berechnungen laufen in deinem Browser, ohne Tracking, ohne Analysetools und ohne Benutzerkonten.'
    },
    terms: {
      name: 'Nutzungsbedingungen',
      title: 'Nutzungsbedingungen',
      description: 'Nutzungsbedingungen von costsimulators.com: kostenlos für private und gewerbliche Zwecke, ohne Gewähr, mit offenem Quellcode unter der MIT-Lizenz.'
    }
  },

  tools: {
    meetings: {
      name: 'Meetingkosten',
      heading: 'Meetingkosten-Rechner',
      title: 'Meetingkosten-Rechner – Besprechungskosten live berechnen',
      description: 'Kostenloser Meetingkosten-Rechner mit Live-Timer: Stundensatz und Teilnehmerzahl eingeben und sehen, was die Besprechung kostet – Sekunde für Sekunde.',
      card: 'Sieh live zu, wie die Kosten eines Meetings steigen, während ihr redet.',
      tag: 'Live-Timer',
      lead: 'Stell Stundensatz und Teilnehmerzahl ein, drück auf Start und verfolge live, was das Meeting kostet.',
      pulseEvery: '1',
      rate: {
        label: 'Stundensatz',
        unit: '€ pro Person',
        step: '5',
        value: '55',
        decrease: 'Stundensatz verringern',
        increase: 'Stundensatz erhöhen'
      },
      persons: {
        label: 'Teilnehmer',
        unit: 'Personen',
        decrease: 'Weniger Teilnehmer',
        increase: 'Mehr Teilnehmer'
      },
      perMinute: 'Pro Minute',
      perHour: 'Pro Stunde',
      note: 'Du kannst die Werte ändern, während der Timer läuft. Wer dazukommt oder geht, wird ab diesem Moment berücksichtigt.',
      total: 'Gesamtkosten',
      elapsed: 'Verstrichene Zeit',
      reset: 'Zurücksetzen',
      copyReport: 'Bericht kopieren',
      kbdHint: 'Starten und pausieren mit der <kbd>Leertaste</kbd>',
      runtime: {
        mode: { start: 'Start', pause: 'Pause', resume: 'Weiter' },
        status: { ready: 'Bereit', live: 'Läuft', paused: 'Pausiert' },
        announce: {
          invalid: 'Gib einen Stundensatz und die Teilnehmerzahl ein, um zu starten.',
          started: 'Timer gestartet.',
          paused: 'Pausiert bei {cost} nach {time}.',
          reset: 'Timer zurückgesetzt.'
        },
        report: {
          cost: 'Meetingkosten: {cost}',
          duration: 'Dauer: {time}',
          participants: 'Teilnehmer: {persons} × {rate}/h'
        }
      },
      about: {
        title: 'So werden die Meetingkosten berechnet',
        paragraphs: [
          'Der Rechner multipliziert die Zahl der Teilnehmer mit ihrem Stundensatz und der verstrichenen Zeit. Ein einstündiges Meeting mit 5 Personen zu je 55 € pro Stunde kostet 275 € – das sind rund 4,58 € pro Minute.',
          'Nimm als Stundensatz, was eine Arbeitsstunde den Arbeitgeber tatsächlich kostet, nicht nur den Lohn. Zum Bruttolohn kommen der Arbeitgeberanteil zur Sozialversicherung von rund 21 % und weitere Kosten wie bezahlter Urlaub, Lohnfortzahlung im Krankheitsfall und der Arbeitsplatz selbst. Wenn du nicht alle Stundensätze kennst, reicht ein Durchschnittswert für das Team völlig aus.',
          'Der Timer zählt auch in einem Hintergrund-Tab korrekt weiter, und die laufenden Kosten erscheinen im Titel des Browser-Tabs – so behältst du sie im Blick, auch wenn du deinen Bildschirm teilst. Ist das Meeting vorbei, pausiere den Timer und kopiere einen kurzen Bericht fürs Protokoll.'
        ]
      },
      faq: [
        {
          q: 'Wie berechne ich die Kosten einer Besprechung?',
          a: 'Multipliziere die Zahl der Teilnehmer mit ihrem durchschnittlichen Stundensatz und der Dauer der Besprechung in Stunden. Beispiel: 6 Personen × 50 € pro Stunde × 1,5 Stunden = 450 €. Dieser Rechner erledigt das live, während das Meeting läuft.'
        },
        {
          q: 'Welchen Stundensatz sollte ich verwenden?',
          a: 'Nimm die vollen Kosten einer Arbeitsstunde: den Bruttostundenlohn plus Arbeitgeberanteil zur Sozialversicherung und weitere Personalnebenkosten. Bei externen Beratern und Freelancern nimmst du ihren abgerechneten Stundensatz.'
        },
        {
          q: 'Kann ich die Teilnehmerzahl während des Meetings ändern?',
          a: 'Ja. Du kannst Teilnehmerzahl und Stundensatz jederzeit ändern. Die neuen Werte zählen ab diesem Moment, und die bereits aufgelaufenen Kosten bleiben unverändert.'
        },
        {
          q: 'Läuft der Timer weiter, wenn ich den Tab wechsle?',
          a: 'Ja. Der Timer richtet sich nach der Uhr, deshalb stimmt die Summe auch in einem Hintergrund-Tab. Solange der Timer läuft, bittet die Seite den Browser außerdem, den Bildschirm eingeschaltet zu lassen.'
        }
      ]
    },

    workhours: {
      name: 'Arbeitszeit',
      heading: 'Preis in Arbeitszeit umrechnen',
      title: 'Arbeitszeit-Rechner – wie lange muss ich dafür arbeiten?',
      description: 'Rechne jeden Preis in Arbeitsstunden, -tage und -wochen um. Gib deinen Stunden-, Monats- oder Jahresverdienst ein und sieh, was ein Kauf dich wirklich an Arbeitszeit kostet.',
      card: 'Rechne jeden Preis in die Stunden, Tage und Wochen um, die du dafür arbeiten musst.',
      tag: 'Arbeit',
      lead: 'Gib deinen Verdienst und einen Preis ein und sieh, wie lange du dafür arbeiten musst.',
      period: {
        label: 'Ich kenne meinen Verdienst',
        hour: 'Pro Stunde',
        month: 'Pro Monat',
        year: 'Pro Jahr'
      },
      pay: {
        label: 'Verdienst',
        unit: '€ pro Stunde',
        value: '16',
        step: '1',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Nimm deinen Nettoverdienst nach Steuern und Abgaben – das ergibt die ehrlichste Antwort.',
        decrease: 'Verdienst verringern',
        increase: 'Verdienst erhöhen'
      },
      hoursPerWeek: {
        label: 'Wochenstunden',
        unit: 'Stunden',
        value: '40',
        chip1: '38,5 Std.',
        chip2: '40 Std.',
        preset1: '38.5',
        preset2: '40',
        decrease: 'Wochenstunden verringern',
        increase: 'Wochenstunden erhöhen'
      },
      price: {
        label: 'Preis',
        unit: '€',
        value: '999',
        step: '10',
        decrease: 'Preis senken',
        increase: 'Preis erhöhen'
      },
      resultsTitle: 'Preis in Arbeitszeit',
      youNeedToWork: 'Dafür arbeitest du',
      workDays: 'Arbeitstage',
      workWeeks: 'Arbeitswochen',
      hourlyRate: 'Dein Stundenlohn',
      runtime: {
        unit: {
          hour: '€ pro Stunde',
          month: '€ pro Monat',
          year: '€ pro Jahr'
        },
        days: { one: '{n} Tag', other: '{n} Tage' },
        weeks: { one: '{n} Woche', other: '{n} Wochen' },
        note: {
          empty: 'Gib deinen Verdienst, deine Wochenstunden und einen Preis ein, um zu sehen, wie lange du dafür arbeiten musst.',
          result: 'Gerechnet mit {hours} Stunden pro Arbeitstag und {days} Arbeitstagen pro Woche.'
        }
      },
      about: {
        title: 'So wird die Arbeitszeit berechnet',
        paragraphs: [
          'Zuerst wird dein Verdienst in einen Stundenlohn umgerechnet. Ein Monatsverdienst wird mit 12 multipliziert und durch deine Arbeitsstunden im Jahr geteilt (Wochenstunden × 52), ein Jahresverdienst direkt durch diese Stunden. Danach wird der Preis durch deinen Stundenlohn geteilt.',
          'Bei den Arbeitstagen geht der Rechner von einer Fünftagewoche aus, 40 Stunden pro Woche bedeuten also 8-Stunden-Tage. Beispiel: Bei 16 € pro Stunde kostet dich ein Smartphone für 999 € gut 62 Arbeitsstunden – mehr als anderthalb Arbeitswochen.',
          'Am ehrlichsten wird die Antwort mit deinem Nettoverdienst nach Steuern und Sozialabgaben, denn das ist das Geld, das du tatsächlich ausgibst. Preise in Arbeitsstunden zu denken ist ein einfacher Weg, um zu entscheiden, ob sich etwas wirklich lohnt.'
        ]
      },
      faq: [
        {
          q: 'Wie viele Stunden muss ich für einen Kauf arbeiten?',
          a: 'Teile den Preis durch deinen Netto-Stundenlohn. Verdienst du nach Abzügen 16 € pro Stunde, kostet dich eine Anschaffung für 400 € genau 25 Arbeitsstunden.'
        },
        {
          q: 'Soll ich mit brutto oder netto rechnen?',
          a: 'Der Nettoverdienst nach Steuern und Abgaben liefert das realistischste Ergebnis, denn das ist das Geld, das dir tatsächlich zur Verfügung steht. Mit dem Bruttoverdienst wirkt alles billiger, als es ist.'
        },
        {
          q: 'Wie rechne ich ein Monatsgehalt in einen Stundenlohn um?',
          a: 'Multipliziere das Monatsgehalt mit 12 und teile es durch deine Arbeitsstunden im Jahr. Bei einer 40-Stunden-Woche sind das 2.080 Stunden, 2.800 € netto im Monat entsprechen also rund 16 € pro Stunde. Der Rechner erledigt das für dich, wenn du „Pro Monat“ wählst.'
        }
      ]
    },

    costperuse: {
      name: 'Kosten pro Nutzung',
      heading: 'Kosten pro Nutzung berechnen',
      title: 'Kosten pro Nutzung berechnen – lohnt sich der Kauf?',
      description: 'Rechne aus, was ein Kauf dich bei jeder Nutzung wirklich kostet: Preis minus Wiederverkaufswert, geteilt durch Häufigkeit und Dauer der Nutzung.',
      card: 'Verteile einen Preis auf jede Nutzung und sieh, ob sich der Kauf lohnt.',
      tag: 'Einkaufen',
      lead: 'Gib einen Preis ein, wie oft und wie lange du die Sache nutzen wirst, und sieh, was jede Nutzung wirklich kostet.',
      price: {
        label: 'Preis',
        unit: '€',
        value: '500',
        step: '10',
        decrease: 'Preis senken',
        increase: 'Preis erhöhen'
      },
      period: {
        label: 'Wie oft du es nutzt',
        week: 'Wöchentlich',
        month: 'Monatlich',
        year: 'Jährlich'
      },
      uses: {
        label: 'Nutzungen',
        unit: 'Mal pro Woche',
        decrease: 'Weniger Nutzungen',
        increase: 'Mehr Nutzungen'
      },
      years: {
        label: 'Nutzungsdauer',
        unit: 'Jahre',
        chip1: '1 Jahr',
        chip2: '3 Jahre',
        chip3: '5 Jahre',
        decrease: 'Nutzungsdauer verkürzen',
        increase: 'Nutzungsdauer verlängern'
      },
      resale: {
        label: 'Wiederverkaufswert',
        unit: '€, optional',
        hint: 'Was du beim Verkauf voraussichtlich noch bekommst. Lass 0 stehen, wenn du nichts erwartest.',
        decrease: 'Wiederverkaufswert senken',
        increase: 'Wiederverkaufswert erhöhen'
      },
      resultsTitle: 'Kosten pro Nutzung',
      perUse: 'Jede Nutzung kostet',
      totalUses: 'Nutzungen insgesamt',
      perMonth: 'Pro Monat',
      perYear: 'Pro Jahr',
      runtime: {
        unit: {
          week: 'Mal pro Woche',
          month: 'Mal pro Monat',
          year: 'Mal pro Jahr'
        },
        note: {
          empty: 'Gib den Preis ein, wie oft du die Sache nutzt und wie viele Jahre lang. Der Wiederverkaufswert muss unter dem Preis liegen.',
          result: 'Nutzt du es ein Jahr länger, sinken die Kosten pro Nutzung auf {next}.'
        }
      },
      about: {
        title: 'So werden die Kosten pro Nutzung berechnet',
        paragraphs: [
          'Die Kosten pro Nutzung sind der Preis minus das, was du beim Verkauf zurückbekommst, geteilt durch die Zahl der Nutzungen. Die Zahl der Nutzungen ist die Häufigkeit × die Wochen, Monate oder Jahre, in denen du die Sache nutzt. Ein Kauf für 500 €, den du 3 Jahre lang 3-mal pro Woche nutzt, kommt auf 468 Nutzungen und kostet 1,07 € pro Nutzung.',
          'Die Monats- und Jahreskosten verteilen denselben Betrag auf die Zeit, in der du die Sache besitzt. So lässt sich ein Kauf leicht mit Mieten, Leasing oder einem Abo vergleichen.',
          'Die Kosten pro Nutzung sind ein einfacher Weg, etwas Günstiges, das schnell verschleißt, mit etwas Teurem zu vergleichen, das lange hält. Ein Paar Schuhe für 60 €, das du 50-mal trägst, kostet 1,20 € pro Tragen; ein Paar für 200 €, das du 400-mal trägst, kostet 0,50 €.'
        ]
      },
      faq: [
        {
          q: 'Wie berechne ich die Kosten pro Nutzung?',
          a: 'Teile den Preis durch die Zahl der Nutzungen. Wenn du die Sache später verkaufst, zieh vorher den Wiederverkaufswert vom Preis ab. Eine Jacke für 120 €, die du 80-mal trägst, kostet 1,50 € pro Tragen.'
        },
        {
          q: 'Was sind gute Kosten pro Nutzung?',
          a: 'Das hängt davon ab, was die Alternative kostet. Vergleiche mit Mieten, Ausleihen oder Bezahlen pro Besuch: Kostet eine Tageskarte im Fitnessstudio 15 €, lohnt sich eine Mitgliedschaft für 35 € im Monat ab dem dritten Besuch im Monat.'
        },
        {
          q: 'Funktioniert das auch für Abos und Mitgliedschaften?',
          a: 'Ja. Gib den Jahrespreis als Preis ein, dazu deine Nutzungshäufigkeit und 1 Jahr. Bei einer Fitnessstudio-Mitgliedschaft für 35 € im Monat gibst du 420 € und deine Besuche pro Woche ein.'
        }
      ]
    },

    coffee: {
      name: 'Kaffeekosten',
      heading: 'Kaffeekosten-Rechner',
      title: 'Kaffeekosten-Rechner – was kostet dein Kaffee im Jahr?',
      description: 'Sieh, was dein täglicher Kaffee pro Monat und in 1, 5 und 10 Jahren kostet. Preis pro Tasse und Tassen pro Woche eingeben – kostenlos und privat.',
      card: 'Sieh, was dein täglicher Kaffee in einem, fünf und zehn Jahren ausmacht.',
      tag: 'Gewohnheit',
      lead: 'Gib ein, was eine Tasse kostet und wie oft du dir eine kaufst, und sieh, was über die Jahre zusammenkommt.',
      price: {
        label: 'Preis pro Tasse',
        unit: '€',
        step: '0.1',
        value: '3.5',
        decrease: 'Kaffeepreis senken',
        increase: 'Kaffeepreis erhöhen'
      },
      perWeek: {
        label: 'Tassen pro Woche',
        unit: 'Tassen',
        chip1: 'An Arbeitstagen',
        chip2: 'Jeden Tag',
        chip3: 'Zweimal täglich',
        decrease: 'Weniger Tassen pro Woche',
        increase: 'Mehr Tassen pro Woche'
      },
      resultsTitle: 'Das kommt zusammen',
      in10Years: 'In 10 Jahren',
      perMonth: 'Pro Monat',
      year1: '1 Jahr',
      year5: '5 Jahre',
      receiptTitle: 'Kaffee-Kassenbon',
      receiptCount: 'Tassen',
      runtime: {
        note: {
          empty: 'Gib einen Preis ein und wie viele Tassen du pro Woche trinkst, um die Summen zu sehen.',
          result: 'Das sind rund {cups} Tassen im Jahr zu je {price}.'
        },
        receiptItem: 'Kaffee'
      },
      about: {
        title: 'So werden die Kaffeekosten berechnet',
        paragraphs: [
          'Die Jahreskosten sind Preis pro Tasse × Tassen pro Woche × 52 Wochen. Die Monatskosten sind die Jahreskosten geteilt durch 12, und für 5 und 10 Jahre werden die Jahreskosten ohne Inflation oder Preiserhöhungen hochgerechnet.',
          'Ein Cappuccino für 3,50 € an jedem Arbeitstag macht rund 910 € im Jahr und 9.100 € in zehn Jahren. Falls dich die Zahl überrascht: Kaffee selbst zu Hause zubereiten oder einen eigenen Mehrwegbecher mitnehmen sind einfache Wege, um zu sparen.',
          'Der Rechner funktioniert für jeden kleinen, regelmäßigen Kauf: einen Energydrink, ein belegtes Brötchen zum Mittag oder eine Flasche Wasser. Gib einfach den Preis ein und wie viele du pro Woche kaufst.'
        ]
      },
      faq: [
        {
          q: 'Was kostet ein täglicher Kaffee im Jahr?',
          a: 'Eine Tasse am Tag, sieben Tage die Woche, sind 364 Tassen im Jahr. Bei 3 € pro Tasse sind das 1.092 € im Jahr und 10.920 € in zehn Jahren.'
        },
        {
          q: 'Ist Kaffee zu Hause günstiger?',
          a: 'Meistens sogar deutlich. Eine selbst gemachte Tasse kostet oft weit unter 50 Cent, im Café zahlst du dagegen mehrere Euro. Gib deine Kosten pro Tasse zu Hause ein und vergleiche.'
        },
        {
          q: 'Berücksichtigt der Rechner die Inflation?',
          a: 'Nein. Die Hochrechnungen gehen von gleichbleibenden Preisen aus und zeigen, was die Gewohnheit zu heutigen Preisen kostet. Steigen die Preise, sind die tatsächlichen Kosten auf lange Sicht höher.'
        },
        {
          q: 'Was wäre, wenn ich das Geld stattdessen anlegen würde?',
          a: 'Der Kasten „Wenn du das Geld stattdessen anlegst“ zeigt, was aus dem Geld würde, wenn du es jeden Monat anlegst, statt es auszugeben – bei einer Rendite von 4 % im Jahr mit monatlichem Zinseszins. Ein Kaffee für 3,50 € an jedem Arbeitstag sind 75,83 € im Monat; daraus werden in 10 Jahren rund 11.120 € – 9.100 € davon sind dein eigenes Geld, der Rest sind Erträge. Steuern, Gebühren und Inflation sind nicht berücksichtigt. Das ist ein Beispiel, keine Anlageberatung.'
        }
      ]
    },

    smoking: {
      name: 'Zigarettenkosten',
      heading: 'Raucherrechner',
      title: 'Raucherrechner – was kostet Rauchen im Jahr?',
      description: 'Finde heraus, was Rauchen pro Monat und in 1, 5 und 10 Jahren kostet – und wie viel du sparst, wenn du aufhörst. Packungspreis und Zigaretten pro Tag eingeben.',
      card: 'Sieh, wie viel Geld jeden Monat und über die Jahre in Rauch aufgeht.',
      tag: 'Gewohnheit',
      lead: 'Gib ein, was eine Packung kostet und wie viel du rauchst, und sieh, wie viel Geld über die Jahre in Rauch aufgeht.',
      packPrice: {
        label: 'Packungspreis',
        unit: '€',
        step: '0.1',
        value: '9.5',
        decrease: 'Packungspreis senken',
        increase: 'Packungspreis erhöhen'
      },
      perDay: {
        label: 'Zigaretten pro Tag',
        unit: 'Zigaretten',
        chip1: '5 am Tag',
        chip2: '10 am Tag',
        chip3: '20 am Tag',
        decrease: 'Weniger Zigaretten pro Tag',
        increase: 'Mehr Zigaretten pro Tag'
      },
      perPack: {
        label: 'Zigaretten pro Packung',
        unit: 'Packungsgröße',
        value: '20',
        decrease: 'Weniger Zigaretten pro Packung',
        increase: 'Mehr Zigaretten pro Packung'
      },
      resultsTitle: 'In Rauch aufgegangen',
      in10Years: 'In 10 Jahren',
      perMonth: 'Pro Monat',
      year1: '1 Jahr',
      year5: '5 Jahre',
      receiptTitle: 'Zigaretten-Kassenbon',
      receiptCount: 'Packungen',
      runtime: {
        receiptItem: 'Packung Zigaretten',
        note: {
          empty: 'Gib den Packungspreis ein, wie viele Zigaretten du am Tag rauchst und wie viele in einer Packung sind, um die Summen zu sehen.',
          result: 'Das sind rund {cigarettes} Zigaretten ({packs} Packungen) im Jahr zu je {price}.'
        }
      },
      about: {
        title: 'So werden die Kosten des Rauchens berechnet',
        paragraphs: [
          'Der Preis einer Zigarette ist der Packungspreis geteilt durch die Zahl der Zigaretten in der Packung. Er wird mit den gerauchten Zigaretten pro Tag und mit 365 Tagen multipliziert – das ergibt die Jahreskosten. Die Monatskosten sind ein Zwölftel davon, und die Summen für 5 und 10 Jahre beruhen auf heutigen Preisen.',
          'Eine halbe Packung am Tag bei 9,50 € pro Packung macht rund 1.730 € im Jahr und über 17.000 € in zehn Jahren. Die Summe zu sehen, kann ein starker Ansporn sein: Dasselbe Geld könnte in eine Reise, in Rücklagen oder in die Tilgung von Schulden fließen.',
          'Der Rechner zählt nur den Preis der Zigaretten. Gesundheitskosten, höhere Versicherungsbeiträge und Krankheitstage kommen noch hinzu. Wenn du Unterstützung beim Aufhören möchtest, helfen dir die kostenlose Rauchfrei-Telefonberatung unter 0800 8 31 31 31, die Website rauchfrei-info.de oder deine Hausarztpraxis.'
        ]
      },
      faq: [
        {
          q: 'Was kostet eine Packung am Tag im Jahr?',
          a: 'Eine Packung am Tag sind 365 Packungen im Jahr. Bei 9,50 € pro Packung sind das 3.467,50 € im Jahr und 34.675 € in zehn Jahren.'
        },
        {
          q: 'Wie viel Geld spare ich, wenn ich mit dem Rauchen aufhöre?',
          a: 'Alles, was dieser Rechner anzeigt. Gib ein, wie viel du heute rauchst: Die Monats- und Jahressummen sind genau das, was du durch das Aufhören sparst.'
        },
        {
          q: 'Funktioniert der Rechner auch für Drehtabak?',
          a: 'Ja. Gib den Preis eines Päckchens Tabak als Packungspreis ein, die Zahl der Zigaretten, die du daraus drehst, als Packungsgröße und dazu, wie viele du am Tag rauchst.'
        },
        {
          q: 'Was wäre, wenn ich das Geld stattdessen anlegen würde?',
          a: 'Der Kasten „Wenn du das Geld stattdessen anlegst“ zeigt, was aus dem Geld würde, wenn du es jeden Monat anlegst, statt es für Zigaretten auszugeben – bei einer Rendite von 4 % im Jahr mit monatlichem Zinseszins. Eine halbe Packung am Tag bei 9,50 € pro Packung sind rund 144 € im Monat; daraus werden in 10 Jahren rund 21.190 € – 17.337,50 € davon sind dein eigenes Geld, der Rest sind Erträge. Steuern, Gebühren und Inflation sind nicht berücksichtigt. Das ist ein Beispiel, keine Anlageberatung.'
        }
      ]
    },

    alcohol: {
      name: 'Alkoholkosten',
      heading: 'Alkoholkosten-Rechner',
      title: 'Alkoholkosten-Rechner – was kostet dich Alkohol im Jahr?',
      description: 'Sieh, was Bier, Wein und andere Getränke dich pro Monat und in 1, 5 und 10 Jahren kosten – und was aus demselben Geld würde, wenn du es anlegst.',
      card: 'Sieh, was deine wöchentlichen Getränke in einem, fünf und zehn Jahren ausmachen.',
      tag: 'Gewohnheit',
      lead: 'Gib ein, was ein Getränk kostet und wie viele du pro Woche trinkst, und sieh, was über die Jahre zusammenkommt.',
      price: {
        label: 'Preis pro Getränk',
        unit: '€',
        step: '0.1',
        value: '5',
        hint: 'Du trinkst zu Hause und unterwegs? Nimm einen Durchschnittspreis.',
        decrease: 'Getränkepreis senken',
        increase: 'Getränkepreis erhöhen'
      },
      perWeek: {
        label: 'Getränke pro Woche',
        unit: 'Getränke',
        chip1: '3 pro Woche',
        chip2: '7 pro Woche',
        chip3: '14 pro Woche',
        decrease: 'Weniger Getränke pro Woche',
        increase: 'Mehr Getränke pro Woche'
      },
      resultsTitle: 'Das kommt zusammen',
      in10Years: 'In 10 Jahren',
      perMonth: 'Pro Monat',
      year1: '1 Jahr',
      year5: '5 Jahre',
      receiptTitle: 'Deine Barrechnung',
      receiptCount: 'Getränke',
      runtime: {
        receiptItem: 'Getränk',
        note: {
          empty: 'Gib einen Preis ein und wie viele Getränke du pro Woche trinkst, um die Summen zu sehen.',
          result: 'Das sind rund {drinks} Getränke im Jahr zu je {price}.'
        }
      },
      about: {
        title: 'So werden die Kosten für Alkohol berechnet',
        paragraphs: [
          'Die Jahreskosten sind Preis pro Getränk × Getränke pro Woche × 52 Wochen. Die Monatskosten sind ein Zwölftel davon, und die Summen für 5 und 10 Jahre beruhen auf heutigen Preisen ohne Inflation.',
          'Sechs Bier pro Woche zu je 5 € machen 1.560 € im Jahr und 15.600 € in zehn Jahren. Wenn du sowohl in der Kneipe als auch zu Hause trinkst, nimm einen Durchschnittspreis oder rechne beides getrennt aus und zähle es zusammen.',
          'Der Kasten „Wenn du das Geld stattdessen anlegst“ zeigt, was aus demselben Geld würde, wenn du es jeden Monat anlegst – bei 4 % Rendite im Jahr über 10 Jahre. Der Rechner zählt nur, was die Getränke kosten; gesundheitliche Folgen kommen noch hinzu. Wenn du weniger trinken möchtest, helfen dir deine Hausarztpraxis oder eine Suchtberatungsstelle in deiner Nähe.'
        ]
      },
      faq: [
        {
          q: 'Wie viel gebe ich im Jahr für Alkohol aus?',
          a: 'Multipliziere den Preis eines Getränks mit der Zahl der Getränke pro Woche und mit 52. Sechs Getränke pro Woche zu je 5 € sind 1.560 € im Jahr.'
        },
        {
          q: 'Wie viel spare ich, wenn ich weniger trinke?',
          a: 'Gib die Zahl der Getränke ein, auf die du reduzieren möchtest, und vergleiche. Trinkst du statt 6 nur noch 3 Getränke pro Woche zu je 5 €, sparst du 780 € im Jahr und 7.800 € in zehn Jahren.'
        },
        {
          q: 'Was wäre, wenn ich das Geld stattdessen anlegen würde?',
          a: 'Der Kasten „Wenn du das Geld stattdessen anlegst“ zeigt, was du nach 10 Jahren hättest, wenn du das Geld jeden Monat anlegst, statt es auszugeben – bei einer Rendite von 4 % im Jahr mit monatlichem Zinseszins. Sechs Getränke zu je 5 € pro Woche sind 130 € im Monat; daraus werden rund 19.070 € – 15.600 € davon sind dein eigenes Geld, der Rest sind Erträge. Steuern, Gebühren und Inflation sind nicht berücksichtigt. Das ist ein Beispiel, keine Anlageberatung.'
        }
      ]
    },

    gambling: {
      name: 'Lotto & Wetten',
      heading: 'Lotto- und Wettkosten-Rechner',
      title: 'Lotto- und Wettkosten-Rechner – was kostet Glücksspiel?',
      description: 'Sieh, was Lottoscheine und Wetten pro Monat und in 10 Jahren kosten, wie viel du im Schnitt verlierst und was aus den Einsätzen würde, wenn du sie anlegst.',
      card: 'Sieh, was Lottoscheine und Wetten ausmachen und wie viel du im Schnitt verlierst.',
      tag: 'Gewohnheit',
      lead: 'Gib ein, wie viel du einsetzt und wie oft du spielst, und sieh, was Lotto und Wetten über die Jahre kosten – und wie viel davon im Schnitt als Gewinn zurückfließt.',
      stake: {
        label: 'Einsatz pro Spiel',
        unit: '€',
        step: '1',
        value: '10',
        decrease: 'Einsatz senken',
        increase: 'Einsatz erhöhen'
      },
      perWeek: {
        label: 'Spiele pro Woche',
        unit: 'Spiele',
        chip1: 'Einmal pro Woche',
        chip2: 'Zweimal pro Woche',
        chip3: 'Jeden Tag',
        decrease: 'Weniger Spiele pro Woche',
        increase: 'Mehr Spiele pro Woche'
      },
      payout: {
        label: 'Ausschüttungsquote',
        unit: '% ausgezahlt',
        chip1: 'Lotto',
        chip2: 'Sportwetten',
        chip3: 'Casino',
        hint: 'Der Anteil aller Einsätze, der als Gewinne wieder ausgezahlt wird. Lotterien zahlen meist etwa die Hälfte aus, Sportwetten und Casinospiele 90–97 %.',
        decrease: 'Ausschüttungsquote senken',
        increase: 'Ausschüttungsquote erhöhen'
      },
      resultsTitle: 'Das kostet es dich',
      in10Years: 'Eingesetzt in 10 Jahren',
      perMonth: 'Pro Monat',
      perYear: 'Pro Jahr',
      lossPerYear: 'Durchschnittsverlust pro Jahr',
      receiptTitle: 'Lotto- und Wettbon',
      receiptCount: 'Spiele',
      receiptBack: 'Im Schnitt als Gewinn zurück',
      receiptLoss: 'Im Schnitt verloren',
      runtime: {
        receiptItem: 'Spiel',
        note: {
          empty: 'Gib deinen Einsatz, die Zahl der Spiele pro Woche und die Ausschüttungsquote (0–100) ein.',
          result: 'Im Schnitt fließen rund {back} im Jahr als Gewinne zurück – du verlierst also rund {loss} im Jahr und {loss10} in 10 Jahren.'
        }
      },
      about: {
        title: 'So werden die Kosten für Lotto und Wetten berechnet',
        paragraphs: [
          'Die Jahreskosten sind Einsatz × Spiele pro Woche × 52 Wochen. Die Monatskosten sind ein Zwölftel davon, und die Summe für 10 Jahre beruht auf heutigen Einsätzen.',
          'Die Ausschüttungsquote ist der Anteil aller Einsätze, der als Gewinne wieder ausgezahlt wird. Bei einer Ausschüttungsquote von 50 % ergeben 10 € Einsatz zweimal pro Woche 1.040 € im Jahr, von denen im Schnitt rund 520 € als Gewinne zurückfließen – ein durchschnittlicher Verlust von 520 € im Jahr. Im Einzelfall kann man groß gewinnen oder alles verlieren, aber über viele Spiele hinweg nähert sich das Ergebnis dem Durchschnitt an.',
          'Der Kasten „Wenn du das Geld stattdessen anlegst“ zeigt, was aus den Einsätzen würde, wenn du sie stattdessen jeden Monat anlegst – bei 4 % Rendite im Jahr über 10 Jahre. Wenn es dir schwerfällt, das Spielen im Griff zu behalten, helfen dir deine Hausarztpraxis oder eine Suchtberatungsstelle in deiner Nähe.'
        ]
      },
      faq: [
        {
          q: 'Wie viel gebe ich im Jahr für Lotto aus?',
          a: 'Multipliziere den Einsatz mit der Zahl der Spiele pro Woche und mit 52. Wer zweimal pro Woche 10 € einsetzt, gibt dafür 1.040 € im Jahr und 10.400 € in zehn Jahren aus.'
        },
        {
          q: 'Was ist eine Ausschüttungsquote?',
          a: 'Das ist der Anteil aller Einsätze, der als Gewinne an die Spielerinnen und Spieler zurückgezahlt wird. Lotterien zahlen meist etwa die Hälfte der Einsätze aus, Sportwetten und Casinospiele dagegen 90–97 %. Der Rest bleibt beim Anbieter – und genau das verliert man beim Spielen im Schnitt.'
        },
        {
          q: 'Was wäre, wenn ich das Geld stattdessen anlegen würde?',
          a: 'Der Kasten „Wenn du das Geld stattdessen anlegst“ zeigt, was du nach 10 Jahren hättest, wenn du deine Einsätze stattdessen jeden Monat anlegst – bei einer Rendite von 4 % im Jahr mit monatlichem Zinseszins. 10 € Einsatz zweimal pro Woche sind rund 86,67 € im Monat; daraus werden rund 12.710 € – 10.400 € davon sind dein eigenes Geld, der Rest sind Erträge. Steuern, Gebühren und Inflation sind nicht berücksichtigt. Das ist ein Beispiel, keine Anlageberatung.'
        }
      ]
    },

    subscriptions: {
      name: 'Abos',
      heading: 'Abo-Rechner',
      title: 'Abo-Rechner – monatliche und jährliche Abokosten',
      description: 'Rechne Streaming, Fitnessstudio, Handyvertrag und alle anderen Abos zusammen. Sieh deine Kosten pro Monat, pro Jahr und in 10 Jahren – und welches Abo am meisten kostet.',
      card: 'Rechne Streaming, Fitnessstudio und alle anderen laufenden Zahlungen an einem Ort zusammen.',
      tag: 'Budget',
      lead: 'Liste alles auf, wofür du regelmäßig zahlst, und sieh, was insgesamt zusammenkommt. Monatliche, jährliche und wöchentliche Abrechnung werden unterstützt.',
      listTitle: 'Deine Abos',
      empty: 'Noch keine Abos. Füge unten eines hinzu oder nutze die Schnellauswahl.',
      add: 'Abo hinzufügen',
      quickAdd: 'Schnell hinzufügen',
      quick: {
        1: { name: 'Video-Streaming', price: '13.99' },
        2: { name: 'Musik-Streaming', price: '11.99' },
        3: { name: 'Fitnessstudio', price: '34.90' },
        4: { name: 'Cloud-Speicher', price: '2.99' },
        5: { name: 'Handyvertrag', price: '19.99' },
        6: { name: 'Zeitungs-Abo', price: '12.99' }
      },
      note: 'Deine Liste steht in der Adresse der Seite – du kannst sie also als Lesezeichen speichern oder teilen. Sie wird nie irgendwohin gesendet.',
      row: {
        name: 'Name',
        nameLabel: 'Name des Abos',
        priceLabel: 'Preis in Euro',
        cycleLabel: 'Abrechnungszeitraum',
        monthly: '/ Monat',
        yearly: '/ Jahr',
        weekly: '/ Woche'
      },
      resultsTitle: 'Abos gesamt',
      perYear: 'Pro Jahr',
      perMonth: 'Pro Monat',
      perDay: 'Pro Tag',
      in10Years: 'In 10 Jahren',
      breakdownLabel: 'Jahreskosten pro Abo',
      copySummary: 'Übersicht kopieren',
      receiptTitle: 'Abo-Kassenbon',
      receiptCount: 'Abbuchungen',
      runtime: {
        receiptItem: 'Abbuchung',
        untitled: 'Ohne Namen',
        remove: '{name} entfernen',
        removeUnnamed: 'Abo entfernen',
        breakdown: '{cost} / Jahr · {percent} %',
        cycle: { monthly: 'Monat', yearly: 'Jahr', weekly: 'Woche' },
        note: {
          empty: 'Füge ein Abo mit Preis hinzu, um die Summen zu sehen.',
          single: '{name} kostet dich {cost} im Jahr.',
          biggest: 'Dein größter Posten ist {name} mit {cost} im Jahr – {percent} % der Gesamtkosten.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Gesamt: {month} pro Monat, {year} pro Jahr'
        }
      },
      about: {
        title: 'So werden die Abokosten berechnet',
        paragraphs: [
          'Jedes Abo wird in Jahreskosten umgerechnet: Monatspreise werden mit 12 multipliziert, Wochenpreise mit 52, und Jahrespreise bleiben, wie sie sind. Die Jahressumme wird dann für die Monatskosten durch 12 und für die Tageskosten durch 365 geteilt.',
          'Die Aufschlüsselung sortiert deine Abos vom teuersten zum günstigsten und zeigt den Anteil jedes Abos an der Gesamtsumme. So siehst du schnell, was du kündigen oder in einen günstigeren Tarif wechseln könntest.',
          'Deine Liste wird in der Adresse der Seite gespeichert, nie auf einem Server. Speichere die Seite als Lesezeichen, um später zu deiner Liste zurückzukehren, oder teile den Link, um gemeinsame Abos mit deiner Familie durchzugehen.'
        ]
      },
      faq: [
        {
          q: 'Wie finde ich alle meine Abos?',
          a: 'Geh die Kontoauszüge und Kreditkartenabrechnungen der letzten Monate durch und achte auf regelmäßige Abbuchungen. Prüf außerdem die Abo-Einstellungen im App Store, bei Google Play und bei PayPal.'
        },
        {
          q: 'Ist ein Jahresabo günstiger als ein Monatsabo?',
          a: 'Oft um 15–20 %, aber nur, wenn du den Dienst ohnehin das ganze Jahr nutzen würdest. Trag beide Varianten in die Liste ein und vergleiche ihre Jahreskosten.'
        },
        {
          q: 'Wird meine Liste gespeichert?',
          a: 'Deine Liste steht nur in der Adresse der Seite. Speichere den Link als Lesezeichen oder teile ihn, um sie zu behalten; auf einem Server oder in Cookies wird nichts gespeichert.'
        },
        {
          q: 'Was wäre, wenn ich das Geld stattdessen anlegen würde?',
          a: 'Der Kasten „Wenn du das Geld stattdessen anlegst“ zeigt, was aus dem Geld für deine Abos würde, wenn du denselben Betrag stattdessen jeden Monat anlegst – bei einer Rendite von 4 % im Jahr mit monatlichem Zinseszins. 50 € im Monat werden in 10 Jahren zu rund 7.335 € – 6.000 € davon sind dein eigenes Geld, der Rest sind Erträge. Steuern, Gebühren und Inflation sind nicht berücksichtigt. Das ist ein Beispiel, keine Anlageberatung.'
        }
      ]
    },

    electricity: {
      name: 'Stromkosten',
      heading: 'Stromkostenrechner',
      title: 'Stromkostenrechner – Stromverbrauch von Geräten berechnen',
      description: 'Berechne, was ein Gerät pro Tag, Monat und Jahr an Strom kostet – aus Leistung in Watt, Nutzungsdauer und Strompreis. Kostenloser Rechner für kWh und Stromkosten.',
      card: 'Sieh, was es pro Tag, Monat und Jahr kostet, ein Gerät eingeschaltet zu lassen.',
      tag: 'Zuhause',
      lead: 'Gib die Leistung eines Geräts ein, wie lange es läuft und was du für Strom zahlst, und sieh, was sein Betrieb wirklich kostet.',
      power: {
        label: 'Leistung',
        unit: 'Watt',
        chip1: 'LED-Lampe 9 W',
        chip2: 'Laptop 60 W',
        chip3: 'Fernseher 100 W',
        chip4: 'Gaming-PC 400 W',
        chip5: 'Heizlüfter 1500 W',
        decrease: 'Leistung verringern',
        increase: 'Leistung erhöhen'
      },
      hours: {
        label: 'Stunden pro Tag',
        unit: 'Stunden',
        decrease: 'Weniger Stunden pro Tag',
        increase: 'Mehr Stunden pro Tag'
      },
      days: {
        label: 'Tage pro Woche',
        unit: 'Tage',
        decrease: 'Weniger Tage pro Woche',
        increase: 'Mehr Tage pro Woche'
      },
      kwhPrice: {
        label: 'Strompreis',
        unit: 'ct/kWh',
        value: '38',
        step: '1',
        divisor: '100',
        hint: 'Nimm den Arbeitspreis von deiner Stromrechnung (inklusive Netzentgelt und Steuern), dann wird das Ergebnis am genauesten.',
        decrease: 'Strompreis senken',
        increase: 'Strompreis erhöhen'
      },
      resultsTitle: 'Stromkosten',
      perYear: 'Pro Jahr',
      perDayOfUse: 'Pro Nutzungstag',
      perMonth: 'Pro Monat',
      energyPerYear: 'Verbrauch pro Jahr',
      runtime: {
        note: {
          empty: 'Gib die Leistung, die Stunden pro Tag (bis 24), die Tage pro Woche (bis 7) und deinen Strompreis ein.',
          result: 'Das Gerät verbraucht an jedem Nutzungstag rund {day}, im Jahr etwa {year}.'
        }
      },
      about: {
        title: 'So werden die Stromkosten berechnet',
        paragraphs: [
          'Der Verbrauch in Kilowattstunden (kWh) ist die Leistung in Watt × Nutzungsdauer in Stunden ÷ 1.000. Ein Fernseher mit 100 W, der 4 Stunden läuft, verbraucht 0,4 kWh am Tag. Multipliziert mit deinem Strompreis pro kWh ergibt das die Kosten pro Nutzungstag – bei 38 ct/kWh rund 15 Cent.',
          'Die Jahreskosten berücksichtigen, an wie vielen Tagen pro Woche das Gerät läuft, verteilt auf die 365 Tage des Jahres. Die Monatskosten sind ein Zwölftel der Jahreskosten.',
          'Die Leistung findest du auf dem Typenschild des Geräts oder in der Bedienungsanleitung. Viele Geräte brauchen die meiste Zeit weniger als ihre Maximalleistung, das Ergebnis ist also eine Obergrenze. Am genauesten wird es, wenn du nicht nur den reinen Energiepreis nimmst, sondern auch Netzentgelte, Steuern und Abgaben einrechnest.'
        ]
      },
      faq: [
        {
          q: 'Wie berechne ich die Stromkosten eines Geräts?',
          a: 'Multipliziere die Leistung in Kilowatt mit der Nutzungsdauer und dem Preis pro kWh. Ein Heizlüfter mit 1.500 W, der 3 Stunden läuft, kostet 1,5 kW × 3 h × 0,38 € = 1,71 € am Tag.'
        },
        {
          q: 'Wie viele kWh verbraucht ein Gerät?',
          a: 'Teile die Leistung in Watt durch 1.000 und multipliziere mit den Betriebsstunden. Ein Laptop mit 60 W, der 8 Stunden am Tag läuft, verbraucht 0,48 kWh am Tag – rund 175 kWh im Jahr, wenn du ihn täglich nutzt.'
        },
        {
          q: 'Welchen Strompreis sollte ich verwenden?',
          a: 'Nimm den Gesamtpreis pro kWh von deiner Stromrechnung, also Energiepreis, Netzentgelte, Steuern und Abgaben. Einen guten Durchschnittswert bekommst du, wenn du den Rechnungsbetrag durch die verbrauchten kWh teilst.'
        },
        {
          q: 'Verbraucht Standby Strom?',
          a: 'Ja, viele Geräte ziehen im Standby ein paar Watt. Gib die Standby-Leistung und 24 Stunden am Tag ein, um zu sehen, was das übers Jahr kostet.'
        }
      ]
    },

    trip: {
      name: 'Spritkosten',
      heading: 'Spritkostenrechner',
      title: 'Spritkostenrechner – Fahrtkosten und Pendelkosten berechnen',
      description: 'Berechne die Spritkosten einer Fahrt oder deines täglichen Arbeitswegs und teile sie unter allen Mitfahrenden auf. Mit Kilometern und Litern oder Meilen und Gallonen.',
      card: 'Berechne die Spritkosten einer Fahrt oder des Arbeitswegs und teile sie mit anderen.',
      tag: 'Unterwegs',
      lead: 'Berechne die Spritkosten einer einzelnen Fahrt oder deines täglichen Arbeitswegs und teile sie auf alle im Auto auf.',
      unit: {
        label: 'Einheiten',
        metric: 'Kilometer & Liter',
        us: 'Meilen & Gallonen'
      },
      distance: {
        label: 'Strecke',
        unit: 'km einfach',
        decrease: 'Strecke verkürzen',
        increase: 'Strecke verlängern'
      },
      direction: {
        label: 'Fahrt',
        one: 'Einfach',
        round: 'Hin und zurück'
      },
      consumption: {
        label: 'Verbrauch',
        unit: 'l/100 km',
        hint: 'Fährst du elektrisch? Gib kWh/100 km und den Strompreis pro kWh ein.',
        decrease: 'Verbrauch senken',
        increase: 'Verbrauch erhöhen'
      },
      fuelPrice: {
        label: 'Spritpreis',
        unit: '€ pro Liter',
        value: '1.7',
        step: '0.05',
        usStep: '0.1',
        decrease: 'Spritpreis senken',
        increase: 'Spritpreis erhöhen'
      },
      people: {
        label: 'Personen, die sich die Kosten teilen',
        unit: 'Personen',
        decrease: 'Weniger Personen',
        increase: 'Mehr Personen'
      },
      tripsPerWeek: {
        label: 'Fahrten pro Woche',
        unit: 'für Monats- und Jahressummen',
        decrease: 'Weniger Fahrten pro Woche',
        increase: 'Mehr Fahrten pro Woche'
      },
      resultsTitle: 'Spritkosten',
      perPerson: 'Pro Person',
      perMonth: 'Pro Monat',
      perYear: 'Pro Jahr',
      runtime: {
        direction: { one: 'Einfache Fahrt', round: 'Hin und zurück' },
        unit: {
          metric: {
            distance: 'km einfach',
            consumption: 'l/100 km',
            price: '€ pro Liter',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'Meilen einfach',
            consumption: 'mpg',
            price: '€ pro Gallone',
            perDistance: 'Meile',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Gib Strecke, Verbrauch und Spritpreis ein, um die Kosten zu sehen.',
          result: 'Pro Fahrt werden {fuel} Kraftstoff verbraucht, das sind rund {price} pro {distance}.'
        }
      },
      about: {
        title: 'So werden die Fahrtkosten berechnet',
        paragraphs: [
          'Der Kraftstoffverbrauch ist Strecke × Verbrauch ÷ 100. Bei einem Arbeitsweg von 25 km pro Richtung (50 km am Tag) und einem Verbrauch von 6,5 l/100 km sind das 3,25 Liter. Mit dem Literpreis multipliziert ergibt das die Kosten der Fahrt, bei 1,70 € pro Liter also gut 5,50 €. Geteilt durch die Zahl der Personen erhältst du den Anteil pro Kopf.',
          'Bei Meilen und Gallonen wird die Strecke durch den Verbrauch in Meilen pro Gallone (mpg) geteilt. Beim Wechsel der Einheiten werden deine eingegebenen Werte umgerechnet, sodass du Angaben aus beiden Systemen vergleichen kannst.',
          'Die Monats- und Jahressummen beruhen auf den Fahrten pro Woche – 5 Hin- und Rückfahrten pro Woche sind ein typischer Arbeitsweg. Für ein Elektroauto gibst du stattdessen den Verbrauch in kWh/100 km und den Strompreis pro kWh ein.'
        ]
      },
      faq: [
        {
          q: 'Wie berechne ich die Spritkosten einer Fahrt?',
          a: 'Multipliziere die Strecke mit dem Verbrauch, teile durch 100 und multipliziere mit dem Spritpreis. Für 200 km mit einem Auto, das 6 l/100 km braucht, bei 1,70 € pro Liter Super E10: 200 × 6 ÷ 100 × 1,70 € = 20,40 €.'
        },
        {
          q: 'Wie teile ich die Spritkosten unter Mitfahrern auf?',
          a: 'Gib die Zahl der Personen ein, die sich die Kosten teilen. Der Rechner teilt die Fahrtkosten gleichmäßig auf alle auf, Fahrerin oder Fahrer eingeschlossen.'
        },
        {
          q: 'Sind Verschleiß, Parken oder Maut enthalten?',
          a: 'Nein, der Rechner zählt nur den Kraftstoff. Verschleiß, Versicherung, Parkgebühren und Maut kommen noch hinzu, die tatsächlichen Kosten des Autofahrens sind also höher.'
        }
      ]
    }
  }
};
