import React, { useState, useEffect } from 'react';
import { addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { userCollectionRef } from '../firestore-collection';
import { GoogleSignOut } from './GoogleLogin';
import { doc, collection, query, where, onSnapshot } from "firebase/firestore";

import Navbar from '../components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import AddItem from '../components/AddItem';

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
    <h4>Create Shop Green Account</h4>
    <form onSubmit={handleSubmit}>
        <label htmlFor='balance'> </label>
        <input id='price' type="number" value={balance} onChange={e => setBalance(parseInt (e.target.value) )} /> How much money do you have?
        <button type='submit' >Submit Information</button>
    </form>
    <div />
    <GoogleSignOut />
</div>
)
}

function PostLogin(props) {
    return (
      <BrowserRouter>
      <Navbar email={props.email}/>
        <Routes>
          <Route path='' element= {<Home email={props.email}/>} />
          <Route path='/shop' element= {<AddItem email={props.email} />} />
        </Routes>
      </BrowserRouter>
    )
  }

  
 
//export function ExistingUser( email ){
        //map through the user databse checking to see if props.email matches any of the data.email
        // if yes, return true. = user already esists
        // if no, return false. = create new user.

// const q = query(collection(db, "users"), where("email", "==", email));

// //console.log(email);
// const [querySnapshot,setQuerySnapshot] = useState('')

// useEffect(() => {
//     getDocs(q)
//     .then(response => {
//         console.log(response.docs)
//         const itms = response.docs.map(doc => ({
//             data: doc.data(),
//             id: doc.id,
//         }))
//         setQuerySnapshot(itms)
//     }).catch(error => console.log(error.message))
// }, [])


// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   //console.log(doc.id, " => ", doc.data());
//   if (doc.id.length > 0) {
//    // console.log("welcome back!")
//     return true;
//   } 
// });

// //console.log("no existing user!")
// return false;
 
// }

// export async function getExistingUser(email){
//     var x = await (existingUser(email));
//     console.log(x);
//     return x;
// }
