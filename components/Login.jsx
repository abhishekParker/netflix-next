import React from "react";
import Logo from "./Logo";
import { FcGoogle } from "react-icons/fc";
import { AiFillTwitterCircle, AiFillRedditCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="login_bg_gradient bg-cover h-screen grid place-items-center">
      <Logo style="w-52 absolute top-0 left-0 m-8" />
      <div className="bg-[rgba(0,0,0,0.8)] p-10 w-[22em] h-[80vh] rounded-md mt-16">
        <h1 className="text-3xl font-medium text-white">Sign in</h1>
        <form className="space-y-6 my-8">
          <input
            type="email"
            className="w-full"
            placeholder="Email or phone number"
          />
          <input type="password" className="w-full" placeholder="Password" />

          <button className="bg-[#e50914] text-white w-full py-2 font-medium rounded-md mb-0">
            Sign In
          </button>
          <div className="text-gray-300 flex items-center">
            <input type="checkbox" className="accent-gray-300 w-4 h-4" />
            <span className="ml-1">Remember me?</span>
          </div>
        </form>

        <div className="my-6">
          <h1 className="text-gray-400">
            New to Netflix?{" "}
            <span className="text-white font-medium hover:underline cursor-pointer">
              Sign up now.
            </span>
          </h1>
        </div>

        <div className="flex justify-between ">
          <FcGoogle
            size={35}
            className="cursor-pointer bg-white rounded-full p-1"
            onClick={() => signIn("google")}
          />
          <BsGithub
            size={35}
            className="cursor-pointer rounded-full"
            onClick={() => signIn("github")}
          />
          <AiFillTwitterCircle
            size={35}
            className="cursor-pointer bg-sky-500 rounded-full p-1"
          />
          <AiFillRedditCircle
            size={35}
            className="cursor-pointer bg-orange-500 rounded-full p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
