'use client';

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Particles from "./particles";
import { Navigation } from "./nav";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail, SiGooglescholar } from "react-icons/si";
import { BsCalendarCheck } from "react-icons/bs";
import { useFirstVisit } from "../hooks/useFirstVisit";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Story", href: "/story" },
  { name: "Work", href: "/work" },
  { name: "Media", href: "/media" },
  { name: "Essays", href: "/essays" },
  { name: "Holdings", href: "https://harshith.vc", external: true },
  { name: "Meet", href: "/meet" },
];

export default function HomeContent() {
  const { isFirstVisit, isLoaded } = useFirstVisit();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Always render the same structure to avoid hydration mismatch
  // Use opacity and visibility to control what shows

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-x-hidden bg-gradient-to-tl from-zinc-950/50 from-0% via-zinc-600/20 via-50% to-zinc-950/50 to-100%">
      {/* Mobile Hamburger Menu */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="duration-200 text-zinc-400 hover:text-zinc-100"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-14 right-4 z-50 bg-zinc-900/95 backdrop-blur rounded-lg border border-zinc-800">
          <div className="px-4 py-3 flex flex-col gap-2 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="duration-200 text-zinc-400 hover:text-zinc-100 py-1.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Main Content Container - Properly centered with uniform spacing */}
      <div className="flex flex-col items-center px-6 pt-16 pb-8 max-w-4xl mx-auto">
        
        {/* Anime Avatar */}
        <div className={`mt-4 mb-8 ${isLoaded && isFirstVisit ? 'animate-fade-in' : isLoaded ? '' : 'opacity-0'}`}>
          <Image
            src="/harshith-anime.png"
            alt="Harshith Vaddiparthy - AI Product Engineer and Entrepreneur"
            width={160}
            height={160}
            className="rounded-xl w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44"
            style={{ width: 'auto', height: 'auto' }}
            priority
            loading="eager"
          />
        </div>
        
        {/* Name */}
        <h1 className={`mb-8 z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display whitespace-nowrap bg-clip-text ${isLoaded && isFirstVisit ? 'animate-title' : isLoaded ? '' : 'opacity-0'}`}>
          Harshith
        </h1>
        
        {/* About Section */}
        <div className={`mb-8 text-center max-w-2xl mx-auto px-4 ${isLoaded && isFirstVisit ? 'animate-fade-in' : isLoaded ? '' : 'opacity-0'}`}>
          <h2 className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
            I'm <strong className="text-zinc-400">Harshith Vaddiparthy</strong>, an <strong className="text-zinc-400">AI Product Engineer</strong> and <strong className="text-zinc-400">entrepreneur</strong>, currently <strong className="text-zinc-400">Head of Growth</strong> at{" "}
            <Link
              target="_blank"
              href="https://justpaid.io"
              className="underline duration-500 hover:text-zinc-300 font-medium"
            >
              JustPaid
            </Link>
            , a <strong className="text-zinc-400">Y Combinator W23</strong> company. With expertise in <strong className="text-zinc-400">machine learning</strong>, <strong className="text-zinc-400">product management</strong>, and <strong className="text-zinc-400">growth engineering</strong>, I specialize in building and scaling AI-powered products that solve real-world problems for startups and enterprises.
          </h2>
        </div>
        
        {/* Social Media Icons */}
        <div className={`mt-4 flex items-center justify-center gap-2 flex-wrap ${isLoaded && isFirstVisit ? 'animate-fade-in' : isLoaded ? '' : 'opacity-0'}`}>
          <Link
            href="https://github.com/harshith-vaddiparthy"
            target="_blank"
            className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
          >
            <FaGithub className="h-4 w-4" />
          </Link>
          <Link
            href="https://twitter.com/harshithio"
            target="_blank"
            className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
          >
            <FaXTwitter className="h-4 w-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/harshith-vaddiparthy"
            target="_blank"
            className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
          >
            <FaLinkedinIn className="h-4 w-4" />
          </Link>
          <Link
            href="https://youtube.com/@harshithvaddiparthy"
            target="_blank"
            className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
          >
            <FaYoutube className="h-4 w-4" />
          </Link>
          <Link
            href="https://scholar.google.com/citations?user=W-bXoUMAAAAJ&hl=en"
            target="_blank"
            className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
          >
            <SiGooglescholar className="h-4 w-4" />
          </Link>
          <Link
            href="https://harshith-vaddiparthy.medium.com"
            target="_blank"
            className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
          >
            <Image 
              src="/icons8-medium.svg" 
              alt="Harshith Vaddiparthy on Medium - AI and Tech Articles" 
              width={16} 
              height={16} 
              className="h-4 w-4 invert opacity-60 hover:opacity-100"
            />
          </Link>
          <Link
            href="https://councils.forbes.com/profile/Harshith-Vaddiparthy-Head-Growth-JustPaid/5747f601-ca29-4255-a79b-3518154819a7"
            target="_blank"
            className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
          >
            <Image 
              src="/forbes-icon.svg" 
              alt="Harshith Vaddiparthy - Forbes Technology Council Member" 
              width={16} 
              height={16} 
              className="h-4 w-4 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
          <Link
            href="mailto:hi@harshith.io"
            className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
          >
            <SiGmail className="h-4 w-4" />
          </Link>
          <Link
            href="/meet"
            className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
          >
            <BsCalendarCheck className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Particles Background */}
      <Particles
        className={`absolute inset-0 -z-10 ${isLoaded && isFirstVisit ? 'animate-fade-in' : ''}`}
        quantity={100}
      />


      {/* Top Navigation */}
      <div className="absolute flex flex-col items-center space-y-2 md:space-y-6 top-0 w-full mt-4 md:mt-6">
        <div className={`${isLoaded && isFirstVisit ? 'animate-fade-in' : isLoaded ? '' : 'opacity-0'}`}>
          <Navigation />
        </div>
      </div>
    </div>
  );
}
