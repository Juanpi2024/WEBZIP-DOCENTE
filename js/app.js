// Base de Datos Estática de Kits Didácticos iniciales
const INITIAL_KITS = [
    // --- CIENCIAS NATURALES ---
    {
        id: "naturales-agosto",
        asignatura: "Ciencias Naturales",
        asignaturaKey: "ciencias",
        nivel: "3° Básico",
        unidad: "Unidad 3",
        mes: "Agosto",
        titulo: "El Ciclo de Vida de las Plantas y sus Requerimientos",
        icon: "🌱",
        descripcion: "Kit didáctico interactivo para agosto enfocado en las necesidades esenciales de las plantas (agua, aire, luz, tierra), la germinación de la semilla y la estructura reproductiva de la flor.",
        detalles: [
            "2 Videos explicativos offline locales",
            "Presentación interactiva HTML5 (7 Slides)",
            "5 Minijuegos educativos (Quiz, Emparejar, Sopa de letras, Secuencia, V/F)",
            "Planificación detallada de agosto",
            "6 Guías de trabajo, pauta evaluativa y solucionarios DOC"
        ],
        zipPath: "../Kit_Didactico_Plantas_3Basico_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Naturales_Septiembre_U3.pdf",
        subjectColor: "#15803D",
        subjectColorRGB: "21, 128, 61"
    },
    {
        id: "naturales-septiembre",
        asignatura: "Ciencias Naturales",
        asignaturaKey: "ciencias",
        nivel: "3° Básico",
        unidad: "Unidad 3",
        mes: "Septiembre",
        titulo: "Flora Autóctona Chilena y Ciclos Productivos",
        icon: "🌲",
        descripcion: "Kit didáctico interactivo para septiembre sobre el ciclo de vida de plantas con flor, flora nativa chilena (Araucaria, Quillay, Boldo), fotosíntesis, importancia de los bosques y el ciclo productivo del pan.",
        detalles: [
            "3 Videos educativos offline locales",
            "Presentación interactiva HTML5 (7 Slides orgánicas)",
            "5 Minijuegos interactivos (Crucigrama, Glosario interactivo, Drag & Drop)",
            "Planificación detallada clase a clase (8 Clases de septiembre)",
            "8 Fichas de trabajo, solucionarios y evaluaciones DOC"
        ],
        zipPath: "../Kit_Didactico_Naturales_Septiembre_3Basico_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Naturales_Septiembre_U3.pdf",
        subjectColor: "#16A34A",
        subjectColorRGB: "22, 163, 74"
    },
    
    // --- MATEMÁTICA ---
    {
        id: "matematica-agosto",
        asignatura: "Matemática",
        asignaturaKey: "matematica",
        nivel: "3° Básico",
        unidad: "Unidad 3",
        mes: "Agosto",
        titulo: "Introducción a Fracciones y Ecuaciones Simples",
        icon: "📐",
        descripcion: "Kit didáctico interactivo para agosto centrado en comprender las fracciones comunes, resolver ecuaciones e inecuaciones simples de un paso y modelar problemas matemáticos del entorno.",
        detalles: [
            "2 Videos pedagógicos offline locales",
            "Presentación interactiva HTML5 (7 Slides matemáticas)",
            "5 Minijuegos de fracciones y cálculo interactivo",
            "Planificación docente completa de agosto",
            "10 Guías de aprendizaje, solucionarios y evaluaciones DOC"
        ],
        zipPath: "../Kit_Didactico_Matematica_3Basico_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Matematica_Septiembre_U3.pdf",
        subjectColor: "#4F46E5",
        subjectColorRGB: "79, 70, 229"
    },
    {
        id: "matematica-septiembre",
        asignatura: "Matemática",
        asignaturaKey: "matematica",
        nivel: "3° Básico",
        unidad: "Unidad 3",
        mes: "Septiembre",
        titulo: "Multiplicación, División, Tiempo y Calendario",
        icon: "⏱️",
        descripcion: "Kit didáctico premium para septiembre sobre la relación inversa entre multiplicación y división, lectura de horas en relojes analógicos y digitales, cálculo de lapsos de tiempo y lectura de calendarios.",
        detalles: [
            "2 Videos educativos offline locales",
            "Presentación interactiva HTML5 (7 Slides de tiempo)",
            "5 Minijuegos interactivos de cálculo de horas y división",
            "Planificación docente completa (12 Clases detalladas)",
            "14 Guías de aprendizaje, solucionarios y evaluaciones DOC"
        ],
        zipPath: "../Kit_Didactico_Matematica_Septiembre_3Basico_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Matematica_Septiembre_U3.pdf",
        subjectColor: "#4F46E5",
        subjectColorRGB: "79, 70, 229"
    },
    {
        id: "matematica-4basico-agosto",
        asignatura: "Matemática",
        asignaturaKey: "matematica",
        nivel: "4° Básico",
        unidad: "Unidad 3",
        mes: "Agosto",
        titulo: "Fracciones, Números Mixtos y Ecuaciones",
        icon: "🍕",
        descripcion: "Kit didáctico premium interactivo para agosto. Comprende las fracciones propias, representa de forma concreta y en la recta numérica, opera sumas y restas de igual denominador y resuelve problemas reales (SIN SOLUCIONARIOS).",
        detalles: [
            "Video educativo offline local sobre Fracciones integrado",
            "Presentación interactiva HTML5 (Indigo & Emerald, 6 Slides de lujo)",
            "4 Minijuegos interactivos (Súper Quiz de 15 preguntas, V/F con justificación, Drag & Drop, Sopa de Letras)",
            "Planificación docente clase a clase detallada de agosto (12 Clases de 90 minutos)",
            "Material imprimible en Word/PDF: 9 Guías, 2 Apuntes PPT, Prueba Sumativa y Planificación"
        ],
        zipPath: "../Kit_Didactico_Matematica_4Basico_Agosto_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Matematica_4Basico_Agosto_U3.pdf",
        subjectColor: "#4F46E5",
        subjectColorRGB: "79, 70, 229"
    },
    {
        id: "matematica-4basico-septiembre",
        asignatura: "Matemática",
        asignaturaKey: "matematica",
        nivel: "4° Básico",
        unidad: "Unidad 3",
        mes: "Septiembre",
        titulo: "Fracciones Impropias, Ecuaciones y Simetría",
        icon: "⚖️",
        descripcion: "Kit didáctico premium interactivo para septiembre. Comprende fracciones impropias y números mixtos, resuelve ecuaciones de un paso gráficamente y mediante balanzas en equilibrio, e identifica líneas de simetría en figuras 2D (SIN SOLUCIONARIOS).",
        detalles: [
            "Video educativo offline local sobre Ecuaciones integrado",
            "Presentación interactiva HTML5 (Violet & Mint, 6 Slides de lujo)",
            "4 Minijuegos interactivos (Súper Quiz de 15 preguntas, V/F con justificación, Drag & Drop, Sopa de Letras)",
            "Planificación docente clase a clase detallada de septiembre (12 Clases de 90 minutos)",
            "Material imprimible en Word/PDF: 9 Guías, 2 Apuntes PPT, 2 Pruebas Sumativas y Planificación"
        ],
        zipPath: "../Kit_Didactico_Matematica_4Basico_Septiembre_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Matematica_4Basico_Septiembre_U3.pdf",
        subjectColor: "#4F46E5",
        subjectColorRGB: "79, 70, 229"
    },

    // --- INGLÉS ---
    {
        id: "ingles-agosto",
        asignatura: "Idioma Extranjero Inglés",
        asignaturaKey: "ingles",
        nivel: "3° Básico",
        unidad: "Unidad 3",
        mes: "Agosto",
        titulo: "My House: Rooms and Furniture Vocabulary",
        icon: "🏠",
        descripcion: "Kit interactivo de Inglés para el mes de agosto. Aprende el vocabulario del hogar: partes de la casa (living room, kitchen, bedroom), mobiliario (sofa, bed, table) y la estructura descriptiva 'There is/are'.",
        detalles: [
            "2 Videos didácticos offline de vocabulario",
            "Presentación interactiva HTML5 (7 Slides inmersivas)",
            "5 Minijuegos de vocabulario, memoria de la casa y desafíos lúdicos",
            "Planificación clase a clase del mes de agosto",
            "5 Guías de trabajo, pautas de evaluación y solucionarios DOC"
        ],
        zipPath: "../Kit_Didactico_Ingles_3Basico_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Ingles_U3.pdf",
        subjectColor: "#0D9488",
        subjectColorRGB: "13, 148, 136"
    },
    {
        id: "ingles-septiembre",
        asignatura: "Idioma Extranjero Inglés",
        asignaturaKey: "ingles",
        nivel: "3° Básico",
        unidad: "Unidad 3",
        mes: "Septiembre",
        titulo: "House Activities: Rooms and Actions",
        icon: "🧹",
        descripcion: "Kit didáctico inmersivo para septiembre sobre vocabulario avanzado de habitaciones del hogar (kitchen, yard), verbos de acción cotidiana (cooking, cleaning) y expresiones del presente continuo.",
        detalles: [
            "2 Videos locales de vocabulario y canciones interactivas",
            "Presentación interactiva HTML5 (7 Slides de vocabulario de la casa)",
            "5 Minijuegos de emparejamiento, sopa de palabras y pronunciación",
            "Planificación clase a clase de septiembre",
            "5 Guías de trabajo, pautas de evaluación y solucionarios DOC"
        ],
        zipPath: "../Kit_Didactico_Ingles_Septiembre_3Basico_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Ingles_Septiembre_U3.pdf",
        subjectColor: "#0F766E",
        subjectColorRGB: "15, 118, 110"
    },
    {
        id: "ingles-4basico-agosto",
        asignatura: "Idioma Extranjero Inglés",
        asignaturaKey: "ingles",
        nivel: "4° Básico",
        unidad: "Unidad 3",
        mes: "Agosto",
        titulo: "Sports and Preferences",
        icon: "⚽",
        descripcion: "Kit didáctico interactivo premium para agosto. Enfocado en identificar deportes, equipamiento deportivo, prendas de vestir y expresar preferencias con 'like/don't like' (SIN SOLUCIONARIOS).",
        detalles: [
            "Presentación interactiva HTML5 (Outfit Sans, 7 Slides de lujo)",
            "4 Minijuegos interactivos de inglés (Súper Quiz, V/F con justificación, Drag & Drop, Sopa de Letras)",
            "Planificación docente clase a clase del mes de agosto (4 Clases)",
            "Material docente en Word listo para imprimir: Apuntes 1 y 2, Guía de Preferencias y Prueba Sumativa"
        ],
        zipPath: "../Kit_Didactico_Ingles_4Basico_Agosto_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Ingles_4Basico_Agosto_U3.pdf",
        subjectColor: "#0D9488",
        subjectColorRGB: "13, 148, 136"
    },
    {
        id: "ingles-4basico-septiembre",
        asignatura: "Idioma Extranjero Inglés",
        asignaturaKey: "ingles",
        nivel: "4° Básico",
        unidad: "Unidad 3",
        mes: "Septiembre",
        titulo: "Celebrations, Possessives and Numbers",
        icon: "🎉",
        descripcion: "Kit didáctico premium interactivo de septiembre sobre festividades y celebraciones, adjetivos posesivos, pronombres posesivos, números de 20 a 100 en decenas (SIN SOLUCIONARIOS).",
        detalles: [
            "Video local de vocabulario de celebraciones integrado offline",
            "Presentación interactiva HTML5 (Outfit Sans, 7 Slides premium)",
            "4 Minijuegos educativos lúdicos (Quiz, V/F, Sopa de Palabras, Secuencia)",
            "Planificación docente completa detallada de septiembre (4 Clases)",
            "Materiales listos para imprimir en Word: Apuntes 1 y 2, Guía de Posesivos, Guía de Décadas y Evaluación Sumativa"
        ],
        zipPath: "../Kit_Didactico_Ingles_4Basico_Septiembre_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Ingles_4Basico_Septiembre_U3.pdf",
        subjectColor: "#0F766E",
        subjectColorRGB: "15, 118, 110"
    },

    // --- HISTORIA ---
    {
        id: "historia-agosto",
        asignatura: "Historia y Geografía",
        asignaturaKey: "historia",
        nivel: "3° Básico",
        unidad: "Unidad 3",
        mes: "Agosto",
        titulo: "La Civilización de la Antigua Roma y su Geografía",
        icon: "🏛️",
        descripcion: "Kit didáctico interactivo de Historia para agosto. Explora los orígenes de la civilización romana, su geografía peninsular y montañosa, la vida cotidiana de las familias romanas y la República.",
        detalles: [
            "2 Videos educativos offline locales",
            "Presentación interactiva HTML5 (7 Slides histórica)",
            "5 Minijuegos de geografía, glosarios visuales y verdadero/falso",
            "Planificación detallada de agosto (8 Clases)",
            "8 Guías de aprendizaje, evaluaciones y solucionarios DOC"
        ],
        zipPath: "../Kit_Historia_Unidad3.zip",
        pdfPath: "pdf/Pantallazos_Reales_Historia_U3.pdf",
        subjectColor: "#DC2626",
        subjectColorRGB: "220, 38, 38"
    },
    {
        id: "historia-septiembre",
        asignatura: "Historia y Geografía",
        asignaturaKey: "historia",
        nivel: "3° Básico",
        unidad: "Unidad 3",
        mes: "Septiembre",
        titulo: "El Legado de Roma y la República Romana",
        icon: "⚔️",
        descripcion: "Kit didáctico inmersivo para septiembre sobre el funcionamiento del senado romano, el legado cultural y arquitectónico, la mitología, y la comparación entre la vida romana y la actual.",
        detalles: [
            "3 Videos educativos offline locales",
            "Presentación interactiva HTML5 (7 Slides sobre el legado de Roma)",
            "5 Minijuegos interactivos (Cultura general, Sopa de letras, Secuencia cronológica)",
            "Planificación clase a clase de septiembre (8 Clases)",
            "8 Guías de aprendizaje, evaluaciones y solucionarios DOC"
        ],
        zipPath: "../Kit_Didactico_Historia_Septiembre_3Basico_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Historia_Septiembre_U3.pdf",
        subjectColor: "#B91C1C",
        subjectColorRGB: "185, 28, 28"
    },
    {
        id: "historia-4basico-septiembre",
        asignatura: "Historia y Geografía",
        asignaturaKey: "historia",
        nivel: "4° Básico",
        unidad: "Unidad 3",
        mes: "Septiembre",
        titulo: "La Civilización Inca y su Legado",
        icon: "👑",
        descripcion: "Kit didáctico premium interactivo de septiembre sobre el inmenso Imperio Incaico, las terrazas de cultivo, los chasquis, el quipu, la geografía andina y el valor de la honestidad (SIN SOLUCIONARIOS).",
        detalles: [
            "2 Videos explicativos offline locales",
            "Presentación interactiva HTML5 y 4 presentaciones PPT",
            "5 Minijuegos interactivos de historia y civismo (Quiz, V/F, Sopa de letras, etc.)",
            "Planificación clase a clase del docente (8 Clases)",
            "Guía de aprendizaje y evaluación sumativa DOC imprimible"
        ],
        zipPath: "../Kit_Didactico_Historia_4Basico_Septiembre_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Historia_4Basico_Septiembre_U3.pdf",
        subjectColor: "#D97706",
        subjectColorRGB: "217, 119, 6"
    },

    // --- LENGUAJE ---
    {
        id: "lenguaje-agosto",
        asignatura: "Lenguaje y Comunicación",
        asignaturaKey: "lenguaje",
        nivel: "3° Básico",
        unidad: "Unidad 3",
        mes: "Agosto",
        titulo: "Escritura Creativa, Cuentos y Reglas Ortográficas",
        icon: "✍️",
        descripcion: "Kit interactivo enfocado en desarrollar la escritura reflexiva de cuentos, el uso del guion de diálogo, reglas de acentuación ortográfica, cartas personales y el placer de la lectura.",
        detalles: [
            "5 Videos de apoyo pedagógico offline",
            "Presentación interactiva HTML5 (7 Slides literarias)",
            "5 Minijuegos interactivos de vocabulario, ortografía y redacción",
            "Planificación detallada para el mes de agosto",
            "12 Guías, solucionarios y pruebas sumativas en Word"
        ],
        zipPath: "../Kit_Didactico_Lenguaje_3Basico_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Lenguaje_U3.pdf",
        subjectColor: "#8B5CF6",
        subjectColorRGB: "139, 92, 246"
    },
    {
        id: "lenguaje-septiembre",
        asignatura: "Lenguaje y Comunicación",
        asignaturaKey: "lenguaje",
        nivel: "3° Básico",
        unidad: "Unidad 3",
        mes: "Septiembre",
        titulo: "Profundidad de Textos, Pronombres y Género Narrativo",
        icon: "📖",
        descripcion: "Kit didáctico premium interactivo de septiembre sobre la comprensión profunda de cuentos y poemas, los pronombres personales, tipos de narradores (primera y tercera persona), sentido figurado y rimas (SIN SOLUCIONARIOS).",
        detalles: [
            "8 Videos didácticos offline integrados locales",
            "Presentación interactiva HTML5 (7 Slides sobre Pronombres y Narradores)",
            "5 Minijuegos interactivos de lenguaje y redacción (Súper Quiz, Sopa de Letras, Emparejar, etc.)",
            "Planificación detallada de septiembre clase a clase (12 Clases)",
            "11 Guías y evaluaciones sumativas DOC descargables listas para usar"
        ],
        zipPath: "../Kit_Didactico_Lenguaje_Septiembre_3Basico_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Lenguaje_Septiembre_U3.pdf",
        subjectColor: "#7C3AED",
        subjectColorRGB: "124, 58, 237"
    },
    {
        id: "lenguaje-4basico-agosto",
        asignatura: "Lenguaje y Comunicación",
        asignaturaKey: "lenguaje",
        nivel: "4° Básico",
        unidad: "Unidad 3",
        mes: "Agosto",
        titulo: "Comprensión y Escritura Temática",
        icon: "📖",
        descripcion: "Kit didáctico premium interactivo de agosto. Potencia la comprensión de cuentos, noticias e historietas, la redacción de artículos informativos y reglas ortográficas de forma lúdica (SIN SOLUCIONARIOS).",
        detalles: [
            "8 Videos educativos locales offline integrados",
            "Presentación interactiva HTML5 (Outfit Sans, 7 Slides de lujo)",
            "4 Minijuegos interactivos de lenguaje (Quiz, V/F, Sopa de Letras, Drag & Drop)",
            "Planificación docente clase a clase detallada (15 Clases de agosto)",
            "Material imprimible en Word/PPT: 9 Guías, 3 Apuntes PPT y Planificación"
        ],
        zipPath: "../Kit_Didactico_Lenguaje_4Basico_Agosto_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Lenguaje_4Basico_Agosto_U3.pdf",
        subjectColor: "#7C3AED",
        subjectColorRGB: "124, 58, 237"
    },
    {
        id: "lenguaje-4basico-septiembre",
        asignatura: "Lenguaje y Comunicación",
        asignaturaKey: "lenguaje",
        nivel: "4° Básico",
        unidad: "Unidad 3",
        mes: "Septiembre",
        titulo: "Ambientes, Personajes y Poesía",
        icon: "🌈",
        descripcion: "Kit didáctico premium interactivo de septiembre. Comprende ambientes y tipos de personajes en cuentos, interpreta el lenguaje figurado y crea poesía con rimas perfectas (SIN SOLUCIONARIOS).",
        detalles: [
            "9 Videos educativos locales offline integrados",
            "Presentación interactiva HTML5 (Outfit Sans, 7 Slides premium)",
            "4 Minijuegos interactivos de lenguaje (Quiz, V/F, Sopa de Letras, Drag & Drop)",
            "Planificación docente clase a clase detallada (13 Clases de septiembre)",
            "Material imprimible en Word/PPT: 9 Guías, Apunte PPT, Evaluación Final de Unidad y Planificación"
        ],
        zipPath: "../Kit_Didactico_Lenguaje_4Basico_Septiembre_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Lenguaje_4Basico_Septiembre_U3.pdf",
        subjectColor: "#7C3AED",
        subjectColorRGB: "124, 58, 237"
    },
    {
        id: "lenguaje-4basico-octubre",
        asignatura: "Lenguaje y Comunicación",
        asignaturaKey: "lenguaje",
        nivel: "4° Básico",
        unidad: "Unidad 3",
        mes: "Octubre",
        titulo: "Adverbios, Género Dramático y Verbos",
        icon: "🎭",
        descripcion: "Kit didáctico premium interactivo de octubre. Domina los adverbios y locuciones adverbiales, la estructura dramática adaptando 'Las Hadas' para títeres de paleta y la concordancia del sujeto con verbos y pronombres (SIN SOLUCIONARIOS).",
        detalles: [
            "Video explicativo offline integrado local",
            "Presentación interactiva HTML5 (Plum/Magenta & Coral, 7 Slides de lujo)",
            "4 Minijuegos interactivos de lenguaje (Súper Quiz, V/F con justificación, Drag & Drop, Sopa de Letras)",
            "Planificación docente clase a clase detallada (16 Clases de octubre)",
            "Material imprimible en Word/PPT: 5 Guías, 4 Apuntes PPT, 3 Pruebas Sumativas y Planificación"
        ],
        zipPath: "../Kit_Didactico_Lenguaje_4Basico_Octubre_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Lenguaje_4Basico_Octubre_U3.pdf",
        subjectColor: "#D01C8B",
        subjectColorRGB: "208, 28, 139"
    },
    {
        id: "matematica-4basico-octubre",
        asignatura: "Matemática",
        asignaturaKey: "matematica",
        nivel: "4° Básico",
        unidad: "Unidad 4",
        mes: "Octubre",
        titulo: "Volumen de Cuerpos Simples y Números Decimales",
        icon: "🧊",
        descripcion: "Kit didáctico premium interactivo de octubre. Domina el cálculo de volumen de cuerpos tridimensionales contando unidades cúbicas, y comprende el uso de números decimales (décimas) en la recta numérica (SIN SOLUCIONARIOS).",
        detalles: [
            "Presentación interactiva HTML5 (Indigo & Violet, 5 Slides de lujo)",
            "4 Minijuegos interactivos (Súper Quiz de 15 preguntas, V/F con retroalimentación, Drag & Drop, Sopa de Letras)",
            "Planificación docente clase a clase detallada (12 Clases de octubre)",
            "Material imprimible en Word/PDF listo para el aula: 5 Guías limpias, 2 Apuntes PPT, Evaluación de Unidad"
        ],
        zipPath: "../Kit_Didactico_Matematica_4Basico_Octubre_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Matematica_4Basico_Octubre_U4.pdf",
        subjectColor: "#4F46E5",
        subjectColorRGB: "79, 70, 229"
    },
    {
        id: "matematica-4basico-noviembre",
        asignatura: "Matemática",
        asignaturaKey: "matematica",
        nivel: "4° Básico",
        unidad: "Unidad 4",
        mes: "Noviembre",
        titulo: "Cálculo de Área, Superficie y Perímetro",
        icon: "📐",
        descripcion: "Kit didáctico premium interactivo de noviembre. Domina la estimación y cálculo de áreas en cuadrículas y mediante fórmulas, y halla perímetros sumando los lados del contorno (SIN SOLUCIONARIOS).",
        detalles: [
            "Video educativo offline local sobre Área y Superficie integrado",
            "Presentación interactiva HTML5 (Emerald & Gold, 5 Slides de lujo)",
            "4 Minijuegos interactivos (Súper Quiz de 15 preguntas, V/F con retroalimentación, Drag & Drop, Sopa de Letras)",
            "Planificación docente clase a clase detallada de noviembre (8 Clases)",
            "Material imprimible en Word/PDF: 5 Guías de trabajo, 2 Apuntes PPT, Evaluación Sumativa y Planificación"
        ],
        zipPath: "../Kit_Didactico_Matematica_4Basico_Noviembre_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Matematica_4Basico_Noviembre_U4.pdf",
        subjectColor: "#10B981",
        subjectColorRGB: "16, 185, 129"
    },
    {
        id: "matematica-4basico-diciembre",
        asignatura: "Matemática",
        asignaturaKey: "matematica",
        nivel: "4° Básico",
        unidad: "Unidad 4",
        mes: "Diciembre",
        titulo: "Datos, Gráficos y Experimentos del Azar",
        icon: "📊",
        descripcion: "Kit didáctico premium interactivo de diciembre. Domina el registro en tablas de conteo, lectura e interpretación de gráficos de barras simples, experimentos aleatorios y la escala de posibilidad (SIN SOLUCIONARIOS).",
        detalles: [
            "Video explicativo offline integrado sobre Gráficos y Tablas de Barras",
            "Presentación interactiva HTML5 (Amber & Teal, 5 Slides de lujo)",
            "4 Minijuegos interactivos (Súper Quiz de 15 preguntas, V/F con retroalimentación, Drag & Drop, Sopa de Letras)",
            "Planificación docente clase a clase de diciembre (12 Clases)",
            "Material imprimible en Word/PDF: 15 Fichas y Guías limpias, 2 Apuntes PPT, Experimento Moneda, Evaluación Final"
        ],
        zipPath: "../Kit_Didactico_Matematica_4Basico_Diciembre_PROMAX.zip",
        pdfPath: "pdf/Pantallazos_Reales_Matematica_4Basico_Diciembre_U4.pdf",
        subjectColor: "#D97706",
        subjectColorRGB: "217, 119, 6"
    }
];

