/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

const Video = ({ src, poster }) => (
  <div className="video-container">
    <video src={src} poster={poster} controls className="w-100" />
  </div>
);

export default Video;
