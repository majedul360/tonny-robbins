import React from "react";
import Footer from "../footer/Footer";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="image">
          <img src="images/majedul.jpg" alt="" />
        </div>
        <h3>majedul islam</h3>
        <p>
          Hi, I am Majedul Islam. In the next five to six months, I will have to
          get a job as a front-end developer in a company. I will do everything
          I need to do for it. Actually, I want to be a good quality full-stack
          web developer and I know I still have a long way to go to be a
          full-stack web developer. And in order to go this long way I need to
          learn as well as earn some money.Which will give me the strength to be
          more diligent and more interested in learning. Hopefully, by the grace
          of Allah, I will be able to fulfill my goals and dreams through my own
          efforts and programming-hero.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
