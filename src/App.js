import React, { useState, useEffect } from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';

import ListItems from './components/ListItems';
import AddItem from './components/AddItem';
import {GoogleSignIn, GoogleSignOut} from './components/GoogleLogin';
import NewUser from './components/NewUser';

import {Navbar2} from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';

import { auth } from './components/GoogleLogin';



function App() {

  const [user] = useAuthState(auth);

    return (
      <section>
          { user ? <NewUser email={user.email}/> : <BrowserRouter> <Navbar2/> </BrowserRouter> }
      </section>
    )
}

export default App;


