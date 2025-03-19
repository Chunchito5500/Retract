"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "../styles.css";
import "./features.css"; // Import new CSS file

const Features = () => {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("start");
      const featureSections = document.querySelectorAll(".feature-section");

      // For the hero section, if the user has scrolled a bit, add the class to split the black bars
      if (window.scrollY > 50) {
        heroSection.classList.add("scrolled");
      } else {
        heroSection.classList.remove("scrolled");
      }

      // For each feature section, add the "scrolled" class when it enters the viewport
      featureSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add("scrolled");
        } else {
          section.classList.remove("scrolled");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ParallaxProvider>
      <div className="bg-[#333544]">
        {/* Navbar */}
        <Navbar />

        {/* HERO SECTION (Black Bars Opening Effect) */}
        <section id="start" className="hero-section">
          {/* Black Bars Animation */}
          <div className="hero-black-bars">
            <div className="black-bar left-bar"></div>
            <div className="black-bar right-bar"></div>
          </div>

          {/* Hero Content */}
          <div className="hero-content">
            <h1>Bikes that give you more control</h1>
            <p>Explore innovative designs and cutting-edge features.</p>
          </div>
        </section>

        {/* FOLDABLE TIRES SECTION */}
        <section id="tires" className="feature-section">
          <Parallax speed={-10}>
            <h2 className="fade-in">Foldable Tires</h2>
          </Parallax>
          <Parallax speed={-5}>
            <p className="fade-in delay">Say goodbye to tire recycling...</p>
          </Parallax>
          <Parallax speed={5}>
            <div className="feature-image fade-in delay-long">
              <Image
                src="/RetractGrayBike.png"
                width={800}
                height={500}
                alt="Airless Tires"
              />
            </div>
          </Parallax>
        </section>

        {/* COLLAPSIBLE FRAME SECTION */}
        <section id="frame" className="feature-section light-bg">
          <Parallax speed={5}>
            <div className="feature-image fade-in delay-long">
              <Image
                src="/RetractGrayBike.png"
                width={800}
                height={500}
                alt="Collapsible Frame"
              />
            </div>
          </Parallax>
          <Parallax speed={-10}>
            <h2 className="fade-in">Collapsible Frame</h2>
          </Parallax>
          <Parallax speed={-5}>
            <p className="fade-in delay">
              Engineered in Steel, Aluminum, or Carbon Fiber...
            </p>
          </Parallax>
        </section>

        {/* COMMUTER FRIENDLY SECTION */}
        <section id="commuter" className="feature-section">
          <Parallax speed={-10}>
            <h2 className="fade-in">Commuter Friendly</h2>
          </Parallax>
          <Parallax speed={-5}>
            <p className="fade-in delay">Take your bike everywhere...</p>
          </Parallax>
          <Parallax speed={5}>
            <div className="feature-image fade-in delay-long">
              <Image
                src="/RetractGrayBike.png"
                width={800}
                height={500}
                alt="Commuter Friendly"
              />
            </div>
          </Parallax>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="faq-section">
          <Parallax speed={-10}>
            <h2 className="fade-in">FAQ</h2>
          </Parallax>
          <Parallax speed={-5}>
            <div className="faq-content fade-in delay">
              <details>
                <summary>How stable is the Pioneer?</summary>
                <p>Through rigorous testing...</p>
              </details>
              <details>
                <summary>Why choose Retractability?</summary>
                <p>We blend the quality of normal bikes with...</p>
              </details>
            </div>
          </Parallax>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Features;
