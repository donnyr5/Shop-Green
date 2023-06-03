import React from 'react';
import './App.css';

import ListItems from './components/ListItems';
import AddItem from './components/AddItem';
import {useState, useEffect} from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Shop from './pages/Shop';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { useAuthState, useUpdateEmail } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAZU3vY4jE4w1jZw4MmERT2styneahJVsU",
  authDomain: "shop-green-a3ae3.firebaseapp.com",
  projectId: "shop-green-a3ae3",
  storageBucket: "shop-green-a3ae3.appspot.com",
  messagingSenderId: "714877199071",
  appId: "1:714877199071:web:980b9b82017b86e5513f6a"
})

const auth = firebase.auth();
function App() {

  
  const [user] = useAuthState(auth);
  const [email] = useState( (user) ? user.email : "");  //if user is null, set to empty string.
  const [isPosting, setIsPosting] = useState(false)



    //this is if the user is logged in.
    return (
      <div>
        <SignOut />
        <SearchBar />
      <section>
         {user ? <Dashboard /> : <SignIn />}
    </section>
        </div>
    )



  function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)}
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      </>
    )
  }
  
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }


  //changes the boolean to the opposite.
  function toggleIsPosting(){
    setIsPosting(!isPosting)
  }

  function Marketplace(props){
    return (
      <div className='App'>
        <main>
          <ListItems />
          <button onClick={props.toggleIsPosting}>Sell an Item</button>
        </main>
      </div>
    )
  }

  
  function PostingItem(props){
    return (
      <div className='App'>
        <main>
          <button onClick={props.toggleIsPosting}>Go Back</button>
          <AddItem email={email}/>
        </main>
      </div>
    )
  }


  function Dashboard(){
    return (
      isPosting ? <PostingItem toggleIsPosting={toggleIsPosting} email={email} /> : <Marketplace toggleIsPosting={toggleIsPosting} />
    )
    }


function SearchBar() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element = {<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}


}


export default App;


