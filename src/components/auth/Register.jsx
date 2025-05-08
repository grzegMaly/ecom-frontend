import React, { useState } from 'react'
import { FaUserPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../Shared/LoginForm';
import { useForm } from 'react-hook-form';
import { registerNewUser } from '../../store/actions';
import toast from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm({ mode: "onTouched" });
    const dispatch = useDispatch();
  
    const registerHandler = async (data) => {
      dispatch(registerNewUser(data, toast, reset, navigate, setLoader));
    };
    return (
      <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md"
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <FaUserPlus className="text-slate-800 text-5xl" />
            <h1 className="text-slate-800 text-center font-family-montserrat lg:text-3xl text-2xl font-bold">
              Register Here
            </h1>
          </div>
          <hr className="mt-2 mb-5 text-black" />
          <div className="flex flex-col gap-3">
            <InputField
              label="UserName"
              id="username"
              type="text"
              errors={errors}
              required
              register={register}
              message="*Username is required"
              placeholder="Enter your username"
            />
            <InputField
              label="Email"
              id="email"
              type="email"
              errors={errors}
              required
              register={register}
              message="*Email is required"
              placeholder="Enter your email"
            />
            <InputField
              label="Password"
              id="password"
              type="password"
              errors={errors}
              required
              min={6}
              register={register}
              message="*Password is required"
              placeholder="Enter your password"
            />
          </div>
          <button
            disabled={false}
            className="bg-linear-to-r from-[#7e22ce] to-[#ef4444] 
            flex gap-2 items-center justify-center font-semibold 
            text-white w-full py-2 hover:text-slate-400 transition-colors 
            duration-100 rounded-sm my-3 disabled:text-white disabled:opacity-70 disabled:cursor-default hover:cursor-pointer"
            type="submit"
          >
            {loader ? "Loading..." : "Register"}
          </button>
          <p className="text-center text-sm text-slate-700 mt-6">
            Already have an account?
            <Link to={"/login"} className="font-semibold underline hover:text-black ml-1">
              <span>LogIn</span>
            </Link>
          </p>
        </form>
      </div>
    );
  };

export default Register;