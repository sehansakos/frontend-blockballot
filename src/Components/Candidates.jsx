import { useState } from "react";
import { Link } from "react-router-dom";
import { CircleCheck, Users, SortAsc } from "lucide-react";
import Sidebar from "./Sidebar";
import CandidateList from "./CandidateList";
import BottomBar from "./BottomBar";
import TopBar from "../Components/TopBar";

function Candidates() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const details = [
        { id: 1, image: "/src/assets/person.jpg", name: "John Doe", designation: "Current designation" },
        { id: 2, image: "/src/assets/person.jpg", name: "John Doe", designation: "Current designation" },
        { id: 3, image: "/src/assets/person.jpg", name: "John Doe", designation: "Current designation" },
        { id: 4, image: "/src/assets/person.jpg", name: "John Doe", designation: "Current designation" }
    ];

    return (
        <div className="flex flex-col h-screen bg-gray-200 relative">
            {/* Top Bar */}
            <TopBar />

            {/* Sidebar */}
            <div
                className={`fixed left-0 top-0 h-full text-white flex flex-col transition-all duration-300 z-50 ${
                    isSidebarOpen ? "w-64" : "w-0 overflow-hidden"
                }`}
            >
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 mt-10 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
                <div className="p-6 md:p-10 h-[calc(100vh-4rem)] overflow-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-2xl font-bold flex items-center">
                            Candidates <Users className="ml-2 text-gray-600" /> <span className="ml-1 text-gray-600">20</span>
                        </h2>
                    </div>

                    {/* Candidate List Section */}
                    <div className="bg-white rounded-2xl shadow-lg mx-auto w-full p-2">
                        {/* Fixed Header (Select & Sort Buttons) */}
                        <div className="flex justify-end space-x-2 mb-2 sticky top-0 bg-white p-2 rounded-t-2xl z-10">
                            <button className="text-blue-700 text-sm border border-blue-500 px-4 py-1 rounded-xl bg-blue-100 hover:bg-blue-500 hover:text-white transition">
                                Select
                            </button>
                            <button className="text-gray-600 text-sm border border-gray-400 px-3 py-1 rounded-xl bg-gray-200 hover:bg-gray-400 hover:text-white transition flex items-center">
                                <SortAsc size={16} className="mr-1" />
                            </button>
                        </div>

                        {/* Scrollable Candidate List */}
                        <div className="overflow-y-auto max-h-[400px] custom-scrollbar">
                            {details.map((el) => (
                                <CandidateList key={el.id} image={el.image} name={el.name} designation={el.designation} />
                            ))}
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex items-center justify-between mt-4">
                        <button className="text-blue-500 text-sm">+ Add Candidate</button>
                        <Link
                            to="/RegisterCandidatePage"
                            className="bg-black text-white px-6 py-3 rounded-full flex items-center hover:bg-gray-700 transition shadow-md"
                        >
                            Confirm <CircleCheck className="ml-2" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <BottomBar />
        </div>
    );
}

export default Candidates;
