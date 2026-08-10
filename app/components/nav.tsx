"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "./mobile-nav";

const items = [
  { label: "Home", href: "/" },
  { label: "Story", href: "/story" },
  { label: "Work", href: "/work" },
  { label: "Essays", href: "/essays" },
];

interface NavigationProps {
  showMobileControls?: boolean;
}

export function Navigation({ showMobileControls = false }: NavigationProps) {
  const pathname = usePathname();

  return (
    <>
      <header className={showMobileControls ? "fixed inset-x-0 top-0 z-40 hidden justify-center pt-4 md:flex md:pt-6" : "hidden md:block"}>
        <nav
          aria-label="Primary navigation"
          className="flex w-fit items-center gap-1 rounded-lg border border-zinc-800/70 bg-zinc-900/75 p-1.5 text-xs text-zinc-500 shadow-lg shadow-black/20 backdrop-blur-md"
        >
          {items.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-1.5 transition focus:outline-none focus:ring-2 focus:ring-zinc-500 ${
                  active ? "bg-zinc-800 text-zinc-100" : "hover:bg-zinc-800/70 hover:text-zinc-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-1.5 transition hover:bg-zinc-800/70 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500"
          >
            Resume
          </Link>
          <Link
            href="/meet"
            className="ml-1 rounded-md bg-zinc-100 px-3 py-1.5 font-medium text-zinc-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white active:scale-[0.98]"
          >
            Get in touch
          </Link>
        </nav>
      </header>
      {showMobileControls && <MobileNav showLogo={true} />}
    </>
  );
}
