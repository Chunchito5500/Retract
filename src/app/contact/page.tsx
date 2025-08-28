"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

type Inquiry = "General" | "Licensing" | "Investment" | "Other";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    industry: "",
    phone: "",
    email: "",
    message: "",
    inquiry: "General" as Inquiry,
    marketingOptIn: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const setInquiry = (inquiry: Inquiry) => setForm((p) => ({ ...p, inquiry }));

  const validateForm = () => {
    if (!form.firstName.trim()) return "First name is required";
    if (!form.lastName.trim()) return "Last name is required";
    if (!form.email.trim()) return "Email is required";
    if (!form.message.trim()) return "Message is required";

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return "Please enter a valid email";

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      console.log("Submitting form data:", form);

      // Use your Lambda Function URL if you switch to that
      // const API_URL = "YOUR_LAMBDA_FUNCTION_URL_HERE";
      const API_URL =
        "https://ux30qhrcf5.execute-api.us-east-1.amazonaws.com/Initial";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log("Response status:", response.status);

      // Try to parse response regardless of status
      let result;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error(
          `Server returned non-JSON response: ${text.substring(0, 100)}`
        );
      }

      if (!response.ok) {
        console.error("Error response:", result);
        throw new Error(result.error || `Server error: ${response.status}`);
      }

      console.log("Success response:", result);
      setSubmitted(true);

      // Reset form after successful submission
      setTimeout(() => {
        setForm({
          firstName: "",
          lastName: "",
          industry: "",
          phone: "",
          email: "",
          message: "",
          inquiry: "General",
          marketingOptIn: false,
        });
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);

      // Better error messages for users
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        setError(
          "Unable to connect to the server. Please check your internet connection and try again."
        );
      } else if (error instanceof Error) {
        if (error.message.includes("CORS")) {
          setError(
            "Configuration error. Please contact support if this persists."
          );
        } else {
          setError(
            error.message || "Failed to send message. Please try again later."
          );
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111315] text-white">
      <Navbar />

      {/* space below navbar */}
      <div className="h-50" />

      <main className="max-w-none mx-auto px-3 sm:px-4 lg:px-18 pb-20">
        {/* HERO CARD */}
        <section className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* background image */}
          <div className="absolute inset-0">
            <Image
              src="/contact/contact2.png"
              alt="Contact background"
              fill
              priority
              className="object-cover"
            />
            {/* subtle dark overlay to keep text readable (not black) */}
            <div className="absolute inset-0 bg-[#283845]/70" />
          </div>

          {/* content */}
          <div className="relative grid md:grid-cols-2">
            {/* LEFT: copy + info */}
            <div className="p-8 sm:p-10 lg:p-14 flex flex-col">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                  Contact Us
                </h1>

                <p className="mt-5 max-w-2xl text-sm md:text-base text-white/80">
                  Ask us any questions, share your thoughts, or just say hello!
                  We&apos;re here to help you with anything you need.
                </p>
              </div>

              {/* Social and Email sections moved to bottom */}
              <div className="mt-auto pt-10 grid sm:grid-cols-2 gap-8">
                {/* Social */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-white/70">
                    Social Media
                  </h3>
                  <div className="mt-3 flex space-x-4">
                    <a
                      href="https://instagram.com/retractability_bikes"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.youtube.com/@Retractability"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="YouTube"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/retractability-bicycles/"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-white/70">
                    Email
                  </h3>
                  <p className="mt-3 text-white/90 text-sm">
                    retractabilitybicycles@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: contact form card */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-7 md:p-8 text-gray-800">
                <h2 className="text-lg font-semibold mb-1">
                  Tell Us What You Need
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Our team is ready to assist you with every detail, big or
                  small.
                </p>

                {submitted ? (
                  <div className="rounded-xl bg-green-50 text-green-800 p-4 text-sm">
                    <div className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div>
                        <p className="font-medium">
                          Thank you for contacting us!
                        </p>
                        <p className="mt-1">
                          We&apos;ll get back to you within 1-2 business days.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="rounded-xl bg-red-50 text-red-800 p-4 text-sm">
                        <div className="flex items-start">
                          <svg
                            className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p>{error}</p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          disabled={submitting}
                          className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          disabled={submitting}
                          className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Industry
                        </label>
                        <input
                          type="text"
                          name="industry"
                          value={form.industry}
                          onChange={handleChange}
                          disabled={submitting}
                          className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          disabled={submitting}
                          className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          disabled={submitting}
                          className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>

                    {/* Inquiry type pills */}
                    <div>
                      <span className="block text-xs font-medium text-gray-600 mb-2">
                        Type of Inquiry
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {(
                          [
                            "General",
                            "Licensing",
                            "Investment",
                            "Other",
                          ] as Inquiry[]
                        ).map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setInquiry(t)}
                            disabled={submitting}
                            className={`rounded-full border px-3 py-1.5 text-sm transition disabled:opacity-50 disabled:cursor-not-allowed ${
                              form.inquiry === t
                                ? "bg-gray-900 text-white border-gray-900"
                                : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        disabled={submitting}
                        placeholder="How can we help you?"
                        className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none focus:ring-2 focus:ring-gray-300 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                      />
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        name="marketingOptIn"
                        id="marketingOptIn"
                        checked={form.marketingOptIn}
                        onChange={handleChange}
                        disabled={submitting}
                        className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                      />
                      <label
                        htmlFor="marketingOptIn"
                        className="text-xs text-gray-600"
                      >
                        I&apos;d like to receive updates about Retractability
                        products and services
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-xl bg-[#1e2230] text-white py-3.5 font-medium hover:bg-[#252a3d] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {submitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
