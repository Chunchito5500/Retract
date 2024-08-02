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

export default function Timeline() {
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
                            "linear-gradient(to top, #84828f, #6a687a, #536271, #3e4c5e, #2c3d55)",
                    }}
                >
                    <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
                        <div className="max-w-3xl mb-10 lg:mb-14">
                            <h2 className="font-raleway text-4xl text-white py-4">Our Timeline</h2>
                            <p className="mt-1 font-raleway text-[#D1D1D1]">While we&apos;re in the early stages of our company and our goals, we&apos;ve outlined a comprehensive timeline detailing our future plans and how you can help make an impact on our journey.</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
                            <div>
                                <div className="mb-4">
                                    <h3 className="text-[#f6957d] font-raleway text-xs uppercase">
                                        Year
                                    </h3>
                                </div>
                                <div className="flex gap-x-5 ms-1">
                                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                        <div className="relative z-10 size-8 flex justify-center items-center">
                                            <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#f6957d] font-semibold text-xs uppercase rounded-full">
                                                1
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                                        <p className="text-sm lg:text-base text-neutral-400">
                                            <span className="text-white">Kickstart manufacturing and sales in Arizona </span> <br />
                                            We will begin with a large marketing campaign to showcase our product and gain preorders which will allow us to build the products and slowly grow.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-x-5 ms-1">
                                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                        <div className="relative z-10 size-8 flex justify-center items-center">
                                            <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#f6957d] font-semibold text-xs uppercase rounded-full">
                                                2
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                                        <p className="text-sm lg:text-base text-neutral-400">
                                            <span className="text-white">Scale Production</span> <br />
                                            Scale up production, expand to additional states, and enhance customization options.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-x-5 ms-1">
                                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                        <div className="relative z-10 size-8 flex justify-center items-center">
                                            <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#f6957d] font-semibold text-xs uppercase rounded-full">
                                                3
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                                        <p className="text-sm md:text-base text-neutral-400">
                                            <span className="text-white">Nationwide Distribution</span> <br />
                                            Nationwide distribution in the U.S., alongside the introduction of new models.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-x-5 ms-1">
                                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                        <div className="relative z-10 size-8 flex justify-center items-center">
                                            <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#f6957d] font-semibold text-xs uppercase rounded-full">
                                                4
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                                        <p className="text-sm md:text-base text-neutral-400">
                                            <span className="text-white">International Launch</span> <br />
                                            Enter international markets, starting with Canada and Europe.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-x-5 ms-1">
                                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                        <div className="relative z-10 size-8 flex justify-center items-center">
                                            <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#f6957d] font-semibold text-xs uppercase rounded-full">
                                                5
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                                        <p className="text-sm md:text-base text-neutral-400">
                                            <span className="text-white">Expand product range</span> <br />
                                            Diversify our product range and target global bike-friendly countries.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-x-5 ms-1">
                                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                        <div className="relative z-10 size-8 flex justify-center items-center">
                                            <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#f6957d] font-semibold text-xs uppercase rounded-full">
                                                ...
                                            </span>
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
