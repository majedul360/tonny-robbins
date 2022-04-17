import "./SocialLogin.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase/Firebase.int";
const Sociallogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div className="social-login">
      <div className="login" onClick={() => signInWithGoogle()}>
        <img src="images/google.png" alt="" />
        <span>continue with google</span>
      </div>
      <p className="error">{error?.message}</p>
      <p className="or">
        <span>or</span>
      </p>
    </div>
  );
};

export default Sociallogin;
