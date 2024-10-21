import React from "react";

const CardHeader = ({ brandLogo, brandName }) => {
  return (
    <div className="absolute top-4 left-2 z-10 bg-white rounded-full p-5 shadow-lg">
      {" "}
      <img
        src={brandLogo}
        alt={`${brandName} logo`}
        className="w-16 h-16 object-contain"
      />
    </div>
  );
};

export default CardHeader;
