import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from "react";
import { HiLightBulb } from "react-icons/hi";
import { FaBalanceScale } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import "../../styles.css";
import "../../globals.css";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});
const SourceSans = localFont({
  src: "../../fonts/SourceSans3-Regular.ttf",
});

const Header = () => {
  return (
    <header>
      <div>
        <Navbar />
        <div className="bg-[#f5f5f8] via-transparent">
          <div style={{ height: "80px" }}></div>
          <div
            style={{
              width: "100%",
              padding: "2rem 1.5rem", // even margin around the entire bento area
              boxSizing: "border-box",
              margin: "0",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "100%",
                width: "100%",
                maxWidth: "none", // allow full‑width beyond Tailwind breakpoints
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div className="grid w-full min-h-[600px] grid-cols-1 lg:grid-cols-6 gap-6">
                <div
                  className="col-span-1 lg:col-span-3 row-span-4 rounded-[24px] flex flex-col justify-center p-12 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url("/green/greenback.jpg")' }}
                >
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Our Green Initiative
                  </h2>
                  <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
                    Retractability Bicycles is committed to sustainability and
                    reducing our carbon footprint.
                  </p>
                  <button
                    onClick={() => {
                      const target = document.getElementById("faq-section");
                      target?.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "999px",
                      fontWeight: "bold",
                      width: "fit-content",
                      cursor: "pointer",
                    }}
                  >
                    LEARN MORE
                  </button>
                </div>

                <div className="col-span-1 lg:col-span-3 row-span-2 rounded-[24px] overflow-hidden relative">
                  <Image
                    src="/green/sapling.jpg"
                    alt="Sapling"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="col-span-1 lg:col-span-3 row-span-2 rounded-[24px] overflow-hidden relative">
                  <Image
                    src="/green/trees.jpg"
                    alt="Trees"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
