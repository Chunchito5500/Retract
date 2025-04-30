"use client";

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Introduction from "@/app/pioneer/components/introduction"; // Import the Introduction component
import TheTire from "@/app/pioneer/components/thetire"; // Import the Introduction component
import PioneerFF from "@/app/pioneer/components/pioneerFF"; // Import the Introduction component
import FAQ from "@/app/pioneer/components/faq"; // Import the Introduction component
import Environment from "@/app/pioneer/components/environment"; // Import the Introduction component
import Timeline from "@/app/pioneer/components/timeline"; // Import the Introduction component
import Model from "@/app/pioneer/components/model"; // Import the Introduction component
import "../styles.css";
import "./features.css";

const Pioneer = () => {
  return (
    <ParallaxProvider>
      <div className="bg-[#030306]">
        <Navbar />
        <Introduction />
        <section id="Pioneer"></section>
        <PioneerFF />
        <section id="TheTire"></section>
        <TheTire />
        <section id="Model"></section>
        <Model />
        <section id="Environment"></section>
        <Environment />
        {/* <section id="Timeline"></section>
        <Timeline /> */}
        <section id="FAQ"></section>
        <FAQ />
        <section id="Footer"></section>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Pioneer;
