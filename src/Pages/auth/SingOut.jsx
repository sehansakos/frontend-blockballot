//import { SignUp } from "@clerk/clerk-react"
//import { SignedOut } from "@clerk/clerk-react"
import { SignUp } from "@clerk/clerk-react"
function SignupPage(){
    return(
        <main className="flex items-center justify-center min-h-screen container px-4">
         <SignUp/>
       </main>
    )
    
}

export default SignupPage