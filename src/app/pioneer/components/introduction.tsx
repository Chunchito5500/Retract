"use client";

import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "./Button.module.css";

const BebasNeue = localFont({
  src: "../../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../../fonts/Roboto-Regular.ttf",
});

const Introduction = () => {
  return (
    <div className="relative">
      {/* Background Image - positioned behind content but above gradient */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Image
          src="/pioneer/PioneerBackground.png"
          alt="Pioneer Background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
          onError={(e) => {
            console.error("Image failed to load:", e);
          }}
          onLoad={() => {
            console.log("Image loaded successfully");
          }}
        />
      </div>

      {/* Main Content - positioned above background image */}
      <div style={{ height: "200px" }}></div>
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div style={{ height: "50px" }}></div>

          <div className="mt-5 max-w-7xl text-center mx-auto">
            <h1
              className={`block font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl whitespace-nowrap ${BebasNeue.className}`}
            >
              The Retractability Pioneer
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className={`text-xl text-gray-300 ${Roboto.className}`}>
              Pioneering the Future of Foldable Biking
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              className={styles.btn}
              onClick={() =>
                document
                  .getElementById("VersatileTab")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div style={{ height: "270px" }}></div>
    </div>
  );
};

export default Introduction;
