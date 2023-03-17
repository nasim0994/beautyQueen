import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <form>
        <div className="mb-6">
          <label htmlFor="">Mobile Number</label>
          <input
            type="text"
            className="w-full border border-neutral/60 rounded px-3 py-2 outline-none focus:border-primary mt-2"
            defaultValue="01"
            placeholder="01xxxxxxxx"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="">Password</label>
          <input
            type="text"
            className="w-full border border-neutral/60 rounded px-3 py-2 outline-none focus:border-primary mt-2"
            placeholder="Enter Your Password"
          />
        </div>

        <div>
          <button className="w-full bg-primary text-base-100 rounded py-2">
            Login
          </button>
        </div>
      </form>

      <div className="mt-8 text-center text-sm">
        <h2 className="font-medium">
          Don’t have an account?
          <button className="text-primary pl-2">Sign Up</button>
        </h2>
        <Link to="">Forgot Password?</Link>
      </div>
    </>
  );
};

export default LoginForm;
