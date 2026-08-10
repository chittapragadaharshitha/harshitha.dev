import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { allProjects } from "../../../lib/projects";
import { Navigation } from "../../components/nav";
import Particles from "../../components/particles";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `https://harshitha.dev/work/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <Particles className="fixed inset-0 -z-10" quantity={60} />
      <Navigation showMobileControls={true} />

      <article className="mx-auto max-w-6xl px-5 pb-24 pt-24 sm:px-8 md:pt-32 lg:px-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs text-zinc-500 transition hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>

        <header className="mt-12 max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
            {project.eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-7xl font-display">
            {project.title}
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            {project.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs text-zinc-500">
            <span>{project.role}</span>
            <span>{project.status}</span>
          </div>
          {project.links.length > 0 && (
            <div className="mt-9 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 active:scale-[0.98]"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          )}
          {project.note && <p className="mt-4 max-w-2xl text-xs leading-5 text-zinc-600">{project.note}</p>}
          <div className="mt-9 max-w-3xl rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 font-mono text-xs leading-6 text-zinc-400 sm:px-5">
            <span className="mr-3 text-zinc-700">architecture</span>
            {project.architectureLine}
          </div>
        </header>

        <section className="mt-16 grid grid-cols-2 gap-4 border-y border-zinc-800 py-8 sm:mt-24 sm:grid-cols-4">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-mono text-xl text-zinc-100 sm:text-2xl">{metric.value}</p>
              <p className="mt-2 text-xs leading-5 text-zinc-600">{metric.label}</p>
            </div>
          ))}
        </section>

        <div className="mt-16 grid gap-14 sm:mt-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">The system</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-zinc-100">
              From operational problem to reliable workflow.
            </h2>
          </div>
          <div className="space-y-10">
            <section>
              <h3 className="text-sm font-medium text-zinc-200">Problem</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-500">{project.challenge}</p>
            </section>
            <section>
              <h3 className="text-sm font-medium text-zinc-200">Approach</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-500">{project.approach}</p>
            </section>
            <section>
              <h3 className="text-sm font-medium text-zinc-200">Outcome</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-500">{project.outcome}</p>
            </section>
          </div>
        </div>

        <section className="mt-16 grid gap-14 border-t border-zinc-800 pt-14 sm:mt-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Architecture</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-zinc-100">
              System architecture
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">
              {project.technicalDossier.systemContext}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.technicalDossier.architecture.map((component) => (
              <article
                key={component.name}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
              >
                <h3 className="text-sm font-medium text-zinc-200">{component.name}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{component.responsibility}</p>
                <p className="mt-4 border-t border-zinc-800 pt-3 font-mono text-[11px] leading-5 text-zinc-600">
                  {component.technology}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-14 border-t border-zinc-800 pt-14 sm:mt-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Execution model</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-zinc-100">
              End-to-end execution
            </h2>
          </div>
          <ol className="border-l border-zinc-800">
            {project.technicalDossier.flow.map((item, index) => (
              <li key={item.step} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 font-mono text-[10px] text-zinc-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-medium text-zinc-200">{item.step}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-500">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 grid gap-14 border-t border-zinc-800 pt-14 sm:mt-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Implementation</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-zinc-100">
              What Harshitha implemented
            </h2>
          </div>
          <div className="space-y-8">
            <ul className="space-y-4">
              {project.technicalDossier.implementation.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-zinc-400">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-zinc-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-zinc-800 pt-6">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">Contribution summary</p>
              <ul className="mt-4 space-y-3">
                {project.contributions.map((contribution) => (
                  <li key={contribution} className="text-sm leading-7 text-zinc-500">
                    {contribution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-14 sm:mt-24">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Failure design</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-zinc-100">
              Reliability engineering
            </h2>
          </div>
          <div className="mt-9 divide-y divide-zinc-800 border-y border-zinc-800">
            {project.technicalDossier.reliability.map((item, index) => (
              <article
                key={item.risk}
                className="grid gap-3 py-6 sm:grid-cols-[3rem_0.9fr_1.1fr] sm:gap-6"
              >
                <p className="font-mono text-xs text-zinc-700">R{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-700">Risk</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.risk}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-700">Control</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{item.control}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-14 border-t border-zinc-800 pt-14 sm:mt-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Tradeoffs</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-zinc-100">
              Technical decisions
            </h2>
          </div>
          <div className="space-y-3">
            {project.technicalDossier.decisions.map((item) => (
              <article key={item.decision} className="rounded-xl border border-zinc-800 p-5 sm:p-6">
                <h3 className="text-sm font-medium text-zinc-200">{item.decision}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-500">{item.rationale}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-14 border-t border-zinc-800 pt-14 sm:mt-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Credibility</p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-zinc-100">
              Evidence and scope
            </h2>
          </div>
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.technicalDossier.evidence.map((item) => {
                const content = (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-sm font-medium text-zinc-200">{item.label}</h3>
                      {item.href && <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-600" />}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-500">{item.detail}</p>
                  </>
                );

                return item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition hover:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  >
                    {content}
                  </Link>
                ) : (
                  <article key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
                    {content}
                  </article>
                );
              })}
            </div>
            <div className="mt-6 rounded-xl border border-amber-900/40 bg-amber-950/10 p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-amber-700">Attribution boundary</p>
              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {project.technicalDossier.contributionBoundary}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-zinc-800 pt-14 sm:mt-24">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Technology</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
