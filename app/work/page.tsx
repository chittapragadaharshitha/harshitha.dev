import Link from "next/link";
import { ArrowUpRight, Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { allProjects } from "../../lib/projects";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

const workExperience = [
  {
    organization: "Google",
    role: "Student Ambassador",
    period: "Aug 2025 - Present",
    description:
      "Represented Google technologies in the student community through workshops, technical sessions, peer mentoring, and ecosystem outreach.",
  },
  {
    organization: "Executive Software Guild Inc",
    role: "Software Developer Intern",
    period: "Oct 2025 - Nov 2025",
    description:
      "Translated business requirements into technical specifications, reviewed backend code, executed test cases, and supported database and development work.",
  },
  {
    organization: "DREP Software Solutions Pvt Ltd",
    role: "AI Development Engineer Intern",
    period: "Aug 2025 - Oct 2025",
    description:
      "Evaluated AI-agent projects, documented performance and bottlenecks, and worked with production-oriented AI/ML workflows alongside senior engineers.",
  },
  {
    organization: "Infosys Springboard",
    role: "Pragati: Path to Future - Cohort 3",
    period: "Dec 2024 - Mar 2025",
    description:
      "Completed a selective 12-week program covering citizen data science, digital dexterity, leadership, and professional development for women in technology.",
  },
];

const skills = [
  "TypeScript",
  "Next.js",
  "Python",
  "Java",
  "PostgreSQL",
  "Microsoft Graph",
  "Azure",
  "OpenAI",
  "Workflow systems",
  "API integrations",
  "Human-in-the-loop automation",
  "Reliability engineering",
];

export default function WorkPage() {
  const featured = allProjects.filter((project) => project.featured);
  const selected = allProjects.filter((project) => !project.featured);

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <Particles className="fixed inset-0 -z-10" quantity={80} />
      <Navigation showMobileControls={true} />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 md:pt-32 lg:px-10">
        <header className="max-w-4xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
            Selected systems and product work
          </p>
          <h1 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl font-display">
            Automation that moves real work.
          </h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            I build operational products that combine AI with deterministic workflows,
            integrations, approvals, recovery, and auditability. The focus is not a clever
            demo. It is a system a team can trust with recurring work.
          </p>
        </header>

        <section className="mt-16 sm:mt-24" aria-labelledby="flagship-heading">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-zinc-800 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">01</p>
              <h2 id="flagship-heading" className="mt-2 text-2xl font-medium text-zinc-100">
                Flagship systems
              </h2>
            </div>
            <span className="hidden text-xs text-zinc-600 sm:block">Finance · Hiring · Content</span>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            {featured.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 sm:p-8 ${
                  index === 0 ? "lg:col-span-12" : "lg:col-span-6"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl font-display">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-200" />
                </div>

                <p className={`mt-6 text-sm leading-7 text-zinc-400 ${index === 0 ? "max-w-3xl" : "max-w-xl"}`}>
                  {project.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-zinc-800 pt-6 sm:grid-cols-4">
                  {project.metrics.map((metric) => (
                    <div key={`${project.slug}-${metric.label}`}>
                      <p className="font-mono text-base text-zinc-200">{metric.value}</p>
                      <p className="mt-1 text-[11px] leading-4 text-zinc-600">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20 sm:mt-28" aria-labelledby="selected-heading">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-zinc-800 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">02</p>
              <h2 id="selected-heading" className="mt-2 text-2xl font-medium text-zinc-100">
                Additional builds
              </h2>
            </div>
          </div>

          <div className="divide-y divide-zinc-800 border-y border-zinc-800">
            {selected.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group grid gap-4 py-7 transition hover:bg-zinc-900/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500 sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:px-3"
              >
                <div>
                  <p className="text-xs text-zinc-600">{project.eyebrow}</p>
                  <h3 className="mt-1 text-lg font-medium text-zinc-200 group-hover:text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-zinc-500 group-hover:text-zinc-400">
                  {project.description}
                </p>
                <ArrowUpRight className="hidden h-4 w-4 text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300 sm:block" />
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20 sm:mt-28" aria-labelledby="experience-heading">
          <div className="mb-8 border-b border-zinc-800 pb-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">03</p>
            <h2 id="experience-heading" className="mt-2 text-2xl font-medium text-zinc-100">
              Experience
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-10 lg:grid-cols-2">
            {workExperience.map((experience) => (
              <article key={`${experience.organization}-${experience.role}`} className="border-l border-zinc-800 pl-5">
                <div className="flex items-center gap-2 text-xs text-zinc-600">
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>{experience.role}</span>
                </div>
                <h3 className="mt-3 text-xl font-medium text-zinc-200">{experience.organization}</h3>
                <div className="mt-2 flex items-center gap-2 text-xs text-zinc-600">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{experience.period}</span>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500">{experience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-12 border-t border-zinc-800 pt-12 sm:mt-28 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Foundation</p>
            <h2 className="mt-3 text-2xl font-medium text-zinc-100">Education and tools</h2>
          </div>
          <div>
            <h3 className="text-lg font-medium text-zinc-200">
              B.Tech, Artificial Intelligence and Data Science
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Vignan&apos;s Institute of Management and Technology for Women · 2022–2026
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-400"
                >
                  <CheckCircle2 className="h-3 w-3 text-zinc-600" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
