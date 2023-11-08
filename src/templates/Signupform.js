import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';

const Signupform = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showpassword, SetShowpassword] = useState(false);

  // const [accttype, setaccttype] = useState("student");

  function changeHandler(event) {
    setFormdata((prevstate) => ({
      ...prevstate,
      [event.target.name]: event.target.value,
    }));
  }
  function SubmitHHandler(event) {
    event.preventDefault();

    const userData = {
      firstName: formdata.firstname,
      lastName: formdata.lastname,
      email: formdata.email,
      password: formdata.password,
    };

    axios
      .post("http://localhost:3000/api/v2/MiniSignup", userData)
      .then((response) => {
        console.log("response from server", response.data);

        toast.success("Registered succesfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error sending the request :", error);
        toast.error("Login failed. please try again");
      });
  }

  return (
    <form onSubmit={SubmitHHandler}>
      <div className="flex gap-x-4 justify-between">
        <label>
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            FirstName <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="text"
            placeholder="Enter firstname"
            required
            name="firstname"
            onChange={changeHandler}
            value={formdata.firstname}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          ></input>
        </label>

        <label>
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            lastname <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="text"
            placeholder="lastname"
            required
            name="lastname"
            value={formdata.lastname}
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          ></input>
        </label>
      </div>

      <label>
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          type="email"
          placeholder="lastnam"
          required
          name="email"
          value={formdata.email}
          onChange={changeHandler}
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        ></input>
      </label>

      <div className="flex gap-x-4 justify-between">
        <label>
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            password <sup className="text-pink-200"> *</sup>
          </p>
          <input
            type={showpassword ? "text" : "password"}
            placeholder="password"
            required
            name="password"
            value={formdata.password}
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          ></input>
          {/* <span onClick={changeshowpass}> {showpassword?{AiOutlineEyeInvisible}:{AiOutlineEye}}</span> */}
        </label>

        <label>
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Confirm password <sup className="text-pink-200">*</sup>
          </p>
          <input
            type={showpassword ? "text" : "password"}
            placeholder="confirm password"
            required
            name="confirmpassword"
            value={formdata.confirmpassword}
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          ></input>
          {/* <span onClick={changeshowpass}> {showpassword?{AiOutlineEyeInvisible}:{AiOutlineEye}}</span> */}
        </label>
      </div>

      <button className="bg-yellow-50 rounded-[8px] w-full font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
        Create button
      </button>
    </form>
  );
};

export default Signupform;
