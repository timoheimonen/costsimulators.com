// Vietnamese (Tiếng Việt) texts for costsimulators.com. Only the site
// generator (scripts/build-site.js) reads this file. It has exactly the same
// keys as site/locales/en/strings.js; money values are typical prices in
// Vietnamese dong (VND), shown without decimals.

module.exports = {
  meta: {
    name: 'Tiếng Việt',
    locale: 'vi-VN',
    currency: 'VND',
    ogLocale: 'vi_VN'
  },

  money: {
    symbol: '₫',
    zero: '0 ₫',
    placeholder: '0',
    decimals: '0'
  },

  common: {
    skip: 'Chuyển đến nội dung',
    home: 'Trang chủ',
    toggleTheme: 'Đổi giao diện',
    themeToLight: 'Chuyển sang giao diện sáng',
    themeToDark: 'Chuyển sang giao diện tối',
    language: 'Ngôn ngữ',
    allTools: 'Tất cả công cụ',
    share: 'Chia sẻ',
    settings: 'Cài đặt',
    quickPicks: 'Chọn nhanh',
    faqTitle: 'Câu hỏi thường gặp',
    relatedTools: 'Công cụ tính khác',
    imageAlt: 'costsimulators.com – công cụ tính chi phí miễn phí cho những câu hỏi tiền bạc hằng ngày',
    invest: {
      label: 'Nếu đem số tiền này đi đầu tư'
    },
    receipt: {
      open: 'In hóa đơn',
      title: 'Hóa đơn của bạn',
      close: 'Đóng',
      skip: 'Đến tổng cộng',
      total: 'Tổng cộng',
      length: 'Chiều dài hóa đơn',
      thanks: 'Cảm ơn bạn đã gắn bó suốt 10 năm!',
      image: 'Chia sẻ ảnh'
    }
  },

  footer: {
    privacy: 'Chạy hoàn toàn trong trình duyệt của bạn. Không cookie, không theo dõi.',
    about: 'Giới thiệu',
    contact: 'Liên hệ',
    privacyPolicy: 'Quyền riêng tư',
    terms: 'Điều khoản'
  },

  runtime: {
    share: {
      linkCopied: 'Đã sao chép liên kết',
      copyFailed: 'Không sao chép được',
      copied: 'Đã sao chép!',
      calculatedWith: 'Tính bằng costsimulators.com'
    },
    workTime: {
      minutes: '{m} phút',
      hours: '{h} giờ',
      hoursMinutes: '{h} giờ {m} phút'
    },
    invest: {
      note: '{monthly} mỗi tháng trong 10 năm với lợi nhuận {rate} mỗi năm: {paid} tiền gốc bạn bỏ ra và {gain} tiền lãi.'
    },
    receipt: {
      subtotal: 'Tạm tính, năm thứ {year}',
      year: 'Năm thứ {year}',
      unit: 'meter',
      saved: 'Đã lưu ảnh'
    }
  },

  home: {
    title: 'Công cụ tính chi phí miễn phí cho cuộc sống hằng ngày',
    description: 'Công cụ tính miễn phí, riêng tư cho thấy cái giá thật của mọi thứ: cuộc họp, giờ làm việc, thói quen, gói đăng ký, tiền điện, tiền xăng và chi phí mỗi lần dùng. Không cần đăng ký.',
    eyebrow: 'Riêng tư · Miễn phí · Tức thì',
    heading: 'Những công cụ nhỏ cho các câu hỏi <span class="accent-text">tiền bạc</span> hằng ngày.',
    lead: 'Các công cụ tính nhanh cho thấy mọi thứ thực sự tốn bao nhiêu. Không cần đăng ký, không theo dõi – mọi phép tính đều chạy ngay trong trình duyệt của bạn.',
    toolsTitle: 'Công cụ',
    toolCount: '{count} công cụ',
    suggestTitle: 'Bạn có ý tưởng?',
    suggestText: 'Đề xuất công cụ mới trên GitHub.',
    whyTitle: 'Chi phí nhỏ cộng lại thành lớn',
    whyText1: 'Một cuộc họp, một ly cà phê trên đường đi làm hay thêm một dịch vụ xem phim trực tuyến hiếm khi khiến bạn thấy đắt. Nhưng cộng dồn qua một tháng, một năm hay mười năm, con số trông sẽ rất khác.',
    whyText2: 'Mỗi công cụ chỉ làm một việc, chỉ hỏi những con số cần thiết và hiện kết quả ngay lập tức. Mọi thứ được tính trong trình duyệt, nên các con số của bạn luôn nằm trên thiết bị của bạn.',
    aboutLink: 'Tìm hiểu thêm về costsimulators.com',
    faq: [
      {
        q: 'costsimulators.com có miễn phí không?',
        a: 'Có. Tất cả công cụ đều hoàn toàn miễn phí, không cần đăng ký, không có tính năng trả phí và không có quảng cáo. Bạn cũng có thể dùng chúng trong công việc.'
      },
      {
        q: 'Các con số của tôi có được lưu lại hay gửi đi đâu không?',
        a: 'Không. Mọi thứ bạn nhập đều được tính trong trình duyệt và không bao giờ được gửi lên máy chủ. Trang web không đặt cookie và không dùng công cụ phân tích.'
      },
      {
        q: 'Tôi có thể chia sẻ một phép tính không?',
        a: 'Có. Các thiết lập của bạn được lưu trong địa chỉ trang. Nhấn Chia sẻ để sao chép liên kết, và ai mở liên kết đó cũng sẽ thấy đúng phép tính như bạn.'
      }
    ]
  },

  notFound: {
    title: 'Không tìm thấy trang',
    description: 'Trang bạn đang tìm không tồn tại.',
    heading: 'Trang này không tồn tại.',
    lead: 'Có thể địa chỉ bị gõ sai hoặc trang đã được chuyển đi nơi khác. Tất cả công cụ tính đều có ở trang chủ.'
  },

  documents: {
    about: {
      name: 'Giới thiệu',
      title: 'Giới thiệu – Công cụ tính chi phí miễn phí và riêng tư',
      description: 'Ai làm ra costsimulators.com và các công cụ tính hoạt động thế nào. Công cụ tính chi phí miễn phí, riêng tư cho cuộc họp, giờ làm việc, thói quen, mua sắm, gói đăng ký, tiền điện và chuyến đi.'
    },
    privacy: {
      name: 'Chính sách quyền riêng tư',
      title: 'Chính sách quyền riêng tư',
      description: 'Cách costsimulators.com xử lý dữ liệu của bạn: mọi phép tính chạy trong trình duyệt, không theo dõi, không công cụ phân tích và không cần tài khoản.'
    },
    terms: {
      name: 'Điều khoản sử dụng',
      title: 'Điều khoản sử dụng',
      description: 'Điều khoản sử dụng costsimulators.com: miễn phí cho mục đích cá nhân và thương mại, cung cấp nguyên trạng, mã nguồn mở theo giấy phép MIT License.'
    }
  },

  tools: {
    meetings: {
      name: 'Chi phí cuộc họp',
      heading: 'Công cụ tính chi phí cuộc họp',
      title: 'Tính chi phí cuộc họp – Đồng hồ đếm chi phí trực tiếp',
      description: 'Công cụ tính chi phí cuộc họp miễn phí với đồng hồ chạy trực tiếp. Nhập chi phí theo giờ và số người tham dự, rồi xem cuộc họp tốn bao nhiêu theo từng giây.',
      card: 'Xem chi phí cuộc họp tăng lên theo thời gian thực trong lúc mọi người thảo luận.',
      tag: 'Đồng hồ trực tiếp',
      lead: 'Đặt chi phí theo giờ và số người tham dự, nhấn Bắt đầu và xem cuộc họp tốn bao nhiêu ngay trong lúc diễn ra.',
      pulseEvery: '5000',
      rate: {
        label: 'Chi phí theo giờ',
        unit: '₫ mỗi người',
        step: '10000',
        value: '150000',
        decrease: 'Giảm chi phí theo giờ',
        increase: 'Tăng chi phí theo giờ'
      },
      persons: {
        label: 'Người tham dự',
        unit: 'người',
        decrease: 'Giảm số người tham dự',
        increase: 'Tăng số người tham dự'
      },
      perMinute: 'Mỗi phút',
      perHour: 'Mỗi giờ',
      note: 'Bạn có thể thay đổi các giá trị khi đồng hồ đang chạy. Người vào hoặc rời cuộc họp được tính từ thời điểm đó.',
      total: 'Tổng chi phí',
      elapsed: 'Thời gian đã trôi qua',
      reset: 'Đặt lại',
      copyReport: 'Sao chép báo cáo',
      kbdHint: 'Nhấn <kbd>Phím cách</kbd> để bắt đầu hoặc tạm dừng',
      runtime: {
        mode: { start: 'Bắt đầu', pause: 'Tạm dừng', resume: 'Tiếp tục' },
        status: { ready: 'Sẵn sàng', live: 'Đang chạy', paused: 'Đã tạm dừng' },
        announce: {
          invalid: 'Nhập chi phí theo giờ và số người tham dự để bắt đầu.',
          started: 'Đồng hồ đã bắt đầu chạy.',
          paused: 'Đã tạm dừng ở {cost} sau {time}.',
          reset: 'Đồng hồ đã được đặt lại.'
        },
        report: {
          cost: 'Chi phí cuộc họp: {cost}',
          duration: 'Thời lượng: {time}',
          participants: 'Người tham dự: {persons} × {rate}/giờ'
        }
      },
      about: {
        title: 'Cách tính chi phí cuộc họp',
        paragraphs: [
          'Công cụ nhân số người tham dự với chi phí theo giờ của họ và với thời gian đã trôi qua. Một cuộc họp kéo dài một giờ với 5 người, mỗi người 150.000 ₫ một giờ, tốn 750.000 ₫ – tức 12.500 ₫ mỗi phút.',
          'Với chi phí theo giờ, hãy dùng số tiền mà một giờ làm việc thực sự tiêu tốn của doanh nghiệp, không chỉ riêng tiền lương. Ngoài lương, doanh nghiệp còn đóng bảo hiểm xã hội, bảo hiểm y tế và bảo hiểm thất nghiệp bắt buộc (khoảng 21,5% tiền lương đóng bảo hiểm), chưa kể lương tháng 13 và các khoản phúc lợi khác. Nếu không biết mức của từng người, mức trung bình của cả nhóm là đủ.',
          'Đồng hồ vẫn đếm chính xác khi thẻ trình duyệt chạy nền, và chi phí đang tăng được hiển thị trên tiêu đề thẻ, nên bạn vẫn theo dõi được trong lúc chia sẻ màn hình. Khi cuộc họp kết thúc, hãy tạm dừng đồng hồ và sao chép một báo cáo ngắn vào biên bản họp.'
        ]
      },
      faq: [
        {
          q: 'Làm sao tính chi phí của một cuộc họp?',
          a: 'Nhân số người tham dự với chi phí theo giờ trung bình của họ và với thời lượng cuộc họp tính bằng giờ. Ví dụ: 6 người × 120.000 ₫ mỗi giờ × 1,5 giờ = 1.080.000 ₫. Công cụ này tính trực tiếp trong khi cuộc họp diễn ra.'
        },
        {
          q: 'Nên dùng chi phí theo giờ là bao nhiêu?',
          a: 'Hãy dùng toàn bộ chi phí của một giờ làm việc: lương trước thuế theo giờ cộng với phần bảo hiểm bắt buộc do doanh nghiệp đóng, lương tháng 13 và các chi phí nhân sự khác. Với chuyên gia tư vấn và người làm tự do, hãy dùng mức phí họ tính cho khách hàng.'
        },
        {
          q: 'Có thể thay đổi số người tham dự giữa cuộc họp không?',
          a: 'Có. Bạn có thể đổi số người hoặc chi phí theo giờ bất cứ lúc nào. Giá trị mới được tính từ thời điểm đó, còn chi phí đã cộng dồn trước đó vẫn giữ nguyên.'
        },
        {
          q: 'Đồng hồ có tiếp tục chạy khi tôi chuyển sang thẻ khác không?',
          a: 'Có. Đồng hồ dựa trên giờ hệ thống, nên tổng chi phí vẫn đúng khi thẻ chạy nền. Trong lúc đồng hồ chạy, trang cũng yêu cầu trình duyệt giữ màn hình luôn sáng.'
        }
      ]
    },

    workhours: {
      name: 'Giờ làm việc',
      heading: 'Công cụ quy đổi giá ra giờ làm việc',
      title: 'Quy đổi giá ra giờ làm việc – Phải làm bao lâu để mua?',
      description: 'Quy đổi bất kỳ mức giá nào ra số giờ, ngày và tuần làm việc. Nhập lương theo giờ, theo tháng hoặc theo năm và xem một món đồ thực sự tốn bao nhiêu thời gian làm việc.',
      card: 'Quy đổi bất kỳ mức giá nào ra số giờ, ngày và tuần bạn phải làm việc để mua được.',
      tag: 'Công việc',
      lead: 'Nhập lương của bạn và một mức giá để xem bạn phải làm việc bao lâu mới mua được.',
      period: {
        label: 'Tôi biết lương của mình',
        hour: 'Theo giờ',
        month: 'Theo tháng',
        year: 'Theo năm'
      },
      pay: {
        label: 'Lương',
        unit: '₫ mỗi giờ',
        value: '80000',
        step: '5000',
        monthStep: '500000',
        yearStep: '5000000',
        hint: 'Hãy dùng lương thực nhận sau thuế và bảo hiểm để có câu trả lời sát thực tế nhất.',
        decrease: 'Giảm lương',
        increase: 'Tăng lương'
      },
      hoursPerWeek: {
        label: 'Số giờ mỗi tuần',
        unit: 'giờ',
        value: '48',
        chip1: '40 giờ',
        chip2: '48 giờ',
        preset1: '40',
        preset2: '48',
        decrease: 'Giảm số giờ mỗi tuần',
        increase: 'Tăng số giờ mỗi tuần'
      },
      price: {
        label: 'Giá',
        unit: '₫',
        value: '20000000',
        step: '500000',
        decrease: 'Giảm mức giá',
        increase: 'Tăng mức giá'
      },
      resultsTitle: 'Giá tính bằng thời gian làm việc',
      youNeedToWork: 'Bạn cần làm việc',
      workDays: 'Ngày làm việc',
      workWeeks: 'Tuần làm việc',
      hourlyRate: 'Lương theo giờ của bạn',
      runtime: {
        unit: {
          hour: '₫ mỗi giờ',
          month: '₫ mỗi tháng',
          year: '₫ mỗi năm'
        },
        days: { other: '{n} ngày' },
        weeks: { other: '{n} tuần' },
        note: {
          empty: 'Nhập lương, số giờ làm mỗi tuần và một mức giá để xem bạn cần làm việc bao lâu.',
          result: 'Tính theo ngày làm việc {hours} giờ, {days} ngày mỗi tuần.'
        }
      },
      about: {
        title: 'Cách tính thời gian làm việc',
        paragraphs: [
          'Trước tiên, lương của bạn được quy đổi thành lương theo giờ. Lương tháng được nhân với 12 rồi chia cho số giờ bạn làm trong một năm (số giờ mỗi tuần × 52); lương năm được chia thẳng cho số giờ đó. Sau đó, giá món đồ được chia cho lương theo giờ của bạn.',
          'Số ngày làm việc được tính theo tuần làm việc 5 ngày, nên 48 giờ mỗi tuần nghĩa là mỗi ngày làm 9,6 giờ. Ví dụ, với lương 80.000 ₫ một giờ, một chiếc điện thoại 20.000.000 ₫ tốn 250 giờ làm việc – hơn 26 ngày làm việc, tức hơn năm tuần. Nếu bạn làm 6 ngày mỗi tuần, mỗi ngày 8 giờ, thì 250 giờ đó là khoảng 31 ngày làm việc.',
          'Để có câu trả lời sát thực tế nhất, hãy dùng lương thực nhận sau thuế và bảo hiểm, vì đó là số tiền bạn thực sự chi tiêu. Nghĩ về giá cả bằng giờ làm việc là cách đơn giản để quyết định một món đồ có thực sự đáng mua hay không.'
        ]
      },
      faq: [
        {
          q: 'Tôi phải làm việc bao nhiêu giờ để mua được một món đồ?',
          a: 'Chia giá món đồ cho lương thực nhận theo giờ của bạn. Nếu bạn nhận 60.000 ₫ một giờ sau thuế, một món đồ 3.000.000 ₫ tốn 50 giờ làm việc.'
        },
        {
          q: 'Nên dùng lương trước thuế hay lương thực nhận?',
          a: 'Lương thực nhận sau thuế và bảo hiểm cho câu trả lời thực tế nhất, vì đó là số tiền bạn thật sự có để chi tiêu. Dùng lương trước thuế sẽ khiến mọi thứ trông rẻ hơn thực tế.'
        },
        {
          q: 'Làm sao quy đổi lương tháng ra lương theo giờ?',
          a: 'Nhân lương tháng với 12 rồi chia cho số giờ bạn làm trong một năm. Với tuần làm việc 48 giờ, con số này là 2.496 giờ, nên lương 15.000.000 ₫ một tháng tương đương khoảng 72.000 ₫ một giờ. Công cụ sẽ tự tính khi bạn chọn Theo tháng.'
        }
      ]
    },

    costperuse: {
      name: 'Chi phí mỗi lần dùng',
      heading: 'Công cụ tính chi phí mỗi lần dùng',
      title: 'Tính chi phí mỗi lần dùng – Món đồ có đáng tiền không?',
      description: 'Tính xem một món đồ thực sự tốn bao nhiêu cho mỗi lần dùng: giá mua trừ giá bán lại, chia cho số lần và khoảng thời gian bạn sử dụng nó.',
      card: 'Chia giá mua cho mọi lần sử dụng để xem món đồ có đáng tiền không.',
      tag: 'Mua sắm',
      lead: 'Nhập giá, tần suất bạn sẽ dùng món đồ và dùng trong bao lâu, rồi xem mỗi lần dùng thực sự tốn bao nhiêu.',
      price: {
        label: 'Giá',
        unit: '₫',
        value: '10000000',
        step: '100000',
        decrease: 'Giảm mức giá',
        increase: 'Tăng mức giá'
      },
      period: {
        label: 'Tần suất sử dụng',
        week: 'Hằng tuần',
        month: 'Hằng tháng',
        year: 'Hằng năm'
      },
      uses: {
        label: 'Số lần dùng',
        unit: 'lần mỗi tuần',
        decrease: 'Giảm số lần dùng',
        increase: 'Tăng số lần dùng'
      },
      years: {
        label: 'Số năm sử dụng',
        unit: 'năm',
        chip1: '1 năm',
        chip2: '3 năm',
        chip3: '5 năm',
        decrease: 'Giảm số năm sử dụng',
        increase: 'Tăng số năm sử dụng'
      },
      resale: {
        label: 'Giá bán lại',
        unit: '₫, không bắt buộc',
        hint: 'Số tiền bạn dự kiến thu về khi bán lại. Để 0 nếu không có.',
        decrease: 'Giảm mức giá bán lại',
        increase: 'Tăng mức giá bán lại'
      },
      resultsTitle: 'Chi phí mỗi lần dùng',
      perUse: 'Mỗi lần dùng tốn',
      totalUses: 'Tổng số lần dùng',
      perMonth: 'Mỗi tháng',
      perYear: 'Mỗi năm',
      runtime: {
        unit: {
          week: 'lần mỗi tuần',
          month: 'lần mỗi tháng',
          year: 'lần mỗi năm'
        },
        note: {
          empty: 'Nhập giá, tần suất sử dụng và số năm. Giá bán lại phải thấp hơn giá mua.',
          result: 'Nếu dùng thêm một năm nữa, chi phí mỗi lần dùng sẽ giảm xuống còn {next}.'
        }
      },
      about: {
        title: 'Cách tính chi phí mỗi lần dùng',
        paragraphs: [
          'Chi phí mỗi lần dùng là giá mua trừ đi số tiền bạn thu về khi bán lại, chia cho số lần sử dụng. Số lần sử dụng là tần suất dùng × số tuần, tháng hoặc năm bạn dùng món đồ. Một món đồ 10.000.000 ₫ dùng 3 lần mỗi tuần trong 3 năm sẽ được dùng 468 lần, tức 21.368 ₫ mỗi lần dùng.',
          'Chi phí theo tháng và theo năm chia cùng số tiền đó cho khoảng thời gian bạn sở hữu món đồ, giúp bạn dễ so sánh giữa việc mua, đi thuê, thuê dài hạn hay trả phí định kỳ.',
          'Chi phí mỗi lần dùng là cách đơn giản để so sánh một món đồ rẻ nhưng nhanh hỏng với một món đắt nhưng bền. Một đôi giày 500.000 ₫ mang 50 lần tốn 10.000 ₫ mỗi lần; một đôi 2.000.000 ₫ mang 400 lần chỉ tốn 5.000 ₫.'
        ]
      },
      faq: [
        {
          q: 'Làm sao tính chi phí mỗi lần dùng?',
          a: 'Chia giá mua cho số lần bạn dùng món đồ. Nếu sau này bạn bán lại, hãy trừ giá bán lại khỏi giá mua trước. Một chiếc áo khoác 800.000 ₫ mặc 80 lần tốn 10.000 ₫ mỗi lần mặc.'
        },
        {
          q: 'Chi phí mỗi lần dùng bao nhiêu là hợp lý?',
          a: 'Tùy vào chi phí của phương án thay thế. Hãy so sánh với việc đi thuê, đi mượn hoặc trả tiền theo từng lần: nếu tập một buổi gym lẻ mất 60.000 ₫, thẻ tập 500.000 ₫ mỗi tháng sẽ có lợi hơn từ buổi thứ chín trong tháng.'
        },
        {
          q: 'Có dùng được cho gói đăng ký và thẻ hội viên không?',
          a: 'Có. Nhập giá cả năm làm giá mua, tần suất sử dụng và 1 năm. Với thẻ tập gym 500.000 ₫ mỗi tháng, hãy nhập 6.000.000 ₫ và số buổi tập mỗi tuần của bạn.'
        }
      ]
    },

    coffee: {
      name: 'Thói quen cà phê',
      heading: 'Công cụ tính chi phí cà phê',
      title: 'Tính chi phí cà phê – Thói quen cà phê tốn bao nhiêu?',
      description: 'Xem ly cà phê hằng ngày của bạn tốn bao nhiêu mỗi tháng và sau 1, 5 và 10 năm. Nhập giá mỗi ly và số ly mỗi tuần – miễn phí và riêng tư.',
      card: 'Xem ly cà phê hằng ngày cộng lại thành bao nhiêu sau một, năm và mười năm.',
      tag: 'Thói quen',
      lead: 'Nhập giá một ly cà phê và tần suất bạn mua để xem thói quen này cộng dồn thành bao nhiêu qua các năm.',
      price: {
        label: 'Giá mỗi ly',
        unit: '₫',
        step: '5000',
        value: '35000',
        decrease: 'Giảm mức giá cà phê',
        increase: 'Tăng mức giá cà phê'
      },
      perWeek: {
        label: 'Số ly mỗi tuần',
        unit: 'ly',
        chip1: 'Ngày làm việc',
        chip2: 'Mỗi ngày',
        chip3: 'Hai ly mỗi ngày',
        decrease: 'Giảm số ly mỗi tuần',
        increase: 'Tăng số ly mỗi tuần'
      },
      resultsTitle: 'Cộng dồn thành',
      in10Years: 'Trong 10 năm',
      perMonth: 'Mỗi tháng',
      year1: '1 năm',
      year5: '5 năm',
      receiptTitle: 'Hóa đơn cà phê',
      receiptCount: 'Số ly',
      runtime: {
        receiptItem: 'Cà phê',
        note: {
          empty: 'Nhập giá và số ly bạn uống mỗi tuần để xem tổng chi phí.',
          result: 'Tức khoảng {cups} ly mỗi năm, mỗi ly {price}.'
        }
      },
      about: {
        title: 'Cách tính chi phí cà phê',
        paragraphs: [
          'Chi phí mỗi năm là giá mỗi ly × số ly mỗi tuần × 52 tuần. Chi phí mỗi tháng là chi phí năm chia cho 12, còn tổng 5 năm và 10 năm được nhân lên từ chi phí năm, không tính lạm phát hay tăng giá.',
          'Một ly cà phê 35.000 ₫ vào mỗi ngày làm việc cộng lại thành 9.100.000 ₫ mỗi năm và 91.000.000 ₫ sau mười năm. Nếu con số khiến bạn bất ngờ, tự pha phin ở nhà hoặc mang theo bình giữ nhiệt là những cách dễ dàng để tiết kiệm.',
          'Công cụ này dùng được cho mọi khoản chi nhỏ và đều đặn: trà sữa, nước tăng lực, ổ bánh mì buổi sáng hay chai nước suối. Chỉ cần nhập giá và số lần bạn mua mỗi tuần.'
        ]
      },
      faq: [
        {
          q: 'Một ly cà phê mỗi ngày tốn bao nhiêu trong một năm?',
          a: 'Một ly mỗi ngày, bảy ngày một tuần là 364 ly mỗi năm. Với giá 30.000 ₫ một ly, con số là 10.920.000 ₫ mỗi năm và 109.200.000 ₫ sau mười năm.'
        },
        {
          q: 'Tự pha cà phê ở nhà có rẻ hơn không?',
          a: 'Thường là rẻ hơn rất nhiều. Một ly cà phê phin tự pha ở nhà thường chưa tới 5.000 ₫, trong khi ở quán có thể đắt gấp nhiều lần. Hãy nhập chi phí mỗi ly tự pha để so sánh.'
        },
        {
          q: 'Công cụ có tính đến lạm phát không?',
          a: 'Không. Các con số dự phóng giả định giá không đổi, nên chúng cho thấy chi phí của thói quen theo giá hiện tại. Khi giá tăng, chi phí thực tế về lâu dài sẽ cao hơn.'
        },
        {
          q: 'Nếu tôi đem số tiền này đi đầu tư thì sao?',
          a: 'Ô “Nếu đem số tiền này đi đầu tư” cho thấy số tiền sẽ tăng lên bao nhiêu nếu mỗi tháng bạn đem đi đầu tư thay vì tiêu nó, với lợi nhuận 4% mỗi năm, lãi kép theo tháng. Một ly cà phê 35.000 ₫ mỗi ngày làm việc là khoảng 758.333 ₫ mỗi tháng, sau 10 năm tăng lên khoảng 111,2 triệu đồng – trong đó 91 triệu đồng là tiền của chính bạn, phần còn lại là tiền lãi. Thuế, phí và lạm phát không được tính. Đây chỉ là ví dụ, không phải lời khuyên đầu tư.'
        }
      ]
    },

    smoking: {
      name: 'Chi phí hút thuốc',
      heading: 'Công cụ tính chi phí hút thuốc lá',
      title: 'Tính chi phí hút thuốc – Thuốc lá tốn của bạn bao nhiêu?',
      description: 'Tính xem hút thuốc lá tốn bao nhiêu mỗi tháng và sau 1, 5 và 10 năm – và bạn tiết kiệm được bao nhiêu khi bỏ thuốc. Nhập giá mỗi bao và số điếu mỗi ngày.',
      card: 'Xem bao nhiêu tiền tan thành khói mỗi tháng và qua các năm.',
      tag: 'Thói quen',
      lead: 'Nhập giá một bao thuốc và lượng bạn hút để xem bao nhiêu tiền tan thành khói qua các năm.',
      packPrice: {
        label: 'Giá mỗi bao',
        unit: '₫',
        step: '1000',
        value: '30000',
        decrease: 'Giảm mức giá mỗi bao',
        increase: 'Tăng mức giá mỗi bao'
      },
      perDay: {
        label: 'Số điếu mỗi ngày',
        unit: 'điếu',
        chip1: '5 điếu/ngày',
        chip2: '10 điếu/ngày',
        chip3: '20 điếu/ngày',
        decrease: 'Giảm số điếu mỗi ngày',
        increase: 'Tăng số điếu mỗi ngày'
      },
      perPack: {
        label: 'Số điếu mỗi bao',
        unit: 'điếu/bao',
        value: '20',
        decrease: 'Giảm số điếu mỗi bao',
        increase: 'Tăng số điếu mỗi bao'
      },
      resultsTitle: 'Tan thành khói',
      in10Years: 'Trong 10 năm',
      perMonth: 'Mỗi tháng',
      year1: '1 năm',
      year5: '5 năm',
      receiptTitle: 'Hóa đơn thuốc lá',
      receiptCount: 'Số bao',
      runtime: {
        receiptItem: 'Bao thuốc lá',
        note: {
          empty: 'Nhập giá mỗi bao, số điếu bạn hút mỗi ngày và số điếu trong một bao để xem tổng chi phí.',
          result: 'Tức khoảng {cigarettes} điếu ({packs} bao) mỗi năm, mỗi điếu {price}.'
        }
      },
      about: {
        title: 'Cách tính chi phí hút thuốc',
        paragraphs: [
          'Giá một điếu thuốc là giá mỗi bao chia cho số điếu trong bao. Con số đó được nhân với số điếu hút mỗi ngày và với 365 ngày để ra chi phí mỗi năm. Chi phí mỗi tháng bằng một phần mười hai số đó, còn tổng 5 năm và 10 năm dùng giá hiện tại.',
          'Nửa bao mỗi ngày với giá 30.000 ₫ một bao là 5.475.000 ₫ mỗi năm và gần 55 triệu đồng sau mười năm. Nhìn thấy tổng số có thể là động lực mạnh mẽ: cùng số tiền đó có thể dành cho một chuyến du lịch, khoản tiết kiệm hoặc trả nợ.',
          'Công cụ chỉ tính tiền mua thuốc lá. Chi phí khám chữa bệnh và những ngày phải nghỉ ốm còn chưa được tính. Nếu bạn muốn được giúp để bỏ thuốc, bác sĩ của bạn hoặc một dịch vụ tư vấn cai thuốc lá tại địa phương có thể hỗ trợ.'
        ]
      },
      faq: [
        {
          q: 'Hút một bao mỗi ngày tốn bao nhiêu trong một năm?',
          a: 'Một bao mỗi ngày là 365 bao mỗi năm. Với giá 30.000 ₫ một bao, con số là 10.950.000 ₫ mỗi năm và 109.500.000 ₫ sau mười năm.'
        },
        {
          q: 'Bỏ thuốc lá thì tôi tiết kiệm được bao nhiêu?',
          a: 'Toàn bộ số tiền mà công cụ này hiển thị. Hãy nhập lượng thuốc bạn đang hút hiện nay: tổng theo tháng và theo năm chính là số tiền bạn tiết kiệm được khi bỏ thuốc.'
        },
        {
          q: 'Có dùng được cho thuốc lá sợi tự cuốn không?',
          a: 'Có. Nhập giá một gói thuốc sợi làm giá mỗi bao, số điếu bạn cuốn được từ gói đó làm số điếu mỗi bao, và số điếu bạn hút mỗi ngày.'
        },
        {
          q: 'Nếu tôi đem số tiền này đi đầu tư thì sao?',
          a: 'Ô “Nếu đem số tiền này đi đầu tư” cho thấy số tiền sẽ tăng lên bao nhiêu nếu mỗi tháng bạn đem đi đầu tư thay vì hút thuốc, với lợi nhuận 4% mỗi năm, lãi kép theo tháng. Nửa bao mỗi ngày với giá 30.000 ₫ một bao là 456.250 ₫ mỗi tháng, sau 10 năm tăng lên khoảng 66,9 triệu đồng – trong đó 54,75 triệu đồng là tiền của chính bạn, phần còn lại là tiền lãi. Thuế, phí và lạm phát không được tính. Đây chỉ là ví dụ, không phải lời khuyên đầu tư.'
        }
      ]
    },

    alcohol: {
      name: 'Chi phí rượu bia',
      heading: 'Công cụ tính chi phí rượu bia',
      title: 'Tính chi phí rượu bia – Uống bia rượu tốn bao nhiêu?',
      description: 'Xem bia, rượu và các đồ uống có cồn khác tốn của bạn bao nhiêu mỗi tháng và sau 1, 5 và 10 năm, và số tiền đó sẽ thành bao nhiêu nếu đem đi đầu tư.',
      card: 'Xem số ly bạn uống mỗi tuần cộng lại thành bao nhiêu sau một, năm và mười năm.',
      tag: 'Thói quen',
      lead: 'Nhập giá một ly và số ly bạn uống mỗi tuần để xem chúng cộng dồn thành bao nhiêu qua các năm.',
      price: {
        label: 'Giá mỗi ly',
        unit: '₫',
        step: '5000',
        value: '25000',
        hint: 'Vừa uống ở nhà vừa uống ở quán? Hãy dùng giá trung bình.',
        decrease: 'Giảm mức giá mỗi ly',
        increase: 'Tăng mức giá mỗi ly'
      },
      perWeek: {
        label: 'Số ly mỗi tuần',
        unit: 'ly',
        chip1: '3 ly/tuần',
        chip2: '7 ly/tuần',
        chip3: '14 ly/tuần',
        decrease: 'Giảm số ly mỗi tuần',
        increase: 'Tăng số ly mỗi tuần'
      },
      resultsTitle: 'Cộng dồn thành',
      in10Years: 'Trong 10 năm',
      perMonth: 'Mỗi tháng',
      year1: '1 năm',
      year5: '5 năm',
      receiptTitle: 'Hóa đơn quán bar',
      receiptCount: 'Số ly',
      runtime: {
        receiptItem: 'Ly đồ uống',
        note: {
          empty: 'Nhập giá và số ly bạn uống mỗi tuần để xem tổng chi phí.',
          result: 'Tức khoảng {drinks} ly mỗi năm, mỗi ly {price}.'
        }
      },
      about: {
        title: 'Cách tính chi phí rượu bia',
        paragraphs: [
          'Chi phí mỗi năm là giá mỗi ly × số ly mỗi tuần × 52 tuần. Chi phí mỗi tháng bằng một phần mười hai số đó, còn tổng 5 năm và 10 năm dùng giá hiện tại, không tính lạm phát.',
          'Sáu ly bia mỗi tuần, mỗi ly 25.000 ₫, cộng lại thành 7.800.000 ₫ mỗi năm và 78.000.000 ₫ sau mười năm. Nếu bạn vừa đi nhậu ở quán vừa uống ở nhà, hãy dùng giá trung bình, hoặc tính riêng từng phần rồi cộng lại.',
          'Ô “Nếu đem số tiền này đi đầu tư” cho thấy cùng số tiền đó sẽ tăng lên bao nhiêu nếu mỗi tháng bạn đem đi đầu tư, với lợi nhuận 4% mỗi năm trong 10 năm. Công cụ chỉ tính tiền mua đồ uống; ảnh hưởng đến sức khỏe còn chưa được tính. Nếu muốn uống ít lại, bác sĩ của bạn hoặc một dịch vụ tư vấn tại địa phương có thể giúp bạn.'
        ]
      },
      faq: [
        {
          q: 'Mỗi năm tôi tốn bao nhiêu tiền cho rượu bia?',
          a: 'Nhân giá mỗi ly với số ly bạn uống mỗi tuần và với 52. Sáu ly mỗi tuần, mỗi ly 25.000 ₫, là 7.800.000 ₫ mỗi năm.'
        },
        {
          q: 'Uống ít lại thì tôi tiết kiệm được bao nhiêu?',
          a: 'Nhập số ly bạn muốn giảm xuống rồi so sánh. Giảm từ 6 xuống 3 ly mỗi tuần, mỗi ly 25.000 ₫, giúp bạn tiết kiệm 3.900.000 ₫ mỗi năm và 39.000.000 ₫ sau mười năm.'
        },
        {
          q: 'Nếu tôi đem số tiền này đi đầu tư thì sao?',
          a: 'Ô “Nếu đem số tiền này đi đầu tư” cho thấy sau 10 năm bạn sẽ có bao nhiêu nếu mỗi tháng đem số tiền này đi đầu tư thay vì tiêu nó, với lợi nhuận 4% mỗi năm, lãi kép theo tháng. Sáu ly 25.000 ₫ mỗi tuần là 650.000 ₫ mỗi tháng, tăng lên khoảng 95,4 triệu đồng – trong đó 78 triệu đồng là tiền của chính bạn, phần còn lại là tiền lãi. Thuế, phí và lạm phát không được tính. Đây chỉ là ví dụ, không phải lời khuyên đầu tư.'
        }
      ]
    },

    gambling: {
      name: 'Xổ số & cá cược',
      heading: 'Công cụ tính chi phí xổ số và cá cược',
      title: 'Tính chi phí xổ số và cá cược – Chơi tốn bao nhiêu?',
      description: 'Xem vé số và tiền cược tốn bao nhiêu mỗi tháng và trong 10 năm, trung bình bạn mất bao nhiêu và số tiền đó sẽ thành bao nhiêu nếu đem đi đầu tư.',
      card: 'Xem vé số và tiền cược cộng lại thành bao nhiêu và trung bình bạn mất bao nhiêu.',
      tag: 'Thói quen',
      lead: 'Nhập số tiền bạn chơi mỗi lần và tần suất chơi để xem vé số và tiền cược tốn bao nhiêu qua các năm – và trung bình bao nhiêu trong số đó quay lại dưới dạng tiền thưởng.',
      stake: {
        label: 'Tiền chơi mỗi lần',
        unit: '₫',
        step: '10000',
        value: '20000',
        decrease: 'Giảm tiền chơi mỗi lần',
        increase: 'Tăng tiền chơi mỗi lần'
      },
      perWeek: {
        label: 'Số lần chơi mỗi tuần',
        unit: 'lần',
        chip1: 'Mỗi tuần một lần',
        chip2: 'Mỗi tuần hai lần',
        chip3: 'Mỗi ngày',
        decrease: 'Giảm số lần chơi mỗi tuần',
        increase: 'Tăng số lần chơi mỗi tuần'
      },
      payout: {
        label: 'Tỷ lệ trả thưởng',
        unit: '% được trả lại',
        chip1: 'Xổ số',
        chip2: 'Cá cược thể thao',
        chip3: 'Casino',
        hint: 'Phần trong tổng tiền chơi được trả lại dưới dạng tiền thưởng. Xổ số thường trả lại khoảng một nửa, cá cược thể thao và trò chơi casino trả lại 90–97%.',
        decrease: 'Giảm tỷ lệ trả thưởng',
        increase: 'Tăng tỷ lệ trả thưởng'
      },
      resultsTitle: 'Chi phí của bạn',
      in10Years: 'Tiền chơi trong 10 năm',
      perMonth: 'Mỗi tháng',
      perYear: 'Mỗi năm',
      lossPerYear: 'Mất trung bình mỗi năm',
      receiptTitle: 'Hóa đơn xổ số và cá cược',
      receiptCount: 'Số lần chơi',
      receiptBack: 'Trung bình được trả lại',
      receiptLoss: 'Trung bình bị mất',
      runtime: {
        receiptItem: 'Lần chơi',
        note: {
          empty: 'Nhập tiền chơi mỗi lần, số lần chơi mỗi tuần và tỷ lệ trả thưởng (0–100).',
          result: 'Trung bình khoảng {back} mỗi năm quay lại dưới dạng tiền thưởng, nên bạn mất khoảng {loss} mỗi năm và {loss10} trong 10 năm.'
        }
      },
      about: {
        title: 'Cách tính chi phí xổ số và cá cược',
        paragraphs: [
          'Chi phí mỗi năm là tiền chơi mỗi lần × số lần chơi mỗi tuần × 52 tuần. Chi phí mỗi tháng bằng một phần mười hai số đó, còn tổng 10 năm dùng mức tiền chơi hiện tại.',
          'Tỷ lệ trả thưởng là phần trong tổng tiền chơi được trả lại cho người chơi dưới dạng tiền thưởng. Một vé Vietlott giá 10.000 ₫, nên mua hai vé (20.000 ₫) mỗi kỳ, hai kỳ mỗi tuần, là 2.080.000 ₫ tiền chơi mỗi năm. Với tỷ lệ trả thưởng 50%, trung bình khoảng 1.040.000 ₫ quay lại dưới dạng tiền thưởng – tức trung bình mất 1.040.000 ₫ mỗi năm. Một người có thể trúng lớn hoặc mất trắng, nhưng chơi càng nhiều lần, kết quả càng tiến gần mức trung bình.',
          'Ô “Nếu đem số tiền này đi đầu tư” cho thấy tiền chơi sẽ tăng lên bao nhiêu nếu mỗi tháng bạn đem đi đầu tư thay vì chơi, với lợi nhuận 4% mỗi năm trong 10 năm. Nếu bạn thấy khó kiểm soát việc chơi, bác sĩ của bạn hoặc một dịch vụ hỗ trợ tại địa phương có thể giúp bạn.'
        ]
      },
      faq: [
        {
          q: 'Mỗi năm tôi tốn bao nhiêu tiền cho xổ số?',
          a: 'Nhân tiền chơi mỗi lần với số lần chơi mỗi tuần và với 52. Chơi 20.000 ₫ mỗi lần, hai lần mỗi tuần là 2.080.000 ₫ mỗi năm và 20.800.000 ₫ sau mười năm.'
        },
        {
          q: 'Tỷ lệ trả thưởng là gì?',
          a: 'Đó là phần trong tổng tiền chơi được trả lại cho người chơi dưới dạng tiền thưởng. Xổ số thường trả lại khoảng một nửa số tiền bán vé, còn cá cược thể thao và trò chơi casino trả lại 90–97%. Phần còn lại thuộc về đơn vị tổ chức – và đó chính là số tiền trung bình người chơi bị mất.'
        },
        {
          q: 'Nếu tôi đem số tiền này đi đầu tư thì sao?',
          a: 'Ô “Nếu đem số tiền này đi đầu tư” cho thấy sau 10 năm bạn sẽ có bao nhiêu nếu mỗi tháng đem tiền chơi đi đầu tư, với lợi nhuận 4% mỗi năm, lãi kép theo tháng. Chơi 20.000 ₫ mỗi lần, hai lần mỗi tuần là khoảng 173.333 ₫ mỗi tháng, tăng lên khoảng 25,4 triệu đồng – trong đó 20,8 triệu đồng là tiền của chính bạn, phần còn lại là tiền lãi. Thuế, phí và lạm phát không được tính. Đây chỉ là ví dụ, không phải lời khuyên đầu tư.'
        }
      ]
    },

    subscriptions: {
      name: 'Gói đăng ký',
      heading: 'Công cụ tính chi phí gói đăng ký',
      title: 'Tính chi phí gói đăng ký – Tổng theo tháng và theo năm',
      description: 'Cộng dồn phim và nhạc trực tuyến, phòng gym, gói cước di động và mọi gói đăng ký khác. Xem tổng mỗi tháng, mỗi năm, trong 10 năm và gói nào tốn nhiều nhất.',
      card: 'Cộng dồn phim trực tuyến, phòng gym và mọi khoản thanh toán định kỳ ở cùng một nơi.',
      tag: 'Ngân sách',
      lead: 'Liệt kê mọi khoản bạn trả định kỳ và xem tất cả cộng lại thành bao nhiêu. Hỗ trợ thanh toán theo tháng, theo năm và theo tuần.',
      listTitle: 'Các gói đăng ký của bạn',
      empty: 'Chưa có gói đăng ký nào. Hãy thêm ở bên dưới hoặc chọn từ mục Thêm nhanh.',
      add: 'Thêm gói đăng ký',
      quickAdd: 'Thêm nhanh',
      quick: {
        1: { name: 'Phim trực tuyến', price: '108000' },
        2: { name: 'Nhạc trực tuyến', price: '59000' },
        3: { name: 'Phòng gym', price: '500000' },
        4: { name: 'Lưu trữ đám mây', price: '45000' },
        5: { name: 'Gói cước di động', price: '120000' },
        6: { name: 'Báo điện tử', price: '50000' }
      },
      note: 'Danh sách của bạn được lưu trong địa chỉ trang, nên bạn có thể lưu dấu trang hoặc chia sẻ nó. Danh sách không bao giờ được gửi đi đâu.',
      row: {
        name: 'Tên',
        nameLabel: 'Tên gói đăng ký',
        priceLabel: 'Giá tính bằng đồng',
        cycleLabel: 'Chu kỳ thanh toán',
        monthly: '/ tháng',
        yearly: '/ năm',
        weekly: '/ tuần'
      },
      resultsTitle: 'Tổng chi phí gói đăng ký',
      perYear: 'Mỗi năm',
      perMonth: 'Mỗi tháng',
      perDay: 'Mỗi ngày',
      in10Years: 'Trong 10 năm',
      breakdownLabel: 'Chi phí mỗi năm của từng gói đăng ký',
      copySummary: 'Sao chép bản tóm tắt',
      receiptTitle: 'Hóa đơn gói đăng ký',
      receiptCount: 'Số lần thanh toán',
      runtime: {
        receiptItem: 'Khoản thanh toán',
        untitled: 'Chưa đặt tên',
        remove: 'Xóa {name}',
        removeUnnamed: 'Xóa gói đăng ký',
        breakdown: '{cost} / năm · {percent}%',
        cycle: { monthly: 'tháng', yearly: 'năm', weekly: 'tuần' },
        note: {
          empty: 'Thêm một gói đăng ký kèm giá để xem tổng chi phí.',
          single: 'Tức {cost} mỗi năm cho {name}.',
          biggest: 'Khoản tốn nhiều nhất của bạn là {name}, {cost} mỗi năm, chiếm {percent}% tổng chi phí.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Tổng: {month} mỗi tháng, {year} mỗi năm'
        }
      },
      about: {
        title: 'Cách tính tổng chi phí gói đăng ký',
        paragraphs: [
          'Mỗi gói đăng ký được quy đổi thành chi phí mỗi năm: giá theo tháng nhân với 12, giá theo tuần nhân với 52, còn giá theo năm giữ nguyên. Tổng mỗi năm sau đó được chia cho 12 để ra chi phí mỗi tháng và chia cho 365 để ra chi phí mỗi ngày.',
          'Phần chi tiết sắp xếp các gói đăng ký từ đắt nhất đến rẻ nhất và cho thấy tỷ trọng của từng gói trong tổng chi phí, giúp bạn dễ nhận ra gói nào nên hủy hoặc chuyển xuống gói rẻ hơn.',
          'Danh sách của bạn được lưu trong địa chỉ trang, không bao giờ lưu trên máy chủ. Hãy lưu dấu trang để quay lại danh sách sau, hoặc chia sẻ liên kết để cùng gia đình rà soát các gói dùng chung.'
        ]
      },
      faq: [
        {
          q: 'Làm sao tìm ra tất cả các gói đăng ký của tôi?',
          a: 'Hãy xem lại sao kê ngân hàng, thẻ tín dụng và lịch sử giao dịch trên các ví điện tử như MoMo, ZaloPay hay ShopeePay trong vài tháng gần đây để tìm các khoản bị trừ tiền định kỳ. Kiểm tra thêm phần quản lý gói đăng ký trong App Store, Google Play và PayPal.'
        },
        {
          q: 'Gói năm có rẻ hơn gói tháng không?',
          a: 'Thường rẻ hơn 15–20%, nhưng chỉ khi đằng nào bạn cũng dùng dịch vụ đó cả năm. Hãy thêm cả hai lựa chọn vào danh sách để so sánh chi phí mỗi năm.'
        },
        {
          q: 'Danh sách của tôi có được lưu không?',
          a: 'Danh sách chỉ được lưu trong địa chỉ trang. Hãy lưu dấu trang hoặc chia sẻ liên kết để giữ lại; không có gì được lưu trên máy chủ hay trong cookie.'
        },
        {
          q: 'Nếu tôi đem số tiền này đi đầu tư thì sao?',
          a: 'Ô “Nếu đem số tiền này đi đầu tư” cho thấy các gói đăng ký của bạn sẽ thành bao nhiêu nếu mỗi tháng bạn đầu tư cùng số tiền đó, với lợi nhuận 4% mỗi năm, lãi kép theo tháng. Khoản 500.000 ₫ mỗi tháng sau 10 năm tăng lên khoảng 73,3 triệu đồng – trong đó 60 triệu đồng là tiền của chính bạn, phần còn lại là tiền lãi. Thuế, phí và lạm phát không được tính. Đây chỉ là ví dụ, không phải lời khuyên đầu tư.'
        }
      ]
    },

    electricity: {
      name: 'Tiền điện',
      heading: 'Công cụ tính tiền điện',
      title: 'Tính tiền điện thiết bị – Chi phí mỗi ngày, tháng và năm',
      description: 'Tính xem một thiết bị tốn bao nhiêu tiền điện mỗi ngày, tháng và năm từ công suất, số giờ sử dụng và giá điện bậc thang của EVN. Công cụ tính kWh miễn phí.',
      card: 'Xem việc bật một thiết bị tốn bao nhiêu tiền điện mỗi ngày, tháng và năm.',
      tag: 'Gia đình',
      lead: 'Nhập công suất của thiết bị, thời gian bật và giá điện bạn trả để xem việc để nó hoạt động thực sự tốn bao nhiêu.',
      power: {
        label: 'Công suất',
        unit: 'watt',
        chip1: 'Đèn LED 9 W',
        chip2: 'Laptop 60 W',
        chip3: 'TV 100 W',
        chip4: 'PC chơi game 400 W',
        chip5: 'Điều hòa 1.500 W',
        decrease: 'Giảm công suất',
        increase: 'Tăng công suất'
      },
      hours: {
        label: 'Số giờ mỗi ngày',
        unit: 'giờ',
        decrease: 'Giảm số giờ mỗi ngày',
        increase: 'Tăng số giờ mỗi ngày'
      },
      days: {
        label: 'Số ngày mỗi tuần',
        unit: 'ngày',
        decrease: 'Giảm số ngày mỗi tuần',
        increase: 'Tăng số ngày mỗi tuần'
      },
      kwhPrice: {
        label: 'Giá điện',
        unit: '₫/kWh',
        value: '3000',
        step: '100',
        divisor: '1',
        hint: 'Giá điện sinh hoạt tính theo bậc thang: hãy nhập giá của bậc cao nhất mà gia đình bạn thường dùng tới, cộng cả thuế GTGT.',
        decrease: 'Giảm mức giá điện',
        increase: 'Tăng mức giá điện'
      },
      resultsTitle: 'Chi phí sử dụng',
      perYear: 'Mỗi năm',
      perDayOfUse: 'Mỗi ngày sử dụng',
      perMonth: 'Mỗi tháng',
      energyPerYear: 'Điện năng mỗi năm',
      runtime: {
        note: {
          empty: 'Nhập công suất, số giờ mỗi ngày (tối đa 24), số ngày mỗi tuần (tối đa 7) và giá điện của bạn.',
          result: 'Dùng khoảng {day} cho mỗi ngày bật, khoảng {year} mỗi năm.'
        }
      },
      about: {
        title: 'Cách tính tiền điện',
        paragraphs: [
          'Điện năng tiêu thụ tính bằng kilowatt giờ (kWh) là công suất (watt) × số giờ sử dụng ÷ 1.000. Một chiếc TV 100 W bật 4 giờ dùng 0,4 kWh mỗi ngày. Nhân con số đó với giá điện mỗi kWh sẽ ra chi phí cho mỗi ngày sử dụng: với giá 3.000 ₫/kWh là 1.200 ₫.',
          'Chi phí mỗi năm tính đến số ngày trong tuần mà thiết bị hoạt động, trải đều trên 365 ngày trong năm. Chi phí mỗi tháng bằng một phần mười hai chi phí mỗi năm.',
          'Công suất thường được ghi trên nhãn thông số của thiết bị hoặc trong sách hướng dẫn. Phần lớn thời gian, nhiều thiết bị chạy dưới công suất tối đa, nên kết quả là ước tính ở mức cao. Giá điện sinh hoạt của EVN tính theo bậc thang: mỗi tháng, những kWh đầu tiên rẻ nhất, khoảng 2.000 ₫/kWh, rồi giá tăng dần theo từng bậc lên gần 3.500 ₫/kWh ở bậc cao nhất, chưa gồm thuế GTGT. Điện năng của thiết bị được cộng vào phần dùng ở bậc cao nhất mà gia đình bạn đạt tới trong tháng, nên hãy nhập giá của bậc đó cộng thuế; 3.000 ₫/kWh là mức hợp lý với nhiều hộ gia đình.'
        ]
      },
      faq: [
        {
          q: 'Làm sao tính tiền điện của một thiết bị?',
          a: 'Nhân công suất tính bằng kilowatt với số giờ sử dụng và với giá mỗi kWh. Một chiếc điều hòa 1.500 W chạy 8 giờ: 1,5 kW × 8 giờ × 3.000 ₫ = 36.000 ₫ mỗi ngày.'
        },
        {
          q: 'Một thiết bị dùng bao nhiêu kWh?',
          a: 'Chia công suất (watt) cho 1.000 rồi nhân với số giờ hoạt động. Một chiếc laptop 60 W dùng 8 giờ mỗi ngày tiêu thụ 0,48 kWh mỗi ngày – khoảng 175 kWh mỗi năm nếu dùng hằng ngày.'
        },
        {
          q: 'Nên nhập giá điện bao nhiêu?',
          a: 'Hãy xem hóa đơn tiền điện hằng tháng: EVN liệt kê số kWh và đơn giá của từng bậc. Nhập đơn giá của bậc cao nhất bạn đã dùng tới, cộng thêm thuế GTGT. Nếu chỉ cần mức trung bình, hãy chia tổng tiền trên hóa đơn cho số kWh đã dùng.'
        },
        {
          q: 'Chế độ chờ có tốn điện không?',
          a: 'Có, nhiều thiết bị vẫn tiêu thụ vài watt ở chế độ chờ. Hãy nhập công suất chờ và 24 giờ mỗi ngày để xem chi phí trong một năm.'
        }
      ]
    },

    trip: {
      name: 'Chi phí chuyến đi',
      heading: 'Công cụ tính tiền xăng chuyến đi',
      title: 'Tính tiền xăng – Chi phí chuyến đi và đi làm hằng ngày',
      description: 'Tính tiền xăng cho một chuyến đi hoặc quãng đường đi làm hằng ngày bằng ô tô hay xe máy, rồi chia đều cho người đi cùng. Dùng km và lít hoặc dặm và gallon.',
      card: 'Tính tiền xăng cho chuyến đi hoặc quãng đường đi làm và chia đều với người đi cùng.',
      tag: 'Đi lại',
      lead: 'Tính tiền xăng cho một chuyến đi hoặc quãng đường đi làm hằng ngày, rồi chia đều cho mọi người đi cùng xe.',
      unit: {
        label: 'Đơn vị',
        metric: 'Km và lít',
        us: 'Dặm và gallon'
      },
      distance: {
        label: 'Quãng đường',
        unit: 'km một chiều',
        decrease: 'Giảm quãng đường',
        increase: 'Tăng quãng đường'
      },
      direction: {
        label: 'Chuyến đi',
        one: 'Một chiều',
        round: 'Khứ hồi'
      },
      consumption: {
        label: 'Mức tiêu hao nhiên liệu',
        unit: 'l/100 km',
        hint: 'Đi xe máy? Phần lớn xe máy tiêu hao khoảng 2 l/100 km. Xe điện: nhập kWh/100 km và giá điện mỗi kWh.',
        decrease: 'Giảm mức tiêu hao nhiên liệu',
        increase: 'Tăng mức tiêu hao nhiên liệu'
      },
      fuelPrice: {
        label: 'Giá xăng',
        unit: '₫ mỗi lít',
        value: '22000',
        step: '500',
        usStep: '2000',
        decrease: 'Giảm mức giá xăng',
        increase: 'Tăng mức giá xăng'
      },
      people: {
        label: 'Số người chia tiền',
        unit: 'người',
        decrease: 'Giảm số người',
        increase: 'Tăng số người'
      },
      tripsPerWeek: {
        label: 'Số chuyến mỗi tuần',
        unit: 'để tính tổng theo tháng và năm',
        decrease: 'Giảm số chuyến mỗi tuần',
        increase: 'Tăng số chuyến mỗi tuần'
      },
      resultsTitle: 'Tiền xăng',
      perPerson: 'Mỗi người',
      perMonth: 'Mỗi tháng',
      perYear: 'Mỗi năm',
      runtime: {
        direction: { one: 'Một chiều', round: 'Khứ hồi' },
        unit: {
          metric: {
            distance: 'km một chiều',
            consumption: 'l/100 km',
            price: '₫ mỗi lít',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'dặm một chiều',
            consumption: 'mpg',
            price: '₫ mỗi gallon',
            perDistance: 'dặm',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Nhập quãng đường, mức tiêu hao nhiên liệu và giá xăng để xem chi phí.',
          result: 'Dùng {fuel} xăng mỗi chuyến, khoảng {price} mỗi {distance}.'
        }
      },
      about: {
        title: 'Cách tính chi phí chuyến đi',
        paragraphs: [
          'Với km và lít, lượng xăng tiêu thụ là quãng đường × mức tiêu hao ÷ 100. Đi làm 25 km mỗi chiều (50 km mỗi ngày) bằng ô tô tiêu hao 6,5 l/100 km sẽ dùng 3,25 lít xăng mỗi ngày; với xăng RON 95 giá 22.000 ₫ một lít, con số là 71.500 ₫. Chia cho số người đi cùng để biết mỗi người góp bao nhiêu.',
          'Công cụ cũng dùng được cho xe máy: phần lớn xe máy tiêu hao khoảng 2 l/100 km, nên cùng quãng đường 50 km mỗi ngày chỉ tốn khoảng 1 lít, tức 22.000 ₫. Với dặm và gallon, lượng xăng là quãng đường chia cho mpg (số dặm đi được với một gallon). Khi đổi đơn vị, các giá trị bạn đã nhập sẽ được quy đổi theo, nên bạn có thể so sánh số liệu giữa hai hệ đơn vị.',
          'Tổng theo tháng và theo năm dựa trên số chuyến mỗi tuần – 5 chuyến khứ hồi mỗi tuần là mức thường gặp khi đi làm. Với ô tô điện hoặc xe máy điện, hãy nhập mức tiêu thụ theo kWh/100 km và giá điện mỗi kWh.'
        ]
      },
      faq: [
        {
          q: 'Làm sao tính tiền xăng cho một chuyến đi?',
          a: 'Nhân quãng đường với mức tiêu hao, chia cho 100 rồi nhân với giá xăng. Chuyến đi 300 km bằng ô tô tiêu hao 7 l/100 km, xăng RON 95 giá 22.000 ₫ một lít: 300 × 7 ÷ 100 × 22.000 ₫ = 462.000 ₫.'
        },
        {
          q: 'Có dùng được cho xe máy không?',
          a: 'Có. Hãy nhập mức tiêu hao của xe máy, thường khoảng 2 l/100 km. Đi làm 15 km mỗi chiều là 30 km mỗi ngày, tốn 0,6 lít xăng, tức 13.200 ₫ mỗi ngày với giá 22.000 ₫ một lít.'
        },
        {
          q: 'Làm sao chia tiền xăng cho những người đi cùng?',
          a: 'Nhập số người cùng chia chi phí. Công cụ chia đều tiền xăng của chuyến đi cho tất cả mọi người, kể cả người lái.'
        },
        {
          q: 'Công cụ có tính hao mòn xe, phí gửi xe hay phí cầu đường không?',
          a: 'Không, công cụ chỉ tính tiền xăng. Hao mòn và bảo dưỡng xe, bảo hiểm, phí gửi xe và phí cầu đường chưa được tính, nên tổng chi phí đi lại thực tế sẽ cao hơn.'
        }
      ]
    }
  }
};
