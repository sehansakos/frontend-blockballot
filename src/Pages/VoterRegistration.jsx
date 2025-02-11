import Sidebar from "../Components/Sidebar"
import BottomBar from "../Components/BottomBar"
import { CircleCheck} from "lucide-react"
import { Link } from "react-router-dom"
function VoterRegistration(){
    return(
        <div className="bg-gray-200 w-auto">
             {/* Top bar */}
            <div className="w-full h-14 bg-black fixed left-0 top-0 z-10 flex items-center justify-center text-white text-center">
                <h1 className="text-lg md:text-xl font-semibold">Voter Configuration</h1> 
            </div>
            <div className="flex md:flex-row">
                <Sidebar/>
                <div className="mt-10 md:mt-20 flex-1">
                    {/* Content */}
                    <h1 className="text-center md:ml-72 text-xl font-bold">Register Voter</h1>
                    <div className="bg-white shadow-2xl ml-60 mr-20 mt-12 pl-40 pt-40 pb-20 w-auto">
                        <form action="" className="space-y-6">
                            <label htmlFor="">
                                <h2>Name of the Voter</h2>
                                <input type="text" name="VoterName" className="border-b w-2/4" required />
                            </label>
                            <label htmlFor="">
                                <h2 className="mt-8">Current Designation</h2>
                                <input type="text" name="designation" className="border-b w-2/4" required />
                            </label>

                            <label htmlFor="">
                                <h2 className="mt-8">Position Contested in the Election</h2>
                                <input type="text" name="contest" className="border-b w-2/4" required />
                            </label>

                            <label htmlFor="">
                                <h2 className="mt-8">Age</h2>
                                <input type="number" name="Age" className="border-b w-2/4" required />
                            </label>

                            <label htmlFor="">
                                <h2 className="mt-8">NIC</h2>
                                <input type="text" name="NIC" className="border-b w-2/4" required />
                            </label>
                            <label htmlFor="">
                                <h2 className="mt-8">Employee ID</h2>
                                <input type="text" name="EmpID" className="border-b w-2/4" required />
                            </label>
                            <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 md:gap-20">
                                <label htmlFor="" className="flex flex-col items-center md:items-start">
                                    <h2 className="mt-4 md:mt-8 md:text-left">ADD Photo</h2>
                                    {/* <input type="file" className="bg-slate-400 border-black px-16"  name="+Choose File"/> */}
                                    <input type="file"   name="+Choose File"/>
                                </label>
                                {/* Gender selection */}
                                <label htmlFor="" className="flex flex-col items-center md:items-start">
                                    <h2 className="mt-4 md:mt-8 text-center md:text-left">Gender</h2>
                                    <select name="gender" id="" className="bg-slate-300 px-8 py-2 mt-2">
                                        <option value="">Male</option>
                                        <option value="">Female</option>
                                    </select>
                                </label>
                            </div>
                        
                        </form>
                
                    </div>
                </div>  
                

            </div>
            
            <Link to= "/Voters" className="bg-black w-40 rounded-xl px-10 my-20 text-white flex ml-70rem hover:transition-all hover:bg-slate-300 hover:text-black">
             <span>Submit</span> 
             <CircleCheck className="ml-2"></CircleCheck>
            </Link>

            

       
            <BottomBar/>
            
        </div>
    )
}

export default VoterRegistration