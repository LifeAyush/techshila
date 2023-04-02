import React from "react";
import "./notices.css";
import arrow from "../../Assets/Images/arrow.svg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Notice = () => {
  return (
    <div className="notice">
      <div className="notice-content">
        <div className="notice-content-date">03/04</div>
        <div className="notice-content-title">
          Cilium.org Problem Statement Released
        </div>
      </div>
      <img src={arrow} className="notices-icon non-draggable" alt="#" />
      <div className="mob-notice">
        <p className="notice-desc">
          The problem statement from Cilium.org has been released. The problem
          revolves around the fields of machine learning and deep learning.The
          problem statement from Cilium.org has been released. The problem
          revolves around the fields of machine learning and deep learning.The
          problem statement from Cilium.org has been released. The problem
          revolves around the fields of machine learning and deep learning.
        </p>
        <PrimaryButton text="View problem statement" />
      </div>
    </div>
  );
};

export default Notice;
