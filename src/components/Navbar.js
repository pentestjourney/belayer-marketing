import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import belayerlogo from "./belayermarketinglogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  return (
    <div className="w-full h-[80px] z-10 bg-blue-500 ">
      <div className="flex justify-between list-none lg:px-[14%] md:px-[12%] p-3 items-center w-full h-full pt-4">
        <li className="cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            <img
              src={belayerlogo}
              alt="logo"
              width={220}
              className="brightness-150 contrast-150  "
            />
          </Link>
        </li>

        <div className="hidden md:flex text-white text-xl font-public ">
          <li className="hover:text-[#a5dcf7] cursor-pointer">
            <Link to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-[#a5dcf7] cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About Us
            </Link>
          </li>

          <li className="hover:text-[#a5dcf7] cursor-pointer">
            <Link to="team" smooth={true} offset={50} duration={500}>
              Team
            </Link>
          </li>
        </div>

        <div className="md:hidden text-white " onClick={handleClick}>
          {!nav ? (
            <FaBars className="w-5 text-3xl mr-4   " />
          ) : (
            <FaTimes className="w-5 text-3xl mr-4 " />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-blue-500 w-full px-5 pb-8 text-white  text-xl transition ease-in duration-500   "
        }
      >
        <li>
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={50}
            duration={500}
          >
            About Us
          </Link>
        </li>

        <li>
          <Link
            onClick={handleClose}
            to="team"
            smooth={true}
            offset={50}
            duration={500}
          >
            Team
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
