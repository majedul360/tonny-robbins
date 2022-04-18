import { useState } from "react";
import { Link } from "react-router-dom";
import Sociallogin from "../socialLogin/SocialLogin";
import "./Registar.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/Firebase.int";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import Footer from "../footer/Footer";
const Registar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);

  const formHandler = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="auth-container">
        <div>
          <Sociallogin />
          <div className="form-container">
            <h3>registar</h3>
            <form onSubmit={formHandler} action="">
              <input
                type="text"
                placeholder="enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
                style={{ textAlign: "initial", color: "red", margin: 0 }}
              >
                {error?.message}
              </p>
              <input className="btn" type="submit" value="registar" />
            </form>
            <p>
              already have an account?{" "}
              <Link className="link" to="/login">
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registar;
