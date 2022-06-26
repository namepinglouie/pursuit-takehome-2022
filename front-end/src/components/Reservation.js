import {Link} from "react-router-dom";

export default function Reservation({reservation}) {
    let {id, createdAt, firstName, lastName, phoneNumber, email, time, numGuests, restaurantId} = reservation;

    return (
        <div>
            <Link to = {`/reservations/${id}`}>
                <h3>ID: {id}</h3>
                <p>Created At: {createdAt}</p>
                <h4>FirstName: {firstName}</h4>
                <h4>LastName: {lastName}</h4>
                <p>#: {phoneNumber}</p>
                <h4>Email: {email}</h4>
                <h4>Time: {time}</h4>
                <h4>Number of Guests: {numGuests}</h4>
                <h4>Restaurant Id: {restaurantId}</h4>
            </Link>
        </div>
    )
};