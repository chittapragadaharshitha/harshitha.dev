# Technical work dossiers and first-session intro

Date: 2026-08-10
Status: Approved design, awaiting written-spec review

## Objective

Make Harshitha's portfolio useful to a technical hiring or acquisition reader. The Work section must explain what each flagship system actually does, how it is assembled, which operational failures it handles, and which parts Harshitha can credibly claim. Restore the short `Harshitha` intro as a first-page, once-per-session interaction without interrupting normal navigation.

## Success criteria

The change is complete when:

1. A new browser session shows a short `Harshitha` intro over the first requested page.
2. Refreshes and client-side navigation in the same browser session do not show it again.
3. Reduced-motion users do not receive a long or movement-heavy animation.
4. AgentMag, Enterprise Hiring Automation, and Content Automation Studio each read as engineering dossiers rather than marketing summaries.
5. Each flagship dossier includes a system snapshot, architecture, end-to-end flow, verified implementation work, reliability controls, technical decisions, technology, proof links, and a contribution boundary.
6. AgentMag platform capability is clearly separated from Harshitha's personally attributable work.
7. Existing public links, metadata, responsive behavior, and production deployment remain intact.
8. No Harshith Ventures, JustPaid, Harshith Vaddiparthy, Head of Growth, or other inherited claims return.

## Non-goals

- Redesigning the entire portfolio visual system.
- Reintroducing old Harshith-branded pages or assets.
- Editing the CV or resume PDF.
- Publishing private source code, credentials, customer data, candidate data, or acquisition context.
- Claiming that Harshitha authored AgentMag code where repository evidence does not establish that.
- Adding a fake progress indicator that implies network or application loading.

## Existing system

The site is a Next.js 16 App Router application using React 19, Tailwind CSS 3, Framer Motion, and static project data in `lib/projects.ts`.

Relevant files:

- `app/layout.tsx`: global document shell and the correct integration point for a session intro.
- `app/components/home-content.tsx`: homepage positioning.
- `app/work/page.tsx`: work index and flagship-project previews.
- `app/work/[slug]/page.tsx`: shared project-detail renderer.
- `lib/projects.ts`: project schema and case-study content.
- `global.css`: global animation and reduced-motion rules.
- `scripts/verify-portfolio-content.mjs`: content and legacy-claim contract.

The current project-detail template has only Problem, Approach, Outcome, Contributions, Technology, and headline metrics. This is too abstract for the intended reader.

## Design decision 1: first-page session intro

### User-visible behavior

The first page opened in a new browser session displays a fixed, full-viewport charcoal overlay. `Harshitha` appears in the existing Cal Sans display face with a restrained opacity and vertical reveal. A thin rule expands beneath the name, then the overlay exits upward while the underlying page becomes available.

The interaction lasts about 1.4 seconds. It contains no spinner, percentage, or fake loading language.

### Session behavior

Use a versioned `sessionStorage` key:

```text
harshitha:intro:v1
```

On the first page of a session:

1. The pre-hydration check finds no key and leaves the intro eligible to display.
2. The client intro mounts, writes the key immediately, locks background scroll, and runs the reveal/exit sequence.
3. The overlay unmounts and restores the previous body overflow value.

On refresh or direct navigation to another page in the same tab session:

1. The pre-hydration check finds the key.
2. It marks the document as intro-seen before React hydration.
3. CSS suppresses the overlay, preventing a flash.

`sessionStorage` is intentionally used instead of `localStorage`: a future tab session should see the signature again, while routine page navigation and refreshes in the current tab should not.

If storage is unavailable, the component fails open: it may show the intro once for that page but must never block access to content.

### Component boundary

Create `app/components/site-intro.tsx` as a client component with one job: coordinate intro visibility, timing, cleanup, and reduced-motion behavior. Mount it once in `app/layout.tsx` before page content.

Add a minimal inline pre-hydration script in the root layout. It only checks the versioned session key and sets a data attribute on `<html>`; it does not inject content or collect data.

### Accessibility and performance

- The overlay is decorative and uses `aria-hidden="true"`.
- It does not trap focus or add focusable controls.
- The page content remains in the document underneath it.
- `prefers-reduced-motion: reduce` shortens the experience to a brief fade of no more than 150 ms.
- Animation uses only `opacity` and `transform`.
- Timers and body styles are cleaned up if the component unmounts early.
- The overlay uses the existing font and CSS stack; no new package or network asset is added.

## Design decision 2: engineering-dossier project model

Extend `Project` with an optional `technicalDossier`. It is required for all three flagship projects and omitted for smaller builds that do not need the full treatment.

The model contains:

