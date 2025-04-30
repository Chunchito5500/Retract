// src/components/landingfeatures.js
import React from "react";
import Link from "next/link";
import { MdDirectionsBike } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import "./Button.css";
import "./hover.css";
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

const features = [
  {
    icon: <MdDirectionsBike className="text-white text-3xl" />,
    title: "Biking: A Cleaner Way to Move",
    description:
      "Every foldable bike we design is meant to reduce dependency on cars. The Pioneer makes it easier to bike more, ride farther, and connect with public transit — cutting back on emissions with every trip.",
  },
  {
    icon: <MdOutlineDesignServices className="text-white text-3xl" />,
    title: "Engineering for Lower Impact",
    description:
      "As students, we’re building with intention. We’re designing smarter bikes that support cleaner living — compact, easy to store, and made to keep people riding instead of driving.",
  },
  {
    icon: <FaRecycle className="text-white text-3xl" />,
    title: "Sourcing with Sustainability in Mind",
    description:
      "We don’t use carbon-neutral materials yet — but we’re working toward it. Our goal is to partner with manufacturers who share our vision for sustainability, quality, and ethical sourcing.",
  },
  {
    icon: <BiWorld className="text-white text-3xl" />,
    title: "Building Toward a Circular Future",
    description:
      "In the future, we aim to launch repair and recycling programs to keep bikes out of landfills. We want every Pioneer to have a long, useful life — and a responsible end.",
  },
];

export default function Environment() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
        <span
          className={`text-[#00a800] mb-2 block text-lg font-semibold ${SourceSans.className}`}
        >
          Our Commitment to the Environment
        </span>
        <h2
          className={`text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px] ${BebasNeue.className}`}
        >
          The Retractability Mission
        </h2>
        <p className={`text-white text-lg ${SourceSans.className}`}>
          We’re building the next generation of micromobility — clean, compact,
          and commuter-ready. As student engineers, we’re starting small but
          thinking big: designing bikes that reduce reliance on cars, integrate
          with public transit, and help people ride more while polluting less.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <a
            key={index}
            className="group flex flex-col justify-center focus:outline-hidden rounded-xl p-4 md:p-7"
          >
            <div className="flex justify-center items-center w-12 h-12 bg-[#00a800] rounded-[28px]">
              {feature.icon}
            </div>
            <div className="mt-5">
              <h3
                className={`group-hover:text-gray-100 text-xl font-semibold text-white font-raleway`}
              >
                {feature.title}
              </h3>
              <p className={`mt-1 text-gray-300 ${Roboto.className}`}>
                {feature.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* New link with the updated logic */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/environment"
          className="flex items-center gap-x-1.5 text-m text-white hover:text-neutral-300"
        >
          <span
            className={`hoverUnderlineAnimation center text-xl ${SourceSans.className}`}
          >
            Learn More
          </span>
          <IoIosArrowForward />
        </Link>
      </div>
      <div style={{ height: "60px" }}></div>
    </div>
  );
}
