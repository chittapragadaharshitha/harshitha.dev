import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { Card } from "../components/card";
import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";

const essays = [
  {
    title: "I Built an AI Assistant That Runs My Team's Slack, Telegram, and WhatsApp",
    date: "2026-02-05",
    readTime: "8 min read",
    excerpt: "How we deployed an always-on AI assistant using OpenClaw at Harshith Ventures. From setup to daily operations, here's what it actually looks like to have an AI teammate across every messaging platform.",
    slug: "i-built-an-ai-assistant-with-openclaw",
    featured: true,
    tags: ["AI", "OpenClaw", "Automation", "Slack"]
  },
  {
    title: "Vibe Coding: How I Build Full-Stack Apps 10x Faster with Cursor AI",
    date: "2026-01-28",
    readTime: "7 min read",
    excerpt: "There's a new way to build software. Instead of writing every line yourself, you describe what you want, iterate with the AI, and ship in hours. Here's my workflow and why it matters.",
    slug: "vibe-coding-building-faster-with-ai",
    featured: true,
    tags: ["AI", "Cursor", "Development", "Vibe Coding"]
  },
  {
    title: "AI Agents in 2026: We've Moved Way Beyond Chatbots",
    date: "2026-01-20",
    readTime: "10 min read",
    excerpt: "From simple Q&A bots to always-on digital teammates with persistent memory and multi-platform presence. The evolution of AI agents and what it means for the future of work.",
    slug: "ai-agents-in-2026-beyond-chatbots",
    featured: false,
    tags: ["AI", "Agents", "Technology", "Future"]
  },
  {
    title: "CNNs Explained: How I Built a Pneumonia Detection Model as a College Project",
    date: "2026-01-10",
    readTime: "9 min read",
    excerpt: "A practical walkthrough of building a Convolutional Neural Network that detects pneumonia from chest X-rays. What worked, what didn't, and what I learned about AI in healthcare.",
    slug: "convolutional-neural-networks-explained",
    featured: false,
    tags: ["AI", "Deep Learning", "CNN", "Healthcare"]
  },
  {
    title: "What Being a Google Student Ambassador Taught Me About Building Tech Communities",
    date: "2025-12-15",
    readTime: "6 min read",
    excerpt: "The role is part evangelist, part teacher, part community builder. Six months in, here's what actually matters about connecting people with technology.",
    slug: "what-google-taught-me-about-tech-communities",
    featured: false,
    tags: ["Google", "Community", "Career", "Tech"]
  },
];

export default function EssaysPage() {
  const featuredEssays = essays.filter(e => e.featured);
  const regularEssays = essays.filter(e => !e.featured);
  
  return (
    <div className="bg-gradient-to-tl from-zinc-950/50 from-0% via-zinc-600/20 via-50% to-zinc-950/50 to-100% min-h-screen">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation showMobileControls={true} />
      
      <div className="px-4 sm:px-6 pt-12 sm:pt-16 mx-auto space-y-6 max-w-7xl lg:px-8 md:space-y-12 md:pt-20 lg:pt-24 pb-16">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Essays
          </h2>
          <p className="mt-4 text-zinc-400">
            Thoughts on AI, development tools, building communities, and what I'm learning along the way.
          </p>
        </div>
        
        <div className="w-full h-px bg-zinc-800" />
        
        {/* Featured Essays */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-zinc-200">Featured</h3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {featuredEssays.map((essay) => (
              <Card key={essay.slug}>
                <Link href={`/essays/${essay.slug}`}>
                  <article className="relative w-full h-full p-4 md:p-8">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <time className="text-xs text-zinc-500" dateTime={essay.date}>
                        {new Date(essay.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                      <span className="text-xs text-zinc-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {essay.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white sm:text-2xl font-display mb-3">
                      {essay.title}
                    </h3>
                    
                    <p className="mt-4 leading-7 duration-150 text-zinc-400 group-hover:text-zinc-300 text-sm">
                      {essay.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-6">
                      {essay.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8">
                      <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                    </div>
                  </article>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        
        {/* All Essays */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold text-zinc-200">All Essays</h3>
          <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2 lg:grid-cols-3">
            {regularEssays.map((essay) => (
              <Card key={essay.slug}>
                <Link href={`/essays/${essay.slug}`}>
                  <article className="p-4 md:p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <time className="text-xs text-zinc-500" dateTime={essay.date}>
                        {new Date(essay.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                      <span className="text-xs text-zinc-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {essay.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white font-display mb-2">
                      {essay.title}
                    </h3>
                    
                    <p className="text-sm leading-6 text-zinc-400 group-hover:text-zinc-300 line-clamp-3">
                      {essay.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {essay.tags.slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800/50 text-zinc-500 border border-zinc-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
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
