import React, { useEffect } from "react";
import {  Outlet, useNavigate } from "react-router-dom";
import Loader from "../Loader";

const LoginRoute = ({ loading, isAuthenticated, checkAdmin, user }) => {
  const history =  useNavigate();
  useEffect(() => {
    // if (loading) {
    //   return <div>Loading...</div>;
    // } else {
    if (!isAuthenticated ) {
      history( '/login') 
    }
    if (checkAdmin && loading === false) {
      if (user.user.role !== "admin") history("/");
    }
    // }
  }, [isAuthenticated, loading, checkAdmin, user , history]);

 

  return <>{loading ? <Loader/> : <Outlet />}</>;
};

export default LoginRoute;
