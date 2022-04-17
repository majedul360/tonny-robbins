import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="header">
      <span className="name">tony robbins</span>
      <nav className={`${isMenuOpen && "active"}`}>
        <Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link
          className="nav-link"
          to="/about"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          className="nav-link"
          to="/blogs"
          onClick={() => setIsMenuOpen(false)}
        >
          Blogs
        </Link>
        <Link
          className="nav-link"
          to="/registar"
          onClick={() => setIsMenuOpen(false)}
        >
          Registar
        </Link>
        <Link
          className="nav-link"
          to="/login"
          onClick={() => setIsMenuOpen(false)}
        >
          Login
        </Link>
      </nav>
      <FontAwesomeIcon
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        icon={faBars}
        className="menu"
      />
    </div>
  );
};

export default Header;
