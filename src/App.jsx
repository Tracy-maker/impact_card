import React, { useState } from "react";
import ImpactCard from "./page/ImpactCard";
import CardList from "./components/CardList";
import cardData from "./utils/cardData";
import SocialShare from "./components/SocialShare";

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleCardChange = (index) => {
    setCurrentCardIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 space-y-6">
      <ImpactCard card={cardData[currentCardIndex]} />

      <CardList totalItems={cardData.length} onCardChange={handleCardChange} />
      <SocialShare />
    </div>
  );
}

export default App;
