import { client } from "../helpers/auth.header";

export const authenticationService = {
  getUserLoginInfo,
  login,
  logout,
  register,
};
const endpoint = "auth";
function getUserLoginInfo(data) {
  return client(null, `${endpoint}/login`, {
    body: data,
  });
}
function login() {
  logout();
  window.location.href = "http://localhost:3000";
}

function logout() {
  // remove all item local storage to log user out
  localStorage.clear();
  window.location.href = "http://localhost:3000";
}

function register(data) {
  return client(null, `${endpoint}/register`, {
    method: "POST",
    body: data,
  });
}
