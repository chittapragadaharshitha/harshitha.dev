"use client";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { Card } from "../components/card";
import Link from "next/link";
import { ExternalLink, Calendar, BookOpen, Video, Mic, Newspaper } from "lucide-react";
import { useState } from "react";

const pressArticles = [
  {
    title: "Harshith Vaddiparthy Joins Forbes Technology Council",
    publication: "Forbes Technology Council",
    date: "2025-07-15",
    description: "Accepted into Forbes Technology Council, an invitation-only community for world-class CIOs, CTOs, and technology executives. As Head of Growth at JustPaid [YC W23], recognized for successfully impacting business growth metrics and contributions to AI-powered growth strategies.",
    url: "https://councils.forbes.com/profile/Harshith-Vaddiparthy-Head-Growth-JustPaid/5747f601-ca29-4255-a79b-3518154819a7",
    type: "Announcement",
    tags: ["Forbes Council", "Technology Leadership", "AI Growth Strategy", "JustPaid", "Y Combinator", "Professional Recognition"]
  },
  {
    title: "Q&A with Harshith Vaddiparthy, Head of Growth at JustPaid",
    publication: "CityBiz",
    date: "2025-07-14",
    description: "In-depth interview discussing how AI is becoming 'the front door to enterprise software,' JustPaid's AI Agent achieving 85% trial-to-paid conversion, 45% reduction in AR processes, and the vision for the JustPaid Marketplace as the 'central nervous system' of B2B finance.",
    url: "https://www.citybiz.co/article/717444/qa-with-harshith-vaddiparthy-head-of-growth-at-justpaid/",
    type: "Interview",
    tags: ["AI Finance", "Product-Led Growth", "B2B SaaS", "JustPaid Marketplace", "Revenue Automation", "Y Combinator"]
  },
  {
    title: "Harshith Vaddiparthy Brings AI Expertise to JustPaid's Strategic Partnership with Scritch",
    publication: "AP News",
    date: "2025-06-03",
    description: "Featured in AP News for spearheading JustPaid's partnership with Scritch to revolutionize veterinary practices with AI agents. As Head of Growth at JustPaid, Harshith highlights how AI-first teams can integrate and grow without operational drag.",
    url: "https://apnews.com/press-release/pr-newswire/artificial-intelligence-85c269bd813076a9a1b69a8c62b7b7c4",
    type: "Press Release",
    tags: ["AI Agents", "Strategic Partnership", "Veterinary Tech", "JustPaid", "Head of Growth"]
  },
  {
    title: "JustPaid's Head of Growth Drives AI Integration for Veterinary Care",
    publication: "Yahoo Finance",
    date: "2025-06-03",
    description: "Featured in Yahoo Finance as Harshith Vaddiparthy, Head of Growth at Y Combinator-backed JustPaid, leads the strategic partnership with Scritch to transform veterinary practices through AI-powered billing and invoicing automation.",
    url: "https://finance.yahoo.com/news/justpaid-scritch-announce-strategic-partnership-130100707.html",
    type: "Press Release",
    tags: ["AI Integration", "Veterinary Care", "Strategic Partnership", "JustPaid", "Y Combinator", "Revenue Automation"]
  },
  {
    title: "Harshith Vaddiparthy: 'Modern B2B Collaboration Powered by AI'",
    publication: "MarketWatch",
    date: "2025-06-03",
    description: "Featured in MarketWatch highlighting Harshith's role as Head of Growth at JustPaid, the AI-powered revenue automation platform backed by Y Combinator, partnering with Scritch to automate veterinary billing operations and eliminate manual intervention.",
    url: "https://www.marketwatch.com/press-release/justpaid-and-scritch-announce-strategic-partnership-to-power-veterinary-practices-with-ai-agents-20831663",
    type: "Press Release",
    tags: ["B2B Collaboration", "AI Automation", "Veterinary Tech", "JustPaid", "Revenue Automation", "Y Combinator"]
  },
  {
    title: "Young Tech Entrepreneur Predicted The White-Collar AI Bloodbath And Built The Solution",
    publication: "News Channel Nebraska",
    date: "2025-06-02",
    description: "Featured in News Channel Nebraska: 22-year-old Harshith Vaddiparthy, who exited AI startup ARTIFIN for $50K in December 2023, warns that most entry-level jobs are now 'email jobs using ChatGPT to reply to ChatGPT' and advocates for strategic AI implementation.",
    url: "https://northeast.newschannelnebraska.com/story/52819387/young-tech-entrepreneur-predicted-the-white-collar-ai-bloodbath-and-built-the-solution",
    type: "Press Release",
    tags: ["AI Impact", "Future of Work", "Innovation", "Solutions", "ARTIFIN Exit", "White-Collar Automation"]
  },
  {
    title: "JustPaid and Scritch Announce Strategic Partnership to Power Veterinary Practices with AI Agents",
    publication: "Morningstar",
    date: "2025-06-03",
    description: "Featured in Morningstar on June 3, 2025 for JustPaid's strategic partnership with Scritch. As Head of Growth at JustPaid, Harshith Vaddiparthy helps ensure that Scritch's team 'never has to touch billing code again' as they scale their veterinary AI solution.",
    url: "https://www.morningstar.com/news/pr-newswire/20250603sf01417/justpaid-and-scritch-announce-strategic-partnership-to-power-veterinary-practices-with-ai-agents",
    type: "Press Release",
    tags: ["JustPaid", "AI Agents", "Veterinary Tech", "Partnership", "Y Combinator", "AI-First Startups"]
  },
  {
    title: "Young Tech Entrepreneur Predicted The White-Collar AI Bloodbath And Built The Solution",
    publication: "Financial Content",
    date: "2025-06",
    description: "Featured in Financial Content for accurately predicting AI's impact on white-collar jobs and developing innovative solutions",
    url: "https://markets.financialcontent.com/stocks/article/abnewswire-2025-6-2-young-tech-entrepreneur-predicted-the-white-collar-ai-bloodbath-and-built-the-solution",
    type: "Press Release",
    tags: ["AI Impact", "Future of Work", "Innovation"]
  },
  {
    title: "Harshith Vaddiparthy Redefines AI-Native Development with Vibe Coding",
    publication: "Barchart",
    date: "2025-05",
    description: "Featured in Barchart for pioneering Vibe Coding methodology and thought leadership in generative AI ecosystem",
    url: "https://www.barchart.com/story/news/32670486/harshith-vaddiparthy-redefines-ainative-development-with-vibe-coding-and-thought-leadership-across-the-generative-ai-ecosystem",
    type: "Press Release",
    tags: ["Vibe Coding", "AI-Native Development", "Thought Leadership"]
  },
  {
    title: "Harshith Vaddiparthy Emerges as a Rising AI Thought Leader",
    publication: "Benzinga",
    date: "2025-05",
    description: "Featured in Benzinga for startup exit, open source innovation, and AI thought leadership",
    url: "https://www.benzinga.com/pressreleases/25/05/ab45652898/harshith-vaddiparthy-emerges-as-a-rising-ai-thought-leader-with-startup-exit-open-source-innovati",
    type: "Press Release",
    tags: ["AI Thought Leader", "Startup Exit", "Open Source"]
  }
];

