import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import * as THREE from "three";
import Navbar from "@/app/components/Navbar";

export default function explore() {
  return (
    <div>
      <Head>
        <title>Explore</title>
        <meta name="Explore Bikes" content="Learn more about our Bikes." />
      </Head>
      <Navbar />
      <main>
        <div
          class="w-full bg-center bg-cover h-[38rem]"
          background="Folding_bike_Back.MP4"
        >
          <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div class="text-center">
              <h1 class="text-3xl font-semibold text-white lg:text-4xl">
                The next generation of <span class="text-blue-400">Biking</span>
              </h1>
              <button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Continue
              </button>
            </div>
          </div>
        </div>
      </main>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="lg:-mx-6 lg:flex lg:items-center">
            <div class="flex items-center justify-between mt-12 lg:justify-start">
              <button
                title="left arrow"
                class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <Script
                type="module"
                src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
              />
              <model-viewer
                src="Oceanic Blue.glb"
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                tone-mapping="commerce"
                poster="poster.webp"
                shadow-intensity="0"
                autoplay
                camera-orbit=""
                style={{
                  width: "100%",
                  height: "500px",
                  border: "2px solid #9bc1bc", // Assuming you still want the border
                  // transform: "rotateX(180deg)", // Rotate 180 degrees around the Y axis
                }}
              >
                <div class="progress-bar hide" slot="progress-bar">
                  <div class="update-bar"></div>
                </div>
                <button slot="ar-button" id="ar-button">
                  View in your space
                </button>
                <div id="ar-prompt"></div>
              </model-viewer>

              <button
                title="right arrow"
                class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div class=" lg:mx-6 mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                  The Quark Foldable Bike
                </h1>

                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                  “ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quibusdam ducimus libero ad tempora doloribus expedita
                  laborum saepe voluptas perferendis delectus assumenda rerum,
                  culpa aperiam dolorum, obcaecati corrupti aspernatur a. ”
                </p>

                {/* <h3 class="mt-6 text-lg font-medium text-blue-500">Additional</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Information
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
