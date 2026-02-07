"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import localFont from "next/font/local";
import { IoTimeOutline } from "react-icons/io5";

const BebasNeue = localFont({
  src: "../../../fonts/BebasNeue-Regular.ttf",
  display: "swap",
});

const Roboto = localFont({
  src: "../../../fonts/Roboto-Regular.ttf",
  display: "swap",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0f12]">
      <Navbar />

      {/* Hero Section with Featured Image */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="/news/fullteam.JPG"
          alt="The Retractability team at Change the World"
          fill
          className="object-cover object-[center_20%]"
          priority
        />
        {/* Gradient overlay - cool steel blue tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/60 to-transparent" />

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Category tag - steel blue accent */}
            <span
              className={`
                inline-block px-3 py-1 mb-4 rounded-full text-xs font-medium
                bg-sky-500/20 text-sky-400 border border-sky-500/30
                ${Roboto.className}
              `}
            >
              Events
            </span>

            <h1
              className={`
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white
                leading-[1.1] max-w-3xl
                ${BebasNeue.className}
              `}
            >
              Retractability at Change the World: Our Mission, Our Momentum
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <main className="relative z-10 -mt-6">
        <article className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Author Card - steel blue */}
          <div className="bg-[#161a1f] rounded-2xl p-5 sm:p-6 mb-10 border border-[#2a3040]">
            <div className="flex items-center gap-4">
              <Image
                src="/aboutus/team/Bas.jpg"
                alt="Basel Kurian"
                width={56}
                height={56}
                className="rounded-full ring-2 ring-sky-900/30"
              />
              <div className="flex-1">
                <p className={`text-white font-semibold ${Roboto.className}`}>
                  Basel Kurian
                </p>
                <p className={`text-zinc-400 text-sm ${Roboto.className}`}>
                  Co-Founder & CTO
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-zinc-500 text-sm">
                <span className={Roboto.className}>April 14, 2025</span>
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span
                  className={`flex items-center gap-1.5 ${Roboto.className}`}
                >
                  <IoTimeOutline className="w-4 h-4" />8 min read
                </span>
              </div>
            </div>
            {/* Mobile date */}
            <div className="flex sm:hidden items-center gap-3 mt-3 pt-3 border-t border-[#2a3040] text-zinc-500 text-sm">
              <span className={Roboto.className}>April 14, 2025</span>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <span className={`flex items-center gap-1.5 ${Roboto.className}`}>
                <IoTimeOutline className="w-4 h-4" />8 min read
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className={`prose-custom space-y-6 ${Roboto.className}`}>
            {/* Lead paragraph - larger */}
            <p className="text-xl sm:text-2xl text-zinc-200 leading-relaxed font-light">
              At Retractability Bicycles, we&apos;re committed to reshaping how
              people get around. Starting right here at Arizona State University
              and extending to campuses and cities across the globe.
            </p>

            <p className="text-zinc-400 text-lg leading-[1.9]">
              We believe that commuting should be efficient, secure, and
              sustainable, and that means reinventing the tools we use every
              day, like the traditional bike.
            </p>

            <p className="text-zinc-400 text-lg leading-[1.9]">
              Our journey began with a simple problem: if even a skateboard
              isn&apos;t safe from theft, how can you trust leaving a full-sized
              bike outside all day? Our solution? A full-sized folding bike that
              you can take with you into class, the library, and even your
              dorm. And where better to launch that vision than at ASU&apos;s
              Change the World event?
            </p>

            {/* Section heading */}
            <h2
              className={`text-2xl sm:text-3xl text-white pt-4 ${BebasNeue.className}`}
            >
              What Is Change the World?
            </h2>

            <p className="text-zinc-400 text-lg leading-[1.9]">
              Hosted by Arizona State University, Change the World is a
              campus-wide celebration of imagination, innovation, and
              student-powered solutions. According to ASU, it&apos;s an event
              that &ldquo;celebrates the imagination, efforts and achievements
              of lifelong learners.&rdquo; It was exactly the kind of platform
              we were looking for: a place to showcase our vision, meet
              like-minded changemakers, and put Retractability in front of
              people who face the very problems we set out to fix.
            </p>

            {/* Pull quote - sky blue accent */}
            <blockquote className="relative my-10 py-8 px-6 sm:px-10 border-l-4 border-sky-400 bg-sky-500/5 rounded-r-xl">
              <p
                className={`text-2xl sm:text-3xl text-zinc-200 leading-snug ${BebasNeue.className}`}
              >
                "Their feedback was inspiring, and their excitement reminded us
                why this project matters."
              </p>
            </blockquote>

            {/* Section heading */}
            <h2
              className={`text-2xl sm:text-3xl text-white pt-4 ${BebasNeue.className}`}
            >
              Meet the Team Behind the Movement
            </h2>

            <p className="text-zinc-400 text-lg leading-[1.9]">
              This year, we tabled at the event with our recently expanded team:
            </p>

            <ul className="space-y-2 text-zinc-400 text-lg pl-6">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Lucas Somoshegyi-Szokol
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Basel Kurian
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Zephan Deepu
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Savannah Balbin
              </li>
            </ul>

            {/* Section heading */}
            <h2
              className={`text-2xl sm:text-3xl text-white pt-4 ${BebasNeue.className}`}
            >
              What We Showcased
            </h2>

            <ul className="space-y-2 text-zinc-400 text-lg pl-6">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />A live
                demo of our current prototype
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />A
                walkthrough of our product&apos;s journey so far
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Our mission to solve real-world student problems with accessible
                innovation
              </li>
            </ul>

            <p className="text-zinc-400 text-lg leading-[1.9]">
              What made the experience so memorable was not just the tech we
              brought, but the people we met. Families, students,
              entrepreneurs, and curious visitors stopped by to see the bike,
              hear our pitch, and share their own thoughts on campus commuting.
            </p>

            {/* Inline image */}
            <figure className="my-10 -mx-6 sm:mx-0">
              <div className="relative aspect-[16/9] overflow-hidden sm:rounded-2xl ring-1 ring-[#2a3040]">
                <Image
                  src="/news/pitch.JPG"
                  alt="The Retractability Pitch"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`mt-4 text-center text-sm text-zinc-500 ${Roboto.className}`}
              >
                The Retractability team pitching at Change the World.
              </figcaption>
            </figure>

            {/* Section heading */}
            <h2
              className={`text-2xl sm:text-3xl text-white pt-4 ${BebasNeue.className}`}
            >
              The Pitch That Powered Us Forward
            </h2>

            <ul className="space-y-2 text-zinc-400 text-lg pl-6">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />A tight
                pitch under pressure
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Rapid-fire Q&amp;A
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Real-time reactions from people seeing our idea for the first
                time
              </li>
            </ul>

            <p className="text-zinc-400 text-lg leading-[1.9]">
              Although we didn&apos;t secure funding that day, the experience
              was invaluable. Pitching in front of a live audience while a crowd
              passed by taught us how to tell our story with clarity,
              confidence, and conviction.
            </p>

            {/* Section heading */}
            <h2
              className={`text-2xl sm:text-3xl text-white pt-4 ${BebasNeue.className}`}
            >
              What&apos;s Next?
            </h2>

            <p className="text-zinc-400 text-lg leading-[1.9]">
              This was just the beginning. We&apos;re continuing to develop our
              prototypes, refine our design, and connect with communities that
              are hungry for better solutions to the same old problems. If
              you&apos;re a student who&apos;s ever had your bike stolen, or
              someone who wishes their commute could be more
              flexible—you&apos;re who we&apos;re building this for.
            </p>

            <p className="text-zinc-400 text-lg leading-[1.9]">
              Thanks to ASU and the Change the World event for giving us the
              platform to share our dream. We&apos;re just getting started—and
              we can&apos;t wait to show you where we&apos;re going next.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-[#2a3040]" />
            <span className="text-zinc-600 text-2xl">✦</span>
            <div className="flex-1 h-px bg-[#2a3040]" />
          </div>

          {/* Author Bio Footer */}
          <div className="bg-[#161a1f] rounded-2xl p-6 sm:p-8 mb-16 border border-[#2a3040]">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Image
                src="/aboutus/team/Bas.jpg"
                alt="Basel Kurian"
                width={80}
                height={80}
                className="rounded-full ring-2 ring-sky-900/30"
              />
              <div>
                <p
                  className={`text-xs text-zinc-500 uppercase tracking-wider mb-1 ${Roboto.className}`}
                >
                  Written by
                </p>
                <p
                  className={`text-xl text-white font-semibold mb-2 ${Roboto.className}`}
                >
                  Basel Kurian
                </p>
                <p
                  className={`text-zinc-400 text-sm leading-relaxed ${Roboto.className}`}
                >
                  Basel is the Co-Founder and CTO of Retractability, overseeing
                  operations, technology, and business development.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mb-16">
            <h3 className={`text-2xl text-white mb-6 ${BebasNeue.className}`}>
              More Stories
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/news"
                className="group bg-[#161a1f] rounded-xl p-4 border border-[#2a3040] hover:border-sky-500/30 transition-colors"
              >
                <p
                  className={`text-white group-hover:text-sky-400 transition-colors ${Roboto.className}`}
                >
                  View all articles →
                </p>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
