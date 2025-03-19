import React, { useState } from "react";
import Link from "next/link";
import { IoAlertCircleOutline } from "react-icons/io5";
import Image from "next/image";
import { ImShrink, ImEnlarge } from "react-icons/im";
import styles from "./Explore.module.css";

export default function TablePioneer() {
  const [isFolded, setIsFolded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSwapClick = () => {
    setIsFolded((prevFolded) => !prevFolded);
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <section id="middle">
        {/* Default Mode */}
        {!isExpanded && (
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1d263b] shadow-lg rounded-lg p-6 md:p-10 border transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                {/* Text Side */}
                <div className="transition-opacity duration-500 opacity-100">
                  <h1 className="block text-3xl font-raleway sm:text-4xl lg:text-6xl lg:leading-tight text-white">
                    The Retractability Pioneer
                  </h1>
                  <p className="mt-3 text-3xl font-raleway text-[#A0A0A0]">
                    <i>Pioneering the Future of Foldable Bikes</i>
                  </p>
                  <p className="mt-5 text-2xl font-raleway font-medium text-gray-400 dark:text-gray-400">
                    Our innovative design blends the convenience of folding with
                    the excellence of a traditional bike. Unlike other foldable
                    bikes, the Retractability Pioneer offers unparalleled
                    portability without compromising on ride quality, stability,
                    or size. Discover the next generation of bicycles, setting
                    new standards and advancing the industry.
                  </p>
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
                  <div className="mt-6">
                    <Link href="/quark" passHref>
                      <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text font-raleway">
                          Learn More
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Image Viewer Side */}
                <div className="relative text-center">
                  {/* Toggle Button */}
                  <div className="flex items-center justify-center mb-4">
                    <label
                      style={{
                        border: "3px solid #D0D0D0",
                        borderRadius: "6px",
                      }}
                      className="swap swap-rotate relative bg-[#82a0bc] p-4 border-[white] cursor-pointer hover:bg-[#8da9c2] border-2"
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

                  {/* Swappable Image */}
                  <div className="relative text-center">
                    <Image
                      src={isFolded ? "/RBikeF.jpeg" : "/RBikeU.jpeg"}
                      alt="Retractability Bike"
                      width={700}
                      height={700}
                      className="rounded-lg border-2 border-[#A0A0A0]"
                    />
                    <button
                      onClick={toggleExpand}
                      className="absolute top-4 right-4 text-white bg-gray-700 rounded-full p-2"
                    >
                      <ImEnlarge size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Expanded Image Mode */}
        {isExpanded && (
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1d263b] shadow-lg rounded-lg p-6 md:p-10 border transition-all duration-500 relative">
              <div className="relative text-center">
                {/* Swappable Image (Full Size) */}
                <Image
                  src={isFolded ? "/RBikeF.jpeg" : "/RBikeU.jpeg"}
                  alt="Retractability Bike"
                  width={1300}
                  height={500}
                  className="rounded-lg border-2 border-[#A0A0A0]"
                />
                <button
                  onClick={toggleExpand}
                  className="absolute top-4 right-4 text-white bg-gray-700 rounded-full p-2"
                >
                  <ImShrink size={24} />
                </button>

                {/* Toggle Button */}
                <label
                  style={{ border: "3px solid #D0D0D0", borderRadius: "6px" }}
                  className="absolute top-4 left-4 swap swap-rotate bg-[#82a0bc] p-4 border-[white] cursor-pointer hover:bg-[#8da9c2] border-2"
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
    </div>
  );
}
