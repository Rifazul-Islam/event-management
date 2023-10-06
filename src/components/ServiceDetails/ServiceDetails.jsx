import { Link, useLoaderData, useParams } from "react-router-dom";



const ServiceDetails = () => {
 
  const services = useLoaderData()   
  const {id} = useParams()
  const findOut = services?.find(service => service.id === id)
 
  const{img, description,name} = findOut ;
          

return (
<div>
 

 <div className="card card-side mt-6 bg-base-100 shadow-2xl grid grid-cols-1 md:grid-cols-2">
  <figure><img className="h-[300px]"  src={img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}!</h2>
    <p className="text-xl text-justify"> {description} </p>
    <div className="card-actions justify-end">
     <Link to="/">  <button className="btn btn-secondary capitalize"> Go to Home</button> </Link>
    </div>
  </div>
</div>




</div>
);
};

export default ServiceDetails;