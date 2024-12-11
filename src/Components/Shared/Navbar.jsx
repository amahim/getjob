import React from "react";
import { Link } from "react-router-dom";
import navIcon from '../../assets/navIcon.png'

const Navbar = () => {
  const links = (
    <>
      <Link className="text-lg" to="/">
        Home
      </Link>
    </>
  );

  return (
    <div className="py-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className=" text-xl md:text-2xl lg:text-3xl font-bold flex items-center">
            <img src={navIcon} alt="" className="w-10" />
            Get<span className="text-primary">Job</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-8">
          <Link to="/signup" className="text-primary underline hidden md:block">
            Sign Up
          </Link>
          <Link to="/signin" className="btn btn-primary text-white">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
