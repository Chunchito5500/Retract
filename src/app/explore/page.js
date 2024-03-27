"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Script from "next/script";

export default function Explore() {
  const models = [
    "Renaissance Italian Orange.glb",
    "Oceanic Blue.glb",
    "Oceanic Blue Alt Seat.glb",
  ];

  const [currentModel, setCurrentModel] = useState(models[0]);

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
      <main>
        <div className="w-full bg-center bg-cover h-[38rem]">
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                The future of <span className="text-blue-400">Biking</span>
              </h1>
              <button
                className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                onClick={() =>
                  document
                    .getElementById("middle")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Models
              </button>
            </div>
          </div>
        </div>
      </main>
      <section id="middle" className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <div className="flex items-center justify-between mt-12 lg:justify-start">
              <button
                title="left arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                onClick={goToPrevModel}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <Script
                strategy="beforeInteractive"
                src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
              />

              <model-viewer
                src={`/${currentModel}`}
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                tone-mapping="commerce"
                poster="poster.webp"
                shadow-intensity="0"
                autoplay
                camera-orbit=""
                className="modelViewer"
                style={{
                  width: "600px",
                  height: "500px",
                  border: "2px solid #9bc1bc",
                }}
              ></model-viewer>

              <button
                title="right arrow"
                class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                onClick={goToNextModel}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div class=" lg:mx-6 mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                  The Quark Foldable Bike
                </h1>

                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                  The leap from landlines, to the cellphone. The desktop
                  computer to the laptop. Now, the traditonal Bicycle to the
                  Retractability Quark. Retractability Bicycles offers the
                  future of biking, establishing new standards, and pushing the
                  industry forward.
                </p>

                <h3 class="mt-6 text-lg font-medium text-blue-500">
                  Release Date
                </h3>
                <p class="text-gray-600 dark:text-gray-300">January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
