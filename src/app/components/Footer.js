// path: Footer.js

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-4 sm:p-6">
      <div style={{ height: '1px' }}></div>
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <Image src="/retractenhanced.svg" alt="Retract" width={80} height={80} className="mr-2 h-18" />
              <span className="self-center text-2xl font-raleway font-medium whitespace-nowrap text-[#AAAAAA]">Retractability</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* <div>
              <h2 className="mb-6 text-sm font-raleway font-medium text-gray-300 uppercase dark:text-white">About</h2>
              <ul className="text-gray-400 dark:text-gray-400">
                <li className="mb-4 font-raleway">
                  <a href="/aboutus" className="hover:underline">About Us</a>
                </li>
                <li className="font-raleway">
                  <a href="https://tailwindcss.com/" className="hover:underline"></a>
                </li>
              </ul>
            </div> */}
            {/* <div>
              <h2 className="mb-6 text-sm font-raleway text-gray-300 uppercase dark:text-white">Projects</h2>
              <ul className="text-gray-400 dark:text-gray-400">
                <li className="mb-4 font-raleway">
                  <a href="/timeline" className="hover:underline">Timeline</a>
                </li>
                <li className="font-raleway">
                  <a href="/green" className="hover:underline">Green Initiative</a>
                </li>
              </ul>
            </div> */}
            <div>
              <h2 className="mb-6 text-sm font-raleway text-gray-300 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-400 dark:text-gray-400">
                <li className="mb-4 font-raleway">
                  <a href="/privacypolicy" className="hover:underline">Privacy Policy</a>
                </li>
                {/* <li className="font-raleway">
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 <a href="https://flowbite.com" className="hover:underline font-raleway font-medium">Retractability™</a>. All Rights Reserved.
          </span> */}
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://instagram.com/retractability_bikes" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@Retractability" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div style={{ height: '90px' }}></div>
    </footer>
  );
};

export default Footer;
