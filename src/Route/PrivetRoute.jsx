import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "../context/Auth";

const PrivateRoute = ({ Component }) => {
  //   const [auth, setAuth] = useAuth();
  const data = localStorage.getItem("auth");
  const parseData = JSON.parse(data);
  let location = useLocation();

  return parseData?.user ? (
    <Component />
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: location } }} />
  );
};

export default PrivateRoute;
