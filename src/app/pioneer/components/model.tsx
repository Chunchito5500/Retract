import React, { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const BebasNeue = localFont({
  src: "../../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../../fonts/Roboto-Regular.ttf",
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Suppress GLTFLoader blob-URL warnings
      const _orig = console.error;
      console.error = (...args: unknown[]) => {
        if (
          typeof args[0] === 'string' &&
          args[0].startsWith("THREE.GLTFLoader: Couldn't load texture")
        ) {
          return;
        }
        _orig(...args);
      };

      // Load model-viewer if not already loaded
      if (!customElements.get("model-viewer")) {
        import("@google/model-viewer");
      }
    }
  }, []);

  const handleModelChange = (model: string) => {
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

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl text-center mx-auto mb-16">
          <h1
            className={`block text-6xl font-bold text-white mb-4 ${BebasNeue.className}`}
          >
            A closer <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">look</span>
          </h1>
          <p className={`text-xl text-gray-200 ${Roboto.className}`}>
            View the Pioneer in 3D and see how it works!
          </p>
        </div>

        <div className="relative z-0 mt-10 max-w-5xl mx-auto">
          <div className="relative w-full h-[24rem] sm:h-[30rem] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-1">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-950 to-black">
              {/* @ts-expect-error model-viewer is a custom element */}
              <model-viewer
                src={currentModel}
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                tone-mapping="commerce"
                poster="poster.webp"
                shadow-intensity="0.3"
                autoplay
                style={{
                  background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)",
                  width: "100%",
                  height: "100%",
                  borderRadius: "1rem",
                }}
              />

              {/* Swap Button with Rotation Animation */}
              <button
                onClick={handleSwapClick}
                className="absolute top-4 left-4 p-4 bg-white hover:bg-gray-100 border-[3px] border-[#D0D0D0] rounded-lg transition-all shadow-md group"
                style={{ 
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  zIndex: 1000,
                  backgroundColor: "white",
                  cursor: "pointer",
                  padding: "16px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div 
                    className="absolute inset-0 transition-all duration-500 ease-in-out"
                    style={{
                      opacity: isFolded ? 1 : 0,
                      transform: isFolded ? 'rotate(0deg)' : 'rotate(180deg)'
                    }}
                  >
                    <Image
                      src="/pioneer/foldedbike.svg"
                      alt="Folded Bike"
                      width={32}
                      height={32}
                      className="w-full h-full"
                    />
                  </div>
                  <div 
                    className="absolute inset-0 transition-all duration-500 ease-in-out"
                    style={{
                      opacity: !isFolded ? 1 : 0,
                      transform: !isFolded ? 'rotate(0deg)' : 'rotate(-180deg)'
                    }}
                  >
                    <Image
                      src="/pioneer/unfoldedbike.svg"
                      alt="Unfolded Bike"
                      width={32}
                      height={32}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </button>

              {/* Shrink Button */}
            </div>
          </div>
          
          {/* Enhanced Radio Color Selectors */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <label className="relative cursor-pointer group">
              <input
                type="radio"
                name="bike-color"
                checked={currentModel.includes("Orange")}
                onChange={() => handleModelChange(models[0])}
                className="sr-only"
              />
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 transition-all duration-300 ${
                currentModel.includes("Orange") ? 'scale-110 ring-4 ring-orange-400/50' : 'hover:scale-105'
              } shadow-lg`}>
                {currentModel.includes("Orange") && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
            </label>
            
            <label className="relative cursor-pointer group">
              <input
                type="radio"
                name="bike-color"
                checked={currentModel.includes("Gray")}
                onChange={() => handleModelChange(models[1])}
                className="sr-only"
              />
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 transition-all duration-300 ${
                currentModel.includes("Gray") ? 'scale-110 ring-4 ring-gray-400/50' : 'hover:scale-105'
              } shadow-lg`}>
                {currentModel.includes("Gray") && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
            </label>
            
            <label className="relative cursor-pointer group">
              <input
                type="radio"
                name="bike-color"
                checked={currentModel.includes("Purple")}
                onChange={() => handleModelChange(models[2])}
                className="sr-only"
              />
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 transition-all duration-300 ${
                currentModel.includes("Purple") ? 'scale-110 ring-4 ring-purple-400/50' : 'hover:scale-105'
              } shadow-lg`}>
                {currentModel.includes("Purple") && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
            </label>
          </div>
          
          {/* Enhanced Decorative shapes */}
          <div className="absolute bottom-[6rem] left-[-4rem] z-[-1] w-72 h-72">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-orange-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-2xl"></div>
          </div>
          
          <div className="absolute top-[-3rem] right-[-5rem] z-[-1] w-48 h-48">
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/30 via-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full blur-2xl"></div>
          </div>
        </div>
        <div style={{ height: "50px" }}></div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/gallery"
            className="flex items-center gap-x-1.5 text-m text-white hover:text-neutral-300"
          >
            <span
              className={`hoverUnderlineAnimation center text-xl ${Roboto.className}`}
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