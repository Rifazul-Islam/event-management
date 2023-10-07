import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
const{user,loading} = useContext(AuthContext)

 if(loading){
  return <div className="mt-36 text-center text-indigo-800"> <span className="loading loading-spinner loading-lg"></span> </div>
 }

 if(user){
  return children
 }

 return <Navigate to="/login"/>

};

export default PrivateRoutes;