import React from 'react'
import {useState} from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src=""  className="logo-image" />
        
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li>          <NavLink to="/">Home</NavLink>
        </li>
        <li>          <NavLink to="/AboutUs">AboutUs</NavLink>
        </li>
        <li>          <NavLink to="/Appointment">Book Appointment</NavLink>
        </li>
        <li>          <NavLink to="/Data">Admin</NavLink>
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="fas fa-times"></i> // Close icon
        ) : (
          <i className="fas fa-bars"></i> // Hamburger icon
        )}
      </button>
    </nav>
  );
}
export default Navbar