"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
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
      <style jsx>{`
        .card-wrapper {
          margin: 50px;
        }

        @media (max-width: 768px) {
          .box {
            width: 100% !important;
            height: auto !important;
          }
          .card-wrapper {
            flex-basis: 100%;
          }
        }
      `}</style>
      <div
        style={{
          background:
            "linear-gradient(to top, #111827, #12132c, #120d31, #302f4d, #4e425b)",
        }}
      >
        <div>
          <div className="py-4 lg:py-2 px-2 mx-auto max-w-screen-md">
            <div className="pt-20 lg:pt-24 px-2 mx-auto max-w-screen-md"></div>
            <h2 className="mb-16 text-4xl tracking-tight font-raleway text-center text-[#f6957d]">
              View our Gallery
            </h2>
          </div>
        </div>
        {/* Products */}
        <div
          className="flex-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            paddingBottom: "60px", // This acts as the space between the rows
            paddingTop: "30px",
          }}
        >
          {/* Product1 */}
          <div className="card-wrapper bg-[#e6ebe0]">
            <div
              className="box"
              style={{
                width: "480px",
                height: "680px",
                backgroundColor: "#dbe4ec",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <figure>
                <model-viewer
                  src="Models/tire folded 1.glb"
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
                    border: "2px solid #456990",
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
                }}
              >
                <h2 className="card-title font-raleway text-white">
                  The Retractability Bicycle Wheel:
                </h2>
                <p className="font-raleway text-white">
                  Reinventing the wheel. Literally!{" "}
                </p>
                <p className="font-raleway text-white">
                  {" "}
                  With Retractability&apos;s take on the bicycle wheel, our
                  airless tires allow users to maintain the traditional bike
                  feel, without the fear of popping tires.
                </p>
                <p className="mt-1/2 text-sm font-raleway text-[#afafaf]">
                  <b>Pat. Pend.</b>
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          {/* Product2 */}
          <div className="card-wrapper bg-[#e6ebe0]">
            <div
              className="box"
              style={{
                width: "480px",
                height: "680px",
                backgroundColor: "#dbe4ec",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <figure>
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
                    height: "500px",
                    border: "2px solid #456990",
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
                }}
              >
                <h2 className="card-title font-raleway text-white">
                  The Retractability Bicycle:
                </h2>
                <p className="font-raleway text-white">
                  Traditional Bikes, with a Compact Design
                </p>
                <p className="font-raleway text-white">
                  {" "}
                  Retractability Bicycles offer a breath of fresh air to the
                  foldable biking industry. Our bikes are designed to be
                  durable, efficient, and the next step in biking.
                </p>
                <p className="mt-1/2 text-sm font-raleway text-[#afafaf]">
                  <b>Pat. Pend.</b>
                </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "150px" }}></div>
        <Footer />
      </div>
    </div>
  );
}
