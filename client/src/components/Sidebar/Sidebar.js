import React from "react";
import { NavLink } from "react-router-dom";
import { userHelper } from "../../helpers";
import { authenticationService } from "../../services";

export default function Sidebar() {
  function logout() {
    authenticationService.logout();
  }
  const user = userHelper.getUserFromStorage();

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="nav_logo">Hello {user?.username}</label>
      <ul>
        <li>
          <NavLink className="nav_link" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_link" to="/posts">
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_link" to="/login" onClick={logout}>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
