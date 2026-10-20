// Spanish (Mexico) texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in Mexican pesos.

module.exports = {
  meta: {
    name: 'Español (México)',
    locale: 'es-MX',
    currency: 'MXN',
    ogLocale: 'es_MX'
  },

  money: {
    symbol: '$',
    zero: '$0.00',
    placeholder: '0.00',
    decimals: '2'
  },

  common: {
    skip: 'Saltar al contenido',
    home: 'Inicio',
    toggleTheme: 'Cambiar tema',
    themeToLight: 'Cambiar al tema claro',
    themeToDark: 'Cambiar al tema oscuro',
    language: 'Idioma',
    allTools: 'Todas las herramientas',
    share: 'Compartir',
    settings: 'Configuración',
    quickPicks: 'Valores rápidos',
    faqTitle: 'Preguntas frecuentes',
    relatedTools: 'Más calculadoras',
    imageAlt: 'costsimulators.com – calculadoras de costos gratuitas para las cuentas del día a día',
    invest: {
      label: 'Si lo invirtieras'
    },
    receipt: {
      open: 'Imprimir ticket',
      title: 'Tu ticket',
      close: 'Cerrar',
      skip: 'Ir al total',
      total: 'Total',
      length: 'Largo del ticket',
      thanks: '¡Gracias por 10 años de lealtad!',
      image: 'Compartir imagen'
    }
  },

  footer: {
    privacy: 'Funciona completamente en tu navegador. Sin cookies ni rastreo.',
    about: 'Acerca de',
    contact: 'Contacto',
    privacyPolicy: 'Privacidad',
    terms: 'Términos'
  },

  runtime: {
    share: {
      linkCopied: 'Enlace copiado',
      copyFailed: 'No se pudo copiar',
      copied: '¡Copiado!',
      calculatedWith: 'Calculado con costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    },
    invest: {
      note: '{monthly} al mes durante 10 años al {rate} anual: {paid} aportados y {gain} de rendimientos.'
    },
    receipt: {
      subtotal: 'Subtotal, año {year}',
      year: 'Año {year}',
      unit: 'meter',
      saved: 'Imagen guardada'
    }
  },

  home: {
    title: 'Calculadoras de costos gratis para el día a día',
    description: 'Calculadoras gratuitas y privadas que muestran lo que realmente cuestan las cosas: reuniones, horas de trabajo, hábitos, suscripciones, luz, gasolina y costo por uso. Sin registro.',
    eyebrow: 'Privado · Gratis · Al instante',
    heading: 'Pequeñas herramientas para las <span class="accent-text">cuentas</span> del día a día.',
    lead: 'Calculadoras rápidas que muestran lo que realmente cuestan las cosas. Sin registro ni rastreo: todo funciona directamente en tu navegador.',
    toolsTitle: 'Herramientas',
    toolCount: '{count} herramientas',
    suggestTitle: '¿Tienes una idea?',
    suggestText: 'Sugiere una nueva herramienta en GitHub.',
    whyTitle: 'Los pequeños gastos se acumulan',
    whyText1: 'Una reunión, un café camino al trabajo o una suscripción más de streaming casi nunca parecen caros por sí solos. Súmalos a lo largo de un mes, un año o una década, y las cifras cambian por completo.',
    whyText2: 'Cada calculadora hace una sola cosa, pide solo los datos que necesita y muestra el resultado al instante. Todo se calcula en tu navegador, así que tus números no salen de tu dispositivo.',
    aboutLink: 'Más sobre costsimulators.com',
    faq: [
      {
        q: '¿costsimulators.com es gratis?',
        a: 'Sí. Todas las calculadoras son totalmente gratuitas, sin registro, sin muro de pago y sin anuncios. También puedes usarlas en el trabajo.'
      },
      {
        q: '¿Se guardan o se envían mis datos a algún lado?',
        a: 'No. Todo lo que ingresas se calcula en tu navegador y nunca se envía a un servidor. El sitio no usa cookies ni herramientas de analítica.'
      },
      {
        q: '¿Puedo compartir un cálculo?',
        a: 'Sí. Tu configuración se guarda en la dirección de la página. Presiona Compartir para copiar el enlace, y quien lo abra verá el mismo cálculo.'
      }
    ]
  },

  notFound: {
    title: 'Página no encontrada',
    description: 'La página que buscas no existe.',
    heading: 'Esta página no existe.',
    lead: 'Puede que la dirección esté mal escrita o que la página se haya movido. Todas las calculadoras están en la página de inicio.'
  },

  documents: {
    about: {
      name: 'Acerca de',
      title: 'Acerca del proyecto – calculadoras gratuitas y privadas',
      description: 'Quién hace costsimulators.com y cómo funcionan sus calculadoras de costos gratuitas y privadas para reuniones, horas de trabajo, hábitos, compras, suscripciones, luz y viajes.'
    },
    privacy: {
      name: 'Aviso de privacidad',
      title: 'Aviso de privacidad',
      description: 'Cómo maneja tus datos costsimulators.com: los cálculos se hacen en tu navegador, sin rastreo, sin analítica y sin cuentas de usuario.'
    },
    terms: {
      name: 'Términos de uso',
      title: 'Términos de uso',
      description: 'Términos de uso de costsimulators.com: uso gratuito personal y comercial, servicio ofrecido tal cual y código abierto con licencia MIT.'
    }
  },

  tools: {
    meetings: {
      name: 'Costo de reuniones',
      heading: 'Calculadora de costo de reuniones',
      title: 'Calculadora del costo de una reunión en tiempo real',
      description: 'Calculadora gratuita del costo de reuniones con cronómetro en vivo. Ingresa el costo por hora y el número de participantes y ve cuánto cuesta la reunión segundo a segundo.',
      card: 'Ve cómo sube el precio de una reunión en tiempo real mientras hablan.',
      tag: 'Cronómetro',
      lead: 'Indica el costo por hora y el número de participantes, presiona Iniciar y ve cuánto cuesta la reunión a medida que avanza.',
      pulseEvery: '10',
      rate: {
        label: 'Costo por hora',
        unit: '$ por persona',
        step: '25',
        value: '250',
        decrease: 'Reducir costo por hora',
        increase: 'Aumentar costo por hora'
      },
      persons: {
        label: 'Participantes',
        unit: 'personas',
        decrease: 'Reducir participantes',
        increase: 'Aumentar participantes'
      },
      perMinute: 'Por minuto',
      perHour: 'Por hora',
      note: 'Puedes cambiar los valores con el cronómetro en marcha. Quien entra o sale de la reunión se cuenta desde ese momento.',
      total: 'Costo total',
      elapsed: 'Tiempo transcurrido',
      reset: 'Reiniciar',
      copyReport: 'Copiar reporte',
      kbdHint: 'Presiona la <kbd>barra espaciadora</kbd> para iniciar o pausar',
      runtime: {
        mode: { start: 'Iniciar', pause: 'Pausar', resume: 'Reanudar' },
        status: { ready: 'Listo', live: 'En curso', paused: 'En pausa' },
        announce: {
          invalid: 'Ingresa el costo por hora y el número de participantes para empezar.',
          started: 'Cronómetro iniciado.',
          paused: 'En pausa: {cost} después de {time}.',
          reset: 'Cronómetro reiniciado.'
        },
        report: {
          cost: 'Costo de la reunión: {cost}',
          duration: 'Duración: {time}',
          participants: 'Participantes: {persons} × {rate}/h'
        }
      },
      about: {
        title: 'Cómo se calcula el costo de una reunión',
        paragraphs: [
          'La calculadora multiplica el número de participantes por su costo por hora y por el tiempo transcurrido. Una reunión de una hora con 5 personas a $250 la hora cuesta $1,250, es decir, unos $20.83 cada minuto.',
          'Como costo por hora, usa lo que realmente le cuesta a la empresa una hora de trabajo, no solo el sueldo. Al salario bruto hay que sumarle las cuotas patronales al IMSS y al INFONAVIT, el aguinaldo, la prima vacacional y otras prestaciones, que en conjunto suelen añadir entre un 30 y un 40%. Si no sabes el costo de cada persona, basta con un promedio del equipo.',
          'El cronómetro sigue contando bien en una pestaña en segundo plano, y el costo acumulado aparece en el título de la pestaña del navegador, así que puedes vigilarlo mientras compartes pantalla. Al terminar la reunión, pausa el cronómetro y copia un breve reporte para la minuta.'
        ]
      },
      faq: [
        {
          q: '¿Cómo se calcula el costo de una reunión?',
          a: 'Multiplica el número de participantes por su costo promedio por hora y por la duración de la reunión en horas. Por ejemplo, 6 personas × $200 por hora × 1.5 horas = $1,800. Esta calculadora hace la cuenta en vivo mientras dura la reunión.'
        },
        {
          q: '¿Qué costo por hora debo usar?',
          a: 'Usa el costo completo de una hora de trabajo: el salario bruto por hora más las cuotas patronales al IMSS y al INFONAVIT, el aguinaldo, la prima vacacional y otras prestaciones. Para consultores, freelancers y trabajadores independientes, usa la tarifa que cobran.'
        },
        {
          q: '¿Puedo cambiar el número de participantes durante la reunión?',
          a: 'Sí. Cambia el número de participantes o el costo por hora cuando quieras. Los nuevos valores cuentan desde ese momento, y el costo ya acumulado se mantiene.'
        },
        {
          q: '¿El cronómetro sigue funcionando si cambio de pestaña?',
          a: 'Sí. El cronómetro se basa en el reloj, así que el total sigue siendo correcto en una pestaña en segundo plano. Mientras está en marcha, la página también le pide al navegador que mantenga la pantalla encendida.'
        }
      ]
    },

    workhours: {
      name: 'Horas de trabajo',
      heading: 'Calculadora de precio en horas de trabajo',
      title: 'Precio en horas de trabajo – cuánto necesitas trabajar',
      description: 'Convierte cualquier precio en las horas, días y semanas de trabajo que te cuesta. Ingresa tu sueldo por hora, al mes o al año y ve lo que realmente cuesta una compra en tiempo de trabajo.',
      card: 'Convierte cualquier precio en las horas, días y semanas que tienes que trabajar para pagarlo.',
      tag: 'Trabajo',
      lead: 'Ingresa tu sueldo y un precio para ver cuánto tiempo tienes que trabajar para pagarlo.',
      period: {
        label: 'Conozco mi sueldo',
        hour: 'Por hora',
        month: 'Por mes',
        year: 'Por año'
      },
      pay: {
        label: 'Sueldo',
        unit: '$ por hora',
        value: '80',
        step: '5',
        monthStep: '500',
        yearStep: '5000',
        hint: 'Usa tu sueldo neto, después de impuestos, para obtener la respuesta más realista.',
        decrease: 'Reducir sueldo',
        increase: 'Aumentar sueldo'
      },
      hoursPerWeek: {
        label: 'Horas a la semana',
        unit: 'horas',
        value: '48',
        chip1: '40 h',
        chip2: '48 h',
        preset1: '40',
        preset2: '48',
        decrease: 'Reducir horas a la semana',
        increase: 'Aumentar horas a la semana'
      },
      price: {
        label: 'Precio',
        unit: '$',
        value: '15999',
        step: '100',
        decrease: 'Reducir precio',
        increase: 'Aumentar precio'
      },
      resultsTitle: 'Precio en tiempo de trabajo',
      youNeedToWork: 'Tienes que trabajar',
      workDays: 'Días de trabajo',
      workWeeks: 'Semanas de trabajo',
      hourlyRate: 'Tu sueldo por hora',
      runtime: {
        unit: {
          hour: '$ por hora',
          month: '$ al mes',
          year: '$ al año'
        },
        days: { one: '{n} día', many: '{n} días', other: '{n} días' },
        weeks: { one: '{n} semana', many: '{n} semanas', other: '{n} semanas' },
        note: {
          empty: 'Ingresa tu sueldo, tus horas a la semana y un precio para ver cuánto tienes que trabajar para pagarlo.',
          result: 'Calculado con jornadas de {hours} horas, {days} días a la semana.'
        }
      },
      about: {
        title: 'Cómo se calcula el tiempo de trabajo',
        paragraphs: [
          'Primero, tu sueldo se convierte en sueldo por hora. Un sueldo mensual se multiplica por 12 y se divide entre las horas que trabajas en un año (horas a la semana × 52); un sueldo anual se divide directamente entre esas horas. Después, el precio se divide entre tu sueldo por hora.',
          'Los días de trabajo suponen una semana de cinco días, así que 40 horas a la semana equivalen a jornadas de 8 horas, y 48 horas, a jornadas de 9.6 horas. Por ejemplo, ganando $80 la hora, un celular de $15,999 cuesta casi 200 horas de trabajo: algo más de cuatro semanas laborales de 48 horas.',
          'Para obtener la respuesta más realista, usa tu sueldo neto, después de impuestos, porque es el dinero que realmente gastas. Pensar en los precios en horas de trabajo es una forma sencilla de decidir si algo realmente vale la pena.'
        ]
      },
      faq: [
        {
          q: '¿Cuántas horas tengo que trabajar para pagar algo?',
          a: 'Divide el precio entre tu sueldo neto por hora. Si ganas $70 la hora después de impuestos, una compra de $3,500 te cuesta 50 horas de trabajo.'
        },
        {
          q: '¿Uso el sueldo bruto o el neto?',
          a: 'El sueldo neto, después de impuestos, da la respuesta más realista, porque es el dinero que realmente tienes para gastar. Con el bruto, las cosas parecen más baratas de lo que son.'
        },
        {
          q: '¿Cómo convierto un sueldo mensual en sueldo por hora?',
          a: 'Multiplica el sueldo mensual por 12 y divídelo entre las horas que trabajas en un año. Con una semana de 48 horas son 2,496 horas, así que $16,000 netos al mes son unos $77 la hora. La calculadora lo hace por ti si eliges Por mes; si quieres contar el aguinaldo, elige Por año e ingresa el total anual.'
        }
      ]
    },

    costperuse: {
      name: 'Costo por uso',
      heading: 'Calculadora de costo por uso',
      title: 'Calculadora de costo por uso – ¿vale la pena el precio?',
      description: 'Calcula lo que realmente cuesta una compra cada vez que la usas: el precio menos su valor de reventa, dividido entre cuántas veces y durante cuánto tiempo la usas.',
      card: 'Reparte el precio de una compra entre todas las veces que la usas y ve si vale la pena.',
      tag: 'Compras',
      lead: 'Ingresa el precio, cada cuánto vas a usar lo que compras y durante cuánto tiempo, y ve lo que realmente cuesta cada uso.',
      price: {
        label: 'Precio',
        unit: '$',
        value: '8000',
        step: '100',
        decrease: 'Reducir precio',
        increase: 'Aumentar precio'
      },
      period: {
        label: 'Cada cuánto lo usas',
        week: 'Por semana',
        month: 'Por mes',
        year: 'Por año'
      },
      uses: {
        label: 'Usos',
        unit: 'veces a la semana',
        decrease: 'Reducir usos',
        increase: 'Aumentar usos'
      },
      years: {
        label: 'Años de uso',
        unit: 'años',
        chip1: '1 año',
        chip2: '3 años',
        chip3: '5 años',
        decrease: 'Reducir años de uso',
        increase: 'Aumentar años de uso'
      },
      resale: {
        label: 'Valor de reventa',
        unit: '$, opcional',
        hint: 'Lo que esperas recibir cuando lo vendas. Déjalo en 0 si no vas a recuperar nada.',
        decrease: 'Reducir valor de reventa',
        increase: 'Aumentar valor de reventa'
      },
      resultsTitle: 'Costo por uso',
      perUse: 'Cada uso cuesta',
      totalUses: 'Usos en total',
      perMonth: 'Al mes',
      perYear: 'Al año',
      runtime: {
        unit: {
          week: 'veces a la semana',
          month: 'veces al mes',
          year: 'veces al año'
        },
        note: {
          empty: 'Ingresa el precio, cada cuánto lo usas y durante cuántos años. El valor de reventa tiene que ser menor que el precio.',
          result: 'Si lo usas un año más, el costo por uso baja a {next}.'
        }
      },
      about: {
        title: 'Cómo se calcula el costo por uso',
        paragraphs: [
          'El costo por uso es el precio menos lo que recuperas al venderlo, dividido entre el número de veces que lo usas. El número de usos es cada cuánto lo usas × las semanas, meses o años durante los que lo usas. Una compra de $8,000 que se usa 3 veces a la semana durante 3 años suma 468 usos y cuesta $17.09 por uso.',
          'Los costos mensual y anual reparten esa misma cantidad a lo largo del tiempo que lo tienes, así que es fácil comparar la compra con rentar, un arrendamiento o una suscripción.',
          'El costo por uso es una forma sencilla de comparar algo barato que se desgasta pronto con algo caro que dura. Unos tenis de $800 que usas 50 veces cuestan $16 por uso; unos de $2,400 que usas 400 veces, $6.'
        ]
      },
      faq: [
        {
          q: '¿Cómo se calcula el costo por uso?',
          a: 'Divide el precio entre el número de veces que usas lo que compraste. Si después lo vendes, resta antes el valor de reventa del precio. Una chamarra de $1,600 que usas 80 veces cuesta $20 cada vez que te la pones.'
        },
        {
          q: '¿Qué es un buen costo por uso?',
          a: 'Depende de lo que cueste la alternativa. Compáralo con rentar, pedirlo prestado o pagar cada vez: si el pase de un día al gimnasio cuesta $150, una mensualidad de $599 conviene a partir de la cuarta visita al mes.'
        },
        {
          q: '¿Sirve para suscripciones y membresías?',
          a: 'Sí. Ingresa como precio el monto anual, cada cuánto lo usas y 1 año. Para una mensualidad de gimnasio de $599, ingresa $7,188 y tus visitas por semana.'
        }
      ]
    },

    coffee: {
      name: 'Gasto en café',
      heading: 'Calculadora del gasto en café',
      title: 'Cuánto gastas en café al año – calculadora del gasto en café',
      description: 'Descubre cuánto te cuesta tu café diario al mes y en 1, 5 y 10 años. Ingresa el precio por taza y las tazas por semana. Gratis y privado.',
      card: 'Ve cuánto suma tu café de cada día en uno, cinco y diez años.',
      tag: 'Hábito',
      lead: 'Ingresa lo que cuesta una taza y cada cuánto la compras para ver cuánto suma el hábito con los años.',
      price: {
        label: 'Precio por taza',
        unit: '$',
        step: '5',
        value: '50',
        decrease: 'Reducir precio del café',
        increase: 'Aumentar precio del café'
      },
      perWeek: {
        label: 'Tazas por semana',
        unit: 'tazas',
        chip1: 'Días laborables',
        chip2: 'Todos los días',
        chip3: 'Dos al día',
        decrease: 'Reducir tazas por semana',
        increase: 'Aumentar tazas por semana'
      },
      resultsTitle: 'Lo que suma',
      in10Years: 'En 10 años',
      perMonth: 'Al mes',
      year1: '1 año',
      year5: '5 años',
      receiptTitle: 'Ticket del café',
      receiptCount: 'Tazas',
      runtime: {
        receiptItem: 'Café',
        note: {
          empty: 'Ingresa un precio y cuántas tazas tomas por semana para ver los totales.',
          result: 'Son unas {cups} tazas al año a {price} cada una.'
        }
      },
      about: {
        title: 'Cómo se calcula el gasto en café',
        paragraphs: [
          'El costo anual es el precio por taza × tazas por semana × 52 semanas. El costo mensual es el anual dividido entre 12, y los totales a 5 y 10 años multiplican el costo anual sin tomar en cuenta la inflación ni los aumentos de precio.',
          'Un café de $50 cada día laborable suma $13,000 al año y $130,000 en diez años. Si la cifra te sorprende, preparar el café en casa o llevarlo en un termo son formas fáciles de reducir el gasto.',
          'La calculadora sirve para cualquier compra pequeña y frecuente: una bebida energética, la torta del almuerzo o una botella de agua. Ingresa el precio y cuántas veces lo compras a la semana.'
        ]
      },
      faq: [
        {
          q: '¿Cuánto cuesta al año un café diario?',
          a: 'Una taza al día, los siete días de la semana, son 364 tazas al año. A $45 la taza, son $16,380 al año y $163,800 en diez años.'
        },
        {
          q: '¿Sale más barato preparar el café en casa?',
          a: 'Normalmente, mucho más. Una taza preparada en casa suele costar menos de $10, frente a $40 o $60 en una cafetería. Ingresa lo que te cuesta la taza en casa para comparar.'
        },
        {
          q: '¿La calculadora toma en cuenta la inflación?',
          a: 'No. Las proyecciones suponen que el precio no cambia, así que muestran lo que cuesta el hábito a precios de hoy. Si los precios suben, el costo real a largo plazo es mayor.'
        },
        {
          q: '¿Y si invirtiera el dinero en lugar de gastarlo?',
          a: 'El recuadro “Si lo invirtieras” muestra en cuánto se convertiría el dinero si lo invirtieras cada mes en lugar de gastarlo, con un rendimiento del 4% anual y capitalización mensual. Un café de $50 cada día laborable son $1,083.33 al mes, que en 10 años se convierten en unos $158,920: $130,000 los pones tú y el resto son rendimientos. No se toman en cuenta impuestos, comisiones ni inflación. Es un ejemplo, no una recomendación de inversión.'
        }
      ]
    },

    smoking: {
      name: 'Gasto en cigarros',
      heading: 'Calculadora del gasto en cigarros',
      title: 'Cuánto gastas en cigarros – lo que te cuesta fumar',
      description: 'Calcula cuánto te cuesta fumar al mes y en 1, 5 y 10 años, y cuánto ahorras si lo dejas. Ingresa el precio de la cajetilla y los cigarros que fumas al día.',
      card: 'Descubre cuánto dinero se te va en humo cada mes y con los años.',
      tag: 'Hábito',
      lead: 'Ingresa lo que cuesta una cajetilla y cuánto fumas para ver cuánto dinero se va en humo con los años.',
      packPrice: {
        label: 'Precio de la cajetilla',
        unit: '$',
        step: '5',
        value: '110',
        decrease: 'Reducir precio de la cajetilla',
        increase: 'Aumentar precio de la cajetilla'
      },
      perDay: {
        label: 'Cigarros al día',
        unit: 'cigarros',
        chip1: '5 al día',
        chip2: '10 al día',
        chip3: '20 al día',
        decrease: 'Reducir cigarros al día',
        increase: 'Aumentar cigarros al día'
      },
      perPack: {
        label: 'Cigarros por cajetilla',
        unit: 'tamaño de la cajetilla',
        value: '20',
        decrease: 'Reducir cigarros por cajetilla',
        increase: 'Aumentar cigarros por cajetilla'
      },
      resultsTitle: 'Dinero que se va en humo',
      in10Years: 'En 10 años',
      perMonth: 'Al mes',
      year1: '1 año',
      year5: '5 años',
      receiptTitle: 'Ticket de cigarros',
      receiptCount: 'Cajetillas',
      runtime: {
        receiptItem: 'Cajetilla de cigarros',
        note: {
          empty: 'Ingresa el precio de la cajetilla, cuántos cigarros fumas al día y cuántos trae la cajetilla para ver los totales.',
          result: 'Son unos {cigarettes} cigarros ({packs} cajetillas) al año a {price} cada uno.'
        }
      },
      about: {
        title: 'Cómo se calcula lo que cuesta fumar',
        paragraphs: [
          'El precio de un cigarro es el precio de la cajetilla dividido entre los cigarros que trae. Ese precio se multiplica por los cigarros que fumas al día y por 365 días para obtener el costo anual. El costo mensual es la doceava parte, y los totales a 5 y 10 años usan los precios actuales.',
          'Media cajetilla al día a $110 la cajetilla son unos $20,075 al año y más de $200,000 en diez años. Ver el total puede ser una gran motivación: ese mismo dinero podría ir a un viaje, al ahorro o a pagar deudas.',
          'La calculadora solo cuenta el precio de los cigarros. Los gastos médicos y las incapacidades por enfermedad van aparte. Si quieres ayuda para dejarlo, tu médico o la Línea de la Vida pueden ayudarte.'
        ]
      },
      faq: [
        {
          q: '¿Cuánto cuesta al año fumar una cajetilla diaria?',
          a: 'Una cajetilla al día son 365 cajetillas al año. A $110 la cajetilla, son $40,150 al año y $401,500 en diez años.'
        },
        {
          q: '¿Cuánto dinero ahorro si dejo de fumar?',
          a: 'Todo lo que muestra esta calculadora. Ingresa lo que fumas hoy: los totales mensuales y anuales son lo que te ahorras al dejarlo.'
        },
        {
          q: '¿Sirve también para el tabaco para forjar?',
          a: 'Sí. Ingresa el precio de la bolsa como precio de la cajetilla, el número de cigarros que forjas con ella como tamaño de la cajetilla y cuántos fumas al día.'
        },
        {
          q: '¿Y si invirtiera el dinero en lugar de gastarlo?',
          a: 'El recuadro “Si lo invirtieras” muestra en cuánto se convertiría el dinero si lo invirtieras cada mes en lugar de gastarlo en cigarros, con un rendimiento del 4% anual y capitalización mensual. Media cajetilla al día a $110 la cajetilla son unos $1,673 al mes, que en 10 años se convierten en unos $245,410: $200,750 los pones tú y el resto son rendimientos. No se toman en cuenta impuestos, comisiones ni inflación. Es un ejemplo, no una recomendación de inversión.'
        }
      ]
    },

    alcohol: {
      name: 'Gasto en alcohol',
      heading: 'Calculadora del gasto en alcohol',
      title: 'Calculadora del gasto en alcohol – lo que te cuesta tomar',
      description: 'Ve cuánto te cuestan la cerveza, el vino y otras bebidas al mes y en 1, 5 y 10 años, y en cuánto se convertiría ese dinero si lo invirtieras.',
      card: 'Ve cuánto suman las bebidas de cada semana en uno, cinco y diez años.',
      tag: 'Hábito',
      lead: 'Ingresa lo que cuesta una bebida y cuántas tomas a la semana para ver cuánto suma con los años.',
      price: {
        label: 'Precio por bebida',
        unit: '$',
        step: '5',
        value: '60',
        hint: '¿Tomas tanto en casa como fuera? Usa un precio promedio.',
        decrease: 'Reducir precio por bebida',
        increase: 'Aumentar precio por bebida'
      },
      perWeek: {
        label: 'Bebidas por semana',
        unit: 'bebidas',
        chip1: '3 a la semana',
        chip2: '7 a la semana',
        chip3: '14 a la semana',
        decrease: 'Reducir bebidas por semana',
        increase: 'Aumentar bebidas por semana'
      },
      resultsTitle: 'Lo que suma',
      in10Years: 'En 10 años',
      perMonth: 'Al mes',
      year1: '1 año',
      year5: '5 años',
      receiptTitle: 'La cuenta del bar',
      receiptCount: 'Bebidas',
      runtime: {
        receiptItem: 'Bebida',
        note: {
          empty: 'Ingresa un precio y cuántas bebidas tomas por semana para ver los totales.',
          result: 'Son unas {drinks} bebidas al año a {price} cada una.'
        }
      },
      about: {
        title: 'Cómo se calcula el gasto en alcohol',
        paragraphs: [
          'El costo anual es el precio por bebida × bebidas por semana × 52 semanas. El costo mensual es la doceava parte, y los totales a 5 y 10 años usan los precios actuales, sin inflación.',
          'Seis cervezas a la semana a $60 cada una suman $18,720 al año y $187,200 en diez años. Si tomas tanto en bares como en casa, usa un precio promedio, o calcula cada gasto por separado y súmalos.',
          'El recuadro “Si lo invirtieras” muestra en cuánto se convertiría ese mismo dinero si lo invirtieras cada mes, con un rendimiento del 4% anual durante 10 años. La calculadora solo cuenta lo que cuestan las bebidas; los efectos en la salud van aparte. Si quieres tomar menos, tu médico o la Línea de la Vida pueden ayudarte.'
        ]
      },
      faq: [
        {
          q: '¿Cuánto gasto en alcohol al año?',
          a: 'Multiplica el precio de una bebida por las que tomas a la semana y por 52. Seis bebidas a la semana a $60 cada una son $18,720 al año.'
        },
        {
          q: '¿Cuánto ahorraría si tomara menos?',
          a: 'Ingresa el número de bebidas al que te gustaría bajar y compara. Pasar de 6 a 3 bebidas a la semana a $60 cada una ahorra $9,360 al año y $93,600 en diez años.'
        },
        {
          q: '¿Y si invirtiera el dinero en lugar de gastarlo?',
          a: 'El recuadro “Si lo invirtieras” muestra cuánto tendrías después de 10 años si invirtieras el dinero cada mes en lugar de gastarlo, con un rendimiento del 4% anual y capitalización mensual. Seis bebidas de $60 a la semana son $1,560 al mes, que se convierten en unos $228,850: $187,200 los pones tú y el resto son rendimientos. No se toman en cuenta impuestos, comisiones ni inflación. Es un ejemplo, no una recomendación de inversión.'
        }
      ]
    },

    gambling: {
      name: 'Lotería y apuestas',
      heading: 'Calculadora del gasto en lotería y apuestas',
      title: 'Cuánto gastas en lotería y apuestas – lo que cuesta jugar',
      description: 'Ve cuánto te cuestan la lotería y las apuestas al mes y en 10 años, cuánto pierdes en promedio y en cuánto se convertiría lo apostado si lo invirtieras.',
      card: 'Ve cuánto suman la lotería y las apuestas y cuánto pierdes en promedio.',
      tag: 'Hábito',
      lead: 'Ingresa cuánto apuestas y cada cuánto juegas para ver lo que te cuestan la lotería y las apuestas con los años, y cuánto recuperas en promedio en premios.',
      stake: {
        label: 'Monto por jugada',
        unit: '$',
        step: '5',
        value: '30',
        decrease: 'Reducir monto por jugada',
        increase: 'Aumentar monto por jugada'
      },
      perWeek: {
        label: 'Jugadas por semana',
        unit: 'jugadas',
        chip1: '1 vez por semana',
        chip2: '2 veces por semana',
        chip3: 'Todos los días',
        decrease: 'Reducir jugadas por semana',
        increase: 'Aumentar jugadas por semana'
      },
      payout: {
        label: 'Porcentaje de retorno',
        unit: '% devuelto',
        chip1: 'Lotería',
        chip2: 'Apuestas deportivas',
        chip3: 'Casino',
        hint: 'La parte de todo lo apostado que se devuelve en premios. Las loterías suelen devolver más o menos la mitad, y las apuestas deportivas y los juegos de casino, entre el 90 y el 97%.',
        decrease: 'Reducir porcentaje de retorno',
        increase: 'Aumentar porcentaje de retorno'
      },
      resultsTitle: 'Lo que cuesta',
      in10Years: 'Apostado en 10 años',
      perMonth: 'Al mes',
      perYear: 'Al año',
      lossPerYear: 'Pérdida promedio al año',
      receiptTitle: 'Ticket de lotería y apuestas',
      receiptCount: 'Jugadas',
      receiptBack: 'Regresa en premios en promedio',
      receiptLoss: 'Perdido en promedio',
      runtime: {
        receiptItem: 'Jugada',
        note: {
          empty: 'Ingresa el monto por jugada, cuántas veces juegas a la semana y el porcentaje de retorno (0–100).',
          result: 'En promedio recuperas unos {back} al año en premios, así que pierdes unos {loss} al año y {loss10} en 10 años.'
        }
      },
      about: {
        title: 'Cómo se calcula el gasto en lotería y apuestas',
        paragraphs: [
          'El costo anual es el monto por jugada × jugadas por semana × 52 semanas. El costo mensual es la doceava parte, y el total a 10 años usa los montos actuales.',
          'El porcentaje de retorno es la parte de todo lo apostado que se devuelve en premios. Con un retorno del 50%, jugar $30 dos veces por semana son $3,120 apostados al año, de los que en promedio vuelven unos $1,560 en premios: una pérdida promedio de $1,560 al año. Un jugador puede ganar mucho o perderlo todo, pero a lo largo de muchas jugadas el resultado se acerca al promedio.',
          'El recuadro “Si lo invirtieras” muestra en cuánto se convertiría lo apostado si lo invirtieras cada mes, con un rendimiento del 4% anual durante 10 años. Si te cuesta controlar el juego, tu médico o la Línea de la Vida pueden ayudarte.'
        ]
      },
      faq: [
        {
          q: '¿Cuánto gasto en lotería al año?',
          a: 'Multiplica el monto por jugada por las veces que juegas a la semana y por 52. Jugar $30 dos veces por semana son $3,120 al año y $31,200 en diez años.'
        },
        {
          q: '¿Qué es el porcentaje de retorno?',
          a: 'Es la parte de todo lo apostado que se devuelve a los jugadores en premios. Las loterías suelen devolver más o menos la mitad de lo apostado, y las apuestas deportivas y los juegos de casino, entre el 90 y el 97%. El resto se lo queda el operador, y es lo que pierden en promedio los jugadores.'
        },
        {
          q: '¿Y si invirtiera el dinero en lugar de apostarlo?',
          a: 'El recuadro “Si lo invirtieras” muestra cuánto tendrías después de 10 años si invirtieras cada mes lo que apuestas, con un rendimiento del 4% anual y capitalización mensual. Jugar $30 dos veces por semana son $260 al mes, que se convierten en unos $38,140: $31,200 los pones tú y el resto son rendimientos. No se toman en cuenta impuestos, comisiones ni inflación. Es un ejemplo, no una recomendación de inversión.'
        }
      ]
    },

    subscriptions: {
      name: 'Suscripciones',
      heading: 'Calculadora de suscripciones',
      title: 'Calculadora de suscripciones – cuánto pagas al mes y al año',
      description: 'Suma el streaming, el gimnasio, el plan de celular y todas tus demás suscripciones. Ve el total al mes, al año y en 10 años, y qué suscripción te cuesta más.',
      card: 'Suma el streaming, el gimnasio y todos tus pagos recurrentes en un solo lugar.',
      tag: 'Presupuesto',
      lead: 'Anota todo lo que pagas de forma recurrente y ve cuánto suma en total. Acepta pagos mensuales, anuales y semanales.',
      listTitle: 'Tus suscripciones',
      empty: 'Todavía no hay suscripciones. Agrega una abajo o elige una en Agregar rápido.',
      add: 'Agregar suscripción',
      quickAdd: 'Agregar rápido',
      quick: {
        1: { name: 'Video en streaming', price: '249' },
        2: { name: 'Música en streaming', price: '129' },
        3: { name: 'Gimnasio', price: '599' },
        4: { name: 'Almacenamiento en la nube', price: '49' },
        5: { name: 'Plan de celular', price: '249' },
        6: { name: 'Noticias digitales', price: '99' }
      },
      note: 'Tu lista se guarda en la dirección de la página, así que puedes guardarla en favoritos o compartirla. Nunca se envía a ningún lado.',
      row: {
        name: 'Nombre',
        nameLabel: 'Nombre de la suscripción',
        priceLabel: 'Precio en pesos',
        cycleLabel: 'Periodo de cobro',
        monthly: '/ mes',
        yearly: '/ año',
        weekly: '/ semana'
      },
      resultsTitle: 'Total de suscripciones',
      perYear: 'Al año',
      perMonth: 'Al mes',
      perDay: 'Al día',
      in10Years: 'En 10 años',
      breakdownLabel: 'Costo anual por suscripción',
      copySummary: 'Copiar resumen',
      receiptTitle: 'Ticket de suscripciones',
      receiptCount: 'Cargos',
      runtime: {
        receiptItem: 'Cargo',
        untitled: 'Sin nombre',
        remove: 'Eliminar {name}',
        removeUnnamed: 'Eliminar suscripción',
        breakdown: '{cost} / año · {percent}%',
        cycle: { monthly: 'mes', yearly: 'año', weekly: 'semana' },
        note: {
          empty: 'Agrega una suscripción con su precio para ver los totales.',
          single: 'Pagas {cost} al año por {name}.',
          biggest: 'Tu mayor gasto es {name}, con {cost} al año, el {percent}% del total.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Total: {month} al mes, {year} al año'
        }
      },
      about: {
        title: 'Cómo se calcula el total de suscripciones',
        paragraphs: [
          'Cada suscripción se convierte en un costo anual: los precios mensuales se multiplican por 12, los semanales por 52 y los anuales se usan tal cual. Después, el total anual se divide entre 12 para obtener el costo mensual y entre 365 para el diario.',
          'El desglose ordena tus suscripciones de la más cara a la más barata y muestra qué parte del total representa cada una, así que es fácil ver cuál cancelar o cambiar por un plan más barato.',
          'Tu lista se guarda en la dirección de la página, nunca en un servidor. Guarda la página en favoritos para volver a tu lista más tarde, o comparte el enlace para revisar en familia las suscripciones compartidas.'
        ]
      },
      faq: [
        {
          q: '¿Cómo encuentro todas mis suscripciones?',
          a: 'Revisa los estados de cuenta del banco y de la tarjeta de los últimos meses y busca cargos recurrentes y domiciliados. Revisa también la configuración de suscripciones de App Store, Google Play y PayPal.'
        },
        {
          q: '¿Sale más barato el plan anual que el mensual?',
          a: 'A menudo, entre un 15 y un 20%, pero solo si de todos modos ibas a mantener el servicio todo el año. Agrega las dos versiones a la lista para comparar su costo anual.'
        },
        {
          q: '¿Se guarda mi lista?',
          a: 'Tu lista solo se guarda en la dirección de la página. Guarda el enlace en favoritos o compártelo para conservarla; no se guarda nada en ningún servidor ni en cookies.'
        },
        {
          q: '¿Y si invirtiera el dinero en lugar de gastarlo?',
          a: 'El recuadro “Si lo invirtieras” muestra en cuánto se convertirían tus suscripciones si invirtieras esa misma cantidad cada mes, con un rendimiento del 4% anual y capitalización mensual. Con $500 al mes reunirías unos $73,350 en 10 años: $60,000 los pones tú y el resto son rendimientos. No se toman en cuenta impuestos, comisiones ni inflación. Es un ejemplo, no una recomendación de inversión.'
        }
      ]
    },

    electricity: {
      name: 'Consumo de luz',
      heading: 'Calculadora de consumo de luz',
      title: 'Calculadora de consumo de luz – cuánto cuesta cada aparato',
      description: 'Calcula cuánto cuesta usar un aparato al día, al mes y al año a partir de su potencia, las horas de uso y el precio de la luz. Calculadora gratuita del costo por kWh.',
      card: 'Ve cuánto cuesta tener un aparato encendido al día, al mes y al año.',
      tag: 'Hogar',
      lead: 'Ingresa la potencia de un aparato, cuánto tiempo funciona y lo que pagas por la luz para ver cuánto cuesta realmente tenerlo encendido.',
      power: {
        label: 'Potencia',
        unit: 'watts',
        chip1: 'Foco LED 9 W',
        chip2: 'Laptop 60 W',
        chip3: 'Televisión 100 W',
        chip4: 'PC gamer 400 W',
        chip5: 'Calefactor 1500 W',
        decrease: 'Reducir potencia',
        increase: 'Aumentar potencia'
      },
      hours: {
        label: 'Horas al día',
        unit: 'horas',
        decrease: 'Reducir horas al día',
        increase: 'Aumentar horas al día'
      },
      days: {
        label: 'Días por semana',
        unit: 'días',
        decrease: 'Reducir días por semana',
        increase: 'Aumentar días por semana'
      },
      kwhPrice: {
        label: 'Precio de la luz',
        unit: '$/kWh',
        value: '2',
        step: '0.1',
        divisor: '1',
        hint: 'La tarifa de CFE es escalonada: usa el precio del bloque en el que cae tu consumo, con IVA.',
        decrease: 'Reducir precio de la luz',
        increase: 'Aumentar precio de la luz'
      },
      resultsTitle: 'Costo de uso',
      perYear: 'Al año',
      perDayOfUse: 'Por día de uso',
      perMonth: 'Al mes',
      energyPerYear: 'Energía al año',
      runtime: {
        note: {
          empty: 'Ingresa la potencia, las horas al día (hasta 24), los días por semana (hasta 7) y el precio de la luz.',
          result: 'Consume unos {day} cada día que funciona, alrededor de {year} al año.'
        }
      },
      about: {
        title: 'Cómo se calcula el costo de la luz',
        paragraphs: [
          'El consumo de energía en kilowatts hora (kWh) es la potencia en watts × horas de uso ÷ 1000. Una televisión de 100 W encendida 4 horas consume 0.4 kWh al día. Si lo multiplicas por el precio del kWh, obtienes el costo por día de uso.',
          'El costo anual toma en cuenta cuántos días a la semana funciona el aparato, repartidos a lo largo de los 365 días del año. El costo mensual es la doceava parte del anual.',
          'La potencia aparece en la etiqueta de datos del aparato o en su manual. Muchos aparatos consumen menos que su potencia máxima la mayor parte del tiempo, así que el resultado es una estimación al alza. La tarifa doméstica de CFE cobra cada vez más caro el kWh a medida que subes de consumo básico a intermedio y a excedente, así que usa el precio del bloque en el que cae tu consumo, con IVA.'
        ]
      },
      faq: [
        {
          q: '¿Cómo se calcula cuánta luz gasta un aparato?',
          a: 'Multiplica la potencia en kilowatts por las horas de uso y por el precio del kWh. Un calefactor de 1500 W encendido 3 horas cuesta 1.5 kW × 3 h × $2 = $9 al día.'
        },
        {
          q: '¿Cuántos kWh consume un aparato?',
          a: 'Divide los watts entre 1000 y multiplica por las horas de uso. Una laptop de 60 W que se usa 8 horas al día consume 0.48 kWh diarios, unos 175 kWh al año si se usa todos los días.'
        },
        {
          q: '¿Qué precio de la luz debo usar?',
          a: 'La tarifa doméstica de CFE es escalonada: los primeros kWh de cada periodo (consumo básico) son los más baratos, después viene el consumo intermedio y lo que pasa de ahí (excedente) cuesta varias veces más. Si divides el total de tu recibo de luz de CFE entre los kWh consumidos, obtienes un buen promedio con IVA incluido.'
        },
        {
          q: '¿Los aparatos en modo de espera gastan luz?',
          a: 'Sí, muchos aparatos consumen unos cuantos watts en modo de espera (standby). Ingresa la potencia en espera y 24 horas al día para ver lo que cuesta en un año.'
        }
      ]
    },

    trip: {
      name: 'Costo del viaje',
      heading: 'Calculadora de gasolina y costo del viaje',
      title: 'Calculadora de gasolina – costo del viaje y del trayecto',
      description: 'Calcula cuánto cuesta en gasolina o diésel un viaje o el trayecto diario al trabajo y repártelo entre los pasajeros. Funciona en kilómetros y litros o en millas y galones.',
      card: 'Calcula el combustible de un viaje o del trayecto al trabajo y repártelo con otros.',
      tag: 'Viajes',
      lead: 'Calcula el costo de combustible de un viaje o de tu trayecto diario al trabajo y repártelo entre todos los que van en el auto.',
      unit: {
        label: 'Unidades',
        metric: 'Kilómetros y litros',
        us: 'Millas y galones'
      },
      distance: {
        label: 'Distancia',
        unit: 'km solo ida',
        decrease: 'Reducir distancia',
        increase: 'Aumentar distancia'
      },
      direction: {
        label: 'Trayecto',
        one: 'Solo ida',
        round: 'Ida y vuelta'
      },
      consumption: {
        label: 'Consumo',
        unit: 'l/100 km',
        hint: '¿Sabes cuántos km/l rinde tu auto? Divide 100 entre ese número. ¿Es eléctrico? Ingresa kWh/100 km y el precio del kWh.',
        decrease: 'Reducir consumo',
        increase: 'Aumentar consumo'
      },
      fuelPrice: {
        label: 'Precio del combustible',
        unit: '$ por litro',
        value: '24',
        step: '0.5',
        usStep: '2',
        decrease: 'Reducir precio del combustible',
        increase: 'Aumentar precio del combustible'
      },
      people: {
        label: 'Personas que comparten gastos',
        unit: 'personas',
        decrease: 'Reducir personas',
        increase: 'Aumentar personas'
      },
      tripsPerWeek: {
        label: 'Viajes por semana',
        unit: 'para los totales mensuales y anuales',
        decrease: 'Reducir viajes por semana',
        increase: 'Aumentar viajes por semana'
      },
      resultsTitle: 'Costo de combustible',
      perPerson: 'Por persona',
      perMonth: 'Al mes',
      perYear: 'Al año',
      runtime: {
        direction: { one: 'Solo ida', round: 'Ida y vuelta' },
        unit: {
          metric: {
            distance: 'km solo ida',
            consumption: 'l/100 km',
            price: '$ por litro',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'millas solo ida',
            consumption: 'mpg',
            price: '$ por galón',
            perDistance: 'milla',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Ingresa la distancia, el consumo y el precio del combustible para ver el costo.',
          result: 'Gasta {fuel} de combustible por viaje, unos {price} por {distance}.'
        }
      },
      about: {
        title: 'Cómo se calcula el costo del viaje',
        paragraphs: [
          'En kilómetros y litros, el combustible consumido es la distancia × el consumo ÷ 100. Un trayecto al trabajo de 25 km en cada sentido (50 km al día) en un auto que gasta 6.5 l/100 km consume 3.25 litros. Multiplica por el precio del litro para obtener el costo del viaje y divide entre el número de personas para repartirlo.',
          'En millas y galones, el combustible consumido es la distancia dividida entre las millas por galón (mpg) del auto. Al cambiar de unidades se convierten los valores que ingresaste, así que puedes comparar cifras de cualquiera de los dos sistemas.',
          'Los totales mensuales y anuales se basan en los viajes por semana: 5 viajes de ida y vuelta a la semana es lo típico para ir al trabajo. Para un auto eléctrico, ingresa el consumo en kWh/100 km y el precio del kWh.'
        ]
      },
      faq: [
        {
          q: '¿Cómo se calcula cuánto cuesta un viaje en gasolina?',
          a: 'Multiplica la distancia por el consumo y por el precio del combustible, y divide entre 100. Para 200 km en un auto que gasta 6 l/100 km con la gasolina a $24 el litro: 200 × 6 ÷ 100 × $24 = $288.'
        },
        {
          q: 'Mi auto rinde en kilómetros por litro, ¿qué ingreso?',
          a: 'Divide 100 entre el rendimiento para obtener los litros por cada 100 km. Un auto que rinde 15 km/l gasta 100 ÷ 15 = 6.7 l/100 km.'
        },
        {
          q: '¿Cómo se reparte la gasolina entre los pasajeros?',
          a: 'Ingresa el número de personas que comparten el gasto. La calculadora divide el costo del viaje en partes iguales entre todos, conductor incluido.'
        },
        {
          q: '¿Incluye el desgaste, el estacionamiento o las casetas?',
          a: 'No, solo cuenta el combustible. El desgaste del auto, el seguro, el estacionamiento y las casetas van aparte, así que el costo total de manejar es mayor.'
        }
      ]
    }
  }
};
