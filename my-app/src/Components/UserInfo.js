import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(null);
  const [greeting, setGreeting] = useState(null);
  

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      fetchFullName(email);
    }
  });

  const fetchFullName = async (email) => {
    try {
      const response = await fetch(`http://localhost/YT_Backend/getFullName.php?email=${email}`);
      const data = await response.json();
      if (data.fullName) {
        setFullName(data.fullName);
        setRandomGreeting();
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error fetching full name:', error);
      navigate('/login');
    }
  };

  const setRandomGreeting = () => {
    const greetings = ['Hello', 'Hi', 'Greetings', 'Hey'];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(randomGreeting);
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    navigate('/login');
  };

  if (!localStorage.getItem('email')) {
    return (
      <div style={{
        zIndex:-1,
        position: 'fixed',
        right: 0,
        top: 0,
        width: '300px',
        height: '100%',
        backgroundColor: '#f4f4f4',
        boxShadow: '-2px 0 5px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '20px'
      }}>
        <p>Please log in first.</p>
        <button onClick={() => navigate('/login')} style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Login</button>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      zIndex:-1,
      right: 0,
      top: 0,
      width: '300px',
      height: '100%',
      backgroundColor: '#f4f4f4',
      boxShadow: '-2px 0 5px rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '20px'
    }}>
      {!fullName && <div>Loading...</div>}
      {fullName &&
        <>
          <h3>{greeting} {fullName},</h3>
          <h4>Email: {localStorage.getItem('email')}</h4>
          <button onClick={handleLogout} style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Logout</button>
        </>
      }
    </div>
  );
};

export default UserInfo;
