import React from "react";
import Starlinklogo from "../assets/starlinklogo.png";

const Orderstarlink = () => {
  return (
    <div className="w-full px-4 py-16 bg-black text-white text-center mt-[-15vh]">
      <div className="flex sm:items-center sm:justify-center items-start justify-start">
        <img className="w-[360px]" src={Starlinklogo} alt="/" />
      </div>
      <div className="pt-2 pb-1 flex sm:items-center sm:justify-center items-start justify-start">
        <input
          className="p-3 rounded-md mr-4 text-black"
          type="email"
          placeholder="Service Address"
        />
        <button className=" rounded-md px-3 ">Order Now</button>
      </div>
      <div className="flex sm:items-center sm:justify-center items-start justify-start text-xs ">
        <p>By clicking order now, you agree to our Privacy Policy.</p>
      </div>
    </div>
  );
};

export default Orderstarlink;
