import React from "react";
import Starlink from "../assets/starlink.jpg";

const Starlinkview = () => {
  return (
    <div name="starlink" className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div>
          <h1>Order Starlink</h1>
          <p className="py-4">
            Starlink provides
            <span className="blue">high-speed, low-latency</span> broadband
            internet across the
            <span className="blue"> globe.</span> Within each coverage area,
            orders are fulfilled on a first-come, first-served basis.
          </p>
          <p className="py-1">
            Your
            <span className="blue"> Starlink Kit</span> arrives with everything
            you need to get online including your Starlink, wifi router, cables
            and base.
          </p>
        </div>
        <div className="flex justify-center w-full py-16">
          <img
            className="max-w-[370px] shadow-lg shadow-cyan-500/50"
            src={Starlink}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Starlinkview;
