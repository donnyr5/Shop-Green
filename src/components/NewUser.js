import React, { useState, useEffect } from 'react';
import { addDoc, getDocs } from 'firebase/firestore';
import {collection} from 'firebase/firestore';
import { db } from '../firebase';

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
</div>
)
}

export function existingUser(props){
        //map through the user databse checking to see if props.email matches any of the data.email
        // if yes, return true. = user already esists
        // if no, return false. = create new user.
        
        //resisteredUsers is the collection of all users in database.
        let users = [];
        const usersCollRef = collection(db, 'users') 
        getDocs(usersCollRef)
                .then(response => {
                   console.log(response.docs)
                   const useer = response.docs.map(doc => ({
                     data: doc.data(), 
                     id: doc.id,
               }))
               users += useer;
        }).catch(error => console.log(error.message))
        
            users.array.forEach(element => {
                if (props.email === element.data.email){
                    return true;
                }
            });

        return false;

}
