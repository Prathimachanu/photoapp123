import React, { useState } from 'react';
import { auth } from './../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import CSS file

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User registered:', userCredential.user);
        alert('Registration successful! Redirecting to login...');
        navigate('/signin'); // Redirect to login page after successful registration
      })
      .catch((error) => {
        console.error('Error registering:', error);
        alert(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>Email<br /></label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password<br /></label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
         <div style={{ height: '20px' }} /> 
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
