import React, { Component } from "react";
import Typewriter from "./Typewriter";

class ImageCarousel2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images, // An array of image URLs
      currentIndex: 0, // Index of the currently displayed image
    };
  }

  componentDidMount() {
    // Start auto-sliding when the component mounts
    this.autoSlideInterval = setInterval(this.nextImage, 5000); // Adjust the interval as needed
  }

  componentWillUnmount() {
    // Clear the auto-slide interval when the component unmounts to prevent memory leaks
    clearInterval(this.autoSlideInterval);
  }

  nextImage = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.state.images.length,
    }));
  };

  render() {
    const { images, currentIndex } = this.state;

    return (
      <div className="flex flex-row justify-around my-8 w-full min-h-full mx-0">
        <div className="w-2/4 h-5/6 overflow-hidden mx-4">
          <Typewriter
            text="What Are the Benifits Of PropInvesto ?"
            speed={60}
            delay={1000}
            className="text-4xl text-amber-400 font-semibold p-4 rounded-lg "
          />
          <Typewriter
            text="Corruption: Without transparency, there's a higher risk of corrupt practices, such as bribery or 
           under-the-table deals, occurring in real estate transactions.
           • Tax Evasion: The lack of transparent financial records can enable tax evasion, where property 
           owners may underreport their income or assets to evade taxes.
           • Illegal Money Transfers: Real estate transactions can be used as a vehicle for money 
           laundering and illegal money transfers due to the difficulty of tracking funds in opaque 
           transactions."
            speed={60}
            delay={1000}
            className="text-lg text-white  p-4 rounded-lg "
          />
        </div>

        <div className="w-2/4 h-5/6 overflow-hidden mx-4">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex}`}
            className="w-full h-full rounded-2xl"
          />
        </div>
      </div>
    );
  }
}

export default ImageCarousel2;
