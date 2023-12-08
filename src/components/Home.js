import React from "react";
// import UncontrolledExample from './UncontrolledExample'

import Slider from "./Slider";
import Typewriter from "./Typewriter";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import ContractInteraction from "./ContractInteraction";
import { Contract } from "ethers";
import ContractInter from "./ContractInter";

const Home = () => {
  return (
    <div className="flex flex-col justify-around items-center text-white text-3xl h-auto p-6 ">
      {/* <p>WELCome to PropInvesto</p> */}

      <Slider></Slider>
      <Slider2></Slider2>
      <Slider3></Slider3>

      {/* <ContractInteraction></ContractInteraction> */}
      {/* <hr className="border-red-800"></hr> */}
      {/* <ContractInter></ContractInter> */}
    </div>


  );
};

export default Home;
