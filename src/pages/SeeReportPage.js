import React from "react";
import Navbar from "../components/Navbar";
import SeeReport from "../components/SeeReport";

function SeeReportPage() {
    let currentURL = window.location.href;
    let url = currentURL.match(/seereport\?url(.*)$/)[1];

    // let url = params.get("url");
    return (
        <div>
            <Navbar />
            <SeeReport url={url} />
        </div>
    );
}

export default SeeReportPage;
