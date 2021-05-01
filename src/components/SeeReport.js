import React, { Fragment } from "react";
import "./SeeReport.css";

function SeeReport() {
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

  return (
    <div className="see__container">
      {reports.map(function (data, object) {
        return (
          <div className="card">
            <ul key={object}>
              <div className="blue">
                <h3>Story: {data.story}</h3>
              </div>
              <div className="orange">
                <div className="tags">Tags: {data.tag}</div>
                <div className="vote">
                  <i class="fas fa-angle-double-up voting"></i>
                  <i class="fas fa-angle-double-down voting"></i>
                </div>
              </div>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default SeeReport;
