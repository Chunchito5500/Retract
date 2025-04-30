"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Explore from "@/app/components/Explore";
import Signup from "@/app/components/signup";
import PioneerTWO from "@/app/landingcomponents/PioneerTWO";
import Carousel from "@/app/components/carousel";
import News from "@/app/landingcomponents/news";
import Video from "@/app/landingcomponents/video";
import ExploreMobile from "@/app/components/ExploreMobile";
import { HiOutlineMail } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles.css";
import "../MagicButton.css";
import "../globals.css";
// Import the new CSS file for the glassmorphic card styling
import "../HomePage.css"; // or adjust the path as needed

export default function ExplorePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false);
    setShowButton(true);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
    setShowButton(false);
  };

  return (
    <div className="bg-[#333544]">
      {/* Required Meta Tags Always Come First */}
      <meta charSet="utf-8" />
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href="https://preline.co/" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="Designed for creative agencies to showcase bold, innovative designs and elevate visual elements."
      />
      <meta name="twitter:site" content="@preline" />
      <meta name="twitter:creator" content="@preline" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Creative Agency Tailwind CSS Template | Preline UI, crafted with Tailwind CSS"
      />
      <meta
        name="twitter:description"
        content="Designed for creative agencies to showcase bold, innovative designs and elevate visual elements."
      />
      <meta
        name="twitter:image"
        content="https://preline.co/assets/img/og-image.png"
      />
      <meta property="og:url" content="https://preline.co/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Preline" />
      <meta
        property="og:title"
        content="Creative Agency Tailwind CSS Template | Preline UI, crafted with Tailwind CSS"
      />
      <meta
        property="og:description"
        content="Designed for creative agencies to showcase bold, innovative designs and elevate visual elements."
      />
      <meta
        property="og:image"
        content="https://preline.co/assets/img/og-image.png"
      />
      {/* Title */}
      <title>The Future of Biking | Explore Retractability Bicycles</title>
      {/* Favicon */}
      <link rel="shortcut icon" href="../../favicon.ico" />

      <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
        <div style={{ height: "50px" }}></div>
        <Navbar />
      </header>

      {/* ========== MAIN CONTENT ========== */}
      <main id="content">
        {/* Slider */}
        <div className="px-4 sm:px-6 lg:px-8 ">
          <Carousel />
        </div>
        <div style={{ height: "50px" }}></div>
        {/* End Slider */}

        {/* Clients */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div
            style={{
              background:
                "linear-gradient(to right, #464e55, #00072d, #001c55, #0a2472, #a6e1fa)",
              backgroundSize: "300% 300%",
              animation: "pulsate 5s infinite alternate",
            }}
            className="relative py-[.5px] overflow-hidden"
          ></div>
        </div>
        <section className="w-full py-12 lg:py-24">
          <PioneerTWO />
        </section>

        <Video />
        <News />

        {/* End Works */}

        {/* End Testimonials */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
      {/* ========== FOOTER ========== */}
      <Footer />
      {/* JS Implementing Plugins */}
      {/* JS PLUGINS */}
      {/* Required plugins */}
    </div>
  );
}
