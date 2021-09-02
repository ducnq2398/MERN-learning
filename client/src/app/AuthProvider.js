import React, { createContext, useEffect, useState } from "react";
import { userHelper } from "../helpers";
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));
  useEffect(() => {
    const token = userHelper.getTokenFromStorage();
    if (token) setLoggedIn(true);
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
