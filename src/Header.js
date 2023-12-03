import React from "react";
import logo from "./images/logo.png";
import "./header.css";

function Header() {
    return (
        <header className="Header">
            <img className="logo" src={logo}/>
        </header>
    )
}

export default Header;