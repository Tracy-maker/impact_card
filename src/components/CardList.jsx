import React, { useState } from "react";

const CardList = () => {
  const totalItems = 5; // Number of items in the card list
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* Left Navigation Button */}
      <button
        onClick={goToPrev}
        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-blue-400"
      >
        &lt;
      </button>

      {/* Card Indicators */}
      <div className="flex space-x-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <div
            key={index}
            className={`w-8 h-12 rounded-lg border ${
              index === currentIndex ? "bg-white shadow-md" : "bg-transparent border-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Right Navigation Button */}
      <button
        onClick={goToNext}
        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-blue-400"
      >
        &gt;
      </button>
    </div>
  );
};

export default CardList;
