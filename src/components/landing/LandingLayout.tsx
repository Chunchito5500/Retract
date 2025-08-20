"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "../navbar/Navbar";
import CarouselCard from "./Carousel";
import Pioneer from "./Pioneer";
import Tire from "./Tire";
import News from "./news";
import Video from "./video";
import Footer from "../footer/Footer";
import Signup from "../signup/signup";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LandingLayout() {
  const pathname = usePathname();
  const [key, setKey] = useState(0);

  // controls
  const [showSignup, setShowSignup] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (pathname === "/") setKey((prev) => prev + 1);
  }, [pathname]);

  // Permanently hide for the session (not used by the minus button)
  const handleClose = () => {
    setShowSignup(false);
    setIsMinimized(false);
  };

  // Turn the card into the small "Join Interest List" pill
  const handleMinimize = () => {
    setIsMinimized(true);
  };

  // Bring the card back from the pill
  const handleExpand = () => {
    setIsMinimized(false);
    setShowSignup(true);
  };

  return (
    <div className="relative">
      <AuroraBackground key={key}>
        <Navbar />

        {/* Carousel section */}
        <section className="pt-3 sm:pt-4 md:pt-5">
          <CarouselCard />
        </section>

        {/* Pioneer */}
        <section className="py-24">
          <Pioneer />
        </section>

        {/* Tire */}
        <section className="py-24">
          <Tire />
        </section>

        {/* News */}
        <section className="py-24">
          <News />
        </section>

        {/* Video */}
        <section className="py-24">
          <Video />
        </section>

        <Footer />
      </AuroraBackground>

      {/* Keep isVisible tied ONLY to overall visibility, not minimized state */}
      <Signup
        isVisible={showSignup}
        isMinimized={isMinimized}
        onMinimize={handleMinimize}
        onExpand={handleExpand}
        onClose={handleClose}
      />
    </div>
  );
}
