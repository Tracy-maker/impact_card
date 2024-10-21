import React from "react";

const CardImage = ({ imageUrl, altText }) => {
  return (
    <div className="relative w-full h-80 ">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-pink-400 bg-opacity-30"></div>{" "}
    </div>
  );
};

export default CardImage;
