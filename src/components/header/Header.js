import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="header">
      <nav className={`${isMenuOpen && "active"}`}>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
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
