import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoginRoute = ({ isAuthenticated, checkAdmin, user }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (checkAdmin) {
    if (user.user.role !== "admin") return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default LoginRoute;
