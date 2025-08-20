// src/components/ui/aurora-background.tsx

"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#333544] text-slate-100 transition-bg dark:bg-[#333544]">
      <div
        className={cn(
          "relative flex flex-col min-h-screen items-center justify-start",
          className
        )}
        {...props}
      >
        <div className="aurora-bg absolute -inset-[10px] pointer-events-none" />
        {children}
      </div>

      {/* --- gradient + animation styles ---------------------------------- */}
      <style jsx>{`
        .aurora-bg {
          z-index: 0;
          opacity: 0.7;
          filter: blur(14px);
          /* Outer flicker bars */
          background-image:
            repeating-linear-gradient(
              100deg,
              #333544 0%,
              #333544 7%,
              transparent 10%,
              transparent 12%,
              #002137 16%
            ),
            /* Inner flowing aurora strip */
            repeating-linear-gradient(
              100deg,
              #00111c 5%,
              #001523 10%,
              #001a2c 15%,
              #002137 20%,
              #00253e 25%,
              #002945 30%,
              #002e4e 35%,
              #003356 40%,
              #003a61 45%,
              #00406c 50%,
              #002945 55%,
              #001a2c 60%,
              #00111c 65%
            );
          background-size: 300%, 200%;
          background-position: 50% 50%, 50% 50%;
          animation: aurora 60s linear infinite;
          will-change: background-position;
          ${
            showRadialGradient
              ? "mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);"
              : ""
          }
        }

        @media (prefers-color-scheme: dark) {
          .aurora-bg {
            opacity: 0.65;
          }
        }

        @keyframes aurora {
          from {
            background-position: 50% 50%, 50% 50%;
          }
          to {
            background-position: 350% 50%, 350% 50%;
          }
        }
      `}</style>
    </main>
  );
};