```ts
interface ArchitectureComponent {
  name: string;
  responsibility: string;
  technology: string;
}

interface FlowStep {
  step: string;
  detail: string;
}

interface ReliabilityControl {
  risk: string;
  control: string;
}

interface TechnicalDecision {
  decision: string;
  rationale: string;
}

interface EvidenceItem {
  label: string;
  detail: string;
  href?: string;
}

interface TechnicalDossier {
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

The existing headline fields remain for cards, metadata, and smaller projects. The dossier fields provide the detailed technical layer without duplicating page components per project.

## Design decision 3: flagship case-study content

### AgentMag

#### System context

Describe AgentMag as a governed automation platform, not a single finance bot. Finance is its first deep operating domain, while the platform primitives support broader operations.

#### Architecture to present

1. **Studio** — Next.js visual surface for composing workflows, managing agents, files, knowledge, tables, and run state.
2. **API control plane** — Hono/TypeScript endpoints for configuration, validation, tenancy, and orchestration requests.
3. **Durable execution** — Trigger.dev workers for long-running and retryable tasks outside the request lifecycle.
4. **Operational state** — PostgreSQL for workflow definitions, runs, approvals, audit events, companies, and related records.
5. **Integration layer** — Nango-backed connections and provider adapters for authenticated external actions.
6. **Model layer** — OpenAI and Anthropic for investigation and generation where probabilistic reasoning is appropriate.

#### End-to-end flow

Compose workflow → validate configuration → start durable run → execute agent investigation → pause at approval when required → execute deterministic provider actions → persist outputs and audit events → expose run state to the operator.

#### Reliability controls

- Durable worker execution instead of keeping long work inside an HTTP request.
- Human approval gates before consequential actions.
- Persistent run and audit history for traceability.
- Tenant/company context attached to operational records.
- Integration credentials handled through the connection layer instead of browser-exposed secrets.
- Reusable typed workflow blocks instead of unconstrained prompt-only execution.

#### Evidence boundary

The page may state verified codebase scale already established from the private codebase: 17 integration modules, 16 core workflow blocks, 31 database migrations, and four deployable surfaces. It may state that Harshitha worked across the nine-month product cycle as a product builder and automation operator. It must not say that she solely authored the platform or every underlying module. The page will explicitly label the architecture and scale as **platform capability** and her listed activity as **Harshitha's role**.

### Enterprise Hiring Automation

#### System context

Describe a recruitment-operations system that converts inconsistent Outlook email requirements into structured roles, candidate rankings, controlled replies, and an auditable state model.

#### Architecture to present

1. **Inbox adapter** — Microsoft Graph polling and full-message retrieval for unread, forwarded, and conversational threads.
2. **Requirement parser** — HTML cleanup, section-aware field extraction, classification, and normalization of role data.
3. **Candidate engine** — PostgreSQL-backed candidate pool with weighted matching across skills, role, experience, location, and availability.
4. **Response composer** — recipient reconstruction, shortlist formatting, draft/reply creation, CC rules, and resume attachment handling implemented during the system's evolution.
5. **State and deduplication** — persisted message identifiers, replied state, sync state, and restart recovery.
6. **Operations layer** — Azure deployment, pooled database access, retry/timeout handling, logs, and dashboard visibility.

#### End-to-end flow

Poll Outlook → fetch full thread → reject notifications/self-loops → normalize requirement → classify skills and role → rank eligible candidates → construct recipients and attachments → persist reply intent → send controlled response → mark replied and expose result in dashboard.

#### Verified implementation work

The dossier will state concrete work supported by Harshitha's Git history:

- Microsoft Graph inbox migration and full-message intake.
- A section-aware extraction engine and large skill/alias recognition set.
- Skill-weighted candidate matching and false-classification fixes.
- Duplicate-reply prevention across unread state, identifiers, and persisted reply state.
- Restart recovery for unprocessed mail.
- Shared PostgreSQL connection pooling.
- Forwarded-message sender and CC reconstruction.
- Resume attachment support implemented in the reply pipeline.
- Retry, timeout, result checking, date guards, and recipient validation.
- Azure deployment scripts and production configuration.

The page will avoid implying that every historical capability remains enabled in the current deployment. Features such as resume attachment handling will be described as implementation work in the system's evolution when current-state evidence is mixed.

### Content Automation Studio

#### System context

Describe a review-first content production system that turns current-source research into cited newsletter drafts and five-slide LinkedIn carousel packages without silently publishing.

#### Architecture to present

1. **Operator workspace** — Next.js dashboard with separate carousel and newsletter workflows and visible run state.
2. **Research adapter** — Firecrawl retrieval for current AI, cloud, security, infrastructure, and developer-tool sources.
3. **Generation layer** — OpenAI for structured copy and OpenAI Image for carousel/lead artwork.
4. **Review state** — generated copy, citations, assets, and pipeline status held for operator inspection.
5. **Delivery adapters** — LinkedIn publishing and Resend email delivery exposed as separate guarded actions.
6. **Credential boundary** — provider credentials remain on the server and are never sent to the browser.

#### End-to-end flow

Choose workflow and topic → gather current sources → extract and retain citations → generate channel-specific copy → create assets → display progress and output → operator reviews → explicit confirmation → publish to LinkedIn or send to a fixed test recipient.

#### Reliability controls

- Research and generation are independent from delivery.
- Carousel and newsletter state are separated.
- Citations remain available for source review.
- LinkedIn uses an explicit confirmation step.
- Email testing is constrained to a fixed recipient.
- Provider errors surface as run failures rather than silent partial publication.
- Credentials stay server-side.

The page must not describe generated content as automatically published without review.

## Page hierarchy

### Work index

Keep the current asymmetric flagship grid but make each card more concrete:

- Add a compact architecture line, such as `Outlook → Parser → Matcher → Controlled Reply`.
- Replace generic metric emphasis with a mix of production state and verifiable system facts.
- Change the card affordance to `View engineering case study`.
- Keep smaller projects in the concise list below the flagship work.

### Flagship detail page

Render sections in this order:

1. Header: role, status, description, live/private links, and disclosure note.
2. System snapshot: current headline metrics.
3. System context: operational problem and outcome.
4. Architecture: a responsive left-to-right component flow on desktop and vertical sequence on mobile.
5. End-to-end execution: numbered steps with enough detail to understand state transitions.
6. What Harshitha implemented: concrete engineering bullets.
7. Reliability engineering: a two-column `Failure mode / Control` table.
8. Technical decisions: decision and rationale pairs.
9. Stack and proof: technologies, live links, repository links where public, and evidence notes.
10. Contribution boundary: a quiet but explicit disclosure block.

The page uses semantic `article`, `section`, `ol`, `dl`, and table-like structures. It does not add an animated diagramming library.

### Smaller project detail pages

Projects without a dossier retain the existing Problem, Approach, Outcome, Contributions, and Technology template. This keeps academic and early projects proportional to their evidence.

## Responsive behavior

- Architecture components render as a horizontal grid at large widths and a vertical connected list on small screens.
- Reliability rows become stacked risk/control blocks below the tablet breakpoint.
- Body copy remains constrained to readable line lengths.
- Long technology and component names wrap without horizontal scrolling.
- The first-session intro uses `100dvh` and safe-area-compatible padding.

## Error and edge-case behavior

- Missing `technicalDossier` data falls back to the current project template.
- A flagship project without required dossier fields fails the content-verification script.
- External evidence links remain optional; private systems use a disclosure note rather than a dead or misleading link.
- Session-storage exceptions are caught and never block rendering.
- The intro exit has a maximum timer so animation callbacks cannot leave the overlay stuck.

## Verification plan

### Automated checks

1. Extend `scripts/verify-portfolio-content.mjs` to require dossier fields for all flagship projects.
2. Require the hiring dossier to contain the exact concepts: Microsoft Graph, candidate matching, duplicate-reply prevention, restart recovery, connection pooling, resume attachments, and Azure deployment.
3. Require AgentMag's contribution-boundary language and reject sole-author phrasing.
4. Require the Content Automation dossier to include citations, explicit approval, server-side credentials, LinkedIn, and fixed-recipient email testing.
5. Reject inherited Harshith/JustPaid claims as before.
6. Run `pnpm verify:content`.
7. Run `pnpm exec tsc --noEmit`.
8. Run `pnpm build`.
9. Run `git diff --check` and a staged secret scan.

### Runtime checks without Chrome

1. Start the production build locally and verify all dossier routes return HTTP 200.
2. Verify rendered HTML includes dossier headings and the required technical terms.
3. Verify the production server starts with the existing corrected systemd entrypoint.
4. After deployment, probe the homepage, Work page, three flagship dossiers, favicon, portrait, sitemap, and robots file through `harshitha.dev`.
5. Confirm the production commit matches `origin/main` and the `harshitha-dev` service remains active.

### Intro behavior checks

The component will expose deterministic timing and storage constants in one module so code review can verify them. Validate the following behavior using a local WebKit/Safari-compatible session or equivalent non-Chrome browser automation if available:

- Fresh session: intro is visible once and exits.
- Same-session refresh: intro is suppressed before hydration.
- Same-session client navigation: intro does not remount.
- New session: intro is eligible again.
- Reduced motion: no long reveal or translate animation.

## Deployment and rollback

1. Commit as Harshitha Chittapragada and push to `main` from the authenticated `chittapragadaharshitha` GitHub account.
2. Build from the clean `jarvis-brain` clone that serves `harshitha.dev`.
3. Restart only `harshitha-dev.service`.
4. Probe localhost before public-domain verification.
5. If the new process fails, fast-forward cannot be reversed destructively; instead, check out the previous known-good commit in the server clone, rebuild, restart the single service, and report the rollback.

The systemd service must continue to call `node_modules/next/dist/bin/next`, not the pnpm shell shim at `node_modules/.bin/next`.
