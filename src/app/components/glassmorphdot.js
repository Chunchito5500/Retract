import React from "react";

const GlassMorphDot = ({
  items = [],
  active = 0,
  setActive = () => {},
  progress = 0,
  setProgress = () => {},
  handlePrev = () => {},
  handleNext = () => {},
}) => {
  return (
    <div className="glassmorph-dot">
      {/* Glassmorphic Dot Nav + Progress Bar inside the image container */}
      <div
        className="
            group
            absolute
            bottom-5
            left-1/2
            -translate-x-1/2
            flex flex-col items-center gap-2
            px-3 py-2
            rounded-[20px]
            transition-colors
            border border-[rgba(255,255,255,0.3)]
            bg-[rgba(255,255,255,0.2)]
            shadow-[0_4px_30px_rgba(0,0,0,0.1)]
            backdrop-blur-sm
            hover:bg-[rgba(82,82,82,0.57)]
            hover:border-[rgba(82,82,82,0.3)]
          "
      >
        {/* Dots */}
        <div className="flex items-center gap-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActive(index);
                setProgress(0);
              }}
              className={`
                  h-3 w-3
                  rounded-full
                  border border-[rgba(255,255,255,0.3)]
                  transition-colors
                  ${
                    active === index ? "bg-white" : "bg-[rgba(255,255,255,0.2)]"
                  }
                `}
            />
          ))}
        </div>

        {/* Single progress bar */}
        <div
          className="
              relative
              h-2
              w-[60px]
              rounded-full
              border border-[rgba(255,255,255,0.3)]
              bg-[rgba(255,255,255,0.2)]
            "
          role="progressbar"
          aria-valuenow={progress}
        >
          <div
            className="absolute inset-0 rounded-full bg-white transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Glassmorphic Arrow: Previous */}
      <button
        type="button"
        onClick={handlePrev}
        className="
            hs-carousel-prev
            hs-carousel-disabled:opacity-50
            hs-carousel-disabled:cursor-default
            absolute
            top-1/2
            left-2
            -translate-y-1/2
            inline-flex justify-center items-center
            size-10
            transition-colors
            border border-[rgba(255,255,255,0.3)]
            bg-[rgba(255,255,255,0.2)]
            text-white
            shadow-[0_4px_30px_rgba(0,0,0,0.1)]
            backdrop-blur-sm
            hover:bg-[rgba(82,82,82,0.57)]
            hover:border-[rgba(82,82,82,0.3)]
            rounded-full
            focus:outline-hidden
          "
      >
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>

      {/* Glassmorphic Arrow: Next */}
      <button
        type="button"
        onClick={handleNext}
        className="
            hs-carousel-next
            hs-carousel-disabled:opacity-50
            hs-carousel-disabled:cursor-default
            absolute
            top-1/2
            right-2
            -translate-y-1/2
            inline-flex justify-center items-center
            size-10
            transition-colors
            border border-[rgba(255,255,255,0.3)]
            bg-[rgba(255,255,255,0.2)]
            text-white
            shadow-[0_4px_30px_rgba(0,0,0,0.1)]
            backdrop-blur-sm
            hover:bg-[rgba(82,82,82,0.57)]
            hover:border-[rgba(82,82,82,0.3)]
            rounded-full
            focus:outline-hidden
          "
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default GlassMorphDot;
