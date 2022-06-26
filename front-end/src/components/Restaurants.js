import axios from "axios";
import {useState, useEffect} from "react";
import Restaurant from "./Restaurant.js";

export default function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");

    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";

    useEffect(() => {
        axios.get(`${herokuAPI}/restaurants`)
             .then(res => setRestaurants(res.data.restaurants))
             .catch(error => console.log(error))
    });

    let handleSearch = (e) => setSearchRestaurant(e.target.value);

    const filterRestaurant = !searchRestaurant ? restaurants
                                               : restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchRestaurant.toLowerCase()));
    
    const mapFilterRestaurant = filterRestaurant.map((restaurant) => <Restaurant key = {restaurant.id} restaurant = {restaurant} />);
    
    return (
        <div>
            <input type = "text" value = {searchRestaurant} onChange = {handleSearch} placeholder = "restaurant search" />
            {mapFilterRestaurant}
        </div>
    );
};