"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import Sidebar from "./main";
import * as THREE from "three";
import Navbar from "@/app/components/Navbar";
import Home from "@/app/components/Home";
import HomeMobile from "@/app/components/HomeMobile"; // Import the mobile version

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div>
      <Navbar />
      {isMobile ? <HomeMobile /> : <Home />} {/* Conditionally render based on the viewport */}

      {/* Additional content */}
      <div>
        <section className="bg-[#E6E6E6]">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#456990]">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Want to know more? Have a question? Need details about our
              business plan? Let us know at{" "}
              <font color="#3CC8FF">retractabilitybicycles@gmail.com</font>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
