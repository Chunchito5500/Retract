"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoAlertCircleOutline } from "react-icons/io5";
import Image from "next/image";
import { ImShrink, ImEnlarge } from "react-icons/im";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import localFont from "next/font/local";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
  display: "swap",
});
const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
  display: "swap",
});

export default function Pioneer() {
  const [isFolded, setIsFolded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [openCardIndex, setOpenCardIndex] = useState(0); // Start with first card open

  const handleSwapClick = () => {
    setIsFolded((prevFolded) => !prevFolded);
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleCardClick = (index: number) => {
    // Only allow opening a different card, not closing the current one
    if (openCardIndex !== index) {
      setOpenCardIndex(index);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <section className="w-full mx-auto px-4 sm:px-6">
        {/* Main Card Container */}
        <div className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />

          <div className="relative overflow-hidden rounded-xl backdrop-blur-[20px] backdrop-saturate-[60%] bg-[rgba(51,53,68,0.5)] border border-white/[0.125] shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
            {/* Default Mode */}
            {!isExpanded && (
              <div className="p-6 md:p-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <p
                    className={`text-xl sm:text-2xl text-white/70 uppercase tracking-wider mb-2 ${BebasNeue.className}`}
                  >
                    Introducing
                  </p>
                  <h1
                    className={`text-3xl sm:text-4xl lg:text-6xl lg:leading-tight text-white/90 ${BebasNeue.className}`}
                  >
                    The Retractability Pioneer
                  </h1>
                  <p
                    className={`mt-3 text-3xl text-white/80 ${BebasNeue.className}`}
                  >
                    <i>Pioneering the Future of Foldable Bikes</i>
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 xl:gap-20 md:items-start">
                  {/* Features Side */}
                  <div className="space-y-4">
                    {/* Feature Cards */}
                    <FeatureCard
                      icon={
                        <FaSuitcaseRolling className="h-5 w-5 text-[#333544]" />
                      }
                      title="Unparalleled Portability"
                      description="The Pioneer's innovative folding design makes it incredibly portable. Engineered to fold quickly and effortlessly, offering a level of mobility that other foldable bikes simply can't match."
                      isOpen={openCardIndex === 0}
                      onClick={() => handleCardClick(0)}
                    />

                    <FeatureCard
                      icon={
                        <MdOutlineWorkspacePremium className="h-5 w-5 text-[#333544]" />
                      }
                      title="Premium Ride Quality"
                      description="Enjoy the comfort and stability of a traditional sized bike without compromise. Our design ensures that ride quality, stability, and overall performance remain top-notch, while including a foldable form."
                      isOpen={openCardIndex === 1}
                      onClick={() => handleCardClick(1)}
                    />

                    <FeatureCard
                      icon={<HiLightBulb className="h-5 w-5 text-[#333544]" />}
                      title="Industry-Leading Innovation"
                      description="Discover the next generation of bicycles. The Retractability Pioneer sets new standards by blending cutting-edge engineering with convenience, advancing the bicycle industry and redefining micro mobility."
                      isOpen={openCardIndex === 2}
                      onClick={() => handleCardClick(2)}
                    />

                    {/* Release Info */}
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center gap-2 text-lg font-semibold text-blue-400">
                        <span>Release Date: June 2026</span>
                        <div className="relative group">
                          <IoAlertCircleOutline className="text-red-400 h-6 w-6 cursor-help" />
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-popover text-popover-foreground text-sm rounded-md border shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            These are concept images representing future bike
                            models.
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-white/60">
                        <b>Pat. Pend.</b>
                      </p>
                    </div>
                  </div>

                  {/* Image Viewer Side */}
                  <div className="relative">
                    <div className="relative rounded-lg overflow-hidden border-2 border-border">
                      <Image
                        src={
                          isFolded
                            ? "/pioneer/fold3.png"
                            : "/pioneer/Unfold2.png"
                        }
                        alt="Retractability Bike"
                        width={700}
                        height={700}
                        className="w-full h-auto"
                      />

                      {/* Expand Button */}
                      <button
                        onClick={toggleExpand}
                        className="absolute top-4 right-4 p-2 bg-background/90 hover:bg-background border border-border rounded-full backdrop-blur-sm transition-all shadow-md"
                      >
                        <ImEnlarge className="h-5 w-5 text-foreground" />
                      </button>

                      {/* Swap Button with Rotation Animation */}
                      <button
                        onClick={handleSwapClick}
                        className="absolute top-4 left-4 p-4 bg-background/90 hover:bg-background border border-border rounded-lg backdrop-blur-sm transition-all shadow-md group"
                      >
                        <div className="relative w-8 h-8 flex items-center justify-center">
                          <div
                            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                              isFolded
                                ? "opacity-100 rotate-0"
                                : "opacity-0 rotate-180"
                            }`}
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
                            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                              !isFolded
                                ? "opacity-100 rotate-0"
                                : "opacity-0 -rotate-180"
                            }`}
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
                    </div>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="mt-10 flex justify-center">
                  <div className="h-16 flex items-center">
                    <Link href="/pioneer" passHref>
                      <button className="cursor-pointer px-7 py-4 rounded-[2em] border-[3px] border-[#414141] font-bold text-base text-white bg-[#222222] transition-all duration-300 hover:scale-[1.15] hover:border-none hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 active:scale-95">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Expanded Image Mode */}
            {isExpanded && (
              <div className="p-4">
                <div className="relative rounded-lg overflow-hidden border-2 border-border">
                  <Image
                    src={
                      isFolded ? "/pioneer/fold3.png" : "/pioneer/Unfold2.png"
                    }
                    alt="Retractability Bike"
                    width={1300}
                    height={500}
                    className="w-full h-auto"
                  />

                  {/* Shrink Button */}
                  <button
                    onClick={toggleExpand}
                    className="absolute top-4 right-4 p-2 bg-background/90 hover:bg-background border border-border rounded-full backdrop-blur-sm transition-all shadow-md"
                  >
                    <ImShrink className="h-5 w-5 text-foreground" />
                  </button>

                  {/* Swap Button with Rotation Animation */}
                  <button
                    onClick={handleSwapClick}
                    className="absolute top-4 left-4 p-4 bg-background/90 hover:bg-background border border-border rounded-lg backdrop-blur-sm transition-all shadow-md group"
                  >
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <div
                        className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                          isFolded
                            ? "opacity-100 rotate-0"
                            : "opacity-0 rotate-180"
                        }`}
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
                        className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                          !isFolded
                            ? "opacity-100 rotate-0"
                            : "opacity-0 -rotate-180"
                        }`}
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
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const FeatureCard = ({
  icon,
  title,
  description,
  isOpen,
  onClick,
}: FeatureCardProps) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 p-4 bg-[#ccc5b9] hover:bg-[#ccc5b9]/80 transition-colors text-left ${
          isOpen ? "cursor-default" : "cursor-pointer"
        }`}
      >
        <div className="flex-shrink-0 p-2 bg-transparent rounded-lg">
          {icon}
        </div>
        <span
          className={`text-2xl font-semibold text-[#333544] ${BebasNeue.className}`}
        >
          {title}
        </span>
        <div className="ml-auto">
          <div
            className={`transform transition-transform text-[#333544] ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </div>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <div
          className={`p-4 bg-[#ded9d0] border-t border-border text-xl text-[#333544] ${Roboto.className}`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
