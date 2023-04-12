import React, { useState, useEffect } from "react";
import { getPsData } from "../../Data/Data";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import bottomGraphic from "../../Assets/Images/bottomGraphic.svg";
import "./problemStatements.css";
import computerVision from "../../Assets/Ps/computerVision.pdf"
import droneRobotics from "../../Assets/Ps/droneRobotics.pdf"
import nlp from "../../Assets/Ps/nlp.pdf"
import software from "../../Assets/Ps/software.pdf"
import brandDesign from "../../Assets/Ps/brandDesign.pdf"
import analytics from "../../Assets/Ps/analytics.pdf"
import product from "../../Assets/Ps/Product.pdf"

const ProblemStatements = () => {
  // const [psData, setPsData] = useState([]);
  // useEffect(() => {
  //   getPsData()
  //     .then((res) => {
  //       console.log(res.data);
  //       setPsData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  var psData = [
    {
      id: "01",
      title: "Prof.Sparsh Mittal",
      desc: "Low Light Image Restoration Challange",
      tags: ["Computer Vision","ML"],
      url: computerVision,
    },
    {
      id: "02",
      title: "Black Hawk",
      desc: "Drone Swarming Challenge",
      tags: ["Robotics"],
      url: droneRobotics,
    },
    {
      id: "03",
      title: "AccioJob",
      desc: "Multilingual Video Translation Challenge",
      tags: ["NLP","ML"],
      url: nlp,
    },
    {
      id: "04",
      title: "Tournafest",
      desc: "Remote PC Controller Application Challenge",
      tags: ["Software", "Development"],
      url: software,
    },
    {
      id: "05",
      title: "Farmicon",
      desc: "Brand Design Challenge",
      tags: ["Design","Branding"],
      url: brandDesign,
    },
    {
      id: "06",
      title: "Sutra",
      desc: "Management Consultancies' Case Challenge",
      tags: ["Analytics","Consulting"],
      url: analytics,
    },
    {
      id:"07",
      title: "FamPay",
      desc: "Product Challenge",
      tags: ["Product Management"],
      url: product,
    },
  ];
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <h1 className="title">Problem Statements</h1>
        <div className="ps-grid">
          {psData.map((ps) => {
            return (
              <a href={ps.url} className="ps-box" key={ps.id} download>
                <span className="ps-number">({ps.id})</span>
                <h2 className="ps-title">{ps.title}</h2>
                <p className="ps-desc">{ps.desc}</p>
                <div className="ps-tags">
                  {ps.tags.map((tag, id) => {
                    return (
                      <span key={id} className="ps-tag">
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <Footer />
      <img src={bottomGraphic} alt="Graphic" className="bottom-graphic non-draggable" />
    </div>
  );
};

export default ProblemStatements;
