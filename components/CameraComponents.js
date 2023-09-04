"use client";

import { useState, useEffect } from 'react';

const CameraComponent = () => {
  const [stream, setStream] = useState(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(mediaStream);
      } catch (error) {
        console.error('Error accessing the camera:', error);
      }
    }

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      {stream ? (
        <video
          autoPlay
          playsInline
          muted
          style={{ width: '50%', maxHeight: '50%' }}
          ref={video => {
            if (video) {
              video.srcObject = stream;
            }
          }}
        />
      ) : (
        <p>Waiting for camera access...</p>
      )}
    </div>
  );
};

export default CameraComponent;
