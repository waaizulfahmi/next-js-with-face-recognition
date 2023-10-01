// pages/api/CameraCapture.js
// pages/CameraCapture.js
import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import Popup from "reactjs-popup"; // Import komponen pop-up

const LoginSchema = () => {
  const webcamRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);

    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageSrc }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from Laravel API:", data);
      })
      .catch((error) => {
        console.error("Error sending image to Laravel API:", error);
      });
  }, []);

  const openCamera = () => {
    setIsCameraOpen(true);
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  return (
    <>
      <div>
        {isCameraOpen ? (
          <Popup // Menggunakan komponen pop-up
            closeBtn={true}
            closePopup={closeCamera}
            open={isCameraOpen}
            modal
            nested
          >
            <div className="camera-popup">
              <Webcam
                audio={false}
                ref={webcamRef}
                mirrored={true}
                screenshotFormat="image/jpeg"
              />
              <button onClick={capture}>Ambil Gambar</button>
              <button onClick={closeCamera}>Tutup Kamera</button>
            </div>
          </Popup>
        ) : (
          <button onClick={openCamera}>Buka Kamera</button>
        )}
      </div>
    </>
  );
};

export default LoginSchema;

// import React, { useRef, useCallback, useState } from 'react';
// import Webcam from 'react-webcam';

// const LoginSchema = () => {
//     const webcamRef = useRef(null);

//     const capture = useCallback(() => {
//         const imageSrc = webcamRef.current.getScreenshot();
//         console.log(imageSrc);

//         fetch('http://127.0.0.1:8000/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ image : imageSrc }),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Response from Laravel API:', data);
//             })
//             .catch(error => {
//                 console.error('Error sending image to Laravel API:', error);
//             });
//     }, []);

//     return (
//         <>

//             <div>
//                 <Webcam
//                     audio={false}
//                     ref={webcamRef}
//                     mirrored={true}
//                     screenshotFormat="image/jpeg"
//                 />
//                 <button onClick={capture}>Ambil Gambar</button>
//             </div>
//         </>
//     );
// };

// export default LoginSchema;
