import React from "react";
import ImpactCard from "./pages/ImpactCard";
import SocialShare from "./components/SocialShare";
import CardList from "./components/CardList"; // Import renamed CardList

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 space-y-6">
      <ImpactCard />
      <SocialShare />
      <CardList />
    </div>
  );
}

export default App;
