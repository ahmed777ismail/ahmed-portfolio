export const profile = {
  name: {
    en: 'Ahmed Ismail',
    ar: 'أحمد إسماعيل'
  },
  role: {
    en: 'Full-Stack Web & DevOps Engineer',
    ar: 'مهندس ويب متكامل وديف أوبس'
  },
  titlePrefix: {
    en: 'Software Engineer',
    ar: 'مهندس برمجيات'
  },
  location: {
    en: 'Cairo, Egypt',
    ar: 'القاهرة، مصر'
  },
  status: {
    en: 'Engineering scalable web & cloud systems at RunSoft',
    ar: 'أهندس منصات الويب والبنية السحابية في RunSoft'
  },
  email: 'ahmed97ismail97@gmail.com',
  phone: '+20 111 896 2513',
  whatsappUrl: 'https://wa.me/201118962513',
  linkedin: 'https://www.linkedin.com/in/ahmed-ismail-722048242/',
  github: 'https://github.com/ahmed777ismail',
  cv: '/Ahmed-Ismail-Full-Stack-Backend-DevOps-CV.pdf'
};

export const rotatingRoles = [
  {
    title: { en: 'Full-Stack Web & Platforms', ar: 'تطوير منصات الويب المتكاملة' },
    part1: { en: 'Full-Stack Web & ', ar: 'تطوير الويب و' },
    accent: { en: 'Platforms', ar: 'المنصات الرقمية' },
    desc: {
      en: 'Building high-performance Next.js, React & Laravel web platforms with reactive UI, SSR fluidity, and enterprise-grade APIs.',
      ar: 'بناء منصات ويب فائقة السرعة بـ Next.js و React و Laravel مع واجهات متفاعلة، عرض جانبي خادمي (SSR)، وواجهات API متماسكة.'
    },
    tools: ['Next.js', 'React', 'TypeScript', 'Laravel', 'Tailwind CSS']
  },
  {
    title: { en: 'DevOps & Cloud Delivery', ar: 'ديف أوبس والبنية السحابية' },
    part1: { en: 'DevOps & Cloud ', ar: 'هندسة السحابة و' },
    accent: { en: 'Delivery', ar: 'الأتمتة (DevOps)' },
    desc: {
      en: 'Automating deployment pipelines with Docker, GitHub Actions CI/CD, Linux server hardening, and zero-downtime release engineering.',
      ar: 'أتمتة خطوط النشر والتوزيع بحاويات Docker وخطوط CI/CD عبر GitHub Actions وإدارة خوادم Linux بضمان استقرار العمليات دون انقطاع.'
    },
    tools: ['Docker', 'CI/CD', 'GitHub Actions', 'Linux', 'AWS']
  },
  {
    title: { en: 'Backend Systems & Architecture', ar: 'الأنظمة الخلفية والمعمارية' },
    part1: { en: 'Backend Systems & ', ar: 'الأنظمة الخلفية و' },
    accent: { en: 'Architecture', ar: 'المعمارية النظيفة' },
    desc: {
      en: 'Designing scalable, versioned REST APIs, Clean Architecture, SOLID principles, and enterprise microservices with Laravel and Spring Boot.',
      ar: 'تصميم واجهات REST API معيارية، تطبيق المعمارية النظيفة ومبادئ SOLID، وبناء خدمات مؤسسية قوية عبر Laravel و Spring Boot.'
    },
    tools: ['Laravel', 'PHP', 'Spring Boot', 'Clean Architecture', 'REST APIs']
  },
  {
    title: { en: 'Database Engineering & Performance', ar: 'هندسة قواعد البيانات والأداء' },
    part1: { en: 'Data Systems & ', ar: 'قواعد البيانات و' },
    accent: { en: 'Performance', ar: 'تحسين الأداء' },
    desc: {
      en: 'Eliminating query bottlenecks under high concurrency, cutting critical endpoint latency by 87.5% with composite indexing and Redis caching.',
      ar: 'القضاء على اختناقات قواعد البيانات تحت الضغط العالي، وتسريع استجابة نقاط الاتصال بنسبة 87.5% عبر الفهرسة والتخزين المؤقت بريديس.'
    },
    tools: ['MySQL', 'PostgreSQL', 'Redis', 'Query Tuning', 'ACID Transactions']
  }
];

export const techOrbit = [
  {
    name: 'Next.js',
    category: 'Full Stack',
    color: '#000000',
    desc: { en: 'React 19, SSR, Edge APIs & High Performance', ar: 'إطار الويب المتقدم، العرض الخادمي والأداء العالي' }
  },
  {
    name: 'React',
    category: 'Frontend',
    color: '#61DAFB',
    desc: { en: 'Modern Component Systems & Reactive State', ar: 'واجهات مستخدم تفاعلية وأنظمة مكونات مرنة' }
  },
  {
    name: 'TypeScript',
    category: 'Language',
    color: '#3178C6',
    desc: { en: 'Type-Safe End-to-End Application Code', ar: 'برمجة آمنة ومحكمة عبر طبقات التطبيق' }
  },
  {
    name: 'Docker',
    category: 'DevOps',
    color: '#2496ED',
    desc: { en: 'Containerization, Environments & Compose', ar: 'الحاويات وتوحيد بيئات التطوير والإنتاج' }
  },
  {
    name: 'CI/CD',
    category: 'DevOps',
    color: '#2088FF',
    desc: { en: 'GitHub Actions Automated Testing & Deployments', ar: 'أتمتة الفحص والاختبار والنشر السحابي' }
  },
  {
    name: 'Laravel',
    category: 'Backend',
    color: '#FF2D20',
    desc: { en: 'Core Full-Stack Framework & Eloquent ORM', ar: 'إطار العمل المتكامل وهندسة معالجة البيانات' }
  },
  {
    name: 'PHP',
    category: 'Backend',
    color: '#777BB4',
    desc: { en: 'Modern Object-Oriented PHP 8.3 & Clean Code', ar: 'البرمجة كائنية التوجه وأفضل الممارسات' }
  },
  {
    name: 'MySQL',
    category: 'Database',
    color: '#00758F',
    desc: { en: 'Relational DB, Schema Design & Indexing', ar: 'قواعد البيانات العلائقية والتصميم الأمثل للجداول' }
  },
  {
    name: 'Redis',
    category: 'Caching',
    color: '#DC382D',
    desc: { en: 'High-Throughput In-Memory Caching & Queues', ar: 'التخزين المؤقت عالي السرعة وإدارة طوابير المهام' }
  },
  {
    name: 'Linux',
    category: 'Infrastructure',
    color: '#FCC624',
    desc: { en: 'Server Administration, Hardening & Bash Scripts', ar: 'إدارة خوادم لينكس، الحماية، والأتمتة' }
  }
];

