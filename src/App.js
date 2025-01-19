import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import DoctorList from './DoctorList'; // Importing the doctor list page
import ProfileBar from './ProfileBar'; // Importing the profile bar

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email) {
      setIsLoggedIn(true); // Set the user as logged in
      navigate('/doctors'); // Redirect to the doctor list page
    }
  };
  return (
    <div className="HealthSched">
      <header className="App-header">
        {!isLoggedIn ? (
          <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <button type="submit" className="login-button">Login</button>
            </form>
          </>
        ) : (
          <>
            <ProfileBar username={username} />
            <Routes>
              <Route path="/doctors" element={<DoctorList />} />
            </Routes>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
