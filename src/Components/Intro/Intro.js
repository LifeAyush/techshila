import React from "react";
import "./intro.css";
import introLeftGraphic from "../../Assets/Images/introLeftGraphic.svg";
import introRightGraphic from "../../Assets/Images/introRightGraphic.svg";

const Intro = () => {
  return (
    <div className="intro">
      <span className="intro-blob-1" />
      <span className="intro-blob-2" />
      <div className="intro-top-flex">
        <span className="intro-sub-text">INTER BHAWAN v1.0</span>
        <p className="intro-para">
          We aim to throw light upon the micro
          <span className="intro-para-solid">tech</span>nologies emerging in the
          world and help the students{" "}
          <span className="intro-para-solid">meet</span> newer industries.
        </p>
      </div>
      <div className="intro-btm-flex">
        <div className="intro-btm-flex-left">
          <p className="intro-btm-text">
            Compete, innovate, and conquer amongst 12 Bhawans for the chance to win the General Championship Trophy!
          </p>
          <img
            src={introLeftGraphic}
            alt="Grand Championship"
            className="intro-btm-left-grpagic"
          />
        </div>
        <div className="intro-btm-flex-right">
          <p className="intro-btm-text">
            Teams will be formed by the Technical Secretaries of respective
            bhawans.
          </p>
          <img
            src={introRightGraphic}
            alt="Bhawan Wise Teams"
            className="intro-btm-right-grpagic"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
