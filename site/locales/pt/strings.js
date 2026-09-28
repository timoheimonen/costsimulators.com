// Brazilian Portuguese texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in Brazilian
// reais (BRL).

module.exports = {
  meta: {
    name: 'Português (Brasil)',
    locale: 'pt-BR',
    currency: 'BRL',
    ogLocale: 'pt_BR'
  },

  money: {
    symbol: 'R$',
    zero: 'R$ 0,00',
    placeholder: '0,00',
    decimals: '2'
  },

  common: {
    skip: 'Pular para o conteúdo',
    home: 'Início',
    toggleTheme: 'Alternar tema',
    themeToLight: 'Mudar para o tema claro',
    themeToDark: 'Mudar para o tema escuro',
    language: 'Idioma',
    allTools: 'Todas as ferramentas',
    share: 'Compartilhar',
    settings: 'Configurações',
    quickPicks: 'Opções rápidas',
    faqTitle: 'Perguntas frequentes',
    relatedTools: 'Mais calculadoras',
    imageAlt: 'costsimulators.com – calculadoras de custo grátis para as contas do dia a dia'
  },

  footer: {
    privacy: 'Funciona inteiramente no seu navegador. Sem cookies, sem rastreamento.',
    about: 'Sobre',
    contact: 'Contato',
    privacyPolicy: 'Privacidade',
    terms: 'Termos'
  },

  runtime: {
    share: {
      linkCopied: 'Link copiado',
      copyFailed: 'Não foi possível copiar',
      copied: 'Copiado!',
      calculatedWith: 'Calculado com o costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    }
  },

  home: {
    title: 'Calculadoras de custo grátis para o dia a dia',
    description: 'Calculadoras grátis e privadas que mostram quanto as coisas custam de verdade: reuniões, horas de trabalho, café, cigarro, assinaturas, energia e combustível. Sem cadastro.',
    eyebrow: 'Grátis · Privado · Instantâneo',
    heading: 'Pequenas ferramentas para as questões de <span class="accent-text">dinheiro</span> do dia a dia.',
    lead: 'Calculadoras rápidas que mostram quanto as coisas custam de verdade. Sem cadastro, sem rastreamento – tudo funciona direto no seu navegador.',
    toolsTitle: 'Ferramentas',
    toolCount: '{count} ferramentas',
    suggestTitle: 'Tem uma ideia?',
    suggestText: 'Sugira uma nova ferramenta no GitHub.',
    whyTitle: 'Pequenos gastos somam muito',
    whyText1: 'Uma reunião, um cafezinho a caminho do trabalho ou mais um serviço de streaming quase nunca parecem caros sozinhos. Some tudo ao longo de um mês, um ano ou uma década, e os números ficam bem diferentes.',
    whyText2: 'Cada calculadora faz uma coisa só, pede apenas os números de que precisa e mostra a resposta na hora. Tudo é calculado no seu navegador, então seus números ficam no seu dispositivo.',
    aboutLink: 'Mais sobre o costsimulators.com',
    faq: [
      {
        q: 'O costsimulators.com é grátis?',
        a: 'Sim. Todas as calculadoras são totalmente gratuitas, sem cadastro, sem recursos pagos e sem anúncios. Você também pode usá-las no trabalho.'
      },
      {
        q: 'Meus números ficam salvos ou são enviados para algum lugar?',
        a: 'Não. Tudo o que você digita é calculado no seu navegador e nunca é enviado a um servidor. O site não usa cookies nem ferramentas de análise.'
      },
      {
        q: 'Posso compartilhar um cálculo?',
        a: 'Sim. Suas configurações ficam no endereço da página. Use o botão Compartilhar para copiar o link, e quem abrir verá o mesmo cálculo.'
      }
    ]
  },

  notFound: {
    title: 'Página não encontrada',
    description: 'A página que você procura não existe.',
    heading: 'Esta página não existe.',
    lead: 'O endereço pode ter sido digitado errado, ou a página mudou de lugar. Todas as calculadoras estão na página inicial.'
  },

  documents: {
    about: {
      name: 'Sobre',
      title: 'Sobre nós – calculadoras de custo grátis e privadas',
      description: 'Quem faz o costsimulators.com e como as calculadoras funcionam. Calculadoras de custo grátis e privadas para reuniões, horas de trabalho, hábitos, assinaturas, energia e viagens.'
    },
    privacy: {
      name: 'Política de privacidade',
      title: 'Política de privacidade',
      description: 'Como o costsimulators.com trata os seus dados: os cálculos rodam no seu navegador, sem rastreamento, sem ferramentas de análise e sem contas de usuário.'
    },
    terms: {
      name: 'Termos de uso',
      title: 'Termos de uso',
      description: 'Termos de uso do costsimulators.com: uso livre para fins pessoais e comerciais, oferecido no estado em que se encontra, com código aberto sob a Licença MIT.'
    }
  },

  tools: {
    meetings: {
      name: 'Custo de reunião',
      heading: 'Calculadora de custo de reunião',
      title: 'Calculadora de custo de reunião – quanto custa uma reunião',
      description: 'Calculadora de custo de reunião grátis, com cronômetro ao vivo. Informe o valor por hora e o número de participantes e veja quanto a reunião custa, segundo a segundo.',
      card: 'Veja o preço de uma reunião subir em tempo real enquanto vocês conversam.',
      tag: 'Cronômetro',
      lead: 'Defina o valor por hora e o número de pessoas, clique em Iniciar e acompanhe quanto a reunião custa enquanto ela acontece.',
      pulseEvery: '1',
      rate: {
        label: 'Valor por hora',
        unit: 'R$ por pessoa',
        step: '10',
        value: '80',
        decrease: 'Diminuir valor por hora',
        increase: 'Aumentar valor por hora'
      },
      persons: {
        label: 'Participantes',
        unit: 'pessoas',
        decrease: 'Diminuir participantes',
        increase: 'Aumentar participantes'
      },
      perMinute: 'Por minuto',
      perHour: 'Por hora',
      note: 'Você pode ajustar os valores com o cronômetro rodando. Entradas e saídas de participantes contam a partir daquele momento.',
      total: 'Custo total',
      elapsed: 'Tempo decorrido',
      reset: 'Zerar',
      copyReport: 'Copiar relatório',
      kbdHint: 'Pressione <kbd>Espaço</kbd> para iniciar ou pausar',
      runtime: {
        mode: { start: 'Iniciar', pause: 'Pausar', resume: 'Retomar' },
        status: { ready: 'Pronto', live: 'Ao vivo', paused: 'Pausado' },
        announce: {
          invalid: 'Informe o valor por hora e o número de participantes para começar.',
          started: 'Cronômetro iniciado.',
          paused: 'Pausado em {cost} após {time}.',
          reset: 'Cronômetro zerado.'
        },
        report: {
          cost: 'Custo da reunião: {cost}',
          duration: 'Duração: {time}',
          participants: 'Participantes: {persons} × {rate}/h'
        }
      },
      about: {
        title: 'Como o custo da reunião é calculado',
        paragraphs: [
          'A calculadora multiplica o número de participantes pelo valor por hora e pelo tempo que já passou. Uma reunião de uma hora com 5 pessoas a R$ 80 por hora custa R$ 400 – são R$ 6,67 a cada minuto.',
          'Como valor por hora, use o que uma hora de trabalho realmente custa para a empresa, não só o salário. Para quem é contratado pela CLT, os encargos trabalhistas – INSS patronal, FGTS, 13º salário, férias e outros – podem acrescentar de 70% a 100% ao salário. Se você não sabe o valor de cada pessoa, uma média da equipe já basta.',
          'O cronômetro continua contando certo mesmo com a aba em segundo plano, e o custo acumulado aparece no título da aba do navegador, para você acompanhar enquanto compartilha a tela. Quando a reunião acabar, pause o cronômetro e copie um relatório curto para a ata.'
        ]
      },
      faq: [
        {
          q: 'Como calcular o custo de uma reunião?',
          a: 'Multiplique o número de participantes pelo valor médio por hora e pela duração da reunião em horas. Por exemplo, 6 pessoas × R$ 70 por hora × 1,5 hora = R$ 630. Esta calculadora faz a conta ao vivo durante a reunião.'
        },
        {
          q: 'Qual valor por hora devo usar?',
          a: 'Use o custo total de uma hora de trabalho: o salário bruto por hora mais os encargos, como INSS, FGTS, 13º e férias. Para consultores e prestadores de serviço (PJ), use o valor que eles cobram por hora.'
        },
        {
          q: 'Posso mudar o número de participantes durante a reunião?',
          a: 'Sim. Mude o número de pessoas ou o valor por hora quando quiser. Os novos valores contam a partir daquele momento, e o custo que já acumulou continua como estava.'
        },
        {
          q: 'O cronômetro continua rodando se eu trocar de aba?',
          a: 'Sim. O cronômetro se baseia no relógio, então o total continua correto com a aba em segundo plano. Enquanto o cronômetro roda, a página também pede ao navegador para manter a tela ligada.'
        }
      ]
    },

    workhours: {
      name: 'Horas de trabalho',
      heading: 'Calculadora de preço em horas de trabalho',
      title: 'Preço em horas de trabalho – quanto você precisa trabalhar',
      description: 'Transforme qualquer preço em horas, dias e semanas de trabalho. Informe seu salário por hora, por mês ou por ano e veja quanto uma compra custa de verdade em tempo de trabalho.',
      card: 'Transforme qualquer preço nas horas, dias e semanas que você precisa trabalhar para pagar.',
      tag: 'Trabalho',
      lead: 'Informe quanto você ganha e um preço para ver quanto tempo precisa trabalhar para pagar a compra.',
      period: {
        label: 'Sei quanto ganho',
        hour: 'Por hora',
        month: 'Por mês',
        year: 'Por ano'
      },
      pay: {
        label: 'Salário',
        unit: 'R$ por hora',
        value: '20',
        step: '1',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Use o salário líquido, depois dos descontos, para ter a resposta mais honesta.',
        decrease: 'Diminuir salário',
        increase: 'Aumentar salário'
      },
      hoursPerWeek: {
        label: 'Horas por semana',
        unit: 'horas',
        value: '44',
        chip1: '40 h',
        chip2: '44 h',
        preset1: '40',
        preset2: '44',
        decrease: 'Diminuir horas por semana',
        increase: 'Aumentar horas por semana'
      },
      price: {
        label: 'Preço',
        unit: 'R$',
        value: '3999',
        step: '100',
        decrease: 'Diminuir preço',
        increase: 'Aumentar preço'
      },
      resultsTitle: 'Preço em tempo de trabalho',
      youNeedToWork: 'Você precisa trabalhar',
      workDays: 'Dias de trabalho',
      workWeeks: 'Semanas de trabalho',
      hourlyRate: 'Seu salário por hora',
      runtime: {
        unit: {
          hour: 'R$ por hora',
          month: 'R$ por mês',
          year: 'R$ por ano'
        },
        days: { one: '{n} dia', many: '{n} dias', other: '{n} dias' },
        weeks: { one: '{n} semana', many: '{n} semanas', other: '{n} semanas' },
        note: {
          empty: 'Informe seu salário, as horas por semana e um preço para ver quanto tempo você precisa trabalhar para pagar.',
          result: 'Considerando dias de trabalho de {hours} horas, {days} dias por semana.'
        }
      },
      about: {
        title: 'Como o tempo de trabalho é calculado',
        paragraphs: [
          'Primeiro, seu salário é convertido em valor por hora. O salário mensal é multiplicado por 12 e dividido pelas horas trabalhadas no ano (horas semanais × 52); o salário anual é dividido diretamente por essas horas. Depois, o preço é dividido pelo seu valor por hora.',
          'Os dias de trabalho consideram uma semana de cinco dias, então a jornada de 44 horas da CLT equivale a dias de 8,8 horas. Por exemplo, ganhando R$ 20 por hora, um celular de R$ 3.999 custa quase 200 horas – cerca de quatro semanas e meia de trabalho.',
          'Para a resposta mais honesta, use o salário líquido, depois do INSS e do Imposto de Renda, já que é esse o dinheiro que você realmente gasta. Pensar nos preços em horas de trabalho é um jeito simples de decidir se algo vale mesmo a pena.'
        ]
      },
      faq: [
        {
          q: 'Quantas horas preciso trabalhar para comprar algo?',
          a: 'Divida o preço pelo seu salário líquido por hora. Se você ganha R$ 25 por hora já descontados os impostos, uma compra de R$ 500 custa 20 horas de trabalho.'
        },
        {
          q: 'Devo usar o salário bruto ou o líquido?',
          a: 'O salário líquido, depois dos descontos, dá a resposta mais realista, porque é o dinheiro que você de fato tem para gastar. Com o salário bruto, as coisas parecem mais baratas do que são.'
        },
        {
          q: 'Como converter o salário mensal em valor por hora?',
          a: 'Multiplique o salário mensal por 12 e divida pelas horas trabalhadas no ano. Com a jornada de 44 horas semanais, são 2.288 horas, então R$ 3.500 por mês dá pouco mais de R$ 18 por hora. A calculadora faz essa conta por você (com 12 salários, sem o 13º) quando você escolhe Por mês.'
        }
      ]
    },

    coffee: {
      name: 'Gasto com café',
      heading: 'Calculadora de gasto com café',
      title: 'Calculadora do café – quanto custa seu cafezinho por ano',
      description: 'Veja quanto o seu café de todo dia custa por mês e em 1, 5 e 10 anos. Informe o preço da xícara e quantas você toma por semana – grátis e privado.',
      card: 'Veja quanto o cafezinho de todo dia soma em um, cinco e dez anos.',
      tag: 'Hábito',
      lead: 'Informe quanto custa uma xícara e com que frequência você compra para ver quanto o hábito soma ao longo dos anos.',
      price: {
        label: 'Preço por xícara',
        unit: 'R$',
        step: '0.5',
        value: '7',
        decrease: 'Diminuir preço do café',
        increase: 'Aumentar preço do café'
      },
      perWeek: {
        label: 'Xícaras por semana',
        unit: 'xícaras',
        chip1: 'Dias úteis',
        chip2: 'Todo dia',
        chip3: 'Duas por dia',
        decrease: 'Diminuir xícaras por semana',
        increase: 'Aumentar xícaras por semana'
      },
      resultsTitle: 'Quanto isso soma',
      in10Years: 'Em 10 anos',
      perMonth: 'Por mês',
      year1: '1 ano',
      year5: '5 anos',
      runtime: {
        note: {
          empty: 'Informe um preço e quantas xícaras você toma por semana para ver os totais.',
          result: 'São cerca de {cups} xícaras por ano, a {price} cada.'
        }
      },
      about: {
        title: 'Como o gasto com café é calculado',
        paragraphs: [
          'O custo anual é o preço por xícara × xícaras por semana × 52 semanas. O custo mensal é o anual dividido por 12, e os totais de 5 e 10 anos multiplicam o custo anual sem inflação nem aumentos de preço.',
          'Um expresso de R$ 7 todo dia útil dá R$ 1.820 por ano e R$ 18.200 em dez anos. Se o número assustar, passar o café em casa ou levar uma garrafinha térmica são jeitos fáceis de gastar menos.',
          'A calculadora serve para qualquer compra pequena e frequente: um pão de queijo, um energético ou uma garrafa de água. Informe o preço e quantas vezes por semana você compra.'
        ]
      },
      faq: [
        {
          q: 'Quanto custa um café por dia em um ano?',
          a: 'Uma xícara por dia, sete dias por semana, dá 364 xícaras por ano. A R$ 6 a xícara, são R$ 2.184 por ano e R$ 21.840 em dez anos.'
        },
        {
          q: 'Fazer café em casa sai mais barato?',
          a: 'Normalmente, bem mais barato. Um café passado em casa costuma sair por cerca de R$ 1 a xícara ou menos, contra vários reais numa cafeteria. Informe o custo da xícara feita em casa para comparar.'
        },
        {
          q: 'A calculadora considera a inflação?',
          a: 'Não. As projeções supõem que o preço continua o mesmo, então mostram o custo do hábito pelos preços de hoje. Com os preços subindo, o custo real no longo prazo é maior.'
        }
      ]
    },

    smoking: {
      name: 'Custo do cigarro',
      heading: 'Calculadora do custo de fumar',
      title: 'Quanto custa fumar – calculadora de gasto com cigarro',
      description: 'Descubra quanto o cigarro custa por mês e em 1, 5 e 10 anos – e quanto você economiza ao parar de fumar. Informe o preço do maço e quantos cigarros fuma por dia.',
      card: 'Descubra quanto dinheiro vira fumaça todo mês e ao longo dos anos.',
      tag: 'Hábito',
      lead: 'Informe o preço do maço e quanto você fuma para ver quanto dinheiro vira fumaça ao longo dos anos.',
      packPrice: {
        label: 'Preço do maço',
        unit: 'R$',
        step: '0.5',
        value: '12',
        decrease: 'Diminuir preço do maço',
        increase: 'Aumentar preço do maço'
      },
      perDay: {
        label: 'Cigarros por dia',
        unit: 'cigarros',
        chip1: '5 por dia',
        chip2: '10 por dia',
        chip3: '20 por dia',
        decrease: 'Diminuir cigarros por dia',
        increase: 'Aumentar cigarros por dia'
      },
      perPack: {
        label: 'Cigarros por maço',
        unit: 'tamanho do maço',
        value: '20',
        decrease: 'Diminuir cigarros por maço',
        increase: 'Aumentar cigarros por maço'
      },
      resultsTitle: 'Virou fumaça',
      in10Years: 'Em 10 anos',
      perMonth: 'Por mês',
      year1: '1 ano',
      year5: '5 anos',
      runtime: {
        note: {
          empty: 'Informe o preço do maço, quantos cigarros você fuma por dia e quantos vêm no maço para ver os totais.',
          result: 'São cerca de {cigarettes} cigarros ({packs} maços) por ano, a {price} cada.'
        }
      },
      about: {
        title: 'Como o custo de fumar é calculado',
        paragraphs: [
          'O preço de um cigarro é o preço do maço dividido pelo número de cigarros no maço. Esse valor é multiplicado pelos cigarros fumados por dia e por 365 dias para chegar ao custo anual. O custo mensal é um doze avos disso, e os totais de 5 e 10 anos usam os preços de hoje.',
          'Meio maço por dia, a R$ 12 o maço, dá R$ 2.190 por ano e quase R$ 22.000 em dez anos. Ver o total pode ser uma motivação forte: o mesmo dinheiro poderia ir para uma viagem, para a poupança ou para quitar dívidas.',
          'A calculadora conta só o preço dos cigarros. Gastos com saúde, seguros mais caros e dias de trabalho perdidos se somam a isso. Se você quer ajuda para parar, o SUS oferece tratamento gratuito, e o Disque Saúde 136 informa onde procurar.'
        ]
      },
      faq: [
        {
          q: 'Quanto custa um maço por dia em um ano?',
          a: 'Um maço por dia são 365 maços por ano. A R$ 12 o maço, são R$ 4.380 por ano e R$ 43.800 em dez anos.'
        },
        {
          q: 'Quanto dinheiro eu economizo se parar de fumar?',
          a: 'Tudo o que esta calculadora mostra. Informe quanto você fuma hoje: os totais por mês e por ano são o que você economiza ao parar.'
        },
        {
          q: 'Funciona para fumo de enrolar?',
          a: 'Sim. Informe o preço do pacote de fumo como preço do maço, quantos cigarros você enrola com ele como cigarros por maço e quantos fuma por dia.'
        }
      ]
    },

    subscriptions: {
      name: 'Assinaturas',
      heading: 'Calculadora de assinaturas',
      title: 'Calculadora de assinaturas – total por mês e por ano',
      description: 'Some streaming, academia, plano de celular e todas as outras assinaturas. Veja o total por mês, por ano e em 10 anos, e qual assinatura pesa mais no bolso.',
      card: 'Some streaming, academia e todos os outros pagamentos recorrentes em um só lugar.',
      tag: 'Orçamento',
      lead: 'Liste tudo o que você paga regularmente e veja quanto dá no total. Cobranças mensais, anuais e semanais são aceitas.',
      listTitle: 'Suas assinaturas',
      empty: 'Nenhuma assinatura ainda. Adicione uma abaixo ou use a adição rápida.',
      add: 'Adicionar assinatura',
      quickAdd: 'Adição rápida',
      quick: {
        1: { name: 'Streaming de vídeo', price: '44.90' },
        2: { name: 'Streaming de música', price: '23.90' },
        3: { name: 'Academia', price: '109.90' },
        4: { name: 'Armazenamento em nuvem', price: '14.90' },
        5: { name: 'Plano de celular', price: '49.99' },
        6: { name: 'Notícias', price: '29.90' }
      },
      note: 'Sua lista fica guardada no endereço da página, para você salvar nos favoritos ou compartilhar. Ela nunca é enviada para lugar nenhum.',
      row: {
        name: 'Nome',
        nameLabel: 'Nome da assinatura',
        priceLabel: 'Preço em reais',
        cycleLabel: 'Ciclo de cobrança',
        monthly: '/ mês',
        yearly: '/ ano',
        weekly: '/ semana'
      },
      resultsTitle: 'Total das assinaturas',
      perYear: 'Por ano',
      perMonth: 'Por mês',
      perDay: 'Por dia',
      in10Years: 'Em 10 anos',
      breakdownLabel: 'Custo anual por assinatura',
      copySummary: 'Copiar resumo',
      runtime: {
        untitled: 'Sem nome',
        remove: 'Remover {name}',
        removeUnnamed: 'Remover assinatura',
        breakdown: '{cost} / ano · {percent}%',
        cycle: { monthly: 'mês', yearly: 'ano', weekly: 'semana' },
        note: {
          empty: 'Adicione uma assinatura com preço para ver os totais.',
          single: '{name} custa {cost} por ano.',
          biggest: 'Seu maior gasto é {name}: {cost} por ano, {percent}% do total.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Total: {month} por mês, {year} por ano'
        }
      },
      about: {
        title: 'Como o total das assinaturas é calculado',
        paragraphs: [
          'Cada assinatura é convertida em custo anual: preços mensais são multiplicados por 12, semanais por 52, e anuais são usados como estão. O total anual é então dividido por 12 para o custo mensal e por 365 para o custo diário.',
          'O detalhamento ordena suas assinaturas da mais cara para a mais barata e mostra a participação de cada uma no total, o que facilita ver o que cancelar ou trocar por um plano mais barato.',
          'Sua lista fica salva no endereço da página, nunca em um servidor. Salve a página nos favoritos para voltar à lista depois, ou compartilhe o link para revisar com a família as assinaturas da casa.'
        ]
      },
      faq: [
        {
          q: 'Como encontrar todas as minhas assinaturas?',
          a: 'Confira as faturas do cartão de crédito e os extratos bancários dos últimos meses em busca de cobranças recorrentes, inclusive débitos automáticos e Pix Automático. Veja também as assinaturas na App Store, no Google Play e no PayPal.'
        },
        {
          q: 'O plano anual sai mais barato que o mensal?',
          a: 'Muitas vezes sim, de 15% a 20%, mas só compensa se você for manter o serviço o ano inteiro de qualquer forma. Adicione as duas versões à lista para comparar o custo anual.'
        },
        {
          q: 'Minha lista fica salva?',
          a: 'Sua lista fica apenas no endereço da página. Salve o link nos favoritos ou compartilhe para guardá-la; nada é armazenado em servidor ou em cookies.'
        }
      ]
    },

    electricity: {
      name: 'Custo de energia',
      heading: 'Calculadora de consumo de energia',
      title: 'Calculadora de consumo de energia dos aparelhos',
      description: 'Calcule quanto um aparelho custa por dia, mês e ano a partir da potência, das horas de uso e do preço do kWh. Calculadora de consumo de energia elétrica grátis.',
      card: 'Veja quanto custa manter um aparelho ligado por dia, mês e ano.',
      tag: 'Casa',
      lead: 'Informe a potência do aparelho, quanto tempo ele fica ligado e quanto você paga pela energia para ver quanto custa de verdade mantê-lo ligado.',
      power: {
        label: 'Potência',
        unit: 'watts',
        chip1: 'Lâmpada LED 9 W',
        chip2: 'Notebook 60 W',
        chip3: 'TV 100 W',
        chip4: 'PC gamer 400 W',
        chip5: 'Aquecedor 1.500 W',
        decrease: 'Diminuir potência',
        increase: 'Aumentar potência'
      },
      hours: {
        label: 'Horas por dia',
        unit: 'horas',
        decrease: 'Diminuir horas por dia',
        increase: 'Aumentar horas por dia'
      },
      days: {
        label: 'Dias por semana',
        unit: 'dias',
        decrease: 'Diminuir dias por semana',
        increase: 'Aumentar dias por semana'
      },
      kwhPrice: {
        label: 'Preço da energia',
        unit: 'R$/kWh',
        value: '0.90',
        step: '0.05',
        divisor: '1',
        hint: 'Inclua impostos, encargos e a bandeira tarifária para um resultado mais preciso.',
        decrease: 'Diminuir preço da energia',
        increase: 'Aumentar preço da energia'
      },
      resultsTitle: 'Custo de uso',
      perYear: 'Por ano',
      perDayOfUse: 'Por dia de uso',
      perMonth: 'Por mês',
      energyPerYear: 'Energia por ano',
      runtime: {
        note: {
          empty: 'Informe a potência, as horas por dia (até 24), os dias por semana (até 7) e o preço da energia.',
          result: 'O aparelho consome cerca de {day} por dia de uso, aproximadamente {year} por ano.'
        }
      },
      about: {
        title: 'Como o custo da energia é calculado',
        paragraphs: [
          'O consumo em quilowatts-hora (kWh) é a potência em watts × horas de uso ÷ 1.000. Uma TV de 100 W ligada por 4 horas consome 0,4 kWh por dia. Multiplicando isso pelo preço do kWh, você tem o custo por dia de uso.',
          'O custo anual leva em conta quantos dias por semana o aparelho funciona, distribuídos pelos 365 dias do ano. O custo mensal é um doze avos do custo anual.',
          'Você encontra a potência na etiqueta do aparelho ou no manual. Muitos aparelhos usam menos que a potência máxima na maior parte do tempo, então o resultado é uma estimativa para cima. Para o preço mais preciso, inclua impostos (ICMS e PIS/Cofins), encargos e a bandeira tarifária, e não só a tarifa de energia.'
        ]
      },
      faq: [
        {
          q: 'Como calcular o gasto de energia de um aparelho?',
          a: 'Multiplique a potência em quilowatts pelas horas de uso e pelo preço do kWh. Um aquecedor de 1.500 W ligado por 3 horas custa 1,5 kW × 3 h × R$ 0,90 = R$ 4,05 por dia.'
        },
        {
          q: 'Quantos kWh um aparelho consome?',
          a: 'Divida a potência em watts por 1.000 e multiplique pelas horas de uso. Um notebook de 60 W usado 8 horas por dia consome 0,48 kWh por dia – cerca de 175 kWh por ano, se for usado todos os dias.'
        },
        {
          q: 'Qual preço da energia devo usar?',
          a: 'Use o preço total por kWh da sua conta de luz, com tarifa, impostos e bandeira tarifária. Dividir o valor total da conta pelos kWh consumidos dá uma boa média.'
        },
        {
          q: 'Aparelho em stand-by gasta energia?',
          a: 'Sim, muitos aparelhos puxam alguns watts em stand-by. Informe a potência em stand-by e 24 horas por dia para ver quanto isso custa em um ano.'
        }
      ]
    },

    trip: {
      name: 'Custo da viagem',
      heading: 'Calculadora de combustível para viagem',
      title: 'Calculadora de combustível – gasto com gasolina por viagem',
      description: 'Calcule o gasto com combustível de uma viagem ou do trajeto diário para o trabalho e divida entre os passageiros. Funciona em quilômetros e litros ou em milhas e galões.',
      card: 'Calcule o gasto com combustível de uma viagem ou do trajeto diário e divida com quem vai junto.',
      tag: 'Viagem',
      lead: 'Calcule o gasto com combustível de uma viagem ou do seu trajeto diário e divida entre todos no carro.',
      unit: {
        label: 'Unidades',
        metric: 'Quilômetros e litros',
        us: 'Milhas e galões'
      },
      distance: {
        label: 'Distância',
        unit: 'km só ida',
        decrease: 'Diminuir distância',
        increase: 'Aumentar distância'
      },
      direction: {
        label: 'Trajeto',
        one: 'Só ida',
        round: 'Ida e volta'
      },
      consumption: {
        label: 'Consumo',
        unit: 'l/100 km',
        hint: 'Sabe o consumo em km/l? Divida 100 por ele (12 km/l ≈ 8,3 l/100 km). Carro elétrico? Use kWh/100 km e o preço do kWh.',
        decrease: 'Diminuir consumo',
        increase: 'Aumentar consumo'
      },
      fuelPrice: {
        label: 'Preço do combustível',
        unit: 'R$ por litro',
        value: '6.30',
        step: '0.1',
        usStep: '0.5',
        decrease: 'Diminuir preço do combustível',
        increase: 'Aumentar preço do combustível'
      },
      people: {
        label: 'Pessoas dividindo o custo',
        unit: 'pessoas',
        decrease: 'Diminuir pessoas',
        increase: 'Aumentar pessoas'
      },
      tripsPerWeek: {
        label: 'Viagens por semana',
        unit: 'para os totais mensal e anual',
        decrease: 'Diminuir viagens por semana',
        increase: 'Aumentar viagens por semana'
      },
      resultsTitle: 'Gasto com combustível',
      perPerson: 'Por pessoa',
      perMonth: 'Por mês',
      perYear: 'Por ano',
      runtime: {
        direction: { one: 'Só ida', round: 'Ida e volta' },
        unit: {
          metric: {
            distance: 'km só ida',
            consumption: 'l/100 km',
            price: 'R$ por litro',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'milhas só ida',
            consumption: 'mpg',
            price: 'R$ por galão',
            perDistance: 'milha',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Informe a distância, o consumo e o preço do combustível para ver o custo.',
          result: 'O carro gasta {fuel} de combustível por viagem, cerca de {price} por {distance}.'
        }
      },
      about: {
        title: 'Como o custo da viagem é calculado',
        paragraphs: [
          'O combustível gasto é a distância × consumo ÷ 100. Num trajeto de 25 km em cada sentido (50 km por dia), um carro que consome 6,5 l/100 km (cerca de 15,4 km/l) gasta 3,25 litros. Multiplique pelo preço do litro para ter o custo da viagem e divida pelo número de pessoas para rachar a conta.',
          'No Brasil, o consumo costuma ser informado em km/l: para converter, divida 100 pelo valor em km/l (12 km/l ≈ 8,3 l/100 km). Em milhas e galões, o combustível gasto é a distância dividida pelas milhas por galão (mpg) do carro. Trocar de unidade converte os valores já digitados, para você comparar números de qualquer sistema.',
          'Os totais mensal e anual se baseiam nas viagens por semana – 5 viagens de ida e volta por semana é um trajeto típico para o trabalho. Com carro flex abastecido com etanol, use o consumo e o preço do etanol; com carro elétrico, informe o consumo em kWh/100 km e o preço do kWh.'
        ]
      },
      faq: [
        {
          q: 'Como calcular o gasto com gasolina de uma viagem?',
          a: 'Multiplique a distância pelo consumo e pelo preço do combustível e divida por 100. Para 200 km num carro que faz 6 l/100 km (cerca de 16,7 km/l), com gasolina a R$ 6,30 o litro: 200 × 6 ÷ 100 × R$ 6,30 = R$ 75,60.'
        },
        {
          q: 'Como dividir o combustível entre os passageiros?',
          a: 'Informe o número de pessoas que vão dividir o custo. A calculadora divide o valor da viagem igualmente entre todos, incluindo o motorista.'
        },
        {
          q: 'A calculadora inclui desgaste, estacionamento ou pedágio?',
          a: 'Não, ela considera só o combustível. Desgaste do carro, seguro, estacionamento e pedágio se somam a isso, então o custo total de dirigir é maior.'
        }
      ]
    }
  }
};
