import { Link } from "react-router-dom";

const Login = () => {

const handlerLogin = (e) =>{
  e.preventDefault()
  const form = new FormData(e.currentTarget)
  const email = form.get("email")
  const password = form.get("password")
  console.log(email,password);
}



return (
  <div>
 <h1 className="text-center py-10 text-4xl font-bold"> Login Now !</h1>
    <div className="card flex-shrink-0 w-[400px] mx-auto shadow-2xl border bg-base-100">
      <form onSubmit={handlerLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" name="password" className="input input-bordered" required />

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      
      <p className="mb-4 text-center font-bold text-indigo-400">Do not have an account? Create an account  <Link className="text-orange-600"> Register </Link>  </p>
    </div>
  </div>


 );
};

export default Login;