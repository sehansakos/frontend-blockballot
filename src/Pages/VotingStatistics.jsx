import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import Sidebar from "../Components/Sidebar";
import BottomBar from '../Components/BottomBar';

const data = [
    { name: 'Candidate A', votes: 250, color: '#324265' },
    { name: 'Candidate B', votes: 200, color: '#4b5563' },
    { name: 'Candidate C', votes: 150, color: '#7490b8'},
    { name: 'Candidate D', votes: 50, color: '#000000'},
];

const pieData = [
    { name: 'Candidate A', value: 250, color: '#324265' },
    { name: 'Candidate B', value: 200, color: '#4b5563' },
    { name: 'Candidate D', value: 50, color: '#000000' },
    { name: 'Candidate C', value: 150, color: '#7490b8' },
];

function VotingStatistics() {
    const [isBarChart, setIsBarChart] = useState(true);
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(window.innerWidth > 768);

    // Handle Sidebar Toggle
    const handleSidebarToggle = (expanded) => {
        setIsSidebarExpanded(expanded);
    };

    // Adjust layout on screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsSidebarExpanded(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="bg-gray-100">
            {/* Sidebar */}
            <div className={`fixed left-0 top-0 h-full transition-all duration-300 z-50 ${isSidebarExpanded ? "w-100" : "w-0 overflow-hidden"}`}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 p-4 md:p-10 bg-gray-100 ${isSidebarExpanded ? "ml-64" : "ml-10"}`}>
                <h2 className="text-2xl font-bold text-black text-center md:text-left">Voting Statistics</h2>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <div className="p-4 md:p-6 bg-white rounded shadow-md text-center">
                        <h3 className="text-lg font-bold text-black">Total Votes</h3>
                        <p className="text-3xl md:text-4xl font-bold mt-4 text-black">600</p>
                        <span className="text-green-500">+12%</span>
                    </div>
                    <div className="p-4 md:p-6 bg-white rounded shadow-md text-center">
                        <h3 className="text-lg font-bold text-black">Candidate A Votes</h3>
                        <p className="text-3xl md:text-4xl font-bold mt-4 text-black">250</p>
                        <span className="text-green-500">+5%</span>
                    </div>
                    <div className="p-4 md:p-6 bg-white rounded shadow-md text-center">
                        <h3 className="text-lg font-bold text-black">Candidate B Votes</h3>
                        <p className="text-3xl md:text-4xl font-bold mt-4 text-black">200</p>
                        <span className="text-green-500">+3%</span>
                    </div>
                </div>

                {/* Chart Toggle Button */}
                <div className="mt-6 text-center">
                    <button
                        className="px-4 py-2 bg-blue-900 text-white rounded"
                        onClick={() => setIsBarChart(!isBarChart)}
                    >
                        Switch to {isBarChart ? 'Pie Chart' : 'Bar Chart'}
                    </button>
                </div>

                {/* Voting Trends Chart */}
                <div className="mt-12 bg-white p-4 md:p-6 rounded shadow-md">
                    <h3 className="text-lg font-bold text-black text-center">Voting Trends</h3>
                    <div className="flex justify-center items-center mt-8">
                        {isBarChart ? (
                            <BarChart width={window.innerWidth < 768 ? 300 : 500} height={300} data={data}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Bar dataKey="votes" fill="#8884d8">
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color}/>
                                    ))}
                                </Bar>
                            </BarChart>
                        ) : (
                            <PieChart width={window.innerWidth < 768 ? 300 : 500} height={window.innerWidth < 768 ? 300 : 500}>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={window.innerWidth < 768 ? 100 : 250}
                                    fill="#8884d8"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color}/>
                                    ))}
                                </Pie>
                            </PieChart>
                            
                        )}
                        
                    </div>
                    
                </div>
            </div>
            <BottomBar/>
        </div>
    );
}

export default VotingStatistics;