// Cargar Base de Datos con localStorage
let kitsData = [];

function initializeDatabase() {
    const stored = localStorage.getItem('webzip_kits_v12');
    if (stored) {
        kitsData = JSON.parse(stored);
    } else {
        kitsData = [...INITIAL_KITS];
        localStorage.setItem('webzip_kits_v12', JSON.stringify(kitsData));
    }
}

// Variables Globales de Estado
let activeSubjectFilter = "all";
let activeLevelFilter = "all";
let activeSearchQuery = "";
let currentBuyKit = null;

// Elementos del DOM
const catalogGrid = document.getElementById('catalog-grid');
const searchInput = document.getElementById('search-input');
const levelSelect = document.getElementById('level-select');
const subjectFilters = document.getElementById('subject-filters');

// Modales
const payModal = document.getElementById('pay-modal');
const pdfModal = document.getElementById('pdf-modal');
const adminDrawer = document.getElementById('admin-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');

// Inicialización de la Aplicación
document.addEventListener('DOMContentLoaded', () => {
    initializeDatabase();
    renderSubjectFilters();
    renderCatalog();
    setupEventListeners();
    setupCreditCardListeners();
    initializeWallpaperRotator();
});

// Renderizar Filtros de Asignatura con variables HSL personalizadas
function renderSubjectFilters() {
    subjectFilters.innerHTML = `
        <button class="filter-btn active" data-subject="all">
            <span class="dot" style="--dot-color: var(--primary)"></span>
            Todas
        </button>
        <button class="filter-btn" data-subject="matematica" style="--btn-color: var(--color-matematica); --btn-glow: rgba(79, 70, 229, 0.4);">
            <span class="dot" style="--dot-color: var(--color-matematica)"></span>
            Matemática
        </button>
        <button class="filter-btn" data-subject="ciencias" style="--btn-color: var(--color-ciencias); --btn-glow: rgba(21, 128, 61, 0.4);">
            <span class="dot" style="--dot-color: var(--color-ciencias)"></span>
            Ciencias
        </button>
        <button class="filter-btn" data-subject="ingles" style="--btn-color: var(--color-ingles); --btn-glow: rgba(13, 148, 136, 0.4);">
            <span class="dot" style="--dot-color: var(--color-ingles)"></span>
            Inglés
        </button>
        <button class="filter-btn" data-subject="historia" style="--btn-color: var(--color-historia); --btn-glow: rgba(220, 38, 38, 0.4);">
            <span class="dot" style="--dot-color: var(--color-historia)"></span>
            Historia
        </button>
        <button class="filter-btn" data-subject="lenguaje" style="--btn-color: var(--color-lenguaje); --btn-glow: rgba(139, 92, 246, 0.4);">
            <span class="dot" style="--dot-color: var(--color-lenguaje)"></span>
            Lenguaje
        </button>
    `;
}

