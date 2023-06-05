import "./ListItems.css"
import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { itemCollectionRef } from '../firestore-collection';
import {collection, doc, deleteDoc} from 'firebase/firestore';
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
    //                 data: doc.data(), //data is the data, where as ID is the 'document' in firebase
    //                 id: doc.id,
    //             }))
    //             setMovies(movs)
    //     }).catch(error => console.log(error.message))
    // }

    function deleteItem(id) {
       const docRef = doc(db, 'items', id)
        deleteDoc(docRef).then( () => console.log ('Document deleted')).catch(error => console.log(error.message))
 }

    return (
        <div>
            {searchResults && searchResults.map(item => (
                <table key={item.id}>
                    <tr>
                        <td className="name">{item.data.name}</td>
                        <td className="price">Price: ${item.data.price}</td>
                        {(email === item.data.owner) ? <button onClick={() => deleteItem(item.id)}>Delete</button> : <button> Purchase </button>}
                        
                    </tr>
                    <tr>
                        Description: {item.data.description} 
                    </tr>
                </table>
            ))}
        </div>
    )
}