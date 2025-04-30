import Image from "next/image";
import { Misc } from "coolshapes-react";
import { FaHammer } from "react-icons/fa";
import localFont from "next/font/local";

const SourceSans = localFont({
  src: "../../../fonts/SourceSans3-Regular.ttf",
});

const TireTab = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 w-full max-w-6xl p-4 rounded-lg bg-neutral-900 shadow-lg mx-auto min-h-[600px]">
      <div className="sm:row-span-2 flex items-center justify-center bg-[#18191d] rounded-lg shadow relative overflow-hidden">
        <Image
          src="/RbikeF.jpeg"
          alt="Foldable Bike"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute bottom-0 w-full text-lg bg-black/30 backdrop-blur-md p-4 text-center z-20">
          <p className={`${SourceSans.className} text-[#faf8f4]`}>
            We&apos;ve completely reimagined the bike wheel. Our foldable,
            airless tire system makes the Pioneer more compact, durable, and
            maintenance-free than traditional bikes.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-lg shadow p-6 text-center space-y-4 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0">
          <Misc index={2} noise={false} size={400} />
        </div>
        <div className="text-lg relative z-10 ">
          <p className={`${SourceSans.className} text-[#faf8f4]`}>
            Converting an airless 26 inch diamter tire into a 9 inch diameter
            tire
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#232427] rounded-lg shadow p-6 text-center space-y-4">
        <p
          className={`text-base ${SourceSans.className} text-lg text-[#faf8f4]`}
        >
          Say goodbye to the fear of flat tires. The Pioneer&apos;s tires are
          crafted from a special pop-resistant material, offering peace of mind
          on any adventure.
        </p>
        <FaHammer className="text-4xl mb-2 gradient-icon" />
      </div>

      <style jsx>{`
        .gradient-icon {
          background: conic-gradient(from 0deg, #ccc5b9, #d3c6b3, #ccc5b9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rotate 4s linear infinite;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default TireTab;
