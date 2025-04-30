import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const BebasNeue = localFont({
  src: "../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../fonts/Roboto-Regular.ttf",
});

const News = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 py-4">
        <h2
          className={`text-6xl font-bold text-center mb-6 text-[#d0d1f4] ${BebasNeue.className}`}
        >
          Read our News!
        </h2>
      </div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          <a
            className="group relative block rounded-xl focus:outline-none transform transition-transform duration-300 hover:-translate-y-2"
            href="/blog"
          >
            <div className="relative rounded-xl overflow-hidden w-full h-[350px]">
              <Image
                className="absolute top-0 left-0 object-cover w-full h-full opacity-30"
                src="/ctw.jpg"
                alt="Change the World"
                width={800}
                height={400}
              />
            </div>
            <div className="absolute top-0 inset-x-0 z-10">
              <div className="p-4 flex flex-col h-full sm:p-6">
                <div className="flex items-center">
                  <div className="ms-2.5">
                    <h4 className="font-semibold text-white">Basel Kurian</h4>
                    <p className="text-xs text-white/80">April 14th, 2025</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white">
                  Retractability Bicycles at Change the World!
                </h3>
                <p className="mt-2 text-white/80">
                  Read about our experience at the Change the World event at
                  ASU.
                </p>
              </div>
            </div>
          </a>

          <a
            className="group relative block rounded-xl focus:outline-none transform transition-transform duration-300 hover:-translate-y-2"
            href="/blogo"
          >
            <div className="relative rounded-xl overflow-hidden w-full h-[350px]">
              <Image
                className="absolute top-0 left-0 object-cover w-full h-full opacity-30"
                src="/RetractOrange.png"
                alt="Blog Image"
                width={800}
                height={400}
              />
            </div>
            <div className="absolute top-0 inset-x-0 z-10">
              <div className="p-4 flex flex-col h-full sm:p-6">
                <div className="flex items-center">
                  <div className="ms-2.5">
                    <h4 className="font-semibold text-white">Zephan Deepu</h4>
                    <p className="text-xs text-white/80">April 28, 2025</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white">
                  From a College Problem to a Biking Revolution
                </h3>
                <p className="mt-2 text-white/80">
                  The Story Behind Retractability
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
