import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <div className="ForgotPassword">
        <h2 className="forgotPassword__heading">Password Reset</h2>
        {error && <alert variant="danger">{error}</alert>}
        {message && <alert variant="success">{message}</alert>}
        <form className="form" onSubmit={handleSubmit}>
          <label className="forgot__emailLabel">Email</label>
          <input
            className="forgot__input"
            type="email"
            ref={emailRef}
            required
          />
          <button
            disabled={loading}
            className="forgotPassword__resetBtn"
            type="submit"
          >
            Reset Password
          </button>
        </form>
        <div className="white forgotPassword__loginLink">
          <Link className="custom" to="/login">
            Login
          </Link>
        </div>
        <div className="white forgotPassword__signUpLink">
          Need an account?{" "}
          <Link className="custom" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}