export const navItems = [
  { label: { en: 'What I Build', ar: 'ما أبنيه' }, href: '#services' },
  { label: { en: 'Selected Work', ar: 'الأعمال المختارة' }, href: '#work' },
  { label: { en: 'My Journey', ar: 'المسيرة المهنية' }, href: '#experience' },
  { label: { en: 'Stack & DevOps', ar: 'التقنيات والبنية' }, href: '#stack' }
];

export const stats = [
  {
    value: '3+',
    label: { en: 'Years in Production', ar: 'سنوات خبرة في بيئة الإنتاج' },
    sub: { en: 'Hands-on enterprise systems', ar: 'أنظمة حقيقية تخدم آلاف المستخدمين' }
  },
  {
    value: '87.5%',
    label: { en: 'Critical API Speedup', ar: 'نسبة تسريع الاستجابة للـ API' },
    sub: { en: 'Reduced 4.0s endpoint to 0.5s', ar: 'تقليص وقت الاستجابة من 4 ثوانٍ إلى نصف ثانية' }
  },
  {
    value: '4',
    label: { en: 'Developers Coordinated', ar: 'مطوّرين تحت التنسيق الفني' },
    sub: { en: 'Delivery leadership at RunSoft', ar: 'قيادة تسليم المهام ومراجعة الأكواد' }
  },
  {
    value: '100+',
    label: { en: 'Public Repositories', ar: 'مستودع كود مفتوح المصدر' },
    sub: { en: 'Continuous open-source work', ar: 'مشاريع وتجارب برمجية مستمرة' }
  }
];

