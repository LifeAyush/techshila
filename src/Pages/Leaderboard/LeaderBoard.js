import React, { useEffect, useState } from "react";
import { getLeaderBoardData } from "../../Data/Data";
import "./LeaderBoard.css";
import bottomGraphic from "../../Assets/Images/bottomGraphic.svg";
import selector from "../../Assets/Images/selector.svg";
import Navbar from "../../Components/Navbar/Navbar";
import LeaderBoardTable from "../../Components/LeaderboardTable/LeaderBoardTable";
import Footer from "../../Components/Footer/Footer";

const LeaderBoard = () => {
  const [choice, setChoice] = useState("All Problem Statements");
  const [filterOpen, setFilterOpen] = useState(false);
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
  var leaderBoardData = [
    {
      rank: "1",
      name: "Rajiv",
      gold: "7",
      silver: "2",
      bronze: "3",
      points: "12",
    },
    {
      rank: "2",
      name: "Ravindra",
      gold: "2",
      silver: "2",
      bronze: "4",
      points: "7",
    },
    {
      rank: "3",
      name: "Jawahar",
      gold: "1",
      silver: "2",
      bronze: "2",
      points: "6",
    },
    {
      rank: "4",
      name: "Govind",
      gold: "0",
      silver: "1",
      bronze: "1",
      points: "3",
    },
  ];

  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <h1 className="title">Leaderboard</h1>
        <div className="lb-filter-flex">
          <div className="lb-filter-text">Filter by Problem Statement : </div>
          <div
            className="lb-filter-box"
            onClick={() => setFilterOpen((prev) => !prev)}
          >
            <div className="lb-filter-box-text">{choice}</div>
            <img
              src={selector}
              alt="select"
              className={
                filterOpen
                  ? "lb-filter-box-icon-close"
                  : "lb-filter-box-icon-open"
              }
            />
            {filterOpen ? (
              <div className="lb-filter-choices">
                <div
                  className="lb-filter-choice"
                  onClick={() => setChoice("Cilium.org")}
                >
                  Cilium.org
                </div>
                <div
                  className="lb-filter-choice"
                  onClick={() => setChoice("ISRO")}
                >
                  ISRO
                </div>
                <div
                  className="lb-filter-choice"
                  onClick={() => setChoice("Traceable.ai")}
                >
                  Traceable.ai
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <LeaderBoardTable data={leaderBoardData} />
      </div>
      <Footer />
      <img
        src={bottomGraphic}
        alt="Graphic"
        className="bottom-graphic non-draggable"
      />
    </div>
  );
};

export default LeaderBoard;
