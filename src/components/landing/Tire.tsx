"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoBuildOutline } from "react-icons/io5";
import { GiCartwheel } from "react-icons/gi";
import { LuCircleCheckBig } from "react-icons/lu";
import localFont from "next/font/local";

// Type for model-viewer element - use intersection type
type ModelViewerElement = HTMLElement & {
  currentTime: number;
};

// Type for animation with custom properties
interface ModelViewerAnimation {
  effect?: {
    getTiming: () => { duration: number };
  };
}

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
  display: "swap",
});

function Tire() {
  const modelViewerRef = useRef<ModelViewerElement>(null);
  const [totalAnimationDuration, setTotalAnimationDuration] = useState(3.999);
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
      const animations = mv.getAnimations();
      const anim = animations?.[0] as ModelViewerAnimation;
      if (anim?.effect) {
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
    <div className="w-screen min-h-screen relative -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Wave Background - covers entire viewport width */}
      <div className="absolute bg-white inset-0 w-full h-full">
        <div className="min-h-screen w-full bg-[#f8fafc] relative">
          {/* Top Fade Grid Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
          linear-gradient(to right, #e2e8f0 1px, transparent 1px),
          linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
        `,
              backgroundSize: "20px 30px",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            }}
          />

          {/* Cool Blue Glow Left */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
          radial-gradient(
            circle at top left,
            rgba(70, 130, 180, 0.5),
            transparent 70%
          )
        `,
              filter: "blur(80px)",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Your Content/Components */}
        </div>
      </div>

      {/* Content - positioned over the background */}
      <div className="relative z-10 w-full">
        {/* Header Section */}
        <div className="pt-12 pb-8 text-center px-4">
          <p
            className={`text-xl sm:text-2xl text-gray-600 uppercase tracking-wider mb-2 ${BebasNeue.className}`}
          >
            A closer look
          </p>
          <h1
            className={`block text-6xl font-bold text-black mb-4 ${BebasNeue.className}`}
          >
            At our{" "}
            <span className="bg-gradient-to-r from-[#f18311] to-[#ffb627] bg-clip-text text-transparent">
              Tire
            </span>
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 xl:gap-20 items-center">
              {/* Model Viewer Side - Left */}
              <div className="order-2 md:order-1">
                <div className="w-full max-w-md mx-auto bg-slate-700/30 backdrop-blur-md border border-slate-600/30 rounded-xl overflow-hidden">
                  <figure
                    style={{
                      margin: 0,
                      position: "relative",
                      backgroundColor: "rgba(58, 74, 92, 0.8)",
                    }}
                  >
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
                        height: 400,
                        backgroundColor: "transparent",
                      }}
                    >
                      <div className="progress-bar hide" slot="progress-bar">
                        <div className="update-bar" />
                      </div>
                      <button
                        slot="ar-button"
                        id="ar-button"
                        className="bg-slate-600/50 backdrop-blur-sm border border-slate-500/30 rounded-lg px-6 py-3 text-white font-semibold text-sm hover:bg-slate-600/70 transition-all"
                      >
                        View in your space
                      </button>
                      <div id="ar-prompt" />
                      {/* @ts-expect-error model-viewer is a custom element */}
                    </model-viewer>
                  </figure>

                  {/* Animation slider section */}
                  <div className="px-4 py-4 bg-slate-800/30 backdrop-blur-sm border-t border-slate-600/30">
                    <label
                      htmlFor="animation-slider"
                      className="block text-sm font-semibold mb-2 text-slate-200"
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
                      className="w-full h-2 bg-slate-600/50 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #ea7a17 0%, #ea7a17 ${
                          (sliderValue / totalAnimationDuration) * 100
                        }%, rgba(100, 116, 139, 0.5) ${
                          (sliderValue / totalAnimationDuration) * 100
                        }%, rgba(100, 116, 139, 0.5) 100%)`,
                      }}
                    />
                    <p className="text-sm text-slate-400 py-1">
                      <b>Pat. Pend.</b>
                    </p>
                  </div>
                </div>
              </div>

              {/* Features Side - Right */}
              <div className="order-1 md:order-2 space-y-4">
                <FeatureCard
                  icon={<GiCartwheel className="h-6 w-6 text-white" />}
                  title="Airless Tires"
                  description="A bike built with airless tires in mind, so you can ride with all the benefits of airless tires, no punctures, no flats, and no risk of harming your bike rims."
                />

                <FeatureCard
                  icon={<IoBuildOutline className="h-6 w-6 text-white" />}
                  title="Reinvented Wheel"
                  description="We rebuilt the wheel, quite literally. So you know our parts work in order to get you from point A to B."
                />

                <FeatureCard
                  icon={<LuCircleCheckBig className="h-6 w-6 text-white" />}
                  title="Full-Sized Tire"
                  description="The first wheel that doesn't cut down on size for foldability. It's the full 26 inch diameter tire."
                />
              </div>
            </div>

            {/* Three Button Section */}
            {/* Three Button Section */}
            <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              {/* The Pioneer (blue/cyan) */}
              <Link href="/pioneer" passHref>
                <button
                  className="relative group px-8 py-4 rounded-2xl bg-slate-600/40 border border-white/20 text-white font-semibold
                 backdrop-blur-md transition-all duration-300 w-full sm:w-auto hover:scale-105 overflow-hidden
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <span className="relative z-10">The Pioneer</span>

                  {/* hover glow bg */}
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   bg-gradient-to-r from-blue-500/60 to-cyan-400/60"
                  />
                  {/* soft outer bloom */}
                  <span
                    aria-hidden
                    className="absolute -inset-8 opacity-0 group-hover:opacity-60 transition-opacity duration-300
                   bg-gradient-to-r from-blue-500/40 to-cyan-400/40 blur-2xl"
                  />
                  {/* ring fades on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-2xl ring-1 ring-white/30 transition duration-300
                   group-hover:ring-transparent"
                  />
                </button>
              </Link>

              {/* View our gallery (purple) */}
              <Link href="/gallery" passHref>
                <button
                  className="relative group px-8 py-4 rounded-2xl bg-slate-600/40 border border-white/20 text-white font-semibold
                 backdrop-blur-md transition-all duration-300 w-full sm:w-auto hover:scale-105 overflow-hidden
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <span className="relative z-10">View our gallery</span>

                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   bg-gradient-to-r from-violet-500/60 to-fuchsia-400/60"
                  />
                  <span
                    aria-hidden
                    className="absolute -inset-8 opacity-0 group-hover:opacity-60 transition-opacity duration-300
                   bg-gradient-to-r from-violet-500/40 to-fuchsia-400/40 blur-2xl"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-2xl ring-1 ring-white/30 transition duration-300
                   group-hover:ring-transparent"
                  />
                </button>
              </Link>

              {/* Licensing Questions? (professional: clean white reveal) */}
              {/* <Link href="/contact" passHref>
    <button
      className="relative group px-8 py-4 rounded-2xl bg-slate-600/40 border border-white/20 text-white font-semibold
                 backdrop-blur-md transition-all duration-300 w-full sm:w-auto hover:scale-105 overflow-hidden
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-900">
        Licensing Questions?
      </span>

      <span
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   bg-gradient-to-r from-white to-slate-100"
      />
      <span
        aria-hidden
        className="absolute -inset-8 opacity-0 group-hover:opacity-70 transition-opacity duration-300
                   bg-gradient-to-r from-white to-slate-200 blur-2xl"
      />
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl ring-1 ring-white/30 transition duration-300
                   group-hover:ring-transparent"
      />
    </button>
  </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-slate-600/90 backdrop-blur-sm border border-slate-500/30 rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 p-4 border-b border-slate-500/20">
        <div className="flex-shrink-0 p-2.5 bg-slate-500/20 rounded-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>

      <div className="p-4 text-white">{description}</div>
    </div>
  );
};

export default Tire;
