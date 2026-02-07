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
    <div className="min-h-screen bg-[#1a1816]">
      <Navbar />

      {/* Hero Section with Featured Image */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="/news/skate.JPEG"
          alt="Students biking at ASU"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay - warm brown tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816] via-[#1a1816]/60 to-transparent" />

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Category tag - amber/warm accent */}
            <span
              className={`
                inline-block px-3 py-1 mb-4 rounded-full text-xs font-medium
                bg-amber-500/20 text-amber-400 border border-amber-500/30
                ${Roboto.className}
              `}
            >
              Founder Story
            </span>

            <h1
              className={`
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white
                leading-[1.1] max-w-3xl
                ${BebasNeue.className}
              `}
            >
              From a College Problem to a Biking Revolution
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <main className="relative z-10 -mt-6">
        <article className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Author Card - warm brown */}
          <div className="bg-[#2d2926] rounded-2xl p-5 sm:p-6 mb-10 border border-[#3d3632]">
            <div className="flex items-center gap-4">
              <Image
                src="/aboutus/team/zeph.jpg"
                alt="Zephan Deepu"
                width={56}
                height={56}
                className="rounded-full ring-2 ring-amber-900/30"
              />
              <div className="flex-1">
                <p className={`text-white font-semibold ${Roboto.className}`}>
                  Zephan Deepu
                </p>
                <p className={`text-stone-400 text-sm ${Roboto.className}`}>
                  Author
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-stone-500 text-sm">
                <span className={Roboto.className}>April 28, 2025</span>
                <span className="w-1 h-1 rounded-full bg-stone-600" />
                <span
                  className={`flex items-center gap-1.5 ${Roboto.className}`}
                >
                  <IoTimeOutline className="w-4 h-4" />5 min read
                </span>
              </div>
            </div>
            {/* Mobile date */}
            <div className="flex sm:hidden items-center gap-3 mt-3 pt-3 border-t border-[#3d3632] text-stone-500 text-sm">
              <span className={Roboto.className}>April 28, 2025</span>
              <span className="w-1 h-1 rounded-full bg-stone-600" />
              <span className={`flex items-center gap-1.5 ${Roboto.className}`}>
                <IoTimeOutline className="w-4 h-4" />5 min read
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className={`prose-custom space-y-6 ${Roboto.className}`}>
            {/* Lead paragraph - larger */}
            <p className="text-xl sm:text-2xl text-stone-200 leading-relaxed font-light">
              If you have ever biked through a college campus like Arizona State
              University, you would know that leaving your bike outside is
              basically asking to get it stolen.
            </p>

            <p className="text-stone-400 text-lg leading-[1.9]">
              No matter how many locks you use, someone eventually will snatch
              your bike or wheels. You also are not exactly allowed to bring
              your bikes inside. This is a serious and real problem that
              students like Lucas Somoshegyi-Szokol and Basel Kurian faced at
              ASU.
            </p>

            <p className="text-stone-400 text-lg leading-[1.9]">
              They loved biking, but there was a stress that came with riding
              one. They thought that foldable bikes could be the answer, but as
              they looked at the market, they realized the foldable bikes had
              serious flaws. Most foldable bikes had awkwardly tiny wheels that
              made riding them not feel like riding a normal bicycle. Because of
              the proportions, the bikes did not feel like an upgrade, but more
              a compromise.
            </p>

            {/* Pull quote - amber accent */}
            <blockquote className="relative my-10 py-8 px-6 sm:px-10 border-l-4 border-amber-500 bg-amber-500/5 rounded-r-xl">
              <p
                className={`text-2xl sm:text-3xl text-stone-200 leading-snug ${BebasNeue.className}`}
              >
                "With Retractability, you can ride it like a normal bike
                outside, and then store it wherever you need to."
              </p>
            </blockquote>

            <p className="text-stone-400 text-lg leading-[1.9]">
              Lucas and Basel decided to reimagine the idea completely.
              Together, they developed the Retractability Pioneer: a full-sized
              bike that rides like a normal one, but folds down small enough to
              carry into buildings. No more leaving your bike outside and hoping
              it does not get stolen. No more using a huge bike rack to store
              your bike when not using it.
            </p>

            <p className="text-stone-400 text-lg leading-[1.9]">
              The Retractability Pioneer is everything a foldable bike should
              be, but built to be utilized without any sacrifices.
              Retractability is powered by innovation, precision, and trust, and
              it is changing the way that students, commuters, and city riders
              travel.
            </p>

            <p className="text-stone-400 text-lg leading-[1.9]">
              Retractability is not just making foldable bikes, but
              revolutionizing the industry to make it easier for all who bike.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-[#3d3632]" />
            <span className="text-stone-600 text-2xl">✦</span>
            <div className="flex-1 h-px bg-[#3d3632]" />
          </div>

          {/* Author Bio Footer */}
          <div className="bg-[#2d2926] rounded-2xl p-6 sm:p-8 mb-16 border border-[#3d3632]">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Image
                src="/aboutus/team/zeph.jpg"
                alt="Zephan Deepu"
                width={80}
                height={80}
                className="rounded-full ring-2 ring-amber-900/30"
              />
              <div>
                <p
                  className={`text-xs text-stone-500 uppercase tracking-wider mb-1 ${Roboto.className}`}
                >
                  Written by
                </p>
                <p
                  className={`text-xl text-white font-semibold mb-2 ${Roboto.className}`}
                >
                  Zephan Deepu
                </p>
                <p
                  className={`text-stone-400 text-sm leading-relaxed ${Roboto.className}`}
                >
                  Zephan is the head of Marketing at Retractability Bicycles.
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
                className="group bg-[#2d2926] rounded-xl p-4 border border-[#3d3632] hover:border-amber-500/30 transition-colors"
              >
                <p
                  className={`text-white group-hover:text-amber-400 transition-colors ${Roboto.className}`}
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
