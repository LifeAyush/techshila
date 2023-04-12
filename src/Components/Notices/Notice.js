import React from "react";
import "./notices.css";
import arrow from "../../Assets/Images/arrow.svg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Notice = ({ date, title, desc, val, func, type, isActive }) => {
  return (
    <div
      className={isActive ? "notice highlight" : "notice"}
      onClick={() => func(val)}
    >
      <div className="notice-content">
        <div className="notice-content-date">{date}</div>
        <div className="notice-content-title">{title}</div>
      </div>
      <img src={arrow} className="notices-icon non-draggable" alt="#" />
      <div className="mob-notice">
        <p className="notice-desc">{desc}</p>
        {type === "ps" ? (
          <PrimaryButton
            text="View problem statement"
            url="/problem-statements"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Notice;
