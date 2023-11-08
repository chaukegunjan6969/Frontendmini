import React from "react";
import ImageCarousel from "./ImageCarousel";

const Slider = () => {
  const images = [
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1698751177/codeHelp/ssa3srrp4nokvvk0lobf.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1698751097/codeHelp/toimd8ir5hxuedijilxs.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1698751090/codeHelp/u1pv6htxdcyutuk5bit1.png",
    // Add more image URLs here
  ];

  return <ImageCarousel images={images} />;
};

export default Slider;
