import { Link } from "react-router-dom";

const ErrorPage = () => {
return (
<div>
<div className="card w-96 mx-auto mt-36 bg-base-100 border-2 shadow-2xl space-y-4">
  <div className="card-body">
    <h2 className=" text-7xl font-bold text-center"> 404!</h2>
    <p className="text-center font-bold text-2xl"> Not Found Page </p>
    <div className="card-actions justify-center pt-10">
      <Link to="/"> <button className="btn btn-primary capitalize">Go Home Page</button> </Link>
    </div>
  </div>
</div>                                   
</div>
);
};

export default ErrorPage;