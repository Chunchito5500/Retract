'use client';

import React, { useState } from 'react';
import localFont from 'next/font/local';

const BebasNeue = localFont({
  src: "../../../fonts/BebasNeue-Regular.ttf",
});

const Roboto = localFont({
  src: "../../../fonts/Roboto-Regular.ttf",
});

const QUESTIONS = [
  {
    id: 'one',
    title: 'How much is it?',
    content:
      'Currently, we estimate the Pioneer to cost around $700 – $750. This is a rough estimate and may change as we finalize the design and production process.',
    defaultOpen: true,
  },
  {
    id: 'two',
    title: 'How do I fold it?',
    content:
      'The Pioneer is designed to be easy to fold and unfold. The folding mechanism is intuitive, and we will provide detailed instructions and videos to guide you through the process after purchase.',
  },
  {
    id: 'three',
    title: 'Where can I put it?',
    content:
      'Anywhere you want! The Pioneer is designed to be compact and portable, making it easy to store in small spaces. Whether it\'s in your apartment, office, or car, the Pioneer can fit just about anywhere.',
  },
  {
    id: 'four',
    title: 'How small does it get?',
    content:
      'With current prototypes, the Pioneer can fold down to a size of approximately 26" × 20" × 14". This makes it easy to transport and store without taking up too much space.',
  },
  {
    id: 'five',
    title: 'How is it sustainable?',
    content:
      'Here at Retractability we aim to create a bike that is not only functional but also sustainable. We are committed to using eco-friendly materials and processes in our production. We also plan to implement a repair and recycling program to minimize waste.',
  },
  {
    id: 'six',
    title: 'Is it durable?',
    content:
      'The Pioneer is as durable as a regular bike, along with the added benefit of an airless tire. We are using high-quality materials and rigorous testing to ensure that the Pioneer can withstand daily use and the elements.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(
    QUESTIONS.find((q) => q.defaultOpen)?.id || null
  );

  return (
    <section className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className={`text-2xl font-bold md:text-4xl md:leading-tight text-white ${BebasNeue.className}`}>
          Your questions, answered
        </h2>
        <p className={`mt-1 text-gray-300 ${Roboto.className}`}>
          Answers to the most frequently asked questions.
        </p>
      </div>

      {/* Accordion Group */}
      <div className="max-w-2xl mx-auto space-y-4">
        {QUESTIONS.map(({ id, title, content }) => {
          const isOpen = openId === id;
          return (
            <div
              key={id}
              className={`
                border border-gray-200 dark:border-gray-700
                rounded-xl p-6 transition-colors
                ${isOpen ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}
                hover:bg-gray-50 dark:hover:bg-gray-800
              `}
            >
              <button
                type="button"
                className={`group pb-3 relative w-full md:text-lg font-semibold text-left text-gray-800 rounded-lg transition hover:text-gray-600 focus:outline-none focus:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 pr-8 ${Roboto.className}`}
                aria-expanded={isOpen}
                aria-controls={`collapse-${id}`}
                onClick={() => setOpenId(isOpen ? null : id)}
              >
                {title}

                {/* Arrow icon */}
                <svg
                  className={`absolute right-0 top-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                id={`collapse-${id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                role="region"
                aria-labelledby={`heading-${id}`}
              >
                <p className={`text-gray-700 dark:text-gray-300 leading-relaxed ${Roboto.className}`}>
                  {content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}