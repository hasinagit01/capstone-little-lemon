import React from 'react';
import './Badge.css'; 

const Badge = ({ count }) => {
  return (
    <div className="icon-container">
      <span className="badge">{count}</span>
    </div>
  );
};

export default Badge;
