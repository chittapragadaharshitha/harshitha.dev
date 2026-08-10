"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useFirstVisit } from "../hooks/useFirstVisit";
import { MobileNav } from "./mobile-nav";
import { Navigation } from "./nav";
import Particles from "./particles";

const systems = [
  { name: "AgentMag", detail: "Governed workflow and agent platform" },
  { name: "Hiring Automation", detail: "Enterprise recruitment operations" },
  { name: "Content Studio", detail: "Review-first publishing workflows" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/chittapragadaharshitha",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chittapragadaharshitha/",
    icon: FaLinkedinIn,
  },
  {
    label: "X",
    href: "https://x.com/harshithaa_ch",
    icon: FaXTwitter,
  },
];

export default function HomeContent() {
  const { isFirstVisit, isLoaded } = useFirstVisit();
  const entrance = isLoaded && isFirstVisit ? "animate-fade-in" : isLoaded ? "" : "opacity-0";

  return (
    <main className="relative flex min-h-screen min-h-[100dvh] w-full items-center overflow-hidden bg-zinc-950 text-zinc-100">
      <MobileNav showLogo={false} />
      <Particles className="absolute inset-0 -z-10" quantity={90} />

      <div className="absolute inset-x-0 top-0 z-20 hidden justify-center pt-6 md:flex">
        <Navigation />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-14 pt-24 md:grid-cols-[1.25fr_0.75fr] md:items-center md:px-10 md:pb-20 md:pt-28 lg:gap-20">
        <section className={entrance}>
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            Open to product engineering and automation roles
          </div>

          <h1 className="mt-7 text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl font-display">
            Harshitha
            <span className="block text-zinc-500">Chittapragada</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            I build reliable AI automation products for finance, hiring, and content operations.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            My work connects models to real operational systems through integrations, deterministic
            workflows, human approvals, recovery, and auditability—not demo-only AI.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950 active:scale-[0.98]"
            >
              View selected work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/meet"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/70 px-4 py-2.5 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-500 active:scale-[0.98]"
            >
              <CalendarDays className="h-4 w-4" />
              Start a conversation
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-md border border-zinc-800 bg-zinc-900/60 p-2 text-zinc-500 transition hover:border-zinc-600 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
            <Link
              href="mailto:chittapragadaharshitha@gmail.com"
              aria-label="Email Harshitha"
              className="rounded-md border border-zinc-800 bg-zinc-900/60 p-2 text-zinc-500 transition hover:border-zinc-600 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <aside className={`${entrance} md:justify-self-end`}>
          <div className="relative mx-auto w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-5">
            <Image
              src="/harshitha.jpg"
              alt="Harshitha Chittapragada"
              width={640}
              height={640}
              className="aspect-square w-full rounded-xl object-cover object-top grayscale-[12%]"
              priority
            />
            <div className="mt-5 space-y-4">
              {systems.map((system, index) => (
                <Link
                  key={system.name}
                  href={index === 0 ? "/work/agentmag" : index === 1 ? "/work/enterprise-hiring-automation" : "/work/content-automation-studio"}
                  className="group grid grid-cols-[1.5rem_1fr_auto] items-center gap-3 border-t border-zinc-800 pt-4 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                >
                  <span className="font-mono text-[10px] text-zinc-700">0{index + 1}</span>
                  <span>
                    <span className="block text-sm text-zinc-300 group-hover:text-white">{system.name}</span>
                    <span className="mt-0.5 block text-xs text-zinc-600">{system.detail}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
