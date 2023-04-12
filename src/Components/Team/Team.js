import React from "react";
import teamImg from "../../Assets/Images/teamImg.png";
import TeamSection from "../TeamSection/TeamSection";

const Team = () => {
  var teamHeads = [
    {
      id: 1,
      name: "Aryan Bidani",
      position: "General Secretary Technical Affairs",
      img: require("../../Assets/Images/AryanBidani.png"),
      insta: "https://instagram.com/aryan_bidani",
      linkedin: "https://www.linkedin.com/in/aryan-bidani-b0696b1b5",
    },
    {
      id: 2,
      name: "Ashutosh Singla",
      position: "Deputy General Secretary Technical Affairs",
      img: require("../../Assets/Images/AshutoshSingla.png"),
      insta: "https://www.instagram.com/ashu_singla02/",
      linkedin: "https://www.linkedin.com/in/ashutosh-singla-0741b5194/",
    },
  ];
  var teamOCs = [
    {
      id: 1,
      name: "Ashutosh Singh",
      position: "Overall Coordinator",
      img: require("../../Assets/Images/AshutoshSingh.png"),
      insta: "https://www.instagram.com/einzelganger_2502/",
      linkedin: "https://www.linkedin.com/in/ashutosh-singh-0335a51b9/",
    },
    {
      id: 2,
      name: "Ayush Diwang",
      position: "Overall Coordinator",
      img: require("../../Assets/Images/AyushDiwang.png"),
      insta: "https://instagram.com/_diwang_1012?igshid=ZDdkNTZiNTM=",
      linkedin: "https://www.linkedin.com/in/ayush-diwang-4840511bb",
    },
  ];
  var team = [
    {
      id: 1,
      name: "Madhur Rao",
      position: "Tech Lead",
      img: require("../../Assets/Images/MadhurRao.png"),
      insta: "https://instagram.com/sick_aada?igshid=YmMyMTA2M2Y=",
      linkedin: "https://www.linkedin.com/in/madhur-rao",
    },
    {
      id: 2,
      name: "Aaryan Garg",
      position: "Tech & PS Lead",
      img: require("../../Assets/Images/AaryanGarg.png"),
      insta: "https://instagram.com/garg_doppler24",
      linkedin: "https://www.linkedin.com/in/garg-doppler",
    },
    {
      id: 3,
      name: "Ayush Patil",
      position: "Tech Lead",
      img: require("../../Assets/Images/AyushPatil.png"),
      insta: "https://www.instagram.com/_life_ayush_/",
      linkedin: "https://www.linkedin.com/in/lifeayush/",
    },
    {
      id: 4,
      name: "Rishabh Lodha",
      position: "Design Lead",
      img: require("../../Assets/Images/RishabhLodha.png"),
      insta: "https://instagram.com/rishabh_lodha_08?igshid=ZDdkNTZiNTM=",
      linkedin: "http://www.linkedin.com/in/rishabh-lodha-b5739a1b9",
    },
    {
      id: 5,
      name: "Somesh Solanki",
      position: "Design & PS Lead",
      img: require("../../Assets/Images/SomeshSolanki.png"),
      insta: "https://instagram.com/solankisomesh27?igshid=MTIzZWQxMDU=",
      linkedin: "https://www.linkedin.com/in/somesh-solanki-107823158",
    },
    {
      id: 6,
      name: "Namrata Kamat",
      position: "PS Lead",
      img: require("../../Assets/Images/NamrataKamat.png"),
      insta: "https://www.instagram.com/namratagram_/",
      linkedin: "https://www.linkedin.com/in/namrata-k-7b1049202/",
    },
    {
      id: 7,
      name: "Piyush Dagdiya",
      position: "PS Lead",
      img: require("../../Assets/Images/PiyushDagdiya.png"),
      insta: "https://www.instagram.com/braindead_piyu/namr",
      linkedin: "https://www.linkedin.com/in/piyush-dagdiya-50873a192/",
    },
    {
      id: 8,
      name: "Pranjal Gulati",
      position: "PS Lead",
      img: require("../../Assets/Images/PranjalGulati.png"),
      insta: "https://www.instagram.com/pgrualnajtail/",
      linkedin: "https://www.linkedin.com/in/pranjal-gulati-799148171/",
    },
    {
      id: 9,
      name: "Smith Pereira",
      position: "PS Lead",
      img: require("../../Assets/Images/SmithPereira.png"),
      insta: "https://www.instagram.com/capricious_rebel/",
      linkedin: "https://www.linkedin.com/in/capriciousrebel/",
    },
    {
      id: 10,
      name: "Shreyank Banakar",
      position: "Operations",
      img: require("../../Assets/Images/ShreyankBanakar.png"),
      insta: "https://www.instagram.com/shreyank_08/",
      linkedin: "https://www.linkedin.com/in/shreyank-banakar-b514bb1b5/",
    },
    {
      id: 11,
      name: "Khushal Rathore",
      position: "Operations",
      img: require("../../Assets/Images/KhushalRathore.png"),
      insta: "https://www.instagram.com/khushal_0.1/",
      linkedin: "https://www.linkedin.com/in/khushal-rathore-4740451ba/",
    },
    {
      id: 12,
      name: "Priyansh Bhandari",
      position: "Operations",
      img: require("../../Assets/Images/PriyanshBhandari.png"),
      insta: "https://instagram.com/_priyansh_bhandari?igshid=YmMyMTA2M2Y=",
      linkedin: "https://www.linkedin.com/in/priyansh-bhandari-03664a20b",
    },
    {
      id: 13,
      name: "Sagnik Majumdar",
      position: "Content Lead",
      img: require("../../Assets/Images/SagnikMajumdar.png"),
      insta: "https://www.instagram.com/shagzz_01/",
      linkedin: "https://www.linkedin.com/in/sagnik-majumdar-50317919a/",
    },
    {
      id: 14,
      name: "Vidhi Sharma",
      position: "Content Lead",
      img: require("../../Assets/Images/VidhiSharma.png"),
      insta: "https://www.instagram.com/_._vee25_._/",
      linkedin: "https://www.linkedin.com/in/vidhi-sharma-b01b7b20b/",
    },
    {
      id: 15,
      name: "Gurwinder Singh",
      position: "Social Media Lead",
      img: require("../../Assets/Images/GurwinderSingh.png"),
      insta: "https://www.instagram.com/gurwinder_s_1809/",
      linkedin: "",
    },
  ];
  return (
    <div className="home-component-flex">
      <TeamSection title="Heads" team={teamHeads} type="medium" />
      <TeamSection title="Overall Coordinators" team={teamOCs} type="medium" />
      <TeamSection title="Organizing Committee" team={team} type="large" />
    </div>
  );
};

export default Team;
