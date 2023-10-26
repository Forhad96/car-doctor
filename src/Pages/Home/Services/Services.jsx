import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";
import Loading from "../../../Shared/Loading/Loading";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:4000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
      setLoading(false)
  }, []);

  if(loading){
    return <Loading></Loading>
  }

  return (
    <div>
      <p className="text-xl font-bold text-primary text-center">About Us</p>
      <h2 className="text-5xl font-bold text-center">Our Service Area</h2>
      <p
        className="text-lg text-center
        "
      >
        The majority have suffered alteration in some form, by injected humour,
        or randomized words which do not look even slightly believable.{" "}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
        </div>
    </div>
  );
};

export default Services;
