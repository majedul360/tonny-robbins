import { Link } from "react-router-dom";
import Sociallogin from "../socialLogin/SocialLogin";
import "./Registar.css";

const Registar = () => {
  return (
    <div className="auth-container">
      <div>
        <Sociallogin />
        <div className="form-container">
          <h3>registar</h3>
          <form action="">
            <input type="text" placeholder="enter your name" required />
            <input type="email" placeholder="enter your email" required />
            <input type="password" placeholder="enter your password" required />
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
  );
};

export default Registar;
