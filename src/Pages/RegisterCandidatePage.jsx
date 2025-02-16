import React from "react";
import Sidebar from "../Components/Sidebar";

const RegisterCandidatePage = () => {
    return (
        <div className="min-h-screen flex bg-black text-white ">
            {/* Sidebar */}
            <Sidebar />
            

            {/* Main Content */}
            <div className="flex-1 flex flex-col ">
                {/* Header */}
                <div className="flex items-center justify-center px-6 py-4 bg-black relative">
                    <div className="font-bold text-white text-lg">
                        Candidate Configuration
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col justify-center items-center relative flex-grow bg-bgColor bg-cover bg-center ml-32">
                    {/* Form Container */}
                    <h2 className="text-xl text-black font-bold mt-4 text-left w-11/12 max-w-4xl">Register candidate</h2>
                    <div className="bg-registerForm text-black rounded-lg shadow-lg p-8 w-11/12 max-w-4xl mt-6">
                        {/* Form Fields */}
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-1">Name of the candidate</label>
                                <input type="text" className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent" placeholder="Enter candidate's name" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Current Designation</label>
                                <input type="text" className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent" placeholder="Enter current designation" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Position Contested in the Election</label>
                                <input type="text" className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent" placeholder="Enter position contested" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Age</label>
                                <input type="number" className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent" placeholder="Enter age" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">National Identity Card Number</label>
                                <input type="text" className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent" placeholder="Enter NIC number" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Employee ID</label>
                                <input type="text" className="w-full border-b border-gray-400 focus:outline-none focus:border-black bg-transparent" placeholder="Enter employee ID" />
                            </div>
                            <div className="flex justify-start space-x-8 mt-4">
                                {/* Add Photo Section */}
                                <div className="flex flex-col">
                                    <label className="block text-sm font-semibold mb-2">Add Photo</label>
                                    <div className="relative">
                                        <label htmlFor="photo-upload" className="bg-gray-200 text-gray-600 font-medium py-2 px-4 rounded-lg cursor-pointer shadow-sm hover:bg-gray-300 transition">+ Choose File</label>
                                        <input id="photo-upload" type="file" className="hidden" />
                                    </div>
                                </div>

                                {/* Gender Selection */}
                                <div className="flex flex-col">
                                    <label className="block text-sm font-semibold">Gender</label>
                                    <select className="bg-gray-200 text-gray-600 font-medium py-2 px-8 rounded-lg cursor-pointer shadow-sm hover:bg-gray-300 transition">
                                        <option value="" disabled selected>Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Confirm Button */}
                    <div className="flex justify-end w-11/12 max-w-4xl">
                        <button className="flex items-center bg-black text-white font-semibold rounded-full px-6 py-2 hover:bg-gray-300 hover:text-black transition mt-4 mb-4">
                            Confirm
                            <div className="ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                            </div>
                        </button>
                    </div>
                </div>
                {/* Footer */}
                <div className="bg-black text-white text-center py-2">blockballot.com</div>
            </div>
        </div>
    );
};

export default RegisterCandidatePage;
