import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";

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
        element:<ServiceDetails></ServiceDetails>,
        loader:()=>fetch("/services.json")
      }
    ]
  }
])


export default router ;