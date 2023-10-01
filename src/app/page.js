"use client"

// import WebcamComponent from '../../components/WebcamComponent';

// const HomePage = () => {
//   return (
//     <div>
//       <h1>Webcam Example</h1>
//       <WebcamComponent />
//     </div>
//   );
// };

// export default HomePage;


// import React from 'react';
// // import WebcamCapture from './WebcamCapture';
// // import WebSocket from 'ws';
// import WebcamCapture from '../../components/WebcamCapture';

// const socket = new WebSocket('ws://localhost:8765'); // Replace with your server details

// const App = () => {
//   const handleCapture = (imageData) => {
//     socket.send(imageData);
//   };

//   return (
//     <div>
//       <WebcamCapture onCapture={handleCapture} />
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react';
import LoginSchema from '../../components/LoginSchema';
import RegisterSchema from '../../components/RegisterSchema';
// import LoginSchemaWS from '../../components/LoginSchemaWS';

const IndexPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    // <LoginSchemaWS />
     <div>
       <h1>Selamat Datang di Aplikasi Next.js</h1>

      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? 'Tutup Login' : 'Buka Login'}
      </button>

      <button onClick={() => setShowRegister(!showRegister)}>
        {showRegister ? 'Tutup Register' : 'Buka Register'}
      </button>

      {showLogin && <LoginSchema />}
      {showRegister && <RegisterSchema />}
    </div>
  );
};

export default IndexPage;
