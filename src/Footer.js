import React from "react";
import logo from './images/logo.png';

function Footer() {
    return (
        <footer>
            <img src={logo}/>
            <p>Doormat Navigation</p>
            <li>
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
            <p>Contact</p>
            <li>
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
            <p>Social media contact</p>
            <li>
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