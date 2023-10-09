import React from "react";
import logo from "./images/logo.png";
import Nav from "./Nav";
import "./header.css";

function Header() {
    return (
        <header className="Header">
            <img className="logo" src={logo}/>
            <Nav/>
        </header>
    )
}

export default Header;