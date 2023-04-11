import React from "react";
import { useLocation } from "react-router-dom";
import "./hero.css";
import wave from "../../Assets/Images/wave.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Hero = ({ title, subtitle }) => {
  const locator = useLocation();
  return (
    <div className="hero">
      <div className="hero-bg">
        <div className="hero-bg-left" />
        <div className="hero-bg-right" />
        <img src={wave} alt="Waves" className="hero-bg-waves" />
        <div className="hero-bg-overlay" />
      </div>
      <div className="hero-content">
        <div className="hero-header">
          <div className="hero-title">{title}</div>
          <div className="hero-sub-title">{subtitle}</div>
        </div>
        {locator.pathname === "/" ? (
          <div className="hero-cta">
            <PrimaryButton text="VIEW PROBLEM STATEMENTS" />
            <div className="scroll-ani-flex">
              <div className="scroll-track">
                <div className="scroll-thumb" />
              </div>
              <span className="scroll-ani-text">Scroll</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Hero;
