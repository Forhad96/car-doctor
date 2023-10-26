import { Link, useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const service = useLoaderData()
    const {_id,title,price}=service
    return (
        <div>
            <h1 className="text-6xl text-center">{title}</h1>
            <h4 className="text-xl font-bold">  price:{price}</h4>
            <Link to={`/checkout/${_id}`}>
            <button className="btn bg-primary text-white hover:text-primary">Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;