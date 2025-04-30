"use client";

import React from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { SlidingWheelCard } from "@/app/gallery/Gallerymodels/slidingwheel";
import { RetractabilityBikeCard } from "@/app/gallery/Gallerymodels/RetractabilityBikeCard";
import { GridPatternLinearGradient } from "@/components/magicui/grid-pattern-linear-gradient";
import "../globals.css";
import "../styles.css";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../fonts/Roboto-Regular.ttf",
});
const SourceSans = localFont({
  src: "../fonts/SourceSans3-Regular.ttf",
});

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>Gallery</title>
        <meta name="Model Gallery" content="Look at our 3D Models." />
      </Head>
      <style jsx>{`
        .flex-container {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(300px, 1fr)
          ); /* Flexible grid layout */
          gap: 20px; /* Adds spacing between cards */
          justify-content: center;
          padding: 30px;
        }

        @media (max-width: 768px) {
          .flex-container {
            grid-template-columns: 1fr; /* Single column on smaller screens */
          }
        }
      `}</style>

      {/* Ensure the outer container fills at least the viewport */}
      <div className="relative min-h-screen">
        {/* Background: the gradient with grid pattern as an absolute element */}
        <GridPatternLinearGradient />
        {/* Content over the background */}
        <div className="relative z-10">
          <Navbar />
          <div style={{ height: "40px" }}></div>
          <div className="py-4 lg:py-2 px-2 mx-auto max-w-screen-md">
            <div style={{ height: "80px" }}></div>
            <h2
              className={`mb-16 text-5xl font-bold text-center text-[#c8c8c8] ${BebasNeue.className}`}
            >
              View our Gallery
            </h2>
          </div>
          <div className="flex-container">
            {/* Render Cards */}
            <SlidingWheelCard />
            <RetractabilityBikeCard />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
