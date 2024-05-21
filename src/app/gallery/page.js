"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Script from "next/script";

export default function Gallery() {
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
        <title>Gallery</title>
        <meta name="Model Gallery" content="Look at our 3D Models." />
      </Head>
      <Navbar />

      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-4 lg:py-2 px-2 mx-auto max-w-screen-md">
            <div className="pt-20 lg:pt-24 px-2 mx-auto max-w-screen-md"></div>
            <h2 className="mb-16 text-4xl tracking-tight font-extrabold text-center text-[#ed6a5a]">
              View our Gallery
            </h2>
          </div>
        </section>
      </div>
      {/* Products */}
      {/* Row1 */}
      <div className="bg-[#e6ebe0]">
        <div
          className="bg-white dark:bg-gray-900"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            paddingBottom: "60px", // This acts as the space between the rows
          }}
        >
          {/* Product1 */}
          <div className="bg-[#e6ebe0]">
            <div
              className="box"
              style={{
                width: "480px",
                height: "680px",
                backgroundColor: "#DAD7CE",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <figure>
                <model-viewer
                  src="tire folded 1.glb"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  tone-mapping="commerce"
                  poster="poster.webp"
                  shadow-intensity="1"
                  autoplay
                  camera-orbit="-20deg 110deg"
                  style={{
                    width: "100%",
                    height: "500px",
                    border: "2px solid #5ca4a9",
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
                  backgroundColor: "#5ca4a9",
                }}
              >
                <h2 className="card-title font-sans">
                  The Retractability Bicycle Wheel:
                </h2>
                <p className="font-sans">Reinventing the wheel. Literally! </p>
                <p className="font-serif">
                  {" "}
                  With Retractability&apos;s take on the bicyle wheel, our
                  airless tires allow users to maintain the traditional bike
                  feel, without the fear of popping tires.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          {/* Product2 */}
          <div className="bg-[#e6ebe0]">
            <div
              className="box"
              style={{
                width: "480px",
                height: "680px",
                backgroundColor: "#DAD7CE",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <figure>
                <model-viewer
                  src="bike unfolded 1.glb"
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
                    height: "500px",
                    border: "2px solid #5ca4a9",
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
                  backgroundColor: "#5ca4a9",
                }}
              >
                <h2 className="card-title font-sans">
                  The Retractability Bicycle:
                </h2>
                <p className="font-sans">
                  Traditional Bikes, with a Compact Design
                </p>
                <p className="font-serif">
                  {" "}
                  Retractability Bicycles offer a breath of fresh air to the
                  foldable biking industry. Our bikes are designed to be
                  durable, efficient, and the next step in biking.
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .box {
            width: 100%;
            height: auto;
          }

          model-viewer {
            width: 100%;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