// Renderizar Bento Grid del Catálogo
function renderCatalog() {
    catalogGrid.innerHTML = '';
    
    // Filtrar base de datos
    const filtered = kitsData.filter(kit => {
        const matchesSubject = activeSubjectFilter === "all" || kit.asignaturaKey === activeSubjectFilter;
        const matchesLevel = activeLevelFilter === "all" || kit.nivel === activeLevelFilter;
        
        const textContent = `${kit.titulo} ${kit.asignatura} ${kit.descripcion} ${kit.nivel}`.toLowerCase();
        const matchesSearch = activeSearchQuery === "" || textContent.includes(activeSearchQuery.toLowerCase());
        
        return matchesSubject && matchesLevel && matchesSearch;
    });
    
    if (filtered.length === 0) {
        catalogGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
                <span style="font-size: 3rem; display: block; margin-bottom: 1rem;">🔍</span>
                <p style="font-size: 1.1rem; font-weight: 600;">No encontramos ningún kit interactivo con esos filtros.</p>
                <p style="font-size: 0.85rem; margin-top: 0.5rem;">Intenta con otras palabras o limpia los filtros.</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(kit => {
        const card = document.createElement('div');
        card.className = 'kit-card';
        card.style.setProperty('--subject-color', kit.subjectColor);
        card.style.setProperty('--subject-color-rgb', kit.subjectColorRGB);
        
        const detailsList = kit.detalles.map(detail => `
            <div class="check-item">
                <span class="bullet">✔</span>
                <span>${detail}</span>
            </div>
        `).join('');
        
        card.innerHTML = `
            <div>
                <div class="card-header">
                    <span class="subject-badge">${kit.asignatura}</span>
                    <span class="month-badge ${kit.mes ? kit.mes.toLowerCase() : 'septiembre'}">${kit.mes || 'Septiembre'}</span>
                </div>
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                    ${kit.nivel} • ${kit.unidad}
                </div>
                <h3><span class="icon">${kit.icon}</span>${kit.titulo}</h3>
                <p class="kit-desc">${kit.descripcion}</p>
                <div class="content-checklist">
                    <div class="checklist-title">Contenido del Recurso ZIP</div>
                    ${detailsList}
                </div>
            </div>
            <div class="card-actions">
                <button class="buy-btn" onclick="openPaymentFlow('${kit.id}')">
                    🛒 Comprar Kit por $1.000
                </button>
                <button class="preview-btn" onclick="openPDFPreview('${kit.pdfPath}')">
                    👀 Previsualizar Páginas
                </button>
            </div>
        `;
        catalogGrid.appendChild(card);
    });
}

// Configurar Manejadores de Eventos de Filtro y Buscador
function setupEventListeners() {
    // Escuchar búsqueda en tiempo real
    searchInput.addEventListener('input', (e) => {
        activeSearchQuery = e.target.value;
        renderCatalog();
    });
    
    // Escuchar selección de nivel escolar
    levelSelect.addEventListener('change', (e) => {
        activeLevelFilter = e.target.value;
        renderCatalog();
    });
    
    // Escuchar botones de categorías/asignaturas
    subjectFilters.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        
        // Quitar activa de todos
        subjectFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        
        btn.classList.add('active');
        activeSubjectFilter = btn.dataset.subject;
        renderCatalog();
    });
}

