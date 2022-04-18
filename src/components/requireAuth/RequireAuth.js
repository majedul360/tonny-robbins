import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase/Firebase.int";

const Requireauth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (!user) {
    if (loading) {
      return;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default Requireauth;
