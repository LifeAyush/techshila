import React from "react";
import "./notices.css";
import Notice from "./Notice";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Notices = () => {
  return (
    <div className="home-component-flex">
      <h1 className="title">Notices</h1>
      <div className="notices-flex">
        <div className="notice-titles">
          <Notice />
          <Notice />
          <Notice />
          <Notice />
          <Notice />
          <Notice />
          <Notice />
        </div>
        <div className="notices-desc">
          <div className="notice-desc-con">
            <div className="notice-desc-con-title">
              Cilium.org Problem Statement Released
            </div>
            <p className="notice-desc-con-sub">
              The problem statement from Cilium.org has been released. The
              problem revolves around the fields of machine learning and deep
              learning.
            </p>
          </div>
          <PrimaryButton text="View problem statement" />
        </div>
      </div>
    </div>
  );
};

export default Notices;