// Abrir previsualización PDF real
window.openPDFPreview = function(pdfPath) {
    const iframe = document.getElementById('preview-pdf-iframe');
    iframe.src = pdfPath;
    pdfModal.classList.add('active');
};

window.closePDFPreview = function() {
    pdfModal.classList.remove('active');
    document.getElementById('preview-pdf-iframe').src = '';
};

// Modales del Flujo de Pago
window.openPaymentFlow = function(kitId) {
    currentBuyKit = kitsData.find(k => k.id === kitId);
    if (!currentBuyKit) return;
    
    // Configurar metadatos del modal
    document.getElementById('modal-kit-name').innerText = currentBuyKit.titulo;
    
    // Resetear formulario y vistas del modal
    document.getElementById('card-form').style.display = 'block';
    document.getElementById('qr-section').style.display = 'none';
    document.getElementById('payment-loader-view').style.display = 'none';
    document.getElementById('payment-success-view').style.display = 'none';
    
    // Resetear botones de tab
    document.getElementById('tab-card').classList.add('active');
    document.getElementById('tab-qr').classList.remove('active');
    
    // Resetear valores de tarjeta digital
    resetInteractiveCard();
    
    // Mostrar modal
    payModal.classList.add('active');
};

window.closePayModal = function() {
    payModal.classList.remove('active');
    currentBuyKit = null;
    hideConfetti();
};

