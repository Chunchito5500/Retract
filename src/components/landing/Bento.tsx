"use client";

import React, { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
  display: "swap",
});

const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
  display: "swap",
});

type Tab = "unfolded" | "folded";

interface BentoImage {
  src: string;
  alt: string;
  info?: string;
}

interface TabContent {
  unfolded: BentoImage[];
  folded: BentoImage[];
}

const tabContent: TabContent = {
  unfolded: [
    {
      src: "/new/azcenter3.JPEG",
      alt: "Pioneer unfolded view 1",
      info: "Side profile",
    },
    {
      src: "/new/azcenter4.JPG",
      alt: "Pioneer unfolded view 2",
      info: "Urban setting",
    },
    {
      src: "/carousel/OrangeReal.png",
      alt: "Pioneer unfolded view 3",
      info: "Front angle",
    },
    {
      src: "/carousel/RetractGrayBike.png",
      alt: "Pioneer unfolded view 4",
      info: "Detail shot",
    },
  ],
  folded: [
    {
      src: "/new/carfold.JPG",
      alt: "Pioneer folded view 1",
      info: "Trunk fit",
    },
    {
      src: "/new/folded1.JPG",
      alt: "Pioneer folded view 2",
      info: "Compact form",
    },
    {
      src: "/pioneer/RbikeF.jpeg",
      alt: "Pioneer folded view 3",
      info: "Frame close-up",
    },
    {
      src: "/new/foldedmodel.png",
      alt: "Pioneer folded view 4",
      info: "Portable design",
    },
  ],
};

interface ImageCardProps {
  image: BentoImage;
  className?: string;
  priority?: boolean;
}

const ImageCard = ({
  image,
  className = "",
  priority = false,
}: ImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gray-100 group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        priority={priority}
      />
    </div>
  );
};

export default function Bento() {
  const [activeTab, setActiveTab] = useState<Tab>("unfolded");

  const tabs: { id: Tab; label: string }[] = [
    { id: "unfolded", label: "Unfolded" },
    { id: "folded", label: "Folded" },
  ];

  const currentImages = tabContent[activeTab];

  return (
    <section className="w-full">
      <div style={{ height: 110 }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className={`text-sm tracking-[0.3em] text-white/60 uppercase mb-4 ${Roboto.className}`}
          >
            The Pioneer Collection
          </p>
          <div className="w-12 h-px bg-gray-300 mx-auto mb-6" />
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl text-white/90 ${BebasNeue.className}`}
          >
            See it from every angle.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative pb-4 text-base font-medium transition-colors duration-300
                  ${activeTab === tab.id ? "text-gray-300" : "text-gray-500 hover:text-gray-400"}
                  ${Roboto.className}
                `}
              >
                {tab.label}
                {/* Active indicator */}
                <span
                  className={`
                    absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900
                    transition-transform duration-300 origin-left
                    ${activeTab === tab.id ? "scale-x-100" : "scale-x-0"}
                  `}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Top Left - Large */}
          <div className="lg:col-span-2">
            <ImageCard
              image={currentImages[0]}
              className="aspect-[16/10] lg:aspect-[16/9]"
              priority
            />
          </div>

          {/* Top Right - Tall (spans 2 rows) */}
          <div className="lg:row-span-2">
            <ImageCard
              image={currentImages[1]}
              className="aspect-[4/3] lg:aspect-auto lg:h-full"
              priority
            />
          </div>

          {/* Bottom Left - Small */}
          <div>
            <ImageCard image={currentImages[2]} className="aspect-[4/3]" />
          </div>

          {/* Bottom Middle - Small */}
          <div>
            <ImageCard image={currentImages[3]} className="aspect-[4/3]" />
          </div>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-10">
          <Link href="/pioneer">
            <button className="cursor-pointer px-7 py-4 rounded-[2em] border-[3px] border-[#414141] font-bold text-base text-white bg-[#222222] transition-all duration-300 hover:scale-[1.15] hover:border-none hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 active:scale-95">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
