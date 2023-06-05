import React, { useState, useEffect } from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';

import ListItems from './components/ListItems';
import AddItem from './components/AddItem';
import {GoogleSignIn, GoogleSignOut} from './components/GoogleLogin';
import NewUser from './components/NewUser';

import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';

import { auth } from './components/GoogleLogin';



function App() {

  const [user] = useAuthState(auth);

    return (
      <section>
          { user ? <NewUser email={user.email}/> : <GoogleSignIn /> }
      </section>
    )
}

export default App;


