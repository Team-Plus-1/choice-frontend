import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";
import { db } from "../firebase";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      db.collection("users")
        .add({
          emailId: emailRef.current.value,
        })
        .then(() => {})
        .catch((error) => {
          setError(error.message);
        });
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="signup__container">
      <h2 className="signup__heading">Sign Up</h2>
      {error && <alert variant="danger">{error}</alert>}
      <form className="form" onSubmit={handleSubmit}>
        <label className="signup__label">Email</label>
        <input className="signup__input" type="email" ref={emailRef} required />
        <label className="signup__label">Password</label>
        <input
          className="signup__input"
          type="password"
          ref={passwordRef}
          required
        />
        <label className="signup__label">Password Confirmation</label>
        <input
          className="signup__input"
          type="password"
          ref={passwordConfirmRef}
          required
        />
        <button disabled={loading} className="signup__signUpBtn" type="submit">
          Sign Up
        </button>
      </form>
      <div className="signup__loginLink">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

// test@test.com
// 123123
