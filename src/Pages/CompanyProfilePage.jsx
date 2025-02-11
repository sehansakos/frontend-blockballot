import React from "react";

function CompanyProfilePage () {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-8 border border-gray-300">
                <h2 className="text-2xl font-bold text-center">Company Profile</h2>
                <hr className="mt-5 mb-9 border-t-2 border-black w-1/6 mx-auto" />

                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            className="rounded-full w-24 h-24 border-4 border-gray-200"
                        />
                        <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full">
                            ✏️
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Company name
                            </label>
                            <input
                                type="text"
                                defaultValue="Suwishkage companyia"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                defaultValue="jon.doe@gmail.com"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Phone number
                            </label>
                            <div className="flex">
                                <select className="border border-gray-300 rounded-l-xl px-4 py-2">
                                    <option>+94</option>
                                </select>
                                <input
                                    type="text"
                                    defaultValue="70124615"
                                    className="flex-1 border border-gray-300 rounded-r-xl px-4 py-2"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
                                Reset password
                            </button>
                            <div className="mt-2 text-yellow-600 bg-yellow-50 p-2 rounded-md border border-yellow-200 text-sm flex items-center">
                                <span className="mr-2">⚠️</span>
                                Reset link will be sent to your email address
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Country
                            </label>
                            <select className="w-full border border-gray-300 rounded-xl px-4 py-2">
                                <option>Sri Lanka</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">City</label>
                            <input
                                type="text"
                                defaultValue="Panadura"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Zip code
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800">
                            Confirm changes
                        </button>
                        <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-400">
                            Clear
                        </button>
                    </div>
                </form>

                {/* Delete Account */}
                <div className="mt-10 p-4 bg-blue-50 text-blue-600 border border-blue-300 rounded-xl">
                    <p className="mb-4 text-sm flex items-center">
                        <span className="mr-2">ℹ️</span>
                        After selecting the option, you will get 3 months to change your
                        decision
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-red-500 text-white px-6 py-2 rounded-xl flex items-center hover:bg-red-600">
                            <span className="mr-2">🗑️</span> Delete account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyProfilePage;
