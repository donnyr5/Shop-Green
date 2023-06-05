import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import {collection} from 'firebase/firestore';
import { db } from '../firebase';

export default function AddItem(props) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    let owner = props.email;
    // console.log(props.email);


    function handleSubmit(e) {
        e.preventDefault()

        if (name === '' || price < 0 || description === '' ||  price === '' || price === "NaN") {
            alert("Invalid Entry! Name: nonempty, Price: positive integer, Description: nonempty.")
            setPrice('')
            return
        }   
        var str = price.toString();
        if (str === "" || str === null || str === "NaN"){
            alert("Invalid Entry! Name: nonempty, Price: positive integer, Description: nonempty.")
            setPrice('')
            return
        }
        
        const itemsCollRef = collection(db, 'items')
        addDoc(itemsCollRef, { name, price, description, owner}).then(response => { 
            console.log(price) 
        }).catch(error => {
            console.log(error.message)
        })
        setName('')
        setPrice('')
        setDescription('')
        alert("Item posted to Shop Green!")
    }
    return (
        <div>
            <h4>Post an Item for Sale</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'> </label>
                <input id='name' type="text" value={name} onChange={e => setName(e.target.value)} /> name
                <div />
                <input id='price' type="number" value={price} onChange={e => setPrice(parseInt(e.target.value))  } /> price: positive integer.
                <div />
                <input id='description' type="text" value={description} onChange={e => setDescription(e.target.value)} /> description
                <div />
                <button type='submit' >Create Item</button>
            </form>
        </div>
    )
}