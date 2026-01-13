"use client";

import NextImage from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import React, { useEffect, useMemo, useState } from "react";
import { GiCartwheel } from "react-icons/gi";
import { IoBuildOutline } from "react-icons/io5";
import { LuCircleCheckBig } from "react-icons/lu";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
  display: "swap",
});
const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
  display: "swap",
});

const FRAME_COUNT = 121;

const getFrameSrc = (index: number) =>
  `/frames/frame_${index.toString().padStart(4, "0")}.png`;

function Tire() {
  const [frameIndex, setFrameIndex] = useState(1);

  // Preload nearby frames so the scrub feels fluid.
  useEffect(() => {
    const neighbors = [
      frameIndex - 2,
      frameIndex - 1,
      frameIndex + 1,
      frameIndex + 2,
    ].filter((i) => i >= 1 && i <= FRAME_COUNT);
    neighbors.forEach((i) => {
      const img = new window.Image();
      img.src = getFrameSrc(i);
    });
  }, [frameIndex]);

  const frameSrc = useMemo(() => getFrameSrc(frameIndex), [frameIndex]);
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2f2f34] via-[#3a3a40] to-[#232427]" />
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#f5c84b]/20 blur-[120px]" />
        <div className="absolute right-10 -bottom-24 h-72 w-72 rounded-full bg-[#f4f1e8]/20 blur-[140px]" />
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(250,248,244,0.12),transparent_40%)]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="py-10 md:py-12 space-y-12 text-[#faf8f4]">
          <header className="space-y-4 text-center lg:text-left">
            <span
              className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#f4f1e8] ${BebasNeue.className}`}
            >
              A closer look
            </span>
            <div className="space-y-3">
              <h1
                className={`text-center text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-[#faf8f4] ${BebasNeue.className}`}
              >
                The Bike Wheel <br></br> Reinvented
              </h1>
            </div>
          </header>

          <div className="grid gap-10 lg:grid-cols-2 items-start lg:items-stretch">
            {/* Frame scrubber + hero */}
            <div className="relative group flex h-full flex-col rounded-3xl border border-white/15 bg-[#2f2f34]/60 backdrop-blur-xl overflow-hidden shadow-[0_25px_60px_-35px_rgba(8,9,20,0.65)]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40 pointer-events-none" />
              <div
                className={`flex items-center justify-between px-6 pt-6 pb-2 text-xs uppercase tracking-[0.2em] text-[#faf8f4]/60 ${BebasNeue.className}`}
              />

              <div className="relative w-full flex-1 min-h-[220px] sm:min-h-[260px]">
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-[#f5c84b]/25 via-[#2f2f34]/40 to-[#f4f1e8]/20 blur-3xl" />
                <div className="absolute inset-0 m-4 rounded-2xl border border-white/10 bg-[#faf8f4]/10 overflow-hidden">
                  <NextImage
                    src={frameSrc}
                    alt={`Tire frame ${frameIndex}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain"
                  />
                  <div
                    className={`absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-[#faf8f4]/80 ${BebasNeue.className}`}
                  >
                    Slide to Fold
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 space-y-3">
                <input
                  id="frame-slider"
                  type="range"
                  min={1}
                  max={FRAME_COUNT}
                  value={frameIndex}
                  onChange={(e) => setFrameIndex(parseInt(e.target.value, 10))}
                  className="w-full accent-[#f5c84b]"
                  style={{
                    background: `linear-gradient(to right, #f5c84b ${
                      (frameIndex / FRAME_COUNT) * 100
                    }%, rgba(250,248,244,0.25) ${
                      (frameIndex / FRAME_COUNT) * 100
                    }%)`,
                  }}
                />
                <div
                  className={`flex items-center justify-between text-[0.65rem] uppercase tracking-[0.3em] text-[#faf8f4]/50 ${BebasNeue.className}`}
                >
                  <span>Unfolded</span>
                  <span>Folded</span>
                </div>
              </div>
            </div>

            {/* Right rail */}
            <div className="space-y-7">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                <div className="flex flex-wrap gap-4">
                  <Badge tone="sand">Pat. Pend.</Badge>
                  <Badge tone="coral">Airless</Badge>
                  <Badge tone="coral">26&quot; Diameter</Badge>
                  <Badge tone="coral">Zero Flats</Badge>
                </div>
                <p
                  className={`mt-5 text-base text-[#faf8f4]/80 leading-relaxed ${Roboto.className}`}
                >
                  Built for riders who want daily reliability without the hassle
                  of flats. Our wheel system is engineered to integrate airless
                  tire segments for a confident road feel, consistent traction,
                  and simplified maintenance. So that you can commute, travel,
                  and ride without worrying about punctures.
                </p>
              </div>

              <div className="grid gap-5">
                <FeatureCard
                  icon={<GiCartwheel className="h-6 w-6 text-[#f4f1e8]" />}
                  title="Airless Tire Integration"
                  description="A bike built with airless tires in mind, so you can ride with all the benefits of airless tires, no punctures, no flats, and no risk of harming your bike rims."
                />
                <FeatureCard
                  icon={<IoBuildOutline className="h-6 w-6 text-[#f4f1e8]" />}
                  title="Reinvented Wheel"
                  description="A wheel system optimized for segmented airless tires, built to maintain alignment, improve load distribution, and keep handling predictable across varied surfaces."
                />
                <FeatureCard
                  icon={<LuCircleCheckBig className="h-6 w-6 text-[#faf8f4]" />}
                  title='True 26" stance'
                  description="Full-size comfort with a familiar ride feel. Built around a standard 26” stance for confident handling, without compromising portability goals."
                />
              </div>

              <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-[#f5c84b]/20 via-white/5 to-[#f4f1e8]/20 p-6 backdrop-blur-xl">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p
                      className={`text-xs uppercase tracking-[0.25em] text-[#faf8f4]/60 ${BebasNeue.className}`}
                    >
                      Want to see more?
                    </p>
                    <h3
                      className={`text-2xl sm:text-3xl font-semibold text-[#faf8f4] ${BebasNeue.className}`}
                    >
                      Explore the build + gallery
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <CTAButton
                      href="/pioneer"
                      label="The Pioneer"
                      tone="sand"
                    />
                    <CTAButton
                      href="/gallery"
                      label="View Gallery"
                      tone="coral"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex items-start gap-5 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30">
      <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10">
        {icon}
      </div>
      <div className="space-y-2">
        <h3
          className={`text-lg font-semibold leading-snug text-[#faf8f4] ${BebasNeue.className}`}
        >
          {title}
        </h3>
        <p
          className={`text-[#faf8f4]/70 text-sm leading-relaxed ${Roboto.className}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

interface BadgeProps {
  children: React.ReactNode;
  tone?: "coral" | "sand";
}

const Badge = ({ children, tone }: BadgeProps) => {
  const gradients: Record<NonNullable<BadgeProps["tone"]>, string> = {
    coral:
      "from-[#f5c84b]/35 to-[#f9e3a8]/10 text-[#fff9e8] border-[#f5c84b]/40",
    sand: "from-[#f4f1e8]/35 to-[#f8f5ef]/10 text-[#faf8f4] border-[#f4f1e8]/40",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] ${
        BebasNeue.className
      } ${
        tone
          ? `bg-gradient-to-r ${gradients[tone]}`
          : "bg-white/10 text-[#faf8f4]/80"
      }`}
    >
      {children}
    </span>
  );
};

interface CTAButtonProps {
  href: string;
  label: string;
  tone: "coral" | "sand";
}

const CTAButton = ({ href, label, tone }: CTAButtonProps) => {
  const toneMap: Record<CTAButtonProps["tone"], string> = {
    coral:
      "from-[#f5c84b] via-[#f7d772] to-[#f5c84b] text-[#2b2b2b] shadow-[0_15px_45px_-30px_rgba(245,200,75,0.7)]",
    sand: "from-[#f4f1e8] via-[#f8f5ef] to-[#f4f1e8] text-[#2b2b2b] shadow-[0_15px_45px_-30px_rgba(244,241,232,0.6)]",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-gradient-to-r px-5 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${toneMap[tone]}`}
    >
      {label}
    </Link>
  );
};

export default Tire;
