import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const service = useLoaderData();
    const { title, price } = service;


    const handleCheckout =(event)=>{
        event.preventDefault()
        const form = event.target;
        const date = form.date.value;
        const email = form.email.value;
        const phone = form.phone.value;
    }
    return (
      <div>
        <h1 className="text-6xl text-center">{title}</h1>
        <div>
          <form onSubmit={handleCheckout} className="card-body">
            <div className="md:flex gap-5 justify-between">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name:-"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="md:flex gap-5 justify-between">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-primary hover:text-primary text-white">
                Check Out
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Checkout;