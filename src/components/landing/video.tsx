"use client";

import localFont from "next/font/local";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});

const Video = () => {
  return (
    <section className="py-12">
      <div className="w-full">
        <div className="container mx-auto px-4 py-4">
          <h2
            className={`text-6xl font-bold text-center mb-6 text-[#d0d1f4] ${BebasNeue.className}`}
          >
            Watch Our Pitch!
          </h2>
        </div>
        <div className="flex justify-center px-4">
          <div className="relative w-full max-w-4xl">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/I0_a70ocqag"
              thumbnailSrc="/video/thumbnail.png" // Add your thumbnail image at this path
              thumbnailAlt="Our Pitch Video"
              className="w-full"
            />
          </div>
        </div>
        {/* Extra background space at the bottom */}
        <div className="w-full h-16"></div>
      </div>
    </section>
  );
};

export default Video;
