import React, { useRef, useCallback, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { io } from 'socket.io-client';

const LoginSchemaWS = () => {
    const webcamRef = useRef(null);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Gantilah URL WebSocket dengan URL server WebSocket Python Anda
        const socketIo = io('ws://localhost:YOUR_PYTHON_SERVER_PORT'); // Sesuaikan dengan host dan port server WebSocket Python Anda
        setSocket(socketIo);

        return () => {
            // Tutup koneksi WebSocket ketika komponen unmount
            socketIo.close();
        };
    }, []);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);

        if (socket) {
            socket.emit('image', { image: imageSrc });

            socket.on('classification', (data) => {
                console.log('Response from Python Server:', data);
                // Proses hasil klasifikasi wajah di sini
            });
        }
    }, [socket]);

    return (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                mirrored={true}
                screenshotFormat="image/jpeg"
            />
            <button onClick={capture}>Ambil Gambar</button>
        </div>
    );
};

export default LoginSchemaWS;
