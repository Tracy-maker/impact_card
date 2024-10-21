import React from "react";
import cardData from "../utils/cardData";

const CardImage = ({ imageUrl, altText }) => {
  const { backgroundOverlayColor } = cardData;

  return (
    <div className="relative w-full h-80">
      <img src={imageUrl} alt={altText} className="w-full h-full object-fill" />

      <div
        className={`absolute inset-0 ${backgroundOverlayColor} bg-opacity-30`}
      ></div>
    </div>
  );
};

export default CardImage;