export const services = [
  {
    number: '01 / 05',
    title: { en: 'Full-Stack Web & SaaS Platforms', ar: 'تطوير منصات الويب وتطبيقات الساس' },
    subtitle: { en: 'Next.js 15, React 19, TypeScript, Laravel & REST APIs', ar: 'نكست، ريآكت، تايب سكريبت، لارافيل والواجهات المعيارية' },
    description: {
      en: 'Architecting modern full-stack web applications and SaaS platforms from the ground up. Delivering lightning-fast user interfaces with SSR/SSG, robust reactive state management, seamless client-server synchronization, and resilient REST/GraphQL APIs.',
      ar: 'هندسة منصات الويب الحديثة وتطبيقات SaaS من الأساس. توفير واجهات فائقة السرعة مع العرض الخادمي (SSR)، إدارة متقدمة للحالة، ومزامنة سلسة بين الواجهات والأنظمة الخلفية.'
    },
    deliverables: [
      { en: 'Modern responsive Next.js & React frontend with Tailwind CSS', ar: 'واجهات حديثة متجاوبة بتقنيات Next.js و React و Tailwind' },
      { en: 'Production-ready REST APIs with OpenAPI/Swagger specifications', ar: 'واجهات برمجية موثوقة متوافقة مع معايير OpenAPI' },
      { en: 'Stateless JWT & Session authentication with role-based policies', ar: 'أنظمة مصادقة مشفرة وصلاحيات مستخدمين متعددة المستويات' },
      { en: 'SEO optimization, sub-second Core Web Vitals, and Edge caching', ar: 'تحسين محركات البحث وسرعات تحميل فائقة على السيرفرات السحابية' }
    ],
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Laravel', 'REST APIs']
  },
  {
    number: '02 / 05',
    title: { en: 'DevOps, Docker & Automated CI/CD', ar: 'ديف أوبس والحاويات وخطوط النشر المؤتمتة' },
    subtitle: { en: 'Docker Compose, GitHub Actions, Linux Servers & Zero-Downtime', ar: 'دوكر، خطوط GitHub Actions، خوادم لينكس، والنشر المستمر' },
    description: {
      en: 'Streamlining software delivery cycles from local dev to cloud production. Building reproducible Docker container stacks, automated GitHub Actions pipelines for linting, testing, and automated deployment, and managing resilient Linux production servers.',
      ar: 'تسريع دورات تسليم البرمجيات من بيئة التطوير إلى السحابة. إنشاء بيئات Docker متطابقة، وأتمتة خطوط الفحص والنشر عبر GitHub Actions، وإدارة وتأمين خوادم Linux الإنتاجية.'
    },
    deliverables: [
      { en: 'Automated CI/CD pipelines deploying code on git push', ar: 'خطوط نشر مؤتمتة بالكامل فور رفع الكود على GitHub' },
      { en: 'Docker containerization ensuring dev-to-prod environment parity', ar: 'حاويات Docker تضمن تطابقاً تاماً بين بيئات العمل' },
      { en: 'Linux server administration, SSL provisioning, cron jobs, and firewall', ar: 'إدارة خوادم لينكس، شهادات الأمان SSL، وجدران الحماية' },
      { en: 'Zero-downtime releases, rollback strategies, and log monitoring', ar: 'تحديثات مستمرة دون انقطاع الخدمة ومراقبة حية للسجلات' }
    ],
    tech: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'Linux (Ubuntu)', 'Nginx']
  },
  {
    number: '03 / 05',
    title: { en: 'Backend Systems & Clean Architecture', ar: 'الأنظمة الخلفية والمعمارية النظيفة' },
    subtitle: { en: 'PHP, Laravel, Service Layer, Repository Pattern & SOLID Principles', ar: 'لارافيل، فصل طبقات الأعمال، نمط المستودعات، ومبادئ SOLID' },
    description: {
      en: 'Structuring software that teams can understand, scale, and maintain cleanly. Isolating domain logic from HTTP controllers, applying repository patterns for clean storage abstraction, and implementing transactional business workflows.',
      ar: 'بناء هياكل برمجية نظيفة يسهل فهمها وصيانتها مع نمو حجم المشاريع. عزل قواعد الأعمال المعقدة في خدمات مستقلة، وتطبيق أنماط المستودعات لعزل قواعد البيانات، وضمان اتساق العمليات.'
    },
    deliverables: [
      { en: 'Decoupled domain services separating business rules from controllers', ar: 'وحدات تحكم رشيقة تعتمد على خدمات نطاق منفصلة ومختبرة' },
      { en: 'Strict SOLID principles reducing coupling and architectural debt', ar: 'تطبيق مبادئ SOLID لتقليل التشابك وضمان سهولة التوسع' },
      { en: 'Idempotent transaction workflows preventing duplicate actions', ar: 'معاملات آمنة تمنع تكرار الإجراءات أو حدوث أخطاء تشغيلية' },
      { en: 'Real-time WebSocket events with Pusher & Firebase push notifications', ar: 'تكاملات فورية عبر WebSockets وإشعارات Firebase' }
    ],
    tech: ['Clean Architecture', 'SOLID', 'Laravel', 'Service Pattern', 'Pusher', 'Firebase']
  },
  {
    number: '04 / 05',
    title: { en: 'Database Engineering & Sub-Second Optimization', ar: 'هندسة قواعد البيانات وتسريع الأداء' },
    subtitle: { en: 'MySQL, PostgreSQL, Redis Caching & Query Restructuring', ar: 'ماي إس كيو إل، بوستجرس، كاش ريديس، وإعادة هيكلة الاستعلامات' },
    description: {
      en: 'Scientifically diagnosing and eliminating database bottlenecks under heavy concurrent load. Proficient in query execution plan analysis (EXPLAIN), composite B-Tree indexing, eager loading strategies to eliminate N+1 overhead, and Redis caching.',
      ar: 'تشخيص اختناقات قواعد البيانات علمياً وحلها تحت ضغط الزيارات العالي. متخصص في تحليل خطط التنفيذ (EXPLAIN)، الفهرسة المركبة، التخلص من مشاكل N+1، وطبقات الكاش بـ Redis.'
    },
    deliverables: [
      { en: '87.5% reduction in high-traffic endpoint response time (4.0s ➔ 0.5s)', ar: 'تسريع استجابة نقاط الاتصال بنسبة 87.5% (من 4 ثوانٍ إلى نصف ثانية)' },
      { en: 'Multi-layer Redis caching with intelligent cache invalidation keys', ar: 'تخزين مؤقت ذكي عبر Redis مع تجديد آلي للبيانات' },
      { en: 'ACID transactional integrity for financial and booking records', ar: 'معاملات ذرية محكمة (ACID) لضمان سلامة العمليات المالية' },
      { en: 'Cursor pagination and schema indexing for datasets exceeding 100k+ rows', ar: 'ترقيم متسلسل وفهرسة متقدمة للجداول الضخمة' }
    ],
    tech: ['MySQL', 'PostgreSQL', 'Redis', 'Query Optimization', 'Indexing', 'ACID']
  },
  {
    number: '05 / 05',
    title: { en: 'Enterprise Microservices & Distributed Horizons', ar: 'الأنظمة المؤسسية والخدمات الموزعة' },
    subtitle: { en: 'Java Spring Boot, C# .NET Core, Multi-Tenancy & Scalability', ar: 'سبرينج بوت، سي شارب دوت نت، والأنظمة متعددة المستأجرين' },
    description: {
      en: 'Expanding architectural capabilities across enterprise Java Spring Boot and .NET microservices. Implementing multi-tenant SaaS database partitioning (single-db and multi-db strategies) and modular distributed services.',
      ar: 'توسيع القدرات الهندسية نحو المنظومات المؤسسية كـ Java Spring Boot و .NET Core. تطبيق حلول عزل بيانات المستأجرين (Multi-Tenancy) والخدمات المصغرة الموزعة.'
    },
    deliverables: [
      { en: 'Java Spring Boot REST microservices with Spring Data JPA & Security', ar: 'خدمات مصغرة مستقلة عبر Java Spring Boot و Spring Data' },
      { en: 'Multi-tenancy isolation models: database-per-tenant & shared schema', ar: 'نماذج متقدمة لعزل بيانات عملاء SaaS بمرونة تامة' },
      { en: 'C# ASP.NET Core API integrations with Entity Framework Core', ar: 'بناء واجهات عالية الكفاءة عبر C# و ASP.NET Core' },
      { en: 'Distributed event-driven messaging and microservice topology', ar: 'معمارية معتمدة على الرسائل والأحداث وقابلة للتوسع السحابي' }
    ],
    tech: ['Java', 'Spring Boot', 'C#', '.NET Core', 'Multi-Tenancy', 'Microservices']
  }
];

