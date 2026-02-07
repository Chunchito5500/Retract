"use client";

import React, { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
  display: "swap",
});

const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
  display: "swap",
});

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-15">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Eyebrow */}
        <p
          className={`
            text-sm tracking-[0.3em] text-blue-400 uppercase mb-6
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            ${Roboto.className}
          `}
        >
          Introducing
        </p>

        {/* Main Headline */}
        <h1
          className={`
            text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-8
            transition-all duration-700 ease-out delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            ${BebasNeue.className}
          `}
        >
          The Retractability
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Pioneer
          </span>
        </h1>

        {/* Divider */}
        <div
          className={`
            w-20 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-8
            transition-all duration-700 ease-out delay-200
            ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
          `}
        />

        {/* Primary Subtext */}
        <p
          className={`
            text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-6
            transition-all duration-700 ease-out delay-300
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            ${Roboto.className}
          `}
        >
          The world's first full-size bike that folds
          <br className="hidden sm:block" /> and fits into a compact package.
        </p>

        {/* Secondary Subtext */}
        <p
          className={`
            text-base sm:text-lg text-white/80 max-w-2xl mx-auto
            transition-all duration-700 ease-out delay-[400ms]
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            ${Roboto.className}
          `}
        >
          Perfect for <strong>college commuters</strong> — and built with them
          in mind.
        </p>
      </div>
    </section>
  );
}
