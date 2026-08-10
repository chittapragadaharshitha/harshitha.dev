import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

const principles = [
  {
    title: "AI proposes. Systems control.",
    text: "Models are useful for extraction, classification, drafting, and investigation. Deterministic services should own permissions, execution, retries, and consequential actions.",
  },
  {
    title: "Recovery is a product feature.",
    text: "A workflow is not reliable because it succeeded once. It needs idempotency, persisted state, retry behavior, observability, and a clear path through partial failure.",
  },
  {
    title: "Human review belongs in the architecture.",
    text: "Publishing, sending, approving, and changing business records need explicit boundaries. Review is not friction when it protects trust.",
  },
];

export default function StoryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <Particles className="fixed inset-0 -z-10" quantity={70} />
      <Navigation showMobileControls={true} />

      <div className="mx-auto max-w-6xl px-5 pb-24 pt-24 sm:px-8 md:pt-32 lg:px-10">
        <header className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-600">About</p>
            <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-white sm:text-6xl font-display">
              I build AI products from operating idea to deployed system.
            </h1>
          </div>
          <div className="space-y-5 pt-1 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            <p>
              I&apos;m Harshitha Chittapragada, an AI Product Engineer and Founder of Agent Mag. I work
              across product discovery, roadmap definition, agent architecture, implementation,
              integrations, deployment, and the operational details that determine whether a system
              remains useful after launch.
            </p>
            <p>
              At Agent Mag, I lead an 86-page product, 62 API routes, a 492-skill open ecosystem,
              Agent Mag AI, and a governed automation runtime for finance and broader operations. I
              also designed and operate Jarvis, a master-agent system with Email, Calendar, and
              Meeting specialists. My enterprise hiring work covers Microsoft Graph intake,
              candidate matching, resume attachments, duplicate-reply prevention, restart recovery,
              connection pooling, and Azure deployment. Content automation and OpenClaw and Hermes
              client deployments extend the same work into publishing and private agent operations.
            </p>
            <p>
              Claude Code and Codex are core implementation tools in that process, but the job is
              larger than prompting. I define the operating model, choose the system boundaries,
              connect providers, inspect failures, ship the product, and keep the human decision
              points clear where an automated action has consequences.
            </p>
          </div>
        </header>

        <section className="mt-20 border-y border-zinc-800 py-12 sm:mt-28 sm:py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">How I work</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-12">
            {principles.map((principle, index) => (
              <article key={principle.title}>
                <p className="font-mono text-xs text-zinc-700">0{index + 1}</p>
                <h2 className="mt-4 text-xl font-medium text-zinc-200">{principle.title}</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-500">{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-12 sm:mt-28 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Background</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-zinc-100">
              Engineering foundation, operator&apos;s perspective.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
            <p>
              My formal training is in Artificial Intelligence and Data Science. Building products
              across agent infrastructure, recruitment operations, publishing, and client
              implementation taught me to connect code with the people and processes around it.
            </p>
            <p>
              I work across TypeScript, Next.js, Python, Java, PostgreSQL, Microsoft Graph, Azure,
              OpenClaw, Hermes, n8n, workflow runtimes, and model APIs. I&apos;m comfortable moving
              between product discovery, implementation with Claude Code and Codex, debugging,
              deployment, and operational follow-through.
            </p>
            <p>
              I&apos;m deliberately growing toward enterprise-grade architecture: multi-system products
              with explicit security boundaries, durable state, observable execution, failure
              recovery, and human control. I want to deepen the technical judgment required to own
              increasingly complex systems end to end.
            </p>
            <p>
              I&apos;m looking for roles in enterprise product engineering, automation platforms, AI
              operations, or technical implementation where I can deepen that responsibility against
              real business constraints.
            </p>
            <Link
              href="/work"
              className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
              Explore the systems I&apos;ve worked on
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
