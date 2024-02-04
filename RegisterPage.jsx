// RegisterPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { Link, Route, Routes } from 'react-router-dom';
import './app.css'; // Import the app.css file
//import ProductPage from './ProductPage';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // eslint-disable-next-line

  const handleRegister = () => {
    // Add your registration logic here
    // This is just a placeholder, you may need to make an API call to register the user

    console.log('User registered:', { username, password });

    // Redirect to the login page after successful registration
    navigate('/login');
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
