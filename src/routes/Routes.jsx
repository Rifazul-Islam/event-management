import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Training from "../Pages/Training/Training";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
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
      },{
         path:"/training",
         element: <PrivateRoutes> <Training></Training> </PrivateRoutes>
      },{
        path:"/blog",
        element:<PrivateRoutes> <Blog></Blog> </PrivateRoutes> 
      }
    ]
  }
])


export default router ;