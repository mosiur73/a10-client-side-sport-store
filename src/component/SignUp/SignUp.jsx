import React, { useState } from 'react';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister=e=>{
        e.preventDefault()
        const name=e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
          const password=e.target.password.value;
          const user={name,photo,email,password}
          console.log(user)
    }
    return (
        <div>
             <div className="card mx-auto mt-20 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="Name" name='photo' className="input input-bordered" required />
              </div>
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
                <input type={showPassword ? 'text' : "password"}  name='password' placeholder="password" className="input input-bordered" required />
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
                <button className="btn btn-primary">Register</button>
              </div>
           

            <p>already have an acount <Link className='underline' to="/login">Please login</Link></p>
            </form>
          </div>
        </div>
    );
};

export default SignUp;