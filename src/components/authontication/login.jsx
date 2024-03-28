import React, { useState } from 'react';
import './LoginPage.css'; // Import your CSS file

function LoginPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement your login logic here (e.g., API call)
    // Check for valid credentials and handle errors appropriately

    // Example login logic (replace with your actual implementation)
    if (username === 'admin' && email === 'admin@example.com') {
      // Login successful
      console.log('Login successful!');
      // Redirect to the protected page or handle success
    } else {
      setErrorMessage('Invalid username or email');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
}

export default LoginPage;