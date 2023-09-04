// pages/api/CameraCapture.js

import React, { useRef, useState } from 'react';

export default function CameraCapture() {
  const videoRef = useRef(null);
  const [imageData, setImageData] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0);

    const dataURL = canvas.toDataURL('image/jpeg');
    setImageData(dataURL);

    // Kirim gambar ke API endpoint
    fetch('http://127.0.0.1:8000/api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: dataURL }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data);
        // Lakukan apa yang Anda butuhkan dengan respons dari API di sini
      })
      .catch((error) => {
        console.error('Error sending image to API:', error);
      });
  };

  return (
    <div>
      <button onClick={startCamera}>Aktifkan Kamera</button>
      <button onClick={captureImage}>Ambil Gambar</button>
      <video ref={videoRef} autoPlay playsInline ></video>
      {imageData && <img src={imageData} alt="Gambar dari Kamera" />}
    </div>
  );
}
