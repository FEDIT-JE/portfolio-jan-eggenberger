export type Locale = "de" | "en";

export const translations = {
  de: {
    // Navbar
    nav: {
      work: "Projekte",
      expertise: "Expertise",
      process: "Prozess",
      contact: "Kontakt",
      resume: "Lebenslauf",
    },

    // Hero
    hero: {
      label: "Software Engineer & Fotograf",
      headline1: "Ich baue digitale Produkte mit",
      headline2: "Präzision.",
      subtext:
        "Tagsüber entwickle ich Enterprise-Software in C# & .NET. Nachts shippe ich Fullstack-Produkte mit Next.js, Supabase & Stripe. Gleicher Qualitätsanspruch.",
      cta1: "Projekte ansehen",
      cta2: "Kontakt aufnehmen",
      available: "Verfügbar für Projekte",
      workExperience: "Berufserfahrung",
      skills: "Kenntnisse",
    },

    // Expertise
    expertise: {
      label: "Mein Handwerk",
      heading: "Engineering mit dem Auge eines Handwerkers.",
      items: [
        {
          title: "C# & .NET",
          description:
            "Mein tägliches Werkzeug. Ich baue robuste Desktop- und Webanwendungen mit C#, Blazor und WPF, enterprise-tauglich und produktionserprobt.",
        },
        {
          title: "Daten",
          description:
            "Strukturierte relationale Modellierung und Query-Optimierung in SQL Server. Datenintegrität und Performance von Anfang an.",
        },
        {
          title: "Fullstack (Indie)",
          description:
            "In meiner Freizeit shippe ich komplette Produkte: Next.js im Frontend, Supabase im Backend und Stripe für Payments.",
        },
      ],
    },

    // Projects
    projects: {
      label: "Ausgewählte Projekte",
      heading: "Fokus auf wirkungsstarke Projekte.",
      viewProject: "Projekt ansehen",
      projectDescriptions: {
        "HA MEIRA":
          "Eine Schweizer Webagentur, die ich mit meiner Partnerin gegründet habe. Wir bauen massgeschneiderte Websites und Webanwendungen für Schweizer Unternehmen, die sowohl leistungsstark als auch markenstark sind.",
        CVolution:
          "Eine Schweizer Karriereplattform, die ich als CTO aufgebaut habe, gestützt auf über 10 Jahre Recruiting-Erfahrung. Stellensuchende erhalten professionelle CVs, Motivationsschreiben und Lohnanalysen.",
        HelvetiBill:
          "Ein Admin-Tool für Schweizer Freelancer und KMUs, das 5-8 Stunden wöchentlichen Verwaltungsaufwand einspart. QR-Rechnungen, Offertenverwaltung, automatisiertes Mahnwesen und ein Kundenportal.",
      },
      projectLabels: {
        "Web Agency": "Webagentur",
        "HR & Career Platform": "HR & Karriereplattform",
        "Swiss Business Cockpit": "Schweizer Business Cockpit",
      },
    },

    // Longevity / Approach
    longevity: {
      label: "Mein Ansatz",
      heading: "Bauen für\nLanglebigkeit.",
      body: "Ich shippe nicht einfach Code; ich entwickle Lösungen, die Wachstum standhalten und technische Schulden minimieren. Ich behandle jedes Projekt wie einen Massanzug.",
      pillars: [
        {
          title: "Skalierbarkeit",
          description:
            "Meine Architekturen bewältigen Lastspitzen durch horizontale Skalierung und effiziente Datenbankindizierung von Anfang an.",
        },
        {
          title: "Wartbarkeit",
          description:
            "Ich folge Clean-Code-Prinzipien, damit dein Team die Codebasis übernehmen und erweitern kann.",
        },
        {
          title: "Performance",
          description:
            "Ich strebe ein Nulllatenzerlebnis durch SSR, CDN Edge Deployment und optimierte API-Payloads an.",
        },
      ],
      processLabel: "Wie ich arbeite",
      processHeading: "Ein disziplinierter Workflow.",
      steps: [
        {
          title: "Discovery & Spec",
          description:
            "Bevor ich eine einzige Zeile Code schreibe, definiere ich die Rahmenbedingungen. Technische Spezifikationen werden erstellt, um alle Beteiligten auszurichten.",
        },
        {
          title: "Prototyp & Verfeinerung",
          description:
            "Schnelle Validierung der Kernlogik. Ich baue den MVP mit Skalierung im Hinterkopf, mit einem modularen Ansatz für schnelle Iterationen.",
        },
        {
          title: "Deployment & Monitoring",
          description:
            "Software ist nicht fertig, wenn sie gemergt wird. Kontinuierliche Beobachtbarkeit, Logging und automatisierte Tests halten das System gesund.",
        },
      ],
    },

    // CTA / Contact
    cta: {
      label: "Zusammenarbeiten",
      heading: "Lass uns gemeinsam etwas Zuverlässiges bauen.",
      cta1: "Projekt starten",
      cta2: "Kontakt aufnehmen",
      form: {
        name: "Name",
        email: "E-Mail",
        subject: "Betreff",
        subjectPlaceholder: "Worum geht es?",
        message: "Nachricht",
        messagePlaceholder: "Erzähl mir von deinem Projekt...",
        send: "Nachricht senden",
        sending: "Wird gesendet...",
        success: "Nachricht gesendet! Ich melde mich bald.",
        error: "Etwas ist schiefgelaufen. Bitte versuch es erneut.",
      },
    },

    // Footer
    footer: {
      tagline: "Software Engineer. Mit Präzision gebaut.",
    },

    // Project detail UI
    projectDetail: {
      allProjects: "Alle Projekte",
      visitSite: "Website besuchen",
      overview: "Überblick",
      role: "Rolle",
      year: "Jahr",
      backToProjects: "Zurück zu allen Projekten",
    },

    // Per-project translated content
    workPages: {
      "ha-meira": {
        tagline: "Eine Schweizer Webagentur, die ich mitgegründet habe, um massgeschneiderte Websites und Webanwendungen zu bauen, die scharf aussehen und in der Produktion funktionieren.",
        overview: "HA MEIRA ist eine Schweizer Webagentur, die ich gemeinsam mit meiner Partnerin Sarina Eggenberger gegründet habe. Sie betreut Marketing und Kundenbeziehungen; ich verantworte alles im Engineering-Bereich. Wir bauen massgeschneiderte Websites und Webanwendungen für Schweizer Unternehmen, vom einfachen Landingpage bis zur Full-Stack-Webanwendung mit Datenbankbackend.",
        sections: [
          {
            title: "Engineering",
            body: "Jedes Projekt wird mit Next.js für schnelle, SEO-optimierte Seiten und Tailwind CSS für präzises, responsives Design gebaut. Wo dynamische Daten benötigt werden, integriere ich Supabase als Backend, um den Stack schlank und wartbar zu halten. Performance ist nicht verhandelbar: optimierte Bilder, Server-Side Rendering und saubere Core Web Vitals sind Standard.",
          },
          {
            title: "Leistungen",
            body: "Wir bieten drei Service-Stufen: Websites und Landingpages ab CHF 1'999, massgeschneiderte Webanwendungen ab CHF 2'999 und laufende Support-Pakete ab CHF 89/Monat mit Backups, Sicherheitsupdates, Inhaltsänderungen und Uptime-Monitoring.",
          },
          {
            title: "Meine Rolle",
            body: "Ich bin für die gesamte Engineering-Seite verantwortlich: Architekturentscheidungen, Entwicklung, Deployment auf Vercel und die gesamte technische Kundenkommunikation. Sarina betreut Markenstrategie, Texte und Kunden-Onboarding. Diese Aufteilung hält uns fokussiert und schnell.",
          },
        ],
      },
      "cvolution": {
        tagline: "Eine Schweizer Karriereplattform, gestützt auf über 10 Jahre Recruiting-Erfahrung, die Stellensuchenden hilft, sich optimal zu präsentieren.",
        overview: "CVolution ist eine Schweizer Karriereplattform, die ich als CTO gemeinsam mit Armend Mustafa aufgebaut habe, der über 10 Jahre Recruiting-Erfahrung mitbringt. Die Plattform richtet sich an Stellensuchende in der Schweiz: Quereinsteiger, Studierende, Arbeitssuchende und Personen, die Unterstützung beim RAV benötigen. Mit über 1'000 betreuten Kunden steht die Lieferung professioneller Bewerbungsunterlagen im Mittelpunkt.",
        sections: [
          {
            title: "Plattform",
            body: "Gebaut mit Next.js und Supabase, verwaltet die Plattform Buchungen, Auftragsmanagement und Kundenkommunikation. Kunden können aus verschiedenen Karrieredienstleistungen wählen und ihre Dokumente über ein übersichtliches Dashboard verwalten. Supabase übernimmt Authentifizierung, Dateiablage und die Auftragsdatenbank.",
          },
          {
            title: "Angebotene Leistungen",
            body: "Karriereberatung ab CHF 149/Std., professionelles CV-Writing ab CHF 99, Motivationsschreiben ab CHF 99, Lohnanalyse CHF 69, RAV-konforme Bewerbungspakete ab CHF 99 und Dokumentenprüfung ab CHF 49.",
          },
          {
            title: "Meine Rolle",
            body: "Als CTO verantworte ich den gesamten technischen Stack: vom Datenbankschema und API-Design bis zur Frontend-Implementierung und zum Deployment. Armend betreut die Karriereberatung und Inhalte. Diese klare Aufgabenteilung bedeutet: Kunden erhalten echte Recruiting-Expertise kombiniert mit einem zuverlässigen, ausgefeilten Produkt.",
          },
        ],
      },
      "helvetibill": {
        tagline: "Ein Swiss-Made-Admin-Tool für Freelancer und KMUs, das 5 bis 8 Stunden wöchentlichen Verwaltungsaufwand einspart, gebaut nach dem Schweizer QR-Rechnungsstandard.",
        overview: "HelvetiBill ist ein Indie-SaaS-Produkt, das ich von Grund auf entworfen und entwickelt habe. Die Zielgruppe ist der Schweizer Freelancer oder KMU-Inhaber, der in Admin-Aufgaben versinkt: Rechnungen nachverfolgen, Offerten manuell formatieren, Follow-ups vergessen. Das Ziel war kompromisslose Einfachheit: Setup in 2 Minuten, keine ERP-Komplexität, volle Schweizer Compliance ab Werk.",
        sections: [
          {
            title: "Kernfunktionen",
            body: "QR-Rechnungserstellung nach SIX-Standard mit automatischer MwSt-Berechnung, Offertenverwaltung mit Kundenportal, wiederkehrende Rechnungen mit automatischen Abrechnungszyklen, Mahnwesen mit PDF-Export, Lead-Pipeline mit automatisierten Follow-up-Erinnerungen, Umsatz-Dashboard mit offenen Forderungen und Prognosen sowie vollständige Kundendatenbank mit Dokumentenarchiv.",
          },
          {
            title: "Technische Architektur",
            body: "Gebaut auf Next.js App Router mit Supabase für Auth, Postgres-Datenbank und Dateiablage für generierte PDFs. Stripe verwaltet Abonnements in zwei Stufen: Pro CHF 12/Monat (bis 20 Kunden, 10 Rechnungen/Monat) und Pro+ CHF 24/Monat (unbegrenzt). PDF-Generierung läuft serverseitig, alle Daten verbleiben in der Schweiz, DSGVO-konform.",
          },
          {
            title: "Design-Philosophie",
            body: "Schweizer Unternehmen sind konservativ: Sie vertrauen Tools, die zuverlässig und vertraut wirken. Die Benutzeroberfläche ist bewusst ruhig: klare Datentabellen, vorhersehbare Abläufe, kein Feature-Overload. Jeder Screen wurde mit einer Frage entworfen: Was muss der Nutzer jetzt tun? Das Ergebnis ist ein Produkt, das neue Nutzer ohne Einführung verstehen.",
          },
        ],
      },
    },

    // Resume
    resume: {
      label: "Lebenslauf",
      role: "Software Engineer & Fotograf · Schweiz, Aargau",
      workExperience: "Berufserfahrung",
      technicalSkills: "Technische Kenntnisse",
      languages: "Sprachen",
      details: "Details",
      skillCategories: {
        "Day Job (C# / .NET)": "Tagesjob (C# / .NET)",
        "Side Projects": "Nebenprojekte",
      },
      langLevels: {
        Native: "Muttersprache",
        Professional: "Professionell",
      },
      experience: [
        {
          company: "Federer Informatik AG",
          role: "Software Engineer",
          period: "2021 Heute",
          type: "Fullstack-Entwicklung",
          achievements: [
            "Aufbau und Wartung von Web- und Desktop-Anwendungen mit Blazor und WPF.",
            "Ausbildung und Mentoring von Lernenden zur Verbesserung ihrer Programmierfähigkeiten.",
            "Kundenbetreuung bei technischen Problemen und Umsetzung kundenspezifischer Änderungen.",
          ],
        },
        {
          company: "Raiffeisen Switzerland",
          role: "Software Developer Lernender",
          period: "2017 2021",
          type: "Lehre",
          achievements: [
            "Erfahrungen in Scrum und agilen Methoden gesammelt.",
            "Entwicklung eines internen Tools, das die Teameffizienz um 30% verbesserte.",
            "Das Handwerk der Softwareentwicklung in verschiedenen Produktivsystemen erlernt.",
          ],
        },
      ],
    },
  },

  en: {
    nav: {
      work: "Work",
      expertise: "Expertise",
      process: "Process",
      contact: "Contact",
      resume: "Resume",
    },

    hero: {
      label: "Software Engineer & Photographer",
      headline1: "I build digital products with",
      headline2: "precision.",
      subtext:
        "By day I build enterprise software in C# & .NET. By night I ship fullstack products with Next.js, Supabase & Stripe. Same standard of quality either way.",
      cta1: "Explore My Work",
      cta2: "Get in Touch",
      available: "Available for projects",
      workExperience: "Work Experience",
      skills: "Skills",
    },

    expertise: {
      label: "My Craft",
      heading: "Engineering with an artisan's eye.",
      items: [
        {
          title: "C# & .NET",
          description:
            "My daily driver. I build robust desktop and web applications using C#, Blazor, and WPF, enterprise-grade, production-hardened.",
        },
        {
          title: "Data",
          description:
            "Structured relational modeling and query optimization in SQL Server. Data integrity and performance from day one.",
        },
        {
          title: "Fullstack (Indie)",
          description:
            "In my free time I ship complete products: Next.js on the frontend, Supabase for the backend, and Stripe for payments.",
        },
      ],
    },

    projects: {
      label: "Selected Work",
      heading: "Focusing on high-impact projects.",
      viewProject: "View project",
      projectDescriptions: {
        "HA MEIRA":
          "A Swiss web agency I co-founded with my partner. We build custom websites and web applications for Swiss businesses combining performance engineering with brand-aligned design.",
        CVolution:
          "A Swiss career services platform I built as CTO, backed by 10+ years of recruiting expertise. Job seekers get professional CVs, cover letters, and salary analysis.",
        HelvetiBill:
          "An admin tool built for Swiss freelancers and SMEs that cuts 5-8 hours of weekly overhead. QR-invoice generation, quote management, automated dunning, and a customer portal.",
      },
      projectLabels: {
        "Web Agency": "Web Agency",
        "HR & Career Platform": "HR & Career Platform",
        "Swiss Business Cockpit": "Swiss Business Cockpit",
      },
    },

    longevity: {
      label: "My Approach",
      heading: "Build for\nlongevity.",
      body: "I don't just ship code; I engineer solutions that survive growth and minimize technical debt. I treat every project like a custom build.",
      pillars: [
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
      ],
      processLabel: "How I Work",
      processHeading: "A disciplined workflow.",
      steps: [
        {
          title: "Discovery & Spec",
          description:
            "Before writing a single line of code, I define the constraints. Technical specifications are drafted to align stakeholders and ensure architectural feasibility.",
        },
        {
          title: "Prototype & Refine",
          description:
            "Rapid validation of the core logic. I build the MVP with scale in mind, using a modular approach that allows for rapid feature iteration.",
        },
        {
          title: "Deploy & Monitor",
          description:
            "Software isn't done when it's merged. Continuous observability, logging, and automated testing ensure the system remains healthy in the wild.",
        },
      ],
    },

    cta: {
      label: "Let's Work Together",
      heading: "Let's build something reliable together.",
      cta1: "Start a Project",
      cta2: "Get in touch",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        subjectPlaceholder: "What's it about?",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        error: "Something went wrong. Please try again.",
      },
    },

    footer: {
      tagline: "Software Engineer. Built with precision.",
    },

    projectDetail: {
      allProjects: "All projects",
      visitSite: "Visit site",
      overview: "Overview",
      role: "Role",
      year: "Year",
      backToProjects: "Back to all projects",
    },

    workPages: {
      "ha-meira": {
        tagline: "A Swiss web agency I co-founded — building custom websites and web applications that look sharp and perform in production.",
        overview: "HA MEIRA is a Swiss web agency founded together with my partner Sarina Eggenberger. She handles marketing and client relations; I handle all things engineering. We build custom websites and web applications for Swiss companies — from simple landing pages to full-stack web apps with database backends.",
        sections: [
          {
            title: "Engineering",
            body: "Every project is built with Next.js for fast, SEO-optimized pages and Tailwind CSS for precise, responsive design. Where dynamic data is needed, I integrate Supabase as the backend — keeping the stack lean and maintainable. Performance is non-negotiable: optimized images, server-side rendering, and clean Core Web Vitals scores are standard.",
          },
          {
            title: "Services",
            body: "We offer three service tiers: websites and landing pages from CHF 1,999, custom web applications from CHF 2,999, and ongoing support packages from CHF 89/month covering backups, security updates, content changes, and uptime monitoring.",
          },
          {
            title: "My Role",
            body: "I'm responsible for the full engineering side — architecture decisions, development, deployment on Vercel, and all technical client communication. Sarina manages brand strategy, copywriting, and client onboarding. The split keeps us focused and fast.",
          },
        ],
      },
      "cvolution": {
        tagline: "A Swiss career services platform backed by 10+ years of recruiting expertise — built to help job seekers put their best foot forward.",
        overview: "CVolution is a Swiss career platform I co-built as CTO alongside Armend Mustafa, who brings 10+ years of recruiting experience. The platform serves job seekers across Switzerland — career changers, students, people between jobs, and those navigating the RAV. With 1,000+ clients supported, the focus is on delivering professional application documents that actually get interviews.",
        sections: [
          {
            title: "Platform",
            body: "Built with Next.js and Supabase, the platform handles service bookings, order management, and client communication. Customers can select from a range of career services and manage their documents through a clean client dashboard. Supabase powers authentication, file storage, and the order database.",
          },
          {
            title: "Services Offered",
            body: "Career counselling at CHF 149/hr, professional CV writing at CHF 99, cover letters at CHF 99, salary benchmarking at CHF 69, RAV-compliant application packages from CHF 99, and document review at CHF 49.",
          },
          {
            title: "My Role",
            body: "As CTO, I own the full technical stack — from database schema and API design to frontend implementation and deployment. Armend handles the career consulting and content side. Clients get genuine recruiting expertise combined with a polished, reliable product.",
          },
        ],
      },
      "helvetibill": {
        tagline: "A Swiss-made admin tool for freelancers and SMEs that cuts 5-8 hours of weekly overhead — built around the Swiss QR-invoice standard.",
        overview: "HelvetiBill is an indie SaaS product I designed and built from scratch. The target user is the Swiss freelancer or small business owner drowning in admin — chasing invoices, manually formatting quotes, forgetting follow-ups. The goal was ruthless simplicity: set up in 2 minutes, no ERP complexity, and full compliance with Swiss billing requirements out of the box.",
        sections: [
          {
            title: "Core Features",
            body: "QR-invoice generation compliant with the SIX standard including automatic VAT handling, quote management with a client-facing portal, recurring invoices with automated billing cycles, dunning and payment reminders with PDF export, a lead pipeline with automated follow-up reminders, revenue dashboard with open receivables and forecasts, and a full customer database with document archive.",
          },
          {
            title: "Technical Architecture",
            body: "Built on Next.js App Router with Supabase handling auth, the Postgres database, and file storage for generated PDFs. Stripe powers subscriptions across two tiers: Pro at CHF 12/month and Pro+ at CHF 24/month. PDF generation runs server-side, and all data stays in Switzerland — GDPR-compliant by design.",
          },
          {
            title: "Design Philosophy",
            body: "Swiss businesses are conservative — they trust tools that feel reliable and familiar. The UI is intentionally calm: clear data tables, predictable flows, no feature bloat. Every screen was designed around one question: what does this user need to do right now? The result is a product that new users understand without a tutorial.",
          },
        ],
      },
    },

    resume: {
      label: "Resume",
      role: "Software Engineer & Photographer · Switzerland, Argovia",
      workExperience: "Work Experience",
      technicalSkills: "Technical Skills",
      languages: "Languages",
      details: "Details",
      skillCategories: {
        "Day Job (C# / .NET)": "Day Job (C# / .NET)",
        "Side Projects": "Side Projects",
      },
      langLevels: {
        Native: "Native",
        Professional: "Professional",
      },
      experience: [
        {
          company: "Federer Informatik AG",
          role: "Software Engineer",
          period: "2021 Present",
          type: "Full-stack Development",
          achievements: [
            "Building and maintaining web and desktop applications with Blazor and WPF.",
            "Training and mentoring apprentices to improve their coding skills and understanding of software architecture.",
            "Supporting customers with technical issues and implementing custom changes.",
          ],
        },
        {
          company: "Raiffeisen Switzerland",
          role: "Software Developer Apprentice",
          period: "2017 2021",
          type: "Apprenticeship",
          achievements: [
            "Gaining experience in scrum and agile methodologies.",
            "Leading the development of a new internal tool that improved team efficiency by 30%.",
            "Learning the craft of software development across multiple production systems.",
          ],
        },
      ],
    },
  },
} as const;

export type Translations = typeof translations[Locale];
