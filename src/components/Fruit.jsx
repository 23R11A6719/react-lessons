import React from 'react';
import './App6.css'; // Assuming you're putting all styles in App6.css

export default function Fruit({ name, emoji }) {
  return (
    <div className="fruit-box">
      <span className="fruit-emoji">{emoji}</span>
      {name}
    </div>
  );
}