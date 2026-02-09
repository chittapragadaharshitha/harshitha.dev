import { Navigation } from "../../components/nav";
import Particles from "../../components/particles";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

const essays: Record<string, {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}> = {
  "i-built-an-ai-assistant-with-openclaw": {
    title: "I Built an AI Assistant That Runs My Team's Slack, Telegram, and WhatsApp",
    date: "2026-02-05",
    readTime: "8 min read",
    tags: ["AI", "OpenClaw", "Automation", "Slack"],
    content: `
When I first heard about AI assistants that could live inside your messaging apps, I was skeptical. Another chatbot? We've all seen those. But when I got my hands on OpenClaw and started building what we now call Clawd Bot at Harshith Ventures, everything changed.

## What is OpenClaw?

OpenClaw is an open-source framework that lets you deploy AI agents as always-on assistants across multiple messaging platforms. Unlike simple chatbots that respond to commands, OpenClaw agents are proactive. They can check your calendar, read your emails, search the web, execute code, and most importantly, they remember context across conversations.

The core idea is simple but powerful: give a large language model (like Claude or GPT) access to tools, memory, and messaging channels, and let it act as a genuine digital teammate rather than a glorified search bar.

## Why We Built Clawd Bot

At Harshith Ventures, our team communicates across Slack, Telegram, and WhatsApp. Messages get lost. Action items fall through the cracks. Someone asks a question in Telegram, and the answer is buried in a Slack thread from two weeks ago.

We needed something that could bridge all three platforms, maintain context, and actually do things, not just answer questions.

## The Setup

Setting up OpenClaw was surprisingly straightforward. The framework runs as a Node.js service on any Linux machine. Here's what the architecture looks like:

1. **Gateway Server** runs on our infrastructure (a simple Azure VM)
2. **Channel Plugins** connect to Slack, Telegram, and WhatsApp simultaneously
3. **Claude Opus 4.6** serves as the underlying language model with 1M token context
4. **Skill System** lets you add capabilities like GitHub integration, Google Workspace, web search, and custom tools
5. **Memory System** gives the bot persistent memory across sessions using markdown files

The beauty is that a single bot instance handles all three channels. When someone asks a question on WhatsApp, Clawd Bot has the same context and memory as when it's operating in Slack.

## What Clawd Bot Actually Does

Here's a typical day for our AI assistant:

**Morning:** Checks unread emails and flags anything urgent in our #notifications Slack channel. Summarizes the calendar for the day.

**During work:** Answers questions from team members across all three platforms. If someone in Telegram asks about a project deadline, it can pull that information from our Slack channels or previous conversations.

**Proactive checks:** Every few hours, it does a sweep of emails, calendar events, and notifications. If something needs attention, it reaches out.

**Operations:** It can create GitHub issues, search the web for research, draft messages, and even generate reports.

## Lessons Learned

**1. Memory is everything.** The difference between a useful AI assistant and an annoying chatbot is memory. OpenClaw's memory system (markdown files that persist across sessions) means Clawd Bot actually learns our preferences and context over time.

**2. Multi-channel is a game changer.** Having one assistant that works across Slack, Telegram, and WhatsApp eliminates the "which app was that in?" problem entirely.

**3. Proactivity beats reactivity.** The heartbeat system in OpenClaw lets the bot periodically check things and reach out when something needs attention. This is far more valuable than waiting to be asked.

**4. Start simple, add complexity.** We started with just Slack integration and basic Q&A. Over time, we added Telegram, WhatsApp, email checking, calendar integration, and custom skills. Trying to do everything at once would have been overwhelming.

## The Impact

After two months with Clawd Bot, our team communication is genuinely better. Response times are faster because someone (or something) is always available. Nothing falls through the cracks because the bot maintains context across all channels. And the operational tasks that used to eat up hours each week are now handled automatically.

Is it perfect? No. Sometimes it misunderstands context. Occasionally it's too eager to help when silence would be better. But it learns, and it gets better every week.

## Getting Started

If you're interested in building something similar, OpenClaw is open source and available on GitHub. The documentation is solid, and the community on Discord is active and helpful. You don't need a massive infrastructure setup; a basic VM with Node.js is enough to get started.

The future of team productivity isn't another project management tool. It's an AI teammate that actually understands your workflow and helps without being asked.
    `
  },
  "vibe-coding-building-faster-with-ai": {
    title: "Vibe Coding: How I Build Full-Stack Apps 10x Faster with Cursor AI",
    date: "2026-01-28",
    readTime: "7 min read",
    tags: ["AI", "Cursor", "Development", "Vibe Coding"],
    content: `
There's a new way to build software, and it doesn't involve spending hours reading documentation or Stack Overflow. It's called vibe coding, and it's fundamentally changing how developers, especially those of us still in college, approach building applications.

## What is Vibe Coding?

Vibe coding is the practice of using AI-powered development tools to write, debug, and ship code at speeds that were impossible just two years ago. Instead of writing every line yourself, you describe what you want, iterate with the AI, and guide the output to production.

The term captures something important: you're coding by vibes. You have a vision, you describe it, and the AI helps you realize it. The skill isn't in memorizing syntax; it's in knowing what to build and how to communicate that to your AI pair programmer.

## My Tool of Choice: Cursor AI

I've tried GitHub Copilot, Amazon CodeWhisperer, and a dozen other tools. Cursor AI is in a different league. Here's why:

**Context Awareness:** Cursor doesn't just autocomplete lines. It understands your entire codebase. Reference a function in another file, and it knows what that function does. Ask it to refactor a component, and it considers how that change affects everything else.

**Chat + Code in One:** The inline chat feature lets you highlight code, ask questions, and get modifications without leaving your editor. "Make this responsive" or "add error handling here" just works.

**Multi-file Edits:** This is the killer feature. You can describe a change that spans multiple files, and Cursor will make all the edits, create new files, and update imports across your project.

## A Real Example

Last week, I needed to build an internal dashboard for our team. Here's how it went:

**Hour 1:** Described the layout to Cursor. "Create a Next.js dashboard with a sidebar, dark theme, and cards showing team metrics." Got a working skeleton in minutes.

**Hour 2:** Iterated on the design. "Make the cards glow on hover like the Vercel dashboard." "Add a chart using recharts." "Make the sidebar collapsible on mobile."

**Hour 3:** Connected it to our data. "Add an API route that fetches from this JSON endpoint." "Display loading states and error handling."

**Hour 4:** Deployed to Vercel. Done.

A dashboard that would have taken me two to three days of traditional development was shipped in an afternoon.

## The Skills That Actually Matter Now

Vibe coding doesn't mean you don't need to understand programming. If anything, you need to understand it more deeply but differently:

**Architecture over syntax:** Knowing that a Next.js app needs API routes, server components, and proper state management matters more than memorizing the useState hook syntax.

**Debugging intuition:** When the AI generates buggy code (and it will), you need to understand why it's wrong, not just that it's wrong.

**System design:** AI can write a function. It can't design a system. Understanding databases, caching, authentication flows, and deployment pipelines is still entirely on you.

**Communication:** The better you describe what you want, the better the output. This is a genuine skill that improves with practice.

## Tools in My Stack

Here's what I use for vibe coding projects:

- **Cursor AI** for writing and editing code
- **Vercel** for instant deployment and preview URLs
- **GitHub** for version control and collaboration
- **Antigravity** for design inspiration and component ideas
- **Next.js + Tailwind** as the default stack (AI tools are incredibly good at this combination)

## The Controversy

Some developers hate vibe coding. "You're not really learning!" they say. "You're just prompting!"

I disagree. Vibe coding is not about avoiding learning. It's about optimizing where you spend your learning energy. I understand data structures, algorithms, and computer science fundamentals from my coursework. Vibe coding lets me apply that knowledge to build real things faster.

The developers who will thrive in the next decade are not the ones who can write the most code from memory. They're the ones who can best leverage AI tools to ship products that solve real problems.

## Getting Started

If you want to try vibe coding:

1. Download Cursor AI (free tier is generous)
2. Start with a small project you actually care about
3. Describe what you want in plain English before touching any code
4. Iterate rapidly and don't be afraid to ask the AI to redo things
5. Deploy something real within the first session

The barrier to building software has never been lower. The question is no longer "can I code this?" but "what should I build?"
    `
  },
  "ai-agents-in-2026-beyond-chatbots": {
    title: "AI Agents in 2026: We've Moved Way Beyond Chatbots",
    date: "2026-01-20",
    readTime: "10 min read",
    tags: ["AI", "Agents", "Technology", "Future"],
    content: `
Remember when ChatGPT launched in late 2022? The world lost its mind over a chatbot that could write essays and answer questions. That was three years ago, and the landscape has changed so dramatically that calling today's AI systems "chatbots" is like calling a Tesla a horse cart.

## The Evolution: From Chat to Agency

The progression has been remarkably fast:

**2022-2023: The Chat Era.** Ask a question, get an answer. Copy-paste the response. Manually do whatever the AI suggested. The human was still the executor.

**2024: The Tool-Use Era.** AI models gained the ability to call functions and use tools. Claude could search the web, write and execute code, and interact with APIs. But each interaction was still a single session with no memory.

**2025: The Agent Era.** AI systems became persistent, proactive, and multi-modal. They could maintain context across days, take actions across multiple platforms, and operate autonomously on complex tasks.

**2026: The Integration Era.** This is where we are now. AI agents are deeply embedded in workflows, not as separate tools, but as team members that operate alongside humans across every communication channel and productivity platform.

## What Modern AI Agents Actually Look Like

Forget the sci-fi robot image. Today's AI agents are invisible infrastructure. Here's what they do:

**Always-on presence.** They run 24/7 on cloud infrastructure, connected to your messaging apps, email, calendars, and development tools. No app to open, no prompt to type. They're just there.

**Proactive operation.** Instead of waiting for you to ask, modern agents monitor inboxes, check calendars, track project deadlines, and surface relevant information before you even think to look for it.

**Multi-platform fluency.** A single agent can operate across Slack, Discord, Telegram, WhatsApp, email, and more. It maintains unified context regardless of which platform a conversation happens on.

**Persistent memory.** This is the breakthrough that made everything else possible. Agents remember previous conversations, learn your preferences, understand your projects, and build an ever-growing understanding of your context.

**Skill-based architecture.** Modern agent frameworks use modular skill systems. Need your agent to control smart home devices? Add a skill. Need it to manage GitHub repositories? There's a skill for that. This composability means agents can be customized for any workflow.

## Real-World Impact

I've seen AI agents transform operations in ways that surprised even the early adopters:

**Software Development:** Agents that monitor CI/CD pipelines, automatically create issues when builds fail, review pull requests, and even fix simple bugs autonomously. A developer's AI assistant can now handle 30% of routine development tasks without intervention.

**Business Operations:** Agents that reconcile invoices, draft contracts, schedule meetings across time zones, and maintain project documentation. One small team I know replaced a part-time administrative role entirely.

**Content Creation:** Not just writing drafts, but managing entire content calendars, optimizing posts for different platforms, scheduling publications, and analyzing performance, all autonomously.

**Customer Support:** Agents that handle tier-1 support across multiple channels, escalating to humans only when necessary, while maintaining consistent quality and instant response times.

## The Technology Stack

For those interested in the technical side, here's what powers modern AI agents:

**Large Language Models** (Claude Opus, GPT-4.5, Gemini Ultra) provide the reasoning engine. These models now support context windows of over 1 million tokens, meaning they can process entire codebases or conversation histories in a single pass.

**Tool-Use Frameworks** (OpenClaw, LangChain, CrewAI) provide the scaffolding that connects LLMs to real-world tools and APIs. OpenClaw, for example, provides a complete framework for deploying agents as always-on assistants with messaging integration.

**Vector Databases and Memory Systems** provide long-term memory and semantic search capabilities. Some frameworks use simple file-based systems (surprisingly effective), while others use dedicated vector stores.

**Messaging Platform APIs** (Slack, Discord, Telegram) provide the channels through which agents interact with humans in natural, familiar interfaces.

## The Challenges Nobody Talks About

It's not all magic and rainbows:

**Trust calibration.** How much autonomy do you give an AI agent? Send emails on your behalf? Make purchases? The line between helpful and dangerous is context-dependent and constantly shifting.

**Error amplification.** When a human makes a mistake, it affects one task. When an AI agent makes a mistake, it can cascade across every system it's connected to. Guardrails and human oversight remain critical.

**Privacy and security.** These agents have access to everything: your messages, emails, files, and accounts. A compromised agent is a compromised life. Security must be treated as a first-class concern, not an afterthought.

**Social dynamics.** Adding an AI agent to a team chat changes the social dynamics. Some people love it. Others find it intrusive. Managing this transition requires thought and sensitivity.

## What Comes Next

The trajectory is clear: AI agents will become as ubiquitous as smartphones. Within two years, most knowledge workers will have some form of AI agent integrated into their daily workflow. Within five years, not having one will feel like not having email.

The interesting question isn't whether this will happen; it's how we'll design the human-agent collaboration to bring out the best in both. That's the challenge worth thinking about.
    `
  },
  "convolutional-neural-networks-explained": {
    title: "CNNs Explained: How I Built a Pneumonia Detection Model as a College Project",
    date: "2026-01-10",
    readTime: "9 min read",
    tags: ["AI", "Deep Learning", "CNN", "Healthcare"],
    content: `
For my college project, I built a Convolutional Neural Network that detects pneumonia from chest X-ray images. It sounds complex (and the math behind it is), but the core idea is surprisingly intuitive. Here's what I learned building it from scratch.

## The Problem

Pneumonia kills over 2.5 million people annually. Early diagnosis significantly improves outcomes, but reading X-rays requires trained radiologists, and there aren't enough of them, especially in developing countries. An AI model that can flag potential pneumonia cases could help doctors prioritize urgent cases and catch what the human eye might miss.

## What Are Convolutional Neural Networks?

Think of how you recognize a face. You don't look at individual pixels. You recognize features: edges, shapes, textures, and patterns. Your brain processes these features hierarchically, from simple edges to complex structures like eyes and noses, to the full face.

CNNs work the same way:

**Convolutional Layers** act as feature detectors. Early layers detect simple patterns like edges and gradients. Deeper layers combine these into complex features like lung boundaries, tissue density variations, and fluid patterns.

**Pooling Layers** reduce the spatial dimensions while keeping the important features. Think of it as zooming out: you lose some detail but gain a broader view.

**Fully Connected Layers** at the end take all the extracted features and make a classification decision: pneumonia or healthy.

## Building the Model

Here's the practical journey:

### Dataset

I used the Chest X-Ray Images dataset from Kaggle, containing over 5,800 X-ray images split into "NORMAL" and "PNEUMONIA" categories. The dataset was already split into training, validation, and test sets.

### Preprocessing

Raw X-ray images come in different sizes and orientations. I standardized everything:
- Resized all images to 224x224 pixels
- Normalized pixel values to 0-1 range
- Applied data augmentation (rotation, flipping, brightness adjustment) to prevent overfitting

### Architecture

After experimenting with several architectures, I settled on a model inspired by VGG16 but simplified:
- 4 convolutional blocks, each with two Conv2D layers + BatchNorm + MaxPooling
- Dropout layers (0.25 after conv blocks, 0.5 before the final layer) to prevent overfitting
- Final dense layer with sigmoid activation for binary classification

### Training

Training was done using TensorFlow and PyTorch (I experimented with both). Key decisions:
- **Optimizer:** Adam with learning rate 0.0001
- **Loss function:** Binary cross-entropy
- **Batch size:** 32
- **Epochs:** 30 with early stopping

The model converged around epoch 20, reaching 92% accuracy on the validation set.

## Results and What They Mean

On the test set:
- **Accuracy:** 91.3%
- **Sensitivity (Recall):** 95.2% for pneumonia cases
- **Specificity:** 86.1% for normal cases

The high sensitivity is crucial. In medical applications, it's better to have false positives (flagging a healthy X-ray as potentially pneumonia) than false negatives (missing actual pneumonia). A false positive means an additional review by a doctor. A false negative could mean a missed diagnosis.

## What I Learned

**1. Data quality matters more than model complexity.** My fancy deep architecture performed worse than a simpler model trained on well-preprocessed data. Garbage in, garbage out applies to deep learning just as much as traditional programming.

**2. Transfer learning is incredibly powerful.** I also tried fine-tuning a pre-trained ResNet50, and it outperformed my custom model with much less training time. Standing on the shoulders of giants isn't cheating; it's smart engineering.

**3. Medical AI has unique constraints.** You can't just optimize for accuracy. You need to consider sensitivity vs. specificity tradeoffs, explainability (doctors need to understand why the model flagged something), and real-world deployment conditions (different X-ray machines produce different image qualities).

**4. The gap between "model works on my laptop" and "model is deployed in a hospital" is enormous.** Regulatory requirements, integration with existing medical systems, edge cases, and reliability requirements make deployment a much harder problem than model building.

## The Bigger Picture

This project gave me a deep appreciation for how AI is transforming healthcare. We're not replacing doctors; we're building tools that help them work faster and more accurately. A CNN that can scan 1,000 X-rays in the time it takes a radiologist to review 10 isn't competition. It's a force multiplier.

The tools are accessible. TensorFlow, PyTorch, and OpenCV are free. Datasets are publicly available. Cloud GPUs are affordable. If you're a student interested in AI for healthcare, there's never been a better time to start building.

## Tools Used

For anyone who wants to replicate or build on this work:
- **Python** as the primary language
- **TensorFlow** and **PyTorch** for model building and training
- **OpenCV** and **Pillow** for image preprocessing
- **NumPy** and **Pandas** for data manipulation
- **Matplotlib** for visualization and results analysis

The full code is available on my GitHub. Feel free to fork, improve, and build upon it.
    `
  },
  "what-google-taught-me-about-tech-communities": {
    title: "What Being a Google Student Ambassador Taught Me About Building Tech Communities",
    date: "2025-12-15",
    readTime: "6 min read",
    tags: ["Google", "Community", "Career", "Tech"],
    content: `
When I got the email saying I'd been selected as a Google Student Ambassador, my first thought was "this is going to look great on my resume." Six months later, that's the least important thing about the experience. Here's what actually matters.

## The Selection Process

Google Student Ambassadors are selected based on a combination of technical knowledge, community involvement, and communication skills. The application involved demonstrating how you'd use Google technologies to make an impact on your campus.

What I didn't realize at the time was that the selection wasn't really about what you already know. It was about your potential to learn and your willingness to teach others.

## What You Actually Do

The role is part evangelist, part teacher, part community builder:

**Workshops and tech talks.** I've organized sessions on Google Cloud, Android development, TensorFlow, and general career guidance. The key isn't being the smartest person in the room. It's making complex technology feel approachable.

**Mentorship.** This ended up being the most rewarding part. Helping second-year students navigate their first hackathon. Reviewing resumes. Talking through career decisions. These one-on-one conversations create more impact than any workshop.

**Bridge building.** Connecting students with Google resources, events, and opportunities they didn't know existed. The information asymmetry in tech education is staggering. Many talented students simply don't know what's available to them.

## What I Learned About Communities

**1. The best communities are built around shared learning, not shared knowledge.**

I initially tried to position myself as the "expert" who teaches beginners. That's the wrong model. The best tech community events are those where everyone, including the organizer, is learning something new. I started framing workshops as "let's figure this out together" instead of "let me teach you," and engagement tripled.

**2. Consistency beats spectacle.**

A weekly study group of 8 people creates more lasting impact than a one-time event with 200 attendees. The students who grew the most were the ones who showed up every week, not the ones who attended the flashy events.

**3. Representation matters more than you think.**

As a woman in tech in India, being visible matters. Every time I stand in front of a room full of engineering students and talk about AI or cloud computing, I'm not just teaching technology. I'm showing other women that this space has room for them. I didn't fully understand this until a first-year student told me, "I didn't think I could do this until I saw someone like me doing it."

**4. Teaching is the best way to learn.**

Preparing a workshop on TensorFlow forced me to understand it at a level I never would have reached just by using it. Every question from a student exposed a gap in my own understanding. Teaching made me a significantly better engineer.

## The Google Ecosystem

Being an ambassador gives you unique access to Google's ecosystem:

- **Google Cloud credits** for student projects
- **Early access** to certain Google technologies and events
- **Network** of other ambassadors across the country, many of whom become close friends and collaborators
- **Google employees** who serve as mentors and are genuinely invested in your growth

But the ecosystem isn't the point. The point is what you do with access. The ambassadors who make the most impact aren't the ones who collect the most badges or attend the most events. They're the ones who take what they learn and bring it back to their campus.

## Advice for Future Ambassadors

If you're considering applying:

**Don't wait until you feel "ready."** You won't. Apply with what you have and grow into the role. That's literally the point.

**Focus on impact, not impressions.** Google cares about what you actually changed on your campus, not how many LinkedIn posts you wrote about being an ambassador.

**Build something real.** The best ambassadors don't just organize events. They build projects, create study groups, start clubs, and leave infrastructure that outlasts their tenure.

**Connect with other ambassadors.** The peer network is incredibly valuable. Other ambassadors face the same challenges, have solved problems you're struggling with, and can collaborate on events and initiatives.

## The Bigger Takeaway

The tech industry talks a lot about "community" but often reduces it to Discord servers and Twitter followers. Real community building is showing up consistently, helping people who can't help you back, and creating spaces where learning is safe and encouraged.

That's what Google taught me. Not through any official training, but through the experience of trying to build something meaningful on my own campus.

Whether or not you become a Google ambassador, the principles apply. Find a technology you care about. Teach it to others. Show up consistently. The community will build itself.
    `
  }
};

