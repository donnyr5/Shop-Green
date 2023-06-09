import React, { useState, useEffect } from "react"
import { getDocs, onSnapshot} from "firebase/firestore";
import ListItems from '../components/ListItems';
import Searchbar from '../components/Searchbar';
import { query, where, orderBy} from 'firebase/firestore';
import { itemCollectionRef } from '../firestore-collection';


const Home = (props) => {
    const [items, setItems] = useState([])
    const [searchResults, setSearchResults] = useState([])


    // const q = query(itemCollectionRef, where("owner", "!=", props.email), orderBy("owner") )

    const q = query(itemCollectionRef, orderBy("name"))


    useEffect(() => {           // so that it updates.  
        const unsubscribe = onSnapshot(q, snapshot => {
            var docs = snapshot.docs.map(doc => ({id: doc.id, data: doc.data()}))
            docs = docs.filter(doc => {return doc.data.owner !== props.email})
            setSearchResults(docs)
        })
    
        return () => {
            unsubscribe()
        }
    }, [])

    useEffect(() => {
        getDocs(q)
        .then(response => {
            console.log(response.docs)
            let itms = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id,
            }))
            itms = itms.filter(item => {return item.data.owner !== props.email})
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
                <Searchbar email={props.email} items={items} setSearchResults={setSearchResults}/>
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
        </>
    );
};


export default Home;
