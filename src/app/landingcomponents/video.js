import React from "react";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../fonts/Roboto-Regular.ttf",
});

const Video = () => {
  return (
    <section className="py-12">
      {/* Unified background of color #525674 */}
      <div className="w-full bg-[#525674]">
        <div className="container mx-auto px-4 py-4">
          <h2
            className={`text-6xl font-bold text-center mb-6 text-[#d0d1f4] ${BebasNeue.className}`}
          >
            Watch Our Pitch!
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/I0_a70ocqag"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        {/* Extra background space at the bottom */}
        <div className="w-full h-16"></div>
      </div>
    </section>
  );
};

export default Video;
