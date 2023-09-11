"use client"
"use client";

import CameraCapture from '../../components/CameraCapture';
import Login from '../../components/LoginPage';
import CameraPage from '../../components/CameraPage';

export default function Home() {

  return (
    <div>
      <h1>Camera Access Example</h1>
      {/* <Login /> */}
      {/* <CameraPage /> */}
      <CameraCapture />
    </div>
  )
};

