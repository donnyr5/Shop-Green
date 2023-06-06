import "./ListItems.css"
import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { itemCollectionRef, userCollectionRef, histCollectionRef } from '../firestore-collection';
import {collection, doc, deleteDoc, getDocs, updateDoc, query, where, serverTimestamp} from 'firebase/firestore';
import { db } from '../firebase';
import { Button2 } from "./GoogleLogin";
import { getCurrentDate } from "./History/getCurrentDate";
//import deleteItem from "./DeleteItem";


export default function ListItems({ searchResults, email}) {


    async function purchaseItem(email, item){
    
        let pass = 0;
        const buyer = query(userCollectionRef, where("email", "==", email))
        const querySnapshot = await getDocs(buyer)
        querySnapshot.forEach(docu => {
            const docRef = doc(db, 'users', docu.id)
            const buyerNewBalance = docu.data().balance - item.data.price
            if (buyerNewBalance < 0) {
                alert("Insuffecient funds: you only have $" + docu.data().balance) 
            } else {
                updateDoc(docRef, 
                    {balance: buyerNewBalance})
                pass = pass+1;
            }
        })
        
        if (pass)   //if buyer has enough money,
    {   const seller = query(userCollectionRef, where("email", "==", item.data.owner))
        const querySnapShot = await getDocs(seller)
        querySnapShot.forEach(docu => {
            const docRef = doc(db, 'users', docu.id)
            const sellerNewBalance = docu.data().balance + item.data.price
            updateDoc(docRef, {balance: sellerNewBalance})
        
        }) 

    
         //need to remove item from databse + add it to history of buyer.
         addDoc(histCollectionRef, { name: item.data.name, description: item.data.description, price: item.data.price, seller: item.data.owner, buyer: email, timeOfPurchase: serverTimestamp()})
         deleteItem(item.id);
         alert("Purchase Successful!")
    }
    }
    return (
        <div>
            {searchResults && searchResults.map(item => (
                <table key={item.id}>
                    <tr>
                        <td className="name">{item.data.name}</td>
                        <td className="price">Price: ${item.data.price}</td>
                        {<Button2 onClick={() => purchaseItem(email, item)}> Purchase </Button2>}
                        
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