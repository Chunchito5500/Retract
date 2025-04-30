"use client";

import React, { useEffect } from "react";

export function RetractabilityBikeCard() {
  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  return (
    <div
      className="card-wrapper"
      style={{
        width: "100%", // Flexible width
        maxWidth: "480px", // Maximum width for larger screens
        backgroundColor: "#dbe4ec",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px", // Rounded edges
        overflow: "hidden",
        margin: "auto", // Centered alignment
      }}
    >
      <figure style={{ margin: 0 }}>
        <model-viewer
          src="Models/Blue Unfolded.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          tone-mapping="commerce"
          poster="poster.webp"
          shadow-intensity="1"
          autoplay
          camera-orbit=""
          style={{
            width: "100%",
            height: "500px", // Model viewer height
            borderRadius: "16px 16px 0 0", // Rounded top edges
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
      <div
        className="card-body"
        style={{
          backgroundColor: "#456990",
          padding: "20px",
          borderRadius: "0 0 16px 16px", // Rounded bottom edges
        }}
      >
        <h2 className="card-title font-raleway text-white">
          The Retractability Bicycle:
        </h2>
        <p className="font-raleway text-white">
          Traditional Bikes, with a Compact Design
        </p>
        <p className="font-raleway text-white">
          Retractability Bicycles offer a breath of fresh air to the foldable
          biking industry. Our bikes are designed to be durable, efficient, and
          the next step in biking.
        </p>
        <p className="mt-1/2 text-sm font-raleway text-[#afafaf]">
          <b>Pat. Pend.</b>
        </p>
      </div>
    </div>
  );
}
