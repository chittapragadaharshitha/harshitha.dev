"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";

export default function MeetPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {
        "theme": "dark",
        "cssVarsPerTheme": {
          "light": {
            "cal-brand": "#71717a", // zinc-500
            "cal-bg": "#ffffff",
            "cal-bg-emphasis": "#f4f4f5", // zinc-100
            "cal-bg-subtle": "#fafafa", // zinc-50
            "cal-bg-muted": "#f4f4f5", // zinc-100
            "cal-border": "#e4e4e7", // zinc-200
            "cal-border-default": "#e4e4e7", // zinc-200
            "cal-border-subtle": "#f4f4f5", // zinc-100
            "cal-border-emphasis": "#d4d4d8", // zinc-300
            "cal-text": "#18181b", // zinc-900
            "cal-text-emphasis": "#09090b", // zinc-950
            "cal-text-default": "#52525b", // zinc-600
            "cal-text-subtle": "#71717a", // zinc-500
            "cal-text-muted": "#a1a1aa", // zinc-400
            "cal-text-inverted": "#ffffff"
          },
          "dark": {
            "cal-brand": "#52525b", // zinc-600 - subtle accent
            "cal-bg": "rgba(9, 9, 11, 0.85)", // zinc-950 with 85% opacity
            "cal-bg-emphasis": "rgba(24, 24, 27, 0.85)", // zinc-900 with 85% opacity
            "cal-bg-subtle": "rgba(9, 9, 11, 0.8)", // zinc-950 with 80% opacity
            "cal-bg-muted": "rgba(24, 24, 27, 0.8)", // zinc-900 with 80% opacity
            "cal-border": "rgba(39, 39, 42, 0.8)", // zinc-800 with 80% opacity
            "cal-border-default": "rgba(39, 39, 42, 0.8)", // zinc-800 with 80% opacity
            "cal-border-subtle": "rgba(24, 24, 27, 0.7)", // zinc-900 with 70% opacity
            "cal-border-emphasis": "rgba(63, 63, 70, 0.9)", // zinc-700 with 90% opacity
            "cal-text": "#e4e4e7", // zinc-200
            "cal-text-emphasis": "#f4f4f5", // zinc-100
            "cal-text-default": "#a1a1aa", // zinc-400
            "cal-text-subtle": "#71717a", // zinc-500
            "cal-text-muted": "#52525b", // zinc-600
            "cal-text-inverted": "#09090b" // zinc-950
          }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, [])
  
  return (
    <div className="bg-gradient-to-tl from-zinc-950/50 from-0% via-zinc-600/20 via-50% to-zinc-950/50 to-100%">
      <Particles className="absolute inset-0 -z-10" quantity={100} />
      <Navigation showMobileControls={true} />
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="mt-6 sm:mt-8 md:mt-12 max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
              Let's Meet
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-400">
              Book a 15-minute call to discuss your ideas
            </p>
          </div>
          
          <div className="w-full h-[600px] sm:h-[700px] md:h-[800px]">
            <Cal namespace="15min"
              calLink="sai-harshitha-fa5zdl/15min"
              style={{width:"100%",height:"100%",overflow:"scroll"}}
              config={{"layout":"month_view"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}