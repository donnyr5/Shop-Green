import React, { useState, useEffect } from 'react';
import { ShowBalance } from '../Navbar';
import { itemCollectionRef, histCollectionRef } from '../../firestore-collection';
import { collection, doc, deleteDoc, getDocs, updateDoc, query, where, onSnapshot} from 'firebase/firestore';

export default function PurchaseHistory({email, items, setItems}) {

    const q = query(histCollectionRef, where("buyer", "==", email))

    useEffect(() => {           // so that it updates.  
        const unsubscribe = onSnapshot(q, snapshot => {
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
        <h1>Purchase History</h1>
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
                    <tr>Time of Purchase: {new Date(item.data.timeOfPurchase.seconds*1000).toLocaleString("en-US")}</tr>
                    <tr>
                        Purchased from: {item.data.seller}
                    </tr>
                </table>
            ))}
            </div>
        </>
    )
}