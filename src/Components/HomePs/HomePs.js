import React, { useEffect } from "react";
import "./homePs.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

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
      title: "Cilium.org",
      desc: "Expert Answers in a Flash: Improving domain-specific QA",
      tags: ["ML", "Deep Learning"],
    },
    {
      id: "02",
      title: "Traceable.ai",
      desc: "Pluto Drone Swarm Challenge",
      tags: ["Design"],
    },
    {
      id: "03",
      title: "Traceable.ai",
      desc: "Pluto Drone Swarm Challenge",
      tags: ["Design"],
    },
    {
      id: "04",
      title: "Traceable.ai",
      desc: "Pluto Drone Swarm Challenge",
      tags: ["Design"],
    },
    {
      id: "05",
      title: "Traceable.ai",
      desc: "Pluto Drone Swarm Challenge",
      tags: ["Design"],
    },
    // {
    //   id: "06",
    //   title: "Traceable.ai",
    //   desc: "Pluto Drone Swarm Challenge",
    //   tags: ["Design"],
    // },
    // {
    //   id: "07",
    //   title: "Traceable.ai",
    //   desc: "Pluto Drone Swarm Challenge",
    //   tags: ["Design"],
    // },
    // {
    //   id: "08",
    //   title: "Traceable.ai",
    //   desc: "Pluto Drone Swarm Challenge",
    //   tags: ["Design"],
    // },
  ];
  return (
    <div className="home-component-flex">
      <h1 className="title">Problem Statements</h1>
      <div className="homeps-flex">
        {psData.map((ps) => {
          return (
            <div className="ps-box" key={ps.id}>
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
            </div>
          );
        })}
      </div>
      <PrimaryButton text="View all problem statements" />
    </div>
  );
};

export default HomePs;
