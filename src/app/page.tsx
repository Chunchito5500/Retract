// In your app/page.tsx
"use client";
import { usePathname } from 'next/navigation';
import LandingLayout from "../components/landing/LandingLayout";

export default function HomePage() {
  const pathname = usePathname();
  
  return <LandingLayout key={pathname} />;
}