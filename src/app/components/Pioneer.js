import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoAlertCircleOutline } from "react-icons/io5";
import Image from "next/image";
import { ImShrink, ImEnlarge } from "react-icons/im";
import styles from "./Explore.module.css";

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

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <section id="middle">
        {/* Default Mode */}
        {!isExpanded && (
          <div
            id="default"
            className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="bg-[#1d263b] shadow-lg rounded-lg p-6 md:p-10 border transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                {/* Text Side */}
                <div className="transition-opacity duration-500 opacity-100">
                  <h1 className="block text-3xl font-raleway sm:text-4xl lg:text-6xl lg:leading-tight text-white">
                    The Retractability Pioneer
                  </h1>
                  <p className="mt-3 text-3xl font-raleway text-[#A0A0A0]">
                    <i>Pioneering the Future of Foldable Bikes</i>
                  </p>
                  <p className="mt-5 text-2xl font-raleway font-medium text-gray-400 dark:text-gray-400">
                    Our innovative design blends the convenience of folding with
                    the excellence of a traditional bike. Unlike other foldable
                    bikes, the Retractability Pioneer offers unparalleled
                    portability without compromising on ride quality, stability,
                    or size. Discover the next generation of bicycles, setting
                    new standards and advancing the industry.
                  </p>
                  <h3 className="mt-6 text-lg font-raleway text-blue-500 flex items-center">
                    Release Date: January 2025
                    <span
                      className="tooltip tooltip-right"
                      data-tip="These are 3D renders of bike models that are not yet in production but are planned for the near future."
                    >
                      <IoAlertCircleOutline
                        className="text-red-200"
                        size={32}
                      />
                    </span>
                  </h3>
                  <p className="mt-1/2 text-sm font-raleway text-[#A0A0A0]">
                    <b>Pat. Pend.</b>
                  </p>
                  <div className="mt-6">
                    <Link href="/quark" passHref>
                      <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text font-raleway">
                          Learn More
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Model Viewer Side */}
                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <label
                      style={{
                        border: "3px solid #D0D0D0",
                        borderRadius: "6px",
                      }}
                      className="swap swap-rotate relative bg-[#82a0bc] p-4 border-[white] cursor-pointer hover:bg-[#8da9c2] border-2"
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
                  </div>

                  {/* Model Viewer */}
                  <div className="relative text-center">
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
                        width: "100%",
                        height: "100%",
                        aspectRatio: "4 / 3",
                        border: "2px solid #A0A0A0",
                        borderRadius: "12px",
                      }}
                      className="transition-all duration-500"
                    />
                    <button
                      onClick={toggleExpand}
                      className="absolute top-4 right-4 text-white bg-gray-700 rounded-full p-2"
                    >
                      <ImEnlarge size={24} />
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-4 lg:gap-10 mt-4">
                    <button
                      type="button"
                      className={`btn p-6 rounded ${
                        currentModel.includes("Orange")
                          ? "bg-[#be593d]"
                          : "bg-[#ed8d67]"
                      } hover:bg-[#cf7755]`}
                      style={{
                        border: "3px solid #1F1F1F",
                        borderRadius: currentModel.includes("Orange")
                          ? "20px"
                          : "8px",
                        width: "1vw",
                        maxWidth: "100px",
                      }}
                      onClick={() => handleModelChange(models[0])}
                    ></button>

                    <button
                      type="button"
                      className={`btn p-6 rounded ${
                        currentModel.includes("Gray")
                          ? "bg-[#6f736f]"
                          : "bg-[#8d918d]"
                      } hover:bg-[#808480]`}
                      style={{
                        border: "3px solid #1F1F1F",
                        borderRadius: currentModel.includes("Gray")
                          ? "20px"
                          : "8px",
                        width: "1vw",
                        maxWidth: "100px",
                      }}
                      onClick={() => handleModelChange(models[1])}
                    ></button>

                    <button
                      type="button"
                      className={`btn p-6 rounded ${
                        currentModel.includes("Purple")
                          ? "bg-[#563a89]"
                          : "bg-[#7f71bf]"
                      } hover:bg-[#7367ae]`}
                      style={{
                        border: "3px solid #1F1F1F",
                        borderRadius: currentModel.includes("Purple")
                          ? "20px"
                          : "8px",
                        width: "1vw",
                        maxWidth: "100px",
                      }}
                      onClick={() => handleModelChange(models[2])}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Model Only Mode */}
        {isExpanded && (
          <div
            id="modelonlymode"
            className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="bg-[#1d263b] shadow-lg rounded-lg p-6 md:p-10 border transition-all duration-500 relative">
              <div className="relative text-center">
                {/* Expanded Model Viewer */}
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
                    width: "100%",
                    height: "100%",
                    aspectRatio: "4 / 3",
                    border: "2px solid #A0A0A0",
                    borderRadius: "12px",
                  }}
                  className="transition-all duration-500"
                />
                <button
                  onClick={toggleExpand}
                  className="absolute top-4 right-4 text-white bg-gray-700 rounded-full p-2"
                >
                  <ImShrink size={24} />
                </button>
                <label
                  style={{
                    border: "3px solid #D0D0D0",
                    borderRadius: "6px",
                  }}
                  className="absolute top-4 left-4 swap swap-rotate bg-[#82a0bc] p-4 border-[white] cursor-pointer hover:bg-[#8da9c2] border-2"
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
              </div>

              {/* Color Selector Buttons */}
              <div className="flex items-center justify-center gap-4 lg:gap-10 mt-4">
                <button
                  type="button"
                  className={`btn p-6 rounded ${
                    currentModel.includes("Orange")
                      ? "bg-[#be593d]"
                      : "bg-[#ed8d67]"
                  } hover:bg-[#cf7755]`}
                  style={{
                    border: "3px solid #1F1F1F",
                    borderRadius: currentModel.includes("Orange")
                      ? "20px"
                      : "8px",
                    width: "1vw",
                    maxWidth: "100px",
                  }}
                  onClick={() => handleModelChange(models[0])}
                ></button>

                <button
                  type="button"
                  className={`btn p-6 rounded ${
                    currentModel.includes("Gray")
                      ? "bg-[#6f736f]"
                      : "bg-[#8d918d]"
                  } hover:bg-[#808480]`}
                  style={{
                    border: "3px solid #1F1F1F",
                    borderRadius: currentModel.includes("Gray")
                      ? "20px"
                      : "8px",
                    width: "1vw",
                    maxWidth: "100px",
                  }}
                  onClick={() => handleModelChange(models[1])}
                ></button>

                <button
                  type="button"
                  className={`btn p-6 rounded ${
                    currentModel.includes("Purple")
                      ? "bg-[#563a89]"
                      : "bg-[#7f71bf]"
                  } hover:bg-[#7367ae]`}
                  style={{
                    border: "3px solid #1F1F1F",
                    borderRadius: currentModel.includes("Purple")
                      ? "20px"
                      : "8px",
                    width: "1vw",
                    maxWidth: "100px",
                  }}
                  onClick={() => handleModelChange(models[2])}
                ></button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
