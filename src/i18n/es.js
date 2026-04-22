export const es = {
  meta: {
    locale: 'ES',
  },
  navigation: {
    items: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Caso destacado', href: '#case-study' },
      { label: 'Sobre mí', href: '#about' },
      { label: 'Expertise', href: '#expertise' },
      { label: 'Cómo trabajo', href: '#approach' },
      { label: 'En crecimiento', href: '#growth' },
      { label: 'Contacto', href: '#contact' },
    ],
    languageLabel: 'Idioma',
    themeLabel: {
      light: 'Tema claro',
      dark: 'Tema oscuro',
    },
  },
  hero: {
    id: 'hero',
    eyebrow: 'Backend Java Developer',
    name: 'Felipe García',
    title: 'Desarrollador Backend Java construyendo software para operaciones reales de negocio',
    description:
      'Desarrollo soluciones con Java y Spring Boot aplicadas a ventas, stock, entregas, seguridad y lógica de negocio, con foco en APIs mantenibles y arquitectura clara.',
    primaryCta: 'Ver experiencia destacada',
    secondaryCta: 'Contacto',
    panelLabel: 'Resumen profesional',
    highlights: [
      {
        title: 'Experiencia aplicada',
        value: 'Decomat S.R.L.',
        description: 'Sistema desarrollado para una empresa real, sobre operaciones comerciales concretas.',
      },
      {
        title: 'Stack principal',
        value: 'Java · Spring Boot · JWT · MySQL',
        description: 'Backend orientado a negocio, seguridad y persistencia mantenible.',
      },
      {
        title: 'Foco actual',
        value: 'Testing · CI/CD · React',
        description: 'Profundizando prácticas profesionales para mejorar calidad y entrega.',
      },
    ],
  },
  caseStudy: {
    quickFacts: [
      { label: 'Empresa', value: 'Decomat S.R.L.' },
      { label: 'Período', value: 'Mar 2025 - Mar 2026' },
      { label: 'Tipo de sistema', value: 'Gestión comercial, stock y entregas' },
      { label: 'Alcance', value: 'Ventas, presupuestos, materiales, entregas y seguridad por roles' },
      { label: 'Backend', value: 'Java 17, Spring Boot, JWT, JPA, MySQL' },
    ],
    id: 'case-study',
    sectionLabel: 'Experiencia destacada',
    title: 'Sistema de gestión comercial, stock y entregas para Decomat S.R.L.',
    summary:
      'Desarrollo de una solución full-stack para una empresa real, enfocada en ordenar operaciones comerciales, stock, presupuestos y entregas con reglas de negocio concretas y arquitectura mantenible.',  
    context: {
      title: 'Contexto',
      body:
        'El sistema fue desarrollado para Decomat S.R.L., una empresa real con necesidades concretas de gestión comercial y operativa. La experiencia se presenta como un caso de software aplicado a procesos de negocio reales, no como un ejercicio aislado.',
    },
    challenge: {
      title: 'Necesidad de negocio',
      body:
        'La necesidad principal era centralizar operaciones vinculadas a ventas, presupuestos, entregas, clientes, proveedores y materiales, incorporando reglas de negocio y control de stock en una base coherente y mantenible.',
    },
    solution: {
      title: 'Solución desarrollada',
      body:
        'Construí una plataforma con backend en Java 17 y Spring Boot, seguridad con Spring Security y JWT, persistencia con JPA/Hibernate y MySQL, migraciones con Flyway y una interfaz frontend desarrollada en HTML, CSS y JavaScript. El sistema fue pensado para resolver flujos reales y sostener evolución técnica con claridad estructural.',
    },
    architectureTitle: 'Arquitectura y decisiones técnicas',
    architecturePoints: [
      'Arquitectura por capas para separar dominio, acceso a datos, seguridad y exposición de endpoints.',
      'Modelado del dominio orientado a operaciones comerciales y control de stock, evitando un CRUD plano.',
      'Spring Security con JWT y control de acceso por roles para resguardar acciones sensibles.',
      'Persistencia con JPA/Hibernate y versionado de esquema con Flyway para mantener trazabilidad del modelo.',
      'Docker Compose para facilitar el entorno de ejecución y una configuración reproducible.',
      'Integración clara entre frontend y backend, con enfoque en mantenibilidad antes que complejidad innecesaria.',
    ],
    featureTitle: 'Capacidades principales',
    features: [
      'Gestión de ventas y presupuestos conectada con la lógica comercial.',
      'Administración de materiales, stock y movimientos relevantes para la operación.',
      'Coordinación de entregas dentro del flujo general del negocio.',
      'Gestión de clientes y proveedores con persistencia estructurada.',
      'Autenticación, autorización y seguridad por roles.',
      'Reglas de negocio reales integradas a los flujos del sistema.',
    ],
    stackTitle: 'Stack',
    stack: [
      'Java 17',
      'Spring Boot',
      'Spring Security + JWT',
      'JPA / Hibernate',
      'MySQL',
      'Flyway',
      'Maven',
      'Docker Compose',
      'HTML, CSS y JavaScript',
    ],
    highlightsTitle: 'Highlights técnicos',
    highlights: [
      'Experiencia real construyendo software para una operación comercial concreta.',
      'Backend-first con foco en seguridad, persistencia y reglas de negocio no triviales.',
      'Integración full-stack conectando frontend y backend en una misma solución.',
      'Caso transferible a entornos donde importan claridad técnica, evolución y robustez.',
    ],
    impactTitle: 'Aprendizaje e impacto',
    impact:
      'Esta experiencia consolidó mi forma de trabajar sobre software de negocio: entender primero el dominio, modelar reglas reales, separar responsabilidades y construir una base técnica clara para sostener evolución futura.',
  },
  about: {
    id: 'about',
    sectionLabel: 'Sobre mí',
    title: 'Backend con foco en estructura, seguridad y software útil',
    paragraphs: [
      'Soy desarrollador backend enfocado en Java y Spring Boot, con interés particular en APIs REST, lógica de negocio y arquitectura mantenible.',
      'Ya construí una solución full-stack para una necesidad real de empresa, integrando backend, persistencia, seguridad y frontend con un enfoque práctico y técnico.',
      'Hoy sigo profundizando testing, CI/CD, React y prácticas profesionales de desarrollo para ampliar mi capacidad de entrega sin perder claridad ni criterio de diseño.',
    ],
    sideTitle: 'Enfoque actual',
    sideItems: [
      'Backend con Java y Spring Boot',
      'APIs con lógica de negocio real',
      'Seguridad, persistencia y diseño mantenible',
      'Crecimiento en testing, CI/CD y prácticas profesionales',
    ],
  },
  expertise: {
    id: 'expertise',
    sectionLabel: 'Core expertise',
    title: 'Áreas en las que estoy construyendo profundidad técnica',
    groups: [
      {
        title: 'Backend engineering',
        items: [
          'Java y Spring Boot',
          'Diseño y exposición de APIs REST',
          'DTOs, validación y separación de responsabilidades',
          'Arquitectura por capas',
          'JPA / Hibernate y modelado de dominio',
        ],
      },
      {
        title: 'Security and persistence',
        items: [
          'Spring Security',
          'JWT y control de acceso por roles',
          'MySQL',
          'Flyway para migraciones versionadas',
          'Persistencia orientada a consistencia y mantenibilidad',
        ],
      },
      {
        title: 'Delivery and tooling',
        items: [
          'Maven',
          'Docker Compose',
          'Git',
          'Postman',
          'Flujos de trabajo orientados a entrega reproducible',
        ],
      },
      {
        title: 'Frontend integration',
        items: [
          'HTML, CSS y JavaScript',
          'Consumo de APIs y manejo de estados de interfaz',
          'Integración frontend-backend',
          'Organización modular del frontend',
          'Interfaces simples con foco en claridad funcional',
        ],
      },
    ],
  },
  workApproach: {
    id: 'approach',
    sectionLabel: 'Cómo trabajo',
    title: 'Criterios que priorizo al construir software',
    principles: [
      'Entender primero el dominio, las reglas del negocio y el flujo operativo.',
      'Separar responsabilidades para facilitar mantenimiento, lectura y evolución.',
      'Evitar complejidad innecesaria cuando una solución más simple resuelve mejor.',
      'Pensar seguridad desde el diseño, no como agregado tardío.',
      'Construir con visión realista: software extensible, claro y útil para operaciones concretas.',
    ],
    intro:
      'Más que acumular tecnología, me interesa construir software claro, extensible y alineado a necesidades reales.',
  },
  growth: {
    id: 'growth',
    sectionLabel: 'Growth / current focus',
    title: 'Áreas en las que estoy profundizando hoy',
    intro:
      'Estoy ampliando mi perfil backend con prácticas que fortalecen calidad, despliegue y madurez técnica.',
    items: [
      {
        title: 'React',
        description: 'Para construir interfaces más mantenibles, escalables y profesionales.',
      },
      {
        title: 'Testing',
        description: 'JUnit y Mockito para reforzar cobertura, confianza y calidad sobre la lógica.',
      },
      {
        title: 'CI/CD',
        description: 'Automatización de integración y entrega para acercarme a flujos más profesionales.',
      },
      {
        title: 'Deploy y entornos',
        description: 'Docker, ejecución reproducible y despliegue con mejor criterio técnico.',
      },
      {
        title: 'Observabilidad',
        description: 'Monitoreo, trazabilidad y prácticas que mejoran la operación real de sistemas.',
      },
      {
        title: 'Madurez profesional',
        description: 'Buenas prácticas de ingeniería, documentación y mejora continua como backend developer.',
      },
    ],
  },
  contact: {
    id: 'contact',
    sectionLabel: 'Contacto',
    title: 'Disponible para oportunidades donde importe construir con criterio',
    description:
      'Si querés conversar sobre backend con Java, APIs, arquitectura mantenible o una oportunidad profesional, este portfolio está preparado para abrir esa conversación de forma directa.',
    cta: 'Escribime o conectemos',
    availability:
      'Abierto a conversaciones sobre backend Java, APIs, arquitectura y oportunidades de desarrollo profesional.',
  },
};
