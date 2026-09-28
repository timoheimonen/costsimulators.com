// Indonesian (Bahasa Indonesia) texts for costsimulators.com. Only the site
// generator (scripts/build-site.js) reads this file. It has exactly the same
// keys as site/locales/en/strings.js; money values are typical prices in
// Indonesian rupiah (IDR), shown without decimals.

module.exports = {
  meta: {
    name: 'Bahasa Indonesia',
    locale: 'id-ID',
    currency: 'IDR',
    ogLocale: 'id_ID'
  },

  money: {
    symbol: 'Rp',
    zero: 'Rp 0',
    placeholder: '0',
    decimals: '0'
  },

  common: {
    skip: 'Langsung ke konten',
    home: 'Beranda',
    toggleTheme: 'Ganti tema',
    themeToLight: 'Beralih ke tema terang',
    themeToDark: 'Beralih ke tema gelap',
    language: 'Bahasa',
    allTools: 'Semua kalkulator',
    share: 'Bagikan',
    settings: 'Pengaturan',
    quickPicks: 'Pilihan cepat',
    faqTitle: 'Pertanyaan yang sering diajukan',
    relatedTools: 'Kalkulator lainnya',
    imageAlt: 'costsimulators.com – kalkulator biaya gratis untuk urusan uang sehari-hari'
  },

  footer: {
    privacy: 'Berjalan sepenuhnya di browser Anda. Tanpa cookie, tanpa pelacakan.',
    about: 'Tentang',
    contact: 'Kontak',
    privacyPolicy: 'Privasi',
    terms: 'Ketentuan'
  },

  runtime: {
    share: {
      linkCopied: 'Tautan disalin',
      copyFailed: 'Gagal menyalin',
      copied: 'Tersalin!',
      calculatedWith: 'Dihitung dengan costsimulators.com'
    },
    workTime: {
      minutes: '{m} menit',
      hours: '{h} jam',
      hoursMinutes: '{h} jam {m} menit'
    }
  },

  home: {
    title: 'Kalkulator Biaya Gratis untuk Kebutuhan Sehari-hari',
    description: 'Kalkulator gratis dan privat yang menunjukkan biaya sebenarnya: rapat, jam kerja, kopi, rokok, langganan, listrik, dan bensin. Tanpa daftar, langsung di browser Anda.',
    eyebrow: 'Gratis · Privat · Instan',
    heading: 'Alat kecil untuk urusan <span class="accent-text">uang</span> sehari-hari.',
    lead: 'Kalkulator cepat yang menunjukkan berapa biaya sebenarnya. Tanpa daftar, tanpa pelacakan – semuanya berjalan langsung di browser Anda.',
    toolsTitle: 'Pilih kalkulator',
    toolCount: '{count} kalkulator',
    suggestTitle: 'Punya ide?',
    suggestText: 'Usulkan kalkulator baru di GitHub.',
    whyTitle: 'Biaya kecil lama-lama jadi besar',
    whyText1: 'Satu rapat, segelas kopi dalam perjalanan ke kantor, atau satu layanan streaming lagi jarang terasa mahal kalau dilihat sendiri-sendiri. Tapi jika dijumlahkan selama sebulan, setahun, atau sepuluh tahun, angkanya jadi sangat berbeda.',
    whyText2: 'Setiap kalkulator punya satu tugas, hanya menanyakan angka yang dibutuhkan, dan langsung menampilkan hasilnya. Semua dihitung di browser Anda, jadi angka Anda tetap berada di perangkat Anda sendiri.',
    aboutLink: 'Selengkapnya tentang costsimulators.com',
    faq: [
      {
        q: 'Apakah costsimulators.com gratis?',
        a: 'Ya. Semua kalkulator sepenuhnya gratis, tanpa pendaftaran, tanpa fitur berbayar, dan tanpa iklan. Anda juga boleh memakainya untuk pekerjaan.'
      },
      {
        q: 'Apakah angka saya disimpan atau dikirim ke suatu tempat?',
        a: 'Tidak. Semua yang Anda masukkan dihitung di browser Anda dan tidak pernah dikirim ke server. Situs ini tidak memasang cookie dan tidak memakai analitik.'
      },
      {
        q: 'Bisakah saya membagikan hasil perhitungan?',
        a: 'Bisa. Pengaturan Anda tersimpan di alamat halaman. Tekan Bagikan untuk menyalin tautannya, dan siapa pun yang membukanya akan melihat perhitungan yang sama.'
      }
    ]
  },

  notFound: {
    title: 'Halaman Tidak Ditemukan',
    description: 'Halaman yang Anda cari tidak ada.',
    heading: 'Halaman ini tidak ada.',
    lead: 'Mungkin ada salah ketik di alamatnya, atau halamannya sudah dipindahkan. Semua kalkulator ada di halaman depan.'
  },

  documents: {
    about: {
      name: 'Tentang',
      title: 'Tentang Kami – Kalkulator Biaya Gratis dan Privat',
      description: 'Siapa pembuat costsimulators.com dan cara kerja kalkulatornya. Kalkulator biaya gratis dan privat untuk rapat, jam kerja, kebiasaan, langganan, listrik, dan perjalanan.'
    },
    privacy: {
      name: 'Kebijakan privasi',
      title: 'Kebijakan Privasi',
      description: 'Cara costsimulators.com menangani data Anda: perhitungan berjalan di browser Anda, tanpa pelacakan, tanpa analitik, dan tanpa akun pengguna.'
    },
    terms: {
      name: 'Ketentuan penggunaan',
      title: 'Ketentuan Penggunaan',
      description: 'Ketentuan penggunaan costsimulators.com: bebas dipakai untuk keperluan pribadi maupun komersial, disediakan apa adanya, dengan kode sumber terbuka berlisensi MIT.'
    }
  },

  tools: {
    meetings: {
      name: 'Biaya rapat',
      heading: 'Kalkulator biaya rapat',
      title: 'Kalkulator Biaya Rapat – Hitung Biaya Meeting Langsung',
      description: 'Kalkulator biaya rapat gratis dengan timer langsung. Masukkan tarif per jam dan jumlah peserta, lalu lihat berapa biaya rapat Anda detik demi detik.',
      card: 'Lihat biaya rapat terus bertambah detik demi detik selama Anda berdiskusi.',
      tag: 'Timer langsung',
      lead: 'Atur tarif per jam dan jumlah peserta, tekan Mulai, lalu lihat berapa biaya rapat seiring berjalannya waktu.',
      pulseEvery: '1000',
      rate: {
        label: 'Tarif per jam',
        unit: 'Rp per orang',
        step: '10000',
        value: '100000',
        decrease: 'Kurangi tarif per jam',
        increase: 'Tambah tarif per jam'
      },
      persons: {
        label: 'Peserta',
        unit: 'orang',
        decrease: 'Kurangi peserta',
        increase: 'Tambah peserta'
      },
      perMinute: 'Per menit',
      perHour: 'Per jam',
      note: 'Anda bisa mengubah nilai saat timer berjalan. Peserta yang bergabung atau keluar dihitung mulai saat itu.',
      total: 'Total biaya',
      elapsed: 'Waktu berjalan',
      reset: 'Atur ulang',
      copyReport: 'Salin laporan',
      kbdHint: 'Tekan <kbd>Spasi</kbd> untuk mulai atau jeda',
      runtime: {
        mode: { start: 'Mulai', pause: 'Jeda', resume: 'Lanjutkan' },
        status: { ready: 'Siap', live: 'Berjalan', paused: 'Dijeda' },
        announce: {
          invalid: 'Masukkan tarif per jam dan jumlah peserta untuk memulai.',
          started: 'Timer dimulai.',
          paused: 'Dijeda pada {cost} setelah {time}.',
          reset: 'Timer diatur ulang.'
        },
        report: {
          cost: 'Biaya rapat: {cost}',
          duration: 'Durasi: {time}',
          participants: 'Peserta: {persons} × {rate}/jam'
        }
      },
      about: {
        title: 'Cara menghitung biaya rapat',
        paragraphs: [
          'Kalkulator ini mengalikan jumlah peserta dengan tarif per jam mereka dan dengan waktu yang sudah berjalan. Rapat satu jam dengan 5 orang bertarif Rp 100.000 per jam memakan biaya Rp 500.000 – sekitar Rp 8.333 setiap menit.',
          'Sebagai tarif per jam, gunakan biaya sebenarnya satu jam kerja bagi perusahaan, bukan hanya gaji. Di atas gaji kotor, perusahaan juga membayar iuran BPJS Kesehatan dan BPJS Ketenagakerjaan (sekitar 10–12% dari gaji), THR, dan tunjangan lainnya. Jika tidak tahu tarif setiap orang, rata-rata tim sudah cukup.',
          'Timer tetap menghitung dengan benar di tab latar belakang, dan biaya yang terus berjalan ditampilkan di judul tab browser, jadi Anda bisa memantaunya sambil berbagi layar. Saat rapat selesai, jeda timer dan salin laporan singkat untuk notula rapat.'
        ]
      },
      faq: [
        {
          q: 'Bagaimana cara menghitung biaya rapat?',
          a: 'Kalikan jumlah peserta dengan rata-rata tarif per jam mereka dan dengan durasi rapat dalam jam. Contohnya, 6 orang × Rp 80.000 per jam × 1,5 jam = Rp 720.000. Kalkulator ini menghitungnya secara langsung selama rapat berlangsung.'
        },
        {
          q: 'Tarif per jam berapa yang sebaiknya saya pakai?',
          a: 'Gunakan biaya penuh satu jam kerja: gaji kotor per jam ditambah iuran BPJS yang ditanggung perusahaan, THR, dan biaya ketenagakerjaan lainnya. Untuk konsultan dan tenaga lepas, gunakan tarif yang mereka tagihkan.'
        },
        {
          q: 'Bisakah saya mengubah jumlah peserta di tengah rapat?',
          a: 'Bisa. Ubah jumlah peserta atau tarif kapan saja. Nilai baru dihitung mulai saat itu, sedangkan biaya yang sudah terkumpul tetap seperti semula.'
        },
        {
          q: 'Apakah timer tetap berjalan jika saya pindah tab?',
          a: 'Ya. Timer mengacu pada jam perangkat, jadi totalnya tetap benar di tab latar belakang. Selama timer berjalan, halaman juga meminta browser agar layar tetap menyala.'
        }
      ]
    },

    workhours: {
      name: 'Jam kerja',
      heading: 'Kalkulator harga dalam jam kerja',
      title: 'Harga dalam Jam Kerja – Berapa Lama Harus Bekerja?',
      description: 'Ubah harga apa pun menjadi jam, hari, dan minggu kerja. Masukkan gaji per jam, per bulan, atau per tahun, lalu lihat berapa harga sebuah barang dalam waktu kerja.',
      card: 'Ubah harga apa pun menjadi jam, hari, dan minggu kerja yang dibutuhkan untuk membelinya.',
      tag: 'Kerja',
      lead: 'Masukkan gaji Anda dan sebuah harga untuk melihat berapa lama Anda harus bekerja untuk membelinya.',
      period: {
        label: 'Saya tahu gaji saya',
        hour: 'Per jam',
        month: 'Per bulan',
        year: 'Per tahun'
      },
      pay: {
        label: 'Gaji',
        unit: 'Rp per jam',
        value: '35000',
        step: '1000',
        monthStep: '100000',
        yearStep: '1000000',
        hint: 'Gunakan gaji bersih setelah pajak (take-home pay) agar jawabannya paling jujur.',
        decrease: 'Kurangi gaji',
        increase: 'Tambah gaji'
      },
      hoursPerWeek: {
        label: 'Jam kerja per minggu',
        unit: 'jam',
        value: '40',
        chip1: '35 jam',
        chip2: '40 jam',
        preset1: '35',
        preset2: '40',
        decrease: 'Kurangi jam kerja per minggu',
        increase: 'Tambah jam kerja per minggu'
      },
      price: {
        label: 'Harga',
        unit: 'Rp',
        value: '5000000',
        step: '100000',
        decrease: 'Kurangi harga',
        increase: 'Tambah harga'
      },
      resultsTitle: 'Harga dalam waktu kerja',
      youNeedToWork: 'Anda perlu bekerja',
      workDays: 'Hari kerja',
      workWeeks: 'Minggu kerja',
      hourlyRate: 'Gaji per jam Anda',
      runtime: {
        unit: {
          hour: 'Rp per jam',
          month: 'Rp per bulan',
          year: 'Rp per tahun'
        },
        days: { one: '{n} hari', other: '{n} hari' },
        weeks: { one: '{n} minggu', other: '{n} minggu' },
        note: {
          empty: 'Masukkan gaji, jam kerja per minggu, dan harga untuk melihat berapa lama Anda perlu bekerja.',
          result: 'Dihitung dengan {hours} jam kerja per hari, {days} hari seminggu.'
        }
      },
      about: {
        title: 'Cara menghitung waktu kerja',
        paragraphs: [
          'Pertama, gaji Anda diubah menjadi gaji per jam. Gaji bulanan dikalikan 12, lalu dibagi jumlah jam kerja setahun (jam per minggu × 52); gaji tahunan langsung dibagi jumlah jam tersebut. Setelah itu, harga dibagi dengan gaji per jam Anda.',
          'Hari kerja dihitung dengan lima hari kerja seminggu, jadi 40 jam per minggu berarti 8 jam sehari. Contohnya, dengan gaji Rp 35.000 per jam, ponsel seharga Rp 5.000.000 setara dengan hampir 143 jam kerja – hampir 18 hari kerja, atau lebih dari tiga setengah minggu.',
          'Agar jawabannya paling jujur, gunakan gaji bersih setelah pajak, karena itulah uang yang benar-benar Anda belanjakan. Memikirkan harga dalam jam kerja adalah cara sederhana untuk menilai apakah sesuatu benar-benar sepadan.'
        ]
      },
      faq: [
        {
          q: 'Berapa jam saya harus bekerja untuk membeli sesuatu?',
          a: 'Bagi harga barang dengan gaji bersih per jam Anda. Jika penghasilan Anda Rp 30.000 per jam setelah pajak, belanja seharga Rp 1.500.000 setara dengan 50 jam kerja.'
        },
        {
          q: 'Sebaiknya pakai gaji kotor atau gaji bersih?',
          a: 'Gaji bersih setelah pajak memberi jawaban paling realistis, karena itulah uang yang benar-benar bisa Anda belanjakan. Dengan gaji kotor, semuanya tampak lebih murah daripada kenyataannya.'
        },
        {
          q: 'Bagaimana cara mengubah gaji bulanan menjadi gaji per jam?',
          a: 'Kalikan gaji bulanan dengan 12, lalu bagi dengan jumlah jam kerja setahun. Dengan 40 jam seminggu, jumlahnya 2.080 jam, jadi gaji Rp 6.000.000 sebulan setara dengan sekitar Rp 34.600 per jam. Kalkulator menghitungnya otomatis saat Anda memilih Per bulan.'
        }
      ]
    },

    coffee: {
      name: 'Kebiasaan ngopi',
      heading: 'Kalkulator biaya kopi',
      title: 'Kalkulator Biaya Kopi – Berapa Biaya Ngopi Setiap Hari?',
      description: 'Lihat berapa biaya kopi harian Anda per bulan serta dalam 1, 5, dan 10 tahun. Masukkan harga per gelas dan jumlah gelas per minggu – gratis dan privat.',
      card: 'Lihat berapa total biaya kopi harian Anda dalam satu, lima, dan sepuluh tahun.',
      tag: 'Kebiasaan',
      lead: 'Masukkan harga segelas kopi dan seberapa sering Anda membelinya untuk melihat total biaya kebiasaan ini dari tahun ke tahun.',
      price: {
        label: 'Harga per gelas',
        unit: 'Rp',
        step: '1000',
        value: '25000',
        decrease: 'Kurangi harga kopi',
        increase: 'Tambah harga kopi'
      },
      perWeek: {
        label: 'Gelas per minggu',
        unit: 'gelas',
        chip1: 'Hari kerja',
        chip2: 'Setiap hari',
        chip3: 'Dua kali sehari',
        decrease: 'Kurangi gelas per minggu',
        increase: 'Tambah gelas per minggu'
      },
      resultsTitle: 'Total biayanya',
      in10Years: 'Dalam 10 tahun',
      perMonth: 'Per bulan',
      year1: '1 tahun',
      year5: '5 tahun',
      runtime: {
        note: {
          empty: 'Masukkan harga dan jumlah gelas per minggu untuk melihat totalnya.',
          result: 'Itu sekitar {cups} gelas setahun dengan harga {price} per gelas.'
        }
      },
      about: {
        title: 'Cara menghitung biaya kopi',
        paragraphs: [
          'Biaya tahunan adalah harga per gelas × jumlah gelas per minggu × 52 minggu. Biaya bulanan adalah biaya tahunan dibagi 12, sedangkan total 5 dan 10 tahun mengalikan biaya tahunan tanpa memperhitungkan inflasi atau kenaikan harga.',
          'Kopi susu seharga Rp 25.000 setiap hari kerja berarti Rp 6.500.000 setahun dan Rp 65.000.000 dalam sepuluh tahun. Jika angkanya mengejutkan, menyeduh kopi sendiri di rumah atau membawa tumbler adalah cara mudah untuk berhemat.',
          'Kalkulator ini cocok untuk pembelian kecil apa pun yang rutin: minuman boba, es teh, atau sebotol air mineral. Masukkan harganya dan berapa kali Anda membelinya dalam seminggu.'
        ]
      },
      faq: [
        {
          q: 'Berapa biaya kopi harian dalam setahun?',
          a: 'Segelas sehari, tujuh hari seminggu, berarti 364 gelas setahun. Dengan harga Rp 20.000 per gelas, totalnya Rp 7.280.000 setahun dan Rp 72.800.000 dalam sepuluh tahun.'
        },
        {
          q: 'Apakah lebih hemat membuat kopi sendiri di rumah?',
          a: 'Biasanya jauh lebih hemat. Secangkir kopi seduhan sendiri sering kali tidak sampai Rp 5.000, sedangkan di kedai kopi harganya bisa beberapa kali lipat. Masukkan biaya kopi buatan rumah per cangkir untuk membandingkannya.'
        },
        {
          q: 'Apakah kalkulator ini memperhitungkan inflasi?',
          a: 'Tidak. Proyeksinya mengasumsikan harga tetap sama, jadi hasilnya menunjukkan biaya kebiasaan ini dengan harga saat ini. Jika harga naik, biaya jangka panjang yang sebenarnya lebih tinggi.'
        }
      ]
    },

    smoking: {
      name: 'Biaya merokok',
      heading: 'Kalkulator biaya merokok',
      title: 'Kalkulator Biaya Merokok – Berapa Uang Habis untuk Rokok?',
      description: 'Hitung biaya merokok per bulan serta dalam 1, 5, dan 10 tahun – dan berapa yang bisa Anda hemat dengan berhenti. Masukkan harga per bungkus dan jumlah batang per hari.',
      card: 'Lihat berapa banyak uang yang habis jadi asap setiap bulan dan dari tahun ke tahun.',
      tag: 'Kebiasaan',
      lead: 'Masukkan harga sebungkus rokok dan berapa banyak Anda merokok untuk melihat berapa uang yang habis jadi asap dari tahun ke tahun.',
      packPrice: {
        label: 'Harga per bungkus',
        unit: 'Rp',
        step: '1000',
        value: '35000',
        decrease: 'Kurangi harga per bungkus',
        increase: 'Tambah harga per bungkus'
      },
      perDay: {
        label: 'Batang per hari',
        unit: 'batang',
        chip1: '5 sehari',
        chip2: '10 sehari',
        chip3: '20 sehari',
        decrease: 'Kurangi batang per hari',
        increase: 'Tambah batang per hari'
      },
      perPack: {
        label: 'Batang per bungkus',
        unit: 'isi bungkus',
        value: '16',
        decrease: 'Kurangi batang per bungkus',
        increase: 'Tambah batang per bungkus'
      },
      resultsTitle: 'Habis jadi asap',
      in10Years: 'Dalam 10 tahun',
      perMonth: 'Per bulan',
      year1: '1 tahun',
      year5: '5 tahun',
      runtime: {
        note: {
          empty: 'Masukkan harga per bungkus, jumlah batang per hari, dan isi bungkus untuk melihat totalnya.',
          result: 'Itu sekitar {cigarettes} batang ({packs} bungkus) setahun dengan harga {price} per batang.'
        }
      },
      about: {
        title: 'Cara menghitung biaya merokok',
        paragraphs: [
          'Harga sebatang rokok adalah harga per bungkus dibagi jumlah batang dalam bungkus. Angka itu dikalikan dengan jumlah batang yang diisap per hari dan dengan 365 hari untuk mendapatkan biaya tahunan. Biaya bulanan adalah seperdua belasnya, dan total 5 serta 10 tahun memakai harga saat ini.',
          'Setengah bungkus sehari (8 batang dari bungkus isi 16) dengan harga Rp 35.000 per bungkus berarti sekitar Rp 6,4 juta setahun dan hampir Rp 64 juta dalam sepuluh tahun. Melihat totalnya bisa menjadi motivasi yang kuat: uang yang sama bisa dipakai untuk liburan, tabungan, atau melunasi utang.',
          'Kalkulator ini hanya menghitung harga rokok. Biaya kesehatan, premi asuransi yang lebih mahal, dan hari tidak masuk kerja karena sakit belum termasuk. Jika Anda ingin berhenti merokok, dokter Anda atau layanan Upaya Berhenti Merokok (UBM) di puskesmas bisa membantu.'
        ]
      },
      faq: [
        {
          q: 'Berapa biaya sebungkus rokok sehari dalam setahun?',
          a: 'Sebungkus sehari berarti 365 bungkus setahun. Dengan harga Rp 35.000 per bungkus, totalnya Rp 12.775.000 setahun dan Rp 127.750.000 dalam sepuluh tahun.'
        },
        {
          q: 'Berapa uang yang bisa saya hemat jika berhenti merokok?',
          a: 'Semua yang ditunjukkan kalkulator ini. Masukkan kebiasaan merokok Anda saat ini: total bulanan dan tahunan itulah yang bisa Anda hemat dengan berhenti.'
        },
        {
          q: 'Apakah kalkulator ini bisa dipakai untuk tembakau linting (tingwe)?',
          a: 'Bisa. Masukkan harga sebungkus tembakau sebagai harga per bungkus, jumlah batang yang bisa Anda linting darinya sebagai isi bungkus, dan berapa batang yang Anda isap per hari.'
        }
      ]
    },

    subscriptions: {
      name: 'Langganan',
      heading: 'Kalkulator biaya langganan',
      title: 'Kalkulator Langganan – Total Biaya Bulanan dan Tahunan',
      description: 'Jumlahkan streaming, gym, paket data, dan semua langganan lainnya. Lihat totalnya per bulan, per tahun, dan dalam 10 tahun, serta langganan mana yang paling mahal.',
      card: 'Jumlahkan streaming, gym, dan semua pembayaran rutin lainnya di satu tempat.',
      tag: 'Anggaran',
      lead: 'Catat semua yang Anda bayar secara rutin dan lihat berapa totalnya. Tagihan bulanan, tahunan, dan mingguan semuanya bisa dihitung.',
      listTitle: 'Langganan Anda',
      empty: 'Belum ada langganan. Tambahkan di bawah atau pilih dari Tambah cepat.',
      add: 'Tambah langganan',
      quickAdd: 'Tambah cepat',
      quick: {
        1: { name: 'Streaming video', price: '65000' },
        2: { name: 'Streaming musik', price: '59990' },
        3: { name: 'Gym', price: '400000' },
        4: { name: 'Penyimpanan cloud', price: '49000' },
        5: { name: 'Paket data', price: '100000' },
        6: { name: 'Berita', price: '50000' }
      },
      note: 'Daftar Anda tersimpan di alamat halaman, jadi Anda bisa menandainya (bookmark) atau membagikannya. Daftar ini tidak pernah dikirim ke mana pun.',
      row: {
        name: 'Nama',
        nameLabel: 'Nama langganan',
        priceLabel: 'Harga dalam rupiah',
        cycleLabel: 'Periode tagihan',
        monthly: '/ bulan',
        yearly: '/ tahun',
        weekly: '/ minggu'
      },
      resultsTitle: 'Total langganan',
      perYear: 'Per tahun',
      perMonth: 'Per bulan',
      perDay: 'Per hari',
      in10Years: 'Dalam 10 tahun',
      breakdownLabel: 'Biaya tahunan per langganan',
      copySummary: 'Salin ringkasan',
      runtime: {
        untitled: 'Tanpa nama',
        remove: 'Hapus {name}',
        removeUnnamed: 'Hapus langganan',
        breakdown: '{cost} / tahun · {percent}%',
        cycle: { monthly: 'bulan', yearly: 'tahun', weekly: 'minggu' },
        note: {
          empty: 'Tambahkan langganan beserta harganya untuk melihat totalnya.',
          single: 'Itu berarti {cost} setahun untuk {name}.',
          biggest: 'Biaya terbesar Anda adalah {name}, yaitu {cost} setahun atau {percent}% dari total.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Total: {month} per bulan, {year} per tahun'
        }
      },
      about: {
        title: 'Cara menghitung total langganan',
        paragraphs: [
          'Setiap langganan diubah menjadi biaya tahunan: harga bulanan dikalikan 12, harga mingguan dikalikan 52, dan harga tahunan dipakai apa adanya. Total tahunan lalu dibagi 12 untuk biaya bulanan dan dibagi 365 untuk biaya harian.',
          'Rincian mengurutkan langganan dari yang termahal hingga termurah dan menunjukkan porsi masing-masing dari total, sehingga mudah melihat mana yang sebaiknya dihentikan atau diganti ke paket yang lebih murah.',
          'Daftar Anda disimpan di alamat halaman, tidak pernah di server. Tandai halaman ini untuk kembali ke daftar Anda nanti, atau bagikan tautannya untuk meninjau langganan bersama keluarga.'
        ]
      },
      faq: [
        {
          q: 'Bagaimana cara menemukan semua langganan saya?',
          a: 'Periksa mutasi rekening bank, tagihan kartu kredit, dan riwayat transaksi dompet digital seperti GoPay, OVO, atau DANA selama beberapa bulan terakhir, lalu cari tagihan yang berulang. Periksa juga pengaturan langganan di App Store, Google Play, dan PayPal.'
        },
        {
          q: 'Apakah paket tahunan lebih murah daripada paket bulanan?',
          a: 'Sering kali lebih murah 15–20%, tetapi hanya jika Anda memang akan memakai layanan itu selama setahun penuh. Tambahkan kedua versi ke daftar untuk membandingkan biaya tahunannya.'
        },
        {
          q: 'Apakah daftar saya disimpan?',
          a: 'Daftar Anda hanya tersimpan di alamat halaman. Tandai atau bagikan tautannya untuk menyimpannya; tidak ada yang disimpan di server atau di cookie.'
        }
      ]
    },

    electricity: {
      name: 'Biaya listrik',
      heading: 'Kalkulator biaya listrik',
      title: 'Kalkulator Listrik – Hitung Biaya Listrik Peralatan Rumah',
      description: 'Hitung biaya listrik sebuah alat per hari, per bulan, dan per tahun dari dayanya (watt), lama pemakaian, dan tarif listrik PLN. Kalkulator kWh gratis.',
      card: 'Lihat berapa biaya menyalakan sebuah alat per hari, per bulan, dan per tahun.',
      tag: 'Rumah',
      lead: 'Masukkan daya alat, berapa lama alat itu menyala, dan tarif listrik Anda untuk melihat berapa biaya sebenarnya.',
      power: {
        label: 'Daya',
        unit: 'watt',
        chip1: 'Lampu LED 9 W',
        chip2: 'Laptop 60 W',
        chip3: 'TV 100 W',
        chip4: 'PC gaming 400 W',
        chip5: 'Kompor listrik 1500 W',
        decrease: 'Kurangi daya',
        increase: 'Tambah daya'
      },
      hours: {
        label: 'Jam per hari',
        unit: 'jam',
        decrease: 'Kurangi jam per hari',
        increase: 'Tambah jam per hari'
      },
      days: {
        label: 'Hari per minggu',
        unit: 'hari',
        decrease: 'Kurangi hari per minggu',
        increase: 'Tambah hari per minggu'
      },
      kwhPrice: {
        label: 'Tarif listrik',
        unit: 'Rp per kWh',
        value: '1445',
        step: '50',
        divisor: '1',
        hint: 'Sertakan pajak penerangan jalan (PPJ) agar hasilnya paling akurat.',
        decrease: 'Kurangi tarif listrik',
        increase: 'Tambah tarif listrik'
      },
      resultsTitle: 'Biaya pemakaian',
      perYear: 'Per tahun',
      perDayOfUse: 'Per hari pemakaian',
      perMonth: 'Per bulan',
      energyPerYear: 'Energi per tahun',
      runtime: {
        note: {
          empty: 'Masukkan daya, jam per hari (maksimal 24), hari per minggu (maksimal 7), dan tarif listrik Anda.',
          result: 'Memakai sekitar {day} per hari pemakaian, atau sekitar {year} setahun.'
        }
      },
      about: {
        title: 'Cara menghitung biaya listrik',
        paragraphs: [
          'Pemakaian energi dalam kilowatt-jam (kWh) adalah daya dalam watt × lama pemakaian dalam jam ÷ 1.000. TV 100 W yang menyala 4 jam memakai 0,4 kWh sehari. Kalikan angka itu dengan tarif listrik per kWh untuk mendapatkan biaya per hari pemakaian.',
          'Biaya tahunan memperhitungkan berapa hari dalam seminggu alat itu menyala, disebar ke 365 hari dalam setahun. Biaya bulanan adalah seperdua belas dari biaya tahunan.',
          'Daya alat biasanya tertera di label spesifikasi atau di buku panduannya. Banyak alat memakai daya lebih kecil dari daya maksimalnya hampir sepanjang waktu, jadi hasilnya adalah perkiraan batas atas. Tarif PLN untuk rumah tangga berdaya 1.300 VA dan 2.200 VA sekitar Rp 1.445 per kWh (3.500 VA ke atas sekitar Rp 1.700); untuk hasil paling akurat, tambahkan juga pajak penerangan jalan (PPJ).'
        ]
      },
      faq: [
        {
          q: 'Bagaimana cara menghitung biaya listrik sebuah alat?',
          a: 'Kalikan daya dalam kilowatt dengan lama pemakaian dan dengan tarif per kWh. Kompor listrik 1.500 W yang menyala 3 jam sehari: 1,5 kW × 3 jam × Rp 1.445 ≈ Rp 6.500 per hari.'
        },
        {
          q: 'Berapa kWh yang dipakai sebuah alat?',
          a: 'Bagi dayanya dalam watt dengan 1.000, lalu kalikan dengan lama pemakaian dalam jam. Laptop 60 W yang dipakai 8 jam sehari memakai 0,48 kWh sehari – sekitar 175 kWh setahun jika dipakai setiap hari.'
        },
        {
          q: 'Tarif listrik berapa yang sebaiknya saya pakai?',
          a: 'Gunakan tarif per kWh sesuai golongan daya di rumah Anda. Untuk daya 1.300 VA dan 2.200 VA, tarif PLN sekitar Rp 1.445 per kWh, dan untuk 3.500 VA ke atas sekitar Rp 1.700, ditambah PPJ. Pelanggan pascabayar bisa membagi total tagihan dengan jumlah kWh yang terpakai untuk mendapatkan rata-rata yang baik.'
        },
        {
          q: 'Apakah mode standby memakai listrik?',
          a: 'Ya, banyak alat tetap menyedot beberapa watt saat standby. Masukkan daya standby dan 24 jam sehari untuk melihat biayanya dalam setahun.'
        }
      ]
    },

    trip: {
      name: 'Biaya perjalanan',
      heading: 'Kalkulator biaya bensin perjalanan',
      title: 'Hitung Biaya Bensin – Kalkulator BBM Perjalanan dan Mudik',
      description: 'Hitung biaya bensin untuk perjalanan, mudik, atau pulang-pergi kerja setiap hari, lalu bagi rata dengan penumpang. Bisa dengan kilometer dan liter atau mil dan galon.',
      card: 'Hitung biaya bensin perjalanan atau pulang-pergi kerja dan bagi rata dengan yang lain.',
      tag: 'Perjalanan',
      lead: 'Hitung biaya bensin untuk sekali jalan atau pulang-pergi kerja setiap hari, lalu bagi rata dengan semua orang di dalam mobil.',
      unit: {
        label: 'Satuan',
        metric: 'Kilometer & liter',
        us: 'Mil & galon'
      },
      distance: {
        label: 'Jarak',
        unit: 'km sekali jalan',
        decrease: 'Kurangi jarak',
        increase: 'Tambah jarak'
      },
      direction: {
        label: 'Perjalanan',
        one: 'Sekali jalan',
        round: 'Pulang-pergi'
      },
      consumption: {
        label: 'Konsumsi BBM',
        unit: 'l/100 km',
        hint: 'Terbiasa dengan km/l? Hitung 100 ÷ km/l, misalnya 12 km/l ≈ 8,3 l/100 km. Mobil listrik: isi kWh/100 km dan tarif per kWh.',
        decrease: 'Kurangi konsumsi BBM',
        increase: 'Tambah konsumsi BBM'
      },
      fuelPrice: {
        label: 'Harga BBM',
        unit: 'Rp per liter',
        value: '10000',
        step: '100',
        usStep: '500',
        decrease: 'Kurangi harga BBM',
        increase: 'Tambah harga BBM'
      },
      people: {
        label: 'Orang yang patungan',
        unit: 'orang',
        decrease: 'Kurangi jumlah orang',
        increase: 'Tambah jumlah orang'
      },
      tripsPerWeek: {
        label: 'Perjalanan per minggu',
        unit: 'untuk total bulanan dan tahunan',
        decrease: 'Kurangi perjalanan per minggu',
        increase: 'Tambah perjalanan per minggu'
      },
      resultsTitle: 'Biaya bensin',
      perPerson: 'Per orang',
      perMonth: 'Per bulan',
      perYear: 'Per tahun',
      runtime: {
        direction: { one: 'Sekali jalan', round: 'Pulang-pergi' },
        unit: {
          metric: {
            distance: 'km sekali jalan',
            consumption: 'l/100 km',
            price: 'Rp per liter',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'mil sekali jalan',
            consumption: 'mpg',
            price: 'Rp per galon',
            perDistance: 'mil',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Masukkan jarak, konsumsi BBM, dan harga BBM untuk melihat biayanya.',
          result: 'Memakai {fuel} BBM per perjalanan, sekitar {price} per {distance}.'
        }
      },
      about: {
        title: 'Cara menghitung biaya perjalanan',
        paragraphs: [
          'Dengan kilometer dan liter, BBM yang terpakai adalah jarak × konsumsi ÷ 100. Jika jarak ke kantor 25 km sekali jalan (50 km sehari) dan mobil Anda memakai 6,5 l/100 km, BBM yang terpakai 3,25 liter sehari. Kalikan dengan harga per liter untuk mendapatkan biaya perjalanan, lalu bagi dengan jumlah orang untuk patungan.',
          'Jika Anda terbiasa dengan km/l, ubah dulu ke l/100 km dengan menghitung 100 ÷ km/l: 12 km/l setara dengan sekitar 8,3 l/100 km, dan motor irit yang menempuh 50 km/l hanya memakai 2 l/100 km. Dengan mil dan galon, BBM yang terpakai adalah jarak dibagi mpg (mil per galon). Saat Anda mengganti satuan, nilai yang sudah dimasukkan ikut dikonversi, jadi Anda bisa membandingkan angka dari kedua sistem.',
          'Total bulanan dan tahunan dihitung dari jumlah perjalanan per minggu – 5 kali pulang-pergi seminggu adalah pola yang umum untuk ke kantor. Untuk mobil listrik, masukkan konsumsi dalam kWh/100 km dan tarif listrik per kWh.'
        ]
      },
      faq: [
        {
          q: 'Bagaimana cara menghitung biaya bensin untuk perjalanan?',
          a: 'Kalikan jarak dengan konsumsi BBM, bagi dengan 100, lalu kalikan dengan harga BBM. Untuk perjalanan 200 km dengan mobil yang memakai 6 l/100 km dan Pertalite seharga Rp 10.000 per liter: 200 × 6 ÷ 100 × Rp 10.000 = Rp 120.000.'
        },
        {
          q: 'Bagaimana cara membagi biaya bensin dengan penumpang?',
          a: 'Masukkan jumlah orang yang ikut patungan. Kalkulator membagi biaya perjalanan secara rata ke semua orang, termasuk pengemudi.'
        },
        {
          q: 'Apakah kalkulator ini menghitung biaya tol, parkir, atau perawatan?',
          a: 'Tidak, yang dihitung hanya BBM. Biaya tol, parkir, asuransi, dan keausan kendaraan belum termasuk, jadi biaya berkendara sebenarnya lebih tinggi.'
        }
      ]
    }
  }
};
