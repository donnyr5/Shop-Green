import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';
import {GoogleSignIn, GoogleSignOut} from '../components/GoogleLogin';
import { query, where, onSnapshot, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { userCollectionRef } from '../firestore-collection';

const Title2 = styled.h1`
  font-size: 2em;
  text-align: center;
  font-family: 'Eczar', serif;
  margin: 0px 37px 0px 0px;
`;
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  font-family: 'Eczar', serif;
  margin: 0px 170px 0px 0px;
`;

const Navbar = ({email}) => {
return (
   <>
   <Nav>
       <Bars />
       <NavMenu>
       <NavLink to='' activeStyle>
           Home
       </NavLink>
       <NavLink to='/post' >
           Post 
       </NavLink>
       <NavLink to='/about' >
            About  
         </NavLink>
       <NavLink to='/profile'>
           Profile
        </NavLink>
       </NavMenu>
       <Title >Shop Green</Title>
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
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/'>
                Post
            </NavLink>
             <NavLink to='/about'>
                About
             </NavLink>
            <NavLink to='/'>
                Profile
            </NavLink>
            </NavMenu>
            <Title2 >Shop Green</Title2>
            <GoogleSignIn />
        </Nav>
        </>
    )
}

export function ShowBalance({email}){

const q = query(userCollectionRef, where("email", "==", email));
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
