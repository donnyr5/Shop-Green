import React, { useState, useEffect } from 'react';
import { addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import '../App.css'

import Navbar, {Navbar2} from '../components/Navbar';
import Home from '../pages/Home';
import AddItem from '../pages/AddItem';
import { About } from '../pages/About';
import Profile from '../pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Button2 } from './GoogleLogin';

export default function NewUser(props){

    const [balance, setBalance] = useState('')
    let email = props.email //email of the current user

    const q = query(collection(db, "users"), where("email", "==", email));

    const [querySnapshot,setQuerySnapshot] = useState('')

    useEffect(() => {           // so that it updates.  
        const unsubscribe = onSnapshot(q, snapshot => {
            setQuerySnapshot(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
        })
    
        return () => {
            unsubscribe()
        }
    }, [])
    
    useEffect(() => {
        getDocs(q)
        .then(response => {
            console.log(response.docs)
            const itms = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id,
            }))
            setQuerySnapshot(itms)
        }).catch(error => console.log(error.message))
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(querySnapshot.length)

    if (querySnapshot.length > 0){
        return (
        <PostLogin email={email} />
        )
    }
    

function handleSubmit(e) {
    e.preventDefault()
    if ( balance === '' || balance < 0) {
        alert("Must have positive amount of money!")
        return
    }
    const usersCollRef = collection(db, 'users')
    addDoc(usersCollRef, {balance, email}).then(response => { 
        console.log(response) 
    }).catch(error => {
        console.log(error.message)
    })
    setBalance('')
}

return (
    <div>
    <BrowserRouter>
    <Navbar2 />
    </BrowserRouter>
    <div />
        <div className="addItem">
            <h4>Create Shop Green Account</h4>
                <form onSubmit={handleSubmit}>
                     <label htmlFor='balance'> </label>
                        <input id='price' type="number" value={balance} onChange={e => setBalance(parseInt (e.target.value) )} /> How much money do you have?
        <div />
        <Button2 type='submit' >Submit Information</Button2>
    </form>
    <div />
</div>
</div>
)
}

function PostLogin(props) {
    return (
      <BrowserRouter>
      <Navbar email={props.email}/>
        <Routes>
          <Route path='' element= {<Home email={props.email}/>} />
          <Route path='/about' element= {<About />} />
          <Route path='/post' element= {<AddItem email={props.email} />} />
          <Route path='/profile' element = {<Profile email={props.email} />}/>
        </Routes>
      </BrowserRouter>
    )
  }
