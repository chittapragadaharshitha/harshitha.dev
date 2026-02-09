import Link from "next/link";
import React from "react";
import { allProjects } from "../../lib/projects";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye, Briefcase, Calendar } from "lucide-react";
import Particles from "../components/particles";

const workExperience = [
  {
    title: "Harshith Ventures",
    role: "Operations Lead",
    period: "Jan 2026 - Present",
    description: "Headed operations for a venture building and investment company. Built Clawd Bot — an AI Slack assistant using Claude Opus 4.6 integrated across Telegram, WhatsApp, and Slack for omnichannel productivity. Vibe coded tools using Cursor AI, Vercel, and GitHub.",
    tags: ["Operations", "AI Agents", "Cursor", "Vercel", "Slack"],
    current: true
  },
  {
    title: "Google",
    role: "Student Ambassador",
    period: "Aug 2025 - Present",
    description: "Bridging the gap between cutting-edge technology and the student community — sharing knowledge, organizing events, and helping others discover their paths in tech.",
    tags: ["Community", "Tech Evangelism", "Events", "Google"],
    current: true
  },
  {
    title: "Executive Software Guild Inc",
    role: "Business Analyst — Internship",
    period: "Oct 2025 - Nov 2025",
    description: "Analyzed business requirements, identified process inefficiencies, and proposed data-driven solutions. Developed a sharper understanding of how technology serves business objectives.",
    tags: ["Business Analysis", "Data-Driven Solutions", "Remote"],
    current: false
  },
  {
    title: "DREP Software Solutions Pvt Ltd",
    role: "AI Development Engineer — Internship",
    period: "Aug 2025 - Oct 2025",
    description: "Built AI-driven solutions and worked on translating machine learning concepts from theory to production. Gained hands-on experience with real-world AI engineering workflows.",
    tags: ["AI", "Machine Learning", "Software Development", "Remote"],
    current: false
  },
  {
    title: "Infosys Springboard",
    role: "Pragati: Path to Future — Cohort 3",
    period: "Dec 2024 - Mar 2025",
    description: "Selected for an initiative empowering women in tech. Built a strong foundation in citizen data science, interacted with industry professionals, and gained both technical knowledge and professional confidence.",
    tags: ["Data Science", "Women in Tech", "Professional Development"],
    current: false
  },
];