// Cambiar método de pago (Tarjeta vs QR)
window.switchPayTab = function(type) {
    const cardForm = document.getElementById('card-form');
    const qrSection = document.getElementById('qr-section');
    const tabCard = document.getElementById('tab-card');
    const tabQr = document.getElementById('tab-qr');
    
    if (type === 'card') {
        cardForm.style.display = 'block';
        qrSection.style.display = 'none';
        tabCard.classList.add('active');
        tabQr.classList.remove('active');
    } else {
        cardForm.style.display = 'none';
        qrSection.style.display = 'flex';
        tabCard.classList.remove('active');
        tabQr.classList.add('active');
    }
};

// Resetear Tarjeta de Crédito interactiva a valores iniciales
function resetInteractiveCard() {
    document.getElementById('d-card-number').innerText = '•••• •••• •••• ••••';
    document.getElementById('d-card-name').innerText = 'NOMBRE DEL DOCENTE';
    document.getElementById('d-card-expiry').innerText = 'MM/AA';
    document.getElementById('d-card-cvv').innerText = '•••';
    
    document.getElementById('card-number-input').value = '';
    document.getElementById('card-name-input').value = '';
    document.getElementById('card-expiry-input').value = '';
    document.getElementById('card-cvv-input').value = '';
    
    const cardElement = document.getElementById('interactive-card');
    cardElement.classList.remove('flipped');
    cardElement.style.background = 'linear-gradient(135deg, #4F46E5 0%, #8B5CF6 100%)';
    document.getElementById('d-card-brand').innerText = 'WebPay';
}

