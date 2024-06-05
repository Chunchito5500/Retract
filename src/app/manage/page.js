// File path: src/app/manage/page.js

"use client";

import React, { useState } from 'react';
import ManageNavbar from "@/app/components/mocomponents/managebar";
import { MdAdd, MdOutlineLowPriority } from "react-icons/md";
import { FcLowPriority, FcMediumPriority, FcHighPriority } from "react-icons/fc";

const Manage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectDetails, setProjectDetails] = useState({
        name: '',
        startDate: '',
        endDate: '',
        description: '',
        priority: ''
    });

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectDetails(prev => ({ ...prev, [name]: value }));
    };

    const handlePriorityChange = (e) => {
        const { value } = e.target;
        setProjectDetails(prev => ({ ...prev, priority: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://mv3w5nfvg9.execute-api.us-east-1.amazonaws.com/CreateProj1', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(projectDetails)
            });
            const data = await response.json();
            console.log(data);
            toggleModal(); // Close modal after submission
            // Optionally, refresh your project list here
        } catch (error) {
            console.error("Error creating project:", error);
        }
    };

    return (
        <ManageNavbar>
            <div className="relative overflow-hidden">
                <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
                    <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
                </div>

                <div className="relative z-10">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                        <div className="max-w-2xl text-center mx-auto">
                            <div className="mt-5 max-w-2xl">
                                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                                    Welcome to your Dashboard
                                </h1>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={toggleModal}
                        >
                            <MdAdd />
                            Create Project
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div id="hs-vertically-centered-modal" className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
                    <div className="relative p-8 bg-black w-full max-w-md m-auto flex-col flex rounded-lg">
                        <h3 className="font-bold text-gray-800 dark:text-white">Create Project</h3>
                        <button
                            type="button"
                            className="absolute top-4 right-4 flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                            onClick={toggleModal}
                        >
                            <span className="sr-only">Close</span>
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4 sm:mb-8">
                                    <label htmlFor="project-name" className="block mb-2 text-sm font-medium dark:text-white">Project Name</label>
                                    <input
                                        type="text"
                                        id="project-name"
                                        name="name"
                                        value={projectDetails.name}
                                        onChange={handleInputChange}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="Project Name"
                                    />
                                </div>

                                <div className="mb-4 sm:mb-8">
                                    <label htmlFor="start-date" className="block mb-2 text-sm font-medium dark:text-white">Start Date</label>
                                    <input
                                        type="date"
                                        id="start-date"
                                        name="startDate"
                                        value={projectDetails.startDate}
                                        onChange={handleInputChange}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>

                                <div className="mb-4 sm:mb-8">
                                    <label htmlFor="end-date" className="block mb-2 text-sm font-medium dark:text-white">End Date</label>
                                    <input
                                        type="date"
                                        id="end-date"
                                        name="endDate"
                                        value={projectDetails.endDate}
                                        onChange={handleInputChange}
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    />
                                </div>

                                <div className="mb-4 sm:mb-8">
                                    <label htmlFor="project-description" className="block mb-2 text-sm font-medium dark:text-white">Project Description</label>
                                    <textarea
                                        id="project-description"
                                        name="description"
                                        value={projectDetails.description}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="Project Details..."
                                    ></textarea>
                                </div>

                                <div className="mb-4 sm:mb-8">
                                    <label htmlFor="priority" className="block mb-2 text-sm font-medium dark:text-white">Priority</label>
                                    <div className="relative">
                                        <select
                                            id="priority"
                                            name="priority"
                                            value={projectDetails.priority}
                                            onChange={handlePriorityChange}
                                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 appearance-none"
                                        >
                                            <option value="">Select priority...</option>
                                            <option value="Low Priority">
                                                <FcLowPriority className="inline-block mr-2" /> Low Priority
                                            </option>
                                            <option value="Medium Priority">
                                                <FcMediumPriority className="inline-block mr-2" /> Medium Priority
                                            </option>
                                            <option value="High Priority">
                                                <FcHighPriority className="inline-block mr-2" /> High Priority
                                            </option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <MdOutlineLowPriority className="w-5 h-5 text-gray-400 dark:text-neutral-500" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 grid">
                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </ManageNavbar>
    );
};

export default Manage;
