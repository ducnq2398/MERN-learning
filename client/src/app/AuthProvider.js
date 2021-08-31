import React, { createContext, useState } from "react";
import { userHelper } from "../helpers";
export const AuthContext = createContext();

const isValidToken = () => {
  const token = userHelper.getTokenFromStorage();
  if (token) return true;
  return false;
};

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(isValidToken);

  const signIn = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    setLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, signIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
