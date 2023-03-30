import React from "react";
import "./footer.css";
import arrow from "../../Assets/Images/arrow.svg";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-title">
        Brought to you by
        <br />
        Students’ Technical Council
      </h1>
      <div className="footer-flex">
        <div className="footer-address">
          <span className="footer-sub-text">Students’ Activity Centre</span>
          <span className="footer-sub-text">Opp. Kasturba Bhawan</span>
          <span className="footer-sub-text">IIT Roorkee</span>
          <span className="footer-sub-text">Roorkee, Uttarakhand - 247667</span>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-flex">
            <img src={arrow} className="footer-contact-flex-icon" alt="#" />
            <a
              href="mailto:gensec.technical@iitr.ac.in"
              className="footer-sub-text"
            >
              gensec.technical@iitr.ac.in
            </a>
          </div>
          <div className="footer-contact-flex">
            <img src={arrow} className="footer-contact-flex-icon" alt="#" />
            <div className="footer-sub-text">
              Ashutosh Singh: +91 95602 83080
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
