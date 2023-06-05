import React, { useState, useEffect } from "react"
import { getDocs, onSnapshot} from "firebase/firestore";
import ListItems from '../components/ListItems';
import AddItem from '../components/AddItem';
import Searchbar from '../components/Searchbar';
import { itemCollectionRef } from '../firestore-collection';


const Home = (props) => {
    const [items, setItems] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {           // so that it updates.  
    const unsubscribe = onSnapshot(itemCollectionRef, snapshot => {
        setSearchResults(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
    })

    return () => {
        unsubscribe()
    }
}, [])
    useEffect(() => {
        getDocs(itemCollectionRef)
        .then(response => {
            console.log(response.docs)
            const itms = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id,
            }))
            setItems(itms)
            setSearchResults(itms)
        }).catch(error => console.log(error.message))
    }, [])

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'Center',
                    alignItems: 'Center',
                }}>
                <Searchbar items={items} setSearchResults={setSearchResults}/>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'Center',
                    alignItems: 'Center',
                }}
            >
                <ListItems searchResults={searchResults} email={props.email}/>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'Center',
                    alignItems: 'Left',
                }}
            >

            </div>
        </>
    );
};


export default Home;