export const caseStudies = [
  {
    index: '01',
    badge: { en: 'Flagship Full-Stack Platform', ar: 'منصة متكاملة رائدة' },
    title: 'BayToStay',
    tagline: {
      en: 'A live property rental and reservation platform serving thousands of guests, hosts, and administrative operators across the region.',
      ar: 'منصة حية لحجز وتأجير العقارات والوحدات الفندقية تخدم آلاف الضيوف والمضيفين وفريق الإدارة في المنطقة.'
    },
    outcome: { en: 'End-to-end engineering ownership & 99.9% uptime', ar: 'ملكية هندسية شاملة للنظام الخلفي واستقرار 99.9%' },
    highlights: [
      { en: 'Multi-tier booking engine with dynamic seasonal pricing, calendar availability, and automated confirmation', ar: 'محرك حجز متقدم مع تسعير ديناميكي وتوافر لحظي وتأكيد آلي' },
      { en: 'Complete financial wallet ecosystem: balances, transactions, deposit holds, and host payouts', ar: 'نظام محفظة مالية متكامل مع إيداعات وسحوبات المضيفين' },
      { en: 'Real-time two-way messaging using Pusher WebSockets and mobile push alerts via Firebase FCM', ar: 'محادثة فورية مباشرة عبر Pusher وإشعارات Firebase' },
      { en: 'Fine-grained RBAC permission matrix for guests, verified hosts, and operational super-admins', ar: 'مصفوفة صلاحيات دقيقة للضيوف والملاك والمشرفين' }
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Redis', 'JWT Auth', 'Pusher', 'Firebase FCM', 'RESTful API', 'Docker'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.runsoft.bay_to_stay&hl=en', store: 'play' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/bay-to-stay/id6743452055', store: 'apple' }
    ],
    metrics: [
      { label: { en: 'Automated Bookings', ar: 'حجوزات مؤتمتة' }, value: '100% Live' },
      { label: { en: 'Production Uptime', ar: 'جاهزية السيرفر' }, value: '99.9%' },
      { label: { en: 'Transactions', ar: 'المعاملات المالية' }, value: 'ACID Guaranteed' }
    ]
  },
  {
    index: '02',
    badge: { en: 'DevOps & Performance Case Study', ar: 'دراسة حالة: هندسة الأداء وديف أوبس' },
    title: '4.0s ➔ 0.5s API Optimization',
    tagline: {
      en: 'Drastically eliminated database bottlenecks on high-traffic booking catalog endpoints, cutting response latency by 87.5% under peak traffic.',
      ar: 'القضاء الجذري على بطء استجابة الاستعلامات في نقاط الاتصال عالية الزيارات، وتخفيض زمن الاستجابة بنسبة 87.5% في أوقات الذروة.'
    },
    outcome: { en: '87.5% speed increase & 7x server throughput capacity', ar: 'تسريع الاستجابة بنسبة 87.5% ومضاعفة استيعاب السيرفر 7 أضعاف' },
    highlights: [
      { en: 'Restructured deeply nested Eloquent queries into lean, optimized SQL subqueries', ar: 'إعادة صياغة استعلامات Eloquent المعقدة إلى SQL فائق الكفاءة' },
      { en: 'Applied composite B-Tree indexes on high-cardinality foreign keys and date filtering fields', ar: 'بناء فهارس مركبة على المفاتيح الأجنبية وتواريخ الحجوزات' },
      { en: 'Resolved N+1 relation overhead with targeted eager-loading constraints', ar: 'حل مشكلة N+1 بالكامل عبر التحميل المسبق المشروط' },
      { en: 'Engineered cursor-based pagination and cached aggregated filter facets into Redis', ar: 'تطبيق الترقيم المتسلسل والتخزين المؤقت عبر Redis' }
    ],
    stack: ['Query Optimization', 'MySQL Indexing', 'Redis', 'Laravel', 'Docker', 'Database Profiling'],
    metricDisplay: {
      before: '4.0s',
      after: '0.5s',
      gain: '87.5%'
    },
    metrics: [
      { label: { en: 'Initial Latency', ar: 'الزمن الأولي' }, value: '4.0s' },
      { label: { en: 'Optimized Latency', ar: 'الزمن بعد التحسين' }, value: '0.5s' },
      { label: { en: 'Server Load', ar: 'توفير الموارد' }, value: '-70% CPU' }
    ]
  },
  {
    index: '03',
    badge: { en: 'Full-Stack B2B Commerce Platform', ar: 'منصة تجارة إلكترونية B2B متكاملة' },
    title: 'Factories Online',
    tagline: {
      en: 'Engineered web business workflows, multi-vendor product catalogs, and quotation request pipelines for a large-scale B2B industrial marketplace.',
      ar: 'هندسة مسارات الأعمال، كتالوجات المنتجات متعددة الموردين، ودورات طلبات عروض الأسعار لسوق صناعي ضخم.'
    },
    outcome: { en: 'Cross-functional delivery across React web & mobile clients', ar: 'تسليم متكامل عبر واجهات الويب وتطبيقات الهاتف' },
    highlights: [
      { en: 'Modular inventory and catalog schema with dynamic custom attributes per factory category', ar: 'قواعد بيانات مرنة لكتالوجات المصانع وخصائص المنتجات' },
      { en: 'RFQ (Request for Quote) negotiations engine connecting buyers directly with verified plants', ar: 'نظام متقدم لإدارة وتفاوض عروض الأسعار والصفقات' },
      { en: 'Robust role hierarchy for corporate buyers, manufacturing partners, and system auditors', ar: 'تسلسل هرمي للصلاحيات للشركات والمصانع والمشرفين' },
      { en: 'Clean API endpoints consumed seamlessly by React web and mobile applications', ar: 'واجهات برمجية نظيفة تخدم منصة الويب وتطبيقات الجوال' }
    ],
    stack: ['React', 'Laravel', 'MySQL', 'REST APIs', 'Data Modeling', 'B2B Workflows']
  },
  {
    index: '04',
    badge: { en: 'Enterprise SaaS Architecture', ar: 'معمارية سحابية للساس' },
    title: 'Multi-Tenancy Engine (Single & Multi-DB)',
    tagline: {
      en: 'Open-source reference implementations showcasing rigorous tenant isolation strategies for SaaS applications in Laravel.',
      ar: 'نماذج معمارية مفتوحة المصدر تطبق استراتيجيات عزل بيانات المستأجرين لتطبيقات الساس (SaaS) في بيئة لارافيل.'
    },
    outcome: { en: 'Production-ready database partitioning & dynamic connection switching', ar: 'عزل تام للبيانات مع تبديل ديناميكي للاتصالات' },
    highlights: [
      { en: 'Database-per-tenant paradigm with automated tenant migration dispatchers', ar: 'نمط قاعدة بيانات مستقلة لكل مستأجر مع ترحيل آلي' },
      { en: 'Shared-database tenant filtering with global query scopes and tenant middleware', ar: 'نمط قاعدة بيانات مشتركة مع عزل برمجي صارم' },
      { en: 'Zero data-leak guarantee through automated tenant context identification', ar: 'ضمان تام لعدم تسرب البيانات بين الحسابات' }
    ],
    stack: ['PHP', 'Laravel', 'Multi-Tenancy', 'Database Partitioning', 'Architecture'],
    links: [
      { label: 'Multi-DB GitHub', href: 'https://github.com/ahmed777ismail/mtenancy_custom_multi_db' },
      { label: 'Single-DB GitHub', href: 'https://github.com/ahmed777ismail/mtenancy_custom_single' }
    ]
  },
  {
    index: '05',
    badge: { en: 'Search & Data Synchronization', ar: 'محرك بحث ومزامنة بيانات' },
    title: 'Scout & Algolia Low-Latency Search',
    tagline: {
      en: 'High-throughput search indexing solution synchronizing model state changes with Algolia cloud search engine in real time.',
      ar: 'حل بحث فائق السرعة يربط نماذج البيانات بمحرك Algolia السحابي مع مزامنة فورية للتغييرات.'
    },
    outcome: { en: 'Sub-50ms search latency across extensive catalog datasets', ar: 'استجابة بحث أقل من 50 ميلي ثانية عبر آلاف السجلات' },
    highlights: [
      { en: 'Automated queue-backed indexing preventing database blocking on write operations', ar: 'فهرسة مؤتمتة عبر طوابير الخلفية لعدم إبطاء الحفظ' },
      { en: 'Typo-tolerant multi-attribute matching with faceted aggregation filters', ar: 'بحث ذكي يتسامح مع الأخطاء الإملائية وتصنيف الفئات' }
    ],
    stack: ['Laravel Scout', 'Algolia', 'PHP', 'Queue Workers'],
    links: [
      { label: 'View Repository', href: 'https://github.com/ahmed777ismail/searchUsingScoutAndAlgolia' }
    ]
  }
];

