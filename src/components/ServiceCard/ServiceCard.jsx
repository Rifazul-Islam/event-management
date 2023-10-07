import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {
const{img,name,description,price,id,specific} = service          
return (
<div>
<div className="card card-compact  bg-base-100 shadow-2xl">
  <figure><img className="h-[200px] w-full" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}!</h2>
    <div>
          { description?.length > 100 ? <p className="text-xl text-slate-500 text-justify"> {description?.slice(0,100)}... </p> : description}
    </div>

     <p className="font-bold text-xl text-slate-500 "> Price : ${price} </p>
 
     <Link to={`/service/${id}`} >  <button className="btn  w-full hover:bg-slate-400 text-xl bg-slate-300 text-orange-600 font-bold border-none my-6 capitalize">  {specific} </button> </Link>
   
  </div>
</div>                                   
</div>
);
};


export default ServiceCard;

ServiceCard.propTypes ={
service : PropTypes.object
 }