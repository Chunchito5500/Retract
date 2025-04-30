"use client";

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from "react";
import { HiLightBulb } from "react-icons/hi";
import { FaBalanceScale } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import Link from "next/link";
import "../globals.css";
import "../styles.css";
import Header from "@/app/green/components/header";
import Portfolio from "@/app/green/components/portfolio";
import FaqG from "@/app/green/components/faqG";

export default function GreenPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero / Bento Header */}
      <Header />
      <div id="faq-section" className="faq-container">
        <FaqG />
      </div>
      <Portfolio />

      {/* Footer */}
      <section className="bg-[#1c7c54]/80">
        <Footer />
      </section>
    </div>
  );
}