export const experience = [
  {
    role: { en: 'Full-Stack Web & DevOps Lead', ar: 'قائد تطوير ويب متكامل وديف أوبس' },
    company: 'RunSoft',
    location: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
    period: { en: 'Feb 2025 - Present', ar: 'فبراير 2025 - حتى الآن' },
    yearTag: '2025 - 2026',
    status: { en: 'Current Role', ar: 'المنصب الحالي' },
    summary: {
      en: 'Coordinates full-stack web and backend delivery for a 4-developer engineering team, managing Dockerized cloud environments, CI/CD automation, and high-availability production architecture.',
      ar: 'قيادة وتنسيق التطوير المتكامل (Full-Stack) والأنظمة الخلفية لفريق مكوّن من 4 مطورين، وإدارة بيئات Docker السحابية وأتمتة CI/CD والمعمارية الإنتاجية عالية الاستقرار.'
    },
    achievements: [
      { en: 'Directs full-stack architecture for BayToStay across web applications, APIs, wallet systems, and cloud deployments.', ar: 'قيادة البنية التحتية لمنصة BayToStay ومحرك الحجوزات والمحافظ المالية للمضيفين وتوزيعها السحابي.' },
      { en: 'Built automated GitHub Actions CI/CD pipelines for automated testing, linting, Docker builds, and zero-downtime server updates.', ar: 'بناء خطوط CI/CD مؤتمتة عبر GitHub Actions للفحص وبناء الحاويات والنشر السلس دون انقطاع.' },
      { en: 'Resolved complex production incidents spanning database locks, race conditions in payments, and third-party webhook failures.', ar: 'حل وتدارك حوادث الإنتاج المعقدة كأقفال قواعد البيانات وتنافسية المعاملات المالية.' },
      { en: 'Mentors developers through rigorous pull request reviews, Clean Architecture principles, and Docker standardization.', ar: 'توجيه المطورين من خلال المراجعات الدقيقة للكود وتطبيق أفضل معايير SOLID وتوحيد بيئات العمل بالحاويات.' }
    ],
    skills: ['Next.js', 'React', 'Laravel', 'Docker', 'CI/CD', 'GitHub Actions', 'MySQL', 'Redis', 'Linux']
  },
  {
    role: { en: 'Full-Stack / Backend Developer', ar: 'مطور ويب وأنظمة خلفية' },
    company: 'Flex Agency',
    location: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
    period: { en: 'Jul 2023 - Jul 2024', ar: 'يوليو 2023 - يوليو 2024' },
    yearTag: '2023 - 2024',
    status: { en: 'Completed', ar: 'مكتمل' },
    summary: {
      en: 'Developed and scaled full-stack web products, Laravel backends, and RESTful APIs in tight coordination with cross-functional design and mobile teams.',
      ar: 'تطوير وتوسيع منصات الويب وتطبيقات Laravel وواجهات REST البرمجية بالتنسيق الوثيق مع فرق المنتجات والتصميم.'
    },
    achievements: [
      { en: 'Converted business specifications into performant database structures, clean service patterns, and responsive web user interfaces.', ar: 'تحويل المتطلبات التشغيلية إلى هياكل بيانات عالية الكفاءة وخدمات معيارية وواجهات ويب متجاوبة.' },
      { en: 'Collaborated across the full software lifecycle from technical sprint planning to staging releases and production deployment.', ar: 'المشاركة الفعالة في كافة مراحل دورة حياة البرمجيات من التخطيط حتى النشر النهائي.' },
      { en: 'Standardized team Git branches, reviewed pull requests, and eliminated architectural debt to maintain sustainable velocity.', ar: 'توحيد مسارات Git ومراجعة طلبات السحب (PRs) وتقليل الديون البرمجية لضمان سرعة التسليم.' }
    ],
    skills: ['JavaScript', 'React', 'PHP', 'Laravel', 'MySQL', 'Docker Basics', 'Git Flow']
  }
];

