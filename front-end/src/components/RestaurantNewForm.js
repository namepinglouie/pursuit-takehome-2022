import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function RestaurantNewForm() {
    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";

    const [restaurant, setRestaurant] = useState({
        name: "",
        description: "",
        phoneNumber: "",
        openingTime: "",
        closingTime: "",
        price: "",
        cuisine: "",
        location: "",
        diningRestriction: ""
    });

    const navigate = useNavigate();
    
    const handleText = (e) => setRestaurant({...restaurant, [e.target.id]: e.target.value});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${herokuAPI}/restaurants`, restaurant)
             .then(res => navigate("/restaurants"))
             .catch(error => console.log(error))
    };
    
    let {name, description, phoneNumber, openingTime, closingTime, price, cuisine, location, diningRestriction} = restaurant;
    
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="name">NAME</label>
                <input id = "name" value = {name} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="description">DESCRIPTION</label>
                <textarea id = "description" value = {description} onChange = {handleText}></textarea>
                <br />
                <label htmlFor = "phoneNumber">PHONE NUMBER</label>
                <input id = "phoneNumber" value = {phoneNumber} type = "text" onChange={handleText} />
                <br />
                <label htmlFor="openingTime">OPENING TIME</label>
                <input id = "openingTime" value = {openingTime} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="closingTime">CLOSING TIME</label>
                <input id = "closingTime" value = {closingTime} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="price">PRICE</label>
                <input id = "price" value = {price} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="cuisine">CUISINE</label>
                <input id = "cuisine" value = {cuisine} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="location">LOCATION</label>
                <input id = "location" value = {location} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="diningRestriction">DINING RESTRICTION</label>
                <input id = "diningRestriction" value = {diningRestriction} type = "text" onChange = {handleText} />

                
                <div><button type="submit">SUBMIT</button></div>
            </form>
        </div>
    )

};

// restaurant new form + restaurant edit form : make 2 radio buttons for dining restrictions