import React, { useState, useEffect } from "react"
import { getDocs } from "firebase/firestore";
import ListItems from '../components/ListItems';
import AddItem from '../components/AddItem';
import Searchbar from '../components/Searchbar';
import { itemCollectionRef } from '../firestore-collection';


const Home = () => {
    const [items, setItems] = useState([])
    const [searchResults, setSearchResults] = useState([])

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
                <ListItems searchResults={searchResults} />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'Center',
                    alignItems: 'Left',
                }}
            >
                <AddItem />
            </div>
        </>
    );
};


export default Home;
