"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Script from "next/script";

export default function Explore() {
  const models = [
    "Renaissance Italian Orange.glb",
    "Oceanic Blue.glb",
    "Oceanic Blue Alt Seat.glb",
    "Cool Blue with Black Seat.glb",
  ];

  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch("/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("Thank you for subscribing!");
        setEmail(""); // Reset email field
      } else {
        alert(
          "Sorry, there was an issue on our end, please try again later!"
        );
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  const [currentModel, setCurrentModel] = useState(models[0]);

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

  return (
    <div>
      <Head>
        <title>Explore</title>
        <meta name="Explore Bikes" content="Learn more about our Bikes." />
      </Head>
      <Navbar />
      <main>
        <div className="w-full bg-center bg-cover h-[38rem]">
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                The future of <span className="text-blue-400">Biking</span>
              </h1>
              <button
                className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                onClick={() =>
                  document
                    .getElementById("middle")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Models
              </button>
            </div>
          </div>
        </div>
      </main>
      <section id="middle" className="bg-white dark:bg-gray-900 pb-20">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <div className="flex items-center justify-between mt-12 lg:justify-start">
              <button
                title="left arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                onClick={goToPrevModel}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <model-viewer
                src={`/${currentModel}`}
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                tone-mapping="commerce"
                poster="poster.webp"
                shadow-intensity="0"
                autoplay
                camera-orbit=""
                className="modelViewer"
                style={{
                  width: "600px",
                  height: "500px",
                  border: "2px solid #9bc1bc",
                }}
              ></model-viewer>

              <button
                title="right arrow"
                class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                onClick={goToNextModel}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
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
                  The leap from landlines, to the cellphone. The desktop
                  computer to the laptop. Now, the traditonal Bicycle to the
                  Retractability Quark. Retractability Bicycles offers the
                  future of biking, establishing new standards, and pushing the
                  industry forward.
                </p>

                <h3 class="mt-6 text-lg font-medium text-blue-500">
                  Release Date
                </h3>
                <p class="text-gray-600 dark:text-gray-300">January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="middle" className="bg-white dark:bg-gray-900 pb-20">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center lg:flex-row-reverse">
            <div className="flex items-center justify-between px-36 mt-12 lg:mt-0 lg:w-1/2">
              <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <div
                  role="status"
                  class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-slow dark:bg-gray-700"
                >
                  <svg
                    class="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 32 300 256"
                  >
                    <path d="M238.703,127.946c-5.119,0-10.089,0.487-14.847,1.67l-18.955-50.955h6.176c9.72,0,18.913-3.577,25.887-10.345l6.541-6.273 c2.973-2.885,3.043-7.595,0.158-10.568s-7.633-3.024-10.605-0.139l-6.541,6.206c-4.159,4.037-9.643,6.118-15.439,6.118h-16.979 c-2.458,0-4.76,1.356-6.161,3.375c-1.401,2.02-1.725,4.673-0.865,6.975l7.214,19.372c-0.046-0.001-0.093,0.141-0.139,0.141 c-0.016,0-0.032,0.137-0.049,0.137H98.126L85.165,71.823l14.078-4.895c3.467-1.191,5.564-4.55,4.961-8.166 c-0.604-3.615-3.731-6.101-7.397-6.101H55.597c-5.775,0-10.475,4.506-10.475,10.281c0,8.941,7.266,16.12,16.196,16.12 c1.79,0,3.565-0.347,5.277-0.934l4.103-1.433l13.146,21.996l-10.097,30.285c-3.312-0.669-6.714-1.09-10.193-1.201 c-17.589-0.563-34.055,6.138-46.219,18.697c-11.694,12.074-17.84,27.992-17.303,44.822c1.032,32.337,27.172,58.476,59.509,59.508 c0.673,0.021,1.34,0.032,2.008,0.032c16.811,0,32.513-6.716,44.212-18.794c9.464-9.773,15.291-22.38,16.885-35.38h12.051 c2.598,2,5.961,3.634,9.639,3.634c8.196,0,14.864-6.636,14.864-14.833c0-2.661-0.712-5.139-1.942-7.303l42.042-71.305l10.553,28.289 c-19.435,10.359-32.698,30.831-32.698,54.348c0,33.938,27.61,61.549,61.548,61.549s61.547-27.61,61.547-61.547 S272.641,127.946,238.703,127.946z M180.979,108.661l-36.606,62.091c-0.013,0-0.025-0.062-0.037-0.062 c-0.043,0-0.084,0.096-0.127,0.097l-37.131-62.125H180.979z M93.992,115.669l37.378,62.514c-0.618,1.101-1.089,2.478-1.412,3.478 h-7.326c-2.591-21-16.064-39.121-34.658-48.001L93.992,115.669z M74.447,181.661c-0.503-1-1.081-1.526-1.728-2.233l8.865-26.626 c10.72,5.925,18.562,16.859,20.834,28.859H74.447z M91.395,218.126c-8.215,8.481-19.311,13.04-31.215,12.655 c-21.822-0.696-39.461-18.319-40.157-40.141c-0.363-11.369,3.784-22.112,11.679-30.262c7.898-8.154,18.497-12.642,29.845-12.642 c0.455,0,0.91,0.01,1.369,0.024c1.502,0.048,2.981,0.185,4.439,0.389l-8.966,26.9c-6.569,1.537-11.481,7.43-11.481,14.461 c0,8.196,6.668,14.801,14.863,14.801c5.552,0,10.395-2.65,12.947-7.65h27.699C100.966,204.661,97.197,212.135,91.395,218.126z M238.703,231.042c-22.909,0-41.548-18.639-41.548-41.548c0-14.932,7.921-28.044,19.779-35.369l14.098,37.785 c1.125,3.017,3.986,4.88,7.027,4.88c0.871,0,1.757-0.152,2.621-0.476c3.881-1.447,5.853-5.768,4.404-9.648l-14.169-37.977 c2.524-0.481,5.125-0.743,7.788-0.743c22.909,0,41.547,18.639,41.547,41.548S261.613,231.042,238.703,231.042z" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>

            <div className="lg:mx-6 mt-8 lg:w-1/2 lg:px-6">
              {" "}
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                New Models Coming Soon!
              </h1>
              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                Stick around and be the first to get notified when new models
                come out!
              </p>
              <button
                className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                onClick={() =>
                  document
                    .getElementById("end")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Informed!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Email */}
      <section id="end">
        <div className="relative overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16 lg:justify-center">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Subscribe to our newsletter
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-300"></p>
                <div className="mt-6">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-y-4 max-w-md"
                  >
                    <div>
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:center hover:bg-blue-500 focus:outline-none focus:bg-blue-500 "
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
