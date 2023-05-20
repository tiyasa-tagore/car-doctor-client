import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const service = useLoaderData();
    const {title, _id} =service;
    return (
        <div>
            <h2>Book Service: {title}</h2>
            
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  
    );
};

export default CheckOut;