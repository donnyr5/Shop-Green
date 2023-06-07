import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import NewUser from './components/NewUser';
import {Navbar2} from './components/Navbar';
import { BrowserRouter} from 'react-router-dom'
import {LandingImage} from './components/LandingImage';
import { auth } from './components/GoogleLogin';



function App() {

  const [user] = useAuthState(auth);

    return (
      <section>
          { user ? <NewUser email={user.email}/> : <>
          <BrowserRouter> 
          <Navbar2 /> 
          </BrowserRouter>
          <LandingImage />
          </>}
      </section>
    )
}

export default App;


