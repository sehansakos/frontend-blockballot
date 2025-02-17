import React, { useState } from "react";
import SideBar from "../Components/SideBar1";

function CompanyProfilePage() {
    const [profileImage, setProfileImage] = useState("https://via.placeholder.com/100");

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100 font-montserrat">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <div className="flex flex-col items-center w-full p-10 ml-32">
                <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 border border-gray-300">
                    <h2 className="text-3xl font-bold text-center">Company Profile</h2>
                    <hr className="mt-4 mb-6 border-t-2 border-black w-1/6 mx-auto" />

                    {/* Profile Image */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="rounded-full w-24 h-24 border-4 border-gray-200"
                            />
                            <label htmlFor="imageUpload" className="absolute bottom-0 right-0 bg-gray-300 text-black p-1 rounded-full border border-gray-400 cursor-pointer">
                                ✏️
                            </label>
                            <input
                                id="imageUpload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Company name</label>
                                <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email address</label>
                                <input type="email" defaultValue="jon.doe@gmail.com" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Phone number</label>
                                <div className="flex">
                                    <select className="border border-gray-300 rounded-l-xl px-4 py-2">
                                        <option>+94</option>
                                    </select>
                                    <input type="text" defaultValue="70124615" className="flex-1 border border-gray-300 rounded-r-xl px-4 py-2" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Password</label>
                                <button className="w-full bg-gray-200 text-black px-4 py-2 rounded-xl hover:bg-gray-300">Reset password</button>
                                <div className="mt-2 text-yellow-600 bg-yellow-50 p-2 rounded-md border border-yellow-200 text-sm flex items-center">
                                    <span className="mr-2">⚠️</span>
                                    Reset link will be sent to your email address
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Country</label>
                                <select className="w-full border border-gray-300 rounded-xl px-4 py-2">
                                    <option>Sri Lanka 🇱🇰</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">City</label>
                                <input type="text" defaultValue="Panadura" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Zip code</label>
                                <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2" />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800">Confirm changes</button>
                            <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-400">Clear</button>
                        </div>
                    </form>

                    {/* Delete Account */}
                    <div className="mt-10 p-4 bg-gray-100 text-gray-700 border border-gray-300 rounded-xl">
                        <p className="mb-4 text-sm flex items-center">
                            <span className="mr-2">ℹ️</span>
                            After selecting the option, you will get 3 months to change your decision
                        </p>
                        <div className="flex justify-center">
                            <button className="bg-red-500 text-white px-6 py-2 rounded-xl flex items-center hover:bg-red-600">
                                <span className="mr-2">🗑️</span> Delete account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyProfilePage;