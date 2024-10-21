import React from "react";
import cardData from "../utils/cardData";

const ProofOfImpact = () => {
  const { brandLogo, impactMetrics } = cardData;

  return (
    <div className="bg-pink-300 p-2 text-center shadow-lg">
      <div className="grid grid-cols-3 gap-2 text-white">
        {impactMetrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center p-1">
            <div className="flex items-center">
              {metric.icon ? (
                <metric.icon className="text-2xl mb-1" />
              ) : (
                <img src={brandLogo} alt="Brand Logo" className="w-15 h-7" />
              )}
              <p className="text-base font-bold ml-2">{metric.value}</p>
            </div>

            <p className="text-sm font-light mt-1">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-1 pb-3 pt-1 border-t border-pink-200 text-xs flex items-center justify-center">
        <div className="bg-white p-1 rounded-full text-white shadow-md flex items-center justify-center w-8 h-8 relative -top-5">
          <img
            src={brandLogo}
            alt="Brand Logo"
            className="w-6 h-6 object-contain"
          />
        </div>
        <span className="text-white ml-2 mb-4 ">
          Made possible by{" "}
          <span className="font-bold text-white">Our Fans</span>
        </span>
      </div>
    </div>
  );
};

export default ProofOfImpact;
