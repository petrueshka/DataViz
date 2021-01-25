import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    backgroundColor: "#343a40",
    color: "#ffffff",
    padding: "6px",
  };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/login" activeStyle={activeStyle}>
        Log in
      </NavLink>
      {" | "}
      <NavLink to="/register" activeStyle={activeStyle}>
        Register
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/sales" activeStyle={activeStyle}>
        Live Sales
      </NavLink>
      {" | "}
      <NavLink to="/graphs" activeStyle={activeStyle}>
        Charts
      </NavLink>
    </nav>
  );
};
export default Header;
