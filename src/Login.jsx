import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  // State variables to store username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission (simulate login for now)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create form data object
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    console.log(formData);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/token`, {method: 'POST', body: formData})
    .then((response) => {
      if (!response.ok) {
        alert('Wrong username or password')
        throw new Error(`Login failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Login successful:', data);
      localStorage.setItem('token', data.access_token);
      // Handle successful login (e.g., redirect to another page)
      navigate('/');
    })
    .catch((error) => {
      console.error('Login error:', error);
      // Handle login errors (e.g., display an error message)
    });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;