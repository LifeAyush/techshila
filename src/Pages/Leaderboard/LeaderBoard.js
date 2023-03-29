import React, { useEffect, useState } from "react";
import { getLeaderBoardData } from "../../Data/Data";
import "./LeaderBoard.css";
import LeaderBoardTable from "../../Components/LeaderboardTable/LeaderBoardTable";

const LeaderBoard = () => {
  const [leaderBoardData, setLeaderBoardData] = useState([]);

  useEffect(() => {
    getLeaderBoardData()
      .then((res) => {
        console.log(res.data);
        setLeaderBoardData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <LeaderBoardTable />
    </div>
  );
};

export default LeaderBoard;
