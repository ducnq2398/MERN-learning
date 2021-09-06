const authActions = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",

  LOGOUT: "LOGOUT",

  REGISTER: "REGISTER",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAILED: "REGISTER_FAILED",

  login: (payload) => ({
    type: authActions.LOGIN,
    payload: payload,
  }),

  loginSuccess: (result) => ({
    type: authActions.LOGIN_SUCCESS,
    payload: result,
  }),

  logout: () => ({
    type: authActions.LOGOUT,
  }),

  register: (payload) => ({
    type: authActions.REGISTER,
    payload: payload
  })
};

export default authActions;
