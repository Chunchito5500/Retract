"use client";

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function Green() {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <Navbar />
            <section className="relative bg-[white] dark:bg-gray-900 overflow-hidden">
                <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className=" text-gray-500 sm:text-lg dark:text-gray-400">
                        <div className="space-y-5 md:space-y-8">
                            <div className="space-y-3 text-center">
                                <h2 className="font-raleway text-4xl text-white">Green Initiative</h2>
                                <p className="text-lg font-convergence text-neutral-200">
                                    Here at Retractability, we strive to fight Green House Gases
                                </p>
                                <p className="text-sm font-raleway text-neutral-200">
                                    The Retractability Promise:
                                </p>
                                <p className="text-md font-convergence text-neutral-200">
                                    At Retractability, we bring innovative ideas to life, fostering a vibrant community of individuals who find joy in our unique products. We design and sell bicycles that retain the size and functionality of traditional bikes but can fold to fit into a large backpack. By completely reimagining the bicycle, we&apos;ve integrated a system of strategically placed hinges and foldable wheels, creating a compact and portable design. We developed this solution out of our love for the stability and speed of bicycles and our desire to eliminate the inconvenience of carrying and storing them. With Retractability, you can enjoy the best aspects of biking with the added convenience of easy storage and transport.
                                </p>
                            </div>
                            <figure>
                                <Image className="w-full object-cover rounded-xl" src="/RetractOrange.png" alt="Blog Image" width={800} height={600} />
                                <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                                    3D graphic of the Quark Bike.
                                </figcaption>
                            </figure>
                            <blockquote className="text-center p-4 sm:px-7">
                                <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
                                    &quot;Only at Retractability, can you count on the best of the best&quot;
                                </p>
                                <p className="mt-5 text-gray-800 dark:text-neutral-200">Hugh Jackman</p>
                            </blockquote>
                            <div className="space-y-3">
                                <p className="text-3xl font-convergence text-neutral-200">
                                    The Solution:
                                </p>

                                <p className="text-md font-convergence text-neutral-200">
                                    The solution to these problems is simple. Plant a tree,
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 z-0">
                    <div className="triangle-shape"></div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
