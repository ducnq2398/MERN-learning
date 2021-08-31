import { apiConfigs } from "../constants/api.config";
import { authHeader } from "../helpers/auth.header";
import { handleResponse } from "../helpers/handle.response";

export const authenticationService = {
  getUserLoginInfo,
  login,
  logout,
};

function getUserLoginInfo() {
  const requestOptions = {
    method: "GET",
    headers: authHeader.main(),
  };
  return fetch(
    `${apiConfigs.REACT_APP_BASE_URL_API}/auth/login`,
    requestOptions
  )
    .then(handleResponse)
    .then((user) => {
      // store current user login in local storage
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(user.token));
      return user;
    });
}

function login() {
  logout();
  window.location.href = "http://localhost:3000/login";
}

function logout() {
  // remove all item local storage to log user out
  localStorage.clear();
  window.location.href = `${apiConfigs.REACT_APP_BASE_URL_API}/auth/logout`;
}
