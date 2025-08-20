"use client";

import Image from "next/image";
import { Navbar } from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900">
      <Navbar />
      <div style={{ height: "100px" }}></div>

      {/* Wider, responsive container */}
      <main className="mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 lg:pt-10 pb-12 max-w-5xl lg:max-w-6xl">
        {/* Keep content encased/light while outer background is dark */}
        <article className="bg-[#8d99ae] backdrop-blur-sm rounded-2xl shadow-sm ring-1 ring-white/10">
          {/* Header / Author */}
          <header className="p-6 sm:p-8 lg:p-10 border-b border-white/10">
            <div className="flex justify-between items-center">
              <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                <div className="shrink-0">
                  <Image
                    className="size-12 rounded-full ring-1 ring-white/10"
                    src="/aboutus/team/Bas.jpg"
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
                            Basel Kurian
                          </span>

                          <div
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-neutral-950 divide-y divide-neutral-700 shadow-lg rounded-xl"
                            role="tooltip"
                          ></div>
                        </div>
                      </div>

                      <ul className="mt-1 text-xs text-gray-800">
                        <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-400 before:rounded-full">
                          April 14, 2025
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
                Retractability at Change the World: Our Mission, Our Momentum
              </h2>
              <p>
                At Retractability Bicycles, we&apos;re committed to reshaping how
                people get around—starting right here at Arizona State University
                and extending to campuses and cities across the globe. We believe
                that commuting should be efficient, secure, and sustainable, and
                that means reinventing the tools we use every day—like the
                traditional bike.
              </p>
              <p>
                Our journey began with a simple problem: if even a skateboard
                isn&apos;t safe from theft, how can you trust leaving a full-sized bike
                outside all day? Our solution? A full-sized folding bike that you
                can take with you—into class, into the library, into your dorm.
                And where better to launch that vision than at ASU&apos;s Change the
                World event?
              </p>

              <h3 className="text-2xl font-semibold tracking-tight text-black">
                What Is Change the World?
              </h3>
              <p>
                Hosted by Arizona State University, Change the World is a
                campus-wide celebration of imagination, innovation, and
                student-powered solutions. According to ASU, it&apos;s an event that
                &ldquo;celebrates the imagination, efforts and achievements of lifelong
                learners.&rdquo; It was exactly the kind of platform we were looking
                for: a place to showcase our vision, meet like-minded
                changemakers, and put Retractability in front of people who face
                the very problems we set out to fix.
              </p>

              <h3 className="text-2xl font-semibold tracking-tight text-black">
                Meet the Team Behind the Movement
              </h3>
              <p>
                This year, we tabled at the event with our recently expanded team:
              </p>
              <ul className="list-disc ml-5 space-y-2 marker:text-gray-500">
                <li>Lucas Somoshegyi-Szokol</li>
                <li>Basel Kurian</li>
                <li>Zephan Deepu</li>
                <li>Savannah Balbin</li>
              </ul>

              <figure className="my-6 overflow-hidden rounded-xl ring-1 ring-white/10">
                <Image
                  className="w-full object-cover"
                  src="/news/fullteam.JPG"
                  alt="Blog Image"
                  width={800}
                  height={400}
                />
                <figcaption className="mt-3 text-sm text-center text-gray-500 px-4 pb-2">
                  The Retractability team at Change the World
                </figcaption>
              </figure>

              <h3 className="text-2xl font-semibold tracking-tight text-black">
                What We Showcased
              </h3>
              <ul className="list-disc ml-5 space-y-2 marker:text-gray-500">
                <li>A live demo of our current prototype</li>
                <li>A walkthrough of our product&apos;s journey so far</li>
                <li>
                  Our mission to solve real-world student problems with accessible
                  innovation
                </li>
              </ul>
              <p>
                What made the experience so memorable was not just the tech we
                brought—it was the people we met. Families, students,
                entrepreneurs, and curious visitors stopped by to see the bike,
                hear our pitch, and share their own thoughts on campus commuting.
                Their feedback was inspiring, and their excitement reminded us why
                this project matters.
              </p>

              <h3 className="text-2xl font-semibold tracking-tight text-black">
                The Pitch That Powered Us Forward
              </h3>
              <ul className="list-disc ml-5 space-y-2 marker:text-gray-500">
                <li>A tight pitch under pressure</li>
                <li>Rapid-fire Q&amp;A</li>
                <li>
                  Real-time reactions from people seeing our idea for the first
                  time
                </li>
              </ul>
              <p>
                Although we didn&apos;t secure funding that day, the experience was
                invaluable. Pitching in front of a live audience while a crowd
                passed by taught us how to tell our story with clarity,
                confidence, and conviction.
              </p>

              <figure className="my-6 overflow-hidden rounded-xl ring-1 ring-white/10">
                <Image
                  className="w-full object-cover"
                  src="/news/pitch.JPG"
                  alt="Blog Image"
                  width={800}
                  height={400}
                />
                <figcaption className="mt-3 text-sm text-center text-gray-500 px-4 pb-2">
                  The Retractability Pitch
                </figcaption>
              </figure>

              <h3 className="text-2xl font-semibold tracking-tight text-black">
                What&apos;s Next?
              </h3>
              <p>
                This was just the beginning. We&apos;re continuing to develop our
                prototypes, refine our design, and connect with communities that
                are hungry for better solutions to the same old problems. If
                you&apos;re a student who&apos;s ever had your bike stolen, or someone who
                wishes their commute could be more flexible—you&apos;re who we&apos;re
                building this for.
              </p>
              <p>
                Thanks to ASU and the Change the World event for giving us the
                platform to share our dream. We&apos;re just getting started—and we
                can&apos;t wait to show you where we&apos;re going next.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}