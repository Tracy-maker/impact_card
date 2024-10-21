import React, { useState } from "react";

const CardList = ({ totalItems, onCardChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleItemsCount = 6;

  const startIndex =
    Math.floor(currentIndex / visibleItemsCount) * visibleItemsCount;
  const endIndex = Math.min(startIndex + visibleItemsCount, totalItems);

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = startIndex; i < endIndex; i++) {
      visibleItems.push(i);
    }
    return visibleItems;
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % totalItems;
    setCurrentIndex(newIndex);
    onCardChange(newIndex);
  };

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onCardChange(newIndex);
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
        {getVisibleItems().map((index) => (
          <div
            key={index}
            className={`w-8 h-12 rounded-lg border ${
              index === currentIndex
                ? "bg-white shadow-md"
                : "bg-transparent border-gray-300"
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
