import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { Card } from "../components/card";
import Link from "next/link";
import { Clock, Eye, ArrowUpRight } from "lucide-react";

const essays = [
  {
    title: "The Agentic Future: Why AI Agents Will Replace Traditional Software",
    date: "2024-03-20",
    readTime: "12 min read",
    views: 5420,
    excerpt: "Traditional software is command-based and reactive. AI agents are goal-oriented and proactive. This fundamental shift will redefine how we interact with computers.",
    slug: "agentic-future-ai-agents",
    featured: true,
    tags: ["AI", "Future", "Software"]
  },
  {
    title: "Building in Public: Lessons from Failed Startups",
    date: "2024-03-10",
    readTime: "8 min read",
    views: 3200,
    excerpt: "Failure is the best teacher, but only if you're willing to learn. Here's what I learned from building and failing with three different startups.",
    slug: "building-in-public-lessons",
    featured: false,
    tags: ["Startups", "Entrepreneurship"]
  },
  {
    title: "The Attention Economy is Dead. Long Live the Intention Economy",
    date: "2024-02-28",
    readTime: "15 min read",
    views: 8900,
    excerpt: "We've been optimizing for the wrong metrics. The future belongs to platforms that respect user intention rather than exploit user attention.",
    slug: "attention-intention-economy",
    featured: true,
    tags: ["Economics", "Product", "Future"]
  },
  {
    title: "Why Every Company Needs an AI Strategy (Not Just AI Tools)",
    date: "2024-02-15",
    readTime: "10 min read",
    views: 4100,
    excerpt: "Buying ChatGPT licenses isn't an AI strategy. Here's how to think systematically about AI transformation in your organization.",
    slug: "ai-strategy-not-tools",
    featured: false,
    tags: ["AI", "Strategy", "Business"]
  },
  {
    title: "The Myth of the 10x Engineer",
    date: "2024-02-01",
    readTime: "7 min read",
    views: 6700,
    excerpt: "The best engineers aren't 10x better at coding. They're 10x better at avoiding code that shouldn't exist in the first place.",
    slug: "myth-10x-engineer",
    featured: false,
    tags: ["Engineering", "Culture", "Tech"]
  },
  {
    title: "Web3's Identity Crisis: Speculation vs. Innovation",
    date: "2024-01-20",
    readTime: "14 min read",
    views: 5200,
    excerpt: "The crypto industry is stuck between being a casino and being the future of finance. Here's how we move forward.",
    slug: "web3-identity-crisis",
    featured: false,
    tags: ["Web3", "Blockchain", "Crypto"]
  },
  {
    title: "First Principles Thinking: A Practical Guide",
    date: "2024-01-10",
    readTime: "9 min read",
    views: 7800,
    excerpt: "Everyone talks about first principles thinking. Few actually practice it. Here's a framework that actually works.",
    slug: "first-principles-practical",
    featured: true,
    tags: ["Thinking", "Philosophy", "Methods"]
  },
  {
    title: "The Coming Wave of AI-Native Applications",
    date: "2023-12-28",
    readTime: "11 min read",
    views: 9200,
    excerpt: "We're not just adding AI to existing apps. We're rebuilding everything from scratch with AI at the core.",
    slug: "ai-native-applications",
    featured: false,
    tags: ["AI", "Product", "Future"]
  }
];

export default function EssaysPage() {
  const featuredEssays = essays.filter(e => e.featured);
  const regularEssays = essays.filter(e => !e.featured);
  
  return (
    <div className="bg-gradient-to-tl from-zinc-950/50 from-0% via-zinc-600/20 via-50% to-zinc-950/50 to-100% min-h-screen">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation showMobileControls={true} />
      
      <div className="px-4 sm:px-6 pt-12 sm:pt-16 mx-auto space-y-6 max-w-7xl lg:px-8 md:space-y-12 md:pt-20 lg:pt-24">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Essays
          </h2>
          <p className="mt-4 text-zinc-400">
            Thoughts on AI, technology, startups, and the future of human-computer interaction.
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
                      <div className="flex items-center gap-4 text-xs text-zinc-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {essay.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {essay.views.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white sm:text-2xl font-display mb-3">
                      {essay.title}
                    </h3>
                    
                    <p className="mt-4 leading-7 duration-150 text-zinc-400 group-hover:text-zinc-300">
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
                      <div className="flex items-center gap-1 text-xs text-zinc-500">
                        <Eye className="w-3 h-3" />
                        {essay.views.toLocaleString()}
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