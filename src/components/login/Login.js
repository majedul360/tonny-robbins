import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sociallogin from "../socialLogin/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/Firebase.int";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../footer/Footer";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [googleUser] = useAuthState(auth);
  if (user || googleUser) {
    navigate(from, { replace: true });
  }

  const formHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
  };

  const resetPassword = async () => {
    await sendPasswordResetEmail(email);
    notify();
    setEmail("");
  };

  const notify = () => toast("Please Check Your Email !");
  return (
    <>
      <div className="auth-container">
        <div>
          <Sociallogin />
          <div className="form-container">
            <h3>login</h3>
            <form onSubmit={formHandler} action="">
              <input
                type="email"
                placeholder="enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p
                className="error"
                style={{
                  textAlign: "initial",
                  color: "red",
                  textAlignLast: "initial",
                }}
              >
                {error?.message}
              </p>
              <input className="btn" type="submit" value="login" />
            </form>
            <p>
              new to tony robbins?{" "}
              <Link className="link" to="/registar">
                create account
              </Link>
            </p>
            <span
              style={{
                color: "#000",
                textDecoration: "underLine",
                cursor: "pointer",
                fontSize: "1.7rem",
                marginTop: "1rem",
              }}
              onClick={resetPassword}
            >
              forgot password
            </span>
            <ToastContainer />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
