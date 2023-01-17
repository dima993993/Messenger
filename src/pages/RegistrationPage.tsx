import React from "react";
import { NavLink } from "react-router-dom";
import Registration from "../components/Registration";
const RegistrationPage = () => {
  return (
    <div>
      <Registration />
      <div>
        If you have an account <NavLink to="/authorization">Sign In</NavLink>
      </div>
    </div>
  );
};

export default RegistrationPage;
