// path: ExplorePage.js

"use client";

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Explore from "@/app/components/Explore";
import ExploreMobile from "@/app/components/ExploreMobile";
import { MdPedalBike } from "react-icons/md";

export default function ExplorePage() {
  const models = [
    "Renaissance Italian Orange.glb",
    "Oceanic Blue.glb",
    "Oceanic Blue Alt Seat.glb",
    "Cool Blue with Black Seat.glb",
  ];

  const [currentModel, setCurrentModel] = useState(models[0]);
  const modelViewerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // or any other width threshold
    };

    checkMobile(); // Check on initial mount
    window.addEventListener('resize', checkMobile); // Add resize listener

    return () => window.removeEventListener('resize', checkMobile); // Clean up
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  const goToNextModel = () => {
    const currentIndex = models.indexOf(currentModel);
    const nextIndex = (currentIndex + 1) % models.length;
    setCurrentModel(models[nextIndex]);
  };

  const goToPrevModel = () => {
    const currentIndex = models.indexOf(currentModel);
    const prevIndex = (currentIndex - 1 + models.length) % models.length;
    setCurrentModel(models[prevIndex]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://x4km5x9s0d.execute-api.us-east-1.amazonaws.com/RetractAPI/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json(); // Assuming server returns JSON with a message
      setModalMessage(result.message || "We will be sending emails with information and updates as we move forward!");
      setEmail('');
      setModalVisible(true);
    } catch (error) {
      console.error('Subscription error:', error);
      setModalMessage("Error submitting form. Please try again.");
      setModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Head>
        <title>Explore</title>
        <meta name="Explore Bikes" content="Learn more about our Bikes." />
      </Head>
      <Navbar />
      <main
        className="relative bg-cover bg-center h-[38rem] bg-black"
        style={{ backgroundImage: `url('/RetractGrayBike.png')`, }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-raleway font-medium text-white">
              The future of <span className="text-blue-400">Biking</span>
            </h1>
            <button
              className="font-raleway glow-button mt-4 lg:w-auto"
              onClick={() => document.getElementById("middle").scrollIntoView({ behavior: "smooth" })}
            >
              Explore Models
            </button>
          </div>
        </div>
      </main>
      <div style={{ background: 'linear-gradient(to bottom, #0a1e2c, #0f2430, #333138, #1A191E, #000103)' }}>
        {isMobile ? <ExploreMobile /> : <Explore />}
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-x-8 gap-y-16 justify-center">
              <div className="max-w-xl lg:max-w-lg text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-raleway font-medium text-center text-blue-400">
                  Sign up to join our interest list and see our progress!
                </h2>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-y-4 max-w-md mx-auto">
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md bg-[#D9E7F0] px-3.5 py-2 text-black font-raleway shadow-sm ring-1 ring-[#456990] focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-bold gap-x-2 font-raleway text-white bg-blue-400 rounded-full border border-transparent hover:bg-blue-500 focus:bg-blue-500"
                  > 
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            {modalVisible && (
              <dialog open className="modal">
                <div className="modal-box" style={{ background: 'linear-gradient(to bottom, #587792, #284b63, #153243)' }}>
                  <h3 className="text-2xl font-bold">Thank you for your interest!</h3>
                  <p className="py-4">{modalMessage}</p>
                  <div className="modal-action">
                    <button className="btn text-sm font-medium text-white bg-[#456990] hover:bg-[#011936]" onClick={handleCloseModal}>Close</button>
                  </div>
                </div>
              </dialog>
            )}
          </div>
          <div style={{ height: '50px' }}></div>
          <h2 className="lg:py-8 text-3xl tracking-tight font-raleway font-medium text-center text-[#3CC8FF]">
            OR
          </h2>
          <div className="py-4 lg:py-3 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-raleway font-medium text-center text-blue-400">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-raleway font-medium text-center font-raleway text-gray-500 dark:text-gray-400 sm:text-xl">
              Want to know more? Have a question? Need details about our
              business plan? Let us know at{" "}
              <font color="#3CC8FF">retractabilitybicycles@gmail.com</font>
            </p>
          </div>
        </div>
        <div style={{ height: '90px' }}></div>
        <Footer />
      </div>
    </div>
  );
}
