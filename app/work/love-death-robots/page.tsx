"use client";

import Link from "next/link";
import React from "react";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import Particles from "../../components/particles";
import { ArrowLeft, Trophy, Film, Users, MousePointer, Image as ImageIcon, QrCode, BarChart, Globe } from "lucide-react";
import Image from "next/image";

export default function LoveDeathRobotsPage() {
  const keyAchievements = [
    "Spearheaded the 'Love, Death + Art' NFT campaign, resulting in 131,690 artworks minted.",
    "Managed community engagement strategies reaching 682,000 users globally.",
    "Contributed to campaign success generating 92 million site views.",
    "Fostered a vibrant community of 32,200 unique NFT holders.",
    "Oversaw operational aspects of the NFT minting process on the Ethereum network.",
    "Developed and executed growth strategies that significantly increased online presence during the campaign."
  ];

  const stats = [
    { icon: <MousePointer className="w-6 h-6" />, value: "92M", label: "Site Views" },
    { icon: <ImageIcon className="w-6 h-6" />, value: "131,690", label: "Artworks Minted" },
    { icon: <Users className="w-6 h-6" />, value: "32.2K", label: "Unique Holders" },
    { icon: <QrCode className="w-6 h-6" />, value: "682K", label: "Users Engaged" },
  ];

  const nftCollection = [
    { id: 1, img: "301_rvld.png", link: "https://opensea.io/assets/ethereum/0xfd43d1da000558473822302e1d44d81da2e4cc0d/1" },
    { id: 3, img: "303_rvld.png", link: "https://opensea.io/assets/ethereum/0xfd43d1da000558473822302e1d44d81da2e4cc0d/3" },
    { id: 4, img: "304_rvld.png", link: "https://opensea.io/assets/ethereum/0xfd43d1da000558473822302e1d44d81da2e4cc0d/4" },
    { id: 7, img: "307_rvld.png", link: "https://opensea.io/assets/ethereum/0xfd43d1da000558473822302e1d44d81da2e4cc0d/7" },
    { id: 8, img: "308_rvld.png", link: "https://opensea.io/assets/ethereum/0xfd43d1da000558473822302e1d44d81da2e4cc0d/8" },
    { id: 6, img: "306_rvld.png", link: "https://opensea.io/assets/ethereum/0xfd43d1da000558473822302e1d44d81da2e4cc0d/6" },
  ];

  return (
    <div className="relative min-h-screen">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation showMobileControls={true} />
      
      <div className="px-4 sm:px-6 pt-20 sm:pt-24 pb-20 mx-auto max-w-6xl lg:px-8">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-all duration-200 mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium">Back to Work</span>
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-start justify-between flex-wrap gap-6 mb-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 mb-4 font-display">
                Love, Death & Robots
              </h1>
              <p className="text-xl text-zinc-400 font-light">Head of Community & Operations</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.lovedeathandart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-xs font-medium text-zinc-300 border border-zinc-700 rounded-md hover:border-zinc-600 transition-colors"
              >
                <Globe className="w-3 h-3 mr-2" />
                Visit Project Site
              </a>
              <span className="text-sm text-zinc-400">May 2022 - Oct 2023</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {["NFT Project Management", "Community Leadership", "Digital Marketing Campaign", "Web3", "Operations Management", "Social Media Strategy", "Community Growth", "Event Marketing"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-xs font-medium text-zinc-400 border border-zinc-700/30 rounded-full hover:border-zinc-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-4xl">
            As a key consultant for the Emmy-winning Netflix anthology Love, Death + Robots Volume 3, I spearheaded the 
            community and operations strategy for the innovative 'Love, Death + Art' NFT project. This involved managing 
            a global digital scavenger hunt where 9 unique QR codes, hidden within episodes and physical locations like 
            Times Square, allowed fans to mint exclusive artworks. I led the community engagement efforts across multiple 
            platforms, fostering excitement and managing the large influx of users participating in the mint.
          </p>
        </div>

        {/* Trailer Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Film className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Volume 3 Official Trailer</h2>
          </div>
          <Card>
            <div className="p-6">
              <p className="text-zinc-400 text-sm mb-4">
                Emmy-winning animated anthology Love, Death + Robots returns with a third volume executive produced by 
                Tim Miller (Deadpool, Terminator: Dark Fate) and David Fincher (MINDHUNTER, Mank).
              </p>
              <div className="aspect-video w-full">
                <iframe 
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/Xj2b0swdpX8"
                  title="Love, Death + Robots | Volume 3 Official Trailer | Netflix"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Card>
        </div>

        {/* Campaign Impact Stats */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BarChart className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Campaign Impact</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index}>
                <div className="p-6 text-center">
                  <div className="text-zinc-500 mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-zinc-100">{stat.value}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="space-y-8 mb-16">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">Key Achievements</h2>
          </div>
          <Card>
            <div className="p-8">
              <ul className="space-y-4">
                {keyAchievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span className="text-zinc-300 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        {/* NFT Collection Preview */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="w-5 h-5 text-zinc-500" />
            <h2 className="text-2xl font-semibold text-zinc-100">The 'Love, Death + Art' Collection</h2>
          </div>
          <Card>
            <div className="p-6">
              <p className="text-zinc-400 text-sm mb-6">
                Nine unique Love, Death + Robots artworks were hidden across the digital and physical world via QR codes. 
                Fans could mint these as NFTs on the Ethereum network or simply download them.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {nftCollection.map((nft) => (
                  <a 
                    key={nft.id}
                    href={nft.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group block border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition-all duration-300"
                  >
                    <div className="relative aspect-square bg-zinc-900">
                      <Image
                        src={`https://www.lovedeathandart.com/imgs/pr_tokens/${nft.img}`}
                        alt={`Love, Death + Art NFT ${nft.id}`}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        unoptimized={true}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-xs text-zinc-300 font-medium">View on OpenSea</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a 
                  href="https://opensea.io/collection/love-death-robots-official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-xs font-medium text-zinc-300 border border-zinc-700 rounded-md hover:border-zinc-600 transition-colors"
                >
                  View Full Collection on OpenSea
                  <Globe className="w-3 h-3 ml-2" />
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Project Overview */}
        <Card>
          <div className="p-8">
            <h3 className="text-xl font-semibold text-zinc-100 mb-4">About the Campaign</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">
              The 'Love, Death + Art' campaign was a groundbreaking fusion of traditional entertainment and Web3 technology. 
              By hiding QR codes within the show's episodes and at physical locations including Times Square, we created 
              an immersive experience that bridged the digital and physical worlds.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              This innovative approach to fan engagement demonstrated how NFTs could be used as a tool for community 
              building and brand extension in the entertainment industry, reaching over 682,000 users globally and 
              creating a lasting community of 32,200 unique holders.
            </p>
          </div>
        </Card>

      </div>
    </div>
  );
}