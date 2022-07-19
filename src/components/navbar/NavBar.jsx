import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li>
          <i className="fa-solid fa-house"></i>
        </li>
        <li>
          <i className="fa-solid fa-user-large"></i>
        </li>
        <li>
          <i className="fa-solid fa-briefcase"></i>
        </li>
        <li>
          <i className="fa-solid fa-chart-simple"></i>
        </li>
        <li>
          <i className="fa-solid fa-at"></i>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
