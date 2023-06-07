import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { Button2 } from '../components/GoogleLogin';
import { itemCollectionRef } from '../firestore-collection';

export default function AddItem(props) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    let owner = props.email;

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
        
        addDoc(itemCollectionRef, { name, price, description, owner}).then(response => { 
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
        <div className="addItem">
            <h4>Sell a Plant on Shop Green</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'> </label>
                <div />
                <input id='name' type="text" value={name} onChange={e => setName(e.target.value)} /> Type of Plant
                <div />
                {/* Firebase doesn't support decimal numbers due to imprecision with rounding.*/}
                <input id='price' type="number" value={price} onChange={e => setPrice(parseInt(e.target.value))  } /> Listing Price (a positive integer)
                <div />
                <input id='description' type="text" value={description} onChange={e => setDescription(e.target.value)} /> Plant Description (species, size, color, etc.)
                <div />
                <Button2 type='submit' >Create Item</Button2>
            </form>
        </div>
    )
}