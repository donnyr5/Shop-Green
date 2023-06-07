import React, {  useEffect } from 'react';
import { histCollectionRef } from '../../firestore-collection';
import { getDocs, query, where, onSnapshot} from 'firebase/firestore';

export default function SellingHistory({email, items, setItems}) {
    const q = query(histCollectionRef, where("seller", "==", email))

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
                        
                    </tr>
                    <tr>
                        Description: {item.data.description} 
                    </tr>
                    <tr>Time of Purchase: {new Date(item.data.timeOfPurchase.seconds*1000).toLocaleString("en-US")}</tr>
                    <tr>
                        Sold to: {item.data.buyer}
                    </tr>
                </table>
            ))}
            </div>
        </>
    )
}