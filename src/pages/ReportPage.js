import React from "react";
import Navbar from "../components/Navbar";
import Report from "../components/Report";

function ReportPage() {
    let currentURL = window.location.href;
    let url = currentURL.match(/report\?url=(.*)$/);
    if (url !== null && url !== undefined) {
        url = url[1];
    }
    return (
        <div>
            <Navbar />
            <Report url={url} />
        </div>
    );
}

export default ReportPage;
