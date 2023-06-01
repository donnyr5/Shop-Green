import React, {useEffect, useState} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../firebase';


export default function ListMovies() {

    const [movies, setMovies] = useState([]);

useEffect(() => {           // so that it updates.  
    getMovies()
}, [])

useEffect(() => {           //for the console only
console.log(movies)
}, [movies])

    //used to retrieve from database. this is called when the component mounts
    function getMovies() {  
        const movieCollectionRef = collection(db, 'movies');
        getDocs(movieCollectionRef)
            .then(response => {
                console.log(response.docs)
                const movs = response.docs.map(doc => ({
                    data: doc.data(), //data is the data, where as ID is the 'document' in firebase
                    id: doc.id,
                }))
                setMovies(movs)
        }).catch(error => console.log(error.message))
    }

    return (
        <div>
            <button onClick={() => getMovies()}>Refresh Movies</button>
        <h1>ListMovies</h1>
            <ul>
                {movies.map(movie => (
                     <li key={movie.id}>{movie.data.name}</li>
                ))}
            </ul>
        </div>
    )
}