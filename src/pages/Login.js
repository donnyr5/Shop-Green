import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuthState, useUpdateEmail } from 'react-firebase-hooks/auth';
import { auth } from '../firebase-auth';

import Navbar from '../components/Navbar';
import Home from './Home';
import Shop from './Shop';
import PostItem from './PostItem';

function Login() {

  const [user] = useAuthState(auth);
  const [email] = useState((user) ? user.email : "");

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }
  return (
    <>
    
      <BrowserRouter>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/post' element={<PostItem />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Login;