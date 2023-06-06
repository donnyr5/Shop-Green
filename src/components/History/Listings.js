import React, { useState, useEffect } from 'react';
import { ShowBalance } from '../Navbar';
import { itemCollectionRef, histCollectionRef } from '../../firestore-collection';
import { collection, doc, deleteDoc, getDocs, updateDoc, query, where, onSnapshot} from 'firebase/firestore';

export default function Listings({email, items, setItems}) {
    const q = query(itemCollectionRef, where("owner", "==", email))

    useEffect(() => {           // so that it updates.  
        const unsubscribe = onSnapshot(itemCollectionRef, snapshot => {
            setItems(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
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
                setItems(itms)
            }).catch(error => console.log(error.message))
    }, [])

    return (
        <>
        <h1>Listings</h1>
        <div>
            {items && items.map(item => (
                <table key={item.id}>
                    <tr>
                        <td className="name">{item.data.name}</td>
                        <td className="price">Price: ${item.data.price}</td>
                        
                    </tr>
                    <tr>
                        Description: {item.data.description} 
                    </tr>
                    <tr>Posted by: {item.data.owner}</tr>
                </table>
            ))}
            </div>
        </>
    )
}