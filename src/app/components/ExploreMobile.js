// path: ExploreMobile.js

"use client";

import React, { useState, useEffect, useRef } from "react";
import { MdPedalBike } from "react-icons/md";
import Link from "next/link";

export default function ExploreMobile() {
  const models = [
    "Renaissance Italian Orange.glb",
    "Oceanic Blue.glb",
    "Oceanic Blue Alt Seat.glb",
    "Cool Blue with Black Seat.glb",
  ];

  const [email, setEmail] = useState("");
  const [currentModel, setCurrentModel] = useState(models[0]);
  const modelViewerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("Thank you for subscribing!");
        setEmail("");
      } else {
        alert("Sorry, there was an issue on our end, please try again later!");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

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
      <section id="middle" className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <model-viewer
              src={`/${currentModel}`}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="0"
              autoplay
              style={{ width: "300px", height: "200px", border: "2px solid #9bc1bc" }}
              className="transition-opacity duration-500"
            />
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={goToPrevModel}
                className="text-gray-200 hover:bg-black p-2 border rounded-full transition-colors duration-300 dark:border-gray-700 dark:text-gray-200"
                style={{ transform: 'scaleX(-1)' }}
              >
                <MdPedalBike size={24} />
              </button>
              <button
                onClick={goToNextModel}
                className="text-gray-200 hover:bg-black p-2 border rounded-full transition-colors duration-300 dark:border-gray-700 dark:text-gray-200"
              >
                <MdPedalBike size={24} />
              </button>
            </div>
            <div className="card" style={{ width: "100%", maxWidth: "600px", background: 'transparent', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <div className="card-body text-center">
                <h1 className="text-2xl font-semibold text-white">
                  The Quark Foldable Bike
                </h1>
                <p className="mt-4 text-gray-400 dark:text-gray-400">
                  The leap from landlines to cellphones, from desktops to laptops, and now, from the traditional bicycle to the Retractability Quark. Retractability Bicycles represents the future of biking, setting new standards and advancing the industry.
                </p>
                <h3 className="mt-6 text-lg font-medium text-blue-500">
                  Release Date: January 2025
                </h3>
                <div style={{ height: '15px' }}></div>
                <Link legacyBehavior href="/quark" passHref>
                  <button className="w-1/2 px-5 py-2 text-sm font-medium text-white bg-[#427aa1] rounded-md hover:bg-[#05668d] focus:bg-[#05668d] mx-auto">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 py-10 mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-full">
            <div role="status" className="flex items-center justify-center h-56 w-72 bg-gray-700 rounded-lg animate-slow dark:bg-gray-700">
              <MdPedalBike className="w-20 h-10 text-gray-600 dark:text-gray-600" />
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h1 className="text-2xl font-semibold text-white dark:text-white">
              New Models Coming Soon!
            </h1>
            <p className="max-w-lg mt-6 text-gray-400 dark:text-gray-400">
              Stick around and be the first to get notified when new models come out!
            </p>
          </div>
          
        </div>
        <div style={{ height: '100px' }}></div>
      </div>
    </div>
  );
}
