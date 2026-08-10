# Technical Work Dossiers and Session Intro Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore a once-per-tab-session `Harshitha` intro and turn every portfolio project into a code-grounded engineering dossier while positioning Harshitha toward enterprise-grade architecture.

**Architecture:** A root client component owns the versioned session intro and is suppressed before hydration through a small head script plus an HTML data attribute. `lib/projects.ts` remains the single content source but gains a typed technical dossier for every project; one shared detail renderer presents architecture, execution flow, implementation, reliability, decisions, evidence, and contribution boundaries. A Node content contract protects required evidence and prevents inherited or inflated claims.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 3, Framer Motion, Node content-contract checks, pnpm, systemd/Caddy production deployment.

---

## File map

- Create `app/components/site-intro.tsx`: session storage, timing, reduced-motion, scroll cleanup, and intro markup.
- Modify `app/layout.tsx`: pre-hydration session check and one root intro mount.
- Modify `global.css`: intro reveal/exit animations and reduced-motion behavior.
- Modify `lib/projects.ts`: dossier types, compact architecture lines, and detailed evidence-backed content for all seven projects.
- Modify `app/work/[slug]/page.tsx`: shared engineering-dossier renderer.
- Modify `app/work/page.tsx`: concrete architecture summaries and engineering-case-study affordances.
- Modify `app/components/home-content.tsx`: enterprise-grade systems positioning.
- Modify `app/story/page.tsx`: enterprise-architecture career direction and stronger copy.
- Modify `scripts/verify-portfolio-content.mjs`: failing-first dossier, intro, technical-term, and overclaim checks.
- Modify `docs/superpowers/specs/2026-08-10-technical-work-dossiers-and-session-intro-design.md`: record the expanded all-project scope.

### Task 1: Establish the failing content and interaction contract

**Files:**
- Modify: `scripts/verify-portfolio-content.mjs`

- [ ] **Step 1: Add all-project dossier and intro requirements**

Add these constants and validations:

```js
const expectedProjectSlugs = [
  "agentmag",
  "enterprise-hiring-automation",
  "content-automation-studio",
  "ai-internship-recommendation-engine",
  "absolute-prosthetics",
  "pneumonia-detection-cnn",
  "currency-converter",
];

const dossierHeadings = [
  "System architecture",
  "End-to-end execution",
  "What Harshitha implemented",
  "Reliability engineering",
  "Technical decisions",
  "Evidence and scope",
];

for (const slug of expectedProjectSlugs) {
  if (!source.includes(`slug: "${slug}"`)) problems.push(`Missing project: ${slug}`);
}

const dossierCount = (source.match(/technicalDossier:/g) ?? []).length;
if (dossierCount < expectedProjectSlugs.length) {
  problems.push(`Expected ${expectedProjectSlugs.length} technical dossiers, found ${dossierCount}`);
}

for (const heading of dossierHeadings) {
  if (!source.includes(heading)) problems.push(`Missing dossier heading: ${heading}`);
}
```

Require the intro source to include `harshitha:intro:v1`, `sessionStorage`, `aria-hidden`, `prefers-reduced-motion`, and reject `localStorage`. Require the career phrase `enterprise-grade architecture` and reject `role: "Enterprise Architect"`.

- [ ] **Step 2: Run the contract and verify it fails**

Run:

```bash
pnpm verify:content
```

Expected: non-zero exit with missing technical dossiers, intro contract, dossier headings, and enterprise-architecture positioning.

- [ ] **Step 3: Commit the failing contract**

```bash
git add scripts/verify-portfolio-content.mjs docs/superpowers/specs/2026-08-10-technical-work-dossiers-and-session-intro-design.md
git commit -m "test: define technical portfolio contract"
```

### Task 2: Implement the once-per-tab-session intro

**Files:**
- Create: `app/components/site-intro.tsx`
- Modify: `app/layout.tsx`
- Modify: `global.css`

- [ ] **Step 1: Create the client intro component**

Implement these exported constants and state transitions:

```tsx
"use client";

import { useEffect, useState } from "react";

export const INTRO_STORAGE_KEY = "harshitha:intro:v1";
export const INTRO_EXIT_MS = 950;
export const INTRO_REMOVE_MS = 1450;

type Phase = "enter" | "exit";

export function SiteIntro() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>("enter");

  useEffect(() => {
    try {
      if (sessionStorage.getItem(INTRO_STORAGE_KEY)) {
        setVisible(false);
        return;
      }
      sessionStorage.setItem(INTRO_STORAGE_KEY, "seen");
    } catch {}

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const exitTimer = window.setTimeout(() => setPhase("exit"), reduced ? 50 : INTRO_EXIT_MS);
    const removeTimer = window.setTimeout(() => setVisible(false), reduced ? 140 : INTRO_REMOVE_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;
  return (
    <div className={`site-intro site-intro--${phase}`} aria-hidden="true">
      <div className="site-intro__signature">
        <span>Harshitha</span>
        <span className="site-intro__rule" />
      </div>
    </div>
  );
}
```

