import React from "react";
import cardData from "../utils/cardData";

const Rewards = () => {
  const { rewards, progress } = cardData;

  return (
    <div className="flex justify-between items-center p-4 bg-pink-300 rounded-b-lg">
      <p className="text-white text-sm">
        {progress.current}/{progress.total}
      </p>

      <p className="text-white text-sm mr-4">Rewards</p>

      <div className="flex space-x-2">
        {rewards.map((reward, index) => (
          <div key={index} className="relative">
            <reward.icon className="text-white text-2xl" />{" "}
            <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] rounded-full px-1">
              {reward.number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
