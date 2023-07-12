import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import swal from "sweetalert";
import { Authentication } from "../utils/firebase.config";
import { useNavigate } from "react-router-dom";

const Signupform = () => {
  const [inputform, setinputform] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  let dataform = async (event) => {
    event.preventDefault();
    const { email, password } = inputform;
    try {
      await createUserWithEmailAndPassword(Authentication, email, password);
      swal({
        title: "Hurry ! Sign Up Successfull",
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Something Wents Wrong!",
        text: error,
        icon: "error",
      });
    }
    onAuthStateChanged(Authentication, (currentUser) => {
      if (currentUser) navigate("/");
    });
  };
  return (
    <div className="flex flex-col items-center flex-grow-1 p-5 gap-3 h-96 box-border">
      <div className="font-bold md:text-5xl text-4xl  pl-2 pr-2 text-center">
        Unlimited Movies, TV Shows and More
      </div>
      <p className="font-bold md:text-2xl text-xl text-center pl-0.5 pr-1.5">
        Watch Anywhere, Cancel Anytime
      </p>
      <p className="font-bold md:text-2xl text-xl text-center pl-0.5 pr-1.5">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className="flex lg-flex-col md:flex-row max-sm:flex-col p-3 gap-3 w-full">
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-full p-4 rounded bg-slate-900"
          onChange={(e) => {
            setinputform({
              ...inputform,
              email: e.target.value,
            });
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded bg-slate-900"
          onChange={(e) => {
            setinputform({
              ...inputform,
              password: e.target.value,
            });
          }}
        />
        <button
          onClick={
            inputform
              ? dataform
              : swal({
                title: "Form Empty",
                text: "Please Fill the Sign Up Form Completely",
                icon: "failed",
              })
          }
          className="pl-6 pr-6 pt-3 pb-3 md:text-3xl lg:w-full text-xl rounded bg-red-600 font-bold"
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default Signupform;
