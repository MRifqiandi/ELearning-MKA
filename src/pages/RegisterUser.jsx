import React from "react";

function RegisterUser() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex flex-col p-5 lg:pt-28 lg:p-32">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl font-be-vietnam-pro font-medium">
            Get
            <span className="text-title-login"> Started Now</span>
          </h1>
          <h2 className="font-be-vietnam-pro mt-2 font-medium">
            Yuk, Mulai Belajar Bersama Kita🚀
          </h2>
        </div>
        <form className="mt-8 flex flex-col gap-5 sm:p-10 lg:p-0 font-be-vietnam-pro">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="font-medium">Name</label>
              <input
                className="border-2 rounded-lg p-1"
                placeholder="name"
                type="Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium">Email address</label>
              <input
                className="border-2 rounded-lg p-1"
                placeholder="email"
                type="email"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <label className="font-medium">Password</label>
                <a className="text-xs text-blue-700 cursor-pointer hover:text-blue-950">
                  Forgot Password?
                </a>
              </div>
              <input
                className="border-2 rounded-lg p-1"
                placeholder="password"
                type="password"
              />
            </div>
          </div>
          <div className="flex gap-1.5">
            <input type="checkbox" className="" />
            <label className="font-be-vietnam-pro font-medium text-xs">
              I agree to the terms & policy
            </label>
          </div>
          <div className="flex items-center justify-center pt-3">
            <button className="w-96 h-9 bg-submit-login rounded-lg text-white font-be-vietnam-pro font-bold hover:bg-opacity-90">
              Sign up
            </button>
          </div>
          <div>
            <div className="flex items-center justify-center my-8">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="mx-4 text-gray-500 font-be-vietnam-pro">or</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center lg:flex-row">
            <button className="flex items-center justify-center content-center border-solid border-2 border-slate-300 rounded-xl w-52 h-10 gap-3 font-be-vietnam-pro font-medium hover:bg-gray-100 cursor-pointer">
              <img src="./src/assets/google.svg" />
              <label>Sign in with google</label>
            </button>
            <button className="flex items-center justify-center content-center border-solid border-2 border-slate-300 rounded-xl w-52 h-10 gap-3 font-be-vietnam-pro font-medium hover:bg-gray-100 cursor-pointer">
              <img src="./src/assets/apple.svg" />
              <label>Sign in with apple</label>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="font-medium font-be-vietnam-pro">
              Have an account
              <span className="text-title-login cursor-pointer"> Sign In</span>
            </h1>
          </div>
        </form>
      </div>

      <div className="lg:w-1/2">
        <img
          className="w-full h-full object-cover rounded-l-3xl"
          src="./src/assets/bg-login.svg"
          alt="Login Background"
        />
      </div>
    </div>
  );
}

export default RegisterUser;