// Configurar oyentes para animación en tiempo real de la tarjeta de crédito
function setupCreditCardListeners() {
    const cardNum = document.getElementById('card-number-input');
    const cardName = document.getElementById('card-name-input');
    const cardExpiry = document.getElementById('card-expiry-input');
    const cardCvv = document.getElementById('card-cvv-input');
    const cardElement = document.getElementById('interactive-card');
    
    // Auto-formatear y reflejar Número de Tarjeta
    cardNum.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        // Cortar a 16 dígitos
        if (value.length > 16) value = value.slice(0, 16);
        
        // Agregar espacios cada 4 números
        let formatted = value.match(/.{1,4}/g)?.join(' ') || '';
        e.target.value = formatted;
        
        document.getElementById('d-card-number').innerText = formatted || '•••• •••• •••• ••••';
        
        // Detección inteligente de franquicias
        if (value.startsWith('4')) {
            cardElement.style.background = 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)'; // Azul Visa
            document.getElementById('d-card-brand').innerText = 'VISA';
        } else if (value.startsWith('5')) {
            cardElement.style.background = 'linear-gradient(135deg, #7C2D12 0%, #EA580C 100%)'; // Naranja Mastercard
            document.getElementById('d-card-brand').innerText = 'Mastercard';
        } else {
            cardElement.style.background = 'linear-gradient(135deg, #4F46E5 0%, #8B5CF6 100%)'; // Default Webpay
            document.getElementById('d-card-brand').innerText = 'WebPay';
        }
    });
    
    // Reflejar Nombre del titular
    cardName.addEventListener('input', (e) => {
        let value = e.target.value.toUpperCase();
        if (value.length > 22) value = value.slice(0, 22);
        e.target.value = value;
        document.getElementById('d-card-name').innerText = value || 'NOMBRE DEL DOCENTE';
    });
    
    // Auto-formatear y reflejar Fecha de Expiración
    cardExpiry.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 4) value = value.slice(0, 4);
        
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        e.target.value = value;
        document.getElementById('d-card-expiry').innerText = value || 'MM/AA';
    });
    
    // Reflejar CVV y rotar la tarjeta
    cardCvv.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 3) value = value.slice(0, 3);
        e.target.value = value;
        document.getElementById('d-card-cvv').innerText = value || '•••';
    });
    
    cardCvv.addEventListener('focus', () => {
        cardElement.classList.add('flipped');
    });
    
    cardCvv.addEventListener('blur', () => {
        cardElement.classList.remove('flipped');
    });
}

