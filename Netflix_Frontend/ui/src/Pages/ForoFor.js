import React from "react";
import { FaSearch } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const ForoFor = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-slate-800 p-24 flex flex-col items-center justify-center text-5xl max-sm:text-2xl gap-6 font-bold">
        <FaSearch className="w-64 h-64 max-sm:w-24 max-sm:h-24" />
        404 Nothing Found !
        <Link to="/">
          <button className="pl-28 max-sm:pl-5 max-sm:pr-5 pr-28 h-24 rounded max-sm:h-12 bg-red-600 font-bold ">
            Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default ForoFor;
