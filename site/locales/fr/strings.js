// French texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in euros
// in France.

module.exports = {
  meta: {
    name: 'Français',
    locale: 'fr-FR',
    currency: 'EUR',
    ogLocale: 'fr_FR'
  },

  money: {
    symbol: '€',
    zero: '0,00 €',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Aller au contenu',
    home: 'Accueil',
    toggleTheme: 'Changer de thème',
    themeToLight: 'Passer au thème clair',
    themeToDark: 'Passer au thème sombre',
    language: 'Langue',
    allTools: 'Tous les outils',
    share: 'Partager',
    settings: 'Paramètres',
    quickPicks: 'Choix rapides',
    faqTitle: 'Questions fréquentes',
    relatedTools: 'Autres calculateurs',
    imageAlt: 'costsimulators.com – calculateurs de coûts gratuits pour les questions d’argent du quotidien'
  },

  footer: {
    privacy: 'Fonctionne entièrement dans votre navigateur. Sans cookies, sans pistage.',
    about: 'À propos',
    contact: 'Contact',
    privacyPolicy: 'Confidentialité',
    terms: 'Conditions d’utilisation'
  },

  runtime: {
    share: {
      linkCopied: 'Lien copié',
      copyFailed: 'Échec de la copie',
      copied: 'Copié !',
      calculatedWith: 'Calculé avec costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    }
  },

  home: {
    title: 'Calculateurs de coûts gratuits pour le quotidien | costsimulators.com',
    description: 'Des calculateurs gratuits et privés qui montrent ce que les choses coûtent vraiment : réunions, heures de travail, café, tabac, abonnements, électricité et carburant. Sans inscription.',
    eyebrow: 'Gratuit · Privé · Instantané',
    heading: 'De petits outils pour les questions d’<span class="accent-text">argent</span> du quotidien.',
    lead: 'Des calculateurs rapides qui montrent ce que les choses coûtent vraiment. Sans inscription, sans pistage – tout fonctionne directement dans votre navigateur.',
    toolsTitle: 'Outils',
    toolCount: '{count} outils',
    suggestTitle: 'Une idée ?',
    suggestText: 'Proposez un nouvel outil sur GitHub.',
    whyTitle: 'Les petites dépenses s’additionnent',
    whyText1: 'Une réunion, un café sur le chemin du travail ou un service de streaming de plus ne semblent jamais bien chers pris isolément. Additionnez-les sur un mois, une année ou une décennie, et les chiffres n’ont plus rien à voir.',
    whyText2: 'Chaque calculateur fait une seule chose, ne demande que les chiffres nécessaires et affiche la réponse instantanément. Tout est calculé dans votre navigateur : vos chiffres restent sur votre appareil.',
    aboutLink: 'En savoir plus sur costsimulators.com',
    faq: [
      {
        q: 'costsimulators.com est-il gratuit ?',
        a: 'Oui. Tous les calculateurs sont entièrement gratuits : pas d’inscription, pas de contenu payant, pas de publicité. Vous pouvez aussi les utiliser au travail.'
      },
      {
        q: 'Mes chiffres sont-ils enregistrés ou envoyés quelque part ?',
        a: 'Non. Tout ce que vous saisissez est calculé dans votre navigateur et n’est jamais envoyé à un serveur. Le site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience.'
      },
      {
        q: 'Puis-je partager un calcul ?',
        a: 'Oui. Vos paramètres sont conservés dans l’adresse de la page. Appuyez sur Partager pour copier le lien : la personne qui l’ouvre verra le même calcul.'
      }
    ]
  },

  notFound: {
    title: 'Page introuvable | costsimulators.com',
    description: 'La page que vous cherchez n’existe pas.',
    heading: 'Cette page n’existe pas.',
    lead: 'L’adresse contient peut-être une faute de frappe, ou la page a été déplacée. Tous les calculateurs se trouvent sur la page d’accueil.'
  },

  documents: {
    about: {
      name: 'À propos',
      title: 'À propos – calculateurs de coûts gratuits et privés | costsimulators.com',
      description: 'Qui crée costsimulators.com et comment fonctionnent les calculateurs : des outils gratuits et privés pour les réunions, le travail, les habitudes, les abonnements, l’électricité et les trajets.'
    },
    privacy: {
      name: 'Politique de confidentialité',
      title: 'Politique de confidentialité | costsimulators.com',
      description: 'Comment costsimulators.com traite vos données : les calculs se font dans votre navigateur, sans pistage, sans mesure d’audience et sans compte utilisateur.'
    },
    terms: {
      name: 'Conditions d’utilisation',
      title: 'Conditions d’utilisation | costsimulators.com',
      description: 'Conditions d’utilisation de costsimulators.com : usage gratuit à titre personnel et commercial, service fourni en l’état, code source ouvert sous licence MIT.'
    }
  },

  tools: {
    meetings: {
      name: 'Coût d’une réunion',
      heading: 'Calculateur de coût de réunion',
      title: 'Calculateur de coût de réunion – combien coûte une réunion ? | costsimulators.com',
      description: 'Calculateur gratuit du coût d’une réunion avec chronomètre en direct. Saisissez le taux horaire et le nombre de participants, et voyez ce que coûte la réunion, seconde après seconde.',
      card: 'Regardez le prix d’une réunion grimper en temps réel pendant que vous parlez.',
      tag: 'Chronomètre',
      lead: 'Indiquez le taux horaire et le nombre de participants, lancez le chronomètre et suivez le coût de la réunion à mesure qu’elle avance.',
      pulseEvery: '1',
      rate: {
        label: 'Taux horaire',
        unit: '€ par personne',
        step: '5',
        value: '50',
        decrease: 'Diminuer le taux horaire',
        increase: 'Augmenter le taux horaire'
      },
      persons: {
        label: 'Participants',
        unit: 'personnes',
        decrease: 'Diminuer le nombre de participants',
        increase: 'Augmenter le nombre de participants'
      },
      perMinute: 'Par minute',
      perHour: 'Par heure',
      note: 'Vous pouvez modifier les valeurs pendant que le chronomètre tourne. Les arrivées et les départs sont pris en compte à partir de ce moment.',
      total: 'Coût total',
      elapsed: 'Temps écoulé',
      reset: 'Réinitialiser',
      copyReport: 'Copier le compte rendu',
      kbdHint: 'Appuyez sur <kbd>Espace</kbd> pour démarrer ou mettre en pause',
      runtime: {
        mode: { start: 'Démarrer', pause: 'Pause', resume: 'Reprendre' },
        status: { ready: 'Prêt', live: 'En cours', paused: 'En pause' },
        announce: {
          invalid: 'Saisissez un taux horaire et le nombre de participants pour démarrer.',
          started: 'Chronomètre démarré.',
          paused: 'En pause à {cost} après {time}.',
          reset: 'Chronomètre réinitialisé.'
        },
        report: {
          cost: 'Coût de la réunion : {cost}',
          duration: 'Durée : {time}',
          participants: 'Participants : {persons} × {rate}/h'
        }
      },
      about: {
        title: 'Comment le coût d’une réunion est calculé',
        paragraphs: [
          'Le calculateur multiplie le nombre de participants par leur taux horaire et par le temps écoulé. Une réunion d’une heure à 5 personnes, à 50 € de l’heure par personne, coûte 250 €, soit environ 4,17 € par minute.',
          'Comme taux horaire, prenez ce qu’une heure de travail coûte réellement à l’employeur, et pas seulement le salaire. En France, les charges patronales (assurance maladie, retraite, assurance chômage…) représentent souvent 40 à 45 % du salaire brut : ajoutez-les au salaire horaire brut. Si vous ne connaissez pas le taux de chacun, une moyenne pour l’équipe suffit.',
          'Le chronomètre continue de compter correctement dans un onglet en arrière-plan, et le coût courant s’affiche dans le titre de l’onglet : vous pouvez le surveiller même en partageant votre écran. À la fin de la réunion, mettez le chronomètre en pause et copiez un court compte rendu à coller dans vos notes de réunion.'
        ]
      },
      faq: [
        {
          q: 'Comment calculer le coût d’une réunion ?',
          a: 'Multipliez le nombre de participants par leur taux horaire moyen et par la durée de la réunion en heures. Par exemple, 6 personnes × 40 €/h × 1,5 h = 360 €. Ce calculateur fait le calcul en direct pendant la réunion.'
        },
        {
          q: 'Quel taux horaire utiliser ?',
          a: 'Utilisez le coût complet d’une heure de travail : le salaire horaire brut plus les charges patronales (cotisations sociales, retraite, prévoyance…). Pour les consultants et les prestataires, prenez leur tarif de facturation.'
        },
        {
          q: 'Puis-je modifier le nombre de participants pendant la réunion ?',
          a: 'Oui. Modifiez le nombre de participants ou le taux à tout moment. Les nouvelles valeurs sont prises en compte à partir de ce moment, et le coût déjà accumulé reste inchangé.'
        },
        {
          q: 'Le chronomètre continue-t-il si je change d’onglet ?',
          a: 'Oui. Le chronomètre se base sur l’horloge, donc le total reste juste dans un onglet en arrière-plan. Pendant qu’il tourne, la page demande aussi au navigateur de garder l’écran allumé.'
        }
      ]
    },

    workhours: {
      name: 'Heures de travail',
      heading: 'Calculateur du prix en heures de travail',
      title: 'Prix en heures de travail – combien d’heures pour se l’offrir ? | costsimulators.com',
      description: 'Convertissez n’importe quel prix en heures, jours et semaines de travail. Indiquez votre salaire horaire, mensuel ou annuel et voyez ce qu’un achat coûte vraiment en temps de travail.',
      card: 'Convertissez un prix en heures, jours et semaines de travail nécessaires pour le payer.',
      tag: 'Travail',
      lead: 'Indiquez votre salaire et un prix pour voir combien de temps vous devez travailler pour vous l’offrir.',
      period: {
        label: 'Je connais mon salaire',
        hour: 'Horaire',
        month: 'Mensuel',
        year: 'Annuel'
      },
      pay: {
        label: 'Salaire',
        unit: '€ par heure',
        value: '15',
        step: '1',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Pour la réponse la plus honnête, utilisez votre salaire net après impôt.',
        decrease: 'Diminuer le salaire',
        increase: 'Augmenter le salaire'
      },
      hoursPerWeek: {
        label: 'Heures par semaine',
        unit: 'heures',
        value: '35',
        chip1: '35 h',
        chip2: '39 h',
        preset1: '35',
        preset2: '39',
        decrease: 'Diminuer le nombre d’heures par semaine',
        increase: 'Augmenter le nombre d’heures par semaine'
      },
      price: {
        label: 'Prix',
        unit: '€',
        value: '999',
        step: '10',
        decrease: 'Diminuer le prix',
        increase: 'Augmenter le prix'
      },
      resultsTitle: 'Prix en temps de travail',
      youNeedToWork: 'Vous devez travailler',
      workDays: 'Jours de travail',
      workWeeks: 'Semaines de travail',
      hourlyRate: 'Votre salaire horaire',
      runtime: {
        unit: {
          hour: '€ par heure',
          month: '€ par mois',
          year: '€ par an'
        },
        days: { one: '{n} jour', many: '{n} jours', other: '{n} jours' },
        weeks: { one: '{n} semaine', many: '{n} semaines', other: '{n} semaines' },
        note: {
          empty: 'Indiquez votre salaire, vos heures par semaine et un prix pour voir combien de temps il faut travailler pour le payer.',
          result: 'Sur la base de journées de {hours} h, {days} jours par semaine.'
        }
      },
      about: {
        title: 'Comment le temps de travail est calculé',
        paragraphs: [
          'Votre salaire est d’abord converti en salaire horaire. Un salaire mensuel est multiplié par 12 puis divisé par le nombre d’heures travaillées dans l’année (heures par semaine × 52) ; un salaire annuel est directement divisé par ces heures. Le prix est ensuite divisé par votre salaire horaire.',
          'Les jours de travail supposent une semaine de cinq jours : 35 heures par semaine correspondent à des journées de 7 heures. Par exemple, à 15 € de l’heure, un téléphone à 999 € représente près de 67 heures de travail, soit presque deux semaines complètes.',
          'Pour la réponse la plus honnête, utilisez votre salaire net après impôt, puisque c’est l’argent que vous dépensez réellement. Compter les prix en heures de travail est un moyen simple de savoir si quelque chose en vaut vraiment la peine.'
        ]
      },
      faq: [
        {
          q: 'Combien d’heures dois-je travailler pour me payer quelque chose ?',
          a: 'Divisez le prix par votre salaire horaire net. Si vous gagnez 12 € net de l’heure, un achat de 300 € représente 25 heures de travail.'
        },
        {
          q: 'Faut-il utiliser le salaire brut ou le salaire net ?',
          a: 'Le salaire net après impôt donne la réponse la plus réaliste, car c’est l’argent dont vous disposez vraiment. Avec le brut, les choses paraissent moins chères qu’elles ne le sont.'
        },
        {
          q: 'Comment convertir un salaire mensuel en salaire horaire ?',
          a: 'Multipliez le salaire mensuel par 12, puis divisez le résultat par le nombre d’heures travaillées dans l’année. Avec une semaine de 35 heures, cela fait 1 820 heures, donc 2 200 € net par mois correspondent à environ 14,50 € de l’heure. Le calculateur le fait pour vous si vous choisissez Mensuel.'
        }
      ]
    },

    coffee: {
      name: 'Budget café',
      heading: 'Calculateur du budget café',
      title: 'Calculateur budget café – combien coûte votre café par an ? | costsimulators.com',
      description: 'Découvrez ce que votre café quotidien vous coûte par mois et sur 1, 5 et 10 ans. Indiquez le prix d’un café et le nombre de cafés par semaine – gratuit et privé.',
      card: 'Voyez ce que votre café quotidien représente sur un, cinq et dix ans.',
      tag: 'Habitude',
      lead: 'Indiquez le prix d’un café et la fréquence de vos achats pour voir ce que cette habitude représente au fil des ans.',
      price: {
        label: 'Prix du café',
        unit: '€',
        step: '0.1',
        value: '2',
        decrease: 'Diminuer le prix du café',
        increase: 'Augmenter le prix du café'
      },
      perWeek: {
        label: 'Cafés par semaine',
        unit: 'cafés',
        chip1: 'Jours ouvrés',
        chip2: 'Tous les jours',
        chip3: 'Deux par jour',
        decrease: 'Diminuer le nombre de cafés par semaine',
        increase: 'Augmenter le nombre de cafés par semaine'
      },
      resultsTitle: 'Ce que ça représente',
      in10Years: 'En 10 ans',
      perMonth: 'Par mois',
      year1: '1 an',
      year5: '5 ans',
      runtime: {
        note: {
          empty: 'Indiquez un prix et le nombre de cafés que vous prenez par semaine pour voir les totaux.',
          result: 'Soit environ {cups} cafés par an, à {price} l’unité.'
        }
      },
      about: {
        title: 'Comment le coût du café est calculé',
        paragraphs: [
          'Le coût annuel correspond au prix d’un café × le nombre de cafés par semaine × 52 semaines. Le coût mensuel est le coût annuel divisé par 12, et les totaux sur 5 et 10 ans multiplient le coût annuel, sans inflation ni hausse des prix.',
          'Un café à 2 € au comptoir chaque jour de travail revient à 520 € par an et à 5 200 € en dix ans. Si le chiffre vous surprend, le café fait maison ou un mug isotherme à emporter sont des moyens simples d’alléger la note.',
          'Le calculateur fonctionne pour n’importe quel petit achat régulier : une boisson énergisante, un sandwich le midi ou une bouteille d’eau. Indiquez le prix et combien vous en achetez par semaine.'
        ]
      },
      faq: [
        {
          q: 'Combien coûte un café par jour sur un an ?',
          a: 'Un café par jour, sept jours sur sept, cela fait 364 cafés par an. À 2,50 € la tasse, cela représente 910 € par an et 9 100 € en dix ans.'
        },
        {
          q: 'Est-ce moins cher de faire son café à la maison ?',
          a: 'En général, beaucoup moins cher. Une tasse préparée à la maison coûte souvent entre 10 et 50 centimes, capsules comprises, contre 2 € ou plus au café. Indiquez le prix de votre tasse maison pour comparer.'
        },
        {
          q: 'Le calculateur tient-il compte de l’inflation ?',
          a: 'Non. Les projections supposent que le prix reste le même : elles montrent ce que coûte l’habitude aux prix d’aujourd’hui. Avec la hausse des prix, le coût réel à long terme est plus élevé.'
        }
      ]
    },

    smoking: {
      name: 'Coût du tabac',
      heading: 'Calculateur du coût du tabac',
      title: 'Calculateur coût du tabac – combien coûte la cigarette par an ? | costsimulators.com',
      description: 'Découvrez combien le tabac vous coûte par mois et sur 1, 5 et 10 ans – et combien vous économisez en arrêtant de fumer. Indiquez le prix du paquet et les cigarettes par jour.',
      card: 'Découvrez combien d’argent part en fumée chaque mois et au fil des ans.',
      tag: 'Habitude',
      lead: 'Indiquez le prix du paquet et votre consommation pour voir combien d’argent part en fumée au fil des ans.',
      packPrice: {
        label: 'Prix du paquet',
        unit: '€',
        step: '0.5',
        value: '13',
        decrease: 'Diminuer le prix du paquet',
        increase: 'Augmenter le prix du paquet'
      },
      perDay: {
        label: 'Cigarettes par jour',
        unit: 'cigarettes',
        chip1: '5 par jour',
        chip2: '10 par jour',
        chip3: '20 par jour',
        decrease: 'Diminuer le nombre de cigarettes par jour',
        increase: 'Augmenter le nombre de cigarettes par jour'
      },
      perPack: {
        label: 'Cigarettes par paquet',
        unit: 'taille du paquet',
        value: '20',
        decrease: 'Diminuer le nombre de cigarettes par paquet',
        increase: 'Augmenter le nombre de cigarettes par paquet'
      },
      resultsTitle: 'Parti en fumée',
      in10Years: 'En 10 ans',
      perMonth: 'Par mois',
      year1: '1 an',
      year5: '5 ans',
      runtime: {
        note: {
          empty: 'Indiquez le prix du paquet, le nombre de cigarettes par jour et la taille du paquet pour voir les totaux.',
          result: 'Soit environ {cigarettes} cigarettes ({packs} paquets) par an, à {price} la cigarette.'
        }
      },
      about: {
        title: 'Comment le coût du tabac est calculé',
        paragraphs: [
          'Le prix d’une cigarette correspond au prix du paquet divisé par le nombre de cigarettes qu’il contient. Il est multiplié par le nombre de cigarettes fumées par jour et par 365 jours pour obtenir le coût annuel. Le coût mensuel en est le douzième, et les totaux sur 5 et 10 ans sont calculés aux prix actuels.',
          'Un demi-paquet par jour à 13 € le paquet représente environ 2 370 € par an et plus de 23 700 € en dix ans. Voir le total peut être une vraie source de motivation : la même somme pourrait financer un voyage, alimenter votre épargne ou rembourser un crédit.',
          'Le calculateur ne compte que le prix des cigarettes. Les frais de santé, les surprimes d’assurance emprunteur et les arrêts maladie viennent s’y ajouter. Pour vous aider à arrêter, parlez-en à votre médecin ou à votre pharmacien, ou appelez Tabac Info Service au 39 89.'
        ]
      },
      faq: [
        {
          q: 'Combien coûte un paquet par jour sur un an ?',
          a: 'Un paquet par jour, c’est 365 paquets par an. À 13 € le paquet, cela fait 4 745 € par an et 47 450 € en dix ans.'
        },
        {
          q: 'Combien vais-je économiser en arrêtant de fumer ?',
          a: 'Tout ce que ce calculateur affiche. Indiquez votre consommation actuelle : les totaux mensuels et annuels correspondent à ce que l’arrêt vous fera économiser.'
        },
        {
          q: 'Le calculateur fonctionne-t-il pour le tabac à rouler ?',
          a: 'Oui. Indiquez le prix d’une pochette de tabac comme prix du paquet, le nombre de cigarettes que vous en roulez comme taille du paquet, et combien vous en fumez par jour.'
        }
      ]
    },

    subscriptions: {
      name: 'Abonnements',
      heading: 'Calculateur d’abonnements',
      title: 'Calculateur d’abonnements – total par mois et par an | costsimulators.com',
      description: 'Additionnez streaming, salle de sport, forfait mobile et tous vos autres abonnements. Voyez le total par mois, par an et sur 10 ans, et l’abonnement qui vous coûte le plus cher.',
      card: 'Additionnez streaming, salle de sport et tous vos prélèvements réguliers au même endroit.',
      tag: 'Budget',
      lead: 'Listez tout ce que vous payez régulièrement et voyez ce que cela représente au total. Facturation mensuelle, annuelle ou hebdomadaire : tout est pris en charge.',
      listTitle: 'Vos abonnements',
      empty: 'Aucun abonnement pour l’instant. Ajoutez-en un ci-dessous ou choisissez un ajout rapide.',
      add: 'Ajouter un abonnement',
      quickAdd: 'Ajout rapide',
      quick: {
        1: { name: 'Streaming vidéo', price: '14.99' },
        2: { name: 'Streaming musical', price: '11.99' },
        3: { name: 'Salle de sport', price: '29.99' },
        4: { name: 'Stockage en ligne', price: '2.99' },
        5: { name: 'Forfait mobile', price: '12.99' },
        6: { name: 'Presse en ligne', price: '9.99' }
      },
      note: 'Votre liste est conservée dans l’adresse de la page : vous pouvez l’ajouter à vos favoris ou la partager. Elle n’est jamais envoyée nulle part.',
      row: {
        name: 'Nom',
        nameLabel: 'Nom de l’abonnement',
        priceLabel: 'Prix en euros',
        cycleLabel: 'Périodicité de facturation',
        monthly: '/ mois',
        yearly: '/ an',
        weekly: '/ semaine'
      },
      resultsTitle: 'Total des abonnements',
      perYear: 'Par an',
      perMonth: 'Par mois',
      perDay: 'Par jour',
      in10Years: 'En 10 ans',
      breakdownLabel: 'Coût annuel par abonnement',
      copySummary: 'Copier le récapitulatif',
      runtime: {
        untitled: 'Sans nom',
        remove: 'Supprimer {name}',
        removeUnnamed: 'Supprimer l’abonnement',
        breakdown: '{cost} / an · {percent} %',
        cycle: { monthly: 'mois', yearly: 'an', weekly: 'semaine' },
        note: {
          empty: 'Ajoutez un abonnement avec son prix pour voir les totaux.',
          single: 'Soit {cost} par an pour {name}.',
          biggest: 'Votre plus grosse dépense : {name}, à {cost} par an, soit {percent} % du total.'
        },
        summary: {
          item: '{name} – {price} par {cycle}',
          total: 'Total : {month} par mois, {year} par an'
        }
      },
      about: {
        title: 'Comment le total des abonnements est calculé',
        paragraphs: [
          'Chaque abonnement est converti en coût annuel : les prix mensuels sont multipliés par 12, les prix hebdomadaires par 52, et les prix annuels sont repris tels quels. Le total annuel est ensuite divisé par 12 pour obtenir le coût mensuel et par 365 pour le coût journalier.',
          'Le détail classe vos abonnements du plus cher au moins cher et affiche la part de chacun dans le total : vous repérez facilement ce qu’il faut résilier ou remplacer par une formule moins chère.',
          'Votre liste est enregistrée dans l’adresse de la page, jamais sur un serveur. Ajoutez la page à vos favoris pour retrouver votre liste plus tard, ou partagez le lien pour passer en revue les abonnements communs avec votre famille.'
        ]
      },
      faq: [
        {
          q: 'Comment retrouver tous mes abonnements ?',
          a: 'Parcourez vos relevés de compte et de carte bancaire des derniers mois à la recherche de prélèvements récurrents. Vérifiez aussi les abonnements dans les réglages de l’App Store, de Google Play et de PayPal.'
        },
        {
          q: 'Un abonnement annuel est-il moins cher qu’un abonnement mensuel ?',
          a: 'Souvent oui, de 15 à 20 %, mais seulement si vous comptiez de toute façon garder le service toute l’année. Ajoutez les deux formules à la liste pour comparer leur coût annuel.'
        },
        {
          q: 'Ma liste est-elle enregistrée ?',
          a: 'Votre liste est conservée uniquement dans l’adresse de la page. Ajoutez le lien à vos favoris ou partagez-le pour la garder ; rien n’est stocké sur un serveur ni dans des cookies.'
        }
      ]
    },

    electricity: {
      name: 'Coût de l’électricité',
      heading: 'Calculateur de consommation électrique',
      title: 'Calcul consommation électrique – combien coûte un appareil ? | costsimulators.com',
      description: 'Calculez ce que coûte un appareil par jour, par mois et par an selon sa puissance, sa durée d’utilisation et le prix du kWh. Calculateur de consommation électrique gratuit.',
      card: 'Voyez ce que coûte un appareil allumé par jour, par mois et par an.',
      tag: 'Maison',
      lead: 'Indiquez la puissance d’un appareil, sa durée d’utilisation et votre prix de l’électricité pour voir combien il vous coûte vraiment de le laisser allumé.',
      power: {
        label: 'Puissance',
        unit: 'watts',
        chip1: 'Ampoule LED 9 W',
        chip2: 'PC portable 60 W',
        chip3: 'Téléviseur 100 W',
        chip4: 'PC gamer 400 W',
        chip5: 'Radiateur 1 500 W',
        decrease: 'Diminuer la puissance',
        increase: 'Augmenter la puissance'
      },
      hours: {
        label: 'Heures par jour',
        unit: 'heures',
        decrease: 'Diminuer le nombre d’heures par jour',
        increase: 'Augmenter le nombre d’heures par jour'
      },
      days: {
        label: 'Jours par semaine',
        unit: 'jours',
        decrease: 'Diminuer le nombre de jours par semaine',
        increase: 'Augmenter le nombre de jours par semaine'
      },
      kwhPrice: {
        label: 'Prix de l’électricité',
        unit: '€/kWh',
        value: '0.20',
        step: '0.01',
        divisor: '1',
        hint: 'Pour un résultat plus juste, utilisez le prix TTC du kWh, acheminement et taxes compris.',
        decrease: 'Diminuer le prix de l’électricité',
        increase: 'Augmenter le prix de l’électricité'
      },
      resultsTitle: 'Coût d’utilisation',
      perYear: 'Par an',
      perDayOfUse: 'Par jour d’utilisation',
      perMonth: 'Par mois',
      energyPerYear: 'Énergie par an',
      runtime: {
        note: {
          empty: 'Indiquez la puissance, les heures par jour (24 au maximum), les jours par semaine (7 au maximum) et votre prix de l’électricité.',
          result: 'L’appareil consomme environ {day} par jour d’utilisation, soit environ {year} par an.'
        }
      },
      about: {
        title: 'Comment le coût de l’électricité est calculé',
        paragraphs: [
          'La consommation d’énergie en kilowattheures (kWh) correspond à la puissance en watts × les heures d’utilisation ÷ 1 000. Un téléviseur de 100 W allumé 4 heures consomme 0,4 kWh par jour. En multipliant par votre prix du kWh, on obtient le coût par jour d’utilisation.',
          'Le coût annuel tient compte du nombre de jours par semaine où l’appareil fonctionne, réparti sur les 365 jours de l’année. Le coût mensuel est le douzième du coût annuel.',
          'La puissance figure sur la plaque signalétique de l’appareil ou dans sa notice. Beaucoup d’appareils consomment la plupart du temps moins que leur puissance maximale : le résultat est donc une estimation haute. Pour le prix le plus juste, prenez le prix TTC du kWh, acheminement et taxes compris, et pas seulement le prix de l’énergie.'
        ]
      },
      faq: [
        {
          q: 'Comment calculer le coût électrique d’un appareil ?',
          a: 'Multipliez la puissance en kilowatts par les heures d’utilisation et par le prix du kWh. Un radiateur de 1 500 W qui fonctionne 3 heures coûte 1,5 kW × 3 h × 0,20 € = 0,90 € par jour.'
        },
        {
          q: 'Combien de kWh consomme un appareil ?',
          a: 'Divisez la puissance en watts par 1 000 et multipliez par les heures d’utilisation. Un ordinateur portable de 60 W utilisé 8 heures par jour consomme 0,48 kWh par jour, soit environ 175 kWh par an s’il sert tous les jours.'
        },
        {
          q: 'Quel prix de l’électricité utiliser ?',
          a: 'Utilisez le prix total du kWh indiqué sur votre facture, énergie, acheminement et taxes compris. Diviser le montant total de la facture par les kWh consommés donne une bonne moyenne.'
        },
        {
          q: 'Un appareil en veille consomme-t-il de l’électricité ?',
          a: 'Oui, beaucoup d’appareils consomment quelques watts en veille. Indiquez la puissance en veille et 24 heures par jour pour voir ce que cela coûte sur un an.'
        }
      ]
    },

    trip: {
      name: 'Coût d’un trajet',
      heading: 'Calculateur du coût de carburant d’un trajet',
      title: 'Calcul coût trajet essence – budget carburant et domicile-travail | costsimulators.com',
      description: 'Calculez le coût en carburant d’un trajet ou de vos trajets domicile-travail et partagez-le entre passagers. Fonctionne en kilomètres et litres ou en miles et gallons.',
      card: 'Calculez le coût en carburant d’un trajet et partagez-le avec vos passagers.',
      tag: 'Déplacements',
      lead: 'Calculez le coût en carburant d’un trajet ou de vos allers-retours quotidiens, et partagez-le entre tous les occupants de la voiture.',
      unit: {
        label: 'Unités',
        metric: 'Kilomètres et litres',
        us: 'Miles et gallons'
      },
      distance: {
        label: 'Distance',
        unit: 'km aller simple',
        decrease: 'Diminuer la distance',
        increase: 'Augmenter la distance'
      },
      direction: {
        label: 'Trajet',
        one: 'Aller simple',
        round: 'Aller-retour'
      },
      consumption: {
        label: 'Consommation',
        unit: 'l/100 km',
        hint: 'Voiture électrique ? Indiquez des kWh/100 km et le prix du kWh.',
        decrease: 'Diminuer la consommation',
        increase: 'Augmenter la consommation'
      },
      fuelPrice: {
        label: 'Prix du carburant',
        unit: '€ par litre',
        value: '1.75',
        step: '0.05',
        usStep: '0.1',
        decrease: 'Diminuer le prix du carburant',
        increase: 'Augmenter le prix du carburant'
      },
      people: {
        label: 'Personnes qui partagent les frais',
        unit: 'personnes',
        decrease: 'Diminuer le nombre de personnes',
        increase: 'Augmenter le nombre de personnes'
      },
      tripsPerWeek: {
        label: 'Trajets par semaine',
        unit: 'pour les totaux mensuels et annuels',
        decrease: 'Diminuer le nombre de trajets par semaine',
        increase: 'Augmenter le nombre de trajets par semaine'
      },
      resultsTitle: 'Coût du carburant',
      perPerson: 'Par personne',
      perMonth: 'Par mois',
      perYear: 'Par an',
      runtime: {
        direction: { one: 'Aller simple', round: 'Aller-retour' },
        unit: {
          metric: {
            distance: 'km aller simple',
            consumption: 'l/100 km',
            price: '€ par litre',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'miles aller simple',
            consumption: 'mpg',
            price: '€ par gallon',
            perDistance: 'mile',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Indiquez la distance, la consommation et le prix du carburant pour voir le coût.',
          result: 'Le trajet consomme {fuel} de carburant, soit environ {price} par {distance}.'
        }
      },
      about: {
        title: 'Comment le coût du trajet est calculé',
        paragraphs: [
          'La quantité de carburant consommée correspond à la distance × la consommation ÷ 100. Pour un trajet domicile-travail de 25 km dans chaque sens (50 km par jour) avec une voiture qui consomme 6,5 l/100 km, il faut 3,25 litres de carburant. Multipliez par le prix du litre pour obtenir le coût du trajet, puis divisez par le nombre de personnes pour le partager.',
          'En miles et gallons, la quantité de carburant s’obtient en divisant la distance par le nombre de miles parcourus avec un gallon (mpg). Changer d’unités convertit les valeurs saisies : vous pouvez ainsi comparer des chiffres de l’un ou l’autre système.',
          'Les totaux mensuels et annuels reposent sur le nombre de trajets par semaine – 5 allers-retours par semaine correspondent à des trajets domicile-travail classiques. Pour une voiture électrique, indiquez plutôt la consommation en kWh/100 km et le prix du kWh.'
        ]
      },
      faq: [
        {
          q: 'Comment calculer le coût en essence d’un trajet ?',
          a: 'Multipliez la distance par la consommation et par le prix du carburant, puis divisez par 100. Pour 200 km avec une voiture qui consomme 6 l/100 km et du SP95-E10 à 1,75 € le litre : 200 × 6 ÷ 100 × 1,75 € = 21 €.'
        },
        {
          q: 'Comment partager les frais de carburant entre passagers ?',
          a: 'Indiquez le nombre de personnes qui partagent les frais. Le calculateur répartit le coût du trajet à parts égales entre tout le monde, conducteur compris.'
        },
        {
          q: 'Le calculateur tient-il compte de l’usure, du stationnement ou des péages ?',
          a: 'Non, il ne compte que le carburant. L’usure, l’assurance, le stationnement et les péages s’y ajoutent, donc le coût total de la voiture est plus élevé.'
        }
      ]
    }
  }
};
