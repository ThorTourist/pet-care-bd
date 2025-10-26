import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/images/logo.png"

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/home" className="m-2 font-semibold">
        Home
      </NavLink>
      <NavLink to="/service" className="m-2 font-semibold">
        Service
      </NavLink>
      <NavLink to="/myprofile" className="m-2 font-semibold">
        My Profie
      </NavLink>
    </>
  ); 

  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-10">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-0">
          <NavLink
            to="/home"
            className="btn btn-ghost text-xl inter text-purple-800 font-bold"
          >
            <img className="h-8 w-8" src={logoImg} alt="" />
            Pet CARe Hospital
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/wintertips">
          <button className="btn btn-outline hover:bg-gray-500 bg-purple-900 text-sm text-white p-1 md:px-4">
            {" "}
            WinterTips
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
