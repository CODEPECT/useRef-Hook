import React, { useRef, useEffect } from 'react';
import video from './video.mp4';
export default function Dom() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Automatically play the video when the component mounts
    videoRef.current.play();
  }, []);

  return (
    <div>
      <video ref={videoRef} width="600" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}