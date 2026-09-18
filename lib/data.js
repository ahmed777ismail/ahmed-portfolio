import {
  Braces,
  CloudCog,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow
} from 'lucide-react';

export const profile = {
  name: 'Ahmed Ismail',
  role: 'Software Engineer | Backend Engineer',
  location: 'Cairo, Egypt',
  email: 'ahmed97ismail97@gmail.com',
  phone: '+20 111 896 2513',
  linkedin: 'https://www.linkedin.com/in/ahmed-ismail-722048242/',
  github: 'https://github.com/ahmed777ismail',
  cv: '/Ahmed-Ismail-Software-Engineer-CV.pdf'
};

export const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' }
];

export const stats = [
  { value: '3+', label: 'Years in production' },
  { value: '87.5%', label: 'Critical API speed gain' },
  { value: '4', label: 'Developers coordinated' },
  { value: '100+', label: 'Public GitHub repositories' }
];

export const capabilities = [
  {
    number: '01',
    title: 'Backend ownership',
    text: 'From API contracts and authentication to booking, payments, wallets, notifications, and production support.'
  },
  {
    number: '02',
    title: 'Performance discipline',
    text: 'Query analysis, indexing, eager loading, pagination, transaction safety, and measured improvements under real load.'
  },
  {
    number: '03',
    title: 'Delivery leadership',
    text: 'Solution design, task breakdown, code review, technical guidance, and hands-on implementation with product teams.'
  }
];

export const skillGroups = [
  {
    title: 'Core backend',
    icon: ServerCog,
    skills: ['PHP', 'Laravel', 'RESTful APIs', 'API Versioning', 'JWT', 'Service Layer', 'Repository Pattern']
  },
  {
    title: 'Data systems',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle', 'Redis', 'Indexing', 'Transactions']
  },
  {
    title: 'Architecture',
    icon: Layers3,
    skills: ['SOLID', 'Design Patterns', 'Authentication', 'Authorization', 'Data Modeling', 'Query Optimization']
  },
  {
    title: 'Delivery',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'GitHub Actions', 'Linux', 'AWS Fundamentals']
  },
  {
    title: 'Across the stack',
    icon: Code2,
    skills: ['JavaScript', 'React', 'HTML', 'CSS', 'API Integration', 'Agile', 'Code Review']
  },
  {
    title: 'Expanding now',
    icon: CloudCog,
    skills: ['Java', 'Spring Boot', 'C#', 'ASP.NET Core', 'Entity Framework Core', 'LINQ', 'Kubernetes']
  }
];

export const experience = [
  {
    role: 'Mid-Level Backend Developer',
    company: 'RunSoft',
    location: 'Cairo, Egypt',
    period: 'Feb 2025 - Present',
    summary:
      'Coordinates backend delivery for a four-developer team while owning major production features and remaining hands-on with implementation.',
    achievements: [
      'Owns backend features for BayToStay across guest, host, and administration workflows.',
      'Designed versioned REST APIs, JWT authentication, roles and permissions, social login, OTP, Firebase notifications, and real-time chat with Pusher.',
      'Built booking, payment, wallet, pricing, availability, search, and host-approval flows with transactional integrity.',
      'Troubleshoots production incidents across queries, deployments, payment callbacks, and third-party integrations.'
    ]
  },
  {
    role: 'Backend Developer',
    company: 'Flex Agency',
    location: 'Cairo, Egypt',
    period: 'Jul 2023 - Jul 2024',
    summary:
      'Developed and maintained Laravel applications and REST APIs for web and mobile products in close collaboration with frontend, mobile, and product teams.',
    achievements: [
      'Translated product requirements into backend features, database structures, integrations, and reusable services.',
      'Contributed throughout planning, implementation, testing, and release.',
      'Reviewed code, resolved defects, and improved maintainability through consistent Git-based workflows.'
    ]
  }
];

export const caseStudies = [
  {
    index: '01',
    label: 'Production platform',
    title: 'BayToStay',
    description:
      'A live rental and booking platform serving thousands of users, property units, and booking records across guest, host, and administration journeys.',
    outcome: 'End-to-end backend ownership',
    details: ['Booking & availability', 'Payments & wallets', 'JWT & permissions', 'Pusher & Firebase'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.runsoft.bay_to_stay&hl=en' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/bay-to-stay/id6743452055' }
    ]
  },
  {
    index: '02',
    label: 'Performance case study',
    title: '4.0s to 0.5s',
    description:
      'Reduced a critical API response time by 87.5% through query restructuring, indexing, eager loading, and pagination.',
    outcome: '87.5% faster response',
    details: ['Query restructuring', 'Database indexing', 'Eager loading', 'Pagination'],
    metric: { before: '4.0s', after: '0.5s' }
  },
  {
    index: '03',
    label: 'B2B commerce',
    title: 'Factories Online',
    description:
      'Contributed backend functionality and APIs to a B2B e-commerce platform in collaboration with product and frontend teams.',
    outcome: 'Cross-functional delivery',
    details: ['Laravel APIs', 'Business workflows', 'Data modeling', 'Frontend collaboration']
  }
];

export const repositories = [
  { name: 'searchUsingScoutAndAlgolia', language: 'Blade', href: 'https://github.com/ahmed777ismail/searchUsingScoutAndAlgolia' },
  { name: 'APIForMobile', language: 'CSS', href: 'https://github.com/ahmed777ismail/APIForMobile' },
  { name: 'mtenancy_custom_multi_db', language: 'PHP', href: 'https://github.com/ahmed777ismail/mtenancy_custom_multi_db' },
  { name: 'mtenancy_custom_single', language: 'PHP', href: 'https://github.com/ahmed777ismail/mtenancy_custom_single' },
  { name: 'angular_ecommerce', language: 'TypeScript', href: 'https://github.com/ahmed777ismail/angular_ecommerce' },
  { name: 'Invoices_Project', language: 'JavaScript', href: 'https://github.com/ahmed777ismail/Invoices_Project' }
];

export const engineeringPrinciples = [
  { title: 'Clear contracts', icon: Braces, text: 'Versioned APIs, predictable resources, validation, and useful failure states.' },
  { title: 'Secure boundaries', icon: LockKeyhole, text: 'Authentication, authorization, roles, permissions, and deliberate access control.' },
  { title: 'Data integrity', icon: ShieldCheck, text: 'Transactions, relationships, idempotent flows, and database-aware business rules.' },
  { title: 'Measured performance', icon: Gauge, text: 'Profile first, then improve queries, access patterns, indexes, and response shape.' },
  { title: 'Maintainable structure', icon: Network, text: 'Service boundaries, SOLID principles, patterns, and readable collaboration surfaces.' },
  { title: 'Repeatable delivery', icon: Workflow, text: 'Code review, Docker, CI/CD, GitHub Actions, and production-minded debugging.' }
];

export const contactLinks = [
  { label: 'LinkedIn', value: 'Professional profile', href: profile.linkedin },
  { label: 'GitHub', value: '@ahmed777ismail', href: profile.github },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'WhatsApp', value: profile.phone, href: 'https://api.whatsapp.com/send?phone=201118962513' }
];
