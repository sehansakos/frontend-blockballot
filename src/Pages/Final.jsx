import React from "react";
import Sidebar from "../Components/Sidebar";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const EmptyStatePage = () => {
    return (
        <div className=" min-h-screen flex bg-black text-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="ml-32 flex-1 flex flex-col justify-center items-center bg-white text-black p-10 relative">
                <div className="text-center max-w-lg">
                    <h2 className="text-2xl font-semibold mb-2">There's nothing to show here...</h2>
                    <p className="text-gray-600">Start by setting up the vote and the candidates.</p>
                    <div className="flex justify-center mt-4">
                        <AiOutlineExclamationCircle className="text-gray-500 text-4xl" />
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button className="text-blue-500 font-medium underline">Setup</button>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <div className="bg-black text-white text-center py-2 w-full absolute bottom-0">blockballot.com</div>
        </div>
    );
};

export default EmptyStatePage;
