import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
const{user,loading} = useContext(AuthContext)

 if(loading){
  return <div> Loading .... </div>
 }
 
 if(user){
  return children
 }

 return <Navigate to="/login"/>

};

export default PrivateRoutes;