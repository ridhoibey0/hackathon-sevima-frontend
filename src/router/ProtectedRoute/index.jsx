import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default Protected;
