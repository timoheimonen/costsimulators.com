// Simplified Chinese (mainland China) texts for costsimulators.com. Only the
// site generator (scripts/build-site.js) reads this file. It has exactly the
// same keys as site/locales/en/strings.js; money values are typical prices in
// Chinese yuan (CNY).

module.exports = {
  meta: {
    name: '简体中文',
    locale: 'zh-CN',
    currency: 'CNY',
    ogLocale: 'zh_CN'
  },

  money: {
    symbol: '¥',
    zero: '¥0.00',
    placeholder: '0.00',
    decimals: '2'
  },

  common: {
    skip: '跳到主要内容',
    home: '首页',
    toggleTheme: '切换主题',
    themeToLight: '切换到浅色主题',
    themeToDark: '切换到深色主题',
    language: '语言',
    allTools: '全部工具',
    share: '分享',
    settings: '设置',
    quickPicks: '快捷选项',
    faqTitle: '常见问题',
    relatedTools: '更多计算器',
    imageAlt: 'costsimulators.com——免费在线计算器，算清日常开销'
  },

  footer: {
    privacy: '完全在你的浏览器中运行。无 Cookie，无跟踪。',
    about: '关于',
    contact: '联系',
    privacyPolicy: '隐私政策',
    terms: '使用条款'
  },

  runtime: {
    share: {
      linkCopied: '链接已复制',
      copyFailed: '复制失败',
      copied: '已复制！',
      calculatedWith: '使用 costsimulators.com 计算'
    },
    workTime: {
      minutes: '{m} 分钟',
      hours: '{h} 小时',
      hoursMinutes: '{h} 小时 {m} 分'
    }
  },

  home: {
    title: '免费在线费用计算器——会议成本、电费、油费等日常开销一算便知 | costsimulators.com',
    description: '免费、保护隐私的在线计算器，帮你算清开会、喝咖啡、吸烟、订阅、用电和开车的真实花费，还能把价格换算成工作时间。无需注册，打开浏览器即可使用。',
    eyebrow: '免费 · 私密 · 即时',
    heading: '几个小工具，<wbr>算清日常<span class="accent-text">开销</span>',
    lead: '快速算出各种东西的真实花费。无需注册，没有跟踪——所有计算都直接在你的浏览器中完成。',
    toolsTitle: '工具',
    toolCount: '{count} 个工具',
    suggestTitle: '有好点子？',
    suggestText: '欢迎在 GitHub 上提出新工具建议。',
    whyTitle: '小钱也会积少成多',
    whyText1: '开一次会、上班路上买杯咖啡、多开一个视频会员，单看都不算贵。可一旦按月、按年甚至按十年累加起来，数字就完全不一样了。',
    whyText2: '每个计算器只做一件事，只问必要的数字，并立即给出答案。所有计算都在你的浏览器中完成，你的数据始终留在自己的设备上。',
    aboutLink: '进一步了解 costsimulators.com',
    faq: [
      {
        q: 'costsimulators.com 免费吗？',
        a: '免费。所有计算器完全免费，无需注册，没有付费墙，也没有广告。工作中也可以放心使用。'
      },
      {
        q: '我输入的数字会被保存或发送到别处吗？',
        a: '不会。你输入的所有内容都在浏览器中计算，绝不会发送到服务器。本站不设置 Cookie，也不使用任何统计分析工具。'
      },
      {
        q: '可以分享计算结果吗？',
        a: '可以。你的设置会保存在网页地址中。点击“分享”复制链接，打开链接的人就能看到同样的计算结果。'
      }
    ]
  },

  notFound: {
    title: '页面未找到 | costsimulators.com',
    description: '你要找的页面不存在。请返回首页，查看会议成本、电费、油费等全部免费计算器。',
    heading: '页面不存在',
    lead: '网址可能输入有误，或者页面已经移动。所有计算器都在首页。'
  },

  documents: {
    about: {
      name: '关于',
      title: '关于我们——免费、保护隐私的费用计算器 | costsimulators.com',
      description: '了解 costsimulators.com 由谁制作、计算器如何工作。免费且保护隐私的计算器，涵盖会议、工时、生活习惯、订阅、电费和出行。'
    },
    privacy: {
      name: '隐私政策',
      title: '隐私政策 | costsimulators.com',
      description: '了解 costsimulators.com 如何处理你的数据：所有计算都在浏览器中完成，不跟踪、不做统计分析，也没有用户账户。'
    },
    terms: {
      name: '使用条款',
      title: '使用条款 | costsimulators.com',
      description: 'costsimulators.com 使用条款：可免费用于个人和商业用途，按“现状”提供，源代码以 MIT 许可证开源。'
    }
  },

  tools: {
    meetings: {
      name: '会议成本',
      heading: '会议成本计算器',
      title: '会议成本计算器——实时计时，算清开会成本 | costsimulators.com',
      description: '免费的会议成本计算器，带实时计时器。输入每人时薪和参会人数，逐秒查看这场会议花了多少钱。',
      card: '边开会边看会议成本实时上涨。',
      tag: '实时计时',
      lead: '设置时薪和参会人数，点击开始，实时查看会议花了多少钱。',
      pulseEvery: '1',
      rate: {
        label: '时薪',
        unit: '元/人',
        step: '10',
        value: '150',
        decrease: '降低时薪',
        increase: '提高时薪'
      },
      persons: {
        label: '参会人数',
        unit: '人',
        decrease: '减少参会人数',
        increase: '增加参会人数'
      },
      perMinute: '每分钟',
      perHour: '每小时',
      note: '计时过程中也可以修改数值。有人中途加入或离开时，改一下人数即可，新人数从修改那一刻起计入。',
      total: '总成本',
      elapsed: '已用时间',
      reset: '重置',
      copyReport: '复制报告',
      kbdHint: '按<kbd>空格键</kbd>开始或暂停',
      runtime: {
        mode: { start: '开始', pause: '暂停', resume: '继续' },
        status: { ready: '就绪', live: '计时中', paused: '已暂停' },
        announce: {
          invalid: '请先输入时薪和参会人数，再开始计时。',
          started: '计时已开始。',
          paused: '已暂停：用时 {time}，成本 {cost}。',
          reset: '计时器已重置。'
        },
        report: {
          cost: '会议成本：{cost}',
          duration: '时长：{time}',
          participants: '参会人员：{persons} 人 × {rate}/小时'
        }
      },
      about: {
        title: '会议成本如何计算',
        paragraphs: [
          '计算器用参会人数乘以每人时薪，再乘以已经过去的时间。5 个人开 1 小时的会，按每人每小时 150 元计算，成本就是 750 元——相当于每分钟 12.5 元。',
          '时薪应按一小时工作的实际用人成本来填，而不只是工资。除了工资，公司还要为员工缴纳社会保险和住房公积金（即“五险一金”中由单位承担的部分），粗略估算可在税前工资的基础上再加 30%～40%。如果不清楚每个人的时薪，用团队的平均值就足够了。',
          '即使切换到后台标签页，计时器也会准确计时；累计成本还会显示在浏览器标签页的标题上，共享屏幕时也能随时留意。会议结束后，暂停计时器，复制一份简短报告放进会议纪要即可。'
        ]
      },
      faq: [
        {
          q: '如何计算一场会议的成本？',
          a: '用参会人数乘以平均时薪，再乘以会议时长（小时）。例如 6 人 × 120 元/小时 × 1.5 小时 = 1,080 元。本计算器会在开会过程中实时完成这个计算。'
        },
        {
          q: '时薪应该填多少？',
          a: '填写一小时工作的全部成本：税前时薪加上单位缴纳的社保、公积金等用人成本。如果是顾问或外包人员，就用他们的收费标准。'
        },
        {
          q: '开会过程中可以修改参会人数吗？',
          a: '可以。人数和时薪随时都能修改。新数值从修改那一刻开始计算，之前已经累计的成本保持不变。'
        },
        {
          q: '切换标签页后计时器还会继续吗？',
          a: '会。计时器以时钟为准，所以即使页面在后台，总额也始终准确。计时期间，页面还会请求浏览器保持屏幕常亮。'
        }
      ]
    },

    workhours: {
      name: '工时换算',
      heading: '价格换算工时计算器',
      title: '工时换算计算器——买一样东西要工作多久？ | costsimulators.com',
      description: '把任何价格换算成需要工作的小时数、天数和周数。输入时薪、月薪或年薪，看看一件商品实际要花掉你多少工作时间。',
      card: '把任何价格换算成需要工作的小时数、天数和周数。',
      tag: '工作',
      lead: '输入你的收入和商品价格，看看要工作多久才买得起。',
      period: {
        label: '收入类型',
        hour: '时薪',
        month: '月薪',
        year: '年薪'
      },
      pay: {
        label: '收入',
        unit: '元/小时',
        value: '50',
        step: '1',
        monthStep: '100',
        yearStep: '1000',
        hint: '使用税后到手的收入，得出的答案最真实。',
        decrease: '减少收入',
        increase: '增加收入'
      },
      hoursPerWeek: {
        label: '每周工作时长',
        unit: '小时',
        value: '40',
        chip1: '40 小时',
        chip2: '44 小时',
        preset1: '40',
        preset2: '44',
        decrease: '减少每周工作时长',
        increase: '增加每周工作时长'
      },
      price: {
        label: '价格',
        unit: '元',
        value: '5999',
        step: '100',
        decrease: '降低价格',
        increase: '提高价格'
      },
      resultsTitle: '换算成工作时间',
      youNeedToWork: '你需要工作',
      workDays: '工作日',
      workWeeks: '工作周',
      hourlyRate: '你的时薪',
      runtime: {
        unit: {
          hour: '元/小时',
          month: '元/月',
          year: '元/年'
        },
        days: { one: '{n} 天', other: '{n} 天' },
        weeks: { one: '{n} 周', other: '{n} 周' },
        note: {
          empty: '输入收入、每周工作时长和价格，看看要工作多久才能买下它。',
          result: '按每天工作 {hours} 小时、每周 {days} 天计算。'
        }
      },
      about: {
        title: '工作时间如何计算',
        paragraphs: [
          '首先把你的收入换算成时薪：月薪乘以 12，再除以全年工作小时数（每周工作时长 × 52）；年薪则直接除以全年工作小时数。然后用价格除以时薪。',
          '工作日按每周 5 天计算，所以每周 40 小时就是每天 8 小时。例如，税后时薪 50 元，一部 5,999 元的手机需要工作将近 120 小时——差不多整整 3 个工作周。',
          '想得到最真实的答案，请使用税后到手的收入，因为这才是你真正能花的钱。把价格换算成工作时间，是判断一样东西是否真的值得买的简单方法。'
        ]
      },
      faq: [
        {
          q: '买一样东西需要工作多少小时？',
          a: '用价格除以你的税后时薪。如果税后每小时挣 40 元，一件 1,000 元的东西就相当于 25 小时的工作。'
        },
        {
          q: '应该用税前收入还是税后收入？',
          a: '用税后收入得出的结果最现实，因为这才是你实际可支配的钱。用税前收入会让东西显得比实际便宜。'
        },
        {
          q: '如何把月薪换算成时薪？',
          a: '月薪乘以 12，再除以全年工作小时数。每周工作 40 小时，一年就是 2,080 小时，所以税后月薪 8,000 元约合每小时 46 元。选择“月薪”后，计算器会自动帮你换算。'
        }
      ]
    },

    coffee: {
      name: '咖啡花费',
      heading: '咖啡花费计算器',
      title: '咖啡花费计算器——每天一杯咖啡，一年要花多少钱？ | costsimulators.com',
      description: '看看每天喝咖啡每月要花多少钱，1 年、5 年和 10 年下来又是多少。输入每杯价格和每周杯数即可，免费且保护隐私。',
      card: '看看每天一杯咖啡，一年、五年、十年下来要花多少钱。',
      tag: '习惯',
      lead: '输入一杯咖啡的价格和购买频率，看看这个习惯几年下来要花多少钱。',
      price: {
        label: '每杯价格',
        unit: '元',
        step: '1',
        value: '20',
        decrease: '降低咖啡价格',
        increase: '提高咖啡价格'
      },
      perWeek: {
        label: '每周杯数',
        unit: '杯',
        chip1: '工作日',
        chip2: '每天',
        chip3: '每天两杯',
        decrease: '减少每周杯数',
        increase: '增加每周杯数'
      },
      resultsTitle: '累计花费',
      in10Years: '10 年',
      perMonth: '每月',
      year1: '1 年',
      year5: '5 年',
      runtime: {
        note: {
          empty: '输入价格和每周喝几杯，即可查看累计花费。',
          result: '相当于每年约 {cups} 杯，每杯 {price}。'
        }
      },
      about: {
        title: '咖啡花费如何计算',
        paragraphs: [
          '每年花费 = 每杯价格 × 每周杯数 × 52 周。每月花费是年花费除以 12，5 年和 10 年的总额直接按年花费相乘，不计通货膨胀或涨价。',
          '每个工作日买一杯 20 元的咖啡，一年就要 5,200 元，十年就是 52,000 元。如果这个数字让你吃惊，在家自己冲咖啡或者自带杯子，都是省钱的简单办法。',
          '这个计算器适用于任何小额、经常性的消费：一杯奶茶、一罐功能饮料或一瓶矿泉水都可以。输入价格和每周买几次即可。'
        ]
      },
      faq: [
        {
          q: '每天一杯咖啡，一年要花多少钱？',
          a: '一周七天、每天一杯，一年就是 364 杯。按每杯 15 元计算，一年要花 5,460 元，十年就是 54,600 元。'
        },
        {
          q: '在家自己做咖啡更便宜吗？',
          a: '通常便宜得多。在家冲一杯咖啡的成本往往不到 3 元，而在咖啡馆一杯要二三十元。输入在家冲一杯的成本，对比一下就知道了。'
        },
        {
          q: '计算器考虑通货膨胀吗？',
          a: '不考虑。预测假定价格保持不变，所以显示的是按今天的价格计算的花费。如果价格上涨，长期的实际花费会更高。'
        }
      ]
    },

    smoking: {
      name: '吸烟花费',
      heading: '吸烟花费计算器',
      title: '烟钱计算器——抽烟一年要花多少钱？ | costsimulators.com',
      description: '算算抽烟每月要花多少钱，1 年、5 年和 10 年下来又是多少，以及戒烟能省下多少。输入每包价格和每天抽几支即可。',
      card: '看看每个月、每一年有多少钱化成了烟。',
      tag: '习惯',
      lead: '输入每包烟的价格和你的吸烟量，看看这些年有多少钱化成了烟。',
      packPrice: {
        label: '每包价格',
        unit: '元',
        step: '1',
        value: '20',
        decrease: '降低每包价格',
        increase: '提高每包价格'
      },
      perDay: {
        label: '每天支数',
        unit: '支',
        chip1: '每天 5 支',
        chip2: '每天 10 支',
        chip3: '每天 20 支',
        decrease: '减少每天支数',
        increase: '增加每天支数'
      },
      perPack: {
        label: '每包支数',
        unit: '支/包',
        value: '20',
        decrease: '减少每包支数',
        increase: '增加每包支数'
      },
      resultsTitle: '化成烟的钱',
      in10Years: '10 年',
      perMonth: '每月',
      year1: '1 年',
      year5: '5 年',
      runtime: {
        note: {
          empty: '输入每包价格、每天抽几支和每包支数，即可查看累计花费。',
          result: '相当于每年约 {cigarettes} 支烟（{packs} 包），每支 {price}。'
        }
      },
      about: {
        title: '吸烟花费如何计算',
        paragraphs: [
          '一支烟的价格 = 每包价格 ÷ 每包支数。再乘以每天抽的支数和 365 天，就得到每年的花费。每月花费是年花费的十二分之一，5 年和 10 年的总额按当前价格计算。',
          '每天半包、每包 20 元，一年就是 3,650 元，十年就是 36,500 元。看到这个总数，往往更有动力戒烟：同样的钱可以用来旅行、存起来或者还债。',
          '计算器只计算香烟本身的花费，看病的开销、更高的保险费和因病请假的损失都还没算在内。如果想戒烟，可以去医院的戒烟门诊，或拨打 12320 卫生健康热线寻求帮助。'
        ]
      },
      faq: [
        {
          q: '每天一包烟，一年要花多少钱？',
          a: '每天一包，一年就是 365 包。按每包 20 元计算，一年要花 7,300 元，十年就是 73,000 元。'
        },
        {
          q: '戒烟能省多少钱？',
          a: '就是计算器显示的全部金额。输入你目前的吸烟量，算出的每月和每年总额，就是戒烟后能省下的钱。'
        },
        {
          q: '自己卷烟也能算吗？',
          a: '可以。把一袋烟丝的价格填作每包价格，把能卷出的支数填作每包支数，再填上每天抽几支即可。'
        }
      ]
    },

    subscriptions: {
      name: '订阅费用',
      heading: '订阅费用计算器',
      title: '订阅费用计算器——会员月费、年费一键合计 | costsimulators.com',
      description: '把视频会员、健身房、手机套餐等所有订阅加在一起，查看每月、每年和 10 年的总花费，看看哪项订阅最花钱。',
      card: '把视频会员、健身房和其他所有定期付款集中算一算。',
      tag: '预算',
      lead: '列出你定期付费的所有项目，看看加起来一共多少钱。支持按月、按年和按周计费。',
      listTitle: '你的订阅',
      empty: '还没有订阅。在下方添加一项，或使用快速添加。',
      add: '添加订阅',
      quickAdd: '快速添加',
      quick: {
        1: { name: '视频会员', price: '25' },
        2: { name: '音乐会员', price: '15' },
        3: { name: '健身房', price: '200' },
        4: { name: '云存储', price: '21' },
        5: { name: '手机套餐', price: '59' },
        6: { name: '外卖会员', price: '15' }
      },
      note: '你的列表保存在网页地址中，可以收藏或分享，绝不会发送到任何地方。',
      row: {
        name: '名称',
        nameLabel: '订阅名称',
        priceLabel: '价格（元）',
        cycleLabel: '计费周期',
        monthly: '/月',
        yearly: '/年',
        weekly: '/周'
      },
      resultsTitle: '订阅总额',
      perYear: '每年',
      perMonth: '每月',
      perDay: '每天',
      in10Years: '10 年',
      breakdownLabel: '各项订阅的年费',
      copySummary: '复制汇总',
      runtime: {
        untitled: '未命名',
        remove: '删除“{name}”',
        removeUnnamed: '删除订阅',
        breakdown: '{cost}/年 · {percent}%',
        cycle: { monthly: '月', yearly: '年', weekly: '周' },
        note: {
          empty: '添加一项带价格的订阅，即可查看总额。',
          single: '“{name}”每年花费 {cost}。',
          biggest: '开销最大的是“{name}”，每年 {cost}，占总额的 {percent}%。'
        },
        summary: {
          item: '{name}：{price}/{cycle}',
          total: '合计：每月 {month}，每年 {year}'
        }
      },
      about: {
        title: '订阅总额如何计算',
        paragraphs: [
          '每项订阅都会换算成年费：月费乘以 12，周费乘以 52，年费保持不变。然后用年度总额除以 12 得到每月花费，除以 365 得到每天花费。',
          '明细会把订阅从贵到便宜排列，并显示每项在总额中所占的比例，一眼就能看出哪些该取消或换成更便宜的套餐。',
          '你的列表只保存在网页地址中，从不上传到服务器。把页面加入收藏夹，下次就能回到你的列表；也可以把链接分享给家人，一起梳理全家共用的订阅。'
        ]
      },
      faq: [
        {
          q: '怎样找出自己所有的订阅？',
          a: '翻看最近几个月的银行卡和信用卡账单，找出定期扣款。也别忘了检查支付宝和微信支付里的自动续费、免密支付设置，以及 App Store 的订阅管理。'
        },
        {
          q: '年付比月付更便宜吗？',
          a: '通常能便宜 15%～20%，但前提是你本来就会用满一整年。把两种方案都加到列表中，比较一下年费就知道了。'
        },
        {
          q: '我的列表会被保存吗？',
          a: '列表只保存在网页地址中。收藏或分享链接即可保留；服务器和 Cookie 中都不会存储任何内容。'
        }
      ]
    },

    electricity: {
      name: '电费',
      heading: '电费计算器',
      title: '电费计算器——电器耗电量和电费在线计算 | costsimulators.com',
      description: '根据功率、使用时长和电价，计算电器每天、每月和每年要花多少电费。免费在线电费计算器，1 度电即 1 千瓦时。',
      card: '看看一台电器开着每天、每月、每年要花多少电费。',
      tag: '家用',
      lead: '输入电器的功率、使用时长和电价，看看让它开着到底要花多少钱。',
      power: {
        label: '功率',
        unit: '瓦（W）',
        chip1: 'LED 灯泡 9 W',
        chip2: '笔记本电脑 60 W',
        chip3: '电视 100 W',
        chip4: '游戏电脑 400 W',
        chip5: '取暖器 1500 W',
        decrease: '降低功率',
        increase: '提高功率'
      },
      hours: {
        label: '每天使用时长',
        unit: '小时',
        decrease: '减少每天使用时长',
        increase: '增加每天使用时长'
      },
      days: {
        label: '每周使用天数',
        unit: '天',
        decrease: '减少每周使用天数',
        increase: '增加每周使用天数'
      },
      kwhPrice: {
        label: '电价',
        unit: '元/度',
        value: '0.55',
        step: '0.05',
        divisor: '1',
        hint: '1 度电 = 1 千瓦时（kWh）。实行阶梯电价的，可用电费总额除以用电度数，得出平均电价。',
        decrease: '降低电价',
        increase: '提高电价'
      },
      resultsTitle: '用电成本',
      perYear: '每年',
      perDayOfUse: '每个使用日',
      perMonth: '每月',
      energyPerYear: '年耗电量',
      runtime: {
        note: {
          empty: '输入功率、每天使用时长（最多 24 小时）、每周使用天数（最多 7 天）和电价。',
          result: '每个使用日耗电约 {day}，全年约 {year}。'
        }
      },
      about: {
        title: '电费如何计算',
        paragraphs: [
          '耗电量以千瓦时（kWh，也就是常说的“度”）计，等于功率（瓦）× 使用时长（小时）÷ 1,000。一台 100 瓦的电视每天看 4 小时，耗电 0.4 千瓦时，也就是 0.4 度。再乘以每度电的价格，就得到每个使用日的电费：按 0.55 元/度计算为 0.22 元。',
          '年电费会考虑电器每周使用几天，并平摊到全年 365 天。每月电费是年电费的十二分之一。',
          '电器的功率可以在铭牌或说明书上找到。很多电器大部分时间的实际功率都低于最大功率，所以计算结果是偏高的估算。居民用电大多实行阶梯电价，用电费账单上的平均电价计算最准确。'
        ]
      },
      faq: [
        {
          q: '如何计算一台电器的电费？',
          a: '用功率（千瓦）乘以使用时长，再乘以每度电的价格。一台 1,500 瓦的取暖器每天开 3 小时，电费为 1.5 千瓦 × 3 小时 × 0.55 元/度 ≈ 2.48 元。'
        },
        {
          q: '一台电器要耗多少度电？',
          a: '用瓦数除以 1,000，再乘以使用小时数。一台 60 瓦的笔记本电脑每天用 8 小时，耗电 0.48 度（千瓦时）；如果每天都用，一年约 175 度。'
        },
        {
          q: '电价应该填多少？',
          a: '填写电费账单上每度电的综合价格。实行阶梯电价或峰谷电价的，用账单总金额除以用电度数，就能得到一个不错的平均值。'
        },
        {
          q: '待机也耗电吗？',
          a: '会。很多电器待机时也要消耗几瓦的功率。输入待机功率和每天 24 小时，就能看到一年下来要花多少钱。'
        }
      ]
    },

    trip: {
      name: '油费',
      heading: '油费计算器',
      title: '油费计算器——自驾出行和通勤油费计算、AA 分摊 | costsimulators.com',
      description: '计算一次自驾出行或日常通勤的油费，并在同车人之间平摊。支持公里和升，也支持英里和加仑。',
      card: '算出一趟行程或通勤的油费，和同车人一起分摊。',
      tag: '出行',
      lead: '计算单次行程或日常通勤的油费，并在车上所有人之间平摊。',
      unit: {
        label: '单位',
        metric: '公里和升',
        us: '英里和加仑'
      },
      distance: {
        label: '距离',
        unit: '公里（单程）',
        decrease: '缩短距离',
        increase: '增加距离'
      },
      direction: {
        label: '行程',
        one: '单程',
        round: '往返'
      },
      consumption: {
        label: '油耗',
        unit: '升/百公里',
        hint: '开电动车？请填写百公里电耗（kWh/100 km）和每度电的价格。',
        decrease: '降低油耗',
        increase: '提高油耗'
      },
      fuelPrice: {
        label: '油价',
        unit: '元/升',
        value: '7.2',
        step: '0.1',
        usStep: '0.5',
        decrease: '降低油价',
        increase: '提高油价'
      },
      people: {
        label: '分摊人数',
        unit: '人',
        decrease: '减少人数',
        increase: '增加人数'
      },
      tripsPerWeek: {
        label: '每周行程次数',
        unit: '用于计算每月和每年总额',
        decrease: '减少每周行程次数',
        increase: '增加每周行程次数'
      },
      resultsTitle: '油费',
      perPerson: '每人',
      perMonth: '每月',
      perYear: '每年',
      runtime: {
        direction: { one: '单程', round: '往返' },
        unit: {
          metric: {
            distance: '公里（单程）',
            consumption: '升/百公里',
            price: '元/升',
            perDistance: '公里',
            fuel: '升'
          },
          us: {
            distance: '英里（单程）',
            consumption: '英里/加仑',
            price: '元/加仑',
            perDistance: '英里',
            fuel: '加仑'
          }
        },
        note: {
          empty: '输入距离、油耗和油价，即可查看油费。',
          result: '本次行程耗油 {fuel}，折合每{distance}约 {price}。'
        }
      },
      about: {
        title: '油费如何计算',
        paragraphs: [
          '耗油量 = 距离 × 百公里油耗 ÷ 100。如果单程通勤 25 公里（每天往返 50 公里），汽车油耗为 6.5 升/百公里，每天就要消耗 3.25 升油；按 92 号汽油每升 7.2 元计算，每天油费为 23.4 元。再除以人数，就能把费用在同车人之间平摊。',
          '使用英里和加仑时，耗油量等于距离除以汽车的 mpg 值（每加仑汽油能行驶的英里数）。切换单位会自动换算你已经输入的数值，方便比较两种单位制下的数据。',
          '每月和每年的总额按每周行程次数计算——每周往返 5 次是典型的通勤情况。如果开的是电动车，请改为填写百公里电耗（kWh/100 km）和每度电的价格。'
        ]
      },
      faq: [
        {
          q: '如何计算一趟行程的油费？',
          a: '用距离乘以百公里油耗和油价，再除以 100。例如开 200 公里，油耗 6 升/百公里，油价 7.2 元/升：200 × 6 ÷ 100 × 7.2 元 = 86.4 元。'
        },
        {
          q: '油费怎么在同车人之间分摊？',
          a: '输入分摊费用的人数，计算器会把油费平均分给所有人，司机也算在内。'
        },
        {
          q: '计算器包括车辆损耗、停车费或过路费吗？',
          a: '不包括，只计算油费。车辆损耗、保险、停车费和高速通行费都要另算，所以开车的实际总成本更高。'
        }
      ]
    }
  }
};
