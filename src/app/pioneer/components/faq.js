"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});
const SourceSans = localFont({
  src: "../../fonts/SourceSans3-Regular.ttf",
});

const FAQItem = ({ title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl p-6 border border-[#333544] mb-4 transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-x-3 md:text-2xl font-semibold text-[#ccc5b9] ${BebasNeue.className} transition hover:text-[#ded7ca] focus:outline-none`}
      >
        {title}
        {isOpen ? (
          <MdKeyboardArrowUp className="shrink-0 text-2xl text-[gray-800]" />
        ) : (
          <MdKeyboardArrowDown className="shrink-0 text-2xl text-gray-800" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4">
          <p className={`text-[#faf8f4] ${SourceSans.className}`}>{content}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2
          className={`text-2xl font-bold md:text-4xl md:leading-tight text-[#faf8f4] ${BebasNeue.className}`}
        >
          Your questions, answered
        </h2>
        <p className="mt-1 text-gray-300">
          Answers to the most frequently asked questions.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <FAQItem
          title="How much is it?"
          content="Currently, we estimate the Pioneer to cost around $700 - $750. This is a rough estimate and may change as we finalize the design and production process."
        />
        <FAQItem
          title="How do I fold it?"
          content="The Pioneer is designed to be easy to fold and unfold. The folding mechanism is intuitive, and we will provide detailed instructions and videos to guide you through the process after purchase."
        />
        <FAQItem
          title="Where can I put it?"
          content="Anywhere you want! The Pioneer is designed to be compact and portable, making it easy to store in small spaces. Whether it's in your apartment, office, or car, the Pioneer can fit just about anywhere."
        />
        <FAQItem
          title="How small does it get?"
          content="With current prototypes, the Pioneer can fold down to a size of approximately 26 by 20 by 14 inches. This makes it easy to transport and store without taking up too much space."
        />
        <FAQItem
          title="How is it sustainable?"
          content="Here at Retractability we aim to create a bike that is not only functional but also sustainable. We are committed to using eco-friendly materials and processes in our production. We also plan to implement a repair and recycling program to minimize waste."
        />
        <FAQItem
          title="Is it durable?"
          content="The Pioneer is as durable as a regular bike and then some."
        />
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default FAQ;
