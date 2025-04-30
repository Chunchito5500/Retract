"use client";

import React, { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});
const SourceSans = localFont({
  src: "../../fonts/SourceSans3-Regular.ttf",
});

const TheTire = () => {
  // Refs and state for the sliding model animation
  const modelViewerRef = useRef(null);
  const middleCardRef = useRef(null);
  const [totalAnimationDuration, setTotalAnimationDuration] = useState(3.99);
  const [sliderValue, setSliderValue] = useState(0); // internal state only

  // Import the <model-viewer> component if not already defined
  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  // When the model loads, pause its automatic animation and determine the total duration
  useEffect(() => {
    const modelViewer = modelViewerRef.current;
    const handleLoad = () => {
      if (modelViewer) {
        // Pause automatic playback so we can control it manually
        modelViewer.setAttribute("animation-play", "paused");
        const animations = modelViewer.getAnimations();
        if (animations && animations.length > 0 && animations[0].effect) {
          const duration = animations[0].effect.getTiming().duration;
          setTotalAnimationDuration(duration);
        }
      }
    };

    if (modelViewer) {
      modelViewer.addEventListener("load", handleLoad);
    }
    return () => {
      if (modelViewer) {
        modelViewer.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  // Scroll event: calculate the progress of the middle card as it enters view and update the model's currentTime
  useEffect(() => {
    const onScroll = () => {
      if (middleCardRef.current && modelViewerRef.current) {
        const rect = middleCardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate progress: when the top of the middle card is at bottom of viewport => 0,
        // and when the bottom of the card is at the top => 1.
        const progress = Math.min(
          Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
          1
        );
        const newTime = progress * totalAnimationDuration;
        setSliderValue(newTime); // internal update only
        modelViewerRef.current.currentTime = newTime;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [totalAnimationDuration]);

  return (
    <div className="relative">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title and Subtitle */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2
            className={`text-1xl font-bold md:text-2xl md:leading-tight text-white ${SourceSans.className}`}
          >
            A closer look at
          </h2>
          <p className={`mt-5 text-6xl text-gray-300 ${BebasNeue.className}`}>
            Our Tire
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* LEFT CARD */}
          <div className="group relative flex flex-col w-full h-[600px] rounded-xl overflow-hidden hover:shadow-lg transition bg-transparent">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              src="/tireclose.png"
              alt="Left Tire Image"
              width={600}
              height={600}
            />
            <div className="relative z-10 p-4 md:p-6 flex-auto">
              <h3
                className={`text-5xl ${BebasNeue.className}`}
                style={{ color: "#ccc5b9" }}
              >
                Airless Tires
              </h3>
              <p
                className={`mt-3 ${SourceSans.className}`}
                style={{ color: "#ccc5b9" }}
              >
                No more flats. No more patch kits. Just pure ride-time.
              </p>
            </div>
          </div>

          {/* MIDDLE CARD */}
          <div
            className="group flex flex-col focus:outline-hidden"
            ref={middleCardRef}
          >
            {/* Middle Card Heading ABOVE the model */}
            <div className="mt-7 text-center">
              <h3
                className={`text-4xl ${BebasNeue.className}`}
                style={{ color: "#faf8f4" }}
              >
                We&apos;ve Reinvented the wheel
              </h3>
            </div>
            <figure style={{ margin: 0 }}>
              <model-viewer
                ref={modelViewerRef}
                src="Models/fulltire.glb"
                ar
                ar-modes="webxr scene-viewer quick-look"
                tone-mapping="commerce"
                poster="poster.webp"
                shadow-intensity="1"
                camera-orbit="-20deg 110deg"
                animation-name="Dance"
                style={{
                  width: "100%",
                  height: "500px",
                  borderRadius: "16px 16px 0 0",
                  background: "none",
                }}
                interaction-policy="none"
              >
                <div className="progress-bar hide" slot="progress-bar">
                  <div className="update-bar"></div>
                </div>
                <button slot="ar-button" id="ar-button">
                  View in your space
                </button>
                <div id="ar-prompt"></div>
              </model-viewer>
            </figure>
            {/* Middle Card Subheading BELOW the model */}
            <div className=" text-center">
              <p
                className={`${SourceSans.className}`}
                style={{ color: "#faf8f4" }}
              >
                With lightweight materials and enhanced traction, they&apos;re
                built for commuters, students, and city explorers who want
                durability without compromise. This is more than a new tire.
                It&apos;s a new standard in micromobility.
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="group relative flex flex-col w-full h-[600px] rounded-xl overflow-hidden hover:shadow-lg transition bg-transparent">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              src="/hub.png"
              alt="Right Tire Image"
              width={600}
              height={600}
            />
            <div className="relative z-10 p-4 md:p-6 flex-auto">
              <h3
                className={`text-5xl ${BebasNeue.className}`}
                style={{ color: "#333544" }}
              >
                Reengineered Spokes
              </h3>
              <p
                className={`mt-3 ${SourceSans.className}`}
                style={{ color: "#333544" }}
              >
                Structural strength that folds with you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "80px" }}></div>
    </div>
  );
};

export default TheTire;
