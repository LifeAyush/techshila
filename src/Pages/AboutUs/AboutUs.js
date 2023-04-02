import React from "react";
import "./aboutUs.css";
import Navbar from "../../Components/Navbar/Navbar";
import Team from "../../Components/Team/Team";
import Footer from "../../Components/Footer/Footer";
import bottomGraphic from "../../Assets/Images/bottomGraphic.svg";

const AboutUs = () => {
  return (
    <div className="page">
      <Navbar />
      <div className="about-us-con">
        <Team />
      </div>
      <Footer />
      <img
        src={bottomGraphic}
        alt="Graphic"
        className="bottom-graphic non-draggable"
      />
    </div>
  );
};

export default AboutUs;
