"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "../navbar/Navbar";
import CarouselCard from "./Carousel";
import Pioneer from "./Pioneer";
import Lifestyle from "./lifestyle";
import Bento from "./Bento";
import Disclaimer from "./Disclaimer";
import Hero from "./hero";
import Tire from "./Tire";
import News from "./news";
import Video from "./video";
import Footer from "../footer/Footer";
import Signup from "../signup/signup";
import Popup from "../popup/popup";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const POPUP_STORAGE_KEY = "retract_interest_popup_v1";
const POPUP_FALLBACK_DELAY_MS = 15000;

export default function LandingLayout() {
  const pathname = usePathname();
  const [key, setKey] = useState(0);
  const tireSectionRef = useRef<HTMLElement | null>(null);

  // controls
  const [showSignup, setShowSignup] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupDisabled, setIsPopupDisabled] = useState(false);

  useEffect(() => {
    if (pathname === "/") setKey((prev) => prev + 1);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.sessionStorage.getItem(POPUP_STORAGE_KEY);
    if (stored) {
      setIsPopupDisabled(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || isPopupDisabled) return;

    let hasOpened = false;

    const openPopup = () => {
      if (hasOpened || isPopupDisabled) return;
      hasOpened = true;
      setIsPopupOpen(true);
    };

    const timer = window.setTimeout(openPopup, POPUP_FALLBACK_DELAY_MS);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          openPopup();
        }
      },
      { threshold: 0.4 },
    );

    if (tireSectionRef.current) {
      observer.observe(tireSectionRef.current);
    }

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [isPopupDisabled]);

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

  const handlePopupDismiss = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(POPUP_STORAGE_KEY, "dismissed");
    }
    setIsPopupOpen(false);
    setIsPopupDisabled(true);
  };

  const handlePopupSubmitted = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(POPUP_STORAGE_KEY, "submitted");
    }
    setIsPopupDisabled(true);
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
        {/* <section className="py-24">
          <Pioneer />
        </section>

        <section className="py-24">
          <Hero />
        </section> */}

        <Bento />
        <Disclaimer />

        <section className="py-24">
          <Lifestyle />
        </section>
        {/* Tire */}
        <section className="py-24" ref={tireSectionRef}>
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

      <Popup
        isOpen={isPopupOpen}
        onDismiss={handlePopupDismiss}
        onSubmitted={handlePopupSubmitted}
      />
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
