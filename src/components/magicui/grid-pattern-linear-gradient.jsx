"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "./grid-pattern";

export function GridPatternLinearGradient() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to top, #111827, #12132c, #120d31, #302f4d, #4e425b)",
      }}
    >
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-40"
        )}
      />
    </div>
  );
}
