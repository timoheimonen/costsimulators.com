// Turkish texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in Turkish lira.

module.exports = {
  meta: {
    name: 'Türkçe',
    locale: 'tr-TR',
    currency: 'TRY',
    ogLocale: 'tr_TR'
  },

  money: {
    symbol: '₺',
    zero: '₺0,00',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'İçeriğe geç',
    home: 'Ana sayfa',
    toggleTheme: 'Temayı değiştir',
    themeToLight: 'Açık temaya geç',
    themeToDark: 'Koyu temaya geç',
    language: 'Dil',
    allTools: 'Tüm araçlar',
    share: 'Paylaş',
    settings: 'Ayarlar',
    quickPicks: 'Hızlı seçimler',
    faqTitle: 'Sıkça sorulan sorular',
    relatedTools: 'Diğer hesaplama araçları',
    imageAlt: 'costsimulators.com – günlük para soruları için ücretsiz maliyet hesaplama araçları',
    invest: {
      label: 'Harcamak yerine yatırım yapsaydınız'
    },
    receipt: {
      open: 'Fişi yazdır',
      title: 'Fişiniz',
      close: 'Kapat',
      skip: 'Toplama git',
      total: 'Toplam',
      length: 'Fiş uzunluğu',
      lengthNote: 'Satır başına 4 mm, gerçek bir kasa fişi gibi.',
      thanks: '10 yıllık sadakatiniz için teşekkürler!',
      image: 'Görsel olarak paylaş'
    }
  },

  footer: {
    privacy: 'Tamamen tarayıcınızda çalışır. Çerez yok, takip yok.',
    about: 'Hakkında',
    contact: 'İletişim',
    privacyPolicy: 'Gizlilik',
    terms: 'Kullanım koşulları'
  },

  runtime: {
    share: {
      linkCopied: 'Bağlantı kopyalandı',
      copyFailed: 'Kopyalanamadı',
      copied: 'Kopyalandı!',
      calculatedWith: 'costsimulators.com ile hesaplandı'
    },
    workTime: {
      minutes: '{m} dk',
      hours: '{h} sa',
      hoursMinutes: '{h} sa {m} dk'
    },
    invest: {
      note: '10 yıl boyunca ayda {monthly}, yıllık {rate} getiriyle: {paid} sizin paranız, {gain} getiri.'
    },
    receipt: {
      subtotal: 'Ara toplam, {year}. yıl',
      year: '{year}. yıl',
      unit: 'meter',
      saved: 'Görsel kaydedildi'
    }
  },

  home: {
    title: 'Günlük hayat için ücretsiz maliyet hesaplama araçları',
    description: 'Toplantı, çalışma saati, alışkanlıklar, abonelikler, elektrik, yakıt ve kullanım başına maliyet için ücretsiz hesaplama araçları. Üyelik gerekmez, her şey tarayıcınızda hesaplanır.',
    eyebrow: 'Ücretsiz · Gizlilik dostu · Anında',
    heading: 'Günlük <span class="accent-text">para</span> soruları için küçük araçlar.',
    lead: 'Bir şeyin size gerçekte kaça mal olduğunu hızlıca gösteren hesaplama araçları. Üyelik yok, takip yok – her şey doğrudan tarayıcınızda çalışır.',
    toolsTitle: 'Araçlar',
    toolCount: '{count} araç',
    suggestTitle: 'Bir fikriniz mi var?',
    suggestText: 'GitHub’da yeni bir araç önerin.',
    whyTitle: 'Küçük harcamalar birikir',
    whyText1: 'Bir toplantı, işe giderken alınan bir kahve ya da yeni bir dijital abonelik tek başına pek pahalı görünmez. Bunları bir ay, bir yıl ya da on yıl boyunca toplayınca rakamlar bambaşka bir hâl alır.',
    whyText2: 'Her hesaplama aracı tek bir iş yapar, yalnızca gereken rakamları sorar ve sonucu anında gösterir. Tüm hesaplamalar tarayıcınızda yapılır, yani rakamlarınız cihazınızdan çıkmaz.',
    aboutLink: 'costsimulators.com hakkında daha fazlası',
    faq: [
      {
        q: 'costsimulators.com ücretsiz mi?',
        a: 'Evet. Tüm hesaplama araçları tamamen ücretsizdir; üyelik, ödeme duvarı ya da reklam yoktur. İş yerinde de kullanabilirsiniz.'
      },
      {
        q: 'Girdiğim rakamlar kaydediliyor ya da bir yere gönderiliyor mu?',
        a: 'Hayır. Girdiğiniz her şey tarayıcınızda hesaplanır ve hiçbir zaman bir sunucuya gönderilmez. Site çerez kullanmaz ve analiz aracı barındırmaz.'
      },
      {
        q: 'Bir hesaplamayı paylaşabilir miyim?',
        a: 'Evet. Ayarlarınız sayfa adresinde saklanır. Bağlantıyı kopyalamak için Paylaş düğmesine basın; bağlantıyı açan herkes aynı hesaplamayı görür.'
      }
    ]
  },

  notFound: {
    title: 'Sayfa bulunamadı',
    description: 'Aradığınız sayfa mevcut değil.',
    heading: 'Bu sayfa mevcut değil.',
    lead: 'Adres yanlış yazılmış ya da sayfa taşınmış olabilir. Tüm hesaplama araçlarını ana sayfada bulabilirsiniz.'
  },

  documents: {
    about: {
      name: 'Hakkında',
      title: 'Hakkında – ücretsiz ve gizlilik dostu hesaplama araçları',
      description: 'costsimulators.com’u kim yapıyor ve hesaplama araçları nasıl çalışıyor? Toplantı, çalışma saati, alışkanlıklar, satın almalar, abonelikler, elektrik ve yol masrafı için ücretsiz araçlar.'
    },
    privacy: {
      name: 'Gizlilik politikası',
      title: 'Gizlilik politikası',
      description: 'costsimulators.com verilerinizi nasıl işliyor: hesaplamalar tarayıcınızda yapılır; takip, analiz aracı ya da kullanıcı hesabı yoktur.'
    },
    terms: {
      name: 'Kullanım koşulları',
      title: 'Kullanım koşulları',
      description: 'costsimulators.com kullanım koşulları: kişisel ve ticari amaçlarla ücretsiz kullanılabilir, olduğu gibi sunulur, kaynak kodu MIT Lisansı ile açıktır.'
    }
  },

  tools: {
    meetings: {
      name: 'Toplantı maliyeti',
      heading: 'Toplantı maliyeti hesaplama',
      title: 'Toplantı maliyeti hesaplama – canlı toplantı sayacı',
      description: 'Canlı sayaçlı ücretsiz toplantı maliyeti hesaplama aracı. Saatlik ücreti ve katılımcı sayısını girin, toplantının kaça mal olduğunu saniye saniye izleyin.',
      card: 'Siz konuşurken toplantının maliyetinin gerçek zamanlı olarak nasıl arttığını izleyin.',
      tag: 'Canlı sayaç',
      lead: 'Saatlik ücreti ve katılımcı sayısını girin, Başlat’a basın ve toplantının maliyetini anbean izleyin.',
      pulseEvery: '10',
      rate: {
        label: 'Saatlik ücret',
        unit: 'TL, kişi başı',
        step: '50',
        value: '750',
        decrease: 'Saatlik ücreti azalt',
        increase: 'Saatlik ücreti artır'
      },
      persons: {
        label: 'Katılımcılar',
        unit: 'kişi',
        decrease: 'Katılımcı sayısını azalt',
        increase: 'Katılımcı sayısını artır'
      },
      perMinute: 'Dakika başına',
      perHour: 'Saat başına',
      note: 'Sayaç çalışırken değerleri değiştirebilirsiniz. Toplantıya katılan ya da ayrılan kişiler o andan itibaren hesaba katılır.',
      total: 'Toplam maliyet',
      elapsed: 'Geçen süre',
      reset: 'Sıfırla',
      copyReport: 'Raporu kopyala',
      kbdHint: 'Başlatmak veya duraklatmak için <kbd>Boşluk</kbd> tuşuna basın',
      runtime: {
        mode: { start: 'Başlat', pause: 'Duraklat', resume: 'Devam et' },
        status: { ready: 'Hazır', live: 'Canlı', paused: 'Duraklatıldı' },
        announce: {
          invalid: 'Başlamak için saatlik ücreti ve katılımcı sayısını girin.',
          started: 'Sayaç başladı.',
          paused: 'Duraklatıldı: {time} içinde {cost} birikti.',
          reset: 'Sayaç sıfırlandı.'
        },
        report: {
          cost: 'Toplantı maliyeti: {cost}',
          duration: 'Süre: {time}',
          participants: 'Katılımcılar: {persons} × {rate}/saat'
        }
      },
      about: {
        title: 'Toplantı maliyeti nasıl hesaplanıyor?',
        paragraphs: [
          'Hesaplama aracı, katılımcı sayısını saatlik ücretle ve geçen süreyle çarpar. Saatlik ücreti 750 TL olan 5 kişinin katıldığı bir saatlik toplantı 3.750 TL tutar – bu da her dakika 62,50 TL demektir.',
          'Saatlik ücret olarak yalnızca maaşı değil, bir çalışma saatinin işverene gerçek maliyetini kullanın. Brüt ücretin üzerine işverenin ödediği SGK ve işsizlik sigortası primleri biner; teşviklere göre değişmekle birlikte bunlar genellikle brüt ücretin %20 civarındadır. Yemek ve yol yardımı gibi yan haklar da maliyeti artırır. Herkesin ücretini bilmiyorsanız ekibin ortalaması yeterlidir.',
          'Sayaç arka plandaki bir sekmede de doğru saymaya devam eder ve biriken tutar tarayıcı sekmesinin başlığında görünür; böylece ekranınızı paylaşırken de takip edebilirsiniz. Toplantı bitince sayacı duraklatın ve toplantı notları için kısa bir rapor kopyalayın.'
        ]
      },
      faq: [
        {
          q: 'Bir toplantının maliyetini nasıl hesaplarım?',
          a: 'Katılımcı sayısını ortalama saatlik ücretle ve toplantının saat cinsinden süresiyle çarpın. Örneğin 6 kişi × 600 TL/saat × 1,5 saat = 5.400 TL. Bu hesaplama aracı, hesabı toplantı sürerken canlı olarak yapar.'
        },
        {
          q: 'Hangi saatlik ücreti kullanmalıyım?',
          a: 'Bir çalışma saatinin toplam maliyetini kullanın: brüt saatlik ücrete işverenin ödediği SGK primlerini ve diğer istihdam maliyetlerini ekleyin. Danışmanlar ve serbest çalışanlar için faturaladıkları saatlik ücreti girin.'
        },
        {
          q: 'Toplantı sırasında katılımcı sayısını değiştirebilir miyim?',
          a: 'Evet. Katılımcı sayısını veya saatlik ücreti istediğiniz zaman değiştirebilirsiniz. Yeni değerler o andan itibaren hesaba katılır, o ana kadar biriken tutar ise olduğu gibi kalır.'
        },
        {
          q: 'Sekme değiştirirsem sayaç çalışmaya devam eder mi?',
          a: 'Evet. Sayaç cihazın saatine göre çalıştığı için toplam, arka plandaki bir sekmede de doğru kalır. Sayaç çalışırken sayfa ayrıca tarayıcıdan ekranın kapanmamasını ister.'
        }
      ]
    },

    workhours: {
      name: 'Çalışma saati',
      heading: 'Fiyatın çalışma saati karşılığı',
      title: 'Fiyatı çalışma saatine çevirme – kaç saat çalışmalısınız?',
      description: 'Herhangi bir fiyatı kaç saat, gün ve hafta çalışmanız gerektiğine çevirin. Saatlik, aylık ya da yıllık ücretinizi girin, bir alışverişin iş zamanı olarak gerçek bedelini görün.',
      card: 'Herhangi bir fiyatı, karşılığında çalışmanız gereken saate, güne ve haftaya çevirin.',
      tag: 'İş',
      lead: 'Ücretinizi ve bir fiyatı girin; onu karşılamak için ne kadar çalışmanız gerektiğini görün.',
      period: {
        label: 'Ücret türü',
        hour: 'Saatlik',
        month: 'Aylık',
        year: 'Yıllık'
      },
      pay: {
        label: 'Ücret',
        unit: 'TL/saat',
        value: '250',
        step: '10',
        monthStep: '1000',
        yearStep: '10000',
        hint: 'En gerçekçi sonuç için vergiler düşüldükten sonra elinize geçen net ücreti kullanın.',
        decrease: 'Ücreti azalt',
        increase: 'Ücreti artır'
      },
      hoursPerWeek: {
        label: 'Haftalık çalışma saati',
        unit: 'saat',
        value: '45',
        chip1: '40 saat',
        chip2: '45 saat',
        preset1: '40',
        preset2: '45',
        decrease: 'Haftalık çalışma saatini azalt',
        increase: 'Haftalık çalışma saatini artır'
      },
      price: {
        label: 'Fiyat',
        unit: 'TL',
        value: '50000',
        step: '1000',
        decrease: 'Fiyatı azalt',
        increase: 'Fiyatı artır'
      },
      resultsTitle: 'Fiyatın iş zamanı karşılığı',
      youNeedToWork: 'Çalışmanız gereken süre',
      workDays: 'İş günü',
      workWeeks: 'İş haftası',
      hourlyRate: 'Saatlik ücretiniz',
      runtime: {
        unit: {
          hour: 'TL/saat',
          month: 'TL/ay',
          year: 'TL/yıl'
        },
        days: { one: '{n} gün', other: '{n} gün' },
        weeks: { one: '{n} hafta', other: '{n} hafta' },
        note: {
          empty: 'Ne kadar çalışmanız gerektiğini görmek için ücretinizi, haftalık çalışma saatinizi ve bir fiyat girin.',
          result: 'Günde {hours} saat, haftada {days} gün çalışmaya göre hesaplandı.'
        }
      },
      about: {
        title: 'Çalışma süresi nasıl hesaplanıyor?',
        paragraphs: [
          'Önce ücretiniz saatlik ücrete çevrilir. Aylık ücret 12 ile çarpılır ve yıllık çalışma saatinize (haftalık saat × 52) bölünür; yıllık ücret ise doğrudan bu saate bölünür. Ardından fiyat saatlik ücretinize bölünür.',
          'İş günleri beş günlük çalışma haftasına göre hesaplanır; yani haftada 45 saat, günde 9 saat demektir. Örneğin saatte 250 TL kazanıyorsanız 50.000 TL’lik bir telefon 200 saatlik çalışmaya mal olur – bu da yaklaşık 22 iş günü, yani dört buçuk iş haftasına yakın bir süredir.',
          'En gerçekçi sonuç için vergiler sonrası net ücretinizi kullanın, çünkü gerçekten harcadığınız para odur. Fiyatları çalışma saati olarak düşünmek, bir şeyin gerçekten parasına değip değmediğine karar vermenin basit bir yoludur.'
        ]
      },
      faq: [
        {
          q: 'Bir şeyi almak için kaç saat çalışmam gerekir?',
          a: 'Fiyatı net saatlik ücretinize bölün. Vergiler sonrası saatte 200 TL kazanıyorsanız 6.000 TL’lik bir alışveriş 30 saatlik çalışmaya denk gelir.'
        },
        {
          q: 'Brüt ücreti mi yoksa net ücreti mi kullanmalıyım?',
          a: 'Vergiler sonrası net ücret en gerçekçi sonucu verir, çünkü gerçekten harcayabileceğiniz para odur. Brüt ücretle hesaplarsanız her şey olduğundan ucuz görünür.'
        },
        {
          q: 'Aylık maaşı saatlik ücrete nasıl çeviririm?',
          a: 'Aylık maaşı 12 ile çarpın ve yıllık çalışma saatinize bölün. Haftada 45 saat çalışıyorsanız bu yılda 2.340 saat eder; yani ayda net 45.000 TL, saatte yaklaşık 231 TL demektir. Ücret türü olarak Aylık’ı seçtiğinizde hesaplama aracı bunu sizin yerinize yapar.'
        }
      ]
    },

    costperuse: {
      name: 'Kullanım başına maliyet',
      heading: 'Kullanım başına maliyet hesaplama',
      title: 'Kullanım başına maliyet hesaplama – parasına değer mi?',
      description: 'Bir alışverişin her kullanımda size gerçekte kaça mal olduğunu hesaplayın: fiyattan ikinci el değeri düşülür, kalan tutar ne sıklıkla ve ne kadar süre kullandığınıza bölünür.',
      card: 'Bir fiyatı her kullanıma bölün ve parasına değip değmediğini görün.',
      tag: 'Alışveriş',
      lead: 'Bir fiyat girin, ürünü ne sıklıkla ve ne kadar süre kullanacağınızı belirtin; her kullanımın gerçekte kaça mal olduğunu görün.',
      price: {
        label: 'Fiyat',
        unit: 'TL',
        value: '20000',
        step: '1000',
        decrease: 'Fiyatı azalt',
        increase: 'Fiyatı artır'
      },
      period: {
        label: 'Kullanım sıklığı',
        week: 'Haftalık',
        month: 'Aylık',
        year: 'Yıllık'
      },
      uses: {
        label: 'Kullanım sayısı',
        unit: 'kez/hafta',
        decrease: 'Kullanım sayısını azalt',
        increase: 'Kullanım sayısını artır'
      },
      years: {
        label: 'Kullanım süresi',
        unit: 'yıl',
        chip1: '1 yıl',
        chip2: '3 yıl',
        chip3: '5 yıl',
        decrease: 'Kullanım süresini azalt',
        increase: 'Kullanım süresini artır'
      },
      resale: {
        label: 'İkinci el değeri',
        unit: 'TL, isteğe bağlı',
        hint: 'Satarken almayı beklediğiniz tutar. Hiçbir şey beklemiyorsanız 0 bırakın.',
        decrease: 'İkinci el değerini azalt',
        increase: 'İkinci el değerini artır'
      },
      resultsTitle: 'Kullanım başına maliyet',
      perUse: 'Her kullanımın maliyeti',
      totalUses: 'Toplam kullanım',
      perMonth: 'Aylık',
      perYear: 'Yıllık',
      runtime: {
        unit: {
          week: 'kez/hafta',
          month: 'kez/ay',
          year: 'kez/yıl'
        },
        note: {
          empty: 'Fiyatı, ne sıklıkla kullandığınızı ve kaç yıl kullanacağınızı girin. İkinci el değeri fiyattan düşük olmalıdır.',
          result: 'Bir yıl daha kullanırsanız kullanım başına maliyet {next} düzeyine iner.'
        }
      },
      about: {
        title: 'Kullanım başına maliyet nasıl hesaplanıyor?',
        paragraphs: [
          'Kullanım başına maliyet, fiyattan ürünü satınca geri alacağınız tutar düşüldükten sonra kalanın kullanım sayısına bölünmesiyle bulunur. Kullanım sayısı, kullanım sıklığı × kullandığınız hafta, ay ya da yıl sayısıdır. Haftada 3 kez, 3 yıl boyunca kullanılan 20.000 TL’lik bir ürün 468 kez kullanılır ve kullanım başına 42,74 TL’ye mal olur.',
          'Aylık ve yıllık maliyetler aynı tutarı ürüne sahip olduğunuz süreye yayar; böylece satın almayı kiralama, leasing ya da abonelikle karşılaştırmak kolaylaşır.',
          'Kullanım başına maliyet, çabuk eskiyen ucuz bir ürünü uzun ömürlü pahalı bir ürünle karşılaştırmanın basit bir yoludur. 50 kez giyilen 2.000 TL’lik bir ayakkabı giyim başına 40 TL’ye, 400 kez giyilen 6.000 TL’lik bir ayakkabı ise 15 TL’ye gelir.'
        ]
      },
      faq: [
        {
          q: 'Kullanım başına maliyet nasıl hesaplanır?',
          a: 'Fiyatı, ürünü kaç kez kullandığınıza bölün. Sonradan satacaksanız önce ikinci el değerini fiyattan düşün. 80 kez giyilen 4.000 TL’lik bir mont, giyim başına 50 TL’ye gelir.'
        },
        {
          q: 'İyi bir kullanım başına maliyet ne kadardır?',
          a: 'Alternatifin ne tuttuğuna bağlıdır. Kiralamak, ödünç almak ya da her seferinde ödemekle karşılaştırın: spor salonuna günlük giriş 750 TL ise aylık 2.000 TL’lik üyelik, ayda üçüncü gidişten itibaren kârlı olur.'
        },
        {
          q: 'Abonelikler ve üyelikler için de kullanılabilir mi?',
          a: 'Evet. Fiyat olarak yıllık ücreti, kullanım sıklığınızı ve süre olarak 1 yılı girin. Aylık 2.000 TL’lik bir spor salonu üyeliği için 24.000 TL’yi ve haftada kaç kez gittiğinizi girin.'
        }
      ]
    },

    coffee: {
      name: 'Kahve alışkanlığı',
      heading: 'Kahve maliyeti hesaplama',
      title: 'Kahve maliyeti hesaplama – yıllık kahve harcamanız',
      description: 'Günlük kahvenizin aylık maliyetini ve 1, 5 ve 10 yılda neye mal olduğunu görün. Fincan fiyatını ve haftada kaç kahve içtiğinizi girin – ücretsiz ve gizlilik dostu.',
      card: 'Günlük kahvenizin bir, beş ve on yılda ne tuttuğunu görün.',
      tag: 'Alışkanlık',
      lead: 'Bir fincanın fiyatını ve ne sıklıkla kahve aldığınızı girin; bu alışkanlığın yıllar içinde neye mal olduğunu görün.',
      price: {
        label: 'Fincan fiyatı',
        unit: 'TL',
        step: '10',
        value: '150',
        decrease: 'Kahve fiyatını azalt',
        increase: 'Kahve fiyatını artır'
      },
      perWeek: {
        label: 'Haftalık fincan sayısı',
        unit: 'fincan',
        chip1: 'İş günleri',
        chip2: 'Her gün',
        chip3: 'Günde iki',
        decrease: 'Haftalık fincan sayısını azalt',
        increase: 'Haftalık fincan sayısını artır'
      },
      resultsTitle: 'Toplamda ne tutuyor',
      in10Years: '10 yılda',
      perMonth: 'Aylık',
      year1: '1 yıl',
      year5: '5 yıl',
      receiptTitle: 'Kahve fişi',
      receiptCount: 'Fincan',
      runtime: {
        note: {
          empty: 'Toplamları görmek için bir fiyat ve haftada kaç fincan içtiğinizi girin.',
          result: 'Bu, yılda tanesi {price} olan yaklaşık {cups} fincan kahve demek.'
        },
        receiptItem: 'Kahve'
      },
      about: {
        title: 'Kahve maliyeti nasıl hesaplanıyor?',
        paragraphs: [
          'Yıllık maliyet, fincan fiyatı × haftalık fincan sayısı × 52 hafta olarak hesaplanır. Aylık maliyet yıllık maliyetin 12’ye bölünmesiyle bulunur; 5 ve 10 yıllık toplamlar ise enflasyon ya da zam hesaba katılmadan yıllık maliyetin katları olarak hesaplanır.',
          'Her iş günü alınan 150 TL’lik bir kahve yılda 39.000 TL, on yılda 390.000 TL eder. Bu rakam sizi şaşırttıysa kahveyi evde demlemek ya da yanınızda termos taşımak masrafı azaltmanın kolay yollarıdır.',
          'Hesaplama aracı her türlü küçük ve düzenli harcama için kullanılabilir: bir enerji içeceği, öğle arasında bir tost ya da bir şişe su. Fiyatı ve haftada kaç tane aldığınızı girin.'
        ]
      },
      faq: [
        {
          q: 'Günde bir kahve yılda ne kadar tutar?',
          a: 'Haftanın yedi günü günde bir fincan, yılda 364 fincan eder. Fincanı 100 TL’den bu, yılda 36.400 TL ve on yılda 364.000 TL demektir.'
        },
        {
          q: 'Evde kahve yapmak daha mı ucuz?',
          a: 'Genellikle çok daha ucuz. Evde demlenen bir fincan kahve çoğu zaman 20 TL’yi bulmazken kafede bunun kat kat fazlasını ödersiniz. Karşılaştırmak için evde fincan başına maliyetinizi girin.'
        },
        {
          q: 'Hesaplama enflasyonu hesaba katıyor mu?',
          a: 'Hayır. Hesaplamalar fiyatın aynı kaldığını varsayar, yani alışkanlığın bugünkü fiyatlarla maliyetini gösterir. Fiyatlar arttıkça uzun vadeli gerçek maliyet daha yüksek olur.'
        },
        {
          q: 'Bu parayı yatırsaydım ne olurdu?',
          a: '“Harcamak yerine yatırım yapsaydınız” kutusu, parayı harcamak yerine her ay yatırıma yönlendirseydiniz ne kadar büyüyeceğini gösterir; hesap, yıllık %4 getiri ve aylık bileşik getiriyle yapılır. Her iş günü alınan 150 TL’lik bir kahve ayda 3.250 TL eder ve bu para 10 yılda yaklaşık 476.800 TL’ye ulaşır – bunun 390.000 TL’si sizin paranız, gerisi getiridir. Vergiler, masraflar ve enflasyon hesaba katılmaz. Bu bir örnektir, yatırım tavsiyesi değildir.'
        }
      ]
    },

    smoking: {
      name: 'Sigara maliyeti',
      heading: 'Sigara maliyeti hesaplama',
      title: 'Sigara maliyeti hesaplama – yıllık sigara harcamanız',
      description: 'Sigaranın size ayda ve 1, 5 ve 10 yılda kaça mal olduğunu ve bırakırsanız ne kadar tasarruf edeceğinizi öğrenin. Paket fiyatını ve günde kaç sigara içtiğinizi girin.',
      card: 'Her ay ve yıllar içinde ne kadar paranın duman olup gittiğini görün.',
      tag: 'Alışkanlık',
      lead: 'Bir paketin fiyatını ve ne kadar içtiğinizi girin; yıllar içinde ne kadar paranın duman olup gittiğini görün.',
      packPrice: {
        label: 'Paket fiyatı',
        unit: 'TL',
        step: '5',
        value: '110',
        decrease: 'Paket fiyatını azalt',
        increase: 'Paket fiyatını artır'
      },
      perDay: {
        label: 'Günlük sigara sayısı',
        unit: 'dal',
        chip1: 'Günde 5',
        chip2: 'Günde 10',
        chip3: 'Günde 20',
        decrease: 'Günlük sigara sayısını azalt',
        increase: 'Günlük sigara sayısını artır'
      },
      perPack: {
        label: 'Paketteki sigara sayısı',
        unit: 'dal/paket',
        value: '20',
        decrease: 'Paketteki sigara sayısını azalt',
        increase: 'Paketteki sigara sayısını artır'
      },
      resultsTitle: 'Duman olup giden',
      in10Years: '10 yılda',
      perMonth: 'Aylık',
      year1: '1 yıl',
      year5: '5 yıl',
      runtime: {
        note: {
          empty: 'Toplamları görmek için paket fiyatını, günde kaç sigara içtiğinizi ve paketteki sigara sayısını girin.',
          result: 'Bu, yılda tanesi {price} olan yaklaşık {cigarettes} dal sigara ({packs} paket) demek.'
        }
      },
      about: {
        title: 'Sigaranın maliyeti nasıl hesaplanıyor?',
        paragraphs: [
          'Bir dal sigaranın fiyatı, paket fiyatının paketteki sigara sayısına bölünmesiyle bulunur. Bu tutar, günde içilen sigara sayısıyla ve yıllık maliyet için 365 günle çarpılır. Aylık maliyet bunun on ikide biridir; 5 ve 10 yıllık toplamlar bugünkü fiyatlarla hesaplanır.',
          'Paketi 110 TL olan sigaradan günde yarım paket içmek yılda yaklaşık 20.000 TL, on yılda ise 200.000 TL’den fazla eder. Toplamı görmek güçlü bir motivasyon olabilir: aynı para bir tatile, birikime ya da borç kapatmaya gidebilir.',
          'Hesaplama aracı yalnızca sigaranın fiyatını sayar. Sağlık harcamaları, daha yüksek sigorta primleri ve hastalık izinleri bunun üstüne eklenir. Bırakmak için destek isterseniz ALO 171 Sigara Bırakma Danışma Hattını arayabilir ya da aile hekiminize başvurabilirsiniz.'
        ]
      },
      faq: [
        {
          q: 'Günde bir paket yılda ne kadar tutar?',
          a: 'Günde bir paket, yılda 365 paket eder. Paketi 110 TL’den bu, yılda 40.150 TL ve on yılda 401.500 TL demektir.'
        },
        {
          q: 'Sigarayı bırakırsam ne kadar tasarruf ederim?',
          a: 'Bu hesaplama aracının gösterdiği tutarın tamamını. Bugün ne kadar içtiğinizi girin: aylık ve yıllık toplamlar, bıraktığınızda cebinizde kalacak paradır.'
        },
        {
          q: 'Sarma tütün için de kullanılabilir mi?',
          a: 'Evet. Paket fiyatı olarak bir paket tütünün fiyatını, paketteki sigara sayısı olarak ondan kaç sigara sardığınızı ve günde kaç tane içtiğinizi girin.'
        },
        {
          q: 'Bu parayı yatırsaydım ne olurdu?',
          a: '“Harcamak yerine yatırım yapsaydınız” kutusu, sigaraya vermek yerine parayı her ay yatırıma yönlendirseydiniz ne kadar büyüyeceğini gösterir; hesap, yıllık %4 getiri ve aylık bileşik getiriyle yapılır. Paketi 110 TL olan sigaradan günde yarım paket içmek ayda yaklaşık 1.673 TL eder ve bu para 10 yılda yaklaşık 245.400 TL’ye ulaşır – bunun 200.750 TL’si sizin paranız, gerisi getiridir. Vergiler, masraflar ve enflasyon hesaba katılmaz. Bu bir örnektir, yatırım tavsiyesi değildir.'
        }
      ]
    },

    alcohol: {
      name: 'Alkol maliyeti',
      heading: 'Alkol maliyeti hesaplama',
      title: 'Alkol maliyeti hesaplama – içkiye yılda ne harcıyorsunuz?',
      description: 'Bira, şarap ve diğer içkilerin size ayda ve 1, 5 ve 10 yılda kaça mal olduğunu ve aynı parayı yatırıma yönlendirseydiniz ne kadar büyüyeceğini görün.',
      card: 'Haftalık içkilerinizin bir, beş ve on yılda ne tuttuğunu görün.',
      tag: 'Alışkanlık',
      lead: 'Bir içkinin fiyatını ve haftada kaç tane içtiğinizi girin; bunun yıllar içinde ne tuttuğunu görün.',
      price: {
        label: 'İçki başına fiyat',
        unit: 'TL',
        step: '10',
        value: '250',
        hint: 'Hem evde hem dışarıda mı içiyorsunuz? Ortalama bir fiyat girin.',
        decrease: 'İçki fiyatını azalt',
        increase: 'İçki fiyatını artır'
      },
      perWeek: {
        label: 'Haftalık içki sayısı',
        unit: 'içki',
        chip1: 'Haftada 3',
        chip2: 'Haftada 7',
        chip3: 'Haftada 14',
        decrease: 'Haftalık içki sayısını azalt',
        increase: 'Haftalık içki sayısını artır'
      },
      resultsTitle: 'Toplamda ne tutuyor',
      in10Years: '10 yılda',
      perMonth: 'Aylık',
      year1: '1 yıl',
      year5: '5 yıl',
      runtime: {
        note: {
          empty: 'Toplamları görmek için bir fiyat ve haftada kaç içki içtiğinizi girin.',
          result: 'Bu, yılda tanesi {price} olan yaklaşık {drinks} içki demek.'
        }
      },
      about: {
        title: 'Alkol maliyeti nasıl hesaplanıyor?',
        paragraphs: [
          'Yıllık maliyet, içki başına fiyat × haftalık içki sayısı × 52 hafta olarak hesaplanır. Aylık maliyet bunun on ikide biridir; 5 ve 10 yıllık toplamlar enflasyon hesaba katılmadan bugünkü fiyatlarla hesaplanır.',
          'Tanesi 250 TL olan biradan haftada altı tane içmek yılda 78.000 TL, on yılda 780.000 TL eder. Hem barda hem evde içiyorsanız ortalama bir fiyat girin ya da ikisini ayrı ayrı hesaplayıp toplayın.',
          '“Harcamak yerine yatırım yapsaydınız” kutusu, aynı parayı her ay yatırıma yönlendirseydiniz yıllık %4 getiriyle 10 yılda ne kadar büyüyeceğini gösterir. Hesaplama aracı yalnızca içkilerin fiyatını sayar; sağlık üzerindeki etkiler bunun üstüne eklenir. Azaltmak isterseniz aile hekiminiz ya da Yeşilay Danışmanlık Merkezi (YEDAM) yardımcı olabilir.'
        ]
      },
      faq: [
        {
          q: 'Bir yılda alkole ne kadar harcıyorum?',
          a: 'Bir içkinin fiyatını haftada içtiğiniz içki sayısıyla ve 52 ile çarpın. Tanesi 250 TL’den haftada altı içki, yılda 78.000 TL eder.'
        },
        {
          q: 'Daha az içersem ne kadar tasarruf ederim?',
          a: 'İnmek istediğiniz içki sayısını girin ve karşılaştırın. Tanesi 250 TL’den haftada 6 içkiden 3 içkiye inmek yılda 39.000 TL, on yılda 390.000 TL tasarruf sağlar.'
        },
        {
          q: 'Bu parayı yatırsaydım ne olurdu?',
          a: '“Harcamak yerine yatırım yapsaydınız” kutusu, parayı harcamak yerine her ay yatırıma yönlendirseydiniz 10 yıl sonra ne kadarınız olacağını gösterir; hesap, yıllık %4 getiri ve aylık bileşik getiriyle yapılır. Tanesi 250 TL’den haftada altı içki ayda 6.500 TL eder ve bu para yaklaşık 953.500 TL’ye ulaşır – bunun 780.000 TL’si sizin paranız, gerisi getiridir. Vergiler, masraflar ve enflasyon hesaba katılmaz. Bu bir örnektir, yatırım tavsiyesi değildir.'
        }
      ]
    },

    gambling: {
      name: 'Piyango ve bahis maliyeti',
      heading: 'Piyango ve bahis maliyeti hesaplama',
      title: 'Piyango ve bahis maliyeti hesaplama – kumarın bedeli',
      description: 'Piyango biletlerinin ve bahislerin size ayda ve 10 yılda kaça mal olduğunu, ortalama ne kadar kaybettiğinizi ve aynı parayı yatırıma yönlendirseydiniz ne kadar büyüyeceğini görün.',
      card: 'Piyango biletlerinin ve bahislerin ne tuttuğunu ve ortalama ne kadar kaybettiğinizi görün.',
      tag: 'Alışkanlık',
      lead: 'Oyun başına harcadığınız tutarı ve ne sıklıkla oynadığınızı girin; piyango biletlerinin ve bahislerin yıllar içinde neye mal olduğunu ve bunun ortalama ne kadarının ikramiye olarak geri döndüğünü görün.',
      stake: {
        label: 'Oyun başına tutar',
        unit: 'TL',
        step: '50',
        value: '500',
        decrease: 'Oyun başına tutarı azalt',
        increase: 'Oyun başına tutarı artır'
      },
      perWeek: {
        label: 'Haftalık oyun sayısı',
        unit: 'oyun',
        chip1: 'Haftada bir',
        chip2: 'Haftada iki',
        chip3: 'Her gün',
        decrease: 'Haftalık oyun sayısını azalt',
        increase: 'Haftalık oyun sayısını artır'
      },
      payout: {
        label: 'Geri ödeme oranı',
        unit: '% geri ödeme',
        chip1: 'Piyango',
        chip2: 'Spor bahisleri',
        chip3: 'Kumarhane',
        hint: 'Oynanan tüm tutarların ikramiye olarak geri ödenen payı. Piyangolar genellikle yaklaşık yarısını, spor bahisleri ve kumarhane oyunları %90–97’sini geri öder.',
        decrease: 'Geri ödeme oranını azalt',
        increase: 'Geri ödeme oranını artır'
      },
      resultsTitle: 'Neye mal oluyor',
      in10Years: '10 yılda oynanan tutar',
      perMonth: 'Aylık',
      perYear: 'Yıllık',
      lossPerYear: 'Yıllık ortalama kayıp',
      runtime: {
        note: {
          empty: 'Oyun başına tutarı, haftada kaç kez oynadığınızı ve geri ödeme oranını (0–100) girin.',
          result: 'Yılda ortalama yaklaşık {back} ikramiye olarak geri döner; yani yılda yaklaşık {loss}, 10 yılda ise {loss10} kaybedersiniz.'
        }
      },
      about: {
        title: 'Piyango ve bahis maliyeti nasıl hesaplanıyor?',
        paragraphs: [
          'Yıllık maliyet, oyun başına tutar × haftalık oyun sayısı × 52 hafta olarak hesaplanır. Aylık maliyet bunun on ikide biridir; 10 yıllık toplam bugünkü tutarlarla hesaplanır.',
          'Geri ödeme oranı, oynanan tüm tutarların ikramiye olarak geri ödenen payıdır. %50 geri ödeme oranıyla haftada iki kez 500 TL oynamak yılda 52.000 TL eder; bunun ortalama 26.000 TL’si ikramiye olarak geri döner, yani yıllık ortalama kayıp 26.000 TL’dir. Tek bir oyuncu büyük kazanabilir ya da oynadığı paranın tamamını kaybedebilir, ancak oyun sayısı arttıkça sonuç ortalamaya yaklaşır.',
          '“Harcamak yerine yatırım yapsaydınız” kutusu, oynanan parayı her ay yatırıma yönlendirseydiniz yıllık %4 getiriyle 10 yılda ne kadar büyüyeceğini gösterir. Kumarı kontrol etmekte zorlandığınızı hissediyorsanız aile hekiminiz ya da Yeşilay Danışmanlık Merkezi (YEDAM) yardımcı olabilir.'
        ]
      },
      faq: [
        {
          q: 'Bir yılda piyangoya ne kadar harcıyorum?',
          a: 'Oyun başına tutarı haftalık oyun sayısıyla ve 52 ile çarpın. Haftada iki kez 500 TL, yılda 52.000 TL, on yılda 520.000 TL eder.'
        },
        {
          q: 'Geri ödeme oranı nedir?',
          a: 'Oynanan tüm tutarların oyunculara ikramiye olarak geri ödenen payıdır. Piyangolar genellikle oynanan paranın yaklaşık yarısını, spor bahisleri ve kumarhane oyunları ise %90–97’sini geri öder. Geri kalanı işletmeciye kalır – ve bu, oyuncuların ortalama olarak kaybettiği tutardır.'
        },
        {
          q: 'Bu parayı yatırsaydım ne olurdu?',
          a: '“Harcamak yerine yatırım yapsaydınız” kutusu, oynadığınız parayı her ay yatırıma yönlendirseydiniz 10 yıl sonra ne kadarınız olacağını gösterir; hesap, yıllık %4 getiri ve aylık bileşik getiriyle yapılır. Haftada iki kez 500 TL ayda yaklaşık 4.333 TL eder ve bu para yaklaşık 635.700 TL’ye ulaşır – bunun 520.000 TL’si sizin paranız, gerisi getiridir. Vergiler, masraflar ve enflasyon hesaba katılmaz. Bu bir örnektir, yatırım tavsiyesi değildir.'
        }
      ]
    },

    subscriptions: {
      name: 'Abonelikler',
      heading: 'Abonelik maliyeti hesaplama',
      title: 'Abonelik hesaplama – aylık ve yıllık toplam abonelik gideri',
      description: 'Dizi platformu, spor salonu, mobil hat ve diğer tüm aboneliklerinizi toplayın. Aylık, yıllık ve 10 yıllık toplamı görün, en çok hangi aboneliğe para ödediğinizi öğrenin.',
      card: 'Dijital platformları, spor salonunu ve diğer tüm düzenli ödemeleri tek yerde toplayın.',
      tag: 'Bütçe',
      lead: 'Düzenli olarak ödediğiniz her şeyi listeleyin ve toplamda ne tuttuğunu görün. Aylık, yıllık ve haftalık ödemelerin hepsi desteklenir.',
      listTitle: 'Abonelikleriniz',
      empty: 'Henüz abonelik yok. Aşağıdan bir tane ekleyin ya da hızlı eklemeyi kullanın.',
      add: 'Abonelik ekle',
      quickAdd: 'Hızlı ekle',
      quick: {
        1: { name: 'Dizi ve film platformu', price: '249.99' },
        2: { name: 'Müzik platformu', price: '99' },
        3: { name: 'Spor salonu', price: '2000' },
        4: { name: 'Bulut depolama', price: '129.99' },
        5: { name: 'Mobil hat', price: '600' },
        6: { name: 'Alışveriş üyeliği', price: '99.99' }
      },
      note: 'Listeniz sayfa adresinde saklanır; yer imlerine ekleyebilir ya da paylaşabilirsiniz. Hiçbir yere gönderilmez.',
      row: {
        name: 'Ad',
        nameLabel: 'Abonelik adı',
        priceLabel: 'TL cinsinden fiyat',
        cycleLabel: 'Ödeme dönemi',
        monthly: '/ ay',
        yearly: '/ yıl',
        weekly: '/ hafta'
      },
      resultsTitle: 'Abonelikler toplamı',
      perYear: 'Yıllık',
      perMonth: 'Aylık',
      perDay: 'Günlük',
      in10Years: '10 yılda',
      breakdownLabel: 'Abonelik başına yıllık maliyet',
      copySummary: 'Özeti kopyala',
      runtime: {
        untitled: 'Adsız',
        remove: '{name} aboneliğini kaldır',
        removeUnnamed: 'Aboneliği kaldır',
        breakdown: '{cost} / yıl · %{percent}',
        cycle: { monthly: 'ay', yearly: 'yıl', weekly: 'hafta' },
        note: {
          empty: 'Toplamları görmek için fiyatıyla birlikte bir abonelik ekleyin.',
          single: '{name} için yılda {cost} ödüyorsunuz.',
          biggest: 'En büyük gideriniz yılda {cost} ile {name}; toplamdaki payı %{percent}.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Toplam: ayda {month}, yılda {year}'
        }
      },
      about: {
        title: 'Abonelik toplamı nasıl hesaplanıyor?',
        paragraphs: [
          'Her abonelik yıllık maliyete çevrilir: aylık fiyatlar 12 ile, haftalık fiyatlar 52 ile çarpılır, yıllık fiyatlar ise olduğu gibi kullanılır. Yıllık toplam, aylık maliyet için 12’ye, günlük maliyet için 365’e bölünür.',
          'Döküm, aboneliklerinizi en pahalıdan en ucuza doğru sıralar ve her birinin toplamdaki payını gösterir; böylece neyi iptal edebileceğinizi ya da hangisinde daha ucuz bir pakete geçebileceğinizi kolayca görürsünüz.',
          'Listeniz sunucuda değil, sayfa adresinde saklanır. Listenize daha sonra dönmek için sayfayı yer imlerine ekleyin ya da ailenizle ortak abonelikleri birlikte gözden geçirmek için bağlantıyı paylaşın.'
        ]
      },
      faq: [
        {
          q: 'Tüm aboneliklerimi nasıl bulurum?',
          a: 'Son birkaç ayın banka ve kredi kartı ekstrelerini gözden geçirip düzenli tekrarlanan ödemeleri arayın. App Store ve Google Play’deki abonelik ayarlarına ve cep telefonu faturanızdaki ek servis ücretlerine de göz atın.'
        },
        {
          q: 'Yıllık paket aylık paketten daha mı ucuz?',
          a: 'Genellikle %15–20 daha ucuzdur, ama bu yalnızca hizmeti zaten bütün yıl kullanacaksanız avantajlıdır. Yıllık maliyetlerini karşılaştırmak için iki seçeneği de listeye ekleyin.'
        },
        {
          q: 'Listem kaydediliyor mu?',
          a: 'Listeniz yalnızca sayfa adresinde tutulur. Saklamak için bağlantıyı yer imlerine ekleyin ya da paylaşın; sunucuda veya çerezlerde hiçbir şey saklanmaz.'
        },
        {
          q: 'Bu parayı yatırsaydım ne olurdu?',
          a: '“Harcamak yerine yatırım yapsaydınız” kutusu, aboneliklere giden tutarı her ay yatırıma yönlendirseydiniz ne kadar büyüyeceğini gösterir; hesap, yıllık %4 getiri ve aylık bileşik getiriyle yapılır. Ayda 2.000 TL, 10 yılda yaklaşık 293.400 TL’ye ulaşır – bunun 240.000 TL’si sizin paranız, gerisi getiridir. Vergiler, masraflar ve enflasyon hesaba katılmaz. Bu bir örnektir, yatırım tavsiyesi değildir.'
        }
      ]
    },

    electricity: {
      name: 'Elektrik maliyeti',
      heading: 'Elektrik tüketimi hesaplama',
      title: 'Elektrik tüketimi hesaplama – cihaz ne kadar elektrik yakar?',
      description: 'Bir cihazın günlük, aylık ve yıllık elektrik maliyetini gücüne, kullanım süresine ve kWh fiyatına göre hesaplayın. Ücretsiz elektrik tüketimi hesaplama aracı.',
      card: 'Bir cihazı açık tutmanın günlük, aylık ve yıllık maliyetini görün.',
      tag: 'Ev',
      lead: 'Cihazın gücünü, ne kadar çalıştığını ve elektriğe ne ödediğinizi girin; onu açık tutmanın gerçek maliyetini görün.',
      power: {
        label: 'Güç',
        unit: 'vat',
        chip1: 'LED ampul 9 W',
        chip2: 'Dizüstü 60 W',
        chip3: 'Televizyon 100 W',
        chip4: 'Oyun bilgisayarı 400 W',
        chip5: 'Isıtıcı 1500 W',
        decrease: 'Gücü azalt',
        increase: 'Gücü artır'
      },
      hours: {
        label: 'Günlük kullanım',
        unit: 'saat',
        decrease: 'Günlük kullanım saatini azalt',
        increase: 'Günlük kullanım saatini artır'
      },
      days: {
        label: 'Haftalık kullanım',
        unit: 'gün',
        decrease: 'Haftalık kullanım gününü azalt',
        increase: 'Haftalık kullanım gününü artır'
      },
      kwhPrice: {
        label: 'Elektrik birim fiyatı',
        unit: 'TL/kWh',
        value: '3',
        step: '0.1',
        divisor: '1',
        hint: 'En doğru sonuç için dağıtım bedelini ve vergileri de dahil edin.',
        decrease: 'Elektrik fiyatını azalt',
        increase: 'Elektrik fiyatını artır'
      },
      resultsTitle: 'Kullanım maliyeti',
      perYear: 'Yıllık',
      perDayOfUse: 'Kullanım günü başına',
      perMonth: 'Aylık',
      energyPerYear: 'Yıllık enerji',
      runtime: {
        note: {
          empty: 'Gücü, günlük kullanım saatini (en fazla 24), haftada kaç gün kullanıldığını (en fazla 7) ve elektrik fiyatınızı girin.',
          result: 'Çalıştığı her gün yaklaşık {day}, yılda ise {year} civarında elektrik tüketir.'
        }
      },
      about: {
        title: 'Elektrik maliyeti nasıl hesaplanıyor?',
        paragraphs: [
          'Kilovatsaat (kWh) cinsinden enerji tüketimi, vat cinsinden güç × kullanım saati ÷ 1.000 formülüyle bulunur. Günde 4 saat açık kalan 100 vatlık bir televizyon günde 0,4 kWh tüketir. Bunu elektriğin kWh fiyatıyla çarptığınızda kullanım günü başına maliyeti bulursunuz.',
          'Yıllık maliyet, cihazın haftada kaç gün çalıştığını hesaba katar ve bunu yılın 365 gününe yayar. Aylık maliyet, yıllık maliyetin on ikide biridir.',
          'Cihazın gücünü üzerindeki etikette ya da kullanım kılavuzunda bulabilirsiniz. Birçok cihaz çoğu zaman azami gücünden daha az çeker, bu yüzden sonuç bir üst sınır tahminidir. En doğru fiyat için yalnızca enerji bedelini değil, dağıtım bedelini ve vergileri de dahil edin.'
        ]
      },
      faq: [
        {
          q: 'Bir cihazın elektrik maliyetini nasıl hesaplarım?',
          a: 'Kilovat cinsinden gücü kullanım saatiyle ve kWh fiyatıyla çarpın. Günde 3 saat çalışan 1.500 vatlık bir ısıtıcı: 1,5 kW × 3 saat × 3 TL/kWh = günde 13,50 TL.'
        },
        {
          q: 'Bir cihaz kaç kWh elektrik tüketir?',
          a: 'Vat değerini 1.000’e bölüp çalıştığı saatle çarpın. Günde 8 saat kullanılan 60 vatlık bir dizüstü bilgisayar günde 0,48 kWh tüketir – her gün kullanılırsa yılda yaklaşık 175 kWh.'
        },
        {
          q: 'Hangi elektrik fiyatını kullanmalıyım?',
          a: 'Elektrik faturanızdaki kWh başına toplam fiyatı kullanın: enerji bedeli, dağıtım bedeli ve vergiler dahil. Fatura tutarını tüketilen kWh’e bölmek iyi bir ortalama verir.'
        },
        {
          q: 'Bekleme modu elektrik harcar mı?',
          a: 'Evet, birçok cihaz bekleme modunda birkaç vat çeker. Bekleme gücünü ve günde 24 saati girerek bunun yıllık maliyetini görebilirsiniz.'
        }
      ]
    },

    trip: {
      name: 'Yol masrafı',
      heading: 'Yakıt maliyeti hesaplama',
      title: 'Yakıt maliyeti hesaplama – yolculuk başına benzin masrafı',
      description: 'Bir yolculuğun ya da her gün işe gidip gelmenin yakıt maliyetini hesaplayın ve yolcular arasında paylaştırın. Kilometre ve litreyle ya da mil ve galonla çalışır.',
      card: 'Bir yolculuğun ya da işe gidiş gelişin yakıt maliyetini hesaplayın ve masrafı yolcularla bölüşün.',
      tag: 'Yolculuk',
      lead: 'Tek bir yolculuğun ya da her gün işe gidip gelmenin yakıt maliyetini hesaplayın ve araçtaki herkes arasında paylaştırın.',
      unit: {
        label: 'Birimler',
        metric: 'Kilometre ve litre',
        us: 'Mil ve galon'
      },
      distance: {
        label: 'Mesafe',
        unit: 'km, tek yön',
        decrease: 'Mesafeyi azalt',
        increase: 'Mesafeyi artır'
      },
      direction: {
        label: 'Yolculuk',
        one: 'Tek yön',
        round: 'Gidiş-dönüş'
      },
      consumption: {
        label: 'Yakıt tüketimi',
        unit: 'l/100 km',
        hint: 'Elektrikli araç mı kullanıyorsunuz? kWh/100 km değerini ve kWh fiyatını girin.',
        decrease: 'Yakıt tüketimini azalt',
        increase: 'Yakıt tüketimini artır'
      },
      fuelPrice: {
        label: 'Yakıt fiyatı',
        unit: 'TL/litre',
        value: '55',
        step: '0.5',
        usStep: '2',
        decrease: 'Yakıt fiyatını azalt',
        increase: 'Yakıt fiyatını artır'
      },
      people: {
        label: 'Masrafı paylaşanlar',
        unit: 'kişi',
        decrease: 'Kişi sayısını azalt',
        increase: 'Kişi sayısını artır'
      },
      tripsPerWeek: {
        label: 'Haftalık yolculuk sayısı',
        unit: 'aylık ve yıllık toplamlar için',
        decrease: 'Haftalık yolculuk sayısını azalt',
        increase: 'Haftalık yolculuk sayısını artır'
      },
      resultsTitle: 'Yakıt maliyeti',
      perPerson: 'Kişi başı',
      perMonth: 'Aylık',
      perYear: 'Yıllık',
      runtime: {
        direction: { one: 'Tek yön', round: 'Gidiş-dönüş' },
        unit: {
          metric: {
            distance: 'km, tek yön',
            consumption: 'l/100 km',
            price: 'TL/litre',
            perDistance: 'km',
            fuel: 'litre'
          },
          us: {
            distance: 'mil, tek yön',
            consumption: 'mpg',
            price: 'TL/galon',
            perDistance: 'mil',
            fuel: 'galon'
          }
        },
        note: {
          empty: 'Maliyeti görmek için mesafeyi, yakıt tüketimini ve yakıt fiyatını girin.',
          result: 'Yolculuk başına {fuel} yakıt harcanır; {distance} başına yaklaşık {price}.'
        }
      },
      about: {
        title: 'Yol masrafı nasıl hesaplanıyor?',
        paragraphs: [
          'Kilometre ve litreyle hesaplarken harcanan yakıt, mesafe × tüketim ÷ 100 formülüyle bulunur. İş yeriniz tek yön 25 km uzaktaysa (günde 50 km) ve aracınız 100 km’de 6,5 litre yakıyorsa günde 3,25 litre yakıt harcarsınız. Yolculuğun maliyeti için bunu litre fiyatıyla çarpın, masrafı paylaştırmak için de kişi sayısına bölün.',
          'Mil ve galonla hesaplarken harcanan yakıt, mesafenin aracın galon başına mil değerine (mpg) bölünmesiyle bulunur. Birimi değiştirdiğinizde girdiğiniz değerler dönüştürülür; böylece iki sistemdeki rakamları karşılaştırabilirsiniz.',
          'Aylık ve yıllık toplamlar haftalık yolculuk sayısına göre hesaplanır – haftada 5 gidiş-dönüş, işe gidip gelmek için tipik bir düzendir. Elektrikli bir araç için tüketimi kWh/100 km olarak, fiyatı da kWh başına girin.'
        ]
      },
      faq: [
        {
          q: 'Bir yolculuğun yakıt masrafını nasıl hesaplarım?',
          a: 'Mesafeyi tüketimle ve yakıt fiyatıyla çarpıp 100’e bölün. 100 km’de 6 litre yakan bir araçla, benzinin litresi 55 TL iken 200 km’lik yol: 200 × 6 ÷ 100 × 55 TL = 660 TL.'
        },
        {
          q: 'Yakıt masrafını yolcular arasında nasıl paylaştırırım?',
          a: 'Masrafı paylaşan kişi sayısını girin. Hesaplama aracı yolculuğun maliyetini sürücü dahil herkese eşit olarak böler.'
        },
        {
          q: 'Aracın yıpranması, otopark ve köprü-otoyol ücretleri dahil mi?',
          a: 'Hayır, yalnızca yakıt hesaplanır. Yıpranma, sigorta, otopark ve köprü-otoyol geçiş ücretleri bunun üstüne eklenir, yani araç kullanmanın toplam maliyeti daha yüksektir.'
        }
      ]
    }
  }
};
