import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import InputField from "../Shared/LoginForm";
import { useDispatch } from "react-redux";
import { authenticateSignInUser } from "../../store/actions";
import toast from "react-hot-toast";
import Spinners from "../Shared/Spinners";

const LogIn = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: "onTouched" });
  const dispatch = useDispatch();

  const loginHandler = async (data) => {
    dispatch(authenticateSignInUser(data, toast, reset, navigate, setLoader));
  };
  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <AiOutlineLogin className="text-slate-800 text-5xl" />
          <h1 className="text-slate-800 text-center font-family-montserrat lg:text-3xl text-2xl font-bold">
            Login Here
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
            label="Password"
            id="password"
            type="password"
            errors={errors}
            required
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
          {loader ? <><Spinners/> Loading</>: "Login"}
        </button>
        <p className="text-center text-sm text-slate-700 mt-6">
          Dont't have an account?
          <Link to={"/register"} className="font-semibold underline hover:text-black ml-1">
            <span>SignUp</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
