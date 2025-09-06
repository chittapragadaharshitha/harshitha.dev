"use client";

import Link from "next/link";
import React from "react";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import Particles from "../../components/particles";
import { ArrowLeft, Trophy, Zap, Users, BarChart, Globe, Rocket, ShieldCheck, MessageSquare } from "lucide-react";

export default function AmbassadorsSolutionsPage() {
  const keyAchievements = [
    "Developed and managed community growth strategies for multiple Web3/NFT clients.",
    "Grew client Discord communities significantly through targeted engagement and moderation.",
    "Established robust community moderation frameworks tailored for Web3 project needs.",
    "Executed social media and community campaigns supporting client NFT launches and projects.",
    "Secured strategic partnerships with key players in the blockchain and NFT ecosystem.",
    "Contributed directly to client success by fostering active, loyal, and secure online communities.",
    "Designed and implemented growth strategies leading to measurable increases in client user base and engagement.",
    "Successfully onboarded and managed relationships with new clients in the crypto sector."
  ];

  const keyResponsibilities = [
    "Developing bespoke community growth and engagement strategies for Web3/NFT clients.",
    "Setting up, configuring, securing, and managing client Discord servers, including bot integrations and role structures.",
    "Implementing community engagement initiatives, content calendars, moderation policies, and security protocols.",
    "Managing social media presence (Twitter, etc.) specifically for community building and project announcements.",
    "Identifying, pitching, and securing new business opportunities and strategic partnerships within the crypto/blockchain space.",
    "Analyzing community health metrics (engagement, growth, sentiment) and reporting findings to clients.",
    "Collaborating with clients on marketing activations, online events (AMAs, contests), and IRL event support.",
    "Providing insights and strategic recommendations based on Web3 market trends and community feedback."
  ];

  const coreServices = [
    { icon: <MessageSquare className="w-4 h-4" />, name: "Community Services" },
    { icon: <Zap className="w-4 h-4" />, name: "Marketing Services" },
    { icon: <Users className="w-4 h-4" />, name: "Event Services" },
    { icon: <ShieldCheck className="w-4 h-4" />, name: "Discord Moderation & Security" }
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
                Ambassadors Solutions Inc.
              </h1>
              <p className="text-xl text-zinc-400 font-light">Growth Manager (Web3 & Community Focus)</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://ambassadors.gg/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-xs font-medium text-zinc-300 border border-zinc-700 rounded-md hover:border-zinc-600 transition-colors"
              >
                <Globe className="w-3 h-3 mr-2" />
                Visit Website
              </a>
              <span className="text-sm text-zinc-400">May 2022 - Oct 2023</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Web3 Strategy", "NFT Project Growth", "Community Management", "Discord Management", "Growth Hacking", "Business Development", "Crypto", "Blockchain", "Partnership Development", "Social Media Strategy", "Marketing Campaigns", "Client Relationship Management"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs font-medium text-zinc-400 border border-zinc-700/30 rounded-full hover:border-zinc-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-4xl">
            As Growth Manager focused on the Web3 sector, I designed and executed strategies to build and scale online 
            communities for NFT and blockchain projects. Leveraging Ambassadors' expertise in digital adoption and onchain 
            solutions, I secured new business opportunities, managed client Discord communities, and drove engagement to 
            support growth objectives in the rapidly evolving crypto landscape.
          </p>
        </div>

        {/* Core Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Core Services Delivered</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreServices.map((service, index) => (
              <Card key={index}>
                <div className="p-4 text-center">
                  <div className="text-zinc-500 mb-3 flex justify-center">{service.icon}</div>
                  <p className="text-sm font-medium text-zinc-300">{service.name}</p>
                </div>
              </Card>
            ))}
          </div>
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

        {/* Key Responsibilities */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-5 h-5 text-zinc-500" />
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

        {/* Company Context & Impact */}
        <Card>
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <BarChart className="w-5 h-5 text-zinc-500" />
              <h3 className="text-xl font-semibold text-zinc-100">Company Context & Impact</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Ambassadors Solutions Inc. specializes in building community and culture for projects at the forefront of 
              digital adoption, offering tailored services for the Web3 ecosystem. This includes community building/management, 
              comprehensive marketing strategies, and event services (both online and offline).
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My role involved applying these capabilities to help blockchain and NFT projects connect with their audiences 
              and achieve sustainable growth. Through strategic community management and business development, I contributed 
              to increased market share by 30% and company revenue by 20%, while building lasting relationships in the 
              crypto/blockchain sector.
            </p>
          </div>
        </Card>

      </div>
    </div>
  );
}