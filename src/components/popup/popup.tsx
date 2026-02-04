"use client";

import localFont from "next/font/local";
import React, { useCallback, useEffect, useState } from "react";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});

const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});

interface PopupProps {
  isOpen: boolean;
  onDismiss: () => void;
  onSubmitted?: () => void;
}

export default function Popup({ isOpen, onDismiss, onSubmitted }: PopupProps) {
  const [email, setEmail] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onDismiss();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onDismiss]);

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
        },
      );

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();

      setModalMessage(
        result.message ||
          "Thanks for joining! We'll send updates as we move forward.",
      );
      setEmail("");
      onSubmitted?.();
    } catch (error) {
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        setModalMessage(
          "Unable to connect to the server. This may be a CORS issue. Please check the console for details.",
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <button
        type="button"
        aria-label="Close signup popup"
        onClick={onDismiss}
        className="absolute inset-0 bg-[#0b1024]/70 backdrop-blur-sm"
      />

      <div className="relative z-10 w-full max-w-[94vw] overflow-hidden rounded-[28px] bg-[#b4b2af] shadow-[0_30px_80px_rgba(5,10,30,0.45)] ring-1 ring-white/40 animate-in fade-in zoom-in-95 duration-300 sm:max-w-2xl md:max-w-5xl">
        <button
          type="button"
          onClick={onDismiss}
          className="absolute right-4 top-4 z-20 rounded-full bg-[#1b223d]/90 p-3 text-white/90 shadow-lg transition hover:text-white sm:right-5 sm:top-5 sm:p-2"
          aria-label="Dismiss signup popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-4 sm:w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr]">
          <div className="relative min-h-[220px] sm:min-h-[280px] md:min-h-[540px]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f172a,#1b264f_45%,#536186_90%)]" />
            <div className="absolute inset-0 bg-[url('/images/popup.JPEG')] bg-cover bg-center opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1022]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white"></div>
          </div>

          <div
            className={`flex h-full flex-col px-6 py-8 text-center sm:px-10 sm:py-10 md:px-12 ${BebasNeue.className}`}
          >
            <p className="text-sm uppercase tracking-[0.1em] text-slate-200 sm:text-md">
              Retractability Bicycles
            </p>
            <h3 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl md:text-6xl">
              Join our Interest List!
            </h3>
            <p className="mt-3 text-lg text-slate-200 sm:mt-4 sm:text-xl md:text-2xl">
              Get early access, progress updates, and launch perks.
            </p>

            <div className="flex-1" />

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 normal-case shadow-sm transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none disabled:opacity-50 ${Roboto.className}`}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-[#0b1226] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#101a36] focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Submitting..." : "Yes, Keep Me Posted"}
              </button>
            </form>

            {modalMessage && (
              <p
                className={`mt-4 text-sm ${
                  modalMessage.includes("Error") ||
                  modalMessage.includes("Unable")
                    ? "text-rose-500"
                    : "text-emerald-600"
                }`}
                aria-live="polite"
              >
                {modalMessage}
              </p>
            )}

            <button
              type="button"
              onClick={onDismiss}
              className="mt-6 text-xs uppercase tracking-[0.25em] text-slate-400 transition hover:text-slate-700"
            >
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
