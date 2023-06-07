import React, {useState} from 'react';
import { ShowBalance } from '../components/Navbar';
import SellingHistory from '../components/History/SellingHistory';
import PurchaseHistory from '../components/History/PurchaseHistory';
import Listings from '../components/History/Listings';


const Profile = (props) => {
    const [items, setItems] = useState([])
    const [option, setOption] = useState([])



    const handleChange = (event) => {
        setItems([])
        setOption(event.target.value)
    }

    const display = () => {
        if (option === "Selling History")
            return <SellingHistory email={props.email} items={items} setItems={setItems} />
        if (option === "Purchase History")
            return <PurchaseHistory email={props.email} items={items} setItems={setItems} />
        if (option === "Listings")
            return <Listings email={props.email} items={items} setItems={setItems} />
    }
    return (
        <>
            <div>
                <h1>User: {props.email}</h1>
            </div>
            <div>
                <h1><ShowBalance email={props.email} /></h1>
            </div>
            <label>
                <select onChange={handleChange}>
                    <option value disabled selected> Choose option </option>
                    <option value="Selling History">Selling History</option>
                    <option value="Purchase History">Purchase History</option>
                    <option value="Listings">Listings</option>
                </select>
            </label>
            <h1> {option}</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'Center',
                    alignItems: 'Center',
                }}>
                {display()}
            </div>

        </>
    );


};



export default Profile;