export const revalidate = 60;
export default async function ProjectsPage() {
  // Static views for demo - PostHog will handle real analytics
  const views: Record<string, number> = allProjects.reduce((acc, project) => {
    acc[project.slug] = Math.floor(Math.random() * 1000) + 100; // Random demo views
    return acc;
  }, {} as Record<string, number>);

  const sorted = allProjects
    .filter((p) => p.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-8 sm:pb-12 md:pb-16">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation showMobileControls={true} />
      <div className="px-4 sm:px-6 pt-12 sm:pt-16 mx-auto space-y-4 sm:space-y-6 max-w-7xl lg:px-8 md:space-y-12 md:pt-20 lg:pt-24">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
            Work
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400">
            Experience, projects, and the things I've built along the way.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {allProjects.length > 0 && (
          <>
            <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 sm:grid-cols-2 md:grid-cols-3">
              <div className="grid grid-cols-1 gap-4">
                {sorted
                  .filter((_, i) => i % 3 === 0)
                  .map((project) => (
                    <Card key={project.slug}>
                      <Article project={project} views={views[project.slug] ?? 0} />
                    </Card>
                  ))}
              </div>
              <div className="grid grid-cols-1 gap-4">
                {sorted
                  .filter((_, i) => i % 3 === 1)
                  .map((project) => (
                    <Card key={project.slug}>
                      <Article project={project} views={views[project.slug] ?? 0} />
                    </Card>
                  ))}
              </div>
              <div className="grid grid-cols-1 gap-4">
                {sorted
                  .filter((_, i) => i % 3 === 2)
                  .map((project) => (
                    <Card key={project.slug}>
                      <Article project={project} views={views[project.slug] ?? 0} />
                    </Card>
                  ))}
              </div>
            </div>
            <div className="hidden w-full h-px md:block bg-zinc-800" />
          </>
        )}

        {/* Work Experience Section */}
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 sm:grid-cols-2 md:grid-cols-3 mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-4">
            {workExperience
              .filter((_, i) => i % 3 === 0)
              .map((exp, index) => (
                <Card key={`exp-0-${index}`}>
                  <article className="relative w-full h-full p-4 sm:p-6 md:p-8 min-h-[200px] md:min-h-[250px]">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-3 h-3 text-zinc-500" />
                      <span className="text-xs text-zinc-500">{exp.role}</span>
                    </div>
                    <h2 className="z-20 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
                      {exp.title}
                    </h2>
                    <div className="flex items-center gap-1.5 mt-2 mb-3">
                      <Calendar className="w-3 h-3 text-zinc-600" />
                      <span className="text-xs text-zinc-600">{exp.period}</span>
                      {exp.current && (
                        <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Current</span>
                      )}
                    </div>
                    <p className="z-20 mt-3 sm:mt-4 text-xs sm:text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800/50 text-zinc-500 border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {workExperience
              .filter((_, i) => i % 3 === 1)
              .map((exp, index) => (
                <Card key={`exp-1-${index}`}>
                  <article className="relative w-full h-full p-4 sm:p-6 md:p-8 min-h-[200px] md:min-h-[250px]">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-3 h-3 text-zinc-500" />
                      <span className="text-xs text-zinc-500">{exp.role}</span>
                    </div>
                    <h2 className="z-20 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
                      {exp.title}
                    </h2>
                    <div className="flex items-center gap-1.5 mt-2 mb-3">
                      <Calendar className="w-3 h-3 text-zinc-600" />
                      <span className="text-xs text-zinc-600">{exp.period}</span>
                      {exp.current && (
                        <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Current</span>
                      )}
                    </div>
                    <p className="z-20 mt-3 sm:mt-4 text-xs sm:text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800/50 text-zinc-500 border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {workExperience
              .filter((_, i) => i % 3 === 2)
              .map((exp, index) => (
                <Card key={`exp-2-${index}`}>
                  <article className="relative w-full h-full p-4 sm:p-6 md:p-8 min-h-[200px] md:min-h-[250px]">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-3 h-3 text-zinc-500" />
                      <span className="text-xs text-zinc-500">{exp.role}</span>
                    </div>
                    <h2 className="z-20 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
                      {exp.title}
                    </h2>
                    <div className="flex items-center gap-1.5 mt-2 mb-3">
                      <Calendar className="w-3 h-3 text-zinc-600" />
                      <span className="text-xs text-zinc-600">{exp.period}</span>
                      {exp.current && (
                        <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Current</span>
                      )}
                    </div>
                    <p className="z-20 mt-3 sm:mt-4 text-xs sm:text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800/50 text-zinc-500 border border-zinc-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Card>
              ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 mb-6">
            Education
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card>
              <article className="relative w-full h-full p-4 sm:p-6 md:p-8">
                <h2 className="text-lg sm:text-xl font-medium text-zinc-200 font-display">
                  Vignan's Institute of Management and Technology for Women
                </h2>
                <p className="mt-2 text-sm text-zinc-400">Bachelor of Technology — Computer Science</p>
                <p className="mt-1 text-xs text-zinc-600">Nov 2022 – Jun 2026</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {["C Programming", "Java", "SQL", "Web Development", "Data Science"].map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800/50 text-zinc-500 border border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Card>
            <Card>
              <article className="relative w-full h-full p-4 sm:p-6 md:p-8">
                <h2 className="text-lg sm:text-xl font-medium text-zinc-200 font-display">
                  Sri Chaitanya Junior Kalasala
                </h2>
                <p className="mt-2 text-sm text-zinc-400">Intermediate — MPC</p>
                <p className="mt-1 text-xs text-zinc-600">Jun 2020 – Jun 2022</p>
                <p className="mt-1 text-xs text-zinc-500">Grade: 90%</p>
              </article>
            </Card>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 mb-6">
            Certifications
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <article className="relative w-full h-full p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-medium text-zinc-200 font-display">MySQL</h2>
                <p className="mt-1 text-xs text-zinc-500">Udemy · Issued Mar 2025</p>
              </article>
            </Card>
            <Card>
              <article className="relative w-full h-full p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-medium text-zinc-200 font-display">MySQL Bootcamp</h2>
                <p className="mt-1 text-xs text-zinc-500">Issued 2025</p>
              </article>
            </Card>
            <Card>
              <article className="relative w-full h-full p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-medium text-zinc-200 font-display">Power BI Workshop</h2>
                <p className="mt-1 text-xs text-zinc-500">Office Master · Jul 2024 – Jul 2028</p>
              </article>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12 sm:mt-16 mb-8">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 mb-6">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {["C Programming", "Java", "SQL", "HTML", "CSS", "Power BI", "Python", "Problem Solving", "Communication"].map((skill) => (
              <span key={skill} className="text-xs px-3 py-1.5 rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:border-zinc-600 transition-colors">
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-medium text-zinc-300 mb-3">Languages</h4>
            <div className="flex gap-4">
              <div>
                <span className="text-xs text-zinc-400">English</span>
                <span className="text-[10px] text-zinc-600 ml-2">Full professional proficiency</span>
              </div>
              <div>
                <span className="text-xs text-zinc-400">Hindi</span>
                <span className="text-[10px] text-zinc-600 ml-2">Native or bilingual proficiency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
