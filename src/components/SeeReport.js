import React, { Fragment, useState } from "react";

import "./SeeReport.css";
let first = true;

function SeeReport({ url }) {
    const [reports, setReports] = useState([]);
    console.log("IN HERE");
    console.log(url);
    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };
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
        if (first) {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/reports",
                    requestOptions
                );

                let { reply, data } = await response.json();
                setReports(data);
                first = false;
            } catch (error) {
                console.log("error", error);
            }
        }
    };
    updateReports();
    // var reports = [
    //     {
    //         reportedURL: "dfsafa",
    //         story:
    //             "I was doing this and that person did this so it is here and I want to block this.",
    //         tag: "fasdf",
    //     },
    //     {
    //         reportedURL: "tyera",
    //         story:
    //             "So this is absolutely tragic for my friend. I feel bad for that person.",
    //         tag: "ahgreyhu",
    //     },
    //     {
    //         reportedURL: "example",
    //         story: "This is very bad. I am devastated.",
    //         tag: "test",
    //     },
    // ];

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
                            key={data.reportId}
                        >
                            <div className="blue">
                                <h3>Report: {data.report_string}</h3>
                            </div>
                            <div className="orange">
                                <div className="tags">
                                    Tags: {data.categories.join(", ")}
                                </div>
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
