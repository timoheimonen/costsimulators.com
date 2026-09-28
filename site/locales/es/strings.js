// Spanish (Spain) texts for costsimulators.com. Only the site generator
// (scripts/build-site.js) reads this file. It has exactly the same keys as
// site/locales/en/strings.js; money values are typical prices in euros.

module.exports = {
  meta: {
    name: 'Español',
    locale: 'es-ES',
    currency: 'EUR',
    ogLocale: 'es_ES'
  },

  money: {
    symbol: '€',
    zero: '0,00 €',
    placeholder: '0,00',
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
    settings: 'Ajustes',
    quickPicks: 'Valores rápidos',
    faqTitle: 'Preguntas frecuentes',
    relatedTools: 'Más calculadoras',
    imageAlt: 'costsimulators.com – calculadoras de costes gratuitas para las cuentas del día a día'
  },

  footer: {
    privacy: 'Funciona íntegramente en tu navegador. Sin cookies ni rastreo.',
    about: 'Acerca de',
    contact: 'Contacto',
    privacyPolicy: 'Privacidad',
    terms: 'Condiciones'
  },

  runtime: {
    share: {
      linkCopied: 'Enlace copiado',
      copyFailed: 'No se ha podido copiar',
      copied: '¡Copiado!',
      calculatedWith: 'Calculado con costsimulators.com'
    },
    workTime: {
      minutes: '{m} min',
      hours: '{h} h',
      hoursMinutes: '{h} h {m} min'
    }
  },

  home: {
    title: 'Calculadoras de costes gratis para el día a día | costsimulators.com',
    description: 'Calculadoras gratuitas y privadas que muestran lo que cuestan de verdad las cosas: reuniones, horas de trabajo, café, tabaco, suscripciones, luz y gasolina. Sin registro.',
    eyebrow: 'Gratis · Privado · Al instante',
    heading: 'Pequeñas herramientas para las <span class="accent-text">cuentas</span> del día a día.',
    lead: 'Calculadoras rápidas que muestran lo que cuestan de verdad las cosas. Sin registro ni rastreo: todo funciona directamente en tu navegador.',
    toolsTitle: 'Herramientas',
    toolCount: '{count} herramientas',
    suggestTitle: '¿Tienes una idea?',
    suggestText: 'Propón una nueva herramienta en GitHub.',
    whyTitle: 'Los pequeños gastos se acumulan',
    whyText1: 'Una reunión, un café de camino al trabajo o una suscripción más de streaming casi nunca parecen caros por sí solos. Súmalos a lo largo de un mes, un año o una década, y las cifras cambian por completo.',
    whyText2: 'Cada calculadora hace una sola cosa, pide solo los datos que necesita y muestra el resultado al instante. Todo se calcula en tu navegador, así que tus números no salen de tu dispositivo.',
    aboutLink: 'Más sobre costsimulators.com',
    faq: [
      {
        q: '¿costsimulators.com es gratis?',
        a: 'Sí. Todas las calculadoras son totalmente gratuitas, sin registro, sin muro de pago y sin anuncios. También puedes usarlas en el trabajo.'
      },
      {
        q: '¿Se guardan o se envían mis datos a algún sitio?',
        a: 'No. Todo lo que introduces se calcula en tu navegador y nunca se envía a un servidor. La web no usa cookies ni herramientas de analítica.'
      },
      {
        q: '¿Puedo compartir un cálculo?',
        a: 'Sí. Tus ajustes se guardan en la dirección de la página. Pulsa Compartir para copiar el enlace, y quien lo abra verá el mismo cálculo.'
      }
    ]
  },

  notFound: {
    title: 'Página no encontrada | costsimulators.com',
    description: 'La página que buscas no existe.',
    heading: 'Esta página no existe.',
    lead: 'Puede que la dirección esté mal escrita o que la página se haya movido. Todas las calculadoras están en la página de inicio.'
  },

  documents: {
    about: {
      name: 'Acerca de',
      title: 'Sobre el proyecto – calculadoras de costes gratuitas y privadas | costsimulators.com',
      description: 'Quién hace costsimulators.com y cómo funcionan sus calculadoras de costes gratuitas y privadas para reuniones, horas de trabajo, hábitos, suscripciones, luz y viajes.'
    },
    privacy: {
      name: 'Política de privacidad',
      title: 'Política de privacidad | costsimulators.com',
      description: 'Cómo trata tus datos costsimulators.com: los cálculos se hacen en tu navegador, sin rastreo, sin analítica y sin cuentas de usuario.'
    },
    terms: {
      name: 'Condiciones de uso',
      title: 'Condiciones de uso | costsimulators.com',
      description: 'Condiciones de uso de costsimulators.com: uso gratuito personal y comercial, servicio ofrecido tal cual y código abierto con licencia MIT.'
    }
  },

  tools: {
    meetings: {
      name: 'Coste de reuniones',
      heading: 'Calculadora de coste de reuniones',
      title: 'Calculadora de coste de reuniones – cuánto cuesta una reunión | costsimulators.com',
      description: 'Calculadora gratuita del coste de reuniones con cronómetro en directo. Introduce el coste por hora y el número de participantes y mira cuánto cuesta la reunión segundo a segundo.',
      card: 'Mira cómo sube el precio de una reunión en tiempo real mientras habláis.',
      tag: 'Cronómetro',
      lead: 'Indica el coste por hora y el número de participantes, pulsa Iniciar y mira cuánto cuesta la reunión a medida que avanza.',
      pulseEvery: '1',
      rate: {
        label: 'Coste por hora',
        unit: '€ por persona',
        step: '5',
        value: '35',
        decrease: 'Reducir coste por hora',
        increase: 'Aumentar coste por hora'
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
      total: 'Coste total',
      elapsed: 'Tiempo transcurrido',
      reset: 'Reiniciar',
      copyReport: 'Copiar informe',
      kbdHint: 'Pulsa la <kbd>barra espaciadora</kbd> para iniciar o pausar',
      runtime: {
        mode: { start: 'Iniciar', pause: 'Pausar', resume: 'Reanudar' },
        status: { ready: 'Preparado', live: 'En curso', paused: 'En pausa' },
        announce: {
          invalid: 'Introduce el coste por hora y el número de participantes para empezar.',
          started: 'Cronómetro iniciado.',
          paused: 'En pausa: {cost} tras {time}.',
          reset: 'Cronómetro reiniciado.'
        },
        report: {
          cost: 'Coste de la reunión: {cost}',
          duration: 'Duración: {time}',
          participants: 'Participantes: {persons} × {rate}/h'
        }
      },
      about: {
        title: 'Cómo se calcula el coste de una reunión',
        paragraphs: [
          'La calculadora multiplica el número de participantes por su coste por hora y por el tiempo transcurrido. Una reunión de una hora con 5 personas a 35 € la hora cuesta 175 €, es decir, unos 2,92 € cada minuto.',
          'Como coste por hora, usa lo que le cuesta de verdad a la empresa una hora de trabajo, no solo el sueldo. Al salario bruto hay que sumarle las cotizaciones a la Seguridad Social a cargo de la empresa, que suponen algo más del 30 % del bruto, y otros costes laborales. Si no sabes el coste de cada persona, basta con una media del equipo.',
          'El cronómetro sigue contando bien en una pestaña en segundo plano, y el coste acumulado aparece en el título de la pestaña del navegador, así que puedes vigilarlo mientras compartes pantalla. Al terminar la reunión, pausa el cronómetro y copia un breve informe para el acta.'
        ]
      },
      faq: [
        {
          q: '¿Cómo se calcula el coste de una reunión?',
          a: 'Multiplica el número de participantes por su coste medio por hora y por la duración de la reunión en horas. Por ejemplo, 6 personas × 30 € por hora × 1,5 horas = 270 €. Esta calculadora hace la cuenta en directo mientras dura la reunión.'
        },
        {
          q: '¿Qué coste por hora debo usar?',
          a: 'Usa el coste completo de una hora de trabajo: el salario bruto por hora más las cotizaciones a la Seguridad Social a cargo de la empresa y otros costes laborales. Para consultores y autónomos, usa la tarifa que facturan.'
        },
        {
          q: '¿Puedo cambiar el número de participantes durante la reunión?',
          a: 'Sí. Cambia el número de participantes o el coste por hora cuando quieras. Los nuevos valores cuentan desde ese momento, y el coste ya acumulado se mantiene.'
        },
        {
          q: '¿Sigue funcionando el cronómetro si cambio de pestaña?',
          a: 'Sí. El cronómetro se basa en el reloj, así que el total sigue siendo correcto en una pestaña en segundo plano. Mientras está en marcha, la página también pide al navegador que mantenga la pantalla encendida.'
        }
      ]
    },

    workhours: {
      name: 'Horas de trabajo',
      heading: 'Calculadora de precio en horas de trabajo',
      title: 'Precio en horas de trabajo – cuánto tienes que trabajar para pagarlo | costsimulators.com',
      description: 'Convierte cualquier precio en las horas, días y semanas de trabajo que te cuesta. Introduce tu sueldo por hora, al mes o al año y mira lo que cuesta de verdad una compra en tiempo de trabajo.',
      card: 'Convierte cualquier precio en las horas, días y semanas que tienes que trabajar para pagarlo.',
      tag: 'Trabajo',
      lead: 'Introduce tu sueldo y un precio para ver cuánto tiempo tienes que trabajar para pagarlo.',
      period: {
        label: 'Conozco mi sueldo',
        hour: 'Por hora',
        month: 'Por mes',
        year: 'Por año'
      },
      pay: {
        label: 'Sueldo',
        unit: '€ por hora',
        value: '12',
        step: '1',
        monthStep: '100',
        yearStep: '1000',
        hint: 'Usa tu sueldo neto, después de impuestos, para obtener la respuesta más realista.',
        decrease: 'Reducir sueldo',
        increase: 'Aumentar sueldo'
      },
      hoursPerWeek: {
        label: 'Horas semanales',
        unit: 'horas',
        value: '40',
        chip1: '37,5 h',
        chip2: '40 h',
        preset1: '37.5',
        preset2: '40',
        decrease: 'Reducir horas semanales',
        increase: 'Aumentar horas semanales'
      },
      price: {
        label: 'Precio',
        unit: '€',
        value: '999',
        step: '10',
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
          hour: '€ por hora',
          month: '€ al mes',
          year: '€ al año'
        },
        days: { one: '{n} día', many: '{n} días', other: '{n} días' },
        weeks: { one: '{n} semana', many: '{n} semanas', other: '{n} semanas' },
        note: {
          empty: 'Introduce tu sueldo, tus horas semanales y un precio para ver cuánto tienes que trabajar para pagarlo.',
          result: 'Calculado con jornadas de {hours} horas, {days} días a la semana.'
        }
      },
      about: {
        title: 'Cómo se calcula el tiempo de trabajo',
        paragraphs: [
          'Primero, tu sueldo se convierte en sueldo por hora. Un sueldo mensual se multiplica por 12 y se divide entre las horas que trabajas en un año (horas semanales × 52); un sueldo anual se divide directamente entre esas horas. Después, el precio se divide entre tu sueldo por hora.',
          'Los días de trabajo suponen una semana de cinco días, así que 40 horas semanales equivalen a jornadas de 8 horas. Por ejemplo, cobrando 12 € la hora, un móvil de 999 € cuesta más de 83 horas de trabajo: algo más de diez jornadas, es decir, unas dos semanas laborales.',
          'Para obtener la respuesta más realista, usa tu sueldo neto, después de impuestos, porque es el dinero que realmente gastas. Pensar en los precios en horas de trabajo es una forma sencilla de decidir si algo merece la pena de verdad.'
        ]
      },
      faq: [
        {
          q: '¿Cuántas horas tengo que trabajar para pagar algo?',
          a: 'Divide el precio entre tu sueldo neto por hora. Si ganas 10 € la hora después de impuestos, una compra de 300 € te cuesta 30 horas de trabajo.'
        },
        {
          q: '¿Uso el sueldo bruto o el neto?',
          a: 'El sueldo neto, después de impuestos, da la respuesta más realista, porque es el dinero que de verdad tienes para gastar. Con el bruto, las cosas parecen más baratas de lo que son.'
        },
        {
          q: '¿Cómo paso un sueldo mensual a sueldo por hora?',
          a: 'Multiplica el sueldo mensual por 12 y divídelo entre las horas que trabajas en un año. Con una semana de 40 horas son 2080 horas, así que 1800 € netos al mes son unos 10,40 € la hora. La calculadora lo hace por ti si eliges Por mes; si cobras en 14 pagas, elige Por año e introduce el total anual.'
        }
      ]
    },

    coffee: {
      name: 'Gasto en café',
      heading: 'Calculadora del gasto en café',
      title: 'Cuánto gasto en café al año – calculadora del gasto en café | costsimulators.com',
      description: 'Descubre cuánto te cuesta tu café diario al mes y en 1, 5 y 10 años. Introduce el precio por taza y las tazas por semana. Gratis y privado.',
      card: 'Mira cuánto suma tu café de cada día en uno, cinco y diez años.',
      tag: 'Hábito',
      lead: 'Introduce lo que cuesta una taza y cada cuánto la compras para ver cuánto suma el hábito con los años.',
      price: {
        label: 'Precio por taza',
        unit: '€',
        step: '0.1',
        value: '1.8',
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
      runtime: {
        note: {
          empty: 'Introduce un precio y cuántas tazas tomas por semana para ver los totales.',
          result: 'Son unas {cups} tazas al año a {price} cada una.'
        }
      },
      about: {
        title: 'Cómo se calcula el gasto en café',
        paragraphs: [
          'El coste anual es el precio por taza × tazas por semana × 52 semanas. El coste mensual es el anual dividido entre 12, y los totales a 5 y 10 años multiplican el coste anual sin tener en cuenta la inflación ni las subidas de precios.',
          'Un café con leche de 1,80 € cada día laborable suma 468 € al año y 4680 € en diez años. Si la cifra te sorprende, preparar el café en casa o llevártelo en un termo son formas fáciles de reducir el gasto.',
          'La calculadora sirve para cualquier compra pequeña y habitual: una bebida energética, el bocadillo de media mañana o una botella de agua. Introduce el precio y cuántas veces lo compras a la semana.'
        ]
      },
      faq: [
        {
          q: '¿Cuánto cuesta al año un café diario?',
          a: 'Una taza al día, los siete días de la semana, son 364 tazas al año. A 2 € la taza, son 728 € al año y 7280 € en diez años.'
        },
        {
          q: '¿Sale más barato hacer el café en casa?',
          a: 'Normalmente, mucho más. Una taza hecha en casa suele costar bastante menos de 50 céntimos, frente a 1,50 o 2 € en una cafetería. Introduce lo que te cuesta la taza en casa para comparar.'
        },
        {
          q: '¿La calculadora tiene en cuenta la inflación?',
          a: 'No. Las proyecciones suponen que el precio no cambia, así que muestran lo que cuesta el hábito a precios de hoy. Si los precios suben, el coste real a largo plazo es mayor.'
        }
      ]
    },

    smoking: {
      name: 'Gasto en tabaco',
      heading: 'Calculadora del gasto en tabaco',
      title: 'Cuánto gasto en tabaco – calculadora de lo que cuesta fumar | costsimulators.com',
      description: 'Calcula cuánto te cuesta fumar al mes y en 1, 5 y 10 años, y cuánto ahorras si lo dejas. Introduce el precio del paquete y los cigarrillos que fumas al día.',
      card: 'Descubre cuánto dinero se te va en humo cada mes y con los años.',
      tag: 'Hábito',
      lead: 'Introduce lo que cuesta un paquete y cuánto fumas para ver cuánto dinero se va en humo con los años.',
      packPrice: {
        label: 'Precio del paquete',
        unit: '€',
        step: '0.1',
        value: '6',
        decrease: 'Reducir precio del paquete',
        increase: 'Aumentar precio del paquete'
      },
      perDay: {
        label: 'Cigarrillos al día',
        unit: 'cigarrillos',
        chip1: '5 al día',
        chip2: '10 al día',
        chip3: '20 al día',
        decrease: 'Reducir cigarrillos al día',
        increase: 'Aumentar cigarrillos al día'
      },
      perPack: {
        label: 'Cigarrillos por paquete',
        unit: 'tamaño del paquete',
        value: '20',
        decrease: 'Reducir cigarrillos por paquete',
        increase: 'Aumentar cigarrillos por paquete'
      },
      resultsTitle: 'Dinero que se va en humo',
      in10Years: 'En 10 años',
      perMonth: 'Al mes',
      year1: '1 año',
      year5: '5 años',
      runtime: {
        note: {
          empty: 'Introduce el precio del paquete, cuántos cigarrillos fumas al día y cuántos trae el paquete para ver los totales.',
          result: 'Son unos {cigarettes} cigarrillos ({packs} paquetes) al año a {price} cada uno.'
        }
      },
      about: {
        title: 'Cómo se calcula lo que cuesta fumar',
        paragraphs: [
          'El precio de un cigarrillo es el precio del paquete dividido entre los cigarrillos que trae. Ese precio se multiplica por los cigarrillos que fumas al día y por 365 días para obtener el coste anual. El coste mensual es la doceava parte, y los totales a 5 y 10 años usan los precios actuales.',
          'Medio paquete al día a 6 € el paquete son unos 1100 € al año y casi 11.000 € en diez años. Ver el total puede ser una gran motivación: ese mismo dinero podría ir a un viaje, al ahorro o a pagar deudas.',
          'La calculadora solo cuenta el precio de los cigarrillos. Los gastos de salud y las bajas por enfermedad van aparte. Si quieres ayuda para dejarlo, pide cita en tu centro de salud: la sanidad pública financia tratamientos para dejar de fumar.'
        ]
      },
      faq: [
        {
          q: '¿Cuánto cuesta al año fumar un paquete al día?',
          a: 'Un paquete al día son 365 paquetes al año. A 6 € el paquete, son 2190 € al año y 21.900 € en diez años.'
        },
        {
          q: '¿Cuánto dinero ahorro si dejo de fumar?',
          a: 'Todo lo que muestra esta calculadora. Introduce lo que fumas hoy: los totales mensuales y anuales son lo que te ahorras al dejarlo.'
        },
        {
          q: '¿Sirve también para el tabaco de liar?',
          a: 'Sí. Introduce el precio de la bolsa como precio del paquete, el número de cigarrillos que lías con ella como tamaño del paquete y cuántos fumas al día.'
        }
      ]
    },

    subscriptions: {
      name: 'Suscripciones',
      heading: 'Calculadora de suscripciones',
      title: 'Calculadora de suscripciones – cuánto pagas al mes y al año | costsimulators.com',
      description: 'Suma el streaming, el gimnasio, la tarifa móvil y todas tus demás suscripciones. Mira el total al mes, al año y en 10 años, y qué suscripción te cuesta más.',
      card: 'Suma el streaming, el gimnasio y todos tus pagos periódicos en un solo sitio.',
      tag: 'Presupuesto',
      lead: 'Apunta todo lo que pagas de forma periódica y mira cuánto suma en total. Admite pagos mensuales, anuales y semanales.',
      listTitle: 'Tus suscripciones',
      empty: 'Todavía no hay suscripciones. Añade una abajo o elige una en Añadir rápido.',
      add: 'Añadir suscripción',
      quickAdd: 'Añadir rápido',
      quick: {
        1: { name: 'Vídeo en streaming', price: '13.99' },
        2: { name: 'Música en streaming', price: '11.99' },
        3: { name: 'Gimnasio', price: '39.90' },
        4: { name: 'Almacenamiento en la nube', price: '2.99' },
        5: { name: 'Tarifa móvil', price: '15' },
        6: { name: 'Prensa digital', price: '9.99' }
      },
      note: 'Tu lista se guarda en la dirección de la página, así que puedes añadirla a marcadores o compartirla. Nunca se envía a ningún sitio.',
      row: {
        name: 'Nombre',
        nameLabel: 'Nombre de la suscripción',
        priceLabel: 'Precio en euros',
        cycleLabel: 'Periodo de facturación',
        monthly: '/ mes',
        yearly: '/ año',
        weekly: '/ semana'
      },
      resultsTitle: 'Total de suscripciones',
      perYear: 'Al año',
      perMonth: 'Al mes',
      perDay: 'Al día',
      in10Years: 'En 10 años',
      breakdownLabel: 'Coste anual por suscripción',
      copySummary: 'Copiar resumen',
      runtime: {
        untitled: 'Sin nombre',
        remove: 'Eliminar {name}',
        removeUnnamed: 'Eliminar suscripción',
        breakdown: '{cost} / año · {percent} %',
        cycle: { monthly: 'mes', yearly: 'año', weekly: 'semana' },
        note: {
          empty: 'Añade una suscripción con su precio para ver los totales.',
          single: 'Pagas {cost} al año por {name}.',
          biggest: 'Tu mayor gasto es {name}, con {cost} al año, el {percent} % del total.'
        },
        summary: {
          item: '{name} – {price} / {cycle}',
          total: 'Total: {month} al mes, {year} al año'
        }
      },
      about: {
        title: 'Cómo se calcula el total de suscripciones',
        paragraphs: [
          'Cada suscripción se convierte en un coste anual: los precios mensuales se multiplican por 12, los semanales por 52 y los anuales se usan tal cual. Después, el total anual se divide entre 12 para obtener el coste mensual y entre 365 para el diario.',
          'El desglose ordena tus suscripciones de la más cara a la más barata y muestra qué parte del total supone cada una, así que es fácil ver cuál cancelar o cambiar por un plan más barato.',
          'Tu lista se guarda en la dirección de la página, nunca en un servidor. Añade la página a marcadores para volver a tu lista más tarde, o comparte el enlace para repasar en familia las suscripciones compartidas.'
        ]
      },
      faq: [
        {
          q: '¿Cómo encuentro todas mis suscripciones?',
          a: 'Repasa los extractos del banco y de la tarjeta de los últimos meses y busca cargos periódicos y recibos domiciliados. Revisa también los ajustes de suscripciones de App Store, Google Play y PayPal.'
        },
        {
          q: '¿Sale más barato el plan anual que el mensual?',
          a: 'A menudo, entre un 15 y un 20 %, pero solo si ibas a mantener el servicio todo el año de todos modos. Añade las dos versiones a la lista para comparar su coste anual.'
        },
        {
          q: '¿Se guarda mi lista?',
          a: 'Tu lista solo se guarda en la dirección de la página. Añade el enlace a marcadores o compártelo para conservarla; no se guarda nada en ningún servidor ni en cookies.'
        }
      ]
    },

    electricity: {
      name: 'Consumo eléctrico',
      heading: 'Calculadora de consumo eléctrico',
      title: 'Calculadora de consumo eléctrico – cuánto gasta cada aparato | costsimulators.com',
      description: 'Calcula cuánto cuesta usar un aparato al día, al mes y al año a partir de su potencia, las horas de uso y el precio de la luz. Calculadora gratuita del coste por kWh.',
      card: 'Mira cuánto cuesta tener un aparato encendido al día, al mes y al año.',
      tag: 'Hogar',
      lead: 'Introduce la potencia de un aparato, cuánto tiempo funciona y lo que pagas por la luz para ver cuánto cuesta de verdad tenerlo encendido.',
      power: {
        label: 'Potencia',
        unit: 'vatios',
        chip1: 'Bombilla LED 9 W',
        chip2: 'Portátil 60 W',
        chip3: 'Televisor 100 W',
        chip4: 'PC gaming 400 W',
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
        unit: '€/kWh',
        value: '0.15',
        step: '0.01',
        divisor: '1',
        hint: 'Incluye peajes, cargos e impuestos para obtener el resultado más preciso.',
        decrease: 'Reducir precio de la luz',
        increase: 'Aumentar precio de la luz'
      },
      resultsTitle: 'Coste de uso',
      perYear: 'Al año',
      perDayOfUse: 'Por día de uso',
      perMonth: 'Al mes',
      energyPerYear: 'Energía al año',
      runtime: {
        note: {
          empty: 'Introduce la potencia, las horas al día (hasta 24), los días por semana (hasta 7) y el precio de la luz.',
          result: 'Consume unos {day} cada día que funciona, alrededor de {year} al año.'
        }
      },
      about: {
        title: 'Cómo se calcula el coste de la luz',
        paragraphs: [
          'El consumo de energía en kilovatios hora (kWh) es la potencia en vatios × horas de uso ÷ 1000. Un televisor de 100 W encendido 4 horas consume 0,4 kWh al día. Si lo multiplicas por el precio del kWh, obtienes el coste por día de uso.',
          'El coste anual tiene en cuenta cuántos días a la semana funciona el aparato, repartidos a lo largo de los 365 días del año. El coste mensual es la doceava parte del anual.',
          'La potencia figura en la etiqueta de características del aparato o en su manual. Muchos aparatos consumen menos que su potencia máxima la mayor parte del tiempo, así que el resultado es una estimación al alza. Para un precio más exacto, incluye los peajes, los cargos y los impuestos, no solo el precio de la energía.'
        ]
      },
      faq: [
        {
          q: '¿Cómo se calcula lo que gasta de luz un aparato?',
          a: 'Multiplica la potencia en kilovatios por las horas de uso y por el precio del kWh. Un calefactor de 1500 W encendido 3 horas cuesta 1,5 kW × 3 h × 0,15 € = 0,675 € al día, unos 68 céntimos.'
        },
        {
          q: '¿Cuántos kWh consume un aparato?',
          a: 'Divide los vatios entre 1000 y multiplica por las horas de uso. Un portátil de 60 W que se usa 8 horas al día consume 0,48 kWh diarios, unos 175 kWh al año si se usa todos los días.'
        },
        {
          q: '¿Qué precio de la luz debo usar?',
          a: 'Usa el precio total por kWh de tu factura de la luz, con la energía, los peajes y cargos y los impuestos. Si divides el importe de la factura entre los kWh consumidos, obtienes una buena media.'
        },
        {
          q: '¿Los aparatos en espera gastan luz?',
          a: 'Sí, muchos aparatos consumen unos cuantos vatios en modo de espera (stand-by). Introduce la potencia en espera y 24 horas al día para ver lo que cuesta en un año.'
        }
      ]
    },

    trip: {
      name: 'Coste del viaje',
      heading: 'Calculadora de gasolina y coste del viaje',
      title: 'Calculadora de gasolina – coste del viaje y del trayecto al trabajo | costsimulators.com',
      description: 'Calcula cuánto cuesta en gasolina o gasóleo un viaje o el trayecto diario al trabajo y repártelo entre los ocupantes. Funciona en kilómetros y litros o en millas y galones.',
      card: 'Calcula el combustible de un viaje o del trayecto al trabajo y repártelo con otros.',
      tag: 'Viajes',
      lead: 'Calcula el coste de combustible de un viaje o de tu trayecto diario al trabajo y repártelo entre todos los que vais en el coche.',
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
        hint: '¿Conduces un eléctrico? Introduce kWh/100 km y el precio del kWh.',
        decrease: 'Reducir consumo',
        increase: 'Aumentar consumo'
      },
      fuelPrice: {
        label: 'Precio del combustible',
        unit: '€ por litro',
        value: '1.55',
        step: '0.05',
        usStep: '0.1',
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
      resultsTitle: 'Coste de combustible',
      perPerson: 'Por persona',
      perMonth: 'Al mes',
      perYear: 'Al año',
      runtime: {
        direction: { one: 'Solo ida', round: 'Ida y vuelta' },
        unit: {
          metric: {
            distance: 'km solo ida',
            consumption: 'l/100 km',
            price: '€ por litro',
            perDistance: 'km',
            fuel: 'l'
          },
          us: {
            distance: 'millas solo ida',
            consumption: 'mpg',
            price: '€ por galón',
            perDistance: 'milla',
            fuel: 'gal'
          }
        },
        note: {
          empty: 'Introduce la distancia, el consumo y el precio del combustible para ver el coste.',
          result: 'Gasta {fuel} de combustible por viaje, unos {price} por {distance}.'
        }
      },
      about: {
        title: 'Cómo se calcula el coste del viaje',
        paragraphs: [
          'En kilómetros y litros, el combustible consumido es la distancia × el consumo ÷ 100. Un trayecto al trabajo de 25 km en cada sentido (50 km al día) con un coche que gasta 6,5 l/100 km consume 3,25 litros. Multiplica por el precio del litro para obtener el coste del viaje y divide entre el número de personas para repartirlo.',
          'En millas y galones, el combustible consumido es la distancia dividida entre las millas por galón (mpg) del coche. Al cambiar de unidades se convierten los valores que has introducido, así que puedes comparar cifras de cualquiera de los dos sistemas.',
          'Los totales mensuales y anuales se basan en los viajes por semana: 5 viajes de ida y vuelta a la semana es lo típico para ir al trabajo. Para un coche eléctrico, introduce el consumo en kWh/100 km y el precio del kWh.'
        ]
      },
      faq: [
        {
          q: '¿Cómo se calcula lo que cuesta un viaje en gasolina?',
          a: 'Multiplica la distancia por el consumo y por el precio del combustible, y divide entre 100. Para 200 km con un coche que gasta 6 l/100 km y la gasolina a 1,55 €/l: 200 × 6 ÷ 100 × 1,55 € = 18,60 €.'
        },
        {
          q: '¿Cómo se reparte la gasolina entre los ocupantes?',
          a: 'Introduce el número de personas que comparten el gasto. La calculadora divide el coste del viaje a partes iguales entre todos, conductor incluido.'
        },
        {
          q: '¿Incluye el desgaste, el aparcamiento o los peajes?',
          a: 'No, solo cuenta el combustible. El desgaste del coche, el seguro, el aparcamiento y los peajes van aparte, así que el coste total de conducir es mayor.'
        }
      ]
    }
  }
};
