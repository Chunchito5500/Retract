"use client";

import React from "react";
import { IoInformationCircle } from "react-icons/io5";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
  display: "swap",
});

const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
  display: "swap",
});

export default function Disclaimer() {
  return (
    <section className="w-full py-6 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <div className="bg-[#fe9800d2] rounded-xl px-6 py-5 sm:px-8 sm:py-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <IoInformationCircle className="w-7 h-7 sm:w-8 sm:h-8 text-amber-900" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3
                className={`text-lg sm:text-xl font-bold text-amber-950 mb-2 ${Roboto.className}`}
              >
                Product In Development
              </h3>
              <p
                className={`text-amber-900 text-sm sm:text-base leading-relaxed ${Roboto.className}`}
              >
                The Pioneer is currently still under development. All images
                shown are renders or prototypes and are not intended to be a
                depiction of the finalized product.
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 pt-4 border-t border-amber-400/50">
                <span
                  className={`text-sm font-semibold text-amber-950 ${Roboto.className}`}
                >
                  Expected Release: June 2026
                </span>
                <span className={`text-sm text-amber-800 ${Roboto.className}`}>
                  Pat. Pend.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
