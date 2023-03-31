import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import bottomGraphic from "../../Assets/Images/bottomGraphic.svg";
import "./home.css";
const Home = () => {
  return (
    <div className="page">
      <Navbar />
      <Footer />
      <img src={bottomGraphic} alt="Graphic" className="bottom-graphic non-draggable" />
    </div>
  );
};

export default Home;
