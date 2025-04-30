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
                  src="/Baselp.jpg"
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
                        <span className="font-semibold text-black dark:text-neutral-200">
                          Basel Kurian
                        </span>

                        <div
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl dark:bg-neutral-950 dark:divide-neutral-700"
                          role="tooltip"
                        ></div>
                      </div>
                    </div>

                    <ul className="text-xs text-gray-500 dark:text-neutral-500">
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                        April 14, 2025
                      </li>
                      <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                        8 min read
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 md:space-y-8">
            <h2 className="text-2xl font-bold">
              Retractability at Change the World: Our Mission, Our Momentum
            </h2>
            <p>
              At Retractability Bicycles, we’re committed to reshaping how
              people get around—starting right here at Arizona State University
              and extending to campuses and cities across the globe. We believe
              that commuting should be efficient, secure, and sustainable, and
              that means reinventing the tools we use every day—like the
              traditional bike.
            </p>
            <p>
              Our journey began with a simple problem: if even a skateboard
              isn’t safe from theft, how can you trust leaving a full-sized bike
              outside all day? Our solution? A full-sized folding bike that you
              can take with you—into class, into the library, into your dorm.
              And where better to launch that vision than at ASU’s Change the
              World event?
            </p>

            <h3 className="text-xl font-semibold">What Is Change the World?</h3>
            <p>
              Hosted by Arizona State University, Change the World is a
              campus-wide celebration of imagination, innovation, and
              student-powered solutions. According to ASU, it’s an event that
              “celebrates the imagination, efforts and achievements of lifelong
              learners.” It was exactly the kind of platform we were looking
              for: a place to showcase our vision, meet like-minded
              changemakers, and put Retractability in front of people who face
              the very problems we set out to fix.
            </p>

            <h3 className="text-xl font-semibold">
              Meet the Team Behind the Movement
            </h3>
            <p>
              This year, we tabled at the event with our recently expanded team:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Lucas Somoshegyi-Szokol</li>
              <li>Basel Kurian</li>
              <li>Zephan Deepu</li>
              <li>Savannah Balbin</li>
            </ul>

            <figure>
              <Image
                className="w-full object-cover rounded-xl"
                src="/team.JPG"
                alt="Blog Image"
                width={800}
                height={400}
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                The Retractability team at Change the World
              </figcaption>
            </figure>

            <h3 className="text-xl font-semibold">What We Showcased</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>A live demo of our current prototype</li>
              <li>A walkthrough of our product’s journey so far</li>
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

            <h3 className="text-xl font-semibold">
              The Pitch That Powered Us Forward
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>A tight pitch under pressure</li>
              <li>Rapid-fire Q&amp;A</li>
              <li>
                Real-time reactions from people seeing our idea for the first
                time
              </li>
            </ul>
            <p>
              Although we didn’t secure funding that day, the experience was
              invaluable. Pitching in front of a live audience while a crowd
              passed by taught us how to tell our story with clarity,
              confidence, and conviction.
            </p>

            <figure>
              <Image
                className="w-full object-cover rounded-xl"
                src="/pitch.JPG"
                alt="Blog Image"
                width={800}
                height={400}
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                The Retractability Pitch
              </figcaption>
            </figure>

            <h3 className="text-xl font-semibold">What’s Next?</h3>
            <p>
              This was just the beginning. We’re continuing to develop our
              prototypes, refine our design, and connect with communities that
              are hungry for better solutions to the same old problems. If
              you’re a student who’s ever had your bike stolen, or someone who
              wishes their commute could be more flexible—you’re who we’re
              building this for.
            </p>
            <p>
              Thanks to ASU and the Change the World event for giving us the
              platform to share our dream. We’re just getting started—and we
              can’t wait to show you where we’re going next.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
