import React from "react";
import "./team.css";
import teamImg from "../../Assets/Images/teamImg.png";
import linkedIn from "../../Assets/Images/linkedIn.svg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Team = () => {
  var team = [
    {
      id: 1,
      name: "Aryan Bidani",
      position: "General Secretary Tech",
      img: teamImg,
    },
    {
      id: 2,
      name: "Ashutosh Singla",
      position: "Deputy General Secretary Tech",
      img: teamImg,
    },
    {
      id: 3,
      name: "Ashutosh Singh",
      position: "Organising Committee Head",
      img: teamImg,
    },
  ];
  return (
    <div className="home-component-flex">
      <h1 className="title">Meet The Team</h1>
      <div className="team-flex">
        {team.map((member) => {
          return (
            <div key={member.id} className="team-card">
              <img
                src={member.img}
                alt={member.name}
                className="team-card-img"
              />
              <div className="team-card-content">
                <div className="team-card-title">{member.name}</div>
                <div className="team-card-sub-title">{member.position}</div>
              </div>
              <div className="team-card-socials">
                <img
                  src={linkedIn}
                  alt="LinkedIn"
                  className="team-card-socils-icon"
                />
                <img
                  src={linkedIn}
                  alt="LinkedIn"
                  className="team-card-socils-icon"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="team-btn">
        <PrimaryButton text="Visit about us page" />
      </div>
    </div>
  );
};

export default Team;
