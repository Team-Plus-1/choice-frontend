import React from "react";
import "./Landing.css";
import bg from "../images/Cover_5.svg";

function Landing() {
  return (
    <div
      className="Landing"
      style={{
        backgroundImage: { bg },
      }}
    >
      <maintext className="maintext">Providing a Better</maintext>
      Browsing<text className="text"> Choice</text>
      <button className="landing__btn">Launch Extension</button>
    </div>
  );
}

export default Landing;
