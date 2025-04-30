// File: src/app/pioneer/components/model.js

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ImShrink } from "react-icons/im";
import styles from "./Explore.module.css";
import localFont from "next/font/local";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});
const SourceSans = localFont({
  src: "../../fonts/SourceSans3-Regular.ttf",
});

export default function Pioneer() {
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

  const [currentModel, setCurrentModel] = useState(models[0]);
  const [isFolded, setIsFolded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  const handleModelChange = (model) => {
    const index = models.indexOf(model);
    setCurrentModel(isFolded ? foldedModels[index] : model);
  };

  const handleSwapClick = () => {
    setIsFolded((prev) => {
      const newFolded = !prev;
      setCurrentModel((prevModel) => {
        const currentIndex = models.findIndex((m) =>
          prevModel.includes(m.split("/")[1].split(" ")[0])
        );
        return newFolded ? foldedModels[currentIndex] : models[currentIndex];
      });
      return newFolded;
    });
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl text-center mx-auto">
          <h1
            className={`block text-5xl font-bold text-white ${BebasNeue.className}`}
          >
            A closer <span className="text-blue-600">look</span>
          </h1>
          <p className={`mt-3 text-lg text-white ${SourceSans.className}`}>
            View the Pioneer in 3D and see how it works!
          </p>
        </div>

        <div className="relative z-0 mt-10 max-w-5xl mx-auto">
          <div className="relative w-full h-[24rem] sm:h-[30rem] border border-gray-300 rounded-xl overflow-hidden shadow-sm">
            <model-viewer
              src={currentModel}
              ar
              ar-modes="webxr scene-viewer quick-look"
              camera-controls
              tone-mapping="commerce"
              poster="poster.webp"
              shadow-intensity="0"
              autoplay
              style={{
                background: "#030306",
                width: "100%",
                height: "100%",
                borderRadius: "0.75rem",
              }}
            />

            {/* Swap Button */}
            <label
              style={{
                border: "3px solid #D0D0D0",
                borderRadius: "6px",
              }}
              className="absolute top-4 left-4 swap swap-rotate bg-white p-4 border-[white] cursor-pointer hover:bg-gray-100 border-2 shadow-md"
            >
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

            {/* Shrink Button */}
          </div>
          {/* Radio Color Selectors */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <input
              type="radio"
              name="bike-color"
              checked={currentModel.includes("Orange")}
              onChange={() => handleModelChange(models[0])}
              className="radio bg-orange-100 border-orange-300 checked:bg-orange-200 checked:text-orange-600 checked:border-orange-600"
            />
            <input
              type="radio"
              name="bike-color"
              checked={currentModel.includes("Gray")}
              onChange={() => handleModelChange(models[1])}
              className="radio bg-gray-100 border-gray-300 checked:bg-gray-300 checked:text-gray-600 checked:border-gray-600"
            />
            <input
              type="radio"
              name="bike-color"
              checked={currentModel.includes("Purple")}
              onChange={() => handleModelChange(models[2])}
              className="radio bg-purple-100 border-purple-300 checked:bg-purple-200 checked:text-purple-600 checked:border-purple-600"
            />
          </div>
          {/* Decorative shapes closer */}

          <div className="absolute bottom-[6rem] left-[-4rem] z-[-1] size-72 bg-gradient-to-b from-orange-500 to-[#030306] p-px rounded-lg">
            <div className="bg-[#030306] size-72 rounded-lg"></div>
          </div>
          <div className="absolute top-[-3rem] right-[-5rem] z-[-1] size-40 bg-gradient-to-t from-purple-600 to-purple-400 p-px rounded-full">
            <div className="bg-[#030306] size-40 rounded-full"></div>
          </div>
        </div>
        <div style={{ height: "50px" }}></div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/gallery"
            className="flex items-center gap-x-1.5 text-m text-white hover:text-neutral-300"
          >
            <span
              className={`hoverUnderlineAnimation center text-xl ${SourceSans.className}`}
            >
              Explore the gallery
            </span>
            <IoIosArrowForward />
          </Link>
        </div>
        {/* Decorative Elements */}
        <div style={{ height: "70px" }}></div>
      </div>
    </div>
  );
}
