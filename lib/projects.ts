export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  role: string;
  status: string;
  date: string;
  published: boolean;
  featured: boolean;
  challenge: string;
  approach: string;
  outcome: string;
  contributions: string[];
  stack: string[];
  metrics: ProjectMetric[];
  links: ProjectLink[];
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "agentmag",
    title: "AgentMag",
    eyebrow: "Flagship system · nine-month build cycle",
    description:
      "A governed automation platform for building, running, and observing operational workflows. Finance is its first deep domain, but the underlying system supports agents, integrations, approvals, knowledge, files, data tables, dashboards, and reusable workflow modules.",
    role: "Product builder and automation operator",
    status: "Private product · active development",
    date: "2026-08-01",
    published: true,
    featured: true,
    challenge:
      "High-stakes operational work is spread across finance tools, inboxes, spreadsheets, and manual approvals. A useful automation platform must do more than generate an answer: it must control execution, preserve context, recover from failure, and show exactly what happened.",
    approach:
      "AgentMag separates agent reasoning from deterministic workflow execution. Agents investigate and prepare work; durable workflows run approved actions; human approval gates protect consequential steps; integrations, files, knowledge, and audit events remain attached to the same operating context.",
    outcome:
      "The result is a reusable product foundation rather than a single automation. The current codebase spans a visual Studio, API, worker runtime, documentation surface, multi-company data model, and a growing library of finance and operations recipes.",
    contributions: [
      "Worked across a nine-month product cycle to build and operationalize governed finance and operations workflows.",
      "Designed workflow behavior around agent investigation, deterministic execution, human approvals, and traceable run history.",
      "Worked with a broad platform surface: visual workflow design, reusable blocks, integrations, agents, files, knowledge, data tables, dashboards, and multi-company operations.",
      "Tested real operator flows and helped translate complex business processes into reviewable automation systems rather than one-off scripts.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "ReactFlow",
      "PostgreSQL",
      "Trigger.dev",
      "Nango",
      "OpenAI",
      "Anthropic",
      "Slack",
    ],
    metrics: [
      { value: "17", label: "integration modules" },
      { value: "16", label: "core workflow blocks" },
      { value: "31", label: "database migrations" },
      { value: "4", label: "deployable product surfaces" },
    ],
    links: [
      {
        label: "Open private demo",
        href: "https://packaging-tier-considerable-afterwards.trycloudflare.com/login",
      },
    ],
    note: "The demo is access-controlled. Credentials and source access are shared privately when appropriate.",
  },
  {
    slug: "enterprise-hiring-automation",
    title: "Enterprise Hiring Automation",
    eyebrow: "Recruitment operations · live system",
    description:
      "An Azure-backed recruitment operations platform that turns inbound requirements into structured roles, matched candidate shortlists, controlled replies, and an auditable operating pipeline.",
    role: "Product engineer",
    status: "Live private deployment",
    date: "2026-04-21",
    published: true,
    featured: true,
    challenge:
      "Staffing requirements arrived as inconsistent email threads, forwarded messages, and attachments. Manual processing created slow responses, repeated work, missed recipients, and a real risk of replying twice after a process restart.",
    approach:
      "The platform ingests Outlook mail through Microsoft Graph, classifies and parses each requirement, normalizes the role data, matches candidates with weighted scoring, assembles response drafts and resume attachments, and records every step before a reply is sent.",
    outcome:
      "Recruiters get a centralized pipeline with structured requirements, candidate visibility, controlled communication, and operational safeguards designed for long-running enterprise use rather than a demo-only workflow.",
    contributions: [
      "Implemented Microsoft Graph inbox intake and full-message retrieval for forwarded and conversational email threads.",
      "Built structured requirement extraction and candidate matching across skills, role, experience, location, and availability signals.",
      "Added duplicate-reply prevention with layered identifiers and a persisted replied state so restarts cannot resend the same response.",
      "Implemented restart recovery for unprocessed mail, shared connection pooling, retry and timeout handling, and safe recipient validation.",
      "Attached matched candidate resumes to outbound responses and improved handling of original senders, forwarders, and copied recipients.",
      "Deployed and operated the application on Azure with Microsoft Graph, PostgreSQL, Azure Communication Services, and production-oriented configuration.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "Fastify",
      "Microsoft Graph",
      "PostgreSQL",
      "Azure",
      "Azure Communication Services",
      "Microsoft Teams",
    ],
    metrics: [
      { value: "3", label: "deduplication layers" },
      { value: "5 min", label: "scheduled intake cycle" },
      { value: "End-to-end", label: "email-to-shortlist workflow" },
      { value: "Live", label: "Azure deployment" },
    ],
    links: [
      {
        label: "Open live platform",
        href: "https://esg-ai-automation.vercel.app/login",
      },
    ],
    note: "The production workspace and source repository are private because the system handles recruitment operations and candidate information.",
  },
  {
    slug: "content-automation-studio",
    title: "Content Automation Studio",
    eyebrow: "Research-to-publishing workflow",
    description:
      "A review-first content operating system that researches current topics, drafts LinkedIn carousels and newsletters, generates visual assets, and keeps publishing behind explicit human approval.",
    role: "Automation product builder",
    status: "Live project",
    date: "2026-08-02",
    published: true,
    featured: true,
    challenge:
      "Content teams lose time moving between research, writing, image generation, review, and distribution. Fully autonomous publishing is fast but unsafe; manual production is controlled but difficult to scale.",
    approach:
      "The studio combines current-source research, structured writing, asset generation, review states, and guarded delivery paths. Research and generation can run automatically, while LinkedIn publishing and newsletter delivery remain separate, deliberate actions.",
    outcome:
      "One workspace can move from a topic to cited newsletter copy or a five-slide carousel, show real pipeline progress, and preserve a clear approval boundary before anything reaches an audience.",
    contributions: [
      "Built research pipelines for current AI, cloud, security, infrastructure, and developer-tool topics.",
      "Structured carousel and newsletter generation as separate workflows with independent prompts, assets, state, and tests.",
      "Added generated carousel artwork, optional newsletter lead visuals, citations, source review, and real pipeline progress in the dashboard.",
      "Kept provider credentials server-side and separated generation from publication with explicit review and confirmation steps.",
      "Added guarded LinkedIn publishing and fixed-recipient test delivery so automation cannot silently broadcast content.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Firecrawl",
      "OpenAI",
      "OpenAI Image",
      "Resend",
      "LinkedIn API",
      "Python",
    ],
    metrics: [
      { value: "2", label: "independent content pipelines" },
      { value: "5", label: "carousel assets per run" },
      { value: "2-step", label: "publish confirmation" },
      { value: "Review-first", label: "delivery model" },
    ],
    links: [
      {
        label: "Open live studio",
        href: "https://linkedin-agency-automation.vercel.app/",
      },
    ],
  },
  {
    slug: "ai-internship-recommendation-engine",
    title: "AI Internship Recommendation Engine",
    eyebrow: "Accessible matching experience",
    description:
      "A mobile-friendly recommendation system that matches applicants to a focused shortlist of PM Internship Scheme opportunities using education, skills, sector interests, and location.",
    role: "Full-stack developer",
    status: "Public source",
    date: "2026-06-09",
    published: true,
    featured: false,
    challenge:
      "Large opportunity lists are difficult to navigate, especially for first-generation applicants and people with limited digital access.",
    approach:
      "The application prioritizes a small set of relevant opportunities, highlights matched signals, uses a responsive interface, and supports email delivery with a download fallback.",
    outcome:
      "Applicants receive a clearer, lower-friction path from their profile to a useful internship shortlist and the official application portal.",
    contributions: [
      "Designed the matching experience around education, skills, interests, and geography.",
      "Moved the recommendation engine to a Python backend and connected real email delivery.",
      "Built for mobile use, simple language, and low digital-literacy contexts.",
    ],
    stack: ["Python", "JavaScript", "HTML", "CSS", "Email"],
    metrics: [
      { value: "20", label: "sample opportunities" },
      { value: "3–5", label: "recommendations per user" },
    ],
    links: [
      {
        label: "View source",
        href: "https://github.com/chittapragadaharshitha/AI-Internship-Recommendation-Engine",
      },
    ],
  },
  {
    slug: "absolute-prosthetics",
    title: "Absolute Prosthetics",
    eyebrow: "Production website",
    description:
      "A production web experience for a prosthetics provider, including responsive service presentation, media updates, and deployment support.",
    role: "Web developer",
    status: "Live site",
    date: "2026-05-25",
    published: true,
    featured: false,
    challenge:
      "The business needed a clear, trustworthy web presence that explains specialist services and works reliably across devices.",
    approach:
      "The project focused on a usable service structure, responsive presentation, real media, and a repeatable Vercel deployment path.",
    outcome:
      "The result is a live customer-facing website that can be maintained and updated as the practice grows.",
    contributions: [
      "Maintained production content and service imagery.",
      "Integrated testimonial media and supported release deployment.",
      "Verified the site through iterative production updates.",
    ],
    stack: ["Next.js", "TypeScript", "Vercel", "Responsive UI"],
    metrics: [{ value: "Live", label: "production deployment" }],
    links: [
      {
        label: "Visit website",
        href: "https://absolute-prosthetics.vercel.app/",
      },
    ],
  },
  {
    slug: "pneumonia-detection-cnn",
    title: "Pneumonia Detection with CNNs",
    eyebrow: "Applied machine learning",
    description:
      "A convolutional neural network project that analyzes chest X-rays and classifies likely pneumonia using learned visual features.",
    role: "Machine learning developer",
    status: "Public source",
    date: "2025-08-17",
    published: true,
    featured: false,
    challenge:
      "Chest X-ray classification is a useful way to study how image preprocessing, convolutional features, and evaluation work together in a healthcare context.",
    approach:
      "The project prepares image data, trains a CNN, and exposes the classification flow for experimentation and learning.",
    outcome:
      "It demonstrates an end-to-end applied computer-vision workflow while keeping the result clearly positioned as an academic project, not a diagnostic device.",
    contributions: [
      "Prepared the image-classification workflow and model pipeline.",
      "Worked with image processing, numerical analysis, training, and result visualization.",
    ],
    stack: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NumPy", "Pandas"],
    metrics: [{ value: "CNN", label: "model architecture" }],
    links: [
      {
        label: "View source",
        href: "https://github.com/chittapragadaharshitha/Pneumonia-Detection-using-CNN",
      },
    ],
  },
  {
    slug: "currency-converter",
    title: "Currency Converter",
    eyebrow: "Java desktop application",
    description:
      "A desktop currency-conversion utility built with Java's GUI libraries to make common denomination calculations quick and approachable.",
    role: "Java developer",
    status: "Public source",
    date: "2025-03-09",
    published: true,
    featured: false,
    challenge:
      "The project explores state, input handling, calculation logic, and desktop interface design in a compact application.",
    approach:
      "A Java Swing and AWT interface connects user inputs to conversion logic and presents the result in a simple desktop flow.",
    outcome:
      "It established an early foundation in object-oriented programming and interface-driven application development.",
    contributions: [
      "Built the desktop interface and conversion logic in Java.",
      "Handled user inputs, denomination selection, and result presentation.",
    ],
    stack: ["Java", "Swing", "AWT"],
    metrics: [{ value: "Desktop", label: "application format" }],
    links: [
      {
        label: "View source",
        href: "https://github.com/chittapragadaharshitha/Currency-Converter",
      },
    ],
  },
];

export const allProjects = projects.filter((project) => project.published);
