export const en = {
  meta: {
    description:
      'Full-stack developer focused on Java, Spring Boot, React, REST APIs and business management systems.',
  },
  navigation: {
    label: 'Main navigation',
    languageLabel: 'Language',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    cv: 'Download CV',
    items: [
      { label: 'Projects', href: '#projects' },
      { label: 'Experience', href: '#experience' },
      { label: 'Stack', href: '#stack' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    themeLabel: {
      light: 'Switch to dark theme',
      dark: 'Switch to light theme',
    },
  },
  hero: {
    eyebrow: 'FULL-STACK SOFTWARE DEVELOPER',
    status: 'Open to opportunities',
    title: 'I build web products end to end for business operations.',
    description:
      'Full-stack developer with a strong Java/Spring Boot focus and experience taking products from requirements and domain modeling through frontend, testing, deployment, and production operations.',
    primaryCta: 'View projects',
    cvCta: 'Download CV',
    githubLabel: 'Felipe Garcia on GitHub',
  },
  proof: [
    { title: '2 systems for clients', description: 'GymPlanner · Decomat' },
    {
      title: 'Production',
      description: 'A product actively used by the client',
    },
    {
      title: 'Core stack',
      description: 'Java / Spring Boot · React / TypeScript · PostgreSQL',
    },
  ],
  selectedWork: {
    label: 'SELECTED WORK',
    title: 'Software built for concrete business needs.',
    description:
      'Two projects that trace my growth as a developer: from commercial systems and business rules to the full-stack delivery of a product now running in production.',
    cta: 'View full case study',
    repository: 'Repository',
    visualLabel: 'Explore the product',
  },
  projects: {
    gymplanner: {
      repositoryLabel: 'View GymPlanner repository on GitHub',
      title: 'GymPlanner',
      lead: 'A full-stack platform for gym operations, developed alongside another developer and actively used by the client.',
      description:
        'Brings students, exercises, tags, training templates, personalized routines, and tracking history together in one web application.',
      highlights: [
        {
          title: 'End-to-end delivery',
          description: 'Discovery, architecture, backend, frontend, and data.',
        },
        {
          title: 'Production engineering',
          description: 'Testing, security, CI/CD, deployment, and monitoring.',
        },
        {
          title: 'Operational value',
          description: 'Routines, history, PDFs, and daily gym workflows.',
        },
      ],
      caseStudy: [
        {
          title: 'Business need',
          body: 'Organize gym management workflows in a web application: student information, exercise catalog, and training planning, with continuity in tracking.',
        },
        {
          title: 'My role',
          body: 'Co-developed alongside another developer. I worked end to end across requirements, domain analysis, technical design, backend, frontend, data, security, testing, PDF generation, and delivery. I also contributed to infrastructure, monitoring, hardening, debugging, and production support.',
        },
        {
          title: 'Product and solution',
          body: 'A platform connecting students, exercises, and templates with personalized routines and history. A React and TypeScript frontend consumes REST APIs from the Java 21 / Spring Boot backend, with PostgreSQL persistence.',
        },
        {
          title: 'Key features',
          items: [
            'Student management and an exercise catalog with tags and filters.',
            'Training templates and personalized routines.',
            'Tracking history and history by exercise.',
            'Routine PDF generation.',
            'Authentication and role-based authorization.',
          ],
        },
        {
          title: 'Engineering',
          body: 'Domain modeling, REST APIs, and persistence with Spring Data JPA / Hibernate. Flyway manages database migrations; React, TypeScript, and Vite structure the product interface.',
        },
        {
          title: 'Testing and security',
          body: 'Backend testing and validation of business workflows, authentication with Spring Security / JWT, and role-based authorization. Security was also part of hardening and production environment review.',
        },
        {
          title: 'Production and delivery',
          body: 'Docker and GitHub Actions support delivery, CI/CD, and cloud deployment. Operations include monitoring, diagnosing issues, fixes, and client support.',
        },
      ],
      outcome:
        'Delivered, deployed, and actively used by the client. A collaborative full-stack development experience spanning business understanding through production support.',
      media: {
        dashboard: [
          'Gym dashboard',
          'Product presentation and its main modules.',
        ],
        responsive: [
          'Mobile dashboard',
          'Presentation of the interface adapted to a mobile screen.',
        ],
        routines: [
          'Routine management',
          'Overview of routines assigned to students.',
        ],
        routine: [
          'Routine detail',
          'Days, blocks, and exercises, with PDF access.',
        ],
        students: [
          'Student management',
          'Student list with search and filters.',
        ],
        history: [
          'Tracking history',
          'Continuity of a student’s cycles and routines.',
        ],
        exerciseHistory: [
          'History by exercise',
          'Review of how and when an exercise was used.',
        ],
        exercises: [
          'Exercise catalog',
          'Exercises organized with tags and filters.',
        ],
        tags: ['Tag configuration', 'Classification of the exercise catalog.'],
      },
      mediaNote:
        'The desktop and mobile dashboards are polished product showcase visuals; they do not necessarily reproduce every pixel of the current deployed version.',
    },
    decomat: {
      repositoryLabel: 'View Decomat repository on GitHub',
      title: 'Commercial and inventory management system',
      lead: 'A full-stack system developed to centralize sales, quotations, materials, inventory, deliveries, and commercial operations for Decomat S.R.L.',
      description:
        'Starting from business requirements, the project evolved into a solution with commercial rules, role-based security, operation traceability, and frontend-backend integration.',
      highlights: [
        {
          title: 'Business logic',
          description:
            'Connected sales, quotations, inventory, and deliveries.',
        },
        {
          title: 'Security & control',
          description: 'Roles, authentication, and auditing.',
        },
        {
          title: 'Domain modeling',
          description: 'Business rules beyond traditional CRUD.',
        },
      ],
      caseStudy: [
        {
          title: 'Business need',
          body: 'The main need was to centralize operations related to sales, quotations, deliveries, customers, suppliers, and materials, incorporating business rules and inventory control into a coherent and maintainable foundation.',
        },
        {
          title: 'Role and context',
          body: 'Design and development of a full-stack solution for Decomat S.R.L., based on concrete company processes and requirements, between March 2025 and March 2026.',
        },
        {
          title: 'Solution delivered',
          body: 'I built a platform with a Java 17 and Spring Boot backend, Spring Security with JWT, JPA/Hibernate and MySQL persistence, Flyway migrations, and a frontend built with HTML, CSS, and JavaScript.',
        },
        {
          title: 'Business rules and workflows',
          items: [
            'Sales and quotation management connected to real commercial logic.',
            'Materials, inventory, and relevant stock operations.',
            'Delivery coordination within the broader operational flow.',
            'Structured customer and supplier management.',
            'Auditing and traceability of operations.',
          ],
        },
        {
          title: 'Architecture',
          body: 'Layered architecture to separate domain, data access, security, and endpoint exposure. Domain modeling focused on commercial operations and inventory control. Clear frontend-backend integration with maintainability in mind.',
        },
        {
          title: 'Security and data',
          body: 'Spring Security with JWT and role-based access control to protect sensitive actions. Persistence with JPA/Hibernate and schema versioning with Flyway for model traceability. Docker Compose provides a reproducible execution environment.',
        },
      ],
      outcome:
        'This experience consolidated how I approach business software: understanding the domain first, modeling real rules, separating responsibilities, and building a clear technical foundation for future evolution.',
      media: {
        sales: [
          'Sales management',
          'Commercial operations with connected states and data.',
        ],
        dashboard: [
          'Commercial dashboard',
          'System overview and primary access points.',
        ],
        materials: [
          'Inventory and materials',
          'Inventory and core commercial operations.',
        ],
        saleDetail: [
          'Sale detail',
          'States, items, payments, and linked deliveries.',
        ],
        delivery: [
          'Delivery detail',
          'Delivered materials and operational tracking.',
        ],
        audit: ['Inventory audit', 'History of inventory movements.'],
      },
    },
  },
  experience: {
    label: 'EXPERIENCE',
    title: 'Experience building and delivering software.',
    entries: [
      {
        period: '2026 — Present',
        title: 'Full-Stack Developer',
        company: 'Freelance',
        description:
          'Building web solutions for clients across the full product lifecycle: requirements, technical design, implementation, testing, deployment, and support.',
        project: 'gymplanner',
        cta: 'GymPlanner',
      },
      {
        period: '2025 — 2026',
        title: 'Java Backend / Full-Stack Developer',
        company: 'Decomat S.R.L.',
        description:
          'Design and development of a commercial and inventory management system based on company processes and requirements.',
        project: 'decomat',
        cta: 'View project',
      },
    ],
  },
  expertise: {
    label: 'TECHNICAL CAPABILITIES',
    title: 'A stack for building the complete product.',
    intro:
      'My strongest depth is in Java/Spring Boot backend development, complemented by applied experience in frontend, data, testing, and delivery.',
  },
  workApproach: {
    label: 'HOW I BUILD',
    title: 'From problem to production.',
    steps: [
      ['Discover', 'Understand processes and constraints.'],
      ['Design', 'Model the domain and architecture.'],
      ['Build', 'Backend, frontend, and data.'],
      ['Validate', 'Testing, security, and review.'],
      ['Deploy', 'CI/CD and infrastructure.'],
      ['Operate', 'Monitor, fix, and evolve.'],
    ],
    closing:
      'I want technical decisions to serve a purpose: clear, maintainable, secure software that is useful for the operation it supports.',
  },
  about: {
    label: 'ABOUT',
    title: 'Software, business, and continuous improvement.',
    paragraphs: [
      'I hold a Higher Technician degree in Software Development and work as a full-stack developer with a strong specialization in Java/Spring Boot backend development.',
      'I am especially interested in systems where technology directly supports an operation: understanding the problem, modeling it carefully, and turning it into maintainable software that can reach production and keep evolving.',
      'I continue building freelance projects while looking to join an engineering team where I can contribute practical experience, deepen my knowledge, and grow alongside other developers.',
    ],
  },
  contact: {
    label: 'CONTACT',
    title: 'Let’s talk.',
    description:
      'I am open to software development opportunities and projects where I can contribute in backend, full-stack development, and business management systems.',
    cta: 'Send email',
    cvCta: 'Download CV',
    githubLabel: 'Felipe Garcia on GitHub',
    linkedinLabel: 'Felipe Garcia on LinkedIn',
    location:
      'Santa Fe, Argentina · Available for remote and hybrid opportunities.',
  },
  footer: {
    role: 'Full-Stack Java/Spring Boot + React Developer',
    top: 'Back to top',
  },
  casePage: {
    label: 'PROJECT CASE STUDY',
    back: 'Back to projects',
    stack: 'Engineering / stack',
    gallery: 'The product on screen',
    outcome: 'Outcome and learning',
    repository: 'View repository',
    other: 'Next case study',
    notFound: 'Project not found.',
  },
  gallery: {
    open: 'Expand image',
    close: 'Close image',
    previous: 'Previous image',
    next: 'Next image',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    reset: 'Reset zoom',
    hint: 'Arrows to navigate · Double-click to zoom · Drag to pan · Escape to close',
  },
};
