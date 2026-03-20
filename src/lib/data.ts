// ─── Person ─────────────────────────────────────────────────────────────────

export const person = {
  name: "Jan Eggenberger",
  role: "Software Engineer & Photographer",
  avatar: "/images/avatar.jpg",
  location: "Switzerland · Argovia",
  languages: ["German", "English"],
  age: "24 years old",
};

// ─── Social ──────────────────────────────────────────────────────────────────

export const social = [
  { name: "GitHub", href: "https://github.com/FEDIT-JE" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jan-eggenberger-903517179" },
  { name: "Instagram", href: "https://www.instagram.com/jxn.visualzz" },
  { name: "Email", href: "mailto:jan@eggenberger.biz" },
];

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

// ─── Expertise ───────────────────────────────────────────────────────────────

export type ExpertiseItem = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
};

export const expertise: ExpertiseItem[] = [
  {
    icon: "backend",
    title: "C# & .NET",
    description:
      "My daily driver. I build robust desktop and web applications using C#, Blazor, and WPF enterprise-grade, production-hardened.",
    tags: ["C#", "Blazor", "WPF", "ASP.NET"],
  },
  {
    icon: "data",
    title: "Data",
    description:
      "Structured relational modeling and query optimization in SQL Server. Data integrity and performance from day one.",
    tags: ["SQL Server", "PostgreSQL"],
  },
  {
    icon: "frontend",
    title: "Fullstack",
    description:
      "In my free time I ship complete products Next.js on the frontend, Supabase for the backend, and Stripe for payments.",
    tags: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type Project = {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    label: "Web Agency",
    title: "HA MEIRA",
    description:
      "A Swiss web agency I co-founded with my partner. We build custom websites and web applications for Swiss businesses combining performance engineering with brand-aligned design. Full service from design to hosting.",
    image: "/images/hameira.png",
    imageAlt: "HA MEIRA",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
    href: "/work/ha-meira",
  },
  {
    label: "HR & Career Platform",
    title: "CVolution",
    description:
      "A Swiss career services platform I built as CTO, backed by 10+ years of recruiting expertise. Job seekers get professional CVs, cover letters, and salary analysis. 1,000+ clients supported across the Swiss job market.",
    image: "/images/cvolution.png",
    imageAlt: "CVolution",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
    href: "/work/cvolution",
  },
  {
    label: "Swiss Business Cockpit",
    title: "HelvetiBill",
    description:
      "An admin tool built for Swiss freelancers and SMEs that cuts 5–8 hours of weekly overhead. QR-invoice generation, quote management, automated dunning, and a customer portal all compliant with Swiss billing standards.",
    image: "/images/helvetibill.png",
    imageAlt: "HelvetiBill",
    tags: ["Next.js", "Supabase", "Stripe"],
    href: "/work/helvetibill",
  },
];

// ─── Longevity pillars ────────────────────────────────────────────────────────

export type Pillar = {
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    title: "Scalability",
    description:
      "My architectures handle peak loads through horizontal scaling and efficient database indexing from day one.",
  },
  {
    title: "Maintainability",
    description:
      "I follow clean code principles so your team can inherit and extend the codebase with ease.",
  },
  {
    title: "Performance",
    description:
      "I aim for a zero-latency feel through SSR, CDN edge deployment, and optimized API payloads.",
  },
];

// ─── Process steps ────────────────────────────────────────────────────────────

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Spec",
    description:
      "Before writing a single line of code, I define the constraints. Technical specifications are drafted to align stakeholders and ensure architectural feasibility.",
  },
  {
    number: "02",
    title: "Prototype & Refine",
    description:
      "Rapid validation of the core logic. I build the MVP with scale in mind, using a modular approach that allows for rapid feature iteration without breaking the core.",
  },
  {
    number: "03",
    title: "Deploy & Monitor",
    description:
      "Software isn't done when it's merged. Continuous observability, logging, and automated testing ensure the system remains healthy in the wild.",
  },
];
