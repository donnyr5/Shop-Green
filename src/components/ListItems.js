
export default function ListItems({searchResults}) {


// useEffect(() => {           // so that it updates.  
//     const unsubscribe = onSnapshot(data, snapshot => {
//         setItems(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() })))
//     })

//     return () => {
//         unsubscribe()
//     }
// }, [])

// useEffect(() => {           //for the console only
// console.log(items)
// }, [items])

    //used to retrieve from database. this is called when the component mounts
    // function getMovies() {  
    //     const movieCollectionRef = collection(db, 'movies');
    //     getDocs(movieCollectionRef)
    //         .then(response => {
    //             console.log(response.docs)
    //             const movs = response.docs.map(doc => ({
    //                 data: doc.data(), //data is the data, where as ID is the 'document' in firebase
    //                 id: doc.id,
    //             }))
    //             setMovies(movs)
    //     }).catch(error => console.log(error.message))
    // }
    
    // function deleteItem(id) {
    //     const docRef = doc(db, 'items', id)
    //     deleteDoc(docRef).then( () => console.log ('Document deleted')).catch(error => console.log(error.message))
    // }

    return (
        <div>
            <ul>
                {searchResults && searchResults.map(item => (
                     <li key={item.id}>{item.data.name}
                     {/* <button onClick={() => deleteItem(item.id)}>delete</button> */}
                     </li>
                ))}
            </ul>
        </div>
    )
}