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
              I build the layer between AI capability and operational trust.
            </h1>
          </div>
          <div className="space-y-5 pt-1 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            <p>
              I&apos;m Harshitha Chittapragada, a product-minded engineer focused on automation
              systems that teams can use for recurring, consequential work.
            </p>
            <p>
              My recent work spans three operating domains. In AgentMag, I worked on governed
              workflows that combine agents, integrations, approvals, persistent data, and
              traceable execution. In enterprise hiring automation, I built an inbox-to-shortlist
              pipeline with Microsoft Graph, candidate matching, controlled replies, restart
              recovery, connection pooling, and duplicate-reply prevention. In content automation,
              I worked on research-to-publishing pipelines that keep human review between generation
              and distribution.
            </p>
            <p>
              The common thread is reliability. I care about what happens after the model produces
              an answer: how inputs are validated, where state lives, who can approve an action,
              what happens after a crash, and whether an operator can reconstruct the run later.
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
              My formal training is in Artificial Intelligence and Data Science. Industry work in
              AI development, software delivery, recruitment operations, and technical community
              building taught me to connect code with the people and processes around it.
            </p>
            <p>
              I work across TypeScript, Next.js, Python, Java, PostgreSQL, Microsoft Graph, Azure,
              workflow runtimes, and model APIs. I&apos;m comfortable moving between product discovery,
              implementation, debugging, deployment, and operational follow-through.
            </p>
            <p>
              I&apos;m looking for roles where that range is useful: product engineering, automation,
              AI operations, or technical implementation work with real business ownership.
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
