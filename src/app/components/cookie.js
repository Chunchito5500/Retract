// path: CookieNotice.js

import React, { useState, useEffect } from 'react';
import { PiCookieFill } from "react-icons/pi";

export default function CookieNotice() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCookieNoticeVisible, setIsCookieNoticeVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setIsCookieNoticeVisible(true);
    }
  }, []);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openSiteDataSettings = () => {
    window.open('chrome://settings/siteData'); // This works for Chrome. You may need to adjust for other browsers.
  };

  const handleAcceptAllCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsCookieNoticeVisible(false);
  };

  return (
    <>
      {isCookieNoticeVisible && (
        <section className="fixed bottom-4 left-4 right-4 max-w-md p-4 mx-auto bg-[#1b293e] md:gap-x-4 md:left-12 md:bottom-16 md:right-auto md:max-w-2xl md:flex md:items-center border-gray-700 rounded-2xl">
          <div className="flex items-center gap-x-4">
            <span className="inline-flex p-2 text-[#3CC8FF] rounded-lg shrink-0 dark:bg-[#45505f] bg-blue-100/80">
              <PiCookieFill size={20} />
            </span>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              We use cookies to enhance your user experience. By continuing to visit this site you agree to{' '}
              <a onClick={handleModalToggle} className="text-[#3CC8FF] hover:underline cursor-pointer">
                our use of cookies
              </a>.
            </p>
          </div>

          <div className="flex items-center mt-6 gap-x-4 shrink-0 lg:mt-0">
            <button
              onClick={openSiteDataSettings}
              className="w-1/2 text-xs text-gray-800 underline transition-colors duration-300 md:w-auto dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              Preferences
            </button>

            <button
              onClick={handleAcceptAllCookies}
              className="text-xs w-1/2 md:w-auto font-medium bg-[#45505f] rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
            >
              Accept All Cookies
            </button>
          </div>
        </section>
      )}

      {isModalOpen && (
        <div
          id="cookie-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto bg-gray-800 bg-opacity-75"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-[#334150] rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Cookies Policy
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleModalToggle}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4 max-h-[60vh] overflow-y-auto">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  This Cookies Policy explains how Retractability Bicycles (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) uses cookies and similar technologies on our website.
                </p>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">1. What are cookies?</h4>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They help the website recognize your device and remember certain information about your visit, such as your preferences and past actions.
                </p>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">2. How we use cookies</h4>
                <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  We use cookies to:
                  <ul className="list-disc list-inside">
                    <li>Enhance your user experience by remembering your preferences and settings.</li>
                    <li>Understand how our website is being used and improve its functionality.</li>
                    <li>Analyze traffic to our website to make informed decisions about improvements.</li>
                    <li>Provide you with personalized content and advertising.</li>
                  </ul>
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">3. Types of cookies we use</h4>
                <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <strong>Necessary Cookies:</strong> These cookies are essential for the website to function properly. They enable basic functionalities such as page navigation and access to secure areas of the website.
                  <br />
                  <strong>Preference Cookies:</strong> These cookies allow the website to remember choices you make, such as your language or region, to provide a more personalized experience.
                  <br />
                  <strong>Statistics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  <br />
                  <strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">4. Managing cookies</h4>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  You have the right to decide whether to accept or reject cookies. You can set your browser to refuse cookies or alert you when cookies are being sent. However, if you choose to disable cookies, some features of our website may not function properly.
                </p>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">5. Changes to this Cookies Policy</h4>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this Cookies Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">6. Contact us</h4>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  If you have any questions or concerns about our use of cookies, please contact us at:
                  
                  <br />
                  retractabilitybicycles@gmail.com
                </p>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={handleModalToggle}
                  type="button"
                  className="text-white bg-[#45505f] hover:bg-[#626a75] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
