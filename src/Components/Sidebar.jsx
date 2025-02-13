import { AlignJustify, LogOut, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // Adjust sidebar on window resize
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isSmallScreen);
      setIsExpanded(!isSmallScreen); // Expand on large screens, collapse on mobile
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Floating Toggle Button for Mobile */}
      {isMobile && (
        <AlignJustify 
          onClick={toggleSidebar} 
          className="text-white text-2xl fixed top-4 left-4 cursor-pointer z-20"
        />
      )}

      {/* Sidebar Container */}
      <div 
        className={`h-full fixed z-10 bg-black transition-all duration-300 ease-in-out flex flex-col ${
          isExpanded ? "w-56" : "w-16"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 mt-10">
          {isExpanded && <h1 className="text-white text-2xl">Department</h1>}
          <AlignJustify onClick={toggleSidebar} className="text-white cursor-pointer" />
        </div>

        {/* User Profile */}
        {isExpanded && (
          <div className="bg-white rounded-r-2xl h-14 mt-6 mx-4 flex items-center px-3">
            <h4 className="font-montserrat text-black">John Doe</h4>
            <img 
              src="/src/assets/person.jpg" 
              alt="Profile" 
              className="ml-auto w-10 h-10 border border-black rounded-full" 
            />
          </div>
        )}

        {/* Sidebar Navigation */}
        <nav className="mt-16 flex flex-col items-center space-y-1">
          {[
            { name: "Election", path: "/VotingStatistics" },
            { name: "Voters", path: "/Voters" },
            { name: "Candidates", path: "/Candidates" },
          ].map((item, index) => (
            <div key={index} className="relative w-full flex flex-col items-center group">
              <Link 
                to={item.path} 
                className="text-white text-center w-full py-2 hover:bg-gradient-to-r from-black via-customeBlue to-black transition relative"
              >
                {isExpanded ? (
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
                  </span>
                ) : (
                  ""
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-1 w-full flex flex-col items-center">
          {/* Settings Icon */}
          <Link to="/CompanyProfilePage">
            <Settings className="text-white w-4 h-4 mb-4 cursor-pointer" />
          </Link>
          {/* Show underline only when expanded */}
          {isExpanded && <div className="w-40 h-0.5 bg-white shadow-md"></div>}
          {/* Logout Button */}
          <LogOut className="text-white w-4 h-8 mt-4 cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
