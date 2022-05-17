import React from "react";

import Globe from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={Globe}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1>Ultimate Goal of enabling</h1>
        <h1 className="py-2">
          <span className="blue">People </span> to live on other planets
        </h1>
        <p className="text-xl py-4 ">
          It's about believing in the future and thinking that the future will
          be better than the past.
        </p>
        <div>
          <button className="m-2">Learn more</button>
          <button className="m-2">FAQ</button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <p className="text-center text-white text-2xl font-bold">
          Total Launches: 153
        </p>
        <p className="text-center text-white text-2xl font-bold">
          Total Landings: 113
        </p>
      </div>
    </div>
  );
};

export default Hero;
