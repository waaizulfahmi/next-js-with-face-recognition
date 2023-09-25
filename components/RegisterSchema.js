
import React, { useRef, useCallback, useState, useEffect } from 'react';
import Webcam from 'react-webcam';

const RegisterSchema = () => {

    const webcamRef = useRef(null);
    const [capturedImages, setCapturedImages] = useState([]);
    const [userInput, setUserInput] = useState('');
  
    const handlePrompt = () => {
        const userInput = prompt('Masukkan nama anda:');
        if (userInput !== null) {
            setUserInput(userInput);
        }
    };
    
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        
        // Menambahkan gambar yang baru dicapture ke dalam array
        setCapturedImages(prevImages => [...prevImages, imageSrc]);
        
    }, []);
    
    const resetState = () => {
        setCapturedImages([]);
    }

    const dataReg= {
        name : userInput,
        images : capturedImages,
    }
    

    const sendImagesToEndpoint = () => {
        // Mengirim array gambar ke endpoint
        console.log(capturedImages);
        fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataReg),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response from Laravel API:', data);
            })
            .catch(error => {
                console.error('Error sending images to Laravel API:', error);
            });
            // resetState();

        };
        useEffect  (() =>{
            setTimeout(captureImage, 1200);
            
        })
        
        const captureImage = () => {
            if (capturedImages.length <10) {
                setTimeout(() => {
                    capture();
                }, 500);
                
            } else if (capturedImages.length === 10 && userInput === '') {
                handlePrompt();
            } else if (capturedImages.length === 10 && userInput  !== '') {
                setTimeout(sendImagesToEndpoint, 1000);
            }
        };
    return (
        <>
            <div>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    mirrored={true}
                    screenshotFormat="image/jpeg"
                />
                <button onClick={capture}>Ambil Gambar</button>
                <button onClick={sendImagesToEndpoint}>Kirim Gambar ke Endpoint</button>
            </div>
        </>
    );
};

export default RegisterSchema;

