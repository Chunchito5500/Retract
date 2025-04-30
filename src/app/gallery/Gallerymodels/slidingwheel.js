"use client";

import React, { useEffect, useRef, useState } from "react";

export function SlidingWheelCard() {
  const modelViewerRef = useRef(null);
  const [totalAnimationDuration, setTotalAnimationDuration] = useState(3.99); // Default duration
  const [sliderValue, setSliderValue] = useState(0); // Default slider value

  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  useEffect(() => {
    const modelViewer = modelViewerRef.current;

    const handleModelLoad = () => {
      modelViewer?.setAttribute("animation-play", "paused");
      const animation = modelViewer?.getAnimations()[0];

      if (animation && animation.effect) {
        const duration = animation.effect.getTiming().duration;
        setTotalAnimationDuration(duration);
      }
    };

    modelViewer?.addEventListener("load", handleModelLoad);

    return () => {
      modelViewer?.removeEventListener("load", handleModelLoad);
    };
  }, []);

  const updateAnimationTime = (event) => {
    const modelViewer = modelViewerRef.current;
    if (!modelViewer || !totalAnimationDuration) return;

    const newTime = parseFloat(event.target.value);
    setSliderValue(newTime);
    modelViewer.currentTime = newTime;
  };

  return (
    <div
      className="card-wrapper"
      style={{
        maxWidth: "480px", // Maximum width for larger screens
        backgroundColor: "#dbe4ec",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px", // Rounded edges
        overflow: "hidden", // Ensures no overflow
        margin: "20px auto", // Centers the card
        boxSizing: "border-box",
        flexShrink: 0, // Prevents the card from shrinking below content size
      }}
    >
      <figure style={{ margin: 0 }}>
        <model-viewer
          ref={modelViewerRef}
          src="Models/fulltire.glb" // Hard-coded model path
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          tone-mapping="commerce"
          poster="poster.webp"
          shadow-intensity="1"
          camera-orbit="-20deg 110deg"
          animation-name="Dance"
          style={{
            width: "100%",
            height: "500px", // Fixed height for model-viewer
            borderRadius: "16px 16px 0 0", // Rounded top edges for model-viewer
          }}
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
      <div className="mt-4 px-4">
        <label htmlFor="animation-slider" className="text-sm text-gray-700">
          Slide to animate model!
        </label>
        <input
          id="animation-slider"
          type="range"
          min="0"
          max={totalAnimationDuration}
          step="0.01"
          value={sliderValue}
          className="w-full"
          onChange={updateAnimationTime}
        />
      </div>
      <div
        className="card-body"
        style={{
          backgroundColor: "#456990",
          padding: "20px",
          borderRadius: "0 0 16px 16px", // Rounded bottom edges for card-body
          boxSizing: "border-box", // Ensures padding doesn't overflow the card
        }}
      >
        <h2 className="card-title font-raleway text-white">
          The Retractability Bicycle Wheel:
        </h2>
        <p className="font-raleway text-white">
          Reinventing the wheel. Literally!
        </p>
        <p className="font-raleway text-white">
          With Retractability&apos;s take on the bicycle wheel, our airless
          tires allow users to maintain the traditional bike feel, without the
          fear of popping tires.
        </p>
        <p className="mt-1/2 text-sm font-raleway text-[#afafaf]">
          <b>Pat. Pend.</b>
        </p>
      </div>
    </div>
  );
}
