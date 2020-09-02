import React, { useState } from 'react';
import './index.css';
import VideoPreview from '../VideoPreview';

const ProductItem = ({
  name, vendor, videoUrl, posterUrl,
}) => {
  const [isMouseOver, setMouseOver] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => { setMouseOver(true); }}
      onMouseLeave={() => { setMouseOver(false); }}
    >
      <VideoPreview poster={posterUrl} src={videoUrl} isPlayState={isMouseOver} />
      <p className="name">{name}</p>
      <p className="vendor">{vendor}</p>
    </div>
  );
};

export default ProductItem;
