import { apiConfigs } from "../constants/api.config";
import { client } from "../helpers/auth.header";

export const authenticationService = {
  getUserLoginInfo,
  login,
  logout,
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
  window.location.href = `${apiConfigs.REACT_APP_BASE_URL_API}/auth/logout`;
}
