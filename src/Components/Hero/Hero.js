import React from "react";
import "./hero.css";
import wave from "../../Assets/Images/wave.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-bg">
        <div className="hero-bg-left" />
        <div className="hero-bg-right" />
        <img src={wave} alt="Waves" className="hero-bg-waves" />
        <div className="hero-bg-overlay" />
      </div>
      <div className="hero-content">
        <div className="hero-title">TechShila</div>
        <div className="hero-sub-title">INTER BHAWAN TECH MEET V1.0</div>
      </div>
    </div>
  );
};

export default Hero;
