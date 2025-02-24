import React, { useEffect, useState } from "react";
import "./App.css";

const Navbar = () => (
  <nav className="nav-container">
    <div className="logo">Turf Booking</div>
    <ul className="nav-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#turfs">Turfs</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

const Hero = () => (
  <section id="hero">
    <h1>Book Your Turf Today!</h1>
    <p>Find the best turfs near you.</p>
    <a href="#turfs" className="cta-btn">Book Now</a>
  </section>
);

const Turfs = () => {
  useEffect(() => {
    document.querySelectorAll(".turf-card").forEach(card => {
      card.addEventListener("mouseover", () => {
        card.classList.add("hover");
      });
      card.addEventListener("mouseout", () => {
        card.classList.remove("hover");
      });
    });
  }, []);

  return (
    <section id="turfs" className="turfs">
      <h2>Available Turfs</h2>
      <div className="turf-grid">
        <div className="turf-card">
          <img src="/assets/turf_icon.webp" alt="Turf" />
          <div className="turf-info">
            <h3>Green Field</h3>
            <p>Best turf for your game.</p>
            <button className="cta-btn" onClick={() => alert("Booking will be available later.")}>Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact">
    <h2>Contact Us</h2>
    <p>Email: support@turfbooking.com</p>
  </section>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 Turf Booking. All rights reserved.</p>
  </footer>
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Turfs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
