import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/Firebase.int";
import { signOut } from "firebase/auth";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="header">
      <h3 className="name">tony robbins</h3>
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
        {user ? (
          <span
            onClick={() => signOut(auth, setIsMenuOpen(false))}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            log out
          </span>
        ) : (
          <Link
            className="nav-link"
            to="/login"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        )}
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
