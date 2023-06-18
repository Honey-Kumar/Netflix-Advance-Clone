import React from "react";

const Showphase = (props) => {
  return props.dir === "true" ? (
    <div className="flex md:flex-row lg:flex-row flex-col justify-center items-center">
      <div className="w-2/4 flex flex-col item-start justify-center gap-4 p-6">
        <h2 className="font-bold max-sm:text-2xl md:text-5xl text-4xl pl-2 pr-2 ">
          {props.tittle}
        </h2>
        <p className="font-bold max-sm:text-base md:text-2xl text-xl pl-0.5 pr-1.5">
          {props.para}
        </p>
      </div>
      <div className="w-2/4">
        <img src={props.src} alt="bgImage" className=" p-8 max-sm:p-2" />
      </div>
    </div>
  ) : (
    <div className="flex md:flex-row lg:flex-row flex-col justify-center items-center">
      <div className="w-2/4">
        <img src={props.src} alt="imagedata" className=" p-8 max-sm:p-2" />
      </div>
      <div className="w-2/4 flex flex-col item-start justify-center gap-4 p-6">
        <h2 className="font-bold max-sm:text-2xl md:text-5xl text-4xl pl-2 pr-2 ">
          {props.tittle}
        </h2>
        <p className="font-bold max-sm:text-base md:text-2xl text-xl pl-0.5 pr-1.5">
          {props.para}
        </p>
      </div>
    </div>
  );
};

export default Showphase;
