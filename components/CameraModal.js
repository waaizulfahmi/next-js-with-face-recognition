// components/CameraModal.js
import React, { useRef } from 'react';
import Modal from 'react-modal';
import Webcam from 'react-webcam';

// Modal.setAppElement('#__next'); // Set root element for Modal

const CameraModal = ({ isOpen, onRequestClose }) => {
  const webcamRef = useRef(null);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Camera Modal"
    >
      <Webcam
        audio={false}
        ref={webcamRef}
        mirrored={true}
        screenshotFormat="image/jpeg"
      />
    </Modal>
  );
};

export default CameraModal;
