"use client";

import Link from "next/link";
import React from "react";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import Particles from "../../components/particles";
import { ArrowLeft, Trophy, Zap, BarChart, Youtube, Brain, TrendingUp, Lightbulb } from "lucide-react";

export default function ArtifinPage() {
  const keyAchievements = [
    "Built an AI-powered dashboard for financial analysis and data processing",
    "Transformed raw financial data into actionable insights for users",
    "Developed from concept to market-ready product with a small team",
    "Implemented natural language processing for financial document analysis",
    "Successfully exited through acquisition by Oaysys Ventures",
    "Created specialized AI wrapper for finance industry when many were skeptical"
  ];

  const projects = [
    {
      title: "Financial Data Analyzer",
      description: "AI system that transformed raw financial data into actionable insights, helping professionals make better decisions.",
      icon: <BarChart className="w-5 h-5" />,
      status: "Completed"
    },
    {
      title: "NLP Document Processing",
      description: "Natural language processing system for analyzing complex financial documents and extracting key insights.",
      icon: <Brain className="w-5 h-5" />,
      status: "Completed"
    },
    {
      title: "Acquisition Journey",
      description: "Listed on acquire.com and successfully exited to Oaysys Ventures who valued the technology and domain.",
      icon: <TrendingUp className="w-5 h-5" />,
      status: "Exited"
    }
  ];

  const keyLessons = [
    "Building and selling micro-SaaS applications can be a viable path to wealth creation",
    "Focus on creating real value even when critics dismiss your approach",
    "Having an exit strategy is important, even for early-stage startups",
    "Building with friends can be rewarding if expectations are aligned",
    "Sometimes the unexpected path (like selling on acquire.com) leads to the best outcomes"
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
                ARTIFIN.ai
              </h1>
              <p className="text-xl text-zinc-400 font-light">Founder & CEO</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 text-xs font-medium text-red-400 border border-red-800/50 rounded-full bg-red-900/20">
                Acquired
              </span>
              <span className="text-sm text-zinc-400">Mar 2023 - Jan 2024</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {["AI", "Fintech", "Financial Analysis", "Startup", "Exit", "NLP", "Data Visualization"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs font-medium text-zinc-400 border border-zinc-700/30 rounded-full hover:border-zinc-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-4xl">
            AI-driven data analysis platform for finance professionals. ARTIFIN enabled finance teams to analyze data, 
            manage complex tasks, and provide strategic insights for clearer financial decision-making. Successfully 
            exited when acquired by Oaysys Ventures.
          </p>
        </div>

        {/* Product Demo Videos */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Youtube className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Product Demo</h2>
          </div>
          <Card>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/fSstvjNvTSU"
                    title="Artifin AI Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/zHbXkVZ5z_E"
                    title="Artifin AI Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/7A60j8kSpC4"
                    title="Artifin AI Use Cases"
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

        {/* Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Key Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-zinc-500">{project.icon}</div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Exited' ? 'bg-red-900/30 text-red-400 border border-red-800/50' :
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

        {/* Acquisition Story */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Acquisition Story</h2>
          </div>
          <Card>
            <div className="p-8">
              <div className="space-y-6 text-zinc-300">
                <p className="leading-relaxed">
                  In January 2024, we successfully exited ARTIFIN through an acquisition by Oaysys Ventures. 
                  What started as a passion project with friends turned into a valuable product that caught 
                  the eye of strategic acquirers.
                </p>
                <p className="leading-relaxed">
                  We launched ARTIFIN when ChatGPT was just becoming popular. At that time, building "AI wrappers" 
                  was often criticized as adding little value. As a group of 21-year-olds, we faced challenges 
                  trying to raise VC funding despite having a working product.
                </p>
                <p className="leading-relaxed">
                  This experience taught me valuable lessons about entrepreneurship and the reality of startup 
                  funding. Not being based in the US made raising capital particularly challenging, which led me 
                  to shift my focus toward building sellable micro-apps to build wealth incrementally.
                </p>
                <p className="leading-relaxed">
                  When we listed ARTIFIN on acquire.com, we were pre-revenue but had built solid technology. 
                  An investor from Oaysys Ventures saw the potential in our tech stack and domain, leading to 
                  the acquisition.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* About & Key Lessons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* About ARTIFIN */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-5 h-5 text-zinc-500" />
              <h2 className="text-xl font-semibold text-zinc-100">About ARTIFIN</h2>
            </div>
            <Card>
              <div className="p-6">
                <p className="text-zinc-300 leading-relaxed mb-6">
                  ARTIFIN (Artificial Intelligence + Finance) was built around the time ChatGPT first launched. 
                  We created a specialized AI wrapper for the finance industry when many were skeptical of 
                  building on top of AI platforms.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  The product helped financial professionals analyze data and generate insights that would 
                  normally take hours to produce. We focused on transforming raw financial data into actionable 
                  insights through AI-powered analysis.
                </p>
              </div>
            </Card>
          </div>

          {/* Key Lessons */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-5 h-5 text-zinc-500" />
              <h2 className="text-xl font-semibold text-zinc-100">Key Lessons</h2>
            </div>
            <Card>
              <div className="p-6">
                <ul className="space-y-4">
                  {keyLessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-zinc-500 mt-0.5">•</span>
                      <span className="text-zinc-300 text-sm leading-relaxed">{lesson}</span>
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