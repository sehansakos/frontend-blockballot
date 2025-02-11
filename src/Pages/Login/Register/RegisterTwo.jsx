import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import countries from "world-countries";
import Select from "react-select";
import { motion } from "motion/react";
import { useState } from "react";
function RegisterTwo(){
    const countryOption = countries
    .map((country) => ({
        value:country.cca2,
        label:(
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={`https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`}
                    alt={`${country.name.common} flag`}
                    style={{ width: 20, marginRight: 10 }}
                />
                {country.name.common}
            </div>

        ),
        name: country.name.common,
        flag: `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`

        
    }))
    const [selectCountry,setSelectCountry] = useState(null)
    const handleChange = (selectedOption) => {
        setSelectCountry(selectedOption);
        console.log("Selected Country", selectedOption);
    };
   
    return(
        <div className="text-center mt-20 lg:[justify-items-center]">
            <motion.div initial = {{opacity:0}} animate = {{opacity:1}} transition={{duration:0.75, ease: "easeInOut"}}>
            <h1 className="text-4xl">Register</h1>
            <h2 className="text-3xl mt-20">Where is your company located?</h2>
        

            <label htmlFor="">
                <Select name="country" id="" className="h-10 mt-8 text-left w-11/12 sm:[w-full] max-w-lg ml-31.5rem" options={countryOption} value={selectCountry} onChange = {handleChange} placeholder="Country   |    USA" />
                <input type="text" className="border border-gray-300 rounded-md mr-4 mt-4 h-10 pl-3 w-11/12 max-w-lg" placeholder="City   |   Pannipitiya"/> <br/>
                <input type="text" className="border border-gray-300 rounded-md mr-4 mt-4 h-10 pl-3 w-11/12 max-w-lg" placeholder="ZipCode   |   10230"/>
            </label>
                
            
            
            
            
        
                
            

           
           
            <Link to= "/Page3" className="bg-black w-36 rounded-xl px-10 my-20 text-white ml-45rem flex items-center justify-center gap-2 mx-auto hover:transition-all hover:bg-slate-300 hover:text-black">
             <span>Next</span> 
             <ChevronRight className="ml-2"></ChevronRight>
            </Link>

            
            </motion.div>
        </div>
        
    )
}

export default RegisterTwo