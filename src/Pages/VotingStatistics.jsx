import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { Link } from 'react-router-dom';

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

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/5 bg-black text-white flex flex-col">
                <div className="p-6">
                    <h1 className="text-lg font-bold">Department</h1>
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-bold">John Doe</h2>
                    <div className="flex items-center mt-4">
                        <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                        <span className="ml-4">John Doe</span>
                    </div>
                </div>
                <nav className="flex-grow mt-6">
                    <ul>
                        <li className="py-2 px-6 bg-gray-800">Election</li>
                        <Link to={'/Voters'} className="py-2 px-6 hover:bg-gray-700">Voters</Link>
                        <li className="py-2 px-6 hover:bg-gray-700">Candidates</li>
                    </ul>
                </nav>
                <div className="p-6">
                    <button className="w-full text-left">Log out</button>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-4/5 p-10 bg-white bg-opacity-90">
                <h2 className="text-2xl font-bold text-black">Voting Statistics</h2>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="p-6 bg-gray-100 bg-opacity-90 rounded shadow-md text-center">
                        <h3 className="text-lg font-bold text-black">Total Votes</h3>
                        <p className="text-4xl font-bold mt-4 text-black">600</p>
                        <span className="text-green-500">+12%</span>
                    </div>
                    <div className="p-6 bg-gray-100 bg-opacity-90 rounded shadow-md text-center">
                        <h3 className="text-lg font-bold text-black">Candidate A Votes</h3>
                        <p className="text-4xl font-bold mt-4 text-black">250</p>
                        <span className="text-green-500">+5%</span>
                    </div>
                    <div className="p-6 bg-gray-100 bg-opacity-90 rounded shadow-md text-center">
                        <h3 className="text-lg font-bold text-black">Candidate B Votes</h3>
                        <p className="text-4xl font-bold mt-4 text-black">200</p>
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
                <div className="mt-12 bg-gray-100 bg-opacity-90 p-6 rounded shadow-md relative">
                    <h3 className="text-lg font-bold text-black">Voting Trends</h3>
                    <div className="flex justify-center items-center mt-8">
                        {isBarChart ? (
                            <BarChart width={500} height={300} data={data}>
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
                            <PieChart width={500} height={500}>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={250}
                                    fill="#8884d8"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color}/>
                                    ))}
                                </Pie>
                            </PieChart>
                        )}
                    </div>
                    <div className="absolute bottom-4 left-4 flex flex-col space-y-2">
                        {data.map((entry, index) => (
                            <div
                                key={index}
                                className="w-4 h-4 rounded-full"
                                style={{backgroundColor: entry.color}}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VotingStatistics;
