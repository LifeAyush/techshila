import React from "react";
import "./teamSection.css";
import { Link } from "react-router-dom";
import linkedIn from "../../Assets/Images/linkedIn.svg";
import instagram from "../../Assets/Images/instagram.svg";

const TeamSection = ({ title, team, type }) => {
  return (
    <div className="team-section">
      <h1 className="title">{title}</h1>
      <div
        className={type === "medium" ? "team-flex-medium" : "team-flex-large"}
      >
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
    </div>
  );
};

export default TeamSection;
