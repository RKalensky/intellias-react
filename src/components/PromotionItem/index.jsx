import React from 'react';
import './index.css';

const PromotionItem = ({ text }) => (
  <div className="promotion-card" data-testid="promotion-card">
    <p>{text}</p>
  </div>
);

export default PromotionItem;
