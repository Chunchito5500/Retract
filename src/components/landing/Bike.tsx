"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

/* -------------------------------------------------------------------------- */
/*  Public component                                                          */
/* -------------------------------------------------------------------------- */

export function Bike() {
  return (
    <div className="flex w-full justify-center">
      {/* max-w-* keeps the card from stretching too wide on huge monitors */}
      <BigCard
        imgSrc="/images/bike-demo.jpg"        /* change to your image path   */
        title="Retract Demo Bike"
        description="A full-size bike that folds into your backpack."
        icon={<Sparkles className="h-4 w-4" />}
        /* you can tweak glow params here if you like                       */
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Single-card implementation                                                */
/* -------------------------------------------------------------------------- */

interface BigCardProps {
  imgSrc: string;                 // image URL
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

function BigCard({
  imgSrc,
  title,
  description,
  icon,
}: BigCardProps) {
  return (
    <div className="w-full max-w-5xl">
      {/* outer wrapper keeps glow + border exactly like the old GridItem */}
      <div className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={60}
          glow
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
          borderWidth={3}
        />

        {/* inner card surface ------------------------------------------------ */}
        <div className="relative overflow-hidden rounded-xl border-[0.75px] bg-background shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">

          {/* image header ---------------------------------------------------- */}
          <Image
            src={imgSrc}
            alt={title}
            width={1920}
            height={1080}
            priority
            className="h-56 w-full object-cover md:h-72 lg:h-96"
          />

          {/* text area ------------------------------------------------------- */}
          <div className="p-6 flex flex-col gap-4">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>

            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
              {title}
            </h3>

            <p className="text-base text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