Ensure body overflow is also restored when the remove timer fires, not only on unmount cleanup.

- [ ] **Step 2: Add pre-hydration suppression and mount once**

In `app/layout.tsx`, define a constant inline script that checks `sessionStorage.getItem("harshitha:intro:v1")` and sets `document.documentElement.dataset.introSeen = "true"`. Catch storage exceptions. Render the script in `<head>` and `<SiteIntro />` as the first child of `<body>`.

- [ ] **Step 3: Add visual and reduced-motion rules**

In `global.css`, add fixed full-screen charcoal styling at a controlled z-index, a Cal Sans signature reveal, a rule expansion, and an upward overlay exit using only transform and opacity. Add:

```css
html[data-intro-seen="true"] .site-intro { display: none; }

@media (prefers-reduced-motion: reduce) {
  .site-intro,
  .site-intro__signature,
  .site-intro__rule { animation: none !important; transition-duration: 100ms !important; }
}
```

- [ ] **Step 4: Run type and content checks**

```bash
pnpm exec tsc --noEmit
pnpm verify:content
```

Expected: TypeScript passes; content contract still fails only on dossier/copy requirements.

- [ ] **Step 5: Commit the intro**

```bash
git add app/components/site-intro.tsx app/layout.tsx global.css
git commit -m "feat: restore first-session Harshitha intro"
```

### Task 3: Build the typed project evidence model and all seven dossiers

**Files:**
- Modify: `lib/projects.ts`

- [ ] **Step 1: Add dossier types and card architecture line**

Add `architectureLine: string` to `Project`, make `technicalDossier: TechnicalDossier` required, and define:

```ts
export interface ArchitectureComponent {
  name: string;
  responsibility: string;
  technology: string;
}

export interface FlowStep { step: string; detail: string; }
export interface ReliabilityControl { risk: string; control: string; }
export interface TechnicalDecision { decision: string; rationale: string; }
export interface EvidenceItem { label: string; detail: string; href?: string; }

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
```

- [ ] **Step 2: Write the AgentMag dossier**

Use the verified platform architecture: Next.js Studio, Hono control plane, Trigger.dev durable workers, PostgreSQL/Drizzle state, Nango/provider integration layer, and OpenAI/Anthropic reasoning. Explain workflow validation, durable runs, approval pauses, deterministic provider actions, audit persistence, multi-company context, typed reusable blocks, and the 17 integrations / 16 blocks / 31 migrations / 4 deployable surfaces. State explicitly that these figures describe the codebase and that Harshitha's attributable role is product building, workflow design, operator-flow testing, and operationalization across the nine-month cycle—not sole authorship of every module.

- [ ] **Step 3: Write the Enterprise Hiring Automation dossier from Git evidence**

Cover the two repository stages and Harshitha-authored work: Microsoft Graph full-message intake; HTML/thread normalization; notification and self-loop rejection; section-aware extraction; 385-skill/1,165-alias categorization in the later codebase; weighted candidate scoring; false-SAP fixes; unread/message/replied-state deduplication; restart recovery; PostgreSQL pooling in the first implementation; Cosmos DB and Azure Functions in the later production iteration; forwarded sender/CC reconstruction; resume-attachment implementation during system evolution; retries, timeouts, result checking, date guards, recipient validation; Entra ID/NextAuth; Key Vault; Azure App Service; and five-minute timer polling. Do not imply historical resume attachment behavior is necessarily enabled in the current deployment.

- [ ] **Step 4: Write the Content Automation Studio dossier with ownership boundary**

Cover the Next.js operator dashboard, Firecrawl research, OpenAI structured writing, OpenAI Image artwork, NDJSON progress, isolated carousel/newsletter state, citations, fixed-recipient Resend testing, local-only review-gated LinkedIn publishing, dry-run validation, identity verification, second confirmation, GitHub issue ledger deduplication, and scheduled approved-manifest path. State that the dossier describes the system she worked with and helped shape as a product/automation workflow; the referenced public repository is owned by Harshith and does not establish sole code authorship by Harshitha.

- [ ] **Step 5: Write the four additional code-grounded dossiers**

Add full architecture, flow, implementation, constraints, decisions, evidence, and contribution boundaries for:

- AI Internship Recommendation Engine: React/Vite, profile capture, Python/FastAPI, Pydantic, 20 records, 40/30/20/10 scoring, top 3–5, SMTP HTML delivery, file fallback, mobile/low-literacy design.
- Absolute Prosthetics: Next.js App Router, componentized sections, responsive services/process, brochure downloads, testimonial video/media, WhatsApp/contact path, branded metadata, and Vercel releases; distinguish mixed-contributor history.
- Pneumonia CNN: academic image preprocessing, CNN training/evaluation, inference flow, and non-diagnostic constraint, limited to committed evidence.
- Currency Converter: Java Swing/AWT frame, denomination controls, event listener, conversion arithmetic, input validation, desktop-only state, and public single-file evidence.

- [ ] **Step 6: Run the contract**

