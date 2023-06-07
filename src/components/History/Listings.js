import React, { useEffect } from 'react';
import { itemCollectionRef } from '../../firestore-collection';
import { getDocs, query, where, onSnapshot} from 'firebase/firestore';
import { Button2 } from '../GoogleLogin';
import deleteItem from '../DeleteItem';

export default function Listings({email, items, setItems}) {

    const q = query(itemCollectionRef, where("owner", "==", email))

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
        <div>
            {items && items.map(item => (
                <table key={item.id}>
                    <tr>
                        <td className="name">{item.data.name}</td>
                        <td className="price">Price: ${item.data.price}</td>
                        <Button2 onClick={() => deleteItem(item.id)}>Delete</Button2>
                    </tr>
                    <tr>
                        Description: {item.data.description} 
                    </tr>
                </table>
            ))}
            </div>
        </>
    )
}