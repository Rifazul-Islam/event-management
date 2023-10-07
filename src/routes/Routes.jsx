import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout></MainLayout>,
    children :[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/service/:id",
        element:<PrivateRoutes> <ServiceDetails></ServiceDetails> </PrivateRoutes>,
        loader:()=>fetch("/services.json")
      },{
        path:"/login",
        element:<Login></Login>
      },{
        path:"/register",
        element:<Register></Register>
      }
    ]
  }
])


export default router ;