import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import squares from "../images/squares.svg";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="Login">
      {/* <div className="image-wrapper">
        <img className="background-image" src={squares} />
      </div> */}
      <h2 className="login__heading">Log In</h2>
      {error && <alert variant="danger">{error}</alert>}
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">Email</label>
        <input className="login__input" type="email" ref={emailRef} required />
        <label className="login__label">Password</label>
        <input
          className="login__input"
          type="password"
          ref={passwordRef}
          required
        />
        <button disabled={loading} className="login__btn" type="submit">
          Log In
        </button>
      </form>
      <div className="mt">
        <Link className="custom" to="/forgot-password">
          Forgot Password?
        </Link>
      </div>
      <div className="login__signUpLink">
        Need an account?{" "}
        <Link className="custom zz" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