// Simular el Procesamiento de Transacción e inicio de Descarga
window.submitCardPayment = function(e) {
    if (e) e.preventDefault();
    
    const cardNum = document.getElementById('card-number-input').value;
    const cardName = document.getElementById('card-name-input').value;
    const cardExpiry = document.getElementById('card-expiry-input').value;
    const cardCvv = document.getElementById('card-cvv-input').value;
    
    if (!cardNum || !cardName || !cardExpiry || !cardCvv) {
        alert("⚠️ Por favor rellena todos los campos de pago seguro.");
        return;
    }
    
    executePaymentSimulation();
};

window.submitQRPayment = function() {
    executePaymentSimulation();
};

function executePaymentSimulation() {
    // Ocultar formularios de pago
    document.getElementById('card-form').style.display = 'none';
    document.getElementById('qr-section').style.display = 'none';
    
    // Mostrar loader de procesamiento
    const loaderView = document.getElementById('payment-loader-view');
    loaderView.style.display = 'flex';
    
    // Simular retraso de pasarela segura
    setTimeout(() => {
        // Ocultar loader
        loaderView.style.display = 'none';
        
        // Mostrar vista de éxito
        const successView = document.getElementById('payment-success-view');
        successView.style.display = 'flex';
        
        // Configurar el enlace de descarga real
        const dlBtn = document.getElementById('modal-download-link');
        dlBtn.href = currentBuyKit.zipPath;
        dlBtn.download = currentBuyKit.zipPath.split('/').pop();
        
        // Lanzar celebración y confetti
        showConfetti();
        
        // Disparar la descarga automáticamente después de 0.8s
        setTimeout(() => {
            dlBtn.click();
        }, 800);
        
    }, 2200);
}

// Sistema de Confetti Animado en CSS/JS
function showConfetti() {
    const container = document.getElementById('confetti-container');
    container.style.display = 'block';
    container.innerHTML = '';
    
    const colors = ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];
    
    for (let i = 0; i < 70; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = `${Math.random() * 8 + 6}px`;
        piece.style.height = `${Math.random() * 8 + 6}px`;
        piece.style.animationDelay = `${Math.random() * 1.5}s`;
        piece.style.setProperty('--confetti-drift', `${Math.random() * 150 - 75}px`);
        
        container.appendChild(piece);
    }
}

function hideConfetti() {
    const container = document.getElementById('confetti-container');
    container.style.display = 'none';
    container.innerHTML = '';
}

// Cajón lateral / Panel Docente
window.toggleAdminDrawer = function(active) {
    if (active) {
        adminDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
    } else {
        adminDrawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
    }
};

// Crear y Guardar un nuevo Kit mediante el formulario Admin (localStorage)
window.saveNewKit = function(e) {
    if (e) e.preventDefault();
    
    const title = document.getElementById('a-title').value;
    const subject = document.getElementById('a-subject').value;
    const level = document.getElementById('a-level').value;
    const unit = document.getElementById('a-unit').value;
    const zipName = document.getElementById('a-zipname').value;
    const pdfName = document.getElementById('a-pdfname').value;
    const desc = document.getElementById('a-desc').value;
    const month = document.getElementById('a-month')?.value || "Septiembre";
    
    if (!title || !subject || !level || !unit || !zipName || !pdfName || !desc) {
        alert("⚠️ Por favor rellena todos los campos para dar de alta el kit.");
        return;
    }
    
    // Mapear claves de asignatura
    let subKey = "matematica";
    let subColor = "#4F46E5";
    let subColorRGB = "79, 70, 229";
    let subIcon = "📐";
    
    if (subject === "Ciencias Naturales") {
        subKey = "ciencias";
        subColor = "#15803D";
        subColorRGB = "21, 128, 61";
        subIcon = "🌱";
    } else if (subject === "Idioma Extranjero Inglés") {
        subKey = "ingles";
        subColor = "#0D9488";
        subColorRGB = "13, 148, 136";
        subIcon = "🏠";
    } else if (subject === "Historia y Geografía") {
        subKey = "historia";
        subColor = "#DC2626";
        subColorRGB = "220, 38, 38";
        subIcon = "🏛️";
    } else if (subject === "Lenguaje y Comunicación") {
        subKey = "lenguaje";
        subColor = "#8B5CF6";
        subColorRGB = "139, 92, 246";
        subIcon = "✍️";
    }
    
    const newKit = {
        id: `custom-${Date.now()}`,
        asignatura: subject,
        asignaturaKey: subKey,
        nivel: level,
        unidad: unit,
        mes: month,
        titulo: title,
        icon: subIcon,
        descripcion: desc,
        detalles: [
            "1 Video didáctico offline integrado",
            "Presentación interactiva HTML5",
            "Minijuegos educativos lúdicos",
            "Planificación clase a clase del docente",
            "Materiales y solucionarios DOC descargables"
        ],
        zipPath: `../${zipName}`,
        pdfPath: `../${pdfName}`,
        subjectColor: subColor,
        subjectColorRGB: subColorRGB
    };
    
    kitsData.push(newKit);
    localStorage.setItem('webzip_kits_v8', JSON.stringify(kitsData));
    
    // Recargar catálogo y cerrar drawer
    renderCatalog();
    toggleAdminDrawer(false);
    
    // Limpiar formulario
    document.getElementById('admin-kit-form').reset();
    
    alert(`🎉 ¡El kit "${title}" ha sido incorporado exitosamente al catálogo!`);
};

