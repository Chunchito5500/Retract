"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosHome } from "react-icons/io";
import { GrBike } from "react-icons/gr";
import { HiTemplate } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <div className="navbar bg-[#083D77] min-w-full align-top top-0 items-center">
          <div className="navbar-start">
            <div className="dropdown">
              {/* <div className="drawer">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label htmlFor="my-drawer">
                    <div
                      tabIndex="0"
                      role="button"
                      className="btn btn-ghost btn-circle"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h7"
                        />
                      </svg>
                    </div>
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu p-4 w-80 min-h-full bg-[#9bc1bc] text-[#e6ebe0]-content">
                    <li>
                      <Link href="/" passHref legacyBehavior>
                        <a className={`${isActive("/") ? "active" : ""}`}>
                          Home
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/explore" passHref legacyBehavior>
                        <a
                          className={`${isActive("/explore") ? "active" : ""}`}
                        >
                          Explore Bikes
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery" passHref legacyBehavior>
                        <a className={`${isActive("/cart") ? "active" : ""}`}>
                          Account
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <li className="me-2">
              <Link href="/" passHref legacyBehavior>
                <a
                  className={`inline-flex items-center justify-center p-4 border-b-2 ${
                    isActive("/")
                      ? "border-[#B4CDED] text-[#B4CDED] dark:border-[#B4CDED] dark:text-[#B4CDED]"
                      : "border-transparent text-[#DCE5E6]"
                  } rounded-t-lg hover:text-white hover:border-gray-300 dark:hover:text-white group`}
                >
                  {/* SVG icon for Home */}
                  <svg
                    className={`w-4 h-4 me-2 ${
                      isActive("/") ? "text-[#B4CDED]" : "text-[#DCE5E6]"
                    } group-hover:text-white dark:group-hover:text-white`}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 10 15"
                  >
                    <IoIosHome />
                  </svg>
                  Home
                </a>
              </Link>
            </li>

            {/* Explore Bikes link */}
            <li className="me-2">
              <Link href="/explore" passHref legacyBehavior>
                <a
                  className={`inline-flex items-center justify-center p-4 border-b-2 ${
                    isActive("/explore")
                      ? "border-[#B4CDED] text-[#B4CDED] dark:border-[#B4CDED] dark:text-[#B4CDED]"
                      : "border-transparent text-[#DCE5E6]"
                  } rounded-t-lg hover:text-white hover:border-gray-300 dark:hover:text-white group`}
                >
                  {/* SVG icon for Explore Bikes */}
                  <svg
                    className={`w-4 h-4 me-2 ${
                      isActive("/explore") ? "text-[#B4CDED]" : "text-[#DCE5E6]"
                    } group-hover:text-white dark:group-hover:text-white`}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="2 0 10 15"
                  >
                    {/* Assuming GrBike is a valid component/rendered SVG here */}
                    <GrBike />
                  </svg>
                  Explore Bikes
                </a>
              </Link>
            </li>

            {/* Account link */}
            <li className="me-2">
              <Link href="/gallery" passHref legacyBehavior>
                <a
                  className={`inline-flex items-center justify-center p-4 border-b-2 ${
                    isActive("/gallery")
                      ? "border-[#B4CDED] text-[#B4CDED] dark:border-[#B4CDED] dark:text-[#B4CDED]"
                      : "border-transparent text-[#DCE5E6]"
                  } rounded-t-lg hover:text-white hover:border-gray-300 dark:hover:text-white group`}
                >
                  {/* SVG icon for Explore Bikes */}
                  <svg
                    className={`w-4 h-4 me-2 ${
                      isActive("/gallery") ? "text-[#B4CDED]" : "text-[#DCE5E6]"
                    } group-hover:text-white dark:group-hover:text-white`}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="2 0 10 15"
                  >
                    <HiTemplate />
                  </svg>
                  Gallery
                </a>
              </Link>
            </li>
          </div>
          <div className="navbar-center">
            <div className="dropdown dropdown-hover">
              <Link href="/" legacyBehavior>
                <a
                  tabIndex="0"
                  role="button"
                  className="btn-success m-1 text-[#DCE5E6] hover:text-white text-xl font-sans"
                >
                  Retractability
                </a>
              </Link>
            </div>
          </div>

          <div className="navbar-end">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost btn-circle"
            ></div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full overflow-hidden"></div>
              </div>
              <ul
                tabIndex="0"
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
