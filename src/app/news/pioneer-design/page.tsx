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
    <div className="min-h-screen bg-[#15171a]">
      <Navbar />

      {/* Hero Section with Featured Image */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src="/news/origin/bikechain.JPEG"
          alt="The first rideable iteration of the Pioneer"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay - cool slate tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15171a] via-[#15171a]/60 to-transparent" />

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16">
          <div className="max-w-4xl mx-auto">
            {/* Category tag - slate/cool accent */}
            <span
              className={`
                inline-block px-3 py-1 mb-4 rounded-full text-xs font-medium
                bg-slate-500/20 text-slate-300 border border-slate-500/30
                ${Roboto.className}
              `}
            >
              Design & Engineering
            </span>

            <h1
              className={`
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white
                leading-[1.1] max-w-3xl
                ${BebasNeue.className}
              `}
            >
              Built by Students, for Students: The Retractability Pioneer
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <main className="relative z-10 -mt-6">
        <article className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Author Card - cool slate */}
          <div className="bg-[#1e2124] rounded-2xl p-5 sm:p-6 mb-10 border border-slate-700/50">
            <div className="flex items-center gap-4">
              <Image
                src="/aboutus/team/luc.jpg"
                alt="Lucas Somoshegyi-Szokol"
                width={56}
                height={56}
                className="rounded-full ring-2 ring-slate-600/30"
              />
              <div className="flex-1">
                <p className={`text-white font-semibold ${Roboto.className}`}>
                  Lucas Somoshegyi-Szokol
                </p>
                <p className={`text-slate-400 text-sm ${Roboto.className}`}>
                  Co-Founder & CEO
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-slate-500 text-sm">
                <span className={Roboto.className}>August 11, 2025</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span
                  className={`flex items-center gap-1.5 ${Roboto.className}`}
                >
                  <IoTimeOutline className="w-4 h-4" />8 min read
                </span>
              </div>
            </div>
            {/* Mobile date */}
            <div className="flex sm:hidden items-center gap-3 mt-3 pt-3 border-t border-slate-700/50 text-slate-500 text-sm">
              <span className={Roboto.className}>August 11, 2025</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span className={`flex items-center gap-1.5 ${Roboto.className}`}>
                <IoTimeOutline className="w-4 h-4" />8 min read
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className={`prose-custom space-y-6 ${Roboto.className}`}>
            {/* Lead paragraph - larger */}
            <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed font-light">
              The Retractability Pioneer was built for students by students.
              Since we attend Arizona State University, a fairly large campus,
              we experience the struggles of campus commuting every day.
            </p>

            <p className="text-slate-400 text-lg leading-[1.9]">
              These struggles have led us to designing the ultimate bicycle for
              commuters, developed in our dorms and garages, with every design
              consideration made with our fellow students in mind.
            </p>

            <p className="text-slate-400 text-lg leading-[1.9]">
              As student entrepreneurs, our resources for prototyping are pretty
              limited. This forced us to get crafty and design the bike as
              efficiently as possible. We used CAD software for motion studies,
              load simulations, and part development, alongside 3D printing to
              get accurate parts with very low costs.
            </p>

            {/* Pull quote - slate accent */}
            <blockquote className="relative my-10 py-8 px-6 sm:px-10 border-l-4 border-slate-400 bg-slate-500/5 rounded-r-xl">
              <p
                className={`text-2xl sm:text-3xl text-slate-200 leading-snug ${BebasNeue.className}`}
              >
                "We make it a point to fail every day, so that when we are
                successful, we don't just succeed at our goals, but exceed
                them."
              </p>
            </blockquote>

            <p className="text-slate-400 text-lg leading-[1.9]">
              We also leveraged resources provided by Arizona State&apos;s
              wonderful entrepreneurship organizations for machine shops and
              mentorship. Because of this, a vast majority of our parts are
              fabricated and assembled in the United States by Retractability.
              By keeping outsourcing to a minimum, prototyping changes have been
              much quicker and allow us to stay agile.
            </p>

            {/* Inline image */}
            <figure className="my-10 -mx-6 sm:mx-0">
              <div className="relative aspect-[16/9] overflow-hidden sm:rounded-2xl ring-1 ring-slate-700/50">
                <Image
                  src="/news/origin/weld.JPG"
                  alt="Welding the pioneer frame"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`mt-4 text-center text-sm text-slate-500 ${Roboto.className}`}
              >
                Welding the Pioneer frame in our workshop.
              </figcaption>
            </figure>

            <p className="text-slate-400 text-lg leading-[1.9]">
              Although challenging, this has allowed Retractability to keep R&D
              costs very low, with these savings being passed on to you, the
              customer. Also, since we have had to make our bicycles as
              efficient as possible, manufacturing costs are also much lower,
              providing further savings.
            </p>

            <p className="text-slate-400 text-lg leading-[1.9]">
              Every design consideration for our bicycles is done with our
              fellow students in mind to make getting to class as easy as
              possible. While prototyping, we have experimented with different
              frame configurations, materials, and tire compositions.
            </p>

            <p className="text-slate-400 text-lg leading-[1.9]">
              Students often have long distances to travel at school, so we made
              a full-size frame with 26&quot; diameter tires to ensure maximum
              comfort while riding. Streets and paths around college campuses
              are unpredictable and often have debris, which encouraged us to
              use airless tires.
            </p>

            {/* Inline image */}
            <figure className="my-10 -mx-6 sm:mx-0">
              <div className="relative aspect-[16/9] overflow-hidden sm:rounded-2xl ring-1 ring-slate-700/50">
                <Image
                  src="/news/origin/inprog.jpg"
                  alt="Early prototype of the Pioneer in progress"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`mt-4 text-center text-sm text-slate-500 ${Roboto.className}`}
              >
                Early prototype of the Pioneer in progress.
              </figcaption>
            </figure>

            <p className="text-slate-400 text-lg leading-[1.9]">
              Many students commute to campus by car or bus, but then have miles
              to travel to get around campus, which encouraged us to make our
              bicycle fold into a 22&quot;x20&quot;x13&quot; package. This also
              allows students who live at an apartment or dorm to easily take
              their bicycle inside, instead of leaving it out on a bike rack for
              thieves and the weather to ruin their day.
            </p>

            <p className="text-slate-400 text-lg leading-[1.9]">
              Our path has not been easy so far, and it definitely will not be
              easy going forward. We have faced countless failures with hundreds
              of iterations of prototypes. However, we don&apos;t view failure
              as an absolute negative here at Retractability.
            </p>

            <p className="text-slate-400 text-lg leading-[1.9]">
              This last part is for fellow students who are considering starting
              a venture. The startup world is daunting, and full of predictable
              and unpredictable challenges. It is not easy to keep going after
              experiencing failure after failure. But our struggles bring
              perseverance, which in turn brings character.
            </p>

            <p className="text-slate-400 text-lg leading-[1.9]">
              Regardless of whether your venture is sold for millions or flames
              out, what you experience willing a product, service, or movement
              into fruition are irreplaceable. Now is the time to take advantage
              of your youth and time to start.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-12">
            <div className="flex-1 h-px bg-slate-700/50" />
            <span className="text-slate-600 text-2xl">✦</span>
            <div className="flex-1 h-px bg-slate-700/50" />
          </div>

          {/* Author Bio Footer */}
          <div className="bg-[#1e2124] rounded-2xl p-6 sm:p-8 mb-16 border border-slate-700/50">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Image
                src="/aboutus/team/luc.jpg"
                alt="Lucas Somoshegyi-Szokol"
                width={80}
                height={80}
                className="rounded-full ring-2 ring-slate-600/30"
              />
              <div>
                <p
                  className={`text-xs text-slate-500 uppercase tracking-wider mb-1 ${Roboto.className}`}
                >
                  Written by
                </p>
                <p
                  className={`text-xl text-white font-semibold mb-2 ${Roboto.className}`}
                >
                  Lucas Somoshegyi-Szokol
                </p>
                <p
                  className={`text-slate-400 text-sm leading-relaxed ${Roboto.className}`}
                >
                  Lucas is the Co-Founder and CEO of Retractability, leading
                  product design and engineering.
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
                className="group bg-[#1e2124] rounded-xl p-4 border border-slate-700/50 hover:border-slate-500/50 transition-colors"
              >
                <p
                  className={`text-white group-hover:text-slate-300 transition-colors ${Roboto.className}`}
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
