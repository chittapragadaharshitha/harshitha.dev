import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import StructuredData from "./components/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://harshith.com"),
  title: {
    default: "Harshith Vaddiparthy - AI Product Engineer & Entrepreneur",
    template: "%s | Harshith Vaddiparthy",
  },
  description: "Harshith Vaddiparthy is an AI Product Engineer and entrepreneur, Head of Growth at JustPaid (YC W23). Expert in building and scaling AI-powered products, machine learning, and growth strategies.",
  keywords: [
    "Harshith Vaddiparthy",
    "Harshith",
    "AI Product Engineer",
    "Machine Learning Engineer",
    "Entrepreneur",
    "JustPaid",
    "Y Combinator",
    "AI Products",
    "Growth Engineering",
    "Startup Founder",
    "Tech Leadership",
    "Product Management",
    "Artificial Intelligence",
    "Software Engineering"
  ],
  authors: [{ name: "Harshith Vaddiparthy" }],
  creator: "Harshith Vaddiparthy",
  publisher: "Harshith Vaddiparthy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Harshith Vaddiparthy - AI Product Engineer & Entrepreneur",
    description:
      "AI Product Engineer and entrepreneur, Head of Growth at JustPaid (YC W23). Expert in building and scaling AI-powered products, machine learning, and growth strategies.",
    url: "https://harshith.com",
    siteName: "Harshith Vaddiparthy",
    images: [
      {
        url: "https://harshith.com/og.png",
        width: 478,
        height: 466,
        alt: "Harshith Vaddiparthy - AI Product Engineer & Entrepreneur",
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
    title: "Harshith Vaddiparthy - AI Product Engineer & Entrepreneur",
    description: "AI Product Engineer and entrepreneur, Head of Growth at JustPaid (YC W23). Expert in building and scaling AI-powered products.",
    creator: "@harshithio",
    images: ["https://harshith.com/og.png"],
  },
  verification: {
    google: "uZV_tVoCjrWEVuxBw6WYcGP5ZiXokGdgqbSFkrvKl7Y",
  },
  alternates: {
    canonical: "https://harshith.com",
    languages: {
      'en-US': 'https://harshith.com',
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
