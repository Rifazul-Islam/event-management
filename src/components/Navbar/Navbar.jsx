import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import { toast } from "react-toastify";

const Navbar = () => {

  const{user,userLogOut} = useContext(AuthContext)
  const handlerSignOut = ()=>{
    userLogOut()
    .then(()=>{
      toast.success("user SigOut Successfully")
    })
    .catch(error =>{
      toast.error(error.message)
    })
  }


const items = <>
    <li> <NavLink to="/" 
     className={({isActive})=>
       isActive ? "bg-green-300 p-1 px-2 rounded-md " : " "
     }
    
    > Home </NavLink> </li>

    <li> <NavLink to="/training" 
     className={({isActive})=>
     isActive ? "bg-green-300 p-1 px-2 rounded-md " : " "
   }> Training</NavLink> </li>

    <li> <NavLink to="/blog" 
     className={({isActive})=>
     isActive ? "bg-green-300 p-1 px-2 rounded-md " : " " }
    > Blog </NavLink> </li>
 </>

return (
<div className="navbar  shadow-md p-3 py-6 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="space-x-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {items}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" text-[18px] font-bold space-x-3 menu-horizontal px-1">
    {items}
    </ul>
  </div>
  <div className="navbar-end ">

 {
   user ? <div className="space-x-3 flex items-center "> <span> {user?.displayName} </span> <span> <img className="w-14 h-14 rounded-full" src={user?.photoURL} alt="" /> </span>   <button onClick={handlerSignOut} className="btn"> Sign out</button> </div> :<Link to="/login" className="btn"> Login </Link>
 }

    



  </div>
</div>
);
};

export default Navbar;
