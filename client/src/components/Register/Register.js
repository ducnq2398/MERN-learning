import React, { useState } from "react";
import { useDispatch } from "react-redux";
import desIcon from "../../assets/img/streamline-icon-designer@400x400.png";
import actions from "../../redux/auth/actions";

const { login } = actions;
export default function Register() {
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
        <div className="login-field">
          <i className="fas fa-lock login-icon"></i>
          <input
            name="password"
            type="password"
            className="login-input"
            placeholder="Confirm password"
            required
            onChange={handleOnChangeInput}
          />
        </div>

        <button className="btn-login" onClick={handleLogin}>
          Register
        </button>
      </div>
    </div>
  );
}
