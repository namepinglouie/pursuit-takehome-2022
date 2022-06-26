export default function Restaurant({restaurant}) {
    let {id, name, description, phoneNumber, openingTime, closingTime, location, cuisine, price, diningRestriction} = restaurant;

    return (
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
    );
};