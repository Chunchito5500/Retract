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

  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://x4km5x9s0d.execute-api.us-east-1.amazonaws.com/RetractAPI/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        alert('Thank you for subscribing!');
        setEmail('');
      } else {
        const errorMessage = await response.text();
        alert(`Failed to subscribe: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      {isMobile ? <HomeMobile /> : <Home />} {/* Conditionally render based on the viewport */}

      {/* Additional content */}
      <div>
        <section id="end" className="bg-[#E6E6E6] py-4 sm:py-8 lg:py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-x-8 gap-y-16 justify-center">
              <div className="max-w-xl lg:max-w-lg text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#456990]">
                  Sign up to join our interest list and see our progress!
                </h2>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-y-4 max-w-md mx-auto">
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-md bg-[#D9E7F0] px-3.5 py-2 text-white shadow-sm ring-1 ring-[#456990] focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="w-full px-5 py-2 text-sm font-medium text-white bg-[#456990] rounded-md hover:bg-blue-500 focus:bg-blue-500"
                  >
                    Subscribe
                  </button>
                </form>

              </div>
            </div>
          </div>
          <h2 className="lg:py-8 text-3xl tracking-tight font-extrabold text-center text-[#3CC8FF]">
              OR
            </h2>
          <div className="py-4 lg:py-3 px-4 mx-auto max-w-screen-md">
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