export const processPhases = [
  {
    phase: 'Phase 01',
    step: '01',
    title: { en: 'Requirements & API Contract Design', ar: 'تحليل المتطلبات وتصميم عقود الـ API' },
    focus: { en: 'Contract-First Architecture', ar: 'التصميم المرتكز على المعايير' },
    description: {
      en: 'Deconstructing business workflows into unambiguous API contracts, request/response JSON schemas, and state machine transitions before code is written.',
      ar: 'تحليل المتطلبات بدقة وصياغة عقود برمجية واضحة ومخططات JSON ومسارات الحالات الممكنة قبل البدء في كتابة الكود.'
    },
    deliverable: { en: 'Versioned OpenAPI spec, entity state machines, error catalog', ar: 'توثيق معايير الـ API، مخططات الحالات، وقاموس الأخطاء' }
  },
  {
    phase: 'Phase 02',
    step: '02',
    title: { en: 'Database Modeling & Indexing Strategy', ar: 'نمذجة البيانات وهندسة الفهرسة' },
    focus: { en: 'Schema Normalization & Integrity', ar: 'سلامة الجداول والاتساق' },
    description: {
      en: 'Crafting normalized relational schemas with deliberate foreign key constraints, composite index placement, transaction isolation levels, and Redis caching topologies.',
      ar: 'تصميم جداول البيانات العلائقية مع مفاتيح أجنبية محكمة، فهارس مركبة، ومستويات عزل المعاملات، وتحديد استراتيجية التخزين المؤقت.'
    },
    deliverable: { en: 'Optimized schema migration scripts, index plans, seed data', ar: 'ملفات ترحيل الجداول، خطط الفهرسة، والبيانات التجريبية' }
  },
  {
    phase: 'Phase 03',
    step: '03',
    title: { en: 'Clean Implementation & Domain Isolation', ar: 'التطوير البرمجي وعزل طبقات الأعمال' },
    focus: { en: 'SOLID & Service Layer Pattern', ar: 'المعمارية النظيفة ومبادئ SOLID' },
    description: {
      en: 'Building domain services decoupled from HTTP controllers, applying repository patterns for storage abstraction, and implementing idempotent transactional operations.',
      ar: 'بناء خدمات الأعمال المستقلة عن وحدات التحكم، وتطبيق أنماط المستودعات لعزل قواعد البيانات، وضمان عدم تكرار الإجراءات الحساسة.'
    },
    deliverable: { en: 'Thin controllers, reusable domain services, unit & integration tests', ar: 'وحدات تحكم مرنة، خدمات قابلة لإعادة الاستخدام، واختبارات فحص' }
  },
  {
    phase: 'Phase 04',
    step: '04',
    title: { en: 'Performance Profiling & Bottleneck Elimination', ar: 'فحص الأداء والتخلص من الاختناقات' },
    focus: { en: 'Sub-Second Latency Guarantee', ar: 'ضمان الاستجابة اللحظية' },
    description: {
      en: 'Running automated query profiling to hunt down N+1 anomalies, restructuring slow joins into efficient queries, configuring eager loads, and fine-tuning Redis TTLs.',
      ar: 'تحليل الاستعلامات لاكتشاف مشاكل N+1، وتعديل الربط البطيء بين الجداول، وضبط التحميل المسبق، وتفعيل التخزين المؤقت الذكي.'
    },
    deliverable: { en: 'Slow query log audit, benchmark report, sub-second SLAs', ar: 'تقرير قياس الأداء، تحليل الاستعلامات، وأزمنة استجابة سريعة' }
  },
  {
    phase: 'Phase 05',
    step: '05',
    title: { en: 'Dockerized Release, CI/CD & Observability', ar: 'النشر المؤتمت والمراقبة الحية' },
    focus: { en: 'Predictable Production Operations', ar: 'استقرار بيئة الإنتاج' },
    description: {
      en: 'Packaging applications into immutable Docker containers, configuring automated GitHub Actions pipelines, provisioning Linux servers, and setting up error tracking.',
      ar: 'تغليف التطبيقات في حاويات Docker متطابقة، وأتمتة الفحص والنشر عبر GitHub Actions، وتهيئة خوادم لينكس وأدوات مراقبة الأخطاء.'
    },
    deliverable: { en: 'Automated CI/CD pipeline, Docker compose orchestration, production runbooks', ar: 'خط أتمتة كامل، إعدادات الحاويات، وإرشادات التشغيل' }
  }
];

