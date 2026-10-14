export const es = {
  meta: {
    description:
      'Desarrollador full-stack enfocado en Java, Spring Boot, React, APIs REST y sistemas de gestión de negocio.',
  },
  navigation: {
    label: 'Navegación principal',
    languageLabel: 'Idioma',
    menu: 'Menú',
    close: 'Cerrar',
    skip: 'Saltar al contenido',
    cv: 'Descargar CV',
    items: [
      { label: 'Proyectos', href: '#projects' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Stack', href: '#stack' },
      { label: 'Sobre mí', href: '#about' },
      { label: 'Contacto', href: '#contact' },
    ],
    themeLabel: { light: 'Activar tema oscuro', dark: 'Activar tema claro' },
  },
  hero: {
    eyebrow: 'FULL-STACK SOFTWARE DEVELOPER',
    status: 'Open to opportunities',
    title:
      'Construyo productos web de punta a punta para operaciones de negocio.',
    description:
      'Full-stack developer con foco fuerte en Java/Spring Boot y experiencia llevando productos desde el relevamiento y modelado del dominio hasta el frontend, testing, despliegue y operación en producción.',
    primaryCta: 'Ver proyectos',
    cvCta: 'Descargar CV',
    githubLabel: 'GitHub de Felipe Garcia',
  },
  proof: [
    { title: '2 sistemas para clientes', description: 'GymPlanner · Decomat' },
    {
      title: 'Producción',
      description: 'Producto actualmente utilizado por cliente',
    },
    {
      title: 'Stack principal',
      description: 'Java / Spring Boot · React / TypeScript · PostgreSQL',
    },
  ],
  selectedWork: {
    label: 'SELECTED WORK',
    title: 'Software construido para necesidades concretas de negocio.',
    description:
      'Dos proyectos que resumen mi evolución como desarrollador: desde sistemas comerciales y reglas de negocio hasta la entrega full-stack de un producto actualmente operando en producción.',
    cta: 'Ver caso completo',
    repository: 'Repositorio',
    visualLabel: 'Explorar el producto',
  },
  projects: {
    gymplanner: {
      repositoryLabel: 'Ver repositorio de GymPlanner en GitHub',
      title: 'GymPlanner',
      lead: 'Plataforma full-stack para la gestión operativa de un gimnasio, desarrollada junto a otro developer y actualmente utilizada por el cliente.',
      description:
        'Centraliza alumnos, ejercicios, etiquetas, plantillas de entrenamiento, rutinas personalizadas e historial de seguimiento en una única aplicación web.',
      highlights: [
        {
          title: 'End-to-end delivery',
          description: 'Discovery, arquitectura, backend, frontend y datos.',
        },
        {
          title: 'Production engineering',
          description: 'Testing, seguridad, CI/CD, deployment y monitoreo.',
        },
        {
          title: 'Operational value',
          description: 'Rutinas, historial, PDF y flujos diarios del gimnasio.',
        },
      ],
      caseStudy: [
        {
          title: 'Necesidad de negocio',
          body: 'Organizar los flujos de gestión de un gimnasio en una aplicación web: información de alumnos, catálogo de ejercicios y planificación del entrenamiento, con continuidad en el seguimiento.',
        },
        {
          title: 'Mi rol',
          body: 'Co-desarrollado junto a otro developer. Participé de punta a punta: relevamiento funcional, análisis del dominio, diseño técnico, backend, frontend, datos, seguridad, testing, generación de PDF y entrega. También trabajé en infraestructura, monitoreo, hardening, debugging y soporte de producción.',
        },
        {
          title: 'Producto y solución',
          body: 'Una plataforma que conecta alumnos, ejercicios y plantillas con rutinas personalizadas e historial. El frontend en React y TypeScript consume las APIs REST del backend Java 21 / Spring Boot, con persistencia en PostgreSQL.',
        },
        {
          title: 'Funcionalidades clave',
          items: [
            'Gestión de alumnos y catálogo de ejercicios con etiquetas y filtros.',
            'Plantillas de entrenamiento y rutinas personalizadas.',
            'Historial de seguimiento e historial por ejercicio.',
            'Generación de rutinas en PDF.',
            'Autenticación y autorización por roles.',
          ],
        },
        {
          title: 'Ingeniería',
          body: 'Modelado del dominio, APIs REST y persistencia con Spring Data JPA / Hibernate. Flyway mantiene las migraciones de la base de datos; React, TypeScript y Vite organizan la interfaz del producto.',
        },
        {
          title: 'Testing y seguridad',
          body: 'Testing backend y validación de los flujos de negocio, autenticación con Spring Security / JWT y autorización por roles. La seguridad también formó parte del hardening y de la revisión del entorno de producción.',
        },
        {
          title: 'Producción y delivery',
          body: 'Trabajo con Docker y GitHub Actions en el proceso de entrega, CI/CD y despliegue cloud. La operación incluye monitoreo, diagnóstico de problemas, correcciones y soporte al cliente.',
        },
      ],
      outcome:
        'Producto entregado, desplegado y actualmente utilizado por el cliente. Una experiencia colaborativa de desarrollo full-stack que abarca desde el entendimiento del negocio hasta el soporte en producción.',
      media: {
        dashboard: [
          'Dashboard del gimnasio',
          'Vista de presentación del producto y sus módulos principales.',
        ],
        responsive: [
          'Dashboard en mobile',
          'Presentación de la interfaz adaptada a una pantalla móvil.',
        ],
        routines: [
          'Gestión de rutinas',
          'Vista global de rutinas asignadas a alumnos.',
        ],
        routine: [
          'Detalle de una rutina',
          'Organización por días, bloques y ejercicios; acceso a PDF.',
        ],
        students: [
          'Gestión de alumnos',
          'Listado de alumnos con búsqueda y filtros.',
        ],
        history: [
          'Historial de seguimiento',
          'Continuidad de ciclos y rutinas de un alumno.',
        ],
        exerciseHistory: [
          'Historial por ejercicio',
          'Consulta de cómo y cuándo se trabajó un ejercicio.',
        ],
        exercises: [
          'Catálogo de ejercicios',
          'Ejercicios organizados con etiquetas y filtros.',
        ],
        tags: [
          'Configuración de etiquetas',
          'Clasificación del catálogo de ejercicios.',
        ],
      },
      mediaNote:
        'Los dashboards desktop y mobile son visuales de presentación pulidos del producto; no representan necesariamente cada píxel de la versión desplegada actual.',
    },
    decomat: {
      repositoryLabel: 'Ver repositorio de Decomat en GitHub',
      title: 'Sistema de gestión comercial y stock',
      lead: 'Sistema full-stack desarrollado para centralizar ventas, presupuestos, materiales, stock, entregas y operaciones comerciales de Decomat S.R.L.',
      description:
        'El proyecto partió de requerimientos del negocio y evolucionó hacia una solución con reglas comerciales, seguridad por roles, trazabilidad de operaciones e integración frontend-backend.',
      highlights: [
        {
          title: 'Business logic',
          description: 'Ventas, presupuestos, stock y entregas conectados.',
        },
        {
          title: 'Security & control',
          description: 'Roles, autenticación y auditoría.',
        },
        {
          title: 'Domain modeling',
          description: 'Reglas de negocio más allá de un CRUD tradicional.',
        },
      ],
      caseStudy: [
        {
          title: 'Necesidad de negocio',
          body: 'La necesidad principal era centralizar operaciones vinculadas a ventas, presupuestos, entregas, clientes, proveedores y materiales, incorporando reglas de negocio y control de stock en una base coherente y mantenible.',
        },
        {
          title: 'Rol y contexto',
          body: 'Diseño y desarrollo de una solución full-stack para Decomat S.R.L., a partir de procesos y requerimientos concretos de la empresa, entre marzo de 2025 y marzo de 2026.',
        },
        {
          title: 'Solución desarrollada',
          body: 'Construí una plataforma con backend en Java 17 y Spring Boot, seguridad con Spring Security y JWT, persistencia con JPA/Hibernate y MySQL, migraciones con Flyway y una interfaz frontend desarrollada en HTML, CSS y JavaScript.',
        },
        {
          title: 'Reglas y flujos de negocio',
          items: [
            'Gestión de ventas y presupuestos conectada con la lógica comercial.',
            'Administración de materiales, stock y movimientos relevantes para la operación.',
            'Coordinación de entregas dentro del flujo general del negocio.',
            'Gestión de clientes y proveedores con persistencia estructurada.',
            'Auditoría y trazabilidad de operaciones.',
          ],
        },
        {
          title: 'Arquitectura',
          body: 'Arquitectura por capas para separar dominio, acceso a datos, seguridad y exposición de endpoints. Modelado del dominio orientado a operaciones comerciales y control de stock. Integración clara entre frontend y backend, con enfoque en mantenibilidad.',
        },
        {
          title: 'Seguridad y datos',
          body: 'Spring Security con JWT y control de acceso por roles para resguardar acciones sensibles. Persistencia con JPA/Hibernate y versionado de esquema con Flyway para mantener trazabilidad del modelo. Docker Compose facilita un entorno de ejecución reproducible.',
        },
      ],
      outcome:
        'Esta experiencia consolidó mi forma de trabajar sobre software de negocio: entender primero el dominio, modelar reglas reales, separar responsabilidades y construir una base técnica clara para sostener evolución futura.',
      media: {
        sales: [
          'Gestión de ventas',
          'Operaciones comerciales con estados y datos conectados.',
        ],
        dashboard: [
          'Dashboard comercial',
          'Vista general y accesos principales del sistema.',
        ],
        materials: [
          'Stock y materiales',
          'Inventario y elementos de la operación comercial.',
        ],
        saleDetail: [
          'Detalle de ventas',
          'Estados, ítems, pagos y entregas asociadas.',
        ],
        delivery: [
          'Detalle de entrega',
          'Materiales entregados y seguimiento operativo.',
        ],
        audit: [
          'Auditoría de stock',
          'Histórico de movimientos de inventario.',
        ],
      },
    },
  },
  experience: {
    label: 'EXPERIENCE',
    title: 'Experiencia construyendo y entregando software.',
    entries: [
      {
        period: '2026 — Actualidad',
        title: 'Full-Stack Developer',
        company: 'Freelance',
        description:
          'Desarrollo de soluciones web para clientes, trabajando sobre el ciclo completo del producto: relevamiento, diseño técnico, implementación, testing, despliegue y soporte.',
        project: 'gymplanner',
        cta: 'GymPlanner',
      },
      {
        period: '2025 — 2026',
        title: 'Java Backend / Full-Stack Developer',
        company: 'Decomat S.R.L.',
        description:
          'Diseño y desarrollo de un sistema de gestión comercial y stock a partir de procesos y requerimientos de la empresa.',
        project: 'decomat',
        cta: 'Ver proyecto',
      },
    ],
  },
  expertise: {
    label: 'TECHNICAL CAPABILITIES',
    title: 'Un stack para construir el producto completo.',
    intro:
      'Mi mayor profundidad está en backend con Java/Spring Boot, complementada con experiencia aplicada en frontend, datos, testing y delivery.',
  },
  workApproach: {
    label: 'HOW I BUILD',
    title: 'Del problema a producción.',
    steps: [
      ['Discover', 'Entender procesos y restricciones.'],
      ['Design', 'Modelar dominio y arquitectura.'],
      ['Build', 'Backend, frontend y datos.'],
      ['Validate', 'Testing, seguridad y revisión.'],
      ['Deploy', 'CI/CD e infraestructura.'],
      ['Operate', 'Monitorear, corregir y evolucionar.'],
    ],
    closing:
      'Busco que las decisiones técnicas tengan un propósito: software claro, mantenible, seguro y útil para la operación que debe resolver.',
  },
  about: {
    label: 'ABOUT',
    title: 'Software, negocio y mejora continua.',
    paragraphs: [
      'Soy Técnico Superior en Desarrollo de Software y trabajo como full-stack developer con especialización fuerte en backend Java/Spring Boot.',
      'Me interesa especialmente construir sistemas donde la tecnología tenga impacto directo sobre una operación: entender el problema, modelarlo correctamente y convertirlo en software mantenible que pueda llegar a producción y seguir evolucionando.',
      'Actualmente continúo desarrollando proyectos freelance mientras busco incorporarme a un equipo de ingeniería donde pueda aportar experiencia práctica, profundizar mi formación y crecer junto a otros desarrolladores.',
    ],
  },
  contact: {
    label: 'CONTACT',
    title: 'Hablemos.',
    description:
      'Estoy abierto a oportunidades de desarrollo de software y a proyectos donde pueda aportar en backend, full-stack y sistemas de gestión.',
    cta: 'Enviar email',
    cvCta: 'Descargar CV',
    githubLabel: 'GitHub de Felipe Garcia',
    linkedinLabel: 'LinkedIn de Felipe Garcia',
    location:
      'Santa Fe, Argentina · Disponible para oportunidades remotas e híbridas.',
  },
  footer: {
    role: 'Full-Stack Java/Spring Boot + React Developer',
    top: 'Volver arriba',
  },
  casePage: {
    label: 'PROJECT CASE STUDY',
    back: 'Volver a proyectos',
    stack: 'Engineering / stack',
    gallery: 'El producto en pantalla',
    outcome: 'Resultado y aprendizaje',
    repository: 'Ver repositorio',
    other: 'Siguiente caso',
    notFound: 'Proyecto no encontrado.',
  },
  gallery: {
    open: 'Ampliar imagen',
    close: 'Cerrar imagen',
    previous: 'Imagen anterior',
    next: 'Imagen siguiente',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    reset: 'Restablecer zoom',
    hint: 'Flechas para navegar · Doble clic para zoom · Arrastrá para mover · Escape para cerrar',
  },
};
