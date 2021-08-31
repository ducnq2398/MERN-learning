import React from "react";
import { Link } from "react-router-dom";
import desIcon from "../../assets/img/streamline-icon-designer@400x400.png";
export default function Login() {
  return (
    <div className="container-fluid bg">
      <div className="row">
        <div class="col-sm">
          <img className="_desIcon" src={desIcon} alt="" />
        </div>
        <div class="col-sm">
          <div className="login">
            <h3>MERN LEARNING</h3>
            <div className="login-field">
              <i className="fas fa-user login-icon"></i>
              <input
                type="text"
                className="login-input"
                placeholder="Username"
                required
              />
            </div>
            <div className="login-field">
              <i className="fas fa-lock login-icon"></i>
              <input
                type="text"
                className="login-input"
                placeholder="Password"
                required
              />
            </div>
            <Link to="#" className="login-forgot-password">
              Forgot password?
            </Link>
            <button className="btn-login">Login</button>
            <div className="login-register">
              If you don't have a account. <Link to="#">Click here</Link>
            </div>
          </div>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
}
