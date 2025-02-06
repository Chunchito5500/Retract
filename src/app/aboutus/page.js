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
    <div>
      <Navbar />

      <div id="parallax-world-of-ugg">
        {/* Parallax Section */}
        <section>
          <div className="text-center bg-[#a3aaac] py-20 px-4">
            <div style={{ height: "75px" }}></div>

            <h3 className="text-sm uppercase tracking-widest text-gray-600">
              About Us
            </h3>
            <h1 className="text-5xl uppercase tracking-widest text-gray-800 font-raleway mt-4">
              Retractability Bicycles
            </h1>
          </div>
        </section>

        <section>
          <div
            className="flex items-center justify-center text-center bg-gray-900"
            style={{
              paddingTop: "200px",
              paddingBottom: "200px",
              backgroundImage: "url('/printpics/otra.jpg')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              opacity: 0.85,
            }}
          >
            <h2 className="text-6xl text-white tracking-wide uppercase">
              Our Mission Statement
            </h2>
          </div>
        </section>

        <section>
          <div className="bg-[#b79e7e] py-16 mx-auto">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#9f886b] p-10 rounded-xl shadow-2xl">
                <p className="text-xl text-white leading-relaxed tracking-wide">
                  At Retractability, we design and manufacture bicycles that
                  retain the size and performance of traditional bikes but are
                  engineered to fold into a compact size, small enough to fit
                  into a large backpack or suitcase. Our mission is rooted in
                  our passion for cycling, where we seek to eliminate the
                  inconvenience of carrying and storing bicycles, without
                  compromising on stability or speed. By reimagining the
                  bicycle, we offer a seamless blend of portability and
                  functionality, allowing users to enjoy the full benefits of
                  biking with unparalleled ease of transport.
                </p>
                <div className="border-b-4 border-[#d8d6d0] w-36 mx-auto mt-10"></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className="flex items-center justify-center text-center bg-gray-900"
            style={{
              paddingTop: "200px",
              paddingBottom: "200px",
              backgroundImage: "url('/RealBikePics/Lworking2.jpeg')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              opacity: 0.85,
            }}
          >
            <h2 className="text-6xl text-white tracking-wide uppercase">
              Who are We?
            </h2>
          </div>
        </section>

        <section>
          <div className="relative overflow-hidden bg-[#a69d8b] py-10">
            <div className="relative z-10 bg-opacity-75 backdrop-filter backdrop-blur-lg py-10">
              <div className="max-w-[95rem] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-4xl text-center mx-auto">
                  <div className="mt-5 max-w-4xl mx-auto bg-[#a69d8b] p-10 rounded-xl shadow-2xl">
                    <p className="text-lg text-white leading-relaxed">
                      We are two college students who love biking and found a
                      lot of flaws in the current biking systems, not just at
                      our university, but around the world. We decided it was
                      important to fix these flaws, so we did just that!
                      <br />
                      <br />
                      Originally, to get around our college campus, we were torn
                      between bikes and skateboards. We chose skateboards over
                      bikes solely for their ease of storage, both in our dorms
                      and around campus. However, due to our inexperience with
                      skating, we encountered lots of hiccups.
                      <br />
                      <br />
                      We then thought: is it really better to have a bike and
                      wheel it around everywhere, getting a lock and running the
                      risk of theft? We wanted the portability and ease of
                      storage that a skateboard offers, combined with the
                      stability and secure riding experience of a full-sized
                      bicycle. So we considered foldable bikes—best of both
                      worlds, right?
                      <br />
                      <br />
                      Nope.
                      <br />
                      <br />
                      Foldable bikes, while innovative, cut out a lot of what
                      bicycles have to offer. Bikes are large and can get you
                      where you need to go with minimal effort, depending on the
                      distance. However, foldable bikes reduce tire size, making
                      you exert more energy just to cover the same distance as a
                      regular bike. The folding features also fall short;
                      they’re still cumbersome to carry around and don’t really
                      fit anywhere easily. So, what’s the point of having a
                      foldable bike?
                      <br />
                      <br />
                      That’s why we developed the Retractability Pioneer—a
                      bicycle that truly has the best of both worlds and excels
                      in every way. This isn’t just a foldable bike; it’s the
                      next step in bicycle evolution.
                    </p>
                    <div className="border-b-4 border-[#bcb8b1] w-36 mx-auto mt-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className="flex items-center justify-center text-center bg-gray-900"
            style={{
              paddingTop: "200px",
              paddingBottom: "200px",
              backgroundImage: "url('/RealBikePics/Bworking2.jpeg')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              opacity: 0.85,
            }}
          >
            <h2 className="text-6xl text-white tracking-wide uppercase">
              What we do:
            </h2>
          </div>
        </section>

        {/* what we do section */}
        <section>
          <div className="bg-[#b79e7e] py-14 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-[95rem] mx-auto">
              <div className="bg-[#91795a] p-10 rounded-xl shadow-2xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="lg:w-3/4">
                    <h2 className="text-4xl font-extrabold text-white">
                      Innovation, Precision, Trust
                    </h2>
                    <p className="mt-4 text-lg text-gray-200">
                      At Retractability, we are redefining the bicycle by
                      retaining the size and functionality of a full-sized bike
                      while introducing foldability that allows it to fit into
                      backpacks and suitcases. Our designs emphasize portability
                      without compromising on performance, making our bikes more
                      convenient than ever before. This is the next evolution in
                      biking, where creativity meets practicality, and
                      innovation leads the way.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex gap-x-6">
                      <span className="shrink-0 inline-flex justify-center items-center h-14 w-14 rounded-full border border-[#bfbab5] bg-[#bfbab5] text-white shadow-lg">
                        <HiLightBulb className="h-7 w-7" />
                      </span>
                      <div className="grow">
                        <h3 className="text-xl font-semibold text-[#EBE6E8]">
                          Driven by Innovation
                        </h3>
                        <p className="mt-2 text-gray-200">
                          Our unique take on the bicycle allows for full-sized
                          bikes to fold and fit into small spaces, offering
                          unparalleled portability and convenience.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-x-6">
                      <span className="shrink-0 inline-flex justify-center items-center h-14 w-14 rounded-full border border-[#bfbab5] bg-[#bfbab5] text-white shadow-lg">
                        <FaBalanceScale className="h-7 w-7" />
                      </span>
                      <div className="grow">
                        <h3 className="text-xl font-semibold text-[#EBE6E8]">
                          Precision in Design
                        </h3>
                        <p className="mt-2 text-gray-200">
                          Our bikes are meticulously designed with foldability
                          and portability at their core, ensuring you get the
                          best of both worlds.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-x-6">
                      <span className="shrink-0 inline-flex justify-center items-center h-14 w-14 rounded-full border border-[#bfbab5] bg-[#bfbab5] text-white shadow-lg">
                        <AiOutlineTeam className="h-7 w-7" />
                      </span>
                      <div className="grow">
                        <h3 className="text-xl font-semibold text-[#EBE6E8]">
                          A Team You Can Trust
                        </h3>
                        <p className="mt-2 text-gray-200">
                          Our commitment to quality and innovation ensures that
                          your experience with us is built on trust, from the
                          first ride to the last.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b-4 border-[#bfbab5] w-36 mx-auto mt-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section>
          <div
            className="flex items-center justify-center text-center bg-gray-900"
            style={{
              paddingTop: "200px",
              paddingBottom: "200px",
              backgroundImage: "url('/AZ.jpg')",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              opacity: 0.85,
            }}
          >
            <h2 className="text-6xl text-white tracking-wide uppercase">
              Meet the Team
            </h2>
          </div>
        </section>

        <section id="The Team">
          <div className="bg-[#97765a] py-16 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="bg-[#b38f70] p-10 rounded-xl shadow-2xl">
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
