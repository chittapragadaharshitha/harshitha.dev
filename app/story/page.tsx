import { Navigation } from "../components/nav";
import Particles from "../components/particles";

export default function StoryPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-950/50 from-0% via-zinc-600/20 via-50% to-zinc-950/50 to-100% min-h-screen">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation showMobileControls={true} />
      
      <div className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 max-w-4xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-zinc-100 mb-12">
          My Story
        </h1>
        
        <div className="prose prose-zinc prose-invert max-w-none">
          <div className="text-zinc-400 space-y-4 text-xs sm:text-sm leading-relaxed">
            <p>
              I'm Harshitha Chittapragada, a builder at the intersection of AI, blockchain, and human progress. 
              My journey into technology began not in a classroom, but through an insatiable curiosity about 
              how systems work and how they can be made better.
            </p>
            
            <p>
              Growing up, I was fascinated by the potential of technology to solve real-world problems. 
              While my peers were playing games, I was building them. This early exposure to programming 
              taught me that with the right tools and determination, you could create anything.
            </p>
            
            <p>
              In 2023, I founded Harshitha Ventures, my personal holding company focused on building and 
              investing in transformative technologies. This wasn't just about starting a business - it was 
              about creating a vehicle for systematic innovation and impact.
            </p>
            
            <p>
              My first major venture, ARTIFIN.ai, was an AI-driven financial analysis platform that I 
              successfully exited to Oasis Ventures in 2024. This experience taught me invaluable lessons 
              about building products that people actually need, not just what we think they need.
            </p>
            
            <p>
              Currently, as Head of Growth at JustPaid AI (YC W23), I'm at the forefront of the AI 
              revolution, helping shape how businesses leverage artificial intelligence for financial 
              operations. We're not just building tools; we're reimagining entire workflows.
            </p>
            
            <p>
              But technology is just a means to an end. What drives me is the potential for human progress. 
              Whether it's through Web3 education at Metaschool, NFT communities with Netflix's Love, Death 
              & Robots, or strategic growth at BasedAF, every project is an opportunity to push boundaries 
              and create value.
            </p>
            
            <p>
              I believe in first-principles thinking, rapid iteration, and the power of community. The best 
              products aren't built in isolation - they're crafted through constant dialogue with users, 
              refined through failure, and scaled through systematic thinking.
            </p>
            
            <p>
              My approach is simple: identify inefficiencies, understand root causes, and build solutions 
              that are 10x better, not just incrementally improved. This isn't about disruption for 
              disruption's sake - it's about genuine progress.
            </p>
            
            <p>
              The convergence of AI, blockchain, and other emerging technologies presents unprecedented 
              opportunities. I'm focused on building products and companies that will define the next 
              decade of human-computer interaction.
            </p>
            
                         <p>
               If you're building something ambitious, thinking about hard problems, or just want to discuss 
               the future of technology, I'd love to connect. The best ideas often come from unexpected 
               conversations.
             </p>
             
           </div>
         </div>
         
         {/* Signature Section - Bottom Left */}
         <div className="mt-16 pt-8 text-left">
         </div>
        </div>
      </div>
  );
}