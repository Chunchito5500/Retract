"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";

if (typeof window !== "undefined") {
  // Suppress just the GLTFLoader blob-URL warnings
  const _orig = console.error;
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].startsWith("THREE.GLTFLoader: Couldn't load texture")
    ) {
      return;
    }
    _orig(...args);
  };
}

// Fonts
const BebasNeue = localFont({ src: "../../../fonts/BebasNeue-Regular.ttf" });
const Roboto = localFont({ src: "../../../fonts/Roboto-Regular.ttf" });

const scrollSpeedMultiplier = 2;

// Type for model viewer element - use intersection type
type ModelViewerElement = HTMLElement & {
  currentTime?: number;
};

// Override createImageBitmap to force TextureLoader path
declare global {
  interface Window {
    createImageBitmap?: unknown;
  }
}

interface ModelViewerProps {
  children?: React.ReactNode;
  [key: string]: unknown;
}

// Type for animation with custom properties
interface ModelViewerAnimation {
  effect?: {
    getTiming: () => { duration: number };
  };
}

// Dynamically load the web component on client only
const ModelViewer = dynamic(
  async () => {
    if (typeof window !== "undefined") {
      // @ts-expect-error - Temporarily disable createImageBitmap for model-viewer compatibility
      window.createImageBitmap = undefined;
      await import("@google/model-viewer");
    }
    // Return a React wrapper
    const ModelViewerComponent = ({ children, ...props }: ModelViewerProps) =>
      React.createElement("model-viewer", props, children);

    ModelViewerComponent.displayName = "ModelViewer";
    return ModelViewerComponent;
  },
  { ssr: false }
);

const TheTire: React.FC = () => {
  const modelViewerRef = useRef<ModelViewerElement>(null);
  const middleCardRef = useRef<HTMLDivElement>(null);
  const [totalAnimationDuration, setTotalAnimationDuration] = useState(3.99);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  // detect when web component is defined
  useEffect(() => {
    if (customElements.get("model-viewer")) {
      setIsModelLoaded(true);
    } else {
      const handleDef = () => setIsModelLoaded(true);
      customElements.whenDefined("model-viewer").then(handleDef);
    }
  }, []);

  // capture animation duration
  useEffect(() => {
    if (!isModelLoaded) return;
    const mv = modelViewerRef.current;
    const onLoad = () => {
      if (mv) {
        mv.setAttribute("animation-play", "paused");
        const anims = mv.getAnimations?.() || [];
        const anim = anims[0] as ModelViewerAnimation;
        const timing = anim?.effect?.getTiming();
        const dur = timing?.duration;
        if (typeof dur === "number") {
          setTotalAnimationDuration(dur);
        }
      }
    };
    mv?.addEventListener("load", onLoad);
    return () => mv?.removeEventListener("load", onLoad);
  }, [isModelLoaded]);

  // scroll-driven animation
  useEffect(() => {
    const onScroll = () => {
      const card = middleCardRef.current;
      const mv = modelViewerRef.current;
      if (card && mv && isModelLoaded) {
        const rect = card.getBoundingClientRect();
        const raw =
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const progress = Math.min(Math.max(raw * scrollSpeedMultiplier, 0), 1);
        if (typeof mv.currentTime !== "undefined") {
          mv.currentTime = progress * totalAnimationDuration;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [totalAnimationDuration, isModelLoaded]);

  return (
    <div className="relative">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2
            className={`text-xl font-bold md:text-2xl md:leading-tight text-white/80 ${Roboto.className}`}
          >
            A closer look at
          </h2>
          <h1
            className={`block text-6xl font-bold text-[#faf8f4] mb-4 ${BebasNeue.className}`}
          >
            our{" "}
            <span className="bg-gradient-to-r from-[#f18311] to-[#ffb627] bg-clip-text text-transparent">
              Tire
            </span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="group border-2 border-[#faf8f4]/20 rounded-3xl p-6 hover:border-[#faf8f4]/40 transition-colors duration-300">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
              <Image
                src="/thetire/tire.jpeg"
                alt="Airless tire technology"
                width={600}
                height={400}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="space-y-4">
              <h3
                className={`text-3xl md:text-4xl font-bold text-[#ccc5b9] ${BebasNeue.className}`}
              >
                Airless Tires
              </h3>
              <p
                className={`text-[#faf8f4]/90 text-lg leading-relaxed ${Roboto.className}`}
              >
                No more flats. No more patch kits. Just pure ride-time. Our
                revolutionary airless design eliminates the most common bike
                maintenance issue.
              </p>
            </div>
          </div>

          <div className="group lg:col-span-1" ref={middleCardRef}>
            <div className="text-center mb-8">
              <h3
                className={`text-3xl md:text-4xl font-bold text-[#faf8f4] leading-tight ${BebasNeue.className}`}
              >
                We&apos;ve Reinvented the Wheel
              </h3>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              {isModelLoaded ? (
                <ModelViewer
                  ref={modelViewerRef}
                  src="/Models/fulltire.glb"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  tone-mapping="commerce"
                  poster="/thetire/poster.webp"
                  shadow-intensity="1"
                  camera-orbit="-20deg 110deg"
                  animation-name="Dance"
                  style={{
                    width: "100%",
                    height: "450px",
                    background: "transparent",
                  }}
                  interaction-policy="none"
                >
                  <div className="progress-bar hide" slot="progress-bar">
                    <div className="update-bar" />
                  </div>
                  <button
                    slot="ar-button"
                    id="ar-button"
                    className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  >
                    View in AR
                  </button>
                  <div id="ar-prompt" />
                </ModelViewer>
              ) : (
                <div className="flex items-center justify-center h-[450px]">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4" />
                    <p className={`text-[#faf8f4]/70 ${Roboto.className}`}>
                      Loading 3D Model...
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-8 text-center max-w-md mx-auto">
              <p
                className={`text-[#faf8f4]/80 text-base leading-relaxed ${Roboto.className}`}
              >
                Built with lightweight materials and enhanced traction for
                commuters, students, and city explorers who demand durability
                without compromise.
              </p>
            </div>
          </div>

          <div className="group border-2 border-[#faf8f4]/20 rounded-3xl p-6 hover:border-[#faf8f4]/40 transition-colors duration-300">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-gray-200 to-gray-300">
              <Image
                src="/thetire/spoke.jpeg"
                alt="Reengineered spokes design"
                width={600}
                height={400}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            </div>
            <div className="space-y-4">
              <h3
                className={`text-3xl md:text-4xl font-bold text-[#ccc5b9] ${BebasNeue.className}`}
              >
                Reengineered Spokes
              </h3>
              <p
                className={`text-[#faf8f4]/90 text-lg leading-relaxed ${Roboto.className}`}
              >
                Structural strength that folds with you. Our innovative spoke
                design maintains wheel integrity while enabling seamless folding
                mechanics.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p
            className={`text-xl md:text-2xl text-white font-light ${Roboto.className}`}
          >
            This is more than just a new tire, it&apos;s a new standard.
          </p>
        </div>
      </div>
      <div style={{ height: "80px" }} />
    </div>
  );
};

export default TheTire;
