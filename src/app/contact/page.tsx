"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const setInquiry = (inquiry: Inquiry) => setForm((p) => ({ ...p, inquiry }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ux30qhrcf5.execute-api.us-east-1.amazonaws.com/Initial",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Error:", result);
        // You might want to show an error message to the user
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your connection and try again.");
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
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.youtube.com/@Retractability"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="YouTube"
                    >
                      <FaYoutube className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/retractability-bicycles/"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="LinkedIn"
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
                    Thank you for contacting us! We&apos;ll get back to you
                    soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none focus:ring-2 focus:ring-gray-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none focus:ring-2 focus:ring-gray-300"
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
                          className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none focus:ring-2 focus:ring-gray-300"
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
                          className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none focus:ring-2 focus:ring-gray-300"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none focus:ring-2 focus:ring-gray-300"
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
                            className={`rounded-full border px-3 py-1.5 text-sm transition ${
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
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 px-3 py-3 outline-none focus:ring-2 focus:ring-gray-300"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#1e2230] text-white py-3.5 font-medium hover:bg-[#252a3d] transition"
                    >
                      Submit
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
