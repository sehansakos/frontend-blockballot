import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"
import VotersList from "./VotersList"
import { CircleCheck } from "lucide-react"
import CandidateList from "./CandidateList"

function Candidates(){

    const details = [
        {
            "id":1,
            "image":"/src/assets/person.jpg",
            "name":"John Doe",
            "Designation":"current-Designation"
        },
        {
            "id":2,
            "image":"/src/assets/person.jpg",
            "name":"John Doe",
            "Designation":"current-Designation"
        },
        {
            "id":3,
            "image":"/src/assets/person.jpg",
            "name":"John Doe",
            "Designation":"current-Designation"
        },
        {
            "id":4,
            "image":"/src/assets/person.jpg",
            "name":"John Doe",
            "Designation":"current-Designation"
        },
        {
            "id":5,
            "image":"/src/assets/person.jpg",
            "name":"John Doe",
            "Designation":"current-Designation"
        }

    ]
    return(
        <div>
            <div className="mb-20">
                {/* Top bar */}
                <div className="w-full h-14 bg-black fixed left-0 top-0 z-10 flex items-center justify-center text-white text-center"></div>  
                <Sidebar/> 

                <section className="bg-white border shadow-lg mt-20 mx-60">
                    {details.map((el)=>{
                    return(
                        <CandidateList
                        key = {el.id}
                        image = {el.image}
                        name = {el.name}
                        designation = {el.Designation}
                        />

                        
                    )
                    })}
                   
                </section>
                
                
            </div> <br />
            +Add Candidate
            <Link to= "/RegisterCandidatePage" className="bg-black w-40 rounded-xl px-10 my-20 text-white flex ml-70rem hover:transition-all hover:bg-slate-300 hover:text-black">
             <span>Confirm</span> 
             <CircleCheck className="ml-2"></CircleCheck>
            </Link>
        </div>
      

      


        
    )

}

export default Candidates