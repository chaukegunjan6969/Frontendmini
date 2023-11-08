import axios from "axios";
import { Toast } from "bootstrap";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Loginform = ({ SetLoggedin }) => {
  const navigate = useNavigate();

  const [formdata, Setformdata] = useState({ email: "", password: "" });
  const [Showpassword, SetShowpassword] = useState(false);

  function loginchangehandler(event) {
    Setformdata((prevstate) => ({
      ...prevstate,
      [event.target.name]: event.target.value,
    }));
  }

  function SubmitHandler(event) {
    event.preventDefault();

    // Create an object with the email and password from your formdata state
    const userData = {
      email: formdata.email,
      password: formdata.password,
    };

    // Send a POST request to your server using Axios
    axios
      .post("http://localhost:3000/api/v2/Minilogin", userData)
      .then((response) => {
        // Handle the response from the server as needed
        console.log("Response from server:", response.data);

        // Assuming the login was successful, set the user as logged in
        SetLoggedin(true);

        // Show a success toast message
        toast.success("Logged In");

        // Navigate to the dashboard page
        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error sending the request:", error);

        // Show an error toast message
        toast.error("Login failed. Please try again.");
      });
  }

  return (
    <form onSubmit={SubmitHandler} className="flex flex-col w-full gap-y-4 mt-6">
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          type="text"
          placeholder="Enter email Address"
          required
          value={formdata.email}
          onChange={loginchangehandler}
          name="email"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        />
      </label>

      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          type={Showpassword ? "text" : "password"}
          placeholder="Enter password"
          required
          value={formdata.password}
          onChange={loginchangehandler}
          name="password"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        />
        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
            forgot password
          </p>
        </Link>
      </label>

      <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
        Log in
      </button>
    </form>
  );
};

export default Loginform;
