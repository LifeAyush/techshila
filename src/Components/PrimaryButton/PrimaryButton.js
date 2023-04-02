import React from "react";
import "./primaryBtn.css";

const PrimaryButton = ({ text }) => {
  return (
    <div className="pb-btm-layer">
      <div className="pb-top-layer">{text}</div>
    </div>
  );
};

export default PrimaryButton;
