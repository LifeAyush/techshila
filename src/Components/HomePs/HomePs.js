import React, { useEffect } from "react";
import "./homePs.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import computerVision from "../../Assets/Ps/computerVision.pdf"
import droneRobotics from "../../Assets/Ps/droneRobotics.pdf"
import nlp from "../../Assets/Ps/nlp.pdf"
import software from "../../Assets/Ps/software.pdf"
import brandDesign from "../../Assets/Ps/brandDesign.pdf"
import analytics from "../../Assets/Ps/analytics.pdf"
import product from "../../Assets/Ps/Product.pdf"

const HomePs = () => {
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
    <div className="home-component-flex">
      <h1 className="title">Problem Statements</h1>
      <div className="homeps-flex">
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
      <PrimaryButton text="View all problem statements" url="/problem-statements"/>
    </div>
  );
};

export default HomePs;