const videos = [
  {
    title: "Building an AI SaaS Landing Page in Minutes with Bolt.new",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/aya5zikAYLk?si=aPx84UFAZT5icR2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Learn how to create and deploy a professional SaaS landing page using AI in just minutes.",
    date: "2024-04-20",
    views: "25K",
    platform: "YouTube",
    tags: ["AI", "SaaS", "Web Development"],
    links: [
      { text: "Newsletter", url: "https://harshith.io/subscribe" },
      { text: "Demo Site", url: "https://fluffy-pavlova-4ae590.netlify.app" }
    ]
  },
  {
    title: "Non Coder Building a SaaS Application Using AI: Genesis",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uPohzMeYl8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "The vision behind empowering non-coders to create sophisticated software solutions using AI tools.",
    date: "2024-05-05",
    views: "17K",
    platform: "YouTube",
    tags: ["AI", "No-Code", "SaaS Development"]
  },
  {
    title: "How DeepSeek R1 Caused a $2 Trillion Stock Market Loss",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UGXcC0TuKyM?si=5jTcF_Axo90S1pxW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Analysis of DeepSeek R1's market impact and how to leverage this technology for investment opportunities.",
    date: "2024-05-08",
    views: "32K",
    platform: "YouTube",
    tags: ["AI", "Finance", "Investment", "DeepSeek"]
  },
  {
    title: "Automating Meme Coin Trading with DeepSeek R1 and Toolip Proxies",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xGI8NgS6_oc?si=RGJokMed_VhoHOYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Step-by-step guide to building a trading bot that identifies low-cap meme coins with 10x+ potential.",
    date: "2024-05-12",
    views: "22K",
    platform: "YouTube",
    tags: ["AI", "Crypto", "Trading", "DeepSeek", "Solana"],
    links: [
      { text: "Toolip Proxies", url: "https://toolip.io" },
      { text: "DeepSeek R1", url: "https://github.com/deepseek-ai/DeepSeek" },
      { text: "Newsletter", url: "https://harshith.io/subscribe" }
    ]
  },
  {
    title: "Micro-SaaS in 2024: The Small Business Game-Changer",
    embedCode: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7157016956259246080?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
    description: "Discover how Micro-SaaS solutions are revolutionizing small businesses in 2024.",
    date: "2024-05-10",
    views: "12K",
    platform: "LinkedIn",
    tags: ["Micro-SaaS", "Small Business", "SaaS"]
  },
  {
    title: "The Future of AI Development with Claude 3.5 Sonnet",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ip8nhe-FwYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Exploring Anthropic's Claude 3.5 Sonnet capabilities and applications in AI development.",
    date: "2024-04-22",
    views: "19K",
    platform: "YouTube",
    tags: ["AI", "Claude", "LLM"]
  },
  {
    title: "Building a No-Code Web App with AI Assistants",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ngu8ZI7l9JE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Step-by-step tutorial on creating web applications without coding using AI tools.",
    date: "2024-03-30",
    views: "24K",
    platform: "YouTube",
    tags: ["No-Code", "Web Development", "AI"]
  },
  {
    title: "The Complete Guide to Prompt Engineering",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/l-skX8z18Mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Learn effective techniques for crafting prompts that generate precise, useful AI responses.",
    date: "2024-04-05",
    views: "31K",
    platform: "YouTube",
    tags: ["Prompt Engineering", "AI", "LLM"]
  },
  {
    title: "How to Create Passive Income with AI Tools",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kMZH8KPQWUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Strategies for building income streams using the latest AI technologies.",
    date: "2024-04-12",
    views: "28K",
    platform: "YouTube",
    tags: ["Passive Income", "AI", "Entrepreneurship"]
  },
  {
    title: "AI Development for Startups: Best Practices",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Mx4QihV8aG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Key insights for startups looking to integrate AI into their products and services.",
    date: "2024-03-25",
    views: "15K",
    platform: "YouTube",
    tags: ["Startup", "AI Development", "Product Strategy"]
  },
  {
    title: "Deep Dive into Vector Databases",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Kp-XVaEDpZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Understanding vector databases and their applications in modern AI systems.",
    date: "2024-04-03",
    views: "17K",
    platform: "YouTube",
    tags: ["Vector Databases", "AI Infrastructure", "Data"]
  },
  {
    title: "Web3 Development with AI: Future Trends",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MizcZWLYkk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Exploring the intersection of Web3 technologies and artificial intelligence.",
    date: "2024-04-18",
    views: "22K",
    platform: "YouTube",
    tags: ["Web3", "Blockchain", "AI"]
  },
  {
    title: "Building AI Chat Interfaces: From Basics to Advanced",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NrfkbFqellw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Complete guide to creating effective conversational interfaces using AI.",
    date: "2024-03-28",
    views: "20K",
    platform: "YouTube",
    tags: ["Chat UI", "Conversational AI", "UX Design"]
  },
  {
    title: "Optimizing AI Models for Production",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/YfC4pguNFyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Techniques for deploying efficient and cost-effective AI solutions in production environments.",
    date: "2024-04-08",
    views: "16K",
    platform: "YouTube",
    tags: ["AI Optimization", "MLOps", "Production"]
  },
  {
    title: "Building RAG Applications with Open Source Tools",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wUXA5YTtMT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Step-by-step guide to creating Retrieval-Augmented Generation systems.",
    date: "2024-04-16",
    views: "21K",
    platform: "YouTube",
    tags: ["RAG", "Open Source", "NLP"]
  },
  {
    title: "The Future of Generative AI: Trends and Predictions",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/A5JrAh5kvOw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Analysis of where generative AI is headed and how it will transform industries.",
    date: "2024-05-02",
    views: "30K",
    platform: "YouTube",
    tags: ["Generative AI", "Future Tech", "Industry Trends"]
  },
  {
    title: "AI-Powered Content Creation Strategies",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kB9fGuzG-EQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "How to leverage AI tools for creating high-quality content at scale.",
    date: "2024-04-25",
    views: "23K",
    platform: "YouTube",
    tags: ["Content Creation", "AI Writing", "Digital Marketing"]
  },
  {
    title: "Machine Learning for Product Growth",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FhDBCL7CaPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Implementing ML strategies to accelerate product adoption and user engagement.",
    date: "2024-03-20",
    views: "19K",
    platform: "YouTube",
    tags: ["Machine Learning", "Product Growth", "Analytics"]
  },
  {
    title: "Building AI Agents: Architecture and Implementation",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WExD_t1hQnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Technical deep dive into designing and implementing autonomous AI agents.",
    date: "2024-04-30",
    views: "25K",
    platform: "YouTube",
    tags: ["AI Agents", "Autonomous Systems", "Software Architecture"]
  }
];

