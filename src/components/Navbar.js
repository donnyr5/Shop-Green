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


const Navbar = ({email}) => {
return (
   <>
   <Nav>
       <Bars />

       <NavMenu>
       <NavLink to='/' activeStyle>
           Home
       </NavLink>
       <NavLink to='/shop' activeStyle>
           List an Item
       </NavLink>
       <ShowBalance email={email} />
       </NavMenu>
       <GoogleSignOut />
   </Nav>
   </>
);
};

function ShowBalance({email}){

const [balance, setBalance] = useState('')

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

return(
    querySnapshot && querySnapshot.map(user => (
        <Button2>Current Balance: {user.data.balance}</Button2>
    ))
)

}


// async function fetchBalance(email){
    
//     const [balance, setBalance] = useState('')
//     const buyer = query(userCollectionRef, where("email", "==", email))
//     const querySnapshot = await getDocs(buyer)
//     querySnapshot.forEach(docu => {
//         const docRef = doc(db, 'users', docu.id)
//         setBalance(docu.data().balance)
//     })
// }

 export default Navbar;
