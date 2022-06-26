import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

export default function RestaurantDetails() {
    const [restaurant, setRestaurant] = useState([]);
    let navigate = useNavigate();
    let {id} = useParams();
    let {name, description, phoneNumber, openingTime, closingTime, location, cuisine, price, diningRestriction} = restaurant;

    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";

    useEffect(() => {
        axios.get(`${herokuAPI}/restaurants/${id}`)
             .then(res => setRestaurant(res.data))
             .catch(error => console.log(error))
    });

    const handleDelete = () => {
        axios.delete(`${herokuAPI}/restaurants/${id}`)
             .then(res => navigate("/restaurants"))
             .catch(error => console.log(error))
    };

    return (
        <div>
            <div>
                <h1>{name}</h1>
                <h3>ID: {id}</h3>
                <p>Cuisine: {cuisine}</p>
                <p>Price: {price}</p>
                <p>#: {phoneNumber}</p>
                <p>Location: {location}</p>
                <p>Description: {description}</p>
                <p>Dining Restrictions: {diningRestriction}</p>
                <p>opening: {openingTime} || closing: {closingTime}</p>
            </div>
            <div>
                <Link to = {"/restaurants"}><button>BACK</button></Link>
                <Link to = {`/restaurants/${id}/edit`}><button>EDIT</button></Link>
                <button onClick = {handleDelete}>DELETE</button>
            </div>
        </div>
    )
};

// note that i can make an edit to a modal