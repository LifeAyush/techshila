import React from "react";
import "./leaderBoardTable.css";
import medal1 from "../../Assets/Images/medal1.svg";
import medal2 from "../../Assets/Images/medal2.svg";
import medal3 from "../../Assets/Images/medal3.svg";

const LeaderBoardTable = ({ data, type }) => {
  return (
    <table className="lb-table">
      <thead>
        <tr className="lb-head-row">
          <th className="table-title table-small-cell">Rank</th>
          <th className="table-title table-large-cell">Bhawan</th>
          {type === "all" ? (
            <>
              <th className="table-title table-small-cell lb-table-gold">G</th>
              <th className="table-title table-small-cell lb-table-silver">
                S
              </th>
              <th className="table-title table-small-cell lb-table-bronze">
                B
              </th>
              <th className="table-title table-small-cell">PTS</th>
            </>
          ) : (
            <>
              <th className="table-title table-medium-cell">PTS Earned</th>
              <th className="table-title table-medium-cell">PTS Added</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((bhawan, id) => {
          return (
            <tr className="table-row" key={id}>
              {bhawan.rank < 4 ? (
                <img
                  src={
                    bhawan.rank === "1"
                      ? medal1
                      : bhawan.rank === "2"
                      ? medal2
                      : medal3
                  }
                  alt="Medal"
                  className="table-medal"
                />
              ) : (
                ""
              )}
              <td className="table-text table-small-cell">#{bhawan.rank}</td>
              <td className="table-text table-large-cell">
                {bhawan.name} Bhawan
              </td>
              {type === "all" ? (
                <>
                  <td className="table-text table-small-cell">{bhawan.gold}</td>
                  <td className="table-text table-small-cell">
                    {bhawan.silver}
                  </td>
                  <td className="table-text table-small-cell">
                    {bhawan.bronze}
                  </td>
                  <td className="table-text table-small-cell">
                    {bhawan.points}
                  </td>
                </>
              ) : (
                <>
                  <td className="table-text table-medium-cell">
                    {bhawan.pointsEarned}
                  </td>
                  <td className="table-text table-medium-cell lb-table-green">
                    +{bhawan.pointsAdded}
                  </td>
                </>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LeaderBoardTable;
