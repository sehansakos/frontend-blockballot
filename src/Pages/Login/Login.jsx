import { UserRound,Lock,EyeOff } from "lucide-react"
import { div } from "motion/react-client"
import { Link } from "react-router-dom"
import { useState } from "react";
import { UserButton,SignedIn,SignedOut } from "@clerk/clerk-react";
function Login(){
    const [nic, setNic] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('NIC:', nic);
        console.log('Password:', password);
    };
    return(
        <div>
            <SignedIn>
                <div className="flex ml-10">
                <div className="mr-8">Hi</div>
                <UserButton/>
                </div>
               
            </SignedIn>
            <SignedOut>
            <nav className="ml-8">
                <Link to={'/SignIn'}>SignIn</Link>
                <Link to={'/SignUp'} className="ml-4">SignUp</Link>
            </nav>
            </SignedOut>
             <div className="m-40 border-black border grid grid-cols-2 w-3/5 ">
            
            <section className="bg-customeBlue"> 
               <h1 className="text-center my-8 text-white font-semibold text-xl">Block Ballot</h1>
            </section>
            <section className="bg-white">
                <div className="my-8">
                    <h1 className="text-center">Login</h1>
                    <div className="mt-20">
                        <label htmlFor="">
                            <div className="rounded-2xl border border-black ml flex w-3/4 mx-20">
                                <UserRound className="my-2 h-4"/>
                                 
                                <input type="text"  placeholder="Enter your ID number" />
                            </div>
                            
                        </label>
                        <label htmlFor="">
                            <div className="rounded-2xl border border-black ml flex w-3/4 mx-20 mt-5">
                                <Lock className="my-2 h-4"/>
                                
                                <input type="text"  placeholder="Enter your password" />

                                <EyeOff className="my-2 h-4 ml-12"/>
                            </div>
                            
                        </label>
                        

                    </div>
                    <div className="mt-20">
                        <button className="bg-customeBlue text-center w-3/4 rounded-2xl mx-20 text-white my-2 hover:bg-gray-400 hover:text-black hover:transition-all">Login</button>
                        <Link to={'/Page1'}>
                          <button className="bg-black text-center w-3/4 rounded-2xl mx-20 text-white my-2 hover:bg-gray-400 hover:text-black hover:transition-all">Register</button>
                        </Link>
                        
                    </div>
                    
                    
                    
                </div>
              
              


            </section>
          
        </div>
        </div>
        // <div>
        //     {/* className="flex items-center justify-center min-h-screen bg-cover bg-center"
        //     style={{ backgroundImage: `url(${backgroundImage})` }} */}
         
        //     <div className="flex flex-row w-11/12 max-w-4xl rounded-lg shadow-lg bg-opacity-20 bg-white overflow-hidden">
        //         {/* Left Box */}
        //         <div className="flex flex-1 items-center justify-center bg-customBlue p-8">
        //             <h1 className="text-4xl font-bold text-white">BlockBallot</h1>
        //         </div>

        //         {/* Right Form Container */}
        //         <div className="w-1/2 p-8 bg-white bg-opacity-90 rounded-r-lg">
        //             <h2 className="mb-6 text-2xl font-semibold text-center text-black">Log in</h2>
        //             <form onSubmit={handleLogin}>
        //                 <div className="mb-4">
        //                     <div className="relative">
        //                         <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        //                             <svg
        //                                 className="w-5 h-5 text-customBlue"
        //                                 fill="currentColor"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 viewBox="0 0 20 20"
        //                             >
        //                                 <path d="M10 2a6 6 0 100 12A6 6 0 0010 2zM9 7a1 1 0 112 0v1a1 1 0 01-2 0V7zm1 8a4 4 0 100-8 4 4 0 000 8z" />
        //                             </svg>
        //                         </span>
        //                         <input
        //                             type="text"
        //                             placeholder="Enter your ID number"
        //                             value={nic}
        //                             onChange={(e) => setNic(e.target.value)}
        //                             className="w-full py-2 pl-10 pr-4 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
        //                         />
        //                     </div>
        //                 </div>
        //                 <div className="mb-6">
        //                     <div className="relative">
        //                         <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        //                             <svg
        //                                 className="w-5 h-5 text-customBlue"
        //                                 fill="currentColor"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 viewBox="0 0 20 20"
        //                             >
        //                                 <path d="M4 8a4 4 0 118 0v1a4 4 0 01-8 0V8zm7-1a1 1 0 10-2 0v1a1 1 0 102 0V7zm2 5a5 5 0 01-10 0V8a5 5 0 0110 0v4z" />
        //                             </svg>
        //                         </span>
        //                         <input
        //                             type="password"
        //                             placeholder="Enter your password"
        //                             value={password}
        //                             onChange={(e) => setPassword(e.target.value)}
        //                             className="w-full py-2 pl-10 pr-4 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue"
        //                         />
        //                     </div>
        //                 </div>
        //                 <button
        //                     type="submit"
        //                     className="w-full px-4 py-2 text-sm font-semibold text-white bg-customBlue rounded-lg hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-customBlue"
        //                 >
        //                     Login
        //                 </button>
        //                 <div className="my-4 text-center text-gray-600">OR</div>
        //                 <button
        //                     type="button"
        //                     className="w-full px-4 py-2 text-sm font-semibold text-black bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        //                 >
        //                     Register
        //                 </button>
        //             </form>
        //         </div>
        //     </div>
        // </div>
       
    )

}

export default Login