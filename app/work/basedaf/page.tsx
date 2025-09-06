"use client";

import Link from "next/link";
import React from "react";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import Particles from "../../components/particles";
import { ArrowLeft, Trophy, Zap, Users, Twitter, Globe, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function BasedAFPage() {
  const keyAchievements = [
    "Contributed to $2 million in primary NFT sales through targeted marketing and community engagement.",
    "Grew the Discord community by 25% leading up to and during the NFT launch.",
    "Managed the official Twitter account, increasing follower engagement by 40%.",
    "Developed and executed social media campaigns centered around the 'Trashland' lore.",
    "Implemented community moderation and engagement strategies within Discord.",
    "Handled community communications during market volatility and project updates (crisis management).",
    "Cultivated a highly engaged community within the niche NFT collector space."
  ];

  const keyResponsibilities = [
    "Overseeing the official BasedAF Twitter account, including content strategy and daily posts.",
    "Managing all aspects of the Discord server: moderation, engagement, structure, and bot integrations.",
    "Developing and executing marketing campaigns for the Based Heads NFT drop.",
    "Creating engaging content (tweets, threads, visuals) aligned with the brand and lore.",
    "Responding to community inquiries and managing sentiment across social platforms.",
    "Reporting on community growth, engagement metrics, and campaign performance.",
    "Navigating community concerns and potential crises during a volatile market period."
  ];

  const projects = [
    {
      title: "Based Heads NFT Launch Campaign",
      description: "Directed social media promotion and community hype building for the 10,000 PFP NFT collection launch, contributing significantly to the $2M sell-out.",
      icon: <TrendingUp className="w-5 h-5" />,
      status: "Completed"
    },
    {
      title: "Discord Community Hub",
      description: "Established and managed the BasedAF Discord server as the central hub for announcements, engagement, and collector support.",
      icon: <Users className="w-5 h-5" />,
      status: "Completed"
    },
    {
      title: "'Trashland' Lore Expansion",
      description: "Created social media content and community narratives based on the project's unique 'Trashland' lore to deepen collector engagement.",
      icon: <Zap className="w-5 h-5" />,
      status: "Completed"
    }
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
                BasedAF
              </h1>
              <p className="text-xl text-zinc-400 font-light">Head of Social Media & Community</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-400">Jan 2023 - May 2024</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {["NFT", "Community Management", "Social Media Marketing", "Web3", "Discord Management", "Twitter Marketing", "Content Creation", "Crisis Management", "Digital Collectibles"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs font-medium text-zinc-400 border border-zinc-700/30 rounded-full hover:border-zinc-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-4xl">
            Led social media strategy and community management for the Based Heads NFT project during the peak of the Web3 boom. 
            Managed Twitter presence, grew the Discord community, and played a key role in marketing campaigns that generated 
            $2 million in primary NFT sales. Translated learnings from the volatile NFT space into lasting community building 
            and crisis management skills.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Twitter className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Featured Content</h2>
          </div>
          <Card>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-zinc-100 mb-4">Based Heads NFT Collection</h3>
                  <p className="text-zinc-400 text-sm mb-4">
                    A collection of 10,000 unique PFP NFTs centered around the 'Trashland' lore.
                  </p>
                  <div className="flex gap-3">
                    <a 
                      href="https://opensea.io/collection/basedheads" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-xs font-medium text-zinc-300 border border-zinc-700 rounded-md hover:border-zinc-600 transition-colors"
                    >
                      <Globe className="w-3 h-3 mr-2" />
                      View on OpenSea
                    </a>
                  </div>
                </div>
                <div>
                  <iframe
                    src="https://platform.twitter.com/embed/Tweet.html?id=1611128218626719744&theme=dark"
                    className="w-full border-0 rounded-lg"
                    frameBorder="0"
                    height="350"
                    style={{ maxWidth: "100%" }}
                    allowFullScreen
                    title="Featured Tweet"
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

        {/* Key Responsibilities */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Key Responsibilities</h2>
          </div>
          <Card>
            <div className="p-8">
              <ul className="space-y-4">
                {keyResponsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span className="text-zinc-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        {/* Context & Transferable Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-medium text-zinc-100 mb-4">Market Context</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The early 2023 NFT market was characterized by rapid growth and intense speculation. Based Heads launched 
                into this environment with a unique art style and lore ('Trashland'). My role involved capturing attention, 
                building a dedicated community, and driving sales in a highly competitive and fast-moving digital collectibles space.
              </p>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-medium text-zinc-100 mb-4">Transferable Skills</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                While the NFT market landscape has shifted significantly since 2023, this experience was invaluable. It honed 
                crucial skills in building and managing large online communities, executing high-stakes digital marketing campaigns, 
                navigating volatile market dynamics, and managing crises within a passionate user base. These skills are directly 
                applicable to community building, social media strategy, and user engagement roles in any tech sector.
              </p>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}