"use client";

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Explore from "@/app/components/Explore";
import ExploreMobile from "@/app/components/ExploreMobile";
import { MdPedalBike } from "react-icons/md";

export default function ExplorePage() {
  const models = [
    "Renaissance Italian Orange.glb",
    "Oceanic Blue.glb",
    "Oceanic Blue Alt Seat.glb",
    "Cool Blue with Black Seat.glb",
  ];

  const [email, setEmail] = useState("");
  const [currentModel, setCurrentModel] = useState(models[0]);
  const modelViewerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      const checkMobile = () => {
          setIsMobile(window.innerWidth < 768); // or any other width threshold
      };

      checkMobile(); // Check on initial mount
      window.addEventListener('resize', checkMobile); // Add resize listener

      return () => window.removeEventListener('resize', checkMobile); // Clean up
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://1cpbsgw2lc.execute-api.us-east-1.amazonaws.com/Deployment/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email }),
      });
  
      const message = await response.json(); // Assuming the response is a JSON object with a 'body' key.
  
      if (response.ok) {
        alert(message.body); // Displays the message from the Lambda response
        setEmail('');
      } else {
        alert(`Failed to subscribe: ${message.body}`);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Error submitting form. Please try again.');
    }
  };
  
  




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
      <main className="bg-cover bg-center h-[38rem] bg-[url('/header-image.jpg')]">
        <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-40">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-semibold text-white">
              The future of <span className="text-blue-400">Biking</span>
            </h1>
            <button
              className="mt-4 px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 lg:w-auto"
              onClick={() => document.getElementById("middle").scrollIntoView({ behavior: "smooth" })}
            >
              Explore Models
            </button>
          </div>
        </div>
      </main>
      {isMobile ? <ExploreMobile /> : <Explore />}



      <section id="end" className="py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-x-8 gap-y-16 justify-center">
              <div className="max-w-xl lg:max-w-lg text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Subscribe to our newsletter
                </h2>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-y-4 max-w-md mx-auto">
    <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="w-full rounded-md bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <button
        type="submit"
        className="w-full px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:bg-blue-500"
    >
        Subscribe
    </button>
</form>

              </div>
            </div>
          </div>
        </section>
      </div>
  );
  
}
