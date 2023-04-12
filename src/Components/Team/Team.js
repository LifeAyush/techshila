import React from "react";
import teamImg from "../../Assets/Images/teamImg.png";
import TeamSection from "../TeamSection/TeamSection";

const Team = () => {
  var teamHeads = [
    {
      id: 1,
      name: "Aryan Bidani",
      position: "GenSec Tech",
      img: teamImg,
      insta: "",
      linkedin: "",
    },
    {
      id: 2,
      name: "Ashutosh Singla",
      position: "Deputy GenSec Tech",
      img: teamImg,
      insta: "",
      linkedin: "",
    },
  ];
  var teamOCs = [
    {
      id: 1,
      name: "Ashutosh Singh",
      position: "Organising Committee Head",
      img: teamImg,
      insta: "",
      linkedin: "",
    },
    {
      id: 2,
      name: "Ayush Diwang",
      position: "Organising Committee Head",
      img: teamImg,
      insta: "",
      linkedin: "",
    },
  ];
  var team = [
    {
      id: 1,
      name: "Aaryan garg",
      position: "Tech Lead",
      img: teamImg,
      insta: "",
      linkedin: "",
    },
    {
      id: 2,
      name: "Ayush Patil",
      position: "Tech Lead",
      img: teamImg,
      insta: "",
      linkedin: "",
    },
    {
      id: 3,
      name: "Jon Doe",
      position: "Member",
      img: teamImg,
      insta: "",
      linkedin: "",
    },
    {
      id: 4,
      name: "Jon Doe",
      position: "Member",
      img: teamImg,
      insta: "",
      linkedin: "",
    },
    {
      id: 5,
      name: "Jon Doe",
      position: "Member",
      img: teamImg,
      insta: "",
      linkedin: "",
    },
    {
      id: 6,
      name: "Jon Doe",
      position: "Member",
      img: teamImg,
      insta: "",
      linkedin: "",
    },
  ];
  return (
    <div className="home-component-flex">
      <TeamSection title="Heads" team={teamHeads} type="medium" />
      <TeamSection title="Overall Co-Ordinators" team={teamOCs} type="medium" />
      <TeamSection title="Organizing Committee" team={team} type="large" />
    </div>
  );
};

export default Team;
