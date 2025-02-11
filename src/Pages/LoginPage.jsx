import React, { useState } from 'react';
// import backgroundImage from '../../public/backgroundImage.png';


function LoginPage(){
    const [nic, setNic] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('NIC:', nic);
        console.log('Password:', password);
    };

    return (
        <div
            // className="flex items-center justify-center min-h-screen bg-cover bg-center"
            // style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex flex-row w-11/12 max-w-4xl rounded-lg shadow-lg bg-opacity-20 bg-white overflow-hidden">
                {/* Left Box */}
                <div className="flex flex-1 items-center justify-center bg-customBlue p-8">
                    <h1 className="text-4xl font-bold text-white">BlockBallot</h1>
                </div>

                {/* Right Form Container */}
                <div className="w-1/2 p-8 bg-white bg-opacity-90 rounded-r-lg">
                    <h2 className="mb-6 text-2xl font-semibold text-center text-black">Log in</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="w-5 h-5 text-customBlue"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 2a6 6 0 100 12A6 6 0 0010 2zM9 7a1 1 0 112 0v1a1 1 0 01-2 0V7zm1 8a4 4 0 100-8 4 4 0 000 8z" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter your ID number"
                                    value={nic}
                                    onChange={(e) => setNic(e.target.value)}
                                    className="w-full py-2 pl-10 pr-4 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="w-5 h-5 text-customBlue"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M4 8a4 4 0 118 0v1a4 4 0 01-8 0V8zm7-1a1 1 0 10-2 0v1a1 1 0 102 0V7zm2 5a5 5 0 01-10 0V8a5 5 0 0110 0v4z" />
                                    </svg>
                                </span>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full py-2 pl-10 pr-4 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-sm font-semibold text-white bg-customBlue rounded-lg hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-customBlue"
                        >
                            Login
                        </button>
                        <div className="my-4 text-center text-gray-600">OR</div>
                        <button
                            type="button"
                            className="w-full px-4 py-2 text-sm font-semibold text-black bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
