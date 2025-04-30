"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import SplitText from "./SplitText"; // Ensure this path is correct
import localFont from "next/font/local";
import GlassMorphDot from "./glassmorphdot";

const BebasNeue = localFont({
  src: "../fonts/BebasNeue-Regular.ttf",
});

export default function Carousel() {
  const router = useRouter();

  const duration = 10000; // Time in ms for each slide
  const frame = useRef(0);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  // Example slides with text inputs for overlay
  const items = [
    {
      img: "/RetractGrayBike.png",
      desc: "Pioneer",
      subheading: "Retractability Pioneer",
      heading: "The Future of Biking",
      buttonText: "Explore",
    },
    {
      img: "/ctw.jpg",
      desc: "Outreach",
      subheading: "Latest News",
      heading: "Retractability at Change the world",
      buttonText: "Learn More",
    },
    {
      img: "/bikerenders/OrangeReal.png",
      desc: "Our Vision",
      subheading: "Retractability Pioneer",
      heading: "The Future of Biking",
      buttonText: "Explore",
    },
  ];

  // Animate the progress bar at a constant rate from 0% to 100%
  useEffect(() => {
    setProgress(0);
    const start = performance.now();

    const animate = (time) => {
      let elapsed = time - start;
      let fraction = elapsed / duration;
      if (fraction > 1) fraction = 1; // clamp

      setProgress(fraction * 100);

      if (fraction < 1) {
        frame.current = requestAnimationFrame(animate);
      } else {
        // Move to next slide after completing
        setActive((active + 1) % items.length);
      }
    };

    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [active, items.length]);

  // Handlers for arrow clicks
  const handlePrev = () => {
    setProgress(0);
    setActive((active - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setProgress(0);
    setActive((active + 1) % items.length);
  };

  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 text-center font-bebas">
      {/* Main Carousel Container with overflow-hidden & round corners */}
      <div className="w-full h-[700px] overflow-hidden bg-cover">
        {items.map((item, index) => (
          <Transition
            as="div"
            key={index}
            show={active === index}
            enter="transition ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="absolute inset-0"
          >
            <Image
              src={item.img}
              alt={item.desc}
              fill
              className="object-cover opacity-50"
            />

            {/* Text Overlay with left-justified stack */}
            <div
              className="
                absolute bottom-[120px]
                left-1/2 -translate-x-1/2
                flex flex-col items-center text-center
                md:left-20 md:translate-x-0 md:items-start md:text-left
              "
            >
              <SplitText
                text={item.subheading}
                className={`mb-1 text-xl font-bebas text-white ${BebasNeue.className}`}
                delay={15}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
              <SplitText
                text={item.heading}
                className={`mb-4 text-5xl text-white ${BebasNeue.className}`}
                delay={15}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />

              <button
                type="button"
                onClick={() => {
                  if (item.buttonText === "Explore") {
                    router.push("/pioneer");
                  } else if (item.buttonText === "Learn More") {
                    router.push("/blog");
                  }
                }}
                // Removed mx-auto to keep left alignment
                className="
                  flex
                  z-10
                  px-4 py-2
                  overflow-hidden
                  
                  border-2
                  rounded-full
                  shadow-xl
                  text-lg
                  bg-[#ccc5b9]
                  backdrop-blur-md
                  lg:font-semibold
                  isolation-auto
                  border-[#faf8f4]
                  group
                  // Pseudo-element for the hover fill:
                  before:content-['']
                  before:absolute
                  before:top-0
                  before:left-0
                  before:h-full
                  before:w-0
                  before:bg-[#333544]
                  before:z-[-1]
                  before:transition-all
                  before:duration-700
                  hover:before:w-full
                  hover:text-gray-50
                "
              >
                {item.buttonText}
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45 ml-2"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  />
                </svg>
              </button>
            </div>
          </Transition>
        ))}
        <GlassMorphDot
          items={items}
          active={active}
          setActive={setActive}
          progress={progress}
          setProgress={setProgress}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}
