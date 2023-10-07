import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
return (
<div className="max-w-7xl mx-auto">
  <div><Navbar></Navbar> </div>
     <Outlet></Outlet>                                   
</div>
);
};

export default MainLayout;