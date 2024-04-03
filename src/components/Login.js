import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMessage(msg);
    if (msg) return;

    if (!isSignIn) {
      //logic for signup form

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //logic for signin form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (
            errorCode === "auth/invalid-credential" &&
            errorMessage === "Firebase: Error (auth/invalid-credential)."
          ) {
            setErrorMessage("Check email and password");
          }
        });
    }
  };

  const toggleSignInForm = () => {
    setisSignIn(!isSignIn);
  }; //Toggle function for sign up and sign in

  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }} //to prevent reloading
        className="absolute text-white w-3/12 bg-black p-12 my-36 mx-auto left-0 right-0 opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full bg-red-500 rounded-lg"
          onClick={handleClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignIn ? "New to netflix?" : "Already Registered?"}
          <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>
            {isSignIn ? "Sign up now" : "Sign In now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
