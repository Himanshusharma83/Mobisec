import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import your CSS stylesheet

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State to track login error

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    // Replace these dummy credentials with your own
    const dummyUsername = 'user123';
    const dummyPassword = 'pass123';

    if (username === dummyUsername && password === dummyPassword) {
      // Login successful
      onLogin();
      localStorage.setItem('isLoggedIn', 'true'); // Store login state
      navigate('/');
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder='Enter Username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
