"use client";

import React, { useState, useEffect } from "react";

export default function Signup({ isVisible, onClose }) {
  const [email, setEmail] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://x4km5x9s0d.execute-api.us-east-1.amazonaws.com/RetractAPI/email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();
      setModalMessage(
        result.message ||
          "We will be sending emails with information and updates as we move forward!"
      );
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setModalMessage("Error submitting form. Please try again.");
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-x-0 ${
        isMobile
          ? "bottom-0 w-full"
          : "inset-0 flex items-center justify-center"
      } z-50`}
    >
      <div
        className={`relative ${
          isMobile
            ? "w-full bg-white rounded-t-xl p-6 shadow-lg border-t border-gray-300"
            : "max-w-md w-full bg-white rounded-xl p-6 shadow-lg border border-gray-300"
        } dark:bg-neutral-900 dark:border-neutral-700`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          Join our Interest List!
        </h3>
        <p className="mt-2 text-gray-500 dark:text-neutral-400">
          Sign up to join our interest list and see our progress!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border border-gray-300 bg-white p-3 text-gray-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 shadow-sm transition focus:border-blue-500 focus:ring focus:ring-blue-400 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white font-semibold text-sm hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
        </form>

        {/* Response Message */}
        {modalMessage && (
          <p className="mt-4 text-sm text-blue-600 dark:text-blue-400">
            {modalMessage}
          </p>
        )}
      </div>
    </div>
  );
}
