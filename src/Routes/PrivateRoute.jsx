/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { AuthContext } from "../AuthProvider/provider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const locatoin = useLocation();
  console.log(locatoin);
  if (loading) {
    return (
      <div className="mx-auto">
        <img
          src="https://i.ibb.co/qWRYqKH/tumblr-n71kcn1ch11ttqncoo1-500.webp"
          alt=""
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={locatoin.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
