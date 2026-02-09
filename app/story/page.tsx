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
              I'm Harshitha Chittapragada, a final-year AI & Data Science student at Vignan's Institute 
              of Management and Technology for Women. I have a strong foundation in programming and a 
              passion for continuous learning — always looking for ways to combine technical expertise 
              with a creative approach to problem solving.
            </p>

            <p>
              My journey started with the fundamentals — C Programming, Java, SQL, HTML, and CSS — and 
              grew into a genuine love for building things. From a currency converter built with Java Swing 
              to a CNN-based pneumonia detection system, every step has reinforced one thing: I learn by doing.
            </p>

            <p>
              Most recently, I've been heading operations at <span className="text-zinc-200">Harshith Ventures</span>, 
              a venture building and investment company focused on AI and emerging technologies. There, I 
              built and deployed Clawd Bot — an AI-powered assistant using Claude Opus 4.6, integrated 
              across Slack, Telegram, and WhatsApp for omnichannel team productivity. I've also been vibe 
              coding internal tools and dashboards using Cursor AI, Vercel, and GitHub, getting hands-on 
              with the latest in AI-assisted development.
            </p>

            <p>
              One of my proudest experiences was being selected as a <span className="text-zinc-200">Google Student Ambassador</span>. 
              It's a role that lets me bridge the gap between cutting-edge technology and the student 
              community — sharing knowledge, organizing events, and helping others discover their own 
              paths in tech.
            </p>

            <p>
              I've had the opportunity to gain real industry experience through internships that pushed 
              me beyond the classroom. As an <span className="text-zinc-200">AI Development Engineer at DREP Software Solutions</span>, 
              I worked on building AI-driven solutions and learned how machine learning translates from 
              theory to production. As a <span className="text-zinc-200">Software Developer at Executive Softway Guild</span>, I 
              developed a sharper understanding of backend development and quality assurance — documenting 
              requirements, reviewing code, and executing test cases.
            </p>

            <p>
              I was also part of <span className="text-zinc-200">Infosys Springboard's Pragati: Path to Future — Cohort 3</span>, 
              an initiative empowering women in tech. Through this program, I built a strong foundation 
              in citizen data science, interacted with industry professionals, and gained both technical 
              knowledge and the confidence to pursue bigger goals. It wasn't just about learning tools — 
              it was about understanding how the industry works and growing as a professional.
            </p>

            <p>
              Beyond coding, I value clear communication and collaboration. Whether it's working in a 
              team, presenting ideas, or writing about tech on Medium, I believe the ability to convey 
              complex ideas simply is just as important as the technical skill itself.
            </p>

            <p>
              I'm proficient in C, Java, Python, SQL, and web technologies, and comfortable with tools 
              like GitHub, Vercel, Cursor AI, Antigravity, Power BI, and MySQL. I hold certifications 
              from Udemy, NPTEL, IBM, and Infosys. I actively refine my skills and stay updated with 
              emerging technologies — because in this field, standing still means falling behind.
            </p>

            <p>
              Right now, I'm open to opportunities in development and management roles where I can bring 
              a fresh perspective, learn from experienced teams, and contribute meaningfully. I speak 
              English, Hindi, and Telugu fluently, and I bring energy, curiosity, and a builder's mindset 
              to everything I take on.
            </p>

            <p>
              If you're working on something interesting or just want to connect, I'd love to hear from you.
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
