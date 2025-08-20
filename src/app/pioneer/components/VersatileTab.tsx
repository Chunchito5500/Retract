import { FaShieldAlt, FaClock } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../../fonts/Roboto-Regular.ttf",
});

const VersatileTab = () => {
  return (
    <div className="max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 mx-auto">
      {/* Centered Title Section */}
      <div className="text-center mb-16">
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight ${BebasNeue.className}`}
        >
          Learn about the Pioneer&apos;s{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Features
          </span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {/* Feature 1 - Adaptive Performance */}
        <div className="group min-h-[16rem] sm:min-h-[20rem] flex flex-col justify-center border border-gray-600/30 rounded-2xl text-center p-6 md:p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20">
          <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
            <TbExchange className="text-white text-4xl" />
          </div>
          <div>
            <h3
              className={`text-2xl lg:text-3xl font-bold text-[#ccc5b9] mb-4 group-hover:text-white transition-colors duration-300 ${BebasNeue.className}`}
            >
              Full sized frame
            </h3>
            <p
              className={`text-lg leading-relaxed ${Roboto.className} text-[#faf8f4]/90 group-hover:text-[#faf8f4] transition-colors duration-300`}
            >
              Ride farther with less effort. The Pioneer&apos;s frame is engineered to deliver more
              
              per pedal stroke. No more wobble, no lag, just smooth sailing.
            </p>
          </div>
        </div>

        {/* Feature 2 - Unmatched Durability */}
        <div className="group min-h-[16rem] sm:min-h-[20rem] flex flex-col justify-center border border-gray-600/30 rounded-2xl text-center p-6 md:p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20">
          <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
            <FaShieldAlt className="text-white text-4xl" />
          </div>
          <div>
            <h3
              className={`text-2xl lg:text-3xl font-bold text-[#ccc5b9] mb-4 group-hover:text-white transition-colors duration-300 ${BebasNeue.className}`}
            >
              Airless tires
            </h3>
            <p
              className={`text-lg leading-relaxed ${Roboto.className} text-[#faf8f4]/90 group-hover:text-[#faf8f4] transition-colors duration-300`}
            >
              A bike built with airless tires in mind. Which means no flats, and fewer
              replacements. It&apos;s tough where it counts.
            </p>
          </div>
        </div>

        {/* Feature 3 - Smart Commuting */}
        <div className="group min-h-[16rem] sm:min-h-[20rem] flex flex-col justify-center border border-gray-600/30 rounded-2xl text-center p-6 md:p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20">
          <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
            <FaClock className="text-white text-4xl" />
          </div>
          <div>
            <h3
              className={`text-2xl lg:text-3xl font-bold text-[#ccc5b9] mb-4 group-hover:text-white transition-colors duration-300 ${BebasNeue.className}`}
            >
              Compact Size
            </h3>
            <p
              className={`text-lg leading-relaxed ${Roboto.className} text-[#faf8f4]/90 group-hover:text-[#faf8f4] transition-colors duration-300`}
            >
              With a quick-fold mechanism and ultra-light profile, you can
              fold it in seconds, carry it with ease, and move through your day
              like never before.
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: 110 }} />
    </div>
  );
};

export default VersatileTab;
