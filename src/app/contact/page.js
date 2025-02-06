"use client";

import Navbar from "@/app/components/Navbar";
import { useState } from "react";
import Footer from "@/app/components/Footer";
import "../globals.css";
import "../styles.css";

export default function Contact() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
      setModalVisible(true);
    } catch (error) {
      console.error("Subscription error:", error);
      setModalMessage("Error submitting form. Please try again.");
      setModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#4e6e70]">
        <div style={{ height: "100px" }}></div>
        <section id="Message us">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div role="alert" className="alert alert-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Page building in progress!</span>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-12">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
                  Contact us!
                </h1>
                <p className="mt-1 md:text-lg text-gray-800 dark:text-neutral-200">
                  We are always open to questions from anyone!
                </p>

                <div className="mt-8">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    What can I expect?
                  </h2>

                  <ul className="mt-2 space-y-2">
                    <li className="flex gap-x-3">
                      <svg
                        className="shrink-0 mt-0.5 size-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-white">A team you can trust</span>
                    </li>

                    <li className="flex gap-x-3">
                      <svg
                        className="shrink-0 mt-0.5 size-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-white">A community of support</span>
                    </li>

                    <li className="flex gap-x-3">
                      <svg
                        className="shrink-0 mt-0.5 size-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-white">Simple and affordable</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <label for="remember-me" className=" text-white">
                    <button
                      className=" decoration-2 hover:underline focus:outline-none focus:underline text-lg font-semibold text-neutral-200"
                      onClick={() =>
                        document
                          .getElementById("interest")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Or sign up for our interest list!
                    </button>
                  </label>
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-neutral-700">
                  <h2 className="text-xl font-semibold text-neutral-200">
                    Fill in the form
                  </h2>

                  <form>
                    <div className="mt-6 grid gap-4 lg:gap-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        <div>
                          <label
                            for="hs-firstname-hire-us-1"
                            className="block mb-2 text-sm font-medium text-white"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="hs-firstname-hire-us-1"
                            id="hs-firstname-hire-us-1"
                            placeholder="John"
                            className="py-3 px-4 block w-full text-black border-gray-200 rounded-lg text-sm bg-[#dce1e3] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          />
                        </div>

                        <div>
                          <label
                            for="hs-lastname-hire-us-1"
                            className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="hs-lastname-hire-us-1"
                            id="hs-lastname-hire-us-1"
                            placeholder="Doe"
                            className="py-3 px-4 block w-full text-black border-gray-200 rounded-lg text-sm bg-[#dce1e3] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          for="hs-work-email-hire-us-1"
                          className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="hs-work-email-hire-us-1"
                          id="hs-work-email-hire-us-1"
                          placeholder="name@email.com"
                          autocomplete="email"
                          className="py-3 px-4 block w-full text-black border-gray-200 rounded-lg text-sm bg-[#dce1e3] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        />
                      </div>
                      <div>
                        <label
                          for="hs-work-email-hire-us-1"
                          className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                        >
                          Organization
                        </label>
                        <input
                          type="text"
                          name="hs-company-hire-us-1"
                          placeholder="e.g. Student, Company"
                          id="hs-company-hire-us-1"
                          className="py-3 px-4 block w-full text-black border-gray-200 rounded-lg text-sm bg-[#dce1e3] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        />
                      </div>

                      <div>
                        <label
                          for="hs-about-hire-us-1"
                          className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                        >
                          Message
                        </label>
                        <textarea
                          id="hs-about-hire-us-1"
                          name="hs-about-hire-us-1"
                          rows="4"
                          className="py-3 px-4 block w-full text-black border-gray-200 rounded-lg text-sm bg-[#dce1e3] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        ></textarea>
                      </div>
                    </div>
                  </form>

                  <div className="mt-3 flex">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ms-3">
                      <label for="remember-me" className="text-sm text-white">
                        By submitting this form I have read and acknowledged the{" "}
                        <a
                          className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                          href="/privacypolicy"
                        >
                          Privacy policy
                        </a>
                      </label>
                    </div>
                  </div>

                  <div className="mt-6 grid">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-400 text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Send inquiry
                    </button>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="text-sm text-white">
                      We will get back to you in 3-5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="interest">
          <div style={{ height: "100px" }}></div>
          <div className="card card-body w-full ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
              <div className="grid gap-x-8 gap-y-16 justify-center">
                <div className="max-w-xl lg:max-w-lg text-center ">
                  <h2 className="mb-4 text-4xl tracking-tight font-raleway font-medium text-center text-blue-400">
                    Sign up to join our interest list and see our progress!
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 flex flex-col gap-y-4 max-w-md mx-auto"
                  >
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="py-3 px-4 block w-full text-black border-gray-200 rounded-lg text-sm bg-[#dce1e3] focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-400 text-white hover:bg-blue-500 focus:bg-blue-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              {modalVisible && (
                <dialog open className="modal">
                  <div
                    className="modal-box"
                    style={{
                      background:
                        "linear-gradient(to bottom, #587792, #284b63, #153243)",
                    }}
                  >
                    <h3 className="text-2xl font-bold">
                      Thank you for your interest!
                    </h3>
                    <p className="py-4">{modalMessage}</p>
                    <div className="modal-action">
                      <button
                        className="btn text-sm font-medium text-white bg-[#456990] hover:bg-[#011936]"
                        onClick={handleCloseModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </dialog>
              )}
            </div>
            <div style={{ height: "30px" }}></div>
            <h2 className="lg:py-8 text-3xl tracking-tight font-raleway font-medium text-center text-[#3CC8FF]">
              OR
            </h2>
            <div className="py-4 lg:py-3 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-raleway font-medium text-center text-blue-400">
                Email us directly!
              </h2>
              <p className="mb-8 lg:mb-16 font-raleway font-medium text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Want to know more? Have a question? Let us know at{" "}
                <font color="#3CC8FF">retractabilitybicycles@gmail.com</font>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