export const skillGroups = [
  {
    title: { en: 'Full-Stack Web', ar: 'تطوير الويب المتكامل' },
    skills: ['Next.js 15', 'React 19', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'REST API Integration', 'State Management']
  },
  {
    title: { en: 'DevOps & Cloud Delivery', ar: 'ديف أوبس والبنية السحابية' },
    skills: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD Pipelines', 'Linux (Ubuntu/Debian)', 'Bash Scripting', 'Nginx', 'Git / GitHub Flow']
  },
  {
    title: { en: 'Core Backend Engineering', ar: 'الأنظمة الخلفية الأساسية' },
    skills: ['PHP 8.3+', 'Laravel 11.x', 'RESTful APIs', 'API Versioning', 'JWT Authentication', 'Service Layer', 'Repository Pattern', 'OOP']
  },
  {
    title: { en: 'Databases & Performance', ar: 'قواعد البيانات وتحسين الأداء' },
    skills: ['MySQL', 'PostgreSQL', 'Redis Caching', 'Query Optimization', 'Composite Indexing', 'ACID Transactions', 'Data Modeling', 'Database Migration']
  },
  {
    title: { en: 'Architecture & Security', ar: 'المعمارية والأمان' },
    skills: ['Clean Architecture', 'SOLID Principles', 'Design Patterns', 'Multi-Tenancy', 'RBAC Authorization', 'Stateless Design', 'Webhooks']
  },
  {
    title: { en: 'Expanding Horizons', ar: 'الأنظمة المؤسسية والموزعة' },
    skills: ['Java', 'Spring Boot', 'Spring Data JPA', 'C#', 'ASP.NET Core', 'Entity Framework Core', 'Microservices Architecture']
  }
];

export const repositories = [
  {
    name: 'searchUsingScoutAndAlgolia',
    language: 'PHP',
    stars: 'Featured',
    description: {
      en: 'Real-time search indexing and typo-tolerant querying in Laravel with Algolia driver.',
      ar: 'فهرسة البحث اللحظي والتسامح مع الأخطاء الإملائية في لارافيل عبر محرك Algolia.'
    },
    href: 'https://github.com/ahmed777ismail/searchUsingScoutAndAlgolia'
  },
  {
    name: 'mtenancy_custom_multi_db',
    language: 'PHP',
    stars: 'Architecture',
    description: {
      en: 'Database-per-tenant multi-tenancy implementation with automated schema switching in Laravel.',
      ar: 'تطبيق نمط قاعدة بيانات مستقلة لكل مستأجر مع تبديل ديناميكي للاتصالات.'
    },
    href: 'https://github.com/ahmed777ismail/mtenancy_custom_multi_db'
  },
  {
    name: 'mtenancy_custom_single',
    language: 'PHP',
    stars: 'SaaS',
    description: {
      en: 'Shared database multi-tenancy with global query scopes and tenant identification middleware.',
      ar: 'نمط المستأجرين المشترك في قاعدة بيانات واحدة مع عزل برمجي محكم.'
    },
    href: 'https://github.com/ahmed777ismail/mtenancy_custom_single'
  },
  {
    name: 'APIForMobile',
    language: 'PHP',
    stars: 'Production',
    description: {
      en: 'Production-ready mobile API boilerplate with JWT authentication, OTP, and push notifications.',
      ar: 'هيكل جاهز لخدمة تطبيقات الهاتف مع مصادقة JWT وتوثيق OTP وإشعارات فورية.'
    },
    href: 'https://github.com/ahmed777ismail/APIForMobile'
  },
  {
    name: 'angular_ecommerce',
    language: 'TypeScript',
    stars: 'Full Stack',
    description: {
      en: 'Modern e-commerce frontend with reactive state, checkout carts, and REST API integration.',
      ar: 'واجهة متجر إلكتروني حديثة مع إدارة حالة متفاعلة وتكامل مع واجهات الـ REST.'
    },
    href: 'https://github.com/ahmed777ismail/angular_ecommerce'
  },
  {
    name: 'Invoices_Project',
    language: 'PHP',
    stars: 'Enterprise',
    description: {
      en: 'Complete financial invoicing management system with automated tax computation and reports.',
      ar: 'نظام متكامل لإدارة الفواتير والتقارير المالية وحساب الضرائب آلياً.'
    },
    href: 'https://github.com/ahmed777ismail/Invoices_Project'
  }
];

