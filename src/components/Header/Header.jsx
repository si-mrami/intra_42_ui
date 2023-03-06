import React from "react";
import "./Header.scss";
import logo from "../../images/_20230306_182536-removebg-preview.png";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import KeyboardDoubleArrowUpOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowUpOutlined";
import ProgressBar from "react-bootstrap/ProgressBar";

const Header = () => {
  const now = 3.12;
  const now1 = 60;

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <span>
          <EmojiEventsOutlinedIcon /> 1492
        </span>
        <span>
          <KeyboardDoubleArrowUpOutlinedIcon /> 90
        </span>
      </div>
      <div className="info">
        <div className="top">
          <span className="first">Bios</span>
          <span>Mohamed Rami</span>
          <span>mrami</span>
        </div>
        <div className="box">
          <div className="item">
            <span>Wallet</span>
            <span>Evaluation points</span>
            <span>Cursus</span>
            <span>Grade</span>
          </div>
          <div className="item1">
            <span>5$</span>
            <span>7 Points</span>
            <span>42cursus</span>
            <span>Learner</span>
          </div>
        </div>
      </div>
      <div className="last">
        <div className="top-last">
          <div className="box1">
            <span>Available</span>
            <span>e2r6p5</span>
          </div>
          <div className="box2">
            <span>Black Hole absorption</span>
            <span>26/05/2023</span>
          </div>
        </div>
        <div className="bottom">
          <ProgressBar className="pro" variant="info" now={now1} label={`Level ${now}%`} />
        </div>
      </div>
    </div>
  );
};

export default Header;
