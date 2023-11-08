import React from "react";
// import ImageCarousel from "./ImageCarousel";
import ImageCarousel2 from "./ImageCarousel2";

const Slider2 = () => {
  const images = [
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1698942945/codeHelp/kjtv7uokqs3obmelpcyt.webp",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1698942945/codeHelp/vgqzz6vauxvmp8khumho.webp",
    "https://res.cloudinary.com/dpok16gsr/image/upload/v1698942946/codeHelp/ryilglukwipyliyvkzrw.jpg",
    // Add more image URLs here
  ];

  return <ImageCarousel2 images={images} />;
};

export default Slider2;
