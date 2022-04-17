import "./Home.css";
import Banner from "../banner/Banner";
import Services from "../services/Services";
import Tonysbio from "../tonysBio/TonysBio";
const Home = () => {
  return (
    <div className="home">
      <Banner className="banner" />
      <Services />
      <Tonysbio />
    </div>
  );
};

export default Home;
