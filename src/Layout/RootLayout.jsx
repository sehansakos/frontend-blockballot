import { useState } from "react";
import { NameContext } from "../Context/NameContext";
import { OutdentIcon } from "lucide-react";
import { Outlet } from "react-router-dom";

function RootLayout(){
    const [companyName,setCompanyName] = useState([]);

    const createName = (name)=>{
        setCompanyName(...companyName,{...name})
        return
    }

    return(
        <div>
            <NameContext.Provider value={{name:companyName,saveName:createName}}>
                <Outlet/>

            </NameContext.Provider>
        </div>
    )
}
