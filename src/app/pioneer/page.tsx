"use client";

import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Introduction from "@/app/pioneer/components/introduction";
import TheTire from "@/app/pioneer/components/thetire";
import Origins from "@/app/pioneer/components/Origins";
import VersatileTab from "@/app/pioneer/components/VersatileTab";
import FAQ from "@/app/pioneer/components/faq";
// import Environment from "@/app/pioneer/components/environment";
import Model from "@/app/pioneer/components/model";


const Pioneer = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      <Introduction />
      
      {/* Main content wrapper - now part of the same gradient container */}
      <div>
        <section id="VersatileTab"></section> {/* Add this line */}
        <VersatileTab />
        <section id="Origins"></section>
        <Origins />
        <section id="TheTire"></section>
        <TheTire />
        <section id="Model"></section>
        <Model />
        {/* <section id="Environment"></section>
        <Environment /> */}
        <section id="FAQ"></section>
        <FAQ />
        <section id="Footer"></section>
        <Footer />
      </div>
    </div>
  );
};

export default Pioneer;