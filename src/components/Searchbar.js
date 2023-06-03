import "./Searchbar.css"

const Searchbar = ({ items, setSearchResults }) => {

    // getDocs(itemCollectionRef)
    //     .then(response => {
    //         console.log(response.docs)
    //         const itms = response.docs.map(doc => ({
    //             data: doc.data(),
    //             id: doc.id,
    //         }))
    //         setItems(itms)
    //     }).catch(error => console.log(error.message))

    const handleChange = (e) => {
        e.preventDefault();
        if (!e.target.value)
            return setSearchResults(items)
        const filtered = items.filter(item => {
            return item.data.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setSearchResults(filtered)
    }

return (
    <div className="search">
            <input
                type="text"
                placeholder="Search"
                onChange={handleChange}
            />
    </div>
);
}

export default Searchbar;