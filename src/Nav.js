import * as React from "react";
import "./App.css"

function Nav() {
    return (
      <div className="navbar">
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