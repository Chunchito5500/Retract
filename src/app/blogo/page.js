"use client";

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "../globals.css";
import "../styles.css";

export default function Home() {
  return (
    <div className="bg-[#dadbe3]">
      <Navbar />
      <div style={{ height: "100px" }}></div>
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="shrink-0">
                <Image
                  className="size-12 rounded-full"
                  src="/team/zeph.jpg"
                  alt="Avatar"
                />
              </div>

              <div className="grow">
                <div className="flex justify-between items-center gap-x-2">
                  <div>
                    <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                      <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                        <span className="font-semibold text-black dark:text-neutral-200">
                          Zephan Deepu
                        </span>

                        <div
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl dark:bg-neutral-950 dark:divide-neutral-700"
                          role="tooltip"
                        ></div>
                      </div>
                    </div>

                    <ul className="text-xs text-gray-500 dark:text-neutral-500">
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                        April 28, 2025
                      </li>
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                        5 min read
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 md:space-y-8">
            <h2 className="text-2xl font-bold">
              From a College Problem to a Biking Revolution: The Story Behind
              Retractability
            </h2>
            <p>
              If you have ever biked through a college campus like Arizona State
              University, you would know that leaving your bike outside is
              basically asking to get it stolen. No matter how many locks you
              use, someone eventually will snatch your bike or wheels. You also
              are not exactly allowed to bring your bikes inside. This is a
              serious and real problem that students like Lucas
              Somoshegyi-Szokol and Basel Kurian faced at ASU.
            </p>
            <figure>
              <Image
                className="w-full object-cover rounded-xl"
                src="/skate.JPEG"
                alt="Blog Image"
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                An everyday problem for students at ASU.
              </figcaption>
            </figure>
            <p>
              They loved biking, but there was a stress that came with riding
              one. They thought that foldable bikes could be the answer, but as
              they looked at the market, they realized the foldable bikes had
              serious flaws. Most foldable bikes had awkwardly tiny wheels that
              made riding them not feel like riding a normal bicycle. Because of
              the proportions, the bikes did not feel like an upgrade, but more
              a compromise.
            </p>
            <p>
              Lucas and Basel decided to reimagine the idea completely.
              Together, they developed the Retractability Pioneer: a full-sized
              bike that rides like a normal one, but folds down small enough to
              carry into buildings. No more leaving your bike outside and hoping
              it does not get stolen. No more using a huge bike rack to store
              your bike when not using it. With Retractability, you can ride it
              like a normal bike outside, and can then store it wherever you
              need to.
            </p>
            <p>
              The Retractability Pioneer is everything a foldable bike should
              be, but built to be utilized without any sacrifices.
              Retractability is powered by innovation, precision, and trust, and
              it is changing the way that students, commuters, and city riders
              travel. Retractability is not just making foldable bikes, but
              revolutionizing the industry to make it easier for all who bike.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
