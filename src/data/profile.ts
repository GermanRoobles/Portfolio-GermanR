/**
 * Datos del perfil. Tras desplegar, configura `VITE_PUBLIC_SITE_URL` en Vercel y, si quieres previews enriquecidas, `seo.ogImageUrl` (1200×630).
 */

/** Chips opcionales (bots, n8n, RPA…); se muestran en Habilidades. */
export const extraStack: string[] = []

export const profile = {
  name: 'Germán Robles',
  headline:
    'Full Stack Developer · Gestión integral e-commerce (360º) · Frontend, backend, logística, mantenimiento y SEO',
  location: 'Las Rozas de Madrid, España',
  linkedinUrl: 'https://www.linkedin.com/in/germanrobleslopez/',
  tagline:
    'Único recurso técnico y operativo 360º en e-commerce: del código y la infraestructura a la conversión, pasando por fintech, logística y marketing técnico.',
  heroSummaryLine:
    'Único perfil técnico 360º: código, infraestructura, fintech, feeds y conversión.',
  seo: {
    description:
      'Germán Robles — desarrollo full stack y operación integral de e-commerce (PHP, JavaScript, MySQL, React, Node.js). Fintech, SEO/SEM, Merchant Center y rendimiento.',
    ogTitle: 'Germán Robles — Full stack y e-commerce 360º',
    jobTitle: 'Full Stack Developer · E-commerce 360º',
    ogImageUrl: '' as string,
  },
  contact: {
    title: 'Contacto',
    lead: 'Para propuestas o procesos de selección, escríbeme por correo. También dejo un enlace a mi perfil profesional en la red habitual del sector.',
    email: 'germanrobles@gmail.com' as string,
  },
  aboutNarrative: {
    paragraphs: [
      '¡Hola! Soy Germán Robles, Full Stack Developer y gestor integral de plataformas e-commerce.',
      'Mi trayectoria me ha permitido consolidar un sólido stack full stack (PHP, JavaScript, MySQL, React, Node.js), pero mi mayor fortaleza es mi capacidad para gestionar y optimizar todos los aspectos técnicos y operativos de una tienda online, actuando como único miembro del equipo técnico.',
    ],
    responsibilitiesHeading: 'Mis responsabilidades cubren el ciclo 360º del e-commerce:',
    responsibilityAreas: [
      {
        label: 'Desarrollo integral',
        text: 'Manejo completo de front-end (diseños responsive, optimización de métricas de Lighthouse) y back-end (desarrollo de la intranet y mantenimiento del servidor).',
      },
      {
        label: 'Fintech y logística',
        text: 'Gestión de pasarelas de pago y financiación críticas (PayPal, SeQura), así como la configuración de lógica compleja de tarifas a diferentes destinos.',
      },
      {
        label: 'Marketing técnico (SEO/SEM)',
        text: 'Optimización de feeds de productos para Google Merchant Center y soporte a la gestión de campañas en Google Ads.',
      },
      {
        label: 'Mantenimiento y operaciones',
        text: 'Mantenimiento, corrección de errores en la lógica de compra y gestión de la infraestructura para asegurar el máximo rendimiento.',
      },
    ],
    closing:
      'Busco aplicar esta visión integral del e-commerce en nuevos desafíos. Mi entusiasmo, capacidad de adaptación y mi formación autodidacta en áreas como la programación asistida con IA me permiten siempre estar a la vanguardia.',
  },
  role360: {
    lead: 'Desarrollador full stack con responsabilidad 360º en la plataforma e-commerce, actuando como único recurso técnico y operativo. Mi rol implica el desarrollo, la gestión y la optimización de todos los aspectos técnicos, desde el código hasta la conversión final.',
    pillars: [
      {
        title: 'I. Desarrollo back-end y gestión de sistemas (PHP, MySQL)',
        items: [
          'Intranet propia: desarrollo, mantenimiento y mejora continua de una plataforma de código propio para la gestión interna completa del e-commerce (gestión de pedidos, catálogo, inventario y logística).',
          'Integración fintech: implementación y mantenimiento de pasarelas de pago y financiación críticas (PayPal, SeQura).',
          'Lógica crítica: configuración de la lógica fiscal y tarifas de envío complejas a diferentes destinos, asegurando la operatividad legal y funcional.',
        ],
      },
      {
        title: 'II. Desarrollo front-end y optimización UX/CRO (JavaScript, HTML, CSS)',
        items: [
          'Optimización de rendimiento: mejora continua del performance web y optimización de métricas clave como el Lighthouse score para asegurar una navegación rápida y responsive.',
          'Diseño responsive: implementación de diseños y funcionalidades que garantizan una experiencia de usuario óptima en todos los dispositivos.',
          'Módulos CRO: desarrollo de funcionalidades específicas para mejorar la conversión (por ejemplo módulos de reseñas, lógica de descuentos, formularios).',
        ],
      },
      {
        title: 'III. Logística, mantenimiento y marketing técnico (SEO/SEM)',
        items: [
          'Gestión de la infraestructura técnica (hosting) y mantenimiento del servidor.',
          'Gestión y mejora de feeds de productos para Google Merchant Center, además de apoyo en la administración de campañas de Google Ads.',
          'Debugging crítico: resolución inmediata de fallos que bloquean la lógica de compra y el checkout.',
        ],
      },
    ],
  },
  currentRole: {
    title: 'Ecommerce Developer',
    company: 'Pavimentos Arquiservi',
    companyUrl: 'https://www.linkedin.com/company/pavimentos-arquiservi',
    period: 'Marzo 2025 — actualidad',
    summary:
      'En Pavimentos Arquiservi aplico la misma visión integral descrita en esta web: desarrollo full stack (front y back propios), integraciones fintech (PayPal, SeQura), operación técnica de feeds y campañas en el ecosistema Google, infraestructura y resolución de incidencias críticas en checkout. El puesto se enmarca en arquitectura y planificación, con enfoque de especialista en ingeniería y área técnica.',
    context: [
      'Empresa 11-50 empleados · autónomo / propiedad · arquitectura y planificación',
      'Departamento: ingeniería y técnico · nivel: especialista',
    ],
  },
  skillGroups: [
    {
      title: 'Front-end y experiencia de usuario',
      icon: 'layout-grid',
      items: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'Diseño responsive',
        'Lighthouse y performance web',
        'Módulos CRO y conversión',
        'UI / accesibilidad',
      ],
    },
    {
      title: 'Back-end y datos (producción y formación)',
      icon: 'server',
      items: [
        'PHP',
        'MySQL',
        'Node.js',
        'APIs REST',
        'Python, Java, Spring y JUnit (bootcamp OpenBootcamp)',
      ],
    },
    {
      title: 'E-commerce, fintech y marketing técnico',
      icon: 'store',
      items: [
        'Gestión integral de tiendas online',
        'PayPal y SeQura',
        'Google Merchant Center y feeds de producto',
        'Apoyo en Google Ads',
        'Logística e integración de tarifas',
        'SEO técnico y operativo',
      ],
    },
    {
      title: 'Datos y analítica',
      icon: 'chart-column',
      items: [
        'Métodos estadísticos',
        'Captura y almacenamiento de datos',
        'Procesamiento y transformación',
        'Análisis de datos',
      ],
    },
    {
      title: 'Herramientas y prácticas',
      icon: 'workflow',
      items: ['Git', 'Control de versiones', 'Entornos de desarrollo', 'Documentación técnica', 'Programación asistida con IA'],
    },
    {
      title: 'Administración de servicios (formación 2021)',
      icon: 'cloud',
      items: [
        'Administración de servicios web',
        'Servicios de mensajería',
        'Transferencia de archivos y contenido multimedia',
        'Gestión de servicios en el sistema informático',
      ],
    },
  ],
  education: [
    {
      school: 'HACK A BOSS',
      schoolUrl: 'https://www.linkedin.com/school/hackaboss',
      title: 'Web Development — Full Stack, gestión web/multimedia y webmaster',
      period: '2023 — 2024',
    },
    {
      school: 'OpenBootcamp',
      schoolUrl: 'https://www.linkedin.com/school/openbootcamp-escuela',
      title: 'Full Stack Web Developer',
      period: '2022 — 2023',
      highlights: ['Python', 'HTML', 'CSS', 'JavaScript', 'Git', 'Java', 'Spring', 'JUnit', 'React'],
    },
    {
      school: 'Ki-works',
      title: 'Data Science',
      period: '2021 — 2022',
    },
    {
      school: 'Teclado 3 (CEOCU)',
      title: 'Administración de servicios de internet',
      period: '2021',
    },
  ],
  certifications: [
    {
      name: 'Full Stack Web Development',
      issuer: 'HACK A BOSS',
      issuerUrl: 'https://www.linkedin.com/school/hackaboss',
      date: 'Marzo 2024',
    },
    {
      name: 'Administración de servicios de internet',
      issuer: 'Teclado 3',
      date: '',
    },
    {
      name: 'Data Science',
      issuer: 'Ki-works formación',
      issuerUrl: 'https://www.linkedin.com/company/knowledge-innovation-works',
      date: '',
    },
  ],
  languages: [
    { name: 'Español', level: 'Nativo / bilingüe' },
    { name: 'Inglés', level: 'Competencia profesional completa' },
  ],
  nav: [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'rol-360', label: 'Rol 360º' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'formacion', label: 'Formación' },
    { id: 'certificaciones', label: 'Certificaciones' },
    { id: 'idiomas', label: 'Idiomas' },
    { id: 'contacto', label: 'Contacto' },
  ],
}
