import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../Assets/Images/logo.svg";
import close from "../../Assets/Images/close.svg";
import ham from "../../Assets/Images/ham.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locator = useLocation();
  return (
    <div className="nav">
      <img src={logo} alt="STC Presents TechShila" className="nav-logo" />
      <div className="nav-links">
        <Link
          to="/"
          className={
            locator.pathname === "/" ? "nav-link-active" : "nav-link-passive"
          }
          title="Home"
        >
          Home
        </Link>
        <Link
          to="/problem-statements"
          className={
            locator.pathname === "/problem-statements"
              ? "nav-link-active"
              : "nav-link-passive"
          }
          title="Problem Statements"
        >
          Problem Statements
        </Link>
        <Link
          to="/leaderboard"
          className={
            locator.pathname === "/leaderboard"
              ? "nav-link-active"
              : "nav-link-passive"
          }
          title="leaderboard"
        >
          Leaderboard
        </Link>
      </div>
      <img
        src={isOpen ? close : ham}
        alt="Menu"
        className="nav-icon"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen ? (
        <div className="nav-dropdown-blur">
          <div className="nav-dropdown">
            <div className="nav-flex">
              <Link
                to="/"
                className={
                  locator.pathname === "/"
                    ? "nav-link-active"
                    : "nav-link-passive"
                }
                title="Home"
              >
                Home
              </Link>
              <Link
                to="/problem-statements"
                className={
                  locator.pathname === "/problem-statements"
                    ? "nav-link-active"
                    : "nav-link-passive"
                }
                title="Problem Statements"
              >
                Problem Statements
              </Link>
              <Link
                to="/leaderboard"
                className={
                  locator.pathname === "/leaderboard"
                    ? "nav-link-active"
                    : "nav-link-passive"
                }
                title="leaderboard"
              >
                Leaderboard
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
