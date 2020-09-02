import React, { useRef, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import './index.css';
import Spinner from '../Spinner';

function isVideoPlaying(video) {
  return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
}

const VideoPreview = ({ src, poster, isPlayState }) => {
  const videoRef = useRef(null);
  const [isImageLoaded, setImageLoadStatus] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (isPlayState) {
      video.play();
    } else if (!isPlayState && isVideoPlaying(video)) {
      video.pause();
      video.currentTime = 0;
    }
  }, [isPlayState]);

  return (
    <div className="video-container">
      <Image className="poster" src={poster} alt="video poster" onLoad={() => setImageLoadStatus(true)} style={{ opacity: isPlayState ? 0 : 1 }} />
      {!isImageLoaded && <Spinner variant="info" />}
      <video ref={videoRef} src={src} muted />
    </div>
  );
};

export default VideoPreview;
