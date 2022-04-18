import React from "react";
import Footer from "../footer/Footer";
import "./Blogs.css";
const Contact = () => {
  return (
    <>
      <div className="blogs">
        <h3>what is difference between authorization and authentication?</h3>
        <p>
          If I simply tell authentication is the process of verifying someone
          who is on the other hand authorization is the process of verifying
          what is user has access to. Authentication is the first step of a good
          identity and access management process.Authorization always takes
          place after authentication.
        </p>
        <h3>
          why are using firebase? what oter option do you have to implement
          authentication?
        </h3>
        <p>
          Google firebase provides many different kinds of services like
          authentication, data base, hosting, realtime database, storage etc.
          And it is free and easy to use. So we are using firebase. There are
          different types of option to implement authentication.
        </p>
        <ul
          style={{
            margin: "1rem 2rem",
            fontSize: "1.7rem",
            lineHeight: "3rem",
          }}
        >
          <li>
            Password-based authentication. Passwords are the most common methods
            of authentication
          </li>

          <li>Multi-factor authentication</li>
          <li>Certificate-based authentication</li>
          <li>Biometric authentication</li>
          <li>Token-based authentication.</li>
        </ul>

        <h3> what other services firebase provide other than authenction?</h3>
        <p>
          Many other services firebase provide other than authenction. Google
          firebase provides many different kinds of services without authenction
          like data base, hosting, realtime database, storage, function, machine
          learnign etc.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
