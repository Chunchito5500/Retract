"use client";

import React, { useEffect, useRef, useState } from "react";

// Type definition for model-viewer element - use intersection type instead of extends
type ModelViewerElement = HTMLElement & {
  currentTime: number;
};

// Type for the animation object returned by model-viewer
interface ModelViewerAnimation {
  effect?: {
    getTiming: () => { duration: number };
  };
}

export function SlidingWheelCard() {
  const modelViewerRef = useRef<ModelViewerElement | null>(null);
  const [totalAnimationDuration, setTotalAnimationDuration] = useState(3.99);
  const [sliderValue, setSliderValue] = useState(0);

  // lazy-load the model-viewer polyfill
  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  // pause on load & read its duration
  useEffect(() => {
    const mv = modelViewerRef.current;
    if (!mv) return;

    const onLoad = () => {
      mv.setAttribute("animation-play", "paused");
      // Use the standard getAnimations method with proper typing
      const animations = mv.getAnimations();
      const anim = animations?.[0] as ModelViewerAnimation;
      if (anim?.effect?.getTiming) {
        setTotalAnimationDuration(anim.effect.getTiming().duration);
      }
    };

    mv.addEventListener("load", onLoad);
    return () => mv.removeEventListener("load", onLoad);
  }, []);

  // slider handler
  const updateAnimationTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mv = modelViewerRef.current;
    if (!mv) return;

    const t = parseFloat(e.target.value);
    setSliderValue(t);
    mv.currentTime = t;
  };

  return (
    <div
      className="card-wrapper group hover:scale-105 transition-all duration-500 ease-out"
      style={{
        width: "100%",
        maxWidth: 480,
        background: `
          linear-gradient(145deg, 
            rgba(237, 246, 249, 0.95) 0%,
            rgba(211, 217, 224, 0.98) 30%,
            rgba(213, 228, 230, 0.99) 70%,
            rgba(234, 241, 248, 1) 100%
          ),
          linear-gradient(135deg, 
            rgba(237, 246, 249, 0.3) 0%,
            rgba(171, 196, 223, 0.5) 100%
          )
        `,
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(143, 190, 240, 0.4)",
        boxShadow: `
          0 8px 32px rgba(169, 201, 236, 0.3),
          0 0 0 1px rgba(146, 185, 226, 0.2),
          inset 0 1px 0 rgba(230, 214, 214, 0.2)
        `,
        borderRadius: 20,
        overflow: "hidden",
        margin: "auto",
        position: "relative",
      }}
    >
      {/* Animated border glow */}
      <div 
        className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(90deg, 
            transparent, 
            rgba(69, 105, 144, 0.6), 
            transparent
          )`,
          backgroundSize: "200% 100%",
          animation: "shimmer 2s infinite",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
          padding: "2px",
        }}
      />

      <figure style={{ margin: 0, position: "relative" }}>
        {/* Holographic overlay */}
        <div 
          className="absolute inset-0 z-10 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(45deg, 
                transparent 30%, 
                rgba(69, 105, 144, 0.2) 50%, 
                transparent 70%
              )
            `,
            backgroundSize: "200% 200%",
            animation: "hologram 3s ease-in-out infinite",
          }}
        />
        
        {/* @ts-expect-error model-viewer is a custom element */}
        <model-viewer
          ref={modelViewerRef}
          src="/Models/fulltire.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          tone-mapping="commerce"
          poster="/poster.webp"
          shadow-intensity={1}
          camera-orbit="-20deg 110deg"
          animation-name="Dance"
          style={{
            width: "100%",
            height: 500,
            borderRadius: "20px 20px 0 0",
            filter: "contrast(1.1) saturate(1.2)",
            backgroundColor: "transparent",
            background: "transparent",
          }}
        >
          <div className="progress-bar hide" slot="progress-bar">
            <div className="update-bar" />
          </div>
          <button 
            slot="ar-button" 
            id="ar-button"
            style={{
              background: "linear-gradient(135deg, #456990, #83C5BE)",
              border: "1px solid rgba(69, 105, 144, 0.6)",
              borderRadius: "12px",
              padding: "12px 24px",
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 16px rgba(69, 105, 144, 0.4)",
              transition: "all 0.3s ease",
            }}
          >
            View in your space
          </button>
          <div id="ar-prompt" />
          {/* @ts-expect-error model-viewer is a custom element */}
        </model-viewer>
      </figure>

      {/* Animation slider section */}
      <div 
        className="px-6 py-4 relative"
        style={{
          background: `
            linear-gradient(145deg, 
              rgba(211, 217, 224, 0.7) 0%,
              rgba(171, 196, 223, 0.8) 100%
            )
          `,
          backdropFilter: "blur(15px)",
          borderTop: "1px solid rgba(69, 105, 144, 0.2)",
          borderBottom: "1px solid rgba(69, 105, 144, 0.2)",
        }}
      >
        <label 
          htmlFor="animation-slider" 
          className="block text-sm font-raleway font-semibold mb-2"
          style={{
            color: "rgba(69, 105, 144, 0.9)",
            textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
          }}
        >
          Slide to animate model!
        </label>
        <input
          id="animation-slider"
          type="range"
          min={0}
          max={totalAnimationDuration}
          step={0.01}
          value={sliderValue}
          onChange={updateAnimationTime}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, 
              rgba(69, 105, 144, 0.6) 0%, 
              rgba(69, 105, 144, 0.6) ${(sliderValue / totalAnimationDuration) * 100}%, 
              rgba(171, 196, 223, 0.4) ${(sliderValue / totalAnimationDuration) * 100}%, 
              rgba(171, 196, 223, 0.4) 100%
            )`,
            outline: "none",
            boxShadow: "inset 0 1px 3px rgba(69, 105, 144, 0.3)",
          }}
        />
      </div>

      <div
        className="card-body relative"
        style={{
          background: `
            linear-gradient(145deg, 
              rgba(115, 146, 155, 0.95) 0%,
              rgba(69, 105, 144, 0.9) 30%,
              rgba(0, 109, 119, 0.85) 70%,
              rgba(52, 79, 108, 0.8) 100%
            )
          `,
          backdropFilter: "blur(20px)",
          padding: 24,
          borderRadius: "0 0 20px 20px",
          borderTop: "1px solid rgba(69, 105, 144, 0.4)",
        }}
      >
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(237, 246, 249, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(237, 246, 249, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
        
        <div className="relative z-10">
          <h2 
            className="card-title font-raleway text-white text-xl font-bold mb-3"
            style={{
              textShadow: "0 2px 4px rgba(69, 105, 144, 0.8)",
            }}
          >
            The Retractability Bicycle Wheel:
          </h2>
          
          <p 
            className="font-raleway text-gray-100 mb-4 text-lg font-medium"
            style={{
              textShadow: "0 2px 8px rgba(69, 105, 144, 0.6)",
            }}
          >
            Reinventing the wheel. Literally!
          </p>
          
          <p 
            className="font-raleway text-gray-200 mb-4 leading-relaxed"
            style={{
              textShadow: "0 1px 4px rgba(69, 105, 144, 0.6)",
            }}
          >
            With Retractability&apos;s take on the bicycle wheel, our airless tires
            allow users to maintain the traditional bike feel, without the fear
            of popping tires.
          </p>
          
          <div 
            className="inline-flex items-center px-3 py-1 rounded-full"
            style={{
              background: "rgba(69, 105, 144, 0.4)",
              border: "1px solid rgba(237, 246, 249, 0.5)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p className="text-sm font-raleway text-gray-100 font-semibold">
              <b>Pat. Pend.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}