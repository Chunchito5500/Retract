"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Explore from "@/app/components/Explore";
import Signup from "@/app/components/signup";
import ExploreMobile from "@/app/components/ExploreMobile";
import { HiOutlineMail } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import "./MagicButton.css"; // Ensure this CSS file is properly imported
import Carousel from "@/app/components/carousel";
import PioneerTWO from "@/app/landingcomponents/PioneerTWO";
import Video from "@/app/landingcomponents/video";
import News from "@/app/landingcomponents/news";

export default function ExplorePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [modalVisible, setModalVisible] = useState(true); // Default to true to show on every load
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false);
    setShowButton(true); // Show the small button after closing the modal
  };

  const handleOpenModal = () => {
    setModalVisible(true);
    setShowButton(false); // Hide the button when the modal is open
  };

  return (
    <div className="bg-[#262838]">
      {/* Required Meta Tags Always Come First */}
      <meta charSet="utf-8" />
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="Retractability Bicycles. The future of biking."
      />
      <meta
        property="og:title"
        content="The Future of Biking | Explore Retractability Bicycles"
      />
      <meta
        property="og:description"
        content="Retractability Bicycles. The future of biking."
      />
      <meta property="og:image" content="/RbikeU.jpeg" />
      {/* Title */}
      <title>The Future of Biking | Explore Retractability Bicycles</title>
      {/* Favicon */}
      <link rel="shortcut icon" href="../../favicon.ico" />

      <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
        <div style={{ height: "50px" }}></div>
        <Navbar />
      </header>

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
      </main>

      <Footer />
      <Signup isVisible={modalVisible} onClose={handleCloseModal} />

      {showButton && (
        <button
          onClick={handleOpenModal}
          className="
      magic-button
      fixed bottom-6 right-4 z-50
      inline-flex items-center gap-x-2
      px-4 py-3 text-base font-medium
      rounded-lg border border-transparent
      bg-[#1d263b] text-white
      hover:bg-[#1f2a45]
      focus:outline-none
      focus:bg-blue-700
      disabled:opacity-50
      disabled:pointer-events-none
    "
        >
          <HiOutlineMail className="w-5 h-5" />
          {!isMobile && <span>Join our interest list!</span>}{" "}
          {/* ✅ Only show text on desktop */}
        </button>
      )}
    </div>
  );
}
