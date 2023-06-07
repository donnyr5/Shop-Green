import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import NewUser from './components/NewUser';
import {Navbar2} from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import {LandingImage} from './components/LandingImage';
import { auth } from './components/GoogleLogin';
import { About } from './pages/About';
import Footer from './components/Footer';



function App() {

  const [user] = useAuthState(auth);

    return (
        <><section>
        {user ? <NewUser email={user.email} /> : <>
          <BrowserRouter>
            <Navbar2 />
            <Routes>
              <Route path='' element={<LandingImage />} />
              <Route path='/about' element={<About />} />
              <Route path='' element={<LandingImage />} />
              <Route path='' element={<LandingImage />} />
              <Route path='/post' element={<LandingImage />} />
              <Route path='/profile' element={<LandingImage />} />
            </Routes>
          </BrowserRouter>
        </>}
      </section>
      <div class ="footer">
          <Footer />
        </div>
        </>
    )
}

export default App;


{/* 

- home lists items in 




*/}