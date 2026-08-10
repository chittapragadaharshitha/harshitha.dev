"use client";

import { useEffect, useState } from "react";

export const INTRO_STORAGE_KEY = "harshitha:intro:v1";
export const INTRO_EXIT_MS = 950;
export const INTRO_REMOVE_MS = 1450;

type IntroPhase = "enter" | "exit";

export function SiteIntro() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<IntroPhase>("enter");

  useEffect(() => {
    try {
      if (sessionStorage.getItem(INTRO_STORAGE_KEY)) {
        setVisible(false);
        return;
      }
      sessionStorage.setItem(INTRO_STORAGE_KEY, "seen");
    } catch {
      // Storage can be unavailable in hardened browsing modes. The intro must
      // still exit normally and never become a gate to the underlying page.
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const restoreScroll = () => {
      document.body.style.overflow = previousOverflow;
    };

    const exitTimer = window.setTimeout(
      () => setPhase("exit"),
      reducedMotion ? 50 : INTRO_EXIT_MS,
    );
    const removeTimer = window.setTimeout(
      () => {
        restoreScroll();
        setVisible(false);
      },
      reducedMotion ? 140 : INTRO_REMOVE_MS,
    );

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      restoreScroll();
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`site-intro site-intro--${phase}`} aria-hidden="true">
      <div className="site-intro__signature">
        <span>Harshitha</span>
        <span className="site-intro__rule" />
      </div>
    </div>
  );
}
