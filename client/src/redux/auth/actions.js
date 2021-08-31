const authActions = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",

  LOGOUT: "LOGOUT",

  REGISTER: "REGISTER",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAILED: "REGISTER_FAILED",

  login: (token = false) => ({
    type: authActions.LOGIN,
    token,
  }),
  logout: () => ({
    type: authActions.LOGOUT,
  }),
};

export default authActions;
