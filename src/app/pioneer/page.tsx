import type { Metadata } from "next";
import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Introduction from "@/app/pioneer/components/introduction";
import TheTire from "@/app/pioneer/components/thetire";
import Origins from "@/app/pioneer/components/Origins";
import VersatileTab from "@/app/pioneer/components/VersatileTab";
import FAQ from "@/app/pioneer/components/faq";
import Model from "@/app/pioneer/components/model";

export const metadata: Metadata = {
  title: "Pioneer — Full-Size Folding Bike Specs",
  description:
    "Explore the Pioneer: full-size geometry, compact fold, and portable design for daily commuting and travel.",
  alternates: { canonical: "/pioneer" },
  openGraph: {
    title: "Pioneer — Full-Size Folding Bike Specs",
    description:
      "Full-size ride. Compact fold. Meet Pioneer by Retractability.",
    url: "/pioneer",
    images: [{ url: "/og/pioneer-og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pioneer — Full-Size Folding Bike Specs",
    description:
      "Full-size ride. Compact fold. Meet Pioneer by Retractability.",
    images: ["/og/pioneer-og.png"],
  },
};

const Pioneer = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      <Introduction />
      <div>
        <section id="VersatileTab"></section>
        <VersatileTab />
        <section id="Origins"></section>
        <Origins />
        <section id="TheTire"></section>
        <TheTire />
        <section id="Model"></section>
        <Model />
        <section id="FAQ"></section>
        <FAQ />
        <section id="Footer"></section>
        <Footer />
      </div>
    </div>
  );
};

export default Pioneer;
