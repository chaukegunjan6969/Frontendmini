import React, { Component } from "react";
import Typewriter from "./Typewriter";

class ImageCarousel extends Component {
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
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex}`}
            className="w-full h-full rounded-2xl"
          />
        </div>

        <div className="w-2/4 h-5/6 overflow-hidden mx-4">
          <Typewriter
            text="Why PropInvesto ?"
            speed={60}
            delay={1000}
            className="text-4xl text-amber-400 font-semibold p-4 rounded-lg "
          />
          

          <Typewriter
            text=" There are various problems with the traditional working of the Real
            Estate industry. Real Estate investments are dominated by either
            institutional investors or by ultra-high-net-worth individuals like
            large real estate companies, pension funds or investment trusts.
            This restrictive access prevents ordinary people to profit from
            growing returns on investments. There will be several brokers,
            lawyers and financial institutions included in this process who adds
            a layer of complexity and often charges fees or commissions."
            speed={60}
            delay={1000}
            className="text-lg text-white p-4 rounded-lg "
          ></Typewriter>
        </div>
      </div>
    );
  }
}

export default ImageCarousel;
