import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-black">
        <div className=" px-6 py-4 uppercase bg-black flex flex-col w-full mx-auto justify-between sm:flex-row text-center text-gray-600">
          <p>SpaceX-demo © 2022</p>
          <div className="flex justify-between sm:w-[450px] sm:pt-0 pt-4 text-2xl ">
            <div className="pl-5 hover:text-white">
              <FaTwitter />
            </div>
            <div className="pl-5 hover:text-white">
              <FaFacebook />
            </div>
            <div className="pl-5 hover:text-white">
              <FaGithub />
            </div>
            <div className="pl-5 hover:text-white">
              <FaInstagram />
            </div>
            <div className="pl-5 hover:text-white">
              <FaTwitch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
