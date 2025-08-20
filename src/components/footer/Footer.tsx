import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../../fonts/Roboto-Regular.ttf",
});

const Footer = () => {
  return (
    <footer className="mt-20 py-16">
      <div className="mx-auto max-w-7xl px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/white_retractenhanced.svg"
                alt="Retract"
                width={80}
                height={80}
                className="mr-4"
              />
              <span
                className={`text-3xl sm:text-4xl lg:text-5xl font-medium text-white whitespace-nowrap ${BebasNeue.className}`}
              >
                Retractability Bicycles
              </span>
            </Link>
            
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {/* About Section */}
            <div>
              <h3
                className={`text-2xl font-medium text-white mb-6 uppercase tracking-wide ${BebasNeue.className}`}
              >
                About
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/aboutus"
                    className={`text-base text-gray-300 hover:text-white transition-colors duration-200 ${Roboto.className}`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className={`text-base text-gray-300 hover:text-white transition-colors duration-200 ${Roboto.className}`}
                  >
                    News
                  </Link>
                </li>
              </ul>
            </div>

            {/* Projects Section */}
            <div>
              <h3
                className={`text-2xl font-medium text-white mb-6 uppercase tracking-wide ${BebasNeue.className}`}
              >
                Projects
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/gallery"
                    className={`text-base text-gray-300 hover:text-white transition-colors duration-200 ${Roboto.className}`}
                  >
                    Gallery
                  </Link>
                </li>
                
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3
                className={`text-2xl font-medium text-white mb-6 uppercase tracking-wide ${BebasNeue.className}`}
              >
                Legal
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/privacypolicy"
                    className={`text-base text-gray-300 hover:text-white transition-colors duration-200 ${Roboto.className}`}
                  >
                    Privacy Policy
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className={`text-base text-gray-400 ${Roboto.className}`}>
              © 2024{" "}
              <a
                href="https://retractability.com"
                className="text-white hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                Retractability Bicycles LLC
              </a>
              . All Rights Reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
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
                aria-label="YouTube"
              >
                <FaLinkedin  className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
