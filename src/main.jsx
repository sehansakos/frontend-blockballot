import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Voters from './Components/Voters.jsx'
import VotersPage from './Pages/VotersPage.jsx'
import CandidatesPage from './Pages/CandidatesPage.jsx'
import RegisterOne from './Pages/Login/Register/RegisterOne.jsx'
import RegisterTwo from './Pages/Login/Register/RegisterTwo.jsx'
import RegisterThree from './Pages/Login/Register/RegisterThree.jsx'
import RegisterFour from './Pages/Login/Register/RegisterFour.jsx'
import SigninPage from './Pages/auth/SignIn.jsx'
import SignupPage from './Pages/auth/SingOut.jsx'
import FinalPage from './Pages/final.jsx'
import React from 'react'
import { ClerkProvider } from '@clerk/clerk-react'
import LoginPage from './Pages/LoginPage.jsx'
import RegisterElectionPage from './Pages/RegisterElectionPage.jsx'
import VotingStatistics from './Pages/VotingStatistics.jsx'
import VoterRegistration from './Pages/VoterRegistration.jsx'
import CompanyProfilePage from './Pages/CompanyProfilePage.jsx'
import Candidates from './Components/Candidates.jsx'
import RegisterCandidatePage from './Pages/RegisterCandidatePage.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if(!PUBLISHABLE_KEY){
  throw new Error("Missing publishble key")
}

const router = createBrowserRouter([
  {
   children:[
    {
      path:'/',
      element:<App/>
    },

    {
      path:'/Page1',
      element:<RegisterOne/>
    },
    {
      path:'/Page2',
      element:<RegisterTwo/>
    },
    {
      path:'/Page3',
      element:<RegisterThree/>
    },
    {
      path:'/Page4',
      element:<RegisterFour/>
    },

    {
      path:'/Voters',
      element:<VotersPage/>

    },
    {
      path:'/VoterRegistration',
      element:<VoterRegistration/>
    },
    
    {
      path:'/final',
      element:<FinalPage/>
    },
    {
      path:'/Login',
      element:<LoginPage/>
    },
    {
      path:'/RegisterElectionPage',
      element:<RegisterElectionPage/>
    },
    {
      path:'/RegisterCandidatePage',
      element:<RegisterCandidatePage/>
    },
    {
      path:'/VotingStatistics',
      element:<VotingStatistics/>
    },
    {
      path:'/CompanyProfilePage',
      element:<CompanyProfilePage/>
    },
    {path:'/Candidates',
      element:<CandidatesPage/>
    }
   ]
  },
  {
    path:'/SignIn',
    element:<SigninPage/>
  },
  {
    path:'/SignUp',
    element:<SignupPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router}/>
    </ClerkProvider>
  </React.StrictMode>,
)
