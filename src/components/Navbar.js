import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import {GoogleSignIn, GoogleSignOut, auth} from '../components/GoogleLogin';
import { doc, collection, query, where, onSnapshot, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { userCollectionRef } from '../firestore-collection';
import {Button2} from '../components/GoogleLogin';
import styled from "styled-components";


const title = styled.h1`
font-size: 1.5em;
`

const Navbar = ({email}) => {
return (
   <>
   <Nav>
       <Bars />
       <NavMenu>
       <NavLink to='' activeStyle>
           Home
       </NavLink>
       <NavLink to='/shop' >
           Post 
       </NavLink>
       </NavMenu>
       <h3>Shop Green</h3>
       <GoogleSignOut />
   </Nav>
   </>
);
};

export function Navbar2 () {
    return(
        <>
        <Nav>
            <Bars />
            <NavMenu>
            <NavLink>
                Home
            </NavLink>
            <NavLink>
                Post
            </NavLink>
            </NavMenu>
            <h3>Shop Green</h3>
            <GoogleSignIn />
        </Nav>
        <h4> Please Sign in with Google to Continue.</h4>
        </>
    )
}

export function ShowBalance({email}){

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

//handles asynchronous query processing to refresh all the time
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

return(
    querySnapshot && querySnapshot.map(user => (
        <p>Current Balance: ${user.data.balance}.00</p>
    ))
)
}

 export default Navbar;
