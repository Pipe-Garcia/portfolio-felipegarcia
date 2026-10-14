export const pt = {
  meta: {
    description:
      'Desenvolvedor full-stack focado em Java, Spring Boot, React, APIs REST e sistemas de gestão de negócios.',
  },
  navigation: {
    label: 'Navegação principal',
    languageLabel: 'Idioma',
    menu: 'Menu',
    close: 'Fechar',
    skip: 'Pular para o conteúdo',
    cv: 'Baixar CV',
    items: [
      { label: 'Projetos', href: '#projects' },
      { label: 'Experiência', href: '#experience' },
      { label: 'Stack', href: '#stack' },
      { label: 'Sobre mim', href: '#about' },
      { label: 'Contato', href: '#contact' },
    ],
    themeLabel: { light: 'Ativar tema escuro', dark: 'Ativar tema claro' },
  },
  hero: {
    eyebrow: 'FULL-STACK SOFTWARE DEVELOPER',
    status: 'Open to opportunities',
    title: 'Construo produtos web de ponta a ponta para operações de negócio.',
    description:
      'Desenvolvedor full-stack com forte foco em Java/Spring Boot e experiência levando produtos do levantamento de requisitos e modelagem de domínio ao frontend, testes, implantação e operação em produção.',
    primaryCta: 'Ver projetos',
    cvCta: 'Baixar CV',
    githubLabel: 'GitHub de Felipe Garcia',
  },
  proof: [
    { title: '2 sistemas para clientes', description: 'GymPlanner · Decomat' },
    {
      title: 'Produção',
      description: 'Produto utilizado atualmente pelo cliente',
    },
    {
      title: 'Stack principal',
      description: 'Java / Spring Boot · React / TypeScript · PostgreSQL',
    },
  ],
  selectedWork: {
    label: 'SELECTED WORK',
    title: 'Software construído para necessidades concretas de negócio.',
    description:
      'Dois projetos que resumem minha evolução como desenvolvedor: de sistemas comerciais e regras de negócio à entrega full-stack de um produto que já opera em produção.',
    cta: 'Ver caso completo',
    repository: 'Repositório',
    visualLabel: 'Explorar o produto',
  },
  projects: {
    gymplanner: {
      repositoryLabel: 'Ver repositório do GymPlanner no GitHub',
      title: 'GymPlanner',
      lead: 'Plataforma full-stack para a gestão operacional de uma academia, desenvolvida junto a outro desenvolvedor e utilizada atualmente pelo cliente.',
      description:
        'Centraliza alunos, exercícios, etiquetas, modelos de treino, rotinas personalizadas e histórico de acompanhamento em uma única aplicação web.',
      highlights: [
        {
          title: 'End-to-end delivery',
          description: 'Discovery, arquitetura, backend, frontend e dados.',
        },
        {
          title: 'Production engineering',
          description: 'Testes, segurança, CI/CD, implantação e monitoramento.',
        },
        {
          title: 'Operational value',
          description: 'Rotinas, histórico, PDF e fluxos diários da academia.',
        },
      ],
      caseStudy: [
        {
          title: 'Necessidade de negócio',
          body: 'Organizar os fluxos de gestão de uma academia em uma aplicação web: informações dos alunos, catálogo de exercícios e planejamento de treinos, com continuidade no acompanhamento.',
        },
        {
          title: 'Meu papel',
          body: 'Co-desenvolvido junto a outro desenvolvedor. Participei de ponta a ponta: requisitos, análise de domínio, design técnico, backend, frontend, dados, segurança, testes, geração de PDF e entrega. Também trabalhei em infraestrutura, monitoramento, hardening, debugging e suporte de produção.',
        },
        {
          title: 'Produto e solução',
          body: 'Uma plataforma que conecta alunos, exercícios e modelos a rotinas personalizadas e histórico. O frontend em React e TypeScript consome APIs REST do backend Java 21 / Spring Boot, com persistência em PostgreSQL.',
        },
        {
          title: 'Funcionalidades principais',
          items: [
            'Gestão de alunos e catálogo de exercícios com etiquetas e filtros.',
            'Modelos de treino e rotinas personalizadas.',
            'Histórico de acompanhamento e histórico por exercício.',
            'Geração de rotinas em PDF.',
            'Autenticação e autorização por papéis.',
          ],
        },
        {
          title: 'Engenharia',
          body: 'Modelagem de domínio, APIs REST e persistência com Spring Data JPA / Hibernate. Flyway gerencia as migrações do banco; React, TypeScript e Vite organizam a interface do produto.',
        },
        {
          title: 'Testes e segurança',
          body: 'Testes backend e validação dos fluxos de negócio, autenticação com Spring Security / JWT e autorização por papéis. A segurança também fez parte do hardening e da revisão do ambiente de produção.',
        },
        {
          title: 'Produção e entrega',
          body: 'Docker e GitHub Actions apoiam a entrega, CI/CD e implantação na nuvem. A operação inclui monitoramento, diagnóstico de problemas, correções e suporte ao cliente.',
        },
      ],
      outcome:
        'Produto entregue, implantado e utilizado atualmente pelo cliente. Uma experiência colaborativa de desenvolvimento full-stack que abrange o entendimento do negócio e o suporte em produção.',
      media: {
        dashboard: [
          'Dashboard da academia',
          'Apresentação do produto e seus módulos principais.',
        ],
        responsive: [
          'Dashboard mobile',
          'Apresentação da interface adaptada à tela móvel.',
        ],
        routines: [
          'Gestão de rotinas',
          'Visão geral das rotinas atribuídas aos alunos.',
        ],
        routine: [
          'Detalhe de uma rotina',
          'Dias, blocos e exercícios, com acesso ao PDF.',
        ],
        students: ['Gestão de alunos', 'Lista de alunos com busca e filtros.'],
        history: [
          'Histórico de acompanhamento',
          'Continuidade dos ciclos e rotinas de um aluno.',
        ],
        exerciseHistory: [
          'Histórico por exercício',
          'Consulta de como e quando um exercício foi trabalhado.',
        ],
        exercises: [
          'Catálogo de exercícios',
          'Exercícios organizados com etiquetas e filtros.',
        ],
        tags: [
          'Configuração de etiquetas',
          'Classificação do catálogo de exercícios.',
        ],
      },
      mediaNote:
        'Os dashboards desktop e mobile são visuais de apresentação aprimorados do produto; não reproduzem necessariamente cada pixel da versão implantada atual.',
    },
    decomat: {
      repositoryLabel: 'Ver repositório da Decomat no GitHub',
      title: 'Sistema de gestão comercial e estoque',
      lead: 'Sistema full-stack desenvolvido para centralizar vendas, orçamentos, materiais, estoque, entregas e operações comerciais da Decomat S.R.L.',
      description:
        'O projeto partiu dos requisitos do negócio e evoluiu para uma solução com regras comerciais, segurança por papéis, rastreabilidade de operações e integração frontend-backend.',
      highlights: [
        {
          title: 'Business logic',
          description: 'Vendas, orçamentos, estoque e entregas conectados.',
        },
        {
          title: 'Security & control',
          description: 'Papéis, autenticação e auditoria.',
        },
        {
          title: 'Domain modeling',
          description: 'Regras de negócio além de um CRUD tradicional.',
        },
      ],
      caseStudy: [
        {
          title: 'Necessidade de negócio',
          body: 'A necessidade principal era centralizar operações ligadas a vendas, orçamentos, entregas, clientes, fornecedores e materiais, incorporando regras de negócio e controle de estoque em uma base coerente e sustentável.',
        },
        {
          title: 'Papel e contexto',
          body: 'Design e desenvolvimento de uma solução full-stack para a Decomat S.R.L., a partir de processos e requisitos concretos da empresa, entre março de 2025 e março de 2026.',
        },
        {
          title: 'Solução desenvolvida',
          body: 'Construí uma plataforma com backend em Java 17 e Spring Boot, segurança com Spring Security e JWT, persistência com JPA/Hibernate e MySQL, migrações com Flyway e frontend desenvolvido em HTML, CSS e JavaScript.',
        },
        {
          title: 'Regras e fluxos de negócio',
          items: [
            'Gestão de vendas e orçamentos conectada à lógica comercial real.',
            'Administração de materiais, estoque e operações relevantes.',
            'Coordenação de entregas dentro do fluxo operacional.',
            'Gestão estruturada de clientes e fornecedores.',
            'Auditoria e rastreabilidade de operações.',
          ],
        },
        {
          title: 'Arquitetura',
          body: 'Arquitetura em camadas para separar domínio, acesso a dados, segurança e endpoints. Modelagem de domínio voltada a operações comerciais e controle de estoque. Integração clara entre frontend e backend, com foco em manutenção.',
        },
        {
          title: 'Segurança e dados',
          body: 'Spring Security com JWT e controle de acesso por papéis para proteger ações sensíveis. Persistência com JPA/Hibernate e versionamento de esquema com Flyway para manter rastreabilidade do modelo. Docker Compose fornece um ambiente reproduzível.',
        },
      ],
      outcome:
        'Esta experiência consolidou minha forma de trabalhar com software de negócio: entender primeiro o domínio, modelar regras reais, separar responsabilidades e construir uma base técnica clara para sustentar a evolução futura.',
      media: {
        sales: [
          'Gestão de vendas',
          'Operações comerciais com estados e dados conectados.',
        ],
        dashboard: [
          'Dashboard comercial',
          'Visão geral e acessos principais do sistema.',
        ],
        materials: [
          'Estoque e materiais',
          'Inventário e elementos da operação comercial.',
        ],
        saleDetail: [
          'Detalhe de vendas',
          'Estados, itens, pagamentos e entregas associadas.',
        ],
        delivery: [
          'Detalhe de entrega',
          'Materiais entregues e acompanhamento operacional.',
        ],
        audit: [
          'Auditoria de estoque',
          'Histórico de movimentos do inventário.',
        ],
      },
    },
  },
  experience: {
    label: 'EXPERIENCE',
    title: 'Experiência construindo e entregando software.',
    entries: [
      {
        period: '2026 — Atualidade',
        title: 'Full-Stack Developer',
        company: 'Freelance',
        description:
          'Desenvolvimento de soluções web para clientes em todo o ciclo do produto: requisitos, design técnico, implementação, testes, implantação e suporte.',
        project: 'gymplanner',
        cta: 'GymPlanner',
      },
      {
        period: '2025 — 2026',
        title: 'Java Backend / Full-Stack Developer',
        company: 'Decomat S.R.L.',
        description:
          'Design e desenvolvimento de um sistema de gestão comercial e estoque a partir dos processos e requisitos da empresa.',
        project: 'decomat',
        cta: 'Ver projeto',
      },
    ],
  },
  expertise: {
    label: 'TECHNICAL CAPABILITIES',
    title: 'Um stack para construir o produto completo.',
    intro:
      'Minha maior profundidade está no backend com Java/Spring Boot, complementada por experiência aplicada em frontend, dados, testes e entrega.',
  },
  workApproach: {
    label: 'HOW I BUILD',
    title: 'Do problema à produção.',
    steps: [
      ['Discover', 'Entender processos e restrições.'],
      ['Design', 'Modelar domínio e arquitetura.'],
      ['Build', 'Backend, frontend e dados.'],
      ['Validate', 'Testes, segurança e revisão.'],
      ['Deploy', 'CI/CD e infraestrutura.'],
      ['Operate', 'Monitorar, corrigir e evoluir.'],
    ],
    closing:
      'Busco decisões técnicas com propósito: software claro, sustentável, seguro e útil para a operação que precisa atender.',
  },
  about: {
    label: 'ABOUT',
    title: 'Software, negócio e melhoria contínua.',
    paragraphs: [
      'Sou Técnico Superior em Desenvolvimento de Software e trabalho como desenvolvedor full-stack com forte especialização em backend Java/Spring Boot.',
      'Tenho interesse especial em sistemas em que a tecnologia tenha impacto direto sobre uma operação: entender o problema, modelá-lo corretamente e transformá-lo em software sustentável que possa chegar à produção e continuar evoluindo.',
      'Continuo desenvolvendo projetos freelance enquanto busco integrar uma equipe de engenharia onde possa contribuir com experiência prática, aprofundar minha formação e crescer junto a outros desenvolvedores.',
    ],
  },
  contact: {
    label: 'CONTACT',
    title: 'Vamos conversar.',
    description:
      'Estou aberto a oportunidades de desenvolvimento de software e a projetos em que possa contribuir com backend, full-stack e sistemas de gestão.',
    cta: 'Enviar email',
    cvCta: 'Baixar CV',
    githubLabel: 'GitHub de Felipe Garcia',
    linkedinLabel: 'LinkedIn de Felipe Garcia',
    location:
      'Santa Fe, Argentina · Disponível para oportunidades remotas e híbridas.',
  },
  footer: {
    role: 'Full-Stack Java/Spring Boot + React Developer',
    top: 'Voltar ao topo',
  },
  casePage: {
    label: 'PROJECT CASE STUDY',
    back: 'Voltar aos projetos',
    stack: 'Engineering / stack',
    gallery: 'O produto em tela',
    outcome: 'Resultado e aprendizado',
    repository: 'Ver repositório',
    other: 'Próximo caso',
    notFound: 'Projeto não encontrado.',
  },
  gallery: {
    open: 'Ampliar imagem',
    close: 'Fechar imagem',
    previous: 'Imagem anterior',
    next: 'Próxima imagem',
    zoomIn: 'Aproximar',
    zoomOut: 'Afastar',
    reset: 'Redefinir zoom',
    hint: 'Setas para navegar · Clique duplo para zoom · Arraste para mover · Escape para fechar',
  },
};
