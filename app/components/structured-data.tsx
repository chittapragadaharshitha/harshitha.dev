export default function StructuredData() {
  const description =
    "Automation product engineer building reliable AI systems across finance, hiring, and content operations.";

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
        jobTitle: "Automation Product Engineer",
        knowsAbout: [
          "AI automation",
          "Workflow engineering",
          "Finance automation",
          "Recruitment automation",
          "Content automation",
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
        name: "Harshitha Chittapragada - Automation Product Engineer",
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
