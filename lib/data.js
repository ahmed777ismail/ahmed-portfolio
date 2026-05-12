import {
  Boxes,
  Braces,
  Cable,
  Code2,
  Database,
  GitBranch,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Terminal,
  Workflow,
  Zap
} from 'lucide-react';

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Contact', href: '#contact' }
];

export const focusItems = [
  'Spring Boot & Microservices',
  'DevOps & CI/CD',
  'System Design',
  'Scalable Backend Architecture'
];

export const stats = [
  { value: '3+', label: 'Years Learning' },
  { value: '18+', label: 'Projects Built' },
  { value: '40+', label: 'APIs Developed' },
  { value: '20+', label: 'Technologies Used' }
];

export const skillGroups = [
  {
    title: 'Backend',
    icon: ServerCog,
    skills: ['Laravel', 'PHP', 'Java', 'Spring Boot', 'REST APIs', 'JWT']
  },
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'Next.js', 'TailwindCSS', 'API Integration']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Redis']
  },
  {
    title: 'DevOps & Tools',
    icon: GitBranch,
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Git', 'Linux']
  },
  {
    title: 'Architecture',
    icon: Network,
    skills: ['Microservices', 'Clean Architecture', 'Queues', 'System Design']
  }
];

export const projects = [
  {
    name: 'BayToStay',
    tag: 'Booking Platform',
    icon: Boxes,
    description:
      'Airbnb-like booking platform with property management, availability checks, reservation workflows, wallet payments, and admin moderation.',
    stack: ['Laravel', 'MySQL', 'JWT', 'Queues', 'Redis'],
    features: ['Booking lifecycle', 'Host approval flow', 'Wallet transactions', 'Admin analytics']
  },
  {
    name: 'Wallet & Ledger System',
    tag: 'Financial Backend',
    icon: Database,
    description:
      'Double-entry inspired ledger service for credits, debits, locked balances, transaction history, and reconciliation-ready wallet events.',
    stack: ['Laravel', 'PostgreSQL', 'Redis', 'Events'],
    features: ['Atomic transfers', 'Balance snapshots', 'Audit trail', 'Idempotent operations']
  },
  {
    name: 'Real-Time Chat System',
    tag: 'Realtime APIs',
    icon: Cable,
    description:
      'Private-channel messaging backend with conversations, delivery states, notifications, and event-driven message broadcasting.',
    stack: ['Laravel', 'WebSockets', 'Pusher', 'MySQL'],
    features: ['Private channels', 'Read receipts', 'Notification events', 'Conversation APIs']
  },
  {
    name: 'Authentication & Role Management API',
    tag: 'Security',
    icon: LockKeyhole,
    description:
      'Secure identity module with token auth, role permissions, policy-driven access, email verification, and audit-friendly user events.',
    stack: ['Laravel', 'JWT', 'Policies', 'MySQL'],
    features: ['RBAC', 'JWT sessions', 'Permission guards', 'Verification flow']
  },
  {
    name: 'Microservices Demo Project',
    tag: 'Spring Boot',
    icon: Layers3,
    description:
      'Learning-focused distributed system demo with separated services, service boundaries, gateway routing, config concepts, and Dockerized workflows.',
    stack: ['Spring Boot', 'Java', 'Docker', 'REST'],
    features: ['Service boundaries', 'API gateway concepts', 'Docker compose', 'Resilient contracts']
  }
];

export const timeline = [
  {
    title: 'Laravel Backend Developer',
    date: 'Production API Work',
    text: 'Designed REST APIs, authentication flows, booking logic, wallet features, admin workflows, and database-backed business rules.'
  },
  {
    title: 'Backend Team Collaboration',
    date: 'Engineering Practice',
    text: 'Worked with structured Git flows, code reviews, API contracts, issue breakdowns, and delivery-minded backend implementation.'
  },
  {
    title: 'Spring Boot Learning Journey',
    date: 'Current Growth',
    text: 'Building depth in Java, Spring Boot, layered architecture, dependency injection, validation, and production service patterns.'
  },
  {
    title: 'DevOps & Microservices Exploration',
    date: 'Next Level',
    text: 'Studying Docker, CI/CD, queues, distributed systems, observability, and architecture tradeoffs for scalable backend platforms.'
  }
];

export const architectureCards = [
  { title: 'API Design', icon: Braces, text: 'Clear resources, predictable contracts, validation, versioning, and error handling.' },
  { title: 'Scalable Systems', icon: Rocket, text: 'Bounded modules, cache-aware reads, background work, and database-first thinking.' },
  { title: 'Microservices', icon: Network, text: 'Service boundaries, contract discipline, independent deployability, and resilience.' },
  { title: 'Queue Systems', icon: Workflow, text: 'Async jobs for notifications, billing events, heavy tasks, and clean user flows.' },
  { title: 'CI/CD', icon: Zap, text: 'Repeatable checks, automated builds, deployment confidence, and fast feedback.' },
  { title: 'Docker', icon: Terminal, text: 'Portable local environments and production-like service composition.' },
  { title: 'System Design', icon: ShieldCheck, text: 'Tradeoff-driven design across data, latency, reliability, and maintainability.' },
  { title: 'Security', icon: KeyRound, text: 'Auth boundaries, authorization policies, token hygiene, and audit-friendly actions.' }
];

export const contactLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ahmed-ismail-722048242' },
  { label: 'Facebook', href: 'https://facebook.com/AhmedIsmail4865' },
  { label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=01118962513' },
  { label: 'Email', href: 'mailto:hello@example.com' }
];
