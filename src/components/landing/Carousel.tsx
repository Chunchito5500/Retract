/* -------------------------------------------------------------------------- */
/*  CarouselCard.tsx – responsive image carousel with glass‑morphic nav        */
/* -------------------------------------------------------------------------- */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import GlassMorphDot from "./glassmorphdot";
import CarouselButton from './CarouselButton';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

/* ------------------------------ fonts ------------------------------------ */
const BebasNeue = localFont({
  src: '../../fonts/BebasNeue-Regular.ttf',
  display: 'swap',
});

/* ------------------------------ data  ------------------------------------ */
const slides = [
  {
    img: '/carousel/RetractGrayBike.png',
    subheading: 'Retractability Pioneer',
    heading: 'The Future of Biking',
    buttonText: 'Learn More',
    route: '/pioneer', // Route for slide 1
  },
  {
    img: '/carousel/ctw.jpg',
    subheading: 'Latest News',
    heading: 'Retractability at Change the World',
    buttonText: 'Learn More',
    route: '/news/change-the-world', // Route for slide 2
  },
  {
    img: '/carousel/OrangeReal.png',
    subheading: 'Our Vision',
    heading: 'The Future of Biking',
    buttonText: 'Learn More',
    route: '/pioneer', // Route for slide 3
  },
];

interface CarouselProps {
  duration?: number; // ms per slide
  className?: string;
}

/* ------------------------------ component -------------------------------- */
export default function CarouselCard({
  duration = 8_000,
  className,
}: CarouselProps) {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const raf = useRef<number>(0);

  /* autoplay + progress --------------------------------------------------- */
  useEffect(() => {
    const start = performance.now();
    const loop = (now: number) => {
      const pct = Math.min((now - start) / duration, 1);
      setProgress(pct * 100);

      if (pct < 1) raf.current = requestAnimationFrame(loop);
      else {
        setActive((i) => (i + 1) % slides.length);
        setProgress(0);
      }
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current!);
  }, [active, duration]);

  const prev = () => {
    setActive((i) => (i - 1 + slides.length) % slides.length);
    setProgress(0);
  };
  const next = () => {
    setActive((i) => (i + 1) % slides.length);
    setProgress(0);
  };

  /* render --------------------------------------------------------------- */
  return (
    <div
      className={cn(
        'relative z-10 w-full px-0 py-0',
        className
      )}
    >
      {/* outer frame with glow - mobile almost edge to edge */}
      <div className="relative w-full mx-auto max-w-[98vw] sm:max-w-[99.2vw] md:max-w-[98.8vw] lg:max-w-[98.2vw] xl:max-w-[97.8vw] rounded-3xl border border-white/20 p-0.5 backdrop-blur-md">
        <GlowingEffect
          spread={60}
          glow
          proximity={90}
          inactiveZone={0.05}
          borderWidth={3}
          disabled={false}
        />

        {/* viewport with proper responsive aspect ratio - mobile taller */}
        <div className="relative w-full aspect-[3/4] sm:aspect-[20/8] md:aspect-[19/8] lg:aspect-[18/7] xl:aspect-[17/6] 2xl:aspect-[16/6] min-h-[600px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[900px] max-h-[85vh] sm:max-h-[80vh] md:max-h-[78vh] lg:max-h-[75vh] xl:max-h-[72vh] overflow-hidden rounded-[1.25rem] bg-white/10 shadow-xl">
          {/* slides -------------------------------------------------------- */}
          {slides.map((s, idx) => (
            <Transition
              key={idx}
              show={active === idx}
              as="div"
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute inset-0"
            >
              <Image
                src={s.img}
                alt={s.subheading ?? 'slide'}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 90vw, 80vw"
                /* 👇 lets clicks go through to nav & arrows */
                className="object-cover select-none pointer-events-none"
                priority={idx === 0}
              />

              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />

              {/* overlay text - mobile centered and positioned in middle */}
              <div className="absolute bottom-1/3 sm:bottom-0 left-0 sm:left-0 z-10 flex flex-col items-center sm:items-start justify-center sm:justify-end gap-3 sm:gap-4 md:gap-5 lg:gap-6 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-white pointer-events-none w-full sm:w-auto">
                <p
                  className={cn(
                    'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl opacity-90 font-medium text-center sm:text-left',
                    BebasNeue.className
                  )}
                >
                  {s.subheading}
                </p>
                <h2
                  className={cn(
                    'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight text-center sm:text-left',
                    BebasNeue.className
                  )}
                >
                  {s.heading}
                </h2>
                <CarouselButton
                  text={s.buttonText}
                  onClick={() => router.push(s.route)} // Use the route from the slide data
                  className="mt-2 sm:mt-3 md:mt-4 mx-auto sm:mx-0"
                />
              </div>
            </Transition>
          ))}

          {/* nav dots & progress bar (glass‑morphic) ------------------------ */}
          <GlassMorphDot
            items={slides}
            active={active}
            setActive={setActive}
            progress={progress}
            setProgress={setProgress}
            handlePrev={prev}
            handleNext={next}
          />
        </div>
      </div>
    </div>
  );
}