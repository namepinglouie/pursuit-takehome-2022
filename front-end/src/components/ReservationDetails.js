import {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

export default function ReservationDetails () {
    const [reservation, setReservation] = useState([]);
    let navigate = useNavigate();
    let {id} = useParams();
    let {createdAt, firstName, lastName, phoneNumber, email, time, numGuests, restaurantId} = reservation;

    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";

    useEffect(() => {
        axios.get(`${herokuAPI}/reservations/${id}`)
             .then(res => setReservation(res.data))
             .catch(error => console.log(error))
    });

    const handleDelete = () => {
        axios.delete(`${herokuAPI}/reservations/${id}`)
             .then(res => navigate("/reservations"))
             .catch(error => console.log(error))
    };

    return (
        <div>
            <div>
                <h3>ID: {id}</h3>
                <p>Created At: {createdAt}</p>
                <h4>FirstName: {firstName}</h4>
                <h4>LastName: {lastName}</h4>
                <p>#: {phoneNumber}</p>
                <h4>Email: {email}</h4>
                <h4>Time: {time}</h4>
                <h4>Number of Guests: {numGuests}</h4>
                <h4>Restaurant Id: {restaurantId}</h4>
            </div>
            <div>
                <Link to = {"/reservations"}><button>BACK</button></Link>
                <Link to = {`/reservations/${id}/edit`}><button>EDIT</button></Link>
                <button onClick = {handleDelete}>DELETE</button>
            </div>
        </div>
    );
};