export function generateStaticParams() {
  return Object.keys(essays).map((slug) => ({ slug }));
}

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const essay = essays[slug];
  
  if (!essay) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-tl from-zinc-950/50 from-0% via-zinc-600/20 via-50% to-zinc-950/50 to-100% min-h-screen">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation showMobileControls={true} />
      
      <div className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 max-w-3xl">
        {/* Back link */}
        <Link 
          href="/essays" 
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Essays
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4 leading-tight">
            {essay.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              {new Date(essay.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {essay.readTime}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {essay.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50">
                {tag}
              </span>
            ))}
          </div>
        </header>
        
        {/* Content */}
        <article className="prose prose-zinc prose-invert max-w-none 
          prose-headings:font-semibold prose-headings:tracking-tight
          prose-h2:text-xl prose-h2:text-zinc-200 prose-h2:mt-10 prose-h2:mb-4
          prose-h3:text-lg prose-h3:text-zinc-300 prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-zinc-400 prose-p:text-sm prose-p:leading-relaxed prose-p:mb-4
          prose-li:text-zinc-400 prose-li:text-sm
          prose-strong:text-zinc-200
          prose-code:text-zinc-300 prose-code:bg-zinc-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
          prose-ul:my-4 prose-ol:my-4
        ">
          {essay.content.split('\n').map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return null;
            
            if (trimmed.startsWith('## ')) {
              return <h2 key={i}>{trimmed.replace('## ', '')}</h2>;
            }
            if (trimmed.startsWith('### ')) {
              return <h3 key={i}>{trimmed.replace('### ', '')}</h3>;
            }
            if (trimmed.startsWith('- **') || trimmed.startsWith('**')) {
              const parts = trimmed.replace(/^\- /, '').split('**');
              return (
                <p key={i} className="text-zinc-400 text-sm leading-relaxed mb-2">
                  {parts.map((part, j) => 
                    j % 2 === 1 ? <strong key={j} className="text-zinc-200">{part}</strong> : part
                  )}
                </p>
              );
            }
            if (trimmed.match(/^\d+\. /)) {
              return (
                <p key={i} className="text-zinc-400 text-sm leading-relaxed mb-2 pl-4">
                  {trimmed}
                </p>
              );
            }
            
            // Regular paragraph with bold support
            if (trimmed.includes('**')) {
              const parts = trimmed.split('**');
              return (
                <p key={i}>
                  {parts.map((part, j) => 
                    j % 2 === 1 ? <strong key={j} className="text-zinc-200">{part}</strong> : part
                  )}
                </p>
              );
            }
            
            return <p key={i}>{trimmed}</p>;
          })}
        </article>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <Link 
            href="/essays" 
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all essays
          </Link>
        </div>
      </div>
    </div>
  );
}
