"use client";

import Link from "next/link";
import React from "react";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import Particles from "../../components/particles";
import { ArrowLeft, Rocket, Trophy, Users, TrendingUp, Zap, Globe, Linkedin, Twitter, Youtube, BarChart } from "lucide-react";

export default function JustPaidPage() {
  const keyAchievements = [
    "Established the JustPaid podcast featuring interviews with YC founders and fintech leaders",
    "Implemented growth hacking strategies resulting in 35% increase in demo requests",
    "Built and executed comprehensive content strategy across LinkedIn, Twitter, and YouTube",
    "Created and managed newsletter distribution, achieving 28% open rate",
    "Produced high-converting demo videos showcasing platform capabilities",
    "Increased organic social media engagement by 45% through strategic posting",
    "Optimized website SEO resulting in 30% higher organic traffic"
  ];

  const projects = [
    {
      title: "JustPaid Podcast",
      description: "Launched and grew a podcast featuring interviews with YC founders and AI entrepreneurs, distributed across Spotify, Apple, and YouTube.",
      icon: <Youtube className="w-5 h-5" />,
      status: "Active"
    },
    {
      title: "Growth Hacking Initiative",
      description: "Implemented data-driven growth strategies to increase demo requests and conversion rates for the sales team.",
      icon: <TrendingUp className="w-5 h-5" />,
      status: "Active"
    },
    {
      title: "Content Dashboard",
      description: "Developed a front-end dashboard for tracking content performance metrics across all platforms.",
      icon: <BarChart className="w-5 h-5" />,
      status: "Completed"
    }
  ];

  const responsibilities = [
    "Collaborating directly with the CEO on high-level marketing strategies and initiatives",
    "Leading the content team in producing articles, videos, and social media content",
    "Growing the company's podcast featuring interviews with YC founders and fintech leaders",
    "Developing and executing LinkedIn and Twitter strategies to build brand awareness",
    "Creating and distributing weekly newsletter",
    "Producing demo videos to showcase platform capabilities to potential clients",
    "Shadowing executive meetings and providing chief of staff support",
    "Implementing SEO strategies to increase organic traffic to company website",
    "Coordinating marketing initiatives with the sales team to drive customer acquisition"
  ];

  const marketingImpact = [
    { metric: "3,200+", label: "Monthly Podcast Listeners", icon: <Youtube className="w-5 h-5" /> },
    { metric: "28%", label: "Newsletter Open Rate", icon: <Zap className="w-5 h-5" /> },
    { metric: "45%", label: "Social Engagement Increase", icon: <TrendingUp className="w-5 h-5" /> },
    { metric: "35%", label: "Demo Request Increase", icon: <Rocket className="w-5 h-5" /> }
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
                JustPaid
              </h1>
              <p className="text-xl text-zinc-400 font-light">Marketing & Media • YC W23</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-zinc-400">Sep 2024 - Present</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {["AI", "Content Production", "Growth Hacking", "Frontend", "Analytics", "Podcasting", "SEO"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs font-medium text-zinc-400 border border-zinc-700/30 rounded-full hover:border-zinc-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-4xl">
            Working directly with founder Daniel Kivatinos (previously exited DrChrono - one of YC's top healthcare exits) 
            on comprehensive marketing, content, and growth initiatives for the AI-powered revenue operations platform.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Youtube className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Featured Content</h2>
          </div>
          <Card>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/ViQ3Espcm3U"
                    title="JustPaid AI Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/uHD63dQO7Co"
                    title="JustPaid AI Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/mETA86sOXYQ"
                    title="JustPaid AI Video 3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Achievements */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-zinc-500" />
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

        {/* Marketing Impact */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BarChart className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Marketing Impact</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketingImpact.map((item, index) => (
              <Card key={index}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-zinc-500">{item.icon}</div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-zinc-100">{item.metric}</p>
                    <p className="text-sm text-zinc-400">{item.label}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
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

        {/* About the Founder */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">About the Founder</h2>
          </div>
          <Card>
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">Daniel Kivatinos</h3>
                  <p className="text-zinc-400 mb-4">CEO & Co-Founder</p>
                  <p className="text-zinc-300 leading-relaxed mb-6">
                    Serial entrepreneur who previously co-founded DrChrono - one of Y Combinator's top healthcare exits. 
                    Invited to the White House during the Obama administration for healthcare initiatives and partnered 
                    with Apple on multiple projects.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/kivatinos" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a 
                      href="https://x.com/danielkivatinos" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      <span className="text-sm">Twitter</span>
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-zinc-800/20 border border-zinc-700/30 rounded-lg p-6">
                    <p className="text-zinc-300 italic leading-relaxed">
                      "JustPaid.ai is tackling a major challenge in B2B payments: the inefficiency of accounts 
                      receivable processes, especially as companies scale. For many businesses, collecting payments 
                      isn't just about sending an invoice—it involves approvals, tracking, follow-ups, and managing 
                      complex billing structures."
                    </p>
                    <p className="text-zinc-400 text-sm mt-4">— Daniel Kivatinos, CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Responsibilities & Company Context */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Responsibilities */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-5 h-5 text-zinc-500" />
              <h2 className="text-xl font-semibold text-zinc-100">Responsibilities</h2>
            </div>
            <Card>
              <div className="p-6">
                <ul className="space-y-4">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-zinc-500 mt-0.5">•</span>
                      <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Company Context */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-5 h-5 text-zinc-500" />
              <h2 className="text-xl font-semibold text-zinc-100">Company Context</h2>
            </div>
            <Card>
              <div className="p-6">
                <p className="text-zinc-300 leading-relaxed mb-6">
                  JustPaid is reimagining B2B accounts receivable workflows with AI. The platform converts 
                  complex sales contracts into dynamic revenue records where invoices are automatically generated, 
                  payments are reconciled, and AI-powered collections workflows guide cash into your bank account.
                </p>
                <div className="bg-zinc-800/20 border border-zinc-700/30 rounded-lg p-4">
                  <p className="text-sm font-medium text-zinc-300 mb-3">Y Combinator W23 Batch</p>
                  <div className="flex flex-wrap gap-2">
                    {["Fintech", "AI", "B2B", "Revenue Operations"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-zinc-400 border border-zinc-700/50 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}