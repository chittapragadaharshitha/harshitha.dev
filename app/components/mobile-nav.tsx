"use client";

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuItem {
  text: string;
  href: string;
  external?: boolean;
}

const menuItems: MenuItem[] = [
  { text: "Home", href: "/" },
  { text: "Story", href: "/story" },
  { text: "Work", href: "/work" },
  // { text: "Media", href: "/media" }, // Hidden
  { text: "Essays", href: "/essays" },
  { text: "Resume", href: "/resume.pdf", external: true },
  // { text: "Holdings", href: "https://harshith.vc", external: true }, // Hidden
]

interface MobileNavProps {
  showLogo?: boolean;
}

export function MobileNav({ showLogo = false }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className="block md:hidden">
      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 w-6 h-6 flex items-center justify-center"
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="w-6 flex items-center justify-center"
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        >
          <motion.span
            className="absolute w-5 h-[1.5px] bg-zinc-100"
            variants={{
              closed: { rotate: 0, y: -4 },
              open: { rotate: 45, y: 0 }
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute w-5 h-[1.5px] bg-zinc-100"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute w-5 h-[1.5px] bg-zinc-100"
            variants={{
              closed: { rotate: 0, y: 4 },
              open: { rotate: -45, y: 0 }
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="flex flex-col items-center space-y-6"
            >
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative group"
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-light text-zinc-300 hover:text-zinc-100 transition-colors tracking-wide uppercase"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-light text-zinc-300 hover:text-zinc-100 transition-colors tracking-wide uppercase"
                    >
                      {item.text}
                    </Link>
                  )}
                  <motion.div 
                    className="h-[1px] w-full overflow-hidden mt-1"
                    style={{
                      background: `linear-gradient(to right, rgb(244, 244, 245), transparent)`
                    }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ 
                      scaleX: 1,
                      transition: {
                        duration: 0.2,
                        ease: [0.32, 0.72, 0, 1]
                      }
                    }}
                  />
                </motion.div>
              ))}
              
              {/* Get in touch button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.05 }}
                className="pt-6"
              >
                <Link
                  href="/meet"
                  onClick={() => setIsOpen(false)}
                >
                  <button className="
                    relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-light
                    px-5 py-2.5 text-xs
                    transition-all duration-300 ease-in-out
                    before:absolute before:inset-0
                    before:-z-10 before:translate-y-[200%]
                    before:scale-[2.5]
                    before:rounded-[100%] 
                    before:transition-transform before:duration-1000
                    before:content-['']
                    hover:before:translate-y-[0%]
                    active:scale-95
                    text-zinc-300 bg-gradient-to-tr from-zinc-800/90 to-zinc-700/90 via-zinc-900/90 before:bg-zinc-50 hover:text-zinc-800 tracking-wide uppercase
                  ">
                    Get in touch
                  </button>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
