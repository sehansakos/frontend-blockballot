import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

function RegisterOne() {
  const [companyName, setCompanyName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="w-full max-w-lg text-center"
      >
        <h1 className="text-4xl font-semibold p-16 ">Register</h1>
        <h2 className="text-2xl mt-10">What is your company name?</h2>
        
        <input
          type="text"
          className="h-12 mt-6 px-4 rounded-md w-full border border-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          placeholder="Enter company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        
        <Link
          to="/Page2"
          className="bg-black w-32 rounded-xl px-6 py-2 mt-10 text-white flex items-center justify-center gap-2 mx-auto hover:bg-gray-300 hover:text-black transition"
        >
          <span>Next</span>
          <ChevronRight />
        </Link>
      </motion.div>

      {/* Progress bar */}
      <div className="w-full max-w-lg mt-10 flex items-center">
        <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
        <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>
        <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>
        <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}

export default RegisterOne;
