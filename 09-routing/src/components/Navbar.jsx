import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          {/* Load components based on the path hit */}
          {/* DO NOT USE ANCHOR TAG in REACT beacuse it reloads whole page.*/}
          {/* Use Link or NavLink instead */}
          {/* NavLink has isActive link attached, so we can use this for functionality */}
          <Link to="/">Home</Link>
        </li>
        <li>
        {/* Click to see the difference of isActive*/}
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
