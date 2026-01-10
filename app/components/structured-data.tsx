export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://harshith.com/#person",
        "name": "Harshitha Vaddiparthy",
        "alternateName": "Harshitha",
        "description": "AI Product Engineer and entrepreneur, Head of Growth at JustPaid (YC W23). Expert in building and scaling AI-powered products, machine learning, and growth strategies.",
        "url": "https://harshith.com",
        "image": {
          "@type": "ImageObject",
          "url": "https://harshith.com/harshith-anime.png",
          "width": 160,
          "height": 160
        },
        "sameAs": [
          "https://github.com/chittapragadaharshitha",
          "https://x.com/Harshitha_AM",
          "https://www.linkedin.com/in/chittapragadaharshitha/",
          "https://youtube.com/@harshithvaddiparthy",
          "https://scholar.google.com/citations?user=W-bXoUMAAAAJ&hl=en",
          "https://harshith-vaddiparthy.medium.com",
          "https://councils.forbes.com/profile/Harshith-Vaddiparthy-Head-Growth-JustPaid/5747f601-ca29-4255-a79b-3518154819a7",
          "https://harshithvaddiparthy.com",
          "https://harshith.io"
        ],
        "jobTitle": "Head of Growth",
        "worksFor": {
          "@type": "Organization",
          "name": "JustPaid",
          "url": "https://justpaid.io",
          "description": "Y Combinator W23 company"
        },
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning",
          "Product Engineering",
          "Growth Engineering",
          "Startup Growth",
          "Product Management",
          "Software Engineering",
          "Entrepreneurship"
        ],
        "email": "chittapragadaharshitha@gmail.com"
      },
      {
        "@type": "WebSite",
        "@id": "https://harshith.com/#website",
        "url": "https://harshith.com",
        "name": "Harshitha Vaddiparthy",
        "description": "Personal website of Harshitha Vaddiparthy, AI Product Engineer and entrepreneur",
        "publisher": {
          "@id": "https://harshith.com/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://harshith.com/#webpage",
        "url": "https://harshith.com",
        "name": "Harshitha Vaddiparthy - AI Product Engineer & Entrepreneur",
        "description": "AI Product Engineer and entrepreneur, Head of Growth at JustPaid (YC W23). Expert in building and scaling AI-powered products, machine learning, and growth strategies.",
        "isPartOf": {
          "@id": "https://harshith.com/#website"
        },
        "about": {
          "@id": "https://harshith.com/#person"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://harshith.com/og.png",
          "width": 1920,
          "height": 1080
        },
        "datePublished": "2024-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://harshith.com/#organization",
        "name": "Harshitha Vaddiparthy",
        "url": "https://harshith.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://harshith.com/favicon.png",
          "width": 32,
          "height": 32
        },
        "founder": {
          "@id": "https://harshith.com/#person"
        },
        "sameAs": [
          "https://github.com/chittapragadaharshitha",
          "https://x.com/Harshitha_AM",
          "https://www.linkedin.com/in/chittapragadaharshitha/"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
