import React, { useState } from "react"; // ✅ Import React
import Link from "next/link";
import { IoIosHome } from "react-icons/io";
import { HiTemplate } from "react-icons/hi";
import { BsChatQuote } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { MdOutlinePedalBike } from "react-icons/md";

/**
 * MobileNavOffCanvas
 *
 * This component is the “off-canvas” sidebar plus overlay.
 * It expects:
 *  - open: boolean (whether the sidebar is visible)
 *  - onClose: function to call when we want to close
 */
const MobileNav = ({ open, onClose }) => {
  const [closing, setClosing] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false); // ✅ Add this line
  const [sub1Open, setSub1Open] = useState(false);
  const [sub2Open, setSub2Open] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 300); // Matches animation duration
  };
  // Outer overlay classes: show/hide via Tailwind based on `open`
  const overlayClass = open
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";

  // Sidebar transition classes
  const sidebarClass = open ? "translate-x-0" : "-translate-x-full";

  return (
    <>
      {/* Overlay behind the sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-60 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleClose}
      />
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 z-[60] bg-white border-r border-gray-200 
                    transform transition-transform duration-300 ${
                      open && !closing ? "mobile-nav" : "mobile-nav-close"
                    }`}
        role="dialog"
        aria-modal="true"
      >
        <header className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Retractability</h2>
          <button
            type="button"
            className="text-gray-700 rounded focus:outline-none"
            onClick={handleClose}
          >
            <FiX size={24} />
            <span className="sr-only">Close</span>
          </button>
        </header>

        {/* Navigation content */}
        <nav className="overflow-y-auto h-full px-4 pb-8">
          <Link
            href="/"
            className="block py-2 text-gray-700 hover:bg-gray-100"
            onClick={handleClose}
          >
            <IoIosHome className="inline-block" /> Home
          </Link>
        </nav>
      </div>

      {/* Sidebar itself */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-64 z-[60] bg-[#1d263b] border-r border-[#29344f] 
                    transform transition-transform duration-300 ${sidebarClass}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header section with close button */}
        <header className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Retractability</h2>
          <button
            type="button"
            className="text-gray-100 rounded focus:outline-none"
            onClick={onClose}
          >
            <FiX size={24} />
            <span className="sr-only">Close</span>
          </button>
        </header>

        {/* Scrollable body content */}
        <nav className="overflow-y-auto h-full px-4 pb-8">
          {/* Example top-level link */}
          <Link
            href="/"
            className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-100 
                       rounded-lg hover:bg-[#29344f]"
            onClick={onClose}
          >
            <IoIosHome className="inline-block" />
            Home
          </Link>

          {/* Example ACCORDION: “Bikes” section replicating your “Pioneer/Pioneer Lite” */}
          <div className="mt-2">
            <button
              type="button"
              className="w-full flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-100 
                         rounded-lg hover:bg-[#29344f] focus:outline-none"
              onClick={() => setUsersOpen(!usersOpen)}
            >
              <MdOutlinePedalBike />
              Bikes
              {/* rotate arrow */}
              <svg
                className={`ml-auto w-4 h-4 transition-transform ${
                  usersOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* If open, show the sub-items */}
            {usersOpen && (
              <div className="mt-1 ml-6">
                {/* “Pioneer” link */}
                <Link
                  href="/quark"
                  className="block py-1 px-2 text-sm text-gray-100 rounded hover:bg-[#29344f]"
                  onClick={onClose}
                >
                  Pioneer
                </Link>
                {/* “Pioneer Lite” link */}
                {/* <Link
                  href="/pioneerlite"
                  className="block py-1 px-2 text-sm text-gray-100 rounded hover:bg-[#29344f]"
                  onClick={onClose}
                >
                  Pioneer Lite
                </Link> */}
              </div>
            )}
          </div>

          {/* Another ACCORDION example: “Gallery” */}
          <div className="mt-2">
            <button
              type="button"
              className="w-full flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-100 
                         rounded-lg hover:bg-[#29344f] focus:outline-none"
              onClick={() => setSub1Open(!sub1Open)}
            >
              <HiTemplate />
              Gallery
              <svg
                className={`ml-auto w-4 h-4 transition-transform ${
                  sub1Open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {sub1Open && (
              <div className="mt-1 ml-6">
                <Link
                  href="/gallery"
                  className="block py-1 px-2 text-sm text-gray-100 rounded hover:bg-[#29344f]"
                  onClick={onClose}
                >
                  Main Gallery
                </Link>
                {/* <Link
                  href="/gallery#features"
                  className="block py-1 px-2 text-sm text-gray-100 rounded hover:bg-[#29344f]"
                  onClick={onClose}
                >
                  Features
                </Link> */}
                <Link
                  href="/privacypolicy"
                  className="block py-1 px-2 text-sm text-gray-100 rounded hover:bg-[#29344f]"
                  onClick={onClose}
                >
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>

          {/* Another ACCORDION example: “About Us” */}
          <div className="mt-2">
            <button
              type="button"
              className="w-full flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-100 
                         rounded-lg hover:bg-[#29344f] focus:outline-none"
              onClick={() => setSub2Open(!sub2Open)}
            >
              <BsChatQuote />
              About Us
              <svg
                className={`ml-auto w-4 h-4 transition-transform ${
                  sub2Open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {sub2Open && (
              <div className="mt-1 ml-6">
                <Link
                  href="/aboutus"
                  className="block py-1 px-2 text-sm text-gray-100 rounded hover:bg-[#29344f]"
                  onClick={onClose}
                >
                  About
                </Link>
                {/* <Link
                  href="/contact"
                  className="block py-1 px-2 text-sm text-gray-100 rounded hover:bg-[#29344f]"
                  onClick={onClose}
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="block py-1 px-2 text-sm text-gray-100 rounded hover:bg-[#29344f]"
                  onClick={onClose}
                >
                  Blog
                </Link>
                <Link
                  href="/newsletter"
                  className="block py-1 px-2 text-sm text-gray-100 rounded hover:bg-[#29344f]"
                  onClick={onClose}
                >
                  Newsletter
                </Link> */}
              </div>
            )}
          </div>

          {/* You can add images/cards inside the sidebar, just like your Desktop subnavs. */}
          <div className="mt-6">
            {/* <div className="col-span-2">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                    alt="Album"
                    className="object-cover h-48 w-full lg:h-auto lg:w-1/3"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Another image/card */}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
