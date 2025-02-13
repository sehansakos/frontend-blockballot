import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { NameContext } from "../../../Context/NameContext";
import { motion } from "motion/react";
//import backgroundImage from '../../public/backgroundImage.png';
import { div } from "motion/react-client";
import { easeOut } from "motion";
function RegisterOne(){

    const [formdata] = useState(NameContext);
    

    
    

    return(
       
        <div className="text-center mt-20 lg:[justify-items-center]">
            <motion.div initial = {{opacity:0}} animate = {{opacity:1}} transition={{duration:0.75, ease: "easeOut"}}>
            <h1 className="text-4xl">Register</h1>
            <h2 className="text-3xl mt-20">What is your company Name?</h2>
            <label htmlFor="">
             <input type="text" className="h-10 mt-8 pl-10 rounded-md w-11/12 max-w-lg border border-black" placeholder="Enter company name" onChange={formdata} />
            </label> <br />
            


            <Link to= "/Page2" className="bg-black w-36 rounded-xl px-10 my-20 text-white flex items-center justify-center gap-2 mx-auto  hover:transition-all hover:bg-slate-300 hover:text-black">
             <span>Next</span> 
             <ChevronRight className="ml-2"></ChevronRight>
            </Link>
            </motion.div>

            {/* ml-[45rem] md:[text-center] lg:[text-center] */}
        </div>
        
        
    )

}
export default RegisterOne