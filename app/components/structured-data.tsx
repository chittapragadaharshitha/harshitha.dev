export default function StructuredData() {
  const description =
    "AI Product Engineer and Founder of Agent Mag building agent platforms and enterprise automation from roadmap through production operations.";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://harshitha.dev/#person",
        name: "Harshitha Chittapragada",
        alternateName: "Harshitha",
        description,
        url: "https://harshitha.dev",
        image: {
          "@type": "ImageObject",
          url: "https://harshitha.dev/harshitha.jpg",
        },
        sameAs: [
          "https://github.com/chittapragadaharshitha",
          "https://x.com/harshithaa_ch",
          "https://www.linkedin.com/in/chittapragadaharshitha/",
          "https://medium.com/@chittapragadaharshitha",
        ],
        jobTitle: "AI Product Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Agent Mag",
          url: "https://agentmag.dev",
        },
        knowsAbout: [
          "AI automation",
          "Workflow engineering",
          "Finance automation",
          "Recruitment automation",
          "Content automation",
          "AI agents",
          "OpenClaw",
          "Hermes",
          "Claude Code",
          "Codex",
          "Microsoft Graph",
          "Azure",
          "Next.js",
          "TypeScript",
          "Python",
        ],
        email: "chittapragadaharshitha@gmail.com",
      },
      {
        "@type": "WebSite",
        "@id": "https://harshitha.dev/#website",
        url: "https://harshitha.dev",
        name: "Harshitha Chittapragada",
        description,
        publisher: { "@id": "https://harshitha.dev/#person" },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://harshitha.dev/#webpage",
        url: "https://harshitha.dev",
        name: "Harshitha Chittapragada - AI Product Engineer and Founder of Agent Mag",
        description,
        isPartOf: { "@id": "https://harshitha.dev/#website" },
        mainEntity: { "@id": "https://harshitha.dev/#person" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://harshitha.dev/og.png",
          width: 1200,
          height: 630,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
