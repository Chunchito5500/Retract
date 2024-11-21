import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosHome } from "react-icons/io";
import { HiTemplate } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import "../styles.css"; // Ensure you import the CSS file
import { IoIosCall } from "react-icons/io";
import { BsChatQuote } from "react-icons/bs";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef();

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [drawerRef]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div className="navbar-container">
      <div className="navbar  flex justify-between items-center p-4 hover:bg-[#1d263b]">
        {!isMobile ? (
          <div className="flex items-center font-raleway font-medium">
            <NavLink
              href="/"
              label="Home"
              Icon={IoIosHome}
              isActive={isActive("/")}
            />
            <NavLink
              href="/gallery"
              label="Gallery"
              Icon={HiTemplate}
              isActive={isActive("/gallery")}
            />
            <NavLink
              href="/aboutus"
              label="About Us"
              Icon={BsChatQuote}
              isActive={isActive("/aboutus")}
            />
            {/* <NavLink
              href="/contact"
              label="Contact"
              Icon={IoIosCall}
              isActive={isActive("/contact")}
            /> */}
          </div>
        ) : (
          <button
            onClick={toggleDrawer}
            className="btn drawer-button bg-customGray hover:bg-customGrayHover p-2 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}
        <Link legacyBehavior href="/" passHref>
          <a className="text-white text-xl font-sans absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/retractenhanced.svg"
              alt="Retract"
              width={80}
              height={80}
            />
          </a>
        </Link>
        <div className="ml-auto flex items-center">
          <button className="text-white text-xl p-2">
            <FiShoppingCart size={24} />
          </button>
        </div>
      </div>

      {isMobile && isDrawerOpen && (
        <div className="drawer-content glass" ref={drawerRef}>
          <ul className="menu p-4">
            <li>
              <Link legacyBehavior href="/" passHref>
                <a className="text-lg font-raleway">Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/gallery" passHref>
                <a className="text-lg font-raleway">Gallery</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/aboutus" passHref>
                <a className="text-lg font-raleway">About Us</a>
              </Link>
            </li>
            {/* <li>
              <Link legacyBehavior href="/gallery" passHref>
                <a className="text-lg font-raleway">Contact</a>
              </Link>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ href, label, Icon, isActive }) => (
  <Link legacyBehavior href={href} passHref>
    <a
      className={`flex items-center p-2 text-lg ${
        isActive ? "text-[#7389a7]" : "text-[#DCE5E6]"
      } hover:text-white `}
    >
      {Icon && <Icon className="mr-2 h-6 w-6" />} {label}
    </a>
  </Link>
);

export default Navbar;
