import React from "react";
import CardHeader from "../components/CardHeader";
import CardImage from "../components/CardImage";
import ImpactDescription from "../components/ImpactDescription";
import ProofOfImpact from "../components/ProofOfImpact";
import Rewards from "../components/Rewards";

const ImpactCard = ({ card }) => {
  const { brandLogo, brandName, imageUrl, description } = card;

  return (
    <div className="relative max-w-80 mx-auto shadow-lg overflow-hidden rounded-lg">
      <CardHeader brandLogo={brandLogo} brandName={brandName} />

      {/* Main content */}
      <div className="relative">
        <CardImage imageUrl={imageUrl} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent p-4">
          <ImpactDescription description={description} />
        </div>
      </div>

      {/* Additional Sections */}
      <ProofOfImpact card={card} />
      <Rewards card={card} />
    </div>
  );
};

export default ImpactCard;
