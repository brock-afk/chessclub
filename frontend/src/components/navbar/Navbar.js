import "./Navbar.css";
import logo from "./tiny.svg";

import React from "react";

const Navbar = () => {
  return (
    <nav className="nav">
      <img className="logo" height="60px" width="60px" src={logo} alt="logo" />
      <div>Chess Club</div>
    </nav>
  );
};

export default Navbar;
