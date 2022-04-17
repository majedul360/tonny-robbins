import { Link } from "react-router-dom";
import "./ServiceCard.css";

const Servicecard = ({ service }) => {
  const { img, name, price, desc } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h3 className="name">{name}</h3>
      <h4 className="price">{price}</h4>
      <p className="description">{desc.slice(0, 210)}</p>
      <Link to="/book-now" className="btn">
        book now
      </Link>
    </div>
  );
};

export default Servicecard;
