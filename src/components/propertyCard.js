import React from 'react';

const PropertyCard = ({ imageUrl, propertyName, ownerName, price, city }) => {
  return (
    <div className="property-card lg:flex bg-black rounded-lg p-4 lg:p-0 m-4">
      <div className="w-full h-full md:w-1/3">
        <img src={imageUrl} alt={propertyName} className="max-w-full h-full rounded object-contain" />
      
      </div>
      <div className="p-4 lg:p-6 ">
        <h1 className="text-6xl font- mb-2">{propertyName}</h1>
        <p className="text-2xl text-red-600"><strong>Owner:</strong> {ownerName}</p>
        
        <p className="text-2xl"><strong>City:</strong> {city}</p>
        <p className="text-sm "><strong>Price:</strong> INR{price}</p>

        <button className='bg-red-600 text-white rounded-lg  p-1 m-2 w-5/12'>Buy It </button>
      </div>
    </div>
  );
};

export default PropertyCard;
