// pages/ExplorePage.js

"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Explore from "@/app/components/Explore";
import Signup from "@/app/components/signup";
import { HiOutlineMail } from "react-icons/hi";
import ExploreMobile from "@/app/components/ExploreMobile";
import "./styles.css";

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
    <div>
      <Head>
        <title>Explore</title>
        <meta name="description" content="Learn more about our Bikes." />
      </Head>
      <Navbar />
      <main
        className="relative bg-cover bg-center h-[45rem] bg-black"
        style={{ backgroundImage: `url('/RetractGrayBike.png')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-raleway font-medium text-white">
              The future of <span className="text-blue-400">Biking</span>
            </h1>
            <button
              className="font-raleway glow-button mt-4 lg:w-auto"
              onClick={() =>
                document
                  .getElementById("middle")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Models
            </button>
          </div>
        </div>
      </main>
      <div className="separator-line"></div>
      <div
        style={{
          background:
            "linear-gradient(to bottom, #0a1e2c, #0f2430, #333138, #1A191E, #000103)",
        }}
      >
        {isMobile ? <ExploreMobile /> : <Explore />}
        <Footer />
      </div>

      {/* Signup card that appears every time the page loads */}
      <Signup isVisible={modalVisible} onClose={handleCloseModal} />

      {/* Small button to reopen the signup card after closing */}
      {showButton && (
        <button
          onClick={handleOpenModal}
          className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-x-2 px-4 py-3 text-base font-medium rounded-lg border border-transparent bg-[#1d263b] text-white hover:bg-[#1f2a45] focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          <HiOutlineMail className="w-5 h-5" />
          Join our interest list!
        </button>
      )}
    </div>
  );
}