const podcasts = [
  {
    title: "AI & Entrepreneurship: Innovating with Machine Learning",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uHD63dQO7Co" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Exploring how to leverage AI and machine learning to create innovative business solutions.",
    date: "2024-05-15",
    duration: "48 min",
    url: "https://www.youtube.com/watch?v=uHD63dQO7Co",
    platform: "YouTube",
    views: "22K",
    tags: ["AI", "Entrepreneurship", "Innovation"]
  },
  {
    title: "The Future of No-Code Development Platforms",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RM4eyGYPQyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Discussion on how no-code platforms are changing software development for entrepreneurs.",
    date: "2024-05-10",
    duration: "53 min",
    url: "https://www.youtube.com/watch?v=RM4eyGYPQyA",
    platform: "YouTube",
    views: "18K",
    tags: ["No-Code", "Development", "Technology"]
  },
  {
    title: "Building Scalable AI Products: Technical Insights",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/r7pt810t7KQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Technical strategies for building AI products that can scale to meet user demand.",
    date: "2024-05-05",
    duration: "42 min",
    url: "https://www.youtube.com/watch?v=r7pt810t7KQ",
    platform: "YouTube",
    views: "15K",
    tags: ["AI Products", "Scalability", "Technical"]
  },
  {
    title: "Growth Marketing Strategies for Tech Startups",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VeOOu16DFFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Effective growth marketing approaches specifically designed for technology startups.",
    date: "2024-04-28",
    duration: "46 min",
    url: "https://www.youtube.com/watch?v=VeOOu16DFFE",
    platform: "YouTube",
    views: "20K",
    tags: ["Growth Marketing", "Startups", "Strategy"]
  },
  {
    title: "Navigating AI Ethics in Product Development",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9BSPf8DGKYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Discussion on ethical considerations when developing AI-powered products and services.",
    date: "2024-04-22",
    duration: "51 min",
    url: "https://www.youtube.com/watch?v=9BSPf8DGKYk",
    platform: "YouTube",
    views: "17K",
    tags: ["AI Ethics", "Product Development", "Responsible AI"]
  },
  {
    title: "Web3 Opportunities for Developers and Entrepreneurs",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HjoT9RvoKkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Exploring business and development opportunities in the Web3 ecosystem.",
    date: "2024-04-18",
    duration: "55 min",
    url: "https://www.youtube.com/watch?v=HjoT9RvoKkk",
    platform: "YouTube",
    views: "23K",
    tags: ["Web3", "Blockchain", "Opportunities"]
  },
  {
    title: "Machine Learning for Business Intelligence",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UcZiQx2RLOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "How to leverage machine learning to derive meaningful business insights and make data-driven decisions.",
    date: "2024-04-12",
    duration: "47 min",
    url: "https://www.youtube.com/watch?v=UcZiQx2RLOc",
    platform: "YouTube",
    views: "19K",
    tags: ["Machine Learning", "Business Intelligence", "Data"]
  },
  {
    title: "Creating AI-Driven Customer Experiences",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7ehVKI6F06Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Strategies for using AI to enhance and personalize customer experiences across touchpoints.",
    date: "2024-04-08",
    duration: "44 min",
    url: "https://www.youtube.com/watch?v=7ehVKI6F06Q",
    platform: "YouTube",
    views: "16K",
    tags: ["Customer Experience", "AI", "Personalization"]
  },
  {
    title: "Venture Capital Insights for AI Startups",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ViQ3Espcm3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Expert advice on securing venture capital funding for AI-focused startups.",
    date: "2024-04-03",
    duration: "58 min",
    url: "https://www.youtube.com/watch?v=ViQ3Espcm3U",
    platform: "YouTube",
    views: "21K",
    tags: ["Venture Capital", "AI Startups", "Funding"]
  },
  {
    title: "Productizing Machine Learning: From Research to Revenue",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MqybtxBuqQw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "How to transform machine learning research into profitable products and services.",
    date: "2024-03-28",
    duration: "49 min",
    url: "https://www.youtube.com/watch?v=MqybtxBuqQw",
    platform: "YouTube",
    views: "18K",
    tags: ["Machine Learning", "Product Development", "Monetization"]
  },
  {
    title: "Building Communities Around Technical Products",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Iurk_SmTZ5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Strategies for creating engaged communities around technically complex products.",
    date: "2024-03-23",
    duration: "45 min",
    url: "https://www.youtube.com/watch?v=Iurk_SmTZ5Y",
    platform: "YouTube",
    views: "14K",
    tags: ["Community Building", "Product Strategy", "Engagement"]
  },
  {
    title: "AI Product Market Fit: Finding Your Niche",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/2mKdn4qIU24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "How to identify the perfect market fit for your AI product or service.",
    date: "2024-03-18",
    duration: "52 min",
    url: "https://www.youtube.com/watch?v=2mKdn4qIU24",
    platform: "YouTube",
    views: "19K",
    tags: ["Product-Market Fit", "AI Products", "Strategy"]
  },
  {
    title: "Scaling Your AI Infrastructure: Technical Considerations",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/QAimjscjVsc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Technical insights on scaling AI infrastructure to support growing user demands.",
    date: "2024-03-12",
    duration: "50 min",
    url: "https://www.youtube.com/watch?v=QAimjscjVsc",
    platform: "YouTube",
    views: "16K",
    tags: ["AI Infrastructure", "Scaling", "Technical"]
  },
  {
    title: "The Intersection of AI and Digital Marketing",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0Obf1QetAkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Exploring how AI is transforming digital marketing strategies and campaigns.",
    date: "2024-03-07",
    duration: "46 min",
    url: "https://www.youtube.com/watch?v=0Obf1QetAkQ",
    platform: "YouTube",
    views: "22K",
    tags: ["AI", "Digital Marketing", "Marketing Technology"]
  },
  {
    title: "Building a Remote-First Tech Organization",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dZUG1cYlOqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Best practices for creating and managing distributed tech teams effectively.",
    date: "2024-03-02",
    duration: "54 min",
    url: "https://www.youtube.com/watch?v=dZUG1cYlOqk",
    platform: "YouTube",
    views: "17K",
    tags: ["Remote Work", "Team Management", "Organization"]
  },
  {
    title: "AI Tool Selection: Choosing the Right Solutions",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uObkCScfLlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Guide to selecting the most appropriate AI tools and platforms for different use cases.",
    date: "2024-02-25",
    duration: "47 min",
    url: "https://www.youtube.com/watch?v=uObkCScfLlo",
    platform: "YouTube",
    views: "19K",
    tags: ["AI Tools", "Technology Selection", "Use Cases"]
  },
  {
    title: "Monetization Strategies for AI-Powered Products",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rn-CGjAU3JY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Different approaches to monetizing AI products and services effectively.",
    date: "2024-02-20",
    duration: "48 min",
    url: "https://www.youtube.com/watch?v=rn-CGjAU3JY",
    platform: "YouTube",
    views: "21K",
    tags: ["Monetization", "AI Products", "Business Models"]
  },
  {
    title: "User Experience Design for AI Applications",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/y9vtZExgbmE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "Principles and practices for designing intuitive user experiences for AI-powered applications.",
    date: "2024-02-15",
    duration: "43 min",
    url: "https://www.youtube.com/watch?v=y9vtZExgbmE",
    platform: "YouTube",
    views: "18K",
    tags: ["UX Design", "AI Applications", "User Interface"]
  },
  {
    title: "Future of Work: AI and Workforce Transformation",
    embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5Svb1TjjuPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    description: "How AI is changing work patterns and creating new opportunities in the job market.",
    date: "2024-02-10",
    duration: "56 min",
    url: "https://www.youtube.com/watch?v=5Svb1TjjuPY",
    platform: "YouTube",
    views: "23K",
    tags: ["Future of Work", "AI", "Workforce Transformation"]
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
        
        {activeTab === 'press' ? (
          <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2">
            {pressArticles.map((feature, index) => (
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
                    
                    {feature.tags && (
                      <div className="flex flex-wrap gap-2 mt-4 mb-16">
                        {feature.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-2 py-1 text-xs rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
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
        ) : activeTab === 'videos' ? (
          <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2">
            {videos.map((video, index) => (
              <Card key={index}>
                <div className="relative w-full h-full">
                  <div className="w-full overflow-hidden flex justify-center aspect-video">
                    <div className="w-full relative" 
                         dangerouslySetInnerHTML={{ 
                           __html: video.embedCode.replace('width="560" height="315"', 'width="100%" height="100%" style="position:absolute;top:0;left:0"')
                         }} />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <Calendar className="w-3 h-3" />
                        <time dateTime={video.date}>
                          {new Date(video.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </time>
                        <span>•</span>
                        <span>{video.views} views</span>
                      </div>
                      <span className="text-xs text-zinc-500">{video.platform}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-zinc-100 mb-2">
                      {video.title}
                    </h3>
                    
                    <p className="text-sm text-zinc-400 mb-3">
                      {video.description}
                    </p>
                    
                    {video.tags && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {video.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-2 py-1 text-xs rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {video.links && (
                      <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-zinc-800">
                        {video.links.map((link, linkIndex) => (
                          <Link 
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2">
            {podcasts.map((podcast, index) => (
              <Card key={index}>
                <div className="relative w-full h-full">
                  <div className="w-full overflow-hidden flex justify-center aspect-video">
                    <div className="w-full relative" 
                         dangerouslySetInnerHTML={{ 
                           __html: podcast.embedCode.replace('width="560" height="315"', 'width="100%" height="100%" style="position:absolute;top:0;left:0"')
                         }} />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <Calendar className="w-3 h-3" />
                        <time dateTime={podcast.date}>
                          {new Date(podcast.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </time>
                        <span>•</span>
                        <span>{podcast.duration}</span>
                        {podcast.views && (
                          <>
                            <span>•</span>
                            <span>{podcast.views} views</span>
                          </>
                        )}
                      </div>
                      <span className="text-xs text-zinc-500">{podcast.platform}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-zinc-100 mb-2">
                      {podcast.title}
                    </h3>
                    
                    <p className="text-sm text-zinc-400 mb-3">
                      {podcast.description}
                    </p>
                    
                    {podcast.tags && (
                      <div className="flex flex-wrap gap-1">
                        {podcast.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="px-2 py-1 text-xs rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}