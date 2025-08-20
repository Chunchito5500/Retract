"use client"

import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Bikes', url: '/pioneer', icon: User },
    { name: 'Gallery', url: '/gallery', icon: Briefcase },
    { name: 'About Us', url: '/aboutus', icon: FileText }
  ]

  return <NavBar items={navItems} currentPath={pathname} />
}