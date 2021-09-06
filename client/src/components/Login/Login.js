import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import desIcon from "../../assets/img/streamline-icon-designer@400x400.png";
import actions from "../../redux/auth/actions";

const { login } = actions;
export default function Login() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handleOnChangeInput(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value.trim(),
    });
  }

  function handleLogin() {
    dispatch(login(user));
  }

  return (
    <div className="container-fluid bg">
      <div className="logo">
        <img className="_desIcon" src={desIcon} alt="" />
      </div>
      <div className="login">
        <h3>MERN LEARNING</h3>
        <div className="login-field">
          <i className="fas fa-user login-icon"></i>
          <input
            name="username"
            type="text"
            className="login-input"
            placeholder="Username"
            required
            onChange={handleOnChangeInput}
          />
        </div>
        <div className="login-field">
          <i className="fas fa-lock login-icon"></i>
          <input
            name="password"
            type="password"
            className="login-input"
            placeholder="Password"
            required
            onChange={handleOnChangeInput}
          />
        </div>
        <Link to="#" className="login-forgot-password">
          Forgot password?
        </Link>
        <button className="btn-login" onClick={handleLogin}>
          Login
        </button>
        <div className="login-register">
          If you don't have a account. <Link to="/register">Click here</Link>
        </div>
      </div>
    </div>
  );
}
