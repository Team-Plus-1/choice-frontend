import React from "react";
import "./Landing.css";
import bg from "../images/Cover_5.svg";
import squares from "../images/squares.svg";

function Landing() {
    return (
        <div
            className="Landing"
            style={{
                backgroundImage: { bg },
            }}
        >
            <div className="image-wrapper">
                <img className="background-image" src={squares} />
            </div>
            <div className="content-wrapper">
                <h1 className="maintext">
                    Providing a Better <br />
                    Browsing <span className="text"> Choice</span>{" "}
                </h1>
                <button className="landing__btn">Launch Extension</button>
            </div>
        </div>
    );
}

export default Landing;
