import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";


const Services = () => {

const[services,setServices] = useState([])

useEffect(()=>{

 fetch("/services.json")
 .then(res =>res.json())
 .then(data => setServices(data))
}, [])

console.log(services);

return (
<div>
<div className=" text-center"><button className="btn btn-wide  text-2xl capitalize text-orange-600 font-bold">  Our Services </button>  </div> 

<div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
   {
     services &&
      services?.map(service => <ServiceCard key={service.id} service={service} ></ServiceCard>)
   }
</div>


</div>
);
};

export default Services;