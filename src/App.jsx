import './App.css';
import { Helmet } from 'react-helmet';
import VoterRegistration from './Pages/VoterRegistration';
import Login from './Pages/Login/Login';
import LoginPage from './Pages/LoginPage';
import RegisterElectionPage from './Pages/RegisterElectionPage';


function App() {


 return(
    <div className='container'>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Helmet>
       
        {/* <VoterRegistration/> */}
        <Login/> 

        {/* <LoginPage/> */}
        {/* //<RegisterElectionPage/>*/ }
    </div>
 )
}

export default App
