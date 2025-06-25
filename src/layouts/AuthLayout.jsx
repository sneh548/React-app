// import React from 'react'

import { Navigate, Outlet } from "react-router-dom";
import { LOGIN_ROUTE } from "../constants/routes";
import { useSelector } from "react-redux";

const AuthLayout = () => {
    const {user} = useSelector((state) => state.auth);
  return<>
  {user ?  <Outlet/>:<Navigate to={LOGIN_ROUTE} />}
  </>
};

export default AuthLayout;
