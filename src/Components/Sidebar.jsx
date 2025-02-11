import { AlignJustify,LogOut,UserRound ,Settings} from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom";

function Sidebar(){

    const [display,isDisplay] = useState(true);
    
    const handleclick = () =>{
        isDisplay(!display)
        console.log(!display)

    }
    if(display){
        return(
       
            <div className="h-full fixed z-10  bg-black border-white"> 
                    {/* Side bar */}
                    {/* make changes here 'md:w-40 hidden md:block'*/}
                <div className="inline-flex mt-10 ml-3">
                    <h1 className="text-white">Department</h1>
                    <AlignJustify onClick={handleclick} className="text-white ml-4 cursor-pointer"/>
                </div>
                <div className="bg-white rounded-r-2xl h-14 mt-20 ml-3 mr-8">
                    {/* <UserRound className="ml-32 text-2xl"/> */}
                    <div className="inline-flex px-2 pt-2 ">
                        <h4 className="font-montserrat drop-shadow-lg  shadow-black">John Doe</h4>
                        <img src="/src/assets/person.jpg" alt="person image" className=" ml-8 w-10 h-10 border border-black rounded-full" />
                    </div>
                    
                </div>
                <div className="mt-24">
                    <Link to={'/VotingStatistics'} className="text-white ml-8 w-40 pr-4 py-1 hover:bg-gradient-to-r from-black via-customeBlue to-black">Election</Link><br />
                    <Link to={'/Voters'} className="text-white ml-8 w-40 pr-4 py-1 mt-4 hover:bg-gradient-to-r from-black via-customeBlue to-black">Voters</Link><br />
                    <Link to={'/Candidates'} className="text-white ml-8 w-40 pr-4 py-1 mt-4 hover:bg-gradient-to-r from-black via-customeBlue to-black">Candidates</Link>
                </div>
                <Link to={'/CompanyProfilePage'}>
                   <Settings className="text-white fixed mt-80"/>
                </Link>
                <LogOut className="text-white ml-10 fixed mt-72"/>
    
    
            
            </div>
        )

    }
    else{
        return(
            // <AlignJustify onClick={handleclick} className="text-black text-xl font-bold ml-8 top-16 fixed cursor-pointer"/>

            <div className="h-full w-40 fixed z-10  bg-black border-white transition-transform"> 
                    {/* Side bar */}
                    {/* make changes here 'md:w-40 hidden md:block'*/}
                <div className="inline-flex mt-10 ml-1">
                    <h1 className="text-white">Department</h1>
                    <AlignJustify onClick={handleclick} className="text-white ml-1 cursor-pointer"/>
                </div>
                
                <img src="/src/assets/person.jpg" alt="person image" className=" ml-8 w-10 h-10 mt-20 border border-black rounded-full" />
                
                <Link to={'/CompanyProfilePage'}>
                   <Settings className="text-white fixed mt-80"/>
                </Link>
                <LogOut className="text-white ml-10 fixed mt-96"/>
    
    
            
            </div>
            
            
        )
        
    }
    
}

export default Sidebar