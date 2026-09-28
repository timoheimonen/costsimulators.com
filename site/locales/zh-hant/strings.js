// Traditional Chinese (Taiwan) texts for costsimulators.com. Only the site
// generator (scripts/build-site.js) reads this file. It has exactly the same
// keys as site/locales/en/strings.js; money values are typical prices in New
// Taiwan dollars (TWD), shown without decimals.

module.exports = {
  meta: {
    name: '繁體中文',
    locale: 'zh-TW',
    currency: 'TWD',
    ogLocale: 'zh_TW'
  },

  money: {
    symbol: 'NT$',
    zero: '$0',
    placeholder: '0',
    decimals: '0'
  },

  common: {
    skip: '跳至主要內容',
    home: '首頁',
    toggleTheme: '切換主題',
    themeToLight: '切換為淺色主題',
    themeToDark: '切換為深色主題',
    language: '語言',
    allTools: '所有工具',
    share: '分享',
    settings: '設定',
    quickPicks: '快速選擇',
    faqTitle: '常見問題',
    relatedTools: '更多計算機',
    imageAlt: 'costsimulators.com：免費算清日常花費的小工具'
  },

  footer: {
    privacy: '完全在你的瀏覽器中運作。不用 Cookie，不追蹤。',
    about: '關於我們',
    contact: '聯絡我們',
    privacyPolicy: '隱私權政策',
    terms: '使用條款'
  },

  runtime: {
    share: {
      linkCopied: '已複製連結',
      copyFailed: '複製失敗',
      copied: '已複製！',
      calculatedWith: '使用 costsimulators.com 計算'
    },
    workTime: {
      minutes: '{m} 分鐘',
      hours: '{h} 小時',
      hoursMinutes: '{h} 小時 {m} 分'
    }
  },

  home: {
    title: '免費生活花費計算機：日常開銷一算就清楚',
    description: '免費又保護隱私的計算機，算出開會、工時、咖啡、抽菸、訂閱、電費和油錢的真實花費。免註冊，直接在瀏覽器中計算。',
    eyebrow: '免費 · 隱私 · 即時',
    heading: '生活中的<span class="accent-text">花費</span>，<wbr>小工具幫你算清楚。',
    lead: '簡單好用的計算機，讓你看清每樣東西真正的花費。不用註冊、不會追蹤，所有計算都在你的瀏覽器裡完成。',
    toolsTitle: '工具',
    toolCount: '{count} 個工具',
    suggestTitle: '有好點子嗎？',
    suggestText: '到 GitHub 建議新工具。',
    whyTitle: '小錢也會積少成多',
    whyText1: '開一場會、上班路上買杯咖啡，或是多訂一個串流服務，單看都不覺得貴。但把一個月、一年甚至十年加起來，數字就完全不一樣了。',
    whyText2: '每個計算機只做一件事，只問需要的數字，馬上給你答案。所有計算都在你的瀏覽器中進行，你的數字只會留在自己的裝置上。',
    aboutLink: '進一步認識 costsimulators.com',
    faq: [
      {
        q: 'costsimulators.com 是免費的嗎？',
        a: '是的。所有計算機都完全免費，不用註冊、沒有付費牆，也沒有廣告。上班時也可以放心使用。'
      },
      {
        q: '我輸入的數字會被儲存或傳送到別的地方嗎？',
        a: '不會。你輸入的所有內容都在瀏覽器中計算，絕不會傳送到伺服器。本網站不使用 Cookie，也沒有任何流量分析。'
      },
      {
        q: '可以分享計算結果嗎？',
        a: '可以。你的設定會保留在網址中。按下「分享」複製連結，打開連結的人就會看到相同的計算結果。'
      }
    ]
  },

  notFound: {
    title: '找不到這個網頁',
    description: '你要找的網頁不存在。',
    heading: '這個網頁不存在。',
    lead: '網址可能打錯了，或是網頁已經搬家。所有計算機都在首頁。'
  },

  documents: {
    about: {
      name: '關於我們',
      title: '關於我們：免費、保護隱私的生活花費計算機',
      description: '認識 costsimulators.com 的作者與計算方式。免費、保護隱私的計算機，涵蓋會議、工時、生活習慣、訂閱、電費和交通油錢。'
    },
    privacy: {
      name: '隱私權政策',
      title: '隱私權政策',
      description: 'costsimulators.com 如何處理你的資料：所有計算都在瀏覽器中進行，沒有追蹤、沒有分析工具，也不需要帳號。'
    },
    terms: {
      name: '使用條款',
      title: '使用條款',
      description: 'costsimulators.com 使用條款：個人與商業用途皆可免費使用，服務依現狀提供，原始碼以 MIT 授權條款開放。'
    }
  },

  tools: {
    meetings: {
      name: '會議成本',
      heading: '會議成本計算機',
      title: '會議成本計算機：即時計算開會花了多少錢',
      description: '免費的會議成本計算機，附即時計時器。輸入每人時薪和開會人數，這場會議每一秒花了多少錢，即時跳給你看。',
      card: '一邊開會，一邊看著會議成本即時往上跳。',
      tag: '即時計時',
      lead: '設定時薪和人數，按下開始，就能即時看到這場會議花了多少錢。',
      pulseEvery: '10',
      rate: {
        label: '時薪',
        unit: '元/人',
        step: '50',
        value: '500',
        decrease: '降低時薪',
        increase: '提高時薪'
      },
      persons: {
        label: '與會人數',
        unit: '人',
        decrease: '減少與會人數',
        increase: '增加與會人數'
      },
      perMinute: '每分鐘',
      perHour: '每小時',
      note: '計時期間也可以調整數值。有人中途加入或離開，人數變動會從那一刻起生效。',
      total: '總成本',
      elapsed: '經過時間',
      reset: '重設',
      copyReport: '複製報告',
      kbdHint: '按<kbd>空白鍵</kbd>開始或暫停',
      runtime: {
        mode: { start: '開始', pause: '暫停', resume: '繼續' },
        status: { ready: '就緒', live: '計時中', paused: '已暫停' },
        announce: {
          invalid: '請先輸入時薪和與會人數再開始。',
          started: '計時開始。',
          paused: '已暫停：經過 {time}，累計 {cost}。',
          reset: '計時器已重設。'
        },
        report: {
          cost: '會議成本：{cost}',
          duration: '會議時間：{time}',
          participants: '與會人數：{persons} 人 × 每小時 {rate}'
        }
      },
      about: {
        title: '會議成本怎麼算',
        paragraphs: [
          '計算機把與會人數乘以時薪，再乘以經過的時間。5 個人開 1 小時的會，每人時薪 500 元，成本就是 2,500 元，相當於每分鐘約 42 元。',
          '時薪最好用雇主實際負擔的一小時人力成本，而不只是薪水。在台灣，雇主除了薪資，還要負擔勞保、健保和至少 6% 的勞退提繳，人事成本通常比薪資高出約兩成；若再算上年終獎金，實際成本更高。不知道每個人的時薪也沒關係，用團隊的平均值就夠了。',
          '即使切換到背景分頁，計時器也會正確計算，目前累計的金額還會顯示在瀏覽器的分頁標題上，分享螢幕時也能隨時留意。會議結束後，暫停計時器，就能複製一段簡短報告貼到會議紀錄裡。'
        ]
      },
      faq: [
        {
          q: '開會成本怎麼計算？',
          a: '把與會人數乘以平均時薪，再乘以會議時數。例如 6 人 × 每小時 400 元 × 1.5 小時 = 3,600 元。這個計算機會在開會時即時幫你算。'
        },
        {
          q: '時薪應該填多少？',
          a: '請填一小時工作的完整成本：稅前時薪，加上雇主負擔的勞保、健保、勞退提繳等人事費用。顧問或外包人員則填他們的計費時薪。'
        },
        {
          q: '開會途中可以更改人數嗎？',
          a: '可以，人數和時薪隨時都能改。新數值會從那一刻起計算，已經累計的金額維持不變。'
        },
        {
          q: '切換分頁後，計時器還會繼續跑嗎？',
          a: '會。計時器是依據時鐘計算，所以在背景分頁中總額也會保持正確。計時期間，網頁也會要求瀏覽器讓螢幕保持開啟。'
        }
      ]
    },

    workhours: {
      name: '價格換算工時',
      heading: '價格換算工時計算機',
      title: '價格換算工時：買東西要工作多久？時薪、月薪都能算',
      description: '把任何價格換算成要工作幾小時、幾天、幾週。輸入時薪、月薪或年薪，看看一樣東西實際要花掉你多少工作時間。',
      card: '把任何價格換算成要工作的小時、天數和週數。',
      tag: '工作',
      lead: '輸入你的薪資和商品價格，看看要工作多久才買得起。',
      period: {
        label: '薪資類型',
        hour: '時薪',
        month: '月薪',
        year: '年薪'
      },
      pay: {
        label: '薪資',
        unit: '元/小時',
        value: '250',
        step: '10',
        monthStep: '1000',
        yearStep: '10000',
        hint: '填入扣除所得稅和勞健保費後的實領薪資，答案最真實。',
        decrease: '減少薪資',
        increase: '增加薪資'
      },
      hoursPerWeek: {
        label: '每週工時',
        unit: '小時',
        value: '40',
        chip1: '37.5 小時',
        chip2: '40 小時',
        preset1: '37.5',
        preset2: '40',
        decrease: '減少每週工時',
        increase: '增加每週工時'
      },
      price: {
        label: '價格',
        unit: '元',
        value: '29900',
        step: '100',
        decrease: '降低價格',
        increase: '提高價格'
      },
      resultsTitle: '換算成工作時間',
      youNeedToWork: '你需要工作',
      workDays: '工作天數',
      workWeeks: '工作週數',
      hourlyRate: '你的時薪',
      runtime: {
        unit: {
          hour: '元/小時',
          month: '元/月',
          year: '元/年'
        },
        days: { one: '{n} 天', other: '{n} 天' },
        weeks: { one: '{n} 週', other: '{n} 週' },
        note: {
          empty: '輸入薪資、每週工時和價格，看看要工作多久才買得起。',
          result: '以每天工作 {hours} 小時、每週 {days} 天計算。'
        }
      },
      about: {
        title: '工作時間怎麼算',
        paragraphs: [
          '首先把你的薪資換算成時薪：月薪乘以 12，再除以一年的工作時數（每週工時 × 52）；年薪則直接除以一年的工作時數。接著再用價格除以時薪。',
          '工作天數以每週上班五天計算，所以每週 40 小時就是每天 8 小時。例如實領時薪 250 元，一支 29,900 元的手機要工作將近 120 小時，差不多是整整三週的上班時間。',
          '想得到最真實的答案，請用扣稅後的實領薪資，因為那才是你真正能花的錢。把價格換算成工時，是判斷一樣東西值不值得買的簡單方法。'
        ]
      },
      faq: [
        {
          q: '買一樣東西要工作幾小時？',
          a: '用價格除以你的實領時薪。如果扣稅後時薪是 200 元，一件 3,000 元的東西就要工作 15 小時。'
        },
        {
          q: '應該用稅前薪資還是實領薪資？',
          a: '用扣除稅金後的實領薪資最實際，因為那才是你真正可以花的錢。用稅前薪資來算，東西會看起來比實際便宜。'
        },
        {
          q: '月薪怎麼換算成時薪？',
          a: '把月薪乘以 12，再除以一年的工作時數。每週工作 40 小時，一年就是 2,080 小時，所以月薪實領 40,000 元約等於時薪 231 元。選擇「月薪」時，計算機會自動幫你換算。'
        }
      ]
    },

    coffee: {
      name: '咖啡花費',
      heading: '咖啡花費計算機',
      title: '咖啡花費計算機：每天一杯咖啡，一年花多少錢？',
      description: '算算每天喝咖啡每月花多少，1 年、5 年、10 年又累積多少。輸入每杯價格和每週杯數即可，免費又保護隱私。',
      card: '看看每天一杯咖啡，一年、五年、十年累積起來是多少。',
      tag: '習慣',
      lead: '輸入每杯價格和購買頻率，看看這個習慣多年下來要花多少錢。',
      price: {
        label: '每杯價格',
        unit: '元',
        step: '5',
        value: '80',
        decrease: '降低咖啡價格',
        increase: '提高咖啡價格'
      },
      perWeek: {
        label: '每週杯數',
        unit: '杯',
        chip1: '上班日',
        chip2: '每天',
        chip3: '一天兩杯',
        decrease: '減少每週杯數',
        increase: '增加每週杯數'
      },
      resultsTitle: '累積花費',
      in10Years: '10 年累計',
      perMonth: '每月',
      year1: '1 年',
      year5: '5 年',
      runtime: {
        note: {
          empty: '輸入價格和每週喝幾杯，就能看到總花費。',
          result: '一年約 {cups} 杯，每杯 {price}。'
        }
      },
      about: {
        title: '咖啡花費怎麼算',
        paragraphs: [
          '一年的花費 = 每杯價格 × 每週杯數 × 52 週。每月花費是年花費除以 12，5 年和 10 年的總額則直接以年花費相乘，不計入通膨或漲價。',
          '每個上班日買一杯 80 元的咖啡，一年就要 20,800 元，十年就是 208,000 元。如果這個數字讓你嚇一跳，在家自己沖咖啡，或自備環保杯享折扣，都是輕鬆省錢的好方法。',
          '這個計算機也適用於任何固定的小額消費，像是手搖飲、午餐便當或一瓶礦泉水。輸入價格和每週買幾次就行了。'
        ]
      },
      faq: [
        {
          q: '每天一杯咖啡，一年要花多少錢？',
          a: '每天一杯、一週七天，一年就是 364 杯。以每杯 100 元計算，一年 36,400 元，十年 364,000 元。'
        },
        {
          q: '自己在家沖咖啡比較便宜嗎？',
          a: '通常便宜很多。在家沖一杯往往不到 20 元，咖啡店一杯卻常常要 80 元以上。輸入你在家沖一杯的成本，就能比較看看。'
        },
        {
          q: '計算機有考慮通膨嗎？',
          a: '沒有。試算假設價格不變，所以顯示的是以目前價格計算的花費。如果物價上漲，長期的實際花費會更高。'
        }
      ]
    },

    smoking: {
      name: '菸錢計算',
      heading: '菸錢計算機',
      title: '菸錢計算機：抽菸一年花多少錢？戒菸能省多少',
      description: '算出抽菸每月花多少錢，1 年、5 年和 10 年累積多少，以及戒菸能省下多少。輸入每包價格和每天抽幾根即可。',
      card: '看看每個月、每一年有多少錢跟著煙一起燒掉。',
      tag: '習慣',
      lead: '輸入一包菸的價格和你抽的量，看看多年下來有多少錢跟著煙一起燒掉。',
      packPrice: {
        label: '每包價格',
        unit: '元',
        step: '5',
        value: '110',
        decrease: '降低每包價格',
        increase: '提高每包價格'
      },
      perDay: {
        label: '每天根數',
        unit: '根',
        chip1: '每天 5 根',
        chip2: '每天 10 根',
        chip3: '每天 20 根',
        decrease: '減少每天根數',
        increase: '增加每天根數'
      },
      perPack: {
        label: '每包根數',
        unit: '根/包',
        value: '20',
        decrease: '減少每包根數',
        increase: '增加每包根數'
      },
      resultsTitle: '燒掉的錢',
      in10Years: '10 年累計',
      perMonth: '每月',
      year1: '1 年',
      year5: '5 年',
      runtime: {
        note: {
          empty: '輸入每包價格、每天抽幾根和每包根數，就能看到總花費。',
          result: '一年約 {cigarettes} 根（{packs} 包），每根約 {price}。'
        }
      },
      about: {
        title: '抽菸花費怎麼算',
        paragraphs: [
          '每包價格除以每包根數就是一根菸的價格，再乘以每天抽的根數和 365 天，就是一年的花費。每月花費是年花費的十二分之一，5 年和 10 年的總額則以目前價格計算。',
          '每天抽半包、每包 110 元，一年約 20,000 元，十年就超過 20 萬元。看到總額往往是很大的動力：同樣的錢可以拿去旅行、存起來或還清債務。',
          '計算機只計算香菸本身的價格，健康損失、醫療支出和請病假的代價都還沒算進去。如果想戒菸，可以撥打國民健康署免費戒菸專線 0800-63-63-63，或到醫院、診所的戒菸門診尋求協助。'
        ]
      },
      faq: [
        {
          q: '一天一包菸，一年要花多少錢？',
          a: '一天一包，一年就是 365 包。以每包 110 元計算，一年 40,150 元，十年 401,500 元。'
        },
        {
          q: '戒菸可以省多少錢？',
          a: '就是這個計算機顯示的全部金額。輸入你現在的抽菸量，每月和每年的總額就是戒菸能幫你省下的錢。'
        },
        {
          q: '手捲菸也能算嗎？',
          a: '可以。把一包菸草的價格填在「每包價格」，能捲出的根數填在「每包根數」，再填上每天抽幾根即可。'
        }
      ]
    },

    subscriptions: {
      name: '訂閱費用',
      heading: '訂閱費用計算機',
      title: '訂閱費用計算機：每月、每年訂閱總花費一次算清',
      description: '把影音串流、健身房、手機資費等所有訂閱加總，看看每月、每年和 10 年的總花費，以及哪一項最貴。',
      card: '把串流、健身房和所有定期扣款集中起來一次加總。',
      tag: '預算',
      lead: '列出所有定期付費的項目，看看加起來總共多少。月繳、年繳和週繳都支援。',
      listTitle: '你的訂閱',
      empty: '還沒有任何訂閱。請在下方新增，或從快速新增中挑選。',
      add: '新增訂閱',
      quickAdd: '快速新增',
      quick: {
        1: { name: '影音串流', price: '390' },
        2: { name: '音樂串流', price: '149' },
        3: { name: '健身房', price: '1500' },
        4: { name: '雲端儲存空間', price: '90' },
        5: { name: '手機資費', price: '599' },
        6: { name: '外送平台會員', price: '120' }
      },
      note: '你的清單會保存在網址中，可以加入書籤或分享出去，但絕不會傳送到任何地方。',
      row: {
        name: '名稱',
        nameLabel: '訂閱名稱',
        priceLabel: '價格（新台幣）',
        cycleLabel: '計費週期',
        monthly: '每月',
        yearly: '每年',
        weekly: '每週'
      },
      resultsTitle: '訂閱總計',
      perYear: '每年',
      perMonth: '每月',
      perDay: '每天',
      in10Years: '10 年累計',
      breakdownLabel: '各項訂閱的年費',
      copySummary: '複製摘要',
      runtime: {
        untitled: '未命名',
        remove: '移除「{name}」',
        removeUnnamed: '移除訂閱',
        breakdown: '每年 {cost} · {percent}%',
        cycle: { monthly: '月', yearly: '年', weekly: '週' },
        note: {
          empty: '新增一項有價格的訂閱，就能看到總計。',
          single: '「{name}」一年要花 {cost}。',
          biggest: '最大的開銷是「{name}」，每年 {cost}，占總額的 {percent}%。'
        },
        summary: {
          item: '{name}：{price}/{cycle}',
          total: '合計：每月 {month}，每年 {year}'
        }
      },
      about: {
        title: '訂閱總額怎麼算',
        paragraphs: [
          '每項訂閱都會換算成年費：月費乘以 12、週費乘以 52，年費則直接使用。年度總額再除以 12 就是每月花費，除以 365 就是每天花費。',
          '明細會把訂閱從最貴排到最便宜，並顯示每一項占總額的比例，一眼就能看出哪些可以取消或改成較便宜的方案。',
          '你的清單保存在網址中，不會存到伺服器。把網頁加入書籤，之後就能回來查看；也可以分享連結，和家人一起檢視共用的訂閱。'
        ]
      },
      faq: [
        {
          q: '怎麼找出我所有的訂閱？',
          a: '翻翻最近幾個月的銀行帳戶和信用卡帳單，找出定期扣款的項目。也別忘了檢查 App Store 和 Google Play 的訂閱設定，以及電信帳單裡的小額付費。'
        },
        {
          q: '年繳會比月繳便宜嗎？',
          a: '通常可以省下 15～20%，但前提是你本來就會用滿一整年。把兩種方案都加進清單，比較看看它們的年費。'
        },
        {
          q: '我的清單會被儲存嗎？',
          a: '清單只保存在網址中。把連結加入書籤或分享出去就能保留；伺服器和 Cookie 裡都不會儲存任何資料。'
        }
      ]
    },

    electricity: {
      name: '電費計算',
      heading: '電費計算機',
      title: '電費計算機：電器用電度數與電費試算',
      description: '依電器功率、使用時數和每度電價，算出一天、一個月和一年的電費。免費的用電度數與電費試算工具。',
      card: '看看電器開著，每天、每月、每年要花多少電費。',
      tag: '居家',
      lead: '輸入電器的功率、使用時間和電價，看看讓它開著實際要花多少錢。',
      power: {
        label: '功率',
        unit: '瓦（W）',
        chip1: 'LED 燈泡 9 W',
        chip2: '筆電 60 W',
        chip3: '電視 100 W',
        chip4: '電競電腦 400 W',
        chip5: '電暖器 1500 W',
        decrease: '降低功率',
        increase: '提高功率'
      },
      hours: {
        label: '每天使用時數',
        unit: '小時',
        decrease: '減少每天使用時數',
        increase: '增加每天使用時數'
      },
      days: {
        label: '每週使用天數',
        unit: '天',
        decrease: '減少每週使用天數',
        increase: '增加每週使用天數'
      },
      kwhPrice: {
        label: '電價',
        unit: '元/度',
        value: '3',
        step: '0.1',
        divisor: '1',
        hint: '1 度 = 1 kWh。用電費單總金額除以用電度數，就能得到最準確的平均電價。',
        decrease: '降低電價',
        increase: '提高電價'
      },
      resultsTitle: '用電成本',
      perYear: '每年',
      perDayOfUse: '每個使用日',
      perMonth: '每月',
      energyPerYear: '每年用電量',
      runtime: {
        note: {
          empty: '請輸入功率、每天使用時數（最多 24）、每週使用天數（最多 7）和電價。',
          result: '每個使用日約耗電 {day}，一年約 {year}。'
        }
      },
      about: {
        title: '電費怎麼算',
        paragraphs: [
          '用電量以「度」計算，1 度就是 1 千瓦小時（kWh），等於功率（瓦）× 使用時數 ÷ 1,000。100 W 的電視每天看 4 小時，一天用掉 0.4 度電。再乘以每度電價，就是每個使用日的電費。',
          '一年的電費會考慮電器每週使用幾天，再平均分攤到一年 365 天。每月電費是年電費的十二分之一。',
          '電器的功率可以在銘牌或使用說明書上找到。很多電器大部分時間的耗電都低於最大功率，所以結果算是上限估計。台電的住宅用電採累進費率，夏季電價也比較高，用電費單上的總金額除以用電度數，就能得到最貼近實際的平均電價。'
        ]
      },
      faq: [
        {
          q: '電器的電費怎麼算？',
          a: '把功率（kW）乘以使用時數，再乘以每度電價。1,500 W 的電暖器開 3 小時，用電 1.5 kW × 3 小時 = 4.5 度，以每度 3 元計算，一天約 14 元。'
        },
        {
          q: '一台電器會用掉幾度電？',
          a: '把瓦數除以 1,000，再乘以使用時數。60 W 的筆電每天用 8 小時，一天用 0.48 度電；如果每天都用，一年約 175 度。'
        },
        {
          q: '電價應該填多少？',
          a: '請填電費單上的平均每度電價，也就是應繳總金額除以用電度數。住宅用電採累進費率，用得越多，每度電就越貴，所以用平均值最準確。'
        },
        {
          q: '待機也會耗電嗎？',
          a: '會，很多電器待機時仍會消耗幾瓦的電。輸入待機功率和每天 24 小時，就能看到一年要花多少錢。'
        }
      ]
    },

    trip: {
      name: '油錢計算',
      heading: '開車油錢計算機',
      title: '油錢計算機：開車油資與通勤油錢試算',
      description: '計算一趟車程或每天通勤的油錢，並由同車的人分攤。可用公里與公升，也可用英里與加侖計算。',
      card: '算出一趟車程或通勤的油錢，和同車的人一起分攤。',
      tag: '交通',
      lead: '算出單趟車程或每天通勤的油錢，並平均分攤給車上每個人。',
      unit: {
        label: '單位',
        metric: '公里與公升',
        us: '英里與加侖'
      },
      distance: {
        label: '距離',
        unit: '公里（單程）',
        decrease: '縮短距離',
        increase: '增加距離'
      },
      direction: {
        label: '行程',
        one: '單程',
        round: '來回'
      },
      consumption: {
        label: '油耗',
        unit: 'L/100 km',
        hint: '油耗若是 km/L，用 100 ÷ 油耗換算，例如 15 km/L ≈ 6.7 L/100 km。電動車請輸入 kWh/100 km 和每度電價。',
        decrease: '降低油耗',
        increase: '提高油耗'
      },
      fuelPrice: {
        label: '油價',
        unit: '元/公升',
        value: '30',
        step: '0.1',
        usStep: '0.5',
        decrease: '降低油價',
        increase: '提高油價'
      },
      people: {
        label: '分攤人數',
        unit: '人',
        decrease: '減少分攤人數',
        increase: '增加分攤人數'
      },
      tripsPerWeek: {
        label: '每週趟數',
        unit: '用於計算每月與每年總額',
        decrease: '減少每週趟數',
        increase: '增加每週趟數'
      },
      resultsTitle: '油錢',
      perPerson: '每人',
      perMonth: '每月',
      perYear: '每年',
      runtime: {
        direction: { one: '單程', round: '來回' },
        unit: {
          metric: {
            distance: '公里（單程）',
            consumption: 'L/100 km',
            price: '元/公升',
            perDistance: '公里',
            fuel: '公升'
          },
          us: {
            distance: '英里（單程）',
            consumption: 'mpg',
            price: '元/加侖',
            perDistance: '英里',
            fuel: '加侖'
          }
        },
        note: {
          empty: '輸入距離、油耗和油價，就能看到油錢。',
          result: '每趟耗油 {fuel}，每{distance}約 {price}。'
        }
      },
      about: {
        title: '油錢怎麼算',
        paragraphs: [
          '用油量 = 距離 × 油耗 ÷ 100。單程通勤 25 公里（一天來回 50 公里），車子油耗 6.5 L/100 km，一天就要用掉 3.25 公升汽油。乘以每公升油價就是這趟的油錢，再除以人數，就是每個人要分攤的金額。台灣常用 km/L 表示油耗，只要用 100 ÷ km/L 就能換算成 L/100 km。',
          '使用英里和加侖時，用油量是距離除以車子的 mpg（每加侖可行駛的英里數）。切換單位時，已輸入的數值會自動換算，兩種單位的數字都能拿來比較。',
          '每月和每年的總額依每週趟數計算，每週 5 趟來回是常見的通勤情況。電動車則請輸入每 100 公里的耗電量（kWh/100 km）和每度電價。'
        ]
      },
      faq: [
        {
          q: '開車油錢怎麼算？',
          a: '把距離乘以油耗，再乘以油價，最後除以 100。開 200 公里、油耗 6 L/100 km、95 無鉛汽油每公升 30 元：200 × 6 ÷ 100 × 30 元 = 360 元。'
        },
        {
          q: '油錢要怎麼和乘客分攤？',
          a: '輸入分攤油錢的人數，計算機就會把油錢平均分給每個人，駕駛也算在內。'
        },
        {
          q: '計算結果有包含車輛耗損、停車費或過路費嗎？',
          a: '沒有，只計算油錢。車輛耗損、保險、停車費和國道通行費都要另外算，所以開車的實際成本會更高。'
        }
      ]
    }
  }
};
