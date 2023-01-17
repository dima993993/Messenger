import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../components/Login";
const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <Login />
      <NavLink to="/registration">Registration</NavLink>
    </div>
  );
};

export default LoginPage;
