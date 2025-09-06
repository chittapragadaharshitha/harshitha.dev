"use client";

import Link from "next/link";
import React from "react";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import Particles from "../../components/particles";
import { ArrowLeft, Trophy, Users, MapPin, Zap, Globe, Linkedin, Youtube, Rocket, Building2 } from "lucide-react";

export default function MetaschoolPage() {
  const keyAchievements = [
    "Managed end-to-end organization of Token 2049 Dubai hackathon and VC meetup events",
    "Conducted technical workshops and educational sessions at Web3 conferences",
    "Led a team of 5 content creators, writers, and social media specialists",
    "Increased platform engagement by 35% through optimized content strategy",
    "Created and managed technical tutorial series on blockchain technologies",
    "Established partnerships with key Web3 ecosystem partners",
    "Pioneered the newsletter strategy that achieved 40% open rate",
    "Developed comprehensive educational material for Web3 developers"
  ];

  const projects = [
    {
      title: "Token 2049 Dubai Hackathon",
      description: "Orchestrated a three-day hackathon with over 200 participants, managing judging panels, mentorship sessions, and prize distribution worth $50K.",
      icon: <Rocket className="w-5 h-5" />,
      status: "Completed"
    },
    {
      title: "Educational Content Pipeline",
      description: "Established a structured content creation workflow for technical tutorials, blogs, and social media, increasing publication frequency by 60%.",
      icon: <Zap className="w-5 h-5" />,
      status: "Completed"
    },
    {
      title: "VC Meetup Series",
      description: "Organized exclusive networking events connecting Web3 founders with venture capital firms, facilitating investment discussions and partnerships.",
      icon: <Users className="w-5 h-5" />,
      status: "Completed"
    }
  ];

  const teamManagement = [
    "Technical writers creating blockchain development tutorials",
    "Newsletter specialists crafting weekly blockchain technology updates",
    "Social media managers developing Twitter threads and engagement strategies",
    "Video producers creating technical tutorials and event recordings",
    "Community managers facilitating Discord and Telegram discussions"
  ];

  const eventHighlights = [
    "200+ developer participants from 25+ countries",
    "15 venture capital firms represented at exclusive meetup",
    "Conducted technical workshop sessions on blockchain development",
    "$50K in prizes distributed to winning projects"
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
                Metaschool
              </h1>
              <p className="text-xl text-zinc-400 font-light">Content & Events Lead</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-400">Mar 2023 - Sep 2023</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Web3", "Event Management", "Content Strategy", "Team Leadership", "Public Speaking", "Technical Education", "Community Building"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs font-medium text-zinc-400 border border-zinc-700/30 rounded-full hover:border-zinc-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-4xl">
            Led content strategy and global event management for Metaschool, a Peak XV (formerly Sequoia India) funded Web3 
            education platform. Traveled internationally to manage events, hackathons, and VC meetups while overseeing a team 
            producing educational content.
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
                    src="https://www.youtube.com/embed/B68kv6-G7lY"
                    title="Metaschool Video 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/Yjg7w15lSPw"
                    title="Metaschool Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/nUQiWLYYb4c"
                    title="Metaschool Video 3"
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

        {/* Global Events - Token 2049 Dubai */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Global Events</h2>
          </div>
          <Card>
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-zinc-100 mb-2">Token 2049 Dubai</h3>
                <p className="text-zinc-400 mb-4">Hackathon & VC Meetup</p>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  Organized a comprehensive technical hackathon and exclusive VC networking event during Token 2049 Dubai. 
                  Managed the entire event flow including participant registration, judging criteria, mentorship sessions, 
                  and prize distribution.
                </p>
              </div>
              <div className="bg-zinc-800/20 border border-zinc-700/30 rounded-lg p-6">
                <h4 className="text-sm font-medium text-zinc-300 mb-4">Event Highlights</h4>
                <ul className="space-y-3">
                  {eventHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-zinc-500 mt-0.5">•</span>
                      <span className="text-zinc-300 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
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
                    <span className="text-xs px-2 py-1 rounded-full text-zinc-500 border border-zinc-700/50">
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

        {/* Team Leadership & Company Context */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Team Leadership */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-zinc-500" />
              <h2 className="text-xl font-semibold text-zinc-100">Team Leadership</h2>
            </div>
            <Card>
              <div className="p-6">
                <p className="text-zinc-300 mb-4">
                  Headed a team of 5 content creators, managing the production of educational materials for the Web3 ecosystem:
                </p>
                <ul className="space-y-4">
                  {teamManagement.map((item, index) => (
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
              <Building2 className="w-5 h-5 text-zinc-500" />
              <h2 className="text-xl font-semibold text-zinc-100">Company Context</h2>
            </div>
            <Card>
              <div className="p-6">
                <p className="text-zinc-300 leading-relaxed mb-6">
                  Peak XV (formerly Sequoia India) funded Web3 education platform that provided comprehensive 
                  blockchain education and developer resources to the global Web3 community.
                </p>
                <div className="bg-zinc-800/20 border border-zinc-700/30 rounded-lg p-4">
                  <p className="text-sm font-medium text-zinc-300 mb-3">Funding & Status</p>
                  <div className="flex flex-wrap gap-2">
                    {["Peak XV Funded", "Web3 Education", "Developer Platform"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-zinc-400 border border-zinc-700/50 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-400 mt-4">
                    The company later pivoted to BuildThatIdea, an AI application development platform focused on 
                    helping users launch AI apps without coding.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Travel Locations */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">International Presence</h2>
          </div>
          <div className="max-w-sm">
            <Card>
              <div className="p-6 text-center">
                <MapPin className="w-8 h-8 text-zinc-500 mx-auto mb-3" />
                <p className="text-lg font-medium text-zinc-100">Dubai</p>
                <p className="text-sm text-zinc-400 mt-1">Event Location</p>
              </div>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}