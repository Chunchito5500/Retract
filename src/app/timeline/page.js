"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from "react";

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Timeline() {
  const timelineData = [
    {
      year: "1",
      title: "Kickstart manufacturing and sales in Arizona",
      description:
        "We will begin with a large marketing campaign to showcase our product and gain preorders which will allow us to build the products and slowly grow.",
    },
    {
      year: "2",
      title: "Scale Production",
      description:
        "Scale up production, expand to additional states, and enhance customization options.",
    },
    {
      year: "3",
      title: "Nationwide Distribution",
      description:
        "Nationwide distribution in the U.S., alongside the introduction of new models.",
    },
    {
      year: "4",
      title: "International Launch",
      description:
        "Enter international markets, starting with Canada and Europe.",
    },
    {
      year: "5",
      title: "Expand product range",
      description:
        "Diversify our product range and target global bike-friendly countries.",
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-[white] dark:bg-gray-900">
        <div
          style={{
            background:
              "linear-gradient(to top, #84828f, #6a687a, #536271, #3e4c5e, #2c3d55)",
          }}
        >
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="font-raleway text-4xl text-white py-4">
                Our Timeline
              </h2>
              <p className="mt-1 font-raleway text-[#D1D1D1]">
                While we&apos;re in the early stages of our company and our goals, we&apos;ve outlined a comprehensive timeline detailing our future plans and how you can help make an impact on our journey.
              </p>
            </div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute inset-y-0 left-1/2 w-px bg-neutral-800 transform -translate-x-1/2" />

              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center gap-x-5 py-8 relative z-10 ${index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={cardVariants}
                >
                  <div
                    className={`w-full max-w-xs p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform ${index % 2 === 0 ? "translate-x-10" : "-translate-x-10"
                      }`}
                  >
                    <span className="text-xs uppercase font-semibold text-[#f6957d]">
                      Year {item.year}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </section>
      
    </div>
  );
}
