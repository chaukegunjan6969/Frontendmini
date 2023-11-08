import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed, delay, className }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed]);

  useEffect(() => {
    // Add a delay before starting the typewriter effect
    const delayTimer = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayText("");
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  return (
    <div className={className} >
      {displayText}
    </div>
  );
};

export default Typewriter;
