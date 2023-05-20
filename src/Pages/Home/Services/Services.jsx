import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data => setServices(data));
    })

    return (
        <div className="mt-4"> 
        <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 ">Our Services</div>
            <h2 className="text-5xl">Our Service Area</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, vitae! Beatae at non magni, quaerat voluptas <br /> accusamus corporis earum quas? Minus iure, eius quis perspiciatis earum minima ducimus repellendus iste!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <p>serivices: {services.length}</p> */}
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;