/*
 * Dragones de Cartón · datos del sitio
 * ------------------------------------------------------------
 * Todo el contenido que cambia con frecuencia vive aquí.
 * Edita este archivo y el sitio se actualiza solo; no hace falta tocar el HTML.
 * Los valores entre [corchetes] son pendientes por definir.
 */
window.DC = {

  /* Datos generales del evento */
  evento: {
    nombre: "Dragones de Cartón",
    feria: "SOFA 2026",
    fechas: "[fechas de la feria]",
    horaSorteo: "[hora]",
    lugarValidacion: "[lugar de validación]",
    cuentaRedes: "@[cuenta]",
    metaComunal: 150
  },

  /*
   * Mecánica activa: "A", "B" o "C".
   * La página pública muestra solo la mecánica activa.
   * La guía para aliados muestra las tres mientras se decide.
   */
  mecanicaActiva: "A",

  mecanicas: {
    A: {
      nombre: "Las tres filas del dragón",
      resumen: "Completa filas del cartón para ganar boletas.",
      objetivos: [
        { nombre: "Fila del Corazón", detalle: "La del medio, 4 casillas", premio: "1 boleta" },
        { nombre: "Fila de las Alas", detalle: "La de arriba, 6 casillas", premio: "2 boletas" },
        { nombre: "Fila de las Garras", detalle: "La de abajo, 6 casillas", premio: "2 boletas" },
        { nombre: "Dragón completo", detalle: "Las 16 casillas", premio: "3 boletas más y entrada a la urna del premio mayor" }
      ],
      extras: [
        "Puedes seguir sellando otro día para ganar más boletas."
      ]
    },
    B: {
      nombre: "Vuela por los pabellones",
      resumen: "Recorre los cuatro pabellones y completa colores.",
      objetivos: [
        { nombre: "Primer vuelo", detalle: "Al menos un sello de cada color (P1, P3, P6 y P8)", premio: "1 boleta" },
        { nombre: "Dueño del pabellón", detalle: "Todas las casillas de un mismo color", premio: "1 boleta por cada color completo" },
        { nombre: "Dragón completo", detalle: "Las 16 casillas", premio: "Entrada a la urna del premio mayor" }
      ],
      extras: [
        "Las boletas que no ganen pasan al sorteo del último día."
      ]
    },
    C: {
      nombre: "Despierta al dragón",
      resumen: "Sube de nivel. Cada nivel tiene su propia urna y sus propios premios.",
      objetivos: [
        { nombre: "Cría", detalle: "4 sellos", premio: "Urna de premios pequeños" },
        { nombre: "Guardián", detalle: "10 sellos", premio: "Urna de premios medianos" },
        { nombre: "Ancestral", detalle: "16 sellos", premio: "Urna del premio mayor" }
      ],
      extras: [
        "Hora del Dragón: cuando la anunciemos, los sellos de esa hora van con tinta dorada. Cada sello dorado da una boleta extra.",
        "Entre todos: si hoy despertamos {metaComunal} dragones, esta noche sorteamos más premios."
      ]
    }
  },

  /* Pabellones de la feria y su color en el cartón */
  pabellones: {
    P1: { nombre: "Pabellón 1", color: "var(--p1)" },
    P3: { nombre: "Pabellón 3", color: "var(--p3)" },
    P6: { nombre: "Pabellón 6", color: "var(--p6)" },
    P8: { nombre: "Pabellón 8", color: "var(--p8)" }
  },

  /*
   * Distribución de casillas del cartón (fila por fila).
   * null = espacio vacío. Confirmar contra el diseño final del cartón.
   */
  carton: [
    ["P1", "P1", "P1", "P1", "P1", "P1"],
    [null, "P1", "P1", "P1", "P3", null],
    ["P3", "P6", "P6", "P6", "P6", "P8"]
  ],

  /*
   * Negocios participantes.
   * pabellon: "P1" | "P3" | "P6" | "P8" | null (por confirmar)
   * actividad: qué hace la persona para ganar el sello (por confirmar)
   */
  participantes: [
    { codigo: "VM",  nombre: "VelaMar",                  pabellon: null, actividad: null },
    { codigo: "JSM", nombre: "Los Juegos Sobre la Mesa", pabellon: null, actividad: null },
    { codigo: "RC",  nombre: "Las Reglas de la Casa",    pabellon: null, actividad: null },
    { codigo: "SG",  nombre: "Son Geniales",             pabellon: null, actividad: null },
    { codigo: "CJ",  nombre: "Carlos Reyes",             pabellon: null, actividad: null },
    { codigo: "AD",  nombre: "Gemu AD AD164",            pabellon: null, actividad: null },
    { codigo: "TK",  nombre: "Comunidad Torrikku",       pabellon: null, actividad: null },
    { codigo: "BBG", nombre: "BBG",                      pabellon: null, actividad: null },
    { codigo: "AZ",  nombre: "Azahar Juegos",            pabellon: null, actividad: null },
    { codigo: "TI",  nombre: "Tablero Infinito",         pabellon: null, actividad: null },
    { codigo: "FFF", nombre: "Friz Froz Fruz",           pabellon: null, actividad: null },
    { codigo: "WM",  nombre: "Woodmood",                 pabellon: null, actividad: null },
    { codigo: "RO",  nombre: "Ronda",                    pabellon: null, actividad: null },
    { codigo: "DV",  nombre: "Devir",                    pabellon: null, actividad: null },
    { codigo: "RT",  nombre: "Rudoteka",                 pabellon: null, actividad: null },
    { codigo: "C3D", nombre: "Concepto 3D",              pabellon: null, actividad: null }
  ],

  /* Preguntas frecuentes de la página pública */
  faq: [
    { p: "¿Cuánto cuesta participar?", r: "Nada. El cartón es gratis y ningún sello exige comprar." },
    { p: "¿Dónde consigo el cartón?", r: "En cualquier negocio participante de la feria." },
    { p: "¿Puedo tener varios cartones?", r: "Uno por persona. Puedes seguir llenándolo todos los días de la feria." },
    { p: "¿Cuándo es el sorteo?", r: "Todos los días a las {horaSorteo}, con varios ganadores. Publicamos la lista en {cuentaRedes}." },
    { p: "¿Dónde canjeo mis objetivos?", r: "En {lugarValidacion}. Allí revisan tu cartón, marcan lo que ya cobraste y te entregan tus boletas." }
  ]
};
