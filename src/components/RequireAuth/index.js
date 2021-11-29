import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const validate = () => {
  const token = Cookies.get("token") || localStorage.getItem("token");
    console.log('token ===>', token)
  if (token) {
    return true;
  }

  return false;
};

const RequireAuth = ({ children, redirectTo }) => {
  const isAuthenticated = validate();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default RequireAuth;
