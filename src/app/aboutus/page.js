"use client";

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { HiLightBulb } from "react-icons/hi";
import { FaBalanceScale } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { useState } from "react";
import { GiHammerBreak } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdDirectionsBike } from "react-icons/md";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Navbar />
      <section className="bg-[white] dark:bg-gray-900">
        <div
          style={{
            background:
              "linear-gradient(to top, #362239, #34293e, #2f394d, #43505c, #4d5b64)",
          }}
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="space-y-5 md:space-y-8">
              <div className="space-y-5 md:space-y-8">
                <div className="space-y-3">
                  <h2 className="font-raleway text-4xl text-white text-center">
                    About Us
                  </h2>
                  <p className="text-lg font-raleway text-neutral-200 text-center">
                    Here at Retractability Bicycles, we take pride in our
                    innovative approach.
                  </p>
                  <br />
                  <p className="text-sm font-raleway text-neutral-200">
                    Retractability Mission Statement:
                  </p>
                  <p className="text-md font-medium text-neutral-200">
                    At Retractability, we bring innovative ideas to life,
                    fostering a vibrant community of individuals who find joy in
                    our unique products. We design and sell bicycles that retain
                    the size and functionality of traditional bikes but can fold
                    to fit into a large backpack. By completely reimagining the
                    bicycle, we&apos;ve integrated a system of strategically
                    placed hinges and foldable wheels, creating a compact and
                    portable design. We developed this solution out of our love
                    for the stability and speed of bicycles and our desire to
                    eliminate the inconvenience of carrying and storing them.
                    With Retractability, you can enjoy the best aspects of
                    biking with the added convenience of easy storage and
                    transport.
                  </p>
                </div>
                <figure>
                  <Image
                    className="w-full object-cover rounded-xl"
                    src="/RetractOrange.png"
                    alt="Blog Image"
                    width={800}
                    height={600}
                  />
                  <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    3D graphic of the Quark Bike.
                  </figcaption>
                </figure>
                <blockquote className="text-center p-4 sm:px-7">
                  <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
                    &quot;Only at Retractability, can you count on the best of
                    the best&quot;
                  </p>
                  <p className="mt-5 text-gray-800 dark:text-neutral-200">
                    Hugh Jackman
                  </p>
                </blockquote>
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                  <nav
                    className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-y-px sm:gap-y-0 sm:gap-x-4"
                    aria-label="Tabs"
                    role="tablist"
                    aria-orientation="horizontal"
                  >
                    <button
                      type="button"
                      className={`hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 ${
                        activeTab === "tab1" ? "active" : ""
                      }`}
                      id="tabs-with-card-item-1"
                      aria-selected={activeTab === "tab1"}
                      data-hs-tab="#tabs-with-card-1"
                      aria-controls="tabs-with-card-1"
                      role="tab"
                      onClick={() => handleTabClick("tab1")}
                    >
                      <HiLightBulb className="shrink-0 hidden sm:block size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white" />
                      <span className="mt-5">
                        <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-red-500 dark:text-neutral-200">
                          Driven by Creativity
                        </span>
                        <span className="hidden lg:block mt-2 text-gray-800 dark:text-neutral-200">
                          We bring dreams to life through our creativity,
                          ensuring that no idea is dismissed and working
                          tirelessly to bring the future closer.
                        </span>
                      </span>
                    </button>
                    <button
                      type="button"
                      className={`hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 ${
                        activeTab === "tab2" ? "active" : ""
                      }`}
                      id="tabs-with-card-item-2"
                      aria-selected={activeTab === "tab2"}
                      data-hs-tab="#tabs-with-card-2"
                      aria-controls="tabs-with-card-2"
                      role="tab"
                      onClick={() => handleTabClick("tab2")}
                    >
                      <FaBalanceScale className="shrink-0 hidden sm:block size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white" />
                      <span className="mt-5">
                        <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                          Built on a Strong Work Ethic
                        </span>
                        <span className="hidden lg:block mt-2 text-gray-800 dark:text-neutral-200">
                          We work diligently to deliver our products with care
                          and precision, ensuring that every bike you purchase
                          from us meets the highest standards.
                        </span>
                      </span>
                    </button>
                    <button
                      type="button"
                      className={`hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 ${
                        activeTab === "tab3" ? "active" : ""
                      }`}
                      id="tabs-with-card-item-3"
                      aria-selected={activeTab === "tab3"}
                      data-hs-tab="#tabs-with-card-3"
                      aria-controls="tabs-with-card-3"
                      role="tab"
                      onClick={() => handleTabClick("tab3")}
                    >
                      <AiOutlineTeam className="shrink-0 hidden sm:block size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-white" />
                      <span className="mt-5">
                        <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                          A Team You Can Rely On
                        </span>
                        <span className="hidden lg:block mt-2 text-gray-800 dark:text-neutral-200">
                          We embrace challenges and strive to make your
                          experience with us stress-free and rewarding.
                        </span>
                      </span>
                    </button>
                  </nav>
                  <div className="mt-12 md:mt-16">
                    {activeTab === "tab1" && (
                      <div
                        id="tabs-with-card-1"
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-1"
                      >
                        <div className="max-w-[1140px] lg:pb-32 relative">
                          <Image
                            className="max-w-full rounded-[1.25rem] h-auto object-cover object-center w-full"
                            src="/RealBikePics/RbikeDesk.jpeg"
                            alt="Features Image"
                            width={1140}
                            height={550}
                          />
                        </div>
                      </div>
                    )}
                    {activeTab === "tab2" && (
                      <div
                        id="tabs-with-card-2"
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-2"
                      >
                        <div className="max-w-[1140px] lg:pb-32 relative">
                          <Image
                            className="max-w-full rounded-[1.25rem] h-auto object-cover object-center w-full"
                            src="/RealBikePics/Rbikeside.jpeg"
                            alt="Features Image"
                            width={1140}
                            height={550}
                          />
                        </div>
                      </div>
                    )}
                    {activeTab === "tab3" && (
                      <div
                        id="tabs-with-card-3"
                        role="tabpanel"
                        aria-labelledby="tabs-with-card-item-3"
                      >
                        <div className="max-w-[1140px] lg:pb-32 relative">
                          <Image
                            className="max-w-full rounded-[1.25rem] h-auto object-cover object-center w-full"
                            src="/RealBikePics/Rbikeangle.jpeg"
                            alt="Features Image"
                            width={1140}
                            height={550}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div label="The Process Section">
                  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                      <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
                        Our process
                      </h2>
                      <p className="mt-3 text-gray-800 dark:text-neutral-200">
                        From our Garage, To your Home
                      </p>
                    </div>
                    <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
                      <div className="col-span-6 sm:col-span-4 text-center">
                        <GiHammerBreak className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-200" />
                        <div className="mt-2 sm:mt-6">
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                            Assembly
                          </h3>
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-4 text-center">
                        <CiDeliveryTruck className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-200" />
                        <div className="mt-2 sm:mt-6">
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                            Delivery
                          </h3>
                        </div>
                      </div>
                      <div className="col-span-6 col-start-4 sm:col-span-4 text-center">
                        <MdDirectionsBike className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-neutral-200" />
                        <div className="mt-2 sm:mt-6">
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                            Yours to Ride
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
                      <div className="hidden md:block col-span-4 md:col-span-3">
                        <Image
                          className="rounded-xl object-cover object-center w-full"
                          src="/RealBikePics/Bworking.jpeg"
                          alt="Features Image"
                          width={240}
                          height={360}
                        />
                      </div>
                      <div className="col-span-4 md:col-span-3">
                        <Image
                          className="rounded-xl object-cover object-center w-full"
                          src="/RealBikePics/Lworking2.jpeg"
                          alt="Features Image"
                          width={240}
                          height={480}
                        />
                      </div>
                      <div className="col-span-4 md:col-span-3">
                        <Image
                          className="rounded-xl object-cover object-center w-full"
                          src="/RetractGrayBike.png"
                          alt="Features Image"
                          width={240}
                          height={360}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div label="Team section">
                  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                        Meet the Team
                      </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                      <div className="text-center">
                        <Image
                          className="rounded-xl object-cover object-center w-48 h-48 mx-auto"
                          src="/profile.jpg"
                          alt="Avatar"
                          width={192}
                          height={192}
                        />
                        <div className="mt-2 sm:mt-4">
                          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                            Lucas Somoshegyi-Szokol
                          </h3>
                          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                            Founder / CEO
                          </p>
                        </div>
                      </div>
                      <div className="text-center">
                        <Image
                          className="rounded-xl object-cover object-center w-48 h-48 mx-auto"
                          src="/profile.jpg"
                          alt="Avatar"
                          width={192}
                          height={192}
                        />
                        <div className="mt-2 sm:mt-4">
                          <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                            Basel Kurian
                          </h3>
                          <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                            Founder / CEO
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
