import React from "react";

const ProofOfImpact = ({ card }) => {
  const { impactMetrics, brandLogo } = card;

  return (
    <div className="bg-pink-300 p-2 text-center shadow-lg">
      <div className="grid grid-cols-3 gap-1 text-white">
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

            <p className="text-xs font-light mt-1">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProofOfImpact;
