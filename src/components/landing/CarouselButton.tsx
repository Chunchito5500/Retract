/* -------------------------------------------------------------------------- */
/*  CarouselButton.tsx – animated button with expanding circle effect        */
/* -------------------------------------------------------------------------- */
'use client';

import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});

interface CarouselButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export default function CarouselButton({ 
  text, 
  onClick, 
  className 
}: CarouselButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "learn-more relative inline-block cursor-pointer outline-none border-0 align-middle no-underline bg-transparent p-0 text-inherit font-inherit w-60 h-auto pointer-events-auto group",
        className
      )}
    >
      <span 
        aria-hidden="true" 
        className="circle relative block m-0 w-14 h-14 bg-[#282936] rounded-[1.625rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] shadow-[0_0_5px_1px_white] group-hover:w-full group-hover:shadow-[0_0_10px_2px_white] group-active:scale-90 group-active:shadow-[0_0_5px_0.5px_white] group-active:transition-all group-active:duration-300"
      >
        <IoIosArrowForward className="icon arrow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-[4rem] group-active:translate-x-[4.5rem] group-active:transition-all group-active:duration-300" />
      </span>
      <span className={cn("button-text absolute top-1/2 left-0 right-0 transform -translate-y-1/2 py-4 px-0 ml-8 text-white/50 font-bold leading-[1.6] text-center uppercase transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white group-hover:-translate-x-8 group-active:text-white/45 text-lg", Roboto.className)}>
        {text}
      </span>
    </button>
  );
}