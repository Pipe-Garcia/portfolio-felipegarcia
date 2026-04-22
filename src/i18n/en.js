export const en = {
  meta: {
    locale: 'EN',
  },
  navigation: {
    items: [
      { label: 'Home', href: '#hero' },
      { label: 'Featured case', href: '#case-study' },
      { label: 'About', href: '#about' },
      { label: 'Expertise', href: '#expertise' },
      { label: 'How I work', href: '#approach' },
      { label: 'Growth', href: '#growth' },
      { label: 'Contact', href: '#contact' },
    ],
    languageLabel: 'Language',
    themeLabel: {
      light: 'Light theme',
      dark: 'Dark theme',
    },
  },
  hero: {
    id: 'hero',
    eyebrow: 'Backend Java Developer',
    name: 'Felipe García',
    title: 'Java Backend Developer building software for real business operations',
    description:
      'I build solutions with Java and Spring Boot applied to sales, inventory, deliveries, security, and business logic, with a focus on maintainable APIs and clear architecture.',
    primaryCta: 'View featured work',
    secondaryCta: 'Contact',
    panelLabel: 'Professional summary',
    highlights: [
      {
        title: 'Applied experience',
        value: 'Decomat S.R.L.',
        description: 'A system developed for a real company, centered on concrete commercial operations.',
      },
      {
        title: 'Main stack',
        value: 'Java · Spring Boot · JWT · MySQL',
        description: 'Business-oriented backend development with security and maintainable persistence.',
      },
      {
        title: 'Current focus',
        value: 'Testing · CI/CD · React',
        description: 'Deepening professional practices to improve quality and delivery.',
      },
    ],
  },
  caseStudy: {
    id: 'case-study',
    quickFacts: [
      { label: 'Company', value: 'Decomat S.R.L.' },
      { label: 'Period', value: 'Mar 2025 – Mar 2026' },
      { label: 'System type', value: 'Commercial, inventory and delivery management' },
      { label: 'Scope', value: 'Sales, quotations, materials, deliveries, and role-based security' },
      { label: 'Backend', value: 'Java 17, Spring Boot, JWT, JPA, MySQL' },
    ],
    sectionLabel: 'Featured experience',
    title: 'Commercial, Inventory and Delivery Management System for Decomat S.R.L.',
    summary:
      'A full-stack solution built for a real company, focused on organizing commercial operations, inventory, quotations, and deliveries through concrete business rules and maintainable architecture.',
    repo: {
      label: 'View project repository',
      href: 'https://github.com/Pipe-Garcia/store-app',
    },
    context: {
      title: 'Context',
      body:
        'The system was developed for Decomat S.R.L., a real company with concrete commercial and operational needs. This experience is presented as software built for real business processes, not as an isolated exercise.',
    },
    challenge: {
      title: 'Business need',
      body:
        'The main need was to centralize operations related to sales, quotations, deliveries, customers, suppliers, and materials, incorporating business rules and inventory control into a coherent and maintainable foundation.',
    },
    solution: {
      title: 'Solution delivered',
      body:
        'I built a platform with a Java 17 and Spring Boot backend, Spring Security with JWT, JPA/Hibernate and MySQL persistence, Flyway migrations, and a frontend built with HTML, CSS, and JavaScript. The system was designed to solve real workflows and support technical evolution with structural clarity.',
    },
    architectureTitle: 'Architecture and technical decisions',
    architecturePoints: [
      'Layered architecture to separate domain, data access, security, and endpoint exposure.',
      'Domain modeling focused on commercial operations and inventory control, avoiding flat CRUD.',
      'Spring Security with JWT and role-based access control to protect sensitive actions.',
      'Persistence with JPA/Hibernate and schema versioning with Flyway to keep model traceability.',
      'Docker Compose to simplify the execution environment and provide reproducible setup.',
      'Clear frontend-backend integration with maintainability prioritized over unnecessary complexity.',
    ],
    featureTitle: 'Main capabilities',
    features: [
      'Sales and quotation management connected to real commercial logic.',
      'Materials, inventory, and relevant stock operations.',
      'Delivery coordination within the broader operational flow.',
      'Structured customer and supplier management.',
      'Authentication, authorization, and role-based security.',
      'Real business rules embedded into system workflows.',
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
      'HTML, CSS and JavaScript',
    ],
    highlightsTitle: 'Technical highlights',
    highlights: [
      'Real experience building software for a concrete business operation.',
      'Backend-first approach focused on security, persistence, and non-trivial business rules.',
      'Full-stack integration connecting frontend and backend in one solution.',
      'A transferable case for environments where technical clarity, evolution, and robustness matter.',
    ],
    impactTitle: 'Learning and impact',
    impact:
      'This experience shaped the way I approach business software: understand the domain first, model real rules, separate responsibilities, and build a clear technical base that can sustain future evolution.',
  },
  about: {
    id: 'about',
    sectionLabel: 'About',
    title: 'Backend focused on structure, security, and useful software',
    paragraphs: [
      'I am a backend developer focused on Java and Spring Boot, with particular interest in REST APIs, business logic, and maintainable architecture.',
      'I have already built a full-stack solution for a real business need, integrating backend, persistence, security, and frontend delivery with a practical and technical mindset.',
      'I am currently deepening testing, CI/CD, React, and professional development practices to expand my delivery capacity without losing clarity or design judgment.',
    ],
    sideTitle: 'Current focus',
    sideItems: [
      'Backend with Java and Spring Boot',
      'APIs with real business logic',
      'Security, persistence, and maintainable design',
      'Growth in testing, CI/CD, and professional engineering practices',
    ],
  },
  expertise: {
    id: 'expertise',
    sectionLabel: 'Core expertise',
    title: 'Areas where I am building technical depth',
    groups: [
      {
        title: 'Backend engineering',
        items: [
          'Java and Spring Boot',
          'REST API design and implementation',
          'DTOs, validation, and separation of responsibilities',
          'Layered architecture',
          'JPA / Hibernate and domain modeling',
        ],
      },
      {
        title: 'Security and persistence',
        items: [
          'Spring Security',
          'JWT and role-based access control',
          'MySQL',
          'Flyway for versioned migrations',
          'Persistence focused on consistency and maintainability',
        ],
      },
      {
        title: 'Delivery and tooling',
        items: [
          'Maven',
          'Docker Compose',
          'Git',
          'Postman',
          'Workflows oriented toward reproducible delivery',
        ],
      },
      {
        title: 'Frontend integration',
        items: [
          'HTML, CSS, and JavaScript',
          'API consumption and interface state handling',
          'Frontend-backend integration',
          'Modular frontend organization',
          'Simple interfaces focused on functional clarity',
        ],
      },
    ],
  },
  workApproach: {
    id: 'approach',
    sectionLabel: 'How I work',
    title: 'Principles I prioritize when building software',
    intro:
      'More than collecting technologies, I care about building software that is clear, extensible, and aligned with real needs.',
    principles: [
      'Understand the domain, business rules, and operational flow before implementation.',
      'Separate responsibilities to make maintenance, readability, and evolution easier.',
      'Avoid unnecessary complexity when a simpler solution solves the problem better.',
      'Treat security as a design concern from the start, not as a late add-on.',
      'Build with a realistic mindset: extensible, clear software that supports concrete operations.',
    ],
  },
  growth: {
    id: 'growth',
    sectionLabel: 'Growth / current focus',
    title: 'Areas I am deepening right now',
    intro:
      'I am expanding my backend profile with practices that strengthen quality, deployment, and technical maturity.',
    items: [
      {
        title: 'React',
        description: 'To build interfaces that are more maintainable, scalable, and professional.',
      },
      {
        title: 'Testing',
        description: 'JUnit and Mockito to reinforce coverage, confidence, and quality in business logic.',
      },
      {
        title: 'CI/CD',
        description: 'Integration and delivery automation to move closer to more professional workflows.',
      },
      {
        title: 'Deployment and environments',
        description: 'Docker, reproducible execution, and deployment with better technical judgment.',
      },
      {
        title: 'Observability',
        description: 'Monitoring, traceability, and practices that improve real system operation.',
      },
      {
        title: 'Professional maturity',
        description: 'Engineering habits, documentation, and continuous improvement as a backend developer.',
      },
    ],
  },
  contact: {
    id: 'contact',
    sectionLabel: 'Contact',
    title: 'Available for opportunities where thoughtful software matters',
    description:
      'If you want to talk about Java backend development, APIs, maintainable architecture, or a professional opportunity, this portfolio is set up to open that conversation directly.',
    cta: 'Let’s connect',
    availability:
      'Open to conversations about Java backend, APIs, architecture, and professional development opportunities.',
  },
};