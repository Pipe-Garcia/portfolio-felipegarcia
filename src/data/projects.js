// Product facts and media stay independent from translated editorial copy.
const shot = (key, image, width, height) => ({ key, image, width, height });

export const projects = [
  {
    slug: 'gymplanner',
    repository: 'https://github.com/Pipe-Garcia/gym-planner',
    badges: ['PRODUCTION', 'FREELANCE', '2026'],
    previewStack: [
      'Java 21',
      'Spring Boot',
      'PostgreSQL',
      'React',
      'TypeScript',
    ],
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring Security / JWT',
      'JPA / Hibernate',
      'PostgreSQL',
      'Flyway',
      'React',
      'TypeScript',
      'Vite',
      'Docker',
      'GitHub Actions',
      'Backend testing',
    ],
    screenshots: [
      shot('dashboard', '/images/gymplanner/dashboard-desktop.webp', 1766, 891),
      shot('responsive', '/images/gymplanner/dashboard-mobile.webp', 941, 1672),
      shot('routines', '/images/gymplanner/routines.webp', 1672, 941),
      shot('routine', '/images/gymplanner/routine-detail.webp', 1870, 1328),
      shot('students', '/images/gymplanner/students.webp', 1870, 947),
      shot('history', '/images/gymplanner/student-history.webp', 1139, 1227),
      shot(
        'exerciseHistory',
        '/images/gymplanner/exercise-history.webp',
        1116,
        1910,
      ),
      shot('exercises', '/images/gymplanner/exercises.webp', 1870, 1088),
      shot('tags', '/images/gymplanner/exercise-tags.webp', 1870, 949),
    ],
  },
  {
    slug: 'decomat',
    badges: ['CLIENT PROJECT', '2025–2026'],
    repository: 'https://github.com/Pipe-Garcia/store-app',
    previewStack: [
      'Java 17',
      'Spring Boot',
      'MySQL',
      'JWT',
      'Flyway',
      'Docker',
    ],
    stack: [
      'Java 17',
      'Spring Boot',
      'Spring Security / JWT',
      'JPA / Hibernate',
      'MySQL',
      'Flyway',
      'Maven',
      'Docker Compose',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    screenshots: [
      shot('sales', '/images/decomat-sales.webp', 1870, 1101),
      shot('dashboard', '/images/decomat-dashboard.webp', 1870, 4464),
      shot('materials', '/images/decomat-materials.webp', 1870, 947),
      shot('saleDetail', '/images/decomat-sale-detail.webp', 1870, 1235),
      shot('delivery', '/images/decomat-delivery-detail.webp', 1870, 947),
      shot('audit', '/images/decomat-stock.webp', 1870, 973),
    ],
  },
];

export const capabilities = [
  {
    title: 'Backend',
    items: [
      'Java 17 / 21',
      'Spring Boot',
      'Spring Security',
      'REST APIs',
      'JPA / Hibernate',
      'Maven',
    ],
  },
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'React Router'],
  },
  { title: 'Data', items: ['PostgreSQL', 'MySQL', 'Flyway'] },
  {
    title: 'Testing',
    items: ['JUnit 5', 'Mockito', 'MockMvc', 'Testcontainers'],
  },
  {
    title: 'Delivery',
    items: [
      'Docker',
      'GitHub Actions',
      'Render',
      'Vercel / Cloudflare',
      'Neon',
      'Git',
    ],
  },
];
