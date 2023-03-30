import React, { useEffect, useState } from "react";
import { getLeaderBoardData } from "../../Data/Data";
import "./LeaderBoard.css";
import LeaderBoardTable from "../../Components/LeaderboardTable/LeaderBoardTable";
import Navbar from "../../Components/Navbar/Navbar";

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
    </div>
  );
};

export default LeaderBoard;
