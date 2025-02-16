import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import countries from "world-countries";
import Select from "react-select";
import { motion } from "framer-motion";
import { useState } from "react";

function RegisterTwo() {
  const countryOption = countries.map((country) => ({
    value: country.cca2,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={`https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`}
          alt={`${country.name.common} flag`}
          style={{ width: 20, marginRight: 10 }}
        />
        {country.name.common}
      </div>
    ),
    name: country.name.common,
    flag: `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`,
  }));

  const [selectCountry, setSelectCountry] = useState(null);
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleChange = (selectedOption) => {
    setSelectCountry(selectedOption);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="w-full max-w-lg text-center"
      >
        <h1 className="text-4xl font-semibold p-10">Register</h1>
        <h2 className="text-2xl mt-10">Where is your company located?</h2>
        
        <div className="mt-6 w-full">
          <Select
            name="country"
            className="text-left w-full border border-gray-400 rounded-md"
            options={countryOption}
            value={selectCountry}
            onChange={handleChange}
            placeholder="Select your country"
          />
          <input
            type="text"
            className="border border-gray-400 rounded-md h-12 px-4 w-full mt-4 text-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            className="border border-gray-400 rounded-md h-12 px-4 w-full mt-4 text-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>

        <Link
          to="/Page3"
          className="bg-black w-32 rounded-xl px-6 py-2 mt-10 text-white flex items-center justify-center gap-2 mx-auto hover:bg-gray-300 hover:text-black transition"
        >
          <span>Next</span>
          <ChevronRight />
        </Link>
      </motion.div>

      {/* Progress bar */}
      <div className="w-full max-w-lg mt-10 flex items-center">
        <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
        <div className="flex-1 h-1 bg-green-500 rounded-full"></div>
        <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>
        <div className="flex-1 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}

export default RegisterTwo;
