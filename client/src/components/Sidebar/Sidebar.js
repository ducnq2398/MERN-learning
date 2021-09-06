import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo_content">
        <div className="logo">
          <i className="fas fa-hard-hat"></i>
          <div className="logo_name">MernLearning</div>
        </div>
        <i className="fas fa-bars" id="btn"></i>
      </div>
      <ul className="nav_list">
        <li>
          <NavLink to="/dashboard" className="nav_link">
            <i className="fas fa-tachometer-alt"></i>
            <span className="links_name">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/manager" className="nav_link">
            <i className="fas fa-tasks"></i>
            <span className="links_name">Manager</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/subject" className="nav_link">
            <i className="fas fa-book"></i>
            <span className="links_name">Subject</span>
          </NavLink>
        </li>
      </ul>
      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <img
              src="https://kenh14cdn.com/2020/9/27/img3814-16008495660052057963035-16012244314321556076455.jpg"
              alt=""
            />
            <div className="name_job">
              <div className="name">DucNQ</div>
              <div className="job">Developer</div>
            </div>
          </div>
          <i className="fas fa-sign-out-alt" id="log_out"></i>
        </div>
      </div>
    </div>
  );
}
