import React, { useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
// import { Button } from 'antd'; // You can use any UI library for the button

const WebcamCapture = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  }, [webcamRef, onCapture]);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Ambil Gambar</button>
    </div>
  );
};

export default WebcamCapture;
