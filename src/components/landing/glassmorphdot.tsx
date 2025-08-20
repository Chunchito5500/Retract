// src/components/landing/glassMorphDot.tsx
"use client";

import { FC } from "react";

interface GlassMorphDotProps {
  items: unknown[];                // slide array
  active: number;                  // active slide index
  setActive: (i: number) => void;  // setter from parent
  progress: number;                // 0‐100 progress for bar
  setProgress: (p: number) => void;
  handlePrev: () => void;          // prev arrow handler
  handleNext: () => void;          // next arrow handler
}

const GlassMorphDot: FC<GlassMorphDotProps> = ({
  items,
  active,
  setActive,
  progress,
  setProgress,
  handlePrev,
  handleNext,
}) => {
  return (
    <>
      {/* dot nav + progress -------------------------------------------------- */}
      <div className="group absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 rounded-[20px] border border-white/30 bg-white/20 px-4 py-3 backdrop-blur-sm transition-colors shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:border-[rgba(82,82,82,0.3)] hover:bg-[rgba(82,82,82,0.57)] pointer-events-auto">
        {/* dots that transform into progress bars */}
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setActive(index);
              setProgress(0);
            }}
            className={`relative transition-all duration-300 pointer-events-auto ${
              active === index 
                ? "w-[60px] h-2" 
                : "w-3 h-3"
            } rounded-full border border-white/30 ${
              active === index 
                ? "bg-white/20" 
                : active > index 
                  ? "bg-white" 
                  : "bg-white/20"
            }`}
            aria-label={`Slide ${index + 1}`}
          >
            {/* Progress fill for active dot */}
            {active === index && (
              <div
                className="absolute inset-0 h-full rounded-full bg-white will-change-transform origin-left"
                style={{ 
                  transform: `scaleX(${progress / 100})`,
                  transition: 'none' // No CSS transition for smooth RAF animation
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* arrow: previous ----------------------------------------------------- */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={handlePrev}
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-30 size-8 sm:size-10 rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-sm transition-colors hover:border-[rgba(82,82,82,0.3)] hover:bg-[rgba(82,82,82,0.57)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] pointer-events-auto"
      >
        <svg
          className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18L9 12l6-6" />
        </svg>
      </button>

      {/* arrow: next --------------------------------------------------------- */}
      <button
        type="button"
        aria-label="Next slide"
        onClick={handleNext}
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-30 size-8 sm:size-10 rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-sm transition-colors hover:border-[rgba(82,82,82,0.3)] hover:bg-[rgba(82,82,82,0.57)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] pointer-events-auto"
      >
        <svg
          className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </>
  );
};

export default GlassMorphDot;