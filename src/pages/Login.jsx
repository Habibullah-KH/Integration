import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../component/Authprovide";

const Login = () => {
    const navigate = useNavigate()
    const {logIn, signInWithGoogle} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();


        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        logIn (email, password)
        .then(result => {
            console.log(result.user);
            navigate('/')
        })
        .catch(error => {
            console.log(error.massage);
        })
    }

    //* google sign in function

    const handleGoogleSignIN = () => {
      signInWithGoogle()
      .then(result => {
        console.log(result);
        navigate('/')
      })
      .catch(error => {
        console.log(error);
      })
    }


    return (


        <>
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

        {/* from star */}
      <form onSubmit={handleLogin} className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

        <p className="py-4">
            Don&#39;t have an account! <NavLink to='/signin'><button className="text-blue-950 hover:border-b hover:border-blue-950 border-b border-white animate-pulse">Signup</button></NavLink>
        </p>

<button onClick={handleGoogleSignIN} className="btn btn-outline btn-error">SignIn with google</button>

      </form>
    </div>
  </div>
</div>  
        </>
    );
};

export default Login;