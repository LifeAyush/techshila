import React from "react";
import "./sponsors.css";
import Marquee from "react-fast-marquee";
import sponsor1 from "../../Assets/Images/sponsor1.svg";

const Sponsors = () => {
  return (
    <div className="home-component-flex">
      <h1 className="title">Our Sponsors</h1>
      <div className="spon-grid">
        <img src={sponsor1} alt="Tracable AI" className="spon-image" />
        <img src={sponsor1} alt="Tracable AI" className="spon-image" />
        <img src={sponsor1} alt="Tracable AI" className="spon-image" />
        <img src={sponsor1} alt="Tracable AI" className="spon-image" />
        <img src={sponsor1} alt="Tracable AI" className="spon-image" />
        <img src={sponsor1} alt="Tracable AI" className="spon-image" />
        <img src={sponsor1} alt="Tracable AI" className="spon-image" />
        <img src={sponsor1} alt="Tracable AI" className="spon-image" />
      </div>
      <div className="spon-marquee">
        <Marquee pauseOnClick={true} speed={40} gradient={false}>
          <img src={sponsor1} alt="Tracable AI" className="spon-image" />
          <img src={sponsor1} alt="Tracable AI" className="spon-image" />
          <img src={sponsor1} alt="Tracable AI" className="spon-image" />
          <img src={sponsor1} alt="Tracable AI" className="spon-image" />
          <img src={sponsor1} alt="Tracable AI" className="spon-image" />
          <img src={sponsor1} alt="Tracable AI" className="spon-image" />
          <img src={sponsor1} alt="Tracable AI" className="spon-image" />
          <img src={sponsor1} alt="Tracable AI" className="spon-image" />
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsors;
