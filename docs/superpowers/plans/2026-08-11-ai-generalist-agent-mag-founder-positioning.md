# AI Generalist and Agent Mag Founder Positioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish Harshitha as Founder of Agent Mag and present her complete AI product, agent, integration, and operations work through a concise portfolio with evidence-backed case studies.

**Architecture:** Keep the portfolio's current project-data and dossier renderer, add two flagship project records, and update the homepage/work/story hierarchy. Treat Agent Mag organization identity, Agent Mag product identity, and Harshitha's portfolio as separate deployable surfaces with independent content-contract tests.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Node content-contract scripts, GitHub REST API, Azure App Service, Caddy/systemd portfolio deployment.

---

### Task 1: Lock the Agent Mag organization ownership and public founder profile

**Files:**
- Modify: `Agent-mag/.github/profile/README.md`
- Create: `Agent-mag/.github/scripts/verify-founder-profile.mjs`

- [ ] **Step 1: Write the failing founder-profile contract**

Create a Node script that reads `profile/README.md`, requires `Harshitha Chittapragada`, `Founder`, `https://harshitha.dev`, and her LinkedIn URL, and rejects `Harshith Vaddiparthy`.

- [ ] **Step 2: Run the contract and verify RED**

Run: `node scripts/verify-founder-profile.mjs`

Expected: failure listing the missing founder identity.

- [ ] **Step 3: Update the organization profile**

Add a concise Founder section with Harshitha's portrait, role, portfolio, LinkedIn, and a description of Agent Mag as the product and open ecosystem she leads.

- [ ] **Step 4: Update organization metadata**

Use the GitHub REST API to set the organization description to `AI agent platform and open ecosystem founded by Harshitha Chittapragada.` while preserving the website and contact email.

- [ ] **Step 5: Verify GREEN and access state**

Run the founder script, query Harshitha's membership as `admin / active`, list members, and probe both Harshith accounts across every organization repository.

- [ ] **Step 6: Commit and push**

Commit message: `feat: establish Harshitha as Agent Mag founder`

### Task 2: Remove stale founder and admin identity from the Agent Mag product

