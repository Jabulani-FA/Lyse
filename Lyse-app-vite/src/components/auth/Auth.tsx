import React, { useState } from "react";
import InputBox from "../reusable/InputBox";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  //   const defaultOptions = {
  //     reverse: false, // reverse the tilt direction
  //     max: 35, // max tilt rotation (degrees)
  //     perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  //     scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  //     speed: 1000, // Speed of the enter/exit transition
  //     transition: true, // Set a transition on enter/exit.
  //     axis: null, // What axis should be disabled. Can be X or Y.
  //     reset: true, // If the tilt effect has to be reset on exit.
  //     easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  //   };
  const [loginOption, setloginOption] = useState(false);
  const [signupOption, setsignupOption] = useState(false);



  return (
    <div>
      <div className="md:flex w-screen h-screen">
        <div className="md:w-64 h-screen bg-black">
          <div className="fixed top-50">
            <h3 className="text-gray-900 dark:text-white text-2xl ms-4 font-bold tracking-tight">
              Login to see history
            </h3>
            <div className="login-flex-options">
              <button onClick={() => {
                setsignupOption(true)
                setloginOption(false)
                }}>Sign Up</button>
              <button onClick={() => {
                setloginOption(true)
                setsignupOption(false)}}>Log In</button>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          <p className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent mb-2">
            Lyse
          </p>
          {loginOption ? (
            <><Login/></>
          ) : signupOption ? (
            <><Signup/></>
          ) : (
            <InputBox
              yPosition="top-50"
              animateInput={true}
              disableQuery={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
