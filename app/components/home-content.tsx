'use client';

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Particles from "./particles";
import { Navigation } from "./nav";
import { MobileNav } from "./mobile-nav";
import { FaGithub, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail, SiGooglescholar } from "react-icons/si";
import { BsCalendarCheck } from "react-icons/bs";
import { useFirstVisit } from "../hooks/useFirstVisit";
import WhatsAppModal from "./whatsapp-modal";

// Navigation items are now handled in the MobileNav component

export default function HomeContent() {
  const { isFirstVisit, isLoaded } = useFirstVisit();
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  // Always render the same structure to avoid hydration mismatch
  // Use opacity and visibility to control what shows

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen min-h-[100dvh] overflow-x-hidden bg-gradient-to-tl from-zinc-950/50 from-0% via-zinc-600/20 via-50% to-zinc-950/50 to-100%">
      {/* New Mobile Navigation */}
      <MobileNav showLogo={false} />
      
      {/* Main Content Container - Properly centered with uniform spacing */}
      <div className="flex flex-col items-center px-6 pt-16 pb-8 max-w-4xl mx-auto">
        
        {/* Profile Picture */}
        <div className={`mt-4 mb-8 ${isLoaded && isFirstVisit ? 'animate-fade-in' : isLoaded ? '' : 'opacity-0'}`}>
          <Image
            src="/harshitha.jpg"
            alt="Harshitha Chittapragada - Developer"
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
          Harshitha
        </h1>
        
        {/* About Section */}
        <div className={`mb-8 text-center max-w-2xl mx-auto px-4 ${isLoaded && isFirstVisit ? 'animate-fade-in' : isLoaded ? '' : 'opacity-0'}`}>
          <h2 className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-4">
            I'm Harshitha Chittapragada, a developer in my final year of BTech. I build responsive web applications and create content about web development and AI tools. Previously interned as an AI Development Engineer at DREP.in and Business Analyst at Executive Softway Guild.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Open to opportunities in development and management roles.
          </p>
        </div>
        
        {/* Social Media Icons */}
        <div className={`mt-4 ${isLoaded && isFirstVisit ? 'animate-fade-in' : isLoaded ? '' : 'opacity-0'}`}>
          {/* Desktop: Single row */}
          <div className="hidden md:flex items-center justify-center gap-2 flex-wrap">
            <Link
              href="https://github.com/chittapragadaharshitha"
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
            {/* <button
              onClick={() => setIsWhatsAppModalOpen(true)}
              className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
            >
              <FaWhatsapp className="h-4 w-4" />
            </button> */}
            {/* <Link
              href="https://youtube.com/@harshithvaddiparthy"
              target="_blank"
              className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
            >
              <FaYoutube className="h-4 w-4" />
            </Link> */}
            {/* <Link
              href="https://scholar.google.com/citations?user=W-bXoUMAAAAJ&hl=en"
              target="_blank"
              className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
            >
              <SiGooglescholar className="h-4 w-4" />
            </Link> */}
            <Link
              href="https://harshith-vaddiparthy.medium.com"
              target="_blank"
              className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
            >
              <Image 
                src="/icons8-medium.svg" 
                alt="Harshitha Vaddiparthy on Medium - AI and Tech Articles" 
                width={16} 
                height={16} 
                className="h-4 w-4 invert opacity-60 hover:opacity-100"
              />
            </Link>
            {/* <Link
              href="https://councils.forbes.com/profile/Harshith-Vaddiparthy-Head-Growth-JustPaid/5747f601-ca29-4255-a79b-3518154819a7"
              target="_blank"
              className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
            >
              <Image
                src="/forbes-icon.svg"
                alt="Harshitha Vaddiparthy - Forbes Technology Council Member"
                width={16}
                height={16}
                className="h-4 w-4 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </Link> */}
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

          {/* Mobile: Two rows of 5 icons each */}
          <div className="flex flex-col items-center justify-center gap-3 md:hidden">
            {/* First Row - 5 Icons */}
            <div className="flex items-center justify-center gap-2">
              <Link
                href="https://github.com/chittapragadaharshitha"
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
              {/* <button
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
              >
                <FaWhatsapp className="h-4 w-4" />
              </button> */}
              {/* <Link
                href="https://youtube.com/@harshithvaddiparthy"
                target="_blank"
                className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
              >
                <FaYoutube className="h-4 w-4" />
              </Link> */}
            </div>
            
            {/* Second Row - 5 Icons */}
            <div className="flex items-center justify-center gap-2">
              {/* <Link
                href="https://scholar.google.com/citations?user=W-bXoUMAAAAJ&hl=en"
                target="_blank"
                className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
              >
                <SiGooglescholar className="h-4 w-4" />
              </Link> */}
              <Link
                href="https://harshith-vaddiparthy.medium.com"
                target="_blank"
                className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
              >
                <Image 
                  src="/icons8-medium.svg" 
                  alt="Harshitha Vaddiparthy on Medium - AI and Tech Articles" 
                  width={16} 
                  height={16} 
                  className="h-4 w-4 invert opacity-60 hover:opacity-100"
                />
              </Link>
              {/* <Link
                href="https://councils.forbes.com/profile/Harshith-Vaddiparthy-Head-Growth-JustPaid/5747f601-ca29-4255-a79b-3518154819a7"
                target="_blank"
                className="p-1.5 rounded border border-zinc-600 bg-zinc-800/50 text-zinc-400 hover:text-zinc-300 hover:border-zinc-500 transition-all duration-300 hover:bg-zinc-700/50"
              >
                <Image
                  src="/forbes-icon.svg"
                  alt="Harshitha Vaddiparthy - Forbes Technology Council Member"
                  width={16}
                  height={16}
                  className="h-4 w-4 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </Link> */}
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

      {/* WhatsApp Modal */}
      <WhatsAppModal 
        isOpen={isWhatsAppModalOpen} 
        onClose={() => setIsWhatsAppModalOpen(false)} 
      />
    </div>
  );
}
