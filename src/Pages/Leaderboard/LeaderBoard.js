import React, { useEffect, useState } from "react";
import { getLeaderBoardData } from "../../Data/Data";
import "./LeaderBoard.css";
import LeaderBoardTable from "../../Components/LeaderboardTable/LeaderBoardTable";
import bottomGraphic from "../../Assets/Images/bottomGraphic.svg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const LeaderBoard = () => {
  // const [leaderBoardData, setLeaderBoardData] = useState([]);
  // useEffect(() => {
  //   getLeaderBoardData()
  //     .then((res) => {
  //       console.log(res.data);
  //       setLeaderBoardData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="page">
      <Navbar />
      <Footer />
      <img src={bottomGraphic} alt="Graphic" className="bottom-graphic non-draggable" />
    </div>
  );
};

export default LeaderBoard;
