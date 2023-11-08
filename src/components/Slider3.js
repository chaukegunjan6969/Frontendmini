import React from "react";
import ImageCarousel from "./ImageCarousel";
import ImageCarousel3 from "./ImageCarousel3";

const Slider3 = () => {
  const images = [
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1693392856/samples/landscapes/architecture-signs.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1693392862/samples/landscapes/nature-mountains.jpg",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1693392862/samples/landscapes/nature-mountains.jpg",
    // Add more image URLs here
  ];

  return <ImageCarousel3 images={images} />;
};

export default Slider3;
