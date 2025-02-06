"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import "../styles.css";

const Features = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Navbar />

      <section className="relative bg-[#4f5e62] h-[600px] flex items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold text-gray-800">
            Bikes that give you more control of where you go
          </h1>
          <p className="mt-4 text-gray-600">
            Look at the features of all our bikes
          </p>

          <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Open Your Account
          </button>
        </div>
      </section>

      {/* Spend & Save Section */}
      <section className="bg-black grid md:grid-cols-2 gap-6 p-10">
        <div>
          <h2 className="text-3xl font-semibold">Airless Tires</h2>
          <p className="mt-2 text-gray-600">
            Say goodbye to constant recycling of tires, our bikes offer airless
            tires, perfect for length-based and durable for rides of all sorts.
            Our bike gets the job done.
          </p>
        </div>
        <Image
          src="/RetractGrayBike.png"
          width={500}
          height={300}
          alt="Debit Card"
          className="rounded-lg"
        />
      </section>

      {/* Start Earning Interest Section */}
      <section className="grid md:grid-cols-2 gap-6 p-10 bg-gray-100">
        <Image
          src="/RetractGrayBike.png"
          width={500}
          height={300}
          alt="Interest"
          className="rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold">Collapsible Frame</h2>
          <p className="mt-2 text-gray-600">
            A strong frame made from one of three materials Steel, Aluminum,
            carbon Fiber. Each tailored to the rider and equally as strong.
          </p>
        </div>
      </section>

      {/* Sub-accounts Feature */}
      <section className="bg-black grid md:grid-cols-2 gap-6 p-10">
        <div>
          <h2 className="text-3xl font-semibold">Commuter Friendly</h2>
          <p className="mt-2 text-gray-600">
            Reduce stress by not worrying about where to park your bike, take it
            with you wherever it is you go. To campus, work, or even on a plane.
          </p>
        </div>
        <Image
          src="/RetractGrayBike.png"
          width={500}
          height={300}
          alt="Sub-accounts"
          className="rounded-lg"
        />
      </section>

      {/* Banking Deals */}
      <section className="grid md:grid-cols-2 gap-6 p-10 bg-gray-100">
        <Image
          src="/RetractGrayBike.png"
          width={500}
          height={300}
          alt="Deals"
          className="rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold">
            Full sized bike with foldable properties
          </h2>
          <p className="mt-2 text-gray-600">
            All the pros of a full sized bike like ride quality and better
            rider duration from pedaling combined with the pros of having a
            foldable bike that you can take anywhere
          </p>
        </div>
      </section>

      {/* Secure Banking Features */}
      <section className="p-10 text-center">
        <h2 className="text-4xl font-semibold">
          Secure online banking features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Mastercard 3D Secure</h3>
            <p className="text-gray-600">
              Extra layer of security for online payments.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">
              Instant push notifications
            </h3>
            <p className="text-gray-600">Stay updated with realtime alerts.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Biometric identification</h3>
            <p className="text-gray-600">
              Secure login with Face ID or fingerprint.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Protected up to 100,000</h3>
            <p className="text-gray-600">Your money is safe and insured.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="p-10 bg-gray-100">
        <h2 className="text-4xl font-semibold text-center">FAQ</h2>
        <div className="max-w-3xl mx-auto mt-6">
          <details className="mb-4 border-b pb-4">
            <summary className="cursor-pointer text-lg font-medium">
              What do I need to open an account?
            </summary>
            <p className="text-gray-600 mt-2">
              Youll need a valid ID and some basic personal details.
            </p>
          </details>
          <details className="mb-4 border-b pb-4">
            <summary className="cursor-pointer text-lg font-medium">
              How can I earn interest?
            </summary>
            <p className="text-gray-600 mt-2">
              Simply save money in your account and watch it grow.
            </p>
          </details>
          <details className="mb-4 border-b pb-4">
            <summary className="cursor-pointer text-lg font-medium">
              Is my money protected?
            </summary>
            <p className="text-gray-600 mt-2">
              Yes, up to 100,000 under the European Deposit Scheme.
            </p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Features;
