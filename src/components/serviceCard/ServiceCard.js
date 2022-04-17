import "./ServiceCard.css";

const Servicecard = ({ service }) => {
  const { img, name, price, desc } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h3 className="name">{name}</h3>
      <h4 className="price">{price}</h4>
      <p className="description">{desc.slice(0, 210)}</p>
      <span className="btn">book now</span>
    </div>
  );
};

export default Servicecard;
