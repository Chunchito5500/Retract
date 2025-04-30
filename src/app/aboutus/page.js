"use client";

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from "react";
import { HiLightBulb } from "react-icons/hi";
import { FaBalanceScale } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import "../globals.css";
import "../styles.css";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <div id="parallax-world-of-ugg">
        {/* Parallax Section */}
        <section>
          <div className="text-center bg-[#3a3d4b] py-20 px-4">
            <div style={{ height: "75px" }}></div>

            <h3 className="text-sm uppercase tracking-widest text-gray-300">
              About Us
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest text-gray-200 font-raleway mt-4">
              Retractability Bicycles
            </h1>
          </div>
        </section>

        <section>
          <div
            className="py-16 md:py-32 bg-gray-900 bg-center bg-cover bg-fixed opacity-85 flex items-center justify-center text-center"
            style={{
              backgroundImage: "url('/printpics/otra.jpg')",
            }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-wide uppercase">
              Our Mission Statement
            </h2>
          </div>
        </section>

        <section>
          <div className="bg-[#333544] py-16 mx-auto">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#404353] p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed tracking-wide">
                  At Retractability, we don’t believe in sacrificing quality for
                  convenience, especially when it comes to bikes. Cycling isn’t
                  only a pastime, but a necessity for many, and it should be
                  smarter and more adaptable. We challenge the conventional
                  design of bikes to create something that fits seamlessly into
                  everyday life. The way people move is evolving, and so should
                  their bicycles.
                </p>
                <div className="border-b-4 border-[#d8d6d0] w-36 mx-auto mt-10"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#333544]">
          <div className="bg-[#333544] max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="aspect-w-16 aspect-h-7">
              <Image
                className="w-full h-full object-cover rounded-xl"
                src="/tableteam.JPG"
                alt="What we do image"
                width={800}
                height={400}
              />
            </div>
            <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <h2 className="font-bold text-2xl md:text-3xl text-white">
                  What we do:
                </h2>
                <p className="text-xl mt-2 md:mt-4 text-gray-200">
                  Revolutionizing bikes with a compact design that fits
                  effortlessly into a backpack!
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                  <div className="flex gap-x-5">
                    <span className="shrink-0 mt-1 size-6 text-white">
                      <HiLightBulb className="h-7 w-7 text-[#EBE6E8]" />
                    </span>
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-[#EBE6E8]">
                        Driven by Innovation
                      </h3>
                      <p className="mt-1 text-gray-200">
                        Our unique take on the bicycle allows for full-sized
                        bikes to fold and fit into small spaces, offering
                        unparalleled portability and convenience.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-5">
                    <span className="shrink-0 mt-1 size-6 text-white">
                      <FaBalanceScale className="h-7 w-7 text-[#EBE6E8]" />
                    </span>
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-[#EBE6E8]">
                        Precision in Design
                      </h3>
                      <p className="mt-1 text-gray-200">
                        Our bikes are meticulously designed with foldability and
                        portability at their core, ensuring you get the best of
                        both worlds.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-x-5">
                    <span className="shrink-0 mt-1 size-6 text-white">
                      <AiOutlineTeam className="h-7 w-7 text-[#EBE6E8]" />
                    </span>
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-[#EBE6E8]">
                        A Team You Can Trust
                      </h3>
                      <p className="mt-1 text-gray-200">
                        Our commitment to quality and innovation ensures that
                        your experience with us is built on trust, from the
                        first ride to the last.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section>
          <div
            className="py-16 md:py-32 bg-gray-900 bg-center bg-cover bg-fixed opacity-85 flex items-center justify-center text-center"
            style={{
              backgroundImage: "url('/AZ.jpg')",
            }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-wide uppercase">
              Meet the Team
            </h2>
          </div>
        </section>

        <section id="The Team">
          <div className="bg-[#333544] py-16 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="bg-[#424455] p-10 rounded-xl shadow-2xl">
              <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
                  We&apos;re proud to call Arizona our home, where innovation
                  meets the outdoors.
                </h2>
                <p className="text-smd font-raleway text-gray-200 mt-4">
                  From the heart of Arizona, our team is driven by a passion for
                  cycling and innovation. Meet the people bringing you the
                  future of biking.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-10">
                <div className="text-center">
                  <a
                    href="https://www.linkedin.com/in/lucas-somoshegyi-szokol/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="rounded-xl object-cover object-center w-48 h-48 mx-auto transition duration-200 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
                      src="/Lucas.jpg"
                      alt="Lucas Somoshegyi-Szokol"
                      width={192}
                      height={192}
                    />
                  </a>
                  <div className="mt-2 sm:mt-4">
                    <h3 className="text-lg font-medium text-white sm:text-base lg:text-lg">
                      Lucas Somoshegyi-Szokol
                    </h3>
                    <p className="text-xs text-gray-200 sm:text-sm lg:text-base">
                      Founder / CEO
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="https://www.linkedin.com/in/basel-kurian-450917212/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="rounded-xl object-cover object-center w-48 h-48 mx-auto transition duration-200 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
                      src="/Baselp.jpg"
                      alt="Basel Kurian"
                      width={192}
                      height={192}
                    />
                  </a>
                  <div className="mt-2 sm:mt-4">
                    <h3 className="text-lg font-medium text-white sm:text-base lg:text-lg">
                      Basel Kurian
                    </h3>
                    <p className="text-xs text-gray-200 sm:text-sm lg:text-base">
                      Founder / CTO
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <h2 className="text-gray-200">
                  Have any questions or want to stay updated? Join our interest
                  list below.
                </h2>
                <a
                  href="/#inputsection"
                  className="mt-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-300 bg-white hover:bg-[#e5e1de] hover:border-[#94918e] text-gray-800 shadow-sm focus:outline-none focus:bg-gray-50"
                >
                  Join our Interest List
                  <svg
                    className="shrink-0 size-4"
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
                </a>
              </div>
              <div className="border-b-4 border-[#bfbab5] w-36 mx-auto mt-10"></div>
            </div>
            <div style={{ height: "90px" }}></div>

            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
}
