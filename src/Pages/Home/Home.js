import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Intro from "../../Components/Intro/Intro";
import Footer from "../../Components/Footer/Footer";
import bottomGraphic from "../../Assets/Images/bottomGraphic.svg";
import "./home.css";
import Sponsors from "../../Components/Sponsors/Sponsors";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Intro />
      <div className="home-content">
        <Sponsors />
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

export default Home;
