import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { motion } from "motion/react"
import { easeIn } from "motion"
function RegisterFour(){
    return(
        <div className="text-center m-20">
            <motion.div initial = {{opacity:0}} animate = {{opacity:1}} transition={{duration:0.75, ease: "easeIn"}}>
            <h1 className="text-4xl">Register</h1>
            <h2 className="text-3xl mt-20">Eneter a password for your login</h2>
            <input type="password" className="h-10 mt-8 rounded-md w-96 pl-2 border border-black" placeholder="enter your new password" /> <br/>
            <input type="password" className="h-10 mt-8 rounded-md w-96 pl-2 border border-black" placeholder="confirm your password" />

            <Link to= "/final" className="bg-black w-36 rounded-xl px-10 my-20 text-white flex ml-45rem hover:transition-all hover:bg-slate-300 hover:text-black">
             <span>Next</span> 
             <ChevronRight className="ml-2"></ChevronRight>
            </Link>
            </motion.div>
            
        </div>
        
        
    )
}

export default RegisterFour