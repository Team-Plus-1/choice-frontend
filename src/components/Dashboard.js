import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    // const [reports, setReports] = useState([]);
    // console.log("IN HERE");

    // const updateReports = async () => {
    //     console.log(first);
    //     if (first) {
    //         try {
    //             const response = await fetch(
    //                 "http://localhost:5000/api/checkthreshold",
    //                 requestOptions
    //             );

    //             let result = await response.json();
    //             first = false;
    //             console.log(result);
    //             let newReports;
    //             if (result.data === null) {
    //                 newReports = [];
    //             } else {
    //                 newReports = result.data;
    //             }
    //             setReports(newReports);
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     }
    // };
    // updateReports();
    async function handleLogout() {
        setError("");

        try {
            await logout();
            history.push("/");
        } catch {
            setError("Failed to log out");
        }
    }
    if (currentUser.email !== "admin@admin.com") {
        return (
            <div className="dash__container">
                <div className="dash__box">
                    <h2 className="dashboard__heading">Profile</h2>
                    {error && <alert variant="danger">{error}</alert>}
                    <h4 className="dash__email">Email: {currentUser.email}</h4>
                    <br></br>
                    <div className="btnContainer">
                        <button className="dashboard__updateBtn">
                            <Link
                                to="/update-profile"
                                className="dashboard__updateLink"
                            >
                                Update Profile
                            </Link>
                        </button>
                    </div>
                </div>
                <div>
                    <button
                        className="dashboard__logout"
                        variant="link"
                        onClick={handleLogout}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="two-col">
                <div className="sidebar">
                    <h2 className="dashboard__heading">Profile</h2>
                    {error && <alert variant="danger">{error}</alert>}
                    <h3 className="dash__email">Email: {currentUser.email}</h3>
                    <div className="adminBtnContainer">
                        <button className="dashboard__updateBtn">
                            <Link
                                to="/update-profile"
                                className="dashboard__updateLink"
                            >
                                Update Profile
                            </Link>
                        </button>
                    </div>
                    <div>
                        <button
                            className="dashboard__logout"
                            variant="link"
                            onClick={handleLogout}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
                <div className="mainbar"></div>
            </div>
            // <div className="dash__container admin">
            //     <div className="dash__box admin">
            //         <h2 className="dashboard__heading">Profile</h2>
            //         {error && <alert variant="danger">{error}</alert>}
            //         <h4 className="dash__email">Email: {currentUser.email}</h4>
            //         <br></br>
            // <div className="btnContainer">
            //     <button className="dashboard__updateBtn">
            //         <Link
            //             to="/update-profile"
            //             className="dashboard__updateLink"
            //         >
            //             Update Profile
            //         </Link>
            //     </button>
            // </div>
            //     </div>
            //     <div>
            //         <button
            //             className="dashboard__logout"
            //             variant="link"
            //             onClick={handleLogout}
            //         >
            //             Log Out
            //         </button>
            //     </div>
            // </div>
        );
    }
}
