import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <span className="loading mx-auto loading-infinity loading-lg h-screen "></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {};

export default PrivateRoute;
