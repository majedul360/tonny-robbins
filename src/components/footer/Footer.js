import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="box">
          <h6>ROBBINS RESEARCH INTERNATIONAL, INC.</h6>
          <p className="description">
            9051 Mira Mesa Blvd P.O. Box 261229 San Diego, CA 92196
          </p>
          <h6>CONNECT WITH TONY</h6>
          <div className="icons">
            <FontAwesomeIcon className="icon" icon={faFacebook} />
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <FontAwesomeIcon className="icon" icon={faYoutube} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
          </div>
        </div>
        <div className="box">
          <span>sitemap</span>
          <span>terms</span>
          <span>return policy</span>
          <span>firewalk</span>
          <span>accessiblity</span>
        </div>

        <div className="box">
          <span>careers</span>
          <span>policies</span>
          <span>DISC assesment</span>
          <span>crew program</span>
        </div>
        <div className="box">
          <h6 style={{ color: "#14aecf" }}>
            MEDIA INQUIRIES
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginLeft: "1rem" }}
            />
          </h6>
          <p>
            Robbins Research International, Inc. has a dedicated media
            department. Members of the press are welcome to contact us re...
          </p>
          <h6 style={{ color: "#14aecf", marginTop: "2rem" }}>
            CUSTOMER SUPPORT
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginLeft: "1rem" }}
            />
          </h6>
          <p>
            Contact Customer Support for questions on your products, coaching,
            or events....
          </p>
        </div>
      </div>

      <hr />
      <div className="credits">
        &copy; {year} Robbins Research International, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
