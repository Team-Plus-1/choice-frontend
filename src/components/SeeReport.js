import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import "./SeeReport.css";
import { Route, Redirect, Link } from "react-router-dom";

function SeeReport({ component: Component, ...rest }) {
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);
  const { currentUser } = useAuth();

  var reports = [
    {
      reportedURL: "dfsafa",
      story:
        "I was doing this and that person did this so it is here and I want to block this.",
      tag: "fasdf",
    },
    {
      reportedURL: "tyera",
      story:
        "So this is absolutely tragic for my friend. I feel bad for that person.",
      tag: "ahgreyhu",
    },
    {
      reportedURL: "example",
      story: "This is very bad. I am devastated.",
      tag: "test",
    },
  ];

  // let len = reports.length;
  let count = 0;

  return (
    <div className="see__container">
      <div className="cardscont">
        {reports.map(function (data, object) {
          return (
            <div className="card">
              <div
                className={`row ${count++ % 2 === 0 ? "right" : "left"}`}
                key={object}
              >
                <div className="blue">
                  <h3>Story: {data.story}</h3>
                </div>
                <div className="orange">
                  <div className="tags">Tags: {data.tag}</div>
                  <div className="vote">
                    <button className={`${currentUser === null ? "dno" : ""}`}>
                      <i class="fas fa-angle-double-up voting"></i>
                    </button>
                    <button className={`${currentUser === null ? "dno" : ""}`}>
                      <i class="fas fa-angle-double-down voting"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SeeReport;
