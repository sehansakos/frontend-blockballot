import { SignIn } from "@clerk/clerk-react"
//import { SignedIn } from "@clerk/clerk-react"
function SigninPage(){
    return(
        <main className="flex items-center justify-center min-h-screen container px-4">
          <SignIn/>
        </main>
    )
   
}

export default SigninPage