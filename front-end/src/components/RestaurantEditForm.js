import {useState, useEffect} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import axios from "axios";

export default function RestaurantEditForm() {
    let {id} = useParams();
    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";
    const [restaurantUpdate, setRestaurantUpdate] = useState({
        description: "",
        phoneNumber: "",
    });

    let {description, phoneNumber} = restaurantUpdate;
    
    const navigate = useNavigate();

    const handleText = (e) => setRestaurantUpdate({...restaurantUpdate, [e.target.id]: e.target.value});

    useEffect(() => {
        axios.get(`${herokuAPI}/restaurants/${id}`)
             .then(res => setRestaurantUpdate(res.data))
             .catch(error => console.log(error))
    }, [id]);

    const handleEdit = (e) => {
        e.preventDefault();
        axios.patch(`${herokuAPI}/restaurants/${id}`, restaurantUpdate)
             .then(res => navigate("/restaurants"))
             .catch(error => console.log(error.response.request._response))
    };

    return (
        <div>
            <form onSubmit={handleEdit}>
                <label htmlFor="description">DESCRIPTION</label>
                <textarea id = "description" value = {description} onChange = {handleText}></textarea>
                <br />
                <label htmlFor = "phoneNumber">PHONE NUMBER</label>
                <input id = "phoneNumber" value = {phoneNumber} type = "text" onChange={handleText} />
                
                <div>
                    <Link to = {`/restaurants/${id}`}><button>BACK</button></Link>
                    <button type="submit">UPDATE</button>
                </div>
            </form>
        </div>
    )
};