"use client";

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Explore from "@/app/components/Explore";
import ExploreMobile from "@/app/components/ExploreMobile";
import { MdPedalBike } from "react-icons/md";

export default function ExplorePage() {
  const models = [
    "Renaissance Italian Orange.glb",
    "Oceanic Blue.glb",
    "Oceanic Blue Alt Seat.glb",
    "Cool Blue with Black Seat.glb",
  ];

  const [currentModel, setCurrentModel] = useState(models[0]);
  const modelViewerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // or any other width threshold
    };

    checkMobile(); // Check on initial mount
    window.addEventListener('resize', checkMobile); // Add resize listener

    return () => window.removeEventListener('resize', checkMobile); // Clean up
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  const goToNextModel = () => {
    const currentIndex = models.indexOf(currentModel);
    const nextIndex = (currentIndex + 1) % models.length;
    setCurrentModel(models[nextIndex]);
  };

  const goToPrevModel = () => {
    const currentIndex = models.indexOf(currentModel);
    const prevIndex = (currentIndex - 1 + models.length) % models.length;
    setCurrentModel(models[prevIndex]);
  };

  return (
    <div>
      <Head>
        <title>Explore</title>
        <meta name="Explore Bikes" content="Learn more about our Bikes." />
      </Head>
      <Navbar />
      <main className="bg-cover bg-center h-[38rem] bg-[url('/header-image.jpg')]">
        <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-40">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-semibold text-white">
              The future of <span className="text-blue-400">Biking</span>
            </h1>
            <button
              className="mt-4 px-5 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 lg:w-auto"
              onClick={() => document.getElementById("middle").scrollIntoView({ behavior: "smooth" })}
            >
              Explore Models
            </button>
          </div>
        </div>
      </main>
      {isMobile ? <ExploreMobile /> : <Explore />}
    </div>
  );

}
