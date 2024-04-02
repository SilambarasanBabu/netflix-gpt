import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUp, setisSignUp] = useState(true);

  const toggleSignInForm = () => {
    setisSignUp(!isSignUp);
  };

  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute text-white w-3/12 bg-black p-12 my-36 mx-auto left-0 right-0 opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignUp ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6 w-full bg-red-500 rounded-lg">
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignUp ? "New to netflix?" : "Already Registered?"}
          <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>
            {isSignUp ? "Sign up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
