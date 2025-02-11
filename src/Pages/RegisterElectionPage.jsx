import React from "react";
//import backgroundImage from "../images/bg-image.PNG"; 
import { Link } from "react-router-dom";

function RegisterElectionPage() {
    return (
        <div className="min-h-screen flex bg-black text-white">
            {/* Sidebar */}
            <div className="w-16 bg-black flex flex-col items-center justify-between h-screen">
                {/* Menu Icon */}
                <div className="mt-6">
                    <button className="focus:outline-none">
                        <span className="block w-6 h-1 bg-white mb-1"></span>
                        <span className="block w-6 h-1 bg-white mb-1"></span>
                        <span className="block w-6 h-1 bg-white"></span>
                    </button>
                </div>

                {/* Profile Image */}
                <div className="flex-1 justify-center mt-4">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                </div>

                {/* Logout Icon */}
                <div className="mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                </div>
            </div>


            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-center px-6 py-4 bg-black relative">
                    <div className="font-bold text-white text-lg">
                        Election Configuration
                    </div>
                </div>

                {/* Main Content Area */}
                <div
                    className="flex flex-col justify-center items-center relative flex-grow bg-bgColor bg-cover bg-center"
                    style={{
                       
                       // backgroundImage: `url(${backgroundImage})`,
                        backgroundPosition: "bottom left",
                    }}
                >
                    {/* Form Container */}
                    <h2 className="text-xl text-black font-bold mt-4 text-left w-11/12 max-w-4xl">Register election</h2>
                    <div className="bg-registerElectForm text-black rounded-lg shadow-lg p-8 w-11/12 max-w-4xl mt-6">


                        {/* Form Fields */}
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Name of the vote
                                </label>
                                <input
                                    type="text"
                                    className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                                    placeholder="Enter vote name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Date of the election
                                </label>
                                <input
                                    type="date"
                                    className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Description
                                </label>
                                <textarea
                                    className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                                    placeholder="Enter description"
                                    rows="2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Amount of candidates
                                </label>
                                <input
                                    type="number"
                                    className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                                    placeholder="Enter number of candidates"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Amount of voters
                                </label>
                                <input
                                    type="number"
                                    className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent"
                                    placeholder="Enter number of voters"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold mb-4">Add Photo</label>
                                <div className="relative">
                                    <label
                                        htmlFor="photo-upload"
                                        className="bg-gray-200 text-gray-600 font-medium py-2 px-4 rounded-lg cursor-pointer shadow-sm hover:bg-gray-300 transition"
                                    >
                                        + Choose File
                                    </label>
                                    <input
                                        id="photo-upload"
                                        type="file"
                                        className="hidden"
                                    />
                                </div>
                            </div>

                        </form>
                    </div>
                    {/* Confirm Button */}
                    <div className="flex justify-end w-11/12 max-w-4xl">
                        <Link to={'/VotingStatistics'} className="flex items-right bg-black text-white font-semibold rounded-full px-6 py-2 hover:bg-gray-300 hover:text-black transition mt-4 mb-4">
                            Confirm
                            <div className="ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-black text-white text-center py-2">
                    blockballot.com
                </div>
            </div>
        </div>
    );
};

export default RegisterElectionPage;
