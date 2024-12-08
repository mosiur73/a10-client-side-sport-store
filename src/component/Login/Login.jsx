import React, { useContext, useState } from 'react';
import { FaEyeSlash, FaGoogle, FaRegEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {singInuser,googleLogin}=useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate=useNavigate()
    const location = useLocation();
    const haneleSignIn=e=>{
        e.preventDefault()
        const email=e.target.email.value;
          const password=e.target.password.value;
          const user={email,password}
        

          singInuser(email,password)
          .then(result =>{
            // console.log(result)
            toast.success('Login Successful!');
        const redirectPath = location?.state?.from || '/';
        navigate(redirectPath);  
            
          })
          .catch(error =>{
            toast.error('Login Failed. Please check your credentials.');
            e.target.reset(); 
          })
    }

    const handleGoogleLogin=()=>{
        googleLogin()
        .then(res=>{
        
          const redirectPath = location?.state?.from || '/';
        navigate(redirectPath);
        })
        .catch((error) => {
          toast.error('Google Login Failed. Try again.');
        });
      }
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={haneleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? 'text' : "password"} name='password' placeholder="password" className="input input-bordered" required />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className=' absolute right-4 top-12'>

            {
              showPassword ? <FaEyeSlash /> : <FaRegEye />
            }
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="divider divider-accent">Or</div>
            <button onClick={handleGoogleLogin}  className='btn btn-outline'><FaGoogle /> Login with google</button>
            <p>New user have an account <Link className='underline' to="/register">Register</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;