"use client"
import React, { useState } from 'react';
import LoginSchema from '../../components/LoginSchema';
import RegisterSchema from '../../components/RegisterSchema';

const IndexPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
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
