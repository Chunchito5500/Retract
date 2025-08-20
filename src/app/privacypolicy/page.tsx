"use client";

import Link from "next/link";
import { Navbar } from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});

const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});

export default function Privacy(): React.JSX.Element {
  // Initialize with all tabs open
  const [activeTabs, setActiveTabs] = useState<string[]>([
    "tab1",
    "tab2",
    "tab3",
    "tab4",
    "tab5",
  ]);

  const handleTabClick = (tab: string): void => {
    setActiveTabs((prevActiveTabs) =>
      prevActiveTabs.includes(tab)
        ? prevActiveTabs.filter((t) => t !== tab)
        : [...prevActiveTabs, tab]
    );
  };

  return (
    <div>
      <Navbar />
      <section className="bg-[#333947]">
        <div>
          <div style={{ height: "75px" }}></div>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="space-y-5 md:space-y-8">
              <div className="space-y-3 text-center">
                <div style={{ height: 50 }} />
                <h2 className={`text-4xl text-white ${BebasNeue.className}`}>
                  Retractability Privacy Policy
                </h2>
                <p className={`text-2xl text-[#CCCCCC] ${BebasNeue.className}`}>
                  Introduction
                </p>
                <p className={`text-gray-300 dark:text-white ${Roboto.className}`}>
                  Welcome to Retractability Bicycles! We are a bicycle company
                  specializing in innovative bikes that can fold and fit into
                  backpacks. Our mission is to provide convenient, portable
                  biking solutions. We have created this privacy policy to
                  inform our website visitors about the data we collect and why
                  we collect it.
                </p>
              </div>

              <div className="flex flex-col items-start space-y-3">
                <button
                  type="button"
                  className={`hs-collapse-toggle py-5 px-4 w-full inline-flex items-center justify-between gap-x-2 text-md rounded-lg border border-transparent text-white bg-[#5297c2] hover:bg-[#71a7c7] focus:outline-none focus:bg-[#71a7c7] disabled:opacity-50 disabled:pointer-events-none ${Roboto.className}`}
                  id="hs-basic-collapse-1"
                  aria-expanded={activeTabs.includes("tab1")}
                  aria-controls="hs-basic-collapse-heading-1"
                  onClick={() => handleTabClick("tab1")}
                >
                  Data Collection
                  <MdKeyboardArrowDown
                    className={`hs-collapse-open:rotate-180 shrink-0 transition-transform duration-300 ${
                      activeTabs.includes("tab1") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id="hs-basic-collapse-heading-1"
                  className={`hs-collapse ${
                    activeTabs.includes("tab1") ? "block" : "hidden"
                  } w-full overflow-hidden transition-[height] duration-300`}
                  aria-labelledby="hs-basic-collapse-1"
                >
                  <div className="py-2">
                    <p className={`text-gray-300 dark:text-neutral-400 ${Roboto.className}`}>
                      When you visit our website, we do not collect any personal
                      data from our end, except for basic site remembrance that
                      your browser may allow based on your settings. This helps
                      our 3D models load faster. This is entirely dependent on
                      your browser settings. Additionally, if you choose to
                      subscribe to our email updates, we collect and store your
                      email address using AWS services.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className={`hs-collapse-toggle py-5 px-4 w-full inline-flex items-center justify-between gap-x-2 text-md rounded-lg border border-transparent text-white bg-[#5297c2] hover:bg-[#71a7c7] focus:outline-none focus:bg-[#71a7c7] disabled:opacity-50 disabled:pointer-events-none ${Roboto.className}`}
                  id="hs-basic-collapse-2"
                  aria-expanded={activeTabs.includes("tab2")}
                  aria-controls="hs-basic-collapse-heading-2"
                  onClick={() => handleTabClick("tab2")}
                >
                  Data Use
                  <MdKeyboardArrowDown
                    className={`hs-collapse-open:rotate-180 shrink-0 transition-transform duration-300 ${
                      activeTabs.includes("tab2") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id="hs-basic-collapse-heading-2"
                  className={`hs-collapse ${
                    activeTabs.includes("tab2") ? "block" : "hidden"
                  } w-full overflow-hidden transition-[height] duration-300`}
                  aria-labelledby="hs-basic-collapse-2"
                >
                  <div className="py-2">
                    <p className={`text-gray-300 dark:text-neutral-400 ${Roboto.className}`}>
                      The email information we collect is only accessible to the
                      employees of Retractability Bicycles, currently limited to
                      the founders. We use your email address to send out
                      updates and information about our products and company
                      developments. We do not share your email information with
                      third parties.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className={`hs-collapse-toggle py-5 px-4 w-full inline-flex items-center justify-between gap-x-2 text-md rounded-lg border border-transparent text-white bg-[#5297c2] hover:bg-[#71a7c7] focus:outline-none focus:bg-[#71a7c7] disabled:opacity-50 disabled:pointer-events-none ${Roboto.className}`}
                  id="hs-basic-collapse-3"
                  aria-expanded={activeTabs.includes("tab3")}
                  aria-controls="hs-basic-collapse-heading-3"
                  onClick={() => handleTabClick("tab3")}
                >
                  Data Rights
                  <MdKeyboardArrowDown
                    className={`hs-collapse-open:rotate-180 shrink-0 transition-transform duration-300 ${
                      activeTabs.includes("tab3") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id="hs-basic-collapse-heading-3"
                  className={`hs-collapse ${
                    activeTabs.includes("tab3") ? "block" : "hidden"
                  } w-full overflow-hidden transition-[height] duration-300`}
                  aria-labelledby="hs-basic-collapse-3"
                >
                  <div className="py-2">
                    <p className={`text-gray-300 dark:text-neutral-400 ${Roboto.className}`}>
                      As a visitor, you have the right to control your browser
                      settings and their relation to our website. You also have
                      the right to choose whether or not to enter your email.
                      Providing your email is entirely voluntary.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className={`hs-collapse-toggle py-5 px-4 w-full inline-flex items-center justify-between gap-x-2 text-md rounded-lg border border-transparent text-white bg-[#5297c2] hover:bg-[#71a7c7] focus:outline-none focus:bg-[#71a7c7] disabled:opacity-50 disabled:pointer-events-none ${Roboto.className}`}
                  id="hs-basic-collapse-4"
                  aria-expanded={activeTabs.includes("tab4")}
                  aria-controls="hs-basic-collapse-heading-4"
                  onClick={() => handleTabClick("tab4")}
                >
                  Data Transfers
                  <MdKeyboardArrowDown
                    className={`hs-collapse-open:rotate-180 shrink-0 transition-transform duration-300 ${
                      activeTabs.includes("tab4") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id="hs-basic-collapse-heading-4"
                  className={`hs-collapse ${
                    activeTabs.includes("tab4") ? "block" : "hidden"
                  } w-full overflow-hidden transition-[height] duration-300`}
                  aria-labelledby="hs-basic-collapse-4"
                >
                  <div className="py-2">
                    <p className={`text-gray-300 dark:text-neutral-400 ${Roboto.className}`}>
                      Your personal information, if you choose to share it with
                      us, is never accessed by third parties or sold. The region
                      from which you access our site does not affect our email
                      collection practices.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className={`hs-collapse-toggle py-5 px-4 w-full inline-flex items-center justify-between gap-x-2 text-md rounded-lg border border-transparent text-white bg-[#5297c2] hover:bg-[#71a7c7] focus:outline-none focus:bg-[#71a7c7] disabled:opacity-50 disabled:pointer-events-none ${Roboto.className}`}
                  id="hs-basic-collapse-5"
                  aria-expanded={activeTabs.includes("tab5")}
                  aria-controls="hs-basic-collapse-heading-5"
                  onClick={() => handleTabClick("tab5")}
                >
                  Data Updates
                  <MdKeyboardArrowDown
                    className={`hs-collapse-open:rotate-180 shrink-0 transition-transform duration-300 ${
                      activeTabs.includes("tab5") ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id="hs-basic-collapse-heading-5"
                  className={`hs-collapse ${
                    activeTabs.includes("tab5") ? "block" : "hidden"
                  } w-full overflow-hidden transition-[height] duration-300`}
                  aria-labelledby="hs-basic-collapse-5"
                >
                  <div className="py-2">
                    <p className={`text-gray-300 dark:text-neutral-400 ${Roboto.className}`}>
                      This privacy policy is our first rendition and is subject
                      to change in the future. The current policy is effective
                      as of 8/1/2024. We will notify our visitors of any changes
                      to this policy through updates on our website. Thank you
                      for visiting Retractability Bicycles. If you have any
                      questions or concerns about our privacy policy, please
                      feel free to{" "}
                      <Link
                        className={`text-gray-200 decoration-2 hover:underline focus:outline-none focus:underline font-medium ${Roboto.className}`}
                        href="/"
                      >
                        contact us
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}