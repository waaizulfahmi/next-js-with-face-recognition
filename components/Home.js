// pages/api/CameraCapture.js
// pages/CameraCapture.js

import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';
import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <>
        <button type="button" onClick={() => router.push('/loginschema')}>
        Login Schema (exprerimental)
        </button>
        <button type="button" onClick={() => router.push('/registerschema')}>
        Register Schema (exprerimental)
        </button>
    
    </>
  )
}