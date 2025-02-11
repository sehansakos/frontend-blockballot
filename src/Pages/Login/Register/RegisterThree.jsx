import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"
import { easeIn, motion } from "motion/react"
function RegisterThree(){
    return(
        <div className="text-center m-20">
            <motion.div initial = {{opacity:0}} animate = {{opacity:1}} transition={{duration:0.75, ease: "easeIn"}}>
            <h1 className="text-4xl">Register</h1>
            <h2 className="text-3xl mt-20">How many admins does your company have?</h2>
            <input type="number" className="h-10 mt-8 rounded-md pl-2 w-96 border border-black" />
            <Link to= "/Page4" className="bg-black w-36 rounded-xl px-10 my-20 text-white flex ml-45rem hover:transition-all hover:bg-slate-300 hover:text-black">
             <span>Next</span> 
             <ChevronRight className="ml-2"></ChevronRight>
            </Link>

            </motion.div>
            
        </div>
        
    )
}

export default RegisterThree