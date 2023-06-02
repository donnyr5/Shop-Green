import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

export default function AddItem(props) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState()
    const [description, setDescription] = useState('')
    let owner = props.email;


    function handleSubmit(e) {
        e.preventDefault()
        if (name === '' || price === '' || price < 0 || description === '') {
            console.log("invalid entry!")
            return
        }
        const itemsCollRef = collection(db, 'items')
        addDoc(itemsCollRef, { name, price, description, owner}).then(response => { 
            console.log(response) 
        }).catch(error => {
            console.log(error.message)
        })
        setName('')
        setPrice(0)
        setDescription('')
    }
    return (
        <div>
            <h4>Post an Item for Sale</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'> </label>
                <input id='name' type="text" value={name} onChange={e => setName(e.target.value)} /> name
                <div />
                <input id='price' type="number" value={price} onChange={e => setPrice(parseInt (e.target.value) )} /> price
                <div />
                <input id='description' type="text" value={description} onChange={e => setDescription(e.target.value)} /> description
                <div />
                <button type='submit' >Create Item</button>
            </form>
        </div>
    )
}