export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ArchitectureComponent {
  name: string;
  responsibility: string;
  technology: string;
}

export interface FlowStep {
  step: string;
  detail: string;
}

export interface ReliabilityControl {
  risk: string;
  control: string;
}

export interface TechnicalDecision {
  decision: string;
  rationale: string;
}

export interface EvidenceItem {
  label: string;
  detail: string;
  href?: string;
}

export interface TechnicalDossier {
  systemContext: string;
  architecture: ArchitectureComponent[];
  flow: FlowStep[];
  implementation: string[];
  reliability: ReliabilityControl[];
  decisions: TechnicalDecision[];
  evidence: EvidenceItem[];
  contributionBoundary: string;
}

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  architectureLine: string;
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
  technicalDossier: TechnicalDossier;
  note?: string;
}

export const projects: Project[] = [
  {
    slug: "agentmag",
    title: "Agent Mag",
    eyebrow: "Founder-led product · nine-month build cycle",
    description:
      "A product family for AI-agent builders and operations teams: an 86-page public platform, a 492-skill open registry and CLI, Agent Mag AI, and a governed automation runtime whose first deep domain is finance operations.",
    architectureLine: "Builder ecosystem → agent interface → workflow runtime → integrations → audit state",
    role: "Founder and AI Product Engineer",
    status: "Active product · public ecosystem and private operations runtime",
    date: "2026-08-01",
    published: true,
    featured: true,
    challenge:
      "High-stakes operational work crosses finance tools, inboxes, documents, spreadsheets, and approval chains. A useful platform has to do more than generate an answer: it must separate probabilistic reasoning from controlled execution, preserve state, pause for review, recover from failure, and leave an audit trail.",
    approach:
      "Harshitha designed Agent Mag as connected product layers rather than a single chatbot: editorial and discovery surfaces for builders, a declarative skills registry and npm CLI, an OpenClaw-backed agent interface, and a governed runtime where agents investigate while typed workflows, approvals, and durable state control consequential actions.",
    outcome:
      "The result is a credible product and distribution system around agent infrastructure: 86 product pages, 62 API routes, 16 delivery workflows, 492 public skill bundles, and a reusable operations foundation that can extend from finance into broader back-office work.",
    contributions: [
      "Founded Agent Mag and leads the roadmap across the publication, builder ecosystem, agent experience, and operations automation product.",
      "Implemented Azure OpenAI GPT-4o streaming, then built a multi-step function-calling loop with visual tool-result blocks for production agent interactions.",
      "Integrated an OpenClaw gateway and model routing, then hardened the chat surface with identity lock, security rules, persona controls, and an explicit OpenClaw workspace.",
      "Translated finance and operations procedures into typed workflow stages, approval points, integration boundaries, and operator-visible execution state.",
      "Uses Claude Code and Codex to move from product requirements through implementation, debugging, testing, deployment, and operational follow-through.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "Hono",
      "PostgreSQL",
      "Drizzle ORM",
      "Trigger.dev",
      "Nango",
      "OpenAI",
      "Anthropic",
      "OpenClaw",
      "Azure App Service",
      "Claude Code",
      "Codex",
      "Slack",
    ],
    metrics: [
      { value: "86", label: "product pages in the reviewed platform" },
      { value: "62", label: "API routes across product domains" },
      { value: "16", label: "CI, release, sync, and review workflows" },
      { value: "492", label: "public installable skill bundles" },
    ],
    links: [
      {
        label: "Explore Agent Mag",
        href: "https://agentmag.dev",
      },
      {
        label: "View the open ecosystem",
        href: "https://github.com/Agent-mag",
      },
      {
        label: "Open private demo",
        href: "https://packaging-tier-considerable-afterwards.trycloudflare.com/login",
      },
    ],
    note:
      "The demo is access-controlled. Architecture and scale describe the reviewed platform; credentials and source access are shared privately when appropriate.",
    technicalDossier: {
      systemContext:
        "Agent Mag is Harshitha's founder-led product family. The public platform helps builders discover technical content, tools, models, jobs, events, resources, and installable agent skills. Agent Mag AI provides a tool-using interaction layer. A separate governed automation runtime applies the same agent-building discipline to operational workflows where the surrounding system must own permissions, execution order, approvals, integrations, and evidence. Finance is its first substantial domain, but the primitives extend to contract, customer, inventory, document, and internal-service workflows.",
      architecture: [
        {
          name: "Builder platform",
          responsibility:
            "Unifies editorial, tools, models, skills, jobs, resources, events, accounts, partner surfaces, and documentation into a coherent product for AI-agent builders.",
          technology: "Next.js 16 · React 19 · 86 pages · 62 API routes",
        },
        {
          name: "Agent Mag AI",
          responsibility:
            "Streams model responses, executes bounded function calls, renders structured tool results, and routes through an OpenClaw workspace with public-user identity and security constraints.",
          technology: "Azure OpenAI · OpenClaw · function calling · streamed UI blocks",
        },
        {
          name: "Open ecosystem",
          responsibility:
            "Distributes declarative skill bundles and builder tools through a public registry, product catalog, APIs, GitHub repositories, and an npm CLI.",
          technology: "492 skills · Agent Mag CLI · GitHub Actions · npm",
        },
        {
          name: "Operator Studio",
          responsibility:
            "Composes workflows on a visual canvas and gives operators access to agents, runs, files, knowledge, tables, templates, schedules, dashboards, and deployment state.",
          technology: "Next.js · React · XYFlow · Zustand · TanStack Query",
        },
        {
          name: "API control plane",
          responsibility:
            "Validates requests, applies authentication and tenancy context, manages configuration, receives webhooks, and starts or observes execution without keeping long work inside the request lifecycle.",
          technology: "Hono · TypeScript · Zod · Better Auth · Socket.IO",
        },
        {
          name: "Durable execution",
          responsibility:
            "Runs long-lived tasks, agent steps, extraction, browser work, transformations, approval waits, and provider actions with retryable worker semantics.",
          technology: "Trigger.dev · TypeScript workers",
        },
        {
          name: "Operational state",
          responsibility:
            "Stores workflows, deployments, runs, approvals, audit events, files, knowledge, company-scoped records, and integration metadata as reconstructable state.",
          technology: "PostgreSQL · Drizzle ORM · 31 migrations",
        },
        {
          name: "Module and integration layer",
          responsibility:
            "Exposes typed core blocks and provider adapters for email, documents, accounting, CRM, payments, inventory, signatures, storage, and collaboration systems.",
          technology: "16 core blocks · 17 integration modules · Nango",
        },
        {
          name: "Reasoning layer",
          responsibility:
            "Uses models for investigation, extraction, classification, drafting, and agent decisions while returning bounded outputs to the workflow runtime.",
          technology: "OpenAI · Anthropic · structured schemas",
        },
      ],
      flow: [
        {
          step: "Compose and validate",
          detail:
            "An operator assembles typed blocks, connects integrations, supplies company context, and validates required configuration before deployment.",
        },
        {
          step: "Start a durable run",
          detail:
            "The control plane creates persistent run state and hands long-running work to the worker runtime instead of tying it to one browser or HTTP connection.",
        },
        {
          step: "Investigate with bounded agents",
          detail:
            "Agent steps can search knowledge, inspect documents, extract structured fields, or prepare a proposed action without receiving authority to execute every downstream effect.",
        },
        {
          step: "Pause for human control",
          detail:
            "Approval blocks suspend consequential work and expose the proposed inputs and context for an operator decision.",
        },
        {
          step: "Execute deterministic actions",
          detail:
            "Approved provider operations run through typed integration modules such as accounting, CRM, document, email, payment, or inventory adapters.",
        },
        {
          step: "Persist evidence",
          detail:
            "Outputs, errors, timestamps, approval decisions, and audit events remain connected to the run and company so an operator can reconstruct what happened.",
        },
      ],
      implementation: [
        "Implemented real Azure OpenAI streaming and expanded the chat surface into a multi-step tool loop with function calls and visual result blocks.",
        "Connected Agent Mag AI to an OpenClaw gateway, added explicit model routing, and refactored the surface around a dedicated OpenClaw execution path.",
        "Hardened the public agent with identity locking, untrusted-user rules, internal-detail boundaries, tier-aware behavior, persona files, and workspace context.",
        "Shaped an 86-page product spanning editorial, tools, models, skills, jobs, events, resources, accounts, partners, documentation, and AI-native discovery.",
        "Built the open ecosystem around 492 declarative skill bundles, CLI installation, public tools, documentation, and automated synchronization and release paths.",
        "Mapped operational procedures into explicit triggers, model-assisted investigation stages, deterministic actions, waits, conditions, parallel branches, subworkflows, and approval gates.",
        "Worked with the Studio information architecture across workflows, deployments, runs, schedules, files, knowledge, user tables, integrations, dashboards, and chat-based interaction.",
        "Evaluated whether operator flows exposed enough context to review an action before approving it and enough run state to diagnose what happened afterward.",
        "Helped position finance recipes as implementations on top of reusable platform primitives rather than hard-coding the product as a single-purpose finance assistant.",
        "Tested access-controlled demo paths and translated operational feedback into product and workflow requirements during the nine-month cycle.",
      ],
      reliability: [
        {
          risk: "A long workflow outlives a browser request or worker process.",
          control:
            "Durable Trigger.dev execution and persisted run state move work outside the request lifecycle and make progress observable.",
        },
        {
          risk: "A model proposes an unsafe or irreversible action.",
          control:
            "Typed action blocks and explicit approval nodes separate model reasoning from execution authority.",
        },
        {
          risk: "An operator cannot explain a historical outcome.",
          control:
            "Run outputs, errors, timestamps, approval decisions, and audit events are stored against the workflow and company context.",
        },
        {
          risk: "Provider credentials leak into browser state or prompts.",
          control:
            "Connections are handled through the server-side integration layer rather than embedded in client workflows.",
        },
        {
          risk: "Work from one company is applied to another.",
          control:
            "Company and workspace context is carried through operational records and execution boundaries.",
        },
      ],
      decisions: [
        {
          decision: "Separate agents from workflows",
          rationale:
            "Agents are useful where interpretation is needed; deterministic workflows remain easier to review, retry, and govern for consequential operations.",
        },
        {
          decision: "Treat approvals as runtime primitives",
          rationale:
            "Human review must survive refreshes and worker restarts, so it belongs in persisted execution state rather than an informal chat step.",
        },
        {
          decision: "Build domain recipes on reusable modules",
          rationale:
            "The same email, document, CRM, accounting, table, wait, and approval blocks can support more than finance without duplicating the runtime.",
        },
      ],
      evidence: [
        {
          label: "Founder-owned GitHub organization",
          detail:
            "Harshitha is the sole public organization member and active owner of Agent-mag, which contains the product, skills registry, tools, documentation, roadmap, and community repositories.",
          href: "https://github.com/Agent-mag",
        },
        {
          label: "Direct implementation history",
          detail:
            "Her product commits cover Azure OpenAI streaming, a function-calling chat loop, visual workflow blocks, OpenClaw gateway integration, model routing, security and identity controls, persona workspace files, and interface refinement.",
        },
        {
          label: "Reviewed private codebase",
          detail:
            "The current monorepo contains four deployable applications, 16 core workflow blocks, 17 provider integrations, a PostgreSQL schema with 31 migrations, and extensive run, approval, file, knowledge, table, and workflow surfaces.",
        },
        {
          label: "Access-controlled product demo",
          detail:
            "The private Cloudflare demo exposes the current operator product while protecting internal access.",
          href: "https://packaging-tier-considerable-afterwards.trycloudflare.com/login",
        },
      ],
      contributionBoundary:
        "Harshitha is Agent Mag's founder, product owner, and active organization owner. Her direct Git history verifies the named agent-chat, OpenClaw, security, persona, and interface implementations. The platform counts are a reviewed codebase snapshot; the finance-runtime architecture describes the wider product she has led and operated across its nine-month build cycle.",
    },
  },
  {
    slug: "agent-mag-skills",
    title: "Agent Mag Skills Ecosystem",
    eyebrow: "Open agent infrastructure · registry and CLI",
    description:
      "A public distribution system for 492 installable AI-agent capabilities, built around declarative skill bundles, catalog APIs, CLI installation, validation, documentation, usage signals, and automated release workflows.",
    architectureLine: "Skill bundle → validation and sync → catalog API → CLI install → local agent",
    role: "Founder and product engineer",
    status: "Public ecosystem · active development",
    date: "2026-08-08",
    published: true,
    featured: true,
    challenge:
      "Agent capabilities are often trapped in private prompts, copied manually between tools, or distributed without a consistent contract. Builders need a way to inspect, install, update, and contribute skills without turning a prompt file into an opaque executable package.",
    approach:
      "Agent Mag treats a skill as a declarative configuration bundle: metadata, instructions, tool requirements, optional configuration, and documentation. GitHub is the reviewable source layer; validation and sync workflows feed the product catalog; APIs and the Agent Mag CLI provide discovery and installation into supported local agents.",
    outcome:
      "The ecosystem now exposes 492 skill bundles through a public repository and product catalog, backed by nine CLI command modules, automated sync and release paths, and a separate tools collection for reusable developer workflows.",
    contributions: [
      "Defined the product direction connecting an open GitHub registry, Agent Mag product surfaces, API routes, documentation, and CLI distribution.",
      "Structured skills as inspectable configuration rather than arbitrary executable code, preserving a clear boundary between instructions, tool declarations, and the user's runtime.",
      "Built catalog and installation journeys so builders can evaluate a skill before adding it to their local agent environment.",
      "Established automated validation, synchronization, documentation, and release workflows around a community-contribution model.",
      "Connected registry usage signals to the wider Agent Mag platform so installs can become product feedback rather than anonymous file copies.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "npm CLI",
      "GitHub Actions",
      "MDX",
      "JSON manifests",
      "REST APIs",
      "OpenClaw",
      "Claude Code",
      "Codex",
    ],
    metrics: [
      { value: "492", label: "public installable skill bundles" },
      { value: "9", label: "CLI command modules" },
      { value: "16", label: "product sync, release, and review workflows" },
      { value: "4", label: "standalone public builder tools" },
    ],
    links: [
      {
        label: "Browse the skills registry",
        href: "https://github.com/Agent-mag/skills",
      },
      {
        label: "Explore skills on Agent Mag",
        href: "https://agentmag.dev/skills",
      },
      {
        label: "View the Agent Mag CLI",
        href: "https://www.npmjs.com/package/agentmag",
      },
    ],
    note:
      "The registry count is a reviewed repository snapshot. Skills are declarative configuration bundles; installing one does not silently grant credentials or execute arbitrary code.",
    technicalDossier: {
      systemContext:
        "The Skills Ecosystem is the reusable capability layer of Agent Mag. A skill packages operational instructions and tool expectations into a format that can be reviewed in source control, presented in a product catalog, installed with a CLI, and adapted to a supported agent runtime. The architecture keeps community distribution separate from credential custody and runtime authority.",
      architecture: [
        {
          name: "Declarative skill bundle",
          responsibility:
            "Defines the skill identity, operating instructions, tool requirements, configuration contract, and human-readable usage notes in inspectable files.",
          technology: "manifest.json · prompt.md · tools.json · config.json · README.md",
        },
        {
          name: "Source and review layer",
          responsibility:
            "Stores community skills in a public repository where changes can be diffed, reviewed, versioned, and discussed before distribution.",
          technology: "GitHub · pull requests · MIT-licensed registry",
        },
        {
          name: "Validation and synchronization",
          responsibility:
            "Checks bundle shape and metadata, rejects malformed entries, and synchronizes accepted skills into Agent Mag's product-facing catalog.",
          technology: "Node.js scripts · schema checks · GitHub Actions",
        },
        {
          name: "Catalog and API layer",
          responsibility:
            "Supports search, categories, detail views, rankings, installation metadata, and programmatic access from the web product and CLI.",
          technology: "Next.js · REST routes · Cosmos DB · search metadata",
        },
        {
          name: "Installation client",
          responsibility:
            "Resolves a requested skill, previews its files, and writes the bundle into a supported local agent configuration without owning the user's provider credentials.",
          technology: "Agent Mag npm CLI · nine command modules",
        },
        {
          name: "Adoption signal",
          responsibility:
            "Reports bounded installation events so maintainers can distinguish useful capabilities from registry inventory alone.",
          technology: "Install API · catalog counters · product analytics",
        },
      ],
      flow: [
        {
          step: "Author the capability contract",
          detail:
            "A contributor describes what the skill does, the instructions it gives an agent, the tools it expects, and any user-supplied configuration.",
        },
        {
          step: "Review the bundle in source",
          detail:
            "The public repository makes prompt, manifest, and tool changes visible before they enter the distribution path.",
        },
        {
          step: "Validate and synchronize",
          detail:
            "Automation checks required fields and normalizes accepted metadata before updating the Agent Mag catalog and documentation surfaces.",
        },
        {
          step: "Discover through web or CLI",
          detail:
            "A builder searches by capability, reads the contract and requirements, and selects a named version rather than copying an untracked prompt.",
        },
        {
          step: "Install into the local runtime",
          detail:
            "The CLI resolves the bundle and places configuration files into the supported agent environment; credentials stay under the builder's control.",
        },
        {
          step: "Measure and improve",
          detail:
            "Bounded install signals and community changes inform ranking, documentation, compatibility work, and future product priorities.",
        },
      ],
      implementation: [
        "Structured a skill as a multi-file, declarative bundle so metadata, instructions, tools, optional configuration, and documentation can evolve independently.",
        "Connected the public skills repository to product routes that support discovery, detail pages, categories, leaderboards, and install tracking.",
        "Developed the product contract for CLI commands that add skills, tools, documentation context, and local model instructions.",
        "Built automation around synchronization, review, publishing, indexing, and generated documentation instead of relying on manual catalog updates.",
        "Kept runtime secrets outside skill bundles and documented the distinction between installing configuration and authorizing external services.",
        "Extended the ecosystem beyond skills through public tools, roadmap proposals, documentation, and community-health repositories under the same organization.",
      ],
      reliability: [
        {
          risk: "A malformed community bundle breaks installation or catalog rendering.",
          control:
            "Required manifest fields, normalized metadata, and validation in the sync path reject incomplete bundle shapes before distribution.",
        },
        {
          risk: "Installing a skill is confused with granting it authority.",
          control:
            "Bundles remain declarative and exclude credentials; the user's agent runtime and provider permissions continue to control execution.",
        },
        {
          risk: "Web catalog data drifts from the source repository.",
          control:
            "Automated synchronization and generated documentation reduce manual duplication between GitHub, APIs, and product surfaces.",
        },
        {
          risk: "A bundle update silently changes behavior.",
          control:
            "Source-controlled files, pull-request diffs, and explicit package metadata make behavior changes inspectable and reviewable.",
        },
        {
          risk: "Registry size is mistaken for real adoption.",
          control:
            "Installation events are tracked separately from inventory so ranking and roadmap decisions can use actual usage signals.",
        },
      ],
      decisions: [
        {
          decision: "Use declarative bundles instead of executable packages",
          rationale:
            "Prompts and tool contracts should be inspectable before installation; execution authority belongs to the user's runtime, not the registry artifact.",
        },
        {
          decision: "Keep GitHub as the contribution source",
          rationale:
            "Pull requests provide an understood review, history, and attribution model while the Agent Mag product can focus on discovery and installation.",
        },
        {
          decision: "Offer both web and CLI discovery",
          rationale:
            "The web product supports evaluation and comparison; the CLI shortens the path from a selected capability to a configured local agent.",
        },
        {
          decision: "Separate skills from tools",
          rationale:
            "Instruction bundles and executable developer utilities have different security and installation expectations and should not share an ambiguous package type.",
        },
      ],
      evidence: [
        {
          label: "Public skills registry",
          detail:
            "The Agent-mag/skills repository exposes 492 manifest-backed skill bundles for review and contribution.",
          href: "https://github.com/Agent-mag/skills",
        },
        {
          label: "Product and CLI surfaces",
          detail:
            "The reviewed Agent Mag codebase contains skills pages and APIs plus nine CLI command modules for skills, tools, docs context, models, search, and related workflows.",
          href: "https://agentmag.dev/skills",
        },
        {
          label: "Organization ownership",
          detail:
            "Harshitha is the sole public member and active owner of the organization containing the registry, product, tools, docs, and roadmap.",
          href: "https://github.com/Agent-mag",
        },
      ],
      contributionBoundary:
        "Harshitha owns the Agent Mag ecosystem's product direction and organization. The 492-skill figure describes the public registry snapshot, including community-ready configuration bundles; it is not a claim that she manually authored every individual skill file.",
    },
  },
  {
    slug: "jarvis-multi-agent-operations",
    title: "Jarvis Multi-Agent Operations",
    eyebrow: "Personal operations system · live agent stack",
    description:
      "A multi-agent operations system that routes natural-language requests through one master agent to email, calendar, and meeting specialists, with provider tools, shared context, durable workflow execution, and chat and voice entry surfaces.",
    architectureLine: "Chat or voice → master router → specialist agents → business tools → shared memory",
    role: "AI product engineer and agent systems operator",
    status: "Live private system · continuously operated",
    date: "2026-07-09",
    published: true,
    featured: true,
    challenge:
      "Personal operations span systems with different permissions, data shapes, and failure modes. A single unconstrained prompt becomes difficult to reason about when it can read email, change calendars, inspect meetings, and act through communication tools.",
    approach:
      "Jarvis uses a master agent as the conversational front door and routing layer. Email, Calendar, and Meeting agents each own a narrower tool set and execution contract. n8n provides durable workflow orchestration, provider integrations expose bounded actions, and memory carries useful context without flattening every domain into one agent.",
    outcome:
      "The system operates as a private daily workflow layer with chat and a live voice service, specialized Gmail, Google Calendar, and Fireflies paths, and an architecture that can add tools without giving every agent unrestricted access to every account.",
    contributions: [
      "Designed and operates the master-agent plus specialist-agent topology for real email, calendar, and meeting work.",
      "Mapped each specialist to bounded provider tools and kept routing responsibility separate from domain execution.",
      "Built the n8n workflow layer that carries messages, tool requests, results, memory, and error behavior across the system.",
      "Added and operates a live voice entry service alongside chat while preserving the same central agent and downstream tool boundaries.",
      "Uses the running system as an operational test bed for permissions, prompt contracts, integrations, recovery, and agent observability.",
    ],
    stack: [
      "n8n",
      "OpenClaw",
      "Hermes",
      "Gmail",
      "Google Calendar",
      "Fireflies",
      "Slack",
      "Docker",
      "Linux",
      "Claude Code",
      "Codex",
    ],
    metrics: [
      { value: "1", label: "master routing agent" },
      { value: "3", label: "specialist operational agents" },
      { value: "3+", label: "provider domains behind bounded tools" },
      { value: "2", label: "chat and voice entry surfaces" },
    ],
    links: [],
    note:
      "Jarvis is a private operational system because it connects to personal communication and calendar data. The architecture shown here is verified from the running workflow and services; credentials and message content remain private.",
    technicalDossier: {
      systemContext:
        "Jarvis is an orchestration system, not one all-powerful chatbot. The master agent interprets an operator request, selects the appropriate specialist, and returns a consolidated answer. Specialist agents own narrower Gmail, Calendar, and meeting-intelligence actions. This reduces prompt and permission sprawl while keeping a single conversational interface.",
      architecture: [
        {
          name: "Interaction surfaces",
          responsibility:
            "Accept operator requests through chat and a live voice service, normalize them into the central workflow, and return human-readable results.",
          technology: "Chat trigger · Call Jarvis voice service",
        },
        {
          name: "Master Agent",
          responsibility:
            "Understands intent, chooses a specialist, passes the minimum useful context, and assembles the final response without directly owning every provider action.",
          technology: "n8n AI Agent · routing prompt · conversation memory",
        },
        {
          name: "Email Agent",
          responsibility:
            "Handles bounded inbox search, thread retrieval, triage, drafting, and approved email actions through Gmail tools.",
          technology: "Gmail integration · scoped tool actions",
        },
        {
          name: "Calendar Agent",
          responsibility:
            "Reads availability, investigates calendar state, and performs explicitly requested scheduling actions through Google Calendar.",
          technology: "Google Calendar integration · date/time normalization",
        },
        {
          name: "Meeting Agent",
          responsibility:
            "Retrieves Fireflies meeting records and transcripts and converts them into summaries, decisions, and follow-up context.",
          technology: "Fireflies integration · transcript processing",
        },
        {
          name: "Workflow and runtime layer",
          responsibility:
            "Persists orchestration, invokes tools, carries results between agents, exposes execution state, and runs on a private Docker/Linux host.",
          technology: "n8n · Docker · Linux · OpenClaw/Hermes profiles",
        },
      ],
      flow: [
        {
          step: "Receive the operator request",
          detail:
            "A chat or voice surface converts the request into a normalized message for the Jarvis workflow.",
        },
        {
          step: "Interpret and route",
          detail:
            "The Master Agent identifies whether the job belongs to email, calendar, meeting intelligence, or a combination and selects the required specialist contract.",
        },
        {
          step: "Invoke bounded tools",
          detail:
            "The chosen specialist calls only its configured provider tools and returns structured results or a clear failure to the master workflow.",
        },
        {
          step: "Coordinate multi-domain work",
          detail:
            "For requests such as preparing for a meeting, the master can combine calendar context, prior email, and meeting records without collapsing their credentials into one tool surface.",
        },
        {
          step: "Return and remember",
          detail:
            "Jarvis composes a concise result for the original surface and retains useful conversational state for follow-up requests.",
        },
        {
          step: "Inspect operational failures",
          detail:
            "n8n execution history and service state provide a concrete place to diagnose provider authentication, schema, tool, or routing failures.",
        },
      ],
      implementation: [
        "Created the central message-trigger-to-Master-Agent workflow and specialist routing contracts.",
        "Separated Email, Calendar, and Meeting agents so each receives a narrower prompt, provider connection, and set of available actions.",
        "Connected Gmail for inbox work, Google Calendar for scheduling context, and Fireflies for meeting intelligence.",
        "Carried tool results back through the master workflow so multi-domain requests can be composed into one operator-facing response.",
        "Deployed and operates the n8n runtime on a private Docker host with service-level checks and recoverable workflow definitions.",
        "Added a live Call Jarvis service as a voice entry point while retaining the same downstream orchestration boundary.",
        "Maintains OpenClaw and Hermes profiles as part of the broader agent runtime environment and experiments with new tools against the private stack before exposing them elsewhere.",
      ],
      reliability: [
        {
          risk: "One prompt receives unrestricted access to every personal system.",
          control:
            "Specialist agents expose domain-specific tools while the Master Agent owns routing and response composition.",
        },
        {
          risk: "A provider schema or authentication change fails silently.",
          control:
            "n8n execution history, explicit tool nodes, and service checks expose the failing integration and its returned payload.",
        },
        {
          risk: "A voice request bypasses the established agent controls.",
          control:
            "Voice is treated as an input adapter to the central workflow, not as a second independent operations brain.",
        },
        {
          risk: "Context from one domain is over-shared with another.",
          control:
            "The master passes task-relevant context to the selected specialist instead of granting every domain the full conversation and all tools.",
        },
        {
          risk: "A container or workflow process restarts mid-operation.",
          control:
            "The private Docker runtime, n8n persistence, and execution records separate service recovery from provider-side action review.",
        },
      ],
      decisions: [
        {
          decision: "Keep one master agent and multiple specialists",
          rationale:
            "A single entry point is convenient for the operator; narrower execution agents are easier to prompt, permission, test, and debug.",
        },
        {
          decision: "Preserve n8n as the orchestration layer",
          rationale:
            "The existing workflow makes routing, provider calls, payload shapes, and failures inspectable without hiding all behavior inside model code.",
        },
        {
          decision: "Add voice as an adapter, not a redesign",
          rationale:
            "Keeping the Master Agent as the brain prevents chat and voice from diverging into two systems with different tools and safety behavior.",
        },
        {
          decision: "Run the stack privately",
          rationale:
            "Email, calendar, and meeting data require a controlled host and explicit credential boundary rather than a public demo environment.",
        },
      ],
      evidence: [
        {
          label: "Verified workflow topology",
          detail:
            "The inspected Jarvis workflow routes a chat trigger into one Master Agent with Email, Calendar, and Meeting specialists backed by Gmail, Google Calendar, Fireflies, and memory.",
        },
        {
          label: "Running private services",
          detail:
            "The current host runs the n8n stack and an active Call Jarvis service alongside OpenClaw/Hermes runtime profiles.",
        },
        {
          label: "Deliberate private boundary",
          detail:
            "No public demo is linked because the system holds personal communication, scheduling, and meeting context.",
        },
      ],
      contributionBoundary:
        "Harshitha designed and operates the Jarvis agent topology, workflow behavior, provider integrations, and live private runtime described here. The verified current voice surface is the Call Jarvis service; proposed third-party voice connectors are not presented as deployed production components.",
    },
  },
  {
    slug: "enterprise-hiring-automation",
    title: "Enterprise Hiring Automation",
    eyebrow: "Recruitment operations · production-oriented system",
    description:
      "An Azure-backed recruitment operations platform that converts inconsistent Outlook requirements into structured roles, ranked candidate shortlists, controlled replies, and a recoverable processing history.",
    architectureLine: "Microsoft Graph → parser → weighted matcher → controlled reply → audit state",
    role: "Product engineer",
    status: "Live private deployment",
    date: "2026-05-10",
    published: true,
    featured: true,
    challenge:
      "Staffing requirements arrived through forwarded messages, conversational threads, inconsistent separators, copied recipients, and attachments. Manual processing caused slow responses, repeated work, weak matching, and a real risk of duplicate replies after restarts.",
    approach:
      "The platform evolved through two Harshitha-owned repositories: a PostgreSQL/Fastify foundation and a later Azure-native Next.js iteration. It ingests Outlook mail through Microsoft Graph, classifies and parses requirements, ranks candidates with skill-heavy scoring, reconstructs recipients, sends controlled replies, and persists processing state.",
    outcome:
      "Recruiters receive a centralized operating pipeline with structured requirements, candidate visibility, controlled communication, authentication, scheduled intake, error handling, and safeguards for long-running enterprise use.",
    contributions: [
      "Migrated inbound mailbox processing to Microsoft Graph and implemented full-message retrieval for forwarded and conversational threads.",
      "Built section-aware requirement extraction and expanded recognition to 385 skills with 1,165 aliases in the later production codebase.",
      "Improved candidate matching so required skills dominate generic role-word overlap, with explicit experience, location, and availability signals.",
      "Implemented layered duplicate-reply prevention, persisted replied state, restart recovery, connection pooling, retries, timeouts, date guards, and result checking.",
      "Implemented resume attachments during the system's evolution and repaired original-sender, forwarder, CC, and self-reply-loop behavior.",
      "Built Azure deployment paths spanning App Service, Azure Functions timer polling, Cosmos DB in the later iteration, Entra ID/NextAuth, and Key Vault-backed secrets.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "Fastify",
      "Microsoft Graph",
      "PostgreSQL",
      "Azure Cosmos DB",
      "Azure App Service",
      "Azure Functions",
      "Microsoft Entra ID",
      "Azure Key Vault",
      "Vitest",
    ],
    metrics: [
      { value: "385", label: "recognized skill families" },
      { value: "1,165", label: "skill aliases in the later codebase" },
      { value: "5 min", label: "Azure Functions intake schedule" },
      { value: "60%", label: "skills weight in candidate scoring" },
    ],
    links: [
      {
        label: "Open live platform",
        href: "https://esg-ai-automation.vercel.app/login",
      },
    ],
    note:
      "The production workspace and repositories are private because the system handles recruitment operations and candidate information. Historical implementation details are described separately from current enabled behavior.",
    technicalDossier: {
      systemContext:
        "The platform automates a real recruitment-operations loop: monitor a shared Outlook mailbox, identify requirements among unrelated mail, normalize inconsistent content, rank an internal candidate pool, reconstruct the correct recipients, and send or stage a controlled response without replying twice. Harshitha's Git history shows sustained implementation work from the initial monorepo through the later Azure-native application.",
      architecture: [
        {
          name: "Mailbox intake",
          responsibility:
            "Polls the shared Outlook mailbox, acquires delegated OAuth tokens, fetches full message bodies, and retains provider identifiers needed for processing and deduplication.",
          technology: "Microsoft Graph · delegated OAuth · Azure Functions timer",
        },
        {
          name: "Classification and parsing",
          responsibility:
            "Rejects notifications and self-loops, detects requirements and follow-ups, strips HTML, identifies forwarded-message boundaries, and extracts role, skills, experience, location, budget, client, and priority.",
          technology: "TypeScript · section-aware parsing · 385 skills / 1,165 aliases",
        },
        {
          name: "Candidate matching",
          responsibility:
            "Ranks eligible candidates with skills weighted above role, experience, location, and availability; applies thresholds so weak role-word overlap cannot dominate missing required skills.",
          technology: "60/15/10/5/10 weighted scoring · candidate pool",
        },
        {
          name: "Response engine",
          responsibility:
            "Builds shortlist or clarification replies, handles original sender and forwarded recipients, applies CC policy, and supported candidate resume attachments during the system's evolution.",
          technology: "Microsoft Graph replies · HTML composition · attachment encoding",
        },
        {
          name: "Processing state",
          responsibility:
            "Stores requirements, candidates, sent/skipped outcomes, message identifiers, reply status, sync state, and dashboard records so a restart can resume safely.",
          technology: "PostgreSQL with pooling · later Azure Cosmos DB",
        },
        {
          name: "Enterprise operations",
          responsibility:
            "Secures polling and dashboard access, schedules intake, surfaces failures, manages secrets, and deploys repeatably across Azure services.",
          technology: "App Service · Functions · Entra ID · NextAuth v5 · Key Vault · structured logs",
        },
      ],
      flow: [
        {
          step: "Poll Outlook",
          detail:
            "A secured Azure Functions timer calls the poll endpoint every five minutes; the Graph adapter refreshes delegated credentials and requests unread mail.",
        },
        {
          step: "Retrieve and normalize the thread",
          detail:
            "The service fetches the full body, removes HTML noise, recognizes forwards and conversational phrasing, and discards system notifications or messages that would create a self-reply loop.",
        },
        {
          step: "Classify and extract",
          detail:
            "Requirement and follow-up classification runs before section-aware extraction normalizes title, client, required skills, experience, location, budget, priority, and sender context.",
        },
        {
          step: "Check processing identity",
          detail:
            "Provider message IDs, unread state, normalized identifiers, and persisted reply state are checked so an already handled message cannot be sent again after a process restart.",
        },
        {
          step: "Rank candidates",
          detail:
            "The matcher scores skills at 60%, role at 15%, experience at 10%, location at 5%, and availability at 10%, then applies overall and skill-overlap thresholds.",
        },
        {
          step: "Construct the response",
          detail:
            "The response engine prepares candidate profiles or a missing-information prompt, restores the correct original sender and copied recipients, and historically supported attached resumes where configured.",
        },
        {
          step: "Persist before and after sending",
          detail:
            "Intent, result, status, and errors are recorded so retries and restart recovery can distinguish unsent, skipped, failed, and completed messages.",
        },
        {
          step: "Expose operations state",
          detail:
            "Authenticated dashboard views show requirements, candidates, categories, sent responses, and failure states for manual follow-through.",
        },
      ],
      implementation: [
        "Replaced earlier IMAP and webhook experiments with Microsoft Graph inbox intake and hardened full-message retrieval for an Outlook mailbox.",
        "Implemented HTML cleanup, forwarded-email detection, conversational/free-form parsing, separator normalization, explicit client and priority extraction, and system-notification filtering.",
        "Expanded the later skills directory to 385 categorized skills with 1,165 aliases and fixed false SAP classification caused by overly broad token matching.",
        "Changed candidate ranking to prioritize required-skill overlap over generic title words, using a 60% skills, 15% role, 10% experience, 5% location, and 10% availability model.",
        "Added duplicate-reply protection across unread filtering, Graph/provider identifiers, persisted processing state, and an explicit replied marker.",
        "Added restart recovery for unprocessed mail, shared PostgreSQL connection pooling in the first production implementation, retry/timeout/result checks, and date guards.",
        "Implemented original-sender reconstruction, vendor and employee CC behavior, self-loop prevention, and safe validation for outbound recipients.",
        "Implemented candidate resume attachments and automatic schema migration in the first repository; a later iteration removed PDF resume infrastructure, so this is historical implementation work rather than a current-state claim.",
        "Migrated deployment through Azure PostgreSQL and standalone App Service toward an Azure-native stack using Cosmos DB, Azure Functions, Entra ID/NextAuth, Key Vault access, and reproducible lockfiles.",
        "Added unit coverage for classification, parsing, matching, and auto-reply behavior, plus dashboard resilience and production error handling in the later application.",
      ],
      reliability: [
        {
          risk: "The process restarts after reading a message but before completing a reply.",
          control:
            "Persisted processing and replied state plus restart recovery distinguish work that still needs action from mail that has already produced a response.",
        },
        {
          risk: "The same thread is fetched again and receives a duplicate response.",
          control:
            "Unread filtering, provider identifiers, normalized identity checks, and persisted reply state form layered duplicate-reply prevention.",
        },
        {
          risk: "Forwarded mail sends a response to the wrong person or back to the monitored mailbox.",
          control:
            "Forward-boundary parsing, original-sender recovery, recipient validation, CC reconstruction, and self-loop detection run before sending.",
        },
        {
          risk: "Generic role words rank technically unsuitable candidates.",
          control:
            "Skills carry the largest weight, skill-overlap thresholds gate inclusion, and the expanded alias directory normalizes equivalent technologies.",
        },
        {
          risk: "Scheduled polling exhausts database connections or hangs on a provider call.",
          control:
            "The first implementation shares a PostgreSQL pool; provider operations use retry, timeout, result checking, and guarded scheduling.",
        },
        {
          risk: "Deployment configuration or secrets are exposed to the client.",
          control:
            "Entra ID protects dashboard access, a poll API key protects scheduled intake, and provider credentials are held in Azure Key Vault/server configuration.",
        },
      ],
      decisions: [
        {
          decision: "Move mailbox intake to Microsoft Graph",
          rationale:
            "Graph fits the Outlook environment, exposes stable message identity and reply semantics, and avoids keeping a fragile IMAP loop inside the Azure API process.",
        },
        {
          decision: "Weight skills above titles",
          rationale:
            "Recruitment requirements frequently use broad titles; hard technical requirements are a stronger signal of actual candidate fit.",
        },
        {
          decision: "Persist processing state before trusting mailbox flags",
          rationale:
            "Unread state alone does not survive every partial failure. Application state is needed to make restart and duplicate behavior explicit.",
        },
        {
          decision: "Separate scheduled triggers from the web process",
          rationale:
            "Azure Functions can initiate polling on a fixed cadence without a self-restarting loop competing with the production application lifecycle.",
        },
      ],
      evidence: [
        {
          label: "Harshitha-authored repository history",
          detail:
            "The private Git history records sustained work across the Microsoft Graph migration, extraction, matching, deduplication, restart recovery, pooling, forwarding, resume attachments, tests, and Azure deployment—not a single cosmetic commit.",
        },
        {
          label: "Live authenticated platform",
          detail:
            "The current login surface is publicly reachable while operational data and source remain private.",
          href: "https://esg-ai-automation.vercel.app/login",
        },
      ],
      contributionBoundary:
        "The hiring case study is directly supported by Harshitha's sustained Git authorship across the private `esg-ai-automation` and `email-auto` repositories. The system changed architecture during development; PostgreSQL pooling and resume attachments are verified implementation work from the earlier stage, while Cosmos DB, Azure Functions, Entra ID, and Key Vault describe the later production iteration.",
    },
  },
  {
    slug: "content-automation-studio",
    title: "Content Automation Studio",
    eyebrow: "Crestline Studios · research-to-publishing system",
    description:
      "A Crestline Studios content-operations system that turns current research into cited newsletter drafts and complete LinkedIn carousel packages, with visible pipeline state and human approval before distribution.",
    architectureLine: "Firecrawl research → structured generation → asset rendering → human review → guarded delivery",
    role: "AI Product Engineer — content automation",
    status: "Live Crestline Studios project · controlled publishing",
    date: "2026-08-02",
    published: true,
    featured: true,
    challenge:
      "Content production loses time across research, writing, image generation, source review, formatting, and delivery. Fully autonomous publishing is fast but unsafe; purely manual work preserves control but does not scale.",
    approach:
      "The system keeps carousel and newsletter pipelines independent, streams real provider progress, retains sources and citations, generates channel-specific assets, and makes LinkedIn or email delivery a separate action with explicit confirmation and constrained recipients.",
    outcome:
      "Crestline Studios can move from a topic to reviewable newsletter or carousel output, inspect the exact sources and generated assets, and deliberately choose whether to publish—compressing research, production, and packaging without removing editorial control.",
    contributions: [
      "Designed the research-to-output workflow around operator review rather than unsafe one-click autonomous publication.",
      "Built separate carousel and newsletter paths for current-source research, structured copy, image assets, citations, and truthful pipeline progress.",
      "Defined delivery controls around server-only credentials, fixed-recipient email tests, LinkedIn identity checks, dry runs, duplicate prevention, and second confirmation.",
      "Tested the complete operator journey from topic selection through source inspection, asset review, delivery readiness, and guarded publication.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Firecrawl",
      "OpenAI Responses",
      "OpenAI Image",
      "Resend",
      "LinkedIn API",
      "Python",
      "GitHub Actions",
      "Vitest",
    ],
    metrics: [
      { value: "2", label: "isolated content pipelines" },
      { value: "5", label: "complete carousel assets per run" },
      { value: "2-step", label: "LinkedIn publication confirmation" },
      { value: "1 fixed", label: "allowed newsletter test recipient" },
    ],
    links: [
      {
        label: "Visit Crestline Studios",
        href: "https://www.crestlinestudios.dev/",
      },
    ],
    note:
      "The automation workspace is an operator system within Crestline Studios, not an unrestricted public publishing endpoint. Provider credentials and live distribution controls remain private.",
    technicalDossier: {
      systemContext:
        "The Studio automates the expensive middle of content operations—research, synthesis, drafting, visual production, and packaging—without collapsing review and distribution into the same action. Carousel and newsletter workflows share provider infrastructure but retain separate prompts, types, state, routes, tests, and delivery rules.",
      architecture: [
        {
          name: "Operator workspace",
          responsibility:
            "Presents node-based carousel and newsletter workflows, real pipeline state, source links, generated outputs, review controls, and delivery readiness in one responsive dashboard.",
          technology: "Next.js 16 · React 19 · TypeScript · shadcn · Tailwind",
        },
        {
          name: "Research adapter",
          responsibility:
            "Searches bounded current sources across AI, automation, cloud, security, infrastructure, developer tools, and operator-entered newsletter topics.",
          technology: "Firecrawl server SDK",
        },
        {
          name: "Generation layer",
          responsibility:
            "Produces schema-validated carousel copy, structured newsletter sections, citations, four content-slide designs, a deterministic CTA slide, and an optional newsletter lead visual.",
          technology: "OpenAI Responses · OpenAI Image · Zod",
        },
        {
          name: "Progress and review state",
          responsibility:
            "Streams real research, writing, and per-slide events to the browser and preserves the generated copy, sources, citations, and final assets for inspection.",
          technology: "NDJSON streaming · isolated React state",
        },
        {
          name: "Guarded LinkedIn publisher",
          responsibility:
            "Validates five PNG assets, verifies the configured identity, performs a dry run, requires Publish plus browser confirmation, and reserves a duplicate-prevention ledger entry before a live post.",
          technology: "Local-only Next.js route · Python 3.12 · LinkedIn API · GitHub issue ledger",
        },
        {
          name: "Constrained email delivery",
          responsibility:
            "Sends only a reviewed newsletter test to a server-configured recipient; the browser cannot choose or override the destination.",
          technology: "Resend server API",
        },
      ],
      flow: [
        {
          step: "Choose a workflow",
          detail:
            "The operator selects carousel or newsletter; each path initializes its own prompt, validation schema, state, progress events, and output model.",
        },
        {
          step: "Research current sources",
          detail:
            "Firecrawl gathers a bounded set of recent pages, and the pipeline retains source URLs so the operator can inspect what informed the draft.",
        },
        {
          step: "Generate channel-specific copy",
          detail:
            "The carousel path selects a timely story and writes concise slide copy; the newsletter path produces a structured long-form draft with citations tied to collected sources.",
        },
        {
          step: "Render visual assets",
          detail:
            "OpenAI Image creates complete carousel artwork and can create one text-free 16:9 newsletter lead visual. The fifth carousel slide uses a deterministic subscription CTA.",
        },
        {
          step: "Stream and inspect",
          detail:
            "The dashboard shows actual provider milestones and per-slide completion, then exposes copy, citations, source links, and images for review.",
        },
        {
          step: "Confirm a bounded delivery action",
          detail:
            "LinkedIn requires a ready five-image package, identity verification, validation, dry run, explicit Publish, and a second confirmation. Newsletter delivery is limited to one server-configured test recipient.",
        },
        {
          step: "Record publication identity",
          detail:
            "The LinkedIn flow reserves a GitHub issue ledger entry to prevent duplicates and support recovery when an upstream response is ambiguous.",
        },
      ],
      implementation: [
        "Structured carousel and newsletter generation as isolated sibling workflows instead of sharing prompts, routes, UI state, and tests that could leak behavior across channels.",
        "Used current-source Firecrawl research and retained citations/source links so generated claims remain reviewable before distribution.",
        "Designed carousel output as five complete images: four generated content slides plus a deterministic fifth CTA, avoiding a fragile second browser text-overlay layer.",
        "Exposed real NDJSON research, writing, and per-slide progress rather than simulated client-side timers.",
        "Kept Firecrawl, OpenAI, Resend, and LinkedIn credentials in server-only configuration and out of browser bundles.",
        "Separated generation from LinkedIn publication through readiness checks, exact identity verification, validation, dry run, manual Publish, and second confirmation.",
        "Constrained newsletter testing to a fixed-recipient server setting so a client request cannot turn the endpoint into an arbitrary broadcast path.",
        "Added a scheduled path that processes only explicitly approved manifest entries and uses a ledger for duplicate prevention and ambiguous-outcome recovery.",
      ],
      reliability: [
        {
          risk: "Generation silently publishes incomplete or unreviewed content.",
          control:
            "Research/generation and delivery are separate routes and actions; no completed generation run automatically invokes LinkedIn or Resend.",
        },
        {
          risk: "A carousel is published with missing or inconsistent media.",
          control:
            "The publisher requires a complete five-PNG package, validates the assets, verifies identity, and performs a dry run before live publication.",
        },
        {
          risk: "A retry creates a duplicate LinkedIn post.",
          control:
            "An issue-ledger reservation records publication identity before the external action and supports ambiguous-result recovery.",
        },
        {
          risk: "The email endpoint becomes an open relay.",
          control:
            "The server owns the only permitted test recipient and rejects destinations supplied by the browser.",
        },
        {
          risk: "Secrets leak through the dashboard.",
          control:
            "Provider keys remain server-side and are excluded from committed source; public exposure is explicitly blocked pending authentication and rate limiting.",
        },
      ],
      decisions: [
        {
          decision: "Keep workflows isolated",
          rationale:
            "Carousel and newsletter outputs have different schemas, review needs, visual generation, and delivery risks; independent paths prevent accidental coupling.",
        },
        {
          decision: "Stream real provider milestones",
          rationale:
            "Operators need truthful progress and actionable failures, not animation that continues after an upstream provider has already failed.",
        },
        {
          decision: "Constrain delivery before adding autonomy",
          rationale:
            "A fixed recipient, local LinkedIn route, identity checks, confirmations, and ledger are safer foundations than exposing general publishing first.",
        },
      ],
      evidence: [
        {
          label: "Live Crestline Studios surface",
          detail:
            "The live Crestline Studios site is the canonical public surface for the content automation and AI implementation work.",
          href: "https://www.crestlinestudios.dev/",
        },
        {
          label: "Reviewed automation implementation",
          detail:
            "The reviewed system documents separate carousel and newsletter routes, provider boundaries, real NDJSON progress, fixed-recipient delivery, LinkedIn validation, duplicate prevention, and explicit production limits.",
        },
      ],
      contributionBoundary:
        "Harshitha's work covers the content-automation product flow, workflow design, review boundaries, provider integration behavior, delivery safeguards, and end-to-end operator testing described here. Crestline Studios is the canonical public product surface; private credentials and distribution infrastructure are intentionally excluded.",
    },
  },
  {
    slug: "ai-internship-recommendation-engine",
    title: "AI Internship Recommendation Engine",
    eyebrow: "Accessible matching · public source",
    description:
      "A mobile-oriented recommendation application that turns a candidate profile into a focused shortlist of PM Internship Scheme opportunities using explicit, explainable weighted matching.",
    architectureLine: "React profile form → FastAPI scoring → ranked shortlist → SMTP or download",
    role: "Full-stack developer",
    status: "Public source · two-commit build",
    date: "2026-06-09",
    published: true,
    featured: false,
    challenge:
      "Large opportunity catalogs create decision overload, especially for first-generation applicants and users with limited digital confidence. The product needed a short, explainable result rather than a search interface that simply moved the filtering burden to the applicant.",
    approach:
      "A React profile flow collects education, skills, sector interest, and location. Harshitha migrated the recommendation logic to a Python FastAPI backend, scores all 20 sample opportunities, returns the top five with a score breakdown, and supports HTML email delivery with a client-side download fallback.",
    outcome:
      "The project demonstrates an end-to-end profile-to-shortlist flow, explicit ranking logic, server validation, responsive presentation, official application links, and two ways to retain the result.",
    contributions: [
      "Built the React/Vite applicant journey from scheme introduction through validated profile capture and ranked recommendations.",
      "Moved the recommendation engine from TypeScript to a Python FastAPI service with Pydantic request and response models.",
      "Implemented explainable scoring across education, skills, sector, and location and sorted all opportunities into a top-five shortlist.",
      "Added SMTP-backed HTML recommendation emails and retained a text-download fallback when email delivery is unavailable.",
      "Designed for mobile use, large touch targets, simple language, and low digital-literacy contexts.",
    ],
    stack: ["React", "TypeScript", "Vite", "Python", "FastAPI", "Pydantic", "SMTP", "Tailwind CSS"],
    metrics: [
      { value: "20", label: "sample opportunities" },
      { value: "4", label: "explicit matching dimensions" },
      { value: "Top 5", label: "ranked results per profile" },
      { value: "2", label: "result-retention paths" },
    ],
    links: [
      {
        label: "View source",
        href: "https://github.com/chittapragadaharshitha/AI-Internship-Recommendation-Engine",
      },
    ],
    technicalDossier: {
      systemContext:
        "The application is an explainable recommendation prototype for the PM Internship Scheme. It uses a deliberately small local opportunity dataset and deterministic scoring so a reviewer can understand why an internship ranks above another. It is not an opaque learned recommendation model.",
      architecture: [
        {
          name: "Candidate experience",
          responsibility:
            "Collects name, email, education, selected skills, sector interest, and preferred location with required-field and email-format validation.",
          technology: "React · TypeScript · Vite · React Router",
        },
        {
          name: "Recommendation API",
          responsibility:
            "Validates the candidate profile, scores every opportunity, sorts descending, and returns the top five internships with per-dimension breakdowns.",
          technology: "FastAPI · Pydantic · Python",
        },
        {
          name: "Opportunity catalog",
          responsibility:
            "Provides 20 sample internships with scheme IDs, education rules, skill requirements, sector, state, duration, stipend, and application context.",
          technology: "Typed in-memory records",
        },
        {
          name: "Result delivery",
          responsibility:
            "Formats the shortlist for the responsive results page, sends an HTML email through configured SMTP, or allows a local file fallback.",
          technology: "SMTP · MIME HTML · browser download",
        },
      ],
      flow: [
        {
          step: "Capture the profile",
          detail:
            "The form requires contact information, education, at least one skill, sector, and location before navigating to recommendations.",
        },
        {
          step: "Validate at the API boundary",
          detail:
            "Pydantic models validate the email and the shape of candidate and internship data before scoring runs.",
        },
        {
          step: "Score every opportunity",
          detail:
            "Education contributes up to 30 points, skills up to 40, sector 20, and location 10; an `Any Degree` or `Any Location` match receives partial credit.",
        },
        {
          step: "Rank and explain",
          detail:
            "The API sorts all 20 records by total score, returns the top five, and includes matching skills plus the dimension breakdown.",
        },
        {
          step: "Present or retain the shortlist",
          detail:
            "The UI highlights matched skills and application details; the user can request an HTML email or save a fallback file.",
        },
      ],
      implementation: [
        "Built the multi-page React flow and client-side profile persistence between form and recommendation routes.",
        "Implemented required-field and email-format checks before a profile can be scored.",
        "Created FastAPI models for candidate profiles, internship records, recommendation responses, and email requests.",
        "Ported the scoring engine to Python with explicit caps and partial-credit rules rather than an uninspectable model call.",
        "Added health, recommendation, catalog, sector, state, and send-recommendation endpoints.",
        "Built responsive recommendation cards with scheme IDs, stipends, location, duration, eligibility, required skills, and matched-skill highlighting.",
        "Generated personalized HTML email output with profile context, internship cards, and application actions.",
      ],
      reliability: [
        {
          risk: "An incomplete profile produces meaningless ranking.",
          control:
            "The client requires all ranking dimensions and the API validates typed request fields independently.",
        },
        {
          risk: "Email configuration is missing or delivery fails.",
          control:
            "The API returns explicit configuration/delivery errors and the interface retains a local download fallback.",
        },
        {
          risk: "A result feels arbitrary to the applicant.",
          control:
            "The engine uses fixed weights, returns score components, and highlights matched skills in the UI.",
        },
        {
          risk: "A large list recreates the original decision burden.",
          control:
            "The backend deliberately limits results to the top five after ranking the complete sample catalog.",
        },
      ],
      decisions: [
        {
          decision: "Use deterministic scoring",
          rationale:
            "For a small prototype dataset, explicit rules are easier to explain, test, and tune than branding a model call as AI without evidence.",
        },
        {
          decision: "Move scoring to FastAPI",
          rationale:
            "A typed backend centralizes ranking and email delivery and prevents recommendation rules from being duplicated across browser clients.",
        },
        {
          decision: "Optimize for a short list",
          rationale:
            "The target user benefits more from three to five actionable options than from another filter-heavy catalog.",
        },
      ],
      evidence: [
        {
          label: "Harshitha-authored public repository",
          detail:
            "Both commits are attributed to Harshitha, including the explicit migration of the recommendation engine from TypeScript to Python.",
          href: "https://github.com/chittapragadaharshitha/AI-Internship-Recommendation-Engine",
        },
        {
          label: "Inspectable scoring implementation",
          detail:
            "The public FastAPI source exposes the 30/40/20/10 caps, partial-credit behavior, top-five ranking, Pydantic models, and SMTP delivery path.",
          href: "https://github.com/chittapragadaharshitha/AI-Internship-Recommendation-Engine/blob/main/backend/main.py",
        },
      ],
      contributionBoundary:
        "This is a portfolio prototype using a curated 20-record sample catalog and deterministic weighted matching. It should not be represented as a deployed government system, a learned recommendation model, or a production integration with the official PM Internship Scheme database.",
    },
  },
  {
    slug: "absolute-prosthetics",
    title: "Absolute Prosthetics",
    eyebrow: "Customer-facing website · private source",
    description:
      "A production Next.js website for a prosthetics and orthotics provider, combining a specialist-service narrative with responsive contact paths, downloadable brochures, testimonial media, and deployment support.",
    architectureLine: "Next.js page shell → service components → media and brochures → contact actions",
    role: "Web developer",
    status: "Live site · iteratively maintained",
    date: "2026-05-25",
    published: true,
    featured: false,
    challenge:
      "A clinical services business needed to explain specialist prosthetic and orthotic work clearly, establish trust quickly, and give visitors practical ways to learn more or make contact on mobile and desktop.",
    approach:
      "The application uses a componentized Next.js page with dedicated hero, philosophy, services, process, testimonial, contact, header, footer, and WhatsApp surfaces. Real brand assets, brochures, service images, testimonial media, metadata, and deployment iterations replace placeholder content.",
    outcome:
      "The result is a live, maintainable customer-facing site with consistent branding, responsive service discovery, downloadable information, patient-facing proof, and multiple conversion paths.",
    contributions: [
      "Created the initial Next.js project and authored the complete site rebuild into reusable business sections.",
      "Integrated the transparent brand mark across the header and footer and added business-specific OpenGraph metadata.",
      "Added and corrected production service imagery, footer credits, brochure access, contact paths, and Vercel release triggers.",
      "Worked through pull-request iterations that added testimonial media and refined customer-facing details.",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Vercel Analytics", "Vercel"],
    metrics: [
      { value: "8", label: "composed page sections" },
      { value: "2", label: "downloadable service brochures" },
      { value: "3", label: "direct contact paths" },
      { value: "Live", label: "production deployment" },
    ],
    links: [
      {
        label: "Visit website",
        href: "https://absolute-prosthetics.vercel.app/",
      },
    ],
    technicalDossier: {
      systemContext:
        "This project is a production marketing and service-information site rather than an automation platform. Its engineering value is in translating a specialist healthcare business into a clear responsive information architecture, maintaining real assets and media, and repeatedly shipping updates without breaking the public experience.",
      architecture: [
        {
          name: "Application shell",
          responsibility:
            "Defines global metadata, theme behavior, analytics, typography, responsive layout, and the top-level composition of the site.",
          technology: "Next.js App Router · React · TypeScript",
        },
        {
          name: "Narrative sections",
          responsibility:
            "Separates hero, philosophy, services, care process, testimonials, and contact information into maintainable components with clear content ownership.",
          technology: "React components · Tailwind CSS",
        },
        {
          name: "Resource layer",
          responsibility:
            "Serves real brand marks, specialist service photography, patient/testimonial media, and prosthetic/orthotic brochures from stable public paths.",
          technology: "Next Image · static media · PDF downloads",
        },
        {
          name: "Conversion paths",
          responsibility:
            "Provides navigation, contact details, WhatsApp access, brochure downloads, and service calls to action across viewport sizes.",
          technology: "Responsive links · WhatsApp deep link · accessible controls",
        },
        {
          name: "Release surface",
          responsibility:
            "Builds and deploys the application through Vercel with production metadata and iterative release commits.",
          technology: "Vercel · OpenGraph metadata · Vercel Analytics",
        },
      ],
      flow: [
        {
          step: "Establish trust",
          detail:
            "The header and hero expose the provider identity, specialist positioning, and primary contact direction immediately.",
        },
        {
          step: "Explain the service model",
          detail:
            "Philosophy, service, and process sections move from the provider's approach into specific prosthetic and orthotic offerings and what a patient can expect.",
        },
        {
          step: "Provide supporting evidence",
          detail:
            "Service imagery, testimonial media, and downloadable brochures let visitors inspect more detail without leaving the business context.",
        },
        {
          step: "Offer a direct next action",
          detail:
            "Contact, WhatsApp, navigation, and footer paths remain available across desktop and mobile layouts.",
        },
        {
          step: "Release and refine",
          detail:
            "Production commits update imagery, brochures, testimonial media, metadata, and deployment state as business content changes.",
        },
      ],
      implementation: [
        "Rebuilt the site around focused React components rather than one monolithic page, separating content and responsive behavior by business section.",
        "Replaced placeholder presentation with the provider's transparent logo, real service imagery, brochures, contact information, and branded metadata.",
        "Implemented responsive header/footer behavior and service navigation that remains usable on narrow screens.",
        "Added downloadable prosthetic and orthotic brochures through stable public asset paths.",
        "Integrated testimonial media through a pull-request iteration and maintained production-safe media references.",
        "Added a WhatsApp contact surface and removed helper copy that distracted from the primary action.",
        "Configured OpenGraph presentation and triggered verified Vercel releases after content and asset fixes.",
      ],
      reliability: [
        {
          risk: "Large clinical imagery harms mobile load and layout stability.",
          control:
            "Next.js image handling, constrained aspect ratios, responsive sizing, and stable component containers protect the page structure.",
        },
        {
          risk: "A brochure or testimonial path breaks after deployment.",
          control:
            "Assets live under versioned public paths and production updates explicitly verify the release after media changes.",
        },
        {
          risk: "Contact actions disappear on small screens.",
          control:
            "The responsive header, contact section, footer, and WhatsApp action provide multiple independent routes to the business.",
        },
        {
          risk: "Search or social previews show generic inherited content.",
          control:
            "Business-specific layout metadata and OpenGraph assets are defined in the application shell.",
        },
      ],
      decisions: [
        {
          decision: "Compose the page from business sections",
          rationale:
            "Services, process, proof, and contact information change independently and are easier to maintain as focused components.",
        },
        {
          decision: "Keep brochures as direct assets",
          rationale:
            "Patients and referrers can download detailed information without requiring an account, form submission, or client-side viewer.",
        },
        {
          decision: "Offer redundant contact paths",
          rationale:
            "A healthcare-service visitor may prefer phone, page contact details, or WhatsApp; the interface should not force a single channel.",
        },
      ],
      evidence: [
        {
          label: "Live production website",
          detail:
            "The public Vercel deployment exposes the current responsive site, real assets, brochures, and contact paths.",
          href: "https://absolute-prosthetics.vercel.app/",
        },
        {
          label: "Private mixed-contributor Git history",
          detail:
            "Harshitha-authored commits include the initial project, full rebuild, logo/metadata work, imagery fixes, footer/contact refinements, and deployment updates; other contributors also authored or merged parts of the media and brochure work.",
        },
      ],
      contributionBoundary:
        "The private repository has mixed authorship. Harshitha's commits directly support the initial project, the full site rebuild, brand integration, metadata, imagery fixes, footer/contact refinements, and deployment work. Testimonial media and brochure changes include contributions or merges by others and are not presented as her sole implementation.",
    },
  },
  {
    slug: "pneumonia-detection-cnn",
    title: "Pneumonia Model Comparison Prototype",
    eyebrow: "Academic prototype · public source",
    description:
      "A Flask-based academic interface for loading a CSV dataset and comparing illustrative Random Forest, SVM, and CNN result summaries through JSON responses and generated accuracy charts.",
    architectureLine: "CSV upload → Flask routes → model-result summaries → cached Matplotlib chart",
    role: "Academic project developer",
    status: "Public prototype · non-diagnostic",
    date: "2025-08-17",
    published: true,
    featured: false,
    challenge:
      "The project explores how a simple web interface can present multiple classification-result summaries, confusion matrices, and comparative accuracy visualizations for a pneumonia-detection topic.",
    approach:
      "A Flask server accepts a CSV upload, exposes endpoints for running one or all named algorithms, accumulates result summaries, and renders a base64 Matplotlib chart. The committed source uses fixed illustrative metrics rather than training models at runtime.",
    outcome:
      "The repository demonstrates API routing, file handling, JSON response design, server-side chart generation, and comparison-state management, while remaining explicitly an academic visualization prototype rather than a medical model.",
    contributions: [
      "Built Flask routes for the home, upload, algorithm execution, chart generation, and accumulated-result reset flows.",
      "Implemented CSV ingestion with success/error JSON responses and in-memory dataset state.",
      "Represented precision, recall, F1, support, confusion matrix, and accuracy results for three algorithm labels.",
      "Generated and cached a base64 Matplotlib comparison chart for the accumulated results.",
    ],
    stack: ["Python", "Flask", "Flask-CORS", "Pandas", "Matplotlib", "JSON APIs"],
    metrics: [
      { value: "3", label: "algorithm result sets" },
      { value: "5", label: "HTTP routes in the committed prototype" },
      { value: "CSV", label: "accepted dataset format" },
      { value: "0", label: "trained models included in source" },
    ],
    links: [
      {
        label: "View source",
        href: "https://github.com/chittapragadaharshitha/Pneumonia-Detection-using-CNN",
      },
    ],
    technicalDossier: {
      systemContext:
        "The committed project is best understood as a web/API prototype for comparing model-result presentations. Its source does not contain a CNN architecture, image preprocessing pipeline, training loop, serialized model, or chest X-ray inference endpoint. The case study therefore documents the actual Flask and visualization work instead of repeating the repository title as a production claim.",
      architecture: [
        {
          name: "Flask application",
          responsibility:
            "Hosts the interface routes, upload handler, algorithm-selection endpoint, reset behavior, and chart endpoint.",
          technology: "Python · Flask · Flask-CORS",
        },
        {
          name: "Dataset intake",
          responsibility:
            "Accepts a multipart file, loads CSV content into a process-level Pandas DataFrame, and returns the dataset size or a parsing error.",
          technology: "Pandas · multipart upload",
        },
        {
          name: "Result registry",
          responsibility:
            "Returns fixed classification reports, confusion matrices, and accuracy values for Random Forest, SVM, and CNN labels and accumulates selected outputs in memory.",
          technology: "Python dictionaries · JSON",
        },
        {
          name: "Visualization layer",
          responsibility:
            "Builds a comparative accuracy bar chart, annotates percentages, encodes the PNG as base64, and caches it by the selected-result signature.",
          technology: "Matplotlib Agg · BytesIO · base64",
        },
      ],
      flow: [
        {
          step: "Upload a dataset",
          detail:
            "The browser posts a CSV file; Flask validates that a file exists and Pandas parses it into in-memory state.",
        },
        {
          step: "Select comparison scope",
          detail:
            "The client requests Random Forest, SVM, CNN, or all result sets through the algorithm endpoint.",
        },
        {
          step: "Return illustrative metrics",
          detail:
            "The server returns fixed precision, recall, F1, support, confusion matrix, and accuracy structures and stores them in the accumulated-result map.",
        },
        {
          step: "Render a comparison chart",
          detail:
            "The chart endpoint converts accumulated accuracies into a labeled bar chart and returns a base64 PNG, reusing the cache for an identical result signature.",
        },
      ],
      implementation: [
        "Defined Flask endpoints for page rendering, CSV upload, algorithm selection, accumulated state, and chart generation.",
        "Handled missing files, CSV parsing failures, unknown algorithm names, and chart-generation exceptions through JSON responses.",
        "Structured classification-report and confusion-matrix payloads consistently across three named algorithms.",
        "Used Matplotlib's non-interactive Agg backend so chart rendering can run in a server process.",
        "Encoded generated figures as base64 PNG data and cached charts by a key derived from the accumulated accuracy state.",
      ],
      reliability: [
        {
          risk: "A missing or invalid upload crashes the request.",
          control:
            "The upload route checks filename presence and catches Pandas parsing exceptions before returning structured errors.",
        },
        {
          risk: "Server-side plotting requires a desktop display.",
          control:
            "Matplotlib uses the Agg backend and writes figures to an in-memory buffer.",
        },
        {
          risk: "Repeated chart requests redo the same rendering work.",
          control:
            "A result-derived cache key reuses the base64 chart for unchanged accumulated metrics.",
        },
        {
          risk: "Illustrative metrics are mistaken for a validated medical model.",
          control:
            "The portfolio explicitly labels the values as fixed prototype data and the project as non-diagnostic.",
        },
      ],
      decisions: [
        {
          decision: "Document the implementation as a comparison prototype",
          rationale:
            "The public source supports Flask, data-loading, JSON, and charting claims, but it does not support a trained-CNN or X-ray inference claim.",
        },
        {
          decision: "Keep chart output in memory",
          rationale:
            "BytesIO and base64 avoid temporary image files for a small academic demo.",
        },
        {
          decision: "Use a consistent metrics schema",
          rationale:
            "Matching report and matrix shapes make it simpler for one client UI to compare different algorithm labels.",
        },
      ],
      evidence: [
        {
          label: "Harshitha-authored public repository",
          detail:
            "All three visible commits are attributed to Harshitha and expose the complete 150-line Python prototype plus the project report.",
          href: "https://github.com/chittapragadaharshitha/Pneumonia-Detection-using-CNN",
        },
        {
          label: "Source-level limitation",
          detail:
            "The committed `code` file returns hard-coded illustrative RF, SVM, and CNN metrics; it does not train or load a model. This boundary is intentionally public here.",
          href: "https://github.com/chittapragadaharshitha/Pneumonia-Detection-using-CNN/blob/main/code",
        },
      ],
      contributionBoundary:
        "This is an academic Flask visualization prototype, not a diagnostic device and not evidence of a trained CNN. No medical use, clinical accuracy, or 97% validated performance is claimed because the public source contains fixed illustrative metrics rather than a training or inference implementation.",
    },
  },
  {
    slug: "openclaw-setup",
    title: "OpenClaw & Hermes Client Deployments",
    eyebrow: "Self-hosted agent implementation · live service",
    description:
      "A client implementation service for turning OpenClaw or Hermes into a secure, self-hosted operating agent: workflow discovery, infrastructure provisioning, Docker isolation, credentials, integrations, acceptance testing, and controlled handoff.",
    architectureLine: "Workflow discovery → runtime selection → client-owned host → integrations → verified handoff",
    role: "AI product engineer and client implementation operator",
    status: "Live service · production deployments",
    date: "2026-08-10",
    published: true,
    featured: true,
    challenge:
      "Installing an open-source agent is only the first step. A useful production deployment must reconcile host security, Docker isolation, OAuth and API permissions, multiple communication channels, credential custody, workflow-specific behavior, and a handoff that leaves the client in control.",
    approach:
      "The service starts with workflow discovery, selects OpenClaw or Hermes for the operating requirements, deploys on infrastructure owned by the client, hardens the host and runtime boundary, configures each provider independently, tests real end-to-end scenarios, and transfers operational control.",
    outcome:
      "Clients receive a self-hosted agent connected to the tools they actually use, with documented ownership of infrastructure and credentials, an explicit security boundary, verified workflows, and a support path for the first production edge cases.",
    contributions: [
      "Owns the public client implementation surface and works directly with customers from workflow discovery through deployment, testing, handoff, and support.",
      "Maps requested outcomes—such as inbox triage, calendar coordination, Slack monitoring, or mobile agent access—into integrations, permissions, triggers, and acceptance checks.",
      "Applies deployment controls around Docker isolation, firewall and SSH hardening, encrypted credential storage, and removal of implementation access after handoff.",
      "Validates Gmail, Calendar, Slack, WhatsApp, Telegram, and Notion connections as separate failure domains instead of treating one successful login as a complete deployment.",
      "Maintains the service experience around booking, implementation scope, technical expectations, ownership, and 14-day post-launch support.",
    ],
    stack: [
      "OpenClaw",
      "Hermes",
      "Docker",
      "Linux",
      "VPS",
      "SSH",
      "OAuth",
      "Gmail",
      "Google Calendar",
      "Slack",
      "WhatsApp",
      "Telegram",
      "Notion",
      "Next.js",
      "Azure Static Web Apps",
    ],
    metrics: [
      { value: "6", label: "named productivity and communication integrations" },
      { value: "14 days", label: "post-launch support included" },
      { value: "1", label: "client-owned deployment boundary" },
      { value: "0", label: "implementation access retained after handoff" },
    ],
    links: [
      {
        label: "Visit live service",
        href: "https://openclawsetup.dev/",
      },
    ],
    note:
      "The service runs on client-owned infrastructure. Provider availability and exact integrations depend on each customer's environment and permissions.",
    technicalDossier: {
      systemContext:
        "OpenClaw Setup is the public service surface for Harshitha's OpenClaw and Hermes implementations. The engineering work is not merely launching a container: it is selecting the right runtime, creating a bounded operating environment, assigning minimum necessary provider permissions, connecting communication surfaces, translating a client's recurring work into testable behaviors, and transferring control without leaving a hidden dependency on the implementer.",
      architecture: [
        {
          name: "Discovery and acceptance layer",
          responsibility:
            "Turns loosely described work such as email triage or meeting preparation into named channels, required permissions, expected outputs, escalation rules, and pass/fail scenarios.",
          technology: "Workflow mapping · acceptance criteria · human review rules",
        },
        {
          name: "Client-owned host",
          responsibility:
            "Provides the durable compute and storage boundary on a VPS, Mac mini, or Linux server controlled by the client rather than a shared service account.",
          technology: "Linux · VPS or Mac mini · SSH",
        },
        {
          name: "Sandboxed agent runtime",
          responsibility:
            "Runs OpenClaw or Hermes inside an isolated boundary and limits host exposure through firewall rules, hardened remote access, and deliberate filesystem or service access.",
          technology: "OpenClaw · Hermes · Docker · firewall hardening",
        },
        {
          name: "Credential and permission boundary",
          responsibility:
            "Stores provider credentials outside public code, scopes OAuth/API access to the requested jobs, and returns custody entirely to the client after implementation.",
          technology: "Encrypted secrets · OAuth · provider API keys",
        },
        {
          name: "Channel and productivity adapters",
          responsibility:
            "Connects the agent to email, calendar, team chat, mobile messaging, and knowledge tools while testing each provider's authentication and behavior independently.",
          technology: "Gmail · Calendar · Slack · WhatsApp · Telegram · Notion",
        },
        {
          name: "Service and acquisition surface",
          responsibility:
            "Explains scope, captures bookings, publishes implementation guidance, and deploys as a static web surface independent from client agent runtimes.",
          technology: "Next.js · Azure Static Web Apps · custom DNS · Cal.com",
        },
      ],
      flow: [
        {
          step: "Define the operating job",
          detail:
            "Harshitha identifies the recurring work, systems involved, acceptable autonomous behavior, actions that require review, and observable acceptance criteria.",
        },
        {
          step: "Provision the ownership boundary",
          detail:
            "The agent is installed on a client-owned VPS, Mac mini, or Linux host so infrastructure, data, and shutdown authority remain with the customer.",
        },
        {
          step: "Harden and isolate the runtime",
          detail:
            "Docker isolation, firewall rules, SSH controls, and encrypted credential handling are configured before production integrations are enabled.",
        },
        {
          step: "Connect providers one by one",
          detail:
            "Gmail, Calendar, Slack, WhatsApp, Telegram, and Notion are authorized and validated as independent integrations with distinct permissions and failure behavior.",
        },
        {
          step: "Exercise real workflows",
          detail:
            "Representative inbox, calendar, messaging, and knowledge scenarios are executed end to end, including escalation and human-review paths rather than only connection tests.",
        },
        {
          step: "Transfer and stabilize",
          detail:
            "The client receives operational ownership, implementation access is removed, and the first production edge cases are handled during a 14-day support period.",
        },
      ],
      implementation: [
        "Converted customer goals into a deployment checklist covering hosts, accounts, channels, permissions, expected agent behavior, human review, and acceptance tests.",
        "Structured the installation around a client-owned host instead of a shared black-box SaaS environment.",
        "Selects OpenClaw or Hermes according to the client's channel, workflow, tool, and runtime requirements instead of forcing every deployment into one agent framework.",
        "Applied Docker sandboxing, firewall restrictions, SSH hardening, and encrypted credential storage as baseline deployment work rather than optional follow-up security.",
        "Configured and separately validated Gmail, Google Calendar, Slack, WhatsApp, Telegram, and Notion integration paths.",
        "Tested real operational scenarios and tuned the agent around expected actions, escalation behavior, and user-facing outputs.",
        "Designed the handoff so the customer owns infrastructure and credentials and implementation access can be removed after setup.",
        "Operates the public service surface used for positioning, booking, expectation-setting, and post-launch support.",
      ],
      reliability: [
        {
          risk: "A successful installation is mistaken for a working business workflow.",
          control:
            "Acceptance checks exercise complete email, calendar, messaging, and knowledge scenarios with expected outcomes and review points.",
        },
        {
          risk: "An OAuth token is over-scoped or one provider silently fails.",
          control:
            "Each integration is authorized and tested independently with only the permissions required for the agreed workflow.",
        },
        {
          risk: "The agent can reach more of the host than the job requires.",
          control:
            "Docker isolation, firewall rules, hardened SSH, and deliberate host access reduce the blast radius of the runtime.",
        },
        {
          risk: "The implementer remains an undisclosed dependency after launch.",
          control:
            "Infrastructure and credentials stay client-owned, implementation access is removed, and ownership is made explicit during handoff.",
        },
        {
          risk: "Edge cases appear only after the agent meets real traffic.",
          control:
            "A 14-day stabilization window covers early workflow tuning and failures that cannot be reproduced in a one-session setup test.",
        },
      ],
      decisions: [
        {
          decision: "Deploy into the client's infrastructure",
          rationale:
            "Client ownership reduces platform lock-in, keeps operational data inside an explicit boundary, and gives the customer final control over access and shutdown.",
        },
        {
          decision: "Harden before connecting business accounts",
          rationale:
            "Security controls are most effective when they define the runtime from the start, before email, messages, calendars, or credentials enter the system.",
        },
        {
          decision: "Test workflows, not just integrations",
          rationale:
            "A green OAuth callback proves connectivity, not that an agent handles ambiguity, review, and escalation correctly in the client's operating context.",
        },
        {
          decision: "Keep the marketing site separate from agent runtimes",
          rationale:
            "A static Azure-hosted acquisition surface can change or deploy without sharing code, secrets, or failure modes with any customer's agent environment.",
        },
      ],
      evidence: [
        {
          label: "Live service surface",
          detail:
            "The public site documents the deployment scope, Docker and host hardening, supported integration categories, client ownership model, booking path, and support window.",
          href: "https://openclawsetup.dev/",
        },
        {
          label: "Production web delivery",
          detail:
            "The Next.js acquisition surface is statically exported to Azure Static Web Apps on the custom domain, with DNS, booking, analytics, blog, and structured metadata separated from client runtime infrastructure.",
        },
        {
          label: "Named operator responsibility",
          detail:
            "Harshitha is publicly identified as the AI product engineer clients work with directly across discovery, setup, validation, handoff, and support.",
          href: "https://openclawsetup.dev/#team",
        },
      ],
      contributionBoundary:
        "This case study covers Harshitha's current responsibility as the client-facing implementation operator for OpenClaw Setup and Hermes deployments: workflow discovery, runtime selection, secure deployment, integration validation, handoff, and support. Service delivery is distinguished from authorship of the upstream OpenClaw or Hermes projects.",
    },
  },
  {
    slug: "currency-converter",
    title: "Currency Converter",
    eyebrow: "Java desktop exercise · public source",
    description:
      "An early single-window Java Swing exercise covering desktop layout, user input, event-driven execution, currency selection, static-rate arithmetic, and invalid-number handling.",
    architectureLine: "Swing form → ActionListener → conversion function → result state",
    role: "Java developer",
    status: "Public learning project",
    date: "2025-03-09",
    published: true,
    featured: false,
    challenge:
      "The project was a compact way to practice object-oriented structure, desktop widgets, event listeners, numeric parsing, branching conversion logic, and UI error feedback in Java.",
    approach:
      "A JFrame owns the amount field, source and target currency selectors, convert button, and result label. An ActionListener parses the amount and calls a dedicated conversion method using static USD-to-EUR and USD-to-GBP rates.",
    outcome:
      "The repository captures an early event-driven desktop application and a clear separation between UI setup, click handling, and arithmetic, with an intentionally limited three-currency scope.",
    contributions: [
      "Built the JFrame application and BoxLayout-based form using Java Swing and AWT event APIs.",
      "Connected the Convert button to numeric parsing and a dedicated conversion method through an ActionListener.",
      "Implemented USD, EUR, and GBP selection with static conversion constants and a same-currency fallback rate.",
      "Handled non-numeric input by replacing the result label with a direct validation message.",
    ],
    stack: ["Java", "Swing", "AWT events"],
    metrics: [
      { value: "3", label: "selectable currencies" },
      { value: "2", label: "static base rates" },
      { value: "1", label: "desktop window" },
      { value: "2", label: "Harshitha-authored commits" },
    ],
    links: [
      {
        label: "View source",
        href: "https://github.com/chittapragadaharshitha/Currency-Converter",
      },
    ],
    technicalDossier: {
      systemContext:
        "This is a small learning project, not a live foreign-exchange product. Its value is the direct use of Java's desktop UI and event model in one inspectable source file. Rates are constants, there is no provider API, and the conversion matrix is intentionally incomplete.",
      architecture: [
        {
          name: "Desktop shell",
          responsibility:
            "Owns the application lifecycle, window title and size, close behavior, and visibility on Swing's event-dispatch thread.",
          technology: "JFrame · SwingUtilities.invokeLater",
        },
        {
          name: "Input form",
          responsibility:
            "Collects an amount and source/target denominations through one text field and two combo boxes arranged vertically.",
          technology: "JPanel · BoxLayout · JTextField · JComboBox",
        },
        {
          name: "Event boundary",
          responsibility:
            "Runs conversion only after an explicit button click and catches malformed numeric input before arithmetic.",
          technology: "JButton · ActionListener · NumberFormatException",
        },
        {
          name: "Conversion function",
          responsibility:
            "Chooses a static rate from nested source/target branches and multiplies the parsed amount by that rate.",
          technology: "Java switch statements · double arithmetic",
        },
      ],
      flow: [
        {
          step: "Launch on the UI thread",
          detail:
            "The main method schedules construction and visibility through `SwingUtilities.invokeLater`.",
        },
        {
          step: "Capture amount and denominations",
          detail:
            "The user enters a numeric amount and selects USD, EUR, or GBP in the source and target combo boxes.",
        },
        {
          step: "Handle the click",
          detail:
            "The ActionListener calls `convertCurrency`, which parses the text and reads the selected combo-box values.",
        },
        {
          step: "Select and apply a rate",
          detail:
            "The conversion function selects a static branch and returns `amount × rate`; malformed amounts are caught and reported in the result label.",
        },
      ],
      implementation: [
        "Extended `JFrame` to keep window state and UI construction inside one application class.",
        "Created a vertical form with labeled amount input, source currency, target currency, action button, and result label.",
        "Used an anonymous `ActionListener` to connect the button event to application logic.",
        "Separated input parsing in `convertCurrency` from rate selection and arithmetic in `convert`.",
        "Defined USD-to-EUR and USD-to-GBP constants and same-currency fallback behavior.",
        "Caught `NumberFormatException` and surfaced an actionable invalid-number message instead of allowing the event handler to fail.",
      ],
      reliability: [
        {
          risk: "The amount field contains non-numeric text.",
          control:
            "Numeric parsing is wrapped in a `try/catch`, and the result label shows a validation message.",
        },
        {
          risk: "UI construction runs off Swing's event-dispatch thread.",
          control:
            "The application launches through `SwingUtilities.invokeLater`.",
        },
        {
          risk: "Static rates are mistaken for live market values.",
          control:
            "The portfolio labels the project as a learning exercise and states that no exchange-rate API is connected.",
        },
        {
          risk: "Unsupported cross-rate branches produce misleading output.",
          control:
            "The case study discloses the incomplete conversion matrix rather than presenting the snapshot as production-ready finance software.",
        },
      ],
      decisions: [
        {
          decision: "Use Swing instead of a web UI",
          rationale:
            "The learning goal was Java object-oriented and event-driven desktop programming without a server or browser runtime.",
        },
        {
          decision: "Keep rates as constants",
          rationale:
            "Static values keep the exercise focused on UI events and arithmetic, at the cost of freshness and complete cross-currency behavior.",
        },
        {
          decision: "Separate conversion from click handling",
          rationale:
            "A dedicated arithmetic method is easier to inspect and later replace with a complete rate table or provider adapter.",
        },
      ],
      evidence: [
        {
          label: "Harshitha-authored public source",
          detail:
            "Both repository commits are attributed to Harshitha, and the complete implementation is visible in one Java file.",
          href: "https://github.com/chittapragadaharshitha/Currency-Converter/blob/main/CurrencyConverter.java",
        },
        {
          label: "Explicit project limits",
          detail:
            "The snapshot has no live-rate API, persistence, tests, localization, or complete conversion matrix; it is presented as an early Java exercise.",
        },
      ],
      contributionBoundary:
        "This is an early educational desktop application with static rates and incomplete production behavior. The portfolio claims the Swing UI, event handling, parsing, branching arithmetic, and validation that are visible in source—nothing more.",
    },
  },
];

export const allProjects = projects.filter((project) => project.published);
