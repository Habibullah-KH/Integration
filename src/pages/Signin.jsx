import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../component/Authprovide";

const Signin = () => {

  const navigate = useNavigate();
    const {createUser} = useContext(AuthContext);

    const handleSignin = (e) => {
        e.preventDefault();
        const userName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        createUser ( email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate('/')
        })
        .catch(error => {
            console.log(error.massage);
        })
    }

    return (
        <>

            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">

      <h1 className="text-5xl font-bold"> Signin now!</h1>

      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

        {/*form start */}
      <form onSubmit={handleSignin} className="card-body">


        <div className="form-control">
          <label className="label">
            <span className="label-text">User name</span>
          </label>
          <input type="text" name="name" placeholder="User name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign in</button>
        </div>

        <p className="py-4">
            Alrady have an account! <NavLink to='/login'><button className="text-blue-950 hover:border-b hover:border-blue-950 border-b border-white animate-pulse">Login</button></NavLink>
        </p>
      </form>


    </div>
  </div>
</div>
        </>
    );
};

export default Signin;