```bash
pnpm verify:content
```

Expected: dossier count and technical-term checks pass; renderer and career-copy headings remain failing.

- [ ] **Step 7: Commit project evidence data**

```bash
git add lib/projects.ts
git commit -m "feat: document project engineering evidence"
```

### Task 4: Render the engineering dossiers and concrete Work index

**Files:**
- Modify: `app/work/[slug]/page.tsx`
- Modify: `app/work/page.tsx`

- [ ] **Step 1: Replace the abstract detail body with semantic dossier sections**

Render these exact headings for every project:

```tsx
<h2>System architecture</h2>
<h2>End-to-end execution</h2>
<h2>What Harshitha implemented</h2>
<h2>Reliability engineering</h2>
<h2>Technical decisions</h2>
<h2>Evidence and scope</h2>
```

Use a responsive architecture grid, numbered `<ol>` flow, implementation checklist, responsive risk/control `<dl>`, decision/rationale pairs, evidence links, stack list, and a clearly labelled contribution-boundary disclosure. Keep Problem/Outcome context before architecture.

- [ ] **Step 2: Make Work cards concrete**

Render `project.architectureLine`, role, production state, and a `View engineering case study` label on flagship cards. Add the architecture line and `Technical dossier` affordance to additional-project rows.

- [ ] **Step 3: Verify responsive-safe markup and types**

```bash
pnpm exec tsc --noEmit
pnpm verify:content
```

Expected: both pass except career-copy checks if they have not yet been implemented.

- [ ] **Step 4: Commit the dossier UI**

```bash
git add app/work/page.tsx 'app/work/[slug]/page.tsx'
git commit -m "feat: render engineering project dossiers"
```

### Task 5: Replace abstract positioning with enterprise-architecture direction

**Files:**
- Modify: `app/components/home-content.tsx`
- Modify: `app/story/page.tsx`

- [ ] **Step 1: Strengthen homepage copy**

Replace generic automation positioning with:

```text
I build production-oriented AI automation for hiring, finance, and content operations.

My direction is enterprise-grade architecture: secure integrations, durable workflows, explicit permissions, human approval, observability, and recovery when real systems fail.
```

Change the status line to `Open to enterprise product engineering and automation roles`.

- [ ] **Step 2: Rebuild the Story lead and career-direction section**

Use this lead:

```text
I want to engineer enterprise systems that turn AI into dependable, observable infrastructure.
```

Add a paragraph explaining that Harshitha is intentionally growing toward enterprise-grade architecture across security boundaries, durable execution, permissions, data integrity, observability, recovery, and human control. Describe it as her direction, not a current `Enterprise Architect` title.

- [ ] **Step 3: Run all content/type checks**

```bash
pnpm verify:content
pnpm exec tsc --noEmit
```

Expected: both pass.

- [ ] **Step 4: Commit positioning**

```bash
git add app/components/home-content.tsx app/story/page.tsx
git commit -m "feat: position portfolio toward enterprise architecture"
```

### Task 6: Full verification, push, and production deployment

**Files:**
- Verify all modified files; no new source files expected.

- [ ] **Step 1: Run fresh local verification**

```bash
pnpm verify:content
pnpm exec tsc --noEmit
pnpm build
git diff --check
```

Expected: all commands exit zero; build lists all seven `/work/[slug]` paths.

- [ ] **Step 2: Run local production route probes**

Start `pnpm start` and require HTTP 200 for `/`, `/story`, `/work`, every project route, `/sitemap.xml`, `/robots.txt`, `/favicon.ico`, `/favicon.png`, `/og.png`, and `/harshitha.jpg`. Require dossier headings in every project HTML response and the hiring-specific technical terms on its route.

- [ ] **Step 3: Audit claims and secrets**

Scan the source and staged diff for inherited Harshith/JustPaid claims, credentials, tokens, acquisition language, customer/candidate data, and sole-authorship language. Expected: no findings.

- [ ] **Step 4: Push main from Harshitha's account**

Confirm `gh auth status` shows `chittapragadaharshitha` active, confirm the commit author is Harshitha Chittapragada, then:

```bash
git push origin main
```

- [ ] **Step 5: Deploy the exact commit to `jarvis-brain`**

Fetch and fast-forward `/home/harshith/clawd/harshitha.dev`, run `/home/harshith/.local/share/pnpm/pnpm install --frozen-lockfile`, run the production build, confirm the unit still uses `node_modules/next/dist/bin/next`, restart only `harshitha-dev.service`, and wait for `http://127.0.0.1:3001/` readiness.

- [ ] **Step 6: Verify the public domain without Chrome**

Use HTTP probes against `https://harshitha.dev` for the same route matrix. Require the new enterprise-architecture headline, every dossier heading, all hiring evidence terms, updated favicon/portrait hashes, the deployed Git commit, and a stable active systemd service.

- [ ] **Step 7: Report completion**

Report the live URL, commit, detailed content changes, once-per-session intro behavior, verification matrix, and the honest AgentMag/Content Automation contribution boundaries.
