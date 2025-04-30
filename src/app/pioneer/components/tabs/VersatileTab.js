import { FaRocket, FaShieldAlt, FaClock } from "react-icons/fa";
import localFont from "next/font/local";
import { TbExchange } from "react-icons/tb";

const BebasNeue = localFont({
  src: "../../../fonts/BebasNeue-Regular.ttf",
});
const SourceSans = localFont({
  src: "../../../fonts/SourceSans3-Regular.ttf",
});

const VersatileTab = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Icon Block 1 */}
        <div className="min-h-[14rem] sm:min-h-[18rem] flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">
          <div className="flex justify-center items-center gradient-rotate rounded-lg mx-auto p-3">
            <TbExchange className="text-white text-3xl" />
          </div>
          <div className="mt-3">
            <h3
              className={`text-2xl  font-semibold text-[#ccc5b9] ${BebasNeue.className}`}
            >
              Adaptive Performance
            </h3>
            <p
              className={`text-lg sm:text-md mt-1 break-words leading-relaxed ${SourceSans.className} text-[#faf8f4]`}
            >
              Ride farther with less effort. The Pioneer’s frame is engineered
              to deliver up to <strong>95% energy efficiency</strong> per pedal
              stroke — no wobble, no lag, just smooth sailing.
            </p>
          </div>
        </div>

        {/* Icon Block 2 */}
        <div className="min-h-[14rem] sm:min-h-[18rem] flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">
          <div className="flex justify-center items-center gradient-rotate rounded-lg mx-auto p-3">
            <FaShieldAlt className="text-white text-3xl" />
          </div>
          <div className="mt-3">
            <h3
              className={`text-2xl font-semibold text-[#ccc5b9] ${BebasNeue.className}`}
            >
              Unmatched Durability
            </h3>
            <p
              className={`text-lg sm:text-md mt-1 break-words leading-relaxed ${SourceSans.className} text-[#faf8f4]`}
            >
              Tested through over <strong>100 fold/unfold cycles</strong>, this
              frame is built to last. Airless tires mean no flats, and fewer
              replacements. It’s tough where it counts.
            </p>
          </div>
        </div>

        {/* Icon Block 3 */}
        <div className="min-h-[14rem] sm:min-h-[18rem] flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5">
          <div className="flex justify-center items-center gradient-rotate rounded-lg mx-auto p-3">
            <FaClock className="text-white text-3xl" />
          </div>
          <div className="mt-3">
            <h3
              className={`text-2xl font-semibold text-[#ccc5b9] ${BebasNeue.className}`}
            >
              Smart Commuting
            </h3>
            <p
              className={`text-lg sm:text-md mt-1 break-words leading-relaxed ${SourceSans.className} text-[#faf8f4]`}
            >
              With a quick-fold mechanism and ultra-light profile, you can{" "}
              <strong>cut commute time by up to 30%</strong>. Fold it in
              seconds, carry it with ease, and move through your day like never
              before.
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Rotate CSS */}
    </div>
  );
};

export default VersatileTab;
