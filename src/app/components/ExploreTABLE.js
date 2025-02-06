import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MdPedalBike } from "react-icons/md";
import { IoAlertCircleOutline } from "react-icons/io5";
import Image from "next/image";
import styles from "./Explore.module.css";
import Pioneer from "@/app/components/Pioneer";
import TablePioneer from "@/app/components/TablePioneer";

export default function ExploreTABLE() {
  return (
    <div>
      <div style={{ height: "75px" }}></div>
      <TablePioneer />
      <div style={{ height: "150px" }}></div>
      <div className="container px-6 py-10 mx-auto">
        <div className="bg-[#303d5a] shadow-lg rounded-lg p-10 md:p-10 border transition-all duration-500">
          {/* Main Card Container */}
          <div className="lg:-mx-6 lg:flex lg:items-center lg:flex-row-reverse">
            {/* Right Section */}
            <div className="flex items-center justify-between px-36 mt-12 lg:mt-0 lg:w-1/2">
              <div className="card box-compact w-96 bg-base-100 shadow-xl">
                <div
                  role="status"
                  className="flex items-center justify-center h-56 max-w-sm bg-gray-700 rounded-lg animate-slow dark:bg-gray-700"
                >
                  <MdPedalBike className="w-20 h-10 text-gray-600 dark:text-gray-600" />
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>

            {/* Left Section */}
            <div className="card w-full bg-transparent shadow-md lg:mx-6">
              <div className="card-body">
                <h1 className="text-center text-2xl font-raleway font-medium text-white dark:text-white lg:text-3xl lg:w-96">
                  New Models Coming Soon!
                </h1>
                <p className="max-w-lg mt-5 font-raleway text-gray-400 dark:text-gray-400">
                  Stick around and be the first to get notified when new models
                  come out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "100px" }}></div>
    </div>
  );
}
