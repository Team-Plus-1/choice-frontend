import React, { Fragment } from "react";

function SeeReport() {
  var reports = [
    {
      reportedURL: "dfsafa",
      story: "dfasdfad",
      tag: "fasdf",
    },
    {
      reportedURL: "tyera",
      story: "235",
      tag: "ahgreyhu",
    },
    {
      reportedURL: "example",
      story: "story",
      tag: "test",
    },
  ];

  return (
    <div>
      {reports.map(function (data, object) {
        return (
          <ul key={object}>
            <div>URL: {data.reportedURL}</div>
            <div>Story: {data.story}</div>
            <div>Tags: {data.tag}</div>
            <i class="fas fa-angle-double-up"></i>
            <i class="fas fa-angle-double-down"></i>
          </ul>
        );
      })}
    </div>
  );
}

export default SeeReport;
