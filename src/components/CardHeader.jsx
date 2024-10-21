import React from "react";

const CardHeader = ({ brandLogo, brandName }) => {
  return (
    <div className="absolute top-14 left-14 z-10 bg-white rounded-full p-6 shadow-lg">
      {" "}
      <img
        src={brandLogo}
        alt={`${brandName} logo`}
        className="w-8 h-8 object-cover rounded-full"
      />
    </div>
  );
};

export default CardHeader;
