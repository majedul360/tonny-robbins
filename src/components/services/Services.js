import { useEffect, useState } from "react";
import Servicecard from "../serviceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data/Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services">
      <h2 className="section-title">services</h2>
      <div className="service-container">
        {services.map((service) => (
          <Servicecard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
