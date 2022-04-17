import React from "react";
import { Link } from "react-router-dom";
import Sociallogin from "../socialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="auth-container">
      <div>
        <Sociallogin />
        <div className="form-container">
          <h3>login</h3>
          <form action="">
            <input type="email" placeholder="enter your email" required />
            <input type="password" placeholder="enter your password" required />
            <input className="btn" type="submit" value="login" />
          </form>
          <p>
            new to tony robbins?{" "}
            <Link className="link" to="/login">
              create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
