"use client";

import React from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { SlidingWheelCard } from "@/app/components/Gallerymodels/slidingwheel";
import { RetractabilityBikeCard } from "@/app/components/Gallerymodels/RetractabilityBikeCard";

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>Gallery</title>
        <meta name="Model Gallery" content="Look at our 3D Models." />
      </Head>
      <Navbar />
      <style jsx>{`
        .flex-container {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(300px, 1fr)
          ); // Flexible grid layout
          gap: 20px; // Adds spacing between cards
          justify-content: center;
          padding: 30px;
        }

        @media (max-width: 768px) {
          .flex-container {
            grid-template-columns: 1fr; // Single column on smaller screens
          }
        }
      `}</style>

      <div
        style={{
          background:
            "linear-gradient(to top, #111827, #12132c, #120d31, #302f4d, #4e425b)",
        }}
      >
        <div className="py-4 lg:py-2 px-2 mx-auto max-w-screen-md">
          <div style={{ height: "80px" }}></div>

          <h2 className="mb-16 text-4xl tracking-tight font-raleway font-bold text-center text-[#c8c8c8]">
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
  );
}
