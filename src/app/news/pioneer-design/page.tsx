"use client";

import Image from "next/image";
import { Navbar } from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#212529]">
      <Navbar />
      <div style={{ height: "100px" }}></div>

      {/* Wider, responsive container */}
      <main className="mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 lg:pt-10 pb-12 max-w-5xl lg:max-w-6xl">
        {/* Keep content encased/light while outer background is dark */}
        <article className="bg-[#6c757d] backdrop-blur-sm rounded-2xl shadow-sm ring-1 ring-white/10">
          {/* Header / Author */}
          <header className="p-6 sm:p-8 lg:p-10 border-b border-white/10">
            <div className="flex justify-between items-center">
              <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                <div className="shrink-0">
                  <Image
                    className="size-12 rounded-full ring-1 ring-white/10"
                    src="/aboutus/team/luc.jpg"
                    alt="Avatar"
                    width={48}
                    height={48}
                  />
                </div>

                <div className="grow">
                  <div className="flex justify-between items-center gap-x-2">
                    <div>
                      <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                        <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                          <span className="font-semibold text-black">
                            Lucas Somoshegyi-Szokol
                          </span>

                          <div
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-neutral-950 divide-y divide-neutral-700 shadow-lg rounded-xl"
                            role="tooltip"
                          ></div>
                        </div>
                      </div>

                      <ul className="mt-1 text-xs text-gray-800">
                        <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-400 before:rounded-full">
                          August 11, 2025
                        </li>
                        <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-400 before:rounded-full">
                          8 min read
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="space-y-6 md:space-y-8 text-black leading-8">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                Built by Students, for Students: The Retractability Pioneer
              </h2>
              <p>
                The Retractability Pioneer was built for students by students. Since we attend Arizona State University, a fairly large campus, we experience the struggles of campus commuting every day. These struggles have led us to designing the ultimate bicycle for commuters, developed in our dorms and garages, with every design consideration made with our fellow students in mind.
              </p>
              <figure className="my-6">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    className="w-full h-64 object-contain"
                    src="/news/origin/bikechain.JPEG"
                    alt="Blog Image"
                    width={800}
                    height={256}
                  />
                </div>
                <figcaption className="mt-3 text-sm text-center text-gray-900">
                  The first rideable iteration of the Pioneer.
                </figcaption>
              </figure>
              <p>
                As student entrepreneurs, our resources for prototyping are pretty limited. This forced us to get crafty and design the bike as efficiently as possible. We used CAD software for motion studies, load simulations, and part development, alongside 3D printing to get accurate parts with very low costs. We also leveraged resources provided by Arizona State&apos;s wonderful entrepreneurship organizations for machine shops and mentorship. Because of this, a vast majority of our parts are fabricated and assembled in the United States by Retractability. By keeping outsourcing to a minimum, prototyping changes have been much quicker and allow us to stay agile. Although challenging, this has allowed Retractability to keep R&amp;D costs very low, with these savings being passed on to you, the customer. Also, since we have had to make our bicycles as efficient as possible, manufacturing costs are also much lower, providing further savings.
              </p>
              
              <p>
                Every design consideration for our bicycles is done with our fellow students in mind to make getting to class as easy as possible. While prototyping, we have experimented with different frame configurations, materials, and tire compositions. Students often have long distances to travel at school, so we made a full-size frame with 26&quot; diameter tires to ensure maximum comfort while riding. Streets and paths around college campuses are unpredictable and often have debris, which encouraged us to use airless tires. Many students commute to campus by car or bus, but then have miles to travel to get around campus, which encouraged us to make our bicycle fold into a 22&quot;x20&quot;x13&quot; package. This also allows students who live at an apartment or dorm to easily take their bicycle inside, instead of leaving it out on a bike rack for thieves and the weather to ruin their day. Many students also travel back home far from campus. Our conveniently small folding profile helps students with their travels, as they only have to worry about having one more bag to take with them as opposed to a large and clunky bicycle.
              </p>
              <figure className="my-6">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    className="w-full h-72 object-contain"
                    src="/news/origin/weld.JPG"
                    alt="Blog Image"
                    width={800}
                    height={256}
                  />
                </div>
                <figcaption className="mt-3 text-sm text-center text-gray-900">
                  Welding the pioneer frame.
                </figcaption>
              </figure>
              <p>
                Our path has not been easy so far, and it definitely will not be easy going forward. We have faced countless failures with hundreds of iterations of prototypes. However, we don&apos;t view failure as an absolute negative here at Retractability. We make it a point to fail every day, so that when we are successful, we don&apos;t just succeed at our goals, but exceed them. We are very excited for you all to experience what it is like to have a bicycle that is both comfortable while ridden and convenient while not.
              </p>
              
              <p>
                This last part is for fellow students who are considering starting a venture. The startup world is daunting, and full of predictable and unpredictable challenges. It is not easy to keep going after experiencing failure after failure. But our struggles bring perseverance, which in turn brings character. Regardless of whether your venture is sold for millions or flames out, what you experience willing a product, service, or movement into fruition are irreplaceable. Now is the time to take advantage of your youth and time to start. Almost every university has programs dedicated to helping entrepreneurs. If you leverage your resources and work diligently and intelligently, very few things can stop you. And most of those things you&apos;ll end up getting through anyways.
              </p>

              <figure className="my-6">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    className="w-full h-64 object-contain"
                    src="/news/origin/inprog.JPG"
                    alt="Blog Image"
                    width={800}
                    height={256}
                  />
                </div>
                <figcaption className="mt-3 text-sm text-center text-gray-900">
                  Early prototype of the Pioneer in progress.
                </figcaption>
              </figure>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}