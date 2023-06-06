import React, {useState, useEffect} from 'react';
import { ShowBalance } from '../components/Navbar';
import { itemCollectionRef, histCollectionRef } from '../firestore-collection';
import {collection, doc, deleteDoc, getDocs, updateDoc, query, where} from 'firebase/firestore';
import SellingHistory from '../components/History/SellingHistory';
import PurchaseHistory from '../components/History/PurchaseHistory';
import Listings from '../components/History/Listings';

const Profile = (props) => {
    const [items, setItems] = useState([])
    const [option, setOption] = useState([])

    // useEffect(() => {           // so that it updates.  
    //     const unsubscribe = onSnapshot(histCollectionRef, snapshot => {
    //         setItems(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
    //     })
    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])
    
    // const q = query(histCollectionRef, where("buyer","==",props.email))

    // useEffect(() => {
    //     getDocs(q)
    //     .then(response => {
    //         console.log(response.docs)
    //         const itms = response.docs.map(doc => ({
    //             data: doc.data(),
    //             id: doc.id,
    //         }))
    //         setItems(itms)
    //     }).catch(error => console.log(error.message))
    // }, [])

    // async function showListed(email) {
    //     const items = query(itemCollectionRef, where("owner","==",email))
    //     const querySnapShot = await getDocs(items)
    //     const itms = querySnapShot.docs.map(doc => ({
    //         data: doc.data(),
    //         id: doc.id
    //     }))
    //     setItems(itms)
    // }

    // async function purchaseHistory(email){
    //     const querySnapShot = await getDocs(items)
    //     const itms = querySnapShot.docs.map(doc => ({
    //         data: doc.data(),
    //         id: doc.id
    //     }))
    //     setItems(itms)
    // }

    // async function sellingHistory(email){
    //     const items = query(histCollectionRef, where("seller","==",email))
    //     const querySnapShot = await getDocs(items)
    //     const itms = querySnapShot.docs.map(doc => ({
    //         data: doc.data(),
    //         id: doc.id
    //     }))
    //     setItems(itms)
    // }

    const handleChange = (event)=> {
        setOption(event.target.value)
    }

    const display = () => {
        if (option === "sellingHistory")
            return <SellingHistory email={props.email} items={items} setItems={setItems} />
        if (option === "purchaseHistory")
            return <PurchaseHistory email={props.email} items={items} setItems={setItems}/>
        if (option === "listings")
            return <Listings email={props.email} items={items} setItems={setItems}/>
    }
    return (
        <>
            <div>
                <h1>User: {props.email}</h1>
            </div>
            <div>
                <h1><ShowBalance email={props.email} /></h1>
            </div>
            <label>
            <select onChange={handleChange}>
                <option value disabled selected> Choose option </option>
                <option value="sellingHistory">Selling History</option>
                <option value="purchaseHistory">Purchase History</option>
                <option value="listings">Listings</option>
            </select>
            </label>
            <div>
                {display()}
            </div>
            
        </>
    );

   
};



export default Profile;