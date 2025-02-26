import { Link } from "react-router-dom";

function Header() {


    return (

        <nav className="#4db6ac teal lighten-2">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo center">React Shop</Link>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;