import "./Searchbar.css"
import { ShowBalance } from "./Navbar";

const Searchbar = ({ items, setSearchResults, email}) => {

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
            <ShowBalance email={email} />
            <input
                type="text"
                placeholder="Search"
                onChange={handleChange}
            />
    </div>
);
}

export default Searchbar;