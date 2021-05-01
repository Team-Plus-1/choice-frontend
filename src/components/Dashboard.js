import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div className="container">
        <h2 className="dashboard__heading">Profile</h2>
        {error && <alert variant="danger">{error}</alert>}
        <h4>Email:</h4> {currentUser.email}
        <br></br>
        <div className="btnContainer">
          <button className="dashboard__updateBtn">
            <Link to="/update-profile" className="dashboard__updateLink">
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
    </>
  );
}
