import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ReservationNewForm() {
    const herokuAPI = "https://namepinglouie-takehome-api.herokuapp.com/api";
    const [reservation, setReservation] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        time: "",
        numGuests: "",
        restaurantId: ""
    });

    const navigate =  useNavigate();

    const handleText = (e) => setReservation({...reservation, [e.target.id]: e.target.value});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${herokuAPI}/reservations`, reservation)
             .then(res => navigate("/reservations"))
             .catch(error => console.log(error))
    };

    let {firstName, lastName, phoneNumber, email, time, numGuests, restaurantId} = reservation;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">FIRST NAME</label>
                <input id = "firstName" value = {firstName} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="lastName">LAST NAME</label>
                <input id = "lastName" value = {lastName} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="phoneNumber">PHONE NUMBER</label>
                <input id = "phoneNumber" value = {phoneNumber} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="email">EMAIL</label>
                <input id = "email" value = {email} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="time">TIME</label>
                <input id = "time" value = {time} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="numGuests">Number Of Guests</label>
                <input id = "numGuests" value = {numGuests} type = "text" onChange = {handleText} />
                <br />
                <label htmlFor="restaurantId">RESTAURANT ID</label>
                <input id = "restaurantId" value = {restaurantId} type = "text" onChange = {handleText} />
                
                <div><button type="submit">SUBMIT</button></div>
            </form>
        </div>
    );
};