import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { SiteIntro } from "./components/site-intro";
import StructuredData from "./components/structured-data";

const introSessionCheck = `
  try {
    if (sessionStorage.getItem("harshitha:intro:v1")) {
      document.documentElement.dataset.introSeen = "true";
    }
  } catch (_) {}
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://harshitha.dev"),
  title: {
    default: "Harshitha Chittapragada - Automation Product Engineer",
    template: "%s | Harshitha Chittapragada",
  },
  description: "Harshitha Chittapragada builds reliable AI automation products across finance, hiring, and content operations, with a focus on integrations, approvals, recovery, and auditability.",
  keywords: [
    "Harshitha Chittapragada",
    "Harshitha",
    "Automation Product Engineer",
    "AI Automation",
    "AgentMag",
    "Finance Automation",
    "Hiring Automation",
    "Content Automation",
    "Workflow Engineering",
    "Microsoft Graph",
    "Azure",
    "Next.js",
    "TypeScript",
    "Python"
  ],
  authors: [{ name: "Harshitha Chittapragada" }],
  creator: "Harshitha Chittapragada",
  publisher: "Harshitha Chittapragada",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Harshitha Chittapragada - Automation Product Engineer",
    description:
      "Building reliable AI automation products across finance, hiring, and content operations.",
    url: "https://harshitha.dev",
    siteName: "Harshitha Chittapragada",
    images: [
      {
        url: "https://harshitha.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Harshitha Chittapragada - Automation Product Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshitha Chittapragada - Automation Product Engineer",
    description: "Building reliable AI automation products across finance, hiring, and content operations.",
    creator: "@harshithaa_ch",
    images: ["https://harshitha.dev/og.png"],
  },
  verification: {
    google: "uZV_tVoCjrWEVuxBw6WYcGP5ZiXokGdgqbSFkrvKl7Y",
  },
  alternates: {
    canonical: "https://harshitha.dev",
    languages: {
      'en-US': 'https://harshitha.dev',
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        url: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/favicon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[inter.variable, calSans.variable].join(" ")}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: introSessionCheck }} />
        <StructuredData />
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <SiteIntro />
        {children}
      </body>
    </html>
  );
}
