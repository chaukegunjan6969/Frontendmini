import React, { useState } from "react";
import PropertyCard from "./propertyCard";


const Properties = () => {


  const [monodata, setmongodata] = useState(null);

  async function datagetter() {
    console.log("Funtion called");

    

    try {
      const response = await fetch(
       ` http://localhost:4000/api/v1/upload/allproperties`
      );
      const data = await response.json();

      // setrealData(data.success)
      const realData = data.success;


      console.log("gunjan");
      console.log(realData);
      setmongodata(realData);
      console.log("Chuake");
      console.log(monodata);
      
      
    } catch (error) {
      alert(error);
    }
  }



  // function test() {
  //   console.log("test funtion callled");
  // }

  return (
    <div className="flex flex-col justify-center items-center text-white  text-3xl h-full">
     

      <button onClick={datagetter}  class="bg-yellow-600 text-white p-4 rounded-lg hover:bg-amber-400 hover:text-black"> Refresh </button>

      <div className="w-screen h-auto min-h-screen bg-black flex flex-col justify-around">
            {monodata && 
              monodata.map((data)=>{
                return <PropertyCard imageUrl={data.imageurl} propertyName={data.nameofproperty} ownerName={data.ownerName} price={data.price} city={data.city} />
              })
            }
      
      </div>
       

    </div>
  );
};

export default Properties;
