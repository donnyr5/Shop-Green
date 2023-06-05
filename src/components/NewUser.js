import React, { useState, useEffect } from 'react';
import { addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { userCollectionRef } from '../firestore-collection';
import { GoogleSignOut } from './GoogleLogin';
import { doc, collection, query, where, onSnapshot } from "firebase/firestore";

export default function NewUser(props){

const [balance, setBalance] = useState('')
let email = props.email

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
 
async function existingUser( email ){
        //map through the user databse checking to see if props.email matches any of the data.email
        // if yes, return true. = user already esists
        // if no, return false. = create new user.

      
const q = query(collection(db, "users"), where("capital", "==", true));

//console.log(email);

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  if (doc.id.length > 0) {
   // console.log("welcome back!")
    return true;
  } 
  

});

//console.log("no existing user!")
return false;
 
}

export async function getExistingUser(email){
    var x = await (existingUser(email));
    console.log(x);
    return x;
}
