import React, { useState } from "react";
import Link from "next/link";
import { IoAlertCircleOutline } from "react-icons/io5";
import Image from "next/image";
import { ImShrink, ImEnlarge } from "react-icons/im";
import styles from "./Explore.module.css";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import localFont from "next/font/local";
import ButtonComponent from "./ButtonComponent";

const BebasNeue = localFont({
  src: "../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../fonts/Roboto-Regular.ttf",
});

export default function PioneerTWO() {
  const [isFolded, setIsFolded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSwapClick = () => {
    setIsFolded((prevFolded) => !prevFolded);
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="overflow-x-hidden">
      <section
        id="middle"
        className="w-full max-w-full mx-auto px-4 sm:px-6 bg-[#333544] border-4 border-[#525674] transition-all duration-500 overflow-x-hidden"
      >
        {/* Default Mode */}
        {!isExpanded && (
          <div className="p-6 md:p-10">
            <h1
              className={`block text-center text-3xl sm:text-4xl lg:text-6xl lg:leading-tight text-[#ccc5b9] ${BebasNeue.className}`}
            >
              The Retractability Pioneer
            </h1>
            <p
              className={`text-center mt-3 text-3xl text-[#A0A0A0] ${BebasNeue.className}`}
            >
              <i>Pioneering the Future of Foldable Bikes</i>
            </p>
            {/* Removed the extra spacer div */}

            <div className="mt-8 grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-start">
              {/* Text Side */}
              <div className="transition-opacity duration-500 opacity-100">
                <div className="flex flex-col space-y-4">
                  {/* First Accordion (open by default) */}
                  <div className="collapse bg-glass border-4 border-[#ccc5b9]">
                    <input
                      type="radio"
                      name="pioneerAccordion"
                      defaultChecked
                    />
                    <div className="collapse-title font-semibold bg-[#ccc5b9] text-[#333544] text-2xl flex items-center space-x-2">
                      <FaSuitcaseRolling />{" "}
                      <span
                        className={`text-2xl text-[#333544] ${BebasNeue.className}`}
                      >
                        Unparalleled Portability
                      </span>
                    </div>
                    <div
                      className={`collapse-content text-[#333544] bg-[#ded9d0] text-m ${Roboto.className}`}
                    >
                      <div className="mt-4">
                        The Pioneer’s innovative folding design makes it
                        incredibly portable. Engineered to fold quickly and
                        effortlessly, offering a level of mobility that other
                        foldable bikes simply can’t match.
                      </div>
                    </div>
                  </div>
                  {/* Second Accordion */}
                  <div className="collapse bg-glass border-4 border-[#ccc5b9]">
                    <input type="radio" name="pioneerAccordion" />
                    <div className="collapse-title font-semibold bg-[#ccc5b9] text-[#333544] text-2xl flex items-center space-x-2">
                      <MdOutlineWorkspacePremium />
                      <span
                        className={`text-2xl text-[#333544] ${BebasNeue.className}`}
                      >
                        Premium Ride Quality
                      </span>
                    </div>
                    <div
                      className={`collapse-content text-[#333544] bg-[#ded9d0] text-m ${Roboto.className}`}
                    >
                      <div className="mt-4">
                        Enjoy the comfort and stability of a traditional sized
                        bike without compromise. Our design ensures that ride
                        quality, stability, and overall performance remain
                        top-notch, while including a foldable form.
                      </div>
                    </div>
                  </div>
                  {/* Third Accordion */}
                  <div className="collapse bg-glass border-4 border-[#ccc5b9]">
                    <input type="radio" name="pioneerAccordion" />
                    <div className="collapse-title font-semibold bg-[#ccc5b9] text-[#333544] text-2xl flex items-center space-x-2">
                      <HiLightBulb />
                      <span
                        className={`text-2xl text-[#333544] ${BebasNeue.className}`}
                      >
                        Industry-Leading Innovation
                      </span>
                    </div>
                    <div
                      className={`collapse-content text-[#333544] bg-[#ded9d0] text-m ${Roboto.className}`}
                    >
                      <div className="mt-4">
                        Discover the next generation of bicycles. The
                        Retractability Pioneer sets new standards by blending
                        cutting-edge engineering with convenience, advancing the
                        bicycle industry and redefining micro mobility.
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-raleway text-blue-500 flex items-center">
                    Release Date: June 2025
                    <span
                      className="tooltip tooltip-right"
                      data-tip="These are concept images representing future bike models."
                    >
                      <IoAlertCircleOutline
                        className="text-red-200"
                        size={32}
                      />
                    </span>
                  </h3>
                  <p className="mt-1/2 text-sm font-raleway text-[#A0A0A0]">
                    <b>Pat. Pend.</b>
                  </p>
                </div>
                {/* end accordions */}
              </div>

              {/* Image Viewer Side */}
              <div className="relative text-center">
                {/* Toggle Button */}
                <div className="flex items-center justify-center mb-4"></div>

                {/* Swappable Image */}
                <div className="relative text-center">
                  <Image
                    src={isFolded ? "/RBikeF.jpeg" : "/RBikeU.jpeg"}
                    alt="Retractability Bike"
                    width={700}
                    height={700}
                    className="rounded-lg border-2 border-[#A0A0A0]"
                  />

                  <div className="hidden md:block">
                    <button
                      onClick={toggleExpand}
                      className="absolute top-4 right-4 text-white bg-gray-700 rounded-full p-2"
                    >
                      <ImEnlarge size={24} />
                    </button>
                  </div>
                  <label
                    style={{
                      border: "3px solid #D0D0D0",
                      borderRadius: "6px",
                    }}
                    className="absolute top-4 left-4 swap swap-rotate bg-[#4e516a] p-4 border-[#faf8f4] cursor-pointer hover:bg-[#575a77] hover:border-[#e4e2de] border-2"
                  >
                    <input
                      type="checkbox"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onClick={handleSwapClick}
                    />
                    <div className={`swap-on ${styles.foldedBike}`}>
                      <Image
                        src="/foldedbike.svg"
                        alt="Folded Bike"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className={`swap-off ${styles.unfoldedBike}`}>
                      <Image
                        src="/unfoldedbike.svg"
                        alt="Unfolded Bike"
                        width={40}
                        height={40}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            {/* Learn More Button – centered across the component */}
            <div className="mt-10 md:col-span-2 flex justify-center">
              <Link href="/pioneer" passHref>
                <ButtonComponent />
              </Link>
            </div>
          </div>
        )}

        {/* Expanded Image Mode */}
        {isExpanded && (
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1d263b] ">
              <div className="relative text-center">
                {/* Swappable Image (Full Size) */}
                <Image
                  src={isFolded ? "/RBikeF.jpeg" : "/RBikeU.jpeg"}
                  alt="Retractability Bike"
                  width={1300}
                  height={500}
                  className="rounded-lg border-2 border-[#A0A0A0]"
                />
                <div className="hidden md:block">
                  <button
                    onClick={toggleExpand}
                    className="absolute top-4 right-4 text-white bg-gray-700 rounded-full p-2"
                  >
                    <ImShrink size={24} />
                  </button>
                </div>

                {/* Toggle Button */}
                <label
                  style={{ border: "3px solid #D0D0D0", borderRadius: "6px" }}
                  className="absolute top-4 left-4 swap swap-rotate bg-[#4e516a] p-4 border-[#faf8f4] cursor-pointer hover:bg-[#575a77] hover:border-[#e4e2de] border-2"
                >
                  <input
                    type="checkbox"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onClick={handleSwapClick}
                  />
                  <div className={`swap-on ${styles.foldedBike}`}>
                    <Image
                      src="/foldedbike.svg"
                      alt="Folded Bike"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={`swap-off ${styles.unfoldedBike}`}>
                    <Image
                      src="/unfoldedbike.svg"
                      alt="Unfolded Bike"
                      width={40}
                      height={40}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}
      </section>
      {/* end section */}
    </div>
  );
}