**Files:**
- Create: `scripts/verify-founder-identity.mjs`
- Modify: `package.json`
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/masthead/page.tsx`
- Modify: `src/app/courses/page.tsx`
- Modify: `src/lib/chat/openclaw-workspace/USER.md`
- Modify: `src/lib/auth-allowlist.ts`
- Modify: `src/lib/partners/access.ts`
- Modify: `src/app/api/feedback/route.ts`

- [ ] **Step 1: Write the failing product identity contract**

Require Harshitha's full name, Founder role, portfolio, and LinkedIn across the public identity files. Reject `Harshith Vaddiparthy`, personal Harshith email domains in the modified ownership files, and `TBD` masthead entries.

- [ ] **Step 2: Run the contract and verify RED**

Run: `pnpm verify:founder`

Expected: failure naming the stale About, masthead, courses, chat, access, and feedback references.

- [ ] **Step 3: Replace public founder surfaces**

Update About and Masthead to name Harshitha as Founder and AI Product Engineer. Link her portfolio and LinkedIn. Replace fake staff with the Agent Mag Editorial collective.

- [ ] **Step 4: Replace operational identity surfaces**

Set course instructors to Harshitha, set chat workspace admin identity to Harshitha, replace owner allowlists with her Gmail address, and route feedback to `hello@theagentmag.com`.

- [ ] **Step 5: Verify GREEN, typecheck, and build**

Run: `pnpm verify:founder && pnpm typecheck && pnpm build`

Expected: all commands exit 0.

- [ ] **Step 6: Commit and push**

Commit message: `feat: make Harshitha the Agent Mag founder`

### Task 3: Define the expanded portfolio content contract

**Files:**
- Modify: `scripts/verify-portfolio-content.mjs`

- [ ] **Step 1: Add requirements for the new positioning**

Require the phrases `Founder of Agent Mag`, `AI Product Engineer`, `Claude Code`, `Codex`, `Jarvis`, `492`, `86`, `62`, `16`, `OpenClaw`, and `Hermes`. Require project slugs `agent-mag-skills` and `jarvis-multi-agent-operations`.

- [ ] **Step 2: Run the contract and verify RED**

Run: `pnpm verify:content`

Expected: failure for missing founder positioning and missing project slugs.

### Task 4: Add Agent Mag Skills and Jarvis dossiers

**Files:**
- Modify: `lib/projects.ts`

- [ ] **Step 1: Expand the AgentMag flagship record**

Reframe the existing AgentMag entry as the product family Harshitha founded: public builder ecosystem plus governed operations platform. Include reviewed counts for pages, APIs, workflows, documentation, CLI commands, and direct Harshitha engineering history.

- [ ] **Step 2: Add Agent Mag Skills and Open-Source Ecosystem**

Add a dossier for the 492-skill public registry, declarative bundle format, contribution path, CLI lifecycle, install API, synchronization, release automation, and developer tools.

- [ ] **Step 3: Add Jarvis Multi-Agent Operations Assistant**

Add a dossier for the verified master-agent topology, email/calendar/meeting agents, Gmail, Google Calendar, Fireflies, memory, chat/voice entry points, tool-call controls, and confirmation boundaries.

- [ ] **Step 4: Strengthen OpenClaw/Hermes positioning**

Update the existing client-deployment entry to name Hermes alongside OpenClaw and explain repeatable agent setup for client-owned infrastructure.

- [ ] **Step 5: Run the content contract and verify GREEN**

Run: `pnpm verify:content`

Expected: `Portfolio content contract passed.`

### Task 5: Rebuild the homepage and work hierarchy

**Files:**
- Modify: `app/components/home-content.tsx`
- Modify: `app/work/page.tsx`
- Modify: `app/story/page.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/components/structured-data.tsx`

- [ ] **Step 1: Update the homepage identity**

Use `AI Product Engineer · Founder of Agent Mag` and the value proposition `I turn operational ideas into working AI systems.` Add four linked proof rows and a compact roadmap-to-operations capability line.

- [ ] **Step 2: Reorder flagship work**

Prioritize AgentMag, Agent Mag Skills, Jarvis, Enterprise Hiring, OpenClaw/Hermes, and Content Automation. Keep smaller projects below.

- [ ] **Step 3: Update the story page**

Explain her roadmap, architecture, AI-assisted implementation, integration, deployment, and operations method. Name Claude Code and Codex without presenting them as substitutes for engineering judgment.

- [ ] **Step 4: Update metadata and structured data**

Add Founder and AI product engineering language to page metadata and Person schema while preserving current URLs and portrait assets.

- [ ] **Step 5: Verify typecheck and build**

Run: `pnpm verify:content && pnpm exec tsc --noEmit && pnpm build`

Expected: all commands exit 0 and ten project routes are generated.

### Task 6: Deploy and verify every public surface

**Files:**
- No source changes expected.

- [ ] **Step 1: Push portfolio `main`**

Push to `chittapragadaharshitha/harshitha.dev`, fast-forward the server checkout, rebuild, and restart `harshitha-dev.service`.

- [ ] **Step 2: Verify Agent Mag deployment**

Wait for the Agent Mag deployment workflow and confirm the live About and Masthead identify Harshitha and contain no old founder name.

- [ ] **Step 3: Verify portfolio routes**

Check HTTP 200 and required dossier headings for all ten project routes. Check homepage founder text, story tooling text, first-session intro marker, portrait, metadata, and absence of Harshith Ventures.

- [ ] **Step 4: Verify GitHub organization identity and permissions**

Confirm organization profile founder links, Harshitha `admin / active`, sole visible membership, and no direct access for either Harshith account.

- [ ] **Step 5: Send macOS completion notification**

Notify the user only after all live checks pass.

