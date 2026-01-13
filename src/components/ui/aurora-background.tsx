// src/components/ui/aurora-background.tsx

"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const AuroraBackground = ({
  className,
  children,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#333544] text-slate-100 transition-bg dark:bg-[#333544]">
      <div
        className={cn(
          "relative z-10 flex min-h-screen w-full flex-col items-center justify-start",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </main>
  );
};
