import PropTypes from "prop-types";
const ServiceCard = ({service}) => {
const{img,name,description,price} = service          
return (
<div>
<div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="h-[200px] w-full" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>                                   
</div>
);
};


export default ServiceCard;

ServiceCard.propTypes ={
service : PropTypes.object
 }