import * as React from "react";
import "./nav.css";
import logo from './images/logo.png';

function Nav() {
    return (
      <div className="navbar">
        <img src={logo}/>
        <ul>
          <li>
              <a href="#">HOME</a>
          </li>
          <li>
              <a href="#">ABOUT</a>
          </li>
          <li>
              <a href="#">MENU</a>
          </li>
          <li>
              <a href="#">RESERVATION</a>
          </li>
          <li>
                <a href="#">ORDER ONLINE</a>
          </li>
          <li>
                <a href="#">LOGIN</a>
          </li>
        </ul>
    </div>
    );
}

export default Nav;