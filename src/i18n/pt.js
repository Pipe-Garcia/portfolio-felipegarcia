export const pt = {
  meta: {
    locale: 'PT',
  },
  navigation: {
    items: [
      { label: 'Início', href: '#hero' },
      { label: 'Caso em destaque', href: '#case-study' },
      { label: 'Sobre mim', href: '#about' },
      { label: 'Expertise', href: '#expertise' },
      { label: 'Como trabalho', href: '#approach' },
      { label: 'Evolução', href: '#growth' },
      { label: 'Contato', href: '#contact' },
    ],
    languageLabel: 'Idioma',
    themeLabel: {
      light: 'Tema claro',
      dark: 'Tema escuro',
    },
  },
  hero: {
    id: 'hero',
    eyebrow: 'Backend Java Developer',
    name: 'Felipe García',
    title: 'Desenvolvedor Backend Java construindo software para operações reais de negócio',
    description:
      'Desenvolvo soluções com Java e Spring Boot aplicadas a vendas, estoque, entregas, segurança e lógica de negócio, com foco em APIs sustentáveis e arquitetura clara.',
    primaryCta: 'Ver experiência em destaque',
    secondaryCta: 'Contato',
    cvCta: 'Baixar CV',
    panelLabel: 'Resumo profissional',
    highlights: [
      {
        title: 'Experiência aplicada',
        value: 'Decomat S.R.L.',
        description: 'Sistema desenvolvido para uma empresa real, voltado a operações comerciais concretas.',
      },
      {
        title: 'Stack principal',
        value: 'Java · Spring Boot · JWT · MySQL',
        description: 'Backend orientado a negócio, segurança e persistência sustentável.',
      },
      {
        title: 'Foco atual',
        value: 'Testing · CI/CD · React',
        description: 'Aprofundando práticas profissionais para melhorar qualidade e entrega.',
      },
    ],
  },
  caseStudy: {
    id: 'case-study',
    quickFacts: [
      { label: 'Empresa', value: 'Decomat S.R.L.' },
      { label: 'Período', value: 'Mar 2025 – Mar 2026' },
      { label: 'Tipo de sistema', value: 'Gestão comercial, estoque e entregas' },
      { label: 'Escopo', value: 'Vendas, orçamentos, materiais, entregas e segurança por papéis' },
      { label: 'Backend', value: 'Java 17, Spring Boot, JWT, JPA, MySQL' },
    ],
    sectionLabel: 'Experiência em destaque',
    title: 'Sistema de gestão comercial, estoque e entregas para Decomat S.R.L.',
    summary:
      'Uma solução full-stack construída para uma empresa real, focada em organizar operações comerciais, estoque, orçamentos e entregas por meio de regras de negócio concretas e arquitetura sustentável.',
    repo: {
      label: 'Ver repositório do projeto',
      href: 'https://github.com/Pipe-Garcia/store-app',
    },
    context: {
      title: 'Contexto',
      body:
        'O sistema foi desenvolvido para a Decomat S.R.L., uma empresa real com necessidades concretas de gestão comercial e operacional. Esta experiência é apresentada como software aplicado a processos reais de negócio, e não como um exercício isolado.',
    },
    challenge: {
      title: 'Necessidade de negócio',
      body:
        'A necessidade principal era centralizar operações ligadas a vendas, orçamentos, entregas, clientes, fornecedores e materiais, incorporando regras de negócio e controle de estoque em uma base coerente e sustentável.',
    },
    solution: {
      title: 'Solução desenvolvida',
      body:
        'Construí uma plataforma com backend em Java 17 e Spring Boot, segurança com Spring Security e JWT, persistência com JPA/Hibernate e MySQL, migrações com Flyway e frontend desenvolvido em HTML, CSS e JavaScript. O sistema foi pensado para resolver fluxos reais e sustentar evolução técnica com clareza estrutural.',
    },
    architectureTitle: 'Arquitetura e decisões técnicas',
    architecturePoints: [
      'Arquitetura em camadas para separar domínio, acesso a dados, segurança e exposição de endpoints.',
      'Modelagem de domínio voltada a operações comerciais e controle de estoque, evitando um CRUD plano.',
      'Spring Security com JWT e controle de acesso por papéis para proteger ações sensíveis.',
      'Persistência com JPA/Hibernate e versionamento de esquema com Flyway para manter rastreabilidade do modelo.',
      'Docker Compose para facilitar o ambiente de execução e fornecer configuração reproduzível.',
      'Integração clara entre frontend e backend, priorizando manutenção antes de complexidade desnecessária.',
    ],
    featureTitle: 'Principais capacidades',
    features: [
      'Gestão de vendas e orçamentos conectada à lógica comercial real.',
      'Administração de materiais, estoque e operações relevantes para a operação.',
      'Coordenação de entregas dentro do fluxo geral do negócio.',
      'Gestão estruturada de clientes e fornecedores.',
      'Autenticação, autorização e segurança por papéis.',
      'Regras de negócio reais integradas aos fluxos do sistema.',
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
      'HTML, CSS e JavaScript',
    ],
    highlightsTitle: 'Destaques técnicos',
    highlights: [
      'Experiência real construindo software para uma operação comercial concreta.',
      'Abordagem backend-first com foco em segurança, persistência e regras de negócio não triviais.',
      'Integração full-stack conectando frontend e backend em uma mesma solução.',
      'Um caso transferível para contextos em que clareza técnica, evolução e robustez importam.',
    ],
    impactTitle: 'Aprendizado e impacto',
    impact:
      'Esta experiência consolidou minha forma de trabalhar com software de negócio: entender primeiro o domínio, modelar regras reais, separar responsabilidades e construir uma base técnica clara para sustentar evolução futura.',
  },
  about: {
    id: 'about',
    sectionLabel: 'Sobre mim',
    title: 'Backend com foco em estrutura, segurança e software útil',
    paragraphs: [
      'Sou desenvolvedor backend focado em Java e Spring Boot, com interesse particular em APIs REST, lógica de negócio e arquitetura sustentável.',
      'Já construí uma solução full-stack para uma necessidade real de empresa, integrando backend, persistência, segurança e frontend com uma abordagem prática e técnica.',
      'Hoje sigo aprofundando testing, CI/CD, React e práticas profissionais de desenvolvimento para ampliar minha capacidade de entrega sem perder clareza nem critério de design.',
    ],
    sideTitle: 'Foco atual',
    sideItems: [
      'Backend com Java e Spring Boot',
      'APIs com lógica de negócio real',
      'Segurança, persistência e design sustentável',
      'Crescimento em testing, CI/CD e práticas profissionais',
    ],
  },
  expertise: {
    id: 'expertise',
    sectionLabel: 'Core expertise',
    title: 'Áreas em que estou construindo profundidade técnica',
    groups: [
      {
        title: 'Backend engineering',
        items: [
          'Java e Spring Boot',
          'Design e implementação de APIs REST',
          'DTOs, validação e separação de responsabilidades',
          'Arquitetura em camadas',
          'JPA / Hibernate e modelagem de domínio',
        ],
      },
      {
        title: 'Security and persistence',
        items: [
          'Spring Security',
          'JWT e controle de acesso por papéis',
          'MySQL',
          'Flyway para migrações versionadas',
          'Persistência orientada à consistência e sustentabilidade',
        ],
      },
      {
        title: 'Delivery and tooling',
        items: [
          'Maven',
          'Docker Compose',
          'Git',
          'Postman',
          'Fluxos de trabalho orientados à entrega reproduzível',
        ],
      },
      {
        title: 'Frontend integration',
        items: [
          'HTML, CSS e JavaScript',
          'Consumo de APIs e gestão de estados de interface',
          'Integração frontend-backend',
          'Organização modular do frontend',
          'Interfaces simples com foco em clareza funcional',
        ],
      },
    ],
  },
  workApproach: {
    id: 'approach',
    sectionLabel: 'Como trabalho',
    title: 'Critérios que priorizo ao construir software',
    intro:
      'Mais do que acumular tecnologias, me interessa construir software claro, extensível e alinhado a necessidades reais.',
    principles: [
      'Entender primeiro o domínio, as regras de negócio e o fluxo operacional.',
      'Separar responsabilidades para facilitar manutenção, leitura e evolução.',
      'Evitar complexidade desnecessária quando uma solução mais simples resolve melhor.',
      'Pensar segurança desde o design, e não como um complemento tardio.',
      'Construir com visão realista: software extensível, claro e útil para operações concretas.',
    ],
  },
  growth: {
    id: 'growth',
    sectionLabel: 'Growth / current focus',
    title: 'Áreas em que estou aprofundando agora',
    intro:
      'Estou ampliando meu perfil backend com práticas que fortalecem qualidade, deploy e maturidade técnica.',
    items: [
      {
        title: 'React',
        description: 'Para construir interfaces mais sustentáveis, escaláveis e profissionais.',
      },
      {
        title: 'Testing',
        description: 'JUnit e Mockito para reforçar cobertura, confiança e qualidade sobre a lógica.',
      },
      {
        title: 'CI/CD',
        description: 'Automação de integração e entrega para me aproximar de fluxos mais profissionais.',
      },
      {
        title: 'Deploy e ambientes',
        description: 'Docker, execução reproduzível e deploy com melhor critério técnico.',
      },
      {
        title: 'Observabilidade',
        description: 'Monitoramento, rastreabilidade e práticas que melhoram a operação real de sistemas.',
      },
      {
        title: 'Maturidade profissional',
        description: 'Boas práticas de engenharia, documentação e melhoria contínua como backend developer.',
      },
    ],
  },
  contact: {
    id: 'contact',
    sectionLabel: 'Contato',
    title: 'Disponível para oportunidades em que construir com critério faça diferença',
    description:
      'Se quiser conversar sobre backend com Java, APIs, arquitetura sustentável ou uma oportunidade profissional, este portfolio está preparado para abrir essa conversa de forma direta.',
    cta: 'Escreva ou vamos nos conectar',
    cvLabel: 'CV',
    cvCta: 'Baixar CV',
    availability:
      'Aberto a conversas sobre backend Java, APIs, arquitetura e oportunidades de desenvolvimento profissional.',
  },
};