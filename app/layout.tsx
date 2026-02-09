import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import StructuredData from "./components/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://harshitha.dev"),
  title: {
    default: "Harshitha Chittapragada - AI & Data Science Engineer",
    template: "%s | Harshitha Chittapragada",
  },
  description: "Harshitha Chittapragada is an AI & Data Science engineering student, Google Student Ambassador, and Operations Lead at Harshith Ventures. Building AI agents, vibe coding, and exploring the future of technology.",
  keywords: [
    "Harshitha Chittapragada",
    "Harshitha",
    "AI Engineer",
    "Data Science",
    "Google Student Ambassador",
    "Harshith Ventures",
    "OpenClaw",
    "Cursor AI",
    "Vibe Coding",
    "Computer Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Software Engineering",
    "Python",
    "Java"
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
    title: "Harshitha Chittapragada - AI & Data Science Engineer",
    description:
      "AI & Data Science engineering student, Google Student Ambassador, and Operations Lead at Harshith Ventures. Building AI agents and exploring the future of technology.",
    url: "https://harshitha.dev",
    siteName: "Harshitha Chittapragada",
    images: [
      {
        url: "https://harshitha.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Harshitha Chittapragada - AI & Data Science Engineer",
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
    title: "Harshitha Chittapragada - AI & Data Science Engineer",
    description: "AI & Data Science engineering student, Google Student Ambassador, and Operations Lead at Harshith Ventures.",
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
        type: "image/png",
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
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <StructuredData />
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
