import React, { useEffect } from "react";
import "./Turfs.css";

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
            <button className="cta-btn" onClick={() => alert("Booking will be available later.")}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Turfs;
