import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
      <Link to="/contact" className="navbar-link">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
