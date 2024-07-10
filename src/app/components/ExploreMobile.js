"use client";

import React, { useState, useEffect, useRef } from "react";
import { MdPedalBike } from "react-icons/md";
import { IoAlertCircleOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import styles from './Explore.module.css'; // Import the custom CSS module

export default function ExploreMobile() {
  const models = [
    "Models/Orange Unfolded.glb",
    "Models/Gray Unfolded.glb",
    "Models/Purple Unfolded.glb",
  ];

  const foldedModels = [
    "Models/Orange Folded.glb",
    "Models/Gray Folded.glb",
    "Models/Purple Folded.glb",
  ];

  const [email, setEmail] = useState("");
  const [currentModel, setCurrentModel] = useState(models[0]);
  const [isFolded, setIsFolded] = useState(false);
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

  const handleModelChange = (model) => {
    setCurrentModel(isFolded ? foldedModels[models.indexOf(model)] : model);
  };

  const handleSwapClick = () => {
    setIsFolded((prevFolded) => {
      const newFolded = !prevFolded;
      setCurrentModel((prevModel) => {
        const currentIndex = models.findIndex((m) =>
          prevModel.includes(m.split("/")[1].split(" ")[0])
        );
        return newFolded ? foldedModels[currentIndex] : models[currentIndex];
      });
      return newFolded;
    });
  };

  return (
    <div>
      <section id="middle" className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <label className="swap swap-rotate relative bg-[#82a0bc] p-4 border-white cursor-pointer hover:bg-[#7790ab] border-2">
              <input
                type="checkbox"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onClick={handleSwapClick}
              />
              <div className={`swap-on ${styles.foldedBike}`}>
                <Image
                  src="/foldedbike.svg"
                  alt="Folded Bike"
                  width={40}
                  height={40}
                />
              </div>
              <div className={`swap-off ${styles.unfoldedBike}`}>
                <Image
                  src="/unfoldedbike.svg"
                  alt="Unfolded Bike"
                  width={40}
                  height={40}
                />
              </div>
            </label>
            <model-viewer
              src={`/${currentModel}`}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="0"
              autoplay
              style={{ width: "300px", height: "250px", border: "2px solid #9bc1bc", borderRadius: "12px" }}
              className="transition-opacity duration-500"
            />
            <div className="flex items-center justify-center gap-6">
              <input
                type="radio"
                name="radio-model"
                className="radio checked:bg-[#eb8258]"
                checked={currentModel && currentModel.includes("Orange")}
                onChange={() => handleModelChange(models[0])}
              />
              <input
                type="radio"
                name="radio-model"
                className="radio checked:bg-[#8d918d]"
                checked={currentModel && currentModel.includes("Gray")}
                onChange={() => handleModelChange(models[1])}
              />
              <input
                type="radio"
                name="radio-model"
                className="radio checked:bg-[#7F71BF]"
                checked={currentModel && currentModel.includes("Purple")}
                onChange={() => handleModelChange(models[2])}
              />
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
                <div className="flex items-start">
                  <div className="tooltip tooltip-right" data-tip="These are 3D renders of bike models that are not yet in production but are planned for the near future.">
                    <IoAlertCircleOutline className="text-red-200" size={32} />
                    
                  </div>
                </div>
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
