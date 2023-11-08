import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";
import {FcHome} from "react-icons/fc";

function Navbar(props) {
  let Loggedin = props.Loggedin;
  let SetLoggedin = props.SetLoggedin;

  return (
    <div className="flex justify-evenly items-center w-full  py-4 mx-auto bg-richblack-900 ">
      <Link to="/">
    
          <h1 className="text-white text-4xl font-bold flex"> <span className="m-1">  <FcHome></FcHome></span>PropInvest.com</h1>
      </Link>
      <nav>
        <ul className="flex gap-x-6 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/properties">Properties</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center  gap-x-4">
        {!Loggedin && (
          <Link to="/login">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Login
            </button>
          </Link>
        )}
        {!Loggedin && (
          <Link to="/signup">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign Up
            </button>
          </Link>
        )}
        {Loggedin && (
          <Link to="/">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
              onClick={() => {
                SetLoggedin(false);
                toast.success("Logged out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {Loggedin && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
