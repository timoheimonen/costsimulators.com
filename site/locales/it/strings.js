// Italian texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in euros.

module.exports = {
  meta: {
    name: 'Italiano',
    locale: 'it-IT',
    currency: 'EUR',
    ogLocale: 'it_IT'
  },

  money: {
    symbol: '€',
    zero: '0,00 €',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Vai al contenuto',
    home: 'Home',
    toggleTheme: 'Cambia tema',
    themeToLight: 'Passa al tema chiaro',
    themeToDark: 'Passa al tema scuro',
    language: 'Lingua',
    allTools: 'Tutti gli strumenti',
    share: 'Condividi',
    settings: 'Impostazioni',
    quickPicks: 'Scelte rapide',
    faqTitle: 'Domande frequenti',
    relatedTools: 'Altri calcolatori',
    imageAlt: 'costsimulators.com – calcolatori gratuiti per fare i conti con le spese di tutti i giorni'
  },

  footer: {
    privacy: 'Funziona interamente nel tuo browser. Niente cookie, nessun tracciamento.',
    about: 'Informazioni',
    contact: 'Contatti',
    privacyPolicy: 'Privacy',
    terms: 'Termini'
  },

  runtime: {
    share: {
      linkCopied: 'Link copiato',
      copyFailed: 'Copia non riuscita',
      copied: 'Copiato!',
      calculatedWith: 'Calcolato con costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    }
  },

  home: {
    title: 'Calcolatori di costi gratuiti per la vita di tutti i giorni | costsimulators.com',
    description: 'Calcolatori gratuiti e rispettosi della privacy che mostrano quanto costano davvero riunioni, ore di lavoro, caffè, fumo, abbonamenti, elettricità e benzina. Senza registrazione.',
    eyebrow: 'Gratis · Privato · Immediato',
    heading: 'Piccoli strumenti per fare i <span class="accent-text">conti</span> di tutti i giorni.',
    lead: 'Calcolatori rapidi che mostrano quanto costano davvero le cose. Nessuna registrazione, nessun tracciamento: tutto funziona direttamente nel tuo browser.',
    toolsTitle: 'Strumenti',
    toolCount: '{count} strumenti',
    suggestTitle: 'Hai un’idea?',
    suggestText: 'Proponi un nuovo strumento su GitHub.',
    whyTitle: 'Le piccole spese si accumulano',
    whyText1: 'Una riunione, un caffè al bar prima del lavoro o un servizio di streaming in più raramente sembrano costosi, presi da soli. Sommali su un mese, un anno o dieci anni, e i numeri cambiano parecchio.',
    whyText2: 'Ogni calcolatore fa una cosa sola, chiede solo i numeri che servono e mostra subito il risultato. Tutto viene calcolato nel tuo browser, quindi i tuoi dati restano sul tuo dispositivo.',
    aboutLink: 'Scopri di più su costsimulators.com',
    faq: [
      {
        q: 'costsimulators.com è gratuito?',
        a: 'Sì. Tutti i calcolatori sono completamente gratuiti: niente registrazione, niente contenuti a pagamento e niente pubblicità. Puoi usarli anche al lavoro.'
      },
      {
        q: 'I dati che inserisco vengono salvati o inviati da qualche parte?',
        a: 'No. Tutto ciò che inserisci viene calcolato nel tuo browser e non viene mai inviato a un server. Il sito non usa cookie né strumenti di analisi.'
      },
      {
        q: 'Posso condividere un calcolo?',
        a: 'Sì. Le impostazioni restano nell’indirizzo della pagina. Premi Condividi per copiare il link: chi lo apre vedrà lo stesso calcolo.'
      }
    ]
  },

  notFound: {
    title: 'Pagina non trovata | costsimulators.com',
    description: 'La pagina che cercavi non esiste.',
    heading: 'Questa pagina non esiste.',
    lead: 'L’indirizzo potrebbe contenere un errore di battitura, oppure la pagina è stata spostata. Tutti i calcolatori sono nella pagina iniziale.'
  },

  documents: {
    about: {
      name: 'Informazioni',
      title: 'Informazioni – calcolatori di costi gratuiti e rispettosi della privacy | costsimulators.com',
      description: 'Chi realizza costsimulators.com e come funzionano i calcolatori: strumenti gratuiti e rispettosi della privacy per riunioni, ore di lavoro, abitudini, abbonamenti, elettricità e viaggi.'
    },
    privacy: {
      name: 'Informativa sulla privacy',
      title: 'Informativa sulla privacy | costsimulators.com',
      description: 'Come costsimulators.com tratta i tuoi dati: i calcoli avvengono nel tuo browser, senza tracciamento, senza strumenti di analisi e senza account.'
    },
    terms: {
      name: 'Termini di utilizzo',
      title: 'Termini di utilizzo | costsimulators.com',
      description: 'Termini di utilizzo di costsimulators.com: uso libero per scopi personali e commerciali, servizio fornito «così com’è», codice open source con licenza MIT.'
    }
  },

  tools: {
    meetings: {
      name: 'Costo delle riunioni',
      heading: 'Calcolatore del costo delle riunioni',
      title: 'Calcolatore costo riunione – quanto costa una riunione in tempo reale | costsimulators.com',
      description: 'Calcolatore gratuito del costo di una riunione con timer in tempo reale. Inserisci il costo orario e il numero di partecipanti e guarda quanto costa la riunione, secondo per secondo.',
      card: 'Guarda il costo di una riunione salire in tempo reale mentre parlate.',
      tag: 'Timer',
      lead: 'Imposta il costo orario e il numero di partecipanti, premi Avvia e guarda quanto costa la riunione mentre si svolge.',
      pulseEvery: '1',
      rate: {
        label: 'Costo orario',
        unit: '€ a persona',
        step: '5',
        value: '40',
        decrease: 'Diminuisci il costo orario',
        increase: 'Aumenta il costo orario'
      },
      persons: {
        label: 'Partecipanti',
        unit: 'persone',
        decrease: 'Diminuisci il numero di partecipanti',
        increase: 'Aumenta il numero di partecipanti'
      },
      perMinute: 'Al minuto',
      perHour: 'All’ora',
      note: 'Puoi modificare i valori mentre il timer è in funzione. Chi entra o esce viene conteggiato da quel momento in poi.',
      total: 'Costo totale',
      elapsed: 'Tempo trascorso',
      reset: 'Azzera',
      copyReport: 'Copia il resoconto',
      kbdHint: 'Premi <kbd>Spazio</kbd> per avviare o mettere in pausa',
      runtime: {
        mode: { start: 'Avvia', pause: 'Pausa', resume: 'Riprendi' },
        status: { ready: 'Pronto', live: 'In corso', paused: 'In pausa' },
        announce: {
          invalid: 'Inserisci il costo orario e il numero di partecipanti per iniziare.',
          started: 'Timer avviato.',
          paused: 'In pausa a {cost} dopo {time}.',
          reset: 'Timer azzerato.'
        },
        report: {
          cost: 'Costo della riunione: {cost}',
          duration: 'Durata: {time}',
          participants: 'Partecipanti: {persons} × {rate}/h'
        }
      },
      about: {
        title: 'Come si calcola il costo di una riunione',
        paragraphs: [
          'Il calcolatore moltiplica il numero di partecipanti per il loro costo orario e per il tempo trascorso. Una riunione di un’ora con 5 persone a 40 € l’ora costa 200 €, cioè circa 3,33 € al minuto.',
          'Come costo orario usa quanto costa davvero un’ora di lavoro all’azienda, non solo lo stipendio. Alla retribuzione lorda si aggiungono i contributi previdenziali e assicurativi a carico del datore di lavoro, in genere intorno al 30%, oltre a TFR e tredicesima. Se non conosci il costo di ciascuno, basta una media del team.',
          'Il timer continua a contare correttamente anche in una scheda in background, e il costo accumulato compare nel titolo della scheda del browser, così puoi tenerlo d’occhio mentre condividi lo schermo. A fine riunione, metti in pausa il timer e copia un breve resoconto per il verbale.'
        ]
      },
      faq: [
        {
          q: 'Come si calcola il costo di una riunione?',
          a: 'Moltiplica il numero di partecipanti per il loro costo orario medio e per la durata della riunione in ore. Per esempio, 6 persone × 35 € l’ora × 1,5 ore = 315 €. Questo calcolatore fa il conto in tempo reale mentre la riunione è in corso.'
        },
        {
          q: 'Quale costo orario devo usare?',
          a: 'Usa il costo pieno di un’ora di lavoro: la retribuzione oraria lorda più i contributi a carico del datore di lavoro, il TFR e gli altri costi del personale. Per consulenti e liberi professionisti, usa la loro tariffa oraria.'
        },
        {
          q: 'Posso cambiare il numero di partecipanti durante la riunione?',
          a: 'Sì. Puoi modificare il numero di partecipanti o il costo orario in qualsiasi momento. I nuovi valori vengono conteggiati da quel momento in poi, mentre il costo già accumulato resta invariato.'
        },
        {
          q: 'Il timer continua a funzionare se cambio scheda?',
          a: 'Sì. Il timer si basa sull’orologio, quindi il totale resta corretto anche in una scheda in background. Mentre il timer è in funzione, la pagina chiede inoltre al browser di tenere lo schermo acceso.'
        }
      ]
    },

    workhours: {
      name: 'Ore di lavoro',
      heading: 'Calcolatore del prezzo in ore di lavoro',
      title: 'Prezzo in ore di lavoro – quanto devi lavorare per comprarlo | costsimulators.com',
      description: 'Trasforma qualsiasi prezzo in ore, giorni e settimane di lavoro. Inserisci la tua paga oraria o lo stipendio mensile o annuale e scopri quanto ti costa davvero un acquisto in tempo di lavoro.',
      card: 'Trasforma qualsiasi prezzo nelle ore, nei giorni e nelle settimane di lavoro che servono per pagarlo.',
      tag: 'Lavoro',
      lead: 'Inserisci la tua paga e un prezzo per vedere quanto devi lavorare per permettertelo.',
      period: {
        label: 'Conosco la mia paga',
        hour: 'All’ora',
        month: 'Al mese',
        year: 'All’anno'
      },
      pay: {
        label: 'Paga',
        unit: '€ all’ora',
        value: '11',
        step: '1',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Usa la paga netta, dopo le tasse, per avere la risposta più onesta.',
        decrease: 'Diminuisci la paga',
        increase: 'Aumenta la paga'
      },
      hoursPerWeek: {
        label: 'Ore settimanali',
        unit: 'ore',
        value: '40',
        chip1: '36 ore',
        chip2: '40 ore',
        preset1: '36',
        preset2: '40',
        decrease: 'Diminuisci le ore settimanali',
        increase: 'Aumenta le ore settimanali'
      },
      price: {
        label: 'Prezzo',
        unit: '€',
        value: '999',
        step: '10',
        decrease: 'Diminuisci il prezzo',
        increase: 'Aumenta il prezzo'
      },
      resultsTitle: 'Prezzo in tempo di lavoro',
      youNeedToWork: 'Devi lavorare',
      workDays: 'Giorni lavorativi',
      workWeeks: 'Settimane lavorative',
      hourlyRate: 'La tua paga oraria',
      runtime: {
        unit: {
          hour: '€ all’ora',
          month: '€ al mese',
          year: '€ all’anno'
        },
        days: { one: '{n} giorno', many: '{n} giorni', other: '{n} giorni' },
        weeks: { one: '{n} settimana', many: '{n} settimane', other: '{n} settimane' },
        note: {
          empty: 'Inserisci la tua paga, le ore settimanali e un prezzo per vedere quanto devi lavorare per pagarlo.',
          result: 'Calcolato su giornate lavorative di {hours} ore, {days} giorni a settimana.'
        }
      },
      about: {
        title: 'Come si calcola il tempo di lavoro',
        paragraphs: [
          'Prima la tua paga viene convertita in paga oraria. Lo stipendio mensile viene moltiplicato per 12 e diviso per le ore lavorate in un anno (ore settimanali × 52); lo stipendio annuale viene diviso direttamente per quelle ore. Poi il prezzo viene diviso per la paga oraria.',
          'I giorni lavorativi presuppongono una settimana di cinque giorni, quindi 40 ore settimanali corrispondono a giornate di 8 ore. Per esempio, con 11 € netti l’ora uno smartphone da 999 € costa quasi 91 ore di lavoro, cioè più di due settimane lavorative piene.',
          'Per la risposta più onesta, usa la paga netta dopo le tasse, perché sono i soldi che spendi davvero. Pensare ai prezzi in ore di lavoro è un modo semplice per capire se qualcosa vale davvero la spesa.'
        ]
      },
      faq: [
        {
          q: 'Quante ore devo lavorare per permettermi qualcosa?',
          a: 'Dividi il prezzo per la tua paga oraria netta. Se guadagni 12 € l’ora dopo le tasse, un acquisto da 300 € ti costa 25 ore di lavoro.'
        },
        {
          q: 'Meglio usare la paga lorda o quella netta?',
          a: 'La paga netta dopo le tasse dà la risposta più realistica, perché sono i soldi che hai davvero a disposizione. Con la paga lorda le cose sembrano più economiche di quanto siano.'
        },
        {
          q: 'Come si converte lo stipendio mensile in paga oraria?',
          a: 'Moltiplica lo stipendio mensile per 12 e dividilo per le ore lavorate in un anno. Con una settimana di 40 ore sono 2080 ore, quindi 1800 € netti al mese corrispondono a circa 10,40 € l’ora. Il calcolatore lo fa per te quando scegli Al mese; se ricevi anche la tredicesima, scegli All’anno e inserisci il netto annuo.'
        }
      ]
    },

    coffee: {
      name: 'Costo del caffè',
      heading: 'Calcolatore della spesa per il caffè',
      title: 'Calcolatore spesa caffè – quanto costa il caffè al bar in un anno | costsimulators.com',
      description: 'Scopri quanto ti costa il caffè al bar al mese e in 1, 5 e 10 anni. Inserisci il prezzo di un caffè e quanti ne prendi a settimana: gratis e senza registrazione.',
      card: 'Scopri quanto costa il caffè di ogni giorno in uno, cinque e dieci anni.',
      tag: 'Abitudini',
      lead: 'Inserisci quanto costa un caffè e quanto spesso lo prendi per vedere quanto ti costa questa abitudine negli anni.',
      price: {
        label: 'Prezzo a tazzina',
        unit: '€',
        step: '0.1',
        value: '1.3',
        decrease: 'Diminuisci il prezzo del caffè',
        increase: 'Aumenta il prezzo del caffè'
      },
      perWeek: {
        label: 'Caffè a settimana',
        unit: 'caffè',
        chip1: 'Giorni lavorativi',
        chip2: 'Tutti i giorni',
        chip3: 'Due al giorno',
        decrease: 'Diminuisci i caffè a settimana',
        increase: 'Aumenta i caffè a settimana'
      },
      resultsTitle: 'Quanto spendi in totale',
      in10Years: 'In 10 anni',
      perMonth: 'Al mese',
      year1: '1 anno',
      year5: '5 anni',
      runtime: {
        note: {
          empty: 'Inserisci un prezzo e quanti caffè prendi a settimana per vedere i totali.',
          result: 'Sono circa {cups} caffè all’anno a {price} l’uno.'
        }
      },
      about: {
        title: 'Come si calcola la spesa per il caffè',
        paragraphs: [
          'La spesa annuale è il prezzo a tazzina × i caffè a settimana × 52 settimane. La spesa mensile è quella annuale divisa per 12, mentre i totali a 5 e 10 anni moltiplicano la spesa annuale senza inflazione né aumenti di prezzo.',
          'Un caffè al bar da 1,30 € ogni giorno lavorativo fa circa 340 € all’anno e quasi 3400 € in dieci anni. Se la cifra ti sorprende, la moka a casa o un thermos da portare con te sono modi semplici per risparmiare.',
          'Il calcolatore funziona per qualsiasi piccolo acquisto abituale: una bevanda energetica, un panino a pranzo o una bottiglietta d’acqua. Inserisci il prezzo e quanti ne compri a settimana.'
        ]
      },
      faq: [
        {
          q: 'Quanto costa un caffè al giorno in un anno?',
          a: 'Un caffè al giorno, sette giorni su sette, fa 364 caffè all’anno. A 1,50 € l’uno sono 546 € all’anno e 5460 € in dieci anni.'
        },
        {
          q: 'Fare il caffè a casa costa meno?',
          a: 'Di solito molto meno. Un caffè fatto con la moka costa spesso meno di 20 centesimi, contro più di un euro al bar. Inserisci il costo del tuo caffè di casa per confrontare.'
        },
        {
          q: 'Il calcolatore tiene conto dell’inflazione?',
          a: 'No. Le proiezioni presuppongono che il prezzo resti invariato, quindi mostrano quanto costa l’abitudine ai prezzi di oggi. Se i prezzi aumentano, il costo reale nel lungo periodo è più alto.'
        }
      ]
    },

    smoking: {
      name: 'Costo del fumo',
      heading: 'Calcolatore del costo delle sigarette',
      title: 'Calcolatore spesa sigarette – quanto costa fumare in un anno | costsimulators.com',
      description: 'Scopri quanto spendi in sigarette al mese e in 1, 5 e 10 anni, e quanto risparmi smettendo di fumare. Inserisci il prezzo del pacchetto e le sigarette al giorno.',
      card: 'Scopri quanti soldi vanno in fumo ogni mese e nel corso degli anni.',
      tag: 'Abitudini',
      lead: 'Inserisci il prezzo di un pacchetto e quanto fumi per vedere quanti soldi vanno in fumo negli anni.',
      packPrice: {
        label: 'Prezzo del pacchetto',
        unit: '€',
        step: '0.1',
        value: '6.5',
        decrease: 'Diminuisci il prezzo del pacchetto',
        increase: 'Aumenta il prezzo del pacchetto'
      },
      perDay: {
        label: 'Sigarette al giorno',
        unit: 'sigarette',
        chip1: '5 al giorno',
        chip2: '10 al giorno',
        chip3: '20 al giorno',
        decrease: 'Diminuisci le sigarette al giorno',
        increase: 'Aumenta le sigarette al giorno'
      },
      perPack: {
        label: 'Sigarette per pacchetto',
        unit: 'formato del pacchetto',
        value: '20',
        decrease: 'Diminuisci le sigarette per pacchetto',
        increase: 'Aumenta le sigarette per pacchetto'
      },
      resultsTitle: 'Soldi in fumo',
      in10Years: 'In 10 anni',
      perMonth: 'Al mese',
      year1: '1 anno',
      year5: '5 anni',
      runtime: {
        note: {
          empty: 'Inserisci il prezzo del pacchetto, quante sigarette fumi al giorno e quante ce ne sono in un pacchetto per vedere i totali.',
          result: 'Sono circa {cigarettes} sigarette ({packs} pacchetti) all’anno, a {price} l’una.'
        }
      },
      about: {
        title: 'Come si calcola il costo del fumo',
        paragraphs: [
          'Il prezzo di una sigaretta è il prezzo del pacchetto diviso per il numero di sigarette che contiene. Questo valore viene moltiplicato per le sigarette fumate al giorno e per 365 giorni per ottenere la spesa annuale. La spesa mensile ne è un dodicesimo, e i totali a 5 e 10 anni usano i prezzi di oggi.',
          'Mezzo pacchetto al giorno a 6,50 € il pacchetto fa circa 1190 € all’anno e oltre 11.800 € in dieci anni. Vedere il totale può essere una forte motivazione: con gli stessi soldi potresti fare un viaggio, mettere da parte dei risparmi o estinguere un debito.',
          'Il calcolatore considera solo il prezzo delle sigarette: spese sanitarie e giorni di malattia vanno aggiunti. Se vuoi un aiuto per smettere, puoi chiamare il Telefono Verde contro il Fumo dell’Istituto Superiore di Sanità (800 554 088), rivolgerti a un Centro Antifumo della tua zona o parlarne con il tuo medico di famiglia.'
        ]
      },
      faq: [
        {
          q: 'Quanto costa un pacchetto al giorno in un anno?',
          a: 'Un pacchetto al giorno fa 365 pacchetti all’anno. A 6,50 € il pacchetto sono 2372,50 € all’anno e 23.725 € in dieci anni.'
        },
        {
          q: 'Quanto risparmio se smetto di fumare?',
          a: 'Tutto quello che mostra questo calcolatore. Inserisci quanto fumi oggi: i totali mensili e annuali sono ciò che risparmi smettendo.'
        },
        {
          q: 'Funziona anche con il tabacco da rollare?',
          a: 'Sì. Inserisci il prezzo della busta di tabacco come prezzo del pacchetto, il numero di sigarette che ne ricavi come formato del pacchetto e quante ne fumi al giorno.'
        }
      ]
    },

    subscriptions: {
      name: 'Abbonamenti',
      heading: 'Calcolatore del costo degli abbonamenti',
      title: 'Calcolatore abbonamenti – spesa totale mensile e annuale | costsimulators.com',
      description: 'Somma streaming, palestra, telefono e tutti gli altri abbonamenti. Scopri quanto spendi al mese, all’anno e in 10 anni, e quale abbonamento ti costa di più.',
      card: 'Somma streaming, palestra e tutti gli altri pagamenti ricorrenti in un unico posto.',
      tag: 'Budget',
      lead: 'Elenca tutto ciò che paghi regolarmente e scopri quanto spendi in totale. Puoi inserire addebiti mensili, annuali e settimanali.',
      listTitle: 'I tuoi abbonamenti',
      empty: 'Ancora nessun abbonamento. Aggiungine uno qui sotto o usa l’aggiunta rapida.',
      add: 'Aggiungi abbonamento',
      quickAdd: 'Aggiunta rapida',
      quick: {
        1: { name: 'Streaming video', price: '13.99' },
        2: { name: 'Streaming musicale', price: '11.99' },
        3: { name: 'Palestra', price: '39.90' },
        4: { name: 'Spazio cloud', price: '2.99' },
        5: { name: 'Offerta mobile', price: '9.99' },
        6: { name: 'Quotidiano digitale', price: '9.99' }
      },
      note: 'La tua lista viene salvata nell’indirizzo della pagina, così puoi aggiungerla ai preferiti o condividerla. Non viene mai inviata da nessuna parte.',
      row: {
        name: 'Nome',
        nameLabel: 'Nome dell’abbonamento',
        priceLabel: 'Prezzo in euro',
        cycleLabel: 'Frequenza di addebito',
        monthly: '/ mese',
        yearly: '/ anno',
        weekly: '/ settimana'
      },
      resultsTitle: 'Totale abbonamenti',
      perYear: 'All’anno',
      perMonth: 'Al mese',
      perDay: 'Al giorno',
      in10Years: 'In 10 anni',
      breakdownLabel: 'Costo annuale per abbonamento',
      copySummary: 'Copia il riepilogo',
      runtime: {
        untitled: 'Senza nome',
        remove: 'Rimuovi {name}',
        removeUnnamed: 'Rimuovi abbonamento',
        breakdown: '{cost} / anno · {percent}%',
        cycle: { monthly: 'mese', yearly: 'anno', weekly: 'settimana' },
        note: {
          empty: 'Aggiungi un abbonamento con il relativo prezzo per vedere i totali.',
          single: '{name} ti costa {cost} all’anno.',
          biggest: 'La spesa più alta è {name}: {cost} all’anno, il {percent}% del totale.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Totale: {month} al mese, {year} all’anno'
        }
      },
      about: {
        title: 'Come si calcola il totale degli abbonamenti',
        paragraphs: [
          'Ogni abbonamento viene convertito in un costo annuale: i prezzi mensili vengono moltiplicati per 12, quelli settimanali per 52, mentre quelli annuali restano come sono. Il totale annuale viene poi diviso per 12 per ottenere il costo mensile e per 365 per quello giornaliero.',
          'Il dettaglio ordina gli abbonamenti dal più caro al più economico e mostra la quota di ciascuno sul totale, così è facile capire cosa disdire o sostituire con un piano più economico.',
          'La lista viene salvata nell’indirizzo della pagina, mai su un server. Aggiungi la pagina ai preferiti per ritrovare la lista in seguito, oppure condividi il link per rivedere in famiglia gli abbonamenti in comune.'
        ]
      },
      faq: [
        {
          q: 'Come trovo tutti i miei abbonamenti?',
          a: 'Controlla gli estratti conto della banca e della carta di credito degli ultimi mesi e cerca gli addebiti ricorrenti. Verifica anche le impostazioni degli abbonamenti su App Store, Google Play e PayPal.'
        },
        {
          q: 'Un piano annuale costa meno di uno mensile?',
          a: 'Spesso sì, del 15–20%, ma solo se terresti comunque il servizio per tutto l’anno. Aggiungi entrambe le versioni alla lista per confrontarne il costo annuale.'
        },
        {
          q: 'La mia lista viene salvata?',
          a: 'La lista resta solo nell’indirizzo della pagina. Per conservarla, aggiungi il link ai preferiti o condividilo: nulla viene salvato su un server o nei cookie.'
        }
      ]
    },

    electricity: {
      name: 'Consumo elettrico',
      heading: 'Calcolatore del consumo elettrico',
      title: 'Calcolo consumo elettrico – quanto costa usare un elettrodomestico | costsimulators.com',
      description: 'Calcola quanto costa far funzionare un apparecchio al giorno, al mese e all’anno in base a potenza, ore di utilizzo e prezzo dell’energia. Calcolatore gratuito del costo in kWh.',
      card: 'Scopri quanto costa tenere acceso un apparecchio al giorno, al mese e all’anno.',
      tag: 'Casa',
      lead: 'Inserisci la potenza di un apparecchio, per quanto tempo lo usi e quanto paghi l’elettricità per vedere quanto costa davvero tenerlo acceso.',
      power: {
        label: 'Potenza',
        unit: 'watt',
        chip1: 'Lampadina LED 9 W',
        chip2: 'Portatile 60 W',
        chip3: 'TV 100 W',
        chip4: 'PC da gaming 400 W',
        chip5: 'Stufetta 1500 W',
        decrease: 'Diminuisci la potenza',
        increase: 'Aumenta la potenza'
      },
      hours: {
        label: 'Ore al giorno',
        unit: 'ore',
        decrease: 'Diminuisci le ore al giorno',
        increase: 'Aumenta le ore al giorno'
      },
      days: {
        label: 'Giorni a settimana',
        unit: 'giorni',
        decrease: 'Diminuisci i giorni a settimana',
        increase: 'Aumenta i giorni a settimana'
      },
      kwhPrice: {
        label: 'Prezzo dell’elettricità',
        unit: '€/kWh',
        value: '0.30',
        step: '0.01',
        divisor: '1',
        hint: 'Includi trasporto, oneri di sistema e imposte per un risultato più preciso.',
        decrease: 'Diminuisci il prezzo dell’elettricità',
        increase: 'Aumenta il prezzo dell’elettricità'
      },
      resultsTitle: 'Costo di utilizzo',
      perYear: 'All’anno',
      perDayOfUse: 'Per giorno di utilizzo',
      perMonth: 'Al mese',
      energyPerYear: 'Energia all’anno',
      runtime: {
        note: {
          empty: 'Inserisci la potenza, le ore al giorno (fino a 24), i giorni a settimana (fino a 7) e il prezzo dell’elettricità.',
          result: 'Consuma circa {day} per ogni giorno di utilizzo, circa {year} all’anno.'
        }
      },
      about: {
        title: 'Come si calcola il costo dell’elettricità',
        paragraphs: [
          'Il consumo di energia in chilowattora (kWh) è la potenza in watt × le ore di utilizzo ÷ 1000. Un televisore da 100 W acceso per 4 ore consuma 0,4 kWh al giorno. Moltiplicando questo valore per il prezzo dell’elettricità al kWh si ottiene il costo per giorno di utilizzo.',
          'Il costo annuale tiene conto di quanti giorni a settimana l’apparecchio è in funzione, distribuiti sui 365 giorni dell’anno. Il costo mensile è un dodicesimo di quello annuale.',
          'La potenza è indicata sulla targhetta dei dati tecnici dell’apparecchio o nel manuale. Molti apparecchi, per gran parte del tempo, consumano meno della loro potenza massima, quindi il risultato è una stima per eccesso. Per il prezzo più preciso, includi oltre al costo dell’energia anche trasporto, oneri di sistema e imposte.'
        ]
      },
      faq: [
        {
          q: 'Come si calcola il costo dell’elettricità di un apparecchio?',
          a: 'Moltiplica la potenza in chilowatt per le ore di utilizzo e per il prezzo al kWh. Una stufetta da 1500 W accesa per 3 ore costa 1,5 kW × 3 h × 0,30 € = 1,35 € al giorno.'
        },
        {
          q: 'Quanti kWh consuma un apparecchio?',
          a: 'Dividi la potenza in watt per 1000 e moltiplica per le ore di funzionamento. Un portatile da 60 W usato 8 ore al giorno consuma 0,48 kWh al giorno, circa 175 kWh all’anno se lo usi tutti i giorni.'
        },
        {
          q: 'Quale prezzo dell’elettricità devo usare?',
          a: 'Usa il prezzo totale al kWh che risulta dalla bolletta, comprensivo di energia, trasporto e gestione del contatore, oneri di sistema e imposte. Dividendo il totale della bolletta per i kWh consumati ottieni una buona media.'
        },
        {
          q: 'Gli apparecchi in standby consumano elettricità?',
          a: 'Sì, molti apparecchi assorbono qualche watt in standby. Inserisci la potenza in standby e 24 ore al giorno per vedere quanto ti costa in un anno.'
        }
      ]
    },

    trip: {
      name: 'Costo del viaggio',
      heading: 'Calcolatore del costo di un viaggio in auto',
      title: 'Calcolo costo viaggio in auto – spesa benzina per viaggi e casa-lavoro | costsimulators.com',
      description: 'Calcola quanto spendi di carburante per un viaggio o per il tragitto casa-lavoro e dividi la spesa tra i passeggeri. Funziona con chilometri e litri o con miglia e galloni.',
      card: 'Calcola la spesa di carburante di un viaggio o del tragitto casa-lavoro e dividila con gli altri.',
      tag: 'Viaggi',
      lead: 'Calcola il costo del carburante per un singolo viaggio o per il tragitto quotidiano casa-lavoro e dividilo tra tutti quelli in auto.',
      unit: {
        label: 'Unità',
        metric: 'Chilometri e litri',
        us: 'Miglia e galloni'
      },
      distance: {
        label: 'Distanza',
        unit: 'km solo andata',
        decrease: 'Diminuisci la distanza',
        increase: 'Aumenta la distanza'
      },
      direction: {
        label: 'Percorso',
        one: 'Solo andata',
        round: 'Andata e ritorno'
      },
      consumption: {
        label: 'Consumo di carburante',
        unit: 'l/100 km',
        hint: 'Guidi un’auto elettrica? Inserisci i kWh/100 km e il prezzo al kWh.',
        decrease: 'Diminuisci il consumo',
        increase: 'Aumenta il consumo'
      },
      fuelPrice: {
        label: 'Prezzo del carburante',
        unit: '€ al litro',
        value: '1.75',
        step: '0.05',
        usStep: '0.1',
        decrease: 'Diminuisci il prezzo del carburante',
        increase: 'Aumenta il prezzo del carburante'
      },
      people: {
        label: 'Persone che dividono la spesa',
        unit: 'persone',
        decrease: 'Diminuisci il numero di persone',
        increase: 'Aumenta il numero di persone'
      },
      tripsPerWeek: {
        label: 'Viaggi a settimana',
        unit: 'per i totali mensili e annuali',
        decrease: 'Diminuisci i viaggi a settimana',
        increase: 'Aumenta i viaggi a settimana'
      },
      resultsTitle: 'Costo del carburante',
      perPerson: 'A persona',
      perMonth: 'Al mese',
      perYear: 'All’anno',
      runtime: {
        direction: { one: 'Solo andata', round: 'Andata e ritorno' },
        unit: {
          metric: {
            distance: 'km solo andata',
            consumption: 'l/100 km',
            price: '€ al litro',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'miglia solo andata',
            consumption: 'mpg',
            price: '€ al gallone',
            perDistance: 'miglio',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Inserisci la distanza, il consumo e il prezzo del carburante per vedere il costo.',
          result: 'Consuma {fuel} di carburante per viaggio, circa {price} al {distance}.'
        }
      },
      about: {
        title: 'Come si calcola il costo del viaggio',
        paragraphs: [
          'Il carburante consumato è la distanza × il consumo ÷ 100. Per un tragitto casa-lavoro di 25 km a tratta (50 km al giorno) con un’auto che consuma 6,5 l/100 km servono 3,25 litri. Moltiplicando per il prezzo al litro si ottiene il costo del viaggio, e dividendo per il numero di persone lo si ripartisce tra chi viaggia.',
          'In miglia e galloni, il carburante consumato è la distanza divisa per le miglia per gallone (mpg) dell’auto. Cambiando unità, i valori inseriti vengono convertiti, così puoi confrontare dati di entrambi i sistemi. Se sei abituato ai chilometri con un litro (km/l), dividi 100 per quel valore: 15 km/l corrispondono a circa 6,7 l/100 km.',
          'I totali mensili e annuali si basano sui viaggi a settimana: 5 viaggi di andata e ritorno a settimana sono un tipico tragitto casa-lavoro. Per un’auto elettrica, inserisci invece il consumo in kWh/100 km e il prezzo al kWh.'
        ]
      },
      faq: [
        {
          q: 'Come si calcola il costo della benzina per un viaggio?',
          a: 'Moltiplica la distanza per il consumo e per il prezzo del carburante, poi dividi per 100. Per 200 km con un’auto che consuma 6 l/100 km e la benzina al self a 1,75 €/l: 200 × 6 ÷ 100 × 1,75 € = 21 €.'
        },
        {
          q: 'Come si divide la spesa della benzina tra i passeggeri?',
          a: 'Inserisci il numero di persone che dividono la spesa. Il calcolatore ripartisce il costo del viaggio in parti uguali tra tutti, conducente compreso.'
        },
        {
          q: 'Il calcolatore include usura, parcheggio o pedaggi?',
          a: 'No, considera solo il carburante. Usura, assicurazione, parcheggio e pedaggi autostradali vanno aggiunti, quindi il costo complessivo dell’auto è più alto.'
        }
      ]
    }
  }
};
