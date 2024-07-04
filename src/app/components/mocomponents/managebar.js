"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { HiMiniUsers } from "react-icons/hi2";
import { MdBusinessCenter } from "react-icons/md";
import { IoCalendarClear } from "react-icons/io5";
import { IoDocuments } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const ManageNavbar = ({ children }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const toggleAccordion = (event) => {
            const button = event.currentTarget;
            const content = button.nextElementSibling;

            if (!content) return;

            if (button.getAttribute('aria-expanded') === 'true') {
                button.setAttribute('aria-expanded', 'false');
                content.classList.add('hidden');
                content.style.height = '0';
                button.querySelector('.icon-up').classList.add('hidden');
                button.querySelector('.icon-down').classList.remove('hidden');
            } else {
                button.setAttribute('aria-expanded', 'true');
                content.classList.remove('hidden');
                content.style.height = `${content.scrollHeight}px`;
                button.querySelector('.icon-up').classList.remove('hidden');
                button.querySelector('.icon-down').classList.add('hidden');
            }
        };

        const accordionButtons = document.querySelectorAll('.hs-accordion-toggle');
        accordionButtons.forEach(button => {
            button.addEventListener('click', toggleAccordion);
        });

        return () => {
            accordionButtons.forEach(button => {
                button.removeEventListener('click', toggleAccordion);
            });
        };
    }, []);

    return (
        <div>
            <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-neutral-800 dark:border-neutral-700">
                <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6" aria-label="Global">
                    <div className="me-5 lg:me-0 lg:hidden">
                        <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../templates/admin/index.html" aria-label="Preline">
                            <svg className="w-28 h-auto" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* SVG content here */}
                            </svg>
                        </a>
                    </div>

                    <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
                        <div className="sm:hidden">
                            <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700">
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </button>
                        </div>

                        <div className="hidden sm:block">
                            <label htmlFor="icon" className="sr-only">Search</label>
                            <div className="relative min-w-72 md:min-w-80">
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                    <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                </div>
                                <input type="text" id="icon" name="icon" className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Search" />
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-end gap-2 relative">
                            <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700">
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                            </button>
                            <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" data-hs-offcanvas="#hs-offcanvas-right">
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                            </button>

                            <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                <button
                                    id="hs-dropdown-with-header"
                                    type="button"
                                    className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                                    onClick={toggleDropdown}
                                >
                                    <Image className="inline-block size-[38px] rounded-full ring-2 ring-white dark:ring-neutral-800" src="profile.jpg" alt="Image Description" />
                                </button>

                                <div className={`hs-dropdown-menu transition-[opacity,margin] duration ${isDropdownOpen ? 'hs-dropdown-open:opacity-100' : 'opacity-0'} ${isDropdownOpen ? 'block' : 'hidden'} absolute top-full right-0 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-900 dark:border dark:border-neutral-700`} aria-labelledby="hs-dropdown-with-header">
                                    <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-neutral-800">
                                        <p className="text-sm text-gray-500 dark:text-neutral-400">Signed in as</p>
                                        <p className="text-sm font-medium text-gray-800 dark:text-neutral-300">james@site.com</p>
                                    </div>
                                    <div className="mt-2 py-2 first:pt-0 last:pb-0">
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                            Newsletter
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                                            Purchases
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m8 17 4 4 4-4" /></svg>
                                            Downloads
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                            Team Account
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
                <div className="flex justify-between items-center py-2">
                    <ol className="ms-3 flex items-center whitespace-nowrap">
                        <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                            Application Layout
                            <svg className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </li>
                        <li className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400" aria-current="page">
                            Dashboard
                        </li>
                    </ol>

                    <button type="button" className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Sidebar">
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" /></svg>
                        <span className="sr-only">Sidebar</span>
                    </button>
                </div>
            </div>

            <div id="application-sidebar" className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700">
                <div className="px-8 pt-4">
                    <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" aria-label="Preline">
                        <svg className="w-auto h-auto" width="16" height="75" viewBox="0 0 116 32" fill="none">
                            {/* SVG content here */}
                        </svg>
                    </a>
                    <Link legacyBehavior href="/" passHref>
                        <a className="text-white text-xl font-sans absolute left-1/2 transform -translate-x-1/2">
                            <Image src="/retract.svg" alt="Retract" width={100} height={80} />
                        </a>
                    </Link>
                </div>

                <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul className="space-y-1.5">
                        <li>
                            <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white" href="#">
                                <svg className="flex-shrink-1 w-8 h-8" viewBox="-10 -5 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <GoHomeFill />
                                </svg>
                                Dashboard
                            </a>
                        </li>

                        <li className="hs-accordion" id="users-accordion">
                            <a className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white">
                                <svg className="flex-shrink-1 w-8 h-8" viewBox="-10 -5 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <HiMiniUsers />
                                </svg>
                                Users

                                <svg className="icon-down ms-auto block size-8" viewBox="-10 -5 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><MdKeyboardArrowDown /></svg>

                                <svg className="icon-up hidden ms-auto block size-8" viewBox="-10 -5 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><MdKeyboardArrowUp /></svg>
                            </a>

                            <div id="users-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                                <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
                                    <li className="hs-accordion" id="users-accordion-sub-1">
                                        <a className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white">
                                            Sub Menu 1
                                        </a>
                                    </li>

                                    <li className="hs-accordion" id="users-accordion-sub-2">
                                        <a className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white">
                                            Sub Menu 2
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="hs-accordion" id="projects-accordion">
                            <a className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white">
                                <svg className="flex-shrink-1 w-8 h-8" viewBox="-10 -5 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                    <MdBusinessCenter />
                                </svg>
                                Projects

                                <svg className="icon-down ms-auto block size-8" viewBox="-10 -5 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><MdKeyboardArrowDown /></svg>

                                <svg className="icon-up hidden ms-auto block size-8" viewBox="-10 -5 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><MdKeyboardArrowUp /></svg>
                            </a>

                            <div id="projects-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                                <ul className="pt-2 ps-2">
                                    <li>
                                        <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300" href="#">
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300" href="#">
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300" href="#">
                                            Link 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li><a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300" href="#">
                            <svg className="flex-shrink-1 w-8 h-8" viewBox="-10 -5 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <IoCalendarClear />
                            </svg>
                            Calendar
                        </a></li>
                        <li><a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300" href="#">
                            <svg className="flex-shrink-1 w-8 h-8" viewBox="-10 -5 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <IoDocuments />
                            </svg>
                            Documentation
                        </a></li>
                    </ul>
                </nav>
            </div>

            <div className="w-full lg:ps-64">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ManageNavbar;
