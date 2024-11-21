// path: HomePage.js

"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Home from "@/app/components/Home";
import HomeMobile from "@/app/components/HomeMobile"; // Import the mobile version
import CookieNotice from "@/app/components/cookie";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [background, setBackground] = useState("#E6E6E6");
  const [homeBackground, setHomeBackground] = useState("#E6E6E6");

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [modelTransform, setModelTransform] = useState({
    rotateY: 0,
    translateY: 0,
    scale: 1,
  });

  useEffect(() => {
    const handleModelTransform = () => {
      const scrollY = window.scrollY;
      const rotateY = scrollY * 0.2;
      const translateY = -scrollY * 0.5;
      const scale = Math.max(1 - scrollY * 0.001, 0.5);

      setModelTransform({ rotateY, translateY, scale });
    };

    window.addEventListener("scroll", handleModelTransform);

    return () => window.removeEventListener("scroll", handleModelTransform);
  }, []);

  const setBackgroundColor = (color) => {
    setBackground(`#E6E6E6`); // Set to the base color
    setHomeBackground(color);
  };

  return (
    <div style={{ background }}>
      <CookieNotice />
      <Navbar />
      {isMobile ? (
        <HomeMobile setBackgroundColor={setBackgroundColor} />
      ) : (
        <Home setBackgroundColor={setBackgroundColor} />
      )}{" "}
      {/* Conditionally render based on the viewport */}
      <section
        id="merge"
        style={{
          background: `linear-gradient(to bottom, ${homeBackground}, #E6E6E6)`,
        }}
      >
        {/* Additional content */}
      </section>
    </div>
  );
}
