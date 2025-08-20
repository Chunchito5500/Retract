"use client";

import React, { useState, useEffect } from "react";

interface SignupProps {
  isVisible: boolean;          // overall visibility
  isMinimized: boolean;        // whether it's in pill mode
  onMinimize: () => void;      // turn card -> pill
  onExpand: () => void;        // turn pill -> card
  onClose: () => void;         // optional permanent hide (not used by the minus)
}

export default function Signup({
  isVisible,
  isMinimized,
  onMinimize,
  onExpand,
}: SignupProps) {
  const [email, setEmail] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setModalMessage("");

    try {
      const response = await fetch(
        "https://x4km5x9s0d.execute-api.us-east-1.amazonaws.com/RetractAPI/email",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();

      setModalMessage(
        result.message ||
          "We will be sending emails with information and updates as we move forward!"
      );
      setEmail("");
    } catch (error) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        setModalMessage(
          "Unable to connect to the server. This may be a CORS issue. Please check the console for details."
        );
      } else if (error instanceof Error) {
        setModalMessage(`Error: ${error.message}`);
      } else {
        setModalMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Not visible at all (closed for this session)
  if (!isVisible) return null;

  // Minimized pill
  if (isMinimized) {
    return (
      <div className="fixed z-50 bottom-4 right-4">
        <button
          onClick={onExpand}
          className="bg-[#070835] hover:bg-[#131236] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
          aria-label="Expand signup form"
        >
          {/* pencil-with-square icon fits "join" action; keep if you like */}
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
            <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
            <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
          </svg>
          <span className="hidden sm:inline font-semibold">Join Interest List</span>
        </button>
      </div>
    );
  }

  // Full card
  return (
    <div
      className={`fixed z-50 ${
        isMobile ? "inset-x-0 bottom-0 w-full" : "bottom-4 right-4 max-w-md w-full"
      } animate-in slide-in-from-right duration-300`}
    >
      <div
        className={`relative ${
          isMobile
            ? "w-full bg-[#333544] rounded-t-xl p-6 shadow-lg border-t border-gray-300"
            : "bg-[#333544] rounded-xl p-6 shadow-lg border border-gray-300"
        } dark:bg-neutral-900 dark:border-neutral-700`}
      >
        {/* Minus icon = MINIMIZE */}
        <button
          onClick={onMinimize}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
          title="Minimize"
          aria-label="Minimize signup card"
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
            {/* minus */}
            <path d="M5 12h14" />
          </svg>
        </button>

        <h3 className="text-xl font-bold text-gray-300">Join our Interest List!</h3>
        <p className="mt-2 text-gray-200">
          Sign up to join our interest list and see our progress!
        </p>

        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border border-gray-300 bg-white p-3 text-gray-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 shadow-sm transition focus:border-[#ccc5b9] focus:ring focus:ring-[#b5aea2] focus:outline-none disabled:opacity-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full rounded-md bg-[#ccc5b9] px-4 py-2 text-white font-semibold text-sm hover:bg-[#9d978e] focus:bg-[#ccc5b9] focus:outline-none focus:ring-2 focus:ring-[#b5aea2] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Submitting..." : "Sign Up"}
          </button>
        </form>

        {modalMessage && (
          <p
            className={`mt-4 text-sm ${
              modalMessage.includes("Error") || modalMessage.includes("Unable")
                ? "text-red-400"
                : "text-[#ccc5b9]"
            }`}
          >
            {modalMessage}
          </p>
        )}
      </div>
    </div>
  );
}