// Generador de Partículas Estelares, Rotador y Paralaje 3D Interactivo
function initializeWallpaperRotator() {
    const bgContainer = document.querySelector('.bg-wallpaper');
    if (!bgContainer) return;
    
    // 1. Generar partículas CSS animadas (estrellas titilantes)
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.setProperty('--dur', `${4 + Math.random() * 5}s`);
        particle.style.setProperty('--delay', `${Math.random() * 8}s`);
        particle.style.setProperty('--max-opacity', `${0.3 + Math.random() * 0.5}`);
        
        const size = 1 + Math.random() * 2.5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        if (Math.random() > 0.85) {
            const glowColors = ['rgba(99,102,241,0.6)', 'rgba(16,185,129,0.6)', 'rgba(236,72,153,0.5)', 'rgba(59,130,246,0.5)'];
            particle.style.boxShadow = `0 0 ${4 + Math.random() * 6}px ${glowColors[Math.floor(Math.random() * glowColors.length)]}`;
        }
        
        bgContainer.appendChild(particle);
    }

    // 2. Rotador automático de Capturas Ambientales (Crossfade cada 9 segundos)
    const ambientSlides = document.querySelectorAll('.ambient-slide');
    let currentSlideIdx = 0;
    if (ambientSlides.length > 1) {
        setInterval(() => {
            ambientSlides[currentSlideIdx].classList.remove('active');
            currentSlideIdx = (currentSlideIdx + 1) % ambientSlides.length;
            ambientSlides[currentSlideIdx].classList.add('active');
        }, 9000);
    }

    // 3. Paralaje 3D Interactivo con el Movimiento del Mouse
    let lastMove = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastMove < 16) return; // Limitar a ~60fps para rendimiento óptimo
        lastMove = now;
        
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        // Rotar y desplazar las ventanas flotantes macOS con perspectiva
        const floatingWindows = document.querySelectorAll('.floating-window');
        floatingWindows.forEach((win, idx) => {
            const factor = (idx + 1) * 12;
            const rotateYBase = idx % 2 === 0 ? 16 : -16;
            const rotateXBase = idx % 2 === 0 ? -5 : 5;
            
            // Ángulo interactivo basado en mouse
            const currentRotY = rotateYBase + mouseX * 10;
            const currentRotX = rotateXBase + mouseY * 8;
            const transX = mouseX * factor;
            const transY = mouseY * factor;
            
            win.style.transform = `perspective(1200px) rotateY(${currentRotY}deg) rotateX(${currentRotX}deg) translate(${transX}px, ${transY}px)`;
        });

        // Desplazar sutilmente las partículas
        const particles = document.querySelectorAll('.bg-wallpaper .particle');
        particles.forEach((p) => {
            p.style.transform = `translate(${mouseX * 15}px, ${mouseY * 15}px)`;
        });
    });
}

// ═══════════════════════════════════════════════════════
// PROGRESSIVE WEB APP (PWA) INSTALL LOGIC & FALLBACKS
// ═══════════════════════════════════════════════════════
let deferredPrompt = null;
const pwaFallbackBtn = document.getElementById('pwa-fallback-btn');

// Capture standard beforeinstallprompt for classic browsers and fallbacks
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('[PWA] beforeinstallprompt event captured.');
    
    // Ensure the custom fallback button is visible
    if (pwaFallbackBtn) {
        pwaFallbackBtn.style.display = 'flex';
    }
});

// Wire up the custom PWA fallback install button
if (pwaFallbackBtn) {
    pwaFallbackBtn.addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('[PWA] User accepted standard PWA installation.');
                    showPwaInstalledToast();
                } else {
                    console.log('[PWA] User dismissed standard PWA installation.');
                }
                deferredPrompt = null;
            });
        } else {
            // Already installed or not supported yet (Chrome <install> trial might be active)
            if ('HTMLInstallElement' in window) {
                console.log('[PWA] Chrome <install> element active. Let the browser handle standard actions.');
            } else {
                alert('✨ ¡WebZip Docente ya se encuentra instalada o está lista para ser usada 100% offline en tu navegador! ⚡');
            }
        }
    });
}

// Wire up the new experimental Chrome <install> element events
const installTag = document.querySelector('install');
if (installTag) {
    installTag.addEventListener('promptaction', (e) => {
        console.log('[PWA] 1-Click Installation via <install> element succeeded!', e);
        showPwaInstalledToast();
    });

    installTag.addEventListener('promptdismiss', () => {
        console.log('[PWA] User dismissed the <install> prompt dialog.');
    });

    installTag.addEventListener('validationstatuschanged', (e) => {
        if (e.target.invalidReason) {
            console.warn('[PWA] <install> element validation status failed:', e.target.invalidReason);
        }
    });
}

// Custom Toast notification for beautiful visual feedback
function showPwaInstalledToast() {
    const toast = document.createElement('div');
    toast.className = 'pwa-toast';
    toast.innerHTML = `
        <div class="toast-indicator"></div>
        <div class="toast-content">
            <i class="fa-solid fa-circle-check toast-icon"></i>
            <div>
                <h4>¡WebZip Instalado!</h4>
                <p>La aplicación se ha agregado a tu escritorio. Ya puedes usarla 100% offline sin internet.</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Smooth transition trigger
    setTimeout(() => toast.classList.add('active'), 100);
    
    // Auto-remove after 5.5 seconds
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => toast.remove(), 400);
    }, 5500);
}

