import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
  const handleService =_id=>{
    console.log(_id);
    // fetch(`http://localhost:4000/services/${_id}`);

  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-6 pt-6">
        <img src={service?.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex-1">{service?.title}</h2>

        <div className="card-actions">
          <p className="text-primary text-md font-semibold">
            Price:{service?.price}
          </p>
          <Link to={`/serviceDetails/${service._id}`}>

          <button
            onClick={() => handleService(service?._id)}
            className="btn btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                stroke="#FF3811"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;