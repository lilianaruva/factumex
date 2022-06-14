import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="navItem">
          <Link to="/employees">Employees</Link>
          <Link to="/upload">Upload</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
