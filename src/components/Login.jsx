import React, { useState } from 'react';
import { auth } from './../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User logged in:', userCredential.user);
        alert('Login successful!');
        navigate('/'); // Redirect to homepage after successful login
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        alert(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <div style={{ height: '20px' }} /> {/* Empty div to create space */}
        <button type="submit">Login</button> {/* Button below password field */}
      </form>
    </div>
  );
};

export default Login;
