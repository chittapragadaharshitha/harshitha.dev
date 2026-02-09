"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MobileNav } from "./mobile-nav";

interface NavigationProps {
	showMobileControls?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ showMobileControls = false }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	if (showMobileControls) {
		// Use the same fancy navigation for other pages with mobile controls
		return (
			<>
				<header ref={ref}>
					<div className="fixed inset-x-0 top-0 z-50 justify-center pt-4 md:pt-6 hidden md:flex">
						<nav className="flex w-fit items-center gap-3.5 md:gap-5 rounded-lg p-2 text-xs md:text-sm font-light pointer-events-auto shadow-lg bg-zinc-900/60 backdrop-blur-md border border-zinc-800/50 text-zinc-400">

							{/* Home Link */}
							<Link
								rel="nofollow"
								className="block overflow-hidden hover:[&>div]:-translate-y-[20px] pl-2"
								href="/"
							>
								<div className="h-[20px] will-change-transform transition-transform duration-300">
									<span className="flex h-[20px] items-center">Home</span>
									<span className="flex h-[20px] items-center text-zinc-50">Home</span>
								</div>
							</Link>

							{/* Story Link */}
							<Link
								rel="nofollow"
								className="block overflow-hidden hover:[&>div]:-translate-y-[20px]"
								href="/story"
							>
								<div className="h-[20px] will-change-transform transition-transform duration-300">
									<span className="flex h-[20px] items-center">Story</span>
									<span className="flex h-[20px] items-center text-zinc-50">Story</span>
								</div>
							</Link>

							{/* Work Link */}
							<Link
								rel="nofollow"
								className="block overflow-hidden hover:[&>div]:-translate-y-[20px]"
								href="/work"
							>
								<div className="h-[20px] will-change-transform transition-transform duration-300">
									<span className="flex h-[20px] items-center">Work</span>
									<span className="flex h-[20px] items-center text-zinc-50">Work</span>
								</div>
							</Link>

							{/* Media Link - Hidden */}
							{/* <Link
								rel="nofollow"
								className="block overflow-hidden hover:[&>div]:-translate-y-[20px]"
								href="/media"
							>
								<div className="h-[20px] will-change-transform transition-transform duration-300">
									<span className="flex h-[20px] items-center">Media</span>
									<span className="flex h-[20px] items-center text-zinc-50">Media</span>
								</div>
							</Link> */}

							{/* Essays Link */}
							<Link
								rel="nofollow"
								className="block overflow-hidden hover:[&>div]:-translate-y-[20px]"
								href="/essays"
							>
								<div className="h-[20px] will-change-transform transition-transform duration-300">
									<span className="flex h-[20px] items-center">Essays</span>
									<span className="flex h-[20px] items-center text-zinc-50">Essays</span>
								</div>
							</Link>

							{/* Holdings Link - Hidden */}
							{/* <Link
								className="block overflow-hidden hover:[&>div]:-translate-y-[20px]"
								href="https://harshith.vc"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="h-[20px] will-change-transform transition-transform duration-300">
									<span className="flex h-[20px] items-center">Holdings</span>
									<span className="flex h-[20px] items-center text-zinc-50">Holdings</span>
								</div>
							</Link> */}

							{/* Resume Button */}
							<Link
								href="/resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="
									relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-normal
									px-3 py-1.5
									transition-all duration-300 ease-in-out
									before:absolute before:inset-0
									before:-z-10 before:translate-y-[200%]
									before:scale-[2.5]
									before:rounded-[100%]
									before:transition-transform before:duration-1000
									before:content-['']
									hover:before:translate-y-[0%]
									active:scale-100
									text-zinc-200 bg-gradient-to-tr from-zinc-800/90 to-zinc-700/90 via-zinc-900/90 before:bg-zinc-50 hover:text-zinc-800
								">
									Resume
								</button>
							</Link>

							{/* Get in touch Button */}
							<Link
								href="/meet"
							>
								<button className="
									relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-normal
									px-3 py-1.5
									transition-all duration-300 ease-in-out
									before:absolute before:inset-0
									before:-z-10 before:translate-y-[200%]
									before:scale-[2.5]
									before:rounded-[100%]
									before:transition-transform before:duration-1000
									before:content-['']
									hover:before:translate-y-[0%]
									active:scale-100
									text-zinc-200 bg-gradient-to-tr from-zinc-800/90 to-zinc-700/90 via-zinc-900/90 before:bg-zinc-50 hover:text-zinc-800
								">
									Get in touch
								</button>
							</Link>
						</nav>
					</div>
				</header>

				{/* New Mobile Navigation */}
				<MobileNav showLogo={true} />
			</>
		);
	}

	// New fancy navigation for home page
	return (
		<nav className="hidden md:flex w-fit items-center gap-3.5 md:gap-5 rounded-lg p-2 text-xs md:text-sm font-light pointer-events-auto z-20 shadow-lg bg-zinc-900/60 backdrop-blur-md border border-zinc-800/50 text-zinc-400">

			{/* All Original Navigation Links with New Hover Animation */}
			<Link
				rel="nofollow"
				className="block overflow-hidden hover:[&>div]:-translate-y-[20px] pl-2"
				href="/"
			>
				<div className="h-[20px] will-change-transform transition-transform duration-300">
					<span className="flex h-[20px] items-center">Home</span>
					<span className="flex h-[20px] items-center text-zinc-50">Home</span>
				</div>
			</Link>

			<Link
				rel="nofollow"
				className="block overflow-hidden hover:[&>div]:-translate-y-[20px]"
				href="/story"
			>
				<div className="h-[20px] will-change-transform transition-transform duration-300">
					<span className="flex h-[20px] items-center">Story</span>
					<span className="flex h-[20px] items-center text-zinc-50">Story</span>
				</div>
			</Link>

			<Link
				rel="nofollow"
				className="block overflow-hidden hover:[&>div]:-translate-y-[20px]"
				href="/work"
			>
				<div className="h-[20px] will-change-transform transition-transform duration-300">
					<span className="flex h-[20px] items-center">Work</span>
					<span className="flex h-[20px] items-center text-zinc-50">Work</span>
				</div>
			</Link>

			{/* Media Link - Hidden */}
			{/* <Link
				rel="nofollow"
				className="block overflow-hidden hover:[&>div]:-translate-y-[20px]"
				href="/media"
			>
				<div className="h-[20px] will-change-transform transition-transform duration-300">
					<span className="flex h-[20px] items-center">Media</span>
					<span className="flex h-[20px] items-center text-zinc-50">Media</span>
				</div>
			</Link> */}

			<Link
				rel="nofollow"
				className="block overflow-hidden hover:[&>div]:-translate-y-[20px]"
				href="/essays"
			>
				<div className="h-[20px] will-change-transform transition-transform duration-300">
					<span className="flex h-[20px] items-center">Essays</span>
					<span className="flex h-[20px] items-center text-zinc-50">Essays</span>
				</div>
			</Link>

			{/* Holdings Link - Hidden */}
			{/* <Link
				className="block overflow-hidden hover:[&>div]:-translate-y-[20px]"
				href="https://harshith.vc"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="h-[20px] will-change-transform transition-transform duration-300">
					<span className="flex h-[20px] items-center">Holdings</span>
					<span className="flex h-[20px] items-center text-zinc-50">Holdings</span>
				</div>
			</Link> */}

			{/* Resume Button */}
			<Link
				href="/resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
			>
				<button className="
					relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-normal
					px-3 py-1.5
					transition-all duration-300 ease-in-out
					before:absolute before:inset-0
					before:-z-10 before:translate-y-[200%]
					before:scale-[2.5]
					before:rounded-[100%]
					before:transition-transform before:duration-1000
					before:content-['']
					hover:before:translate-y-[0%]
					active:scale-100
					text-zinc-200 bg-gradient-to-tr from-zinc-800/90 to-zinc-700/90 via-zinc-900/90 before:bg-zinc-50 hover:text-zinc-800
				">
					Resume
				</button>
			</Link>

			{/* Get in touch Button with Special Styling */}
			<Link
				href="/meet"
			>
				<button className="
					relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-normal
					px-3 py-1.5
					transition-all duration-300 ease-in-out
					before:absolute before:inset-0
					before:-z-10 before:translate-y-[200%]
					before:scale-[2.5]
					before:rounded-[100%]
					before:transition-transform before:duration-1000
					before:content-['']
					hover:before:translate-y-[0%]
					active:scale-100
					text-zinc-200 bg-gradient-to-tr from-zinc-800/90 to-zinc-700/90 via-zinc-900/90 before:bg-zinc-50 hover:text-zinc-800
				">
					Get in touch
				</button>
			</Link>
		</nav>
	);
};
