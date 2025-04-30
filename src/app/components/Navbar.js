import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Get current route
import { MdOutlinePedalBike } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { BsChatQuote } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

import HomeNav from "./navcomponents/HomeNav";
import GalleryNav from "./navcomponents/GalleryNav";
import AboutNav from "./navcomponents/AboutNav";
import MobileNav from "./navcomponents/MobileNav"; // import your mobile component
import localFont from "next/font/local";

const BebasNeue = localFont({
  src: "../fonts/BebasNeue-Regular.ttf",
});
const Roboto = localFont({
  src: "../fonts/Roboto-Regular.ttf",
});

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Track if the mobile nav (hamburger) is open
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const pathname = usePathname(); // current path
  const isGreenPage = pathname.startsWith("/green");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const isMenuActive = (menu) => activeMenu === menu;
  const isAnyMenuActive = activeMenu !== null;

  // Simple arrow icon
  const ArrowIcon = ({ isOpen }) => (
    <svg
      className={`ml-2 h-6 w-6 transform transition-transform ${
        isOpen ? "rotate-180" : "rotate-0"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );

  return (
    <div className="navbar-container">
      {/* --- The Navbar "bar" itself --- */}
      <div
        className={`navbar flex items-center justify-between p-4 text-white transition-all ${
          isGreenPage // green page? give it the green class first
            ? "navbar-green"
            : scrolled || isAnyMenuActive
            ? "navbar-active" // otherwise fall back to blue when scrolled
            : ""
        }`}
      >
        {/* ============ Left Section ============ */}
        {/* If NOT mobile, show original three nav buttons. 
            If mobile, show the hamburger button. */}
        {!isMobile ? (
          <div className="flex items-center space-x-4">
            <button
              className={`flex items-center p-2 text-2xl font-raleway hover:text-gray-400 ${BebasNeue.className}`}
              onClick={() => toggleMenu("home")}
            >
              <MdOutlinePedalBike className="mr-2 h-6 w-6" />
              Bikes
              <ArrowIcon isOpen={isMenuActive("home")} />
            </button>

            <button
              className={`flex items-center p-2 text-2xl font-raleway hover:text-gray-400 ${BebasNeue.className}`}
              onClick={() => toggleMenu("gallery")}
            >
              <HiTemplate className="mr-2 h-6 w-6" />
              Gallery
              <ArrowIcon isOpen={isMenuActive("gallery")} />
            </button>

            <button
              className={`flex items-center p-2 text-2xl font-raleway hover:text-gray-400 ${BebasNeue.className}`}
              onClick={() => toggleMenu("aboutus")}
            >
              <BsChatQuote className="mr-2 h-6 w-6" />
              About Us
              <ArrowIcon isOpen={isMenuActive("aboutus")} />
            </button>
          </div>
        ) : (
          /* Hamburger Button for mobile screens */
          <button
            className="flex flex-col space-y-[4px] p-2"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
            <span className="block w-6 h-[2px] bg-white"></span>
          </button>
        )}

        {/* ============ Center Section: Logo ============ */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/white_retractenhanced.svg"
            alt="Retract Logo"
            width={80}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* ============ Right Section: Shopping Cart ============ */}
        <div className="ml-auto">
          <button className="flex items-center text-xl p-2 hover:text-gray-400">
            <FiShoppingCart size={24} />
          </button>
        </div>
      </div>

      {/* --- If on desktop, show subnav dropdowns under the main nav bar. 
             If on mobile, the subnav is handled inside <MobileNav/> below. --- */}
      {!isMobile && (
        <div className="relative">
          {activeMenu === "home" && (
            <div className="animate-slideDown">
              <HomeNav />
            </div>
          )}
          {activeMenu === "gallery" && (
            <div className="animate-slideDown">
              <GalleryNav />
            </div>
          )}
          {activeMenu === "aboutus" && (
            <div className="animate-slideDown">
              <AboutNav />
            </div>
          )}
        </div>
      )}

      {/* --- If mobile AND hamburger is open, show the MobileNav. --- */}
      {isMobile && mobileNavOpen && (
        <MobileNav onClose={() => setMobileNavOpen(false)} />
      )}
      {mobileNavOpen && (
        <MobileNav
          open={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
