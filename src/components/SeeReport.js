import React, { Fragment, useState } from "react";

import "./SeeReport.css";

function SeeReport({ url }) {
    // const [reports, setReports] = useState([]);
    // console.log("IN HERE")
    // console.log(url)
    // var requestOptions = {
    //     method: "GET",
    //     redirect: "follow",
    // };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        url: url,
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    const updateReports = async () => {
        try {
            const response = await fetch(
                "https://choice-app-backend.herokuapp.com/api/reports",
                requestOptions
            );

            let result = await response.json();
            // const response = await fetch(
            //     `https://choice-app-backend.herokuapp.com/api/reports?url=${url}`,
            //     requestOptions
            // );
            // const result = await response.json();
            console.log(result);
        } catch (error) {
            console.log("error", error);
        }
    };
    updateReports();
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
            {reports.map(function (data, object) {
                return (
                    <div className="card">
                        <div
                            className={`row ${
                                count++ % 2 === 0 ? "right" : "left"
                            }`}
                            key={object}
                        >
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
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default SeeReport;
