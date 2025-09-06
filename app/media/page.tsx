"use client";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { Card } from "../components/card";
import Link from "next/link";
import { ExternalLink, Calendar, BookOpen, Video, Mic, Newspaper } from "lucide-react";
import { useState } from "react";

const pressArticles = [
  {
    title: "JustPaid and Scritch Partner to Transform Veterinary Practice Management",
    publication: "AP News",
    date: "2025-06-03",
    description: "Strategic partnership announcement between JustPaid's AI-powered revenue automation and Scritch's veterinary AI operating system. Quote: 'Working with Claire and the Scritch team has been incredible.'",
    url: "https://apnews.com",
    type: "Press Release"
  },
  {
    title: "Young Tech Entrepreneur Predicted the White-Collar AI Bloodbath",
    publication: "News Channel Nebraska",
    date: "2025-06-02",
    description: "'Most white-collar jobs have become email jobs. We're literally watching people use ChatGPT to draft replies to emails that were sent using ChatGPT. The irony is staggering.'",
    url: "https://newschannelnebraska.com",
    type: "Feature"
  },
  {
    title: "AI Integration for Veterinary Care: JustPaid x Scritch",
    publication: "Yahoo Finance",
    date: "2025-06-01",
    description: "JustPaid will serve as Scritch's official billing and invoicing platform, bringing AI automation to veterinary practices nationwide.",
    url: "https://finance.yahoo.com",
    type: "Partnership"
  },
  {
    title: "Modern B2B Collaboration Powered by AI",
    publication: "MarketWatch",
    date: "2025-05-28",
    description: "How Y Combinator-backed JustPaid and Scritch are pioneering AI-first B2B partnerships in healthcare technology.",
    url: "https://marketwatch.com",
    type: "Analysis"
  }
];

const videos = [
  {
    title: "Building an AI SaaS Landing Page in Minutes with Bolt.new",
    publication: "Harshith Vaddiparthy",
    date: "2024-04-20",
    description: "Learn how to create and deploy a professional SaaS landing page using AI in just minutes. 25K+ views.",
    url: "https://www.youtube.com/watch?v=aya5zikAYLk",
    type: "Tutorial"
  },
  {
    title: "How DeepSeek R1 Caused a $2 Trillion Stock Market Loss",
    publication: "Harshith Vaddiparthy",
    date: "2024-05-08",
    description: "Analysis of DeepSeek R1's market impact and how to leverage this technology for investment opportunities. 32K+ views.",
    url: "https://www.youtube.com/watch?v=UGXcC0TuKyM",
    type: "Analysis"
  },
  {
    title: "Automating Meme Coin Trading with DeepSeek R1",
    publication: "Harshith Vaddiparthy",
    date: "2024-05-12",
    description: "Step-by-step guide to building a trading bot that identifies low-cap meme coins with 10x+ potential. 22K+ views.",
    url: "https://www.youtube.com/watch?v=xGI8NgS6_oc",
    type: "Tutorial"
  },
  {
    title: "The Complete Guide to Prompt Engineering",
    publication: "Harshith Vaddiparthy",
    date: "2024-04-05",
    description: "Learn effective techniques for crafting prompts that generate precise, useful AI responses. 31K+ views.",
    url: "https://www.youtube.com/watch?v=l-skX8z18Mk",
    type: "Education"
  }
];

const podcasts = [
  {
    title: "The Neuroscience of Digital Identity",
    publication: "NFT.NYC 2023",
    date: "2023-04-12",
    description: "VIP speaking engagement exploring how digital identities shape our neural pathways and behavior in Web3 ecosystems.",
    url: "https://nft.nyc",
    type: "Keynote"
  },
  {
    title: "Vibe Coding: The Future of AI Development",
    publication: "Tech Talks Daily",
    date: "2024-05-15",
    description: "Introducing the Vibe Coding methodology - a new paradigm for building AI-native applications that prioritizes intuition over specification.",
    url: "https://techtalks.daily",
    type: "Interview"
  },
  {
    title: "From ARTIFIN Exit to JustPaid Growth",
    publication: "Startup Stories",
    date: "2024-01-20",
    description: "The journey of exiting ARTIFIN for $50K and joining JustPaid as Head of Growth - lessons in timing, value creation, and strategic pivots.",
    url: "https://startupstories.com",
    type: "Guest"
  },
  {
    title: "AI Agents vs Email Jobs: The Coming Disruption",
    publication: "Future of Work Podcast",
    date: "2024-06-02",
    description: "Why most white-collar work has devolved into 'email jobs' and how AI agents will eliminate this inefficiency.",
    url: "https://futureofwork.fm",
    type: "Analysis"
  }
];

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<'press' | 'videos' | 'podcasts'>('press');
  
  const currentContent = activeTab === 'press' ? pressArticles : activeTab === 'videos' ? videos : podcasts;
  
  return (
    <div className="bg-gradient-to-tl from-zinc-950/50 from-0% via-zinc-600/20 via-50% to-zinc-950/50 to-100% min-h-screen">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation showMobileControls={true} />
      
      <div className="px-4 sm:px-6 pt-12 sm:pt-16 mx-auto space-y-6 max-w-7xl lg:px-8 md:space-y-12 md:pt-20 lg:pt-24">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Media
          </h2>
          <p className="mt-4 text-zinc-400">
            Featured articles, interviews, and press coverage highlighting my work in AI, blockchain, and technology innovation.
          </p>
        </div>
        
        <div className="w-full h-px bg-zinc-800" />
        
        {/* Tabs */}
        <div className="flex gap-6 border-b border-zinc-800">
          <button
            onClick={() => setActiveTab('press')}
            className={`flex items-center gap-2 pb-3 px-1 text-sm font-medium transition-colors relative ${
              activeTab === 'press' 
                ? 'text-zinc-100' 
                : 'text-zinc-400 hover:text-zinc-300'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            Press
            {activeTab === 'press' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 pb-3 px-1 text-sm font-medium transition-colors relative ${
              activeTab === 'videos' 
                ? 'text-zinc-100' 
                : 'text-zinc-400 hover:text-zinc-300'
            }`}
          >
            <Video className="w-4 h-4" />
            Videos
            {activeTab === 'videos' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('podcasts')}
            className={`flex items-center gap-2 pb-3 px-1 text-sm font-medium transition-colors relative ${
              activeTab === 'podcasts' 
                ? 'text-zinc-100' 
                : 'text-zinc-400 hover:text-zinc-300'
            }`}
          >
            <Mic className="w-4 h-4" />
            Podcasts
            {activeTab === 'podcasts' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-100" />
            )}
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2">
          {currentContent.map((feature, index) => (
            <Card key={index}>
              <Link href={feature.url} target="_blank" rel="noopener noreferrer">
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-zinc-500" />
                      <span className="text-xs text-zinc-500">{feature.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Calendar className="w-3 h-3" />
                      <time dateTime={feature.date}>
                        {new Date(feature.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white sm:text-2xl font-display mb-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-500 mb-4">
                    {feature.publication}
                  </p>
                  
                  <p className="mt-4 leading-7 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {feature.description}
                  </p>
                  
                  <div className="absolute bottom-4 md:bottom-8">
                    <div className="flex items-center gap-2 text-zinc-200 hover:text-zinc-50">
                      <span className="text-sm">Read article</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}