import React from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';

import ListItems from './components/ListItems';
import AddItem from './components/AddItem';
import {GoogleSignIn, GoogleSignOut} from './components/GoogleLogin';
import {useState, useEffect} from 'react';

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
         {user ? <SearchBar /> : <GoogleSignIn />}
      </section>

        </div>
    )

         //<button onClick={props.toggleIsPosting}>Go Back</button>
         //</main> <AddItem email={email}/>




     // isPosting ? <PostingItem toggleIsPosting={toggleIsPosting} email={email} /> : <Marketplace toggleIsPosting={toggleIsPosting} />



function SearchBar() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/home' element = {<Home />} />
        <Route path='/shop' element= {<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}


}


export default App;


