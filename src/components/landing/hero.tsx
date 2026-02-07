"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
  display: "swap",
});

const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
  display: "swap",
});

// Fixed particle positions to avoid hydration mismatch
const PARTICLES = [
  { x: 5, y: 10, delay: 0, duration: 8 },
  { x: 15, y: 25, delay: 1.2, duration: 10 },
  { x: 25, y: 60, delay: 0.5, duration: 9 },
  { x: 35, y: 15, delay: 2.1, duration: 11 },
  { x: 45, y: 70, delay: 0.8, duration: 8.5 },
  { x: 55, y: 40, delay: 1.5, duration: 10 },
  { x: 65, y: 85, delay: 3, duration: 9.5 },
  { x: 75, y: 30, delay: 0.3, duration: 11 },
  { x: 85, y: 55, delay: 2.5, duration: 8 },
  { x: 95, y: 20, delay: 1.8, duration: 10 },
  { x: 10, y: 80, delay: 4, duration: 9 },
  { x: 30, y: 45, delay: 0.7, duration: 11 },
  { x: 50, y: 90, delay: 2.8, duration: 8.5 },
  { x: 70, y: 5, delay: 1.1, duration: 10 },
  { x: 90, y: 65, delay: 3.5, duration: 9 },
];

export default function Hero() {
  const [isFolded, setIsFolded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleToggle = () => {
    setIsFolded(!isFolded);
    setHasInteracted(true);
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1f] via-[#121a35] to-[#16214b]" />

        {/* Subtle radial glow behind bike */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)",
          }}
        />

        {/* Animated ambient particles */}
        <div className="absolute inset-0 overflow-hidden">
          {PARTICLES.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -20, 20, -10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Top Text - Minimal */}
        <motion.div
          className="absolute top-8 sm:top-12 lg:top-16 left-0 right-0 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight ${BebasNeue.className}`}
          >
            PIONEER
          </h1>
          <p
            className={`mt-2 text-white/50 text-sm sm:text-base tracking-[0.3em] uppercase ${Roboto.className}`}
          >
            Unfold Your Journey
          </p>
        </motion.div>

        {/* Bike Container - Large and Centered */}
        <div className="relative w-full aspect-[16/10] max-w-[1000px] mx-auto">
          {/* Unfolded Bike */}
          <AnimatePresence mode="wait">
            {!isFolded && (
              <motion.div
                key="unfolded"
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/pioneer/hero/bike-unfolded.png"
                  alt="Pioneer Bike - Unfolded"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Folded Bike */}
          <AnimatePresence mode="wait">
            {isFolded && (
              <motion.div
                key="folded"
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/pioneer/hero/bike-folded.png"
                  alt="Pioneer Bike - Folded"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Glow effect under bike */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Toggle Control */}
        <motion.div
          className="absolute bottom-24 sm:bottom-32 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            onClick={handleToggle}
            className="group relative flex items-center gap-4 px-2 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500"
          >
            {/* Toggle Track */}
            <div className="relative flex items-center">
              {/* Labels */}
              <span
                className={`
                  px-4 py-2 text-xs sm:text-sm tracking-wider transition-all duration-300
                  ${!isFolded ? "text-white" : "text-white/40"}
                  ${Roboto.className}
                `}
              >
                RIDE
              </span>

              {/* Toggle Indicator */}
              <div className="relative w-16 h-8 mx-2">
                <div className="absolute inset-0 rounded-full bg-white/10" />
                <motion.div
                  className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg"
                  animate={{
                    left: isFolded ? "calc(100% - 28px)" : "4px",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>

              <span
                className={`
                  px-4 py-2 text-xs sm:text-sm tracking-wider transition-all duration-300
                  ${isFolded ? "text-white" : "text-white/40"}
                  ${Roboto.className}
                `}
              >
                FOLD
              </span>
            </div>
          </button>

          {/* Hint text */}
          <AnimatePresence>
            {!hasInteracted && (
              <motion.p
                className={`text-center text-white/30 text-xs mt-4 tracking-wider ${Roboto.className}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 2 }}
              >
                Toggle to see the magic
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* State Label */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div
            className={`flex items-center gap-2 text-white/40 text-xs tracking-wider ${Roboto.className}`}
          >
            <motion.span
              animate={{ opacity: isFolded ? 0.4 : 1 }}
              className="transition-opacity"
            >
              {isFolded ? "Compact & Portable" : "Ready to Ride"}
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Corner Accent Lines */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10" />
    </section>
  );
}
