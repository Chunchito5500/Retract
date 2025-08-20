// src/components/landingfeatures.js
import React from "react";
import Link from "next/link";
import { MdDirectionsBike } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import "./Button.module.css";
import "./hover.css";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../../fonts/Roboto-Regular.ttf",
});

const features = [
  {
    icon: <MdDirectionsBike className="text-white text-3xl" />,
    title: "A Cleaner Way to Move",
    description:
      "Every foldable bike we design is meant to reduce dependency on cars. The Pioneer makes it easier to bike more, ride farther, and connect with public transit — cutting back on emissions with every trip.",
  },
  {
    icon: <MdOutlineDesignServices className="text-white text-3xl" />,
    title: "Engineered for Lower Impact",
    description:
      "As students, we&apos;re building with intention. We&apos;re designing smarter bikes that support cleaner living — compact, easy to store, and made to keep people riding instead of driving.",
  },
  {
    icon: <FaRecycle className="text-white text-3xl" />,
    title: "Sustainability in Mind",
    description:
      "We don&apos;t use carbon-neutral materials yet — but we&apos;re working toward it. Our goal is to partner with manufacturers who share our vision for sustainability, quality, and ethical sourcing.",
  },
  {
    icon: <BiWorld className="text-white text-3xl" />,
    title: "Building Toward a clean Future",
    description:
      "In the future, we aim to launch repair and recycling programs to keep bikes out of landfills. We want every Pioneer to have a long, useful life — and a responsible end.",
  },
];

export default function Environment() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
        <span
          className={`text-[#00a800] mb-2 block text-lg font-semibold ${Roboto.className}`}
        >
          Our Commitment to the Environment
        </span>
        <h2
          className={`text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px] ${BebasNeue.className}`}
        >
          The Retractability Mission
        </h2>
        <p className={`text-white text-lg ${Roboto.className}`}>
          We&apos;re building the next generation of micromobility — clean, compact,
          and commuter-ready. As student engineers, we&apos;re starting small but
          thinking big: designing bikes that reduce reliance on cars, integrate
          with public transit, and help people ride more while polluting less.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col h-full focus:outline-hidden rounded-xl p-6 md:p-8"
          >
            <div className="flex justify-center items-center w-14 h-14 bg-[#00a800] rounded-full mb-6 mx-auto">
              {React.cloneElement(feature.icon, {
                className: "text-white text-4xl"
              })}
            </div>
            <div className="flex-1 flex flex-col text-center">
              <h3
                className={`group-hover:text-gray-100 text-xl font-semibold text-white mb-4 ${Roboto.className}`}
              >
                {feature.title}
              </h3>
              <p className={`text-gray-300 leading-relaxed ${Roboto.className}`}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/environment"
          className="flex items-center gap-x-2 text-white hover:text-neutral-300 transition-colors duration-200"
        >
          <span
            className={`hoverUnderlineAnimation text-xl ${Roboto.className}`}
          >
            Learn More
          </span>
          <IoIosArrowForward className="text-lg" />
        </Link>
      </div>
      <div style={{ height: "60px" }}></div>
    </div>
  );
}