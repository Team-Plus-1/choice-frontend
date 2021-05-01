import React from "react";
import "./Landing.css";
import bg from "../images/Cover_5.svg";
import squares from "../images/squares.svg";

function Landing() {
  return (
    <div className="Landing">
      <maintext className="maintext">Providing a Better</maintext>
      Browsing<span className="text"> Choice</span>
      <button className="landing__btn">Launch Extension</button>
      <div className="landing__squares">
        <img src={squares} />
      </div>
    </div>
  );
}

export default Landing;
