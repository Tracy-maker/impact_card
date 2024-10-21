import React from 'react';

const ImpactDescription = ({ description }) => {
  return (
    <div className="p-6 mt-6">
      <p className="text-3xl text-white font-semibold">{description}</p>
    </div>
  );
};

export default ImpactDescription;
