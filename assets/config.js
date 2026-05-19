/**
 * PORTFOLIO CONFIGURATION
 * 
 * Update these values to customize your portfolio.
 * No build process needed - changes take effect immediately.
 */

// ===================================
// PERSONAL INFORMATION
// ===================================

const CONFIG = {
  // Main name - appears in header and hero
  name: "Masud Rana",
  
  // Job title and subtitle
  title: "Backend Developer",
  subtitle: "I build scalable SaaS applications and APIs",
  tagline: "I design reliable services, data models, integrations, and cloud workflows that stay fast under real product load.",
  
  // Professional email
  email: "hello@yourdomain.com",
  
  // Social profiles
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername", // Optional
    website: "https://yourdomain.com"             // Optional
  },
  
  // SEO and metadata
  seo: {
    description: "Personal portfolio for a backend developer building scalable SaaS applications, APIs, and cloud systems.",
    keywords: "backend developer, full stack, APIs, Node.js, cloud architecture",
    ogImage: "/assets/hero-system.png"
  },
  
  // Year for footer copyright
  year: new Date().getFullYear()
};

// ===================================
// SKILLS BY CATEGORY
// ===================================

const SKILLS = [
  {
    category: "Backend",
    description: "API design, service boundaries, auth, jobs, and integrations.",
    tags: ["Node.js", "Express", "REST", "GraphQL"]
  },
  {
    category: "Data",
    description: "Relational modeling, indexing, caching, and event storage.",
    tags: ["PostgreSQL", "Redis", "MongoDB", "Prisma"]
  },
  {
    category: "Cloud",
    description: "Deployments, containers, CI, monitoring, and secure config.",
    tags: ["Docker", "AWS", "CI/CD", "Nginx"]
  },
  {
    category: "Quality",
    description: "Testing, docs, observability, performance, and security basics.",
    tags: ["Jest", "OpenAPI", "Tracing", "Load tests"]
  }
];

// ===================================
// PROJECTS SHOWCASE
// ===================================

const PROJECTS = [
  {
    id: "api-gateway",
    title: "Atlas API Gateway",
    description: "Multi-tenant gateway with authentication, request throttling, audit logs, and service-level telemetry.",
    image: "assets/project-api-gateway.png",
    tags: ["Node.js", "Redis", "PostgreSQL"],
    links: {
      github: "https://github.com/yourusername/atlas-api-gateway",
      demo: "https://example.com"
    }
  },
  {
    id: "billing",
    title: "Nimbus Billing",
    description: "Usage metering and subscription billing service with invoices, webhooks, retries, and admin reporting.",
    image: "assets/project-billing.png",
    tags: ["TypeScript", "Stripe", "Queues"],
    links: {
      github: "https://github.com/yourusername/nimbus-billing",
      demo: "https://example.com"
    }
  },
  {
    id: "ops",
    title: "ForgeOps Automation",
    description: "Deployment automation platform with worker queues, blue-green rollout checks, and traceable releases.",
    image: "assets/project-ops.png",
    tags: ["Docker", "AWS", "Workers"],
    links: {
      github: "https://github.com/yourusername/forgeops-automation",
      demo: "https://example.com"
    }
  }
];

// ===================================
// WORK EXPERIENCE
// ===================================

const EXPERIENCE = [
  {
    title: "Senior Backend Developer",
    company: "SaaS Platform Team",
    period: "2023 - Present",
    description: "Built API services, background jobs, and data workflows for multi-tenant SaaS products with strong observability and release discipline."
  },
  {
    title: "Backend Engineer",
    company: "Product Engineering",
    period: "2020 - 2023",
    description: "Delivered REST APIs, database migrations, integrations, and internal tools for fast-moving product teams."
  },
  {
    title: "Freelance Backend Developer",
    company: "Client Projects",
    period: "2018 - 2020",
    description: "Shipped MVP APIs, admin dashboards, payment integrations, and deployment setups for early-stage products."
  }
];

// ===================================
// ABOUT SECTION
// ===================================

const ABOUT = {
  heading: "I turn product requirements into durable backend systems.",
  paragraphs: [
    "I focus on the parts of software that must work every day: APIs, databases, queues, authentication, billing, observability, and deployment pipelines. My work is practical, measurable, and built for teams that need to ship without creating operational debt.",
    "I enjoy collaborating with product, design, and frontend teams to shape clean contracts, reduce ambiguity, and make backend decisions that support growth instead of blocking it."
  ],
  highlights: [
    { label: "API-first", sublabel: "Clean contracts" },
    { label: "Cloud-ready", sublabel: "Deployable systems" },
    { label: "Reliable", sublabel: "Logs, traces, tests" }
  ]
};

// ===================================
// ANIMATION SETTINGS
// ===================================

const ANIMATIONS = {
  // Fade-up animation duration (ms)
  revealDuration: 700,
  
  // Stagger delay between elements (ms)
  staggerDelay: 80,
  
  // Hover lift animation duration (ms)
  liftDuration: 220,
  
  // Lift height on hover (px)
  liftAmount: 4,
  
  // Scroll trigger threshold (0-1)
  scrollThreshold: 0.16,
  
  // Disable animations for users who prefer reduced motion
  respectReducedMotion: true
};

// ===================================
// COLOR SCHEME
// ===================================

const COLORS = {
  background: "#05070a",
  foreground: "#f8fafc",
  accent: "#14b8a6",        // Teal
  accentAlt: "#06b6d4",     // Cyan
  
  text: {
    primary: "#f8fafc",
    secondary: "#e2e8f0",
    muted: "#94a3b8",
    subtle: "#64748b"
  },
  
  border: "rgba(255, 255, 255, 0.09)",
  glass: "rgba(255, 255, 255, 0.035)",
  
  // Teal color variations for hover states
  accentLight: "rgba(20, 184, 166, 0.1)",
  accentLighter: "rgba(20, 184, 166, 0.05)"
};

// ===================================
// EXPORT FOR USE IN SCRIPTS
// ===================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIG, SKILLS, PROJECTS, EXPERIENCE, ABOUT, ANIMATIONS, COLORS };
}

// Also expose globally for inline scripts
window.PORTFOLIO_CONFIG = { CONFIG, SKILLS, PROJECTS, EXPERIENCE, ABOUT, ANIMATIONS, COLORS };
