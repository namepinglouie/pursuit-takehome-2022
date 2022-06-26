import {Link} from "react-router-dom";

export default function Navbar() {
    return(
        <nav id="navigation">
            <p className="nav-title">&#123; Restaurant App &#125;</p>
            <div>
                <Link to = "/">HOME</Link>
                <Link to = "/restaurants">RESTAURANTS</Link>
                <Link to = "/restaurants/new">NEW RESTAURANT</Link>
                <Link to = "/reservations">RESERVATIONS</Link>
                <Link to = "/reservations/new">NEW RESERVATION</Link>
            </div>
        </nav>
    );
};