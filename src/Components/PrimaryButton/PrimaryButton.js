import React from "react";
import "./primaryBtn.css";
import { Link } from "react-router-dom";

const PrimaryButton = ({ text, url }) => {
  return (
    <Link to={url} className="pb-btm-layer">
      <div className="pb-top-layer">{text}</div>
    </Link>
  );
};

export default PrimaryButton;
