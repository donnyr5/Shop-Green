import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

export default function AddItem() {
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (name === '') {
            return
        }
        const itemsCollRef = collection(db, 'items')
        addDoc(itemsCollRef, { name }).then(response => { 
            console.log(response) 
        }).catch(error => {
            console.log(error.message)
        })
        setName('')
    }
    return (
        <div>
            <h4>AddItem</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'> </label>
                <input id='name' type="text" value={name} onChange={e => setName(e.target.value)} />
                <button type='submit' >Add item</button>
            </form>
        </div>
    )
}