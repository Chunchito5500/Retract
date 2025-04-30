"use client";

import Image from "next/image";
import React, { useState } from "react";
import localFont from "next/font/local";
import FoldableTab from "./tabs/FoldableTab";
import VersatileTab from "./tabs/VersatileTab";
import TireTab from "./tabs/TireTab";
import styles from "./hover.css"; // Updated import if needed

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});

const PioneerFF = () => {
  // Possible tab keys: "Foldable", "Versatile", "Tire"
  const [activeTab, setActiveTab] = useState("Foldable");

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center px-4 py-10 text-[#333544]">
      <div style={{ height: "100px" }}></div>
      <div className="max-w-2xl text-center mx-auto">
        <h1
          className={`block text-5xl font-bold text-white ${BebasNeue.className}`}
        >
          Learn about the Pioneer&apos;s
          <span className="text-[#ffb74b]"> Features</span>
        </h1>
        <div style={{ height: "50px" }}></div>
      </div>

      {/* Wrap static navigation in Bebas font */}
      <div className={BebasNeue.className}>
        {/* Mobile Select Navigation */}
        <select
          id="tab-select"
          className="sm:hidden py-3 px-4 pe-9 block w-full border-[#ccc5b9] rounded-lg text-xl focus:border-blue-500 focus:ring-blue-500 text-[#faf8f4]"
          aria-label="Tabs"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          <option value="Foldable">Full-sized, Fully Foldable</option>
          <option value="Versatile">Versatile</option>
          {/* <option value="Tire">Novel Folding Tire Technology</option> */}
        </select>

        {/* Desktop Navigation */}
        <div className="hidden sm:block border-b border-[#ccc5b9] mt-4 w-full">
          <nav
            className="flex gap-x-2 justify-center"
            aria-label="Tabs"
            role="tablist"
            data-hs-tab-select="#tab-select"
          >
            <button
              type="button"
              className={`-mb-px py-3 px-4 inline-flex items-center gap-x-2 rounded-t-lg border border-[#ccc5b9] text-xl font-medium text-center focus:outline-hidden ${
                activeTab === "Foldable"
                  ? "bg-[#ccc5b9] text-[#333544]"
                  : "bg-transparent text-[#333544] hover:bg-transparent"
              }`}
              id="hs-tab-to-select-item-1"
              aria-selected={activeTab === "Foldable"}
              data-hs-tab="#hs-tab-to-select-1"
              aria-controls="hs-tab-to-select-1"
              role="tab"
              onClick={() => setActiveTab("Foldable")}
            >
              Full-sized
            </button>
            <button
              type="button"
              className={`-mb-px py-3 px-4 inline-flex items-center gap-x-2 rounded-t-lg border border-[#ccc5b9] text-xl font-medium text-center focus:outline-hidden ${
                activeTab === "Versatile"
                  ? "bg-[#ccc5b9] text-[#333544]"
                  : "bg-transparent text-[#333544] hover:bg-transparent"
              }`}
              id="hs-tab-to-select-item-2"
              aria-selected={activeTab === "Versatile"}
              data-hs-tab="#hs-tab-to-select-2"
              aria-controls="hs-tab-to-select-2"
              role="tab"
              onClick={() => setActiveTab("Versatile")}
            >
              Versatile
            </button>
            {/* <button
              type="button"
              className={`-mb-px py-3 px-4 inline-flex items-center gap-x-2 rounded-t-lg border border-[#ccc5b9] text-xl font-medium text-center focus:outline-hidden ${
                activeTab === "Tire"
                  ? "bg-[#ccc5b9] text-[#333544]"
                  : "bg-transparent text-[#333544] hover:bg-transparent"
              }`}
              id="hs-tab-to-select-item-3"
              aria-selected={activeTab === "Tire"}
              data-hs-tab="#hs-tab-to-select-3"
              aria-controls="hs-tab-to-select-3"
              role="tab"
              onClick={() => setActiveTab("Tire")}
            >
              Airless Tire
            </button> */}
          </nav>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="mt-3 w-full">
        <div
          id="hs-tab-to-select-1"
          role="tabpanel"
          aria-labelledby="hs-tab-to-select-item-1"
          className={activeTab === "Foldable" ? "block fade-in" : "hidden"}
        >
          <h2
            className={`text-6xl text-[#faf8f4] font-bold mt-8 mb-4 text-center ${BebasNeue.className}`}
          >
            A Full-Sized Ride — That Folds to Fit Your Life
          </h2>
          <FoldableTab />
        </div>
        <div
          id="hs-tab-to-select-2"
          role="tabpanel"
          aria-labelledby="hs-tab-to-select-item-2"
          className={activeTab === "Versatile" ? "block fade-in" : "hidden"}
        >
          <h2
            className={`text-6xl text-[#faf8f4] font-bold mt-8 mb-4 text-center ${BebasNeue.className}`}
          >
            Versatility Built for Real Life
          </h2>
          <VersatileTab />
        </div>
        {/* <div
          id="hs-tab-to-select-3"
          role="tabpanel"
          aria-labelledby="hs-tab-to-select-item-3"
          className={activeTab === "Tire" ? "block fade-in" : "hidden"}
        >
          <h2
            className={`text-6xl text-[#faf8f4] font-bold mt-8 mb-4 text-center ${BebasNeue.className}`}
          >
            The World’s First Folding Airless Tire
          </h2>
          <TireTab />
        </div> */}
      </div>

      <div style={{ height: "100px" }}></div>

      {/* Fade In CSS */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default PioneerFF;
