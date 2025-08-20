// components/landing/HeroSection.tsx
"use client";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Welcome to Retract Demo</h1>
      <p className="mt-4 text-lg">
        This is a simple landing page for your application.
      </p>
      <Link
        href="#"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold"
      >
        Get Started
      </Link>
    </section>
  );
}
