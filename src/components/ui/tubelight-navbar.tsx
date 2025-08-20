"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { LucideIcon, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import localFont from "next/font/local"

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
})
const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  currentPath?: string
}

// Helper function to determine if a path is active
function isPathActive(itemUrl: string, currentPath: string): boolean {
  if (itemUrl === '/' && currentPath === '/') {
    return true
  }
  if (itemUrl !== '/' && currentPath.startsWith(itemUrl)) {
    return true
  }
  return false
}

export function NavBar({ items, className, currentPath = '/' }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      // Close menu when switching to desktop
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    handleResize()
    handleScroll()
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [currentPath])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen, isMobile])

  return (
    <>
      <motion.div
        className={cn(
          "fixed z-50",
          scrolled && !isMobile
            ? "top-4 left-1/2 -translate-x-1/2"
            : "top-4 sm:top-6 md:top-8 lg:top-10 xl:top-12 left-0 right-0 mx-4 sm:mx-6 md:mx-8",
          className,
        )}
        transition={{
          type: "tween",
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <div 
          className={cn(
            "border rounded-full shadow-lg transition-all duration-400 ease-out",
            scrolled && !isMobile
              ? "px-4 py-2 bg-background/5 border-border backdrop-blur-lg"
              : scrolled && isMobile
              ? "px-8 py-4 w-full bg-background/5 border-border backdrop-blur-lg"
              : "px-8 py-4 w-full bg-transparent border-transparent",
            isMobile ? "overflow-visible" : "overflow-hidden"
          )}
        >
          <div className={cn(
            "flex items-center",
            scrolled && !isMobile ? "justify-center gap-4" : "justify-between gap-8"
          )}>
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/white_retractenhanced.svg"
                  alt="Retract"
                  width={scrolled && !isMobile ? 40 : 70}
                  height={scrolled && !isMobile ? 40 : 70}
                  className="transition-all duration-400 ease-out"
                />
                {!scrolled && !isMobile && (
                  <span
                    className={cn(
                      "ml-3 font-large text-white whitespace-nowrap transition-opacity duration-400 ease-out",
                      BebasNeue.className,
                    )}
                    style={{
                      fontSize: "clamp(1.125rem, 2vw, 1.875rem)",
                    }}
                  >
                    Retractability Bicycles
                  </span>
                )}
              </Link>
            </div>

            {/* Desktop Navigation */}
            {!isMobile && (
              <>
                {/* Center navigation items */}
                <div className={cn(
                  "flex items-center gap-1",
                  scrolled ? "" : "absolute left-1/2 -translate-x-1/2"
                )}>
                  {items.map((item) => {
                    const Icon = item.icon
                    const isActive = isPathActive(item.url, currentPath)

                    return (
                      <Link
                        key={item.name}
                        href={item.url}
                        className={cn(
                          "relative cursor-pointer text-[18px] font-semibold px-4 py-2 rounded-full transition-colors",
                          "text-white/90 hover:text-primary",
                          isActive && "bg-muted text-primary",
                          Roboto.className
                        )}
                      >
                        <span className="hidden md:inline">{item.name}</span>
                        <span className="md:hidden">
                          <Icon size={22} strokeWidth={2.5} />
                        </span>
                        {isActive && (
                          <motion.div
                            layoutId="lamp"
                            className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          >
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                              <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                              <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                              <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                            </div>
                          </motion.div>
                        )}
                      </Link>
                    )
                  })}
                </div>

                {/* Shopping cart */}
                <div className="flex-shrink-0">
                  <Link 
                    href="#" 
                    className={cn(
                      "flex items-center justify-center rounded-full hover:bg-white/10 transition-colors",
                      scrolled ? "w-10 h-10" : "w-12 h-12"
                    )}
                  >
                    <ShoppingCart 
                      size={scrolled ? 18 : 25} 
                      className="text-white/80 hover:text-white" 
                      strokeWidth={2.5} 
                    />
                  </Link>
                </div>
              </>
            )}

            {/* Mobile Hamburger Menu */}
            {isMobile && (
              <div className="flex-shrink-0 relative z-[60]">
                <label 
                  htmlFor="menuToggle" 
                  className="flex flex-col relative w-10 h-8 cursor-pointer"
                >
                  <input 
                    id="menuToggle"
                    type="checkbox" 
                    className="absolute w-full h-full opacity-0 cursor-pointer z-[2]"
                    checked={menuOpen}
                    onChange={(e) => setMenuOpen(e.target.checked)}
                  />
                  <span 
                    className={cn(
                      "block w-7 h-0.5 mb-1.5 relative bg-white rounded-sm z-[1] ml-auto",
                      "transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)]",
                      "origin-[95%_0%]",
                      menuOpen && "-rotate-45 translate-x-[3px] translate-y-[-1px] bg-gray-700"
                    )}
                  />
                  <span 
                    className={cn(
                      "block w-7 h-0.5 mb-1.5 relative bg-white rounded-sm z-[1] ml-auto",
                      "transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)]",
                      menuOpen && "opacity-0 rotate-0 scale-[0.2]"
                    )}
                  />
                  <span 
                    className={cn(
                      "block w-7 h-0.5 relative bg-white rounded-sm z-[1] ml-auto",
                      "transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)]",
                      "origin-[95%_100%]",
                      menuOpen && "rotate-45 translate-x-0 translate-y-[1px] bg-gray-700"
                    )}
                  />
                </label>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile Slide-out Menu */}
      {isMobile && (
        <div 
          className={cn(
            "fixed top-0 right-0 w-[280px] h-full bg-white shadow-2xl z-40",
            "transition-transform duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)]",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="pt-32 px-12">
            <ul className="space-y-6">
              {items.map((item) => {
                const isActive = isPathActive(item.url, currentPath)
                return (
                  <li key={item.name}>
                    <Link
                      href={item.url}
                      className={cn(
                        "block text-2xl font-normal transition-opacity duration-200",
                        "hover:opacity-50",
                        isActive ? "text-primary font-semibold" : "text-gray-900",
                        Roboto.className
                      )}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-4 border-t border-gray-200">
                <Link
                  href="#"
                  className={cn(
                    "flex items-center gap-3 text-2xl font-normal text-gray-900",
                    "transition-opacity duration-200 hover:opacity-50",
                    Roboto.className
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  <ShoppingCart size={24} strokeWidth={2} />
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}