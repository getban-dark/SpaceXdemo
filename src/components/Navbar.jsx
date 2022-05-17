import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/spacex.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-full h-[60px] bg-black ">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <img
            className="h-[50-px] w-[200px] md:w-[280px]"
            src={Logo}
            alt="/"
          />
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <div>
              <Link to="about" smooth={true} offset={50} duration={1000}>
                <li>Falcon 9</li>
              </Link>
            </div>
            <div>
              <Link to="about" smooth={true} offset={50} duration={1000}>
                <li> Falcon Heavy</li>
              </Link>
            </div>
            <div>
              <Link to="about" smooth={true} offset={50} duration={1000}>
                <li> Dragon</li>
              </Link>
            </div>
            <div>
              <Link to="about" smooth={true} offset={50} duration={1000}>
                <li> Starship</li>
              </Link>
            </div>
            <div>
              <Link to="starlink" smooth={true} offset={30} duration={1000}>
                <li> Starlink</li>
              </Link>
            </div>

            <li className="ml-10 hover:border-y ">Shop</li>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center md:hidden"
              : "hidden"
          }
        >
          <ul>
            {/* text-2xl */}
            <div>
              <Link
                onClick={handleClose}
                to="about"
                smooth={true}
                offset={50}
                duration={1000}
              >
                <li className="text-2xl">Falcon 9</li>
              </Link>
            </div>
            <div>
              <Link
                onClick={handleClose}
                to="about"
                smooth={true}
                offset={500}
                duration={1000}
              >
                <li className="text-2xl"> Falcon Heavy</li>
              </Link>
            </div>
            <div>
              <Link
                onClick={handleClose}
                to="about"
                smooth={true}
                offset={900}
                duration={1000}
              >
                <li className="text-2xl"> Dragon</li>
              </Link>
            </div>
            <div>
              <Link
                onClick={handleClose}
                to="about"
                smooth={true}
                offset={1200}
                duration={1000}
              >
                <li className="text-2xl"> Starship</li>
              </Link>
            </div>
            <div>
              <Link
                onClick={handleClose}
                to="starlink"
                smooth={true}
                offset={30}
                duration={1000}
              >
                <li className="text-2xl"> Starlink</li>
              </Link>
            </div>
            <li onClick={handleClose} className="text-2xl">
              Shop
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