export const faqs = [
  {
    question: {
      en: 'What full-stack web and DevOps technologies do you specialize in?',
      ar: 'ما هي تقنيات الويب المتكاملة والديف أوبس التي تتخصص فيها؟'
    },
    answer: {
      en: 'I specialize in full-stack web engineering and DevOps: building performant web applications using Next.js, React, TypeScript, and Laravel; setting up containerized environments with Docker and Docker Compose; automating CI/CD test and deployment pipelines with GitHub Actions; and managing production Linux (Ubuntu) servers alongside MySQL and Redis data caching layers.',
      ar: 'أتخصص في تطوير الويب المتكامل وديف أوبس: بناء تطبيقات ويب متقدمة باستخدام Next.js و React و TypeScript و Laravel، وتجهيز بيئات العمل بالحاويات عبر Docker و Docker Compose، وأتمتة خطوط الفحص والنشر السحابي بـ GitHub Actions، وإدارة خوادم Linux الإنتاجية مع قواعد بيانات MySQL وكاش Redis.'
    }
  },
  {
    question: {
      en: 'How do you approach database performance and query optimization in production?',
      ar: 'كيف تتعامل مع أداء قواعد البيانات وتحسين الاستعلامات في بيئة الإنتاج؟'
    },
    answer: {
      en: 'I rely on measurable data rather than guesswork: analyzing slow query logs, inspecting EXPLAIN execution plans, and identifying N+1 query patterns. I resolve bottlenecks through composite B-Tree indexing, eager loading with selective column hydration, cursor pagination for large datasets, and Redis caching layers. In production, this approach reduced critical API response latency from 4.0s down to 0.5s.',
      ar: 'أعتمد على القياسات والبيانات الحقيقية: تحليل سجلات الاستعلامات البطيئة، فحص خطط التنفيذ (EXPLAIN)، واكتشاف مشاكل N+1. أقوم بحل المشاكل عبر الفهرسة المركبة، التحميل المسبق المشروط، الترقيم المتسلسل للمجموعات الضخمة، وطبقات الكاش بـ Redis، وهو ما ساعدني في تقليص وقت استجابة نقطة اتصال حيوية من 4 ثوانٍ إلى نصف ثانية.'
    }
  },
  {
    question: {
      en: 'How do you structure Clean Architecture and CI/CD pipelines in production teams?',
      ar: 'كيف تبني المعمارية النظيفة وخطوط الـ CI/CD في بيئات الفرق البرمجية؟'
    },
    answer: {
      en: 'I enforce strict separation of concerns following SOLID principles: keeping controllers lean, extracting complex business logic into dedicated Domain Services, abstracting database queries behind Repositories, and using Form Requests for declarative validation. On the DevOps side, I implement GitHub Actions workflows that automatically run linters and test suites on pull requests, and dispatch Dockerized deployments on merges.',
      ar: 'أفرض الفصل الصارم بين الطبقات وفق مبادئ SOLID: إبقاء وحدات التحكم خفيفة، عزل منطق الأعمال المعقد في خدمات نطاق مخصصة (Services)، وتجريد الاستعلامات عبر المستودعات (Repositories). وفي جانب DevOps، أقوم ببرمجة خطوط GitHub Actions لفحص الكود وتشغيل الاختبارات آلياً ونشر الحاويات فور الدمج.'
    }
  },
  {
    question: {
      en: 'Can you handle secure payment gateways, wallets, and third-party webhooks?',
      ar: 'هل لديك خبرة في ربط بوابات الدفع الإلكتروني، المحافظ المالية، والـ Webhooks؟'
    },
    answer: {
      en: 'Yes. In BayToStay and other production systems, I engineered secure transactional flows including host wallet balances, payout requests, deposit holds, and automated webhook listeners. All balance adjustments execute inside atomic database transactions with row-level locks and idempotency keys to completely eliminate race conditions and double-spending.',
      ar: 'نعم بالتأكيد. في منصة BayToStay وغيرها، قمت بهندسة دورات مالية كاملة تشمل محافظ المضيفين، طلبات السحب، وحجز الودائع، ومعالجة إشعارات الـ Webhooks. تُنفذ كافة العمليات المالية داخل معاملات ذرية محكمة (ACID Transactions) مع مفاتيح عدم التكرار (Idempotency) لمنع أي تعارض مالي.'
    }
  },
  {
    question: {
      en: 'What is your experience in leading delivery and coordinating engineering teams?',
      ar: 'ما هي خبرتك في قيادة التسليم وتنسيق عمل فرق التطوير؟'
    },
    answer: {
      en: 'At RunSoft, I coordinate backend and full-stack delivery across a squad of 4 developers. I take ownership of requirement breakdown, technical specifications, database schema reviews, and PR code reviews. I also serve as the technical bridge between backend, frontend, mobile developers, and product managers to guarantee consistent sprint velocity and zero-surprise releases.',
      ar: 'في شركة RunSoft، أقوم بتنسيق التسليم التقني لفريق مكوّن من 4 مطورين. أتولى تفكيك المتطلبات التشغيلية إلى مهام برمجية، وتصميم مخططات البيانات، ومراجعة الأكواد (PRs). كما أعمل كهمزة وصل بين مهندسي الـ Backend وفرق الـ Frontend وتطبيقات الجوال لضمان تسليم مريح بدون مفاجآت.'
    }
  },
  {
    question: {
      en: 'What is your current availability for software engineering roles?',
      ar: 'ما هو وضع توفرك الحالي للعمل في وظائف هندسة البرمجيات؟'
    },
    answer: {
      en: 'I am based in Cairo, Egypt and open to high-impact Software Engineer, Full-Stack Web Developer, and DevOps roles — including full-time roles, hybrid, and remote collaborations with forward-thinking engineering companies worldwide.',
      ar: 'أنا متواجد في القاهرة، مصر ومتاح للفرص الوظيفية المؤثرة كمهندس برمجيات، مطور ويب متكامل، ومهندس DevOps — بما في ذلك الوظائف بدوام كامل، النظام الهجين، أو العمل عن بُعد مع الشركات والفرق الطموحة عالمياً.'
    }
  }
];

export const contactLinks = [
  {
    label: 'WhatsApp',
    value: '+20 111 896 2513',
    href: 'https://wa.me/201118962513',
    hint: { en: 'Direct messaging & quick reply', ar: 'مراسلة مباشرة ورد سريع' },
    primary: true
  },
  {
    label: 'Email',
    value: 'ahmed97ismail97@gmail.com',
    href: 'mailto:ahmed97ismail97@gmail.com',
    hint: { en: 'For engineering inquiries & roles', ar: 'للاستفسارات والفرص الوظيفية' }
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ahmed-ismail-722048242',
    href: 'https://www.linkedin.com/in/ahmed-ismail-722048242/',
    hint: { en: 'Connect & view full credentials', ar: 'التواصل والاطلاع على الملف المهني' }
  },
  {
    label: 'GitHub',
    value: 'github.com/ahmed777ismail',
    href: 'https://github.com/ahmed777ismail',
    hint: { en: 'Explore 100+ repositories & source code', ar: 'استكشاف أكثر من 100 مستودع كود' }
  }
];
