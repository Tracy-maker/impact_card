import React from "react";
import CardHeader from "../components/CardHeader";
import CardImage from "../components/CardImage";
import ImpactDescription from "../components/ImpactDescription";
import ProofOfImpact from "../components/ProofOfImpact";
import Rewards from "../components/Rewards";
import SocialShare from "../components/SocialShare";
import cardData from "../utils/cardData";

const ImpactCard = () => {
  const { brandLogo, brandName, imageUrl, description } = cardData;

  return (
    <div className="relative max-w-sm mx-auto shadow-lg overflow-hidden rounded-lg">
      <CardHeader brandLogo={brandLogo} brandName={brandName} />

      {/* Main content */}
      <div className="relative">
        <CardImage imageUrl={imageUrl} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent p-4">
          <ImpactDescription description={description} />
        </div>
      </div>

      {/* Additional Sections */}
      <ProofOfImpact />
      <Rewards />
      <SocialShare />
    </div>
  );
};

export default ImpactCard;
