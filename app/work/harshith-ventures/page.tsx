"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import Particles from "../../components/particles";
import { ArrowLeft, Building2, TrendingUp, Lightbulb, Target, Rocket, Award, Code, Globe, Zap, Users, DollarSign } from "lucide-react";

export default function HarshithaVenturesPage() {
  const keyAchievements = [
    "Portfolio of innovative projects and strategic investments",
    "Established partnerships with leading AI research labs",
    "Mentored 5+ early-stage founders in the AI space",
    "Created framework for evaluating transformative technology investments"
  ];

  const projects = [
    {
      title: "AI Research Initiative",
      description: "Funded and collaborated on research exploring practical applications of generative AI in creative industries.",
      icon: <Lightbulb className="w-5 h-5" />,
      status: "Active"
    },
    {
      title: "Blockchain Governance",
      description: "Developed a governance framework for decentralized autonomous organizations.",
      icon: <Globe className="w-5 h-5" />,
      status: "Completed"
    },
    {
      title: "AI Tools Collection",
      description: "Building a suite of specialized AI tools using AWS, Azure, and NVIDIA cloud infrastructure.",
      icon: <Code className="w-5 h-5" />,
      status: "In Progress"
    }
  ];

  const buildingApproach = [
    "Building small, focused AI tools using AWS, Azure, and NVIDIA credits",
    "Targeting problems that can be solved elegantly with modern AI capabilities",
    "Creating sellable assets that generate both cash flow and potential acquisition value",
    "Leveraging the micro-acquisition market through platforms like acquire.com"
  ];

  const investingApproach = [
    "Writing small checks to promising students and graduates starting their entrepreneurial journey",
    "Helping early founders access AI credits and technical resources",
    "Taking advisory roles in select startups in exchange for equity",
    "Making strategic investments in established companies",
    "Building wealth through equity ownership rather than traditional employment"
  ];

  return (
    <div className="relative min-h-screen">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation showMobileControls={true} />
      
      <div className="px-4 sm:px-6 pt-20 sm:pt-24 pb-20 mx-auto max-w-6xl lg:px-8">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-all duration-200 mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium">Back to Work</span>
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-start justify-between flex-wrap gap-6 mb-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 mb-4 font-display">
                Harshitha Ventures
              </h1>
              <p className="text-xl text-zinc-400 font-light">Building & Investing</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-zinc-400">Jan 2025 - Present</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Venture Building", "Angel Investing", "AI", "Web3", "Micro Acquisitions"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs font-medium text-zinc-400 border border-zinc-700/30 rounded-full hover:border-zinc-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-4xl">
            Personal holding company focused on building and investing in transformative technologies 
            at the intersection of AI, blockchain, and human progress.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Key Achievements</h2>
          </div>
          <Card>
            <div className="p-8">
              <ul className="space-y-4">
                {keyAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span className="text-zinc-300 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        {/* Philosophy */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Philosophy</h2>
          </div>
          <Card>
            <div className="p-8">
              <div className="space-y-6 text-zinc-300">
                <p className="text-lg leading-relaxed">
                  I believe in the power of small, focused teams building useful tools. The future belongs 
                  to micro startups that solve real problems efficiently, not just companies chasing huge 
                  VC rounds. I'm betting on this future by being my own VC.
                </p>
                <p className="text-lg leading-relaxed">
                  With high agency, a lot is possible. I believe the investment landscape is changing - 
                  micro startups built by small teams with high output will win the future. No one is 
                  handing out millions in VC money, so I choose to be my own VC.
                </p>
                
                {/* You Can Just Do Things Meme */}
                <div className="mt-8 space-y-4">
                  <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-zinc-700/50">
                    <Image
                      src="/images/media/you-can-just-do-things.jpg"
                      alt="You Can Just Do Things Meme"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                  <p className="text-base text-zinc-400 italic text-center">
                    "You Can Just Do Things" - The philosophy that drives everything we build
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-zinc-500">{project.icon}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Active' ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-800/50' :
                      project.status === 'In Progress' ? 'bg-blue-900/30 text-blue-400 border border-blue-800/50' :
                      'text-zinc-500 border border-zinc-700/50'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-zinc-100 mb-3">{project.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Building & Investing Approaches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Building Approach */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-5 h-5 text-zinc-500" />
              <h2 className="text-xl font-semibold text-zinc-100">Building Approach</h2>
            </div>
            <Card>
              <div className="p-6">
                <ul className="space-y-4">
                  {buildingApproach.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-zinc-500 mt-0.5">•</span>
                      <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Investing Approach */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-5 h-5 text-zinc-500" />
              <h2 className="text-xl font-semibold text-zinc-100">Investing Approach</h2>
            </div>
            <Card>
              <div className="p-6">
                <ul className="space-y-4">
                  {investingApproach.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-zinc-500 mt-0.5">•</span>
                      <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}