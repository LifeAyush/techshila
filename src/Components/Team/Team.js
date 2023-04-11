import React from "react";
import "./team.css";
import { useLocation, Link } from "react-router-dom";
import teamImg from "../../Assets/Images/teamImg.png";
import linkedIn from "../../Assets/Images/linkedIn.svg";
import instagram from "../../Assets/Images/instagram.svg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Team = () => {
  const locator = useLocation();
  var team = [
    {
      id: 1,
      name: "Aryan Bidani",
      position: "General Secretary Tech",
      img: teamImg,
      insta: "",
      linkedin: "",
    },
    {
      id: 2,
      name: "Ashutosh Singla",
      position: "Deputy General Secretary Tech",
      img: teamImg,
      insta: "",
      linkedin: "",
    },
    {
      id: 3,
      name: "Ashutosh Singh",
      position: "Organising Committee Head",
      img: teamImg,
      insta: "",
      linkedin: "",
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
                <Link to={member.linkedin}>
                  <img
                    src={linkedIn}
                    alt="LinkedIn"
                    className="team-card-socils-icon"
                  />
                </Link>
                <Link to={member.insta}>
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="team-card-socils-icon"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {locator.pathname != "/about-us" ? (
        <div className="team-btn">
          <PrimaryButton text="Visit about us page" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Team;
