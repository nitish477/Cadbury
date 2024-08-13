import React from 'react';
import './ChocolateCard.css'; 

const ChocolateCard = ({ chocolate }) => {
  return (
    <div className="chocolate-card">
      <img src={chocolate.image} alt={chocolate.name} loading='lazy'/>
      <h2>{chocolate.name}</h2>
      <p><strong>Brand:</strong> {chocolate.brand}</p>
      <p><strong>Type:</strong> {chocolate.type}</p>
      <p><strong>Price:</strong> {chocolate.price}</p>
    </div>
  );
};

export default ChocolateCard;
