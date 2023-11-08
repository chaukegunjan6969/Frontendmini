import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterProp = () => {
  const [Loggedin, SetLoggedin] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitRegistration = async (data) => {
    try {
      const formData = new FormData();
      formData.append('imageFile', data.image[0]); // Assuming 'image' is the name of the field in your API

      // Add other form fields to the formData object if needed
      formData.append('nameofproperty', data.nameofproperty);
      formData.append('ownerName', data.ownerName);
      formData.append('city', data.city);
      formData.append('price ', data.price );

      const response = await axios.post(
        'http://localhost:4000/api/v1/upload/miniuploadImage',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Use 'multipart/form-data' for file uploads
          },
        }
      );

      if (response.status === 200) {
        console.log('Form submitted successfully.');
        navigate('/');
      } else {
        console.error('Error submitting form:', response.statusText);
        // Handle error gracefully, e.g., display an error message to the user.
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle network errors or other exceptions.
    }
  };

  return (
    <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="md:w-1/2">
        <img
          src="https://res.cloudinary.com/dpok16gsr/image/upload/v1698955819/samples/landscapes/v60raoqbnddiicydiqsy.jpg"
          // src='https://www.istockphoto.com/vector/woman-holding-keys-from-house-for-sale-and-smiling-gm1263319152-369760042'
          alt="Your Image"
          className="w-full h-full object-fit"
        />
      </div>
      <div className="md:w-1/2 md:ml-4">
        <form
          onSubmit={handleSubmit(submitRegistration)}
          className="max-w-lg mx-auto  bg-neutral-800 rounded-lg shadow-lg px-8 py-6 mb-4"
        >
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">
              Name of Property
            </label>
            <input
              type="text"
              id="nameofproperty"
              placeholder="eg. Mannat"
              className="border rounded-lg px-3 py-2 w-full"
              {...register('nameofproperty')}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="lastName">
              Owner Name
            </label>
            <input
              type="text"
              id="ownerName"
              placeholder="e.g. Samir Shah"
              className="border rounded-lg px-3 py-2 w-full"
              {...register('ownerName')}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="collegeName">
              City
            </label>
            <input
              type="text"
              id="city"
              placeholder="e.g.Mumbai"
              className="border rounded-lg px-3 py-2 w-full"
              {...register('city')}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="mobileNumber">
              Price
            </label>
            <input
              type="text"
              id="price "
              placeholder="e.g.250000"
              className="border rounded-lg px-3 py-2 w-full"
              {...register('price ')}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
              Upload an Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="border rounded-lg px-3 py-2 w-full"
              {...register('image')}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-red-500 hover-bg-red-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterProp;
