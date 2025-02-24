import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">Turf Booking</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#turfs">Turfs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
