"use client";

import React from "react";
import Threads from "./Threads";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});
const SourceSans = localFont({
  src: "../../fonts/SourceSans3-Regular.ttf",
});

const Introduction = () => {
  return (
    <div>
      <div style={{ height: "100px" }}></div>

      <div className="relative">
        {/* Background Threads */}

        {/* Main Content */}
        <div className="relative z-0">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div style={{ height: "50px" }}></div>

            {/* <div className="flex justify-center">
              <a
                className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
                href="#"
              >
                Create your own Retractability Bicycle!
                <span className="flex items-center gap-x-1">
                  <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">
                    Explore
                  </span>
                  <svg
                    className="shrink-0 size-4 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </a>
            </div> */}

            <div
              className="absolute inset-0 -z-10"
              style={{
                width: "100%",
                height: "600px",
                backgroundColor: "#030306",
              }}
            >
              <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction={true}
              />
            </div>

            <div className="mt-5 max-w-xl text-center mx-auto">
              <h1
                className={`block font-bold text-white text-4xl md:text-5xl lg:text-6xl ${BebasNeue.className}`}
              >
                The Retractability Pioneer
              </h1>
            </div>

            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className={`text-xl text-gray-300 ${SourceSans.className}`}>
                Pioneering the Future of Foldable Biking
              </p>
            </div>

            <div className="mt-5 flex justify-center">
              <button
                className="learn-more"
                onClick={() => {
                  const section = document.getElementById("Pioneer");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span aria-hidden="true" className="circle">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </div>
          </div>
        </div>
        <div style={{ height: "150px" }}></div>
      </div>
    </div>
  );
};

export default Introduction;
