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
    role: "Building & Investing",
    period: "Jan 2023 - Present",
    description: "Personal holding company focused on building and investing in transformative technologies at the intersection of AI, blockchain, and human progress. Portfolio of innovative projects and strategic investments.",
    tags: ["Venture Building", "Angel Investing", "AI", "Web3"],
    current: true
  },
  {
    title: "JustPaid AI (YC W23)",
    role: "Marketing & Media",
    period: "Sep 2024 - Present",
    description: "Leveraging AI tools to enhance content production processes, developing user-friendly front-end solutions. Established and grew the Just Paid AI podcast and YouTube channel.",
    tags: ["AI", "Content Production", "Frontend", "Analytics", "Podcasting"],
    current: true
  },
  {
    title: "Metaschool",
    role: "Content & Events Lead",
    period: "Mar 2023 - Sep 2023",
    description: "Led content strategy and global event management for a Peak XV (Sequoia) funded Web3 education platform, traveling internationally to manage hackathons and VC meetups. Managed Dubai Token 2049 hackathon and led a team of 5 content creators.",
    tags: ["Web3", "Event Management", "Content Strategy", "Team Leadership"]
  },
  {
    title: "ARTIFIN.ai",
    role: "Founder & CEO",
    period: "Mar 2023 - Jan 2024",
    description: "Founded and successfully exited an AI-driven financial analysis platform, acquired by Oasis Ventures. Bootstrapped and exited at a $50,000 valuation with 50% improved efficiency.",
    tags: ["AI", "Fintech", "Startup", "Exit", "Financial Analysis"],
    highlight: "Exited $50K"
  },
  {
    title: "BasedAF",
    role: "Head of Social Media and Community",
    period: "Jan 2023 - May 2024",
    description: "Increased brand visibility in the Metaverse through strategic social media campaigns, led marketing for NFT drop, and directed community growth initiatives. 40% increased visibility with 30% higher user engagement.",
    tags: ["NFT", "Community", "Social Media", "Web3", "Marketing"]
  },
  {
    title: "Love, Death & Robots [Netflix Show]",
    role: "Community & Operations Manager",
    period: "May 2022 - Oct 2023",
    description: "Led NFT minting project of 131,690 artworks with 25% increased online presence. Managed social media platforms to boost community engagement.",
    tags: ["NFT", "Community Management", "Social Media", "Operations"]
  },
  {
    title: "Ambassadors Solutions",
    role: "Growth Manager",
    period: "May 2022 - Oct 2023",
    description: "Secured new business opportunities in the crypto and blockchain sector. Increased market share by 30% and company revenue by 20%.",
    tags: ["Business Development", "Growth Hacking", "Crypto", "Blockchain"]
  }
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
            Building products that push the boundaries of what's possible.
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
                  <Link href={exp.title === "Harshith Ventures" ? "/work/harshith-ventures" : "#"}>
                    <article className="relative w-full h-full p-4 sm:p-6 md:p-8 min-h-[200px] md:min-h-[250px]">
                      <h2 className="z-20 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
                        {exp.title}
                      </h2>
                      <p className="z-20 mt-3 sm:mt-4 text-xs sm:text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 pb-8">
                        {exp.description}
                      </p>
                      <div className="absolute bottom-4 md:bottom-8">
                        <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                          Read more <span aria-hidden="true">&rarr;</span>
                        </p>
                      </div>
                    </article>
                  </Link>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {workExperience
              .filter((_, i) => i % 3 === 1)
              .map((exp, index) => (
                <Card key={`exp-1-${index}`}>
                  <Link href={exp.title === "Harshith Ventures" ? "/work/harshith-ventures" : "#"}>
                    <article className="relative w-full h-full p-4 sm:p-6 md:p-8 min-h-[200px] md:min-h-[250px]">
                      <h2 className="z-20 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
                        {exp.title}
                      </h2>
                      <p className="z-20 mt-3 sm:mt-4 text-xs sm:text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 pb-8">
                        {exp.description}
                      </p>
                      <div className="absolute bottom-4 md:bottom-8">
                        <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                          Read more <span aria-hidden="true">&rarr;</span>
                        </p>
                      </div>
                    </article>
                  </Link>
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {workExperience
              .filter((_, i) => i % 3 === 2)
              .map((exp, index) => (
                <Card key={`exp-2-${index}`}>
                  <Link href={exp.title === "Harshith Ventures" ? "/work/harshith-ventures" : "#"}>
                    <article className="relative w-full h-full p-4 sm:p-6 md:p-8 min-h-[200px] md:min-h-[250px]">
                      <h2 className="z-20 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
                        {exp.title}
                      </h2>
                      <p className="z-20 mt-3 sm:mt-4 text-xs sm:text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 pb-8">
                        {exp.description}
                      </p>
                      <div className="absolute bottom-4 md:bottom-8">
                        <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                          Read more <span aria-hidden="true">&rarr;</span>
                        </p>
                      </div>
                    </article>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
