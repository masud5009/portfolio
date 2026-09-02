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
    github: "https://github.com/masud5009",
    linkedin: "https://www.linkedin.com/in/masud5009",
    facebook: "https://www.facebook.com/masud5009",
    whatsapp: "https://wa.me/8801306084771"
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
    id: "whatstay",
    title: "WhatStay - WhatsApp AI Assistant (SaaS)",
    description: "Multi-tenant SaaS for automated hotel bookings and guest messaging powered by AI.",
    image: "assets/project/whatstay.png",
    tags: ["Laravel", "Meta Graph API", "AI Integration", "MySQL"],
    links: {
      github: "https://github.com/masud5009/whtsbook",
      demo: "https://codecanyon.net/item/whatstay-whatsapp-ai-assistant-for-hotel-booking-automation-saas/63506642"
    }
  },
  {
    id: "bookapp",
    title: "Bookapp - Service Booking Marketplace (SaaS)",
    description: "Multivendor booking SaaS with geolocation search, calendar syncing, and automated scheduling workflows.",
    image: "assets/project/bookapp.png",
    tags: ["Laravel", "REST APIs", "Google Maps / Geo", "Payment Gateways"],
    links: {
      github: "https://github.com/masud5009/bookapp",
      demo: "https://codecanyon.net/item/bookapp-multivendor-service-appointment-booking-laravel-website-subscription-based/54240416?s_rank=9"
    }
  },
  {
    id: "ecommet",
    title: "Ecommet – Multitenant Ecommerce Builder",
    description: "White-label multi-tenant ecommerce builder with custom domains, multilingual support, and automated store setups.",
    image: "assets/project/ecommet.png",
    tags: ["Laravel", "Multi-tenancy", "REST APIs", "MySQL"],
    links: {
      github: "https://github.com/masud5009/ecommet",
      demo: "https://codecanyon.net/item/ecommet-multitenant-ecommerce-website-saas/57240303?s_rank=6"
    }
  },
  {
    id: "renteq",
    title: "RentEq – Equipment Rental SaaS",
    description: "Equipment rental SaaS platform with geolocation maps, AWS S3 storage, and real-time inventory reservations.",
    image: "assets/project/rentqu.png",
    tags: ["Laravel", "AWS S3", "Multi-tenancy", "Vue.js"],
    links: {
      github: "https://github.com/masud5009/renteq",
      demo: "https://codecanyon.net/item/renteq-saas-multipurpose-rental-website-builder-multitenant/60117644?s_rank=15"
    }
  },
  {
    id: "ticket",
    title: "Event Ticket Booking Marketplace",
    description: "High-capacity event marketplace with seat selection, organizer tooling, and scalable checkout processing.",
    image: "assets/project/ticket.png",
    tags: ["Laravel", "Ticketing Logic", "REST APIs", "MySQL"],
    links: {
      gitlab: "https://gitlab.com/evento2/evento",
      demo: "https://altoketicket.com.pe/"
    }
  },
  {
    id: "prokitirswad",
    title: "Prokitir Swad — Organic Food Platform",
    description: "Direct-to-consumer organic food eCommerce platform featuring dynamic catalogs, product search, order tracking, and checkout flows.",
    image: "assets/project/prokitirswad.png",
    tags: ["Laravel", "E-Commerce", "Payment Gateways", "MySQL"],
    links: {
      contact: "#contact",
      demo: "https://prokitirswad.com/"
    }
  }
];

// ===================================
// WORK EXPERIENCE
// ===================================

const EXPERIENCE = [
  {
    title: "Laravel Developer",
    company: "KreativDev — Full-Time Backend Engineering",
    period: "Nov 2023 – Present",
    description: "Full-time backend engineering focusing on core engines, secure APIs, and production platforms."
  },
  {
    title: "Laravel Developer Intern",
    company: "PeopleNTech Institute of IT — MVC Architecture & Backend APIs",
    period: "Sep 2023 – Nov 2023",
    description: "Contributed to Laravel web applications, MVC architecture, Blade views, and backend REST APIs."
  },
  {
    title: "Remote Web Developer",
    company: "CodeVibes — Web Application Features & Integrations",
    period: "5 Months",
    description: "Web application features, responsive workflows, and client-facing integrations."
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
