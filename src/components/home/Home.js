import "./Home.css";
import Banner from "../banner/Banner";
import Services from "../services/Services";
import Tonysbio from "../tonysBio/TonysBio";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Banner className="banner" />
      <Services />
      <Tonysbio />
      <Footer />
    </div>
  );
};

export default Home;
