import React from "react";
import logo from './images/logo.png';
import "../src/footer.css";


function Footer() {
    return (
        <footer>
            <img className="footer-logo" src={logo}/>
            <li>
                    <ul>
                        Doormat Navigation
                    </ul>
                    <ul>
                        <a href="#">HOME</a>
                    </ul>
                    <ul>
                        <a href="#">ABOUT</a>
                    </ul>
                    <ul>
                        <a href="#">MENU</a>
                    </ul>
                    <ul>
                        <a href="#">RESERVATIONS</a>
                    </ul>
                    <ul>
                        <a href="#">ORDER</a>
                    </ul>
                    <ul>
                        <a href="#">LOGIN</a>
                    </ul>
            </li>
            <li>
                    <ul>
                    Contact
                    </ul>
                    <ul>
                        <a href="#">Address</a>
                    </ul>
                    <ul>
                        <a href="#">Phone number</a>
                    </ul>
                    <ul>
                        <a href="#">Email</a>
                    </ul>
            </li>
            <li>
                    <ul>
                        Social media contact
                    </ul>
                    <ul>
                        <a href="#">Instagram</a>
                    </ul>
                    <ul>
                        <a href="#">facebook</a>
                    </ul>
                    <ul>
                        <a href="#">Email</a>
                    </ul>
            </li>

        </footer>
    )
}

export default Footer;