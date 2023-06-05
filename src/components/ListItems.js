import "./ListItems.css"
import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { itemCollectionRef, userCollectionRef } from '../firestore-collection';
import {collection, doc, deleteDoc, getDocs, updateDoc, query, where} from 'firebase/firestore';
import { db } from '../firebase';

export default function ListItems({ searchResults, email}) {


    // useEffect(() => {           // so that it updates.  
    //     const unsubscribe = onSnapshot(data, snapshot => {
    //         setItems(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
    //     })

    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])

    // useEffect(() => {           //for the console only
    // console.log(items)
    // }, [items])

    //used to retrieve from database. this is called when the component mounts
    // function getMovies() {  
    //     const movieCollectionRef = collection(db, 'movies');
    //     getDocs(movieCollectionRef)
    //         .then(response => {
    //             console.log(response.docs)
    //             const movs = response.docs.map(doc => ({
    //                 data: doc.data(), 
    //                 id: doc.id,
    //             }))
    //             setMovies(movs)
    //     }).catch(error => console.log(error.message))
    // }

    function deleteItem(id) {
       const docRef = doc(db, 'items', id)
        deleteDoc(docRef).then( () => console.log ('Document deleted')).catch(error => console.log(error.message))
    }

    async function purchaseItem(email, item){
    
        const buyer = query(userCollectionRef, where("email", "==", email))
        const querySnapshot = await getDocs(buyer)
        querySnapshot.forEach(docu => {
            const docRef = doc(db, 'users', docu.id)
            const buyerNewBalance = docu.data().balance - item.data.price
            if (buyerNewBalance < 0) 
                alert("Not enough balance") 
            else 
                updateDoc(docRef, {balance: buyerNewBalance})
        })
        
        const seller = query(userCollectionRef, where("email", "==", item.data.owner))
        const querySnapShot = await getDocs(seller)
        querySnapShot.forEach(docu => {
            const docRef = doc(db, 'users', docu.id)
            const sellerNewBalance = docu.data().balance + item.data.price
            updateDoc(docRef, {balance: sellerNewBalance})
        }) 
    }

    return (
        <div>
            {searchResults && searchResults.map(item => (
                <table key={item.id}>
                    <tr>
                        <td className="name">{item.data.name}</td>
                        <td className="price">Price: ${item.data.price}</td>
                        {(email === item.data.owner) ? <button onClick={() => deleteItem(item.id)}>Delete</button> : <button onClick={() => purchaseItem(email, item)}> Purchase </button>}
                        
                    </tr>
                    <tr>
                        Description: {item.data.description} 
                    </tr>
                    <tr>Posted by: {item.data.owner}</tr>
                </table>
            ))}
        </div>
    )
}