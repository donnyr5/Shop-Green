import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';

import ListItems from './components/ListItems';
import AddItem from './components/AddItem';
import {GoogleSignIn, GoogleSignOut} from './components/GoogleLogin';
import {useState, useEffect} from 'react';
import NewUser, { getExistingUser } from './components/NewUser';

import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';

import { auth } from './components/GoogleLogin';


function App() {

  
  const [user] = useAuthState(auth);
  const [email] = useState( (user) ? user.email : "");  //if user is null, set to empty string.

    //this is if the user is logged in.
    return (
      <div>
          
      <section>

         { /* if user is new to the website, take them to a newUser page first */ }
         {user ? console.log(getExistingUser(user.email)) : console.log("")
         /* MAKE THIS RETURN AS A BOOLEAN, NOT A PROMISE!!!*/}

          { user ? 
              (  getExistingUser(user.email)  ? <PostLogin email={user.email} /> : <NewUser email={user.email}/>)
            :
              <GoogleSignIn /> }
      </section>

        </div>
    )

function PostLogin(props) {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element= {<Home email={props.email}/>} />
        <Route path='/shop' element= {<AddItem email={props.email} />} />
      </Routes>
    </BrowserRouter>
  )
}


}


export default App;


